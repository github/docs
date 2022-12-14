---
title: Синтаксис рабочего процесса для GitHub Actions
shortTitle: Workflow syntax
intro: 'Рабочий процесс — это настраиваемый автоматизированный процесс, состоящий из одного или нескольких заданий. Чтобы определить конфигурацию рабочего процесса, необходимо создать YAML-файл.'
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/reference/workflow-syntax-for-github-actions
  - /actions/learn-github-actions/workflow-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: ca5a79fbaeeafa474283cbabd67108cb22b6f985
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192051'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о синтаксисе YAML для рабочих процессов

Файлы рабочего процесса используют синтаксис YAML и должны иметь расширение файла `.yml` или `.yaml`. {% data reusables.actions.learn-more-about-yaml %}

Файлы рабочего процесса необходимо хранить в каталоге `.github/workflows` репозитория.

## `name`

имя рабочего процесса. {% data variables.product.prodname_dotcom %} отображает имена рабочих процессов на вкладке "Действия" репозитория. Если опустить `name`, {% data variables.product.prodname_dotcom %} задает путь к файлу рабочего процесса относительно корня репозитория.

{% ifversion actions-run-name %}
## `run-name`

Имя для запусков рабочих процессов, созданных из рабочего процесса. {% data variables.product.prodname_dotcom %} отображает имя запуска рабочего процесса в списке выполнений рабочих процессов на вкладке "Действия" репозитория. Если `run-name` параметр опущен или является только пробелом, то для имени запуска задается информация о конкретном событии для выполнения рабочего процесса. Например, для рабочего процесса, активированного событием `push` или `pull_request` , он задается в качестве сообщения о фиксации.

