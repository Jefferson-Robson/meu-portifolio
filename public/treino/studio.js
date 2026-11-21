'use strict';
(() => {
  const $=id=>document.getElementById(id);
  const poster=$('poster'), distance=$('distance');
  const durationInputs=[$('durationHours'),$('durationMinutes'),$('durationSeconds')];
  const download=$('download'), share=$('share'), photoInput=$('photo');
  const saveDialog=$('saveCard'), saveImage=$('saveImage'), saveFile=$('saveFile');
  const mobileLayout=window.matchMedia('(pointer: coarse), (max-width: 650px)');
  const isAppleMobile=/iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
  function useMobileSave(){return mobileLayout.matches || isAppleMobile}
  function updateExportLabel(){
    let label=useMobileSave()?'Salvar meu card':'Baixar meu card';
    if(isAppleMobile)label='Salvar no app Fotos';
    $('exportLabel').textContent=label;
    share.hidden=useMobileSave() || !canShareFile();
  }
  if(isAppleMobile){
    $('iphoneSaveTip').hidden=false;
    download.setAttribute('aria-describedby','iphoneSaveTip');
    $('saveTitle').textContent='Salvar no app Fotos';
    $('iphoneSaveHelp').hidden=false;
  }
  function canShareFile(){
    try{return !!(readyFile && navigator.share && navigator.canShare?.({files:[readyFile]}))}
    catch{return false}
  }
  const sportInputs=[...document.querySelectorAll('[name="sport"]')];
  const themeInputs=[...document.querySelectorAll('[name="theme"]')];
  const state={sport:'corrida',theme:'pista',km:5,seconds:2100,photo:null,track:null};
  let drawing=0, photoToken=0, timer=0, readyFile=null, readyURL=null, assetsReady=false, photoPending=false;
  const status=text=>{$('status').textContent=text};
  function revokeExport(){
    if(saveDialog.open)closeSave();
    saveFile.removeAttribute('href');
    if(readyURL) URL.revokeObjectURL(readyURL);
    readyFile=null;readyURL=null;download.disabled=true;share.disabled=true;
  }
  function reportField(input,id,message){
    input.setAttribute('aria-invalid',String(Boolean(message)));$(id).textContent=message;$(id).hidden=!message;
  }
  function readDurationFields(){
    const parts=durationInputs.map(input=>input.value.trim());
    const numbers=parts.map(part=>Number(part || 0));
    const maxMinutes=numbers[0]>0 ? 59 : 999;
    const limits=[99,maxMinutes,59];
    const messages=['Use de 0 a 99 horas.', 'Use de 0 a '+maxMinutes+' minutos.', 'Use de 0 a 59 segundos.'];
    const errors=parts.map((value,i)=>value!=='' && (!/^\d+$/.test(value) || numbers[i]>limits[i]));
    const badIndex=errors.indexOf(true);
    const total=numbers[0]*3600 + numbers[1]*60 + numbers[2];
    const message=badIndex!==-1 ? messages[badIndex] : total===0 ? 'Informe uma duração maior que zero.' : '';
    durationInputs.forEach((input,i)=>input.setAttribute('aria-invalid',String(errors[i] || total===0)));
    $('timeError').textContent=message;
    $('timeError').hidden=!message;
    return message ? null : total;
  }
  function pasteDuration(event){
    const text=event.clipboardData?.getData('text')?.trim();
    if(!text || !text.includes(':'))return;
    const total=TreinoCard.readDuration(text);
    if(total===null)return;
    event.preventDefault();
    const hours=Math.floor(total/3600);
    const minutes=Math.floor(total/60)%60;
    const seconds=total%60;
    durationInputs[0].value=hours ? String(hours) : '';
    durationInputs[1].value=String(minutes);
    durationInputs[2].value=seconds ? String(seconds).padStart(2,'0') : '';
    update();
  }
  function update(){
    const revision=++drawing;clearTimeout(timer);revokeExport();status('');
    state.km=TreinoCard.readDistance(distance.value);state.seconds=readDurationFields();
    reportField(distance,'distanceError',state.km===null?'Use de 0,001 a 999,999 km.':'');
    const valid=state.km!==null && state.seconds!==null;
    const pace=valid?TreinoCard.paceText(state.seconds,state.km):'—';
    $('pace').replaceChildren(document.createTextNode(pace+' '),Object.assign(document.createElement('small'),{textContent:'min/km'}));
    TreinoCard.render(poster,state);
    const activity=state.sport==='corrida'?'Corrida':'Caminhada';
    poster.setAttribute('aria-label',valid?activity+', '+distance.value+' km em '+TreinoCard.timeText(state.seconds)+'. Ritmo médio de '+pace+' min/km.':'Prévia parcial. Revise os dados do treino.');
    if(!valid || !assetsReady || photoPending)return;
    timer=setTimeout(()=>poster.toBlob(blob=>{
      if(revision!==drawing)return;
      if(!blob){status('A imagem não foi gerada. Recarregue a página e tente de novo.');return}
      const filename='treino-em-card-'+state.sport+'.png';
      readyURL=URL.createObjectURL(blob);
      readyFile=typeof File==='function'?new File([blob],filename,{type:'image/png'}):null;
      download.disabled=false;
      saveFile.href=readyURL;
      saveFile.download=filename;
      share.disabled=!canShareFile();
      updateExportLabel();
    },'image/png'),140);
  }
  function photoMessage(message,error=false){$('photoInfo').textContent=message;$('photoInfo').hidden=!message;$('photoInfo').classList.toggle('error',error)}
  function clearPhoto(){
    photoToken++;photoPending=false;state.photo=null;photoInput.value='';$('photoLabel').textContent='Usar minha foto';$('removePhoto').hidden=true;photoMessage('');
  }
  function useTheme(theme){
    clearPhoto();state.theme=theme;for(const input of themeInputs)input.checked=input.value===theme;update();
  }
  for(const input of sportInputs)input.addEventListener('change',()=>{state.sport=input.value;update()});
  for(const input of themeInputs)input.addEventListener('change',()=>useTheme(input.value));
  distance.addEventListener('input',update);
  for(const input of durationInputs){
    input.addEventListener('input',update);
    input.addEventListener('focus',()=>input.select());
    input.addEventListener('paste',pasteDuration);
  }
  distance.addEventListener('blur',()=>{if(state.km!==null){distance.value=state.km.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:3,useGrouping:false})}});
  $('removePhoto').addEventListener('click',()=>useTheme('pista'));
  photoInput.addEventListener('change',async()=>{
    const file=photoInput.files[0];if(!file)return;
    const token=++photoToken;photoPending=false;
    if(file.size>15*1024*1024){photoInput.value='';photoMessage('Escolha uma foto de até 15 MB.',true);update();return}
    photoPending=true;photoMessage('Carregando foto…');update();
    const url=URL.createObjectURL(file);
    try{
      const image=await loadImage(url);
      if(token!==photoToken)return;
      const factor=Math.min(1,2400/Math.max(image.naturalWidth,image.naturalHeight));
      const reduced=document.createElement('canvas');reduced.width=Math.max(1,Math.round(image.naturalWidth*factor));reduced.height=Math.max(1,Math.round(image.naturalHeight*factor));
      reduced.getContext('2d').drawImage(image,0,0,reduced.width,reduced.height);
      state.photo=reduced;state.theme='foto';for(const input of themeInputs)input.checked=false;
      $('removePhoto').hidden=false;$('photoLabel').textContent='Trocar minha foto';photoMessage('Foto aplicada ao card.');
    }catch{
      if(token===photoToken)photoMessage('Este navegador não abriu a foto. Tente JPG, PNG ou WebP.',true);
    }finally{
      URL.revokeObjectURL(url);
      if(token===photoToken){photoInput.value='';photoPending=false;update()}
    }
  });
  function openSave(){
    if(!readyURL)return;
    saveImage.src=readyURL;
    const native=canShareFile();
    $('saveShare').hidden=!native;
    if(isAppleMobile){
      $('saveHint').textContent='Toque e segure o card. Escolha “Salvar Imagem” ou “Save Image” para guardá-lo no app Fotos.';
      $('iphoneSaveHelp').open=false;
    }
    $('saveMessage').textContent='';
    if(!saveDialog.open){
      if(typeof saveDialog.showModal==='function')saveDialog.showModal();
      else saveDialog.setAttribute('open','');
    }
  }
  function closeSave(){
    if(typeof saveDialog.close==='function')saveDialog.close();
    else saveDialog.removeAttribute('open');
    saveImage.removeAttribute('src');
  }
  async function sharePNG(){
    if(!readyFile)return;
    const sharedFile=readyFile;
    try{
      await navigator.share({files:[sharedFile]});
    }catch(error){
      if(readyFile!==sharedFile)return;
      if(error.name==='AbortError'){
        if(isAppleMobile && !saveDialog.open)openSave();
        return;
      }
      openSave();
      $('saveMessage').textContent='O menu de compartilhamento não abriu. Você pode salvar pela imagem acima.';
    }
  }
  download.addEventListener('click',()=>{
    if(!readyURL)return;
    if(isAppleMobile && canShareFile()){
      sharePNG();
      return;
    }
    if(useMobileSave())openSave();
    else saveFile.click();
  });
  saveFile.addEventListener('click',()=>{
    const message='O navegador recebeu o pedido de download. Procure o PNG em Downloads.';
    if(saveDialog.open)$('saveMessage').textContent=message;
    else status(message);
  });
  share.addEventListener('click',sharePNG);
  $('saveShare').addEventListener('click',sharePNG);
  $('saveClose').addEventListener('click',closeSave);
  saveDialog.addEventListener('close',()=>{if(!saveDialog.open)saveImage.removeAttribute('src')});
  updateExportLabel();
  mobileLayout.addEventListener?.('change',updateExportLabel);
  const guide=$('guide');$('helpOpen').addEventListener('click',()=>guide.showModal());$('helpClose').addEventListener('click',()=>guide.close());
  guide.addEventListener('click',e=>{if(e.target===guide){const r=guide.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)guide.close()}});
  function loadImage(url){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=url})}
  async function init(){
    const [track]=await Promise.allSettled([loadImage('./assets/pista.jpg'),...['400 20px Barlow','600 20px Barlow','700 24px Barlow','italic 700 60px "Barlow Condensed"'].map(f=>document.fonts?.load(f))]);
    if(track.status==='fulfilled')state.track=track.value;
    else{const pista=themeInputs.find(i=>i.value==='pista');pista.disabled=true;if(state.theme==='pista')useTheme('carbono')}
    assetsReady=true;update();
  }
  init();
})();
