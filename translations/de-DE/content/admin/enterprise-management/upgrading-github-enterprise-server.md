---
title: Upgrade von GitHub Enterprise Server
intro: 'Führen Sie ein {% data variables.product.prodname_ghe_server %}-Upgrade durch, um die neuesten Features und Sicherheitsupdates zu erhalten.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release/
  - /enterprise/admin/articles/migrations-and-upgrades/
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine/
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases/
  - /enterprise/admin/articles/upgrading-older-installations/
  - /enterprise/admin/hidden/upgrading-older-installations/
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program/
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch/
  - /enterprise/admin/guides/installation/upgrading-github-enterprise/
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

### Upgrade vorbereiten

1. Bestimmen Sie eine Upgrade-Strategie, und wählen Sie eine Version aus, auf die das Upgrade durchgeführt werden soll. Weitere Informationen finden Sie unter „[Upgrade-Anforderungen](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)“.
3. Erstellen Sie mit den {% data variables.product.prodname_enterprise_backup_utilities %} ein neues Backup Ihrer primären Instanz. Weitere Informationen finden Sie in der „[{% data variables.product.prodname_enterprise_backup_utilities %}-Datei 'README.md'](https://github.com/github/backup-utils#readme)“.
4. Wenn Sie mithilfe eines Upgrade-Pakets ein Upgrade durchführen, sollten Sie ein Wartungsfenster für {% data variables.product.prodname_ghe_server %}-Endbenutzer planen. Bei Verwendung eines Hotpatches muss der Wartungsmodus nicht verwendet werden.

  {% note %}

  **Hinweis:** Das Wartungsfenster hängt vom Typ des Upgrades ab, das Sie ausführen. Für Upgrades mittels Hotpatch ist in der Regel kein Wartungsfenster erforderlich. Manchmal ist ein Neustart erforderlich, den Sie später durchführen können. Entsprechend dem Versionierungsschema von MAJOR.FEATURE.PATCH führen Patch-Veröffentlichungen mit einem Upgrade-Paket in der Regel zu weniger als fünf Minuten Ausfallzeit. Feature-Veröffentlichungen mit enthaltenen Datenmigrationen dauern anhand der Speicherleistung und der zu migrierenden Daten entsprechend länger. Weitere Informationen finden Sie unter „[Wartungsmodus aktivieren und planen](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.

  {% endnote %}

{% if currentVersion ver_gt "enterprise-server@2.20" and currentVersion ver_lt "enterprise-server@3.2" %}

### About minimum requirements for {% data variables.product.prodname_ghe_server %} 3.0 and later

Before upgrading to {% data variables.product.prodname_ghe_server %} 3.0 or later, review the hardware resources you've provisioned for your instance. {% data variables.product.prodname_ghe_server %} 3.0 introduces new features such as {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %}, and requires more resources than versions 2.22 and earlier. For more information, see the [{% data variables.product.prodname_ghe_server %} 3.0 release notes](/enterprise-server@3.0/admin/release-notes).

Increased requirements for {% data variables.product.prodname_ghe_server %} 3.0 and later are **bold** in the following table.

| Benutzerlizenzen                                           |                           vCPUs |                         Arbeitsspeicher |                        Attached-Storage | Root-Storage |
|:---------------------------------------------------------- | -------------------------------:| ---------------------------------------:| ---------------------------------------:| ------------:|
| Test, Demo oder 10 Benutzer mit eingeschränkten Funktionen |   **4**<br/>_Up from 2_ |   **32 GB**<br/>_Up from 16 GB_ | **150 GB**<br/>_Up from 100 GB_ |       200 GB |
| 10–3000                                                    |   **8**<br/>_Up from 4_ |   **48 GB**<br/>_Up from 32 GB_ | **300 GB**<br/>_Up from 250 GB_ |       200 GB |
| 3000–5000                                                  |  **12**<br/>_Up from 8_ |                                   64 GB |                                  500 GB |       200 GB |
| 5000–8000                                                  | **16**<br/>_Up from 12_ |                                   96 GB |                                  750 GB |       200 GB |
| 8000–10000+                                                | **20**<br/>_Up from 16_ | **160 GB**<br/>_Up from 128 GB_ |                                 1000 GB |       200 GB |

{% if currentVersion ver_gt "enterprise-server@2.21" %}

For more information about hardware requirements for {% data variables.product.prodname_actions %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)."

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}

### Snapshot erstellen

Ein Snapshot ist ein Checkpoint einer virtuellen Maschine (VM) zu einem bestimmten Zeitpunkt. Es wird dringend empfohlen, ein Snapshot zu erstellen, bevor Sie Ihre virtuelle Maschine upgraden, damit Sie bei einem Fehlschlagen eines Upgrades Ihre VM auf den Snapshot zurücksetzen können. Wenn Sie ein Upgrade auf eine neue Feature-Veröffentlichung durchführen, müssen Sie einen VM-Snapshot erstellen. Wenn Sie ein Upgrade auf eine Patch-Veröffentlichung durchführen, können Sie die vorhandene Daten-Disk anhängen.

Es gibt zwei Snapshot-Typen:

- **VM-Snapshots** speichern den gesamten VM-Zustand, einschließlich der Benutzer- und Konfigurationsdaten. Für diese zeitraubende Snapshot-Methode ist viel Speicherplatz erforderlich.
- **Daten-Disk-Snapshots** speichern nur die Benutzerdaten.

  {% note %}

  **Hinweise:**
  - Einige Plattformen ermöglichen es Ihnen nicht, einen Snapshot nur von Ihrer Daten-Disk zu erstellen. Bei diesen Plattformen müssen Sie einen Snapshot der gesamten VM erstellen.
  - Wenn von Ihrem Hypervisor keine vollständigen VM-Snapshots unterstützt werden, können Sie in schneller Abfolge einen Snapshot der Root- und Daten-Disk erstellen.

  {% endnote %}

| Plattform             | Snapshot-Methode | URL zur Snapshot-Dokumentation                                                                                                                                                                         |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Amazon AWS            | Disk             | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>                                                                                                                       |
| Azure                 | VM               | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>                                                                                                                              |
| Hyper-V               | VM               | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>                                                                                     |
| Google Compute Engine | Disk             | <https://cloud.google.com/compute/docs/disks/create-snapshots>                                                                                                                                         |
| VMware                | VM               | [https://pubs.vmware.com/vsphere-50/topic/com.vmware.wssdk.pg.doc_50/PG_Ch11_VM_Manage.13.3.html](https://pubs.vmware.com/vsphere-50/topic/com.vmware.wssdk.pg.doc_50/PG_Ch11_VM_Manage.13.3.html) |
| XenServer             | VM               | <https://support.citrix.com/article/CTX122978>                                                                                                                                                         |

### Upgrade mit einem Hotpatch

{% data reusables.enterprise_installation.hotpatching-explanation %} Mit der {% data variables.enterprise.management_console %} können Sie einen Hotpatch sofort installieren oder dessen Installation für einen späteren Zeitpunkt planen. An der Verwaltungsshell können Sie mit dem Dienstprogramm `ghe-upgrade` einen Hotpatch installieren. Weitere Informationen finden Sie unter „[Upgrade-Anforderungen](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)“.

{% note %}

**Hinweis:** In Clusterumgebungen ist die Installation eines Hotpatches mittels {% data variables.enterprise.management_console %} nicht verfügbar. Informationen zum Installieren eines Hotpatches in einer Clusterumgebung finden Sie unter „[Cluster-Upgrade](/enterprise/{{ currentVersion }}/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)“.

{% endnote %}

#### Upgrade einer einzelnen Appliance mit einem Hotpatch durchführen

##### Hotpatch mit der {% data variables.enterprise.management_console %} installieren

1. Aktivieren Sie automatisch Updates. Weitere Informationen finden Sie unter „[Automatische Updates aktivieren](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-automatic-update-checks/)“.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. Verwenden Sie nach dem Download eines neuen Hotpatches das Dropdownmenü für das Installationspaket:
    - Wählen Sie zur sofortigen Installation **Now** (Jetzt) aus:
    - Wählen Sie für die spätere Installation ein späteres Datum aus.![Dropdownmenü mit Hotpatch-Installationsdatum](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Click **Install**. ![Schaltfläche zum Installieren des Hotpatches](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

##### Hotpatch mit der Verwaltungsshell installieren

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Kopieren Sie die URL für das Upgrade-Hotpackage (Datei *.hpkg*).
{% data reusables.enterprise_installation.download-package %}
4. Führen Sie den Befehl `ghe-upgrade` aus, und verwenden Sie dabei den Paketdateinamen:
  ```shell
  admin@<em>HOSTNAME</em>:~$ ghe-upgrade <em>GITHUB-UPGRADE.hpkg</em>
  *** verifying upgrade package signature...
  ```
5. Wenn für den Kernel, MySQL, ElasticSearch oder andere Programme ein Neustart erforderlich ist, werden Sie vom Hotpatch-Upgrade-Skript dahingehend benachrichtigt.

#### Upgrade einer über Replikatinstanzen verfügenden Appliance mit einem Hotpatch durchführen

{% note %}

**Hinweis:** Zur Installation eines Hotpatches müssen Sie nicht in den Wartungsmodus wechseln oder die Replikation beenden.

{% endnote %}

Für die Hochverfügbarkeit und Geo-Replikation konfigurierte Appliances verwenden zusätzlich zu den primären Instanzen Replikatinstanzen. Zum Upgraden dieser Appliances müssen Sie die primäre Instanz und alle Replikatinstanzen nacheinander upgraden.

##### Upgrade der primären Instanz durchführen

1. Führen Sie ein Upgrade der primären Instanz durch. Befolgen Sie dazu die unter „[Hotpatch mit der Verwaltungsshell installieren](#installing-a-hotpatch-using-the-administrative-shell)“ beschriebenen Anweisungen.

##### Upgrade einer Replikatinstanz durchführen

{% note %}

**Hinweis:** Wenn Sie als Teil der Geo-Replikation mehrere Replikatinstanzen ausführen, sollten Sie diese Prozedur für jede Replikatinstanz nacheinander wiederholen.

{% endnote %}

1. Upgrade the replica instance by following the instructions in "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)." If you are using multiple replicas for Geo-replication, you must repeat this procedure to upgrade each replica one at a time.
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

### Upgrade mit einem Upgrade-Paket

Obwohl Sie einen Hotpatch verwenden können, um ein Upgrade auf die neueste Patch-Veröffentlichung in einer Featureserie durchzuführen, müssen Sie ein Upgrade-Paket verwenden, um ein Upgrade auf eine neuere Feature-Veröffentlichung durchzuführen. Wenn Sie beispielsweise ein Upgrade von `2.11.10` auf `2.12.4` durchführen möchten, müssen Sie ein Upgrade-Paket verwenden, da es sich um unterschiedliche Featureserien handelt. Weitere Informationen finden Sie unter „[Upgrade-Anforderungen](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)“.

#### Upgrade einer einzelnen Appliance mit einem Upgrade-Paket durchführen

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Wählen Sie die entsprechende Plattform aus, und kopieren Sie die URL für das Upgrade-Paket (Datei *.pkg*).
{% data reusables.enterprise_installation.download-package %}
4. Aktivieren Sie den Wartungsmodus, und warten Sie, bis alle aktiven Prozesse auf der {% data variables.product.prodname_ghe_server %}-Instanz abgeschlossen sind. Weitere Informationen finden Sie unter „[Wartungsmodus aktivieren und planen](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.

  {% note %}

  **Hinweis**: Wenn Sie in einer Hochverfügbarkeitskonfiguration ein Upgrade der primären Appliance durchführen, sollte sich die Appliance bereits im Wartungsmodus befinden, sofern Sie die unter „[Upgrade der primären Instanz durchführen](#upgrading-the-primary-instance)“ beschriebenen Anweisungen befolgen.

  {% endnote %}

5. Führen Sie den Befehl `ghe-upgrade` aus, und verwenden Sie dabei den Paketdateinamen:
  ```shell
  admin@<em>HOSTNAME</em>:~$ ghe-upgrade <em>GITHUB-UPGRADE.pkg</em>
  *** verifying upgrade package signature...
  ```
6. Bestätigen Sie, dass Sie das Upgrade fortsetzen möchten, und führen Sie nach der Überprüfung der Paketsignatur einen Neustart durch. Das neue Root-Dateisystem schreibt in die sekundäre Partition, und die Instanz startet automatisch im Wartungsmodus neu:
  ```shell
  *** applying update...
  This package will upgrade your installation to version <em>version-number</em>
  Current root partition: /dev/xvda1 [<em>version-number</em>]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
7. Deaktivieren Sie bei einzelnen Appliance-Upgrades den Wartungsmodus, damit Benutzer {% data variables.product.product_location %} verwenden können.

  {% note %}

  **Hinweis**: Wenn Sie in einer Hochverfügbarkeitskonfiguration ein Upgrade der Appliances durchführen, sollten Sie im Wartungsmodus bleiben, bis ein Upgrade sämtlicher Replikate durchgeführt wurde und die Replikation aktuell ist. Weitere Informationen finden Sie unter „[Upgrade einer Replikatinstanz durchführen](#upgrading-a-replica-instance)“.

  {% endnote %}

#### Upgrade einer über Replikatinstanzen verfügenden Appliance mit einem Upgrade-Paket durchführen

Für die Hochverfügbarkeit und Geo-Replikation konfigurierte Appliances verwenden zusätzlich zu den primären Instanzen Replikatinstanzen. Zum Upgraden dieser Appliances müssen Sie die primäre Instanz und alle Replikatinstanzen nacheinander upgraden.

##### Upgrade der primären Instanz durchführen

{% warning %}

**Warnung:** Wenn die Replikation angehalten wird, geht im Falle eines Fehlschlagens der primären Instanz die Arbeit verloren, die vor dem Upgrade des Replikats und dem Start der Replikation erledigt wird.

{% endwarning %}

1. Aktivieren Sie auf der primären Instanz den Wartungsmodus, und warten Sie auf den Abschluss sämtlicher aktiver Prozesse. Weitere Informationen finden Sie unter „[Wartungsmodus aktivieren](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)“.
{% data reusables.enterprise_installation.replica-ssh %}
3. Führen Sie auf der Replikatinstanz oder auf allen Replikatinstanzen, falls Sie als Teil der Geo-Replikation mehrere Replikatinstanzen ausführen, den Befehl `ghe-repl-stop` zum Anhalten der Replikation aus.
4. Führen Sie ein Upgrade der primären Instanz durch. Befolgen Sie dazu die unter „[Upgrade einer einzelnen Appliance mit einem Upgrade-Paket durchführen](#upgrading-a-single-appliance-with-an-upgrade-package)“ beschriebenen Anweisungen.

##### Upgrade einer Replikatinstanz durchführen

{% note %}

**Hinweis:** Wenn Sie als Teil der Geo-Replikation mehrere Replikatinstanzen ausführen, sollten Sie diese Prozedur für jede Replikatinstanz nacheinander wiederholen.

{% endnote %}

1. Upgrade the replica instance by following the instructions in "[Upgrading a single appliance with an upgrade package](#upgrading-a-single-appliance-with-an-upgrade-package)." If you are using multiple replicas for Geo-replication, you must repeat this procedure to upgrade each replica one at a time.
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} Wenn der Befehl `Replication is not running` zurückgibt, wird die Replikation möglicherweise noch gestartet. Warten Sie etwa eine Minute, bevor Sie `ghe-repl-status` erneut ausführen.

   {% note %}

    **Hinweis:** Während die erneute Synchronisierung verarbeitet wird, gibt der Befehl „ghe-repl-status“ ggf. erwartete Meldungen dahingehend zurück, dass die Replikation im Rückstand ist.
    Zum Beispiel: `CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists`

   {% endnote %}

   Falls der Befehl `ghe-repl-status` nicht den Wert `OK` zurückgibt, sollten Sie die folgenden Schritte befolgen, um die Replikation manuell neu zu starten.

   1. Führen Sie auf der Replikatinstanz den Befehl `ghe-repl-setup <primary-instance-ip>` erneut aus.
   {% data reusables.enterprise_installation.start-replication %}
   {% data reusables.enterprise_installation.replication-status %}
6. Deaktivieren Sie nach dem Upgrade-Abschluss des letzten Replikats und nach dem Abschluss der erneuten Synchronisierung den Wartungsmodus, damit Benutzer {% data variables.product.product_location %} verwenden können.

### Wiederherstellung nach einem fehlgeschlagenen Upgrade

Wenn ein Upgrade fehlschlägt oder unterbrochen wird, sollten Sie Ihre Instanz in ihren vorherigen Zustand zurücksetzen. Der entsprechende Prozess hängt vom Upgrade-Typ ab.

#### Rollback einer Patch-Veröffentlichung durchführen

Führen Sie den Befehl `ghe-upgrade` mit der Option `--allow-patch-rollback` aus, um ein Rollback einer Patch-Veröffentlichung durchzuführen. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

Weitere Informationen finden Sie unter „[Befehlszeilenprogramme](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-upgrade)“.

#### Rollback einer Feature-Veröffentlichung durchführen

Um ein Rollback von einer Feature-Veröffentlichung durchzuführen, stellen Sie diese über einen VM-Snapshot wieder her, um sicherzustellen, dass die Root- und Datenpartitionen einen konsistenten Zustand aufweisen. Weitere Informationen finden Sie unter „[Snapshot erstellen](#taking-a-snapshot)“.

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Weiterführende Informationen

- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
