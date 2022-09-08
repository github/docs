---
title: Iniciar una tolerancia de fallos a tu aparato de réplica
intro: 'Puedes tener tolerancia de fallos en un aparato de réplica {% data variables.product.prodname_ghe_server %} por medio de la línea de comando para mantenimiento y pruebas, o si falla el aparato principal.'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate failover to appliance
ms.openlocfilehash: 65e522d2a7b466c4f75cea087760ecb3001317a7
ms.sourcegitcommit: 3ea3ccb5af64bd7d9e4699757db38fdd8f98cde7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/12/2022
ms.locfileid: '147076726'
---
El tiempo requerido para la tolerancia de fallos depende de cuánto le tome para impulsar la réplica y redireccionar el tráfico de forma manual. El tiempo promedio varía entre 2 y 10 minutos.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. Si el aplicativo principal está disponible, para permitir que la replicación finalice antes de que cambies tus aplicativos, pon el aplicativo primario en modo de mantenimiento.

    - Pon el aplicativo en modo de mantenimiento.

       - Para usar la consola de administración, vea "[Habilitar y programar el modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)".

       - También puede usar el comando `ghe-maintenance -s`.
         ```shell
         $ ghe-maintenance -s
         ```

   - Cuando la cantidad de operaciones activas de Git, consultas de MySQL y jobs de Resque lleguen a cero, espera 30 segundos. 

      {% note %}

      **Nota**: Nomad siempre tendrá trabajos en ejecución, incluso en modo de mantenimiento, para que pueda omitir estos trabajos de forma segura.
    
      {% endnote %}

   - Para comprobar todos los canales de replicación que notifica `OK`, use el comando `ghe-repl-status -vv`.

      ```shell
      $ ghe-repl-status -vv
      ```

4. En el dispositivo de réplica, para detener la replicación y promover el dispositivo de réplica al estado principal, use el comando `ghe-repl-promote`. Esto también pondrá de forma automática al nodo primario en modo de mantenimiento si es accesible.
  ```shell
  $ ghe-repl-promote
  ```
5. Actualiza el registro de DNS para que apunte a la dirección IP de la réplica. El tráfico es direccionado a la réplica después de que transcurra el período TTL. Si estás utilizando un balanceador de carga, asegúrate de que esté configurado para enviar el tráfico a la réplica.
6. Notifica a los usuarios que pueden retomar las operaciones normales.
7. Si se desea, configura una replicación desde el aparato principal nuevo al aparato existente y el principal anterior. Para obtener más información, vea "[Acerca de la configuración de alta disponibilidad](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)".
8. Los aplicativos en los que no pretendas configurar la replicación que eran parte de la configuración de disponibilidad alta antes de la recuperación del fallo deberán eliminarse de dicha configuración de disponibilidad alta a través de UUID.
    - En los dispositivos anteriores, obtenga su UUID mediante `cat /data/user/common/uuid`.
      ```shell
      $ cat /data/user/common/uuid
      ```
    - En la nueva réplica principal, quite los UUID mediante `ghe-repl-teardown`. Reemplace *`UUID`* por un UUID que ha recuperado en el paso anterior.
      ```shell
      $ ghe-repl-teardown -u <em>UUID</em>
      ```

## <a name="further-reading"></a>Información adicional

- "[Utilidades para la administración de la replicación](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
