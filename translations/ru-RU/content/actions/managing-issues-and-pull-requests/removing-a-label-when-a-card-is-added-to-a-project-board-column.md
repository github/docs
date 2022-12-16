---
title: Удаление метки при добавлении карточки в столбец доски проекта
intro: '{% data variables.product.prodname_actions %} можно использовать для автоматического удаления метки при добавлении проблемы или запроса на вытягивание в определенный столбец в {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Remove label when adding card
ms.openlocfilehash: d86d9e5ad198c9cf8811b47f2a6c8a7114e20104
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185632'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как использовать [`actions/github-script` действие](https://github.com/marketplace/actions/github-script) вместе с условным для удаления метки из проблем и запросов на вытягивание, которые добавляются в определенный столбец в {% data variables.projects.projects_v1_board %}. Например, можно удалять метку `needs review` при перемещении карточки проекта в столбец `Done`.

В этом руководстве вы сначала создадите файл рабочего процесса, использующий [действие `actions/github-script`](https://github.com/marketplace/actions/github-script). Затем вы настроите рабочий процесс в соответствии с вашими потребностями.

## Создание рабочего процесса

1. {% data reusables.actions.choose-repo %}
2. Выберите {% data variables.projects.projects_v1_board %}, принадлежащий репозиторию. Этот рабочий процесс нельзя использовать с проектами, принадлежащими пользователям или организациям. Можно использовать существующий {% data variables.projects.projects_v1_board %} или создать новый {% data variables.projects.projects_v1_board %}. Дополнительные сведения о создании проекта см. в разделе [Создание {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/creating-a-project-board).
3. {% data reusables.actions.make-workflow-file %}
4. Скопируйте следующее содержимое YAML в файл рабочего процесса.

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. Настройте параметры в файле рабочего процесса.
   - В `github.event.project_card.column_id == '12345678'` замените `12345678` на идентификатор столбца, в котором нужно удалять метки из проблем и запросов на вытягивание, перемещаемых в этот столбец.

     Чтобы найти идентификатор столбца, перейдите к {% data variables.projects.projects_v1_board %}. Рядом с заголовком столбца щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} и выберите **Копировать ссылку на столбец**. Идентификатор столбца — это номер в конце скопированной ссылки. Например, `24687531` — это идентификатор столбца для `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Если вы хотите выполнять действия сразу с несколькими столбцами, перечислите условия через `||`. Например, условие `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` будет выполняться при каждом добавлении карточки проекта в столбец `12345678` или в столбец `87654321`. Столбцы могут находиться на разных досках проектов.
   - Измените значение в `name` `github.rest.issues.removeLabel()` функции на имя метки, которую нужно удалить из проблем или запросов на вытягивание, которые перемещаются в указанные столбцы. Дополнительные сведения о метках см. в статье [Управление метками](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
6. {% data reusables.actions.commit-workflow %}

## Тестирование рабочего процесса

При каждом перемещении карточки проекта в {% data variables.projects.projects_v1_board %} в репозитории будет выполняться этот рабочий процесс. Если карточка является проблемой или запросом на вытягивание и перемещается в указанный столбец, рабочий процесс удалит указанную метку из проблемы или запроса на вытягивание. Карточки, представляющие собой примечания, останутся без изменений.

Протестируйте рабочий процесс, переместив проблему в {% data variables.projects.projects_v1_board %} в целевой столбец.

1. Откройте проблему в репозитории. Дополнительные сведения см. в статье "[Создание проблемы](/github/managing-your-work-on-github/creating-an-issue)".
2. Пометка проблемы меткой, которую требуется удалить рабочим процессом. Дополнительные сведения см. в статье "[Управление метками](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Добавьте проблему в столбец {% data variables.projects.projects_v1_board %}, указанный в файле рабочего процесса. Дополнительные сведения: [Добавление проблем и запросов на вытягивание к компоненту "{% data variables.product.prodname_project_v1 %}"](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board).
4. Чтобы увидеть выполнение рабочего процесса, который запускается при добавлении проблемы в проект, просмотрите журнал выполнений рабочего процесса. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".
5. После завершения рабочего процесса у проблемы, добавленной в столбец проекта, должна быть удалена указанная метка.

## Дальнейшие действия

- Дополнительные сведения о дополнительных действиях, которые можно выполнить с `actions/github-script` помощью действия, см. в [документации по`actions/github-script` действию](https://github.com/marketplace/actions/github-script).
- [Выполните поиск в GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code), чтобы найти примеры рабочих процессов, использующих это действие.
