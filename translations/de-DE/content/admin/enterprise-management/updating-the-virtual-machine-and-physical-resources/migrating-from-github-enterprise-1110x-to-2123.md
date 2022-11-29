---
title: GitHub Enterprise von 11.10.x zu 2.1.23 migrieren
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating
  - /enterprise/admin/articles/migrating-github-enterprise
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x
  - /enterprise/admin/articles/upgrading-to-a-newer-release
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: 'Um {% data variables.product.prodname_enterprise %} von 11.10.x zu 2.1.23 zu migrieren, musst du eine neue Appliance-Instanz einrichten und Daten aus der vorherigen Instanz migrieren.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
shortTitle: Migrate from 11.10.x to 2.1.23
ms.openlocfilehash: 4dcd93b41d8edc75388d34785c4c149d6627cc5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332600'
---
Migrationen von {% data variables.product.prodname_enterprise %} 11.10.348 und höher werden unterstützt. Migrationen von {% data variables.product.prodname_enterprise %} 11.10.348 und früher werden nicht unterstützt. Zu musst zunächst in mehreren Schritten ein Upgrade auf die Version 11.10.348 durchführen. Weitere Informationen findest du im Upgradeverfahren 11.10.348 [Durchführen eines Upgrades auf das neueste Release](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/).

