import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, FlaskConical, GitBranch } from "lucide-react";
import styles from "../novos-projetos.module.css";

export const metadata: Metadata = {
  title: "Laboratório de LLMs — benchmarks com OpenCode",
  description: "Comparação prática de três modelos gratuitos para arquitetura e programação Python, com metodologia, resultados e limitações.",
  alternates: { canonical: "/projetos/laboratorio-llms/" },
};

const resultados = [
  { name: "DeepSeek V4.1 Flash", points: "100/100", tests: "30/30" },
  { name: "Nemotron 3.5 Lightning", points: "100/100", tests: "30/30" },
  { name: "GLM-5.3-Flash", points: "96/100", tests: "29/30" },
];

export default function LaboratorioLlms() {
  return <main className={styles.page}>
    <header className={styles.header}><Link className={styles.logo} href="/">RL<span>.</span></Link><Link className={styles.back} href="/#projetos"><ArrowLeft size={16}/> Voltar aos projetos</Link></header>
    <section className={styles.hero}><p className={styles.kicker}>Projeto 03 · Engenharia de software · Experimentos</p>
      <h1>Três LLMs. O mesmo desafio.</h1>
      <p>Um laboratório pessoal para avaliar inteligência artificial aplicada ao desenvolvimento: menos impressão de que uma resposta “parece boa”, mais código, testes reproduzíveis e análise dos erros.</p>
      <div className={styles.actions}><a className={styles.action} href="https://blog.robsonlopes.tec.br/artigos/benchmark-llms-python/" target="_blank" rel="noopener noreferrer">Ler relato completo <ArrowUpRight size={16}/></a><a className={`${styles.action} ${styles.outline}`} href="#resultados">Ver resultados</a></div>
    </section>
    <div className={styles.content}>
      <section className={styles.intro}><span className={styles.eyebrow}>01 / Contexto</span><div><h2>Da opinião ao teste automatizado.</h2><p>Após atualizar o OpenCode para a versão 2.2.5, comparei GLM-5.3-Flash, DeepSeek V4.1 Flash e Nemotron 3.5 Lightning em sessões separadas. Primeiro pedi análises da arquitetura de um projeto real. Depois, cada modelo implementou a mesma função Python para validar comandos /pedido.</p></div></section>
      <section className={styles.section}><div className={styles.sectionHeader}><span className={styles.eyebrow}>02 / Método</span><h2>Mesma tarefa, pastas separadas.</h2></div>
        <div className={styles.cards}>
          <article className={styles.card}><FlaskConical size={27}/><h3>Condições controladas</h3><p>Mesmo prompt, contrato e testes públicos. Cada LLM trabalhou em sua própria pasta no OpenCode.</p></article>
          <article className={styles.card}><Code2 size={27}/><h3>Implementação Python</h3><p>Validação de tipos, formatos, comprimento, e-mail, normalização e protocolo determinístico em SHA-256.</p></article>
          <article className={styles.card}><CheckCircle2 size={27}/><h3>Avaliação independente</h3><p>Dez testes públicos e vinte adicionais, além de checagem de integridade dos arquivos.</p></article>
        </div>
      </section>
      <section className={styles.section} id="resultados"><div className={styles.sectionHeader}><span className={styles.eyebrow}>03 / Resultados do segundo benchmark</span><h2>Empate no topo; um defeito encontrado.</h2></div>
        <div className={styles.stats}>{resultados.map(r=><div className={styles.stat} key={r.name}><strong>{r.points}</strong><span>{r.name} · {r.tests} testes</span></div>)}</div>
        <div className={styles.notice}>O GLM falhou ao validar um domínio iniciado por hífen. DeepSeek e Nemotron passaram nos 30 casos avaliados. Passar nos testes não prova ausência de outros erros; este é um experimento pontual, não um ranking universal de modelos.</div>
      </section>
      <section className={styles.section}><div className={styles.sectionHeader}><span className={styles.eyebrow}>04 / Aprendizado</span><h2>Testar código é diferente de avaliar explicações.</h2><p>No primeiro desafio, as notas de arquitetura foram qualitativas. No segundo, o resultado veio de testes objetivos. Um modelo que explica com clareza pode falhar em um caso extremo; um modelo menos convincente na teoria pode entregar código correto para aquele contrato.</p></div>
        <a className={styles.link} href="https://blog.robsonlopes.tec.br/artigos/benchmark-llms-python/" target="_blank" rel="noopener noreferrer"><GitBranch size={17}/> Metodologia, ressalvas e próximos testes <ArrowUpRight size={16}/></a>
      </section>
    </div>
  </main>;
}
