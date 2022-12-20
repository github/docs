---
title: Konfigurieren der Webcommitsignierung
shortTitle: Configure web commit signing
intro: 'Du kannst das automatische Signieren von Commits auf der Webbenutzeroberfläche von {% data variables.product.product_name %} aktivieren.'
versions:
  ghes: '>=3.5'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.product.product_location %}.'
ms.openlocfilehash: 759b158235e5727b474441d10b33016b58277c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068034'
---
## Informationen zur Webcommitsignierung

Wenn du die Webcommitsignierung aktivierst, verwendet {% data variables.product.product_name %} automatisch GPG zum Signieren von Commits, die von Benutzer*innen über die Webschnittstelle von {% data variables.product.product_location %} vorgenommen werden. Die von {% data variables.product.product_name %} signierten Commits haben den Status „Verifiziert“. Weitere Informationen findest du unter [Informationen zur Commitsignaturverifizierung](/authentication/managing-commit-signature-verification/about-commit-signature-verification).

Du kannst die Webcommitsignierung aktivieren, den für die Webcommitsignierung verwendeten privaten Schlüssel rotieren und die Webcommitsignierung deaktivieren.

## Aktivieren der Webcommitsignierung

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Wenn du eine No-Reply-E-Mail-Adresse in der {% data variables.enterprise.management_console %} definiert hast, verwende diese E-Mail-Adresse. Falls dies nicht der Fall ist, kannst du eine beliebige E-Mail-Adresse verwenden (z. B. `web-flow@my-company.com`). Die E-Mail-Adresse muss nicht gültig sein.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Aktiviere die Webcommitsignierung.

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. Wende die Konfiguration an, und warte dann, bis die Konfigurationsausführung abgeschlossen ist.

   ```bash{:copy}
   ghe-config-apply
   ```
1. Erstelle über die integrierte Authentifizierungsmethode oder eine externe Authentifizierungsmethode eine*n neue*n Benutzer*in in {% data variables.product.product_location %}. Weitere Informationen findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).
   - Der Benutzername des Benutzers muss `web-flow` lauten.
   - Die E-Mail-Adresse des Benutzers muss dieselbe Adresse sein, die du für den PGP-Schlüssel verwendet hast. {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %} {% data reusables.enterprise_site_admin_settings.email-settings %}
1. Gib unter „No-Reply-E-Mail-Adresse“ dieselbe E-Mail-Adresse ein, die du für den PGP-Schlüssel verwendet hast. 

   {% note %}

   **Hinweis:** Das Feld „No-Reply-E-Mail-Adresse“ wird nur angezeigt, wenn du eine E-Mail-Adresse für {% data variables.product.product_location %} aktiviert hast. Weitere Informationen findest du unter [Konfigurieren einer E-Mail-Adresse für Benachrichtigungen](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise).

   {% endnote %} {% data reusables.enterprise_management_console.save-settings %}

## Rotieren des für die Webcommitsignierung verwendeten privaten Schlüssels

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Verwende die in der {% data variables.enterprise.management_console %} definierte No-Reply-E-Mail-Adresse, die mit der E-Mail-Adresse für den Benutzer `web-flow` identisch sein sollte.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %} {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Deaktivieren der Webcommitsignierung

Du kannst die Webcommitsignierung für {% data variables.product.product_location %} deaktivieren.

1. Führe in der Verwaltungsshell den folgenden Befehl aus.

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. Wende die Konfiguration an.

   ```bash{:copy}
   ghe-config-apply
   ```
