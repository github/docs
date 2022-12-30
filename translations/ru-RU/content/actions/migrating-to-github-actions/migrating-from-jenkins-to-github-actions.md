---
title: Миграция с Jenkins на GitHub Actions
intro: '{% data variables.product.prodname_actions %} и Jenkins имеют несколько сходств в конфигурации, что делает миграцию на {% data variables.product.prodname_actions %} относительно простой.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-jenkins-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Jenkins
  - Migration
  - CI
  - CD
shortTitle: Migrate from Jenkins
ms.openlocfilehash: a0b54ede4d19d97bf750122b72e245b7c6033ad9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193488'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

Jenkins и {% data variables.product.prodname_actions %} позволяют создавать рабочие процессы, которые автоматически выполняют сборку, тестирование, публикацию, выпуск и развертывание кода. Jenkins и {% data variables.product.prodname_actions %} используют некоторые сходства в конфигурации рабочего процесса.

- Jenkins создает рабочие процессы с помощью _декларативных конвейеров_, которые аналогичны файлам рабочих процессов {% data variables.product.prodname_actions %}.
- Jenkins использует _этапы_ для выполнения коллекции шагов, а {% data variables.product.prodname_actions %} использует задания для группирования одного или нескольких шагов или отдельных команд.
- Jenkins и {% data variables.product.prodname_actions %} поддерживают сборки на основе контейнеров. Дополнительные сведения см. в разделе [Создание действия контейнера Docker](/articles/creating-a-docker-container-action).
- Шаги или задачи можно повторно использовать и предоставлять сообществу.

Дополнительные сведения см. в разделе [Основные понятия {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions).

## Основные различия

- Jenkins имеет два типа синтаксиса для создания конвейеров: декларативный конвейер и конвейер со скриптами. {% data variables.product.prodname_actions %} использует YAML для создания рабочих процессов и файлов конфигурации. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/reference/workflow-syntax-for-github-actions)".
- Развертывания Jenkins обычно являются локальными, при этом пользователи обслуживают серверы в своих центрах обработки данных. {% data variables.product.prodname_actions %} предлагает гибридный облачный подход, размещая собственные средства выполнения, которые можно использовать для выполнения заданий, а также поддерживая локальные средства выполнения. Дополнительные сведения см. в разделе [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners).

## Сравнение возможностей

### Распространение сборок

Jenkins позволяет отправлять сборки одному агенту сборки или распределять их между несколькими агентами. Вы также можете классифицировать эти агенты в соответствии с различными атрибутами, такими как типы операционных систем.

Аналогично, {% data variables.product.prodname_actions %} может отправлять задания в размещенные в {% data variables.product.prodname_dotcom %} или локальные средства выполнения, и вы можете с помощью меток классифицировать модули выполнения в соответствии с различными атрибутами. Дополнительные сведения см. в разделах [Основные сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions#runners) и [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners).

### Использование разделов для упорядочения конвейеров

Jenkins разделяет свои декларативные конвейеры на несколько разделов. Аналогично, {% data variables.product.prodname_actions %} упорядочивает рабочие процессы по отдельным разделам. В приведенной ниже таблице сравниваются разделы Jenkins с рабочим процессом {% data variables.product.prodname_actions %}.

| Директивы Jenkins | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     |  |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs) |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## Директивы using

Jenkins использует директивы для управления _декларативными конвейерами_. Эти директивы определяют характеристики рабочего процесса и порядок его выполнения. В приведенной ниже таблице показано, как эти директивы соответствуют концепциям в {% data variables.product.prodname_actions %}.

| Директивы Jenkins | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                  | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv) |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                       | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes) |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                    | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions) |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                        | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) <br> [<code>on.<pull_request\>.<branches\></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers) | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds) |
| [Синтаксис cron в Jenkins](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)            | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule) |
| [`stage`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                              | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname) |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                              | {% ifversion ghae %}Инструменты командной строки, доступные в `PATH` в ваших системах локальных средств выполнения. {% data reusables.actions.self-hosted-runners-software %}{% else %}[Спецификации для средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) |{% endif %}
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                              | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs) |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) |

## Использование последовательных этапов

### Обработка параллельных заданий

Jenkins может выполнять `stages` и `steps` параллельно, в то время как {% data variables.product.prodname_actions %} в настоящее время выполняет задания только параллельно.

| Параллельное выполнение в Jenkins | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

### Матрица

И {% data variables.product.prodname_actions %}, и Jenkins позволяют использовать матрицу сборки для определения различных системных сочетаний.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context) |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |  |

### Выполнение задач с помощью шагов

Jenkins группирует `steps` в `stages`. Каждый из этих шагов может быть, помимо прочего, скриптом, функцией или командой. Аналогично, {% data variables.product.prodname_actions %} использует `jobs` для выполнения определенных групп `steps`.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## Примеры распространенных задач

### Планирование запуска конвейера с помощью `cron`

<table>
<tr>
<th>
Конвейер Jenkins
</th>
<th>
Рабочий процесс {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  triggers {
    cron('H/15 * * * 1-5')
  }
}
```

</td>
<td>

```yaml
on:
  schedule:
    - cron: '*/15 * * * 1-5'
```

</td>
</tr>
</table>

### Настройка переменных среды в конвейере

<table>
<tr>
<th>
Конвейер Jenkins
</th>
<th>
Рабочий процесс {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  environment {
    MAVEN_PATH = '/usr/local/maven'
  }
}
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### Выполнение сборки из вышестоящих проектов

<table>
<tr>
<th>
Конвейер Jenkins
</th>
<th>
Рабочий процесс {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  triggers {
    upstream(
      upstreamProjects: 'job1,job2',
      threshold: hudson.model.Result.SUCCESS
    )
  }
}
```

</td>
<td>

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

</td>
</tr>
</table>

### Выполнение сборки с несколькими операционными системами

<table>
<tr>
<th>
Конвейер Jenkins
</th>
<th>
Рабочий процесс {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent none
  stages {
    stage('Run Tests') {
      matrix {
        axes {
          axis {
            name: 'PLATFORM'
            values: 'macos', 'linux'
          }
        }
        agent { label "${PLATFORM}" }
        stages {
          stage('test') {
            tools { nodejs "node-12" }
            steps {
              dir("scripts/myapp") {
                sh(script: "npm install -g bats")
                sh(script: "bats tests")
              }
            }
          }
        }
      }
    }
  }
}
```

</td>
<td>

```yaml
name: demo-workflow
on:
  push:
jobs:
  test:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      fail-fast: false
      matrix:
        os: [macos-latest, ubuntu-latest]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 12
      - run: npm install -g bats
      - run: bats tests
        working-directory: scripts/myapp
```

</td>
</tr>
</table>
