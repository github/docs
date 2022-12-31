---
title: Überwachung mittels SNMP
intro: '{% data variables.product.prodname_enterprise %} bietet Daten zur Datenträgernutzung, CPU-Auslastung, Arbeitsspeichernutzung und dem SNMP.'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
  - /admin/enterprise-management/monitoring-using-snmp
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: 0f156d2939cbc83e3b0a72bbc1cbaf72f0c886d7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145179152'
---
SNMP ist ein allgemeiner Standard zum Überwachen von Geräten über ein Netzwerk. Es wird dringend empfohlen, SNMP zu aktivieren, damit du die Integrität von {% data variables.product.product_location %} überwachen kannst und weißt, wann dem Hostcomputer Arbeitsspeicher, Speicher oder Prozessorleistung hinzugefügt werden muss.

{% data variables.product.prodname_enterprise %} weist eine SNMP-Standardinstallation auf. Daher kannst du von [vielen Plug-Ins](https://www.monitoring-plugins.org/doc/man/check_snmp.html) profitieren, die für Nagios oder andere Überwachungssysteme verfügbar sind.

## SNMP v2c konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. Gib im Feld **Communityzeichenfolge** eine neue Communityzeichenfolge ein. Wenn das Feld leer bleibt, wird die Standardeinstellung `public` verwendet.
![Feld zum Hinzufügen der Communityzeichenfolge](/assets/images/enterprise/management-console/community-string.png) {% data reusables.enterprise_management_console.save-settings %}
5. Teste deine SNMP-Konfiguration. Führe dazu den folgenden Befehl auf einer separaten Workstation mit SNMP-Unterstützung in deinem Netzwerk aus:
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

Hiermit wird die Systemzeit auf dem {% data variables.product.product_location %}-Host zurückgegeben.

## Benutzerbasierte Sicherheit

Wenn du SNMP v3 aktivierst, kannst du durch das Benutzersicherheitsmodell (User Security Model, USM) von der erhöhten benutzerbasierten Sicherheit profitieren. Für jeden eindeutigen Benutzer kannst du eine Sicherheitsebene angeben:
- `noAuthNoPriv`: Diese Sicherheitsebene bietet weder Authentifizierung noch Datenschutz.
- `authNoPriv`: Diese Sicherheitsebene bietet Authentifizierung, aber keinen Datenschutz. Zum Abrufen der Appliance benötigst du einen Benutzernamen und ein Passwort (das mindestens aus acht Zeichen bestehen muss). Informationen werden ähnlich wie bei SNMPv2 unverschlüsselt gesendet. Das Authentifizierungsprotokoll kann MD5 oder SHA sein und lautet standardmäßig SHA.
- `authPriv`: Diese Sicherheitsebene bietet Authentifizierung mit Datenschutz. Die Authentifizierung, einschließlich eines mindestens aus acht Zeichen bestehenden Authentifizierungspassworts, ist erforderlich, und Antworten sind verschlüsselt. Ein Datenschutzpasswort ist nicht erforderlich. Wenn es angegeben wird, muss es jedoch mindestens aus acht Zeichen bestehen. Wenn kein Datenschutzpasswort angegeben wird, wird das Authentifizierungspasswort verwendet. Das Datenschutzpasswort kann DES oder AES sein und lautet standardmäßig AES.

## Benutzer für SNMP v3 konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. Wähle **SNMP v3** aus.
![Schaltfläche zum Aktivieren von SNMP v3](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. Gib unter „Username“ (Benutzername) den eindeutigen Benutzernamen deines SNMP v3-Benutzers ein.
![Feld zur Eingabe des SNMP v3-Benutzernamens](/assets/images/enterprise/management-console/snmpv3-username.png)
6. Klicke im Dropdownmenü **Sicherheitsebene** auf die Sicherheitsebene für deinen SNMP v3-Benutzer.
![Dropdownmenü für die Sicherheitsebene des SNMP v3-Benutzers](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. Für SNMP v3-Benutzer mit der Sicherheitsebene `authnopriv`: ![Einstellungen für die Sicherheitsebene „authnopriv“](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. Für SNMP v3-Benutzer mit der Sicherheitsebene `authpriv`: ![Einstellungen für die Sicherheitsebene „authpriv“](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - Gib optional unter „Privacy password“ (Datenschutzpasswort) das Datenschutzpasswort ein.
    - Klicke auf der rechten Seite von „Datenschutzpasswort“ im Dropdownmenü **Protokoll** auf die gewünschte Datenschutzprotokollmethode.
9. Klicke auf **Benutzer hinzufügen**.
![Schaltfläche zum Hinzufügen eines SNMP v3-Benutzers](/assets/images/enterprise/management-console/snmpv3-adduser.png) {% data reusables.enterprise_management_console.save-settings %}

#### SNMP-Daten abfragen

Mit SNMP v3 sind Hardware- und Softwareinformationen zu deiner Appliance verfügbar. Da für die Sicherheitsebenen `noAuthNoPriv` und `authNoPriv` keine Verschlüsselung und kein Datenschutz vorgesehen sind, wird die Tabelle `hrSWRun` (1.3.6.1.2.1.25.4) aus den resultierenden SNMP-Berichten ausgeschlossen. Diese Tabelle wird eingeschlossen, wenn du die Sicherheitsebene `authPriv` verwendest. Weitere Informationen findest du in der [OID-Referenzdokumentation](https://oidref.com/1.3.6.1.2.1.25.4). 

Mit SNMP v2c stehen nur Hardwareinformationen zu deiner Appliance zur Verfügung. Die Anwendungen und Dienste innerhalb von {% data variables.product.prodname_enterprise %} weisen keine OIDs auf, die für das Melden von Kennzahlen konfiguriert sind. Es stehen verschiedene MIBs zur Verfügung. Diese kannst du anzeigen, indem du `snmpwalk` auf einer separaten Arbeitsstation mit SNMP-Unterstützung in deinem Netzwerk ausführst:

```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

Von den verfügbaren MIBs für SNMP ist `HOST-RESOURCES-MIB` (1.3.6.1.2.1.25) am nützlichsten. Einige wichtige Informationen in dieser MIB findest du in der folgenden Tabelle:

| Name | OID | BESCHREIBUNG |
| ---- | --- | ----------- |
| hrSystemDate.2 | 1.3.6.1.2.1.25.1.2 | Die Hostnotation des lokalen Datums und der Tageszeit. |
| hrSystemUptime.0 | 1.3.6.1.2.1.25.1.1.0 | Der Zeitraum seit der letzten Initialisierung des Hosts. |
| hrMemorySize.0 | 1.3.6.1.2.1.25.2.2.0 | Der verfügbare RAM auf dem Host. |
| hrSystemProcesses.0 | 1.3.6.1.2.1.25.1.6.0 | Die Anzahl der derzeit auf dem Host geladenen oder ausgeführten Prozesskontexte. |
| hrStorageUsed.1 | 1.3.6.1.2.1.25.2.3.1.6.1 | Die auf dem Host in Anspruch genommene Speicherkapazität, in „hrStorageAllocationUnits“. |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | Die Größe in Bytes einer „hrStorageAllocationUnit“. |

Um beispielsweise `hrMemorySize` mit SNMP v3 abzufragen, führe auf einer separaten Arbeitsstation mit SNMP-Unterstützung in deinem Netzwerk den folgenden Befehl aus:
```shell
# username is the unique username of your SNMP v3 user
# auth password is the authentication password
# privacy password is the privacy password
# hostname is the IP or domain of your Enterprise instance
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

Um `hrMemorySize` mit SNMP v2c abzufragen, führe auf einer separaten Arbeitsstation mit SNMP-Unterstützung in deinem Netzwerk den folgenden Befehl aus:
```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**Hinweis**: Um die Offenlegung von Informationen zu den auf deiner Appliance ausgeführten Diensten zu verhindern, wird die Tabelle `hrSWRun` (1.3.6.1.2.1.25.4) aus den resultierenden SNMP-Berichten ausgeschlossen, es sei denn, du verwendest die Sicherheitsebene `authPriv` mit SNMP v3. Wenn du die Sicherheitsebene `authPriv` verwendest, wird die Tabelle `hrSWRun` eingeschlossen.

{% endtip %}

Weitere Informationen zu OID-Zuordnungen für allgemeine Systemattribute in SNMP findest du unter [Linux-SNMP-OIDs für CPU-, Arbeitsspeicher- und Datenträgerstatistiken](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html).
