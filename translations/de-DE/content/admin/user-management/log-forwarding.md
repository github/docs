---
title: Protokollweiterleitung
intro: '{% data variables.product.product_name %} uses `syslog-ng` to forward {% if enterpriseServerVersions contains currentVersion %}system{% elsif currentVersion == "github-ae@latest" %}Git{% endif %} and application logs to the server you specify.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Unternehmen
---

Unterstützt werden Protokollsammlungssysteme, die Protokollstreams im Syslog-Stil unterstützen (z. B. [Logstash](http://logstash.net/) und [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

### Protokollweiterleitung aktivieren

{% if enterpriseServerVersions contains currentVersion %}
1. Klicken Sie auf der Seite mit den Einstellungen der {% data variables.enterprise.management_console %} auf der linken Seitenleiste auf **Monitoring** (Überwachung).
1. Wählen Sie **Enable log forwarding** (Protokollweiterleitung aktivieren) aus.
1. Geben Sie im Feld **Server address** (Serveradresse) die Adresse des Servers ein, an den Sie Protokolle weiterleiten möchten. Sie können mehrere Adressen in einer kommagetrennten Liste angeben.
1. Wählen Sie im Dropdownmenü „Protocol“ (Protokoll) das Protokoll aus, das für die Kommunikation mit dem Protokollserver verwendet werden soll. Das Protokoll wird auf alle angegebenen Protokollziele angewendet.
1. Wählen Sie **Enable TLS** (TLS aktivieren) aus.
1. Klicken Sie auf **Choose File** (Datei auswählen), und wählen Sie ein CA-Zertifikat aus, um die Kommunikation zwischen Syslog-Endpunkten zu verschlüsseln. Die gesamte Zertifikatkette wird validiert und muss in einem Root-Zertifikat beendet werden. Weitere Informationen finden Sie in der Dokumentation zu den „[TLS-Optionen in syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)“.
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under {% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **Log forwarding**. ![Log forwarding tab](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Under "Log forwarding", select **Enable log forwarding**. ![Checkbox to enable log forwarding](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Under "Server address", enter the address of the server you want to forward logs to. ![Server address field](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Use the "Protocol" drop-down menu, and select a protocol. ![Protocol drop-down menu](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Optionally, to enable TLS encrypted communication between syslog endpoints, select **Enable TLS**. ![Checkbox to enable TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Under "Public certificate", paste your x509 certificate. ![Text box for public certificate](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Klicke auf **Save** (Speichern). ![Save button for log forwarding](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Problemlösungen
If you run into issues with log forwarding, contact

{% data variables.contact.contact_ent_support %} and attach the output file from `http(s)://[hostname]/setup/diagnostics` to your email.
{% endif %}
