---
title: Zeitsynchronisierung konfigurieren
intro: '{% data variables.product.prodname_ghe_server %} synchronisiert seine Uhr automatisch, indem Verbindungen zu NTP-Servern hergestellt werden. Sie können die zum Synchronisieren der Uhr verwendeten NTP-Server festlegen. Alternativ können Sie die NTP-Standardserver verwenden.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock/
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings/
  - /enterprise/admin/articles/setting-ntp-servers/
  - /enterprise/admin/categories/time/
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

### NTP-Standardserver ändern

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Klicken Sie auf der linken Seitenleiste auf **Time** (Zeit). ![Die Schaltfläche „Time“ (Zeit) auf der {% data variables.enterprise.management_console %}-Seitenleiste](/assets/images/enterprise/management-console/sidebar-time.png)
3. Geben Sie unter „Primary NTP server“ (Primärer NTP-Server) den Hostnamen des primären NTP-Servers ein. Geben Sie unter „Secondary NTP server“ (Sekundärer NTP-Server) den Hostnamen des sekundären NTP-Servers ein. ![Die Felder für die primären und sekundären NTP-Server in der {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/ntp-servers.png)
4. Klicken Sie im unteren Bereich der Seite auf **Save settings** (Einstellungen speichern). ![Die Schaltfläche „Save settings“ (Einstellungen speichern) in der {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/save-settings.png)
5. Warten Sie auf den Abschluss der Konfigurationsausführung.

### Große Zeitabweichung korrigieren

Das NTP-Protokoll korrigiert fortlaufend kleine Abweichungen bei der Zeitsynchronisierung. Mit der Verwaltungsshell können Sie die Zeit sofort synchronisieren.

{% note %}

**Hinweise:**
 - Die UTC-Zone (Coordinated Universal Time, koordinierte Weltzeit) kann nicht geändert werden.
 - Sie sollten Ihren Hypervisor am Versuch hindern, die Uhr der virtuellen Maschine festzulegen. Weitere Informationen finden Sie in der vom Virtualisierungsanbieter bereitgestellten Dokumentation.

{% endnote %}

- Führen Sie den Befehl `chronyc` aus, um den Server mit dem konfigurierten NTP-Server zu synchronisieren. Ein Beispiel:

```shell
$ sudo chronyc -a makestep
```
