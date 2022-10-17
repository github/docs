---
title: Evacuar un nodo de agrupación
intro: Puedes evacuar los servicios de datos en un nodo de agrupación.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 775e53aafadae8c5c76a9f1dfef43ebaf7ceb9f1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120626'
---
## Acerca de la evacuación de los nodos de clúster

En una configuración de clúster para {% data variables.product.product_name %}, puedes evacuar un nodo antes de desconectarlo. La evacuación garantiza que los nodos restantes en un nivel de servicio contengan todos los datos de dicho servicio. Por ejemplo, cuando reemplazas la máquina virtual por un nodo en tu clúster, primero debes evacuarlo.

Para obtener más información sobre los nodos y los niveles de servicio para {% data variables.product.prodname_ghe_server %}, consulta "[Acerca de los nodos de clúster](/admin/enterprise-management/configuring-clustering/about-cluster-nodes)".

{% warning %}

**Advertencias**:

- Para evitar la pérdida de datos, {% data variables.product.company_short %} recomienda fuertemente que evacúes un nodo antes de desconectarlo. 

- Si solo tienes tres nodos en tu clúster de servicios de datos, no puedes evacuar los nodos porque `ghe-spokes` no tiene otro lugar para hacer una copia. Si tienes cuatro o más, `ghe-spokes` moverá todos los repositorios fuera del nodo evacuado.

{% endwarning %}

## Evacuar un nodo de agrupación

Si tienes previsto desconectar un nodo y el nodo ejecuta un rol de servicio de datos como `git-server`, `pages-server` o `storage-server`, evacúa cada nodo antes de desconectar el nodo.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. Para encontrar la UUID del nodo a evacuar, ejecuta el siguiente comando. Reemplaza `HOSTNAME` por el nombre de host del nodo.

   ```shell
   $ ghe-config cluster.<em>HOSTNAME</em>.uuid
   ```
1. Monitorea el estado del nodo mientras {% data variables.product.product_name %} copia los datos. No desconectes el nodo sino hasta que se complete la copia. Para supervisar el estado de tu nodo, ejecuta cualquiera de los siguientes comandos, reemplazando `UUID` con la UUID del paso 2.

   - **Git**:

     ```shell
     $ ghe-spokes evac-status git-server-<em>UUID</em>
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
     ```

   - **Almacenamiento**:

     ```shell
     $ ghe-storage evacuation-status storage-server-<em>UUID</em>
     ```
1. Después de que la copia se complete, puedes evacuar el nodo ejecutando cualquiera de los siguientes comandos, reemplazando `UUID` con la UUID del paso 2.

   - **Git**:

     ```shell
     $ ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ ghe-dpages evacuate pages-server-<em>UUID</em>
     ```

   - Para el **almacenamiento**, primero debes desconectar el nodo ejecutando el siguiente comando.

     ```shell
     $ ghe-storage offline storage-server-<em>UUID</em>
     ```

     Después de que el nodo de almacenamiento se quede sin conexión, puedes evacuarlo si ejecutas el siguiente comando.

     ```shell
     $ ghe-storage evacuate storage-server-<em>UUID</em>
     ```
