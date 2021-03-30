---
title: Wartungsmodus aktivieren und planen
intro: 'Für einige Standardwartungsprozeduren, beispielsweise für das Upgrade von {% data variables.product.product_location %} oder für das Wiederherstellen von Backups, muss die Instanz für die normale Verwendung offline genommen werden.'
redirect_from:
  - /enterprise/admin/maintenance-mode/
  - /enterprise/admin/categories/maintenance-mode/
  - /enterprise/admin/articles/maintenance-mode/
  - /enterprise/admin/articles/enabling-maintenance-mode/
  - /enterprise/admin/articles/disabling-maintenance-mode/
  - /enterprise/admin/guides/installation/maintenance-mode/
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

### Informationen zum Wartungsmodus

Bei einigen Vorgangstypen müssen Sie {% data variables.product.product_location %} offline nehmen und in den Wartungsmodus versetzen.
- Upgrade auf eine neue Version von {% data variables.product.prodname_ghe_server %}
- Die der virtuellen Maschine zugeordneten CPU-, Arbeitsspeicher- oder  Speicherressourcen erhöhen
- Daten von einer virtuelle Maschine zu einer anderen migrieren
- Daten aus einem {% data variables.product.prodname_enterprise_backup_utilities %}-Snapshot wiederherstellen
- Fehlerbehebung bei bestimmten Typen kritischer Anwendungsprobleme

Sie sollten ein Wartungsfenster für mindestens 30 Minuten in der Zukunft planen, um Benutzern Vorbereitungszeit zu geben. Nach der Planung eines Wartungsfensters wird allen Benutzern beim Zugriff auf die Website ein Banner angezeigt.

![Banner zur geplanten Wartung für Endbenutzer](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

Wenn sich die Instanz im Wartungsmodus befindet, wird der gesamte normale HTTP- und Git-Zugriff abgelehnt. Git-Abruf-, -Klon- und -Push-Vorgänge werden ebenfalls mit einer Fehlermeldung abgelehnt, die angibt, dass die Webseite temporär nicht verfügbar ist. Wenn die Website in einem Browser aufgerufen wird, wird eine Wartungsseite angezeigt.

![Der Wartungsmodus-Startbildschirm](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

### Wartungsmodus sofort aktiviert oder Wartungsfenster für späteren Zeitpunkt planen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Klicken Sie im oberen Bereich der {% data variables.enterprise.management_console %} auf **Maintenance** (Wartung). ![Registerkarte „Maintenance“ (Wartung)](/assets/images/enterprise/management-console/maintenance-tab.png)
3. Legen Sie unter „Enable and schedule“ (Aktivieren und planen) fest, ob der Wartungsmodus sofort aktiviert werden soll oder ein Wartungsfenster für einen künftigen Zeitpunkt geplant werden soll.
    - Verwenden Sie zum sofortigen Aktivieren des Wartungsmodus das Dropdownmenü, und klicken Sie auf **now** (Jetzt). ![Dropdownmenü mit der ausgewählten Option „now“ (Jetzt) zum Aktivieren des Wartungsmodus](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - Verwenden Sie das Dropdownmenü, und klicken Sie auf eine Startzeit, wenn Sie das Wartungsfenster für einen künftigen Zeitpunkt planen möchten.![Dropdownmenü mit der ausgewählten Option zum Planen des Wartungsfensters in zwei Stunden](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. Wählen Sie **Enable maintenance mode** (Wartungsmodus aktivieren) aus. ![Kontrollkästchen zum Aktivieren oder Planen des Wartungsmodus](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### Wartungsmodus mit {% data variables.product.prodname_enterprise_api %} planen

Mit der {% data variables.product.prodname_enterprise_api %} können Sie die Wartung für unterschiedliche Zeitpunkt oder Datumsangaben planen. For more information, see "[Management Console](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)."

### Wartungsmodus für alle Knoten in einem Cluster aktivieren oder deaktivieren

Mit dem Dienstprogramm `ghe-cluster-maintenance` können Sie den Wartungsmodus für jeden Knoten in einem Cluster festlegen oder dessen Festlegung aufheben.

```shell
$ ghe-cluster-maintenance -h
# Optionen anzeigen
$ ghe-cluster-maintenance -q
# Abfragen im aktuellen Modus
$ ghe-cluster-maintenance -s
# Legt den Wartungsmodus fest
$ ghe-cluster-maintenance -u
# Hebt die Festlegung des Wartungsmodus auf
```
