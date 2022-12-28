---
title: Синтаксис метаданных для GitHub Actions
shortTitle: Metadata syntax
intro: 'Вы можете создавать действия для выполнения задач в репозитории. Для действий требуется файл метаданных, использующий синтаксис YAML.'
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 9bde653dd7f8b4d04831afa38d29db7300255f57
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107416'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о синтаксисе YAML для {% data variables.product.prodname_actions %}

Для всех действий требуется файл метаданных. Файл метаданных должен иметь имя `action.yml` либо `action.yaml`. Данные в файле метаданных определяют вводы, выводы и конфигурацию запуска для вашего действия.

Файлы метаданных действий используют синтаксис YAML. Если вы еще не работали с YAML, прочитайте статью [Изучение YAML за пять минут](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes).

## `name`

**Обязательно** Имя вашего действия. {% data variables.product.prodname_dotcom %} отображает `name` на вкладке **Действия** для визуальной идентификации действия в каждом задании.

## `author`

**Необязательно** Имя автора действия.

## `description`

**Обязательно** Краткое описание действия.

## `inputs`

**Необязательные** Параметры ввода позволяют указать данные, которые, как ожидается, действие будет использовать во время выполнения. {% data variables.product.prodname_dotcom %} хранит параметры ввода в виде переменных среды. Входные идентификаторы с прописными буквами преобразуются в строчные во время выполнения. Рекомендуется использовать входные идентификаторы в нижнем регистре.

### Пример. Указание вводов

В этом примере настраиваются два ввода: numOctocats и octocatEyeColor. Ввод numOctocats необязателен и по умолчанию имеет значение 1. Ввод octocatEyeColor является обязательным и не имеет значения по умолчанию. Файлы рабочего процесса, использующие это действие, должны использовать ключевое слово `with` для установки входного значения для octocatEyeColor. Дополнительные сведения о синтаксисе `with` см. в разделе [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith).

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

Когда вы указываете ввод в файле рабочего процесса или используете входное значение по умолчанию, {% data variables.product.prodname_dotcom %} создает переменную среды для ввода с именем `INPUT_<VARIABLE_NAME>`. Созданная переменная среды преобразует входные имена в прописные буквы и заменяет пробелы символами `_`.

Если действие написано с использованием [composite](/actions/creating-actions/creating-a-composite-action), оно не получит автоматически `INPUT_<VARIABLE_NAME>`. Если преобразование не происходит, вы можете изменить эти вводы вручную.

