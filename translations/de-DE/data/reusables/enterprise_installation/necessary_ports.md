---
ms.openlocfilehash: 99be41c3a31f1602c08160b3c552e2686820974d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145102367"
---
| Port | Dienst | Beschreibung                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | Git über SSH-Zugriff. Unterstützt das Klonen, Abrufen und Übertragen von Vorgängen an öffentliche/private Repositorys. |
| 25   | SMTP    | SMTP mit Verschlüsselung (STARTTLS) wird unterstützt. |
| 80   | HTTP    | Webanwendungszugriff. *Alle Anforderungen werden an den HTTPS-Port weitergeleitet, wenn SSL aktiviert ist.* |
| 122  | SSH     | Shellzugriff auf die Instanz. *Der standardmäßige SSH-Port (22) ist für den Git- und SSH-Netzwerkdatenverkehr der Anwendung vorgesehen.* |
| 161/UDP | SNMP | Für Netzwerküberwachungs-Protokollvorgänge erforderlich. |
| 443  | HTTPS   | Webanwendung und Git über HTTPS-Zugriff. |
| 1194/UDP | VPN | Sicherer Replikationsnetzwerktunnel in einer hochverfügbaren Konfiguration. |
| 8080 | HTTP    | Webbasierte {% data variables.enterprise.management_console %} in Nur-Text. *Nur erforderlich, wenn SSL manuell deaktiviert wird.* |
| 8443 | HTTPS   | Sichere webbasierte {% data variables.enterprise.management_console %}. *Für die grundlegende Installation und Konfiguration erforderlich.* |
| 9418 | Git     | Einfacher Git-Protokollport. Nur Klon- und Abrufvorgänge zu öffentlichen Repositorys. *Unverschlüsselte Netzwerkkommunikation.* {% data reusables.enterprise_installation.when-9418-necessary %}  |
