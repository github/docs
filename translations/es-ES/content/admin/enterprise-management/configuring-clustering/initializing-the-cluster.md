---
title: Inicializar la agrupación
intro: 'Una agrupación de {% data variables.product.prodname_ghe_server %} se debe configurar con una licencia y se debe inicializar mediante un shell administrativo (SSH).'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
  - /admin/enterprise-management/initializing-the-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 91394d1d39301f77bc49a87012e04c3d5e9c3b60
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167088'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## Instalar {% data variables.product.prodname_ghe_server %}

1. En cada nodo de agrupación, suministra e instala {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
2. Mediante el shell administrativo o DHCP, configura **solo** la dirección IP de cada nodo. No configures los otros parámetros.

## Configurar el primer nodo

1. Conéctate al nodo que se designará como principal de MySQL en `cluster.conf`. Para obtener más información, consulta "[Acerca del archivo de configuración del clúster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)".
2. En el explorador web, ve a `https://<ip address>:8443/setup/`.
{% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} {% data reusables.enterprise_installation.instance-will-restart-automatically %}

## Inicializar la agrupación

Para inicializar el clúster, necesitas un archivo de configuración del clúster (`cluster.conf`). Para obtener más información, consulta "[Acerca del archivo de configuración del clúster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)".

1. Desde el primer nodo que se configuró, ejecuta `ghe-cluster-config-init`.  De esta manera, se inicializará la agrupación si existen nodos en el archivo de configuración de la agrupación que no están configurados.
2. Ejecute `ghe-cluster-config-apply`. De esta manera se validará el archivo `cluster.conf`, se aplicará la configuración a cada archivo del nodo y se traerán los servicios configurados en cada nodo.

Para comprobar el estado de un clúster en ejecución, usa el comando `ghe-cluster-status`.

## Acerca del archivo de configuración de la agrupación

El archivo de configuración del clúster (`cluster.conf`) define los nodos del clúster y qué servicios ejecutan.
Para obtener más información, consulta "[Acerca de los nodos de clúster](/enterprise/admin/guides/clustering/about-cluster-nodes)".

En este ejemplo, `cluster.conf` define un clúster con 11 nodos.

  - Dos nodos denominados`ghes-front-end-node-\*` ejecutan los servicios responsables de responder a las solicitudes de cliente.
  - Tres nodos denominados `ghes-database-node-\*` ejecutan los servicios responsables del almacenamiento, recuperación y replicación de datos de una base de datos.
  - Tres nodos denominados `ghes-search-node-\*` ejecutan los servicios responsables de la funcionalidad de búsqueda.
  - Tres nodos denominados `ghes-storage-node-\*` ejecutan los servicios responsables del almacenamiento, recuperación y replicación de datos.

Los nombres de los nodos pueden ser cualquier nombre de host válido que elijas. Los nombres se establecen como el nombre de host de cada nodo y también se agregarán a `/etc/hosts` en cada nodo, de manera que los nodos puedan ser resolubles localmente entre sí.

Especifica el primer nodo de clúster que configuraste como principal de MySQL mediante `mysql-server` y `mysql-master`.

```ini
[cluster]
  mysql-master = ghes-database-node-1
  redis-master = ghes-database-node-1
  primary-datacenter = primary
[cluster "ghes-front-end-node-1"]
  hostname = ghes-front-end-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-front-end-node-2"]
  hostname = ghes-front-end-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-database-node-1"]
  hostname = ghes-database-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-2"]
  hostname = ghes-database-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-3"]
  hostname = ghes-database-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-search-node-1"]
  hostname = ghes-search-node-1
  ipv4 = 192.168.0.7
  # ipv6 = fd12:3456:789a:1::7
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-2"]
  hostname = ghes-search-node-2
  ipv4 = 192.168.0.8
  # ipv6 = fd12:3456:789a:1::8
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-3"]
  hostname = ghes-search-node-3
  ipv4 = 192.168.0.9
  # ipv6 = fd12:3456:789a:1::9
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-storage-node-1"]
  hostname = ghes-storage-node-1
  ipv4 = 192.168.0.10
  # ipv6 = fd12:3456:789a:1::10
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-2"]
  hostname = ghes-storage-node-2
  ipv4 = 192.168.0.11
  # ipv6 = fd12:3456:789a:1::11
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-3"]
  hostname = ghes-storage-node-3
  ipv4 = 192.168.0.12
  # ipv6 = fd12:3456:789a:1::12
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
```

Crea el archivo `/data/user/common/cluster.conf` en el primer nodo configurado. Por ejemplo, al usar `vim`:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
