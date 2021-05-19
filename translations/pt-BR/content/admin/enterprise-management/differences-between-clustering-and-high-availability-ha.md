---
title: Diferenças entre agrupamento e alta disponibilidade (HA)
intro: 'A configuração de alta disponibilidade do {% data variables.product.prodname_ghe_server %} é uma configuração de failover primário/secundário que fornece redundância, enquanto o cluster fornece redundância e dimensionamento distribuindo a carga de leitura e gravação em vários nós.'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  enterprise-server: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
---

### Cenários de falha

Tanto a alta disponibilidade (High Availability, HA) quanto o cluster fornecem redundância ao eliminar o nó único como ponto de falha. Ambos podem fornecer disponibilidade nos seguintes cenários:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

### Dimensionamento

{% data reusables.enterprise_clustering.clustering-scalability %} Na alta disponibilidade (HA), a dimensão do appliance depende exclusivamente do nó primário, e a carga não é distribuída para o servidor réplica.

### Diferenças entre configuração e método de failover

| Funcionalidade                       | Configuração de failover                                                                 | Método de failover                                                                                                            |
|:------------------------------------ |:---------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------- |
| Configuração de alta disponibilidade | Registro DNS com TTL baixo apontado para o appliance principal, ou balanceador de carga. | É preciso promover manualmente o appliance réplica nas configurações de balanceador de carga e failover de DNS.               |
| Clustering                           | O registro de DNS deve apontar para um balanceador de carga.                             | Se um nó por trás do balanceador de carga falhar, o tráfego será automaticamente enviado para os outros nós em funcionamento. |

### Backups e recuperação de desastre

Nem o clustering nem a HA devem ser considerados como substitutos para as medidas regulares de backup. Para obter mais informações, consulte "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)".

### Monitoramento

Os recursos de disponibilidade, especialmente os que têm failover automático, como clustering, podem mascarar falhas porque geralmente o serviço não é interrompido em caso de falha. Seja qual for a opção em uso (HA ou cluster), é importante monitorar a integridade de cada instância para você se manter a par das possíveis falhas. Para obter mais informações sobre monitoramento, consulte "[Limites recomendados de alerta](/enterprise/{{ currentVersion }}/admin/guides/installation/recommended-alert-thresholds/)" e "[Monitoramento de nós de cluster](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)."

### Leia mais
- Para obter mais informações sobre clustering no {% data variables.product.prodname_ghe_server %}, consulte "[Sobre clustering](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)".
- Para obter mais informações sobre HA, consulte "[Configurar o {% data variables.product.prodname_ghe_server %} para alta disponibilidade](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".
