---
title: Удаление участника совместной работы из личного репозитория
intro: When you remove a collaborator from your project, they lose read/write access to your repository. If the repository is private and the person has created a fork, then that fork is also deleted.
redirect_from:
- /articles/how-do-i-remove-a-collaborator
- /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository
- /articles/removing-a-collaborator-from-a-private-repository
- /articles/deleting-a-private-fork-of-a-private-user-repository
- /articles/how-do-i-delete-a-fork-of-my-private-repository
- /articles/removing-a-collaborator-from-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/removing-a-collaborator-from-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove a collaborator
ms.openlocfilehash: eafe4f8bb1cea085910179a95f17c0b4a1358ad2
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145093166"
---
## <a name="deleting-forks-of-private-repositories"></a>Удаление вилок частных репозиториев

Хотя вилки частных репозиториев удаляются при удалении участника совместной работы, у этого человека по-прежнему останутся все локальные клоны репозитория.

## <a name="removing-collaborator-permissions-from-a-person-contributing-to-a-repository"></a>Удаление разрешений участника совместной работы у пользователя, участвующего в разработке репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. Справа от участника совместной работы, которого вы хотите удалить, щелкните {% octicon "trash" aria-label="The trash icon" %}.
  ![Кнопка для удаления участника совместной работы](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. На левой боковой панели щелкните **Участники совместной работы и команды**.
  ![Вкладка "Участники совместной работы"](/assets/images/help/repository/repo-settings-collaborators.png)
4. Рядом с участником совместной работы, которого вы хотите удалить, щелкните значок **X**.
  ![Удаление ссылки](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## <a name="further-reading"></a>Дополнительные материалы

- "[Удаление членов организации из команды](/articles/removing-organization-members-from-a-team)"
- "[Удаление внешнего участника совместной работы из репозитория организации](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
