---
title: Konfigurieren von Sicherungen auf deiner Appliance
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: 'Im Rahmen eines Notfallwiederherstellungsplans kannst du Produktionsdaten auf {% data variables.product.product_location %} schützen, indem du automatisierte Sicherungen konfigurierst.'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 6a992c2861ce2c0de3b6d8672bf42f8818cda85a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332632'
---
## Informationen zu {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} ist ein Backup-System, das du auf einem separaten Host installierst, der in regelmäßigen Intervallen über eine sichere SSH-Netzwerkverbindung Backup-Momentaufnahmen von {% data variables.product.product_location %} erstellt. Mit einem Snapshot kannst du eine vorhandene {% data variables.product.prodname_ghe_server %}-Instanz in einem vorherigen Zustand auf dem Backup-Host wiederherstellen.

Nur die seit dem letzten Snapshot hinzugefügten Daten werden über das Netzwerk übertragen und belegen zusätzlichen physischen Speicherplatz. Zum Minimieren der Auswirkung auf die Leistung werden Backups online unter der niedrigsten CPU-/E/A-Priorität durchgeführt. Zum Durchführen eines Backups muss kein Wartungsfenster geplant werden.

Ausführlichere Informationen zu Features, Anforderungen und zur erweiterten Verwendung findest du in der [{% data variables.product.prodname_enterprise_backup_utilities %}-INFODATEI](https://github.com/github/backup-utils#readme).

## Voraussetzungen

Du musst über ein von {% data variables.product.product_location %} getrenntes Linux- oder Unix-Hostsystem verfügen, um {% data variables.product.prodname_enterprise_backup_utilities %} verwenden zu können.

Du kannst {% data variables.product.prodname_enterprise_backup_utilities %} auch zur langfristigen dauerhaften Speicherung von kritischen Daten in eine vorhandene Umgebung integrieren.

Der Backup-Host und {% data variables.product.product_location %} sollten geografisch voneinander getrennt sein. Dadurch wird gewährleistet, dass Backups wiederhergestellt werden können, falls am Hauptstandort eine schwere Katastrophe oder ein Netzwerkausfall auftritt.

Die Anforderungen an den physischen Speicher variieren basierend auf der Git-Repository-Festplattennutzung und den erwarteten Wachstumsmustern:

| Hardware | Empfehlung |
| -------- | --------- |
| **vCPUs**  | 2 |
| **Memory** | 2 GB |
| **Storage** | Das Fünffache des zugeordneten Speichers der primären Instanz |

Entsprechend deiner Nutzung, beispielsweise in Bezug auf die Benutzeraktivität und die ausgewählten Integrationen, sind möglicherweise mehr Ressourcen erforderlich.

## {% data variables.product.prodname_enterprise_backup_utilities %} installieren

{% note %}

**Hinweis:** Um sicherzustellen, dass eine wiederhergestellte Appliance sofort verfügbar ist, solltest du Backups durchführen, die selbst in einer Geo-Replikationskonfiguration auf die primäre Instanz abzielen.

{% endnote %}

1. Lade das neueste [{% data variables.product.prodname_enterprise_backup_utilities %}-Release](https://github.com/github/backup-utils/releases) herunter, und extrahiere die Datei mit dem `tar`-Befehl.
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz     
  ```
2. Kopiere die enthaltene `backup.config-example`-Datei in `backup.config`, und öffne sie in einem Editor.
3. Lege den `GHE_HOSTNAME`-Wert auf den Hostnamen oder die IP-Adresse deiner primären {% data variables.product.prodname_ghe_server %}-Instanz fest.

  {% note %}

  **Hinweis:** Wenn dein {% data variables.product.product_location %} als Cluster oder in einer Konfiguration mit hoher Verfügbarkeit mithilfe eines Lastenausgleichs bereitgestellt wird, kann `GHE_HOSTNAME` der Hostname des Lastenausgleichs sein, solange er (auf Port 122) SSH-Zugriff auf {% data variables.product.product_location %} zulässt.

  {% endnote %}

4. Lege den `GHE_DATA_DIR`-Wert auf den Dateisystempfad fest, unter dem du Backup-Momentaufnahmen speichern möchtest.
5. Öffne unter `https://HOSTNAME/setup/settings` die Seite mit den Einstellungen deiner primären Instanz, und füge der Liste der autorisierten SSH-Schlüssel den SSH-Schlüssel des Backup-Hosts hinzu. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).
6. Überprüfe die SSH-Verbindung mit {% data variables.product.product_location %} mit dem `ghe-host-check`-Befehl.
  ```shell
  $ bin/ghe-host-check        
  ```         
  7. Führe den Befehl `ghe-backup` aus, um ein anfängliches vollständiges Backup zu erstellen.
  ```shell
  $ bin/ghe-backup        
  ```

Weitere Informationen zur erweiterten Verwendung findest du in der [{% data variables.product.prodname_enterprise_backup_utilities %}-INFODATEI](https://github.com/github/backup-utils#readme).

## Backup planen

Mithilfe des Befehls `cron(8)` oder eines ähnlichen Diensts zum Planen von Befehlen kannst du regelmäßige Backups auf dem Backup-Host planen. Die konfigurierte Sicherungshäufigkeit schreibt die ungünstigste Recovery Point Objective (RPO) in deinem Wiederherstellungsplan vor. Angenommen, du hast das Backup so geplant, dass es täglich um Mitternacht ausgeführt wird. In diesem Fall könntest du in einem Notfallszenario bis zu 24 Stunden an Daten verlieren. Es wird empfohlen, mit einem stündlichen Backup-Plan zu beginnen. Dadurch wird garantiert, dass schlimmstenfalls maximal eine Stunde an Daten am Hauptstandort vernichtet wird.

Wenn sich Backup-Versuche überschneiden, wird der Befehl `ghe-backup` mit einer Fehlermeldung abgebrochen. Diese gibt an, dass ein gleichzeitiges Backup vorhanden ist. In diesem Fall wird empfohlen, die Häufigkeit deiner geplanten Sicherungen zu verringern. Weitere Informationen findest du im Abschnitt „Planen von Backups“ der [{% data variables.product.prodname_enterprise_backup_utilities %}-INFODATEI](https://github.com/github/backup-utils#scheduling-backups).

## Wiederherstellen einer Sicherung

Im Falle eines längeren Ausfalls oder einer Katastrophe am Hauptstandort kannst du {% data variables.product.product_location %} wiederherstellen. Stelle dazu eine andere {% data variables.product.prodname_enterprise %}-Appliance bereit, und führe auf dem Backup-Host eine Wiederherstellung aus. Du musst der Ziel-{% data variables.product.prodname_enterprise %}-Appliance den SSH-Schlüssel des Backup-Hosts als einen autorisierten SSH-Schlüssel hinzufügen, bevor du eine Appliance wiederherstellst.

{% ifversion ghes %} {% note %}

**Hinweis:** Wenn {% data variables.product.product_location %} {% data variables.product.prodname_actions %} aktiviert hat, musst du zuerst den externen Speicheranbieter {% data variables.product.prodname_actions %} für die Ersatzappliance konfigurieren, bevor du den `ghe-restore`-Befehl ausführst. Weitere Informationen findest du unter [Sichern und Wiederherstellen von {% data variables.product.prodname_ghe_server %} mit aktivierten {% data variables.product.prodname_actions %}](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled).

{% endnote %} {% endif %}

{% note %}

**Hinweis:** Bei der Ausführung von Vorgängen zur Sicherungswiederherstellung auf {% data variables.product.product_location %} gelten die gleichen Versionsunterstützungsregeln. Du kannst nur Daten wiederherstellen, die maximal zwei Feature-Releases zurückliegen.

Wenn du beispielsweise eine Sicherung von GHES 3.0.x erstellst, kannst du sie in einer GHES 3.2.x-Instanz wiederherstellen. Du kannst jedoch keine Daten aus einer Sicherung von GHES 2.22.x auf 3.2.x wiederherstellen, da dies drei Versionssprünge wären (2.22 > 3.0 > 3.1 > 3.2). Du musst zuerst auf einer 3.1.x-Instanz wiederherstellen und dann auf 3.2.x aktualisieren.

{% endnote %}

Führe den Befehl `ghe-restore` aus, um {% data variables.product.product_location %} aus der letzten erfolgreichen Momentaufnahme wiederherzustellen. Eine ähnliche Ausgabe wie die folgende sollte angezeigt werden:

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %} Optional kannst du zur Validierung der Wiederherstellung eine IP-Ausnahmeliste konfigurieren, um den Zugriff auf eine bestimmte Liste von IP-Adressen zuzulassen. Weitere Informationen findest du unter [Überprüfen von Änderungen im Warungsmodus mithilfe der IP-Ausnahmeliste](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).
{% endif %}

{% note %}

**Hinweis:** Die Netzwerkeinstellungen sind von der Backup-Momentaufnahme ausgeschlossen. Du musst das Netzwerk auf der Ziel-{% data variables.product.prodname_ghe_server %}-Appliance manuell konfigurieren, wie dies für deine Umgebung erforderlich ist.

{% endnote %}

Du kannst die folgenden zusätzlichen Optionen mit dem `ghe-restore`-Befehl verwenden:
- Das `-c`-Flag überschreibt die Einstellungen, Zertifikate und Lizenzdaten auf dem Zielhost, selbst wenn es bereits konfiguriert ist. Lass dieses Flag weg, wenn du eine Testinstanz für Testzwecke einrichtest und die vorhandene Konfiguration auf dem Ziel beibehalten möchtest. Weitere Informationen findest du im Abschnitt „Verwenden von Sicherungs- und Wiederherstellungsbefehlen“ der [{% data variables.product.prodname_enterprise_backup_utilities %}-INFODATEI](https://github.com/github/backup-utils#using-the-backup-and-restore-commands).
- Mit dem `-s`-Flag kannst du eine andere Backup-Momentaufnahme auswählen.
