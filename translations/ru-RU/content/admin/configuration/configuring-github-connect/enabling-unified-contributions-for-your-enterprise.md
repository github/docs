---
title: Включении функции общего вклада для предприятия
shortTitle: Unified contributions
intro: 'Вы можете разрешить пользователям включать анонимизированные счетчики вкладов для работы над {% данных variables.location.product_location %} в графах вкладов на {% данных variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-contributions-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified contributions between {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
ms.openlocfilehash: 6c9fa2c07de998a0b4cc4988786de51c9b79f87c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098341'
---
{% data reusables.github-connect.beta %}

## Сведения о функции общего вклада

Как владелец предприятия, вы можете разрешить конечным пользователям отправлять анонимные счетчики вкладов для своей работы с {% данных variables.location.product_location %} на их {% данных variables.product.prodname_dotcom_the_website %}.

После включения {% данных variables.enterprise.prodname_unified_contributions %}, прежде чем отдельные пользователи смогут отправлять счетчики вкладов из {% данных variables.location.product_location %} в {% данных variables.product.prodname_dotcom_the_website %}, каждый пользователь также должен подключить свою учетную запись пользователя к {% данных variables.product.product_name %} с помощью личной учетной записи на {% данных variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделе [Отправка вкладов предприятия в профиль {% data variables.product.prodname_dotcom_the_website %}](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile).

{% data reusables.github-connect.sync-frequency %}

Если владелец предприятия отключит эту функцию или отдельные пользователи откажутся от подключения, счетчики вкладов из {% data variables.product.product_name %} на {% data variables.product.prodname_dotcom_the_website %} будут удалены. Если пользователь повторно подключит свои профили после отключения, счетчики вкладов за последние 90 дней будут восстановлены.

{% data variables.product.product_name %} отправляет **только** счетчик вкладов и источник ({% data variables.product.product_name %}) для подключенных пользователей. Никакие сведения о вкладе или о том, как он был сделан, не отправляются.

## Включение функции общего вклада

Перед включением {% данных variables.enterprise.prodname_unified_contributions %} для {% данных variables.location.product_location %}необходимо включить {% данных variables.product.prodname_github_connect %}. Дополнительные сведения см. в статье "[Управление {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Войдите в {% данных variables.location.product_location %} и {% данных variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. В разделе "Разрешить совместное использование счетчиков вкладов на {% data variables.product.prodname_dotcom_the_website %}" щелкните **Запросить доступ**.
  ![Запрос доступа к функции общего вклада](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. Чтобы ознакомиться с дальнейшими инструкциями, [войдите](https://enterprise.github.com/login) на сайт {% data variables.product.prodname_ghe_server %}.

При получении запроса на доступ мы можем перенаправить вас на сайт {% data variables.product.prodname_ghe_server %} для ознакомления с текущими условиями предоставления услуг.
{% endif %}
