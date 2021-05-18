---
title: Überwachung mittels SNMP
intro: '{% data variables.product.prodname_enterprise %} bietet Daten zur Disk-Nutzung, CPU-Auslastung, Arbeitsspeichernutzung und mehr über SNMP.'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp/
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
---

SNMP ist ein allgemeiner Standard zum Überwachen von Geräten über ein Netzwerk. Es wird dringend empfohlen, SNMP zu aktivieren, damit Sie den Zustand von {% data variables.product.product_location %} überwachen können und wissen, wann Sie der Host-Maschine Arbeitsspeicher, Storage oder Prozessorleistung hinzufügen müssen.

{% data variables.product.prodname_enterprise %} weist eine SNMP-Standardinstallation auf. Daher können Sie von [vielen Plug-ins](http://www.monitoring-plugins.org/doc/man/check_snmp.html) profitieren, die für Nagios oder andere Überwachungssysteme verfügbar sind.

### SNMP v2c konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. Geben Sie im Feld **Community string** (Community-String) einen neuen Community-String ein. Wird das Feld leer gelassen, ist der Standardwert `public` (öffentlich). ![Feld zum Hinzufügen des Community-Strings](/assets/images/enterprise/management-console/community-string.png)
{% data reusables.enterprise_management_console.save-settings %}
5. Testen Sie Ihre SNMP-Konfiguration. Führen Sie dazu den folgenden Befehl auf einer separaten Workstation mit SNMP-Unterstützung in Ihrem Netzwerk aus:
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

Hiermit wird die Systemzeit auf dem {% data variables.product.product_location %}-Host zurückgegeben.

### Benutzerbasierte Sicherheit

Wenn Sie SNMP v3 aktivieren, können Sie durch das Benutzersicherheitsmodell (User Security Model, USM) von der erhöhten benutzerbasierten Sicherheit profitieren. Für jeden eindeutigen Benutzer können Sie eine Sicherheitsebene angeben:
- `noAuthNoPriv`: Diese Sicherheitsebene bietet weder Authentifizierung noch Datenschutz.
- `authNoPriv`: Diese Sicherheitsebene bietet Authentifizierung, aber keinen Datenschutz. Zum Abrufen der Appliance benötigen Sie einen Benutzernamen und ein Passwort (das mindestens aus acht Zeichen bestehen muss). Informationen werden ähnlich wie bei SNMPv2 unverschlüsselt gesendet. Das Authentifizierungsprotokoll kann MD5 oder SHA sein und lautet standardmäßig SHA.
- `authPriv`: Diese Sicherheitsebene bietet Authentifizierung mit Datenschutz. Die Authentifizierung, einschließlich eines mindestens aus acht Zeichen bestehenden Authentifizierungspassworts, ist erforderlich, und Antworten sind verschlüsselt. Ein Datenschutzpasswort ist nicht erforderlich. Wenn es angegeben wird, muss es jedoch mindestens aus acht Zeichen bestehen. Wenn kein Datenschutzpasswort angegeben wird, wird das Authentifizierungspasswort verwendet. Das Datenschutzpasswort kann DES oder AES sein und lautet standardmäßig AES.

### Benutzer für SNMP v3 konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. Wählen Sie **SNMP v3**. ![Schaltfläche zum Aktivieren von SNMP v3](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. Geben Sie unter „Username“ (Benutzername) den eindeutigen Benutzernamen Ihres SNMP v3-Benutzers ein. ![Feld zur Eingabe des SNMP v3-Benutzernamens](/assets/images/enterprise/management-console/snmpv3-username.png)
6. Klicken Sie im Dropdownmenü **Security Level** (Sicherheitsebene) auf die Sicherheitsebene für Ihren SNMP v3-Benutzer. ![Dropdownmenü für die Sicherheitsebene des SNMP v3-Benutzers](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. Für SNMP v3-Benutzer mit der Sicherheitsebene `authnopriv`: ![Einstellungen für die Sicherheitsebene „authnopriv“](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. Für SNMP v3-Benutzer mit der Sicherheitsebene `authpriv`: ![Einstellungen für die Sicherheitsebene „authpriv“](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - Geben Sie optional unter „Privacy password“ (Datenschutzpasswort) das Datenschutzpasswort ein.
    - Klicken Sie auf der rechten Seite von „Privacy password“ (Datenschutzpasswort) im Dropdownmenü **Protocol** (Protokoll) auf die gewünschte Datenschutzprotokollmethode.
9. Klicken Sie auf **Add user** (Benutzer hinzufügen). ![Schaltfläche zum Hinzufügen des SNMP v3-Benutzers](/assets/images/enterprise/management-console/snmpv3-adduser.png)
{% data reusables.enterprise_management_console.save-settings %}

##### SNMP-Daten abfragen

Informationen auf Hardware- und Softwareebene zu Ihrer Appliance sind mit SNMP v3 verfügbar. Due to the lack of encryption and privacy for the `noAuthNoPriv` and `authNoPriv` security levels, we exclude the `hrSWRun` table (1.3.6.1.2.1.25.4) from the resulting SNMP reports. Diese Tabelle wird eingeschlossen, wenn Sie die Sicherheitsebene `authPriv` verwenden. For more information, see the "[OID reference documentation](http://oidref.com/1.3.6.1.2.1.25.4)."

Mit SNMP v2c stehen nur Informationen auf Hardwareebene zu Ihrer Appliance zur Verfügung. Die Anwendungen und Dienste innerhalb von {% data variables.product.prodname_enterprise %} weisen keine OIDs auf, die für das Melden von Kennzahlen konfiguriert sind. Es stehen verschiedene MIBs zur Verfügung. Diese können Sie anzeigen, indem Sie `snmpwalk` auf einer separaten Workstation mit SNMP-Unterstützung in Ihrem Netzwerk ausführen:

```shell
# „community-string“ ist Ihr Community-String
# „hostname“ ist die IP oder Domain Ihrer Enterprise-Instanz
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

Of the available MIBs for SNMP, the most useful is `HOST-RESOURCES-MIB` (1.3.6.1.2.1.25). Einige wichtige Informationen in dieser MIB finden Sie in der folgenden Tabelle:

| Name                       | OID                      | Beschreibung                                                                             |
| -------------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| hrSystemDate.2             | 1.3.6.1.2.1.25.1.2       | Die Hostnotation des lokalen Datums und der Tageszeit.                                   |
| hrSystemUptime.0           | 1.3.6.1.2.1.25.1.1.0     | Der Zeitraum seit der letzten Initialisierung des Hosts.                                 |
| hrMemorySize.0             | 1.3.6.1.2.1.25.2.2.0     | Der verfügbare RAM auf dem Host.                                                         |
| hrSystemProcesses.0        | 1.3.6.1.2.1.25.1.6.0     | Die Anzahl der derzeit auf dem Host geladenen oder ausgeführten Prozesskontexte.         |
| hrStorageUsed.1            | 1.3.6.1.2.1.25.2.3.1.6.1 | Die auf dem Host in Anspruch genommene Speicherkapazität, in „hrStorageAllocationUnits“. |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | Die Größe in Bytes einer „hrStorageAllocationUnit“.                                      |

Um beispielsweise `hrMemorySize` mit SNMP v3 abzufragen, führen Sie auf einer separaten Workstation mit SNMP-Unterstützung in Ihrem Netzwerk den folgenden Befehl aus:
```shell
# „username“ ist der eindeutige Benutzername Ihres SNMP v3-Benutzers
# „auth password“ ist das Authentifizierungspasswort
# „privacy password“ ist das Datenschutzpasswort
# „hostname“ ist die IP oder Domain Ihrer Enterprise-Instanz
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

Führen Sie mit SNMP v2c, um `hrMemorySize` abzufragen, den folgenden Befehl auf einer separaten Workstation mit SNMP-Unterstützung in Ihrem Netzwerk aus:
```shell
# „community-string“ ist Ihr Community-String
# „hostname“ ist die IP oder Domain Ihrer Enterprise-Instanz
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**Note:** To prevent leaking information about services running on your appliance, we exclude the `hrSWRun` table (1.3.6.1.2.1.25.4) from the resulting SNMP reports unless you're using the `authPriv` security level with SNMP v3. Bei Verwendung der Sicherheitsebene `authPriv` wird die Tabelle `hrSWRun` einbezogen.

{% endtip %}

Weitere Informationen zu OID-Zuordnungen für allgemeine Systemattribute in SNMP finden Sie unter „[Linux SNMP OID’s for CPU, Memory and Disk Statistics](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html)“.
