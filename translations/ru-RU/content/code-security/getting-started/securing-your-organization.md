---
title: Защита вашей организации
intro: 'Несколько возможностей {% data variables.product.prodname_dotcom %} позволяют поддерживать безопасность организации.'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your organization
ms.openlocfilehash: e64af58fa5ea802b92df20751f2648097ebedf62
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159032'
---
## Введение
В этом руководстве показано, как настроить функции безопасности для организации. Потребности в защите у вашей организации уникальны, и включать все функции безопасности может быть необязательно. Дополнительные сведения см. в статье «[Функции безопасности {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)».

{% data reusables.advanced-security.security-feature-availability %}

## Управление доступом в организации

Чтобы настраивать действия, доступные участникам организации, можно использовать роли. {% ifversion security-managers %}Например, можно назначить команде роль диспетчера безопасности, тогда ее участники смогут управлять параметрами безопасности в организации, а также доступом на чтение ко всем репозиториям.{% endif %} Дополнительные сведения см. в статье [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

{% ifversion fpt or ghes or ghec %}

## Создание политики безопасности по умолчанию

Вы можете создать политику безопасности по умолчанию, которая будет отображаться во всех общедоступных репозиториях вашей организации, у которых нет собственной политики безопасности. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

## Управление функцией «{% data variables.product.prodname_dependabot_alerts %}» и схемой зависимостей

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} обнаруживает уязвимости в общедоступных репозиториях и отображает схему зависимостей. Можно включить или отключить {% data variables.product.prodname_dependabot_alerts %} для всех общедоступных репозиториев, принадлежащих вашей организации. Можно включить или отключить {% data variables.product.prodname_dependabot_alerts %} для всех схем зависимостей для всех частных репозиториев, принадлежащих вашей организации.

1. Щелкните фотографию профиля и выберите **Организации**.
2. Щелкните **Параметры** рядом с названием вашей организации.
3. Выберите **Безопасность и анализ**.
4. Задайте параметр **Включить все** или **Отключить все** рядом с функцией, которую нужно настроить.
5. При необходимости укажите **Автоматически включать для новых репозиториев**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Дополнительные сведения см. в разделе «[Сведения о функции "{% data variables.product.prodname_dependabot_alerts %}»](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)», «[Обзор зависимостей в репозитории](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)» и «[Управление параметрами безопасности и анализа в организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)».

## Настройка проверки зависимостей

Проверка зависимостей — это функция {% data variables.product.prodname_advanced_security %}, которая позволяет визуализировать изменения зависимостей в запросах на включение внесенных изменений до их объединения в репозитории. Дополнительные сведения см. в статье "[Сведения о проверке зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% ifversion fpt or ghec %} Проверка зависимостей по умолчанию включена для всех общедоступных репозиториев. {% ifversion fpt %}Организации, в которых используется {% data variables.product.prodname_ghe_cloud %} и {% data variables.product.prodname_advanced_security %}, могут дополнительно включить эти функции для частных и внутренних репозиториев. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec %} Для частных и внутренних репозиториев, принадлежащих организации, включить проверку зависимостей можно, включив схему зависимостей и {% data variables.product.prodname_advanced_security %} (см. ниже). {% elsif ghes or ghae %} Проверка зависимостей доступна, если граф зависимостей включен для {% data variables.location.product_location %} и вы включите {% data variables.product.prodname_advanced_security %} для организации (см. ниже). {% endif %}

{% ifversion fpt or ghec or ghes %}
## Управление функцией "{% data variables.product.prodname_dependabot_security_updates %}"

Для любого репозитория, в котором используются {% data variables.product.prodname_dependabot_alerts %}, можно включить {% data variables.product.prodname_dependabot_security_updates %} для создания запросов на включение внесенных изменений с обновлениями безопасности при обнаружении уязвимостей. Также можно включить или отключить {% data variables.product.prodname_dependabot_security_updates %} для всех репозиториев в организации.

1. Щелкните фотографию профиля и выберите **Организации**.
2. Щелкните **Параметры** рядом с названием вашей организации.
3. Выберите **Безопасность и анализ**.
4. Выберите **Включить все** или **Отключить все** рядом с пунктом «{% data variables.product.prodname_dependabot_security_updates %}».
5. При необходимости укажите **Автоматически включать для новых репозиториев**. 

Дополнительные сведения см. в разделах «[Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)» и «[Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

## Управление функцией «{% data variables.product.prodname_dependabot_version_updates %}»

Можно включить {% data variables.product.prodname_dependabot %} для автоматического создания запросов на включение внесенных изменений, чтобы поддерживать зависимости в актуальном состоянии. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates).

Чтобы включить {% data variables.product.prodname_dependabot_version_updates %}, необходимо создать файл конфигурации *dependabot.yml*. Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).

{% endif %}

{% ifversion ghes or ghae or ghec %}
## Управление функцией «{% data variables.product.prodname_GH_advanced_security %}»

{% ifversion ghes or ghec %} Если ваша организация {% ifversion ghec %}принадлежит предприятию, которое{% else %}предприятие{% endif %} имеет лицензию {% data variables.product.prodname_advanced_security %}, функции {% data variables.product.prodname_advanced_security %} можно включить или отключить.
{% elsif ghae %} Можно включить или отключить функции {% data variables.product.prodname_advanced_security %}.
{% endif %}

1. Щелкните фотографию профиля и выберите **Организации**.
2. Щелкните **Параметры** рядом с названием вашей организации.
3. Выберите **Безопасность и анализ**.
4. Выберите **Включить все** или **Отключить все** рядом с пунктом {% data variables.product.prodname_GH_advanced_security %}.
5. При необходимости укажите **Автоматически включать для новых частных репозиториев**. 

Дополнительные сведения см. в разделе «[Сведения о {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)» и «[Управление параметрами безопасности и анализа в организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)».
{% endif %}
## Настройка функции «{% data variables.product.prodname_secret_scanning %}»

{% data variables.product.prodname_secret_scanning_caps %} — это функция {% data variables.product.prodname_advanced_security %}, которая просматривает репозитории на наличие секретов, которые хранятся небезопасно.

{% ifversion fpt or ghec %}Функция «{% data variables.product.prodname_secret_scanning_caps %}» уже включена для всех общедоступных репозиториев. Организации, в которых используется {% data variables.product.prodname_ghe_cloud %} и {% data variables.product.prodname_advanced_security %}, также могут включить функцию «{% data variables.product.prodname_secret_scanning %}» для частных и внутренних репозиториев.{% endif %} {% ifversion fpt %}Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning). {% endif %}

{% ifversion ghes or ghae %}Функция «{% data variables.product.prodname_secret_scanning_caps %}» доступна, если в организации используется {% data variables.product.prodname_advanced_security %}. {% endif %}

{% ifversion not fpt %} Можно включить или отключить функцию «{% data variables.product.prodname_secret_scanning %}» для всех репозиториев в организации, в которой включена {% data variables.product.prodname_advanced_security %}.

1. Щелкните фотографию профиля и выберите **Организации**.
2. Щелкните **Параметры** рядом с названием вашей организации.
3. Выберите **Безопасность и анализ**.
4. Выберите **Включить все** или **Отключить все** рядом с пунктом «{% data variables.product.prodname_secret_scanning_caps %}» (только для репозиториев {% data variables.product.prodname_GH_advanced_security %}).
5. При необходимости установите флажок **Автоматически включить для частных репозиториев, добавленных в настройках функции «{% data variables.product.prodname_advanced_security %}»** . 

Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
{% endif %}

## Настройка функции "{% data variables.product.prodname_code_scanning %}"

{% data variables.product.prodname_code_scanning_capc %} — это функция {% data variables.product.prodname_advanced_security %}, которая проверяет код на наличие уязвимостей и ошибок системы безопасности.

{% ifversion fpt or ghec %}Функция «{% data variables.product.prodname_code_scanning_capc %}» доступна для всех общедоступных репозиториев. Организации, в которых используется {% data variables.product.prodname_ghe_cloud %} и {% data variables.product.prodname_advanced_security %}, также могут использовать функцию «{% data variables.product.prodname_code_scanning %}» для частных и внутренних репозиториев.{% else %}Функция «{% data variables.product.prodname_code_scanning_capc %}» доступна, если в организации используется {% data variables.product.prodname_advanced_security %}.{% endif %}

{% data variables.product.prodname_code_scanning_capc %} настраивается на уровне репозитория. Дополнительные сведения см. в разделе «[Настройка функции "{% data variables.product.prodname_code_scanning %}" для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)».

## Дальнейшие действия
Вы можете просматривать оповещения функций безопасности и управлять ими для обработки зависимостей и уязвимостей в коде. Дополнительные сведения см. в разделе {% ifversion fpt or ghes or ghec %} Просмотр [и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts),{% endif %} {% ifversion fpt or ghec or ghes %}[Управление запросами на вытягивание для обновлений зависимостей](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates), {% endif %}[Управление {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) и [Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

{% ifversion fpt or ghec %}При наличии уязвимости системы безопасности можно создать рекомендации по безопасности, которые позволят в частном порядке обсудить и устранить уязвимость. Дополнительные сведения см. в [разделах Сведения о рекомендациях по безопасности репозитория](/code-security/security-advisories/about-github-security-advisories) и [Создание рекомендаций по безопасности](/code-security/security-advisories/creating-a-security-advisory).
{% endif %}

{% ifversion ghes or ghec or ghae %}You{% elsif fpt %}Организации, в которых используется{% data variables.product.prodname_ghe_cloud %}{% endif %}, могут просматривать, фильтровать и сортировать оповещения безопасности для репозиториев, которые принадлежат {% ifversion ghes or ghec or ghae %}вашей{% elsif fpt %}их{% endif %} организации, на панели обзора безопасности. Дополнительные сведения см. в разделе{% ifversion ghes or ghec or ghae %} "[Общие сведения о безопасности](/code-security/security-overview/about-the-security-overview)". {% elsif fpt %} [Общие сведения о безопасности](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview) в документации по {% data variables.product.prodname_ghe_cloud %}. {% endif %}

{% ifversion ghec %}
## Дополнительные материалы

«[Доступ к отчетам о соответствии требованиям для вашей организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)» {% endif %}
