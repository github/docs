---
title: Aktivieren von verschlüsselten Assertionen
shortTitle: Enable encrypted assertions
intro: 'Du kannst die Sicherheit von {% data variables.product.product_location %} mit SAML Single Sign-On (SSO) verbessern, indem du die Nachrichten verschlüsselst, die dein SAML-Identitätsanbieter sendet.'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
ms.openlocfilehash: ecb60a4398993155fa7498f26e7628660e88e54a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063778'
---
## Informationen zu verschlüsselten Assertionen

Wenn dein IdP die Verschlüsselung von SAML-Assertionen unterstützt, kannst du verschlüsselte Assertionen in {% data variables.product.product_name %} konfigurieren und so während des Authentifizierungsprozesses erhöhte Sicherheit gewährleisten.

## Voraussetzungen

Um verschlüsselte Assertionen für die Authentifizierung auf {% data variables.product.product_name %} zu aktivieren, musst du die SAML-Authentifizierung konfigurieren, und dein IdP muss verschlüsselte Assertionen unterstützen.

## Aktivieren von verschlüsselten Assertionen

Um verschlüsselte Assertionen zu aktivieren, musst du dem IdP das öffentliche Zertifikat von {% data variables.product.product_location %} bereitstellen und Verschlüsselungseinstellungen konfigurieren, die dem IdP entsprechen.

{% note %}

**Hinweis**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Aktiviere optional SAML-Debugging. Beim SAML-Debugging werden ausführliche Einträge im Authentifizierungsprotokoll von {% data variables.product.product_name %} aufgezeichnet. Dies hilft Ihnen möglicherweise bei der Problembehandlung im Fall fehlgeschlagener Authentifizierungsversuche. Weitere Informationen findest du unter [Problembehandlung bei der SAML-Authentifizierung](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging).
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Wähle **Require encrypted assertions** (Verschlüsselte Assertionen erforderlich) aus.

   ![Screenshot des Kontrollkästchens „Enable encrypted assertions“ (Verschlüsselte Assertionen aktivieren) im Abschnitt „Authentication“ (Authentifizierung) der Verwaltungskonsole](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. Klicke rechts neben „Encryption Certificate“ (Verschlüsselungszertifikat) auf **Download** (Herunterladen), um eine Kopie des öffentlichen Zertifikats von {% data variables.product.product_location %} auf dem lokalen Computer zu speichern.

   ![Screenshot der Schaltfläche „Download“ (Herunterladen) für öffentliche Zertifikate für verschlüsselte Assertionen](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Melde dich als Administrator bei deinem SAML-IdP an.
1. Aktiviere in der Anwendung für {% data variables.product.product_location %} verschlüsselte Assertionen.
   - Beachte die Verschlüsselungsmethode und die Schlüsseltransportmethode.
   - Stelle das öffentliche Zertifikat bereit, das du in Schritt 7 heruntergeladen hast.
1. Kehre zur Verwaltungskonsole in {% data variables.product.product_location %} zurück.
1. Wähle rechts neben „Encryption Method“ (Verschlüsselungsmethode) die Verschlüsselungsmethode für deinen IdP aus Schritt 9 aus.

   ![Screenshot von „Encryption Method“ (Verschlüsselungsmethode) für verschlüsselte Assertionen](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. Wähle rechts neben „Key Transport Method“ (Schlüsseltransportmethode) die Schlüsseltransportmethode für deinen IdP aus Schritt 9 aus.

   ![Screenshot von „Key Transport Method“ (Schlüsseltransportmethode) für verschlüsselte Assertionen](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Klicke auf **Save settings** (Einstellungen speichern).
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

Wenn du SAML-Debugging aktiviert hast, um die Authentifizierung mit verschlüsselten Assertionen zu testen, deaktiviere SAML-Debugging, wenn du mit dem Testen fertig bist. Weitere Informationen findest du unter [Problembehandlung bei der SAML-Authentifizierung](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging).
