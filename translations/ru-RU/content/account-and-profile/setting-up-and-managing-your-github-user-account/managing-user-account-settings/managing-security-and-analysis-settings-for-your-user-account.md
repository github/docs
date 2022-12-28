---
title: Управление параметрами безопасности и анализа для учетной записи пользователя
intro: You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 1a025a46dc42252a2e3c0facbe6b3beffa48cf45
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088874"
---
## <a name="about-management-of-security-and-analysis-settings"></a>Сведения об управлении параметрами безопасности и анализа

{% data variables.product.prodname_dotcom %} помогает защищать репозитории. В этом разделе рассказывается, как управлять функциями безопасности и анализа для всех существующих и новых репозиториев.

Вы по-прежнему можете управлять функциями безопасности и анализа для отдельных репозиториев. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).

Вы также можете просмотреть журнал безопасности для всех действий в личной учетной записи. Дополнительные сведения см. в статье [Просмотр журнала безопасности](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Общие сведения о безопасности на уровне репозитория см. в разделе [Защита репозитория](/code-security/getting-started/securing-your-repository).

## <a name="enabling-or-disabling-features-for-existing-repositories"></a>Включение и отключение функций для существующих репозиториев

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. В разделе "Безопасность и анализ кода" справа от функции нажмите кнопку **Отключить все** или **Включить все**.
  {% ifversion ghes > 3.2 %}![Кнопки "Включить все" и "Отключить все" для функций настройки безопасности и анализа](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Кнопки "Включить все" и "Отключить все" для функций настройки безопасности и анализа](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. При необходимости включите функцию по умолчанию для новых репозиториев, которыми вы владеете.
  {% ifversion ghes > 3.2 %}![Параметр "Включить по умолчанию" для новых репозиториев](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![Параметр "Включить по умолчанию" для новых репозиториев](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Щелкните **Отключить ИМЯ_ФУНКЦИИ** или **Включить ИМЯ_ФУНКЦИИ**, чтобы отключить или включить функцию для всех принадлежащих вам репозиториев.
  {% ifversion ghes > 3.2 %}![Кнопка отключения и включения функции](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Кнопка отключения и включения функции](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## <a name="enabling-or-disabling-features-for-new-repositories"></a>Включение и отключение функций для новых репозиториев

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. В разделе "Безопасность и анализ кода" справа от функции включите или отключите функцию по умолчанию для новых репозиториев, которыми вы владеете.
  {% ifversion ghes > 3.2 %}![Флажок для включения или отключения функции для новых репозиториев](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Флажок для включения или отключения функции для новых репозиториев](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## <a name="further-reading"></a>Дополнительные материалы

- [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [Автоматическое обновление зависимостей](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)
