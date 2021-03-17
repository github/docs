---
title: Acerca de la configuración de alta disponibilidad
intro: 'En una configuración de alta disponibilidad, un aparato secundario {% data variables.product.prodname_ghe_server %} totalmente redundante se mantiene en sincronización con el aparato principal mediante la replicación de todos los almacenes de datos importantes.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
versions:
  enterprise-server: '*'
---

Cuando configuras la alta disponibilidad, hay una configuración automática unidireccional, una replicación asincrónica de todos los almacenes de datos (repositorios de Git, MySQL, Redis y Elasticsearch) desde el aparato principal hacia la réplica.

{% data variables.product.prodname_ghe_server %} admite una configuración activa/pasiva, en la que el aparato réplica se ejecuta como en un modo de espera con los servicios de base de datos ejecutándose en modo de replicación, pero con los servicios de aplicación detenidos.

### Escenarios de fallas específicas

Utiliza la configuración de alta disponibilidad para la protección contra lo siguiente:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

Una configuración de alta disponibilidad no es una buena solución para lo siguiente:

  - **Escalar**. Mientras que puede distribuir el tráfico geográficamente utilizando la replicación geográfica, el rendimiento de las escrituras queda limitado a la velocidad y la disponibilidad del aparato principal. Para obtener más informació, consulta "[Acerca de la replicación geográfica](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)."
  - **Generar copias de seguridad de tu aparato principal**. Una réplica de alta disponibilidad no reemplaza las copias de seguridad externas en tu plan de recuperación ante desastres. Algunas formas de corrupción o pérdida de datos se pueden replicar de inmediato desde el aparato principal hacia la réplica. Para asegurar una reversión segura a un estado antiguo estable, debes realizar copias de seguridad de rutina con instantáneas históricas.
  - **Actualizaciones del tiempo de inactividad en cero**. Para evitar la pérdida de datos y las situaciones de cerebro dividido en escenarios de promoción controlados, coloca el aparato principal en el modo de mantenimiento y espera a que se completen todas las escrituras entes de promover la réplica.

### Estrategias de conmutación por error del tráfico de red

Durante la conmutación por error, debes configurar por separado y administrar el tráfico de red de redireccionamiento desde el aparato principal hacia la réplica.

#### Conmutación por error de DNS

Con la conmutación por error de DNS, utiliza valores TTL cortos en los registros DNS que se dirijan al aparato principal {% data variables.product.prodname_ghe_server %}. Recomendamos un TTL de entre 60 segundos y cinco minutos.

Durante la conmutación por error, debes colocar el aparato principal en modo de mantenimiento y redirigir sus registros DNS hacia la dirección IP del aparato réplica. El tiempo necesario para redirigir el tráfico desde el aparato principal hacia la réplica dependerá de la configuración TTL y del tiempo necesario para actualizar los registros DNS.

Si estás utilizando la replicación geográfica, debes configurar Geo DNS en tráfico directo hacia la réplica más cercana. Para obtener más informació, consulta "[Acerca de la replicación geográfica](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)."

#### Balanceador de carga

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

Durante la conmutación por error, debes colocar el aparato principal en el modo de mantenimiento. Puedes configurar el balanceador de carga para que detecte automáticamente cuando la réplica se haya promovido a principal, o puede que se requiera un cambio de configuración manual. Debes promover manualmente la réplica a principal antes de que responda al tráfico de usuarios. Para obtener más información, consulta "[Utilizar {% data variables.product.prodname_ghe_server %} con un balanceador de carga](/enterprise/{{ currentVersion }}/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)."

{% data reusables.enterprise_installation.monitoring-replicas %}

### Utilidades para la administración de la replicación

Para administrar la replicación en {% data variables.product.prodname_ghe_server %}, haz uso de estas utilidades de la línea de comando conectándote al aparato réplica con SSH.

#### ghe-repl-setup

