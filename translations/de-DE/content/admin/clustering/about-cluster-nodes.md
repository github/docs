---
title: Informationen zu Clusterknoten
intro: '*Knoten* sind {% data variables.product.prodname_ghe_server %}-Instanzen, die in einem Cluster arbeiten. Jeder Knoten führt eine Reihe an Diensten aus, die dem Cluster und schließlich den Benutzern bereitgestellt werden.'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

### Mindesthardwareempfehlungen
Jeder Knoten muss ein Root-Volume und ein separates Datenvolumen aufweisen. Es gibt Mindestempfehlungen. Entsprechend Ihrer Nutzung, beispielsweise in Bezug auf die Benutzeraktivität und die ausgewählten Integrationen, sind möglicherweise mehr Ressourcen erforderlich.

|                                   Dienste                                    | Minimaler Arbeitsspeicherbedarf | Minimaler freier Speicherplatz auf dem Datenvolume |
|:----------------------------------------------------------------------------:|:-------------------------------:|:--------------------------------------------------:|
|            `job-server`,<br/>`memcache-server`,<br/>`web-server`             |              14 GB              |                        1 GB                        |
|           `consul-server`,<br/>`mysql-server`,<br/>`redis-server`            |              14 GB              |                       10 GB                        |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` |              7 GB               |                       10 GB                        |
|                            `elasticsearch-server`                            |              14 GB              |                       10 GB                        |

### Für das Clustering erforderliche Dienste
Verwenden Sie zum Erzielen der angemessenen Redundanz diese Mindestanforderungen an Knoten, die jeden Dienst betreiben.

{% tip %}

**Hinweis:** Die Skalierbarkeitsanforderungen Ihrer Organisation hängen von vielen Faktoren ab, einschließlich der Größe und der Anzahl der Repositorys, der Anzahl der Benutzer und der Gesamtauslastung.

{% endtip %}

|                                   Dienste                                   | Minimaler Knotenbedarf |
|:---------------------------------------------------------------------------:|:----------------------:|
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` |           2            |
|                     `mysql-server`,<br/>`redis-server`                      |           2            |
|                               `consul-server`                               |           3            |
|           `git-server`,<br/>`pages-server`,<br/>`storage-server`            |           3            |
|                           `elasticsearch-server`                            |           3            |

### Empfehlungen zum Clusterdesign

Mittels Clustering können Dienste, die den {% data variables.product.prodname_ghe_server %} bilden, unabhängig voneinander per Scale-out erweitert werden. Diese Flexibilität kann genutzt werden, um einen Cluster zu konzipieren und zu implementieren, der zu Organisationen mit unterschiedlichen Skalierbarkeitsanforderungen passt. Beispielsweise benötigen einige Organisationen möglicherweise Speicherdurchsätze für große oder häufige Abrufe, die Webservernutzung ist jedoch relativ gering. Eine andere Organisation besitzt möglicherweise eine gute Leistung bei weniger Speicherressourcen, benötigt jedoch viele Knoten, auf denen `pages-server` oder `elasticsearch-server` ausgeführt wird. Es sind viele verschiedene Kombinationen möglich. Wenden Sie sich an Ihren Kundenbetreuer, um die beste Clusterkonfiguration für Ihre speziellen Anforderungen zu bestimmen.

- Verteilen Sie redundante Knoten über unabhängige Hardware hinweg. Wenn Sie CPU, Arbeitsspeicher oder Speichergeräte gemeinsam verwenden, wird die Leistung reduziert und Single Points of Failure ermöglicht. Gemeinsam verwendete Netzwerkkomponenten können ebenfalls den Durchsatz reduzieren und im Falle eines Ausfalls das Risiko des Konnektivitätsverlusts erhöhen.
- Verwenden Sie schnellen Speicher. Storage-Area-Networks (SAN) sind oftmals für die maximale Speicherauslastung, Verfügbarkeit und Fehlertoleranz optimiert und nicht für den absoluten Durchsatz. {% data variables.product.prodname_ghe_server %}-Clustering bietet Redundanz und Verfügbarkeit und funktioniert am besten auf dem schnellsten Speicher, der verfügbar ist. Lokaler SSD-Speicher wird empfohlen.
- Erstellen Sie die Knotenstufen, die für Ihre Organisation sinnvoll sind. Beispielkonfiguration:
  - Front-End-Ebene mit zwei Knoten und den folgenden Diensten:
    - `web-server`
    - `jobs-server`
    - `memcache-server`
  - Datenbank-Ebene mit drei Knoten und den folgenden Diensten:
    - `consul-server`
    - `mysql-server`
    - `redis-server`
  - Suchebene mit drei Knoten und dem folgenden Dienst:
    - `elasticsearch-server`
  - Speicherebene mit drei Knoten und den folgenden Diensten:
    - `git-server`
    - `pages-server`
    - `storage-server`
    - `metrics-server`

#### Beispielclusterdiagramm
{% note %}

**Hinweis: Dies ist nur ein Beispiel.** Das optimale Clusterdesign Ihrer Organisation hängt von Ihren individuellen Anforderungen ab. Kontaktiere Deinen engagierten Ansprechpartner oder {% data variables.contact.contact_enterprise_sales %} damit wir Dir helfen können, die beste Clusterkonfiguration zu bestimmen.

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="Beispielcluster" style="width: 800px;border:0" />
