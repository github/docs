---
title: Сведения о выставлении счетов для GitHub Advanced Security
intro: 'Если вы хотите использовать возможности {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} в частном или внутреннем репозитории{% endif %}, вам понадобится лицензия{% ifversion fpt %} для вашего предприятия{% endif %}.{% ifversion fpt or ghec %} Эти возможности доступны бесплатно для общедоступных репозиториев на {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
ms.openlocfilehash: bf93c4b5a6ea980012552af5eeab70a1ffcbdf16
ms.sourcegitcommit: 248e974c64f2439c6756a2c644ec77a98b8d3ecd
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/13/2022
ms.locfileid: '148045453'
---
## Сведения о выставлении счетов для {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

Если вы хотите использовать функции {% data variables.product.prodname_GH_advanced_security %} в любом репозитории, кроме общедоступного репозитория на {% data variables.product.prodname_dotcom_the_website %}, потребуется лицензия {% data variables.product.prodname_GH_advanced_security %}, доступная с {% data variables.product.prodname_ghe_cloud %} или {% data variables.product.prodname_ghe_server %}. 

Сведения о выставлении счетов за {% данных variables.product.prodname_GH_advanced_security %}см. в [документации по {% данных variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% elsif ghec %}

Если вы хотите использовать функции {% data variables.product.prodname_GH_advanced_security %} в любом репозитории, кроме общедоступного репозитория на {% data variables.product.prodname_dotcom_the_website %}, вам потребуется лицензия {% data variables.product.prodname_GH_advanced_security %}. Дополнительную информацию о {% data variables.product.prodname_GH_advanced_security %} см. в разделе [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security).

{% elsif ghes %}

Можно сделать доступными для пользователей дополнительные функции защиты кода, купив и передав лицензию на {% data variables.product.prodname_GH_advanced_security %}. Дополнительную информацию о {% data variables.product.prodname_GH_advanced_security %} см. в разделе [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security).

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

{% ifversion ghes %} Вы можете определить, сколько лицензий потребуется для {% данных variables.product.prodname_GH_advanced_security %}, создав количество активных фиксаций вашего экземпляра на панели мониторинга администратора сайта. Дополнительные сведения см. в разделе [Панель мониторинга администрирования сайта](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-committers).
{% endif %}

Чтобы обсудить лицензирование {% data variables.product.prodname_GH_advanced_security %} для своего предприятия, свяжитесь с {% data variables.contact.contact_enterprise_sales %}.

## Сведения о количестве выполняющих фиксации для {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

Можно применить политики, разрешающие или запрещающие использование {% data variables.product.prodname_advanced_security %} организациями, принадлежащими вашей корпоративной учетной записи. Дополнительные сведения см. в разделе [Обеспечение применения политик для {% data variables.product.prodname_advanced_security %} на предприятии]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %} в документации {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% ifversion fpt or ghes or ghec %}

Дополнительные сведения см. в разделе [Просмотр данных об использовании {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage).

{% endif %}

## Основные сведения об использовании выполняющими фиксации

В следующем примере временной шкалы показано, как количество активных выполняющих фиксации для {% data variables.product.prodname_GH_advanced_security %} может меняться с течением времени на предприятии. Для каждого месяца вы найдете события, а также результирующее количество выполняющих фиксации.

| Дата | События в течение месяца | Всего выполняющих фиксации | 
| :- | :- | -: | 
| <nobr>15 апреля</nobr> | Член предприятия включает {% data variables.product.prodname_GH_advanced_security %} для репозитория **X**. Репозиторий **X** имеет 50 выполняющих фиксации за последние 90 дней. | **50** | 
| <nobr>1 мая</nobr> | Разработчик **А** покидает команду, работающую над репозиторием **X**. Вклады разработчика **А** продолжают подсчитываться в течение 90 дней. | **50** | **50** |
| <nobr>1 августа</nobr> | Вклады разработчика **А** больше не учитываются в отношении необходимых лицензий, так как прошло 90 дней. | <sub>_50 – 1_</sub></br>**49** | 
| <nobr>15 августа</nobr> | Член предприятия включает {% data variables.product.prodname_GH_advanced_security %} для второго репозитория, репозитория **Y**. За последние 90 дней в этот репозиторий внесли свой вклад в общей сложности 20 разработчиков. Из этих 20 разработчиков 10 человек также недавно работали над репозиторием **X** и не требуют дополнительных лицензий. | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>16 августа</nobr> | Член предприятия отключает {% data variables.product.prodname_GH_advanced_security %} для репозитория **X**. Из 49 разработчиков, которые работали над репозиторием **X**, 10 человек все еще работают над репозиторием **Y**, в котором за последние 90 дней внесли свой вклад в общей сложности 20 разработчиков. | <sub>_49 – 29_</sub><br/>**20** |

{% note %}

**Примечание.** Пользователь будет помечен как активный при отправке фиксаций в любую ветвь репозитория, даже если фиксации были созданы более 90 дней назад.

{% endnote %}

## Получения максимума из {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}
