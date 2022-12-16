---
title: Sich selbst aus dem Repository eines Mitarbeiters entfernen
intro: 'Wenn du nicht mehr an einem fremden Repository mitarbeiten möchtest, kannst du dich daraus entfernen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164867'
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
