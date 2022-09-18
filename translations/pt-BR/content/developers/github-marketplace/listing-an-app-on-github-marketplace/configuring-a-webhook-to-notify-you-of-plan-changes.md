---
title: Configurar um webhook para notificá-lo de alterações de plano
intro: 'Depois de [criar uma listagem de rascunho de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/), você pode configurar um webhook que notifique quando ocorrerem alterações nos planos da conta do cliente. Depois de configurar o webhook, você pode [lidar com os tipos de eventos do `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) em seu aplicativo.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhooks for plan changes
ms.openlocfilehash: 85ffaa8809860ff4b693075e416723717296f86c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083949'
---
O evento do webhook do {% data variables.product.prodname_marketplace %} só pode ser configurado a partir da página de listagem {% data variables.product.prodname_marketplace %} do seu aplicativo. Você pode configurar todos os outros eventos na [página de configurações do desenvolvedor do aplicativo](https://github.com/settings/developers). Se você não criou uma listagem do {% data variables.product.prodname_marketplace %}, leia "[Como criar um rascunho de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)" para saber como criar uma.

## Criando um webhook

Para criar um webhook para sua listagem do {% data variables.product.prodname_marketplace %}, clique em **Webhook** na barra lateral esquerda da [página de listagem do {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Você verá as seguintes opções de configuração de webhook necessárias para configurar seu webhook:

### URL do conteúdo

{% data reusables.webhooks.payload_url %}

### Tipo de conteúdo

{% data reusables.webhooks.content_type %} O GitHub recomenda usar o tipo de conteúdo `application/json`.

### Segredo

{% data reusables.webhooks.secret %}

### Ativo

Por padrão, as entregas de webhook estão "Ativas". Você pode optar por desativar a entrega das cargas de webhook durante o desenvolvimento, desmarcando "Ativo". Se você desativou as entregas do webhook, será necessário selecionar "Ativo" antes de enviar seu aplicativo para revisão.

## Visualizar entregas do webhook

Depois de configurar o webhook do {% data variables.product.prodname_marketplace %}, você poderá inspecionar o conteúdo da solicitação `POST` na página **Webhook** da [listagem do {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage) do aplicativo. O GitHub não reenvia tentativas de entrega com falha. Certifique-se de que seu aplicativo possa receber todas as cargas de webhook enviados pelo GitHub.

![Inspecione as entregas recentes do webhook de {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_webhook_deliveries.png)
