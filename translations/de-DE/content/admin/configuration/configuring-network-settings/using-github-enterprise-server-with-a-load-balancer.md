---
title: GitHub Enterprise Server mit einem Load-Balancer verwenden
intro: 'Verwende einen Lastenausgleich vor einer einzelnen {% data variables.product.prodname_ghe_server %}-Instanz oder in einer Hochverfügbarkeitskonfiguration vor einem Paar von Instanzen.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
shortTitle: Use a load balancer
ms.openlocfilehash: dcbd1261d127e48140f6b6843ef4ec3c35fb84f4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147167315'
---
## Informationen zu Lastenausgleichsmodulen

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## Clientverbindungsinformationen verarbeiten

Da Clientverbindungen zu {% data variables.product.prodname_ghe_server %} vom Load-Balancer stammen, kann die Client-IP-Adresse verloren gehen.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### PROXY-Protokollunterstützung auf {% data variables.product.product_location %} aktivieren

Du solltest die PROXY-Protokollunterstützung unbedingt sowohl für deine Instanz als auch den Lastenausgleich aktivieren. Befolge die Anweisungen deines Anbieters, um das PROXY-Protokoll auf deinem Load-Balancer zu aktivieren. Weitere Informationen findest du in der [PROXY-Protokolldokumentation](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Wähle unter **Externe Lastenausgleichsmodule** die Option **Unterstützung für PROXY-Protokoll aktivieren** aus.
![Kontrollkästchen zum Aktivieren der Unterstützung für PROXY-Protokoll](/assets/images/enterprise/management-console/enable-proxy.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### X-Forwarded-For-Unterstützung für {% data variables.product.product_location %} aktivieren

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Warnung**: Wenn du die `X-Forwarded-For`-Unterstützung für {% data variables.product.product_location %} und Lastenausgleich konfigurierst, kannst du möglicherweise keine Verbindung mit der {% data variables.enterprise.management_console %} herstellen. Weitere Informationen findest du unter [Fehler: „Deine Sitzung ist abgelaufen“ für Verbindungen mit der {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console).

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Wähle unter **Externe Lastenausgleichsmodule** die Option **HTTP X-Forwarded-For-Header zulassen** aus.
![Kontrollkästchen zum Zulassen des HTTP X-Forwarded-For-Headers](/assets/images/enterprise/management-console/allow-xff.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Zustandsprüfungen konfigurieren

Zustandsprüfungen ermöglichen einem Load-Balancer, das Senden von Traffic an einen nicht antwortenden Knoten zu stoppen, wenn eine vorkonfigurierte Prüfung auf diesem Knoten fehlschlägt. Wenn die Instanz aufgrund einer Wartung oder eines unerwarteten Ausfalls offline ist, kann der Lastenausgleich eine Statusseite anzeigen. In einer Hochverfügbarkeitskonfiguration (HA) kann ein Load-Balancer als Bestandteil einer Failover-Strategie verwendet werden. Das automatische Failover von HA-Paaren wird jedoch nicht unterstützt. Du musst die Replikatinstanz manuell hochstufen, bevor sie Anforderungen verarbeitet. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_ghe_server %} für Hochverfügbarkeit](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/).

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Problembehandlung bei der Konnektivität über einen Lastenausgleich

Wenn du auf {% data variables.product.product_location %} über einen Lastenausgleich keine Verbindung mit Diensten herstellen kannst, kannst du die folgenden Informationen überprüfen, um das Problem zu behandeln.

{% note %}

**Hinweis**: Teste in einer Stagingumgebung immer Änderungen an deiner Netzwerkinfrastruktur und Instanzkonfiguration. Weitere Informationen findest du unter [Einrichten einer Staginginstanz](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

{% endnote %}

### Fehler: „Deine Sitzung ist abgelaufen“ für Verbindungen mit der {% data variables.enterprise.management_console %}

Wenn du die Unterstützung für den `X-Forwarded-For`-Header für deine Instanz und den Lastenausgleich aktivierst, kannst du möglicherweise nicht auf die {% data variables.enterprise.management_console %} deiner Instanz zugreifen. Weitere Informationen zur {% data variables.enterprise.management_console %} und zu Ports, die für Verbindungen erforderlich sind, findest du unter [Zugreifen auf die Verwaltungskonsole](/admin/configuration/configuring-your-enterprise/accessing-the-management-console) und [Netzwerkports](/admin/configuration/configuring-network-settings/network-ports).

Wenn {% data variables.product.product_location %} angibt, dass deine Sitzung abgelaufen ist, wenn du eine Verbindung mit der {% data variables.enterprise.management_console %} über einen Lastenausgleich herstellst, probiere eine der folgenden Konfigurationen für den Lastenausgleich aus.

- Deaktiviere `X-Forwarded-For`-Header für Verbindungen mit deiner Instanz an Ports 8080 und 8443.
- Konfiguriere deinen Lastenausgleich so, dass er auf Schicht 4 ausgeführt wird, und verwende das PROXY-Protokoll anstelle von `X-Forwarded-For` für das Passthrough von Client-IP-Adressen. Weitere Informationen findest du unter [PROXY-Protokollunterstützung auf {% data variables.product.product_location %} aktivieren](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance).

Weitere Informationen findest du in der Dokumentation für den Lastenausgleich.

### Liveupdates für Probleme und Überprüfungsausführungen funktionieren nicht

Wenn über einen Lastenausgleich oder Reverseproxy auf {% data variables.product.product_location %} zugegriffen wird, werden erwartete Liveupdates, z. B. neue Kommentare zu Problemen und Änderungen an Infobadges oder Ausgabe der Überprüfungsausführung, möglicherweise erst angezeigt, wenn die Seite aktualisiert wird. Dies ist am häufigsten der Fall, wenn der Reverseproxy oder Lastenausgleich in einem Schicht 7-Modus ausgeführt oder das erforderliche [Websocket-Protokoll](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) nicht unterstützt wird. 

Um Liveupdates zu aktivieren, musst du möglicherweise den Lastenausgleich oder Proxy neu konfigurieren. Weitere Informationen findest du in der Dokumentation für den Lastenausgleich.
