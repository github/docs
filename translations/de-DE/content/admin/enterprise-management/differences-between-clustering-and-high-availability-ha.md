---
title: Differences between clustering and high availability (HA)
intro: 'Die {% data variables.product.prodname_ghe_server %}-Hochverfügbarkeitskonfiguration ist eine Konfiguration mit einer primären/sekundären Failover-Instanz, die Redundanz bereitstellt. Demgegenüber bietet Clustering Redundanz und Skalierbarkeit, indem die Last für Lese- und Schreibvorgänge auf mehrere Knoten verteilt wird.'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  enterprise-server: '*'
---

### Fehlerszenarien

Hochverfügbarkeit und Clustering bieten Redundanz, indem der einzelne Knoten als ein Point of Failure beseitigt wird. In den folgenden Szenarien können sie Verfügbarkeit bieten:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

### Skalierbarkeit

{% data reusables.enterprise_clustering.clustering-scalability %} in der Hochverfügbarkeitskonfiguration ist die Größe der Appliance nur vom primären Knoten abhängig, und die Last wird nicht an den Replikatserver verteilt.

### Unterschiede bei der Failover-Methode und -Konfiguration

| Funktion                        | Failover-Konfiguration                                                                                       | Failover-Methode                                                                                                                 |
|:------------------------------- |:------------------------------------------------------------------------------------------------------------ |:-------------------------------------------------------------------------------------------------------------------------------- |
| Hochverfügbarkeitskonfiguration | DNS-Eintrag mit einem niedrigen TTL-Wert, der auf die primäre Appliance oder auf den Load-Balancer verweist. | Sie müssen die Replikat-Appliance in den DNS-Failover- und Load-Balancer-Konfigurationen manuell hochstufen.                     |
| Clustering                      | Der DNS-Eintrag muss auf einen Load-Balancer verweisen.                                                      | Wenn ein Knoten hinter dem Load-Balancer ausfällt, wird der Traffic automatisch an die anderen funktionierenden Knoten gesendet. |

### Backups und Disaster Recovery

Weder die Hochverfügbarkeit noch Clustering sollten als ein Ersatz für regelmäßige Backups angesehen werden. Weitere Informationen finden Sie unter „[Backups auf Ihrer Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)“.

### Überwachung

Verfügbarkeitsfeatures, insbesondere mit einem automatischen Failover, beispielsweise Clustering, können einen Fehler maskieren, da der Dienst in der Regel nicht unterbrochen wird, wenn etwas fehlschlägt. Unabhängig davon, ob Sie Hochverfügbarkeit oder Clustering verwenden, ist es wichtig, den Zustand jeder Instanz zu überwachen, damit Sie wissen, wann ein Fehler auftritt. Weitere Informationen finden Sie unter „[Empfohlene Schwellenwerte für Meldungen](/enterprise/{{ currentVersion }}/admin/guides/installation/recommended-alert-thresholds/)“ und „[Clusterknoten überwachen](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)“.

### Weiterführende Informationen
- Weitere Informationen zum {% data variables.product.prodname_ghe_server %}-Clustering, findest Du unter „[Informationen zum Clustering](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)“.
- Weitere Informationen zur Hochverfügbarkeit finden Sie unter „[{% data variables.product.prodname_ghe_server %} für Hochverfügbarkeit konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)“.
