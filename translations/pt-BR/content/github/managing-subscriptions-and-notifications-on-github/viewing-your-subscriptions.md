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
---

Você recebe notificações para suas assinaturas de atividades contínuas em {% data variables.product.product_name %}. Há muitos motivos para você assinar uma conversa. Para obter mais informações, consulte "[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)".

Recomendamos a auditoria e o cancelamento das suas assinaturas como parte de um fluxo de trabalho de notificações saudáveis. Para obter mais informações sobre suas opções para cancelamento de assinatura, consulte "[Gerenciando assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

### Diagnosticando os motivos de receber muitas notificações

Quando sua caixa de entrada tiver muitas notificações para gerenciar, considere se você se inscreveu mais de uma vez ou como você pode alterar suas configurações de notificação para reduzir as assinaturas que você tem e os tipos de notificações que está recebendo. Por exemplo, você pode considerar desabilitar as configurações para inspecionar automaticamente todos os repositórios e todas as discussões da equipe sempre que você ingressar em uma equipe ou repositório.

![Inspeção automática](/assets/images/help/notifications-v2/automatic-watching-example.png)

Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)".

Para ter uma visão geral das assinaturas de seu repositório, consulte "[Revisando repositórios que você está inspecionando](#reviewing-repositories-that-youre-watching).
{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Tip:** You can select the types of event to be notified of by using the **Custom** option of the **Watch/Unwatch** dropdown list in your [watching page](https://github.com/watching) or on any repository page on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Configuring your watch settings for an individual repository](#configuring-your-watch-settings-for-an-individual-repository)" below.

{% endtip %}
{% endif %}

Muitas pessoas esquecem os repositórios que eles escolheram inspecionar no passado. Na página "Repositórios inspecionados" você pode rapidamente deixar de acompanhar repositórios. For more information on ways to unsubscribe, see "[Unwatch recommendations](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)" on {% data variables.product.prodname_blog %} and "[Managing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)." You can also create a triage workflow to help with the notifications you receive. For guidance on triage workflows, see "[Customizing a workflow for triaging your notifications](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)."

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
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![Página de notificações inspecionadas](/assets/images/help/notifications-v2/watched-notifications.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
  ![Página de notificações inspecionadas](/assets/images/help/notifications-v2/watched-notifications-custom.png)
{% endif %}

  {% tip %}

  **Tip:** Instead of watching a repository, consider only receiving notifications {% if currentVersion == "free-pro-team@latest" %}when there are updates to issues, pull requests, releases or discussions (if enabled for the repository), or any combination of these options,{% else %}for releases in a repository,{% endif %} or completely unwatching a repository.

  Quando você deixa de inspecionar um repositório, você ainda pode ser notificado quando for @mencionado ou estiver participando de um thread. When you configure to receive notifications for certain event types, you're only notified when there are updates to these event types in the repository, you're participating in a thread, or you or a team you're on is @mentioned.

  {% endtip %}

### Configurando as configurações de inspeção para um repositório individual

É possível escolher se deseja inspecionar ou não inspecionar um repositório individual. You can also choose to only be notified of {% if currentVersion == "free-pro-team@latest" %}certain event types such as issues, pull requests, discussions (if enabled for the repository) and {% endif %}new releases, or completely ignore an individual repository.

{% data reusables.repositories.navigate-to-repo %}
2. No canto superior direito, clique no menu suspenso "Inspecionar" para selecionar uma opção de inspeção.
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![Opções de inspeção em um menu suspenso para repositórios](/assets/images/help/notifications-v2/watch-repository-options.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
   ![Opções de inspeção em um menu suspenso para repositórios](/assets/images/help/notifications-v2/watch-repository-options-custom.png)
{% data reusables.notifications-v2.custom-notifications-beta %}
The **Custom** option allows you to further customize notifications so that you're only notified when specific events happen in the repository, in addition to participating and @mentions.

   ![Custom watch options in a drop-down menu for a repository](/assets/images/help/notifications-v2/watch-repository-options-custom2.png)

If you select "Issues", you will be notified about, and subscribed to, updates on every issue (including those that existed prior to you selecting this option) in the repository. If you're @mentioned in a pull request in this repository, you'll receive notifications for that too, and you'll be subscribed to updates on that specific pull request, in addition to being notified about issues.

{% endif %}
