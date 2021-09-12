---
title: GitHub Enterprise von 11.10.x zu 2.1.23 migrieren
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating/
  - /enterprise/admin/articles/migrating-github-enterprise/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x/
  - /enterprise/admin/articles/upgrading-to-a-newer-release/
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: 'Um {% data variables.product.prodname_enterprise %} von 11.10.x zu 2.1.23 zu migrieren, müssen Sie eine neue Appliance-Instanz einrichten und Daten aus der vorherigen Instanz migrieren.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
---

Migrationen von {% data variables.product.prodname_enterprise %} 11.10.348 und höher werden unterstützt. Migrationen von {% data variables.product.prodname_enterprise %} 11.10.348 und früher werden nicht unterstützt. Sie müssen zunächst in verschiedenen Upgrades ein Upgrade auf die Version 11.10.348 durchführen. Weitere Informationen finden Sie in der 11.10.348-Upgrade-Prozedur „[Upgrade auf die neueste Version durchführen](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)“.

Um ein Upgrade auf die neueste Version von {% data variables.product.prodname_enterprise %} durchzuführen, müssen Sie zunächst ein Upgrade auf {% data variables.product.prodname_ghe_server %} 2.1 vornehmen. Anschließend können Sie den normalen Upgrade-Prozess befolgen. Weitere Informationen finden Sie unter „[Upgrade von {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)“.

### Migrationsvorbereitung

1. Konsultieren Sie den Leitfaden „Bereitstellung und Installation“, und überprüfen Sie, ob alle Voraussetzungen erfüllt sind, um {% data variables.product.prodname_enterprise %} 2.1.23 in Ihrer Umgebung bereitzustellen und zu konfigurieren. Weitere Informationen finden Sie unter „[Bereitstellung und Installation](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)“.
2. Verifizieren Sie, dass die aktuelle Instanz eine unterstützte Upgrade-Version ausführt.
3. Richten Sie die neueste Version von {% data variables.product.prodname_enterprise_backup_utilities %} ein. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils)“.
    - Wenn Sie geplante Backups bereits mit {% data variables.product.prodname_enterprise_backup_utilities %} konfiguriert haben, sollten Sie sicherstellen, dass Sie die neueste Version verwenden.
    - Wenn Sie aktuell keine geplanten Backups ausführen, richten Sie {% data variables.product.prodname_enterprise_backup_utilities %} ein.
4. Führen Sie den Befehl `ghe-backup` aus, um einen anfänglichen vollständigen Backup-Snapshot der aktuellen Instanz zu erstellen. Falls Sie bereits geplante Backups für Ihre aktuelle Instanz konfiguriert haben, müssen Sie keinen Snapshot Ihrer Instanz erstellen.

   {% tip %}

   **Tipp:** Während der Snapshot-Erstellung kann die Instanz weiterhin online und aktiv sein. Während der Wartung der Migration erstellen Sie einen anderen Snapshot. Da Backups inkrementell sind, reduziert der anfängliche Snapshot die im finalen Snapshot übertragenen Daten, was wiederum das Wartungsfenster kürzt.

   {% endtip %}

5. Bestimmen Sie die Methode zum Umleiten des Benutzernetzwerk-Traffics auf die neue Instanz. Nach der Migration wird der gesamte HTTP- und Git-Netzwerk-Traffic an die neue Instanz geleitet.
    - **DNS**: Sie sollten diese Methode für alle Umgebungen verwenden, da es einfach ist und selbst dann ordnungsgemäß funktioniert, wenn eine Migration zwischen Rechenzentren vorgenommen wird. Reduzieren Sie vor dem Start der Migration den TTL-Wert der vorhandenen DNS-Einträge auf maximal fünf Minuten, und legen Sie fest, dass die Änderung auf andere Instanzen erweitert werden kann. Aktualisieren Sie nach Abschluss der Migration den DNS-Eintrag bzw. die DNS-Einträge so, dass er bzw. sie auf die IP-Adresse der neuen Instanz verweisen.
    - **IP-Adressenzuweisung**: Diese Methode steht nur für die VMware-zu-VMware-Migration zur Verfügung und wird nicht empfohlen, es sei denn, die DNS-Methode ist nicht verfügbar. Vor dem Starten der Migration müssen Sie die alte Instanz herunterfahren und ihre IP-Adresse zur neuen Instanz zuweisen.
