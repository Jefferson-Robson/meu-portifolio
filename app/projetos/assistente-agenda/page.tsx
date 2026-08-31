import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Database,
  LockKeyhole,
  MessageCircle,
  Users,
  Workflow,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Assistente inteligente de agenda | Robson Lopes",
  description:
    "Estudo de caso de um assistente conectado ao Google Calendar para consultar horários e realizar agendamentos por aplicativos de mensagem.",
};

const flow = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Mensagem recebida",
    text: "O usuário solicita uma consulta ou agendamento usando linguagem natural.",
  },
  {
    icon: Bot,
    number: "02",
    title: "Intenção identificada",
    text: "O assistente interpreta a solicitação e confirma as informações necessárias.",
  },
  {
    icon: CalendarCheck2,
    number: "03",
    title: "Agenda consultada",
    text: "A integração verifica compromissos e horários disponíveis no Google Calendar.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Ação confirmada",
    text: "O compromisso é criado e a confirmação retorna pelo mesmo canal de mensagem.",
  },
];

const architecture = [
  {
    icon: MessageCircle,
    title: "Canal de entrada",
    text: "WhatsApp ou Telegram recebe a solicitação.",
  },
  {
    icon: Workflow,
    title: "Orquestração",
    text: "O sistema organiza o fluxo e valida os dados.",
  },
  {
    icon: Bot,
    title: "Interpretação",
    text: "A camada inteligente entende a intenção do usuário.",
  },
  {
    icon: CalendarCheck2,
    title: "Google Calendar",
    text: "A agenda é consultada ou atualizada com segurança.",
  },
];

const roadmap = [
  {
    status: "current",
    phase: "Fase 01",
    title: "Descoberta e arquitetura",
    text: "Definição do problema, público, fluxo de conversa e escopo do MVP.",
  },
  {
    status: "next",
    phase: "Fase 02",
    title: "Protótipo funcional",
    text: "Integração inicial com Google Calendar e primeiro canal de mensagens.",
  },
  {
    status: "future",
    phase: "Fase 03",
    title: "Validação na operação",
    text: "Uso controlado por colaboradores e coleta de dificuldades reais.",
  },
  {
    status: "future",
    phase: "Fase 04",
    title: "Evolução do produto",
    text: "Novos canais, múltiplas agendas, relatórios e recursos para empresas.",
  },
];

