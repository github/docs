---
title: Pontos de extremidade de REST para a API do GitHub Marketplace
intro: 'Para ajudar a gerenciar seu aplicativo em {% data variables.product.prodname_marketplace %}, use esses pontos de extremidade da API de {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/github-marketplace-api-endpoints
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /developers/github-marketplace/rest-endpoints-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: REST API
ms.openlocfilehash: aac7df5600863521c482b8a13c31abf8fd103ecf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145093922'
---
Aqui estão alguns pontos de extremidade úteis e disponíveis para listagens do Marketplace:

* [Listar planos](/rest/reference/apps#list-plans)
* [Listar as contas de um plano](/rest/reference/apps#list-accounts-for-a-plan)
* [Obter um plano de assinatura para uma conta](/rest/reference/apps#get-a-subscription-plan-for-an-account)
* [Listar as assinaturas do usuário autenticado](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

Veja estas páginas para obter informações sobre como efetuar a autenticação ao usar a API do {% data variables.product.prodname_marketplace %}:

* [Opções de autorização para Aplicativos OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/)
* [Opções de autenticação para Aplicativos do GitHub](/apps/building-github-apps/authenticating-with-github-apps/)

{% note %}

**Observação:** os [limites de taxa da API REST](/rest/overview/resources-in-the-rest-api#rate-limiting) se aplicam a todos os pontos de extremidade da API do {% data variables.product.prodname_marketplace %}.

{% endnote %}
