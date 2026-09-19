import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidade | Assistente de Agenda — Staging",
  description: "Dados utilizados, armazenamento, integrações e exclusão no piloto do Assistente de Agenda.",
};

export default function AssistenteAgendaPrivacy() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Navegação da política">
          <Link href="/assistente-agenda/">Sobre o Assistente de Agenda</Link>
          <Link href="/">Portfólio</Link>
        </nav>
        <header className={styles.hero}>
          <p className={styles.kicker}>ÚLTIMA ATUALIZAÇÃO: 18/09/2026</p>
          <h1>Política de Privacidade</h1>
          <p>Esta política descreve o piloto restrito Assistente de Agenda — Staging, desenvolvido e administrado por Robson Lopes. Não descreve funcionalidades futuras nem outros projetos do portfólio.</p>
        </header>
        <section aria-labelledby="dados">
          <h2 id="dados">1. Dados recebidos e utilizados</h2>
          <ul>
            <li>Telegram: identificadores do usuário, conversa, atualização e interação com botões, além do texto necessário para interpretar comandos e agendamentos. O payload recebido pode incluir nome e username enviados pelo Telegram.</li>
            <li>Agendamentos: título, descrição quando fornecida, início, fim, status, identificador do solicitante e identificadores local e remoto do evento.</li>
            <li>Google Calendar: eventos consultados no período solicitado, incluindo horários, título, descrição, identificador e informações de fuso, para verificar conflitos e recuperar eventos do aplicativo.</li>
            <li>Autorização Google: identificador e segredo do cliente OAuth, refresh token e tokens de acesso necessários para operar a integração. O aplicativo não solicita nem armazena a senha da conta Google.</li>
            <li>Operação: registros técnicos de entregas, horários, rotas, códigos HTTP e falhas. O gateway pode registrar endereços IP; identificadores de updates ajudam no diagnóstico.</li>
          </ul>
        </section>
        <section aria-labelledby="finalidades">
          <h2 id="finalidades">2. Finalidades e limites</h2>
          <p>Os dados são usados para autorizar participantes, interpretar solicitações, verificar disponibilidade, registrar e confirmar compromissos, cancelar eventos, enviar respostas e evitar processamento duplicado. Também são usados para segurança e diagnóstico do piloto.</p>
          <p>O aplicativo não usa dados do Google Calendar para publicidade, venda de dados ou treinamento de modelos de inteligência artificial. O parser atual segue regras de texto; mensagens não são enviadas pelo aplicativo a um provedor de IA generativa.</p>
        </section>
        <section aria-labelledby="compartilhamento">
          <h2 id="compartilhamento">3. Integrações e compartilhamento</h2>
          <p>O Telegram recebe as respostas do bot. O Google recebe os dados dos eventos criados na agenda configurada, incluindo identificadores técnicos do agendamento e de seu solicitante em propriedades privadas do evento. A Cloudflare transporta as requisições do webhook até o servidor. A hospedagem da aplicação e o GitHub Pages, que hospeda estas páginas informativas, também participam da infraestrutura.</p>
          <p>O responsável administra os registros e a configuração do piloto. Os participantes compartilham uma agenda de testes, mas o bot limita a consulta e o gerenciamento aos registros do próprio solicitante. A visibilidade direta dos eventos no Google Calendar depende das permissões dessa agenda.</p>
          <p>Esses serviços tratam dados segundo suas próprias políticas: <a href="https://telegram.org/privacy">Telegram</a>, <a href="https://policies.google.com/privacy">Google</a>, <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare</a> e <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub</a>.</p>
        </section>
        <section aria-labelledby="armazenamento">
          <h2 id="armazenamento">4. Armazenamento e proteção</h2>
          <p>Agendamentos e controles de processamento do Telegram são persistidos em SQLite no servidor do piloto. Credenciais ficam em arquivos privados externos ao repositório, com acesso restrito. Backups podem conter registros de agendamentos e processamento. A integração usa HTTPS externamente e o webhook exige um segredo.</p>
          <p>Há redação de tokens nos logs da aplicação. Essas medidas reduzem riscos, mas não representam garantia de segurança absoluta. Não envie senhas, tokens ou dados sensíveis nas mensagens.</p>
        </section>
        <section aria-labelledby="retencao">
          <h2 id="retencao">5. Retenção, cancelamento e exclusão</h2>
          <p>O piloto ainda não possui expurgo automático nem prazo fixo de retenção. Registros, logs e backups podem permanecer até revisão e limpeza manual pelo responsável. Cancelar pelo bot exclui o evento remoto associado, mas mantém o registro local com status cancelado; não equivale a apagar todos os dados.</p>
          <p>Para solicitar acesso, correção ou exclusão dos registros sob administração do piloto, envie um e-mail ao contato abaixo. A identidade será conferida e o alcance da remoção será informado, incluindo eventuais cópias de backup e necessidades de segurança. Não envie credenciais no pedido.</p>
          <p>O responsável pela conta Google pode revogar a autorização nas <a href="https://myaccount.google.com/connections">conexões da conta Google</a>. Isso interrompe o acesso futuro, mas não apaga automaticamente eventos, registros locais ou backups existentes. Mensagens no Telegram e dados mantidos pelos provedores seguem os controles de cada serviço.</p>
        </section>
        <section aria-labelledby="contato">
          <h2 id="contato">6. Responsável e contato</h2>
          <p>Robson Lopes — <a href="mailto:jrobson567@gmail.com">jrobson567@gmail.com</a>. Utilize esse contato para dúvidas de privacidade, pedidos sobre seus dados e suporte.</p>
          <p>Alterações no funcionamento ou no tratamento dos dados deverão ser refletidas nesta página, com atualização da data.</p>
        </section>
        <footer className={styles.footer}>
          <Link href="/assistente-agenda/">Voltar à apresentação do aplicativo</Link>
        </footer>
      </div>
    </main>
  );
}
