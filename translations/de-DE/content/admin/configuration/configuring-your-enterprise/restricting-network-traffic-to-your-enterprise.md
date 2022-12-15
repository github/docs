---
title: Einschränken des Netzwerkdatenverkehrs in deinem Unternehmen
shortTitle: Restricting network traffic
intro: Du kannst mit einer IP-Zulassungsliste den Zugriff auf dein Unternehmen auf Verbindungen von angegebenen IP-Adressen einschränken.
versions:
  ghae: '*'
type: how_to
topics:
- Access management
- Enterprise
- Fundamentals
- Networking
- Security
redirect_from:
- /admin/configuration/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 67c7067362ac94e5cbc64be4704ba0ec3f6606e0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682852"
---
## Informationen zu Listen zugelassener IP-Adressen

Standardmäßig können autorisierte Benutzer von einer beliebigen IP-Adresse aus auf dein Unternehmen zugreifen. Enterprise-Inhaber können den Zugriff auf Objekte im Besitz von Organisationen in Enterprise-Konten einschränken, indem sie eine Zulassungsliste für spezifische IP-Adressen konfigurieren. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

Du kannst auch zugelassene IP-Adressen für eine einzelne Organisation konfigurieren. Weitere Informationen findest du unter [Verwalten zulässiger IP-Adressen für deine Organisation](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization).

Standardmäßig werden die Ports 22, 80, 443 und 25 durch die Azure-NSG-Regeln (Network Security Group, Netzwerksicherheitsgruppe) für den gesamten eingehenden Datenverkehr geöffnet. Unternehmensbesitzer können sich an den {% data variables.contact.github_support %} wenden, um Zugangsbeschränkungen für ihre Instanz zu konfigurieren.

Für Einschränkungen auf Instanzebene mithilfe von Azure-Netzwerksicherheitsgruppen kontaktierst du den {% data variables.contact.github_support %} und gibst die IP-Adressen an, die auf deine Unternehmensinstanz zugreifen dürfen sollen. Gib die Adressbereiche im Standardformat CIDR (Classless Inter-Domain Routing, klassenloses domänenübergreifendes Routing) an. {% data variables.contact.github_support %} konfiguriert die geeigneten Firewallregeln für dein Unternehmen, um den Netzwerkzugriff über HTTP, SSH, HTTPS und SMTP zu beschränken. Weitere Informationen findest du unter [Anfordern von Unterstützung beim {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).

## Eine zugelassene IP-Adresse hinzufügen

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Zulassen des Zugriffs durch {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## Zugelassene IP-Adressen aktivieren

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Wähle unter „Liste zugelassener IP-Adressen“ die Option **Liste zugelassener IP-Adressen aktivieren** aus.
  ![Kontrollkästchen zum Zulassen von IP-Adressen](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Klicken Sie auf **Speichern**.

## Eine zugelassene IP-Adresse bearbeiten

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Klicken Sie auf **Aktualisieren**.
{% data reusables.identity-and-permissions.check-ip-address %}

{% ifversion ip-allow-list-address-check %}
## Überprüfen, ob eine IP-Adresse zulässig ist

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %} {% endif %}

## Eine zugelassene IP-Adresse löschen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## {% data variables.product.prodname_actions %} mit einer IP-Zulassungsliste verwenden

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
