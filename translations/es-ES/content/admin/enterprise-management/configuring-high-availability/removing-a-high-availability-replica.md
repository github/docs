---
title: Quitar una réplica de disponibilidad alta
intro: 'Puedes detener una replicación a una réplica {% data variables.product.prodname_ghe_server %} de forma temporal, o quitar la replicación de forma permanente.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
  - /admin/enterprise-management/removing-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - High availability
  - Enterprise
  - Infrastructure
shortTitle: Remove a HA replica
ms.openlocfilehash: 12fe196d38f93cb29bf49413ef9912028d662130
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116777'
---
## Detener una replicación de forma temporal

1. Si es necesario, puedes detener una replicación geográfica del tráfico de usuario activo al quitar las entradas Geo DNS para la réplica.
2. En la réplica donde deseas detener la replicación de forma temporal, ejecuta ghe-repl-stop.
  ```shell
  $ ghe-repl-stop
  ```
3. Para volver a iniciar la replicación, ejecute `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```

## Quitar la replicación de forma permanente

1. Si es necesario, puedes detener una replicación geográfica del tráfico de usuario activo al quitar las entradas Geo DNS para la réplica.
2. En la réplica desde la que quiere eliminar la replicación, ejecute `ghe-repl-stop`.
  ```shell
  $ ghe-repl-stop
  ```
3. En la réplica, para desglosar el estado de replicación, ejecute `ghe-repl-teardown`.
  ```shell
  $ ghe-repl-teardown
  ```

  {% ifversion ghes %} {% note %}
  
  **Nota**: Si tiene habilitadas las {% data variables.product.prodname_actions %}, deberá dar de baja el servidor de réplica anterior o actualizar su configuración de {% data variables.product.prodname_actions %} para que utilice un almacenamiento externo diferente. Para obtener más información, vea "[Alta disponibilidad para {% data variables.product.prodname_actions %}](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)".
  
  {% endnote %} {% endif %}
