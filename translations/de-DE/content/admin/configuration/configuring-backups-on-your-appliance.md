---
title: Backups auf Ihrer Appliance konfigurieren
redirect_from:
  - /enterprise/admin/categories/backups-and-restores/
  - /enterprise/admin/articles/backup-and-recovery/
  - /enterprise/admin/articles/backing-up-github-enterprise/
  - /enterprise/admin/articles/restoring-github-enterprise/
  - /enterprise/admin/articles/backing-up-repository-data/
  - /enterprise/admin/articles/restoring-enterprise-data/
  - /enterprise/admin/articles/restoring-repository-data/
  - /enterprise/admin/articles/backing-up-enterprise-data/
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery/
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
intro: 'Im Rahmen eines Disaster Recovery-Plans können Sie die Produktionsdaten auf {% data variables.product.product_location %} schützen, indem Sie automatisierte Backups konfigurieren.'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Informationen zu {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} ist ein Backup-System, das Sie auf einem separaten Host installieren, der in regelmäßigen Intervallen über eine sichere SSH-Netzwerkverbindung Backup-Snapshots von {% data variables.product.product_location %} erstellt. Mit einem Snapshot können Sie eine vorhandene {% data variables.product.prodname_ghe_server %}-Instanz in einem vorherigen Zustand auf dem Backup-Host wiederherstellen.

Nur die seit dem letzten Snapshot hinzugefügten Daten werden über das Netzwerk übertragen und belegen zusätzlichen physischen Speicherplatz. Zum Minimieren der Auswirkung auf die Leistung werden Backups online unter der niedrigsten CPU-/E/A-Priorität durchgeführt. Zum Durchführen eines Backups muss kein Wartungsfenster geplant werden.

Ausführlichere Informationen zu Features, Anforderungen und zur erweiterten Nutzung finden Sie in der [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme).

### Vorrausetzungen

Sie müssen über ein von {% data variables.product.product_location %} getrenntes Linux- oder Unix-Hostsystem verfügen, um {% data variables.product.prodname_enterprise_backup_utilities %} verwenden zu können.

Sie können {% data variables.product.prodname_enterprise_backup_utilities %} auch zur langfristigen dauerhaften Speicherung von kritischen Daten in eine vorhandene Umgebung integrieren.

Es wird empfohlen, dass der Backup-Host und {% data variables.product.product_location %} geografisch voneinander getrennt sind. Dadurch wird gewährleistet, dass Backups wiederhergestellt werden können, falls am Hauptstandort eine schwere Katastrophe oder ein Netzwerkausfall auftritt.

Die Anforderungen an den physischen Speicher variieren basierend auf der Git-Repository-Festplattennutzung und den erwarteten Wachstumsmustern:

| Hardware            | Empfehlung                                                    |
| ------------------- | ------------------------------------------------------------- |
| **vCPUs**           | 2                                                             |
| **Arbeitsspeicher** | 2 GB                                                          |
| **Speicher**        | Das Fünffache des zugeordneten Speichers der primären Instanz |

Entsprechend Ihrer Nutzung, beispielsweise in Bezug auf die Benutzeraktivität und die ausgewählten Integrationen, sind möglicherweise mehr Ressourcen erforderlich.

### {% data variables.product.prodname_enterprise_backup_utilities %} installieren

{% note %}

**Hinweis:** Um sicherzustellen, dass eine wiederhergestellte Appliance sofort verfügbar ist, sollten Sie Backups durchführen, die selbst in einer Geo-Replikationskonfiguration auf die primäre Instanz abzielen.

{% endnote %}

