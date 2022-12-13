---
title: Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation
intro: 'Du kannst die verknüpfte Identität, aktive Sitzungen und autorisierte Anmeldeinformationen eines Organisationsmitglieds ansehen und widerrufen.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage SAML access
ms.openlocfilehash: 5b8dbe15037eabe416a6b0c63df7f893db8445bb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130842'
---
## Über SAML Zugriff auf deine Organisation

Wenn du Einmaliges Anmelden über SAML für deine Organisation aktivierst, kann jedes Organisationsmitglied seine externe Identität auf deinem Identitätsanbieter (IdP) mit seinem bestehenden {% data variables.product.product_location %}-Konto verknüpfen. Um auf die Ressourcen deiner Organisation auf {% data variables.product.product_name %} zuzugreifen, muss das Mitglied eine aktive SAML-Sitzung in seinem Browser haben. Um über API und Git auf die Ressourcen deiner Organisation zugreifen zu können, muss das Mitglied ein persönliches Zugriffstoken oder einen SSH-Schlüssel verwenden, den das Mitglied für die Verwendung mit deiner Organisation autorisiert hat.

Du kannst die verknüpfte Identität, die aktiven Sitzungen und die autorisierten Anmeldeinformationen auf der gleichen Seite anzeigen und widerrufen.

## Eine verknüpfte Identität anschauen und widerrufen

{% data reusables.saml.about-linked-identities %} 

Wenn verfügbar, wird der Eintrag SCIM-Daten enthalten. Weitere Informationen findest du unter [Informationen zu SCIM für Organisationen](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% warning %}

**Warnung:** Für Organisationen, die SCIM verwenden:
- Durch das Widerrufen einer verknüpften Benutzeridentität für {% data variables.product.product_name %} werden auch die SAML- und SCIM-Metadaten entfernt. Daher kann der Identitätsanbieter die verknüpfte Benutzeridentität nicht synchronisieren oder aufheben.
- Ein Administrator muss eine verknüpfte Identität über den Identitätsanbieter widerrufen.
- Um eine verknüpfte Identität zu widerrufen und ein anderes Konto über den Identitätsanbieter zu verknüpfen, kann ein Administrator den Benutzer der {% data variables.product.product_name %}-Anwendung entfernen und erneut zuweisen. Weitere Informationen findest du in der Dokumentation deines Identitätsanbieters.

{% endwarning %}


{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## Eine aktive SAML-Sitzung ansehen und widerrufen

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## Autorisierte Anmeldeinformationen anschauen und widerrufen

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## Weitere Informationsquellen

- „[Informationen zu Identität und Zugangsverwaltung mit einmaligem Anmelden über SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"{% ifversion ghec %}
- [Anzeigen und Verwalten des SAML-Zugriffs eines Benutzers auf dein Unternehmenskonto](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise) {% endif %}