export default function AssistenteAgendaPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Voltar ao portfólio">
          RL<span>.</span>
        </Link>

        <Link className={styles.backLink} href="/#projetos">
          <ArrowLeft size={17} />
          Voltar aos projetos
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroContent}>
          <div className={styles.status}>
            <span />
            Projeto em desenvolvimento
          </div>

          <p className={styles.kicker}>PROJETO 01 · AUTOMAÇÃO E IA</p>

          <h1>
            Assistente inteligente <em>de agenda.</em>
          </h1>

          <p className={styles.heroText}>
            Uma solução para consultar horários, organizar compromissos e
            realizar agendamentos por conversa, conectando aplicativos de
            mensagem ao Google Calendar.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#solucao">
              Conhecer a solução
              <ArrowRight size={18} />
            </a>

            <a className={styles.secondaryButton} href="#roadmap">
              Acompanhar evolução
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.messageCard}>
            <MessageCircle size={19} />
            <p>Agende uma reunião com o time amanhã às 15h.</p>
          </div>

          <div className={styles.calendarCard}>
            <div className={styles.calendarHeader}>
              <div>
                <CalendarCheck2 size={20} />
                <strong>Agenda da equipe</strong>
              </div>
              <span>Amanhã</span>
            </div>

            <div className={styles.calendarItem}>
              <time>09:00</time>
              <div>
                <strong>Alinhamento diário</strong>
                <span>Equipe de operações</span>
              </div>
            </div>

            <div className={styles.calendarItem}>
              <time>11:30</time>
              <div>
                <strong>Revisão de processo</strong>
                <span>30 minutos</span>
              </div>
            </div>

            <div className={`${styles.calendarItem} ${styles.available}`}>
              <time>15:00</time>
              <div>
                <strong>Reunião agendada</strong>
                <span>Confirmada pelo assistente</span>
              </div>
            </div>
          </div>

          <div className={styles.confirmation}>
            <CheckCircle2 size={18} />
            Horário confirmado
          </div>
        </div>
      </section>

      <section className={styles.contextSection}>
        <div className={styles.sectionLabel}>01 / CONTEXTO</div>

        <div>
          <h2>O problema começa antes do calendário.</h2>

          <p className={styles.lead}>
            Em muitas equipes, consultar horários e organizar compromissos
            ainda depende de mensagens espalhadas, confirmações manuais e
            interrupções durante o trabalho.
          </p>

          <div className={styles.problemGrid}>
            <article>
              <Clock3 size={22} />
              <h3>Tempo desperdiçado</h3>
              <p>
                Pessoas interrompem suas atividades para consultar, confirmar
                ou reorganizar horários.
              </p>
            </article>

            <article>
              <Users size={22} />
              <h3>Informações dispersas</h3>
              <p>
                Conversas e decisões ficam espalhadas entre diferentes
                aplicativos e pessoas.
              </p>
            </article>

            <article>
              <Database size={22} />
              <h3>Dependência manual</h3>
              <p>
                A agenda só permanece atualizada quando alguém registra cada
                mudança corretamente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.solutionSection} id="solucao">
        <div className={styles.sectionHeading}>
          <div className={styles.sectionLabel}>02 / SOLUÇÃO PROPOSTA</div>
          <h2>Transformar uma conversa em uma ação organizada.</h2>
          <p>
            O usuário não precisa aprender uma nova ferramenta. Ele conversa
            com o assistente pelo canal que já utiliza no dia a dia.
          </p>
        </div>

        <div className={styles.flowGrid}>
          {flow.map(({ icon: Icon, number, title, text }) => (
            <article className={styles.flowCard} key={number}>
              <div className={styles.flowTop}>
                <Icon size={23} />
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.architectureSection}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionLabel}>03 / ARQUITETURA DO MVP</div>
          <h2>Uma estrutura simples para validar rápido.</h2>
          <p>
            A primeira versão será pequena o suficiente para ser construída e
            testada, mas organizada para permitir evolução futura.
          </p>
        </div>

        <div className={styles.architectureFlow}>
          {architecture.map(({ icon: Icon, title, text }, index) => (
            <article className={styles.architectureCard} key={title}>
              <div className={styles.architectureIcon}>
                <Icon size={25} />
              </div>
              <span>ETAPA 0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className={styles.securityNote}>
          <LockKeyhole size={24} />
          <div>
            <strong>Privacidade desde a arquitetura</strong>
            <p>
              O acesso à agenda deverá usar autorização individual, permissões
              mínimas e registro seguro das operações realizadas.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.scopeSection}>
        <div className={styles.sectionLabel}>04 / ESCOPO INICIAL</div>

        <div className={styles.scopeContent}>
          <div>
            <h2>O que precisa funcionar no primeiro MVP.</h2>
            <p>
              O objetivo inicial não é criar uma plataforma gigantesca. É
              resolver bem uma rotina específica e validar seu uso por pessoas
              reais.
            </p>
          </div>

          <ul className={styles.scopeList}>
            <li>
              <CheckCircle2 size={19} />
              Consultar compromissos e disponibilidade
            </li>
            <li>
              <CheckCircle2 size={19} />
              Criar novos eventos no Google Calendar
            </li>
            <li>
              <CheckCircle2 size={19} />
              Confirmar os dados antes do agendamento
            </li>
            <li>
              <CheckCircle2 size={19} />
              Responder pelo canal de mensagem utilizado
            </li>
            <li>
              <CheckCircle2 size={19} />
              Registrar erros e operações importantes
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.roadmapSection} id="roadmap">
        <div className={styles.sectionHeading}>
          <div className={styles.sectionLabel}>05 / ROADMAP</div>
          <h2>Construção documentada, etapa por etapa.</h2>
          <p>
            Este estudo de caso será atualizado conforme o projeto avançar da
            ideia para um produto usado na operação.
          </p>
        </div>

        <div className={styles.roadmap}>
          {roadmap.map(({ status, phase, title, text }) => (
            <article className={styles.roadmapItem} key={phase}>
              <span
                className={`${styles.roadmapDot} ${styles[status]}`}
                aria-hidden="true"
              />
              <div>
                <span className={styles.roadmapPhase}>{phase}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <span>PROJETO EM CONSTRUÇÃO</span>
          <h2>Da rotina operacional para uma solução real.</h2>
        </div>

        <div>
          <p>
            Estou documentando as decisões, os aprendizados e a evolução deste
            projeto enquanto desenvolvo uma carreira entre tecnologia e
            negócios.
          </p>

          <Link className={styles.ctaButton} href="/#contato">
            Conversar sobre o projeto
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.brand} href="/">
          RL<span>.</span>
        </Link>

        <p>Construindo uma carreira entre tecnologia e negócios.</p>

        <span>© 2026 Robson Lopes</span>
      </footer>
    </main>
  );
}