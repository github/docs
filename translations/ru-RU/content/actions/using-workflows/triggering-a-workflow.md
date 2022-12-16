---
title: Активация рабочего процесса
shortTitle: Trigger a workflow
intro: 'Автоматическая активация рабочих процессов {% data variables.product.prodname_actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cd91670d3d06d4d8f954afa114f6c4f189825d86
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191906'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о триггерах рабочих процессов

{% data reusables.actions.about-triggers %}

Триггеры рабочих процессов определяются с помощью ключа `on`. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on).

Чтобы запустить рабочий процесс, выполните следующие действия:

1. Событие происходит в репозитории. Событие имеет связанную фиксацию SHA и ссылку Git.
1. {% data variables.product.product_name %} выполняет поиск в каталоге `.github/workflows` в репозитории файлов рабочих процессов, присутствующих в связанной фиксации SHA или ссылке Git события.
1. Запуск рабочего процесса выполняется для всех рабочих процессов со значениями `on:`, соответствующими событию активации. Для некоторых событий также требуется, чтобы файл рабочего процесса присутствовал в ветви репозитория по умолчанию.

  Каждый запуск рабочего процесса будет использовать версию рабочего процесса, которая присутствует в связанной фиксации SHA или ссылке Git события. При запуске рабочего процесса {% data variables.product.product_name %} задает переменные среды `GITHUB_SHA` (фиксация SHA) и `GITHUB_REF` (ссылка Git) в среде средства выполнения. Дополнительные сведения см. в разделе [Использование переменных среды](/actions/automating-your-workflow-with-github-actions/using-environment-variables).

### Активация рабочего процесса из рабочего процесса

{% data reusables.actions.actions-do-not-trigger-workflows %} Дополнительные сведения см. в разделе [Проверка подлинности с помощью GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token).

Если вы хотите активировать рабочий процесс из запуска рабочего процесса, можно использовать {% data variables.product.pat_generic %} вместо активации `GITHUB_TOKEN` событий, для которых требуется маркер. Вам потребуется создать {% data variables.product.pat_generic %} и сохранить его в виде секрета. Чтобы свести к минимуму затраты на использование {% data variables.product.prodname_actions %}, убедитесь, что не создаются рекурсивные или непреднамеренные запуски рабочего процесса. Дополнительные сведения о создании {% data variables.product.pat_generic %} см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Дополнительные сведения о хранении {% data variables.product.pat_generic %} в качестве секрета см. в разделе [Создание и хранение зашифрованных секретов](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).

Например, следующий рабочий процесс использует {% data variables.product.pat_generic %} (хранящийся в виде секрета `MY_TOKEN`) для добавления метки к проблеме с помощью {% data variables.product.prodname_cli %}. Все рабочие процессы, выполняемые при добавлении метки, будут выполняться после выполнения этого шага.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

И наоборот, следующий рабочий процесс использует `GITHUB_TOKEN` для добавления метки в проблему. При добавлении метки рабочие процессы не будут запускаться.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## Использование событий для активации рабочих процессов

Используйте ключ `on`, чтобы указать, какие события активируют рабочий процесс. Дополнительные сведения о событиях см. в разделе [События, активирующие рабочие процессы](/actions/using-workflows/events-that-trigger-workflows).

### Использование одного события

{% data reusables.actions.on-single-example %}

### Использование нескольких событий

{% data reusables.actions.on-multiple-example %}

### Использование типов действий и фильтров с несколькими событиями

Для дальнейшего управления выполнением рабочего процесса можно использовать типы действий и фильтры. Дополнительные сведения см. в разделах [Использование типов действий событий](#using-event-activity-types) и [Использование фильтров](#using-filters). {% data reusables.actions.actions-multiple-types %}

## Использование типов действий событий

{% data reusables.actions.actions-activity-types %}

## Использование фильтров

{% data reusables.actions.actions-filters %}

### Использование фильтров для назначения определенных ветвей для событий запроса на вытягивание

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### Использование фильтров для назначения определенных ветвей или тегов для событий отправки

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### Использование фильтров для назначения определенных ветвей для запросов на вытягивание или событий отправки

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### Использование фильтров для назначения определенных ветвей для событий выполнения рабочего процесса

{% data reusables.actions.workflows.section-specifying-branches %}

## Определение входных данных для рабочих процессов, активированных вручную

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Определение входных, выходных данных и секретов для повторно используемых рабочих процессов

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Вы можете определить входные данные и секреты, которые рабочий процесс, доступный для повторного использования, должен получать от вызывающего рабочего процесса. Вы также можете указать выходные данные, которые повторно используемый рабочий процесс сделает доступным для вызывающего рабочего процесса. Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/using-workflows/reusing-workflows).

