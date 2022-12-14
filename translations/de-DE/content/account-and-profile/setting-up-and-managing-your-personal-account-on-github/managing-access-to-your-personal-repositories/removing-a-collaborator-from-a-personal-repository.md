---
title: Mitarbeiter aus einem persönlichen Repository entfernen
intro: 'Wenn Du einen Mitarbeiter aus Deinem Projekt entfernst, verliert er seinen Lese-/Schreibzugriff auf Dein Repository. Falls das Repository privat ist und die Person einen Fork erstellt hat, wird der Fork ebenfalls gelöscht.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164884'
---
## Forks privater Repositorys löschen

Beim Entfernen eines Mitarbeiters werden zwar dessen Forks privater Repositorys gelöscht, seine lokalen Klone deiner Repositorys behält er aber.

## Mitarbeiterberechtigungen einer Person entfernen, die zu einem Repository beiträgt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. Klicke rechts neben dem Mitarbeiter, den du entfernen möchtest, auf {% octicon "trash" aria-label="The trash icon" %}.
  ![Schaltfläche „Entfernen des Mitarbeiters“](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. Klicke auf der linken Randleiste auf **Mitarbeiter & Teams**.
  ![Registerkarte „Mitarbeiter“](/assets/images/help/repository/repo-settings-collaborators.png)
4. Klicke neben dem Mitarbeiter, den du entfernen möchtest, auf das **X**-Symbol .
  ![Link „Entfernen“](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## Weiterführende Themen

- [Organisationsmitglieder aus einem Team entfernen](/articles/removing-organization-members-from-a-team)
- [Externen Mitarbeiter von einem Organisations-Repository entfernen](/articles/removing-an-outside-collaborator-from-an-organization-repository)
