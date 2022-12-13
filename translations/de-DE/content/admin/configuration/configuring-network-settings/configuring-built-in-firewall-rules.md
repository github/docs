---
title: Integrierte Firewallregeln konfigurieren
intro: 'Du kannst standardmäßige Firewallregeln anzeigen und Regeln für {% data variables.product.product_location %} anpassen.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
ms.openlocfilehash: 7492f69c6b334847229c76f7462beaabbc4154a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145106991'
---
## Informationen zur {% data variables.product.product_location %}-Firewall

{% data variables.product.prodname_ghe_server %} verwendet die Uncomplicated Firewall (UFW) von Ubuntu auf der virtuellen Appliance. Weitere Informationen findest du unter "[UFW](https://help.ubuntu.com/community/UFW)" in der Ubuntu-Dokumentation. {% data variables.product.prodname_ghe_server %} aktualisiert die Firewall-Positivliste der zulässigen Dienste in jeder Version automatisch.

Nachdem du {% data variables.product.prodname_ghe_server %} installiert hast, werden automatisch alle erforderlichen Netzwerkports zum Akzeptieren der Verbindungen geöffnet. Jeder nicht benötigte Port wird automatisch als `deny` konfiguriert, und die Standardrichtlinie für ausgehende Verbindungen wird als `allow` konfiguriert. Zustandsverfolgung ist für alle neuen Verbindungen aktiviert; das sind typischerweise Netzwerkpakete, bei denen `SYN` Bit gesetzt ist. Weitere Informationen findest du unter [Netzwerkports](/enterprise/admin/guides/installation/network-ports).

Die UWF-Firewall öffnet zudem verschiedene Ports, die für die ordnungsgemäße Funktion von {% data variables.product.prodname_ghe_server %} erforderlich sind. Weitere Informationen zum UFW-Regelsatz findest du im [UFW README](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213).

## Standardmäßige Firewallregeln anzeigen

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Um die Standard-Firewallregeln anzuzeigen, verwende den `sudo ufw status` Befehl. Eine ähnliche Ausgabe wie die folgende sollte angezeigt werden:
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

## Benutzerdefinierte Firewallregeln hinzufügen

{% warning %}

**Warnung:** Bevor du benutzerdefinierte Firewallregeln hinzufügst, solltest du eine Sicherungskopie deiner aktuellen Regeln erstellen, falls du sie auf einen bekannten, funktionierenden Zustand zurücksetzen musst. Falls dein Server für dich gesperrt ist, kontaktiere {% data variables.contact.contact_ent_support %}, um die ursprünglichen Firewallregeln neu zu konfigurieren. Die Wiederherstellung der ursprünglichen Firewallregeln führt zu Ausfallzeiten für deinen Server.

{% endwarning %}

1. Konfiguriere eine benutzerdefinierte Firewallregel.
2. Überprüfe den Status jeder neuen Regel mit dem `status numbered` Befehl.
  ```shell
  $ sudo ufw status numbered
  ```
3. Um deine benutzerdefinierten Firewallregeln zu sichern, verwende den `cp` Befehl, um die Regeln in eine neue Datei zu verschieben.
  ```shell
  $ sudo cp -r /etc/ufw ~/ufw.backup
  ```

Nachdem du {% data variables.product.product_location %} aktualisiert hast, musst du deine benutzerdefinierten Firewallregeln erneut anwenden. Du solltest ein Skript erstellen, um deine benutzerdefinierten Firewallregeln erneut anzuwenden.

## Standardmäßige Firewallregeln wiederherstellen

Wenn nach dem Ändern der Firewallregeln ein Fehler auftritt, kannst du die Regeln über das ursprüngliche Backup wiederherstellen.

{% warning %}

**Warnung:** Wenn du die ursprünglichen Regeln nicht gesichert hast, bevor du Änderungen an der Firewall vorgenommen hast, wende dich an {% data variables.contact.contact_ent_support %} für weitere Unterstützung.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Kopiere zum Wiederherstellen der vorherigen Backup-Regeln diese mithilfe des `cp` Befehls zurück zur Firewall.
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /etc/ufw
  ```
3. Starte die Firewall mit dem `systemctl` Befehl neu.
  ```shell
  $ sudo systemctl restart ufw
  ```
4. Führe den `ufw status` Befehl aus, um zu bestätigen, dass die Regeln wieder ihre Standardwerte aufweisen.
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
