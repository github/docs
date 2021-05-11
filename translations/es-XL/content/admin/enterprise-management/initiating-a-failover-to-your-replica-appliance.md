---
title: Iniciar una tolerancia de fallos a tu aparato de réplica
intro: 'Puedes tener tolerancia de fallos en un aparato de réplica {% data variables.product.prodname_ghe_server %} por medio de la línea de comando para mantenimiento y pruebas, o si falla el aparato principal.'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

El tiempo requerido para la tolerancia de fallos depende de cuánto le tome para impulsar la réplica y redireccionar el tráfico de forma manual. El tiempo promedio varía entre 2 y 10 minutos.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. Para permitir que la replicación finalice antes de cambiar aparatos, pon el aparato principal en modo mantenimiento:
    - Para usar el administrador de consola, consulta "[Habilitar y programar el modo mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)"
    - También puedes usar el comando `ghe-maintenance -s`.
      ```shell
      $ ghe-maintenance -s
      ```
2. Cuando el número de operaciones Git activas llega a cero, espera 30 segundos.
3. Para verificar que todos los canales de replicación informan `OK`, utiliza el comando `ghe-repl-status -vv`.
  ```shell
  $ ghe-repl-status -vv
  ```
4. Para frenar la replicación e impulsar el aparato de réplica a un estado primario, utiliza el comando `ghe-repl-promote`. Esto también pondrá de forma automática al nodo primario en nodo mantenimiento si es accesible.
  ```shell
  $ ghe-repl-promote
  ```
5. Actualiza el registro de DNS para que apunte a la dirección IP de la réplica. El tráfico es direccionado a la réplica después de que transcurra el período TTL. Si estás utilizando un balanceador de carga, asegúrate de que esté configurado para enviar el tráfico a la réplica.
6. Notifica a los usuarios que pueden retomar las operaciones normales.
7. Si se desea, configura una replicación desde el aparato principal nuevo al aparato existente y el principal anterior. Para obtener más información, consulta "[Acerca de la configuración de alta disponibilidad](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)."

### Leer más

- "[Utilidades para la gestión de replicaciones](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
