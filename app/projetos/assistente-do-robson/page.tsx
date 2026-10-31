import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bot, MessageCircle, ShieldCheck, Workflow } from "lucide-react";
import styles from "../novos-projetos.module.css";

export const metadata: Metadata = {
  title: "Assistente do Robson — Telegram e Make",
  description: "Estudo de caso de um assistente de atendimento com Telegram, Make, menus e encaminhamento humano, desenvolvido e validado por etapas.",
  alternates: { canonical: "/projetos/assistente-do-robson/" },
};

const etapas = [
  { number: "01", title: "Mensagem recebida", text: "O visitante inicia uma conversa privada com o bot pelo Telegram." },
  { number: "02", title: "Menu e roteamento", text: "O Make identifica comandos e escolhas do menu e conduz o visitante a respostas e instruções específicas." },
  { number: "03", title: "Solicitação de contato", text: "O fluxo prevê receber necessidade e contato juntos, evitando conversas de múltiplas etapas nesta versão." },
  { number: "04", title: "Atendimento humano", text: "O pedido é destinado a uma notificação privada para retorno manual, após validação do encaminhamento." },
];

export default function AssistenteDoRobson() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">RL<span>.</span></Link>
        <Link className={styles.back} href="/#projetos"><ArrowLeft size={16} /> Voltar aos projetos</Link>
      </header>
      <section className={styles.hero}>
        <p className={styles.kicker}>Projeto 02 · Automação no-code · MVP em evolução</p>
        <h1>Assistente do Robson.</h1>
        <p>Um experimento real de atendimento pelo Telegram com automação no Make. A proposta é apresentar projetos, orientar interessados e organizar pedidos para retorno humano, começando pelo essencial.</p>
        <div className={styles.actions}>
          <a className={styles.action} href="https://blog.robsonlopes.tec.br/artigos/assistente-robson-make/" target="_blank" rel="noopener noreferrer">Ler diário de construção <ArrowUpRight size={16}/></a>
          <a className={`${styles.action} ${styles.outline}`} href="#funcionamento">Entender o fluxo</a>
        </div>
      </section>
      <div className={styles.content}>
        <section className={styles.intro}>
          <span className={styles.eyebrow}>01 / Problema e abordagem</span>
          <div>
            <h2>Atender melhor começa por organizar a conversa.</h2>
            <p>Uma mensagem recebida pode exigir apresentação de projetos, esclarecimento de dúvidas ou contato direto. Em vez de começar com uma IA que decide tudo, o MVP transforma essas necessidades em caminhos claros e verificáveis, usando ferramentas que funcionam na nuvem.</p>
          </div>
        </section>
        <section className={styles.section} id="funcionamento">
          <div className={styles.sectionHeader}><span className={styles.eyebrow}>02 / Componentes</span><h2>Uma arquitetura pequena e intencional.</h2></div>
          <div className={styles.cards}>
            <article className={styles.card}><MessageCircle size={27}/><h3>Telegram</h3><p>Canal onde o visitante recebe menus e envia comandos e mensagens.</p></article>
            <article className={styles.card}><Workflow size={27}/><h3>Make</h3><p>Executa gatilhos, filtros, rotas e ações na nuvem, sem depender de computador ligado.</p></article>
            <article className={styles.card}><Bot size={27}/><h3>Resposta com propósito</h3><p>Respostas e conteúdo previamente definidos, com encaminhamento a uma pessoa quando necessário.</p></article>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><span className={styles.eyebrow}>03 / Jornada do pedido</span><h2>Do menu ao contato.</h2></div>
          <div className={styles.sequence}>{etapas.map((etapa) => <div className={styles.step} key={etapa.number}><span>{etapa.number}</span><div><strong>{etapa.title}</strong><p>{etapa.text}</p></div></div>)}</div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><span className={styles.eyebrow}>04 / O que aprendi</span><h2>Botões funcionando não são o fim do processo.</h2><p>Nos testes iniciais, menu, botões e respostas foram exercitados. O próximo cuidado é validar continuamente a entrega dos pedidos, o tratamento de falhas, o uso de créditos e a correspondência entre o cenário real e a documentação.</p></div>
          <div className={styles.notice}><ShieldCheck size={18} aria-hidden="true"/> O projeto está em evolução: não anuncio atendimento autônomo por IA nem um serviço público pronto. Tokens, IDs privados e conteúdo de conversas não são publicados. A integração de agendamento com Google Calendar é outro projeto, separado deste assistente.</div>
          <a className={styles.link} href="https://blog.robsonlopes.tec.br/artigos/assistente-robson-make/" target="_blank" rel="noopener noreferrer">Conhecer decisões, limites e próximos passos <ArrowUpRight size={16}/></a>
        </section>
      </div>
    </main>
  );
}
