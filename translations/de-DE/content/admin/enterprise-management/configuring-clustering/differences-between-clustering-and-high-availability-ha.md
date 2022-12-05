---
title: Unterschiede zwischen Clustering und Hochverfügbarkeit
intro: 'Die {% data variables.product.prodname_ghe_server %}-Hochverfügbarkeitskonfiguration ist eine Konfiguration mit einer primären/sekundären Failoverinstanz, die Redundanz bereitstellt. Demgegenüber bietet Clustering Redundanz und Skalierbarkeit, indem die Last für Lese- und Schreibvorgänge auf mehrere Knoten verteilt wird.'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Choosing cluster or HA
ms.openlocfilehash: 3a15defe4327b1aeed4f0db22586c75b233b5908
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332488'
---
## Fehlerszenarien

Hochverfügbarkeit und Clustering bieten Redundanz, indem der einzelne Knoten als ein Point of Failure beseitigt wird. In den folgenden Szenarien können sie Verfügbarkeit bieten:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## Skalierbarkeit

{% data reusables.enterprise_clustering.clustering-scalability %} in der Hochverfügbarkeitskonfiguration ist die Größe der Appliance nur vom primären Knoten abhängig, und die Last wird nicht an den Replikatserver verteilt.

## Unterschiede bei der Failover-Methode und -Konfiguration

| Funktion     | Failover-Konfiguration     | Failover-Methode |
| :------------- | :------------- | :--- |
| Hochverfügbarkeitskonfiguration       | DNS-Eintrag mit einem niedrigen TTL-Wert, der auf die primäre Appliance oder auf den Load-Balancer verweist. | Du musst die Replikat-Appliance in den DNS-Failover- und Load-Balancer-Konfigurationen manuell hochstufen. |
| Clustering | Der DNS-Eintrag muss auf einen Load-Balancer verweisen. | Wenn ein Knoten hinter dem Load-Balancer ausfällt, wird der Traffic automatisch an die anderen funktionierenden Knoten gesendet. |

## Sicherungen und Notfallwiederherstellung

Weder Hochverfügbarkeit noch Clustering sollten als Ersatz für regelmäßige Sicherungen betrachtet werden. Weitere Informationen findest du unter [Konfigurieren von Sicherungen auf deiner Appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance).

## Überwachung

Verfügbarkeitsfeatures, insbesondere mit einem automatischen Failover, beispielsweise Clustering, können einen Fehler maskieren, da der Dienst in der Regel nicht unterbrochen wird, wenn etwas fehlschlägt. Unabhängig davon, ob du Hochverfügbarkeit oder Clustering verwendest, ist es wichtig, den Zustand jeder Instanz zu überwachen, damit du weißt, wann ein Fehler auftritt. Weitere Informationen zur Überwachung findest du unter [Empfohlene Warnungsschwellenwerte](/enterprise/admin/guides/installation/recommended-alert-thresholds/) und [Überwachen von Clusterknoten](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/).

## Weitere Informationsquellen
- Weitere Informationen zum {% data variables.product.prodname_ghe_server %}-Clustering findest du unter [Informationen zum Clustering](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/).
- Weitere Informationen zur Hochverfügbarkeit findest du unter [Konfigurieren von {% data variables.product.prodname_ghe_server %} für Hochverfügbarkeit](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/).
