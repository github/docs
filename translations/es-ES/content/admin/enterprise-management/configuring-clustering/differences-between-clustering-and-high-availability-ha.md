---
title: Diferencias entre los agrupamientos y la disponibilidad alta (HA)
intro: '{% data variables.product.prodname_ghe_server %} La configuración de alta disponibilidad es una configuración de conmutación primaria/secundaria que brinda redundancia mientras que el agrupamiento brinda redundancia y escalabilidad al distribuir cargas de lectura y escritura entre múltiples nodos.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332492'
---
## Escenarios de fallas

Tanto la alta disponibilidad (HA, por sus siglas en inglés) como el agrupamiento brindan redundancia al eliminar el nodo único como punto de falla. Pueden brindar disponibilidad en estos escenarios:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## Escalabilidad

{% data reusables.enterprise_clustering.clustering-scalability %} En HA, la escala de este aparato depende exclusivamente del nodo principal y la cara no se distribuye al servidor de réplica.

## Diferencias en el método de conmutación y configuración

| Característica     | Configuración de conmutación     | Método de conmutación por error |
| :------------- | :------------- | :--- |
| Configuración de alta disponibilidad       | Registro de DNS con un TTL bajo que apunta al aparato principal o balanceador de carga. | Debes impulsar manualmente el aparato de réplica en las configuraciones de conmutación DNS y balanceador de carga. |
| Agrupación en clústeres | El registro DNS debe apuntar a un balanceador de carga. | Si falla un nodo detrás de un balanceador de carga, el tráfico se envía automáticamente a los otros nodos de funcionamiento. |

## Copia de seguridad y recuperación ante desastres

Ni el HA ni el Clústering debe considerarse como un reemplazo de los respaldos habituales. Para obtener más información, vea "[Configurar copias de seguridad en el dispositivo](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)".

## Supervisión

Las características de disponibilidad, especialmente las que tienen conmutación automática como Agrupación, pueden enmascarar una falla dado que el servicio generalmente no se ve interrumpido cuando algo falla. Ya sea que esté usando HA o Agrupación, supervisar el estado de cada instancia es importante para que puedas estar al tanto cuando se produce una falla. Para obtener más información sobre la supervisión, vea "[Umbrales recomendados de alerta](/enterprise/admin/guides/installation/recommended-alert-thresholds/)" y "[Supervisar los nodos de clúster](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)".

## Información adicional
- Para obtener más información sobre la agrupación en clústeres de {% data variables.product.prodname_ghe_server %}, vea "[Acerca de la agrupación en clústeres](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)".
- Para obtener más información sobre la alta disponibilidad, vea "[Configurar {% data variables.product.prodname_ghe_server %} para alta disponibilidad](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".
