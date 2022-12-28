---
title: "Отправка файла\_SARIF в GitHub"
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
ms.openlocfilehash: 3def104e487f54e2c48d462d1dcfe8bab63c6fa3
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161164'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Сведения об отправке файлов SARIF для {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} создает предупреждения {% data variables.product.prodname_code_scanning %} в репозитории с использованием сведений из файлов формата обмена результатами статического анализа (SARIF). Файлы SARIF можно отправить в репозиторий с помощью API или {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

Файлы SARIF можно создавать с помощью множества средств тестирования безопасности на основе статического анализа, включая {% data variables.product.prodname_codeql %}. Для результатов должен использоваться формат SARIF версии 2.1.0. Дополнительные сведения см. на странице [Поддержка SARIF для {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning).

Вы можете отправить результаты с помощью {% data variables.product.prodname_actions %}, API {% data variables.product.prodname_code_scanning %}, {% ifversion codeql-runner-supported %} {% data variables.code-scanning.codeql_runner %},{% endif %} или {% data variables.product.prodname_codeql_cli %}. Выбор лучшего метода отправки будет зависеть от способа создания файла SARIF, например если вы используете:

- {% data variables.product.prodname_actions %}: для выполнения действия {% data variables.product.prodname_codeql %} не требуется никаких дальнейших действий. Действие {% data variables.product.prodname_codeql %} автоматически отправляет файл SARIF после завершения анализа.
- {% data variables.product.prodname_actions %}: для запуска средства для анализа, совместимого с SARIF, можно обновить рабочий процесс, чтобы включить последний шаг, на котором отправляются результаты (см. ниже).
 - {% data variables.product.prodname_codeql_cli %} для запуска {% data variables.product.prodname_code_scanning %} в системе CI. Вы можете использовать CLI для отправки результатов в {% data variables.product.prodname_dotcom %} (дополнительные сведения см. в статье [Установка {% data variables.product.prodname_codeql_cli %} в системе CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)).{% ifversion codeql-runner-supported %}
- {% data variables.code-scanning.codeql_runner %} для запуска {% data variables.product.prodname_code_scanning %} в системе CI по умолчанию средство выполнения автоматически отправляет результаты в {% data variables.product.prodname_dotcom %} после завершения. Если вы заблокируйте автоматическую отправку, то, когда будете готовы к отправке результатов, можно использовать `upload` команду (дополнительные сведения см[. в разделе Запуск {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)").{ % endif %}
- Средство, которое создает результаты в качестве артефакта за пределами репозитория: для отправки файла можно использовать API {% data variables.product.prodname_code_scanning %} (дополнительные сведения см. в разделе [Отправка анализа в виде данных SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)).

{% data reusables.code-scanning.not-available %}

## Отправка анализа {% data variables.product.prodname_code_scanning %} с помощью {% data variables.product.prodname_actions %}

Чтобы использовать {% data variables.product.prodname_actions %} для отправки стороннего файла SARIF в репозиторий, потребуется рабочий процесс. Дополнительные сведения см. в статье со [сведениями о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Для рабочего процесса необходимо действие `upload-sarif`, которое является частью репозитория `github/codeql-action`. Это включает в себя входные параметры, которые можно использовать для настройки отправки. Далее перечислены основные входные параметры, которые вы будете использовать:

- `sarif-file`, который обеспечивает настройку файла или каталога для отправляемых файлов SARIF. Путь к каталогу или файлу задается относительно корня репозитория.
- `category` (необязательный), который назначает категорию для результатов в файле SARIF. Это позволяет анализировать одну фиксацию несколькими способами и просматривать результаты с помощью представлений {% data variables.product.prodname_code_scanning %} в {% data variables.product.prodname_dotcom %}. Например, вы можете выполнить анализ с помощью нескольких инструментов, а в монорепозиториях проанализировать различные срезы на основе подмножества измененных файлов.

Дополнительные сведения см. в описании [`upload-sarif` действия](https://github.com/github/codeql-action/tree/{% ifversion actions-node16-action %}v2{% else %}v1{% endif %}/upload-sarif).

Вы можете настроить действие `upload-sarif`, которое будет выполняться при наступлении событий `push` и `scheduled`. Дополнительные сведения о событиях {% data variables.product.prodname_actions %} см. в статье [События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows).

Если файл SARIF не включает `partialFingerprints`, поле `partialFingerprints` будет вычислено автоматически при выполнении действия `upload-sarif` и будет предпринята попытка предотвратить дублирование оповещений. {% data variables.product.prodname_dotcom %} может создать `partialFingerprints` только в том случае, если репозиторий содержит как файл SARIF, так и исходный код, используемый при статическом анализе. Дополнительные сведения о предотвращении повторяющихся предупреждений см. в разделе [Сведения о поддержке SARIF для сканирования кода](/code-security/secure-coding/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Пример рабочего процесса для файлов SARIF, созданных за пределами репозитория

Вы можете создать новый рабочий процесс, который будет отправлять файлы SARIF после их фиксации в репозитории. Это удобно, если файл SARIF создается как артефакт за пределами репозитория.

В этом примере рабочий процесс выполняется при каждой отправке фиксаций в репозиторий. Действие использует свойство `partialFingerprints`, чтобы определить, произошли ли изменения. В дополнение к выполнению при отправке фиксаций запланировано выполнение рабочего процесса один раз в неделю. Дополнительные сведения см. в разделе [События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows).

Этот рабочий процесс отправляет файл `results.sarif`, расположенный в корне репозитория. Дополнительные сведения о создании файлов рабочего процесса см. в статье [Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Кроме того, вы можете изменить этот рабочий процесс, чтобы отправлять каталог файлов SARIF. Например, можно поместить все файлы SARIF в каталог в корне репозитория с именем `sarif-output` и присвоить входному параметру действия `sarif_file` значение `sarif-output`. Обратите внимание, что при отправке каталога каждый файл SARIF должен содержать уникальный `runAutomationDetails.id` для определения категории результатов. Дополнительные сведения см. в статье [`runAutomationDetails` Объект](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object).

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### Пример рабочего процесса, выполняющего средство для анализа ESLint

Если вы создаете сторонний файл SARIF в рамках рабочего процесса непрерывной интеграции (CI), вы можете добавить действие `upload-sarif` в качестве шага после выполнения тестов CI. Если у вас еще нет рабочего процесса CI, его можно создать с помощью шаблона {% data variables.product.prodname_actions %}. Дополнительные сведения см. в [кратком руководстве по {% data variables.product.prodname_actions %}](/actions/quickstart).

В этом примере рабочий процесс выполняется при каждой отправке фиксаций в репозиторий. Действие использует свойство `partialFingerprints`, чтобы определить, произошли ли изменения. В дополнение к выполнению при отправке фиксаций запланировано выполнение рабочего процесса один раз в неделю. Дополнительные сведения см. в разделе [События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows).

Рабочий процесс демонстрирует пример выполнения средства для статического анализа ESLint в качестве шага в рабочем процессе. На шаге `Run ESLint` запускается средство ESLint и выводится файл `results.sarif`. Затем рабочий процесс отправляет файл `results.sarif` в {% data variables.product.prodname_dotcom %} с помощью действия `upload-sarif`. Дополнительные сведения о создании файла рабочего процесса см. в статье [Введение в GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions).

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## Дополнительные материалы

- [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)
- [Просмотр журнала рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)
- [Сведения о {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} в системе CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)
- [Отправка анализа в виде данных SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)
