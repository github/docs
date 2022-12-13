---
title: Управление автоматическим слиянием для запросов на вытягивание в репозитории
intro: Вы можете разрешить или запретить автоматическое слияние для запросов на вытягивание в репозитории.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
ms.openlocfilehash: 4d0f0d465ea3c8551dc909d56620a06ee9864c1c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883444'
---
## Сведения об автоматическом слиянии

Если вы разрешаете автоматическое слияние для запросов на вытягивание в репозитории, пользователи с разрешениями на запись могут настраивать автоматическое слияние для отдельных запросов на вытягивание в репозитории при соблюдении всех требований для слияния. Если пользователь, у которого нет разрешений на запись, отправляет изменения в запрос на вытягивание с включенным автоматическим слиянием, автоматическое слияние для этого запроса на вытягивание будет отключено. Дополнительные сведения см. в разделе [Автоматическое объединение запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request).

## Управление автоматическим слиянием

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. В разделе {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Запросы на вытягивание"{% else %}"Кнопка слияния"{% endif %} установите или снимите флажок **Разрешить автоматическое слияние**.
  ![Флажок для разрешения или запрета автоматического слияния](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
