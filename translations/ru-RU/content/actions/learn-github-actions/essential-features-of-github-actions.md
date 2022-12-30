---
title: Ключевые функции действий GitHub
shortTitle: Essential features
intro: '{% data variables.product.prodname_actions %} предназначены для создания надежных динамических операций автоматизации. В этом руководстве показано, как создавать рабочие процессы {% data variables.product.prodname_actions %}, которые включают переменные среды, настраиваемые скрипты и многое другое.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: 46a6a33928d9ff4587707972fc26de86c59f9ac6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145070097'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

{% data variables.product.prodname_actions %} позволяют настраивать рабочие процессы в соответствии с уникальными потребностями приложения и команды. Их этого руководства вы узнаете о базовых методах настройки, таких как применение переменных, выполнение сценариев и совместное использование несколькими заданиями данных и артефактов.

##  Использование переменных в рабочих процессах

{% data variables.product.prodname_actions %} включают переменные среды по умолчанию для каждого выполнения рабочего процесса. При необходимости применять пользовательские переменные среды их можно задать в файле рабочего процесса YAML. В этом примере показано, как создать пользовательские переменные с именами `POSTGRES_HOST` и `POSTGRES_PORT`. Эти переменные затем будут доступны для сценария `node client.js`.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

Дополнительные сведения см. в разделе [Использование переменных среды](/actions/configuring-and-managing-workflows/using-environment-variables).

## Добавление сценариев в рабочий процесс

Вы можете использовать действия для выполнения скриптов и команд оболочки, которые затем выполняются в назначенном средстве выполнения тестов. В этом примере показано, как действие может использовать ключевое слово `run` для выполнения `npm install -g bats` в средстве выполнения тестов.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

Например, чтобы выполнить сценарий в качестве действия, можно сохранить сценарий в репозитории и указать путь и тип оболочки.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

## Общий доступ к данным для разных заданий

Если задание создает файлы, которыми вы хотите поделиться с другим заданием в том же рабочем процессе или хотите сохранить файлы для последующей ссылки, их можно сохранить как _артефакты_ в {% data variables.product.prodname_dotcom %}. Артефакты — это файлы, созданные при сборке и тестировании кода. Например, артефактами могут быть двоичные файлы или файлы пакетов, результаты тестов, снимки экрана или файлы журналов. Артефакты связаны с выполнением рабочего процесса, в котором они были созданы, и могут использоваться другим заданием. {% data reusables.actions.reusable-workflow-artifacts %}

Например, можно создать файл, а затем отправить его как артефакт.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: output-log-file
          path: output.log
```

Чтобы скачать артефакт из отдельного выполнения рабочего процесса, используйте действие `actions/download-artifact`. Например, можно скачать артефакт с именем `output-log-file`.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: output-log-file
```

Для скачивания артефакта из того же выполнения рабочего процесса задание скачивания должно указывать `needs: upload-job-name`, чтобы оно не запускалось до завершения задания отправки.

Дополнительные сведения об артефактах см. в статье [Сохранение данных рабочего процесса с помощью артефактов](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts).

## Дальнейшие действия

Дополнительные сведения о {% data variables.product.prodname_actions %} см. в статье [Управление сложными рабочими процессами](/actions/learn-github-actions/managing-complex-workflows).