Чтобы получить доступ к переменной среды в действии контейнера Docker, необходимо передать ввод с помощью ключевого слова `args` в файл метаданных действия. Дополнительные сведения о файле метаданных действий для действий контейнера Docker см. в разделе [Создание действия контейнера Docker](/articles/creating-a-docker-container-action#creating-an-action-metadata-file).

Например, если рабочий процесс определяет вводы `numOctocats` и `octocatEyeColor`, код действия может считывать значения вводов, используя переменные среды `INPUT_NUMOCTOCATS` и `INPUT_OCTOCATEYECOLOR`.

### `inputs.<input_id>`

**Обязательно** Идентификатор `string` для связи с вводом. Значение `<input_id>` представляет собой карту метаданных вводов. `<input_id>` должен быть уникальным идентификатором в пределах объекта `inputs`. `<input_id>` должен начинаться с буквы или `_` и может включать только буквенно-цифровые символы `-` или `_`.

### `inputs.<input_id>.description`

**Обязательно** Описание `string` параметра ввода.

### `inputs.<input_id>.required`

**Необязательно** Объект `boolean`, указывающий, требуется ли для действия параметр ввода. Установите значение `true`, если параметр является обязательным.

### `inputs.<input_id>.default`

**Необязательно** Объект `string`, представляющий значение по умолчанию. Значение по умолчанию используется, если параметр ввода не указан в файле рабочего процесса.

### `inputs.<input_id>.deprecationMessage`

**Необязательно**. Если используется параметр ввода, `string` регистрируется как предупреждающее сообщение. Вы можете использовать это предупреждение, чтобы уведомить пользователей о том, что ввод устарел, и указать любые альтернативы.

## `outputs` для контейнера Docker и действий JavaScript

**Необязательно** Параметры вывода позволяют объявлять данные, устанавливаемые действием. Действия, которые выполняются позже в рабочем процессе, могут использовать набор выходных данных в ранее запущенных действиях.  Например, если у вас есть действие, выполняющее сложение двух вводов (x + y = z), это действие может вывести сумму (z) для использования другими действиями в качестве ввода.

{% data reusables.actions.output-limitations %}

Если вы не объявили вывод в файле метаданных действия, вы все равно можете установить выводы и использовать их в рабочем процессе. Дополнительные сведения о выводах параметров в действии см. в разделе [Команды рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter).

### Пример. Объявление выводов для контейнера Docker и действий JavaScript

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**Обязательно** Идентификатор `string` для связи с выводом. Значение `<output_id>` — это карта метаданных выводов. `<output_id>` должен быть уникальным идентификатором в пределах объекта `outputs`. `<output_id>` должен начинаться с буквы или `_` и может включать только буквенно-цифровые символы `-` или `_`.

### `outputs.<output_id>.description`

**Обязательно** Описание `string` параметра вывода.

## `outputs` для составных действий

**Необязательно** `outputs` использует те же параметры, что `outputs.<output_id>` и `outputs.<output_id>.description` (см. [`outputs` для контейнера Docker и действий JavaScript](#outputs-for-docker-container-and-javascript-actions)), но также включает маркер `value`.

{% data reusables.actions.output-limitations %}

### Пример. Объявление выводов для составных действий

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
{%- endif %}{% raw %}
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**Обязательно** Значение, с которым будет сопоставлен параметр вывода. Вы можете указать `string` или выражение с контекстом. Например, вы можете использовать контекст `steps`, чтобы установить `value` вывода равным выходному значению шага.

Дополнительные сведения об использовании синтаксиса контекста см. в на странице [Контексты](/actions/learn-github-actions/contexts).

## `runs`

**Обязательно** Указывает на тип (действие JavaScript, составное действие или действие контейнера Docker), а также способ выполнения действия.

## `runs` для действий JavaScript

**Обязательно** Настраивает путь к коду действия и среду выполнения, используемую для выполнения кода.

### Пример. Использование Node.js {% ifversion fpt или ghes > 3.3 или ghae > 3.3 или ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Обязательно** Среда выполнения, используемая для выполнения кода, указанного в [`main`](#runsmain).

- Используется `node12` для Node.js версии 12.{ % ifversion fpt или ghes > 3,3 или ghae > 3,3 или ghec %}
- Используйте `node16` для Node.js v16.{% endif %}

### `runs.main`

**Обязательно** Файл, содержащий код действия. Среда выполнения, указанная в [`using`](#runsusing), выполняет этот файл.

### `runs.pre`

**Необязательно**. Позволяет выполнять сценарий при запуске задания до начала действия `main:`. Например, вы можете использовать `pre:` для запуска необходимого сценария установки. Среда выполнения, указанная с синтаксисом [`using`](#runsusing), выполнит этот файл. Действие `pre:` всегда выполняется по умолчанию, но вы можете переопределить его с помощью [`runs.pre-if`](#runspre-if).

В этом примере действие `pre:` запускает сценарий `setup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**Необязательно** Позволяет определить условия для выполнения действия `pre:`. Действие `pre:` будет выполняться только при выполнении условий в `pre-if`. Если значение не задано, то `pre-if` по умолчанию равно `always()`. В `pre-if` функции проверки состояния оценивают состояние задания, а не собственное состояние действия.

Обратите внимание, что контекст `step` недоступен, так как еще не выполнено ни одного шага.

В этом примере `cleanup.js` выполняется только в средствах выполнения на базе Linux:

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**Необязательно** Позволяет запускать сценарий в конце задания после завершения действия `main:`. Например, вы можете использовать `post:` для завершения определенных процессов или удаления ненужных файлов. Среда выполнения, указанная с синтаксисом [`using`](#runsusing), выполнит этот файл.

В этом примере действие `post:` запускает сценарий `cleanup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

Действие `post:` всегда выполняется по умолчанию, но вы можете переопределить его с помощью `post-if`.

### `runs.post-if`

**Необязательно** Позволяет определить условия для выполнения действия `post:`. Действие `post:` будет выполняться только при выполнении условий в `post-if`. Если значение не задано, то `post-if` по умолчанию равно `always()`. В `post-if` функции проверки состояния оценивают состояние задания, а не собственное состояние действия.

Например, этот `cleanup.js` будет выполняться только в средствах выполнения на базе Linux:

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` для составных действий

**Обязательно** Настраивает путь к составному действию.

### `runs.using`

**Обязательно** Укажите для этого значения `'composite'`.

### `runs.steps`

**Обязательно** Действия, которые планируется выполнить в этом действии. Это могут быть шаги `run` или шаги `uses`.

#### `runs.steps[*].run`

**Дополнительные** Команда, которую необходимо выполнить. Это может быть встроенный скрипт или скрипт в репозитории действий:

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

В качестве альтернативы вы можете использовать `$GITHUB_ACTION_PATH`:

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

Дополнительные сведения см. в разделе о [`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context).

#### `runs.steps[*].shell`

**Дополнительные** Оболочка, в которой требуется выполнить команду. Вы можете использовать любую из перечисленных на [этой странице](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell) оболочек. Обязательно, если задано `run`.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

**Необязательно** Вы можете использовать условное выражение `if`, чтобы запретить запуск шага, если условие не выполнено. Для создания условного выражения можно использовать любой поддерживаемый контекст и любое выражение.

{% data reusables.actions.expression-syntax-if %} Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions).

**Пример. Использование контекстов**

 Этот шаг выполняется, только если типом события является `pull_request`, а действием — `unassigned`.

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Пример. Использование функций проверки состояния**

`my backup step` запускается только в случае сбоя предыдущего шага составного действия. Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions#status-check-functions).

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

**Необязательно** Имя составного шага.

#### `runs.steps[*].id`

**Необязательно** Уникальный идентификатор шага. Вы можете использовать `id` для ссылки на шаг в контекстах. Дополнительные сведения см. в разделе «[Контексты](/actions/learn-github-actions/contexts)».

#### `runs.steps[*].env`

**Необязательно** Задает `map` переменных среды только для этого шага. Если вы хотите изменить переменную среды, хранящуюся в рабочем процессе, используйте `echo "{name}={value}" >> $GITHUB_ENV` в составном шаге.

#### `runs.steps[*].working-directory`

**Необязательно** Указывает рабочий каталог, в котором выполняется команда.

#### `runs.steps[*].uses`

**Необязательно**. Выбирает действие, которое будет выполняться как часть шага вашего задания. Действие — это многократно используемая единица кода. Вы можете использовать действие, определенное в том же репозитории, что и рабочий процесс, в общедоступном репозитории или в [опубликованном образе контейнера Docker](https://hub.docker.com/).

Мы настоятельно рекомендуем вам включить версию используемого вами действия, указав номер ссылки на Git, SHA или тега Docker. Если вы не укажете версию, это может нарушить ваши рабочие процессы или вызвать непредвиденное поведение, когда владелец действия будет публиковать обновление.
- Использование SHA фиксации выпущенной версии действия является самым безопасным для стабильности и защиты.
- Использование конкретной основной версии позволяет получать критические исправления и обновления системы безопасности, сохраняя при этом совместимость. При этом также гарантируется работа вашего рабочего процесса.
- Использование ветви действия по умолчанию может быть удобным, но если кто-то выпустит новую основную версию с критическим изменением, ваш рабочий процесс может прерваться.

Для некоторых действий требуются вводы, заданные с помощью ключевого слова [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith). Просмотрите файл README действия, чтобы определить необходимые ввода.

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

**Необязательно** `map` параметров ввода, определяемых действием. Каждый параметр ввода представляет собой пару "ключ-значение". Дополнительные сведения см. в разделе [Пример. Указание входных данных](#example-specifying-inputs).

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat
```

{% ifversion ghes > 3.5 or ghae > 3,5 %}

#### `runs.steps[*].continue-on-error`

**Необязательно**  Предотвращает сбой действия при сбое шага. Задайте значение `true`, чтобы действие считалось выполненным даже при сбое этого шага.

{% endif %}

## `runs` для действий контейнера Docker

**Обязательно** Настраивает образ, используемый для действия контейнера Docker.

### Пример. Использование Dockerfile в репозитории

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### Пример. Использование общедоступного контейнера реестра Docker

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**Обязательно** Укажите для этого значения `'docker'`.

### `runs.pre-entrypoint`

**Необязательно**. Позволяет запустить сценарий до начала действия `entrypoint`. Например, вы можете использовать `pre-entrypoint:` для запуска необходимого сценария установки. {% data variables.product.prodname_actions %} использует `docker run` для запуска этого действия и запускает сценарий в новом контейнере, использующем тот же базовый образ. Это означает, что состояние среды выполнения отличается от основного контейнера `entrypoint` и любые требуемые состояния должны быть доступны либо в рабочей области, либо в `HOME`, либо в виде переменной `STATE_`. Действие `pre-entrypoint:` всегда выполняется по умолчанию, но вы можете переопределить его с помощью [`runs.pre-if`](#runspre-if).

Среда выполнения, указанная с синтаксисом [`using`](#runsusing), выполнит этот файл.

В этом примере действие `pre-entrypoint:` запускает сценарий `setup.sh`:

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

**Обязательно**. Образ Docker для использования в качестве контейнера для выполнения действия. Значение может быть именем базового образа Docker, локальным `Dockerfile` в вашем репозитории или общедоступным образом в Docker Hub или другом реестре. Чтобы добавить ссылку на `Dockerfile`, локальный для вашего репозитория, присвойте файлу имя `Dockerfile` и используйте путь, относительный для вашего файла метаданных действия. Приложение `docker` выполнит этот файл.

### `runs.env`

**Необязательно**. Указывает сопоставление "ключ-значение" переменных среды для установки в среде контейнера.

### `runs.entrypoint`

**Необязательно** Переопределяет параметр `ENTRYPOINT` Docker в `Dockerfile` или задает его, если он еще не был указан. Используйте `entrypoint`, если `Dockerfile` не указывает `ENTRYPOINT` или если необходимо переопределить инструкцию `ENTRYPOINT`. Если вы опустите `entrypoint`, команды, указанные в инструкции `ENTRYPOINT` Docker, будут выполняться. Инструкция Docker `ENTRYPOINT` имеет форму _оболочки_ и форму _exec_. В документации по `ENTRYPOINT` Docker рекомендуется использовать форму _exec_ инструкции `ENTRYPOINT`.

Дополнительные сведения о выполнении `entrypoint` см. в разделе [Поддержка Dockerfile для {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint).

### `runs.post-entrypoint`

**Необязательно** Позволяет запустить сценарий очистки после завершения действия `runs.entrypoint`. {% data variables.product.prodname_actions %} использует `docker run` для запуска этого действия. Поскольку {% data variables.product.prodname_actions %} запускает сценарий внутри нового контейнера с использованием того же базового образа, состояние выполнения отличается от основного контейнера `entrypoint`. Вы можете получить доступ к любому нужному состоянию либо в рабочей области, либо в `HOME`, либо в виде переменной `STATE_`. Действие `post-entrypoint:` всегда выполняется по умолчанию, но вы можете переопределить его с помощью [`runs.post-if`](#runspost-if).

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

**Необязательно** Массив строк, определяющих вводы для контейнера Docker. Вводы могут включать жестко заданные строки. {% data variables.product.prodname_dotcom %} передает `args` в `ENTRYPOINT` контейнера при запуске контейнера.

`args` используются вместо инструкции `CMD` в `Dockerfile`. Если вы используете `CMD` в своем `Dockerfile`, используйте рекомендации, упорядоченные по предпочтениям:

{% data reusables.actions.dockerfile-guidelines %}

Если вам нужно передать переменные среды в действие, убедитесь, что ваше действие запускает командную оболочку для выполнения подстановки переменных. Например, если для атрибута `entrypoint` задано значение `"sh -c"`, `args` будет выполняться в командной оболочке. Или же, если ваш `Dockerfile` использует `ENTRYPOINT` для запуска той же команды (`"sh -c"`), `args` будет выполняться в командной оболочке.

Дополнительные сведения об использовании инструкции `CMD` с {% data variables.product.prodname_actions %} см. в разделе [Поддержка Dockerfile для {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd).

#### Пример. Определение аргументов для контейнера Docker

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

**Необязательно.** Вы можете использовать цвет и значок [Перо](https://feathericons.com/), чтобы создать индикатор событий для персонализации и выделения действия. Значки отображаются рядом с именем вашего действия в [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)

### Пример. Настройка фирменной символики для действия

```yaml
branding:
  icon: 'award'
  color: 'green'
```

### `branding.color`

Цвет фона индикатора. Это может быть: `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple` или `gray-dark`.

### `branding.icon`

Имя используемого значка [Feather](https://feathericons.com/) версии 4.28.0. Значки брендов не заданы так же, как и указанные ниже:

<table>
<tr>
<td>кофе;</td>
<td>столбцы</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>hexagon</td>
<td>ключ</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>инструмент</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

Вот полный список всех поддерживаемых в настоящее время значков:

<!--
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo.
-->

<table>
<tr>
<td>activity</td>
<td>airplay</td>
<td>alert-circle</td>
<td>alert-octagon</td>
</tr>
<tr>
<td>alert-triangle</td>
<td>align-center</td>
<td>align-justify</td>
<td>align-left</td>
</tr>
<tr>
<td>align-right</td>
<td>привязка</td>
<td>aperture</td>
<td>архив</td>
</tr>
<tr>
<td>arrow-down-circle</td>
<td>arrow-down-left</td>
<td>arrow-down-right</td>
<td>arrow-down</td>
</tr>
<tr>
<td>arrow-left-circle</td>
<td>arrow-left</td>
<td>arrow-right-circle</td>
<td>arrow-right</td>
</tr>
<tr>
<td>arrow-up-circle</td>
<td>arrow-up-left</td>
<td>arrow-up-right</td>
<td>arrow-up</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>аккумулятор</td>
<td>bell-off</td>
<td>колокольчик</td>
</tr>
<tr>
<td>порт Bluetooth</td>
<td>полужирный</td>
<td>book-open</td>
<td>книга</td>
</tr>
<tr>
<td>закладка</td>
<td>box</td>
<td>briefcase</td>
<td>календарь</td>
</tr>
<tr>
<td>camera-off</td>
<td>Камера</td>
<td>Приведение</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>проверка</td>
<td>chevron-down</td>
<td>chevron-left</td>
</tr>
<tr>
<td>chevron-right</td>
<td>chevron-up</td>
<td>chevrons-down</td>
<td>chevrons-left</td>
</tr>
<tr>
<td>chevrons-right</td>
<td>chevrons-up</td>
<td>circle</td>
<td>буфер обмена</td>
</tr>
<tr>
<td>clock</td>
<td>cloud-drizzle</td>
<td>cloud-lightning</td>
<td>cloud-off</td>
</tr>
<tr>
<td>cloud-rain</td>
<td>cloud-snow</td>
<td>cloud</td>
<td>code</td>
</tr>
<tr>
<td>.</td>
<td>compass</td>
<td>copy</td>
<td>corner-down-left</td>
</tr>
<tr>
<td>corner-down-right</td>
<td>corner-left-down</td>
<td>corner-left-up</td>
<td>corner-right-down</td>
</tr>
<tr>
<td>corner-right-up</td>
<td>corner-up-left</td>
<td>corner-up-right</td>
<td>cpu</td>
</tr>
<tr>
<td>credit-card</td>
<td>обрезка</td>
<td>crosshair</td>
<td>База данных</td>
</tr>
<tr>
<td>удалить</td>
<td>disc</td>
<td>dollar-sign</td>
<td>download-cloud</td>
</tr>
<tr>
<td>скачиваемого файла</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>изменение;</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>быстрое перемещение вперед</td>
<td>feather</td>
<td>file-minus</td>
<td>file-plus</td>
</tr>
<tr>
<td>file-text</td>
<td>файл</td>
<td>film</td>
<td>фильтр</td>
</tr>
<tr>
<td>flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>folder</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>  git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
<td>hard-drive</td>
</tr>
<tr>
<td>hash</td>
<td>headphones</td>
<td>heart</td>
<td>help-circle</td>
</tr>
<tr>
<td>home</td>
<td>Изображение</td>
<td>inbox</td>
<td>сведения</td>
</tr>
<tr>
<td>курсив</td>
<td>Слои</td>
<td>макет</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>list</td>
<td>loader</td>
</tr>
<tr>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>карта</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>"Меню"</td>
<td>message-circle</td>
<td>message-square</td>
<td>mic-off</td>
</tr>
<tr>
<td>mic</td>
<td>minimize-2</td>
<td>свернуть</td>
<td>minus-circle</td>
</tr>
<tr>
<td>minus-square</td>
<td>minus</td>
<td>monitor</td>
<td>moon</td>
</tr>
<tr>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>перенос</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>навигация</td>
<td>octagon</td>
<td>Пакет</td>
</tr>
<tr>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
<td>percent</td>
</tr>
<tr>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
<td>phone-missed</td>
</tr>
<tr>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
<td>pie-chart</td>
</tr>
<tr>
<td>play-circle</td>
<td>играть</td>
<td>plus-circle</td>
<td>plus-square</td>
</tr>
<tr>
<td>plus</td>
<td>pocket</td>
<td>power</td>
<td>принтер</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>repeat</td>
</tr>
<tr>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>rss</td>
</tr>
<tr>
<td>Сохранить</td>
<td>scissors</td>
<td>search</td>
<td>Отправить</td>
</tr>
<tr>
<td>server</td>
<td>Параметры</td>
<td>share-2</td>
<td>поделиться</td>
</tr>
<tr>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
<td>shopping-cart</td>
</tr>
<tr>
<td>shuffle</td>
<td>sidebar</td>
<td>skip-back</td>
<td>skip-forward</td>
</tr>
<tr>
<td>slash</td>
<td>ползунки</td>
<td>смартфон</td>
<td>динамик</td>
</tr>
<tr>
<td>square</td>
<td>звездочка</td>
<td>stop-circle</td>
<td>sun</td>
</tr>
<tr>
<td>sunrise</td>
<td>закат</td>
<td>планшет</td>
<td>тег</td>
</tr>
<tr>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
<td>thumbs-down</td>
</tr>
<tr>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
<td>trash-2</td>
</tr>
<tr>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
<td>треугольник</td>
</tr>
<tr>
<td>фургон</td>
<td>тв</td>
<td>тип</td>
<td>umbrella</td>
</tr>
<tr>
<td>подчеркнутый</td>
<td>разблокировать</td>
<td>upload-cloud</td>
<td>upload</td>
</tr>
<tr>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
<td>user-x</td>
</tr>
<tr>
<td>пользователь</td>
<td>users</td>
<td>video-off</td>
<td>видео</td>
</tr>
<tr>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>том</td>
<td>слежение</td>
<td>wifi-off</td>
<td>wifi</td>
</tr>
<tr>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
<td>x</td>
</tr>
<tr>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
<td>zoom-out</td>
</tr>
</table>
