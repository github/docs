---
title: Автоматизация миграции с помощью средства импорта GitHub Actions
intro: 'Используйте {% data variables.product.prodname_actions_importer %} для планирования и автоматизации миграции в {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
ms.openlocfilehash: 391455eb90a3a71ab0e0cb5a1573a0ee48527d8e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160082'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

[Юридическое уведомление](#legal-notice)

{% note %}

**Примечание**. {% data variables.product.prodname_actions_importer %} в настоящее время доступна в качестве общедоступной предварительной версии. Посетите [страницу регистрации](https://github.com/features/actions-importer/signup) , чтобы запросить доступ к предварительной версии. После предоставления доступа вы сможете использовать `gh-actions-importer` расширение CLI.

{% endnote %}

## Сведения о {% data variables.product.prodname_actions_importer %}

{% data variables.product.prodname_actions_importer %} можно использовать для планирования и автоматического переноса конвейеров CI/CD в {% data variables.product.prodname_actions %} из Azure DevOps, CircleCI, GitLab, Jenkins и Travis CI.

{% data variables.product.prodname_actions_importer %} распространяется как контейнер Docker и использует расширение [CLI {% data variables.product.prodname_dotcom %}](https://cli.github.com) для взаимодействия с контейнером.

Любой рабочий процесс, преобразованный {% data variables.product.prodname_actions_importer %}, должен быть проверен на правильность, прежде чем использовать его в качестве рабочей нагрузки. Цель состоит в том, чтобы достичь коэффициента конверсии 80 % для каждого рабочего процесса, однако фактический коэффициент конверсии будет зависеть от состава каждого отдельного преобразованного конвейера.

## Поддерживаемые платформы CI

Вы можете использовать {% data variables.product.prodname_actions_importer %} для миграции со следующих платформ:

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

Получив доступ к предварительной версии, вы сможете получить доступ к дополнительной справочной документации по каждой из поддерживаемых платформ.

## Предварительные условия

{% data variables.product.prodname_actions_importer %} имеет следующие требования:

- Вам должен быть предоставлен доступ к общедоступной предварительной версии для {% data variables.product.prodname_actions_importer %}.
{%- ifversion ghes < 3.5 or ghae %}
- Используйте {% data variables.product.pat_generic %} с включенной областью `read:packages` .
{%- else %}
- Для проверки подлинности в {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} необходимы учетные данные. Дополнительные сведения см. в разделе [Работа с Реестром контейнеров](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry).
{% endif %}
- Среда, в которой можно запускать контейнеры на основе Linux и устанавливать необходимые средства.
  - Docker [установлен](https://docs.docker.com/get-docker/) и запущен.
  - Интерфейс [командной строки {% data variables.product.prodname_dotcom %}](https://cli.github.com) установлен.

  {% note %}

  **Примечание**. Контейнер {% data variables.product.prodname_actions_importer %} и cli не нужно устанавливать на одном сервере с платформой CI.

  {% endnote %}

### Установка расширения CLI {% data variables.product.prodname_actions_importer %}

1. Установите расширение CLI {% data variables.product.prodname_actions_importer %}:

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. Убедитесь, что расширение установлено:

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### Обновление интерфейса командной строки {% data variables.product.prodname_actions_importer %}

Чтобы убедиться, что вы используете последнюю версию {% data variables.product.prodname_actions_importer %}, следует регулярно выполнять `update` команду :

```bash
$ gh actions-importer update
```

Для успешного выполнения этой команды необходимо пройти проверку подлинности с помощью {% data variables.product.prodname_container_registry %}. Кроме того, можно указать учетные данные с помощью `--username` параметров и `--password-stdin` :

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### Проверка подлинности в командной строке

Необходимо настроить учетные данные, которые позволяют {% data variables.product.prodname_actions_importer %} взаимодействовать с {% data variables.product.prodname_dotcom %} и текущим сервером CI. Эти учетные данные можно настроить с помощью переменных среды или `.env.local` файла. Переменные среды можно настроить в интерактивной командной строке, выполнив следующую команду:

```bash
$ gh actions-importer configure
```

Получив доступ к предварительной версии, вы сможете получить доступ к дальнейшей справочной документации по использованию переменных среды.

## Использование интерфейса командной строки {% data variables.product.prodname_actions_importer %}

Используйте подкоманды , `gh actions-importer` чтобы начать миграцию в {% data variables.product.prodname_actions %}, включая `audit`, `forecast`, `dry-run`и `migrate`.

### Аудит существующих конвейеров CI

Подкоманду `audit` можно использовать для планирования миграции CI/CD путем анализа текущего объема ci/CD. Этот анализ можно использовать для планирования временной шкалы миграции в {% data variables.product.prodname_actions %}.

Чтобы выполнить аудит, используйте следующую команду, чтобы определить доступные параметры:

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

Получив доступ к предварительной версии, вы сможете получить доступ к дальнейшей справочной документации по выполнению аудита.

### Прогнозирование использования

Подкоманда `forecast` проверяет использование конвейера за прошлые периоды, чтобы создать прогноз использования {% data variables.product.prodname_actions %}.

Чтобы запустить прогноз, используйте следующую команду, чтобы определить доступные параметры:

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

Получив доступ к предварительной версии, вы сможете получить доступ к дальнейшей справочной документации по выполнению прогноза.

### Тестирование процесса миграции

Подкоманду `dry-run` можно использовать для преобразования конвейера в его эквивалент {% data variables.product.prodname_actions %}, а затем записать рабочий процесс в локальную файловую систему.

Чтобы выполнить сухой запуск, используйте следующую команду, чтобы определить доступные варианты:

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

Получив доступ к предварительной версии, вы сможете получить доступ к дальнейшей справочной документации по выполнению сухого запуска.

### Перенос конвейера в {% data variables.product.prodname_actions %}

Подкоманду `migrate` можно использовать для преобразования конвейера в его GitHub Actions эквивалента, а затем создать запрос на вытягивание с содержимым.

Чтобы выполнить миграцию, используйте следующую команду, чтобы определить доступные варианты:

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

Получив доступ к предварительной версии, вы сможете получить доступ к дальнейшей справочной документации по выполнению миграции.

## Юридическое уведомление

Части были адаптированы в соответствии с https://github.com/github/gh-actions-importer/ лицензией MIT:

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
