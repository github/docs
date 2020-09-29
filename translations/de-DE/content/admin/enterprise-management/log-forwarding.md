---
title: Protokollweiterleitung
intro: '{% data variables.product.prodname_enterprise %} verwendet „syslog-ng“, um System- und Anwendungsprotokolle an den Server weiterzuleiten, den Sie in den {% data variables.enterprise.management_console %}-Einstellungen angegeben haben.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
---

Unterstützt werden Protokollsammlungssysteme, die Protokollstreams im Syslog-Stil unterstützen (z. B. [Logstash](http://logstash.net/) und [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

### Protokollweiterleitung aktivieren

1. Klicken Sie auf der Seite mit den Einstellungen der {% data variables.enterprise.management_console %} auf der linken Seitenleiste auf **Monitoring** (Überwachung).
1. Wählen Sie **Enable log forwarding** (Protokollweiterleitung aktivieren) aus.
1. Geben Sie im Feld **Server address** (Serveradresse) die Adresse des Servers ein, an den Sie Protokolle weiterleiten möchten. Sie können mehrere Adressen in einer kommagetrennten Liste angeben.
1. Wählen Sie im Dropdownmenü „Protocol“ (Protokoll) das Protokoll aus, das für die Kommunikation mit dem Protokollserver verwendet werden soll. Das Protokoll wird auf alle angegebenen Protokollziele angewendet.
1. Wählen Sie **Enable TLS** (TLS aktivieren) aus.
1. Klicken Sie auf **Choose File** (Datei auswählen), und wählen Sie ein CA-Zertifikat aus, um die Kommunikation zwischen Syslog-Endpunkten zu verschlüsseln. Die gesamte Zertifikatkette wird validiert und muss in einem Root-Zertifikat beendet werden. Weitere Informationen finden Sie in der Dokumentation zu den „[TLS-Optionen in syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)“.

### Problemlösungen

Wenden Sie sich bei Protokollweiterleitungsproblemen an den {% data variables.contact.contact_ent_support %}, und hängen Sie die Ausgabedatei von `http(s)://[hostname]/setup/diagnostics` an Ihre E-Mail an.
