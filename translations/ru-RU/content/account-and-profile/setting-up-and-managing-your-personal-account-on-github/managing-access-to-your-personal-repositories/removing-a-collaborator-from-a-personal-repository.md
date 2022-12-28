---
title: Удаление участника совместной работы из личного репозитория
intro: 'При удалении участника совместной работы из проекта он потеряет доступ на чтение и запись в репозиторий. Если репозиторий является частным, а пользователь создал вилку, вилка также будет удалена.'
redirect_from:
  - /articles/how-do-i-remove-a-collaborator
  - /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository
  - /articles/removing-a-collaborator-from-a-private-repository
  - /articles/deleting-a-private-fork-of-a-private-user-repository
  - /articles/how-do-i-delete-a-fork-of-my-private-repository
  - /articles/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
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
ms.openlocfilehash: 24b128b5858c695b0e559302fac05812d3218b8c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165165'
---
## Удаление вилок частных репозиториев

Хотя вилки частных репозиториев удаляются при удалении участника совместной работы, у этого человека по-прежнему останутся все локальные клоны репозитория.

## Удаление разрешений участника совместной работы у пользователя, участвующего в разработке репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. Справа от участника совместной работы, которого вы хотите удалить, щелкните {% octicon "trash" aria-label="The trash icon" %}.
  ![Кнопка для удаления участника совместной работы](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. На левой боковой панели щелкните **Участники совместной работы и команды**.
  ![Вкладка "Участники совместной работы"](/assets/images/help/repository/repo-settings-collaborators.png)
4. Рядом с участником совместной работы, которого вы хотите удалить, щелкните значок **X**.
  ![Удаление ссылки](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## Дополнительные материалы

- "[Удаление членов организации из команды](/articles/removing-organization-members-from-a-team)"
- "[Удаление внешнего участника совместной работы из репозитория организации](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
