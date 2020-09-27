---
title: GitHub Enterprise Server mit einem Load-Balancer verwenden
intro: 'Verwenden Sie einen Load-Balancer vor einer einzelnen {{ site.data.variables.product.prodname_ghe_server }}-Appliance oder einem Paar an Appliances in einer Hochverfügbarkeitskonfiguration.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer/
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.enterprise_clustering.load_balancer_intro }}

{{ site.data.reusables.enterprise_clustering.load_balancer_dns }}

### Clientverbindungsinformationen verarbeiten

Da Clientverbindungen zu {{ site.data.variables.product.prodname_ghe_server }} vom Load-Balancer stammen, kann die Client-IP-Adresse verloren gehen.

{{ site.data.reusables.enterprise_clustering.proxy_preference }}

{{ site.data.reusables.enterprise_clustering.proxy_xff_firewall_warning }}

#### PROXY-Protokollunterstützung auf {{ site.data.variables.product.product_location_enterprise }} aktivieren

Es wird dringend empfohlen, die PROXY-Protokollunterstützung für Ihre Appliance und für den Load-Balancer zu aktivieren. Befolgen Sie die Anweisungen Ihres Anbieters, um das PROXY-Protokoll auf Ihrem Load-Balancer zu aktivieren. Weitere Informationen finden Sie in der Dokumentation zum „[PROXY-Protokoll](http://www.haproxy.org/download/1.6/doc/proxy-protocol.txt)“.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.privacy }}
3. Wählen Sie **Enable support for PROXY protocol** (Unterstützung für PROXY-Protokoll aktivieren) unter **External load balancers** (Externe Load-Balancer) aus. ![Kontrollkästchen zum Aktivieren der Unterstützung für das PROXY-Protokoll](/assets/images/enterprise/management-console/enable-proxy.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

{{ site.data.reusables.enterprise_clustering.proxy_protocol_ports }}

#### X-Forwarded-For-Unterstützung auf {{ site.data.variables.product.product_location_enterprise }} aktivieren

{{ site.data.reusables.enterprise_clustering.x-forwarded-for }}

{{ site.data.reusables.enterprise_installation.terminating-tls }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.privacy }}
3. Wählen Sie **Allow HTTP X-Forwarded-For header** (HTTP X-Forwarded-For-Header zulassen) unter **External load balancers** (Externe Load-Balancer) aus. ![Kontrollkästchen zum Zulassen des HTTP X-Forwarded-For-Header](/assets/images/enterprise/management-console/allow-xff.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

{{ site.data.reusables.enterprise_clustering.without_proxy_protocol_ports }}

### Zustandsprüfungen konfigurieren

Zustandsprüfungen ermöglichen einem Load-Balancer, das Senden von Traffic an einen nicht antwortenden Knoten zu stoppen, wenn eine vorkonfigurierte Prüfung auf diesem Knoten fehlschlägt. Wenn die Appliance aufgrund einer Wartung oder eines unerwarteten Ausfalls offline ist, kann der Load-Balancer eine Statusseite anzeigen. In einer Hochverfügbarkeitskonfiguration (HA) kann ein Load-Balancer als Bestandteil einer Failover-Strategie verwendet werden. Das automatische Failover von HA-Paaren wird jedoch nicht unterstützt. Sie müssen die Replikat-Appliance manuell hochstufen, bevor sie Anforderungen verarbeitet. Weitere Informationen finden Sie unter „[{{ site.data.variables.product.prodname_ghe_server }} für Hochverfügbarkeit konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)“.

{{ site.data.reusables.enterprise_clustering.health_checks }}
{{ site.data.reusables.enterprise_site_admin_settings.maintenance-mode-status }}
