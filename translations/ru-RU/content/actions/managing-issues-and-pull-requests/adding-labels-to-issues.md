---
title: Добавление меток к проблемам
shortTitle: Add labels to issues
intro: 'Вы можете использовать {% data variables.product.prodname_actions %}, чтобы автоматически отмечать проблемы.'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: a3523069b9422ecd8107007ca5e00fb0071dd738
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185564'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как использовать [действие `actions/github-script`](https://github.com/marketplace/actions/github-script) в рабочем процессе для добавления меток к новым открытым или повторно открытым проблемам. Например, метку `triage` можно добавлять при каждом открытии или повторном открытии проблемы. Затем можно просмотреть все проблемы, которые необходимо уделить внимание, отфильтровав проблемы с меткой `triage`.

Это `actions/github-script` действие позволяет легко использовать API {% data variables.product.prodname_dotcom %} в рабочем процессе.

В этом руководстве вы сначала создадите файл рабочего процесса, использующий [действие `actions/github-script`](https://github.com/marketplace/actions/github-script). Затем вы настроите рабочий процесс в соответствии с вашими потребностями.

## Создание рабочего процесса

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Скопируйте следующее содержимое YAML в файл рабочего процесса.
  
    ```yaml{:copy}
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. `script` Настройте параметр в файле рабочего процесса:
   - Значения `issue_number`, `owner`и `repo` задаются автоматически с помощью `context` объекта . Изменять их не нужно.
   - В качестве значения для `labels` укажите список меток, которые вы хотите добавить к проблеме. Несколько меток следует разделять запятыми. Например, `["help wanted", "good first issue"]`. Дополнительные сведения о метках см. в статье "[Управление метками](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
5. {% data reusables.actions.commit-workflow %}

## Тестирование рабочего процесса

При каждом открытии или повторном открытии проблемы в репозитории этот рабочий процесс будет добавлять к ней указанные метки.

Протестируйте рабочий процесс, создав проблему в репозитории.

1. Создайте проблему в репозитории. Дополнительные сведения см. в статье "[Создание проблемы](/github/managing-your-work-on-github/creating-an-issue)".
2. Чтобы просмотреть выполнение рабочего процесса, которое было активировано путем создания проблемы, просмотрите журнал выполнений рабочего процесса. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".
3. После завершения рабочего процесса к созданной проблеме должны быть добавлены указанные метки.

## Дальнейшие действия

- Дополнительные сведения о дополнительных действиях, которые можно выполнить с `actions/github-script` помощью действия, см. в [документации по`actions/github-script` действию](https://github.com/marketplace/actions/github-script).
- Дополнительные сведения о различных событиях, которые могут активировать рабочий процесс, см. в статье "[События, которые активируют рабочие процессы](/actions/reference/events-that-trigger-workflows#issues)".
- [Выполните поиск в GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code), чтобы найти примеры рабочих процессов, использующих это действие.
