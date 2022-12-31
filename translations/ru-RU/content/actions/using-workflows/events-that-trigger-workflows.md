---
title: 'События, инициирующие рабочие процессы'
intro: 'Вы можете настроить рабочие процессы таким образом, чтобы они запускались при выполнении определенного действия в {% data variables.product.product_name %}, в запланированное время или при возникновении события за пределами {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/reference/events-that-trigger-workflows
  - /actions/learn-github-actions/events-that-trigger-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Events that trigger workflows
ms.openlocfilehash: 0b98c948f4246257336f174498596f3d3115cb08
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093604'
---
## Сведения о событиях, которые активируют рабочие процессы

Триггеры рабочего процесса — это события, которые приводят к запуску рабочего процесса. Дополнительные сведения об использовании триггеров рабочего процесса см. в разделе [Активация рабочего процесса](/actions/using-workflows/triggering-a-workflow).

## Доступные события

Некоторые события предусматривают несколько типов действий. Для таких событий можно указать типы действий, которые будут активировать рабочий процесс. Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhook-events-and-payloads). Обратите внимание, что не каждое событие веб-перехватчика активирует рабочие процессы.

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при изменении правил защиты ветви в репозитории рабочих процессов. Дополнительные сведения о правилах защиты ветви см. в разделе [Сведения о защищенных ветвях](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches). Сведения об API-интерфейсах правил защиты ветви см. в разделе [Правило BranchProtectionRule](/graphql/reference/objects#branchprotectionrule) документации по API GraphQL или в разделе [Ветви](/rest/reference/branches) документации по REST API.

Например, можно запустить рабочий процесс, если к правилу защиты ветви был применен тип действия `created` или `deleted`:

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при действии, связанном с выполнением проверки. Выполнение проверки — это отдельный тест, входящий в состав набора проверок. Дополнительные сведения см. в разделе [Начало работы с API проверок](/rest/guides/getting-started-with-the-checks-api). Сведения об API запуска проверки см. в разделе [CheckRun](/graphql/reference/objects#checkrun) документации по API GraphQL или в разделе [Проверки](/rest/reference/checks#runs) документации по REST API.

Например, можно запустить рабочий процесс, если проверка имеет тип действия `rerequested` или `completed`.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed` | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite). Несмотря на то, что поддерживается только тип действия `started`, указание типа действия позволит сохранить специфичность рабочего процесса, что важно при добавлении других типов действия в будущем. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Примечание**. В целях предотвращения рекурсивных рабочих процессов это событие не должно активировать рабочие процессы в случаях, когда набор проверок был создан с помощью действий {% data variables.product.prodname_actions %}.

{% endnote %}

Это событие запускает рабочий процесс при выполнении действий, связанных с набором проверок. Набор проверок — это коллекция запусков проверок, созданных для определенной фиксации. Набор проверок позволяет получить общее заключение о состоянии выполнения проверок, входящих в состав набора. Дополнительные сведения см. в разделе [Начало работы с API проверок](/rest/guides/getting-started-with-the-checks-api). Сведения об API набора проверок см. в разделе [CheckSuite](/graphql/reference/objects#checksuite) документации по API GraphQL или в разделе [Проверки](/rest/reference/checks#suites) документации по REST API.

Например, можно запустить рабочий процесс, если набор проверок находится в состоянии `completed`.

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | Недоступно | Последняя фиксация в созданной ветви или теге | Созданная ветвь или тег |

{% note %}

**Примечание**. При одновременном создании более трех тегов событие не создается.

{% endnote %}

Это событие запускает рабочий процесс при создании ссылки на Git (ветвь или тег Git) из репозитория рабочего процесса. Сведения об API-интерфейсах для создания ссылки на Git см. в разделе [createRef](/graphql/reference/mutations#createref) документации по API GraphQL или в разделе [Создание ссылки](/rest/reference/git#create-a-reference) документации по REST API.

Например, можно запустить рабочий процесс при возникновении события `create`.

```yaml
on:
  create
```

### `delete`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | Недоступно | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% data reusables.actions.branch-requirement %}

{% note %}

**Примечание**. При одновременном удалении более трех тегов событие не создается.

{% endnote %}

Это событие запускает рабочий процесс при удалении ссылки на Git (ветвь или тег Git) из репозитория рабочего процесса. Сведения об API-интерфейсах для удаления ссылки на Git см. в разделе [deleteRef](/graphql/reference/mutations#deleteref) документации по API GraphQL или в разделе [Удаление ссылки](/rest/reference/git#delete-a-reference) документации по REST API.

Например, можно запустить рабочий процесс при возникновении события `delete`.

```yaml
on:
  delete
```

### `deployment`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | Недоступно | Фиксация для развертывания | Ветвь или тег для развертывания (пустые, если созданы с фиксацией SHA)|

Это событие запускает рабочий процесс при создании развертывания в репозитории рабочего процесса. Развертывания, созданные с помощью фиксации SHA, могут не иметь ссылок на Git. Сведения об API-интерфейсах для создания развертывания см. в разделе [createDeployment](/graphql/reference/mutations#createdeployment) документации по API GraphQL или в разделе [Развертывания](/rest/reference/repos#deployments) документации по REST API.

Например, можно запустить рабочий процесс при возникновении события `deployment`.

```yaml
on:
  deployment
```

### `deployment_status`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | Недоступно | Фиксация для развертывания | Ветвь или тег для развертывания (пустые, если есть фиксация)|

{% note %}

**Примечание**. Если в качестве состояния развертывания задано значение `inactive`, рабочий процесс не запускается.

{% endnote %}

Это событие запускает рабочий процесс, когда состояние развертывания предоставляется третьей стороной. Развертывания, созданные с помощью фиксации SHA, могут не иметь ссылок на Git. Сведения об API-интерфейсах для создания состояния развертывания см. в разделе [createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus) документации по API GraphQL или в разделе [Создание состояния развертывания](/rest/reference/deployments#create-a-deployment-status) документации по REST API.

Например, можно запустить рабочий процесс при возникновении события `deployment_status`.

```yaml
on:
  deployment_status
```

{% ifversion discussions %}
### `discussion`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Это событие запускает рабочий процесс при создании или изменении обсуждения в репозитории рабочего процесса. Для действий, связанных с комментариями к обсуждению, используйте событие [`discussion_comment`](#discussion_comment). Дополнительные сведения см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions). Сведения об API GraphQL см. в разделе [Обсуждение](/graphql/reference/objects#discussion).

Например, можно запустить рабочий процесс, если обсуждение имеет тип действия `created`, `edited` или `answered`.

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Это событие запускает рабочий процесс при создании или изменении комментария к обсуждению в репозитории рабочего процесса. Для действий, связанных с обсуждением, а не с комментариями к нему, используйте событие [`discussion`](#discussion). Дополнительные сведения см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions). Сведения об API GraphQL см. в разделе [Обсуждение](/graphql/reference/objects#discussion).

Например, можно запустить рабочий процесс, если комментарий к обсуждению имеет тип действия `created` или `deleted`.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `fork`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | Недоступно | Последняя фиксация в ветви по умолчанию |  Ветвь по умолчанию |

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при создании вилки репозитория. Сведения о REST API см. в разделе [Создание вилки](/rest/reference/repos#create-a-fork).

Например, можно запустить рабочий процесс при возникновении события `fork`.

```yaml
on:
  fork
```

### `gollum`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | Недоступно | Последняя фиксация в ветви по умолчанию |  Ветвь по умолчанию |

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при создании или обновлении вики-страницы. Дополнительные сведения см. в статье "[Сведения о вики-страницах](/communities/documenting-your-project-with-wikis/about-wikis)".

Например, можно запустить рабочий процесс при возникновении события `gollum`.

```yaml
on:
  gollum
```

### `issue_comment`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при создании, изменении или удалении комментария к проблеме или запросу на вытягивание. Сведения об API-интерфейсах для работы с комментариями к проблеме см. в разделе [IssueComment](/graphql/reference/objects#issuecomment) документации по API GraphQL или в разделе [Комментарии к проблеме](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) документации по REST API.

Например, можно запустить рабочий процесс, если к комментарию к проблеме или запросу на вытягивание применено действие `created` или `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issue_comment` только для проблем или только для запросов на вытягивание

Событие `issue_comment` возникает как для комментариев к проблемам, так и для комментариев к запросам на вытягивание. Свойство `github.event.issue.pull_request` можно использовать в условном режиме для выполнения различных действий в зависимости от того, был ли объект-триггер проблемой или запросом на вытягивание.

Например, этот рабочий процесс будет выполнять задание `pr_commented`, только если событие `issue_comment` возникло из запроса на вытягивание. Этот рабочий процесс будет запускать задание `issue_commented`, только если событие `issue_comment` возникло из проблемы.

```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: {% raw %}${{ github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on PR $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: {% raw %}${{ !github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on issue $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
```

### `issues`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при создании или изменении проблемы в репозитории рабочего процесса. Для действий, связанных с комментариями к проблеме, используйте событие [`issue_comment`](#issue_comment). Дополнительные сведения о проблемах см. в разделе [Сведения о проблемах](/issues/tracking-your-work-with-issues/about-issues). Сведения об API-интерфейсах для работы с проблемами см. в разделе [Issue](/graphql/reference/objects#issue) документации по API GraphQL или в разделе [Проблемы](/rest/reference/issues) документации по REST API.

Например, можно запустить рабочий процесс, если к проблеме было применено действие `opened`, `edited` или `milestoned`.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `label`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при создании или изменении метки в репозитории рабочего процесса. Дополнительные сведения о метках см. в статье "[Управление метками](/issues/using-labels-and-milestones-to-track-work/managing-labels)". Сведения об API-интерфейсах для работы с метками см. в разделе [Label](/graphql/reference/objects#label) документации по API GraphQL или в разделе [Метки](/rest/reference/issues#labels) документации по REST API.

Чтобы запустить рабочий процесс при добавлении метки в проблему, запрос на вытягивание или обсуждение либо при удалении метки, используйте типы действий `labeled` или `unlabeled` для событий [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target) или [`discussion`](#discussion).

Например, можно запустить рабочий процесс, если к метке было применено действие `created` или `deleted`.

```yaml
on:
  label:
    types: [created, deleted]
```

{% ifversion fpt or ghec  %}

### `merge_group`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`merge_group`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#merge_group) | `checks_requested` | SHA группы слияния | Ссылка на группу слияния |

{% data reusables.pull_requests.merge-queue-beta %}

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Несмотря на то, что поддерживается только тип действия `checks_requested`, указание типа действия позволит сохранить специфичность рабочего процесса, что важно при добавлении других типов действия в будущем. Сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Запускает рабочий процесс при добавлении запроса на вытягивание в очередь слияния, которая добавляет запрос на вытягивание в группу слияния. Дополнительные сведения см. в статье [Слияние запроса на вытягивание с использованием очереди слияния](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue).

Например, можно выполнить рабочий процесс при возникновении действия `checks_requested`.

```yaml
on:
  merge_group:
    types: [checks_requested]

```

{% endif %}
### `milestone`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при создании или изменении вехи в репозитории рабочего процесса. Дополнительные сведения см. в разделе [Сведения о вехах](/issues/using-labels-and-milestones-to-track-work/about-milestones). Сведения об API-интерфейсах для работы с вехами см. в разделе [Milestone](/graphql/reference/objects#milestone) документации по API GraphQL или в разделе [Вехи](/rest/reference/issues#milestones) документации по REST API.

Чтобы запустить рабочий процесс при добавлении проблемы в веху или ее удалении из вехи, используйте тип действия `milestoned` или `demilestoned` для события [`issues`](#issues).

Например, можно запустить рабочий процесс, если к вехе было применено действие `opened` или `deleted`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | Недоступно | Последняя фиксация в ветви по умолчанию | Недоступно |

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс, когда выполняется отправка в ветвь, которая является источником публикации для {% data variables.product.prodname_pages %}, если для репозитория включена служба {% data variables.product.prodname_pages %}. Дополнительные сведения об источниках публикации {% data variables.product.prodname_pages %} см. в разделе [Настройка источника публикации для сайта GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Сведения о REST API см. в разделе [Страницы](/rest/reference/repos#pages).

Например, можно запустить рабочий процесс при возникновении события `page_build`.

```yaml
on:
  page_build
```

### `project`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Тип действия `edited` относится только к редактированию доски проекта, а не столбца или карточки на доске проекта. Сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Примечание**. Это событие возникает только в отношении проектов, принадлежащих репозиторию рабочего процесса, но не относится к проектам, принадлежащим организации, пользователю или другому репозиторию.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Примечание.** Это событие происходит только для {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Это событие запускает рабочий процесс при создании или изменении доски проекта. Для действий, связанных с карточками или столбцами на доске проекта, используйте событие [`project_card`](#project_card) или [`project_column`](#project_column). Дополнительные сведения см. в разделе [Сведения о досках проектов](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards). Сведения об API-интерфейсах для работы с досками проектов см. в разделе [Project](/graphql/reference/objects#project) документации по API GraphQL или в разделе [Проекты](/rest/reference/projects) документации по REST API.

Например, можно запустить рабочий процесс, если к проекту было применено действие `created` или `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` (для проблемы)<br/>- `edited`<br/>- `deleted` | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Примечание**. Это событие возникает только в отношении проектов, принадлежащих репозиторию рабочего процесса, но не относится к проектам, принадлежащим организации, пользователю или другому репозиторию.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Примечание.** Это событие происходит только для {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Это событие запускает рабочий процесс при создании или изменении карточки на доске проекта. Для действий, связанных с досками проектов или столбцами на доске проекта, используйте событие [`project`](#project) или [`project_column`](#project_column). Дополнительные сведения см. в разделе [Сведения о досках проектов](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards). Сведения об API-интерфейсах для работы с карточками проектов см. в разделе [ProjectCard](/graphql/reference/objects#projectcard) документации по API GraphQL или в разделе [Карточки проекта](/rest/reference/projects#cards) документации по REST API.

Например, можно запустить рабочий процесс, если к карточке проекта было применено действие `created` или `deleted`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Примечание**. Это событие возникает только в отношении проектов, принадлежащих репозиторию рабочего процесса, но не относится к проектам, принадлежащим организации, пользователю или другому репозиторию.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Примечание.** Это событие происходит только для {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Это событие запускает рабочий процесс при создании или изменении столбца на доске проекта. Для действий, связанных с досками проектов или карточками на доске проекта, используйте событие [`project`](#project) или [`project_card`](#project_card). Дополнительные сведения см. в разделе [Сведения о досках проектов](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards). Сведения об API-интерфейсах для работы со столбцами проектов см. в разделе [Project Column](/graphql/reference/objects#projectcolumn) документации по API GraphQL или в разделе [Столбцы проекта](/rest/reference/projects#columns) документации по REST API.

Например, можно запустить рабочий процесс, если к столбцу проекта было применено действие `created` или `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | Недоступно | Последняя фиксация в ветви по умолчанию |  Ветвь по умолчанию |

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при изменении репозитория рабочего процесса с частного на общедоступный. Сведения о REST API см. в разделе [Изменение репозиториев](/rest/reference/repos#edit).

Например, можно запустить рабочий процесс при возникновении события `public`.

```yaml
on:
  public
```

### `pull_request`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Последняя фиксация слияния в ветви `GITHUB_REF` | Ветвь слияния PR `refs/pull/:prNumber/merge` |

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request). По умолчанию рабочий процесс выполняется только в том случае, если для типа действия события `pull_request` указано `opened`, `synchronize` или `reopened`. Чтобы активировать рабочие процессы с помощью других типов действий, используйте ключевое слово `types`. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes).

{% endnote %}

{% note %}

**Примечание**. Рабочие процессы не будут выполняться при вызове действия `pull_request`, если в запросе на вытягивание имеется конфликт слияния. Сначала необходимо разрешить этот конфликт.

Рабочие процессы с событием `pull_request_target`, напротив, будут выполняться даже при наличии конфликта слияния в запросе на вытягивание. Перед использованием триггера `pull_request_target` следует учесть риски безопасности. Дополнительные сведения см. на веб-сайте [`pull_request_target`](#pull_request_target).

{% endnote %}

Это событие запускает рабочий процесс при выполнении действия по запросу на вытягивание в репозитории рабочего процесса. Например, если типы действий не указаны, рабочий процесс запускается при открытии или повторном открытии запроса на вытягивание либо при обновлении главной ветви запроса на вытягивание. Для действий, связанных с проверкой запросов на вытягивание, комментариями к проверкам запросов на вытягивание или комментариями к запросам на вытягивание, используйте событие [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment) или [`issue_comment`](#issue_comment). Сведения об API-интерфейсах для работы с запросами на вытягивание см. в разделе [PullRequest](/graphql/reference/objects#pullrequest) документации по API GraphQL или в разделе [Запросы на вытягивание](/rest/reference/pulls) документации по REST API.

Обратите внимание, что переменная `GITHUB_SHA` для этого события — это последняя фиксация слияния для ветви слияния запроса на вытягивание. Чтобы получить идентификатор фиксации для последней фиксации в главной ветви запроса на вытягивание, используйте переменную `github.event.pull_request.head.sha`.

Например, можно запустить рабочий процесс при открытии или повторном открытии запроса на вытягивание.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

Контекст события можно использовать для дальнейшего управления выполнением заданий в рабочем процессе. Например, этот рабочий процесс будет выполняться при запросе проверки по запросу на вытягивание, но задание `specific_review_requested` будет выполняться, только если проверка запрошена командой `octo-team`.

```yaml
on:
  pull_request:
    types: [review_requested]
jobs:
  specific_review_requested:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.requested_team.name == 'octo-team'}}{% endraw %}
    steps:
      - run: echo 'A review from octo-team was requested'
```

#### Запуск рабочего процесса на основе главной или базовой ветви запроса на вытягивание

Используйте фильтр `branches` или `branches-ignore`, чтобы настроить запуск рабочего процесса только для запросов на вытягивание, предназначенных для конкретных ветвей. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Например, этот рабочий процесс будет выполняться при открытии запроса на вытягивание, предназначенного для ветви, имя которой начинается с `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Примечание**. {% data reusables.actions.branch-paths-filter %} Например, следующий рабочий процесс будет выполняться только при открытии запроса на вытягивание, включающего изменение файла JavaScript (`.js`) в ветви, имя которой начинается с `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

Чтобы выполнить задание на основе имени главной ветви запроса на вытягивание (в отличие от имени базовой ветви запроса на вытягивание), используйте контекст `github.head_ref` в условном режиме. Например, этот рабочий процесс будет выполняться при каждом открытии запроса на вытягивание, но задание `run_if` будет выполняться только в том случае, если заголовок запроса на вытягивание является ветвью, имя которой начинается с `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Запуск рабочего процесса на основе файлов, измененных в запросе на вытягивание

Рабочий процесс можно настроить таким образом, чтобы он выполнялся при изменении определенных файлов в запросе на вытягивание. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Например, этот рабочий процесс будет выполняться, когда в запросе на вытягивание изменен файл JavaScript (`.js`):

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Примечание**. {% data reusables.actions.branch-paths-filter %} Например, следующий рабочий процесс будет выполняться только при открытии запроса на вытягивание, включающего изменение файла JavaScript (`.js`) в ветви, имя которой начинается с `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Запуск рабочего процесса при слиянии запроса на вытягивание

При слиянии запрос на вытягивание автоматически закрывается. Чтобы запустить рабочий процесс при слиянии запроса на вытягивание, используйте тип события `pull_request` `closed` вместе с условием, проверяющим значение `merged` события. Например, следующий рабочий процесс будет выполняться при закрытии запроса на вытягивание. Задание `if_merged` будет выполняться только в том случае, если произошло слияние запроса на вытягивание.

```yaml
on:
  pull_request:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_comment` (используйте `issue_comment`)

Чтобы запустить рабочий процесс при создании, изменении или удалении комментария к запросу на вытягивание (а не к разнице запроса на вытягивание), используйте событие [`issue_comment`](#issue_comment). Для действий, связанных с проверкой запросов на вытягивание или комментариями к проверкам запросов на вытягивание, используйте событие [`pull_request_review`](#pull_request_review) или [`pull_request_review_comment`](#pull_request_review_comment).

### `pull_request_review`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Последняя фиксация слияния в ветви `GITHUB_REF` | Ветвь слияния PR `refs/pull/:prNumber/merge` |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Это событие запускает рабочий процесс при отправке, изменении или закрытии проверки запроса на вытягивание. Проверка запроса на вытягивание — это группа комментариев к проверке запроса на вытягивание, дополняющих комментарии к тексту запроса и его состояние. Для действий, связанных с комментариями к проверкам запросов на вытягивание или комментариями к запросам на вытягивание, используйте событие [`pull_request_review_comment`](#pull_request_review_comment) или [`issue_comment`](#issue_comment). Сведения об API-интерфейсах для работы с запросами на вытягивание см. в разделе [PullRequestReview](/graphql/reference/objects#pullrequest) документации по API GraphQL или в разделе [Проверки запросов на вытягивание](/rest/reference/pulls#reviews) документации по REST API.

Например, можно запустить рабочий процесс, если к проверке запроса на вытягивание применен тип действия `edited` или `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### Запуск рабочего процесса при утверждении запроса на вытягивание

Чтобы запустить рабочий процесс при утверждении запроса на вытягивание, активируйте рабочий процесс, используя тип `submitted` события `pull_request_review`, а затем проверьте состояние проверки, используя свойство `github.event.review.state`. Например, этот рабочий процесс будет выполняться при отправке проверки запроса на вытягивание, однако задание `approved` будет выполняться, только если отправленная проверка утверждена:

```yaml
on:
  pull_request_review:
    types: [submitted]

jobs:
  approved:
    if: github.event.review.state == 'approved'
    runs-on: ubuntu-latest
    steps:
      - run: echo "This PR was approved"
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_review_comment`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| Последняя фиксация слияния в ветви `GITHUB_REF` | Ветвь слияния PR `refs/pull/:prNumber/merge` |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Это событие запускает рабочий процесс при изменении комментария к проверке запроса на вытягивание. Комментарий к проверке запроса на вытягивание — это комментарий к разнице запроса на вытягивание. Для действий, связанных с проверкой запросов на вытягивание или комментариями к запросам, используйте событие [`pull_request_review`](#pull_request_review) или [`issue_comment`](#issue_comment). Сведения об API-интерфейсах для работы с запросами на вытягивание см. в разделе [PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment) документации по API GraphQL или в разделе [Комментарии к проверкам](/rest/reference/pulls#comments) документации по REST API.

Например, можно запустить рабочий процесс, если к комментарию к проверке запроса на вытягивание применен тип действия `created` или `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Последняя фиксация в базовой ветви запроса на вытягивание | Базовая ветвь PR |

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target). По умолчанию рабочий процесс выполняется только в том случае, если для типа действия события `pull_request_target` указано `opened`, `synchronize` или `reopened`. Чтобы активировать рабочие процессы с помощью других типов действий, используйте ключевое слово `types`. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes).

{% endnote %}

Это событие запускает рабочий процесс при выполнении действия по запросу на вытягивание в репозитории рабочего процесса. Например, если типы действий не указаны, рабочий процесс запускается при открытии или повторном открытии запроса на вытягивание либо при обновлении главной ветви запроса на вытягивание.

Это событие, в отличие от события `pull_request`, выполняется в контексте базы запроса на вытягивание, а не в контексте фиксации слияния. Это предотвращает выполнение небезопасного кода из заголовка запроса на вытягивание, который может изменить репозиторий или украсть все секреты, используемые в рабочем процессе. Это событие позволяет рабочему процессу создавать метки или комментарии к запросам на вытягивание из вилок. Не рекомендуется использовать это событие для сборки или выполнения кода из запроса на вытягивание.

Чтобы обеспечить безопасность репозитория, ветви с именами, которые соответствуют определенным шаблонам (например, похожими на SHA), могут не запускать рабочие процессы с событием `pull_request_target`.

{% warning %}

**Предупреждение**. Для рабочих процессов, которые активируются событием `pull_request_target`: токену `GITHUB_TOKEN` предоставляется разрешение на чтение и запись в репозитории (если только не указан ключ `permissions`), а рабочий процесс получает доступ к секретам, даже если запуск выполняется из вилки. Несмотря на то, что рабочий процесс выполняется в контексте базы запроса на вытягивание, необходимо убедиться, что это событие не ведет к извлечению, сборке или запуску ненадежного кода из запроса на вытягивание. Кроме того, весь кэш использует ту же область, что и базовая ветвь. Не следует сохранять кэш, если есть вероятность изменения его содержимого: это позволит предотвратить отравление кэша. Дополнительные сведения см. в статье [Обеспечение безопасности GitHub Actions и рабочих процессов: предотвращение запросов pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) на веб-сайте лаборатории безопасности GitHub Security Lab.

{% endwarning %}

Например, можно запустить рабочий процесс, если к запросу на вытягивание применен тип действия `assigned`, `opened`, `synchronize` или `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### Запуск рабочего процесса на основе главной или базовой ветви запроса на вытягивание

Используйте фильтр `branches` или `branches-ignore`, чтобы настроить запуск рабочего процесса только для запросов на вытягивание, предназначенных для конкретных ветвей. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Например, этот рабочий процесс будет выполняться при открытии запроса на вытягивание, предназначенного для ветви, имя которой начинается с `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Примечание**. {% data reusables.actions.branch-paths-filter %} Например, следующий рабочий процесс будет выполняться только при открытии запроса на вытягивание, включающего изменение файла JavaScript (`.js`) в ветви, имя которой начинается с `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

Чтобы выполнить задание на основе имени главной ветви запроса на вытягивание (в отличие от имени базовой ветви запроса на вытягивание), используйте контекст `github.head_ref` в условном режиме. Например, этот рабочий процесс будет выполняться при каждом открытии запроса на вытягивание, но задание `run_if` будет выполняться только в том случае, если заголовок запроса на вытягивание является ветвью, имя которой начинается с `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Запуск рабочего процесса на основе файлов, измененных в запросе на вытягивание

Используя фильтр `paths` или `paths-ignore`, можно настроить рабочий процесс таким образом, чтобы он выполнялся при изменении определенных файлов в запросе на вытягивание. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Например, этот рабочий процесс будет выполняться, когда в запросе на вытягивание изменен файл JavaScript (`.js`):

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Примечание**. {% data reusables.actions.branch-paths-filter %} Например, следующий рабочий процесс будет выполняться только при открытии запроса на вытягивание, включающего изменение файла JavaScript (`.js`) в ветви, имя которой начинается с `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Запуск рабочего процесса при слиянии запроса на вытягивание

При слиянии запрос на вытягивание автоматически закрывается. Чтобы запустить рабочий процесс при слиянии запроса на вытягивание, используйте тип события `pull_request_target` `closed` вместе с условием, проверяющим значение `merged` события. Например, следующий рабочий процесс будет выполняться при закрытии запроса на вытягивание. Задание `if_merged` будет выполняться только в том случае, если произошло слияние запроса на вытягивание.

```yaml
on:
  pull_request_target:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

### `push`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | Недоступно | При удалении ветви SHA в запуске рабочего процесса (а также связанные ссылки) возвращается в ветвь репозитория по умолчанию. | Обновленная ссылка |

{% note %}

**Примечание**. К полезным данным веб-перехватчика, доступным для GitHub Actions, не относятся атрибуты `added`, `removed` и `modified` объекта `commit`. Полный объект фиксации можно получить с помощью API. Дополнительные сведения см. в разделе [Commit](/graphql/reference/objects#commit) документации по API GraphQL или в разделе [Получение фиксации](/rest/reference/commits#get-a-commit) в документации по REST API.

{% endnote %}

{% note %}

**Примечание**. При одновременной отправке более трех тегов событие не создается.

{% endnote %}

Это событие запускает рабочий процесс при отправке фиксации или тега.

Например, можно запустить рабочий процесс при возникновении события `push`.

```yaml
on:
  push
```

{% note %}

**Примечание.** Когда событие веб-перехватчика `push` активирует выполнение рабочего процесса, в поле "Кем отправлено" в пользовательском интерфейсе Actions отображается учетная запись того, кто отправил действие, а не того, кто его создал или зафиксировал. Однако если изменения отправляются в репозиторий с помощью проверки подлинности SSH с ключом развертывания, то в поле "Кем отправлено" будет указан администратор репозитория, который проверил ключ развертывания при добавлении в репозиторий.

{% endnote %}

#### Запуск рабочего процесса только при отправке в определенные ветви

Используйте фильтр `branches` или `branches-ignore`, чтобы настроить запуск рабочего процесса только при отправке в определенные ветви. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Например, этот рабочий процесс будет выполняться при отправке в ветвь `main` или в ветвь, имя которой начинается с `releases/`.

```yaml
on:
  push:
    branches:
      - 'main'
      - 'releases/**'
```

{% note %}

**Примечание**. {% data reusables.actions.branch-paths-filter %} Например, следующий рабочий процесс будет выполняться только при отправке, включающей изменение файла JavaScript (`.js`), в ветвь, имя которой начинается с `releases/`:

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Запуск рабочего процесса только при отправке определенных тегов

Используйте фильтр `tags` или `tags-ignore`, чтобы настроить запуск рабочего процесса только при отправке определенных тегов. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Например, этот рабочий процесс будет выполняться при отправке тега, имя которого начинается с `v1.`.

```yaml
on:
  push:
    tags:
      - v1.**
```

#### Запуск рабочего процесса только в случаях, когда отправка влияет на определенные файлы

Используя фильтр `paths` или `paths-ignore`, можно настроить рабочий процесс таким образом, чтобы он выполнялся только тогда, когда отправка затрагивает определенные файлы. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Например, этот рабочий процесс будет выполняться при отправке изменений в файл JavaScript (`.js`):

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Примечание**. {% data reusables.actions.branch-paths-filter %} Например, следующий рабочий процесс будет выполняться только при отправке, включающей изменение файла JavaScript (`.js`), в ветвь, имя которой начинается с `releases/`:

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

### `registry_package`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | Фиксация опубликованного пакета | Ветвь или тег опубликованного пакета |

{% note %}

**Примечание**.{% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс, когда в репозитории выполняется действие, связанное с {% data variables.product.prodname_registry %}. Дополнительные сведения см. в разделе [Документация по {% data variables.product.prodname_registry %}](/packages).

Например, можно запустить рабочий процесс, если к новой версии пакета было применено действие `published`.

```yaml
on:
  registry_package:
    types: [published]
```

### `release`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Последняя фиксация в выпуске с тегами | Ссылка на тег выпуска `refs/tags/<tag_name>` |

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Дополнительные сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Примечание**. Рабочие процессы не активируются для типов действий `created`, `edited` и `deleted` в черновых выпусках. При создании выпуска с помощью пользовательского интерфейса браузера {% data variables.product.product_name %} выпуск может автоматически сохраняться в виде черновика.

{% endnote %}

{% note %}

**Примечание**. Тип `prereleased` не запускает рабочий процесс для предварительных выпусков, опубликованных из черновых выпусков, однако тип `published` запускает его. Если требуется, чтобы рабочий процесс выполнялся при стабильной *и* предварительной публикации, подпишитесь на тип действия `published` вместо `released` и `prereleased`.

{% endnote %}

Это событие запускает рабочий процесс при выполнении действия выпуска в репозитории. Сведения об API-интерфейсах для работы с выпусками см. в разделе [Release](/graphql/reference/objects#release) документации по API GraphQL или в разделе [Выпуски](/rest/reference/releases) документации по REST API.

Например, можно запустить рабочий процесс, если к выпуску было применено действие `published`.

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Другой | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% data reusables.actions.branch-requirement %}

API {% data variables.product.product_name %} можно использовать для активации события веб-перехватчика [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch), чтобы активировать рабочий процесс для действия, происходящего за пределами {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Создание события диспетчеризации репозитория](/rest/reference/repos#create-a-repository-dispatch-event).

При запросе на создание события `repository_dispatch` необходимо указать `event_type` в качестве описания типа действия. По умолчанию все типы действий `repository_dispatch` активируют рабочий процесс. Используйте ключевое слово `types`, чтобы ограничить выполнение рабочего процесса при отправке определенного значения `event_type` в полезные данные веб-перехватчика `repository_dispatch`.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**Примечание**. Значение `event_type` ограничено 100 символами.

{% endnote %}

Все данные, которые отправляются с помощью параметра `client_payload`, доступны в контексте `github.event` рабочего процесса. Например, если отправить этот текст запроса при создании события диспетчеризации репозитория:

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

можно получить доступ к полезным данным в рабочем процессе следующим образом:

```yaml
on:
  repository_dispatch:
    types: [test_result]

jobs:
  run_if_failure:
    if: {% raw %}${{ !github.event.client_payload.passed }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - env:
          MESSAGE: {% raw %}${{ github.event.client_payload.message }}{% endraw %}
        run: echo $MESSAGE
```

### `schedule`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| Недоступно | Недоступно | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию | Если настроен запуск запланированного рабочего процесса. Запланированный рабочий процесс использует [синтаксис POSIX cron](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Дополнительные сведения см. в разделе [Активация рабочего процесса с помощью событий](/articles/configuring-a-workflow/#triggering-a-workflow-with-events). |

{% data reusables.actions.schedule-delay %}

Событие `schedule` позволяет активировать рабочий процесс в запланированное время.

{% data reusables.repositories.actions-scheduled-workflow-example %}

Синтаксис Cron содержит пять полей, разделенных пробелом, где каждое поле представляет единицу времени.

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Эти операторы можно использовать в любом из пяти полей:

| Оператор | Описание | Пример |
| -------- | ----------- | ------- |
| * | Любое значение | `15 * * * *` запускается в каждую 15-ю минуту каждого часа каждого дня. |
| , | Разделитель списка значений | `2,10 4,5 * * *` запускается во 2-ю и 10-ю минуты каждого 4-го и 5-го часов каждого дня. |
| - | Диапазон значений | `30 4-6 * * *` запускается в 30-ю минуту каждого 4-го, 5-го и 6-го часов. |
| / | Значения шага | `20/15 * * * *` запускается каждые 15 минут с 20-й по 59-ю минуту (в каждую 20-ю, 35-ю и 50-ю минуты). |

{% note %}

**Примечание.** {% data variables.product.prodname_actions %} не поддерживает нестандартный синтаксис: `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` и `@reboot`.

{% endnote %}

Используйте редактор [crontab guru](https://crontab.guru/), чтобы создавать синтаксис cron и подтверждать время его выполнения. Начать работу можно со списка [примеров crontab guru](https://crontab.guru/examples.html).

Уведомления о запланированных рабочих процессах отправляются пользователю, который внес последние изменения в синтаксис cron файла рабочего процесса. Дополнительные сведения см. в разделе [Уведомления о запусках рабочих процессов](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs).

### `status`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | Недоступно | Последняя фиксация в ветви по умолчанию | Недоступно |

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс при изменении состояния фиксации Git. Фиксации могут быть помечены как `error`, `failure`, `pending` или `success`. Чтобы предоставить дополнительные сведения об изменении состояния, может потребоваться использовать событие [`check_run`](#check_run). Сведения об API-интерфейсах состояния фиксации см. в разделе [Status](/graphql/reference/objects#status) документации по API GraphQL или в разделе [Состояния](/rest/reference/commits#commit-statuses) документации по REST API.

Например, можно запустить рабочий процесс при возникновении события `status`.

```yaml
on:
  status
```

Чтобы запустить задание в рабочем процессе на основе нового состояния фиксации, можно использовать контекст `github.event.state`. Например, следующий рабочий процесс активируется при изменении состояния фиксации, но задание `if_error_or_failure` выполняется только в том случае, если новое состояние фиксации — `error` или `failure`.

```yaml
on:
  status
jobs:
  if_error_or_failure:
    runs-on: ubuntu-latest
    if: >-
      github.event.state == 'error' ||
      github.event.state == 'failure'
    steps:
      - env:
          DESCRIPTION: {% raw %}${{ github.event.description }}{% endraw %}
        run: |
          echo The status is error or failed: $DESCRIPTION
```

### `watch`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started` | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Несмотря на то, что поддерживается только тип действия `started`, указание типа действия позволит сохранить специфичность рабочего процесса, что важно при добавлении других типов действия в будущем. Сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Это событие запускает рабочий процесс, когда репозиторий рабочего процесса добавляется в избранное. Сведения об API-интерфейсах для работы с запросами на вытягивание см. в разделе [addStar](/graphql/reference/mutations#addstar) документации по API GraphQL или в разделе [Добавление в избранное](/rest/reference/activity#starring) документации по REST API.

Например, можно запустить рабочий процесс при добавлении в избранное репозитория, который является типом действия `started` для события наблюдения.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt или ghes > 3.3 или ghae > 3.3 или ghec %}

### `workflow_call`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| То же, что и рабочий процесс вызывающего объекта | Недоступно | То же, что и рабочий процесс вызывающего объекта | То же, что и рабочий процесс вызывающего объекта |

`workflow_call` используется для того, чтобы указать, что рабочий процесс может вызываться другим рабочим процессом. Когда рабочий процесс активируется с помощью события `workflow_call`, полезные данные события в вызываемом рабочем процессе идентичны полезным данным событий вызывающего рабочего процесса. Дополнительные сведения см. в статье "[Многократное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows)."

В приведенном ниже примере рабочий процесс запускается только при вызове из другого рабочего процесса:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | Недоступно | Последняя фиксация в ветви или теге `GITHUB_REF` | Ветвь или тег, получившие отправку |

Чтобы вручную запустить рабочий процесс, используйте событие `workflow_dispatch`. Запустить рабочий процесс вручную можно с помощью API {% data variables.product.product_name %}, {% data variables.product.prodname_cli %} или интерфейса браузера {% data variables.product.product_name %}. Дополнительные сведения см. в статье [Запуск рабочего процесса вручную](/actions/managing-workflow-runs/manually-running-a-workflow).

```yaml
on: workflow_dispatch
```

#### Предоставление входных данных

Вы можете настроить пользовательские свойства входа, входные значения по умолчанию и необходимые входные данные для события непосредственно в рабочем процессе. При активации события можно указать ссылку `ref` и любые данные `inputs`. При выполнении рабочего процесса можно получить доступ к входным значениям в контексте {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %}. Дополнительные сведения см. в разделе «[Контексты](/actions/learn-github-actions/contexts)».

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} В этом примере определяются входные данные, называемые `logLevel`, `tags`и `environment`. Значения этих входных данных передаются рабочему процессу при его запуске. Затем этот рабочий процесс выводит значения в журнал с помощью свойств контекста {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags` и `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags` и `github.event.inputs.environment`{% endif %}.

```yaml
on:
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning'
        type: choice
        options:
        - info
        - warning
        - debug
      tags:
        description: 'Test scenario tags'
        required: false
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true

jobs:
  log-the-inputs:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Log level: $LEVEL"
          echo "Tags: $TAGS"
          echo "Environment: $ENVIRONMENT"
        env:
          LEVEL: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.logLevel }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.logLevel }}{% endraw %}{% endif %}
          TAGS: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.tags }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.tags }}{% endraw %}{% endif %}
          ENVIRONMENT: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.environment }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.environment }}{% endraw %}{% endif %}
```

При запуске этого рабочего процесса из браузера необходимо сначала ввести значения необходимых входных данных вручную.

![Ввод входных данных для рабочего процесса](/assets/images/help/images/workflow-dispatch-inputs.png)

Входные данные также можно передавать при запуске рабочего процесса из скрипта или с помощью {% data variables.product.prodname_cli %}. Пример:

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

Дополнительные сведения о {% data variables.product.prodname_cli %} см. в разделе [Запуск рабочего процесса вручную](/actions/managing-workflow-runs/manually-running-a-workflow).

{% else %} В этом примере входные данные `name` и `home` определяются и выводятся с использованием контекстов {% ifversion actions-unified-inputs %}`inputs.name` и `inputs.home`{% else %}`github.event.inputs.name` и `github.event.inputs.home`{% endif %} contexts. Если значение `home` не указано, выводится значение по умолчанию: The Octoverse.

```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo Hello $NAME!
          echo -in $HOME
        env:
          NAME: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.name }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.name }}{% endraw %}{% endif %}
          HOME: {% ifversion actions-unified-inputs %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% endif %}
