---
title: CAS verwenden
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: 'Wenn du den zentralen Authentifizierungsdienst (Central Authentication Service, CAS) verwendest, um den Zugriff auf mehrere Webanwendungen zu zentralisieren, kannst du {% data variables.product.product_name %} integrieren, indem du die CAS-Authentifizierung für deine Instanz konfigurierst.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 4bd9c8baf32ab09c593a251ca4f1cb698e075501
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884277'
---
## Informationen zur CAS-Authentifizierung für {% data variables.product.product_name %}

CAS ist ein Single Sign-On-Protokoll (SSO), das die Authentifizierung für mehrere Webanwendungen zentralisiert. Weitere Informationen findest du unter [Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service) auf Wikipedia.

Nachdem du CAS konfiguriert hast, müssen Personen, die {% data variables.product.product_location %} verwenden, ein persönliches Zugriffstoken verwenden, um API- oder Git-Anforderungen über HTTP(S) zu authentifizieren. CAS-Anmeldeinformationen können nicht verwendet werden, um diese Anforderungen zu authentifizieren. Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Wenn du CAS konfigurierst, verwenden Personen mit Konten auf deinem Identitätsanbieter (IdP) keine Benutzerlizenz, bis sich die Person bei {% data variables.product.product_location %} anmeldet.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Grundlegendes für Benutzernamen bei CAS

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Weitere Informationen findest du unter [Benutzernamenüberlegungen für die externe Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

## CAS-Attribute

Die folgenden Attribute sind verfügbar.

| Attributname           | type     | Beschreibung |
|--------------------------|----------|-------------|
| `username`               | Erforderlich | Der {% data variables.product.prodname_ghe_server %}-Benutzername. |

## CAS konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. Wähle **CAS** aus.

   ![Screenshot der Auswahl von CAS für die Authentifizierung](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Screenshot der integrierten Fallback-Authentifizierungsoption für CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. Gib im Feld **Server-URL** die vollständige URL deines CAS-Servers ein. Wenn dein CAS-Server ein Zertifikat verwendet, das von {% data variables.product.prodname_ghe_server %} nicht validiert werden kann, kannst du den Befehl `ghe-ssl-ca-certificate-install` ausführen, um es als ein vertrauenswürdiges Zertifikat zu installieren. Weitere Informationen findest du unter [Befehlszeilenprogramme](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install).