Это значение может включать выражения и может ссылаться на [`github`](/actions/learn-github-actions/contexts#github-context) контексты и [`inputs`](/actions/learn-github-actions/contexts#inputs-context) .

### Пример

{% raw %}
```yaml
run-name: Deploy to ${{ inputs.deploy_target }} by @${{ github.actor }}
```
{% endraw %} {% endif %}

## `on`

{% data reusables.actions.workflows.section-triggering-a-workflow %}

### `on.<event_name>.types`

{% data reusables.actions.workflows.section-triggering-a-workflow-types %}

### `on.<pull_request|pull_request_target>.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### `on.push.<branches|tags|branches-ignore|tags-ignore>`

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### `on.<push|pull_request|pull_request_target>.<paths|paths-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### `on.schedule`

{% data reusables.actions.workflows.section-triggering-a-workflow-schedule %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `on.workflow_call`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Используйте `on.workflow_call` для определения входных и выходных данных для многократно используемого рабочего процесса. Вы также можете сопоставить секреты, доступные для вызываемого рабочего процесса. Дополнительные сведения о повторно используемых рабочих процессах см. в разделе [Повторное использованием рабочих процессов](/actions/using-workflows/reusing-workflows).

### `on.workflow_call.inputs`

При использовании ключевого слова `workflow_call` можно дополнительно указать входные данные, передаваемые вызываемому рабочему процессу из вызывающего рабочего процесса. Дополнительные сведения о ключевом слове `workflow_call` см. в разделе [События, активирующие рабочие процессы](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events).

Помимо доступных стандартных входных параметров `on.workflow_call.inputs` требует параметр `type`. Дополнительные сведения см. на веб-сайте [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype).

Если параметр `default` не задан, значение по умолчанию для входных данных — `false` для логического значения, `0` для числа и `""` для строки.

В вызываемом рабочем процессе можно использовать контекст `inputs` для ссылки на входные данные.

Если вызывающий рабочий процесс передает входные данные, которые не указаны в вызываемом рабочем процессе, это приведет к ошибке.

#### Пример

{% raw %}
```yaml
on:
  workflow_call:
    inputs:
      username:
        description: 'A username passed from the caller workflow'
        default: 'john-doe'
        required: false
        type: string

jobs:
  print-username:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input name to STDOUT
        run: echo The username is ${{ inputs.username }}
```
{% endraw %}

Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows).

#### `on.workflow_call.inputs.<input_id>.type`

Требуется, если входные данные определены для ключевого слова `on.workflow_call`. Значение этого параметра — строка, указывающая тип входных данных. Должен иметь значение `boolean`, `number` или `string`.

### `on.workflow_call.outputs`

Карта выходных данных для вызываемого рабочего процесса. Выходные данные вызываемого рабочего процесса доступны для всех нижестоящих заданий в рабочем процессе вызывающего объекта. У каждых выходных данных есть идентификатор, необязательный `description,` и `value.` Для `value` необходимо задать значение выходных данных из задания в рамках вызываемого рабочего процесса.

В приведенном ниже примере для этого многократно используемого рабочего процесса определяются два набора выходных данных: `workflow_output1` и `workflow_output2`. Они сопоставляются с выходными данными `job_output1` и `job_output2` из вызываемого задания`my_job`.

#### Пример

{% raw %}
```yaml
on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      workflow_output1:
        description: "The first job output"
        value: ${{ jobs.my_job.outputs.job_output1 }}
      workflow_output2:
        description: "The second job output"
        value: ${{ jobs.my_job.outputs.job_output2 }}
```
{% endraw %}

Сведения о том, как ссылаться на выходные данные задания, см. в разделе [`jobs.<job_id>.outputs`](#jobsjob_idoutputs). Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows).

### `on.workflow_call.secrets`

Карта секретов, которые можно использовать в вызываемом рабочем процессе.

В вызываемом рабочем процессе можно использовать контекст `secrets` для ссылки на секрет.

Если вызывающий рабочий процесс передает секрет, который не указан в вызываемом рабочем процессе, это приведет к ошибке.

#### Пример

{% raw %}
```yaml
on:
  workflow_call:
    secrets:
      access-token:
        description: 'A token passed from the caller workflow'
        required: false

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest

    steps:
      - name: Pass the received secret to an action
        uses: ./.github/actions/my-action
        with:
          token: ${{ secrets.access-token }}
```
{% endraw %}

#### `on.workflow_call.secrets.<secret_id>`

Строковый идентификатор, связанный с секретом.

#### `on.workflow_call.secrets.<secret_id>.required`

Логическое значение, указывающее, должен ли быть предоставлен секрет.
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

## `permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

## `env`

Переменные среды `map`, доступные для шагов всех заданий в рабочем процессе. Можно также задать переменные среды, доступные только для шагов одного задания или для одного шага. Дополнительные сведения см. в разделах [`jobs.<job_id>.env`](#jobsjob_idenv) и [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

Переменные на схеме `env` не могут быть определены с точки зрения других переменных на карте.

{% data reusables.repositories.actions-env-var-note %}

### Пример

```yaml
env:
  SERVER: production
```

## `defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

### `defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

## `concurrency`

{% data reusables.actions.jobs.section-using-concurrency %}

## `jobs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow %}

### `jobs.<job_id>`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

### `jobs.<job_id>.name`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

### `jobs.<job_id>.permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

## `jobs.<job_id>.needs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## `jobs.<job_id>.if`

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

## `jobs.<job_id>.runs-on`

{% data reusables.actions.jobs.section-choosing-the-runner-for-a-job %}

## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

Переменные среды `map`, доступные для всех шагов задания. Можно также задать переменные среды для всего рабочего процесса или отдельного шага. Дополнительные сведения см. в разделах [`env`](#env) и [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

### Пример

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

## `jobs.<job_id>.defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job %}

### `jobs.<job_id>.defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job-run %}

## `jobs.<job_id>.steps`

Задание содержит последовательность задач, называемых шагами (`steps`). Шаги могут выполнять команды, задачи установки или действия в репозитории, общедоступном репозитории или в реестре Docker. Не все шаги выполняют действия, но все действия выполняются как шаги. Каждый шаг выполняется в собственном процессе в среде средства выполнения и имеет доступ к рабочей области и файловой системе. Так как шаги выполняются в собственном процессе, изменения переменных среды не сохраняются между шагами. {% data variables.product.prodname_dotcom %} предоставляет встроенные шаги по настройке и выполнению задания.

Вы можете выполнять неограниченное количество шагов, если не превышаете лимиты по использованию рабочих процессов. Дополнительные сведения см. в разделе {% ifversion fpt or ghec or ghes %}[Лимиты использования и выставления счетов](/actions/reference/usage-limits-billing-and-administration) для средств выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %} и {% endif %}"[Сведения о средствах выполнения тестов локального размещения](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}, где описываются лимиты по использованию средства выполнения тестов локального размещения.{% elsif ghae %}.{% endif %}

### Пример

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
      - name: Print a greeting
        env:
          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona
          MIDDLE_NAME: The
          LAST_NAME: Octocat
        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

### `jobs.<job_id>.steps[*].id`

Уникальный идентификатор шага. Вы можете использовать `id` для ссылки на шаг в контекстах. Дополнительные сведения см. в разделе «[Контексты](/actions/learn-github-actions/contexts)».

### `jobs.<job_id>.steps[*].if`

Условное выражение `if` можно использовать для предотвращения выполнения шага, если условие не выполняется. {% data reusables.actions.if-supported-contexts %}

{% data reusables.actions.expression-syntax-if %} Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions).

#### Пример. Использование контекстов

 Этот шаг выполняется, только если типом события является `pull_request`, а действием — `unassigned`.

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Пример. Использование функций проверки состояния

`my backup step` выполняется только при сбое предыдущего шага задания. Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions#status-check-functions).

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### Пример. Использование секретов

На секреты нельзя напрямую ссылаться в условных выражениях `if:`. Вместо этого рекомендуется задать секреты в качестве переменных среды на уровне задания, а затем создать ссылки на переменные среды для условного выполнения шагов в задании.

Если секрет не задан, возвращаемое значение выражения, которое ссылается на этот секрет (например, {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} в примере) будет пустой строкой.

{% raw %}
```yaml
name: Run a step if a secret has been set
on: push
jobs:
  my-jobname:
    runs-on: ubuntu-latest
    env:
      super_secret: ${{ secrets.SuperSecret }}
    steps:
      - if: ${{ env.super_secret != '' }}
        run: echo 'This step will only run if the secret has a value set.'
      - if: ${{ env.super_secret == '' }}
        run: echo 'This step will only run if the secret does not have a value set.'
```
{% endraw %}

Подробнее см. в разделе [Доступность контекста](/actions/learn-github-actions/contexts#context-availability) и [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

### `jobs.<job_id>.steps[*].name`

Имя шага, которое будет отображаться на {% data variables.product.prodname_dotcom %}.

### `jobs.<job_id>.steps[*].uses`

Выбирает действие, которое будет выполняться как часть шага вашего задания. Действие — это многократно используемая единица кода. Вы можете использовать действие, определенное в том же репозитории, что и рабочий процесс, в общедоступном репозитории или в [опубликованном образе контейнера Docker](https://hub.docker.com/).

Мы настоятельно рекомендуем включить версию используемого вами действия, указав ссылку на Git, SHA или тег Docker. Если вы не укажете версию, это может нарушить ваши рабочие процессы или вызвать непредвиденное поведение, когда владелец действия будет публиковать обновление.
- Использование SHA фиксации выпущенной версии действия является самым безопасным для стабильности и защиты.
- Если действие публикует теги основного номера версий, вам следует ожидать получения критических исправлений и обновлений для системы безопасности. При этом совместимость сохранится. Обратите внимание, что это поведение выполняется по усмотрению автора действия.
- Использование ветви действия по умолчанию может быть удобным, но если кто-то выпустит новую основную версию с критическим изменением, ваш рабочий процесс может прерваться.

Для некоторых действий требуются вводы, заданные с помощью ключевого слова [`with`](#jobsjob_idstepswith). Просмотрите файл README действия, чтобы определить необходимые входные данные.

Действия — это файлы JavaScript или контейнеры Docker. Если используемое действие является контейнером Docker, необходимо запустить задание в среде Linux. Дополнительные сведения см. по адресу [`runs-on`](#jobsjob_idruns-on).

#### Пример. Использование действий с версиями

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: {% data reusables.actions.action-checkout %}
  # Reference a specific version
  - uses: {% data reusables.actions.action-checkout %}.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

#### Пример. Использование общедоступного действия

`{owner}/{repo}@{ref}`

Вы можете указать ветвь, ссылку или SHA в общедоступном репозитории данных {% data variables.product.prodname_dotcom %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the default branch of a public repository
        uses: actions/heroku@main
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

#### Пример. Использование общедоступного действия в подкаталоге

`{owner}/{repo}/{path}@{ref}`

Подкаталог в общедоступном репозитории {% data variables.product.prodname_dotcom %} в определенной ветви, ссылке или SHA.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Пример. Использование действия в том же репозитории, что и рабочий процесс

`./path/to/dir`

Путь к каталогу, содержащему действие в репозитории рабочего процесса. Перед использованием действия необходимо извлечь репозиторий.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Пример. Использование действия Docker Hub

`docker://{image}:{tag}`

Образ Docker, опубликованный в [Docker Hub](https://hub.docker.com/).

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### Пример. Использование {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}

`docker://{host}/{image}:{tag}`

Образ Docker в {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
#### Пример. Использование действия общедоступного реестра Docker

`docker://{host}/{image}:{tag}`

Образ Docker в общедоступном реестре. В этом примере используется реестр контейнеров Google: `gcr.io`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Пример. Использование действия в частном репозитории, отличном от того, где выполняется рабочий процесс

Рабочий процесс должен извлечь частный репозиторий и ссылаться на действие локально. Создайте {% data variables.product.pat_generic %} и добавьте маркер в качестве зашифрованного секрета. Дополнительные сведения см. в [разделах Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)и [Зашифрованные секреты](/actions/reference/encrypted-secrets).

Замените `PERSONAL_ACCESS_TOKEN` в примере именем секрета.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```

### `jobs.<job_id>.steps[*].run`

Используется для запуска программы командной строки с помощью оболочки операционной системы. Если `name` не указано, в качестве имени шага по умолчанию используется текст, указанный в команде `run`.

Команды выполняются с помощью оболочки, не требующей входа, по умолчанию. Вы можете выбрать другую оболочку и настроить ее для выполнения команд. Дополнительные сведения см. на веб-сайте [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

Каждое ключевое слово `run` представляет новый процесс и оболочку в среде средства выполнения. При предоставлении команд с несколькими строками каждая строка выполняется в той же оболочке. Пример:

* Команда с одной строкой:

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* Команда с несколькими строками:

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

С помощью ключевого слова `working-directory` можно указать рабочий каталог, в котором будет выполняться команда.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

Параметры оболочки по умолчанию можно переопределить в операционной системе средства выполнения с помощью ключевого слова `shell`. Можно использовать встроенные ключевые слова `shell` или определить пользовательский набор параметров оболочки. Команда оболочки, выполняемая внутри системы, исполняет временный файл, содержащий команды, указанные в ключевом слове `run`.

| Поддерживаемая платформа | Параметр `shell` | Описание | Выполнение команды внутри системы |
|--------------------|-------------------|-------------|------------------------|
| Linux / macOS | unspecified | Оболочка по умолчанию на платформах, отличных от Windows. Обратите внимание, что при этом выполняется другая команда, чем когда указать `bash` явно. Если `bash` не удается найти в пути, выполняется обработка в качестве `sh`. | `bash -e {0}` |
| Все | `bash` | Оболочка по умолчанию на платформах, отличных от Windows, с резервным вариантом `sh`. При указании оболочки Bash на Windows используется оболочка Bash, включенная в Git для Windows. | `bash --noprofile --norc -eo pipefail {0}` |
| Все | `pwsh` | PowerShell Core. {% data variables.product.prodname_dotcom %} добавляет расширение `.ps1` к имени скрипта. | `pwsh -command ". '{0}'"` |
| Все | `python` | Выполняет команду Python. | `python {0}` |
| Linux / macOS | `sh` | Резервное поведение для платформ, отличных от Windows, если оболочка не указана и `bash` не найден в пути. | `sh -e {0}` |
| Windows | `cmd` | {% data variables.product.prodname_dotcom %} добавляет расширение `.cmd` к имени скрипта и заменяет `{0}`. | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows | `pwsh` | Это оболочка по умолчанию, используемая в Windows. PowerShell Core. {% data variables.product.prodname_dotcom %} добавляет расширение `.ps1` к имени скрипта. Если в локальном средстве выполнения Windows не установлен _PowerShell Core_, будет использоваться _PowerShell Desktop_.| `pwsh -command ". '{0}'"`. |
| Windows | `powershell` | PowerShell Desktop. {% data variables.product.prodname_dotcom %} добавляет расширение `.ps1` к имени скрипта. | `powershell -command ". '{0}'"`. |

#### Пример. Выполнение скрипта с помощью Bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### Пример. Выполнение скрипта с помощью Windows `cmd`

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### Пример. Выполнение скрипта с помощью PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### Пример. Использование PowerShell Desktop для запуска скрипта

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### Пример. Выполнение скрипта Python

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### Пользовательская оболочка

Вы можете задать для значения `shell` строку шаблона с помощью `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} интерпретирует первое слово строки, отделенное пробелом, как команду и вставляет имя файла для временного скрипта в `{0}`.

Пример:

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

Используемая команда, в этом примере `perl`, должна быть установлена в средстве выполнения.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% elsif fpt or ghec %} Сведения о программном обеспечении, включенном в средства выполнения, размещенные на GitHub, см. в разделе [Спецификации для средств выполнения, размещенных на GitHub](/actions/reference/specifications-for-github-hosted-runners#supported-software).
{% endif %}

#### Коды выхода и настройки действий в случае ошибок

Для встроенных ключевых слов оболочки мы предоставляем следующие значения по умолчанию, выполняемые средствами выполнения, размещенными на {% data variables.product.prodname_dotcom %}. Эти рекомендации следует использовать при выполнении скриптов оболочки.

- `bash`/`sh`:
  - Поведение с завершением работы при первой ошибке с использованием `set -eo pipefail`: этот параметр задается, если `shell: bash` указано в явном виде. Оно не применяется по умолчанию.
  - Вы можете получить полный контроль над параметрами оболочки, указав строку шаблона для параметров оболочки. Например, `bash {0}`.
  - Оболочки в стиле sh используют код выхода последней команды, выполняемой в скрипте, что также является поведением по умолчанию для действий. Средство выполнения сообщит о состоянии шага (сбой/успешно) в зависимости от этого кода выхода.

- `powershell`/`pwsh`
  - Используйте завершение работы при первой ошибке по возможности. Для `pwsh` и встроенной оболочки `powershell` мы добавим `$ErrorActionPreference = 'stop'` к содержимому скрипта.
  - Мы добавляем `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` к скриптам PowerShell, чтобы состояния действий отражали последний код выхода скрипта.
  - Пользователи всегда могут отказаться от использования встроенной оболочки и предоставить настраиваемый параметр оболочки, например: `pwsh -File {0}` или `powershell -Command "& '{0}'"`, в зависимости от необходимости.

- `cmd`
  - Кажется, что единственный способ настроить завершение работы при первой ошибке, — написать скрипт для проверки каждого кода ошибки и соответствующего реагирования. Так как мы не можем предоставить это поведение по умолчанию, необходимо записать это поведение в скрипт.
  - `cmd.exe` завершит работу с уровнем ошибки последней выполняемой программы и вернет код ошибки средству выполнения. Это поведение внутренне согласуется с предыдущим поведением по умолчанию `sh` и `pwsh` и является `cmd.exe` по умолчанию, поэтому это поведение остается неизменным.

### `jobs.<job_id>.steps[*].with`

`map` параметров ввода, определяемых действием. Каждый параметр ввода представляет собой пару "ключ-значение". Входные параметры задаются как переменные среды. Переменная имеет префикс `INPUT_` и преобразуется в верхний регистр.

#### Пример

Определяет три входных параметра (`first_name`, `middle_name` и `last_name`), определенные действием `hello_world`. Эти входные переменные будут доступны для действия `hello-world` как переменные среды `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME` и `INPUT_LAST_NAME`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat
```

### `jobs.<job_id>.steps[*].with.args`

Строка `string`, определяющая входные данные для контейнера Docker. {% data variables.product.prodname_dotcom %} передает `args` в `ENTRYPOINT` контейнера при запуске контейнера. `array of strings` не поддерживается этим параметром.

#### Пример

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: octo-org/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

`args` используются вместо инструкции `CMD` в `Dockerfile`. Если вы используете `CMD` в `Dockerfile`, следуйте этим рекомендациям, упорядоченным по предпочтительности:

1. Задокументируйте обязательные аргументы в README действия и опустите их из инструкции `CMD`.
1. Используйте значения по умолчанию, позволяющие использовать действие без указания `args`.
1. Если действие предоставляет флаг `--help` или что-то подобное, используйте его по умолчанию, чтобы действие документировало само себя.

### `jobs.<job_id>.steps[*].with.entrypoint`

Переопределяет параметр `ENTRYPOINT` Docker в `Dockerfile` или задает его, если он еще не был указан. В отличие от инструкции Docker `ENTRYPOINT`, которая имеет форму оболочки и выполнения, ключевое слово `entrypoint` принимает только одну строку, определяющую исполняемый файл для запуска.

#### Пример

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

Ключевое слово `entrypoint` предназначено для использования с действиями контейнера Docker, но его также можно использовать с действиями JavaScript, которые не определяют входные данные.

### `jobs.<job_id>.steps[*].env`

Задает переменные среды для шагов, используемых в среде средства выполнения. Можно также задать переменные среды для всего рабочего процесса или задания. Дополнительные сведения см. в разделах [`env`](#env) и [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Открытые действия могут указывать ожидаемые переменные среды в файле README. При задании секрета в переменной среды необходимо использовать контекст `secrets`. Дополнительные сведения см. в разделе [Использование переменных среды](/actions/automating-your-workflow-with-github-actions/using-environment-variables) и [Контексты](/actions/learn-github-actions/contexts).

#### Пример

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

### `jobs.<job_id>.steps[*].continue-on-error`

Предотвращает сбой задания при сбое шага. Задайте значение `true`, чтобы задание считалось выполненным при сбое этого шага.

### `jobs.<job_id>.steps[*].timeout-minutes`

Максимальное количество минут для выполнения шага перед завершением процесса.

## `jobs.<job_id>.timeout-minutes`

Максимальное количество минут, в течение которых задание должно выполняться, пока {% data variables.product.prodname_dotcom %} автоматически не отменит его. Значение по умолчанию: 360

Если время ожидания превышает ограничение по времени выполнения задания для средства выполнения, задание будет отменено, когда будет достигнуто ограничение времени выполнения. Дополнительные сведения об ограничениях по времени выполнения заданий см. в разделе {% ifversion fpt or ghec or ghes %}[Лимиты использования и выставления счетов](/actions/reference/usage-limits-billing-and-administration#usage-limits) для средств выполнения, размещенных на {% data variables.product.prodname_dotcom %} и {% endif %}"[Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}, где описываются лимиты по использованию локального средства выполнения.{% elsif ghae %}.{% endif %}

{% note %}

**Примечание.** {% data reusables.actions.github-token-expiration %} Для локальных средств выполнения маркер может быть ограничивающим фактором, если время ожидания задания превышает 24 часа. Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Сведения о секрете `GITHUB_TOKEN`](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret).

{% endnote %}

## `jobs.<job_id>.strategy`

Используйте `jobs.<job_id>.strategy` для применения стратегии матрицы к заданиям. {% data reusables.actions.jobs.about-matrix-strategy %} Дополнительные сведения см. в разделе [Использование матрицы для заданий](/actions/using-jobs/using-a-matrix-for-your-jobs).

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### Пример. Использование матрицы с одним измерением

{% data reusables.actions.jobs.single-dimension-matrix %}

#### Пример. Использование матрицы с несколькими измерениями

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### Пример. Использование контекстов для создания матриц

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### Пример. Развертывание конфигураций

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### Пример. Добавление конфигураций

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

Предотвращает сбой выполнения рабочего процесса при сбое задания. Установите значение `true`, чтобы разрешить выполнение рабочего процесса в случае сбоя этого задания.

### Пример. Предотвращение сбоя рабочего процесса в случае сбоя определенного задания матрицы

Можно разрешить сбой определенных заданий в матрице без сбоя всего рабочего процесса. Например, можно разрешить сбой экспериментального задания, у которого для `node` задано `15`, без сбоя рабочего процесса.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-latest]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-latest
        experimental: true
```
{% endraw %}

## `jobs.<job_id>.container`

{% data reusables.actions.docker-container-os-support %}

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

### `jobs.<job_id>.container.image`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-image %}

### `jobs.<job_id>.container.credentials`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-credentials %}

### `jobs.<job_id>.container.env`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-env %}

### `jobs.<job_id>.container.ports`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-ports %}

### `jobs.<job_id>.container.volumes`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-volumes %}

### `jobs.<job_id>.container.options`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-options %}

## `jobs.<job_id>.services`

{% data reusables.actions.docker-container-os-support %}

Используется для размещения контейнеров служб для задания в рабочем процессе. Контейнеры служб полезны для создания баз данных или служб кэша, таких как Redis. Средство выполнения автоматически создает сеть Docker и управляет жизненным циклом контейнеров служб.

Если вы настраиваете задание для выполнения в контейнере или шаг использует действия контейнера, вам не нужно сопоставлять порты для доступа к службе или действию. Docker автоматически предоставляет все порты между контейнерами в одной сети моста, определяемой пользователем Docker. Вы можете напрямую ссылаться на контейнер службы по имени узла. Имя узла автоматически сопоставляется с именем метки, настроенной для службы в рабочем процессе.

Если вы настраиваете задание для запуска непосредственно на компьютере средства выполнения, а шаг не использует действие контейнера, необходимо сопоставить все необходимые порты контейнера службы Docker с узлом Docker (компьютер средства выполнения). Доступ к контейнеру службы можно получить с помощью localhost и сопоставленного порта.

Дополнительные сведения о различиях между контейнерами сетевых служб см. в разделе [Сведения о контейнерах служб](/actions/automating-your-workflow-with-github-actions/about-service-containers).

### Пример. Использование localhost

В этом примере создаются две службы: nginx и redis. При указании порта узла Docker (но не порта контейнера) порт контейнера случайным образом назначается свободному порту. {% data variables.product.prodname_dotcom %} задает назначенный порт контейнера в контексте {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %}. В этом примере можно получить доступ к портам контейнера службы с помощью контекстов {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} и {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %}.

```yaml
services:
  nginx:
    image: nginx
    # Map port 8080 on the Docker host to port 80 on the nginx container
    ports:
      - 8080:80
  redis:
    image: redis
    # Map TCP port 6379 on Docker host to a random free port on the Redis container
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

Образ Docker для использования в качестве контейнера для выполнения действия. Значением может быть имя образа Docker Hub или имя реестра.

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### Пример

{% raw %}
```yaml
services:
  myservice1:
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.github_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}

### `jobs.<job_id>.services.<service_id>.env`

Задает `map` переменных среды в контейнере службы.

### `jobs.<job_id>.services.<service_id>.ports`

Задает `array` портов для предоставления в контейнере службы.

### `jobs.<job_id>.services.<service_id>.volumes`

Задает `array` тома для используемого контейнера службы. Тома можно использовать для совместного использования данных между службами или другими этапами в задании. Можно указать именованные тома Docker, анонимные тома Docker или подключения привязок на узле.

Чтобы указать том, укажите путь к источнику и назначению:

`<source>:<destinationPath>`.

`<source>` — это имя тома или абсолютный путь на хост-компьютере, а `<destinationPath>` — это абсолютный путь в контейнере.

#### Пример

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

Дополнительные параметры ресурса контейнера Docker. Список параметров см. в статье "[Параметры `docker create`](https://docs.docker.com/engine/reference/commandline/create/#options)".

{% warning %}

**Предупреждение.** Параметр `--network` на поддерживается.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Расположение и версия повторно используемого файла рабочего процесса для запуска в качестве задания. {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} Используйте один из следующих синтаксисов:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### Пример

{% data reusables.actions.uses-keyword-example %}

Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows).

### `jobs.<job_id>.with`

Если задание используется для вызова многократно используемого рабочего процесса, можно использовать `with` для предоставления карты входных данных, передаваемых в вызываемый рабочий процесс.

Все входные данные, которые вы передаете, должны соответствовать спецификациям ввода, определенным в вызываемом рабочем процессе.

В отличие от [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith), входные данные, которые вы передаете с `jobs.<job_id>.with`, не доступны как переменные среды в вызываемом рабочем процессе. Вместо этого можно ссылаться на входные данные с помощью контекста `inputs`.

#### Пример

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

Пара, состоящая из строкового идентификатора для входных данных и значения входных данных. Идентификатор должен соответствовать имени входных данных, определенных [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) в вызываемом рабочем процессе. Тип данных значения должен соответствовать типу, определенному [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) в вызываемом рабочем процессе.

Допустимые контексты выражений: `github` и `needs`.

### `jobs.<job_id>.secrets`

Если задание используется для вызова многократно используемого рабочего процесса, можно использовать `secrets` для предоставления карты секретов, передаваемых в вызываемый рабочий процесс.

Все секретные данные, которые вы передаете, должны соответствовать именам, определенным в вызываемом рабочем процессе.

#### Пример

{% raw %}
```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %}

### `jobs.<job_id>.secrets.inherit`

Используйте ключевое слово `inherit` для передачи всех секретов вызывающего рабочего процесса в вызываемой рабочий процесс. Сюда входят все секреты, к которым у вызывающего рабочего процесса есть доступ, то есть секреты организации, репозитория и среды. Ключевое слово `inherit` можно использовать для передачи секретов между репозиториями в одной организации или между организациями в пределах одного предприятия.

#### Пример

{% raw %}

```yaml
on:
  workflow_dispatch:

jobs:
  pass-secrets-to-workflow:
    uses: ./.github/workflows/called-workflow.yml
    secrets: inherit
```

```yaml
on:
  workflow_call:

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest
    steps:
      - name: Use a repo or org secret from the calling workflow.
        run: echo ${{ secrets.CALLING_WORKFLOW_SECRET }}
```

{% endraw %}

{%endif%}

### `jobs.<job_id>.secrets.<secret_id>`

Пара, состоящая из строкового идентификатора для секрета и значения секрета. Идентификатор должен соответствовать имени секрета, определенного [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) в вызываемом рабочем процессе.

Допустимые контексты выражений: `github`, `needs` и `secrets`.
{% endif %}

## Памятка по шаблонам фильтров

Специальные символы можно использовать в фильтрах путей, ветвей и тегов.

- `*`: соответствует нулю или нескольким символам, но не соответствует символу `/`. Например, `Octo*` соответствует `Octocat`.
- `**`: соответствует нулю или более символам.
- `?`: соответствует нулю или одному из предыдущих символов.
- `+`: соответствует одному или нескольким предыдущим символам.
- `[]`: соответствует одному символу, указанному в квадратных скобках или включенному в диапазоны. Диапазоны могут включать только `a-z`, `A-Z` и `0-9`. Например, диапазон `[0-9a-z]` соответствует любой цифре или строчной букве. Например, `[CB]at` соответствует `Cat` или `Bat`, а `[1-2]00` соответствует `100` и `200`.
- `!`: в начале шаблона приводит к отмене предыдущих положительных шаблонов. Если не является первым символом, не имеет особого значения.

Символы `*`, `[` и `!` являются специальными символами в YAML. Если вы начинаете шаблон с `*`, `[` или `!`, необходимо заключить шаблон в кавычки. Кроме того, при использовании [последовательности потоков](https://yaml.org/spec/1.2.2/#flow-sequences) с шаблоном, содержащим `[` и (или) `]`шаблон должен быть заключен в кавычки.

```yaml
# Valid
branches:
  - '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
branches:
  - **/README.md

# Valid
branches: [ main, 'release/v[0-9].[0-9]' ]

# Invalid - creates a parse error
branches: [ main, release/v[0-9].[0-9] ]
```

Дополнительные сведения о синтаксисе фильтра ветвей, тегов и путей см. в статьях [`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore), [`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore) и [`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore).

### Шаблоны для сопоставления ветвей и тегов

| Модель | Описание | Примеры совпадений |
|---------|------------------------|---------|
| `feature/*` | Подстановочный знак `*` соответствует любому символу, но не соответствует косой черте (`/`). |  `feature/my-branch`<br/><br/>`feature/your-branch` |
| `feature/**` | Подстановочный знак `**` соответствует любому символу, включая косую черту (`/`), в именах ветвей и тегов. | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | Соответствует точному имени ветви или тега. | `main`<br/><br/>`releases/mona-the-octocat` |
| `'*'` | Соответствует всем именам ветвей и тегов, которые не содержат косую черту (`/`). Символ `*` является специальным символом в YAML. При запуске шаблона с `*` необходимо использовать кавычки. | `main`<br/><br/>`releases` |
| `'**'` | Соответствует всем именам ветвей и тегов. Это поведение по умолчанию, если вы не используете фильтр `branches` или `tags`. | `all/the/branches`<br/><br/>`every/tag` |
| `'*feature'` | Символ `*` является специальным символом в YAML. При запуске шаблона с `*` необходимо использовать кавычки. | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |
| `v2*` | Соответствует именам ветвей и тегов, начинающимся с `v2`. | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |
| `v[12].[0-9]+.[0-9]+` | Соответствует всем ветвям и тегам семантического управления версиями с основной версией 1 или 2. | `v1.10.1`<br/><br/>`v2.0.0` |

### Шаблоны для сопоставления путей к файлам

Шаблоны путей должны соответствовать всему пути и начинаться с корневого каталога репозитория.

| Модель | Описание совпадений | Примеры совпадений |
|---------|------------------------|-----------------|
| `'*'` | Подстановочный знак `*` соответствует любому символу, но не соответствует косой черте (`/`). Символ `*` является специальным символом в YAML. При запуске шаблона с `*` необходимо использовать кавычки. | `README.md`<br/><br/>`server.rb` |
| `'*.jsx?'` | Символ `?` соответствует нулю или одному из предыдущих символов. | `page.js`<br/><br/>`page.jsx` |
| `'**'` | Подстановочный знак `**` соответствует любому символу, включая косую черту (`/`). Это поведение по умолчанию, если вы не используете фильтр `path`. | `all/the/files.md` |
| `'*.js'` | Подстановочный знак `*` соответствует любому символу, но не соответствует косой черте (`/`). Соответствует всем файлам `.js` в корне репозитория. | `app.js`<br/><br/>`index.js`
| `'**.js'` | Соответствует всем файлам `.js` в репозитории. | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |
| `docs/*`  | Все файлы в корне каталога `docs` в корне репозитория. | `docs/README.md`<br/><br/>`docs/file.txt` |
| `docs/**` | Любые файлы в каталоге `/docs` в корне репозитория. | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |
| `docs/**/*.md` | Файл с суффиксом `.md` в любом месте каталога `docs`. | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`
| `'**/docs/**'`   | Любые файлы в каталоге `docs` в любом месте репозитория. | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`
| `'**/README.md'` | Файл README.md в любом месте репозитория. | `README.md`<br/><br/>`js/README.md`
| `'**/*src/**'` | Любой файл в папке с суффиксом `src` в любом месте репозитория. | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`
| `'**/*-post.md'` | Файл с суффиксом `-post.md` в любом месте репозитория. | `my-post.md`<br/><br/>`path/their-post.md` |
| `'**/migrate-*.sql'` | Файл с префиксом `migrate-` и суффиксом `.sql` в любом месте репозитория. | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |
| `*.md`<br/><br/>`!README.md` | Использование восклицательного знака (`!`) перед шаблоном отменяет его. Если файл соответствует шаблону, а также соответствует отрицательному шаблону, определенному позже в файле, файл не будет включен. | `hello.md`<br/><br/>_Не соответствует_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Шаблоны проверяются последовательно. Шаблон, который отрицает предыдущий шаблон, будет повторно включать пути к файлам. | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`|
