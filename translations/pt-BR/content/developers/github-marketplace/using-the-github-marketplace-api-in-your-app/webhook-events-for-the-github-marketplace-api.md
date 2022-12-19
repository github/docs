---
title: Eventos do Webhook para a API do GitHub Marketplace
intro: 'Um aplicativo do {% data variables.product.prodname_marketplace %} recebe informações sobre mudanças no plano de um usuário no webhook do evento de compra no Marketplace. Um evento de compra no Marketplace é acionado quando um usuário compra, cancela ou muda seu plano de pagamento.'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhook events
ms.openlocfilehash: 63b99005c5b0da23c59794d8fd7ad724f5afd13a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710400'
---
## Carga do webhook de compra no {% data variables.product.prodname_marketplace %}

As solicitações `POST` de webhooks têm cabeçalhos especiais. Confira "[Cabeçalhos de entrega de webhook](/webhooks/event-payloads/#delivery-headers)" para obter mais detalhes. O GitHub não reenvia tentativas de entrega com falha. Certifique-se de que seu aplicativo possa receber todas as cargas de webhook enviados pelo GitHub.

Os cancelamentos e downgrades entram em vigor no primeiro dia do próximo ciclo de cobrança. Os eventos para downgrades e cancelamentos são enviados quando o novo plano entra em vigor no início do próximo ciclo de cobrança. Os eventos referentes às novas compras e atualizações entram em vigor imediatamente. Use a `effective_date` na carga de webhook para determinar quando uma alteração será iniciada.

{% data reusables.marketplace.marketplace-malicious-behavior %}

Cada carga de webhook `marketplace_purchase` terá as seguintes informações:


Chave | Tipo | Descrição
----|------|-------------
`action` | `string` | A ação realizada para gerar o webhook. Pode ser `purchased`, `cancelled`, `pending_change`, `pending_change_cancelled` ou `changed`. Para obter mais informações, consulte o exemplo de cargas de webhook abaixo. **Observação:** as cargas `pending_change` e `pending_change_cancelled` contêm as mesmas chaves mostradas no [exemplo de conteúdo `changed`](#example-webhook-payload-for-a-changed-event).
`effective_date` | `string` | A data em que a `action` se torna efetiva.
`sender` | `object` | A pessoa que executou a `action` que disparou o webhook.
`marketplace_purchase` | `object` | Informações de compra do {% data variables.product.prodname_marketplace %}.

O objeto `marketplace_purchase` tem as seguintes chaves:

Chave | Tipo | Descrição
----|------|-------------
`account` | `object` | A conta `organization` ou `user` associada à assinatura. As contas da organização incluirão `organization_billing_email`, que é o endereço de email administrativo da organização. Para encontrar endereços de email para contas pessoais, use o ponto de extremidade [Obter o usuário autenticado](/rest/reference/users#get-the-authenticated-user).
`billing_cycle` | `string` | Pode ser `yearly` ou `monthly`. Quando o proprietário da `account` tiver um plano gratuito do GitHub e tiver comprado um plano gratuito do {% data variables.product.prodname_marketplace %}, o `billing_cycle` será `nil`.
`unit_count`  | `integer` | Número de unidades compradas.
`on_free_trial` | `boolean` | `true` quando a `account` estiver em uma avaliação gratuita.
`free_trial_ends_on` | `string` | A data em que o teste grátis expirará.
`next_billing_date` | `string` | A data em que começará o próximo ciclo de faturamento. Quando o proprietário da `account` tiver um plano gratuito do GitHub.com e tiver comprado um plano gratuito do {% data variables.product.prodname_marketplace %}, a `next_billing_date` será `nil`.
`plan` | `object` | O plano comprado pelo `user` ou pela `organization`.

O objeto `plan` tem as seguintes chaves:

Chave | Tipo | Descrição
----|------|-------------
`id` | `integer` | O identificador exclusivo para este plano.
`name` | `string` | O nome do plano.
`description` | `string` | Descrição deste plano.
`monthly_price_in_cents` | `integer` | O preço mensal deste plano em centavos (moeda americana). Por exemplo, uma listagem que custa 10 dólares por mês será 1000 centavos.
`yearly_price_in_cents` | `integer` | O preço anual deste plano em centavos (moeda americana). Por exemplo, uma listagem que custa 100 dólares por mês será 120 mil centavos.
`price_model` | `string` | O modelo de preço para esta listagem. Pode ser `flat-rate`, `per-unit` ou `free`.
`has_free_trial` | `boolean` | `true` quando essa listagem oferecer uma avaliação gratuita.
`unit_name` | `string` | O nome da unidade. Se o modelo de preços não for `per-unit`, isso será `nil`.
`bullet` | `array of strings` | Os nomes dos marcadores estabelecidos no plano de preços.

<br/>

### Exemplo de carga de webhook para um evento `purchased`
Este exemplo fornece a carga do evento `purchased`.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### Exemplo de carga de webhook para um evento `changed`

As alterações em um plano incluem atualizações e downgrades. Este exemplo representa as cargas dos eventos `changed`, `pending_change` e `pending_change_cancelled`. A ação identifica qual destes três acontecimentos ocorreu.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### Exemplo de carga de webhook para um evento `cancelled`

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
