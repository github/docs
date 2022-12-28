---
title: Настройка сжатия фиксаций для запросов на вытягивание
intro: 'Вы можете принудительно применить, разрешить или отключить сквошную фиксацию для всех слияний запросов на вытягивание на {% данных variables.location.product_location %} в репозитории.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
ms.openlocfilehash: 4de4c0b6da1461358d80e39f1cb00d3b831321b7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099223'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. В разделе {% ifversion fpt или ghec или ghes > 3.5 или ghae > 3.4 %}"Запросы на вытягивание"{% else %}"Кнопка слияния"{% endif %}, выберите **"Разрешить объединение сквошов**". Это позволит участникам выполнять слияние запросов на вытягивание путем сжатия всех фиксаций в одну фиксацию. Сообщение фиксации по умолчанию, представляемое участникам во время слияния, представляет собой заголовок и сообщение фиксации, если запрос на вытягивание содержит только одну фиксацию, или заголовок запроса на вытягивание и список фиксаций, если запрос на вытягивание содержит две или больше фиксаций. {% ifversion ghes = 3.6 %} Чтобы всегда использовать заголовок запроса на вытягивание независимо от количества фиксаций в запросе на вытягивание, выберите **Использовать заголовок запроса на вытягивание для фиксаций слияния со сжатием по умолчанию**.{% endif %}{% ifversion default-merge-squash-commit-message %} ![Запрос на вытягивание: фиксации со сжатием](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![Снимок экрана: параметры "Запрос на вытягивание" с выделенным флажком "Разрешить фиксации слияния"](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Запрос на вытягивание: фиксации со сжатием](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. При необходимости в разделе **Разрешить слияние со сжатием** используйте раскрывающийся список, чтобы выбрать формат сообщения фиксации со сжатием по умолчанию, представляемого участникам во время слияния. В сообщении по умолчанию используется заголовок и сообщение фиксации, если запрос на вытягивание содержит только одну фиксацию, или заголовок запроса на вытягивание и список фиксаций, если запрос на вытягивание содержит две или больше фиксаций. Вы также можете использовать только заголовок запроса на вытягивание, заголовок запроса на вытягивание и сведения о фиксации, а также заголовок запроса на вытягивание и описание.
![Снимок экрана: выделенный раскрывающийся список с сообщениями сжатия по умолчанию](/assets/images/help/repository/default-squash-message-dropdown.png) {% endif %}

Если выбрать несколько методов слияния, участники совместной работы смогут решать, какой тип фиксации слияния использовать при слиянии запроса на вытягивание. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Дополнительные материалы

- [Сведения о слиянии запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [Слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