6. Planen Sie ein Wartungsfenster. Das Wartungsfenster sollte lang genug sein, um Daten vom Backup-Host auf die neue Instanz zu übertragen. Es variiert entsprechend der Größe des Backup-Snapshots und der verfügbaren Netzwerkbandbreite. In diesem Zeitraum ist Ihre aktuelle Instanz nicht verfügbar und im Wartungsmodus, während Sie zur neuen Instanz migrieren.

### Führen Sie die Migration durch.

1. Stellen Sie eine neue {% data variables.product.prodname_enterprise %} 2.1-Instanz bereit. Weitere Informationen finden Sie im Leitfaden „[Bereitstellung und Installation](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)“ für Ihre Zielplattform.
2. Navigieren Sie in einem Browser zur IP-Adresse der neuen Replikat-Appliance, und laden Sie Ihre {% data variables.product.prodname_enterprise %}-Lizenz hoch.
3. Legen Sie ein Administratorpasswort fest.
5. Klicken Sie auf **Migrate** (Migrieren). ![Installationstyp auswählen](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Fügen Sie Ihren Backup-Host-SSH-Zugriffschlüssel in „Add new SSH key“ (Neuen SSH-Schlüssel hinzufügen) ein.![Backup-Autorisierung](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Click **Add key** and then click **Continue**.
8. Kopieren Sie den Befehl `ghe-restore`, den Sie auf dem Backup-Host ausführen, um Daten zur neuen Instanz zu migrieren. ![Migration starten](/assets/images/enterprise/migration/migration-restore-start.png)
9. Aktivieren Sie den Wartungsmodus auf der alten Instanz, und warten Sie auf den Abschluss sämtlicher aktiver Prozesse. Weitere Informationen finden Sie unter „[Wartungsmodus aktivieren und planen](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.

  {% note %}

  **Hinweis:** Ab diesem Zeitpunkt steht die Instanz nicht mehr zur normalen Verwendung zur Verfügung.

  {% endnote %}

10. Führen Sie auf dem Backup-Host den Befehl `ghe-backup` aus, um einen finalen Backup-Snapshot zu erstellen. Dadurch wird sichergestellt, dass alle Daten von der alten Instanz erfasst werden.
11. Führen Sie auf dem Backup-Host den Befehl `ghe-restore` aus, den Sie auf dem Bildschirm mit dem Wiederherstellungsstatus der neuen Instanz kopiert haben, um den neuesten Snapshot wiederherzustellen.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. Kehren Sie zum Bildschirm mit dem Wiederherstellungsstatus der neuen Instanz zurück, um zu sehen, dass die Wiederherstellung abgeschlossen ist.![Bildschirm zur abgeschlossenen Wiederherstellung](/assets/images/enterprise/migration/migration-status-complete.png)
13. Klicken Sie auf **Continue to settings** (Weiter zu den Einstellungen), um die von der vorherigen Instanz importierten Konfigurationsinformationen und -einstellungen zu überprüfen und anzupassen. ![Importierte Einstellungen überprüfen](/assets/images/enterprise/migration/migration-status-complete.png)
14. Klicke auf **Save settings** (Einstellungen speichern).

  {% note %}

  **Hinweis:** Sie können die neue Instanz verwenden, nachdem Sie die Konfigurationseinstellungen angewendet und den Server neu gestartet haben.

  {% endnote %}

15. Leiten Sie mittels DNS oder IP-Adressenzuweisung den Benutzernetzwerk-Traffic von der alten Instanz zur neuen Instanz.
16. Upgraden Sie auf die neueste Patch-Veröffentlichung von {{ currentVersion }}. Weitere Informationen finden Sie unter „[Upgrade von {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)“.