```
{% endif %}

### `workflow_run`

| Полезные данные события веб-перехватчика | Типы действий | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested`{% ifversion actions-workflow-run-in-progress %}<br/>- `in_progress`{% endif %} | Последняя фиксация в ветви по умолчанию | Ветвь по умолчанию |

{% note %}

**Примечание**. {% data reusables.developer-site.multiple_activity_types %} Тип действия `requested` не возникает при повторном запуске рабочего процесса. Сведения о каждом типе действия см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Примечание**. Нельзя использовать `workflow_run` для объединения в цепочку более трех уровней рабочих процессов. Например, при попытке последовательно запустить пять рабочих процессов (от `B` до `F`) после запуска начального рабочего процесса `A` (т. е. `A` → `B` → `C` → `D` → `E` → `F`) рабочие процессы `E` и `F` не будут выполняться.

{% endnote %}

Это событие возникает при запросе или завершении запуска рабочего процесса. Оно позволяет выполнить рабочий процесс после выполнения или завершения другого рабочего процесса. Рабочий процесс, запущенный событием `workflow_run`, может получать доступ к секретам и записывать токены, даже если предыдущий рабочий процесс не имел таких разрешений. Это полезно в случаях, когда предыдущему рабочему процессу намеренно не предоставлены привилегии, но в дальнейшем необходимо выполнить привилегированное действие.