{% endif %}

## Использование сведений о событии

Сведения о событии, которое активировало рабочий процесс, доступны в контексте `github.event`. Свойства в контексте `github.event` зависят от типа события, которое активировало рабочий процесс. Например, рабочий процесс, запускаемый при присвоении метки проблеме, будет содержать сведения о проблеме и метке.

### Просмотр всех свойств события

Обратитесь к документации по событиям веб-перехватчиков, чтобы ознакомиться с общими свойствами и примерами полезных данных. Дополнительные сведения см. в разделе [События веб-перехватчика и полезные данные](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads).

Вы также можете распечатать весь контекст `github.event`, чтобы узнать, какие свойства доступны для события, которое активировало рабочий процесс:

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### Доступ к свойствам события и их использование

Вы можете использовать контекст `github.event` в своем рабочем процессе. Например, следующий рабочий процесс выполняется при открытии запроса на вытягивание, который изменяет `package*.json`, `.github/CODEOWNERS` или `.github/workflows/**`. Если автор запроса на вытягивание (`github.event.pull_request.user.login`) не является `octobot` или `dependabot[bot]`, рабочий процесс использует {% data variables.product.prodname_cli %} для добавления меток и комментариев к запросу на вытягивание (`github.event.pull_request.number`).

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

Дополнительные сведения о контекстах см. в разделе [Контексты](/actions/learn-github-actions/contexts). Дополнительные сведения о полезных данных события см. в разделе [События веб-перехватчика и полезные данные](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads).

## Дальнейшее управление запуском рабочего процесса

Если требуется более детализированный контроль, чем события, типы действий событий или фильтры событий, можно использовать условные выражения и среды для управления выполнением отдельных заданий или шагов в рабочем процессе.

### Использование условных выражений

Условные выражения можно использовать для дальнейшего управления выполнением заданий или шагов в рабочем процессе.

#### Пример использования значения в полезных данных события

Например, если требуется, чтобы рабочий процесс выполнялся при добавлении определенной метки в проблему, можно активировать тип действия события `issues labeled` и использовать условное выражение для проверки того, какая метка активировала рабочий процесс. Следующий рабочий процесс будет выполняться при добавлении метки в проблему в репозитории рабочего процесса, но задание `run_if_label_matches` будет выполняться только в том случае, если метка называется `bug`.

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

#### Пример использования типа события

Например, если вы хотите выполнять различные задания или шаги в зависимости от того, какое событие активировало рабочий процесс, можно использовать условное выражение, чтобы проверить, существует ли определенный тип события в контексте события. Следующий рабочий процесс будет выполняться при закрытии проблемы или запроса на вытягивание. Если рабочий процесс были выполнен по причине закрытия проблемы, контекст `github.event` будет содержать значение для `issue`, но не для `pull_request`. Поэтому шаг `if_issue` будет выполняться, а шаг `if_pr` не будет выполняться. Если рабочий процесс были выполнен по причине закрытия запроса на вытягивание,шаг `if_pr` будет выполняться, а шаг `if_issue` — нет.

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

Дополнительные сведения о том, какие сведения доступны в контексте события, см. в разделе [Использование сведений о событии](#using-event-information). Дополнительные сведения об использовании условных выражений см. в разделе [Выражения](/actions/learn-github-actions/expressions).

### Использование сред для активации заданий рабочих процессов вручную

Если вы хотите вручную активировать определенное задание в рабочем процессе, можно использовать среду, требующую утверждения от определенной команды или пользователя. Сначала настройте среду с необходимыми рецензентами. Дополнительные сведения см. в разделе [Использование сред для развертывания](/actions/deployment/targeting-different-environments/using-environments-for-deployment). Затем укажите имя среды в задании в рабочем процессе с помощью ключа `environment:`. Любое задание, ссылающееся на среду, не будет выполняться, пока хотя бы один рецензент не утвердит задание.

Например, следующий рабочий процесс будет выполняться всякий раз, когда выполняется отправка в главную ветвь. Задание `build` будет выполняться всегда. Задание `publish` будет выполняться только после успешного завершения задания `build` (ввиду `needs: [build]`) и после соблюдения требований всех правил (включая обязательных рецензентов) для среды, называемой `production` (ввиду `environment: production`).

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}

## Доступные события

Полный список доступных событий см. в разделе [События, активирующие рабочие процессы](/actions/using-workflows/events-that-trigger-workflows).
