---
title: Закрытие запроса на вытягивание
intro: 'Вы можете *закрыть* запрос на вытягивание, [не объединяя его в вышестоящей ветви](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request). Это удобно, если предложенные в ветви изменения больше не нужны или если в другой ветви было предложено другое решение.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
  - /articles/closing-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/closing-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 51048cfd4ae917149d81a011a8ec5418ca4beb51
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139673'
---
{% tip %}

**Совет.** Если вы открыли запрос на вытягивание с неправильной базовой ветвью, можно не закрывать его и открывать заново, а просто изменить базовую ветвь. Дополнительные сведения см. в разделе [Изменение базовой ветви запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request).

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. В списке "Запросы на вытягивание" щелкните запрос на вытягивание, который требуется закрыть.
3. В нижней части запроса на вытягивание под полем комментария нажмите кнопку **Закрыть запрос на вытягивание**.
  ![Кнопка закрытия запроса на вытягивание](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. При необходимости [удалите ветвь](/articles/deleting-unused-branches). Это позволит сохранить порядок в списке ветвей в репозитории.
