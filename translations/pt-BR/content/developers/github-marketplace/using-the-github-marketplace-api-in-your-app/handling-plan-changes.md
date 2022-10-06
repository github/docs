---
title: Gerenciar mudanças de plano
intro: 'O upgrade ou o downgrade de um aplicativo do {% data variables.product.prodname_marketplace %} dispara o webhook do [evento `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) com a ação `changed`, o que inicia o fluxo de upgrade ou downgrade.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /developers/github-marketplace/handling-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: fd5cc838c01130ab9e8a1f7c040b254655cbaef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126744'
---
Para obter mais informações sobre como fazer upgrade e downgrade no que diz respeito à cobrança, confira "[Integração à API do {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/)".

## Etapa 1. Evento de mudança de plano de preços

O GitHub envia o webhook `marketplace_purchase` com a ação `changed` para seu aplicativo quando um cliente faz uma dessas alterações no pedido do {% data variables.product.prodname_marketplace %}:
* Faz a atualização para um plano de preços mais caro ou para um plano de preços mais barato.
* Adiciona ou remove estações para seu plano existente.
* Altera o ciclo de cobrança.

O GitHub enviará o webhook quando a alteração entrar em vigor. Por exemplo, quando um cliente faz o downgrade de um plano, o GitHub envia o webhook no final do ciclo de cobrança do cliente. O GitHub envia um webhook para o seu aplicativo imediatamente quando um cliente atualiza seu plano para permitir que acesse o novo serviço imediatamente. Se um cliente mudar de um ciclo de cobrança mensal para anual, isso é considerado uma atualização. Confira "[Como cobrar os clientes no {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/billing-customers-in-github-marketplace/)" para saber mais sobre as ações que são consideradas um upgrade ou um downgrade.

Leia a `effective_date`, a `marketplace_purchase` e a `previous_marketplace_purchase` no webhook `marketplace_purchase` para atualizar a data de início do plano e fazer alterações no período de cobrança e no plano de preços do cliente. Confira "[Eventos de webhook do {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" para ver um exemplo da carga do evento `marketplace_purchase`.

Se o aplicativo oferecer avaliações gratuitas, você receberá o webhook `marketplace_purchase` com a ação `changed` quando a avaliação gratuita vencer. Se o teste grátis do cliente expirar, faça a atualização do cliente para a versão paga do plano grátis de teste.

## Etapa 2. Atualizar as contas dos clientes

Você precisará atualizar as informações da conta do cliente para refletir as alterações no ciclo de cobrança e no plano de preços que o cliente fez em seu pedido do {% data variables.product.prodname_marketplace %}. Exiba os upgrades para o plano de preços, a `seat_count` (para os planos de preços por unidade) e o período de cobrança no site do aplicativo do Marketplace ou na interface do usuário do aplicativo quando você receber o webhook de ação `changed`.

Quando um cliente faz o downgrade de um plano, recomenda-se revisar se o cliente excedeu os limites do seu plano e interagir diretamente com ele na sua interface de usuário ou entrando em contato por telefone ou e-mail.

Para incentivar as pessoas a fazer a atualização, você pode exibir uma URL de upgrade na interface do usuário do seu aplicativo. Confira "[Sobre as URLs de upgrade](#about-upgrade-urls)" para obter mais detalhes.

{% note %}

**Observação:** recomendamos executar uma sincronização periódica usando `GET /marketplace_listing/plans/:id/accounts` para garantir que o seu aplicativo tenha as informações do período de cobrança, a contagem de unidades e o plano corretos (para o preço por unidade) para cada conta.

{% endnote %}

## Falha nos pagamentos de atualização

{% data reusables.marketplace.marketplace-failed-purchase-event %}

## Sobre as URLs de atualização

Você pode redirecionar os usuários da interface de usuário do seu aplicativo no GitHub, usando uma URL de atualização:

```text
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

Por exemplo, se você notar que um cliente está em um plano de 5 pessoas e precisa passar para um plano de 10 pessoas, você poderia exibir um botão na interface do usuário do seu aplicativo que diz "Aqui está como atualizar" ou exibir um banner com um link para a URL de atualização. A URL atualização leva o cliente para a página de confirmação de confirmação da atualização do seu plano da listagem.

Use o `LISTING_PLAN_NUMBER` do plano que o cliente deseja comprar. Quando você cria planos de preços, ele recebe um `LISTING_PLAN_NUMBER`, que é exclusivo de cada plano na listagem, e uma `LISTING_PLAN_ID`, que é exclusiva de cada plano no {% data variables.product.prodname_marketplace %}. Encontre esses números ao [listar os planos](/rest/reference/apps#list-plans), que identificam os planos de preços da sua listagem. Use a `LISTING_PLAN_ID` e o ponto de extremidade "[Listar as contas de um plano](/rest/reference/apps#list-accounts-for-a-plan)" para obter a `CUSTOMER_ACCOUNT_ID`.


{% note %}

**Observação:** se o cliente fizer upgrades para unidades adicionais (como estações), você ainda poderá enviá-las ao plano apropriado da compra dele, porém, no momento, não podemos dar suporte a parâmetros `unit_count`.

{% endnote %}
