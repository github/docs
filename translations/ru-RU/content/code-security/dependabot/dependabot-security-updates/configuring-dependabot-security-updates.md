---
title: Настройка обновлений для системы безопасности Dependabot
intro: 'Вы можете использовать {% data variables.product.prodname_dependabot_security_updates %} или создаваемые вручную запросы на вытягивание, чтобы легко обновлять уязвимые зависимости.'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 49db730fb0830dc59a5cead63068eb1fb5add14d
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180772'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения о настройке {% data variables.product.prodname_dependabot_security_updates %}

Вы можете включить {% data variables.product.prodname_dependabot_security_updates %} на уровне репозитория или для всех репозиториев, принадлежащих вашей личной учетной записи или организации. Вы можете включить {% data variables.product.prodname_dependabot_security_updates %} для любого репозитория, использующего {% data variables.product.prodname_dependabot_alerts %} и граф зависимостей. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).

Вы можете отключить {% data variables.product.prodname_dependabot_security_updates %} для отдельного репозитория или для всех репозиториев, принадлежащих вашей личной учетной записи или организации.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Поддерживаемые репозитории

{% data variables.product.prodname_dotcom %} автоматически включает {% data variables.product.prodname_dependabot_security_updates %} для вновь созданных репозиториев, если ваша личная учетная запись или организация включили **автоматическое включение новых репозиториев** для {% data variables.product.prodname_dependabot_security_updates %}. Дополнительные сведения см. в разделе [Управление {% data variables.product.prodname_dependabot_security_updates %} для репозиториев](#managing-dependabot-security-updates-for-your-repositories). 

Если вы создаете вилку репозитория с включенными обновлениями для системы безопасности, {% data variables.product.prodname_dotcom %} автоматически отключит {% data variables.product.prodname_dependabot_security_updates %} для вилки. Затем можно решить, следует ли включить {% data variables.product.prodname_dependabot_security_updates %} на конкретной вилке.

Если обновления системы безопасности для репозитория не включены, и вы не знаете причины этого, сначала попробуйте включить их с помощью инструкций, приведенных в процедурных разделах ниже. Если обновления системы безопасности по-прежнему не работают, вы можете обратиться в {% data variables.contact.contact_support %}.

## Управление {% data variables.product.prodname_dependabot_security_updates %} для репозиториев

Вы можете включить или отключить {% data variables.product.prodname_dependabot_security_updates %} для всех соответствующих репозиториев, принадлежащих вашей личной учетной записи или организации. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для личной учетной записи](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) или [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization). 

Вы также можете включить или отключить {% data variables.product.prodname_dependabot_security_updates %} для отдельного репозитория.

### Включение и отключение {% data variables.product.prodname_dependabot_security_updates %} для отдельного репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. В разделе "Безопасность и анализ кода" справа от пункта "Обновления системы безопасности {% data variables.product.prodname_dependabot %}" щелкните **Включить**, чтобы включить функцию, или **Отключить**, чтобы отключить ее. {% ifversion fpt or ghec %} Для общедоступных репозиториев кнопка отключена, если функция всегда включена. {% endif %} {% ifversion fpt or ghec %}![ Снимок экрана: раздел "Безопасность и анализ кода" с кнопкой для включения {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![Снимок экрана: раздел "Безопасность и анализ кода" с кнопкой включения {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Переопределение поведения по умолчанию с помощью файла конфигурации

Вы можете переопределить поведение по умолчанию для {% data variables.product.prodname_dependabot_security_updates %}, добавив файл dependabot.yml в свой репозиторий. Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file). 

Если требуются только обновления для системы безопасности и вы хотите исключить обновления версий, можно задать для `open-pull-requests-limit` значение `0`, чтобы заблокировать обновление версий для заданного `package-ecosystem`. Дополнительные сведения см. в разделе о [`open-pull-requests-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit).

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

Дополнительные сведения о параметрах конфигурации, доступных для обновления системы безопасности, см. в таблице в разделе [Параметры конфигурации для файла dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file).

## Дополнительные материалы

- [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [Настройка {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts){% ifversion fpt or ghec %}
- [Управление параметрами использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository){% endif %}
- [Поддерживаемые экосистемы пакетов](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)
