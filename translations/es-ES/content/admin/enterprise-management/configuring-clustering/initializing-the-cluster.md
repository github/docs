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
ms.openlocfilehash: ea771194e8bf5104707a645c4ee18473ff235153
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331820'
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

En este ejemplo, `cluster.conf` define un clúster con cinco nodos.

  - Dos nodos (denominados `ghe-app-node-\*`) ejecutan los servicios `web-server` y `job-server` responsables de responder a las solicitudes de cliente.
  - Tres nodos (denominados `ghe-data-node-\*`) ejecutan los servicios responsables del almacenamiento y la recuperación de los datos de {% data variables.product.prodname_ghe_server %}.

Los nombres de los nodos pueden ser cualquier nombre de host válido que elijas. Los nombres se establecen como el nombre de host de cada nodo y también se agregarán a `/etc/hosts` en cada nodo, de manera que los nodos puedan ser resolubles localmente entre sí.

Especifica el primer nodo de clúster que configuraste como principal de MySQL mediante `mysql-server` y `mysql-master`.

```ini
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

Crea el archivo `/data/user/common/cluster.conf` en el primer nodo configurado. Por ejemplo, al usar `vim`:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
