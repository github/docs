---
title: Anzeigen und Verwalten des SAML-Zugriffs von Benutzer*innen auf dein Unternehmen
intro: 'Du kannst die verknüpfte Identität, aktive Sitzungen und autorisierte Anmeldeinformationen eines Enterprise-Mitglieds ansehen und widerrufen.'
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
shortTitle: View & manage SAML access
ms.openlocfilehash: 25c706f5aff79f65adf4968546a9a8123794f583
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104700'
---
## Über SAML Zugriff auf dein Enterprise-Konto

Wenn du SAML Single Sign-On (SSO) für dein Unternehmenskonto aktivierst, kann jedes Unternehmensmitglied seine externe Identität bei deinem Identitätsanbieter (Identity Provider, IdP) mit seinem bestehenden Konto unter {% data variables.product.product_location %} verknüpfen. {% data reusables.saml.about-saml-access-enterprise-account %}

Wenn in deinem Unternehmen {% data variables.product.prodname_emus %} verwendet wird, nutzen deine Mitglieder Konten, die über deinen IdP bereitgestellt werden. {% data variables.product.prodname_managed_users_caps %} nutzt nicht deren vorhandenes Benutzerkonto unter {% data variables.product.product_name %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

## Eine verknüpfte Identität anschauen und widerrufen

{% data reusables.saml.about-linked-identities %}

Wenn in deinem Unternehmen {% data variables.product.prodname_emus %}, verwendet wird, kannst du auf {% data variables.product.product_name %} weder die Bereitstellung von Benutzerkonten aufheben noch die Konten aus dem Unternehmen entfernen. Alle Änderungen, die du an den {% data variables.product.prodname_managed_users %} deines Unternehmens vornehmen musst, sollten über deinen IdP vorgenommen werden.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## Eine aktive SAML-Sitzung ansehen und widerrufen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## Autorisierte Anmeldeinformationen anschauen und widerrufen

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## Weitere Informationsquellen

- [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
