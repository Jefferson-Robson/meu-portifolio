import {
  ArrowDownRight, ArrowUpRight, Bot, CalendarCheck2, CheckCircle2,
  Code2, GitBranch, MessageCircle, Network, Sparkles, Workflow,
} from "lucide-react";
import Image from "next/image";

const pillars = [
  { icon: Code2, title: "Software útil", text: "Ferramentas simples, bem estruturadas e pensadas para resolver problemas reais." },
  { icon: Bot, title: "IA aplicada", text: "Inteligência artificial com propósito: apoiar pessoas, decisões e rotinas de trabalho." },
  { icon: Workflow, title: "Automação de processos", text: "Menos tarefas repetitivas, mais clareza e tempo para o que gera resultado." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">RL<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a>
        </nav>
        <a
          className="header-cta"
          href="https://wa.me/5511953424035?text=Ol%C3%A1%2C%20Robson!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
          target="_blank"
          rel="noreferrer"
        >
          Vamos conversar <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Software · Automação · IA aplicada</div>
          <h1>Tecnologia que reduz atritos e faz a <em>operação</em> avançar.</h1>
          <p className="hero-text">
            Sou Robson Lopes. Desenvolvo soluções digitais para transformar processos manuais,
            rotinas confusas e tarefas repetitivas em trabalho mais simples, organizado e eficiente.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">Ver soluções <ArrowDownRight size={18} /></a>
            <a className="button ghost" href="#sobre">Como eu trabalho</a>
          </div>
          <div className="hero-proof"><span>Sistemas úteis</span><span>Automação</span><span>IA aplicada</span></div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image
              src="/images/robson-lopes.png"
              alt="Robson Lopes"
              fill
              priority
              sizes="(max-width: 900px) 86vw, 440px"
            />
          </div>
          <div className="portrait-card">
            <Sparkles size={17} />
            <div><strong>Começo pelo trabalho real.</strong><span>Depois, transformo o problema em solução.</span></div>
          </div>
        </div>
      </section>

      <section className="manifesto" id="sobre">
        <div className="section-number">01 / SOBRE</div>
        <div className="manifesto-copy">
          <p className="lead">
            As melhores soluções não começam pela ferramenta. Começam entendendo onde o trabalho
            perde tempo, clareza e ritmo.
          </p>
          <div className="two-columns">
            <p>Minha experiência em operação me ensinou a identificar gargalos, tarefas repetitivas e pontos em que a informação se perde. É desse contexto que surgem as soluções que construo.</p>
            <p>Uno desenvolvimento de software, automação e inteligência artificial para criar ferramentas claras, viáveis e alinhadas à rotina de quem vai usá-las.</p>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="section-intro"><span>Como eu trabalho</span><h2>Do gargalo operacional a uma solução que funciona no dia a dia.</h2></div>
        <div className="pillars-grid">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <article className="pillar" key={title}>
              <div className="pillar-top"><Icon size={23} /><span>0{index + 1}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projetos">
        <div className="section-number">02 / PROJETOS</div>
        <div className="project-featured">
          <div className="project-copy">
            <div className="project-label"><span>EM CONSTRUÇÃO</span><span>PROJETO 01</span></div>
            <h2>Assistente inteligente de agenda</h2>
            <p>Uma ferramenta para facilitar a rotina de equipes: consultar a agenda, organizar compromissos e realizar agendamentos por conversa, conectada ao Google Calendar.</p>
            <ul>
              <li><CheckCircle2 size={17} /> Uso simples no dia a dia</li>
              <li><CheckCircle2 size={17} /> Agenda centralizada e atualizada</li>
              <li><CheckCircle2 size={17} /> Atendimento por aplicativos de mensagem</li>
            </ul>
            <div className="tech-row">
              <span>Python</span>
              <span>Google Calendar API</span>
              <span>IA</span>
              <span>Automação</span>
            </div>

            <a
              className="project-link"
              href="/projetos/assistente-agenda/"
            >
              Ver estudo de caso
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="project-visual" aria-label="Representação visual do assistente de agenda">
            <div className="calendar-card">
              <div className="calendar-head"><div><CalendarCheck2 size={19} /><strong>Agenda da equipe</strong></div><span>Hoje</span></div>
              <div className="meeting active"><time>09:00</time><div><strong>Alinhamento diário</strong><span>Equipe de operações</span></div></div>
              <div className="meeting"><time>11:30</time><div><strong>Revisão de processo</strong><span>30 minutos</span></div></div>
              <div className="meeting"><time>15:00</time><div><strong>Horário disponível</strong><span>Livre para agendamento</span></div></div>
            </div>
            <div className="chat-bubble"><MessageCircle size={18} /><p>“Agende uma reunião com o time amanhã às 15h.”</p></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div><span className="section-number">03 / CONTATO</span><h2>Tem um processo travando sua operação?</h2></div>
        <div className="contact-copy">
          <p>Vamos conversar sobre automação, software, inteligência artificial e soluções que tragam mais clareza para o trabalho.</p>
          <div className="contact-links" aria-label="Canais de contato">
            <a
              className="contact-primary"
              href="https://wa.me/5511953424035?text=Ol%C3%A1%2C%20Robson!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} /> Conversar pelo WhatsApp <ArrowUpRight size={16} />
            </a>
            <a href="https://www.linkedin.com/in/jefferson-robson-a0466b265/" target="_blank" rel="noreferrer">
              <Network size={18} /> LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="https://github.com/Jefferson-Robson" target="_blank" rel="noreferrer">
              <GitBranch size={18} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">RL<span>.</span></a>
        <p>Software, automação e IA aplicada à operação.</p>
        <span>© 2026 Robson Lopes</span>
      </footer>
    </main>
  );
}
