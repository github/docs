---
title: collectd konfigurieren
intro: '{% data variables.product.prodname_enterprise %} kann Daten mit `collectd` erfassen und an einen externen `collectd`-Server senden. Neben anderen Metriken erfassen wir einen Standarddatensatz wie CPU-Auslastung, Arbeitsspeicher- und Festplattennutzung, Datenverkehr und Fehler der Netzwerkschnittstelle sowie die Gesamtauslastung der VM.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: f63eb940681be3131a470a7786e134550fdba152
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106855'
---
## Einen externen `collectd`-Server einrichten

Wenn du noch keinen externen `collectd`-Server eingerichtet hast, musst du dies tun, bevor du die `collectd`-Weiterleitung für {% data variables.product.product_location %} aktivierst. Dein `collectd`-Server muss `collectd` Version 5.x oder höher ausführen.

1. Melde dich bei deinem `collectd`-Server an.
2. Erstelle oder bearbeite die `collectd`-Konfigurationsdatei so, dass das Netzwerk-Plug-In geladen und die Server- und Portanweisungen mit den entsprechenden Werten aufgefüllt werden. In den meisten Distributionen befindet sich dies in `/etc/collectd/collectd.conf`.

Ein Beispiel für *collectd.conf* zur Ausführung eines `collectd`-Servers:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## collectd-Weiterleitung auf {% data variables.product.prodname_enterprise %} aktivieren

Standardmäßig ist die `collectd`-Weiterleitung für {% data variables.product.prodname_enterprise %} deaktiviert. Führe die folgenden Schritte aus, um die `collectd`-Weiterleitung zu aktivieren und zu konfigurieren:

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. Wähle unterhalb der Protokollweiterleitungseinstellungen die Option **collectd-Weiterleitung aktivieren** aus.
1. Gib im Feld **Serveradresse** die Adresse des `collectd`-Servers ein, an den du Statistiken der {% data variables.product.prodname_enterprise %}-Appliance weiterleiten möchtest.
1. Gib im Feld **Port** den Port ein, der zum Herstellen einer Verbindung mit dem `collectd`-Server verwendet wird. (Der Standardwert ist 25826)
1. Wähle im Dropdownmenü **Kryptografieeinrichtung** die Sicherheitsstufe der Kommunikation mit dem `collectd`-Server aus. (Ohne, signierte Pakete oder verschlüsselte Pakete.) {% data reusables.enterprise_management_console.save-settings %}

## Exportieren von collectd-Daten mit `ghe-export-graphs`

Das Befehlszeilentool `ghe-export-graphs` exportiert die Daten, die `collectd` in RRD-Datenbanken speichert. Dieser Befehl wandelt die Daten in das XML-Format um und exportiert sie in eine einzelne Tarball-Datei (`.tgz`).

Sein Hauptzweck besteht darin, dem {% data variables.contact.contact_ent_support %}-Team Daten über die Leistung einer VM zur Verfügung zu stellen, ohne dass ein vollständiges Support-Bundle heruntergeladen werden muss. Er sollte nicht in deine regulären Sicherungsexporte aufgenommen werden und bietet kein Gegenstück zum Import. Wenn du {% data variables.contact.contact_ent_support %} kontaktierst, wirst du zur Fehlerbehebung ggf. gebeten, diese Daten anzugeben.

### Verwendung

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## Problembehandlung

### Der zentrale collectd-Server empfängt keine Daten.

{% data variables.product.prodname_enterprise %} wird mit `collectd` Version 5.x ausgeliefert. `collectd` 5.x ist nicht abwärtskompatibel mit der 4.x-Versionsreihe. Dein zentraler `collectd`-Server muss mindestens Version 5.x sein, um Daten akzeptieren zu können, die von {% data variables.product.product_location %} gesendet werden.

Unterstützung zu weiteren Fragen oder Problemen erhältst du vom {% data variables.contact.contact_ent_support %}.
