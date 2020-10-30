---
title: Eventos do Webhook para a API do GitHub Marketplace
intro: 'Um aplicativo do {% data variables.product.prodname_marketplace %} recebe informações sobre mudanças no plano de um usuário no webhook do evento de compra no Marketplace. Um evento de compra no Marketplace é acionado quando um usuário compra, cancela ou muda seu plano de pagamento. Para obter informações sobre como responder a cada um desses tipos de eventos, consulte "[fluxos de cobrança](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)".'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
versions:
  free-pro-team: '*'
---



### Carga do webhook de compra no {% data variables.product.prodname_marketplace %}

As solicitações de `POST` têm cabeçalhos especiais. Consulte "[Cabeçalhos de entrega de Webhook](/webhooks/event-payloads/#delivery-headers)" para obter mais informações. O GitHub não reenvia tentativas falhas de entrega. Certifique-se de que seu aplicativo possa receber todas as cargas do webhook enviadas pelo GitHub.

Os cancelamentos e downgrades entram em vigor no primeiro dia do próximo ciclo de cobrança. Os eventos para downgrades e cancelamentos são enviados quando o novo plano entra em vigor no início do próximo ciclo de cobrança. Os eventos referentes às novas compras e atualizações entram em vigor imediatamente. Use `effective_date` na carga do webhook para determinar quando uma alteração terá início.

{% data reusables.marketplace.marketplace-malicious-behavior %}

Cada carga útil do webhook de `marketplace_purchase` terá as seguintes informações:


| Tecla                  | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação`                 | `string` | A ação realizada para gerar o webhook. Pode ser `comprado`, `cancelado`, `pending_change`, `pending_change_cancelled`, ou `alterado`. Para obter mais informações, consulte o exemplo de cargas de webhook abaixo. **Observação:** As cargas `pending_change` e `pending_change_cancelled` contêm as mesmas chaves mostradas no exemplo na carga [`alterado` da carga](#example-webhook-payload-for-a-changed-event). |
| `effective_date`       | `string` | A data da `ação` entra em vigor.                                                                                                                                                                                                                                                                                                                                                                                      |
| `remetente`            | `objeto` | A pessoa que realizou a `ação` que acionou o webhook.                                                                                                                                                                                                                                                                                                                                                                 |
| `marketplace_purchase` | `objeto` | Informações de compra do {% data variables.product.prodname_marketplace %}.                                                                                                                                                                                                                                                                                                                                           |

O objeto `marketplace_purchase` tem as seguintes chaves:

| Tecla                | Tipo      | Descrição                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conta`              | `objeto`  | A conta da `organização` ou do `usuário` associada à assinatura. As contas da organização incluirão `organization_billing_email`, que é o endereço de e-mail administrativo da organização. Para encontrar endereços de e-mail para contas pessoais, você pode usar o ponto de extremidade [Obter o usuário autenticado](/v3/users/#get-the-authenticated-user). |
| `billing_cycle`      | `string`  | Pode ser `anual` ou `mensal`. Quando a o proprietário da `conta` tem um plano grátis do GitHub e comprou um plano grátis do {% data variables.product.prodname_marketplace %}, o `billing_cycle` será `nulo`.                                                                                                                                                    |
| `unit_count`         | `inteiro` | Número de unidades compradas.                                                                                                                                                                                                                                                                                                                                    |
| `on_free_trial`      | `boolean` | `verdadeiro` quando a `conta` está em um teste grátis.                                                                                                                                                                                                                                                                                                           |
| `free_trial_ends_on` | `string`  | A data em que o teste grátis expirará.                                                                                                                                                                                                                                                                                                                           |
| `next_billing_date`  | `string`  | A data em que começará o próximo ciclo de faturamento. Quando o proprietário da `conta` tem um plano grátis do GitHub.com e comprou um plano grátis do {% data variables.product.prodname_marketplace %}, o `next_billing_date` será `nulo`.                                                                                                                     |
| `plano`              | `objeto`  | O plano comprado pelo usuário `` ou `organização`.                                                                                                                                                                                                                                                                                                               |

O objeto `plano` tem as chaves a seguir:

| Tecla                    | Tipo               | Descrição                                                                                                                             |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `inteiro`          | O identificador exclusivo para este plano.                                                                                            |
| `name`                   | `string`           | O nome do plano.                                                                                                                      |
| `descrição`              | `string`           | Descrição deste plano.                                                                                                                |
| `monthly_price_in_cents` | `inteiro`          | O preço mensal deste plano em centavos (moeda americana). Por exemplo, uma listagem que custa 10 dólares por mês será 1000 centavos.  |
| `yearly_price_in_cents`  | `inteiro`          | O preço anual deste plano em centavos (moeda americana). Por exemplo, uma listagem que custa 100 dólares por mês será 10000 centavos. |
| `price_model`            | `string`           | O modelo de preço para esta listagem. Pode ser uma das `tarifas fixas`, `por unidade`, ou `grátis`.                                   |
| `has_free_trial`         | `boolean`          | `verdadeiro` quando esta listagem oferece um teste grátis.                                                                            |
| `unit_name`              | `string`           | O nome da unidade. Se o modelo de preços não é `por unidade`, será `nulo`.                                                            |
| `marcador`               | `array de strigns` | Os nomes dos marcadores estabelecidos no plano de preços.                                                                             |

<br/>

#### Exemplo de carga de webhook para um evento `comprado`
Este exemplo fornece a carga do evento `comprado`.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

#### Exemplo de carga de webhook para um evento `alterado`

As alterações em um plano incluem atualizações e downgrades. Este exemplo representa as cargas de eventos `alterados`,`pending_change` e `pending_change_cancelled`. A ação identifica qual destes três acontecimentos ocorreu.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

#### Exemplo de carga de webhook para um evento `cancelado`

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
