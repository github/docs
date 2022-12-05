---
title: Protokollweiterleitung
intro: '{% data variables.product.product_name %} verwendet `syslog-ng`, um {% ifversion ghes %}system{% elsif ghae %}Git-{% endif %} und Anwendungsprotokolle an den Server weiterzuleiten, den du angibst.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
  - /admin/user-management/monitoring-activity-in-your-enterprise/log-forwarding
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 935c8f0221c4541d2801a5e705779efff3d34370
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104204'
---
## Informationen zur Protokollweiterleitung

Jedes Protokollsammlungssystem, das „syslog-style“-Protokolldatenströme unterstützt, wird ebenfalls unterstützt (z. B. [Logstash](http://logstash.net/) und [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

Wenn du die Protokollweiterleitung aktivierst, musst du ein Zertifizierungsstellenzertifikat hochladen, um die Kommunikation zwischen Syslog-Endpunkten zu verschlüsseln. Deine Appliance und der Remote-Syslog-Server führen bidirektionales SSL aus, wobei jeweils ein Zertifikat für das andere bereitgestellt und das empfangene Zertifikat überprüft wird.

## Protokollweiterleitung aktivieren

{% ifversion ghes %}
1. Klicke auf der Seite mit den Einstellungen für {% data variables.enterprise.management_console %} in der linken Seitenleiste auf **Überwachung**.
1. Wähle **Protokollweiterleitung aktivieren** aus.
1. Gib im Feld **Serveradresse** die Adresse des Servers ein, an den du Protokolle weiterleiten möchtest. Du kannst mehrere Adressen in einer kommagetrennten Liste angeben.
1. Wähle im Dropdownmenü „Protocol“ (Protokoll) das Protokoll aus, das für die Kommunikation mit dem Protokollserver verwendet werden soll. Das Protokoll wird auf alle angegebenen Protokollziele angewendet.
1. Wähle optional **TLS aktivieren** aus. Wir empfehlen, TLS entsprechend deinen lokalen Sicherheitsrichtlinien zu aktivieren – insbesondere, wenn es zwischen der Appliance und Remoteprotokollservern nicht vertrauenswürdige Netzwerke gibt. 
1. Wenn du die Kommunikation zwischen Syslog-Endpunkten verschlüsseln möchtest, klicke auf **Datei auswählen**, und wähle ein Zertifizierungsstellenzertifikat für den Remote-Syslog-Server aus. Du solltest ein Zertifizierungsstellenpaket mit einer Verkettung der Zertifikate derjenigen Zertifizierungsstellen hochladen, die an der Signatur des Zertifikats für den Remoteprotokollserver beteiligt sind. Die gesamte Zertifikatkette wird validiert und muss in einem Root-Zertifikat beendet werden. Weitere Informationen findest du in der [„syslog-ng“-Dokumentation unter „TLS-Optionen“](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Klicke unter {% octicon "gear" aria-label="The Settings gear" %} **Einstellungen** auf **Protokollweiterleitung**.
  ![Registerkarte „Protokollweiterleitung“](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Wähle unter „Protokollweiterleitung“ die Option **Protokollweiterleitung aktivieren** aus.
  ![Kontrollkästchen zum Aktivieren der Protokollweiterleitung](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Gib unter „Serveradresse“ die Adresse des Servers ein, an den du Protokolle weiterleiten möchtest.
  ![Feld „Serveradresse“](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Wähle im Dropdownmenü „Protokoll“ das gewünschte Protokoll aus.
  ![Dropdownmenü „Protokoll“](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Wenn du TLS-verschlüsselte Kommunikation zwischen Syslog-Endpunkten aktivieren möchtest, wähle optional **TLS aktivieren** aus.
  ![Kontrollkästchen zum Aktivieren von TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Füge unter „Öffentliches Zertifikat“ dein x509-Zertifikat ein.
  ![Textfeld für öffentliches Zertifikat](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Klicken Sie auf **Speichern**.
  ![Schaltfläche „Speichern“ zur Protokollweiterleitung](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png) {% endif %}

{% ifversion ghes %}
## Problembehandlung

Wenn bei der Protokollweiterleitung Probleme auftreten, wende dich an {% data variables.contact.contact_ent_support %}, und füge die Ausgabedatei von `http(s)://[hostname]/setup/diagnostics` an deine E-Mail an.
{% endif %}
