---
title: Функции безопасности GitHub
intro: 'Обзор функций безопасности {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
ms.openlocfilehash: ccd17816c0e5f62666520a677862c2a9f108c742
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158736'
---
## Сведения о функциях безопасности {% data variables.product.prodname_dotcom %}

В {% data variables.product.prodname_dotcom %} есть функции безопасности, которые помогают защитить код и секреты в репозиториях и во всех организациях. {% data reusables.advanced-security.security-feature-availability %}

В {% data variables.product.prodname_advisory_database %} содержится проверенный список уязвимостей системы безопасности, в котором можно искать и отфильтровывать нужные элементы. {% data reusables.security-advisory.link-browsing-advisory-db %}

## Доступно для всех репозиториев
### Политика безопасности

Предоставьте пользователям простую возможность конфиденциально сообщать об уязвимостях системы безопасности, обнаруженных в репозитории. Дополнительные сведения см. в статье "[Добавление политики безопасности в репозиторий](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

{% ifversion fpt or ghec %}
### Рекомендации по безопасности

Обсуждайте в частном порядке и устраняйте уязвимости системы безопасности в коде репозитория. Вы также можете опубликовать рекомендацию по безопасности, чтобы предупредить сообщество об уязвимости, и призвать участников сообщества обновить свой код. Дополнительные сведения см. в разделе [Рекомендации по безопасности репозитория](/github/managing-security-vulnerabilities/about-github-security-advisories).

{% endif %} {% ifversion fpt or ghec or ghes %}

### {% data variables.product.prodname_dependabot_alerts %} обновления системы безопасности

Просматривайте оповещения о зависимостях, в которых имеются уязвимости системы безопасности, и решайте, нужно ли автоматически создавать запросы на включение внесенных изменений для обновления этих зависимостей. Дополнительные сведения см. в разделах [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) и [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).
{% endif %}

{% ifversion ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Просматривайте оповещения о зависимостях, в которых имеются уязвимости системы безопасности, и управляйте этими оповещениями. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Обновления версий {% data variables.product.prodname_dependabot %}

Используйте {% data variables.product.prodname_dependabot %} для автоматического создания запросов на включение внесенных изменений, чтобы поддерживать зависимости в актуальном состоянии. Это помогает снизить риски для более старых версий зависимостей. Использование более новых версий упрощает применение исправлений при обнаружении уязвимостей безопасности, а также упрощает создание запросов на включение внесенных изменений для обновления уязвимых зависимостей для {% data variables.product.prodname_dependabot_security_updates %}. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates).
{% endif %}

### Граф зависимостей
Схема зависимостей позволяет изучать экосистемы и пакеты, от которых зависит ваш репозиторий, а также репозитории и пакеты, которые зависят от вашего репозитория.

Схему зависимостей можно найти на вкладке **Аналитика** репозитория. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).

{% ifversion security-overview-displayed-alerts %}
### Общие сведения о безопасности

Обзор безопасности позволяет просматривать конфигурации и оповещения системы безопасности, что упрощает определение репозиториев и организаций, которые подвергаются наибольшему риску. Дополнительные сведения см. в разделе [Общие сведения о безопасности](/code-security/security-overview/about-the-security-overview).

{% else %}
### Общие сведения о безопасности для репозиториев
В обзоре безопасности показано, какие функции безопасности включены для репозитория, и предлагается возможность настройки любых доступных функций безопасности (которые еще не включены).
{% endif %}

## В составе {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %} Следующие функции {% data variables.product.prodname_GH_advanced_security %} доступны и бесплатны для общедоступных репозиториев на {% data variables.product.prodname_dotcom_the_website %}. Организациям, использующим {% data variables.product.prodname_ghe_cloud %} с лицензией на {% data variables.product.prodname_GH_advanced_security %}, доступен полный набор функций в любом их репозитории. Список функций, доступных в {% data variables.product.prodname_ghe_cloud %}, см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %} Многие функции {% data variables.product.prodname_GH_advanced_security %} доступны и бесплатны для общедоступных репозиториев на {% data variables.product.prodname_dotcom_the_website %}. Организации в составе предприятия с лицензией {% data variables.product.prodname_GH_advanced_security %} могут использовать указанные ниже функции во всех своих репозиториях. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %} Функции {% data variables.product.prodname_GH_advanced_security %} доступны для предприятий с лицензией для {% data variables.product.prodname_GH_advanced_security %}. Эти функции можно использовать только в репозиториях, которые принадлежат организации. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %} Функции {% data variables.product.prodname_GH_advanced_security %} доступны для репозиториев, принадлежащих организации. {% data reusables.advanced-security.more-info-ghas %} {% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

Автоматически обнаруживайте уязвимости безопасности и ошибки в новом или измененном коде. Возможные проблемы выделяются и для них приводятся подробные сведения, что позволяет исправлять код до его слияния с ветвью по умолчанию. Дополнительные сведения см. в статье "[Сведения о проверке кода](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Автоматически обнаруживайте утечку секретов во всех общедоступных репозиториях. {% data variables.product.company_short %} сообщает соответствующему поставщику услуг, что секрет может быть скомпрометирован. Сведения о поддерживаемых секретах и поставщиках услуг см. в разделе [Шаблоны функции "{% data variables.product.prodname_secret_scanning_caps %}"](/code-security/secret-scanning/secret-scanning-patterns).
{% endif %}

{% ifversion ghec or ghes or ghae %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %} Доступно только с лицензией для {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Автоматически обнаруживайте маркеры или учетные данные, которые были возвращены в репозиторий. Вы можете просматривать оповещения для всех секретов, которые {% data variables.product.company_short %} находит в коде. Таким образом вы будете знать, какие маркеры или учетные данные следует считать скомпрометированными. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security).
{% endif %}

### Проверка зависимостей

Отображение полного влияния изменений на зависимости и просмотр сведений об уязвимых версиях до слияния запроса на включение внесенных изменений. Дополнительные сведения см. в статье "[Сведения о проверке зависимостей](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### Общие сведения о безопасности для организаций{% ifversion ghes > 3.4 or ghae > 3.4 %}, предприятий,{% endif %} и команд

Просмотр конфигурации и оповещений системы безопасности для организации и выявление репозиториев с наибольшим риском. Дополнительные сведения см. в разделе [Общие сведения о безопасности](/code-security/security-overview/about-the-security-overview).
{% endif %}

## Дополнительные материалы
- [Продукты {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)
- "[Поддержка языка в {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support)"
