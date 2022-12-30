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
ms.openlocfilehash: 775e53aafadae8c5c76a9f1dfef43ebaf7ceb9f1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095955'
---
## Sobre a evacuação dos nós de cluster

Em uma configuração de cluster para {% data variables.product.product_name %}, você pode evacuar um nó antes de deixar o nó off-line. A evacuação garante que os nós restantes de uma camada de serviço contenham todos os dados do serviço. Por exemplo, ao substituir a máquina virtual para um nó no seu cluster, você deve primeiro evacuar o nó.

Para obter mais informações sobre os nós e as camadas de serviço do {% data variables.product.prodname_ghe_server %}, confira "[Sobre os nós de cluster](/admin/enterprise-management/configuring-clustering/about-cluster-nodes)".

{% warning %}

**Avisos**:

- Para evitar a perda de dados, {% data variables.product.company_short %} recomenda que você evacue um nó antes de tomá-lo off-line. 

- Se você tiver apenas três nós no seu cluster de serviços de dados, não poderá evacuar os nós porque `ghe-spokes` não tem outro lugar para fazer uma cópia. Se você tiver quatro ou mais, `ghe-spokes` moverá todos os repositórios do nó evacuado.

{% endwarning %}

## Remover um nó de cluster

Se você pretende colocar um nó offline e o nó executar uma função de serviço de dados como `git-server`, `pages-server`ou `storage-server`, evacue cada nó antes de colocar o nó offline.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. Para encontrar o UUID do nó a ser evacuado, execute o seguinte comando. Substitua `HOSTNAME` pelo nome do host do nó.

   ```shell
   $ ghe-config cluster.<em>HOSTNAME</em>.uuid
   ```
1. Monitore o status do nó enquanto {% data variables.product.product_name %} copia os dados. Não desconecte o nó até que a cópia seja concluída. Para monitorar o status do nó, execute um dos comandos a seguir, substituindo `UUID` pelo UUID da etapa 2.

   - **GIT**:

     ```shell
     $ ghe-spokes evac-status git-server-<em>UUID</em>
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
     ```

   - **Armazenamento**:

     ```shell
     $ ghe-storage evacuation-status storage-server-<em>UUID</em>
     ```
1. Depois que a cópia for concluída, você poderá evacuar o nó executando um dos comandos a seguir, substituindo `UUID` pelo UUID da etapa 2.

   - **GIT**:

     ```shell
     $ ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ ghe-dpages evacuate pages-server-<em>UUID</em>
     ```

   - Em **armazenamento**, primeiro, coloque o nó offline executando o comando a seguir.

     ```shell
     $ ghe-storage offline storage-server-<em>UUID</em>
     ```

     Depois que o nó de armazenamento estiver off-line, você poderá evacuar o nó executando o seguinte comando.

     ```shell
     $ ghe-storage evacuate storage-server-<em>UUID</em>
     ```
