---
title: Informationen zu Clusterknoten
intro: '*Knoten* sind {% data variables.product.prodname_ghe_server %}-Instanzen, die in einem Cluster betrieben werden. Jeder Knoten führt verschiedene Dienste aus, die für den Cluster und letztendlich die Benutzer*innen bereitgestellt werden.'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
  - /admin/enterprise-management/about-cluster-nodes
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 6c009e5d5aa1c2f0b2d3effb3beab2d51f48b070
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167073'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## Mindesthardwareempfehlungen
Jeder Knoten muss ein Root-Volume und ein separates Datenvolumen aufweisen. Es gibt Mindestempfehlungen. Entsprechend deiner Nutzung, beispielsweise in Bezug auf die Benutzeraktivität und die ausgewählten Integrationen, sind möglicherweise mehr Ressourcen erforderlich.

| Dienste | Minimaler Arbeitsspeicherbedarf    | Minimaler freier Speicherplatz auf dem Datenvolume |
| :-: | :-: | :-: |
| `job-server`,<br/>`memcache-server`,<br/>`web-server` | 14 GB | 1 GB |
| `consul-server`,<br/>`mysql-server`,<br/>`redis-server` | 14 GB | 10 GB |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` | 14 GB | 10 GB |
| `elasticsearch-server` | 14 GB | 10 GB |

## Für das Clustering erforderliche Dienste
Verwende zum Erzielen der angemessenen Redundanz diese Mindestanforderungen an Knoten, die jeden Dienst betreiben.

{% tip %}

**Hinweis:** Die Skalierbarkeitsanforderungen deiner Organisation hängen von vielen Faktoren ab, einschließlich der Größe und der Anzahl der Repositorys, der Anzahl der Benutzer*innen und der Gesamtauslastung.

{% endtip %}

| Dienste | Minimaler Knotenbedarf |
| :-: | :-: |
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` | 2 |
| `mysql-server`,<br/>`redis-server` | 2 |
| `consul-server` | 3 |
| `git-server`,<br/>`pages-server`,<br/>`storage-server` | 3 |
| `elasticsearch-server` | 3 |

## Empfehlungen zum Clusterdesign

Mittels Clustering können Dienste, die den {% data variables.product.prodname_ghe_server %} bilden, unabhängig voneinander per Scale-out erweitert werden. Diese Flexibilität kann genutzt werden, um einen Cluster zu konzipieren und zu implementieren, der zu Organisationen mit unterschiedlichen Skalierbarkeitsanforderungen passt. Beispielsweise benötigen einige Organisationen möglicherweise Speicherdurchsätze für große oder häufige Abrufe, die Webservernutzung ist jedoch relativ gering. Eine andere Organisation hat möglicherweise eine gute Leistung mit weniger Speicherressourcen, benötigt jedoch viele Knoten, die `pages-server` oder `elasticsearch-server` ausgeführt werden. Es sind viele verschiedene Kombinationen möglich. Wende dich an deinen Kundenbetreuer, um die beste Clusterkonfiguration für deine speziellen Anforderungen zu bestimmen.

- Verteile redundante Knoten über unabhängige Hardware hinweg. Wenn du CPU, Arbeitsspeicher oder Speichergeräte gemeinsam verwendest, wird die Leistung reduziert und Single Points of Failure ermöglicht. Gemeinsam verwendete Netzwerkkomponenten können ebenfalls den Durchsatz reduzieren und im Falle eines Ausfalls das Risiko des Konnektivitätsverlusts erhöhen.
- Verwende schnellen Speicher. Storage-Area-Networks (SAN) sind oftmals für die maximale Speicherauslastung, Verfügbarkeit und Fehlertoleranz optimiert und nicht für den absoluten Durchsatz. {% data variables.product.prodname_ghe_server %}-Clustering bietet Redundanz und Verfügbarkeit und funktioniert am besten auf dem schnellsten Speicher, der verfügbar ist. Lokaler SSD-Speicher wird empfohlen.
- Erstelle die Knotenstufen, die für deine Organisation sinnvoll sind. Beispielkonfiguration:
  - Front-End-Ebene mit zwei Knoten und den folgenden Diensten:
    - `web-server`
    - `job-server`
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

### Beispielclusterdiagramm
{% note %}

**Hinweis: Dies ist nur ein Beispiel.** Das optimale Clusterdesign deiner Organisation hängt von deinen individuellen Anforderungen ab. Kontaktiere deinen engagierten Ansprechpartner oder {% data variables.contact.contact_enterprise_sales %} damit wir Dir helfen können, die beste Clusterkonfiguration zu bestimmen.

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="Example Cluster" style="width: 800px;border:0"/>
