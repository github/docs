---
title: Speicherkapazität erhöhen
intro: 'Du kannst die für Git-Repositorys, Datenbanken, Suchindizes und andere persistente Anwendungsdaten verfügbare Speicherkapazität erhöhen oder ändern.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
ms.openlocfilehash: b6542e1f43ce4111358de3940c8e46dea2afd5d5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881122'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

Wenn mehr Benutzer*innen an {% data variables.product.product_location %} teilnehmen, musst du die Größe deines Speichervolumes anpassen. Informationen zur Storage-Größenanpassung findest du in der Dokumentation für deine Virtualisierungsplattform.

## Anforderungen und Empfehlungen

{% note %}

**Hinweis:** Bevor du die Größe eines Speichervolumes änderst, versetze deine Instanz in den Wartungsmodus.{% ifversion ip-exception-list %} Du kannst Änderungen überprüfen, indem du eine IP-Ausnahmeliste konfigurierst, um den Zugriff über angegebenen IP-Adressen zuzulassen. {% endif %} Weitere Informationen findest du unter [Aktivieren und Planen des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

{% endnote %}

### Mindestanforderungen

{% data reusables.enterprise_installation.hardware-rec-table %}

## Größe der Datenpartition erhöhen

1. Passe die Größe der vorhandenen Benutzer-Volume-Disk mithilfe der Tools deiner Virtualisierungsplattform an.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Versetze die Appliance in den Wartungsmodus. Weitere Informationen findest du unter [Aktivieren und Planen des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).
4. Starte die Appliance neu, um die neue Speicherzuordnung zu ermitteln:
  ```shell
  $ sudo reboot
  ```
5. Führe den Befehl `ghe-storage-extend` aus, um das Dateisystem `/data/user` zu erweitern:
  ```shell
  $ ghe-storage-extend
  ```

## Größe der Root-Partition mit einer neuen Appliance erhöhen

1. Richte eine neue {% data variables.product.prodname_ghe_server %}-Instanz mit einer größeren Root-Disk ein. Verwende dazu dieselbe Version wie deine aktuelle Appliance. Weitere Informationen findest du unter [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
2. Fahre die aktuelle Appliance herunter:
  ```shell
  $ sudo poweroff
  ```
3. Trenne mithilfe der Tools deiner Virtualisierungsplattform die Daten-Disk von der aktuellen Appliance.
4. Füge die Daten-Disk an die neue Appliance mit der größeren Root-Disk an.

## Größe der Root-Partition mit einer vorhandenen Appliance erhöhen

{% warning %}

**Warnung:** Bevor du die Stammpartition vergrößerst, musst du deine Instanz in den Wartungsmodus versetzen. Weitere Informationen findest du unter [Aktivieren und Planen des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

{% endwarning %}

1. Füge eine neue Disk an deine {% data variables.product.prodname_ghe_server %}-Appliance an.
1. Führe den Befehl `lsblk` aus, um den Gerätenamen des neuen Datenträgers zu ermitteln.
1. Führe den Befehl `parted` aus, um den Datenträger zu formatieren, und ersetze dabei `/dev/xvdg` durch deinen Gerätenamen:
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. Um die Replikation zu beenden, führst du den Befehl `ghe-repl-stop` aus.

   ```shell
   $ ghe-repl-stop
   ```
   
1. Führe den Befehl `ghe-upgrade` aus, um auf dem neu partitionierten Datenträger ein vollständiges, plattformspezifisches Paket zu installieren. Ein universelles Hotpatch-Upgradepaket wie `github-enterprise-2.11.9.hpkg` funktioniert nicht wie erwartet. Nach Abschluss des Befehls `ghe-upgrade` werden Anwendungsdienste automatisch beendet.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. Fahre die Appliance herunter:
  ```shell
  $ sudo poweroff
  ```
1. Entferne auf dem Hypervisor die alte Root-Disk, und füge die neue Root-Disk am selben Ort als die alte Root-Disk an.
1. Starten Sie die Appliance.
1. Stelle sicher, dass Systemdienste ordnungsgemäß funktionieren, und gib dann den Wartungsmodus frei. Weitere Informationen findest du unter [Aktivieren und Planen des Wartungsmodus](/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

Wenn deine Appliance für Hochverfügbarkeit oder Georeplikation konfiguriert ist, musst du die Replikation mit `ghe-repl-start` auf jedem Replikatknoten starten, nachdem der Speicher auf allen Knoten aktualisiert wurde.
