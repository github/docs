---
title: Zugreifen auf die Verwaltungskonsole
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console
  - /enterprise/admin/articles/management-console-for-emergency-recovery
  - /enterprise/admin/articles/web-based-management-console
  - /enterprise/admin/categories/management-console
  - /enterprise/admin/articles/accessing-the-management-console
  - /enterprise/admin/guides/installation/web-based-management-console
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Access the management console
ms.openlocfilehash: 60cd45e9e33dfbd037c831b96bed806dddcf6a21
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107125'
---
## Informationen zur {% data variables.enterprise.management_console %}

{% data variables.enterprise.management_console %} für grundlegende Verwaltungsaktivitäten verwenden:
- **Ersteinrichtung**: Führe den Prozess der Ersteinrichtung durch, wenn du {% data variables.location.product_location %} zum ersten Mal startest, indem du die IP-Adresse von {% data variables.location.product_location %} in deinem Browser öffnest.
- **Konfigurieren von Authentifizierungsrichtlinien für die {% data variables.enterprise.management_console %}** : Lege Ratenbegrenzungen für Anmeldeversuche und die Sperrdauer fest, wenn jemand die Ratenbegrenzung überschreitet. 
- **Konfigurieren der grundlegenden Einstellungen für deine Instanz**: Konfiguriere DNS, Hostnamen, SSL, Benutzerauthentifizierung, E-Mail, Überwachungsdienste und Protokollweiterleitung auf der Seite mit den Einstellungen.
- **Planen von Wartungsfenstern**: Schalte {% data variables.location.product_location %} offline, während du Wartungsarbeiten über die {% data variables.enterprise.management_console %} oder die Verwaltungsshell ausführst.
- **Problembehandlung**: Generiere ein Supportpaket oder zeige allgemeine Diagnoseinformationen an.
- **Lizenzverwaltung**: Zeige deine Lizenz für {% data variables.product.prodname_enterprise %} oder aktualisiere sie.

Du kannst über die IP-Adresse von {% data variables.location.product_location %} jederzeit auf die {% data variables.enterprise.management_console %} zugreifen, selbst wenn sich die Instanz im Wartungsmodus befindet oder wenn ein kritischer Anwendungsfehler oder eine fehlerhafte Hostnamen- oder SSL-Konfiguration vorliegt.

Um auf die {% data variables.enterprise.management_console %} zuzugreifen, musst du das während der Ersteinrichtung von {% data variables.location.product_location %} festgelegte Administratorkennwort verwenden. Zudem musst du auf Port 8443 eine Verbindung zum Host der virtuellen Maschine herstellen können. Wenn du Probleme hast, auf {% data variables.enterprise.management_console %} zuzugreifen, solltest du die Konfigurationen für die Zwischenfirewall und für die Sicherheitsgruppe überprüfen. 

Der Kennworthash für die {% data variables.enterprise.management_console %} wird in `/data/user/common/secrets.conf` gespeichert, und diese Datei wird automatisch von der primären Appliance in Hochverfügbarkeitsreplikaten synchronisiert. Alle Änderungen am Kennwort der primären Appliance werden automatisch in den Hochverfügbarkeitsreplikaten repliziert. Weitere Informationen zur Hochverfügbarkeit findest du unter [Informationen zur Hochverfügbarkeitskonfiguration](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration).

## Auf die {% data variables.enterprise.management_console %} als ein Websiteadministrator zugreifen

Wenn du zum ersten Mal als Websiteadministrator auf die {% data variables.enterprise.management_console %} zugreifst, musst du deine Lizenzdatei für {% data variables.product.prodname_enterprise %} hochladen, um dich bei der App zu authentifizieren. Weitere Informationen findest du unter [Verwalten deiner Lizenz für {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise).

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}

## Auf die {% data variables.enterprise.management_console %} als ein nicht authentifizierter Benutzer zugreifen

1. Öffne diese URL in deinem Browser und ersetze `hostname` durch deinen tatsächlichen Hostnamen oder deine tatsächliche IP-Adresse für {% data variables.product.prodname_ghe_server %}.
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## {% data variables.enterprise.management_console %} nach fehlerhaften Anmeldeversuchen entsperren

Die {% data variables.enterprise.management_console %} wird nach {% ifversion enterprise-authentication-rate-limits %}der Anzahl der fehlgeschlagenen Anmeldeversuche gesperrt, die du in deinen Authentifizierungsrichtlinien festgelegt hast. Weitere Informationen findest du unter [Konfigurieren von Ratenbegrenzungen für Authentifizierungsrichtlinien](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits).{% else %}zehn fehlgeschlagenen Anmeldeversuchen in einem Zeitraum von zehn Minuten gesperrt. Du musst auf die automatische Entsperrung des Anmeldebildschirms warten, bevor du versuchen kannst, dich erneut anzumelden. Der Anmeldebildschirm wird automatisch entsperrt, wenn im Zeitraum der letzten zehn Minuten weniger als zehn fehlerhafte Anmeldeversuche vorlagen. Nach einer erfolgreichen Anmeldung wird der Zähler zurückgesetzt.{% endif %}

{% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}

## Problembehandlung bei fehlgeschlagenen Verbindungen mit der {% data variables.enterprise.management_console %}

Wenn eine Verbindung mit der {% data variables.enterprise.management_console %} auf {% data variables.location.product_location %} nicht möglich ist, kannst du zur Problembehandlung die folgenden Informationen überprüfen.

### Fehler: „Ihre Sitzung ist abgelaufen“ bei Verbindungen über einen Lastenausgleich

Wenn du über einen Lastenausgleich auf {% data variables.location.product_location %} zugreifst und Verbindungen mit der {% data variables.enterprise.management_console %} mit der Meldung fehlschlagen, dass deine Sitzung abgelaufen sei, musst du deinen Lastenausgleich möglicherweise neu konfigurieren. Weitere Informationen findest du unter [Verwenden von {% data variables.product.product_name %} mit einem Lastenausgleich](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console).
