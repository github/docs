---
title: Configurar la replicación con disponibilidad alta para un clúster
intro: 'Puedes configurar una réplica pasiva de todo tu clúster de {% data variables.product.prodname_ghe_server %} en una ubicación diferentes, lo cual le permitirá tolerar fallos en nodos redundantes.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  enterprise-server: '>2.21'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
---

### Acerca de la replicación de disponibilidad alta para clústers

Puedes configurar el despliegue de un clúster de {% data variables.product.prodname_ghe_server %} para que tenga disponibilidad alta, mientras que un conjunto idéntico de nodos pasivos se sincroniza con los nodos en tu clúster activo. Si las características de hardware o software afectan el centro de datos que alberga tu clúster activo, puedes hacer una recuperación de fallos manual a los nodos de réplica y seguir procesando las solicitudes de los usuarios, minimizando así el impacto del servicio interrumpido.

En el modo de alta disponibilidad, cada nodo activo se sincroniza regularmente con un nodo pasivo correspondiente. El nodo pasivo se ejecuta en espera y no sirve a las aplicaciones ni procesa solicitudes de usuarios.

Te recomendamos configurar la disponibilidad alta como parte de un plan integral de recuperación de desastres para {% data variables.product.prodname_ghe_server %}. También te recomendamos realizar respaldos constantemente. Para obtener más información, consulta "[Configurar copias de seguridad en tu aparato](/enterprise/admin/configuration/configuring-backups-on-your-appliance)"

### Prerrequisitos

#### Hardware y software

Para cada nodo existente en tu clúster activo, necesitarás aprovisionar una segunda máquina virtual con recursos de hardware idénticos. Por ejemplo, si tu clúster tiene 11 nodos y cada nodo tiene 12 vCPUs, 96 GB de RAM, y 750 GB de almacenamiento adjunto, deberás aprovisionar 11 máquinas virtuales en donde cada una tenga 12 vCPUs, 96 GB de RAM, y 750GB de almacenamiento adjunto.

En cada máquina virtual, instala la misma versión de {% data variables.product.prodname_ghe_server %} que se ejecuta en los nodos en tu clúster activo. No necesitas cargar una licencia ni realizar alguna configuración adicional. Para obtener más información, consulta "[Configurar una instancia del {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)."

{% note %}

**Nota**: Los nodos que pretendes utilizar para la replicación de disponibilidad alta deben ser instancias independientes de {% data variables.product.prodname_ghe_server %}. No inicialices los nodos pasivos como un segundo clúster.

{% endnote %}

#### Red

Debes asignar una dirección IP estática a cada nodo nuevo que aprovisiones, y debes configurar un balanceador de carga para aceptar las conecciones y dirigirlas a los nodos que están a nivel del front-end de tu clúster.

No te recomendamos configurar un firewall entre la red con con tu clúster activo y aquella con tu clúster pasivo. Lalatencia entre las redes con nodos activos y aquellas con nodos pasivos debe ser de menos de 70 milisegundos. Para obtener más información acerca de la conectividad de red entre nodos en el clúster pasivo, consulta la sección "[Configuración de clúster de red](/enterprise/admin/enterprise-management/cluster-network-configuration)".

### Crear una réplica de disponibilidad alta para un clúster

