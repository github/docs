---
title: Inicializar o cluster
intro: 'Um cluster do {% data variables.product.prodname_ghe_server %} deve ser configurado com uma licença e inicializado usando o shell administrativo (SSH).'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

### Instalar o {% data variables.product.prodname_ghe_server %}

1. Em cada nó de cluster, provisione e instale o {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
2. Usando o shell administrativo ou DHCP, configure **somente** o endereço IP de cada nó. Não altere outras configurações.

### Configurar o primeiro nó

1. Conecte-se ao nó que será designado como principal no MySQL no `cluster.conf`. Para obter mais informações, consulte "[Sobre o arquivo de configuração do cluster](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)".
2. No navegador, acesse `https://<ip address>:8443/setup/`.
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}
{% data reusables.enterprise_installation.instance-will-restart-automatically %}

### Inicializar o cluster

Para inicializar o cluster, você precisa de um arquivo de configuração de cluster (`cluster.conf`). Para obter mais informações, consulte “[Sobre o arquivo de configuração do cluster](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)".

1. Desde o primeiro nó configurado, execute `ghe-cluster-config-init`.  Essa ação inicializará o cluster caso haja nós no arquivo de configuração que não estão configurados.
2. Execute `ghe-cluster-config-apply`. Fazer isso vai validar o arquivo `cluster.conf`, aplicar a configuração a cada arquivo de nó e ativar os serviços configurados em cada nó.

Para verificar o status de um cluster em execução, use o comando `ghe-cluster-status`.

### Sobre o arquivo de configuração do cluster

O arquivo de configuração do cluster (`cluster.conf`) define os nós no cluster e os serviços que cada nó executa. Para obter mais informações, consulte "[Sobre os nós do cluster](/enterprise/{{ currentVersion }}/admin/guides/clustering/about-cluster-nodes)."

O exemplo `cluster.conf` define um cluster com cinco nós.

  - Dois nós (chamados `ghe-app-node-\*`) executam os serviços `web-server` e `job-server` responsáveis por responder às solicitações do cliente.
  - Três nós (chamados `ghe-data-node-\*`) executam o serviço de armazenamento e recuperação de dados do {% data variables.product.prodname_ghe_server %}.

Os nomes dos nós podem ser qualquer nome de host válido. Cada nome é definido como nome de host e será adicionado a `/etc/hosts` em cada nó. Assim, os nós podem ser resolvidos localmente entre si.

Especifique o primeiro nó do cluster que você configurou como principal do MySQL via `mysql-server` e `mysql-master`.

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
   
