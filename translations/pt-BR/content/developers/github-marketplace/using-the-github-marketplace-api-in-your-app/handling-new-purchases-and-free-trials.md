---
title: Gerenciar novas compras e testes grátis
intro: 'Quando um cliente compra um plano pago, uma avaliação gratuita ou a versão gratuita do seu aplicativo {% data variables.product.prodname_marketplace %}, você recebe o webhook do [evento de `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) com a ação `purchased`, que inicia o fluxo de compras.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: New purchases & free trials
ms.openlocfilehash: b0c1cf055d912cd83e2167bfcbd0136a2644b1aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083930'
---
{% warning %}

Se você oferece um {% data variables.product.prodname_github_app %} em {% data variables.product.prodname_marketplace %}, seu aplicativo deverá identificar usuários seguindo o fluxo de autorização do OAuth. Você não precisa configurar {% data variables.product.prodname_oauth_app %} separadamente para dar suporte a este fluxo. Confira "[Como identificar e autorizar usuários dos {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" para obter mais informações.

{% endwarning %}

## Etapa 1. Compra inicial e evento de webhook

Antes de um cliente comprar seu aplicativo no {% data variables.product.prodname_marketplace %}, ele seleciona um [plano de listagem](/marketplace/selling-your-app/github-marketplace-pricing-plans/). O cliente também escolhe se deseja comprar o aplicativo a partir da sua conta pessoal ou a partir da conta de uma organização.

O cliente efetua a compra clicando em **Concluir pedido e iniciar a instalação**.

Em seguida, o {% data variables.product.product_name %} envia o webhook [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) com a ação `purchased` ao seu aplicativo.

Leia o objeto `effective_date` e `marketplace_purchase` por meio do webhook `marketplace_purchase` para determinar o plano que o cliente comprou, o período em que o ciclo de cobrança é iniciado e o início do próximo ciclo de cobrança.

Se o aplicativo oferecer uma avaliação gratuita, leia o atributo `marketplace_purchase[on_free_trial]` por meio do webhook. Se o valor for `true`, seu aplicativo precisará acompanhar a data de início da avaliação gratuita (`effective_date`) e a data em que a avaliação gratuita termina (`free_trial_ends_on`). Use a data `free_trial_ends_on` para ver os dias restantes em uma avaliação gratuita na interface do usuário do aplicativo. Faça isso em uma barra de notificação ou na [interface do usuário de cobrança](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). Para saber como lidar com cancelamentos antes do término de uma avaliação gratuita, confira "[Como lidar com cancelamentos de planos](/developers/github-marketplace/handling-plan-cancellations)". Confira "[Como lidar com alterações de planos](/developers/github-marketplace/handling-plan-changes)" para descobrir como fazer a transição de uma avaliação gratuita para um plano pago quando uma avaliação gratuita vencer.

Confira "[Eventos de webhook do {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" para ver um exemplo da carga do evento `marketplace_purchase`.

## Etapa 2. Instalação

Se seu aplicativo é {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} irá solicitar ao cliente que selecione quais repositórios o aplicativo pode acessar quando comprá-lo. {% data variables.product.product_name %} em seguida, instala o aplicativo na conta selecionada pelo cliente e concede acesso aos repositórios selecionados.

Neste ponto, se você especificar uma **URL de Configuração** nas configurações do {% data variables.product.prodname_github_app %}, o {% data variables.product.product_name %} redirecionará o cliente para essa URL. Se não especificar uma URL de configuração, você não conseguirá gerenciar as compras do seu {% data variables.product.prodname_github_app %}.

{% note %}

**Observação:** a **URL de Configuração** é descrita como opcional nas configurações do {% data variables.product.prodname_github_app %}, mas é um campo obrigatório se você deseja oferecer seu aplicativo no {% data variables.product.prodname_marketplace %}.

{% endnote %}

Se seu aplicativo for um {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} não irá instalá-lo em qualquer lugar. Em vez disso, o {% data variables.product.product_name %} redireciona o cliente para a **URL de Instalação** especificada na [listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

Quando um cliente compra um {% data variables.product.prodname_oauth_app %}, o {% data variables.product.product_name %} redireciona o cliente para a URL escolhida por você (URL de Configuração ou URL de Instalação) e a URL inclui o plano de preços selecionado pelo cliente como um parâmetro de consulta: `marketplace_listing_plan_id`.

## Etapa 3. Autorização

Quando um cliente compra seu aplicativo, você deve enviar o cliente por meio do fluxo de autorização OAuth:

* Se o seu aplicativo for um {% data variables.product.prodname_github_app %}, inicie o fluxo de autorização assim que o {% data variables.product.product_name %} redirecionar o cliente para a **URL de Configuração**. Siga as etapas descritas em "[Como identificar e autorizar usuários dos {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

* Se o seu aplicativo for um {% data variables.product.prodname_oauth_app %}, inicie o fluxo de autorização assim que o {% data variables.product.product_name %} redirecionar o cliente para a **URL de Instalação**. Siga as etapas descritas em "[Como autorizar o {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/)".

Para qualquer tipo de aplicativo, a primeira etapa é redirecionar o cliente para [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize).

Depois que o cliente concluir a autorização, seu aplicativo receberá um token de acesso do OAuth para o cliente. Você prrecisará desse token para a próxima etapa.

{% note %}

**Observação:** ao autorizar um cliente em uma avaliação gratuita, permita a ele o mesmo acesso que ele terá no plano pago.  Você irá transferi-los para o plano pago após o término do período de teste.

{% endnote %}

## Etapa 4. Provisionar as contas dos clientes

Seu aplicativo deve fornecer uma conta de cliente para todas as novas compras. Usando o token de acesso que você recebeu para o cliente na [Etapa 3. Autorização](#step-3-authorization), chame o ponto de extremidade "[Listar assinaturas do usuário autenticado](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)". A resposta incluirá as informações de `account` do cliente e mostrará se ele está usando uma avaliação gratuita (`on_free_trial`). Use estas informações para concluir a configuração e o provisionamento.

{% data reusables.marketplace.marketplace-double-purchases %}

Se a compra for para uma organização e por usuário, você poderá solicitar que o cliente escolha quais integrantes da organização terão acesso ao aplicativo comprado.

É possível personalizar a forma como os integrantes da organização recebem acesso ao seu aplicativo. Veja algumas sugestões:

**Preço de taxa fixa:** se a compra for feita para uma organização usando o preço de taxa fixa, seu aplicativo poderá [obter todos os membros da organização](/rest/reference/orgs#list-organization-members) por meio da API e solicitar ao administrador da organização que escolha os membros que terão usuários pagos no lado do integrador.

**Preço por unidade:** um método de provisionamento de estações por unidade é permitir que os usuários ocupem uma estação enquanto fazem logon no aplicativo. Quando o cliente atingir o limite de contagem da estação, seu aplicativo poderá alertar o usuário de que ele precisa fazer a atualização do plano de {% data variables.product.prodname_marketplace %}.
