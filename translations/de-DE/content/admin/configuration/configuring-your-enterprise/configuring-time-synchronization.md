---
title: Zeitsynchronisierung konfigurieren
intro: '{% data variables.product.prodname_ghe_server %} synchronisiert seine Uhr automatisch, indem Verbindungen zu NTP-Servern hergestellt werden. Du kannst die zum Synchronisieren der Uhr verwendeten NTP-Server festlegen. Alternativ kannst du die NTP-Standardserver verwenden.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings
  - /enterprise/admin/articles/setting-ntp-servers
  - /enterprise/admin/categories/time
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure time settings
ms.openlocfilehash: 34ab851e50467a06eb0003d32306d1cd26e9a2d8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145103012'
---
## NTP-Standardserver ändern

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Klicke in der linken Seitenleiste auf **Uhrzeit**.
    ![Die Schaltfläche „Zeit“ in der {% data variables.enterprise.management_console %}-Seitenleiste](/assets/images/enterprise/management-console/sidebar-time.png)
3. Gib unter „Primary NTP server“ (Primärer NTP-Server) den Hostnamen des primären NTP-Servers ein. Gib unter „Secondary NTP server“ (Sekundärer NTP-Server) den Hostnamen des sekundären NTP-Servers ein.
    ![Die Felder für die primären und sekundären NTP-Server in der {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/ntp-servers.png)
4. Klicke unten auf der Seite auf **Einstellungen speichern**.
    ![Die Schaltfläche „Einstellungen speichern“ in der{% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/save-settings.png)
5. Warte auf den Abschluss der Konfigurationsausführung.

## Große Zeitabweichung korrigieren

Das NTP-Protokoll korrigiert fortlaufend kleine Abweichungen bei der Zeitsynchronisierung. Mit der Verwaltungsshell kannst du die Zeit sofort synchronisieren.

{% note %}

**Hinweise:**
 - Die UTC-Zone (Coordinated Universal Time, koordinierte Weltzeit) kann nicht geändert werden.
 - Du solltest deinen Hypervisor am Versuch hindern, die Uhr der virtuellen Maschine festzulegen. Weitere Informationen findest du in der vom Virtualisierungsanbieter bereitgestellten Dokumentation.

{% endnote %}

- Führe den Befehl `chronyc` aus, um den Server mit dem konfigurierten NTP-Server zu synchronisieren. Beispiel:

```shell
$ sudo chronyc -a makestep
```
