---
title: Конечные точки REST для API GitHub Marketplace
intro: 'Чтобы помочь управлять приложением в {% data variables.product.prodname_marketplace %}, используйте эти конечные точки API {% data variables.product.prodname_marketplace %}.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112496'
---
Ниже приведен ряд полезных конечных точек, доступных для листингов в Marketplace.

* [Список планов](/rest/reference/apps#list-plans)
* [Список учетных записей для плана](/rest/reference/apps#list-accounts-for-a-plan)
* [Получение плана подписки для учетной записи](/rest/reference/apps#get-a-subscription-plan-for-an-account)
* [Список подписок для пользователя, прошедшего проверку подлинности](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

Дополнительные сведения о проверке подлинности при использовании API {% data variables.product.prodname_marketplace %} см. на следующих страницах:

* [Параметры авторизации для пользователей OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/)
* [Параметры проверки подлинности для API GitHub](/apps/building-github-apps/authenticating-with-github-apps/)

{% note %}

**Примечание.** [Ограничения скорости REST API](/rest/overview/resources-in-the-rest-api#rate-limiting) применяются ко всем конечным точкам API {% data variables.product.prodname_marketplace %}.

{% endnote %}
