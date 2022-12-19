---
title: Сведения об оповещениях Dependabot
intro: '{% data variables.product.product_name %} отправляет {% data variables.product.prodname_dependabot_alerts %} при выявлении того, что ваш репозиторий использует уязвимую зависимость{% ifversion GH-advisory-db-supports-malware %} или вредоносную программу{% endif %}.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
ms.openlocfilehash: 737e5547e3aefd6b5c49780df0c78cdc73292ee4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106744'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## Сведения о {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %} {% data reusables.advisory-database.beta-malware-advisories %} {% endif %}

{% data variables.product.prodname_dependabot_alerts %} сообщает вам, что ваш код использует небезопасный пакет.

Если ваш код зависит от пакета с уязвимостью системы безопасности, это может вызвать ряд проблем для вашего проекта или его пользователей. Как можно быстрее выполните обновление до защищенной версии.{% ifversion GH-advisory-db-supports-malware %} Если ваш код использует вредоносную программу, вам потребуется заменить пакет защищенным альтернативным решением.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Выявление небезопасных зависимостей

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} выполняет проверку для выявления небезопасных зависимостей и отправляет {% data variables.product.prodname_dependabot_alerts %}, когда:

{% ifversion fpt or ghec %}
- В {% data variables.product.prodname_advisory_database %} добавляется новая рекомендация. Дополнительные сведения см. в статье [Просмотр рекомендаций по безопасности в {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database).{% else %}
- Новые данные рекомендаций синхронизируются с {% data variables.location.product_location %} каждый час из {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %} {% note %}

  **Примечание.** Только рекомендации, которые были проверены {% data variables.product.company_short %}, будут активировать {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- Изменился граф зависимостей для репозитория. Например, когда участник отправляет фиксацию для изменения пакетов или версий, она зависит от {% ifversion fpt or ghec %} или изменения кода одной из зависимостей{% endif %}. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/code-security/supply-chain-security/about-the-dependency-graph).

{% data reusables.repositories.dependency-review %}

Список экосистем, для которых {% data variables.product.product_name %} выявляет уязвимости и зависимости, см. в разделе [Поддерживаемые экосистемы пакетов](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).

{% note %}

**Примечание.** Важно поддерживать актуальность файлов манифеста и блокировки. Если граф зависимостей не отражает в точности текущие зависимости и версии, вы можете пропустить оповещения для используемых небезопасных зависимостей. Вы также можете получать оповещения о зависимостях, которые больше не используются.

{% endnote %}

##  Настройка {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} обнаруживает уязвимые зависимости и вредоносные программы в _общедоступных_ репозиториях и отображает граф зависимостей, но не создает {% data variables.product.prodname_dependabot_alerts %} по умолчанию. Владельцы репозитория или пользователи с правами администратора могут включить {% data variables.product.prodname_dependabot_alerts %} для общедоступных репозиториев. Владельцы частных репозиториев или пользователи с правами администратора могут включить {% data variables.product.prodname_dependabot_alerts %} путем включения графа зависимостей и {% data variables.product.prodname_dependabot_alerts %} для своих репозиториев.

Можно включить или отключить {% data variables.product.prodname_dependabot_alerts %} для всех репозиториев, принадлежащих вашей организации или учетной записи. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts).

Сведения о требованиях к доступу для действий, связанных с {% data variables.product.prodname_dependabot_alerts %}, см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features).

{% data variables.product.product_name %} сразу начинает создавать граф зависимостей и генерирует оповещения для всех небезопасных зависимостей сразу после их выявления. Обычно граф заполняется в течение нескольких минут, но при наличии репозиториев с большим количеством зависимостей это может занять больше времени. Дополнительные сведения см. в статье "[Управление параметрами использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".
{% endif %}

Если {% data variables.product.product_name %} выявляет уязвимую зависимость {% ifversion GH-advisory-db-supports-malware %} или вредоносную программу{% endif %}, мы создаем оповещение {% data variables.product.prodname_dependabot %} и отображаем его {% ifversion fpt or ghec or ghes %} на вкладке "Безопасность" для репозитория и{% endif %} в графе зависимостей репозитория. Оповещение содержит {% ifversion fpt or ghec or ghes %}ссылку на затронутый файл в проекте, а также {% endif %}сведения об исправленной версии. {% data variables.product.product_name %} также может уведомлять ответственных за обслуживание затронутых репозиториев о новом оповещении в соответствии с настройками уведомлений. Дополнительные сведения см. в статье [Настройка уведомлений для {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts).

{% ifversion fpt or ghec or ghes %} Для репозиториев, в которых включены {% data variables.product.prodname_dependabot_security_updates %}, оповещение также может содержать ссылку на запрос на вытягивание для обновления манифеста или файла блокировки до минимальной версии, которая устраняет уязвимость. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).
{% endif %}

{% warning %}

**Примечание.** Для функций безопасности {% data variables.product.product_name %} не заявляется о возможности обнаруживать все уязвимости{% ifversion GH-advisory-db-supports-malware %} и вредоносные программы{% endif %}. Мы активно поддерживаем {% data variables.product.prodname_advisory_database %} и создаем оповещения с самыми актуальными сведениями. Но мы не можем обнаружить все вредоносные программы или сообщить вам обо всех известных зависимостях за гарантированный интервал времени. Эти функции не заменяют выполняемую человеком проверку каждой зависимости на наличие потенциальных уязвимостей или любых других проблем, поэтому рекомендуется консультироваться со специалистами службы безопасности или при необходимости проводить тщательный анализ зависимостей.

{% endwarning %}

## Доступ к {% data variables.product.prodname_dependabot_alerts %}

Вы увидите все оповещения, затрагивающие конкретный проект,{% ifversion fpt or ghec %} на вкладке "Безопасность" репозитория или{% endif %} в графе зависимостей репозитория. Дополнительные сведения см. в статье [Просмотр и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts).

По умолчанию мы уведомляем пользователей с разрешениями администратора в затронутых репозиториях о новых {% data variables.product.prodname_dependabot_alerts %}. {% ifversion fpt or ghec %}{% data variables.product.product_name %} никогда публично не раскрывает небезопасные уязвимости для каких-либо репозиториев. Вы также можете сделать {% data variables.product.prodname_dependabot_alerts %} видимыми для дополнительных пользователей или команд, работающих с репозиториями, которыми вы владеете или в которых имеете разрешения администратора. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} Дополнительные сведения см. в статье [Настройка уведомлений для {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts).

Вы также можете просмотреть все {% data variables.product.prodname_dependabot_alerts %}, соответствующие определенной рекомендации, в {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes %}
## Дополнительные материалы

- [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)
- [Просмотр и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) {% endif %} {% ifversion fpt or ghec %}- [Конфиденциальность в {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github){% endif %}
