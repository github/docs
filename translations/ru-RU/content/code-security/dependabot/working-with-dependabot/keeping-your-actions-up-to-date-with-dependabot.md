---
title: Поддержка актуальности действий с помощью Dependabot
intro: 'Вы можете использовать {% data variables.product.prodname_dependabot %}, чтобы обновлять используемые действия до последних версий.'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
ms.openlocfilehash: 804660684230d8a0fb716b69644aab851a4c247b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107728'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения об {% data variables.product.prodname_dependabot_version_updates %} для действий

Действия часто обновляются с помощью исправлений ошибок и новых компонентов, чтобы сделать автоматизированные процессы более надежными, быстрыми и безопасными. Если включить {% data variables.product.prodname_dependabot_version_updates %} для {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} поможет обеспечить актуальность ссылок на действия в файле *workflow.yml* репозитория. Для каждого действия в файле {% data variables.product.prodname_dependabot %} проверяет ссылку на действие (обычно номер версии или идентификатор фиксации, связанный с действием) на соответствие последней версии. Если доступна более поздняя версия действия, {% data variables.product.prodname_dependabot %} отправит запрос на вытягивание, который обновляет ссылку в файле рабочего процесса до последней версии. Дополнительные сведения об {% data variables.product.prodname_dependabot_version_updates %} см. в разделе [Сведения об {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates). Дополнительные сведения о настройке рабочих процессов для {% data variables.product.prodname_actions %} см. в разделе [Изучение {% data variables.product.prodname_actions %}](/actions/learn-github-actions).
  
{% data reusables.actions.workflow-runs-dependabot-note %}

## Включение {% data variables.product.prodname_dependabot_version_updates %} для действий

Вы можете настроить {% data variables.product.prodname_dependabot_version_updates %} для обслуживания своих действий, а также используемых библиотек и пакетов. 

1. Если вы уже включили {% data variables.product.prodname_dependabot_version_updates %} для других экосистем или диспетчеров пакетов, просто откройте существующий файл *dependabot.yml*. В противном случае создайте файл конфигурации *dependabot.yml* в каталоге `.github` своего репозитория. Дополнительные сведения см. в статье [Настройка обновления версий Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates).
1. Укажите `"github-actions"` в качестве `package-ecosystem` для отслеживания.
1. Задайте для `directory` значение `"/"` для проверки наличия файлов рабочего процесса в `.github/workflows`.
1. Задайте `schedule.interval`, чтобы указать периодичность проверки наличия новых версий.
{% data reusables.dependabot.check-in-dependabot-yml %} Если вы изменили существующий файл, сохраните изменения.

Вы также можете включить {% data variables.product.prodname_dependabot_version_updates %} для вилок. Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks).

### Пример файла *dependabot.yml* для {% data variables.product.prodname_actions %}

Приведенный ниже пример файла *dependabot.yml* настраивает обновления версии для {% data variables.product.prodname_actions %}. Для `directory` должно быть задано значение `"/"` для проверки наличия файлов рабочего процесса в `.github/workflows`. Для `schedule.interval` задано значение `"weekly"`. После того как этот файл будет возвращен или обновлен, {% data variables.product.prodname_dependabot %} проверяет наличие новых версий действий. {% data variables.product.prodname_dependabot %} выдаст запросы на вытягивание обновлений версий для любых устаревших действий, которые будут найдены. После обновления начальной версии {% данных variables.product.prodname_dependabot %} продолжит проверять наличие устаревших версий действий раз в неделю.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## Настройка {% data variables.product.prodname_dependabot_version_updates %} для действий

При включении {% data variables.product.prodname_dependabot_version_updates %} для действий необходимо указать значения для `package-ecosystem`, `directory` и `schedule.interval`. Существует множество дополнительных свойств, которые можно настроить для дальнейшей настройки обновлений версий. Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates).

## Дополнительные материалы

- [Сведения о GitHub Actions](/actions/getting-started-with-github-actions/about-github-actions)
