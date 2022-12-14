---
title: Просмотр сведений об использовании GitHub Advanced Security
intro: 'Можно просмотреть потребление {% data variables.product.prodname_GH_advanced_security %} для предприятия.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
ms.openlocfilehash: e91314c3a0f853cc59b4125ea068f274cdd5101d
ms.sourcegitcommit: c45cc7325ed19e69ddd7506e46fcafd0b5182b3f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/12/2022
ms.locfileid: '148019608'
---
## Сведения о лицензиях на {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-ghas-license-seats %} Дополнительные сведения см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% ifversion ghas-committers-calculator %} Можно вычислить, сколько дополнительных рабочих мест будет использовано, если включить {% data variables.product.prodname_GH_advanced_security %} для большего количества организаций и репозиториев с помощью панели мониторинга администрирования сайта. Дополнительные сведения см. в разделе [Панель мониторинга администрирования сайта](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-active-committers).
{% endif %}

## Просмотр сведений об использовании лицензий на {% data variables.product.prodname_GH_advanced_security %} в учетной записи организации

Вы можете проверить, сколько рабочих в вашей лицензии и сколько из них в настоящее время используется.

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} В разделе {% data variables.product.prodname_GH_advanced_security %} приводятся подробные сведения о текущем использовании.
  ![{% data variables.product.prodname_GH_advanced_security %} параметрах лицензирования организации](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) Если рабочие места закончились, раздел будет красным и содержать сообщение "Превышено ограничение". Следует либо сократить использование {% data variables.product.prodname_GH_advanced_security %}, либо приобрести больше рабочих мест. Дополнительные сведения см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security).
  ![{% data variables.product.prodname_GH_advanced_security %} в параметрах лицензирования организации с сообщением "Превышено ограничение"](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. Если необходимо просмотреть подробную разбивку использования для каждого отдела, на левой боковой панели щелкните **Выставление счетов**.
  ![Вкладка "Выставление счетов" на боковой панели параметров корпоративной учетной записи](/assets/images/help/business-accounts/settings-billing-tab.png) В разделе {% data variables.product.prodname_GH_advanced_security %} можно увидеть количество пользователей, выполнивших фиксации, в том числе уникальные, для каждого отдела.
  ![{% data variables.product.prodname_GH_advanced_security %} в параметрах выставления счетов организации](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. При необходимости щелкните название отдела, владельцем которого являетесь, чтобы отобразить параметры безопасности и анализа для отдела.
  ![Собственные организации в разделе {% data variables.product.prodname_GH_advanced_security %} параметров выставления счетов организации](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. На странице параметров "Анализ и безопасность" прокрутите содержимое до раздела "Репозитории {% data variables.product.prodname_GH_advanced_security %}", чтобы просмотреть подробную разбивку использования по репозиториям этого отдела.
  ![Раздел репозиториев {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа в организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} В разделе {% data variables.product.prodname_GH_advanced_security %} приводятся подробные сведения о текущем использовании. Вы можете увидеть общее количество используемых рабочих мест, а также таблицу с количеством пользователей, выполнивших фиксации, в том числе уникальные, в каждом отделе.
  ![Раздел {% data variables.product.prodname_GH_advanced_security %} лицензии Enterprise](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. При необходимости щелкните название отдела, владельцем которого являетесь, чтобы отобразить параметры безопасности и анализа для отдела.
  ![Собственные организации в разделе {% data variables.product.prodname_GH_advanced_security %} параметров выставления счетов организации](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. На странице параметров "Анализ и безопасность" прокрутите содержимое до раздела "Репозитории {% data variables.product.prodname_GH_advanced_security %}", чтобы просмотреть подробную разбивку использования по репозиториям этого отдела.
  ![Раздел репозиториев {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа в организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

{% endif %}

{% ifversion ghec или ghes > 3,3 %}

## Скачивание сведений об использовании лицензии {% data variables.product.prodname_GH_advanced_security %}

Вы можете скачать CSV-файл со сведениями об использовании лицензии {% data variables.product.prodname_GH_advanced_security %} на уровне организации или отделов. CSV-файл содержит сведения о каждом используемом рабочем месте {% data variables.product.prodname_advanced_security %}, в том числе следующие:

- имя пользователя, занимающего рабочее место;
- репозитории с поддержкой {% data variables.product.prodname_advanced_security %}, в которые были выполнены фиксации;
- отделы, к которым относятся пользователи, занимающие рабочие места;
- даты последних фиксаций.

С помощью этой информации можно получать аналитические сведения об использовании лицензий {% data variables.product.prodname_advanced_security %}. Например, можно узнать, кто из сотрудников организации использует рабочее место {% data variables.product.prodname_advanced_security %} или как лицензии {% data variables.product.prodname_advanced_security %} потребляются в отделах.

CSV-файл со сведениями об использовании лицензии {% data variables.product.prodname_advanced_security %} можно скачать с помощью пользовательского интерфейса {% data variables.product.product_name %} или REST API.

### Скачивание сведений об использовании лицензии {% data variables.product.prodname_advanced_security %} через пользовательский интерфейс

#### На уровне отдела

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
1. В разделе "{% данных variables.product.prodname_GH_advanced_security %}" щелкните **{% octicon "download" aria-label="Значок скачивания" %} CSV-отчет** рядом с "Фиксации".
  ![Кнопка скачивания данных на уровне отдела](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### На уровне организации

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. В разделе "{% данных variables.product.prodname_GH_advanced_security %}" щелкните **{% octicon "download" aria-label="Значок скачивания" %} CSV-отчет** рядом с пунктом "Фиксации".
  ![Кнопка скачивания данных на уровне организации](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### Скачивание сведений об использовании лицензии {% data variables.product.prodname_advanced_security %} через REST API

Сведения об использовании {% data variables.product.prodname_advanced_security %} можно получать с помощью API выставления счетов.

{% ifversion ghec %}

Для данных уровня отдела используйте конечную точку `/orgs/{org}/settings/billing/advanced-security`. Дополнительные сведения см. в разделе [Выставление счетов](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization) в документации по REST API {% data variables.product.prodname_dotcom %}.

{% endif %}

Для данных уровня организации используйте конечную точку `/enterprises/{enterprise}/settings/billing/advanced-security`. Дополнительные сведения см. в разделе [Администрирование {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise) в документации по REST API {% data variables.product.prodname_dotcom %}.

{% endif %}
