---
title: Einschränken des Netzwerkdatenverkehrs in deinem Unternehmen mit einer Liste zugelassener IP-Adressen
shortTitle: Restricting network traffic
intro: 'Du kannst den Zugriff auf dein Unternehmen einschränken und den Zugriff auf deine Ressourcen nur von angegebenen IP-Adressen aus zulassen, indem du eine Liste zugelassener IP-Adressen verwendest.'
permissions: Enterprise owners can configure IP allow lists.
miniTocMaxHeadingLevel: 3
versions:
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 8511499e723fdeb4a2d24c2fce627bce56ad9777
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191894'
---
## Informationen zu Einschränkungen beim Netzwerkdatenverkehr

Standardmäßig können autorisierte Benutzer von einer beliebigen IP-Adresse aus auf dein Unternehmen zugreifen. Du kannst den Zugriff auf Ressourcen {% ifversion ghec %}im Besitz von Organisationen in Enterprise-Konten {% endif %}einschränken, indem du eine Liste zugelassener IP-Adressen konfigurierst. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}

Wenn dein Unternehmen {% data variables.product.prodname_emus %} mit Azure AD und OIDC verwendet, kannst du entscheiden, ob du das Feature für Listen zugelassener IP-Adressen von {% data variables.product.company_short %} oder die Einschränkungen gemäß Zulassungslisten von deinem Identitätsanbieter (IdP) verwenden möchtest. Wenn dein Unternehmen {% data variables.product.prodname_emus %} nicht mit Azure und OIDC verwendet, kannst du das Feature für Listen zugelassener IP-Adressen von {% data variables.product.company_short %} verwenden. 

{% elsif ghae %}

Standardmäßig werden die Ports 22, 80, 443 und 25 durch die Azure-NSG-Regeln (Network Security Group, Netzwerksicherheitsgruppe) für den gesamten eingehenden Datenverkehr geöffnet. Du kannst dich an den {% data variables.contact.github_support %} wenden, um Zugangsbeschränkungen für {% data variables.product.product_name %} zu konfigurieren.

Für Einschränkungen mithilfe von Azure-Netzwerksicherheitsgruppen kontaktierst du den {% data variables.contact.github_support %} und gibst die IP-Adressen an, die auf {% data variables.product.product_name %} zugreifen dürfen sollen. Gib die Adressbereiche im Standardformat CIDR (Classless Inter-Domain Routing, klassenloses domänenübergreifendes Routing) an. {% data variables.contact.github_support %} konfiguriert geeignete Firewallregeln, um den Netzwerkzugriff über HTTP, SSH, HTTPS und SMTP zu beschränken. Weitere Informationen findest du unter [Anfordern von Unterstützung beim {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).

{% endif %}

{% ifversion ghec %}

## Informationen zu Listen zugelassener IP-Adressen von {% data variables.product.company_short %}

Du kannst die Liste zugelassener IP-Adressen von {% data variables.product.company_short %} verwenden, um den Zugriff auf dein Unternehmen und die Ressourcen im Besitz von Organisationen in deinem Unternehmen zu steuern. 

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %} 

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

## Informationen zur Liste zugelassener IP-Adressen deines Identitätsanbieters

Wenn du {% data variables.product.prodname_emus %} mit Azure AD und OIDC verwendest, kannst du die Liste zugelassener IP-Adressen deines Identitätsanbieters verwenden.

Wenn du die Liste zugelassener IP-Adressen deines Identitätsanbieters verwendest, deaktivierst du damit die Konfigurationen der Liste zugelassener IP-Adressen von {% data variables.product.company_short %} für alle Organisationen in deinem Unternehmen und die GraphQL-APIs zum Aktivieren und Verwalten von Listen zugelassener IP-Adressen. 

Standardmäßig führt dein Identitätsanbieter die CAPs bei der anfänglichen interaktiven SAML- oder OIDC-Anmeldung bei {% data variables.product.company_short %} für jede ausgewählte Konfiguration einer Liste zugelassener IP-Adressen aus.

