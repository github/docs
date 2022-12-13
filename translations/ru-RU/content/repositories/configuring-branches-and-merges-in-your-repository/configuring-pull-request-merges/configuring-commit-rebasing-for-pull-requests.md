---
title: Настройка перемещения фиксаций между ветвями для запросов на вытягивание
intro: 'Вы можете принудительно применить, разрешить или отключить повторную сортировку фиксации для всех слияний запросов на вытягивание на {% данных variables.location.product_location %} в репозитории.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit rebasing
ms.openlocfilehash: 8559b0244e8b194378c625c34fe1ef0853d652b7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098740'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе {% ifversion fpt или ghec или ghes > 3.5 или ghae > 3.4 %}"Запросы на вытягивание"{% else %}"Кнопка слияния"{% endif %}, выберите **"Разрешить слияние повторной базы**". Это позволит участникам выполнять слияние запросов на вытягивание путем перемещения отдельных фиксаций в основную ветвь. 
{% ifversion default-merge-squash-commit-message %} ![Снимок экрана: параметры "Запрос на вытягивание" с выделенным флажком "Разрешить слияние перемещения между ветвями"](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %} ![Снимок экрана: параметры "Запрос на вытягивание" с выделенным флажком "Разрешить слияние перемещения между ветвями"](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Запрос на вытягивание: перемещенные между ветвями фиксации](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

Если вы также выберете другой метод слияния, участники совместной работы смогут выбрать тип фиксации слияния при слиянии запроса на вытягивание. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
