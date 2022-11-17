---
title: Планирование создания проблем
shortTitle: Schedule issue creation
intro: 'Вы можете использовать {% data variables.product.prodname_actions %}, чтобы регулярно создавать проблему для таких задач, как ежедневные совещания или ежеквартальные проверки.'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 11925693d42c354c2a04d0cc198a1a9869c33abc
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010027'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как регулярно создавать проблемы с помощью [действия `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action). Например, вы можете создавать проблему каждую неделю и использовать ее в качестве повестки дня для собрания команды.

В этом руководстве вы сначала создадите файл рабочего процесса, использующий [действие `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action). Затем вы настроите рабочий процесс в соответствии с вашими потребностями.

## Создание рабочего процесса

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Скопируйте следующее содержимое YAML в файл рабочего процесса.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}
    
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording
                        
                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Настройте параметры в файле рабочего процесса.
   - Измените значение для `on.schedule`, чтобы определить время выполнения рабочего процесса. В приведенном выше примере рабочий процесс будет запускаться каждый день в 7:20 (в формате UTC). Дополнительные сведения о запланированных рабочих процессах см. в статье "[Запланированные события](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Измените значение `assignees` на список пользователей {% data variables.product.prodname_dotcom %}, которых вы хотите назначить проблеме.
   - В качестве значения для `labels` укажите список меток, которые вы хотите применить к проблеме.
   - Измените значение `title` на желаемый заголовок проблемы.
   - Измените значение `body` на желаемый текст проблемы. С помощью символа `|` можно использовать для этого параметра многострочное значение.
   - Если вы хотите закрепить эту проблему в репозитории, задайте для `pinned` значение `true`. Дополнительные сведения о закрепленных проблемах см. в разделе [Закрепление проблемы в репозитории](/articles/pinning-an-issue-to-your-repository).
   - Если вы хотите закрывать предыдущую проблему, созданную этим рабочим процессом, при каждом создании новой проблемы, задайте для `close-previous` значение `true`. Рабочий процесс закроет последнюю проблему с метками, определенными в поле `labels`. Чтобы случайно не закрыть не ту проблему, используйте уникальную метку или сочетание меток.
5. {% data reusables.actions.commit-workflow %}

## Ожидаемые результаты

На основе параметра `schedule` (например, каждый понедельник в 7:20 UTC) рабочий процесс будет создавать новую проблему с назначенными участниками, метками, заголовком и текстом, которые вы указали. Если для `pinned` задано значение `true`, рабочий процесс закрепит проблему в репозитории. Если для `close-previous` задано значение true, рабочий процесс закроет последнюю проблему с соответствующими метками.

{% data reusables.actions.schedule-delay %}

Чтобы периодически отслеживать выполнение рабочего процесса, можно просматривать историю его выполнений. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Дальнейшие действия

- Чтобы узнать больше о дополнительных действиях, которые можно выполнить с действием `imjohnbo/issue-bot`, например смена назначенных участников или использование шаблона проблемы, см. [документацию по действию `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action).
- [Выполните поиск в GitHub](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code), чтобы найти примеры рабочих процессов, использующих это действие.