Um ein Upgrade auf die neueste Version von {% data variables.product.prodname_enterprise %} durchzuführen, musst du zunächst ein Upgrade auf {% data variables.product.prodname_ghe_server %} 2.1 vornehmen. Anschließend kannst du dem normalen Upgradeprozess folgen. Weitere Informationen findest du unter [Durchführen eines Upgrades für {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/).

## Vorbereitungen für die Migration

1. Konsultiere den Leitfaden „Bereitstellen und Installieren“, und überprüfe, ob alle Voraussetzungen erfüllt sind, um {% data variables.product.prodname_enterprise %} 2.1.23 in deiner Umgebung bereitzustellen und zu konfigurieren. Weitere Informationen findest du unter [Bereitstellen und Installieren](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/).
2. Überprüfe, dass die aktuelle Instanz eine unterstützte Upgradeversion ausführt.
3. Richte die neueste Version von {% data variables.product.prodname_enterprise_backup_utilities %} ein. Weitere Informationen findest du unter [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils).
    - Wenn du geplante Backups bereits mit {% data variables.product.prodname_enterprise_backup_utilities %} konfiguriert hast, solltest du sicherstellen, dass du die neueste Version verwendest.
    - Wenn du aktuell keine geplanten Backups ausführst, richte {% data variables.product.prodname_enterprise_backup_utilities %} ein.
4. Führe den Befehl `ghe-backup` aus, um eine erste vollständige Sicherungsmomentaufnahme der aktuellen Instanz zu erstellen. Falls du bereits geplante Backups für deine aktuelle Instanz konfiguriert hast, musst du keine Momentaufnahme deiner Instanz erstellen.

   {% tip %}

   **Tipp:** Während der Erstellung der Momentaufnahme kann die Instanz weiterhin online und aktiv sein. Während der Wartung der Migration erstellst du eine weitere Momentaufnahme. Da Backups inkrementell sind, reduziert der anfängliche Snapshot die im finalen Snapshot übertragenen Daten, was wiederum das Wartungsfenster kürzt.

   {% endtip %}

5. Bestimme die Methode zum Umleiten des Benutzernetzwerk-Datenverkehrs auf die neue Instanz. Nach der Migration wird der gesamte HTTP- und Git-Netzwerk-Traffic an die neue Instanz geleitet.
    - **DNS**: Du solltest diese Methode für alle Umgebungen verwenden, da sie unkompliziert und selbst dann ordnungsgemäß funktioniert, wenn eine Migration zwischen Rechenzentren vorgenommen wird. Reduziere vor dem Starten der Migration den TTL-Wert des vorhandenen DNS-Eintrags auf maximal fünf Minuten, und lege fest, dass die Änderung auf andere Instanzen angewendet werden kann. Aktualisiere nach Abschluss der Migration den DNS-Eintrag bzw. die DNS-Einträge so, dass er bzw. sie auf die IP-Adresse der neuen Instanz verweisen.
    - **IP-Adressenzuweisung**: Diese Methode steht nur für die VMware-zu-VMware-Migration zur Verfügung und wird nicht empfohlen, es sei denn, die DNS-Methode ist nicht verfügbar. Vor dem Starten der Migration musst du die alte Instanz herunterfahren und ihre IP-Adresse der neuen Instanz zuweisen.
6. Plane ein Wartungsfenster. Das Wartungsfenster sollte lang genug sein, um Daten vom Backup-Host auf die neue Instanz zu übertragen. Es variiert entsprechend der Größe des Backup-Snapshots und der verfügbaren Netzwerkbandbreite. In diesem Zeitraum ist deine aktuelle Instanz nicht verfügbar und im Wartungsmodus, während du zur neuen Instanz migrierst.

## Durchführen der Migration

1. Stelle eine neue {% data variables.product.prodname_enterprise %} 2.1-Instanz bereit. Weitere Informationen findest du im Leitfaden [Bereitstellen und Installieren](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/) für deine Zielplattform.
2. Navigiere in einem Browser zur IP-Adresse der neuen Replikatappliance, und lade deine {% data variables.product.prodname_enterprise %}-Lizenz hoch.
3. Lege ein Administratorkennwort fest.
5. Klicke auf **Migrieren**.
![Auswählen des Installationstyps](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Füge deinen SSH-Zugriffsschlüssel für den Sicherungshost in „Neuen SSH-Schlüssel hinzufügen“ ein.
![Autorisieren einer Sicherungskopie](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Klicke auf **Schlüssel hinzufügen** und anschließend auf **Weiter**.
8. Kopiere den Befehl `ghe-restore`, den du auf dem Sicherungshost ausführst, um Daten zur neuen Instanz zu migrieren.
![Starten einer Migration](/assets/images/enterprise/migration/migration-restore-start.png)
9. Aktiviere den Wartungsmodus auf der alten Instanz, und warte auf den Abschluss sämtlicher aktiver Prozesse. Weitere Informationen findest du unter „[Aktivieren und Planen des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.

  {% note %}

  **Hinweis:** Ab diesem Zeitpunkt steht die Instanz nicht mehr zur normalen Verwendung zur Verfügung.

  {% endnote %}

10. Führe auf dem Sicherungshost den Befehl `ghe-backup` aus, um eine finale Sicherungsmomentaufnahme zu erstellen. Dadurch wird sichergestellt, dass alle Daten von der alten Instanz erfasst werden.
11. Führe auf dem Sicherungshost den Befehl `ghe-restore` aus, den du auf den Bildschirm mit dem Wiederherstellungsstatus der neuen Instanz kopiert hast, um die neueste Momentaufnahme wiederherzustellen.
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

12. Kehre zum Bildschirm mit dem Wiederherstellungsstatus der neuen Instanz zurück, um zu sehen, dass die Wiederherstellung abgeschlossen ist.
![Bildschirm zur abgeschlossenen Wiederherstellung](/assets/images/enterprise/migration/migration-status-complete.png)
13. Klicke auf **Weiter zu Einstellungen**, um die von der vorherigen Instanz importierten Konfigurationsinformationen und -einstellungen zu überprüfen und anzupassen.
![Überprüfen von importierten Einstellungen](/assets/images/enterprise/migration/migration-status-complete.png)
14. Klicke auf **Einstellungen speichern**.

  {% note %}

  **Hinweis:** Du kannst die neue Instanz verwenden, nachdem du die Konfigurationseinstellungen angewendet und den Server neu gestartet hast.

  {% endnote %}

15. Leite mittels DNS oder IP-Adressenzuweisung den Benutzernetzwerk-Datenverkehr von der alten Instanz zur neuen Instanz.
16. Führe ein Upgrade auf das neueste Patchrelease von {% data variables.product.prodname_ghe_server %} durch. Weitere Informationen findest du unter [Upgrade für {% data variables.product.prodname_ghe_server %} durchführen](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/).
