---
title: Ограничения скорости для приложений GitHub
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps
  - /apps/building-github-apps/rate-limits-for-github-apps
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Rate limits
ms.openlocfilehash: b699bd6ca5e36d14f42c6745f94acb5fa5ebdf65
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098604'
---
{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## Сведения об ограничениях скорости для приложений

Ограничения скорости для {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %} зависят от плана организации, в которой устанавливается приложение. Дополнительные сведения см. в статьях [Продукты {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) и [Типы учетных записей {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts#organization-accounts).

{% endif %}

## Запросы между серверами

{% ifversion ghec or fpt %}

### Ограничения скорости между серверами по умолчанию для {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% data variables.product.prodname_github_apps %}, которые выполняют запросы между серверами, используют минимальный предел скорости установки, составляющий 5000 запросов в час. Если приложение установлено в организации с более чем 20 пользователями, приложение получает еще 50 запросов в час для каждого пользователя. Установка с более чем 20 репозиториями получает еще 50 запросов в час для каждого репозитория. Максимальное ограничение скорости для установки составляет 12 500 запросов в час.

{% ifversion fpt or ghec %}

### Ограничения скорости между серверами для {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

{% данных variables.product.prodname_github_apps %}, установленных в организации в организации на {% данных variables.location.product_location %}, подлежат ограничению в 15 000 запросов в час в организации, которая установила приложение.

{% endif %}

## Запросы от пользователя к серверу

{% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %} также могут действовать от имени пользователя, выполняя запросы от пользователя к серверу после авторизации пользователя в приложении. Дополнительные сведения см. в статьях [Авторизация {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps) и [Авторизация {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps).

Запросы от пользователя к серверу из {% data variables.product.prodname_oauth_apps %} проходят проверку подлинности с помощью токена OAuth. Запросы от пользователя к серверу из {% data variables.product.prodname_github_apps %} проходят проверку подлинности с помощью токена OAuth либо маркера доступа пользователя с истекающим сроком действия. Дополнительные сведения см. в статьях [Идентификация и авторизация для {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps) и [Авторизация {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps).

{% ifversion fpt or ghec %}

### Ограничения скорости запросов от пользователя к серверу по умолчанию для {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

Ограничения скорости запросов от пользователя к серверу, выполняемые {% data variables.product.prodname_github_apps %}, зависят от того, где установлено приложение. Если приложение установлено в организациях или репозиториях, принадлежащих организации на {% данных variables.location.product_location %}, то скорость выше, чем для установок за пределами предприятия.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### Ограничения скорости запросов от пользователя к серверу для {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## Дополнительные материалы

- [Ограничение скорости](/rest/overview/resources-in-the-rest-api#rate-limiting) в документации по REST API
- [Ограничения ресурсов](/graphql/overview/resource-limitations) в документации по API GraphQL
