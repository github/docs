---
title: Inicializar o cluster
intro: 'Um cluster do {% data variables.product.prodname_ghe_server %} deve ser configurado com uma licença e inicializado usando o shell administrativo (SSH).'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167071'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## Instalar o {% data variables.product.prodname_ghe_server %}

1. Em cada nó de cluster, provisione e instale o {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Como configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
2. Usando o shell administrativo ou o DHCP, configure **apenas** o endereço IP de cada nó. Não altere nenhuma outra configuração.

## Configurar o primeiro nó

1. Conecte-se ao nó que será designado como o primário do MySQL em `cluster.conf`. Para obter mais informações, confira "[Sobre o arquivo de configuração do cluster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)".
2. No navegador da Web, acesse `https://<ip address>:8443/setup/`.
{% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} {% data reusables.enterprise_installation.instance-will-restart-automatically %}

## Inicializar o cluster

Para inicializar o cluster, você precisa ter um arquivo de configuração do cluster (`cluster.conf`). Para obter mais informações, confira "[Sobre o arquivo de configuração do cluster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)".

1. No primeiro nó que foi configurado, execute `ghe-cluster-config-init`.  Essa ação inicializará o cluster caso haja nós no arquivo de configuração que não estão configurados.
2. Execute `ghe-cluster-config-apply`. Isso validará o arquivo `cluster.conf`, aplicará a configuração a cada arquivo de nó e apresentará os serviços configurados em cada nó.

Para verificar o status de um cluster em execução, use o comando `ghe-cluster-status`.

## Sobre o arquivo de configuração do cluster

O arquivo de configuração do cluster (`cluster.conf`) define os nós no cluster e os serviços que eles executam.
Para obter mais informações, confira "[Sobre os nós de cluster](/enterprise/admin/guides/clustering/about-cluster-nodes)".

Este exemplo de `cluster.conf` define um cluster com 11 nós.

  - Dois nós chamados `ghes-front-end-node-\*` executam os serviços responsáveis por responder às solicitações do cliente.
  - Três nós chamados `ghes-database-node-\*` executam serviços responsáveis pelo armazenamento, pela recuperação e pela replicação de dados de banco de dados.
  - Três nós chamados `ghes-search-node-\*` executam serviços responsáveis pela funcionalidade de pesquisa.
  - Três nós chamados `ghes-storage-node-\*` executam serviços responsáveis pelo armazenamento, pela recuperação e pela replicação de dados.

Os nomes dos nós podem ser qualquer nome de host válido. Os nomes são definidos como o nome do host de cada nó e serão adicionados a `/etc/hosts` em cada nó, de modo que os nós possam ser resolvidos localmente entre si.

Especifique o primeiro nó de cluster que você configurou como o primário do MySQL por meio de `mysql-server` e `mysql-master`.

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

Crie o arquivo `/data/user/common/cluster.conf` no primeiro nó configurado. Por exemplo, usando `vim`:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
