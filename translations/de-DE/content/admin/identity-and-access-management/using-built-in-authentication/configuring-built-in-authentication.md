---
title: Integrierte Authentifizierung konfigurieren
intro: 'Wenn du die standardmäßige Authentifizierungsmethode verwendest, werden alle Authentifizierungsdetails in {% data variables.product.product_location %} gespeichert.'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Configure built-in authentication
ms.openlocfilehash: 6fbcd68efc953b5a32139a6907975e6918976860
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717813'
---
## Informationen zur integrierten Authentifizierung

Standardmäßig verwendet {% data variables.product.product_name %} die integrierte Authentifizierung. Jede Person erstellt ein Benutzerkonto für {% data variables.product.product_location %} über eine Einladung oder durch Anmeldung und authentifiziert sich dann mit den Anmeldeinformationen für das Konto, um auf deine Instanz zuzugreifen. Deine {% data variables.product.product_name %}-Instanz speichert die Authentifizierungsinformationen für das Konto.

Du kannst verhindern, dass nicht authentifizierte Personen neue Benutzerkonten in deiner Instanz erstellen. Weitere Informationen findest du unter [Deaktivieren nicht authentifizierter Anmeldungen](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups).

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Integrierte Authentifizierung konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Wähle **Integrierte Authentifizierung** aus.
![Option zur Auswahl der integrierten Authentifizierung](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Erstellen deines Kontos

Nachdem deine Instanz erstellt wurde, musst du dein eigenes Administratorkonto erstellen.

1. Wähle auf der Seite „Administratorkonto erstellen“ unter `http(s)://[hostname]/join` deinen Benutzernamen, das Kennwort und deine E-Mail-Adresse aus, und klicke dann auf **Konto erstellen**.
![Administratorkonto erstellen](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## Nächste Schritte

<a name="inviting-users"></a>

Nachdem du die integrierte Authentifizierung konfiguriert und dein Administratorkonto erstellt hast, kannst du Personen einladen, um Konten zu erstellen und auch deine Instanz verwenden. Weitere Informationen findest du unter [Einladen von Personen zur Verwendung deiner Instanz](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance).

## Weitere Informationsquellen

- [E-Mail für Benachrichtigungen konfigurieren](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)
