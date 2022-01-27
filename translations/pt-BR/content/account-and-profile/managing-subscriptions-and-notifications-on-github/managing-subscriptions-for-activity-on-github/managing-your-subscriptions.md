---
title: Gerenciando suas assinaturas
intro: 'Para ajudá-lo a gerenciar suas notificações de forma eficiente, existem várias maneiras de cancelar a assinatura.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions
shortTitle: Gerenciar suas assinaturas
---

Para ajudá-lo a entender suas assinaturas e decidir se deseja cancelar sua assinatura, consulte "[Visualizando suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)".

{% note %}

**Observação:** Em vez de cancelar a assinatura, você tem a opção de ignorar um repositório. Nesse caso, você deixará de receber notificações. Não recomendamos ignorar repositórios porque você não será notificado caso seja @mencionado. {% ifversion fpt or ghec %}Se você estiver passando por abuso e deseja ignorar um repositório, entre em contato com {% data variables.contact.contact_support %} para que possamos ajudar. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## Escolhendo como cancelar a assinatura

Para cancelar a inspeção (ou cancelar a assinatura) de repositórios rapidamente, acesse [github.com/watching](https://github.com/watching) para ver todos os repositórios que você está seguindo. Para obter mais informações, consulte "[Cancelando a inspeção de repositórios](#unwatching-repositories)".

Para cancelar a assinatura de várias notificações ao mesmo tempo, você pode cancelar a assinatura utilizando sua caixa de entrada ou a página de assinaturas. Ambas as opções oferecem mais contexto sobre suas assinaturas do que a página "Repositórios inspecionados".

### Benefícios de cancelamento de assinatura de sua caixa de entrada

Ao cancelar a assinatura de notificações em sua caixa de entrada, você tem várias outras opções de triagem e pode filtrar suas notificações por filtros personalizados e tipos de discussão. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)".

### Benefícios do cancelamento de assinatura na página de assinaturas

Quando você cancelar a assinatura de notificações na página de assinaturas, você pode ver mais das notificações que você assinou e classificá-las por "Assinada mais recentemente" ou "Assinada menos recentemente".

A página de assinaturas mostra todas as notificações para as quais você está atualmente inscrito, incluindo notificações que você marcou como **Concluído** em sua caixa de entrada.

Você só pode filtrar suas assinaturas por repositório e pelo motivo pelo qual está recebendo a notificação.

## Cancelar assinatura de notificações em sua caixa de entrada

Ao cancelar a assinatura de notificações em sua caixa de entrada, elas desaparecerão automaticamente da sua caixa de entrada.

{% data reusables.notifications.access_notifications %}
1. Na caixa de entrada de notificações, selecione as notificações das quais você deseja cancelar sua assinatura.
2. Clique em **Cancelar assinatura.** ![Cancele a assinatura na caixa de entrada principal](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## Cancelar assinatura de notificações na página de assinaturas

{% data reusables.notifications.access_notifications %}
1. Na barra lateral esquerda, na lista de repositórios, use o menu suspenso "Gerenciar notificações" para clicar em **Assinaturas**. ![Gerenciar as opções do menu suspenso notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Selecione as notificações que você deseja cancelar a assinatura. No canto superior direito, clique em **Cancelar a assinatura**. ![Página de assinaturas](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## Cancelando a inspeção de repositórios

Quando você deixa de inspecionar um repositório, você cancela sua assinatura de atualizações futuras daquele repositório, a menos que você participe de uma conversa ou seja @mencionado.

{% data reusables.notifications.access_notifications %}
1. Na barra lateral esquerda, na lista de repositórios, use o menu suspenso "Gerenciar notificações" para clicar em **Inspecionar repositórios**.

  ![Gerenciar as opções do menu suspenso notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Na página de repositórios inspecionados, depois de ter avaliado os repositórios que você está inspecionando, escolha se deseja:
   {%- ifversion fpt or ghes > 3.0 or ghae or ghec %}
   - Deixar de inspecionar um repositório
   - Ignorar todas as notificações de um repositório
   - Se habilitado, personalize os tipos de eventos para os quais você recebe notificações ({% data reusables.notifications-v2.custom-notification-types %})
   {%- else %}
   - Deixar de inspecionar um repositório
   - Apenas inspecione versões para um repositório
   - Ignorar todas as notificações de um repositório
   {%- endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. Opcionalmente, cancele a inscrição de todos os repositórios pertencentes a um determinado usuário ou organização, selecione o menu suspenso **Cancelar a inspeção de todos** e clique na organização de cujos repositórios você gostaria de cancelar a assinatura. O botão para cancelar a exibição de todos os repositórios só está disponível se você estiver inspecionando todas as atividades ou notificações personalizadas em mais de 10 repositórios.

   ![Captura de tela do botão "Cancelar a inspeção de todos".](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Clique em **Cancelar a inspeção** para confirmar que você deseja cancelar a inspeção dos repositórios pertencentes ao usuário ou organização selecionada, ou clique em **Cancelar** para cancelar.

   ![Captura de tela do diálogo de confirmação do cancelamento da inspeção de todos.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
