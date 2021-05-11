---
title: Clusternetzwerk-Konfiguration
intro: '{% data variables.product.prodname_ghe_server %} Clustering basiert auf der richtigen DNS-Namensauflösung, dem Lastausgleich und der Kommunikation zwischen den Knoten, um ordnungsgemäß zu funktionieren.'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Grundlegendes zu Netzwerken

Das einfachste Netzwerkdesign für Clustering besteht darin, die Knoten in einem einzelnen LAN zu platzieren. If a cluster must span subnetworks, we do not recommend configuring any firewall rules between the networks. Zudem sollte die Latenz kleiner als 1 ms sein.

{% if currentVersion ver_gt "enterprise-server@2.21" %}For high availability, the latency between the network with the active nodes and the network with the passive nodes must be less than 70 milliseconds. We don't recommend configuring a firewall between the two networks.{% endif %}

#### Anwendungsports für Endbenutzer

Mit Anwendungsports können Endbenutzer auf Webanwendungen und Git zugreifen.

| Port     | Beschreibung                                                         | Verschlüsselt                                                                       |
|:-------- |:-------------------------------------------------------------------- |:----------------------------------------------------------------------------------- |
| 22/TCP   | Git über SSH                                                         | Ja                                                                                  |
| 25/TCP   | SMTP                                                                 | Erfordert STARTTLS                                                                  |
| 80/TCP   | HTTP                                                                 | Nein<br>(Wenn SSL aktiviert ist, leitet dieser Port Elemente an HTTPS weiter) |
| 443/TCP  | HTTPS                                                                | Ja                                                                                  |
| 9418/TCP | Einfacher Git-Protokollport<br>(Im privaten Modus deaktiviert) | Nein                                                                                |

#### Verwaltungsports

Verwaltungsports sind für die einfache Verwendung von Anwendungen durch Endbenutzer nicht erforderlich.

| Port     | Beschreibung                | Verschlüsselt                                                                       |
|:-------- |:--------------------------- |:----------------------------------------------------------------------------------- |
| ICMP     | ICMP Ping                   | Nein                                                                                |
| 122/TCP  | Verwaltungs-SSH             | Ja                                                                                  |
| 161/UDP  | SNMP                        | Nein                                                                                |
| 8080/TCP | HTTP für Managementkonsole  | Nein<br>(Wenn SSL aktiviert ist, leitet dieser Port Elemente an HTTPS weiter) |
| 8443/TCP | HTTPS für Managementkonsole | Ja                                                                                  |

#### Clusterkommunikationsports

Wenn sich zwischen Knoten eine Firewall auf Netzwerkebene befindet, müssen diese Ports zugänglich sein. Die Kommunikation zwischen Knoten ist nicht verschlüsselt. Diese Ports sollten extern nicht zugänglich sein.

| Port      | Beschreibung                 |
|:--------- |:---------------------------- |
| 1336/TCP  | Interne API                  |
| 3033/TCP  | Interner SVN-Zugriff         |
| 3037/TCP  | Interner SVN-Zugriff         |
| 3306/TCP  | MySQL                        |
| 4486/TCP  | Governor-Zugriff             |
| 5115/TCP  | Storage-Back-End             |
| 5208/TCP  | Interner SVN-Zugriff         |
| 6379/TCP  | Redis                        |
| 8001/TCP  | Grafana                      |
| 8090/TCP  | Interner GPG-Zugriff         |
| 8149/TCP  | GitRPC file server access    |
| 8300/TCP  | Consul                       |
| 8301/TCP  | Consul                       |
| 8302/TCP  | Consul                       |
| 9000/TCP  | Git-Daemon                   |
| 9102/TCP  | Pages file server            |
| 9105/TCP  | LFS-Server                   |
| 9200/TCP  | ElasticSearch                |
| 9203/TCP  | Dienst für semantischen Code |
| 9300/TCP  | ElasticSearch                |
| 11211/TCP | Memcache                     |
| 161/UDP   | SNMP                         |
| 8125/UDP  | Statsd                       |
| 8301/UDP  | Consul                       |
| 8302/UDP  | Consul                       |
| 25827/UDP | Collectd                     |

### Load-Balancer konfigurieren

 Sie sollten einen externen TCP-basierten Load-Balancer verwenden, der das PROXY-Protokoll unterstützt, um den Traffic auf die Knoten zu verteilen. Beachten Sie die folgenden Load-Balancer-Konfigurationen:

 - TCP-Ports (siehe unten) sollten an Knoten weitergeleitet werden, auf denen der Dienst `web-server` ausgeführt wird. Dies sind die einzigen Knoten, die externe Clientanfragen verarbeiten.
 - Sticky Sessions sollten nicht aktiviert werden.

{% data reusables.enterprise_installation.terminating-tls %}

### Clientverbindungsinformationen verarbeiten

Da Clientverbindungen zum Cluster vom Load-Balancer stammen, kann die Client-IP-Adresse verloren gehen. Zum entsprechenden Erfassen der Clientverbindungsinformationen sind zusätzliche Überlegungen nötig.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

#### PROXY-Unterstützung auf {% data variables.product.prodname_ghe_server %} aktivieren

Es wird dringend empfohlen, die PROXY-Unterstützung für Ihre Instanz und für den Load-Balancer zu aktivieren.

 - Führen Sie für Ihre Instanz den folgenden Befehl aus:
  ```shell
  $ ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```
  - Verwenden Sie für den Load-Balancer die von Ihrem Anbieter bereitgestellten Anweisungen.

  {% data reusables.enterprise_clustering.proxy_protocol_ports %}

#### X-Forwarded-For-Unterstützung für {% data variables.product.prodname_ghe_server %} aktivieren

{% data reusables.enterprise_clustering.x-forwarded-for %}

Führen Sie zum Aktivieren des Headers `X-Fowarded-For` den folgenden Befehl aus:

```shell
$ ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

#### Zustandsprüfungen konfigurieren
Zustandsprüfungen ermöglichen einem Load-Balancer, das Senden von Traffic an einen nicht antwortenden Knoten zu stoppen, wenn eine vorkonfigurierte Prüfung auf diesem Knoten fehlschlägt. Wenn ein Clusterknoten fehlschlägt, bieten die mit den redundanten Knoten gekoppelten Zustandsprüfungen Hochverfügbarkeit.

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

### DNS-Anforderungen

{% data reusables.enterprise_clustering.load_balancer_dns %}