- [Asignar nodos activos al datacenter primario](#assigning-active-nodes-to-the-primary-datacenter)
- [Agregar nodos pasivos al archivo de configuración de clúster](#adding-passive-nodes-to-the-cluster-configuration-file)
- [Ejemplo de configuración](#example-configuration)

#### Asignar nodos activos al datacenter primario

Antes de que definas un datacenter secundario para tus nodos pasivos, asegúrate de que has asignado tus nodos activos al datacenter primario.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Observa el nombre del datacenter primario de tus clústers. La sección de `[cluster]` en la parte superior del archivo de configuración del clúster define el nombre del datacenter primario, utilizando el par de clave-valor `primary-datacenter`. Predeterminadamente, el datacenter primario para tu clúster se llama `default`.

    ```shell
    [cluster]
      mysql-master = <em>HOSTNAME</em>
      redis-master = <em>HOSTNAME</em>
      <strong>primary-datacenter = default</strong>
    ```

    - Opcionalmente, cambia el nombre del datacenter primario a uno más descriptivo o preciso editando el valor de `primary-datacenter`.

4. {% data reusables.enterprise_clustering.configuration-file-heading %} Debajo del encabezado de cada nodo, agrega un par de clave-valor para asignar el nodo a un datacenter. Utiliza el mismo valor que `primary-datacenter` desde el paso 3 en adelante. Por ejemplo, si quieres utilizar el nombre predeterminado (`default`), agrega el siguiente par de clave-valor a la sección para cada nodo.

    ```
    datacenter = default
    ```

    Cuando hayas terminado, la sección para cada nodo en el archivo de configuración del clúster se debería ver como en el siguiente ejemplo. {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "<em>HOSTNAME</em>"]
      <strong>datacenter = default</strong>
      hostname = <em>HOSTNAME</em>
      ipv4 = <em>IP ADDRESS</em>
      ...
    ...
    ```

    {% note %}

    **Nota**: Si cambiaste el nombre del datacenter primario en el paso 3, encuentra el par de clave-valor para `consul-datacenter` en la sección para cada nodo y cambia el valor al datacenter primario que renombraste. Por ejemplo, si nombraste al datacenter primario como `primary`, utiliza el siguiente par de clave-valor para cada nodo.

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Después de que {% data variables.product.prodname_ghe_server %} te regrese al prompt, habrás terminado de asignar tus nodos al datacenter primario del clúster.

#### Agregar nodos pasivos al archivo de configuración de clúster

Para configurar la disponibilidad alta, debes definir un nodo pasivo correspondiente para cada nodo activo en tu clúster. Con las siguientes instrucciones se crea una configuración de clúster nueva que define tanto los nodos activos como los pasivos. Lo que harás:

- Crear una copia del archivo de configuración del clúster activo.
- Editar la copia para definir los nodos pasivos que corresponden a los nodos activos, agregando las direcciones IP de las máquinas virtuales nuevas que aprovisionaste.
- Fusionar la copia modificada de la configuración del clúster con tu configuración activa.
- Aplicar la configuración nueva para comenzar la replicación.

Para ver un ejemplo de configuración, consulta la sección "[Ejemplo de configuración](#example-configuration)".

1. Para cada nodo en tu clúster, aprovisiona una máquina virtual coincidente con especificaciones idénticas que ejecute la misma versión de {% data variables.product.prodname_ghe_server %}. Anota la dirección IPv4 y el nombre de host para cada nodo de clúster nuevo. Para obtener más información, consulta la sección "[Prerrequisitos](#prerequisites)".

    {% note %}

    **Nota**: Si estás reconfigurando la disponibilidad alta después de una recuperación de un fallo, puedes utilizar los nodos viejos del datacenter primario en su lugar.

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. Respalda tu configuración de clúster existente.

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. Crea una copia de tu archivo de configuración de clúster en una ubicación temporal, como _/home/admin/cluster-passive.conf_. Borra los pares únicos de clave-valor para las direcciones IP (`ipv*`), las UUID (`uuid`), y las llaves públicas para WireGuard (`wireguard-pubkey`).

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. Elimina la sección de `[cluster]` del archivo temporal de configuración de clúster que copiaste en el paso anterior.

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. Asigna un nombre para el datacenter secundario en donde aprovisionaste tus nodos pasivos, luego actualiza el archivo temporal de configuración de clúster con el nombre nuevo del datacenter. Reemplaza `SECONDARY` con el nombre que elegiste.

    ```shell
    sed -i 's/datacenter = default/datacenter = <em>SECONDARY</em>/g' ~/cluster-passive.conf
    ```

7. Asigna un patrón para los nombres de host del nodo pasivo.

    {% warning %}

    **Advertencia**: Los nombres de host para los nodos pasivos deben ser únicos y diferir del nombre de host para el nodo activo correspondiente.

    {% endwarning %}

8. Abre el archivo temporal de configuración de clúster del paso 3 en un editor de texto. Por ejemplo, puedes utilizar Vim.

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. En cada sección dentro del archivo temporal de configuración del clúster, actualiza la configuración del nodo. {% data reusables.enterprise_clustering.configuration-file-heading %}

    - Cambia el nombre de host citado en el encabezado de la sección y el valor de `hostname` dentro de la sección al nombre de host del nodo pasivo, de acuerdo con el patrón que elegiste en el paso 7 antes mencionado.
    - Agrega una nueva clave llamada `ipv4`, y configura el valor como la dirección IPv4 estática del nodo pasivo.
    - Agrega un par de clave-valor nuevo, `replica = enabled`.

    ```shell
    [cluster "<em>NEW PASSIVE NODE HOSTNAME</em>"]
      ...
      hostname = <em>NEW PASSIVE NODE HOSTNAME</em>
      ipv4 = <em>NEW PASSIVE NODE IPV4 ADDRESS</em>
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. Anexa el contenido del archivo temporal de configuración del clúster que creaste en el paso 4 al archivo de configuración activo.

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. Designa los nodos de Redis y de MySQL en el datacenter secundario. Reemplaza `REPLICA MYSQL PRIMARY HOSTNAME` y `REPLICA REDIS PRIMARY HOSTNAME` con los nombres de host de los nodos pasivos que aprovisionaste para que empaten con tus primarios existentes de MySQL y de Redis.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica <em>REPLICA MYSQL PRIMARY HOSTNAME</em>
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica <em>REPLICA REDIS PRIMARY HOSTNAME</em>
    ```

12. Habilita MySQL para conmutar por error automáticamente cuando hagas una recuperación de errores hacia los nodos pasivos de réplica.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-auto-failover true
    ```

    {% warning %}

    **Advertencia**: Revisa tu archivo de configuración de clúster antes de proceder.

    - En la sección de `[cluster]` de nivel superior, asegúrate de que los valores para `mysql-master-replica` y para `redis-master-replica` sean los nombres de host correctos para los nodos pasivos en el datacenter secundario que servirán como los primarios de MySQL y de Redis después de una conmutación por error.
    - En cada sección para un nodo activo que se llame `[cluster "<em>ACTIVE NODE HOSTNAME</em>"]`, vuelve a revisar los siguientes pares de clave-valor.
      - `datacenter` debería coincidir con el valor de `primary-datacenter` en la sección de `[cluster]` de nivel superior.
      - `consul-datacenter` debería coincidir con el valor de `datacenter`, cl cual debería ser el mismo valor para `primary-datacenter` en la sección de `[cluster]` de nivel superior.
    - Asegúrate de que, para cada nodo activo, la configuración tenga **una** sección correspondiente para **un** nodo pasivo con los mismos roles. En cada sección para un nodo pasivo, verifica nuevamente cada par de clave-valor.
      - `datacenter` debería coincidir con todo el resto de los nodos pasivos.
      - `consul-datacenter` debería coincidir con todo el resto de los nodos pasivos.
      - `hostname` debería coincidir con el nombre de host en el encabezado de la sección.
      - `ipv4` debería coincidir con la dirección IPv4 estática única del nodo.
      - `replica` debería estar configurado como `enabled`.
    - Aprovecha la oportunidad para eliminar las secciones para los nodos sin conexión que ya no se utilicen.

    Para revisar un ejemplo de configuración, consulta la sección "[Ejemplo de configuración](#example-configuration)".

    {% endwarning %}

13. Inicializa la configuración del clúster nuevo. {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. Después de que ésta termine, {% data variables.product.prodname_ghe_server %} mostrará el siguiente mensaje.

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. Configura un balanceador de carga que aceptará las conexiones de los usuarios si conmutas por error a los nodos pasivos. Para obtener más información, consulta la sección "[Configuración de red de clúster](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer)".

Has terminado de configurar la replicación de disponibilidad alta para los nodos en tu clúster. Cada nodo activo comienza a replicar la configuración y los datos a su nodo pasivo correspondiente, y puedes dirigir el tráfico al balanceador de carga para el datacenter secundario en caso de que exista un fallo. Para obtener más información sobre la conmutación por error, consulta la sección "[Iniciar una conmutación por error a tu clúster de réplica](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)".

#### Ejemplo de configuración

La configuración de `[cluster]` de nivel superior se debería ver como en el ejemplo siguiente.

```shell
[cluster]
  mysql-master = <em>HOSTNAME OF ACTIVE MYSQL MASTER</em>
  redis-master = <em>HOSTNAME OF ACTIVE REDIS MASTER</em>
  primary-datacenter = <em>PRIMARY DATACENTER NAME</em>
  mysql-master-replica = <em>HOSTNAME OF PASSIVE MYSQL MASTER</em>
  redis-master-replica = <em>HOSTNAME OF PASSIVE REDIS MASTER</em>
  mysql-auto-failover = true
...
```

La configuración para un nodo activo en el nivel de almacenamiento de tu clúster se debería ver como en el ejemplo siguiente.

```shell
...
[cluster "<em>UNIQUE ACTIVE NODE HOSTNAME</em>"]
  datacenter = default
  hostname = <em>UNIQUE ACTIVE NODE HOSTNAME</em>
  ipv4 = <em>IPV4 ADDRESS</em>
  consul-datacenter = default
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  vpn = <em>IPV4 ADDRESS SET AUTOMATICALLY</em>
  uuid = <em>UUID SET AUTOMATICALLY</em>
  wireguard-pubkey = <em>PUBLIC KEY SET AUTOMATICALLY</em>
...
```

La configuración para el nodo pasivo correspondiente en el nivel de almacenamiento se debería ver como en el ejemplo siguiente.

- Las diferencias importantes con nodo activo correspondiente estarán **restaltadas**.
- {% data variables.product.prodname_ghe_server %} asigna valores para `vpn`, `uuid`, y `wireguard-pubkey` automáticamente, así que no deberías definir los valores para los nodos pasivos que vayas a inicializar.
- Los roles del servidor, como se definen en las claves de `*-server`, coinciden con el nodo activo correspondiente.

```shell
...
<strong>[cluster "<em>UNIQUE PASSIVE NODE HOSTNAME</em>"]</strong>
  <strong>replica = enabled</strong>
  <strong>ipv4 = <em>IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES</em></strong>
  <strong>datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  <strong>hostname = <em>UNIQUE PASSIVE NODE HOSTNAME</em></strong>
  <strong>consul-datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  <strong>vpn = <em>DO NOT DEFINE</em></strong>
  <strong>uuid = <em>DO NOT DEFINE</em></strong>
  <strong>wireguard-pubkey = <em>DO NOT DEFINE</em></strong>
...
```

### Monitorear la replicación entre los nodos de clúster pasivos y activos

La replicación inicial entre los nodos activos y pasivos en tu clúster toma su tiempo. La cantidad de tiempo dependerá de la cantidad de datos a replicar y de los niveles de actividad de {% data variables.product.prodname_ghe_server %}.

Puedes monitorear el progreso de cualquier nodo en el clúster, utilizando las herramientas de línea de comandos que se encuentran disponibles a través del shell administrativo de {% data variables.product.prodname_ghe_server %}. Para obtener más información acerca del shell administrativo, consulta la sección "[Acceder al shell administrativo (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)".

- Monitorear la replicación de bases de datos:

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- Monitorear la replicación de los datos de los repositorios y los Gists:

  ```
  estado ghe-spokes
  ```

- Monitorear la replicación de los adjuntos y los datos de LFS:

  ```
  ghe-storage replication-status
  ```

- Monitorear la replicación de los datos de las páginas:

  ```
  ghe-dpages replication-status
  ```

Puedes utilizar `ghe-cluster-status` para revisar la salud general de tu clúster. Para obtener más información, consulta la sección "[Utilidades de la línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status)".

### Reconfigurar la replilcación de disponibilidad alta después de un fallo

Después de que te recuperes de un fallo de los nodos activos del clúster hacia los nodos pasivos, puedes reconfigurar la replicación de disponibilidad alta en dos formas.

#### Aprovisionar y configurar los nodos pasivos nuevos

Después de recuperarte de un fallo, puedes reconfigurar la disponibilidad alta en dos formas. El método que elijas dependerá de la razón por la cual ocurrió el fallo y del estado de los nodos activos originales.

1. Aprovisiona y configura un conjunto nuevo de nodos pasivos para cada uno de los nodos activos en tu datacenter secundario.

2. Utiliza los nodos activos antiguos como los nodos pasivos nuevos.

El proceso para reconfigurar la disponibilidad alta es idéntico a la configuración inicial de la misma. Para obtener más información, consulta la sección "[Crear una réplica de disponibilidad alta para un clúster](#creating-a-high-availability-replica-for-a-cluster)".


### Inhabilitar la replicación de disponibilidad alta para un clúster

Pudes parar la replicación hacia los nodos pasivos para el despliegue de {% data variables.product.prodname_ghe_server %} de tu clúster.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. En la sección de `[cluster]` de nivel superior, borra los pares de clave-valor de `mysql-auto-failover`, `redis-master-replica`, y `mysql-master-replica`.

4. Borra cada sección para un nodo pasivo. Para los nodos pasivos, `replica` se configura como `enabled`.

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Después de que {% data variables.product.prodname_ghe_server %} te regrese al prompt, habrás terminado de inhabilitar la replicación de disponibilidad alta.