В этом примере запуск рабочего процесса выполняется после завершения отдельного рабочего процесса Run Tests.

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

При указании нескольких процессов `workflows` для события `workflow_run` необходимо запустить только один из этих рабочих процессов. Например, рабочий процесс со следующим триггером будет запускаться после завершения рабочего процесса Staging или Lab.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### Запуск рабочего процесса на основе результатов другого рабочего процесса

Запуск рабочего процесса выполняется независимо от результатов предыдущего рабочего процесса. Чтобы запустить задание или шаг на основе результата запуска рабочего процесса, можно использовать условие со свойством `github.event.workflow_run.conclusion`. Например, этот рабочий процесс будет выполняться всякий раз, когда завершается рабочий процесс Build, однако задание `on-success` будет выполняться только в случае, если рабочий процесс Build выполнен успешно, а задание `on-failure` будет выполняться только в случае, если рабочий процесс Build завершился ошибкой:

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow passed'
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow failed'
```

#### Ограничение запуска рабочего процесса на основе ветвей

Используйте фильтр `branches` или `branches-ignore`, чтобы указать, в каких ветвях должен выполняться рабочий процесс, чтобы активировать его. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)". Например, рабочий процесс со следующим триггером будет выполняться только в случае, если рабочий процесс с именем `Build` выполняется в ветви с именем `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### Использование данных из рабочего процесса, активирующего триггер

