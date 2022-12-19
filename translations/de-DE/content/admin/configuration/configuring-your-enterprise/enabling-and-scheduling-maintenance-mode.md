---
title: Wartungsmodus aktivieren und planen
intro: 'Für einige Standardwartungsprozeduren, beispielsweise für das Upgrade von {% data variables.product.product_location %} oder für das Wiederherstellen von Backups, muss die Instanz für die normale Verwendung offline genommen werden.'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
ms.openlocfilehash: 45ac412b1ae13e69d710c4dd93072143f6ffa502
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331768'
---
## Informationen zum Wartungsmodus

Bei einigen Vorgangstypen musst du {% data variables.product.product_location %} offlineschalten und in den Wartungsmodus versetzen:
- Upgrade auf eine neue Version von {% data variables.product.prodname_ghe_server %}
- Die der virtuellen Maschine zugeordneten CPU-, Arbeitsspeicher- oder  Speicherressourcen erhöhen
- Daten von einer virtuelle Maschine zu einer anderen migrieren
- Daten aus einem {% data variables.product.prodname_enterprise_backup_utilities %}-Snapshot wiederherstellen
- Fehlerbehebung bei bestimmten Typen kritischer Anwendungsprobleme

Du solltest ein Wartungsfenster für mindestens 30 Minuten in der Zukunft planen, um Benutzern Vorbereitungszeit zu geben. Nach der Planung eines Wartungsfensters wird allen Benutzern beim Zugriff auf die Website ein Banner angezeigt.



![Banner zur geplanten Wartung für Endbenutzer](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

Wenn sich die Instanz im Wartungsmodus befindet, wird der gesamte normale HTTP- und Git-Zugriff abgelehnt. Git-Abruf-, -Klon- und -Push-Vorgänge werden ebenfalls mit einer Fehlermeldung abgelehnt, die angibt, dass die Webseite temporär nicht verfügbar ist. Bei Konfigurationen mit Hochverfügbarkeit wird die Git-Replikation angehalten. GitHub Actions-Aufträge werden nicht ausgeführt. Wenn die Website in einem Browser aufgerufen wird, wird eine Wartungsseite angezeigt.

![Der Wartungsmodus-Startbildschirm](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

Du kannst die anfängliche Überprüfung deines Wartungsvorgangs durchführen, indem du eine IP-Ausnahmeliste konfigurierst, um den Zugriff auf {% data variables.product.product_location %} nur von den angegebenen IP-Adressen und Bereichen aus zu ermöglichen. Zugriffsversuche auf {% data variables.product.product_location %} über IP-Adressen, die nicht in der IP-Ausnahmeliste angegeben sind, erhalten dieselbe Antwort, die auch gesendet wird, wenn sich die Instanz im Wartungsmodus befindet. 

{% endif %}

## Wartungsmodus sofort aktiviert oder Wartungsfenster für späteren Zeitpunkt planen

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Klicke im oberen Bereich der {% data variables.enterprise.management_console %} auf **Wartung**.
  ![Registerkarte „Wartung“](/assets/images/enterprise/management-console/maintenance-tab.png)
3. Lege unter „Enable and schedule“ (Aktivieren und planen) fest, ob der Wartungsmodus sofort aktiviert werden soll oder ein Wartungsfenster für einen künftigen Zeitpunkt geplant werden soll.
    - Verwende zum sofortigen Aktivieren des Wartungsmodus das Dropdownmenü, und klicke auf **Jetzt**.
    ![Dropdownmenü mit ausgewählter Option „Jetzt“ zum Aktivieren des Wartungsmodus](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - Verwende das Dropdownmenü, und klicke auf eine Startzeit, wenn du das Wartungsfenster für einen künftigen Zeitpunkt planen möchtest.
    ![Dropdownmenü mit ausgewählter Option zum Planen des Wartungsfensters in zwei Stunden](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. Wähle **Wartungsmodus aktivieren** aus.
  ![Kontrollkästchen zum Aktivieren oder Planen des Wartungsmodus](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## Überprüfen von Änderungen im Wartungsmodus mithilfe der IP-Ausnahmeliste

Die IP-Ausnahmeliste bietet kontrollierten und eingeschränkten Zugriff auf {% data variables.product.product_location %} und eignet sich daher ideal für die anfängliche Überprüfung der Serverintegrität nach einem Wartungsvorgang. Nach der Aktivierung wird {% data variables.product.product_location %} aus dem Wartungsmodus entfernt und steht nur für die konfigurierten IP-Adressen zur Verfügung. Das Kontrollkästchen für den Wartungsmodus wird aktualisiert und spiegelt die Zustandsänderung wider.

Wenn du den Wartungsmodus erneut aktivierst, wird die IP-Ausnahmeliste deaktiviert, und {% data variables.product.product_location %} kehrt zum Wartungsmodus zurück. Wenn du einfach die IP-Ausnahmeliste deaktivierst, kehrt {% data variables.product.product_location %} zum normalen Vorgang zurück.

Du kannst auch ein Befehlszeilen-Hilfsprogramm verwenden, um die IP-Ausnahmeliste zu konfigurieren. Weitere Informationen findest du unter [Befehlszeilenprogramme](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance) und [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. Klicke oben in der {% data variables.enterprise.management_console %} auf **Wartung**, und bestätige, dass der Wartungsmodus bereits aktiviert ist.
  ![Registerkarte „Wartung“](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Wähle **IP-Ausnahmeliste aktivieren** aus.
 ![Kontrollkästchen zum Aktivieren der IP-Ausnahmeliste](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. Gib im Textfeld eine gültige Liste mit durch Leerzeichen getrennten IP-Adressen oder CIDR-Blöcken ein, denen der Zugriff auf {% data variables.product.product_location %} gestattet werden soll.
 ![Ausgefülltes Feld für IP-Adressen](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. Klicken Sie auf **Speichern**.
![Nach dem Speichern der IP-Ausnahmeliste](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## Wartungsmodus mit {% data variables.product.prodname_enterprise_api %} planen

Mit der {% data variables.product.prodname_enterprise_api %} kannst du die Wartung für unterschiedliche Zeitpunkt oder Datumsangaben planen. Weitere Informationen findest du unter [Verwaltungskonsole](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode).

## Wartungsmodus für alle Knoten in einem Cluster aktivieren oder deaktivieren

Mit dem `ghe-cluster-maintenance`-Hilfsprogramm kannst du den Wartungsmodus für jeden Knoten in einem Cluster festlegen oder die Festlegung aufheben.

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```
