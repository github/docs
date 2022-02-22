---
title: Remover um nó de cluster
intro: É possível remover serviços de dados em um nó do cluster.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
---

## Sobre a evacuação dos nós de cluster

Em uma configuração de cluster para {% data variables.product.product_name %}, você pode evacuar um nó antes de deixar o nó off-line. A evacuação garante que os nós restantes de uma camada de serviço contenham todos os dados do serviço. Por exemplo, ao substituir a máquina virtual para um nó no seu cluster, você deve primeiro evacuar o nó.

Para obter mais informações sobre os nós e níveis de serviço para {% data variables.product.prodname_ghe_server %}, consulte "[Sobre nós do cluster](/admin/enterprise-management/configuring-clustering/about-cluster-nodes)".

{% warning %}

**Avisos**:

- Para evitar a perda de dados, {% data variables.product.company_short %} recomenda que você evacue um nó antes de tomá-lo off-line.

- Se houver somente três nós no seu cluster de serviços de dados, não será possível removê-los porque o `ghe-spokes` não tem outro local para fazer cópia. Se houver quatro ou mais nós, o `ghe-spokes` vai retirar todos os repositórios do nó removido.

{% endwarning %}

## Remover um nó de cluster

Se você planeja deixar um nó off-line e o nó executar uma função de serviço de dados como `git-server`, `pages-servidor` ou `storage-server`, evacue cada nó antes de deixá-lo off-line.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. Para encontrar o UUID do nó a ser evacuado, execute o seguinte comando. Substitua `HOSTNAME` pelo nome do host do nó.

   ```shell
   $ ghe-config cluster.<em>HOSTNAME</em>.uuid
   ```
1. Monitore o status do nó enquanto {% data variables.product.product_name %} copia os dados. Não desconecte o nó até que a cópia seja concluída. Para monitorar o status do seu nó, execute qualquer um dos comandos a seguir, substituindo `UUID` pelo UUID a partir da etapa 2.

   - **Git**:

     ```shell
     $ ghe-spokes evac-status git-server-<em>UUID</em>
     ```

   - **{% data variables.product.prodname_pages %}**:

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
     ```

   - **Armazenamento**:

     ```shell
     $ ghe-storage evacuation-status storage-server-<em>UUID</em>
     ```
1. Depois que a cópia for concluída, você pode evacuar o nó executando qualquer um dos comandos a seguir, substituindo `UUID` pelo UUID da etapa 2.

   - **Git**:

     ```shell
     $ ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
     ```

   - **{% data variables.product.prodname_pages %}**:

     ```shell
     $ ghe-dpages evacuate pages-server-<em>UUID</em>
     ```

   - Para o **armazenamento**, primeiro desconecte-se do node executando o seguinte comando.

     ```shell
     $ ghe-storage offline storage-server-<em>UUID</em>
     ```

     Depois que o nó de armazenamento estiver off-line, você poderá evacuar o nó executando o seguinte comando.

     ```shell
     $ ghe-storage evacuate storage-server-<em>UUID</em>
     ```
