---
title: Синхронизация запроса на вытягивание с базовой ветвью
intro: 'После открытия запроса на вытягивание можно обновить главную ветвь, содержащую изменения, любыми изменениями, внесенными в базовую ветвь.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
ms.openlocfilehash: d7819b45cf3290c09e3b231825e494fd1d82daea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139598'
---
## Сведения о поддержке синхронизации запроса на вытягивание

Перед слиянием ваших запросов на вытягивание для других изменений может быть выполнено слияние в базовую ветвь, что приведет к рассинхронизации главной ветви запроса на вытягивание. Обновление запроса на вытягивание последних изменений из базовой ветви может помочь определить проблемы до слияния.

Можно обновить главную ветвь запроса на вытягивание из командной строки или со страницы запроса на вытягивание. Кнопка **Обновить ветвь** отображается, если все указанное далее имеет значение true:

* Между ветвью запроса на вытягивание и базовой нет конфликтов слияния.
* Ветвь запроса на вытягивание не соответствует базовой.
* Базовая ветвь требует, чтобы ветви были обновлены перед слиянием{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}, или включена настройка, чтобы всегда предлагать обновление веток{% endif %}.

Дополнительные сведения см. в разделах [Требовать проверки состояния перед слиянием](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} и [Управление предложениями по обновлению ветвей запросов на вытягивание](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}.

Если в базовой ветви есть изменения, которые вызывают конфликты слияния в вашей ветви запроса на вытягивание, вы не сможете обновить ветвь, пока все конфликты не будут разрешены. Дополнительную информацию см. в разделе [Сведения о конфликтах слияния](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts).

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} На странице запроса на вытягивание можно обновить ветвь запроса на вытягивание с помощью традиционного слияния или перемещения. Традиционное слияние приводит к фиксации слияния, которая выполняет слияние базовой ветви в главную ветвь запроса на вытягивание. Перемещение применяет изменения из _ветви_ к последней версии базовой ветви. В результате получается ветвь с линейной историей, поскольку фиксация слияния не создается.
{% else %} При обновлении ветви со страницы запроса на вытягивание выполняется традиционное слияние. Результирующая фиксация слияния выполняет слияние базовой ветви в главную ветвь запроса на вытягивание.
{% endif %}

## Обновление ветви запроса на вытягивание

{% data reusables.repositories.sidebar-pr %}

1. В списке "Запросы на вытягивание" щелкните запрос на вытягивание, который требуется обновить.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. В разделе слияния в нижней части страницы можно:
   - Щелкнуть **Обновить ветвь**, чтобы выполнить традиционное слияние.
   ![Кнопка для обновления ветви](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - Щелкнуть раскрывающееся меню обновления ветви, затем **Обновить с перемещением**, а потом выбрать **Переместить ветвь**, чтобы обновить с помощью перемещения в базовую ветвь.
   ![Раскрывающееся меню с параметрами слияния и перемещения](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png) {% else %}
1. В разделе слияния в нижней части страницы нажать кнопку **Обновить ветвь**, чтобы выполнить традиционное слияние.
  ![Кнопка для обновления ветви](/assets/images/help/pull_requests/pull-request-update-branch.png) {% endif %}

## Дополнительные материалы

- [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Изменение этапа запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)
- [Фиксация изменений в ветви запроса на вытягивание, созданной из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)
