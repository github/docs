---
title: Diferenças entre agrupamento e alta disponibilidade (HA)
intro: 'A configuração de alta disponibilidade do {% data variables.product.prodname_ghe_server %} é uma configuração de failover primário/secundário que fornece redundância, enquanto o cluster fornece redundância e dimensionamento distribuindo a carga de leitura e gravação em vários nós.'
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
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332485'
---
## Cenários de falha

Tanto a alta disponibilidade (High Availability, HA) quanto o cluster fornecem redundância ao eliminar o nó único como ponto de falha. Ambos podem fornecer disponibilidade nos seguintes cenários:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## Escalabilidade

{% data reusables.enterprise_clustering.clustering-scalability %} Na alta disponibilidade (HA), a dimensão do appliance depende exclusivamente do nó primário, e a carga não é distribuída para o servidor réplica.

## Diferenças entre configuração e método de failover

| Recurso     | Configuração de failover     | Método de failover |
| :------------- | :------------- | :--- |
| Configuração de alta disponibilidade       | Registro DNS com TTL baixo apontado para o appliance principal, ou balanceador de carga. | É preciso promover manualmente o appliance réplica nas configurações de balanceador de carga e failover de DNS. |
| Clustering | O registro de DNS deve apontar para um balanceador de carga. | Se um nó por trás do balanceador de carga falhar, o tráfego será automaticamente enviado para os outros nós em funcionamento. |

## Backup e recuperação de desastre

Nem o clustering nem a HA devem ser considerados como substitutos para as medidas regulares de backup. Para obter mais informações, confira "[Como configurar backups no seu dispositivo](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)".

## Monitoramento

Os recursos de disponibilidade, especialmente os que têm failover automático, como clustering, podem mascarar falhas porque geralmente o serviço não é interrompido em caso de falha. Seja qual for a opção em uso (HA ou cluster), é importante monitorar a integridade de cada instância para você se manter a par das possíveis falhas. Para obter mais informações sobre monitoramento, confira "[Limites de alerta recomendados](/enterprise/admin/guides/installation/recommended-alert-thresholds/)" e "[Monitoramento de nós de cluster](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)".

## Leitura adicional
- Para obter mais informações sobre o clustering do {% data variables.product.prodname_ghe_server %}, confira "[Sobre o clustering](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)".
- Para obter mais informações sobre a HA, confira "[Como configurar o {% data variables.product.prodname_ghe_server %} para alta disponibilidade](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".
