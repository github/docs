---
title: Удаление себя из репозитория участника совместной работы
intro: If you no longer want to be a collaborator on someone else's repository, you can remove yourself.
redirect_from:
- /leave-a-collaborative-repo
- /leave-a-repo
- /articles/removing-yourself-from-a-collaborator-s-repo
- /articles/removing-yourself-from-a-collaborator-s-repository
- /articles/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove yourself
ms.openlocfilehash: dc9739d84d1794e3111f3b61e0dfd9a7c4bec11b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092274"
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
