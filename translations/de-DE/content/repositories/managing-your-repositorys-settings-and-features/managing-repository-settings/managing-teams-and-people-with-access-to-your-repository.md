---
title: Verwalten von Teams und Personen mit Zugriff auf Ihr Repository
intro: Du kannst alle Personen mit Zugriff auf Dein Repository sehen und die Berechtigungen anpassen.
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Teams & people
ms.openlocfilehash: e378332dda56fad39b18fd10da4ee9bf799a9fe3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132117'
---
## Informationen zur Zugriffsverwaltung für Repositorys

Für jedes Repository, das Du auf {% data variables.product.prodname_dotcom %} verwaltest, kannst Du eine Übersicht aller Teams und Personen sehen, die Zugriff auf das Repository haben. In der Übersicht kannst Du auch neue Teams oder Personen einladen, die Rolle jedes Teams oder jeder Person für das Repository ändern oder den Zugriff auf das Repository entfernen.

Diese Übersicht kann Dir helfen, den Zugriff auf Dein Repository, Onboard- oder Off-Board-Auftragnehmer oder Mitarbeiter zu überwachen und effektiv auf Sicherheitsvorfälle zu reagieren.

{% data reusables.organizations.mixed-roles-warning %}

Weitere Informationen zu Repositoryrollen findest du unter [Berechtigungsebenen für ein Repository eines persönlichen Kontos](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository) und unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

![Übersicht Zugriffsverwaltung](/assets/images/help/repository/manage-access-overview.png)

## Filtern der Liste der Teams und Personen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
1. Beginne im Suchfeld unter „Manage access" (Zugriff verwalten) den Namen des Teams oder der Person einzugeben, die Du finden möchtest. Verwende optional die Dropdownmenüs, um deine Suche zu filtern. 
  ![Suchfeld, um eine Liste von Teams oder Personen mit Zugriff zu filtern](/assets/images/help/repository/manage-access-filter.png)

## Berechtigungen für ein Team oder eine Person ändern

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. Suche unter „Zugriff verwalten“ das Team oder die Person, dessen/deren Rolle du ändern möchtest, wähle dann die Dropdownliste „Rolle“ aus, und klicke auf eine neue Rolle.
  ![Benutzung der Dropdownliste „Rolle“, um neue Berechtigungen für ein Team oder eine Person auszuwählen](/assets/images/help/repository/manage-access-role-drop-down.png)

## Eine Person oder ein Team einladen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %} {% data reusables.organizations.invite-teams-or-people %}
5. Beginne im Suchfeld den Namen des Teams oder der Person einzugeben, die Du einladen möchtest, dann klicke in der Liste der Übereinstimmungen auf einen Namen.
  ![Suchfeld, um den Namen eines Teams oder einer Person einzugeben, das/die zu dem Repository eingeladen werden soll](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Wähle unter „Rolle auswählen“ die Repositoryrolle aus, die dem Team oder der Person gewährt werden soll, und klicke dann auf **NAME zum REPOSITORY hinzufügen**.
  ![Auswählen von Berechtigungen für ein Team oder eine Person](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Zugriff für ein Team oder eine Person entfernen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. Suche unter „Zugriff verwalten“ das Team oder die Person, dessen/deren Zugriff du entfernen möchtest, und klicke dann auf {% octicon "trash" aria-label="The trash icon" %}.
  ![Papierkorbsymbol zum Entfernen des Zugriffs](/assets/images/help/repository/manage-access-remove.png)

## Weiterführende Themen

- [Festlegen der Sichtbarkeit eines Repository](/github/administering-a-repository/setting-repository-visibility)
- [Festlegen von Basisberechtigungen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization).
