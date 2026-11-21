'use strict';
const TreinoCard = (() => {
  const width = 1080, height = 1920;
  const distanceFormat = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 3, useGrouping: false});
  const two = n => String(n).padStart(2, '0');
  function readDistance(input) {
    const clean = input.trim();
    if (!/^\d{1,3}([.,]\d{1,3})?$/.test(clean)) return null;
    const km = Number(clean.replace(',', '.'));
    return km > 0 ? km : null;
  }
  function readDuration(input) {
    const clean = input.trim();
    if (!/^(?:\d{1,2}:[0-5]\d:[0-5]\d|\d{1,3}:[0-5]\d)$/.test(clean)) return null;
    const seconds = clean.split(':').map(Number).reduce((sum, part) => sum * 60 + part, 0);
    return seconds > 0 ? seconds : null;
  }
  function timeText(seconds) {
    const hours = Math.floor(seconds / 3600), minutes = Math.floor(seconds / 60) % 60;
    return (hours ? hours + ':' + two(minutes) : String(minutes)) + ':' + two(seconds % 60);
  }
  function paceText(seconds, km) {
    const rounded = Math.round(seconds / km);
    return Math.floor(rounded / 60) + ':' + two(rounded % 60);
  }
  function cover(ctx, source) {
    const w = source.naturalWidth || source.width, h = source.naturalHeight || source.height;
    const scale = Math.max(width / w, height / h);
    ctx.drawImage(source, (width - w * scale) / 2, (height - h * scale) / 2, w * scale, h * scale);
  }
  function linear(ctx, x1, y1, x2, y2, stops) {
    const g = ctx.createLinearGradient(x1, y1, x2, y2);
    for (const [offset, color] of stops) g.addColorStop(offset, color);
    return g;
  }
  function drawMare(ctx) {
    ctx.fillStyle = linear(ctx,0,0,800,height,[[0,'#133f56'],[.52,'#268a94'],[1,'#092f3d']]);
    ctx.fillRect(0,0,width,height);
    const sun=ctx.createRadialGradient(765,600,0,765,600,510);
    sun.addColorStop(0,'rgba(139,236,214,.46)');sun.addColorStop(1,'rgba(139,236,214,0)');
    ctx.fillStyle=sun;ctx.fillRect(0,0,width,height);
    for(let i=-15;i<=80;i++){
      const y=i*29;
      ctx.strokeStyle=i%5===0?'rgba(192,246,224,.57)':'rgba(149,222,216,.35)';
      ctx.lineWidth=i%5===0?3:1.6;ctx.beginPath();ctx.moveTo(-90,y+155);
      ctx.bezierCurveTo(235,y+330+80*Math.sin(i*.08),535,y-225,790,y-119+i*3);
      ctx.bezierCurveTo(935,y-72+i*2,1030,y+3,1190,y+28);ctx.stroke();
    }
  }
  function drawCarbono(ctx) {
    ctx.fillStyle=linear(ctx,0,0,width,height,[[0,'#303b34'],[.62,'#1b241f'],[1,'#0b100d']]);ctx.fillRect(0,0,width,height);
    ctx.save();ctx.rotate(-.19);
    for(let i=-7;i<14;i++){
      const x=i*94;ctx.beginPath();ctx.moveTo(x-680,2150);
      ctx.bezierCurveTo(x-660,1250,x+855,1130,x+630,25);ctx.lineWidth=i===3?12:4;
      ctx.strokeStyle=i===3?'#b8e25b':i%3===0?'#728368':'#505e51';ctx.stroke();
    }ctx.restore();
  }
  function renderBackground(ctx, theme, photo, track) {
    if (theme==='pista' && track) cover(ctx,track);
    else if (theme==='foto' && photo) cover(ctx,photo);
    else if(theme==='mare') drawMare(ctx);
    else drawCarbono(ctx);
  }
  function roundRect(ctx,x,y,w,h,r) {
    ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();
  }
  function stripes(ctx,x,y,s,color) {
    ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=color;
    for(const [dx,dy,sz] of [[0,0,43],[20,9,34],[40,18,25]]){
      ctx.beginPath();ctx.moveTo(dx,43);ctx.lineTo(dx+sz*.59,dy);ctx.lineTo(dx+sz*.59+10,dy);ctx.lineTo(dx+10,43);ctx.closePath();ctx.fill();
    }ctx.restore();
  }
  function textLine(ctx,text,x,y,{color='#fff',size=48,weight=600,italic=false,maxWidth=900}={}) {
    const family=italic?'"Barlow Condensed", "Arial Narrow", sans-serif':'Barlow,Arial,sans-serif';
    const style=italic?'italic ':'';
    ctx.font=style+weight+' '+size+'px '+family;
    const measured=ctx.measureText(text).width;
    if(measured>maxWidth)ctx.font=style+weight+' '+Math.floor(size*maxWidth/measured)+'px '+family;
    ctx.fillStyle=color;ctx.fillText(text,x,y);return ctx.measureText(text).width;
  }
  function render(canvas, state) {
    const ctx=canvas.getContext('2d');const {sport,km,seconds,theme,photo,track}=state;
    ctx.save();ctx.scale(canvas.width/width,canvas.height/height);
    renderBackground(ctx,theme,photo,track);
    ctx.fillStyle=linear(ctx,0,0,0,height,[[0,'rgba(0,0,0,.28)'],[.22,'rgba(0,0,0,0)'],[.43,'rgba(0,0,0,0)'],[.70,'rgba(7,10,9,.49)'],[1,'rgba(6,9,8,.90)']]);ctx.fillRect(0,0,width,height);
    stripes(ctx,72,94,1.2,'#d3ff73');textLine(ctx,'TREINO EM CARD',156,138,{size:33,weight:700});
    const sportName=sport==='caminhada'?'CAMINHADA':'CORRIDA';
    roundRect(ctx,75,1054,sport==='caminhada'?295:244,74,37);ctx.fillStyle='#d1fc6e';ctx.fill();
    stripes(ctx,102,1073,.74,'#202912');textLine(ctx,sportName,169,1102,{size:31,weight:700,color:'#19200f'});
    const distance=km===null?'—':distanceFormat.format(km);
    const len=textLine(ctx,distance,63,1385,{size:285,italic:true,weight:700,maxWidth:755});
    textLine(ctx,'km',90+len,1377,{size:100,italic:true,weight:700,maxWidth:170});
    const panel=linear(ctx,78,1450,1000,1640,[[0,'rgba(255,255,255,.22)'],[.58,'rgba(240,245,237,.12)'],[1,'rgba(255,255,255,.17)']]);
    roundRect(ctx,75,1458,930,221,42);ctx.fillStyle=panel;ctx.fill();ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=2;ctx.stroke();
    ctx.beginPath();ctx.moveTo(514,1494);ctx.lineTo(514,1643);ctx.strokeStyle='rgba(255,255,255,.42)';ctx.stroke();
    textLine(ctx,'DURAÇÃO',116,1528,{size:31,weight:600,color:'#f3f4ee'});
    textLine(ctx,'RITMO MÉDIO',552,1528,{size:31,weight:600,color:'#f3f4ee'});
    textLine(ctx,seconds===null?'—':timeText(seconds),114,1629,{size:94,italic:true,weight:700,maxWidth:361});
    const pace=km!==null&&seconds!==null?paceText(seconds,km):'—';
    const paceWidth=textLine(ctx,pace,547,1629,{size:94,italic:true,weight:700,maxWidth:296});
    textLine(ctx,'/km',568+paceWidth,1627,{size:45,weight:600,maxWidth:95});
    textLine(ctx,'ROBSONLOPES.TEC.BR',76,1827,{size:27,weight:600,color:'#e4e6dd'});
    ctx.restore();
  }
  return {readDuration,readDistance,paceText,timeText,render};
})();
if (typeof module!=='undefined' && module.exports) module.exports=TreinoCard;