El comando `ghe-repl-setup` coloca un aparato {% data variables.product.prodname_ghe_server %} en modo de espera de réplica.

 - Un tunel de VPN de WireGuard cifrado se configura para establecer la comunicación entre los dos aplicativos.
 - Se configuran los servicios de bases de datos para la replicación y se inician.
 - Se inhabilitan los servicios de aplicaciones. Los intentos de acceder al aparato réplica por HTTP, Git u otros protocolos compatibles generarán una página de mantenimiento o un mensaje de error de "aparato en modo réplica".

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verificar la conectividad ssh con 169.254.1.1 ...
Comprobación de conexión exitosa.
Configurando la replicación de base de datos en oposición al principal...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Ejecuta `ghe-repl-start' para comenzar la replicación en oposición al principal recientemente configurado.
```

#### ghe-repl-start

El comando `ghe-repl-start` inicia la replicación activa de todos los almacenes de datos.

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Iniciando la replicación de Redis...
Iniciando la replicación de ElasticSearch...
Iniciando la replicación de Páginas...
Iniciando la replicación de Git...
Exitoso: La replicación se está ejecutando para todos los servicios.
Utiliza `ghe-repl-status' para monitorear el estado y el progreso de la replicación.
```

#### ghe-repl-status

El comando `ghe-repl-status` muestra un estado de `OK`, `ADVERTENCIA` o `CRÍTICO` para cada corriente de replicación de almacén de datos. Cuando cualquiera de los canales de replicación está en estado `ADVERTENCIA`, el comando se cerrará con el código `1`. Del mismo modo, cuando cualquiera de los canales esté en un estado `CRÍTICO`, el comando se cerrará con el código `2`.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: replicación de mysql en sinc
OK: la replicación de redis está en sinc
OK: la agrupación de elasticsearch está en sinc
OK: los datos de git están en sinc (10 repos, 2 wikis, 5 gists)
OK: los datos de páginas están en sinc
```

Las opciones `-v` y `-vv` dan detalles sobre cada uno de los estados de replicación de almacén de datos:

```shell
$ ghe-repl-status -v
OK: replicación de mysql en sinc
  | IO en ejecución: Sí, SQL en ejecución: Sí, Demora: 0

OK: la replicación de redis está en sinc
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: la agrupación de elasticsearch está en sinc
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : falso,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: los datos de git están en sinc (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FALLA    PENDIENTE      CON DEMORA
  | repositorios        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: los datos de páginas están en sinc
  | Las páginas están en sinc
```

#### ghe-repl-stop

El comando `ghe-repl-stop` inhabilita temporalmente la replicación de todos los almacenes de datos y detiene los servicios de replicación. Para reanudar la replicación, utiliza el comando [ghe-repl-start](#ghe-repl-start).

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Deteniendo la replicación de Páginas...
Deteniendo la replicación de Git...
Deteniendo la replicación de MySQL...
Deteniendo la replicación de Redis...
Deteniendo la replicación de ElasticSearch...
Exitoso: la replicación se detuvo para todos los servicios.
```

#### ghe-repl-promote

El comando `ghe-repl-promote` inhabilita la replicación y convierte el aparato réplica en principal. El aparato se configura con los mismos ajustes que el principal original y se habilitan todos los servicios.

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Habilitando el modo de mantenimiento en el aparato principal para evitar escrituras...
Deteniendo la replicación...
  | Deteniendo la replicación de Páginas...
  | Deteniendo la replicación de Git...
  | Deteniendo la replicación de MySQL...
  | Deteniendo la replicación de Redis...
  | Deteniendo la replicación de ElasticSearch...
  | Exitoso: la replicación se detuvo para todos los servicios.
Cambiando del modo réplica...
  | Exitoso: se eliminó la configuración de la replicación.
  | Ejecuta `ghe-repl-setup' para volver a habilitar el modo réplica.
Aplicando la configuración e iniciando los servicios...
Exitoso: la réplica se promovió a principal y ahora está aceptando solicitudes.
```

#### ghe-repl-teardown

El comando `ghe-repl-teardown` inhabilita el modo de replicación por completo, eliminando la configuración de la réplica.

### Leer más

- "[Crear una réplica de alta disponibilidad](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica)"
