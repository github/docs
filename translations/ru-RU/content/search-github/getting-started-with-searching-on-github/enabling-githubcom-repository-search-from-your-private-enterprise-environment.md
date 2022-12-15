---
title: Включение поиска репозиториев GitHub.com из частной корпоративной среды
shortTitle: Search GitHub.com from enterprise
intro: 'Вы можете подключить личные учетные записи к {% data variables.product.prodname_dotcom_the_website %} и частной среде {% data variables.product.prodname_enterprise %}, чтобы искать содержимое в определенных репозиториях {% data variables.product.prodname_dotcom_the_website %} {% ifversion fpt or ghec %} в вашей частной среде {% else %} в {% data variables.product.product_name %}{% endif %}.'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
ms.openlocfilehash: b5ef08300124c02dcba2a2e0eacae097b7dfdddd
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098876'
---
## Сведения о поиске репозиториев {% data variables.product.prodname_dotcom_the_website %} из {% data variables.product.product_name %}

Вы можете найти указанные частные репозитории в {% данных variables.product.prodname_ghe_cloud %} из {% данных variables.location.product_location %}{% ifversion ghae %} на {% данных variables.product.prodname_ghe_managed %}{% endif %}. Дополнительные сведения о поиске в разных средах см. в разделе [Сведения о поиске в GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

## Предварительные требования

Владелец предприятия для {% данных variables.product.product_name %} должен включить {% данных variables.product.prodname_github_connect %} и {% данных variables.enterprise.prodname_unified_search %} для частных репозиториев. Дополнительные сведения см. в разделе "[Включение {% данных variables.enterprise.prodname_unified_search %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)".

## Включение поиска репозиториев {% data variables.product.prodname_dotcom_the_website %} из {% data variables.product.product_name %}

1. Войдите в {% data variables.product.product_name %} и {% data variables.product.prodname_dotcom_the_website %}.
1. В {% data variables.product.product_name %} щелкните фото своего профиля в правом верхнем углу любой страницы и выберите **Параметры**.
![Значок параметров в панели пользователя](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