1. Laden Sie die neueste [{% data variables.product.prodname_enterprise_backup_utilities %}-Version](https://github.com/github/backup-utils/releases) herunter, und extrahieren Sie die Datei mit dem Befehl `tar`.
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz     
  ```
2. Kopieren Sie die enthaltene Datei `backup.config-example` nach `backup.config`, und öffnen Sie sie in einem Editor.
3. Legen Sie den Wert `GHE_HOSTNAME` auf den Hostnamen oder die IP-Adresse Ihrer primären {% data variables.product.prodname_ghe_server %}-Instanz fest.
4. Legen Sie den Wert `GHE_DATA_DIR` auf den Dateisystempfad fest, unter dem Sie Backup-Snapshots speichern möchten.
5. Öffnen Sie unter `https://HOSTNAME/setup/settings` die Seite mit den Einstellungen Ihrer primären Instanz, und fügen Sie der Liste der autorisierten SSH-Schlüssel den SSH-Schlüssel des Backup-Hosts hinzu. Weitere Informationen finden Sie unter „[Auf die Verwaltungsshell (SSH) zugreifen](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)“.
5. Führen Sie den Befehl `ghe-host-check` aus, um die SSH-Konnektivität mit {% data variables.product.product_location %} zu verifizieren.
  ```shell
  $ bin/ghe-host-check        
  ```
  6. Führen Sie den Befehl `ghe-backup` aus, um ein anfängliches vollständiges Backup zu erstellen.
  ```shell
  $ bin/ghe-backup        
  ```

Weitere Informationen zur erweiterten Nutzung finden Sie in der [{% data variables.product.prodname_enterprise_backup_utilities %}-Datei 'README.md'](https://github.com/github/backup-utils#readme).

### Backup planen

Mithilfe des Befehls `cron(8)` oder eines ähnlichen Diensts zum Planen von Befehlen können Sie regelmäßige Backups auf dem Backup-Host planen. Die konfigurierte Backup-Häufigkeit schreibt das Worst Case Recovery Point Objective (RPO) in Ihrem Wiederherstellungsplan vor. Angenommen, Sie haben das Backup so geplant, dass es täglich um Mitternacht ausgeführt wird. In diesem Fall könnten Sie in einem Notfallszenario bis zu 24 Stunden an Daten verlieren. Es wird empfohlen, mit einem stündlichen Backup-Plan zu beginnen. Dadurch wird garantiert, dass schlimmstenfalls maximal eine Stunde an Daten am Hauptstandort vernichtet wird.

Wenn sich Backup-Versuche überschneiden, wird der Befehl `ghe-backup` mit einer Fehlermeldung abgebrochen. Diese gibt an, dass ein gleichzeitiges Backup vorhanden ist. In diesem Fall wird empfohlen, die Häufigkeit Ihrer geplanten Backups zu verringern. Weitere Informationen finden Sie im Abschnitt „Backups planen“ der [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#scheduling-backups).

### Backup wiederherstellen

Im Falle eines längeren Ausfalls oder einer Katastrophe am Hauptstandort können Sie {% data variables.product.product_location %} wiederherstellen. Stellen Sie dazu eine andere {% data variables.product.prodname_enterprise %}-Appliance bereit, und führen Sie auf dem Backup-Host eine Wiederherstellung aus. Sie müssen der Ziel-{% data variables.product.prodname_enterprise %}-Appliance den SSH-Schlüssel des Backup-Hosts als einen autorisierten SSH-Schlüssel hinzufügen, bevor Sie eine Appliance wiederherstellen.

{%if currentVersion ver_gt "enterprise-server@2.22"%}
{% note %}

**Note:** If {% data variables.product.product_location %} has {% data variables.product.prodname_actions %} enabled, you must first configure the {% data variables.product.prodname_actions %} external storage provider on the replacement appliance before running the `ghe-restore` command. For more information, see "[Backing up and restoring {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_actions %} enabled](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)."

{% endnote %}
{% endif %}

Führen Sie den Befehl `ghe-restore` aus, um den letzten erfolgreichen {% data variables.product.product_location %}-Snapshot wiederherzustellen. Es sollte in etwa folgende Ausgabe angezeigt werden:

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
# ...Ausgabe gekürzt
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% note %}

**Hinweis:** Die Netzwerkeinstellungen sind aus dem Backup-Snapshot ausgeschlossen. Sie müssen das Netzwerk auf der Ziel-{% data variables.product.prodname_ghe_server %}-Appliance manuell konfigurieren, wie dies für Ihre Umgebung erforderlich ist.

{% endnote %}

Sie können diese zusätzlichen Optionen mit dem Befehl `ghe-restore` verwenden:
- Das Flag `-c` überschreibt die Einstellungen, Zertifikate und Lizenzdaten auf dem Ziel-Host, selbst wenn es bereits konfiguriert ist. Lassen Sie dieses Flag weg, wenn Sie eine Testinstanz für Testzwecke einrichten und Sie die vorhandene Konfiguration auf dem Ziel beibehalten möchten. Weitere Informationen finden Sie unter „Backup- und Wiederherstellungsbefehle verwenden“ der [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands).
- Mit dem Flag `-s` können Sie einen anderen Backup-Snapshot auswählen.
