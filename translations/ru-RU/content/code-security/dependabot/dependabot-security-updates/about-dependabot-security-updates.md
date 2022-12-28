---
title: Сведения об обновлениях для системы безопасности Dependabot
intro: '{% data variables.product.prodname_dependabot %} может исправить уязвимые зависимости, создавая запросы на вытягивание с помощью обновлений системы безопасности.'
shortTitle: Dependabot security updates
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
  - /code-security/supply-chain-security/about-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Repositories
  - Dependencies
  - Pull requests
ms.openlocfilehash: 4ea3bd49a5d46376129afd2282fe043954a7d653
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181314'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения о {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot_security_updates %} упрощает исправление уязвимых зависимостей в репозитории. Если включить эту функцию, при возникновении оповещения {% data variables.product.prodname_dependabot %} для уязвимой зависимости в графе зависимостей репозитория {% data variables.product.prodname_dependabot %} автоматически пытается исправить проблему. Дополнительные сведения см. в разделах [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) и [Настройка {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates).

{% data variables.product.prodname_dotcom %} может отправлять {% data variables.product.prodname_dependabot_alerts %} в репозитории, затронутые уязвимостью, раскрытой недавно опубликованной рекомендацией по безопасности {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% data variables.product.prodname_dependabot %} проверяет возможность обновления уязвимой зависимости до исправленной версии без нарушения графа зависимостей для репозитория. Затем {% data variables.product.prodname_dependabot %} создает запрос на вытягивание, чтобы обновить зависимость до минимальной версии, которая включает исправление, и связывает запрос на вытягивание с оповещением {% data variables.product.prodname_dependabot %} или сообщает об ошибке в оповещении. Дополнительные сведения см. в разделе [Устранение ошибок {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors).

Функция {% data variables.product.prodname_dependabot_security_updates %} доступна для репозиториев, в которых включен граф зависимостей и {% data variables.product.prodname_dependabot_alerts %}. Вы увидите оповещение {% data variables.product.prodname_dependabot %} для каждой уязвимой зависимости, определенной в полном графе зависимостей. Однако обновления системы безопасности активируются только для зависимостей, указанных в файле манифеста или блокировки. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included).

{% ifversion dependabot-security-updates-unlock-transitive-dependencies %} 

{% note %}

**Примечание**. Для npm {% data variables.product.prodname_dependabot %} вызовет запрос на вытягивание для обновления явно определенной зависимости до безопасной версии, даже если это означает обновление родительской зависимости или зависимостей{% ifversion dependabot-security-updates-npm %} или даже удаление подзависимости, которая больше не нужна родительскому{% endif %}. Для других экосистем {% data variables.product.prodname_dependabot %} не сможет обновить непрямую или транзитивную зависимость, если также требуется обновление родительской. Дополнительные сведения см. в разделе [Dependabot пытается обновить зависимости без оповещения](/en/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors#dependabot-tries-to-update-dependencies-without-an-alert).

{% endnote %}{% endif %} 

Вы можете включить связанную функцию, {% data variables.product.prodname_dependabot_version_updates %}, чтобы {% data variables.product.prodname_dependabot %} вызывал запросы на вытягивание для обновления манифеста до последней версии зависимости при обнаружении устаревшей зависимости. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates).

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-updates-and-actions %}

{% data reusables.dependabot.dependabot-actions-support %}

## Сведения о запросах на вытягивание для обновлений системы безопасности

Каждый запрос на вытягивание содержит все необходимое для быстрого и безопасного просмотра и слияния предлагаемого исправления в проект. Сюда входят сведения об уязвимости, такие как заметки о выпуске, записи журнала изменений и сведения о фиксации. Сведения от том, какую уязвимость устраняет запрос на вытягивание, скрыты от всех, кто не имеет доступа к {% data variables.product.prodname_dependabot_alerts %} для репозитория.

При слиянии запроса на вытягивание, содержащего обновление системы безопасности, соответствующее оповещение {% data variables.product.prodname_dependabot %} помечается как разрешенное для репозитория. Дополнительные сведения о запросах на вытягивание {% data variables.product.prodname_dependabot %} см. в разделе [Управление запросами на вытягивание для обновлений зависимостей](/github/administering-a-repository/managing-pull-requests-for-dependency-updates).

{% data reusables.dependabot.automated-tests-note %}

{% ifversion fpt or ghec %}

## Об оценке совместимости

{% data variables.product.prodname_dependabot_security_updates %} могут включать оценки совместимости, которые позволяют узнать, может ли обновление зависимости привести к критическим изменениям в проекте. Они вычисляются на основе тестов непрерывной интеграции (CI) в других общедоступных репозиториях, где было создано такое же обновление для системы безопасности. Оценка совместимости обновления — это процент успешно выполненных тестов CI при обновлении конкретных версии зависимости.

{% endif %}

## Сведения об уведомлениях для обновлений системы безопасности {% data variables.product.prodname_dependabot %}

Вы можете отфильтровать уведомления по {% data variables.product.company_short %} для отображения обновлений системы безопасности {% data variables.product.prodname_dependabot %}. Дополнительные сведения см. в разделе [Управление уведомлениями из папки «Входящие»](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters).