Die OIDC-CAP gilt nur für Anforderungen an die API, die ein Benutzer-zu-Server-Token verwenden, z. B. ein Token für eine {% data variables.product.prodname_oauth_app %} oder eine {% data variables.product.prodname_github_app %} im Namen von Benutzer*innen. Die OIDC-CAP gilt nicht, wenn eine {% data variables.product.prodname_github_app %} ein Server-zu-Server-Token verwendet. Weitere Informationen findest du unter [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-an-installation) und [Informationen zur Unterstützung von Richtlinie für bedingten Zugriff von Identitätsanbietern](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps).

Um eine nahtlose Verwendung der OIDC-CAP zu gewährleisten und gleichzeitig die Richtlinie auf Benutzer-zu-Server-Token anzuwenden, musst du alle IP-Bereiche aus jedem {% data variables.product.prodname_github_app %} kopieren, die dein Unternehmen in seiner IdP-Richtlinie verwendet. 

## Verwenden der Liste zugelassener IP-Adressen von {% data variables.product.company_short %}

### Aktivieren der Liste zugelassener IP-Adressen von {% data variables.product.company_short %}
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Aktiviere unter „Liste zugelassener IP-Adressen“ die Liste zugelassener IP-Adressen. 
   - Wenn du {% data variables.product.prodname_emus %} mit OIDC verwendest, wählst du das Dropdownmenü aus und klickst auf **GitHub**.
      ![Screenshot des Dropdownmenüs mit drei Konfigurationsoptionen für die Liste zugelassener IP-Adressen: „Deaktiviert“, „Identitätsanbieter“ und „GitHub“](/assets/images/help/security/enable-github-ip-allow-list.png)
   
      Wähle **Liste zugelassener IP-Adressen aktivieren** aus.
      ![Screenshot des Kontrollkästchens zum Zulassen von Listen zugelassener IP-Adressen](/assets/images/help/security/enable-ip-allow-list-ghec.png)

   - Wenn du {% data variables.product.prodname_emus %} ohne OIDC verwendest, wählst du **Liste zugelassener IP-Adressen aktivieren** aus.
     ![Screenshot des Kontrollkästchens zum Zulassen von Listen zugelassener IP-Adressen](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
1. Klicke auf **Speichern**.

### Eine zugelassene IP-Adresse hinzufügen

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### Zulassen des Zugriffs durch {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Eine zugelassene IP-Adresse bearbeiten

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Klicke auf **Aktualisieren**.
{% data reusables.identity-and-permissions.check-ip-address %}

### Überprüfen der Zulässigkeit einer IP-Adresse

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

### Eine zugelassene IP-Adresse löschen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Verwenden der Liste zugelassener IP-Adressen deines Identitätsanbieters

{% note %}

**Hinweis:** Die Verwendung der Zulassungsliste deines Identitätsanbieters wird nur für {% data variables.product.prodname_emus %} mit Azure AD und OIDC unterstützt. 

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Wähle unter „Liste zugelassener IP-Adressen“ die Dropdownliste aus, und klicke auf **Identitätsanbieter**.

   ![Screenshot des Dropdownmenüs mit drei Konfigurationsoptionen für die Liste zugelassener IP-Adressen: „Deaktiviert“, „Identitätsanbieter“ und „GitHub“](/assets/images/help/security/enable-identity-provider-ip-allow-list.png)
1. Wähle optional die Option **Skip IdP check for applications** (IdP-Überprüfung für Anwendungen überspringen) aus, damit die installierten {% data variables.product.company_short %} und {% data variables.product.prodname_oauth_apps %} auf dein Unternehmen zugreifen können.

   ![Kontrollkästchen zum Zulassen von IP-Adressen](/assets/images/help/security/ip-allow-list-skip-idp-check.png)
1. Klicke auf **Speichern**.

{% endif %}

{% ifversion ghae %}

## Zugelassene IP-Adressen aktivieren

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Wähle unter „Liste zugelassener IP-Adressen“ die Option **Liste zugelassener IP-Adressen aktivieren** aus.
  ![Kontrollkästchen zum Zulassen von IP-Adressen](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Klicke auf **Speichern**.

## Eine zugelassene IP-Adresse hinzufügen

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Zulassen des Zugriffs durch {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## Eine zugelassene IP-Adresse bearbeiten

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Klicke auf **Aktualisieren**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Überprüfen der Zulässigkeit einer IP-Adresse

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Eine zugelassene IP-Adresse löschen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

{% endif %}

## {% data variables.product.prodname_actions %} mit einer IP-Zulassungsliste verwenden

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
