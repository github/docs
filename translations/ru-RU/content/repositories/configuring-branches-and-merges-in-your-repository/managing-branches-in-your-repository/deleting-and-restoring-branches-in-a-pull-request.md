---
title: Удаление и восстановление ветвей в запросе на вытягивание
intro: 'Если у вас есть доступ на запись к репозиторию, можно удалить ветви, связанные с закрытыми или объединенными запросами на вытягивание. Невозможно удалить ветви, которые связаны с открытыми запросами на вытягивание.'
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
ms.openlocfilehash: 48007869ae43d39553e0f8948f90e89b7fb73af0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136946'
---
## Удаление ветви, используемой для запроса на вытягивание

Вы можете удалить ветвь, связанную с запросом на вытягивание, если этот запрос был объединен или закрыт и нет других открытых запросов на вытягивание, ссылающихся на ветвь. Сведения о закрытии ветвей, не связанных с запросами на вытягивание, см. в статье [Создание и удаление ветвей в репозитории](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. В списке запросов на вытягивание нажмите запрос, связанный с ветвью, которую требуется удалить.
5. В нижней части запроса на вытягивание нажмите **Удалить ветвь**.
   ![Кнопка для удаления ветви](/assets/images/help/pull_requests/delete_branch_button.png)

   Эта кнопка не отображается, если в настоящее время для этой ветви существует открытый запрос на вытягивание.

## Восстановление удаленной ветви

Вы можете восстановить главную ветвь закрытого запроса на вытягивание.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. В списке запросов на вытягивание нажмите запрос, связанный с ветвью, которую требуется восстановить.
5. В нижней части запроса на вытягивание нажмите **Восстановить ветвь**.
   ![Кнопка для восстановления удаленной ветви](/assets/images/help/branches/branches-restore-deleted.png)

## Дополнительные материалы

- [Создание и удаление ветвей в репозитории](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)
- [Управление автоматическим удалением ветвей](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)
