---
title: Informationen zu Clustering
intro: 'Mittels {% data variables.product.prodname_ghe_server %}-Clustering können Dienste, die den {% data variables.product.prodname_ghe_server %} bilden, knotenübergreifend per Scale-out erweitert werden.'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview
  - /enterprise/admin/enterprise-management/about-clustering
  - /admin/enterprise-management/about-clustering
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 5da017898f1f0e205685dcf1fc29b5088030421a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332480'
---
## Clustering-Architektur

{% data variables.product.prodname_ghe_server %} besteht aus einer Reihe an Diensten. In einem Cluster werden diese Dienste knotenübergreifend ausgeführt, und die Last der Anforderungen wird zwischen ihnen ausgeglichen. Änderungen werden automatisch mit redundanten Kopien auf separaten Knoten gespeichert. Die meisten Dienste sind gleichwertige Peers mit anderen Instanzen desselben Diensts. Die Ausnahmen dafür sind `mysql-server`- und `redis-server`-Dienste. Diese funktionieren mit einem einzigen _primären_ Knoten mit einem oder mehreren _Replikat_-Knoten.

Weitere Informationen zu [Diensten, die für das Clustering erforderlich sind](/enterprise/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering).

## Ist Clustering die richtige Lösung für meine Organisation?

{% data reusables.enterprise_clustering.clustering-scalability %} Das Einrichten eines redundanten und skalierbaren Clusters kann jedoch komplex sein und erfordert eine genaue Planung. Diese zusätzliche Komplexität muss bei der Installation, bei Disaster Recovery-Szenarien und bei Upgrades berücksichtigt werden.

{% data variables.product.prodname_ghe_server %} erfordert eine niedrige Latenz zwischen den Knoten und ist nicht für die Redundanz über geografische Standorte hinweg vorgesehen.

Clustering bietet Redundanz, ist jedoch nicht dazu vorgesehen, eine Hochverfügbarkeitskonfiguration zu ersetzen. Weitere Informationen findest du unter [Informationen zur Konfiguration der Hochverfügbarkeit](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability). Eine Konfiguration mit einer primären/sekundären Failover-Instanz ist viel einfacher als Clustering und erfüllt die Anforderungen vieler Organisationen. Weitere Informationen findest du unter [Unterschiede zwischen Clustering und Hochverfügbarkeit](/enterprise/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/).

{% data reusables.package_registry.packages-cluster-support %}

## Wie kann ich auf Clustering zugreifen?

Clustering ist für bestimmte Skalierungssituationen vorgesehen, nicht aber für jede Organisation. Wenn Du Clustering in Betracht ziehen möchtest, wende Dich bitte an Deinen {% data variables.contact.contact_enterprise_sales %}.
