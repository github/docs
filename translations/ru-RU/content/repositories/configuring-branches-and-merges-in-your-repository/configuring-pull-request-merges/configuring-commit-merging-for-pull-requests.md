---
title: Настройка слияния фиксаций для запросов на вытягивание
intro: 'Вы можете принудительно применить, разрешить или отключить слияние с фиксацией слияния для всех слияний запросов на вытягивание на {% данных variables.location.product_location %} в репозитории.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
ms.openlocfilehash: 491e64b66bdf1f4f5f9bf0ddde49cf8abab19938
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097807'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. В разделе {% ifversion fpt или ghec или ghes > 3.5 или ghae > 3.4 %}"Запросы на вытягивание"{% else %}"Кнопка слияния"{% endif %}, выберите **"Разрешить фиксации слияния**". Это позволяет участникам выполнять слияние всех запросов на вытягивание с полной историей фиксаций.{% ifversion default-merge-squash-commit-message %} ![Снимок экрана: параметры "Запрос на вытягивание" с выделенным флажком "Разрешить фиксации слияния"](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %} ![Снимок экрана: параметры "Запрос на вытягивание" с выделенным флажком "Разрешить фиксации слияния"](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. При необходимости в разделе **Разрешить фиксации слияния** используйте раскрывающийся список, чтобы выбрать формат сообщения фиксации, представляемого участникам во время слияния. Сообщение по умолчанию содержит номер запроса на вытягивание и заголовок. Например, `Merge pull request #123 from patch-1`. Вы также можете использовать только заголовок запроса на вытягивание или заголовок запроса на вытягивание и описание. 
![Снимок экрана: выделенный раскрывающийся список с сообщениями фиксации по умолчанию](/assets/images/help/repository/default-commit-message-dropdown.png) {% endif %}

Если выбрать несколько методов слияния, участники совместной работы смогут решать, какой тип фиксации слияния использовать при слиянии запроса на вытягивание. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Дополнительные материалы

- [Сведения о слиянии запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [Слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
