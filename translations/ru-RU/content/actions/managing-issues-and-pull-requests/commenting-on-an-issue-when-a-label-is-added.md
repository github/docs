---
title: 'Комментирование проблемы, к которой добавлена метка'
intro: 'Вы можете использовать {% data variables.product.prodname_actions %}, чтобы автоматически комментировать проблемы при применении определенной метки.'
redirect_from:
  - /actions/guides/commenting-on-an-issue-when-a-label-is-added
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Add label to comment on issue
ms.openlocfilehash: 02484ffce5af753f06ac0523ef8e6ab853f47454
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147409045'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как использовать [действие `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment) для комментирования проблемы, к которой применена определенная метка. Например, если к проблеме добавлена метка `help-wanted`, можно добавить комментарий, чтобы пригласить участников к работе над проблемой.

В этом руководстве вы сначала создадите файл рабочего процесса, использующий [действие `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment). Затем вы настроите рабочий процесс в соответствии с вашими потребностями.

## Создание рабочего процесса

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Скопируйте следующее содержимое YAML в файл рабочего процесса.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@a35cf36e5301d70b76f316e867e7788a55a31dae
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. Настройте параметры в файле рабочего процесса.
   - Замените `help-wanted` в `if: github.event.label.name == 'help-wanted'` меткой, в соответствии с которой требуется выполнять определенное действие. Если вы хотите работать в соответствии с несколькими метками, разделите условия с помощью `||`. Например, `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` будет добавлять комментарий при каждом добавлении меток `bug` или `fix me` к проблеме.
   - Измените значение `body` на комментарий, который нужно добавить. Поддерживается GitHub Flavored Markdown. Дополнительные сведения о Markdown см. в статье "[Базовый синтаксис записи и форматирования](/github/writing-on-github/basic-writing-and-formatting-syntax)".
5. {% data reusables.actions.commit-workflow %}

## Тестирование рабочего процесса

Этот рабочий процесс будет выполняться при каждом добавлении метки к проблеме в репозитории. Если добавленная метка является одной из указанных в файле рабочего процесса, действие `peter-evans/create-or-update-comment` добавит к проблеме указанный комментарий.

Протестируйте рабочий процесс, применив указанную метку к проблеме.

1. Откройте проблему в репозитории. Дополнительные сведения см. в статье "[Создание проблемы](/github/managing-your-work-on-github/creating-an-issue)".
2. Добавьте к проблеме указанную метку в файле рабочего процесса. Дополнительные сведения см. в статье "[Управление метками](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Чтобы просмотреть выполнение рабочего процесса, которое было активировано путем применения метки к проблеме, просмотрите журнал выполнений рабочего процесса. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Когда рабочий процесс завершится, к помеченной проблеме должен быть добавлен комментарий.

## Дальнейшие действия

- Дополнительные сведения о задачах, которые можно выполнить с помощью действия `peter-evans/create-or-update-comment`, например добавление реакций, см. в [документации по действию `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment).
