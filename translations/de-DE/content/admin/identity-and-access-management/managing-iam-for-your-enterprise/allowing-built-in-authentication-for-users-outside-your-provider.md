---
title: Zulassen integrierter Authentifizierung für Benutzer*innen außerhalb deines Anbieters
intro: 'Du kannst Fallbackauthentifizierung konfigurieren, um integrierte Authentifizierung für Personen zu ermöglichen, die kein Konto bei deinem CAS-, LDAP- oder SAML-Authentifizierungsanbieter haben.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Fallback authentication
ms.openlocfilehash: d011a710898e19dfdfa3591cbba2cbf7ae629885
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064434'
---
## Informationen zur integrierten Authentifizierung für Benutzer*innen außerhalb deines Anbieters

Wenn du die externe Authentifizierung für {% data variables.product.product_name %} aktivierst, wird standardmäßig die integrierte Authentifizierung für deine Instanz deaktiviert. Weitere Informationen findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication).

Wenn du deinem externen Authentifizierungsanbieter keine bestimmten Konten hinzufügen kannst, z. B. Konten für Auftragnehmer*innen oder Computerbenutzer*innen, kannst du die Fallbackauthentifizierung konfigurieren. Die Fallbackauthentifizierung ermöglicht eine integrierte Authentifizierung für externe Benutzer*innen sowie Zugriff auf ein Fallbackkonto, wenn dein Authentifizierungsanbieter nicht verfügbar ist.

Wenn du die integrierte Authentifizierung konfiguriert hast und eine Person sich erfolgreich mit SAML oder CAS authentifiziert hat, kann sie sich nicht mehr mittels Benutzername und Kennwort authentifizieren. Wenn sich ein Benutzer erfolgreich mit LDAP authentifiziert, werden die Anmeldeinformationen nicht mehr als intern erachtet.

{% warning %}

**Warnung**: Falls du die integrierte Authentifizierung deaktivierst, musst du die Benutzer einzeln sperren, die nicht mehr auf die Instanz zugreifen sollen. Weitere Informationen findest du unter [Sperren und Entsperren von Benutzern](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

{% endwarning %}

## Konfigurieren der integrierten Authentifizierung für Benutzer*innen außerhalb deines Anbieters

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Wähle den gewünschten Identity Provider aus.
  ![Option zur Auswahl des Identity Providers](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Wähle **Kontoerstellung mit integrierter Authentifizierung zulassen** aus.
  ![Option zur Auswahl der integrierten Authentifizierung](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Lies die Warnung, und klicke dann auf **OK**.

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Einladen von Benutzer*innen von außerhalb deines Anbieters zum Authentifizieren bei deiner Instanz

Wenn ein Benutzer die Einladung akzeptiert, kann er sich anstatt über den IdP mittels Benutzername und Passwort anmelden.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## Weiterführende Themen

- [Verwenden von CAS for Enterprise IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)
- [Verwenden von LDAP for Enterprise IAM](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)
- [Verwenden von SAML for Enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)
