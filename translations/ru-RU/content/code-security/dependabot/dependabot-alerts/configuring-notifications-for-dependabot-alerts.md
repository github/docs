---
title: Настройка уведомлений для оповещений Dependabot
shortTitle: Configure notifications
intro: 'Оптимизируйте получение уведомлений о {% data variables.product.prodname_dependabot_alerts %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
ms.openlocfilehash: 570a41570821b61aa68d625c92e6e9384e893f1a
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/05/2022
ms.locfileid: '148134895'
---
## Сведения об уведомлениях для {% data variables.product.prodname_dependabot_alerts %}

Если {% data variables.product.prodname_dependabot %} обнаруживает уязвимые зависимости{% ifversion GH-advisory-db-supports-malware %} или вредоносные программы{% endif %} в репозиториях, мы создаем оповещение {% data variables.product.prodname_dependabot %} и отображаем его на вкладке "Безопасность" в репозитории. {% data variables.product.product_name %} уведомляет специалистов по обслуживанию затронутых репозиториев о новом оповещении в соответствии с настройками уведомлений. {% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} включен по умолчанию для всех общедоступных репозиториев. Для {% data variables.product.prodname_dependabot_alerts %} по умолчанию вы получите {% data variables.product.prodname_dependabot_alerts %} по электронной почте, сгруппированные по определенной уязвимости.
{% endif %} 

{% ifversion fpt or ghec %} Если вы являетесь владельцем организации, вы можете включить или отключить {% data variables.product.prodname_dependabot_alerts %} для всех репозиториев в организации одним щелчком мыши. Вы также можете задать, будут ли включены или отключены {% data variables.product.prodname_dependabot_alerts %} для новых репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added).
{% endif %}

{% ifversion ghes or ghae %} По умолчанию, если владелец предприятии настроил электронную почту для уведомлений в вашем предприятии, вы будете получать {% data variables.product.prodname_dependabot_alerts %} по электронной почте.

Владельцы предприятий также могут включить {% data variables.product.prodname_dependabot_alerts %} без уведомлений. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_dependabot %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% endif %}

## Настройка уведомлений для {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes or ghec %} При обнаружении нового оповещения {% data variables.product.prodname_dependabot %} {% data variables.product.product_name %} уведомляет всех пользователей с доступом к {% data variables.product.prodname_dependabot_alerts %} для репозитория в соответствии с их настройками уведомлений. Вы получите оповещения, если следите за репозиторием, включили уведомления для оповещений системы безопасности или для всех действий в репозитории, и не игнорируете репозиторий. Дополнительные сведения см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).
{% endif %}

Вы можете настроить параметры уведомлений для себя или организации в раскрывающемся списке "Управление уведомлениями" {% octicon "bell" aria-label="The notifications bell" %} в верхней части каждой страницы. Дополнительные сведения см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings).

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion update-notification-settings-22 %} ![ Снимок экрана: параметры](/assets/images/help/dependabot/dependabot-notification-frequency.png) {% data variables.product.prodname_dependabot_alerts %} {% endif %}{% ifversion ghes > 3.7 or ghae > 3,7 %} ![Снимок экрана: {% data variables.product.prodname_dependabot_alerts %Параметры](/assets/images/help/enterprises/dependabot-alerts-options-no-UI.png)}{% endif %}{% ifversion ghes < 3.8 or ghae < 3.8 %} ![Снимок экрана: параметры {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/notifications-v2/dependabot-alerts-options.png){% endif %}


{% note %}

**Примечание.** Вы можете отфильтровать уведомления по {% data variables.product.company_short %}, чтобы отображались {% data variables.product.prodname_dependabot_alerts %}. Дополнительные сведения см. в разделе [Управление уведомлениями из папки «Входящие»](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters).

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Дополнительные сведения см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications).

## Как получать меньше оповещений об {% data variables.product.prodname_dependabot_alerts %}

Если вы получаете слишком много уведомлений для {% data variables.product.prodname_dependabot_alerts %}, рекомендуется выбрать еженедельный дайджест или отключить уведомления, не отключая при этом {% data variables.product.prodname_dependabot_alerts %}. Вы по-прежнему можете просматривать {% data variables.product.prodname_dependabot_alerts %} на вкладке "Безопасность" в репозитории. Дополнительные сведения см. в статье [Просмотр и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts).

## Дополнительные материалы

- [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)
- [Управление уведомлениями из папки "Входящие"](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)
