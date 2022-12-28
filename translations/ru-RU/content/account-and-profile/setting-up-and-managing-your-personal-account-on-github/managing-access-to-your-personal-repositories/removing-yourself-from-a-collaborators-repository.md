---
title: Удаление себя из репозитория участника совместной работы
intro: 'Если вы больше не хотите быть участником совместной работы в репозитории другого пользователя, вы можете удалить себя.'
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove yourself
ms.openlocfilehash: 3b760d7947d734d8fa6e1e366795ce698f9c0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165150'
---
{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. В разделе "Код, планирование и автоматизация" на боковой панели щелкните **Репозитории {% octicon "repo" aria-label="The repo icon" %}** .
{% else %}
2. На левой боковой панели щелкните **Репозитории**.
  ![Вкладка "Репозитории"](/assets/images/help/settings/settings-sidebar-repositories.png) {% endif %}
3. Рядом с репозиторием, из которого вы хотите выйти, нажмите кнопку **Выйти**.
  ![Кнопка "Выйти"](/assets/images/help/repository/repo-leave.png)
4. Внимательно прочтите предупреждение, а затем щелкните "Я понимаю. Покинуть этот репозиторий".
  ![Диалоговое окно с предупреждением о выходе](/assets/images/help/repository/repo-leave-confirmation.png)
