---
title: Gerenciando suas assinaturas
intro: 'Para ajudá-lo a gerenciar suas notificações de forma eficiente, existem várias maneiras de cancelar a assinatura.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

Para ajudá-lo a entender suas assinaturas e decidir se deseja cancelar sua assinatura, consulte "[Visualizando suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)".

{% note %}

**Observação:** Em vez de cancelar a assinatura, você tem a opção de ignorar um repositório. Nesse caso, você deixará de receber notificações. Não recomendamos ignorar repositórios porque você não será notificado caso seja @mencionado. {% if currentVersion == "free-pro-team@latest" %}Se você estiver passando por abuso e deseja ignorar um repositório, entre em contato com {% data variables.contact.contact_support %} para que possamos ajudar. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### Escolhendo como cancelar a assinatura

Para não inspecionar (ou cancelar a assinatura de) repositórios rapidamente, vá para a página "Repositórios assistidos", onde você pode ver todos os repositórios que você está inspecionando. Para obter mais informações, consulte "[Não inspecionar um repositório](#unwatch-a-repository)".

Para cancelar a assinatura de várias notificações ao mesmo tempo, você pode cancelar a assinatura utilizando sua caixa de entrada ou a página de assinaturas. Ambas as opções oferecem mais contexto sobre suas assinaturas do que a página "Repositórios inspecionados".

#### Benefícios de cancelamento de assinatura de sua caixa de entrada

Ao cancelar a assinatura de notificações em sua caixa de entrada, você tem várias outras opções de triagem e pode filtrar suas notificações por filtros personalizados e tipos de discussão. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)".

#### Benefícios do cancelamento de assinatura na página de assinaturas

Quando você cancelar a assinatura de notificações na página de assinaturas, você pode ver mais das notificações que você assinou e classificá-las por "Assinada mais recentemente" ou "Assinada menos recentemente".

A página de assinaturas mostra todas as notificações para as quais você está atualmente inscrito, incluindo notificações que você marcou como **Concluído** em sua caixa de entrada.

Você só pode filtrar suas assinaturas por repositório e pelo motivo pelo qual está recebendo a notificação.

### Cancelar assinatura de notificações em sua caixa de entrada

Ao cancelar a assinatura de notificações em sua caixa de entrada, elas desaparecerão automaticamente da sua caixa de entrada.

{% data reusables.notifications.access_notifications %}
1. Na caixa de entrada de notificações, selecione as notificações das quais você deseja cancelar sua assinatura.
2. Use o menu suspenso **selecionado** {% octicon "triangle-down" aria-label="The down triangle icon" %} para clicar em **Cancelar inscrição.** ![Cancele a assinatura na caixa de entrada principal](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

### Cancelar assinatura de notificações na página de assinaturas

{% data reusables.notifications.access_notifications %}
1. Na barra lateral esquerda, na lista de repositórios, use o menu suspenso "Gerenciar notificações" para clicar em **Assinaturas**. ![Gerenciar as opções do menu suspenso notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Selecione as notificações que você deseja cancelar a assinatura. No canto superior direito, clique em **Cancelar a assinatura**. ![Página de assinaturas](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

### Deixar de inspecionar um repositório

Quando você deixa de inspecionar um repositório, você cancela sua assinatura de atualizações futuras daquele repositório, a menos que você participe de uma conversa ou seja @mencionado.

{% data reusables.notifications.access_notifications %}
1. Na barra lateral esquerda, na lista de repositórios, use o menu suspenso "Gerenciar notificações" para clicar em **Inspecionar repositórios**. ![Gerenciar as opções do menu suspenso notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Na página de repositórios inspecionados, depois de ter avaliado os repositórios que você está inspecionando, escolha se deseja:
  {% if currentVersion == "github-ae@latest" or currentVersion ver_lt "enterprise-server@3.1" %}
    - Deixar de inspecionar um repositório
    - Only watch releases for a repository
    - Ignore all notifications for a repository
  {% endif %}
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
    - Deixar de inspecionar um repositório
    - Ignore all notifications for a repository
    - Customize the types of event you receive notifications for ({% data reusables.notifications-v2.custom-notification-types %}, if enabled)
  {% endif %}
