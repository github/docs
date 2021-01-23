---
title: Informationen zu Clustering
intro: 'Mittels {% data variables.product.prodname_ghe_server %}-Clustering können Dienste, die den {% data variables.product.prodname_ghe_server %} bilden, knotenübergreifend per Scale-out erweitert werden.'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview/
  - /enterprise/admin/enterprise-management/about-clustering
versions:
  enterprise-server: '*'
---

### Clustering-Architektur

{% data variables.product.prodname_ghe_server %} besteht aus einer Reihe an Diensten. In einem Cluster werden diese Dienste knotenübergreifend ausgeführt, und die Last der Anforderungen wird zwischen ihnen ausgeglichen. Änderungen werden automatisch mit redundanten Kopien auf separaten Knoten gespeichert. Die meisten Dienste sind gleichwertige Peers mit anderen Instanzen desselben Diensts. Die Dienste `mysql-server` und `redis-server` bilden hierzu die Ausnahmen. Diese werden mit einem einzelnen _primären_ Knoten betrieben, der mindestens einen _Replikatknoten_ aufweist.

Learn more about [services required for clustering](/enterprise/{{ currentVersion }}/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering).

### Ist Clustering die richtige Lösung für meine Organisation?

{% data reusables.enterprise_clustering.clustering-scalability %} Das Einrichten eines redundanten und skalierbaren Clusters kann jedoch komplex sein und erfordert eine genaue Planung. Diese zusätzliche Komplexität muss bei der Installation, bei Disaster Recovery-Szenarien und bei Upgrades berücksichtigt werden.

{% data variables.product.prodname_ghe_server %} erfordert eine niedrige Latenz zwischen den Knoten und ist nicht für die Redundanz über geografische Standorte hinweg vorgesehen.

Clustering bietet Redundanz, ist jedoch nicht dazu vorgesehen, eine Hochverfügbarkeitskonfiguration zu ersetzen. Weitere Informationen finden Sie unter „[Hochverfügbarkeitskonfiguration](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability)“. Eine Konfiguration mit einer primären/sekundären Failover-Instanz ist viel einfacher als Clustering und erfüllt die Anforderungen vieler Organisationen. Weitere Informationen finden Sie unter „[Unterschiede zwischen Clustering und Hochverfügbarkeit](/enterprise/{{ currentVersion }}/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/)“.

{% data reusables.package_registry.packages-cluster-support %}

### Wie kann ich auf Clustering zugreifen?

Clustering ist für bestimmte Skalierungssituationen vorgesehen, nicht aber für jede Organisation. Wenn Du Clustering in Betracht ziehen möchtest, wende Dich bitte an Deinen {% data variables.contact.contact_enterprise_sales %}.
