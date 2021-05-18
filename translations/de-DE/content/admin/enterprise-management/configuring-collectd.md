---
title: collectd konfigurieren
intro: '{% data variables.product.prodname_enterprise %} kann Daten mit „collectd“ erfassen und an einen externen „collectd“-Server senden. Neben anderen Kennzahlen erfassen wir einen Standarddatensatz wie CPU-Auslastung, Arbeitsspeicher- und Festplattennutzung, Traffic und Fehler der Netzwerkschnittstelle sowie die Gesamtauslastung der VM.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd/
  - /enterprise/admin/enterprise-management/configuring-collectd
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
---

### Externen `collectd`-Server einrichten

Falls Sie noch keinen externen `collectd`-Server eingerichtet haben, müssen Sie dies erledigen, bevor Sie die `collectd`-Weiterleitung auf {% data variables.product.product_location %} aktivieren. Your `collectd` server must be running `collectd` version 5.x or higher.

1. Melden Sie sich bei Ihrem `collectd`-Server an.
2. Erstellen Sie die `collectd`-Konfigurationsdatei, oder bearbeiten Sie sie so, dass das Netzwerk-Plug-in geladen und in die Server- und Portdirektiven die entsprechenden Werte eingetragen werden. Auf den meisten Distributionen befindet sie sich unter `/etc/collectd/collectd.conf`.

*collectd.conf*-Beispieldatei zum Ausführen eines `collectd`-Servers:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

### collectd-Weiterleitung auf {% data variables.product.prodname_enterprise %} aktivieren

Die `collectd`-Weiterleitung ist auf {% data variables.product.prodname_enterprise %} standardmäßig deaktiviert. Befolgen Sie die Schritte zum Aktivieren und Konfigurieren der `collectd`-Weiterleitung:

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Wählen Sie unterhalb der Einstellungen für die Protokollweiterleitung **Enable collectd forwarding** (collectd-Weiterleitung aktivieren) aus.
1. Geben Sie im Feld **Server address** (Serveradresse) die Adresse des `collectd`-Servers ein, an den die Statistiken der {% data variables.product.prodname_enterprise %}-Appliance weitergeleitet werden sollen.
1. Geben Sie im Feld **Port** den Port ein, der verwendet wurde, um eine Verbindung zum `collectd`-Server herzustellen. (Der Standardwert ist 25826)
1. Wählen Sie im Dropdownmenü **Cryptographic setup** (Kryptografische Einrichtung) die Sicherheitsebene für die Kommunikationen mit dem `collectd`-Server aus. (None, signed packets, or encrypted packets.)
{% data reusables.enterprise_management_console.save-settings %}

### collectd-Daten mit `ghe-export-graphs` exportieren

Das Befehlszeilentool `ghe-export-graphs` exportiert die Daten, die von `collectd` in RRD-Datenbanken gespeichert werden. Dieser Befehl wandelt die Daten in das XML-Format um und exportiert sie in einer einzelnen Tarball-Datei (.tgz).

Sein Hauptzweck besteht darin, dem {% data variables.contact.contact_ent_support %}-Team Daten über die Leistung einer VM zur Verfügung zu stellen, ohne dass ein vollständiges Support-Bundle heruntergeladen werden muss. Er sollte nicht in Ihre regulären Backup-Exporte aufgenommen werden und bietet kein Gegenstück zum Import. Wenn Sie {% data variables.contact.contact_ent_support %} kontaktieren, werden Sie zur Fehlerbehebung ggf. gebeten, diese Daten anzugeben.

#### Beispiel

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

### Problemlösungen

#### Der zentrale collectd-Server empfängt keine Daten.

{% data variables.product.prodname_enterprise %} ships with `collectd` version 5.x. `collectd` 5.x is not backwards compatible with the 4.x release series. Ihr zentraler `collectd`-Server muss mindestens Version 5.x aufweisen, um von {% data variables.product.product_location %} gesendete Daten zu akzeptieren.

Unterstützung zu weiteren Fragen oder Problemen erhältst Du vom {% data variables.contact.contact_ent_support %}.
