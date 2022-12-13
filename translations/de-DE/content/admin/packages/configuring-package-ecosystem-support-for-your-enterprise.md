---
title: Konfigurieren der Paketökosystemunterstützung für dein Unternehmen
intro: 'Du kannst {% data variables.product.prodname_registry %} für dein Unternehmen konfigurieren, indem du einzelne Paketökosysteme einschließlich {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker und npm in deinem Unternehmen global aktivierst oder deaktivierst. Erfahre mehr über andere Konfigurationsanforderungen, um bestimmte Paketökosysteme zu unterstützen.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
ms.openlocfilehash: 83de80e4233f671a7a923394d2fd3f6e554bba10
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147062546'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Aktivieren oder Deaktivieren einzelner Paketökosysteme

Um zu verhindern, dass neue Pakete hochgeladen werden, kannst du ein Ökosystem einrichten, das du zuvor auf **Schreibgeschützt** festgelegt hast, wobei weiterhin vorhandene Pakete heruntergeladen werden können.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Wähle unter „Ökosystem-Umschaltflächen“ für jeden Pakettyp **Aktiviert**, **Schreibgeschützt** oder **Deaktiviert** aus.
   {%- ifversion ghes > 3.4 %}{% note -%} **Hinweis:** Die Unterdomänenisolation muss aktiviert sein, um die Optionen für die {% data variables.product.prodname_container_registry %} umzuschalten.
   {%- endnote %}{%- endif %}{%- ifversion ghes %} ![Ökosystem-Umschaltflächen](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %} ![Ökosystem-Umschaltflächen](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## Herstellen einer Verbindung mit der offiziellen npm-Registrierung

Wenn du npm-Pakete für dein Unternehmen aktiviert hast und den Zugriff auf die offizielle npm-Registrierung sowie die {% data variables.product.prodname_registry %}-npm-Registrierung gewähren möchtest, musst du einige zusätzliche Konfigurationen durchführen.

{% data variables.product.prodname_registry %} verwendet einen transparenten Proxy für Netzwerkdatenverkehr, der eine Verbindung mit der offiziellen npm-Registrierung unter `registry.npmjs.com` herstellt. Der Proxy ist standardmäßig aktiviert und kann nicht deaktiviert werden.

Um Netzwerkverbindungen mit der npm-Registrierung zuzulassen, musst du Netzwerk-ACLs konfigurieren, damit {% data variables.product.prodname_ghe_server %} HTTPS-Datenverkehr über Port 443 an `registry.npmjs.com` senden kann:

| `Source` | Destination | Port | type |
|---|---|---|---|
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

Beachte, dass Verbindungen mit `registry.npmjs.com` das Cloudflare-Netzwerk durchlaufen und folglich keine Verbindung mit einer statischen IP-Adresse herstellen. Stattdessen wird eine Verbindung mit einer IP-Adresse innerhalb der unter https://www.cloudflare.com/ips/ aufgeführten CIDR-Bereiche hergestellt.

Wenn du npm-Upstreamquellen aktivieren möchtest, wähle `Enabled` für `npm upstreaming` aus.

{% endif %}

## Nächste Schritte

Danach wird empfohlen, zu überprüfen, ob du ein TLS-Zertifikat für deine Pakethost-URL aktualisieren oder hochladen musst. Weitere Informationen findest du unter [Erste Schritte mit GitHub Packages für dein Unternehmen](/admin/packages/getting-started-with-github-packages-for-your-enterprise).
