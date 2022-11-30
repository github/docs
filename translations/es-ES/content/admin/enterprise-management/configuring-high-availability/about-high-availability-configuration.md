---
title: Acerca de la configuración de alta disponibilidad
intro: 'En una configuración de alta disponibilidad, un aparato secundario {% data variables.product.prodname_ghe_server %} totalmente redundante se mantiene en sincronización con el aparato principal mediante la replicación de todos los almacenes de datos importantes.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/about-high-availability-configuration
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: About HA configuration
ms.openlocfilehash: b54ca60c6cf1d79b9435ca8deedebec09ed39396
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109881'
---
Cuando configuras la alta disponibilidad, hay una configuración automática unidireccional, una replicación asincrónica de todos los almacenes de datos (repositorios de Git, MySQL, Redis y Elasticsearch) desde el aparato principal hacia la réplica. La mayoría de los ajustes de configuración de {% data variables.product.prodname_ghe_server %} también se replican, incluyendo la contraseña de la {% data variables.enterprise.management_console %}. Para obtener más información, consulta "[Acceso a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% data variables.product.prodname_ghe_server %} admite una configuración activa/pasiva, en la que el aparato réplica se ejecuta como en un modo de espera con los servicios de base de datos ejecutándose en modo de replicación, pero con los servicios de aplicación detenidos.

Después de que se haya establecido la replicación, ya no podrás acceder a la {% data variables.enterprise.management_console %} en los aplicativos de réplica. Si navegas a la dirección IP o al nombre de host de la réplica en el puerto 8443, verás un mensaje de "Server in replication mode", el cual indica que el aplicativo se encuentra actualmente configurado como una réplica.
{% data reusables.enterprise_installation.replica-limit %}

## Escenarios de fallas específicas

Utiliza la configuración de alta disponibilidad para la protección contra lo siguiente:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

Una configuración de alta disponibilidad no es una buena solución para lo siguiente:

  - **Escalado horizontal**. Mientras que puedes distribuir el tráfico geográficamente utilizando la replicación geográfica, el rendimiento de las escrituras queda limitado a la velocidad y la disponibilidad del dispositivo principal. Para obtener más información, consulta "[Acerca de la replicación geográfica](/enterprise/admin/guides/installation/about-geo-replication/)".
  - **Carga de CI/CD**. Si tienes una cantidad grande de clientes de IC que estén distanciados geográficamente de tu instancia primaria, puedes beneficiarte de configurar un caché de repositorio. Para más información, vea "[Acerca del almacenamiento en caché del repositorio](/admin/enterprise-management/caching-repositories/about-repository-caching)".
  - **Copia de seguridad del dispositivo principal**. Una réplica de alta disponibilidad no reemplaza las copias de seguridad externas en tu plan de recuperación ante desastres. Algunas formas de corrupción o pérdida de datos se pueden replicar de inmediato desde el aparato principal hacia la réplica. Para asegurar una reversión segura a un estado antiguo estable, debes realizar copias de seguridad de rutina con instantáneas históricas.
  - **Actualizaciones de tiempo de inactividad cero**. Para evitar la pérdida de datos y las situaciones de cerebro dividido en escenarios de promoción controlados, coloca el aparato principal en el modo de mantenimiento y espera a que se completen todas las escrituras entes de promover la réplica.

## Estrategias de conmutación por error del tráfico de red

Durante la conmutación por error, debes configurar por separado y administrar el tráfico de red de redireccionamiento desde el aparato principal hacia la réplica.

### Conmutación por error de DNS

Con la conmutación por error de DNS, utiliza valores TTL cortos en los registros DNS que se dirijan al aparato principal {% data variables.product.prodname_ghe_server %}. Recomendamos un TTL de entre 60 segundos y cinco minutos.

Durante la conmutación por error, debes colocar el aparato principal en modo de mantenimiento y redirigir sus registros DNS hacia la dirección IP del aparato réplica. El tiempo necesario para redirigir el tráfico desde el aparato principal hacia la réplica dependerá de la configuración TTL y del tiempo necesario para actualizar los registros DNS.

Si estás utilizando la replicación geográfica, debes configurar Geo DNS en tráfico directo hacia la réplica más cercana. Para obtener más información, consulta "[Acerca de la replicación geográfica](/enterprise/admin/guides/installation/about-geo-replication/)".

