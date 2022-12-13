---
title: Einladen von Benutzer*innen zum Beitritt in deine Organisation
intro: 'Mithilfe des Benutzernamens oder der E-Mail-Adresse für {% data variables.product.product_location %} kannst du alle Personen einladen, ein Mitglied deiner Organisation zu werden.'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Invite users to join
ms.openlocfilehash: f0b5d1c41fc5f348077a77d29ac4be309c1cad0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145101483'
---
## Information zu Organisationseinladungen

Wenn deine Organisation ein benutzerabhängiges Abonnement abgeschlossen hat, muss eine Lizenz verfügbar sein, bevor du ein neues Mitglied zur Organisation einladen oder ein ehemaliges Organisationsmitglied wieder einsetzen kannst. Weitere Informationen findest du unter [Informationen zu den Preisen pro Benutzer*in](/articles/about-per-user-pricing). 

{% data reusables.organizations.org-invite-scim %}

Wenn deine Organisation die zweistufige Authentifizierung für Mitglieder erzwingt, müssen Benutzer, die du einlädst, die zweistufige Authentifizierung aktivieren, bevor sie die Einladung akzeptieren. Weitere Informationen findest du unter [Erfordern der zweistufigen Authentifizierung in deiner Organisation](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization) und [Schützen deines Kontos mit der zweistufigen Authentifizierung (TFA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa).

{% ifversion fpt %} Organisationen, die {% data variables.product.prodname_ghe_cloud %}{% else %}You{% endif %} verwenden, können SCIM implementieren, um den Zugriff von Organisationsmitgliedern auf {% data variables.product.prodname_dotcom_the_website %} über einen Identitätsanbieter (IdP) hinzuzufügen, zu verwalten und zu entfernen. Weitere Informationen findest du unter [Informationen zu SCIM für Organisationen](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}

## Einladen von Benutzer*innen zum Beitritt in deine Organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

## Weitere Informationsquellen
- [Hinzufügen von Organisationsmitgliedern zu einem Team](/articles/adding-organization-members-to-a-team)
