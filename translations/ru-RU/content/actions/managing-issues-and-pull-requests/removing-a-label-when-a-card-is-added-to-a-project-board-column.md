---
title: Удаление метки при добавлении карточки в столбец доски проекта
intro: 'Вы можете использовать {% data variables.product.prodname_actions %} для автоматического удаления метки при добавлении проблемы или запроса на вытягивание в определенный столбец на доске проекта.'
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
ms.openlocfilehash: c23edb495719c7059c9c5d8dab1c29acb0e78cb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410110'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как использовать [действие `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) с условием для удаления метки из проблем и запросов на вытягивание, добавленных в определенный столбец на доске проекта. Например, можно удалять метку `needs review` при перемещении карточки проекта в столбец `Done`.

В этом руководстве вы сначала создадите файл рабочего процесса, использующий [действие `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Затем вы настроите рабочий процесс в соответствии с вашими потребностями.

## Создание рабочего процесса

1. {% data reusables.actions.choose-repo %}
2. Выберите проект, принадлежащий репозиторию. Этот рабочий процесс нельзя использовать с проектами, принадлежащими пользователям или организациям. Вы можете использовать существующий проект или создать новый. Дополнительные сведения о создании проекта см. в статье [Создание доски проекта](/github/managing-your-work-on-github/creating-a-project-board).
3. {% data reusables.actions.make-workflow-file %}
4. Скопируйте следующее содержимое YAML в файл рабочего процесса.
    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - name: remove labels
            uses: andymckay/labeler@5c59dabdfd4dd5bd9c6e6d255b01b9d764af4414
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. Настройте параметры в файле рабочего процесса.
   - В `github.event.project_card.column_id == '12345678'` замените `12345678` на идентификатор столбца, в котором нужно удалять метки из проблем и запросов на вытягивание, перемещаемых в этот столбец.

    Чтобы найти идентификатор столбца, перейдите к доске проекта. Рядом с заголовком столбца щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} и выберите **Копировать ссылку на столбец**. Идентификатор столбца — это номер в конце скопированной ссылки. Например, `24687531` — это идентификатор столбца для `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Если вы хотите выполнять действия сразу с несколькими столбцами, перечислите условия через `||`. Например, условие `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` будет выполняться при каждом добавлении карточки проекта в столбец `12345678` или в столбец `87654321`. Столбцы могут находиться на разных досках проектов.
   - Измените значение `remove-labels` на список меток, которые необходимо удалять из проблем или запросов на вытягивание при их перемещении в указанные столбцы. Несколько меток следует разделять запятыми. Например, `"help wanted, good first issue"`. Дополнительные сведения о метках см. в статье [Управление метками](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
6. {% data reusables.actions.commit-workflow %}

## Тестирование рабочего процесса

Этот рабочий процесс будет выполняться при перемещении любой карточки проекта в репозитории. Если карточка является проблемой или запросом на вытягивание и перемещается в указанный вами столбец, то рабочий процесс удалит указанные метки из такой проблемы или запроса на вытягивание. Карточки, представляющие собой примечания, останутся без изменений.

Протестируйте рабочий процесс, переместив проблему в проекте в целевой столбец.

1. Откройте проблему в репозитории. Дополнительные сведения см. в статье "[Создание проблемы](/github/managing-your-work-on-github/creating-an-issue)".
2. Добавьте метки в проблему, которую рабочий процесс должен удалить. Дополнительные сведения см. в статье "[Управление метками](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Добавьте проблему в столбец проекта, указанный в файле рабочего процесса. Дополнительные сведения см. в разделе [Добавление проблем и запросов на вытягивание на доску проекта](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board).
4. Чтобы увидеть выполнение рабочего процесса, который запускается при добавлении проблемы в проект, просмотрите журнал выполнений рабочего процесса. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".
5. После завершения рабочего процесса указанные метки в проблеме, добавленной в столбец проекта, должна быть удалены.

## Дальнейшие действия

- Дополнительные сведения о задачах, которые можно выполнять с помощью действия `andymckay/labeler`, таких как добавление меток или пропуск этого действия в случае, если проблема назначена или имеет определенную метку, см. в [документации по действию `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- [Выполните поиск в GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code), чтобы найти примеры рабочих процессов, использующих это действие.
