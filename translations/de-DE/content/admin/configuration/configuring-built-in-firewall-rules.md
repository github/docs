---
title: Integrierte Firewallregeln konfigurieren
intro: 'Sie können standardmäßige Firewallregeln anzeigen und Regeln für {% data variables.product.product_location %} anpassen.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings/
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

### Informationen zur Firewall der {% data variables.product.product_location %}

{% data variables.product.prodname_ghe_server %} verwendet die Uncomplicated Firewall (UFW) von Ubuntu auf der virtuellen Appliance. Weitere Informationen finden Sie unter „[UFW](https://help.ubuntu.com/community/UFW)“ in der Ubuntu-Dokumentation. {% data variables.product.prodname_ghe_server %} automatically updates the firewall allowlist of allowed services with each release.

Nachdem Sie {% data variables.product.prodname_ghe_server %} installiert haben, werden automatisch alle erforderlichen Netzwerkports zum Akzeptieren der Verbindungen geöffnet. Jeder nicht erforderliche Port wird automatisch als `deny` (verweigern) konfiguriert, und die standardmäßige Richtlinie für ausgehende Verbindungen wird als `allow` (zulassen) konfiguriert. Die Zustandsverfolgung ist für neue Verknüpfungen aktiviert. In der Regel handelt es sich dabei um Netzwerkpakete mit dem Bitsatz `SYN`. Weitere Informationen finden Sie unter „[Netzwerkports](/enterprise/admin/guides/installation/network-ports)“.

Die UWF-Firewall öffnet zudem verschiedene Ports, die für die ordnungsgemäße Funktion von {% data variables.product.prodname_ghe_server %} erforderlich sind. For more information on the UFW rule set, see [the UFW README](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213).

### Standardmäßige Firewallregeln anzeigen

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Führen Sie den Befehl `sudo ufw status` aus, um die standardmäßigen Firewallregeln anzuzeigen. Es sollte in etwa folgende Ausgabe angezeigt werden:
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

### Benutzerdefinierte Firewallregeln hinzufügen

{% warning %}

**Warnung:** Bevor Sie benutzerdefinierte Firewallregeln hinzufügen, sollten Sie Ihre aktuellen Regeln sichern, falls Sie in einen bekannten Betriebszustand zurückkehren müssen. Falls Ihr Server für Sie gesperrt ist, kontaktieren Sie {% data variables.contact.contact_ent_support %}, um die ursprünglichen Firewallregeln neu zu konfigurieren. Die Wiederherstellung der ursprünglichen Firewallregeln führt zu Ausfallzeiten für Ihren Server.

{% endwarning %}

1. Konfigurieren Sie eine benutzerdefinierte Firewallregel.
2. Führen Sie den Befehl `status numbered` aus, um den Status jeder neuen Regel zu überprüfen.
  ```shell
  $ sudo ufw status numbered
  ```
3. Führen Sie zum Sichern Ihrer benutzerdefinierten Firewallregeln den Befehl `cp` aus, um die Regeln in eine neue Datei zu verschieben.
  ```shell
  $ sudo cp -r /lib/ufw ~/ufw.backup
  ```

Nach dem Upgrade von {% data variables.product.product_location %} müssen Sie Ihre benutzerdefinierten Firewallregeln erneut anwenden. Sie sollten ein Skript erstellen, um Ihre benutzerdefinierten Firewallregeln erneut anzuwenden.

### Standardmäßige Firewallregeln wiederherstellen

Wenn nach dem Ändern der Firewallregeln ein Fehler auftritt, können Sie die Regeln über das ursprüngliche Backup wiederherstellen.

{% warning %}

**Warnung:** Falls Sie die ursprünglichen Regeln nicht gesichert haben, bevor Sie Änderungen an der Firewall vorgenommen haben, kontaktieren Sie {% data variables.contact.contact_ent_support %}, um weitere Unterstützung zu erhalten.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Kopieren Sie zum Wiederherstellen der vorherigen Backup-Regeln diese mithilfe des Befehls `cp` zurück zur Firewall.
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /lib/ufw
  ```
3. Führen Sie den Befehl `systemctl`aus, um die Firewall neu zu starten.
  ```shell
  $ sudo systemctl restart ufw
  ```
4. Führen Sie den Befehl `ufw status` aus, um zu bestätigen, dass die Regeln wieder ihre Standardwerte aufweisen.
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```
