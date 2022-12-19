---
title: Закрытие неактивных проблем
shortTitle: Close inactive issues
intro: 'Вы можете использовать {% data variables.product.prodname_actions %}, чтобы добавлять комментарии о проблемах или закрывать проблемы, которые были неактивны в течение определенного периода времени.'
redirect_from:
  - /actions/guides/closing-inactive-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 13471d0e7e786f4ba107cfcc10c0a2c5f4b8818e
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010063'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как использовать [действие `actions/stale`](https://github.com/marketplace/actions/close-stale-issues) для добавления комментариев и закрытия проблем, которые были неактивны в течение определенного периода времени. Например, если проблема была неактивна в течение 30 дней, можно оставить комментарий, чтобы побудить участников к действию. Если через 14 дней после этого никакие действия выполнены не будут, можно закрыть проблему.

В этом руководстве вы сначала создадите файл рабочего процесса, использующий [действие `actions/stale`](https://github.com/marketplace/actions/close-stale-issues). Затем вы настроите рабочий процесс в соответствии с вашими потребностями.

## Создание рабочего процесса

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Скопируйте следующее содержимое YAML в файл рабочего процесса.

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-stale %}
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Настройте параметры в файле рабочего процесса.
   - Измените значение для `on.schedule`, чтобы определить время выполнения рабочего процесса. В приведенном выше примере рабочий процесс будет выполняться каждый день в 1:30 (в формате UTC). Дополнительные сведения о запланированных рабочих процессах см. в статье "[Запланированные события](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Измените значение для `days-before-issue-stale` на количество дней бездействия до того, как действие `actions/stale` применит метку к проблеме. Чтобы это действие никогда не применяло метки к проблемам, задайте значение `-1`.
   - Измените значение для `days-before-issue-close` на количество дней бездействия до того, как действие `actions/stale` закроет проблему. Чтобы это действие никогда не закрывало проблемы, задайте значение `-1`.
   - Измените значение для `stale-issue-label` на метку, применяемую к проблемам, которые были неактивны в течение указанного времени, указанного `days-before-issue-stale`.
   - Измените значение `stale-issue-message` на комментарий, добавляемый к проблемам, которые помечены действием `actions/stale`.
   - Измените значение для `close-issue-message` на комментарий, добавляемый к проблемам, которые закрыты действием `actions/stale`.
5. {% data reusables.actions.commit-workflow %}

## Ожидаемые результаты

В зависимости от параметра `schedule` (например, каждый день в 1:30 (в формате UTC)) рабочий процесс будет обнаруживать проблемы, которые были неактивны в течение указанного периода времени, и будет добавлять указанный комментарий и метку. Кроме того, рабочий процесс будет закрывать все ранее помеченные проблемы, если в течение указанного периода времени не произошло никаких дополнительных действий.

{% data reusables.actions.schedule-delay %}

Чтобы периодически отслеживать выполнение рабочего процесса, можно просматривать историю его выполнений. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Во избежание превышения предела скорости, этот рабочий процесс будет помечать и (или) закрывать только 30 проблем за раз. Это поведение можно настроить с помощью параметра `operations-per-run`. Дополнительные сведения см. в [документации по действию `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).

## Дальнейшие действия

- Подробные сведения о том, что можно сделать с помощью действия `actions/stale` (например, закрывать неактивные запросы на вытягивание, игнорировать проблем с определенными метками или вехами, а также проверять проблемы только с определенными метками), см. в [документации по действию `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).
- [Выполните поиск в GitHub](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code), чтобы найти примеры рабочих процессов, использующих это действие.