Можно получить доступ к [`workflow_run` полезным данным события](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run), которые относятся к рабочему процессу, активирующему триггер для запуска рабочего процесса. Например, если рабочий процесс, активирующий триггер, создает артефакты, рабочий процесс, который активируется событием `workflow_run`, может получить доступ к этим артефактам.

Следующий рабочий процесс передает данные в виде артефакта. (Это упрощенный пример, где в качестве данных выступает номер запроса на вытягивание.)

```yaml
name: Upload data

on:
  pull_request:

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:
      - name: Save PR number
        env:
          PR_NUMBER: {% raw %}${{ github.event.number }}{% endraw %}
        run: |
          mkdir -p ./pr
          echo $PR_NUMBER > ./pr/pr_number
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: pr_number
          path: pr/
```

После завершения указанного выше рабочего процесса запускается следующий рабочий процесс. Следующий рабочий процесс использует контекст `github.event.workflow_run` и REST API {% data variables.product.product_name %} для скачивания артефакта, отправленного указанным выше рабочим процессом. Затем он распаковывает скачанный артефакт и создает комментарии к запросу на вытягивание, номер которого был отправлен в качестве артефакта.

```yaml
name: Use the data

on:
  workflow_run:
    workflows: [Upload data]
    types:
      - completed

jobs:
  download:
    runs-on: ubuntu-latest
    steps:
      - name: 'Download artifact'
        uses: {% data reusables.actions.action-github-script %}
        with:
          script: |
            let allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
               owner: context.repo.owner,
               repo: context.repo.repo,
               run_id: context.payload.workflow_run.id,
            });
            let matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
              return artifact.name == "pr_number"
            })[0];
            let download = await github.rest.actions.downloadArtifact({
               owner: context.repo.owner,
               repo: context.repo.repo,
               artifact_id: matchArtifact.id,
               archive_format: 'zip',
            });
            let fs = require('fs');
            fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/pr_number.zip`, Buffer.from(download.data));

      - name: 'Unzip artifact'
        run: unzip pr_number.zip

      - name: 'Comment on PR'
        uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            let fs = require('fs');
            let issue_number = Number(fs.readFileSync('./pr_number'));
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issue_number,
              body: 'Thank you for the PR!'
            });
```
