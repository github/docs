---
title: Vous supprimer en tant que collaborateur d’un dépôt
intro: 'Si vous ne souhaitez plus être collaborateur du dépôt d’une autre personne, vous pouvez vous retirer.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164868'
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
