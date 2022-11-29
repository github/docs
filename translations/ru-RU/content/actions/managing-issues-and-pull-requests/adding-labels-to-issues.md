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
ms.openlocfilehash: e5cb19c98e2d136e67a14726c9edff328f299034
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010032'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как использовать [действие `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) в рабочем процессе для добавления меток к новым открытым или повторно открытым проблемам. Например, метку `triage` можно добавлять при каждом открытии или повторном открытии проблемы. Затем можно просмотреть все проблемы, которые необходимо уделить внимание, отфильтровав проблемы с меткой `triage`.

В этом руководстве вы сначала создадите файл рабочего процесса, использующий [действие `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Затем вы настроите рабочий процесс в соответствии с вашими потребностями.

## Создание рабочего процесса

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Скопируйте следующее содержимое YAML в файл рабочего процесса.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

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
          - name: Label issues
            uses: andymckay/labeler@e6c4322d0397f3240f0e7e30a33b5c5df2d39e90
            with:
              add-labels: "triage"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Настройте параметры в файле рабочего процесса.
   - В качестве значения для `add-labels` укажите список меток, которые вы хотите добавить к проблеме. Несколько меток следует разделять запятыми. Например, `"help wanted, good first issue"`. Дополнительные сведения о метках см. в статье "[Управление метками](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
5. {% data reusables.actions.commit-workflow %}

## Тестирование рабочего процесса

При каждом открытии или повторном открытии проблемы в репозитории этот рабочий процесс будет добавлять к ней указанные метки.

Протестируйте рабочий процесс, создав проблему в репозитории.

1. Создайте проблему в репозитории. Дополнительные сведения см. в статье "[Создание проблемы](/github/managing-your-work-on-github/creating-an-issue)".
2. Чтобы просмотреть выполнение рабочего процесса, которое было активировано путем создания проблемы, просмотрите журнал выполнений рабочего процесса. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".
3. После завершения рабочего процесса к созданной проблеме должны быть добавлены указанные метки.

## Дальнейшие действия

- Дополнительные сведения о задачах, которые можно выполнять с помощью действия `andymckay/labeler`, например удаление меток или пропуск этого действия, если проблема назначена или имеет определенную метку, см. в [документации по действию `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- Дополнительные сведения о различных событиях, которые могут активировать рабочий процесс, см. в статье "[События, которые активируют рабочие процессы](/actions/reference/events-that-trigger-workflows#issues)". Действие `andymckay/labeler` работает только с событиями `issues`, `pull_request` или `project_card`.
- [Выполните поиск в GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code), чтобы найти примеры рабочих процессов, использующих это действие.
