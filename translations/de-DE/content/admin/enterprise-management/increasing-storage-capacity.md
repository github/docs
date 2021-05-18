---
title: Speicherkapazität erhöhen
intro: 'Sie können die für Git-Repositorys, Datenbanken, Suchindizes und andere persistente Anwendungsdaten verfügbare Speicherkapazität erhöhen oder ändern.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

Wenn sich mehr Benutzer {% data variables.product.product_location %} anschließen, müssen Sie die Größe Ihres Storage-Volumes anpassen. Informationen zur Storage-Größenanpassung finden Sie in der Dokumentation für Ihre Virtualisierungsplattform.

### Anforderungen und Empfehlungen

{% note %}

**Hinweis:** Versetzen Sie Ihre Instanz in den Wartungsmodus, bevor Sie die Größe des Benutzer-Storage-Volumes anpassen. Weitere Informationen finden Sie unter „[Wartungsmodus aktivieren und planen](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.

{% endnote %}

#### Minimum requirements

{% data reusables.enterprise_installation.hardware-rec-table %}

### Größe der Datenpartition erhöhen

1. Passen Sie die Größe der vorhandenen Benutzer-Volume-Disk mithilfe der Tools Ihrer Virtualisierungsplattform an.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Versetzen Sie die Appliance in den Wartungsmodus. Weitere Informationen finden Sie unter „[Wartungsmodus aktivieren und planen](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.
4. Starten Sie die Appliance neu, um die neue Storage-Zuordnung zu ermitteln:
  ```shell
  $ sudo reboot
  ```
5. Run the `ghe-storage-extend` command to expand the `/data/user` filesystem:
  ```shell
  $ ghe-storage-extend
  ```

### Größe der Root-Partition mit einer neuen Appliance erhöhen

1. Richten Sie eine neue {% data variables.product.prodname_ghe_server %}-Instanz mit einer größeren Root-Disk ein. Verwenden Sie dazu dieselbe Version wie Ihre aktuelle Appliance. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Instanz einrichten](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)“.
2. Fahren Sie die aktuelle Appliance herunter:
  ```shell
  $ sudo poweroff
  ```
3. Trennen Sie mithilfe der Tools Ihrer Virtualisierungsplattform die Daten-Disk von der aktuellen Appliance.
4. Fügen Sie die Daten-Disk an die neue Appliance mit der größeren Root-Disk an.

### Größe der Root-Partition mit einer vorhandenen Appliance erhöhen

1. Fügen Sie eine neue Disk an Ihre {% data variables.product.prodname_ghe_server %}-Appliance an.
2. Führen Sie den Befehl `parted` aus, um die Disk zu formatieren:
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
3. Führen Sie den Befehl `ghe-upgrade` aus, um auf der neu partitionierten Disk ein vollständiges, plattformspezifisches Paket zu installieren. Ein universelles Hotpach-Upgrade-Paket wie `github-enterprise-2.11.9.hpkg` funktioniert nicht erwartungsgemäß.
  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
4. Fahren Sie die Appliance herunter:
  ```shell
  $ sudo poweroff
  ```
5. Entfernen Sie auf dem Hypervisor die alte Root-Disk, und fügen Sie die neue Root-Disk am selben Ort als die alte Root-Disk an.
6. Starten Sie die Appliance.
