---
title: Informationen zur Geo-Replikation
intro: 'Die Geo-Replikation auf {% data variables.product.prodname_ghe_server %} verwendet mehrere aktive Replikate, um Anforderungen von geografisch verteilten Rechenzentren zu erfüllen.'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
  - /admin/enterprise-management/about-geo-replication
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - High availability
---

Mehrere aktive Replikate können eine kürzere Entfernung zum nächstgelegenen Replikat ermöglichen. Beispielsweise kann eine Organisation mit Niederlassungen in San Francisco, New York und London die primäre Appliance in einem Rechenzentrum in der Nähe von New York und zwei Replikate in Rechenzentren nahe San Francisco und London betreiben. Mittels Geolocation-fähigem DNS können Benutzer an den nächstgelegenen verfügbaren Server weitergeleitet werden und schneller auf Repository-Daten zugreifen. Wenn die Appliance nahe New York als die primäre Instanz festgelegt wird, ist die Latenz zwischen den Hosts niedriger, als dies der Fall wäre, wenn die Appliance nahe San Francisco als die primäre Instanz festgelegt werden würde, deren Verbindung nach London wiederum eine höhere Latenz aufweist.

Das aktive Replikat vermittelt Anforderungen, die es nicht selbst verarbeiten kann, an die primäre Instanz. Die Replikate fungieren als ein Point of Presence und beenden alle SSL-Verbindungen. Der Traffic zwischen den Hosts wird über eine verschlüsselte VPN-Verbindung gesendet. Dies ähnelt einer Hochverfügbarkeitskonfiguration mit zwei Knoten ohne Geo-Replikation.

Git requests and specific file server requests, such as LFS and file uploads, can be served directly from the replica without loading any data from the primary. Webanforderungen werden immer an die primäre Instanz weitergeleitet. Wenn das Replikat jedoch näher am Benutzer ist, sind die Anforderungen aufgrund der engeren SSL-Terminierung schneller.

Damit die Geo-Replikation ordnungsgemäß funktioniert, ist Geo DNS, beispielsweise [der Route 53-Dienst von Amazon](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo), erforderlich. Der Hostname für die Instanz sollte im Replikat aufgelöst werden, das dem Standort des Benutzers am nächsten liegt.

### Einschränkungen

Zum Senden von Anforderungen an das Replikat müssen die Daten an die primäre Instanz und an alle Replikate gesendet werden. This means that the performance of all writes are limited by the slowest replica, although new geo-replicas can seed the majority of their data from existing co-located geo-replicas, rather than from the primary. Von der Geo-Replikation werden einer {% data variables.product.prodname_ghe_server %}-Instanz weder Kapazitäten hinzugefügt noch werden Leistungsprobleme in Bezug auf unzureichende CPU- oder Arbeitsspeicherressourcen behoben. Wenn die primäre Appliance offline ist, können aktive Replikate keine Lese- oder Schreibanforderungen verarbeiten.

{% data reusables.enterprise_installation.replica-limit %}

### Geo-Replikationskonfiguration überwachen

{% data reusables.enterprise_installation.monitoring-replicas %}

### Weiterführende Informationen
- „[Geo-Replikationsreplikate erstellen](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)“
