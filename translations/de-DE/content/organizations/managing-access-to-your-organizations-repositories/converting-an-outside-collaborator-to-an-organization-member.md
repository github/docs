---
title: Einen externen Mitarbeiter in ein Organisationsmitglied umwandeln
intro: Wenn du externen Mitarbeiter*innen der Repositorys deiner Organisation umfassendere Berechtigungen innerhalb deiner Organisation gewähren möchtest, kannst du {% ifversion fpt or ghec %}sie einladen, Mitglieder deiner Organisation zu werden{% else %}sie zu Mitgliedern deiner Organisation machen{% endif %}.
redirect_from:
- /articles/converting-an-outside-collaborator-to-an-organization-member
- /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.
topics:
- Organizations
- Teams
shortTitle: Convert collaborator to member
ms.openlocfilehash: bac55802407b46344c807798e4d8eade5f608e01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130730"
---
{% ifversion fpt or ghec %} Wenn deine Organisation ein benutzerabhängiges Abonnement abgeschlossen hat, muss eine Lizenz verfügbar sein, bevor du ein neues Mitglied zur Organisation einladen oder ein ehemaliges Organisationsmitglied wieder einsetzen kannst. Weitere Informationen findest du unter „[Informationen zu den Preisen pro Benutzer](/articles/about-per-user-pricing)“. {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %} Wenn [die Mitglieder deiner Organisation die zweistufige Authentifizierung verwenden müssen](/articles/requiring-two-factor-authentication-in-your-organization), müssen Benutzer*innen {% ifversion fpt or ghec %}, die du einlädst, [die zweistufige Authentifizierung aktivieren](/articles/securing-your-account-with-two-factor-authentication-2fa), bevor sie die Einladung annehmen können.{% else %} müssen [die zweistufige Authentifizierung aktivieren](/articles/securing-your-account-with-two-factor-authentication-2fa), bevor du sie der Organisation hinzufügen kannst. {% endif %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %} {% ifversion fpt or ghec %}
5. Klicke rechts neben dem Namen des externen Mitarbeiters, der Mitglied werden soll, auf das Dropdownmenü {% octicon "gear" aria-label="The gear icon" %} und wähle dort **Invite to organization** (Zur Organisation einladen).![Invite outside collaborators to organization](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png) (Externe Mitarbeiter zur Organisation einladen) aus {% else %}.
5. Klicke rechts neben dem Namen des externen Mitarbeiters, der Mitglied werden soll, auf **Invite to organization** (Zur Organisation einladen).![Externe Mitarbeiter zur Organisation einladen](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png) {% endif %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role-send-invitation %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Weiterführende Themen

- [Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)
