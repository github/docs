---
title: Inicializar la agrupación
intro: 'Una agrupación de {% data variables.product.prodname_ghe_server %} se debe configurar con una licencia y se debe inicializar mediante un shell administrativo (SSH).'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
versions:
  enterprise-server: '*'
topics:
  - Clustering
  - Enterprise
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

### Instalar {% data variables.product.prodname_ghe_server %}

1. En cada nodo de agrupación, suministra e instala {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Configurar una instancia {% data variables.product.prodname_ghe_server %} ](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)."
2. Mediante el shell administrativo o DHCP, configura **solo** la dirección IP de cada nodo. No configures los otros parámetros.

### Configurar el primer nodo

1. Realiza una conexión con el nodo que será designado como `mysqu.-master` en `clussster.conf`. Para obtener más información, consulta "[Acerca del archivo de configuración de agrupación](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)</a>."
2. En tu navegador web, visita `https://<ip address>:8443/setup/`.
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}
{% data reusables.enterprise_installation.instance-will-restart-automatically %}

### Inicializar la agrupación

Para inicializar la agrupación, necesitas un archivo de configuración de agrupación (`cluster.conf`). Para obtener más información, consulta "[Acerca del archivo de configuración de agrupación](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)</a>".

1. Desde el primer nodo que se configuró, ejecuta `ghe-cluster-config. init`.  De esta manera, se inicializará la agrupación si existen nodos en el archivo de configuración de la agrupación que no están configurados.
2. Ejecuta `ghe-cluster-config-apply`. Esto validará el archivo `cluster.conf`, aplicará la configuración a cada archivo del nodo y traerá los servicios configurados en cada nodo.

Para comprobar el estado de una agrupación en funcionamiento, usa el comando `ghe-cluster-status`.

### Acerca del archivo de configuración de la agrupación

El archivo de configuración de la agrupación (`cluster.conf`) define los nodos en la agrupación, y los servicios que ejecutan. Para obtener más información, consulta "[Acerca de los nodos de agrupación](/enterprise/{{ currentVersion }}/admin/guides/clustering/about-cluster-nodes)".

Este ejemplo `cluster.conf` define una agrupación con cinco nodos.

  - Dos nodos (llamados `ghe-app-node-\*`) ejecutan los servicios `web-server` y `job-server` responsables de atender las solicitudes de los clientes.
  - Tres nodos (llamados `ghe-data-node-\*`) ejecutan los servicios responsables del almacenamiento y la recuperación de los datos de {% data variables.product.prodname_ghe_server %}.

Los nombres de los nodos pueden ser cualquier nombre de host válido que elijas. Los nombres son conjuntos de nombres de host de cada nodo y también se agregarán a `/etc/hosts` en cada nodo, de manera que los nodos puedan ser resolubles localmente entre sí.

Especifica el primer nodo de agrupación que configuraste como MySQL principal mediante `mysql-server` y `mysql-master`.

```
[cluster]
  mysql-master = ghe-data-node-1
  redis-master = ghe-data-node-1
  primary-datacenter = default
[cluster "ghe-app-node-1"]
  hostname = ghe-app-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  web-server = true
  job-server = true
[cluster "ghe-app-node-2"]
  hostname = ghe-app-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  web-server = true
  job-server = true
[cluster "ghe-data-node-1"]
  hostname = ghe-data-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
[cluster "ghe-data-node-2"]
  hostname = ghe-data-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
[cluster "ghe-data-node-3"]
  hostname = ghe-data-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
```

Crea el archivo `/data/user/common/cluster.conf` en el primer nodo configurado. Por ejemplo, usando `vim`:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
   
