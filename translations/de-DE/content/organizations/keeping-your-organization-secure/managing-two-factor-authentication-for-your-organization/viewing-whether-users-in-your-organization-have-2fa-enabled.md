---
title: 'Überprüfen, ob die 2FA für die Benutzer*innen deiner Organisation aktiviert ist'
intro: 'Du kannst anzeigen, welche Organisationsinhaber, Mitglieder und externen Mitarbeiter die zweistufige Authentifizierung aktiviert haben.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View 2FA usage
ms.openlocfilehash: 20659ea2e1979123b15d9ee5d333655ad188b2e9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130778'
---
{% note %}

**Hinweis:** Du kannst fordern, dass alle Mitglieder{% ifversion fpt or ghec %} einschließlich Besitzer, Abrechnungsmanager und{% else %} und{% endif %} externer Projektmitarbeiter in deiner Organisation die zweistufige Authentifizierung aktiviert haben müssen. Weitere Informationen findest du unter [Erfordern der zweistufigen Authentifizierung in deiner Organisation](/articles/requiring-two-factor-authentication-in-your-organization).

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Um die Organisationsmitglieder einschließlich der Organisationsinhaber anzuzeigen, die die zweistufige Authentifizierung aktiviert oder deaktiviert haben, klicke auf der rechten Seite auf **2FA**, und wähle **Aktiviert** oder **Deaktiviert** aus.
 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Wenn du externe Projektmitarbeiter in deiner Organisation anzeigen möchtest, klicke unter der Registerkarte „Personen“ auf **Externe Projektmitarbeiter**.
![Auswahl von externen Projektmitarbeitern](/assets/images/help/organizations/select-outside-collaborators.png)
6. Wenn du anzeigen möchtest, welche externen Projektmitarbeiter die zweistufige Authentifizierung aktiviert oder deaktiviert haben, klicke rechts auf **2FA**, und wähle **Aktiviert** oder **Deaktiviert** aus.
![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## Weitere Informationsquellen

- „[Rollen von Personen in einer Organisation anzeigen](/articles/viewing-people-s-roles-in-an-organization)“
