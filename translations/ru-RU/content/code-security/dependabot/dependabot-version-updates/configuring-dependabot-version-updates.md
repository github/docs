---
title: Настройка обновлений версий Dependabot
intro: 'Вы можете настроить репозиторий, чтобы {% data variables.product.prodname_dependabot %} автоматически обновлял используемые вами пакеты.'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure version updates
ms.openlocfilehash: 8513bd41ec86d353241297d2a5bd6111a49fec3d
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135817'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения об обновлениях версий для зависимостей

Чтобы включить {% data variables.product.prodname_dependabot_version_updates %}, отправьте файл конфигурации *dependabot.yml* в каталог `.github` репозитория. Затем {% data variables.product.prodname_dependabot %} создает запросы на вытягивание, чтобы обеспечить актуальность зависимостей. Для зависимостей диспетчера пакетов, которые требуется обновить, необходимо указать расположение файлов манифеста пакета и частоту проверки обновлений зависимостей, указанных в этих файлах. Сведения о включении обновлений системы безопасности см. в разделе [Настройка {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates).

{% data reusables.dependabot.initial-updates %} Дополнительные сведения см. в разделе [Настройка обновлений зависимостей](/github/administering-a-repository/customizing-dependency-updates).

По умолчанию {% data variables.product.prodname_dependabot_version_updates %} поддерживает актуальность только прямых зависимостей, явно определенных в манифесте. Вы можете получать обновления для косвенных зависимостей, определенных в файлах блокировки. Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow).

{% data reusables.dependabot.private-dependencies-note %} Кроме того, {% data variables.product.prodname_dependabot %} не поддерживает частные зависимости {% data variables.product.prodname_dotcom %} для всех менеджеров пакетов. Дополнительные сведения см. в разделах [Сведения об обновлениях версий Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems) и [Языковая поддержка {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support).

## Включение {% data variables.product.prodname_dependabot_version_updates %}

Чтобы включить {% data variables.product.prodname_dependabot_version_updates %}, зафиксируйте файл конфигурации *dependabot.yml* в репозитории. {% ifversion dependabot-settings-update-37 %}Если включить эту функцию на странице параметров, GitHub создаст базовый файл, который можно редактировать. В противном случае создайте файл в любом редакторе.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. В разделе "Безопасность и анализ кода" справа от {% data variables.product.prodname_dependabot_version_updates %} щелкните **Включить**, чтобы открыть базовый файл конфигурации *dependabot.yml* в каталоге `.github` своего репозитория.
{% else %}
1. Создайте файл конфигурации *dependabot.yml* в каталоге `.github` своего репозитория. {% endif %}
1. Добавьте `version`. 
1. При необходимости, если у вас есть зависимости в частном реестре, добавьте раздел `registries`, содержащий сведения о проверке подлинности. 
1. Добавьте раздел `updates` с записью для каждого диспетчера пакетов, который должен отслеживаться {% data variables.product.prodname_dependabot %}.
1. Для каждого диспетчера пакетов используйте следующие параметры:
    - `package-ecosystem`, чтобы указать диспетчер пакетов.
    - `directory`, чтобы указать расположение файла манифеста или других файлов определений.
    - `schedule.interval`, чтобы указать частоту проверки наличия новых версий.
{% data reusables.dependabot.check-in-dependabot-yml %}

Сведения о всех параметрах конфигурации см. в статье [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates).

### Пример файла *dependabot.yml*

В примере файла *dependabot.yml* ниже настраиваются обновления версий для двух диспетчеров пакетов: npm и Docker. При отправке этого файла {% data variables.product.prodname_dependabot %} проверяет файлы манифеста в ветви по умолчанию на наличие устаревших зависимостей. При обнаружении устаревших зависимостей в ветвь по умолчанию будут отправлены запросы на вытягивание для обновления зависимостей.

```yaml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

В приведенном выше примере, если зависимости Docker сильно устарели, может потребоваться начать с расписания `daily` и применять его до тех пор, пока зависимости не будут обновлены, а затем вернуться к еженедельному расписанию.

### Включение обновлений версий для вилок

Если вы хотите включить обновления версий для вилок, необходимо выполнить дополнительный шаг. Обновления версий не включаются автоматически при наличии файла конфигурации *dependabot.yml*. Это гарантирует, что владельцы вилок не смогут включить обновления версий случайно при извлечении изменений из исходного репозитория, включая файл конфигурации *dependabot.yml*. 

В вилке также необходимо явным образом включить {% data variables.product.prodname_dependabot %}.

{% ifversion dependabot-version-updates-for-forks %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. В разделе "Безопасность и анализ кода" справа от "{% data variables.product.prodname_dependabot_version_updates %} щелкните **Включить** , чтобы разрешить {% data variables.product.prodname_dependabot %} инициировать обновление версии.
![Снимок экрана: параметр {% data variables.product.prodname_dependabot_version_updates %} для вилки репозитория](/assets/images/help/dependabot/dependabot-version-update-forks.png)

{% else %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
5. В разделе "Включение Dependabot" щелкните **Включить Dependabot**.

{% endif %}

## Проверка состояния обновлений версий

После включения обновлений версий на вкладке **Dependabot** в графе зависимостей для репозитория появляются сведения. На этой вкладке отображается информация о том, какие диспетчеры пакетов {% data variables.product.prodname_dependabot %} отслеживаются и когда в последний раз была выполнена проверка новых версий {% data variables.product.prodname_dependabot %}.

![Вкладка "Аналитика репозитория", граф зависимостей, вкладка "Dependabot"](/assets/images/help/dependabot/dependabot-tab-view.png)

Дополнительные сведения см. в разделе [Получение списка зависимостей, для которых настроены обновления версий](/github/administering-a-repository/listing-dependencies-configured-for-version-updates).

## Отключение {% data variables.product.prodname_dependabot_version_updates %}

Вы можете полностью отключить обновления версий, удалив файл *dependabot.yml* из репозитория. Обычно требуется отключить обновления временно для одной или нескольких зависимостей или для одного или нескольких диспетчеров пакетов.

- Для диспетчеров пакетов: отключите их, задав значение параметра `open-pull-requests-limit: 0` или закомментировав соответствующий раздел `package-ecosystem` в файле конфигурации.
- Для конкретных зависимостей: отключите их, добавив атрибуты `ignore` для пакетов или приложений, которые требуется исключить из обновлений.

При отключении зависимостей можно использовать подстановочные знаки для сопоставления с набором связанных библиотек. Можно также указать, какие версии следует исключить. Это особенно удобно, если необходимо заблокировать обновления библиотеки, ожидая поддержки критических изменений в API библиотеки, но при этом требуется получать все исправления безопасности для используемой версии.

### Пример отключения обновлений версий для некоторых зависимостей

Приведенный ниже пример файла *dependabot.yml* содержит различные способы отключения обновлений для некоторых зависимостей, при этом другие обновления продолжаются.

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

Дополнительные сведения о проверке существующих параметров пропуска см. в разделе [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore).
