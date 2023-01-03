---
title: Anzeige der Mitgliedsnamen in deiner Organisation verwalten
intro: 'Du kannst festlegen, dass Mitglieder deiner Organisation den Profilnamen von Kommentarverfasser*innen in privaten Repositorys in der Organisation anzeigen können.'
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage display of member names
ms.openlocfilehash: a990098874393e17f992ffac7b04bcef1b1bcfc4
ms.sourcegitcommit: 9e0d21122ddfcf3f0dbba9b365ba902a2f779493
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163143'
---
Organisationsinhaber können die Anzeige der Mitgliedsnamen in einer Organisation verwalten.

![Im Kommentar angezeigter Profilname des Verfassers](/assets/images/help/issues/commenter-full-name.png)

Änderungen an der Anzeige von Benutzernamen innerhalb einer Organisation wirken sich auf die Anzeige der Benutzernamen anderer Personen aus, nicht auf deinen eigenen. Jedes Organisationsmitglied kann seinen eigenen Profilnamen in seinen Einstellungen wählen. Weitere Informationen findest du unter [Personalisieren deines Profils](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name).

{% ifversion profile-name-enterprise-setting %} Du kannst diese Einstellung für deine Organisation möglicherweise nicht konfigurieren, wenn ein*e Unternehmensinhaber*in eine Richtlinie auf Unternehmensebene festgelegt hat. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories).{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Aktiviere oder deaktiviere unter „Administratorrepositoryberechtigungen“ die Option **Mitgliedern die Anzeige des Profilnamens des Kommentarverfassers in privaten Repositorys erlauben**.
![Kontrollkästchen zum Festlegen, dass Mitglieder den vollständigen Namen des Kommentarverfassers in privaten Repositorys anzeigen können](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. Klicke auf **Speichern**.
