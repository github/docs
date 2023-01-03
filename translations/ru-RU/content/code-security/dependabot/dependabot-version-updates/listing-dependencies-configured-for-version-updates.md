---
title: 'Перечисление зависимостей, настроенных для обновлений версий'
intro: 'Вы можете просмотреть зависимости, которые {% data variables.product.prodname_dependabot %} отслеживает на предмет наличия обновлений.'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
ms.openlocfilehash: 6da514616c7091fb3ac4f874f68b5951ca23412b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110150'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Просмотр зависимостей, отслеживаемых {% data variables.product.prodname_dependabot %}

После включения обновлений версий можно убедиться, что конфигурация правильна, с помощью вкладки **{% data variables.product.prodname_dependabot %}** в графе зависимостей для репозитория. Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
1. При необходимости, чтобы просмотреть файлы, отслеживаемые для диспетчера пакетов, щелкните связанный {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Отслеживаемые файлы зависимостей](/assets/images/help/dependabot/monitored-dependency-files.png)

Если отсутствуют какие-либо зависимости, проверьте файлы журнала на наличие ошибок. Если отсутствуют какие-либо диспетчеры пакетов, проверьте файл конфигурации.

## Просмотр файлов журнала {% data variables.product.prodname_dependabot %}

1. На вкладке **{% data variables.product.prodname_dependabot %}** щелкните **Последнее обновление: *TIME* назад**, чтобы просмотреть файл журнала, созданный {% data variables.product.prodname_dependabot %} при последней проверке обновлений версий.
  ![Просмотр файла журнала](/assets/images/help/dependabot/last-checked-link.png)
2. При необходимости, чтобы повторно выполнить проверку версии, щелкните **Проверить наличие обновлений**.
  ![Проверка обновлений](/assets/images/help/dependabot/check-for-updates.png)
