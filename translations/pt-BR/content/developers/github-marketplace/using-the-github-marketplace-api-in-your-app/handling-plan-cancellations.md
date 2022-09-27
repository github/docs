---
title: Gerenciar cancelamento de plano
intro: 'O cancelamento de um aplicativo {% data variables.product.prodname_marketplace %} dispara o webhook do [`marketplace_purchase` evento](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) com a ação`cancelled`, o que inicia o fluxo de cancelamento.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Plan cancellations
ms.openlocfilehash: 253506f1ac32f55649dd533559a7a16508cca98f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083927'
---
Para obter mais informações sobre o cancelamento no que diz respeito à cobrança, confira "[Cobrança de clientes no {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)".

## Etapa 1. Evento de cancelamento

Se um cliente optar por cancelar um pedido do {% data variables.product.prodname_marketplace %}, o GitHub enviará um webhook [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) com a ação `cancelled` para seu aplicativo quando o cancelamento entrar em vigor. Se o cliente efetuar o cancelamento durante um teste grátis, seu aplicativo receberá o evento imediatamente. Quando um cliente cancelar um plano pago, o cancelamento ocorrerá ao final do ciclo de cobrança do cliente.

## Etapa 2. Desativar as contas dos clientes

Quando um cliente cancela um plano grátis ou pago, seu aplicativo deve realizar essas etapas para concluir o cancelamento:

1. Desative a conta do cliente que cancelou o plano.
1. Revogue o token do OAuth que seu aplicativo recebeu para o cliente.
1. Se o seu aplicativo for um aplicativo OAuth, remova todos os webhooks que seu aplicativo criou para os repositórios.
1. Remova todos os dados do cliente no prazo de 30 dias após o recebimento do evento `cancelled`.

{% note %}

**Observação:** recomendamos usar a `effective_date` do webhook [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) para determinar quando uma alteração de plano ocorrerá e sincronizar periodicamente [Listar as contas de um plano](/rest/reference/apps#list-accounts-for-a-plan). Para obter mais informações sobre webhooks, confira "[Eventos de webhook do {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)".

{% endnote %}
