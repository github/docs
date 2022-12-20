---
title: Sich selbst aus dem Repository eines Mitarbeiters entfernen
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
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090085"
---
{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. Klicke im Abschnitt "Code, Planung und Automatisierung" der Seitenleiste auf **{% octicon "repo" aria-label="The repo icon" %} Repositorys**.
{% else %}
2. Klicke auf der linken Randleiste auf **Repositorys**.
  Registerkarte ![Repositorys](/assets/images/help/settings/settings-sidebar-repositories.png) {% endif %}
3. Klicke neben dem Repository, das Du verlassen möchtest, auf **Leave** (Verlassen).
  ![Schaltfläche "Leave"](/assets/images/help/repository/repo-leave.png) (Verlassen)
4. Lies die Warnung gut durch, und klicke dann auf „I understand, leave this repository“ (Ich habe verstanden und möchte das Repository verlassen).
  ![Dialogfeld zum Bestätigen des Verlassens](/assets/images/help/repository/repo-leave-confirmation.png)
