---
title: Fazer assinatura e cancelar a assinatura de notificações
intro: 'Você pode fazer assinatura para conversas individuais em problemas, pull requests e discussões de equipe, mesmo que não esteja inspecionando o repositório ou um integrante da equipe em que a conversa está ocorrendo. Se não estiver mais interessado em uma conversa, cancele a assinatura dela ou personalize os tipos de notificações a receber.'
versions:
  enterprise-server: <2.21
---

### Gerenciar configurações de notificação sobre um problema ou uma pull request

{% if currentVersion ver_lt "enterprise-server@2.18" %}Quando você faz assinatura para uma conversa em um problema ou uma pull request, recebe notificações sobre cada atualização na conversa, mesmo que não esteja participando dela.

Quando você cancela a assinatura de uma conversa em um problema ou uma pull request, deixa de receber notificações sobre ela. Se a conversa fizer menção a você ou a uma equipe da qual faça parte, você começará a receber notificações novamente. Para obter mais informações sobre @menções, consulte "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Escolha um problema ou uma pull request para assinar.
{% if currentVersion ver_gt "enterprise-server@2.17" %}
4. Na barra lateral direita, clique em **Subscribe** (Fazer assinatura) ou em **Unsubscribe** (Cancelar assinatura). ![Botão Conversation Subscribe (Assinatura de conversas)](/assets/images/help/notifications/subscribe_button_with_gear.png)
5. Para personalizar as notificações, clique em {% octicon "gear" aria-label="The gear icon" %}. ![Botão de configuração ao lado de Conversation Subscribe (Assinatura de conversas)](/assets/images/help/notifications/subscribe_button_with_gear_chosen.png)
6. Selecione o tipo de notificações que deseja receber sobre esta conversa e clique em **Save** (Salvar). ![Lista de opções Conversation Subscribe (Assinatura de conversas)](/assets/images/help/notifications/subscribe_options.png)
{% else %}
4. Para fazer ou cancelar a assinatura de uma conversa, clique em **Subscribe** (Fazer assinatura) ou em **Unsubscribe** (Cancelar assinatura) na barra lateral direita. ![Botão Conversation Subscribe (Assinatura de conversas)](/assets/images/help/notifications/subscribe_button.png)
{% endif %}
Você pode ver uma lista de todos os problemas e pull requests que assinou. Para obter mais informações, consulte "[Listar os problemas e as pull requests que você assinou](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-issues-and-pull-requests-youre-subscribed-to)".

### Fazer assinatura para discussões de equipe

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. Na página da equipe, localize a discussão que deseja assinar.
6. No canto superior direito da discussão, clique em {% octicon "unmute" aria-label="The subscribe symbol" %} para fazer assinatura para a discussão.![Botão Subscribe (Fazer assinatura) da discussão de equipe](/assets/images/help/notifications/team-discussion-subscribe-button.png)

### Cancelar a assinatura de discussões de equipe

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. Na página da equipe, localize a discussão da qual deseja cancelar a assinatura.
6. No canto superior direito da discussão, clique em {% octicon "mute" aria-label="The unsubscribe symbol" %} para cancelar a assinatura da discussão. ![Botão Subscribe (Fazer assinatura) da discussão de equipe](/assets/images/help/notifications/team-discussion-unsubscribe-button.png)

### Leia mais

- "[Sobre notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[Sobre conversas no {% data variables.product.product_name %}](/articles/about-conversations-on-github)"
- "<a href="/enterprise/[/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories">Fazer a inspeção e cancelar a inspeção de repositórios](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"

- "<a href="/enterprise/[/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching">Listar os repositórios que você está inspecionando](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
