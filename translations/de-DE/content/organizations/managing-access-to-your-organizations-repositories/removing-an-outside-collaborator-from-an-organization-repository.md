---
title: Externen Mitarbeiter von einem Organisations-Repository entfernen
intro: Organisationsinhaber*innen und Repositoryadministrator*innen können den Zugriff externer Mitarbeiter*innen auf ein Repository entfernen.
redirect_from:
- /articles/removing-an-outside-collaborator-from-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove collaborator
ms.openlocfilehash: 71c8017b79425570e4ee7c2d2c7d3ac695c5c531
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130702"
---
{% ifversion fpt or ghec %}

{% warning %}

**Warnung:**
- Beim Entfernen eines externen Mitarbeiters von einem privaten Repository wird die Anzahl der bezahlten Lizenzen nicht automatisch angepasst. Folge den Schritten unter [Verringern der Anzahl kostenpflichtiger Arbeitsplätze deiner Organisation](/articles/downgrading-your-organization-s-paid-seats), um nach dem Entfernen von Benutzern aus der Organisation für weniger Lizenzen zu bezahlen.

- Du bist dafür verantwortlich, dass die Personen, denen du den Zugriff auf ein Repository entziehst, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen.

{% endwarning %}

{% endif %}

Beim Entfernen eines Mitarbeiters werden zwar dessen Forks privater Repositorys gelöscht, seine lokalen Klone deiner Repositorys behält er aber.

## Externe Mitarbeiter von allen Repositorys einer Organisation entfernen

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. Wähle die externen Mitarbeiter aus, die du aus der Organisation entfernen möchtest.
![Liste der externen Mitarbeiter mit zwei ausgewählten externen Mitarbeitern](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. Klicke im Dropdownmenü über der Liste der externen Mitarbeiter auf **Aus allen Repositorys entfernen**.
![Dropdownmenü mit Option zum Entfernen externer Mitarbeiter ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Prüfe die Liste der externen Mitarbeiter, die aus der Organisation entfernt werden, und klicke anschließend auf **Externe Mitarbeiter entfernen**.
  ![Liste der externen Mitarbeiter, die entfernt werden, und Schaltfläche zum Entfernen externer Mitarbeiter](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## Externen Mitarbeiter von einem bestimmten Repository einer Organisation entfernen

Wenn du einen externen Mitarbeiter nur von bestimmten Repositorys deiner Organisation entfernen möchtest, kannst du dessen Zugriff auf die einzelnen Repositorys nacheinander entziehen.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. Klicke rechts neben dem Benutzernamen der Person, die du entfernen möchtest, im Dropdownmenü {% octicon "gear" aria-label="The Settings gear" %} auf **Verwalten**.
  ![Schaltfläche zum Verwalten des Zugriffs](/assets/images/help/organizations/member-manage-access.png)
6. Klicke rechts neben dem Repository, aus dem du den externen Mitarbeiter entfernen möchtest, auf **Zugriff verwalten**.
![Auswählen der Schaltfläche zum Verwalten des Zugriffs neben einem Repository, auf das der externe Mitarbeiter Zugriff hat](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. Wenn du dem externen Mitarbeiter den Zugriff auf das Repository vollständig entziehen möchtest, klicke in der rechten oberen Ecke auf **Zugriff auf dieses Repository entfernen**.
![Schaltfläche „Zugriff auf dieses Repository entfernen“](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. Klicke zum Bestätigen auf **Zugriff entfernen**.
![Bestätigen des externen Mitarbeiters, der aus dem Repository entfernt wird](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Du kannst externe Mitarbeiter*innen auch in der Zugriffsübersicht deiner Repositoryeinstellungen aus einem Repository entfernen. Weitere Informationen findest du unter [Teams und Personen mit Zugriff auf dein Repository verwalten](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person).
{% endif %}
## Weiterführende Themen

- [Externe Mitarbeiter zu Organisations-Repositorys hinzufügen](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)
