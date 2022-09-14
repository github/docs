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
shortTitle: Manage your subscriptions
ms.openlocfilehash: 750a3a9ad87ff9aa709b84a98f548d85d53072ee
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085316'
---
Para ajudar você a entender suas assinaturas e decidir se deseja cancelá-las, confira "[Como ver suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)".

{% note %}

**Observação:** em vez de cancelar a assinatura, você tem a opção de ignorar um repositório. Nesse caso, você deixará de receber notificações. Não recomendamos ignorar repositórios, pois você não será notificado se for @mentioned. {% ifversion fpt or ghec %}Se você estiver sofrendo abuso e quiser ignorar um repositório, entre em contato com o {% data variables.contact.contact_support %} para que possamos ajudar. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## Escolhendo como cancelar a assinatura

Para cancelar a inspeção (ou cancelar a assinatura) de repositórios rapidamente, navegue até [github.com/watching](https://github.com/watching) para ver todos os repositórios que você está seguindo. Para obter mais informações, confira "[Como cancelar a inspeção de repositórios](#unwatching-repositories)".

Para cancelar a assinatura de várias notificações ao mesmo tempo, você pode cancelar a assinatura utilizando sua caixa de entrada ou a página de assinaturas. Ambas as opções oferecem mais contexto sobre suas assinaturas do que a página "Repositórios inspecionados".

### Benefícios de cancelamento de assinatura de sua caixa de entrada

Ao cancelar a assinatura de notificações em sua caixa de entrada, você tem várias outras opções de triagem e pode filtrar suas notificações por filtros personalizados e tipos de discussão. Para obter mais informações, confira "[Como gerenciar notificações na sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)".

### Benefícios do cancelamento de assinatura na página de assinaturas

Quando você cancelar a assinatura de notificações na página de assinaturas, você pode ver mais das notificações que você assinou e classificá-las por "Assinada mais recentemente" ou "Assinada menos recentemente".

A página de assinaturas mostra todas as notificações nas quais você está inscrito no momento, incluindo as notificações marcadas como **Concluídas** na caixa de entrada.

Você só pode filtrar suas assinaturas por repositório e pelo motivo pelo qual está recebendo a notificação.

## Cancelar assinatura de notificações em sua caixa de entrada

Ao cancelar a assinatura de notificações em sua caixa de entrada, elas desaparecerão automaticamente da sua caixa de entrada.

{% data reusables.notifications.access_notifications %}
1. Na caixa de entrada de notificações, selecione as notificações das quais você deseja cancelar sua assinatura.
2. Clique em **Cancelar assinatura.** 
  ![Opção Cancelar assinatura na caixa de entrada principal](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## Cancelar assinatura de notificações na página de assinaturas

{% data reusables.notifications.access_notifications %}
1. Na barra lateral esquerda, na lista de repositórios, use o menu suspenso "Gerenciar notificações" para clicar em **Assinaturas**.
  ![Opções do menu suspenso Gerenciar notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Selecione as notificações que você deseja cancelar a assinatura. No canto superior direito, clique em **Cancelar assinatura.** 
  ![Página Assinaturas](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## Cancelando a inspeção de repositórios

Quando você cancela a inspeção de um repositório, cancela a assinatura das atualizações futuras desse repositório, a menos que participe de uma conversa ou seja @mentioned.

{% data reusables.notifications.access_notifications %}
1. Na barra lateral esquerda, na lista de repositórios, use o menu suspenso "Gerenciar notificações" para clicar em **Repositórios inspecionados**.

  ![Gerenciar as opções do menu suspenso notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Na página de repositórios inspecionados, depois de ter avaliado os repositórios que você está inspecionando, escolha se deseja:
   
   - Deixar de inspecionar um repositório
   - Ignorar todas as notificações de um repositório
   - Se habilitado, personalize os tipos de eventos para os quais você recebe notificações ({% data reusables.notifications-v2.custom-notification-types %})
   
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. Opcionalmente, para cancelar a assinatura de todos os repositórios pertencentes a determinado usuário ou organização, selecione o menu suspenso **Cancelar a inspeção de todos** e clique na organização de cujos repositórios deseja cancelar a assinatura. O botão para cancelar a exibição de todos os repositórios só está disponível se você estiver inspecionando todas as atividades ou notificações personalizadas em mais de 10 repositórios.

   ![Captura de tela do botão "Cancelar a inspeção de todos".](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Clique em **Cancelar a inspeção de todos** para confirmar se deseja cancelar a inspeção dos repositórios pertencentes à organização ou ao usuário selecionado ou clique em **Cancelar** para cancelar.

   ![Captura de tela do diálogo de confirmação do cancelamento da inspeção de todos.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
