---
title: Просмотр обзора безопасности
intro: 'Переход к разным представлениям, которые доступны в обзоре безопасности'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
ms.openlocfilehash: bc802d290406bb4e480050ee21bb7a4687475d97
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163222'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Просмотр обзора безопасности для организации

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Выберите обзор, который вы хотите отобразить, в параметрах на боковой панели.
1. Используйте раскрывающиеся фильтры и поле поиска, чтобы сосредоточиться на наиболее интересующей вас информации. Представления "Угрозы безопасности" и "Покрытие безопасности" также имеют интерактивный заголовок, который можно использовать для фильтрации результатов.

  ![Снимок экрана: представление "Угрозы безопасности" с выделенным интерактивным заголовком](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Чтобы просмотреть агрегированные сведения о типах оповещений, щелкните **Показать больше**.
  ![Кнопка](/assets/images/help/security-overview/security-overview-show-more-button.png) "Показать дополнительно" {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-alert-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![Снимок экрана: страница](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png) сканирования кода {% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Просмотр обзора безопасности для предприятия

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. На левой боковой панели щелкните {% octicon "shield" aria-label="The shield icon" %} **Безопасность кода**.
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Просмотр обзора безопасности для команды

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %} {% endif %}
