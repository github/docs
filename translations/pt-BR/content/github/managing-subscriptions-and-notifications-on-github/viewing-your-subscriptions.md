---
title: Visualizando suas assinaturas
intro: 'Para entender de onde suas notificações estão vindo e o volume de suas notificações, recomendamos analisar suas assinaturas e repositórios inspecionados regularmente.'
redirect_from:
  - /articles/subscribing-to-conversations/
  - /articles/unsubscribing-from-conversations/
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories/
  - /articles/unwatching-repositories/
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories/
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

Você recebe notificações para suas assinaturas de atividades contínuas em {% data variables.product.product_name %}. Há muitos motivos para você assinar uma conversa. Para obter mais informações, consulte "[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)".

Recomendamos a auditoria e o cancelamento das suas assinaturas como parte de um fluxo de trabalho de notificações saudáveis. Para obter mais informações sobre suas opções para cancelamento de assinatura, consulte "[Gerenciando assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

### Diagnosticando os motivos de receber muitas notificações

Quando sua caixa de entrada tiver muitas notificações para gerenciar, considere se você se inscreveu mais de uma vez ou como você pode alterar suas configurações de notificação para reduzir as assinaturas que você tem e os tipos de notificações que está recebendo. Por exemplo, você pode considerar desabilitar as configurações para inspecionar automaticamente todos os repositórios e todas as discussões da equipe sempre que você ingressar em uma equipe ou repositório.

![Inspeção automática](/assets/images/help/notifications-v2/automatic-watching-example.png)

Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)".

Para ter uma visão geral das assinaturas de seu repositório, consulte "[Revisando repositórios que você está inspecionando](#reviewing-repositories-that-youre-watching).
{% if currentVersion == "free-pro-team@latest" or  currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
{% tip %}

**Dica:** Você pode selecionar os tipos de evento a serem notificados utilizando a opção **Personalizar** na lista suspensa **Inspecionar/Cancelar inspeção** na sua [página](https://github.com/watching) ou em qualquer página de repositório em {% data variables.product.product_name %}. Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".

{% endtip %}
{% endif %}

Muitas pessoas esquecem os repositórios que eles escolheram inspecionar no passado. Na página "Repositórios inspecionados" você pode rapidamente deixar de acompanhar repositórios. Para obter mais informações sobre formas de cancelamento de assinatura, consulte "[Cancelar inspeção de recomendações](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)" em {% data variables.product.prodname_blog %} e "[Gerenciar suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)". Também é possível criar um fluxo de trabalho de triagem para ajudar com as notificações que você recebe. Para obter orientação sobre fluxos de trabalho de triagem, consulte "[Personalizar um fluxo de trabalho para triagem das suas notificações](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)".

### Revisando todas as suas assinaturas

{% data reusables.notifications.access_notifications %}
1. Na barra lateral esquerda, na lista de repositórios da qual você recebe notificações, use o menu suspenso "Gerenciar notificações" para clicar em **Assinaturas**. ![Gerenciar as opções do menu suspenso notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Use os filtros e classifique para limitar a lista de assinaturas e comece a cancelar as assinaturas de conversas das quais você não deseja mais receber notificações.

  ![Página de assinaturas](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**Dicas:**
- Para revisar as assinaturas que você pode ter esquecido, classifique por "assinada menos recentemente".

- Para revisar uma lista de repositórios para os quais você ainda pode receber notificações, consulte a lista de repositórios no menu suspenso "filtrar por repositório".

{% endtip %}

### Revisando repositórios que você está inspecionando

1. Na barra lateral esquerda, na lista de repositórios, use o menu suspenso "Gerenciar notificações" e clique em **Repositórios inspecionados**. ![Gerenciar as opções do menu suspenso notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Avalie os repositórios que você está inspecionando e decida se suas atualizações ainda são relevantes e úteis. Quando você inspeciona um repositório, você será notificado de todas as conversas desse repositório.
{% if currentVersion == "github-ae@latest" or currentVersion ver_lt "enterprise-server@3.1" %}
  ![Página de notificações inspecionadas](/assets/images/help/notifications-v2/watched-notifications.png)
{% elsif currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
  ![Página de notificações inspecionadas](/assets/images/help/notifications-v2/watched-notifications-custom.png)
{% endif %}

  {% tip %}

  **Tip:** Instead of watching a repository, consider only receiving notifications {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}when there are updates to {% data reusables.notifications-v2.custom-notification-types %} (if enabled for the repository), or any combination of these options,{% else %}for releases in a repository,{% endif %} or completely unwatching a repository.

  Quando você deixa de inspecionar um repositório, você ainda pode ser notificado quando for @mencionado ou estiver participando de um thread. Ao definir a configuração para receber notificações de certos tipos de evento, você só será notificado quando houver atualizações desses tipos de eventos no repositório, quando você estiver participando de um tópico ou quando você ou a sua equipe for @mentioned.

  {% endtip %}
