---
title: Escolher o método de entrega das notificações
intro: 'Você pode receber notificações no {% data variables.product.product_location %} ou elas podem ser entregues pelo seu cliente de e-mail.'
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications
---
Para contas pessoais, os e-mails de notificação são enviados automaticamente ao seu e-mail de notificação padrão.

{% data reusables.notifications.outbound_email_tip %}

### Escolher o método de entrega para notificações sobre atividade do repositório

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. Configure como você deseja receber notificações de conversas das quais participa ou que inspeciona marcando as caixas de seleção:
    - Selecionar **Email** (E-mail) envia um e-mail para seu e-mail de notificação padrão.
    - Selecionar **Web** permite acessar as notificações no {% data variables.product.product_location %}. ![Configurar notificações](/assets/images/help/settings/ent-notifications-settings.png)
4. Se você selecionou **Email** (E-mail) para conversas das quais participa ou que inspeciona, escolha quais atualizações receber marcando as caixas de seleção na seção "Notificiation email" (E-mail de notificação):
    - Selecione **Comments on Issues and Pull Requests** (Comentários em problemas e pull requests) para receber um e-mail quando alguém fizer um comentário em um problema ou na guia "Conversation" (Conversa) de uma pull request.
    - Selecione **Pull request reviews** (Revisões de pull request) para receber um e-mail quando alguém fizer um comentário de revisão na guia "Files changed" (Arquivos alterados) de uma pull request.
    - Selecione **Pull request pushes** (Pushes de pull request) para receber um e-mail quando alguém adicionar commits a uma pull request que você assinou.
    - Selecione **Include your own updates** (Incluir suas próprias atualizações) para receber um e-mail quando você abrir, comentar ou fechar um problema ou uma pull request. ![Configurar opções de notificação de e-mail](/assets/images/help/settings/email_notification_settings.png)

### Escolher o método de entrega dos alertas de segurança para dependências vulneráveis

{% data reusables.repositories.security-alert-delivery-options %}

{% data reusables.repositories.enable-security-alerts %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. Em "Security alerts" (Alertas de segurança), configure como você deseja receber notificações quando o {% data variables.product.product_name %} detectar uma dependência vulnerável no seu repositório:![Opções para configurar notificações de alertas de segurança](/assets/images/help/settings/vulnerability-alerts-options.png)
    - Selecionar **UI alerts** (Alertas de UI) exibe um banner na interface do {% data variables.product.product_name %}.
    - Selecionar **Command Line** (Linha de comando) exibe avisos como um callback quando você faz push em um repositório com vulnerabilidades.
    - Selecionar **Web** permite acessar as notificações no {% data variables.product.product_location %}.
    - Selecionar **Email each time a vulnerability is found** (Enviar e-mail toda vez que uma vulnerabilidade for encontrada) envia um e-mail para seu e-mail de notificação padrão.
    - Selecionar **Email a digest summary of vulnerabilities** (Enviar e-mail resumido das vulnerabilidades) envia um e-mail com um resumo de até 10 alertas de segurança de repositórios. Use o menu suspenso para optar por receber e-mails resumidos diária ou semanalmente.

### Leia mais

- "[Sobre notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[Sobre notificações por e-mail](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[Sobre notificações web](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- "<a href="/enterprise/[/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories">Fazer a inspeção e cancelar a inspeção de repositórios](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[Gerenciar preferências de e-mail](/articles/managing-email-preferences)"
