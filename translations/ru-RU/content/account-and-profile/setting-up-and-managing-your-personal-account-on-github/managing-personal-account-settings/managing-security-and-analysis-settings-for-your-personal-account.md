---
title: Управление параметрами безопасности и анализа для личной учетной записи
intro: 'Вы можете управлять возможностями, которые защищают и анализируют код в проектах на {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 22ff867691f79360db54f0fe85f5e988c71536a3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108955'
---
## Сведения об управлении параметрами безопасности и анализа

{% data variables.product.prodname_dotcom %} помогает защищать репозитории. В этом разделе рассказывается, как управлять функциями безопасности и анализа для всех существующих и новых репозиториев.

Вы по-прежнему можете управлять функциями безопасности и анализа для отдельных репозиториев. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).

Вы также можете просмотреть журнал безопасности для всех действий в личной учетной записи. Дополнительные сведения см. в статье [Просмотр журнала безопасности](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Общие сведения о безопасности на уровне репозитория см. в разделе [Защита репозитория](/code-security/getting-started/securing-your-repository).

## Включение и отключение функций для существующих репозиториев

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. В разделе "Безопасность и анализ кода" справа от функции нажмите кнопку **Отключить все** или **Включить все**.
  {% ifversion ghes %}![" Включить все" или "Отключить все" для функций](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png) "Настройка функций безопасности и анализа" {% else %}!["Включить все" или "Отключить все" для функций "Настройка безопасности и анализа" {](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png)% endif %}
6. При необходимости включите функцию по умолчанию для новых репозиториев, которыми вы владеете.
  {% ifversion ghes %}![" Параметр "Включить по умолчанию" для новых репозиториев](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}!["Включить по умолчанию" для новых репозиториев](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Щелкните **Отключить ИМЯ_ФУНКЦИИ** или **Включить ИМЯ_ФУНКЦИИ**, чтобы отключить или включить функцию для всех принадлежащих вам репозиториев.
  {% ifversion ghes %}![ Кнопка для отключения или включения компонента](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png) {% else %}![Кнопка для отключения или включения компонента](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## Включение и отключение функций для новых репозиториев

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. В разделе "Безопасность и анализ кода" справа от функции включите или отключите функцию по умолчанию для новых репозиториев, которыми вы владеете.
  {% ifversion ghes %}![ Флажок для включения или отключения функции для новых репозиториев](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Флажок для включения или отключения функции для новых репозиториев](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## Дополнительные материалы

- [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [Автоматическое обновление зависимостей](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)
