---
title: Iniciar uma failover no seu cluster de réplicas
intro: 'Se seu cluster de {% data variables.product.prodname_ghe_server %} falhar, você poderá gerar uma falha na réplica passiva.'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  enterprise-server: '>2.21'
topics:
  - Enterprise
---

### Sobre failover para seu cluster de réplicas

Na hipótese de falha no seu centro de dados primário, você pode gerar falha para os nós de réplica no centro de dados secundário se você configurar um nó de réplica passiva para cada nó no seu cluster ativo.

O tempo necessário para gerar a falha depende do tempo que leva para promover manualmente o cluster de réplicas e redirecionar o tráfego.

Promover um cluster de réplica não configura automaticamente a replicação para o cluster existente. Após promover um grupo de réplicas, você poderá reconfigurar a replicação no novo grupo ativo. Para obter mais informações, consulte "[Configurar alta disponibilidade para um cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)".

### Pré-requisitos

Para gerar falha em nós de réplica passiva, você deve ter configurado alta disponibilidade para seu cluster. Para obter mais informações, consulte "[Configurar alta disponibilidade para um cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)".

### Iniciar uma failover no seu cluster de réplicas

1. SSH em qualquer nó passivo no centro de dados secundário para o seu cluster. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)".

2. Inicialize a failover para o cluster secundário e configure-o para atuar como nós ativos.

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. Atualize o registro de DNS para apontar para o endereço IP do balanceador de carga para o seu cluster passivo. O tráfego é direcionado para o réplica após o término do período TTL.

Depois de {% data variables.product.prodname_ghe_server %} redirecionar você para a instrução e após a propagação de DNS, você concluiu a failover. Os usuários podem acessar {% data variables.product.prodname_ghe_server %} usando o nome de host habitual para o seu cluster.
