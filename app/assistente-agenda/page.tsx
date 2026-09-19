import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Assistente de Agenda — Staging",
  description: "Piloto restrito de agendamento pelo Telegram com integração ao Google Calendar.",
};

export default function AssistenteAgendaHome() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Navegação do aplicativo">
          <Link href="/">Portfólio de Robson Lopes</Link>
          <Link href="/assistente-agenda/privacidade/">Política de Privacidade</Link>
        </nav>
        <header className={styles.hero}>
          <p className={styles.kicker}>PILOTO RESTRITO · TELEGRAM E GOOGLE CALENDAR</p>
          <h1>Assistente de Agenda — Staging</h1>
          <p>Uma ferramenta desenvolvida por Robson Lopes para solicitar, confirmar e cancelar compromissos pelo Telegram, usando uma agenda de testes no Google Calendar.</p>
        </header>
        <section aria-labelledby="funcionamento">
          <h2 id="funcionamento">Como funciona</h2>
          <p>O usuário autorizado envia uma mensagem, por exemplo: Agende reunião amanhã às 15h por 60 minutos. O sistema verifica conflitos e apresenta uma solicitação pendente. O evento é criado no Google Calendar após a confirmação.</p>
          <ul>
            <li>/start ou /ajuda: instruções de uso.</li>
            <li>/agenda: próximos agendamentos confirmados do próprio usuário.</li>
            <li>/pendentes: solicitações do próprio usuário aguardando confirmação.</li>
            <li>/cancelar ID: cancelamento de um agendamento do próprio usuário.</li>
          </ul>
          <p>A interpretação de mensagens usa formatos definidos, não uma compreensão irrestrita de linguagem natural. WhatsApp e múltiplas agendas por usuário não estão disponíveis neste piloto.</p>
        </section>
        <section aria-labelledby="acesso">
          <h2 id="acesso">Acesso e agenda compartilhada</h2>
          <p>O piloto é limitado a participantes previamente autorizados. Não há cadastro público. Os participantes usam a mesma agenda de staging; cada um pode consultar e gerenciar seus próprios registros pelo bot. Pessoas com acesso direto à agenda no Google Calendar seguem as permissões de compartilhamento do Google.</p>
          <p className={styles.note}>Somente o responsável pela agenda realiza a autorização OAuth do Google. Participar pelo Telegram não dá ao aplicativo acesso à conta Google pessoal do participante. Evite dados sensíveis, credenciais ou informações de clientes nos testes.</p>
        </section>
        <section aria-labelledby="google">
          <h2 id="google">Integração com o Google</h2>
          <p>O aplicativo solicita a permissão calendar.events para ler eventos e verificar disponibilidade, criar compromissos confirmados e excluir eventos associados aos cancelamentos. A permissão concedida pelo Google é mais ampla que uma única agenda; a configuração do piloto direciona as operações à agenda de staging.</p>
          <p>Esta página não solicita senhas, tokens ou autorização Google. A autorização é realizada na página oficial do Google pelo responsável.</p>
        </section>
        <footer className={styles.footer}>
          <p>Responsável e suporte: Robson Lopes — <a href="mailto:jrobson567@gmail.com">jrobson567@gmail.com</a>.</p>
          <p><Link href="/assistente-agenda/privacidade/">Leia como os dados são usados e como solicitar sua exclusão.</Link></p>
        </footer>
      </div>
    </main>
  );
}
