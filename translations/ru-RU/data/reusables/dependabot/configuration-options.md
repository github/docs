---
ms.openlocfilehash: 15dca8ffafe9686d15e08ffb8ecd9e07ceba3942
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878900"
---
| Параметр | Обязательно | Обновления для системы безопасности | Обновления версий | Описание |
|:---|:---:|:---:|:---:|:---|
| [`package-ecosystem`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)                     | **X** | | X | Диспетчер пакетов, который должен использоваться                  |
| [`directory`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#directory)                                     | **X** | | X | Расположение манифестов пакетов           |
| [`schedule.interval`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleinterval)                      | **X** | | X | Частота проверки наличия обновлений                |
| [`allow`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)                                             | | X | X | Настройка разрешенных обновлений         |
| [`assignees`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#assignees)                                     | | X | X | Уполномоченные для установки в запросах на вытягивание           |
| [`commit-message`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#commit-message)                           | | X | X | Настройки сообщений о фиксации                  |{% ifversion fpt or ghec or ghes > 3.4 %}
| [`enable-beta-ecosystems`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)           | | | X | Включить экосистемы с поддержкой бета-уровня |{% endif %}
| [`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)                                           | | X | X | Пропускать определенные зависимости или версии     |
| [`insecure-external-code-execution`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#insecure-external-code-execution) | | | X | Разрешить или запретить выполнение кода в файлах манифеста |
| [`labels`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#labels)                                           | | X | X | Метки для установки в запросах на вытягивание              |
| [`milestone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#milestone)                                     | | X | X | Вехи для установки в запросах на вытягивание           |
| [`open-pull-requests-limit`](#open-pull-requests-limit)       | | X | X | Ограничение количества открытых запросов на вытягивание для обновлений версий |
| [`pull-request-branch-name.separator`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#pull-request-branch-nameseparator) | | X | X | Разделитель изменений для имен ветвей запросов на вытягивание |
| [`rebase-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#rebase-strategy)                         | | X | X | Отключить автоматическое перемещение изменений из одной ветви в другую                  |
| [`registries`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries)                                   | | | X | Частные реестры, доступ к которым может получить {% data variables.product.prodname_dependabot %}|
| [`reviewers`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#reviewers)                                     | | X | X | Рецензенты для установки в запросах на вытягивание           |
| [`schedule.day`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleday)                                | | | X | День недели, в который должна выполняться проверка наличия обновлений              |
| [`schedule.time`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletime)                              | | | X | Время дня, когда должна выполняться проверка наличия обновлений (чч:мм)      |
| [`schedule.timezone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletimezone)                      | | | X | Часовой пояс для времени дня (идентификатор часового пояса)    |
| [`target-branch`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch)                             | | | X  | Ветвь для создания запросов на вытягивание     |
| [`vendor`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#vendor)                                           | | | X | Обновлять вендоринговые или кэшированные зависимости        |
| [`versioning-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#versioning-strategy)                 | | X | X | Как обновлять требования к версии манифеста |
