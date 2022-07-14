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
shortTitle: Iniciar la recuperación de fallos para el aplicativo
---

El tiempo requerido para la tolerancia de fallos depende de cuánto le tome para impulsar la réplica y redireccionar el tráfico de forma manual. El tiempo promedio varía entre 2 y 10 minutos.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. Si el aplicativo principal está disponible, para permitir que la replicación finalice antes de que cambies tus aplicativos, pon el aplicativo primario en modo de mantenimiento.

    - Pon el aplicativo en modo de mantenimiento.

       - Para usar el administrador de consola, consulta "[Habilitar y programar el modo mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)"

       - También puedes usar el comando `ghe-maintenance -s`.
         ```shell
         $ ghe-maintenance -s
         ```

   - Cuando la cantidad de operaciones activas de Git, consultas de MySQL y jobs de Resque lleguen a cero, espera 30 segundos.

      {% note %}

      **Nota:** Nomad siempre tendrá jobs en ejecución, incluso si está en modo de mantenimiento, así que puedes ignorar estos jobs de forma segura.

      {% endnote %}

   - Para verificar que todos los canales de replicación informan `OK`, utiliza el comando `ghe-repl-status -vv`.

      ```shell
      $ ghe-repl-status -vv
      ```

4. En el aplicativo de réplica, para detener la replicación y promover dicho aplicativo a estado primario, utiliza el comando `ghe-repl-promote`. This will also automatically put the primary node in maintenance mode if it’s reachable.
  ```shell
  $ ghe-repl-promote
  ```
5. Actualiza el registro de DNS para que apunte a la dirección IP de la réplica. El tráfico es direccionado a la réplica después de que transcurra el período TTL. Si estás utilizando un balanceador de carga, asegúrate de que esté configurado para enviar el tráfico a la réplica.
6. Notifica a los usuarios que pueden retomar las operaciones normales.
7. Si se desea, configura una replicación desde el aparato principal nuevo al aparato existente y el principal anterior. Para obtener más información, consulta "[Acerca de la configuración de alta disponibilidad](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)."
8. Los aplicativos en los que no pretendas configurar la replicación que eran parte de la configuración de disponibilidad alta antes de la recuperación del fallo deberán eliminarse de dicha configuración de disponibilidad alta a través de UUID.
    - Para los aplicativos anteriores, obtén su UUID a través de `cat /data/user/common/uuid`.
      ```shell
      $ cat /data/user/common/uuid
      ```
    - En el primario nuevo, elimina las UUID utilizando `ghe-repl-teardown`. Por favor, reemplaza *`UUID`* con aquella UUID que recuperaste en el paso anterior.
      ```shell
      $ ghe-repl-teardown -u <em>UUID</em>
      ```

## Leer más

- "[Utilidades para la gestión de replicaciones](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
