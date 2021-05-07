---
title: Remover um nó de cluster
intro: É possível remover serviços de dados em um nó do cluster.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Se houver somente três nós no seu cluster de serviços de dados, não será possível removê-los porque o `ghe-spokes` não tem outro local para fazer cópia. Se houver quatro ou mais nós, o `ghe-spokes` vai retirar todos os repositórios do nó removido.

Se você estiver usando um nó offline que tenha qualquer tipo de serviços de dados (como git, páginas ou armazenamento), remova cada nó antes de deixar o nó offline.

1. Encontre o `uuid` do nó com o comando `ghe-config`.

    ```
    $ ghe-config cluster._hostname_.uuid
    ```

2. Você terá que monitorar o status do seu nó durante a operação de cópia dos dados. O ideal é que o nó não fique offline até a conclusão da operação de cópia. Para monitorar o status do seu nó, execute qualquer um dos comandos a seguir:

    Para o Git
    ```
    ghe-spokes evac-status
    ```
    Para o {% data variables.product.prodname_pages %}
    {% raw %}
    ```
    echo "select count(*) from pages_replicas where host = 'pages-server-<uuid>'" | ghe-dbconsole -y
    ```
    {% endraw %}
    Para o armazenamento
    ```
    ghe-storage evacuation-status
    ```

3. Após a conclusão do processo de cópia, você poderá remover o serviço de armazenamento. Execute qualquer um dos comandos a seguir:

    Para o Git
    {% raw %}
    ```
    ghe-spokes server evacuate git-server-<uuid>
    ```
    {% endraw %}
    Para o {% data variables.product.prodname_pages %}
    {% raw %}
    ```
    ghe-dpages evacuate pages-server-<uuid>
    ```
    {% endraw %}
    Para o armazenamento, use o nó offline
    {% raw %}
    ```
    ghe-storage offline storage-server-<uuid>
    ```
    {% endraw %}
      e remova
    {% raw %}
    ```
    ghe-storage evacuate storage-server-<uuid>
    ```
    {% endraw %}
