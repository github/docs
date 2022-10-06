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
ms.openlocfilehash: ea771194e8bf5104707a645c4ee18473ff235153
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331813'
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

Este exemplo de `cluster.conf` define um cluster com cinco nós.

  - Dois nós (chamados `ghe-app-node-\*`) executam os serviços `web-server` e `job-server` responsáveis por responder às solicitações do cliente.
  - Três nós (chamados `ghe-data-node-\*`) executam os serviços responsáveis pelo armazenamento e pela recuperação dos dados do {% data variables.product.prodname_ghe_server %}.

Os nomes dos nós podem ser qualquer nome de host válido. Os nomes são definidos como o nome do host de cada nó e serão adicionados a `/etc/hosts` em cada nó, de modo que os nós possam ser resolvidos localmente entre si.

Especifique o primeiro nó de cluster que você configurou como o primário do MySQL por meio de `mysql-server` e `mysql-master`.

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

Crie o arquivo `/data/user/common/cluster.conf` no primeiro nó configurado. Por exemplo, usando `vim`:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