### Equilibrador de carga

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

Durante la conmutación por error, debes colocar el aparato principal en el modo de mantenimiento. Puedes configurar el balanceador de carga para que detecte automáticamente cuando la réplica se haya promovido a principal, o puede que se requiera un cambio de configuración manual. Debes promover manualmente la réplica a principal antes de que responda al tráfico de usuarios. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_ghe_server %} con un equilibrador de carga](/enterprise/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)".

{% data reusables.enterprise_installation.monitoring-replicas %}

## Utilidades para la administración de la replicación

Para administrar la replicación en {% data variables.product.prodname_ghe_server %}, haz uso de estas utilidades de la línea de comando conectándote al aparato réplica con SSH.

### ghe-repl-setup

El comando `ghe-repl-setup` coloca un dispositivo {% data variables.product.prodname_ghe_server %} en modo de espera de réplica.

 - Un tunel de VPN de WireGuard cifrado se configura para establecer la comunicación entre los dos aplicativos.
 - Se configuran los servicios de bases de datos para la replicación y se inician.
 - Se inhabilitan los servicios de aplicaciones. Los intentos de acceder al aparato réplica por HTTP, Git u otros protocolos compatibles generarán una página de mantenimiento o un mensaje de error de "aparato en modo réplica".

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verifying ssh connectivity with 169.254.1.1 ...
Connection check succeeded.
Configuring database replication against primary ...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Run `ghe-repl-start' to start replicating against the newly configured primary.
```

### ghe-repl-start

El comando `ghe-repl-start` activa la replicación activa de todos los almacenes de datos.

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Starting Redis replication ...
Starting Elasticsearch replication ...
Starting Pages replication ...
Starting Git replication ...
Success: replication is running for all services.
Use `ghe-repl-status' to monitor replication health and progress.
```

### ghe-repl-status

El comando `ghe-repl-status` devuelve un estado `OK`, `WARNING` o `CRITICAL` para cada flujo de replicación del almacén de datos. Cuando cualquiera de los canales de replicación se encuentre en un estado `WARNING`, el comando se cerrará con el código `1`. De forma similar, cuando cualquiera de los canales se encuentre en un estado `CRITICAL`, el comando se cerrará con el código `2`.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

Las opciones `-v` y `-vv` proporcionan detalles sobre el estado de replicación de cada almacén de datos:

```shell
$ ghe-repl-status -v
OK: mysql replication in sync
  | IO running: Yes, SQL running: Yes, Delay: 0

OK: redis replication is in sync
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: elasticsearch cluster is in sync
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : false,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: git data is in sync (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FAULT    PENDING      DELAY
  | repositories        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: pages data is in sync
  | Pages are in sync
```

### ghe-repl-stop

El comando `ghe-repl-stop` deshabilita temporalmente la replicación de todos los almacenes de datos y detiene los servicios de replicación. Para reanudar la replicación, usa el comando [ghe-repl-start](#ghe-repl-start).

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

### ghe-repl-promote

El comando `ghe-repl-promote` deshabilita la replicación y convierte el dispositivo de réplica en un dispositivo principal. El aparato se configura con los mismos ajustes que el principal original y se habilitan todos los servicios.

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Enabling maintenance mode on the primary to prevent writes ...
Stopping replication ...
  | Stopping Pages replication ...
  | Stopping Git replication ...
  | Stopping MySQL replication ...
  | Stopping Redis replication ...
  | Stopping Elasticsearch replication ...
  | Success: replication was stopped for all services.
Switching out of replica mode ...
  | Success: Replication configuration has been removed.
  | Run `ghe-repl-setup' to re-enable replica mode.
Applying configuration and starting services ...
Success: Replica has been promoted to primary and is now accepting requests.
```

### ghe-repl-teardown

El comando `ghe-repl-teardown` deshabilita completamente el modo de replicación y quita la configuración de la réplica.

## Información adicional

- "[Crear una réplica de alta disponibilidad](/enterprise/admin/guides/installation/creating-a-high-availability-replica)"
- "[Puertos de red](/admin/configuration/configuring-network-settings/network-ports)"
