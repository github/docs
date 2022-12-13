---
title: Настройка оповещений Dependabot
intro: 'Включите создание {% data variables.product.prodname_dependabot_alerts %} при обнаружении новой уязвимой зависимости {% ifversion GH-advisory-db-supports-malware %}или вредоносной программы {% endif %}в одном из репозиториев.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 4eb1e58be21dfd96cf0723a1067757f2105810e5
ms.sourcegitcommit: 421ed92f4157e469e4043b995922d1984a9b3cc1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010120'
---
## Сведения об {% data variables.product.prodname_dependabot_alerts %} для уязвимых зависимостей{% ifversion GH-advisory-db-supports-malware %} и вредоносных программ{% endif %}

{% data reusables.repositories.a-vulnerability-is %} 

{% data variables.product.prodname_dependabot %} сканирует код при добавлении новых рекомендаций в {% data variables.product.prodname_advisory_database %} или графа зависимостей для изменений в репозитории. При обнаружении уязвимых зависимостей{% ifversion GH-advisory-db-supports-malware %} или вредоносных программ{% endif %} создаются соответствующие {% data variables.product.prodname_dependabot_alerts %}. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".

Включить или отключить {% data variables.product.prodname_dependabot_alerts %} можно для:
* вашей личной учетной записи;
* вашего репозитория;
* вашу организацию;

## Управление {% data variables.product.prodname_dependabot_alerts %} для личной учетной записи

{% ifversion fpt or ghec %}

Можно включить или отключить {% data variables.product.prodname_dependabot_alerts %} для всех репозиториев, принадлежащих вашей личной учетной записи.

### Включение и отключение {% data variables.product.prodname_dependabot_alerts %} для существующих репозиториев

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. В разделе "Безопасность и анализ кода" справа от {% data variables.product.prodname_dependabot_alerts %} нажмите кнопку **Отключить все** или **Включить все**.
 ![Снимок экрана: настройка функций безопасности и анализа с выделенными кнопками "Включить все" и "Отключить все"](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. При необходимости можно включить {% data variables.product.prodname_dependabot_alerts %} по умолчанию для всех вновь создаваемых репозиториев.
  ![Снимок экрана: Окно "Включение оповещений Dependabot" с выделенным флажком "Включить по умолчанию для новых частных репозиториев"](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. Нажмите кнопку **Отключить {% data variables.product.prodname_dependabot_alerts %}** или **Включить {% data variables.product.prodname_dependabot_alerts %}** , чтобы отключить или включить {% data variables.product.prodname_dependabot_alerts %} для всех своих репозиториев.
  ![Снимок экрана: окно "Включение оповещений Dependabot" с выделенной кнопкой "Включить оповещения Dependabot"](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

При включении {% data variables.product.prodname_dependabot_alerts %} для существующих репозиториев вы увидите все результаты в GitHub в течение нескольких минут.

### Включение и отключение {% data variables.product.prodname_dependabot_alerts %} для новых репозиториев

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. В разделе "Безопасность и анализ кода" справа от {% data variables.product.prodname_dependabot_alerts %} включите или отключите {% data variables.product.prodname_dependabot_alerts %} по умолчанию для новых репозиториев, которые вы создаете.
  ![Снимок экрана: окно "Настройка безопасности и анализа" с выделенным флажком "Включить для всех новых частных репозиториев"](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %} {% data variables.product.prodname_dependabot_alerts %} для репозиториев может включить или отключить владелец предприятия. Дополнительные сведения см. в разделе [Включение Dependabot для предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

{% endif %}

## Управление {% data variables.product.prodname_dependabot_alerts %} для своего репозитория

{% ifversion fpt or ghec %}Вы можете управлять {% data variables.product.prodname_dependabot_alerts %} для своего общедоступного, частного или внутреннего репозитория.

По умолчанию мы уведомляем пользователей с разрешениями администратора в затронутых репозиториях о новых {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.product_name %} никогда публично не раскрывает небезопасные уязвимости ни для какого репозитория. Вы также можете сделать {% данных variables.product.prodname_dependabot_alerts %} видимыми для дополнительных пользователей или команд, работающих над репозиториями, для которых вы владеете или имеете разрешения администратора.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Включение и отключение {% data variables.product.prodname_dependabot_alerts %} для репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. В разделе "Безопасность и анализ кода" справа от пункта "{% data variables.product.prodname_dependabot_alerts %}" щелкните **Включить**, чтобы включить оповещения, или **Отключить**, чтобы отключить их. 
  ![Снимок экрана: раздел "Безопасность и анализ кода" с кнопкой включения {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% endif %}{% ifversion ghes or ghae %}

{% data variables.product.prodname_dependabot_alerts %} для репозитория может включить или отключить владелец предприятия. Дополнительные сведения см. в разделе [Включение Dependabot для предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% endif %}

## Управление {% data variables.product.prodname_dependabot_alerts %} для организации
{% ifversion fpt or ghec %}Можно включить или отключить {% data variables.product.prodname_dependabot_alerts %} для всех репозиториев, принадлежащих вашей организации. Изменения влияют на все репозитории.

### Включение и отключение {% data variables.product.prodname_dependabot_alerts %} для всех существующих репозиториев

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
2. В разделе "Безопасность и анализ кода" справа от {% data variables.product.prodname_dependabot_alerts %} нажмите кнопку **Отключить все** или **Включить все**. 
   {% ifversion fpt or ghec %} ![Снимок экрана: функции настройки безопасности и анализа с выделенными кнопками "Включить все" и "Отключить все" для оповещений Dependabot](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png) {% endif %} {% ifversion ghae %} ![Кнопки "Включить все" и "Отключить все" для функций настройки безопасности и анализа](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. При необходимости можно включить {% data variables.product.prodname_dependabot_alerts %} по умолчанию для новых репозиториев в организации.
   {% ifversion fpt or ghec %} ![Снимок экрана: параметр "Включить по умолчанию" для новых репозиториев](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Нажмите кнопку **Отключить {% data variables.product.prodname_dependabot_alerts %}** или **Включить{% data variables.product.prodname_dependabot_alerts %}** , чтобы отключить или включить {% data variables.product.prodname_dependabot_alerts %} для всех своих репозиториев.
   {% ifversion fpt or ghec %} ![Снимок экрана: модальное окно "Включение оповещений Dependabot" с выделенной кнопкой для отключения или включения функции](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png) {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} для вашей организации может включить или отключить владелец предприятия. Дополнительные сведения см. в разделе [Сведения о Dependabot для GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
   {% endif %}
