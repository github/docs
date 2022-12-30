---
title: Сведения об обновлениях версий Dependabot
intro: 'Вы можете использовать {% data variables.product.prodname_dependabot %}, чтобы обновлять используемые пакеты до последних версий.'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot version updates
ms.openlocfilehash: 56bac2fbf2fb42a418cffbd478aa526803b124d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145186087'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения об {% data variables.product.prodname_dependabot_version_updates %}

{% data variables.product.prodname_dependabot %} берет на себя работу по поддержке ваших зависимостей. Используйте его, чтобы обеспечить автоматическую синхронизацию репозитория с последними выпусками пакетов и приложений, от которых он зависит.

Чтобы включить {% data variables.product.prodname_dependabot_version_updates %}, отправьте файл конфигурации `dependabot.yml` в репозиторий. В файле конфигурации указывается расположение манифеста или других файлов определения пакета, хранящихся в репозитории. {% data variables.product.prodname_dependabot %} использует эти сведения для проверки устаревших пакетов и приложений. {% data variables.product.prodname_dependabot %} определяет наличие новой версии зависимости, анализируя семантическое версионирование ([semver](https://semver.org/)) зависимости, чтобы решить, нужно ли обновлять зависимость до этой версии. В некоторых диспетчерах пакетов {% data variables.product.prodname_dependabot_version_updates %} также поддерживает поставщиков. Зависимости от поставщиков (или кэшированные зависимости) — это зависимости, которые записываются в определенный репозиторий вместо указания в манифесте. Зависимости от поставщиков доступны во время сборки, даже если серверы пакетов недоступны. {% data variables.product.prodname_dependabot_version_updates %} можно настроить для проверки зависимостей от поставщиков на наличие новых версий и их обновления при необходимости. 

Если {% data variables.product.prodname_dependabot %} идентифицирует устаревшую зависимость, он создает запрос на вытягивание для обновления манифеста до последней версии зависимости. Для зависимостей от поставщиков {% data variables.product.prodname_dependabot %} создает запрос на вытягивание, чтобы напрямую заменить устаревшую зависимость новой версией. Проверьте, что тесты пройдены, просмотрите журнал изменений и заметки о выпуске, включенные в сводку запроса на вытягивание, а затем объедините запрос на вытягивание. Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).

При включении _обновлений системы безопасности_ {% data variables.product.prodname_dependabot %} также создает запросы на вытягивание для обновления уязвимых зависимостей. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-tos %}

## Частота запросов на вытягивание {% data variables.product.prodname_dependabot %}

Вы указываете частоту проверки каждой экосистемы на наличие новых версий в файле конфигурации: ежедневно, еженедельно или ежемесячно.

{% data reusables.dependabot.initial-updates %}

Если вы включили обновления для системы безопасности, иногда будут отображаться дополнительные запросы на вытягивание для этих обновлений. Они активируются оповещением {% data variables.product.prodname_dependabot %} для зависимости в ветви по умолчанию. {% data variables.product.prodname_dependabot %} автоматически создает запрос на вытягивание для обновления уязвимой зависимости.

## Поддерживаемые репозитории и экосистемы
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Обновления версий можно настроить для репозиториев, содержащих манифест зависимостей или файл блокировки для одного из поддерживаемых диспетчеров пакетов. Для некоторых диспетчеров пакетов можно также настроить поставщиков для зависимостей. Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#vendor).
{% note %}

{% data reusables.dependabot.private-dependencies-note %} 

{% data variables.product.prodname_dependabot %} не поддерживает частные зависимости {% data variables.product.prodname_dotcom %} для всех менеджеров пакетов. Подробные сведения см. в таблице ниже.

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

Если репозиторий уже использует интеграцию для управления зависимостями, перед включением {% data variables.product.prodname_dependabot %} необходимо отключить эту функцию. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Сведения об интеграциях](/github/customizing-your-github-workflow/about-integrations).{% endif %}

## Сведения об уведомлениях для обновлений версий {% data variables.product.prodname_dependabot %}

Вы можете отфильтровать уведомления по {% data variables.product.company_short %} для отображения уведомлений о запросах на вытягивание, созданных {% data variables.product.prodname_dependabot %}. Дополнительные сведения см. в разделе [Управление уведомлениями из папки «Входящие»](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox).
