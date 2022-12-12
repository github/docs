---
title: Personen das Löschen von Issues in Deiner Organisation erlauben
intro: 'Organisationsinhaber können es bestimmten Personen erlauben, Issues in Repositorys zu löschen, die Deiner Organisation gehören.'
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
ms.openlocfilehash: 6396b54d7a6e7113344935e4229843f580c246b6
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876818'
---
Standardmäßig können Issues in den Repositorys einer Organisation nicht gelöscht werden. Ein Organisationsinhaber muss diese Funktion erst für alle Repositorys der Organisation aktivieren.

Nach der Aktivierung können Organisationsbesitzer und Personen mit Administratorzugriff in einem im Besitz der Organisation befindlichen Repository Issues löschen. Zu den Personen mit Administratorzugriff für ein Repository gehören Organisationsmitglieder und externe Mitarbeiter, die Administratorzugriff erhalten haben. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) und [Löschen eines Issues](/articles/deleting-an-issue).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Wähle unter „Issue-Löschung“ die Option **Mitgliedern das Löschen von Issues für diese Organisation erlauben** aus.
![Kontrollkästchen, um Personen das Löschen von Issues zu erlauben](/assets/images/help/settings/issue-deletion.png)
6. Klicken Sie auf **Speichern**.
