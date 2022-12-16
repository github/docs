---
title: Vous supprimer en tant que collaborateur d’un dépôt
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
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086473"
---
{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. Dans la section « Code, planning, and automation » de la barre latérale, cliquez sur **{% octicon "repo" aria-label="The repo icon" %} Dépôts**.
{% else %}
2. Dans la barre latérale gauche, cliquez sur **Dépôts**.
  ![Onglet Dépôts](/assets/images/help/settings/settings-sidebar-repositories.png) {% endif %}
3. En regard du dépôt que vous souhaitez quitter, cliquez sur **Quitter**.
  ![Bouton Quitter](/assets/images/help/repository/repo-leave.png)
4. Lisez attentivement l’avertissement, puis cliquez sur « Je comprends. Quitter ce dépôt ».
  ![Boîte de dialogue vous avertissant que vous allez quitter le dépôt](/assets/images/help/repository/repo-leave-confirmation.png)
