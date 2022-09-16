---
title: Visualizando suas assinaturas
intro: 'Para entender de onde suas notificações estão vindo e o volume de suas notificações, recomendamos analisar suas assinaturas e repositórios inspecionados regularmente.'
redirect_from:
  - /articles/subscribing-to-conversations
  - /articles/unsubscribing-from-conversations
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories
  - /articles/unwatching-repositories
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
  - /github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: View subscriptions
ms.openlocfilehash: 34faad79004d34f5beb14e8992b9aff4e6a3ab39
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095108'
---
Você recebe notificações para suas assinaturas de atividades contínuas em {% data variables.product.product_name %}. Há muitos motivos para você assinar uma conversa. Para obter mais informações, confira "[Sobre as notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)".

Recomendamos a auditoria e o cancelamento das suas assinaturas como parte de um fluxo de trabalho de notificações saudáveis. Para obter mais informações sobre as opções de cancelamento de assinatura, confira "[Como gerenciar assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

## Diagnosticando os motivos de receber muitas notificações

Quando sua caixa de entrada tiver muitas notificações para gerenciar, considere se você se inscreveu mais de uma vez ou como você pode alterar suas configurações de notificação para reduzir as assinaturas que você tem e os tipos de notificações que está recebendo. Por exemplo, você pode considerar desabilitar as configurações para inspecionar automaticamente todos os repositórios e todas as discussões da equipe sempre que você ingressar em uma equipe ou repositório.

![Inspeção automática](/assets/images/help/notifications-v2/automatic-watching-example.png)

Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)".

Para ter uma visão geral das assinaturas do repositório, confira "[Como revisar repositórios que você está inspecionando](#reviewing-repositories-that-youre-watching)". {% tip %}

**Dica:** selecione os tipos de evento para notificação usando a opção **Personalizado** do menu suspenso **Inspecionar/Cancelar a inspeção** na [página Inspeção](https://github.com/watching) ou em qualquer página do repositório no {% data variables.product.product_name %}. Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".

{% endtip %}

Muitas pessoas esquecem os repositórios que eles escolheram inspecionar no passado. Na página "Repositórios inspecionados" você pode rapidamente deixar de acompanhar repositórios. Para obter mais informações sobre as maneiras de cancelar a assinatura, confira "[Recomendações de cancelamento da inspeção](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)" no {% data variables.product.prodname_blog %} e "[Como gerenciar suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)". Também é possível criar um fluxo de trabalho de triagem para ajudar com as notificações que você recebe. Para obter diretrizes sobre os fluxos de trabalho de triagem, confira "[Como personalizar um fluxo de trabalho para fazer a triagem das notificações](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)".

## Revisando todas as suas assinaturas

{% data reusables.notifications.access_notifications %}
1. Na barra lateral esquerda, na lista de repositórios dos quais você tem notificações, use o menu suspenso "Gerenciar notificações" para clicar em **Assinaturas**.
  ![Opções do menu suspenso Gerenciar notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Use os filtros e classifique para limitar a lista de assinaturas e comece a cancelar as assinaturas de conversas das quais você não deseja mais receber notificações.

  ![Página de assinaturas](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**Dicas:**
- Para revisar as assinaturas que você pode ter esquecido, classifique por "assinada menos recentemente".

- Para revisar uma lista de repositórios para os quais você ainda pode receber notificações, consulte a lista de repositórios no menu suspenso "filtrar por repositório".

{% endtip %}

## Revisando repositórios que você está inspecionando

1. Na barra lateral esquerda, na lista de repositórios, use o menu suspenso "Gerenciar notificações" e clique em **Repositórios inspecionados**.
  ![Opções do menu suspenso Gerenciar notificações](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Avalie os repositórios que você está inspecionando e decida se suas atualizações ainda são relevantes e úteis. Quando você inspeciona um repositório, você será notificado de todas as conversas desse repositório.
![Página Notificações inspecionadas](/assets/images/help/notifications-v2/watched-notifications-custom.png)

  {% tip %}

  **Dica:** em vez de inspecionar um repositório, considere a possibilidade de apenas receber notificações quando houver atualizações nos {% data reusables.notifications-v2.custom-notification-types %} (se habilitado para o repositório) ou qualquer combinação dessas opções ou cancelar a inspeção por completo de um repositório.
  
  Quando você cancelar a inspeção de um repositório, ainda poderá receber notificações quando for @mentioned ou estiver participando de uma conversa. Quando você configura o recebimento de notificações para determinados tipos de eventos, só é notificado quando há atualizações para esses tipos de eventos no repositório, quando está participando de uma conversa ou quando você ou uma equipe em que você está é @mentioned.

  {% endtip %}
