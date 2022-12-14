---
title: Upgrade von GitHub Enterprise Server
intro: 'Führe ein {% data variables.product.prodname_ghe_server %}-Upgrade durch, um die neuesten Features und Sicherheitsupdates zu erhalten.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release
  - /enterprise/admin/articles/migrations-and-upgrades
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases
  - /enterprise/admin/articles/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch
  - /enterprise/admin/guides/installation/upgrading-github-enterprise
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
ms.openlocfilehash: cbbeff601bfbbdf828ed4c5fc019c5e3bf849614
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186427'
---
## Upgrade vorbereiten

1. Bestimme eine Upgrade-Strategie, und wähle eine Version aus, auf die das Upgrade durchgeführt werden soll. Weitere Informationen findest du unter [Upgrade-Anforderungen](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/) und [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade), um den Upgrade-Pfad für deine aktuelle Version zu finden.
1. Erstelle mit den {% data variables.product.prodname_enterprise_backup_utilities %} ein neues Backup deiner primären Instanz. Weitere Informationen findest du in der [README.md-Datei](https://github.com/github/backup-utils#readme) in der {% data variables.product.prodname_enterprise_backup_utilities %}-Projektdokumentation.

  {% note %}

  **Hinweis:** Deine {% data variables.product.prodname_enterprise_backup_utilities %}-Version darf nicht älter als die vorletzte Version von {% data variables.location.product_location %} sein. Weitere Informationen findest du unter [Aktualisieren von GitHub Enterprise Server Backup Utilities](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities).

  {% endnote %}

1. Wenn {% data variables.location.product_location %} kurzlebige selbstgehostete Runner für {% data variables.product.prodname_actions %} verwendet und du automatische Updates deaktiviert hast, führe für deine Runner ein Upgrade auf die Version der Runneranwendung durch, die auf deiner aktualisierten Instanz ausgeführt werden soll.
1. Wenn du mithilfe eines Upgrade-Pakets ein Upgrade durchführst, solltest du ein Wartungsfenster für {% data variables.product.prodname_ghe_server %}-Endbenutzer*innen einplanen. Bei Verwendung eines Hotpatches muss der Wartungsmodus nicht verwendet werden.

  {% note %}

  **Hinweis:** Das Wartungsfenster hängt vom Typ des Upgrades ab, das du ausführst. Für Upgrades mittels Hotpatch ist in der Regel kein Wartungsfenster erforderlich. Manchmal ist ein Neustart erforderlich, den du später durchführen kannst. Entsprechend dem Versionierungsschema von MAJOR.FEATURE.PATCH führen Patch-Veröffentlichungen mit einem Upgrade-Paket in der Regel zu weniger als fünf Minuten Ausfallzeit. Feature-Veröffentlichungen mit enthaltenen Datenmigrationen dauern anhand der Speicherleistung und der zu migrierenden Daten entsprechend länger. Weitere Informationen findest du unter „[Aktivieren und Planen des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.

  {% endnote %}

## Snapshot erstellen

Ein Snapshot ist ein Checkpoint einer virtuellen Maschine (VM) zu einem bestimmten Zeitpunkt. Es wird dringend empfohlen, eine Momentaufnahme zu erstellen, bevor du ein Upgrade für deinen virtuellen Computer durchführst, damit du bei einem Fehlschlagen des Upgrades deine VM auf die Momentaufnahme zurücksetzen kannst. Es wird nur empfohlen, eine VM-Momentaufnahme zu erstellen, wenn die Appliance heruntergefahren oder im Wartungsmodus ausgeführt wird und alle Hintergrundaufträge abgeschlossen sind.

Wenn du ein Upgrade auf ein neues Featurerelease durchführst, musst du eine VM-Momentaufnahme erstellen. Wenn du ein Upgrade auf ein Patchrelease durchführst, kannst du den vorhandenen Datenträger anhängen. 

Es gibt zwei Snapshot-Typen:

- **VM-Momentaufnahmen** speichern den gesamten VM-Zustand, einschließlich der Benutzer- und Konfigurationsdaten. Für diese zeitraubende Snapshot-Methode ist viel Speicherplatz erforderlich.
- **Datendatenträger-Momentaufnahmen** speichern nur deine Benutzerdaten.

  {% note %}

  **Hinweise:**
  - Bei einigen Plattformen kannst du nicht nur eine Momentaufnahme deines Datenträgers erstellen. Bei diesen Plattformen musst du eine Momentaufnahme der gesamten VM erstellen.
  - Wenn von deinem Hypervisor keine vollständigen VM-Momentaufnahmen unterstützt werden, kannst du in schneller Abfolge Momentaufnahmen von Root-Disk und Datenträger erstellen.

  {% endnote %}

| Plattform | Momentaufnahmenmethode | URL zur Snapshot-Dokumentation |
|---|---|---|
| Amazon AWS | Datenträger | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>
| Azure | VM | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>
| Hyper-V | VM | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>
| Google Compute Engine | Datenträger | <https://cloud.google.com/compute/docs/disks/create-snapshots>
| VMware | VM | <https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html>

## Upgrade mit einem Hotpatch

{% data reusables.enterprise_installation.hotpatching-explanation %} 

Mit der {% data variables.enterprise.management_console %} kannst du einen Hotpatch sofort installieren oder für die spätere Installation planen. Über die Verwaltungsshell kannst du mit dem `ghe-upgrade`-Hilfsprogramm einen Hotpatch installieren. Weitere Informationen findest du unter [Upgradeanforderungen](/enterprise/admin/guides/installation/upgrade-requirements/).

{% note %}

**{% ifversion ghes %}Notes{% else %}Note{% endif %}** :

{% ifversion ghes %}
- Wenn {% data variables.location.product_location %} einen Release Candidate-Build ausführt, kannst du kein Upgrade mit einem Hotpatch durchführen.

- {% endif %}In Cluster-Umgebungen ist die Installation eines Hotpatches mittels {% data variables.enterprise.management_console %} nicht verfügbar. Informationen zum Installieren eines Hotpatches in einer Clusterumgebung findest du unter [Durchführen eines Upgrades für einen Cluster](/enterprise/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch).

{% endnote %}

### Upgrade einer einzelnen Appliance mit einem Hotpatch durchführen

#### Hotpatch mit der {% data variables.enterprise.management_console %} installieren

Du kannst die {% data variables.enterprise.management_console %} verwenden, um ein Upgrade mit einem Hotpatch durchzuführen, indem du automatische Updates aktivierst. Anschließend erhältst du die neueste verfügbare Version von {% data variables.product.prodname_ghe_server %}, auf die du ein Upgrade ausführen kannst.

Wenn das Upgrade-Ziel ein Featurerelease anstatt eines Patchrelease ist, kannst du die {% data variables.enterprise.management_console %} nicht verwenden, um einen Hotpatch zu installieren. Du musst den Hotpatch stattdessen mithilfe der Verwaltungsshell installieren. Weitere Informationen findest du unter [Installieren eines Hotpatches mithilfe der Verwaltungsshell](#installing-a-hotpatch-using-the-administrative-shell).

1. Aktivieren automatischer Updates. Weitere Informationen findest du unter [Aktivieren automatischer Updates](/enterprise/admin/guides/installation/enabling-automatic-update-checks/).
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Verwende nach dem Herunterladen eines neuen Hotpatches die Dropdownliste „Paket installieren“:
    - Wähle **Jetzt** zum sofortigen Installieren aus:
    - Wähle für die spätere Installation ein späteres Datum aus.
  ![Dropdownmenü mit Hotpatch-Installationsdatum](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Klicken Sie auf **Installieren**.
  ![Schaltfläche zum Installieren eines Hotpatches](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

#### Hotpatch mit der Verwaltungsshell installieren

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Kopiere die URL für das Upgrade-Hotpackage (*.hpkg*-Datei).
{% data reusables.enterprise_installation.download-package %}
4. Führe den `ghe-upgrade`-Befehl mithilfe des Paketdateinamens aus:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
  *** verifying upgrade package signature...
  ```
5. Wenn für den Kernel, MySQL, ElasticSearch oder andere Programme ein Neustart erforderlich ist, wirst du vom Hotpatch-Upgradeskript dahingehend benachrichtigt.

### Upgrade einer über Replikatinstanzen verfügenden Appliance mit einem Hotpatch durchführen

{% note %}

**Hinweis**: Zum Installieren eines Hotpatches musst du nicht in den Wartungsmodus wechseln oder die Replikation beenden.

{% endnote %}

Für die Hochverfügbarkeit und Geo-Replikation konfigurierte Appliances verwenden zusätzlich zu den primären Instanzen Replikatinstanzen. Zum Aktualisieren dieser Appliances musst du Upgrades für die primäre Instanz und alle Replikatinstanzen nacheinander durchführen.

#### Upgrade der primären Instanz durchführen

1. Aktualisiere die primäre Instanz, indem du die Anweisungen unter [Installieren eines Hotpatches mithilfe der Verwaltungsshell](#installing-a-hotpatch-using-the-administrative-shell) befolgst.

#### Upgrade einer Replikatinstanz durchführen

{% note %}

**Hinweis:** Wenn du als Teil der Georeplikation mehrere Replikatinstanzen ausführst, solltest du diese Prozedur für jede Replikatinstanz einzeln nacheinander wiederholen.

{% endnote %}

1. Aktualisiere die Replikatinstanz, indem du die Anweisungen unter [Installieren eines Hotpatches mithilfe der Verwaltungsshell](#installing-a-hotpatch-using-the-administrative-shell) befolgst. Wenn du mehrere Replikate für die Georeplikation verwendest, musst du diese Prozedur wiederholen, um jedes Replikat nacheinander zu aktualisieren.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

## Upgrade mit einem Upgrade-Paket

Obwohl du einen Hotpatch verwenden kannst, um ein Upgrade auf den neuesten Patchrelease in einer Featureserie durchzuführen, musst du ein Upgradepaket verwenden, um ein Upgrade auf ein neueres Featurerelease durchzuführen. Wenn du beispielsweise ein Upgrade von `2.11.10` auf `2.12.4` durchführen möchtest, musst du ein Upgradepaket verwenden, da es sich um unterschiedliche Featureserien handelt. Weitere Informationen findest du unter [Upgradeanforderungen](/enterprise/admin/guides/installation/upgrade-requirements/).

### Upgrade einer einzelnen Appliance mit einem Upgrade-Paket durchführen

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Wähle die geeignete Plattform aus, und kopiere die URL für das Upgradepaket (*.pkg*-Datei).
{% data reusables.enterprise_installation.download-package %}
4. Aktiviere den Wartungsmodus, und warte, bis alle aktiven Prozesse auf der {% data variables.product.prodname_ghe_server %}-Instanz abgeschlossen sind. Weitere Informationen findest du unter „[Aktivieren und Planen des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.

  {% note %}

  **Hinweis**: Wenn du in einer Hochverfügbarkeitskonfiguration ein Upgrade der primären Appliance durchführst, sollte sich die Appliance bereits im Wartungsmodus befinden, sofern du die unter [Durchführen eines Upgrades der primären Instanz](#upgrading-the-primary-instance) beschriebenen Anweisungen befolgst.

  {% endnote %}

5. Führe den `ghe-upgrade`-Befehl mithilfe des Paketdateinamens aus:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
  *** verifying upgrade package signature...
  ```
6. Bestätige, dass du das Upgrade fortsetzen möchtest, und führe nach der Überprüfung der Paketsignatur einen Neustart durch. Das neue Root-Dateisystem schreibt in die sekundäre Partition, und die Instanz startet automatisch im Wartungsmodus neu:
  ```shell
  *** applying update...
  This package will upgrade your installation to version VERSION-NUMBER
  Current root partition: /dev/xvda1 [VERSION-NUMBER]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
{% ifversion ip-exception-list %}
1. Optional kannst du zum Validieren des Upgrades eine IP-Ausnahmeliste konfigurieren, um den Zugriff auf eine bestimmte Liste von IP-Adressen zuzulassen. Weitere Informationen findest du unter [Überprüfen von Änderungen im Wartungsmodus mithilfe der IP-Ausnahmeliste](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).
{% endif %}
7. Deaktiviere bei einzelnen Appliance-Upgrades den Wartungsmodus, damit Benutzer {% data variables.location.product_location %} verwenden können.

  {% note %}

  **Hinweis**: Wenn du in einer Hochverfügbarkeitskonfiguration ein Upgrade der Appliances durchführst, solltest du im Wartungsmodus bleiben, bis ein Upgrade sämtlicher Replikate durchgeführt wurde und die Replikation aktuell ist. Weitere Informationen findest du unter [Durchführen eines Upgrades einer Replikatinstanz](#upgrading-a-replica-instance).

  {% endnote %}

### Upgrade einer über Replikatinstanzen verfügenden Appliance mit einem Upgrade-Paket durchführen

Für die Hochverfügbarkeit und Geo-Replikation konfigurierte Appliances verwenden zusätzlich zu den primären Instanzen Replikatinstanzen. Zum Aktualisieren dieser Appliances musst du Upgrades für die primäre Instanz und alle Replikatinstanzen nacheinander durchführen.

#### Upgrade der primären Instanz durchführen

{% warning %}

**Warnung:** Wenn die Replikation angehalten wird, geht im Falle eines Fehlschlagens der primären Instanz die Arbeit verloren, die vor dem Upgrade des Replikats und dem Start der Replikation erledigt wird.

{% endwarning %}

1. Aktiviere auf der primären Instanz den Wartungsmodus, und warte auf den Abschluss sämtlicher aktiver Prozesse. Weitere Informationen findest du unter [Aktivieren des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/).
{% data reusables.enterprise_installation.replica-ssh %}
3. Führe auf der Replikatinstanz oder auf allen Replikatinstanzen, falls du als Teil der Georeplikation mehrere Replikatinstanzen ausführst, `ghe-repl-stop` zum Anhalten der Replikation aus.
4. Aktualisiere die primäre Instanz, indem du die Anweisungen unter [Durchführen eines Upgrades einer einzelnen Appliance mit einem Upgradepaket](#upgrading-a-single-appliance-with-an-upgrade-package) befolgst.

#### Upgrade einer Replikatinstanz durchführen

{% note %}

**Hinweis:** Wenn du als Teil der Georeplikation mehrere Replikatinstanzen ausführst, solltest du diese Prozedur für jede Replikatinstanz einzeln nacheinander wiederholen.

{% endnote %}

1. Aktualisiere die primäre Instanz, indem du die Anweisungen in [Durchführen eines Upgrades einer einzelnen Appliance mit einem Upgradepaket](#upgrading-a-single-appliance-with-an-upgrade-package) befolgst. Wenn du mehrere Replikate für die Georeplikation verwendest, musst du diese Prozedur wiederholen, um jedes Replikat nacheinander zu aktualisieren.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} Wenn der Befehl `Replication is not running` zurückgibt, wird die Replikation möglicherweise noch gestartet. Warte ungefähr eine Minute, bevor du `ghe-repl-status` erneut ausführst.

   {% note %}

   **Hinweis:** Während der Neusynchronisierung kann `ghe-repl-status` anzeigen, dass die Replikation im Rückstand ist. Es wird möglicherweise die folgende Meldung angezeigt.
   
   ```
   CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
   ```
   {% endnote %}

   {%- ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}

   - Wenn du für jeden Knoten ein Upgrade auf {% data variables.product.product_name %} 3.6.0 oder höher durchgeführt und die Replikation gestartet hast, aber nach 45 Minuten immer noch die Meldung `git replication is behind the primary` erscheint, wende dich an den {% data variables.contact.enterprise_support %}. Weitere Informationen findest du unter [Anfordern von Unterstützung beim {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).
   {%- endif %}

   - {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}Andernfalls, wenn{% else %}Wenn{% endif %} `ghe-repl-status` nicht `OK` zurückgegeben hat, wende dich an den {% data variables.contact.enterprise_support %}. Weitere Informationen findest du unter [Anfordern von Unterstützung beim {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).
6. Wenn das Upgrade des letzten Replikats abgeschlossen und die Neusynchronisierung beendet ist, deaktiviere den Wartungsmodus, damit die Benutzer {% data variables.location.product_location %} verwenden können.

## Wiederherstellung nach einem fehlgeschlagenen Upgrade

Wenn ein Upgrade fehlschlägt oder unterbrochen wird, solltest du deine Instanz in ihren vorherigen Zustand zurücksetzen. Der entsprechende Prozess hängt vom Upgrade-Typ ab.

### Rollback einer Patch-Veröffentlichung durchführen

Um einen Patchrelease zurückzusetzen, verwende den `ghe-upgrade`-Befehl mit dem `--allow-patch-rollback`-Parameter. Bevor sie zurückgesetzt werden, muss die Replikation vorübergehend beendet werden, indem sie auf allen Replikatinstanzen `ghe-repl-stop` ausgeführt wird. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

Sobald der Rollback abgeschlossen ist, starte die Replikation neu, indem du `ghe-repl-start` auf allen Replikaten ausführst. 

Weitere Informationen findest du unter [Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities/#ghe-upgrade).

### Rollback einer Feature-Veröffentlichung durchführen

Um ein Rollback eines Featurereleases durchzuführen, führe eine Wiederherstellung über eine VM-Momentaufnahme aus, um sicherzustellen, dass die Root- und Datenpartitionen einen konsistenten Zustand aufweisen. Weitere Informationen findest du unter [Eine Momentaufnahme erstellen](#taking-a-snapshot).

{% ifversion ghes %}
## Weiterführende Themen

- „[Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases)“ {% endif %}
