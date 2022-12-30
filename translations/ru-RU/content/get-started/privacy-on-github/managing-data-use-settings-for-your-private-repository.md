---
title: Управление параметрами использования данных для частного репозитория
intro: 'Чтобы вам было проще с помощью {% data variables.product.product_name %} подключиться к соответствующим средствам, проектам и информации, а также связаться с определенными людьми, можно настроить использование данных для частного репозитория.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
ms.openlocfilehash: 36ddc4449726b67863e7d4e045dd1582b12f2c27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526673'
---
## Сведения об использовании данных для частного репозитория


Использованием данных для частного репозитория можно управлять с помощью функций безопасности и анализа. 

- Включите граф зависимостей, чтобы разрешить анализ данных только для чтения в репозитории. 
- Отключите граф зависимостей, чтобы заблокировать анализ данных только для чтения в репозитории. 

Включив использование данных для своего частного репозитория, вы сможете получить доступ к графу зависимостей, где можно отслеживать зависимости репозитория и получать {% data variables.product.prodname_dependabot_alerts %} в случае, если {% data variables.product.product_name %} обнаружит уязвимые зависимости. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".


{% note %}

**Примечание.** Если отключить граф зависимостей, {% data variables.product.prodname_dependabot_alerts %} и {% data variables.product.prodname_dependabot_security_updates %} также будут отключены. Дополнительные сведения см. в статье [Сведения о графе зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph). 

{% endnote %}

## Включение или отключение использования данных с помощью функций безопасности и анализа

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. В разделе "Безопасность и анализ кода" справа от функции нажмите кнопку **Отключить** или **Включить**.{% ifversion fpt %} ![Кнопка "Включить" или "Отключить" для функций настройки безопасности и анализа](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} ![Кнопка "Включить" или "Отключить" для функций настройки безопасности и анализа](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## Дополнительные материалы

- [Каким образом {% data variables.product.prodname_dotcom %} использует ваши данные](/articles/about-github-s-use-of-your-data)
- [Просмотр и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)
