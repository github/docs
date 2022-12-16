---
title: Перемещение назначенных проблем на досках проектов
intro: 'Вы можете использовать {% data variables.product.prodname_actions %}, чтобы автоматически переместить проблемы в конкретный столбец на доске проекта при назначении проблемы.'
redirect_from:
  - /actions/guides/moving-assigned-issues-on-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Move assigned issues
ms.openlocfilehash: 785614a4a55704179c84e5421cd465ff99747021
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097819'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом учебнике показано, как использовать [действие `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation) для автоматического перемещения проблемы в определенный столбец на доске проекта при назначении проблемы. Например, если проблема назначена, ее можно переместить в столбец `In Progress` доски проекта.

В этом руководстве вы сначала создадите файл рабочего процесса, использующий [действие `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation). Затем вы настроите рабочий процесс в соответствии с вашими потребностями.

## Создание рабочего процесса

1. {% data reusables.actions.choose-repo %}
2. В репозитории выберите доску проекта. Вы можете использовать существующий проект или создать его. Дополнительные сведения о создании проекта см. в статье [Создание доски проекта](/github/managing-your-work-on-github/creating-a-project-board).
3. {% data reusables.actions.make-workflow-file %}
4. Скопируйте следующее содержимое YAML в файл рабочего процесса.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
            with:
              project: Docs Work
              column: In Progress
              repo-token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
    ```

5. Настройте параметры в файле рабочего процесса.
   - Измените значение для `project` на имя доски проекта. При наличии нескольких досок проектов с одинаковым именем действие `alex-page/github-project-automation-plus` будет выполняться для всех проектов с указанным именем.
   - Измените значение для `column` на имя столбца, в котором необходимо переместить проблемы при их назначении.
   - Измените значение для `repo-token`:
     1. Создайте {% данных variables.product.pat_v1 %} с областью `repo` действия. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
     1. Сохраните эти данные {% variables.product.pat_generic %} в качестве секрета в репозитории. Дополнительные сведения о сохранении секретов см. в статье [Зашифрованные секреты](/actions/reference/encrypted-secrets).
     1. В файле рабочего процесса замените `PERSONAL_ACCESS_TOKEN` именем секрета.
6. {% data reusables.actions.commit-workflow %}

## Тестирование рабочего процесса

При каждом назначении проблемы в репозитории она перемещается в указанный столбец доски проекта. Если проблема еще не находится на доске проекта, она туда добавится.

Если репозиторий принадлежит пользователю, действие `alex-page/github-project-automation-plus` будет выполняться для всех проектов в репозитории или личной учетной записи с указанным столбцом и именем проекта. Аналогичным образом, если репозиторий принадлежит организации, действие будет выполняться для всех проектов в репозитории или организации с указанным столбцом и именем проекта.

Протестируйте рабочий процесс, назначив проблему в репозитории.

1. Откройте проблему в репозитории. Дополнительные сведения см. в статье "[Создание проблемы](/github/managing-your-work-on-github/creating-an-issue)".
2. Назначьте проблему. Дополнительные сведения см. в статье [Назначение проблем и запросов на вытягивание другим пользователям GitHub](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users).
3. Чтобы увидеть выполнение рабочего процесса, которое было активировано путем назначения метки для проблемы, просмотрите журнал выполнений рабочего процесса. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Когда рабочий процесс завершится, проблема, которую вы назначили, должна появиться в указанном столбце доски проекта.

## Дальнейшие действия

- Дополнительные сведения о задачах, которые можно выполнить с помощью действия `alex-page/github-project-automation-plus`, например удаление или архивация карт проекта, см. в [документации по действию `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation).
