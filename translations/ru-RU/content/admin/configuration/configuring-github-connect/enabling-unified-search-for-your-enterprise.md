---
title: Включение единого поиска для предприятия
shortTitle: Unified search
intro: 'Вы можете разрешить пользователям включать репозитории на {% данных variables.product.prodname_dotcom_the_website %} в результаты поиска при поиске из {% данных variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
ms.openlocfilehash: 84f745f26cf44faa69c867a845324c6f244db9d2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098338'
---
## Сведения о {% данных variables.enterprise.prodname_unified_search %}

{% data reusables.github-connect.beta %}

При включении единого поиска пользователи могут просматривать результаты поиска из содержимого на {% данных variables.product.prodname_dotcom_the_website %} при поиске из {% данных variables.location.product_location %}{% ifversion ghae %} на {% данных variables.product.prodname_ghe_managed %}{% endif %}. 

Вы можете разрешить результаты поиска для общедоступных репозиториев в {% data variables.product.prodname_dotcom_the_website %}, а также отдельно разрешить результаты поиска для частных репозиториев в {% data variables.product.prodname_ghe_cloud %}. Если включить единый поиск частных репозиториев, пользователи могут искать только частные репозитории, к которым у них есть доступ и которые принадлежат подключенной организации или корпоративной учетной записи. Дополнительные сведения см. в разделе [Поиск в {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously).

Пользователи никогда не смогут выполнять поиск {% данных variables.location.product_location %} из {% данных variables.product.prodname_dotcom_the_website %}, даже если у них есть доступ к обеим средам.

После включения единого поиска {% данных variables.location.product_location %}, прежде чем отдельные пользователи смогут просматривать результаты поиска из частных репозиториев на {% данных variables.product.prodname_dotcom_the_website %} в {% данных variables.location.product_location %}, каждый пользователь также должен подключить свою учетную запись пользователя к {% данных variables.product.product_name %} с учетной записью пользователя на {% данных variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в статье [Включение поиска в репозитории {% data variables.product.prodname_dotcom_the_website %} из частной корпоративной учетной записи](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment).

Поиск по API REST and GraphQL не включает результаты поиска {% data variables.product.prodname_dotcom_the_website %}. Расширенный поиск и поиск вики-сайтов в {% data variables.product.prodname_dotcom_the_website %} не поддерживаются.

## Включение {% данных variables.enterprise.prodname_unified_search %}

Перед включением {% данных variables.enterprise.prodname_unified_search %}необходимо включить {% данных variables.product.prodname_github_connect %}. Дополнительные сведения см. в статье "[Управление {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Войдите в {% данных variables.location.product_location %} и {% данных variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. В разделе "Пользователи могут выполнять поиск {% data variables.product.prodname_dotcom_the_website %}" откройте раскрывающееся меню и щелкните **Включено**.
  ![Включение параметра поиска в раскрывающемся меню поиска GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. При необходимости в разделе "Пользователи могут выполнять поиск частных репозиториев {% data variables.product.prodname_dotcom_the_website %}" откройте раскрывающееся меню и щелкните **Включено**.
    ![Включение параметра поиска частных репозиториев в раскрывающемся меню поиска GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
