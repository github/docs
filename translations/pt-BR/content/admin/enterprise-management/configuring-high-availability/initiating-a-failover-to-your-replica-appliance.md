---
title: Iniciar failover do appliance réplica
intro: 'É possível fazer failover de um appliance réplica do {% data variables.product.prodname_ghe_server %} usando a linha de comando para manutenção e teste ou em caso de falha do appliance primário.'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Iniciar falha no aplicativo
---

O tempo do failover dependerá do tempo necessário para promover manualmente a réplica e redirecionar o tráfego. Em média, o procedimento leva de dois a dez minutos.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. Se o dispositivo primário estiver disponível, para permitir que a replicação termine antes de trocar os dispositivos, no dispositivo primário, coloque o dispositivo primário em modo de manutenção.

    - Coloque o dispositivo em modo de manutenção.

       - Para usar o console de gerenciamento, consulte "[Habilitar e programar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)";

       - Você também pode usar o comando `ghe-maintenance -s`.
         ```shell
         $ ghe-maintenance -s
         ```

   - Quando o número de operações ativas do Git, consultas MySQL e tarefas do Resque alcançam zero, aguarde 30 segundos.

      {% note %}

      **Observação:** O Nomad sempre terá trabalhos em execução, mesmo no modo de manutenção. Portanto, você pode ignorar esses trabalhos com segurança.

      {% endnote %}

   - Para verificar todos os canais de replicação que reportarem `OK`, use o comando `ghe-repl-status -vv`.

      ```shell
      $ ghe-repl-status -vv
      ```

4. No dispositivo da réplica, para parar a replicação e promover o dispositivo da réplica ao estado primário, use o comando `ghe-repl-promote`. Isto também colocará automaticamente o nó primário no modo de manutenção se ele for acessível.
  ```shell
  $ ghe-repl-promote
  ```
5. Atualize o registro DNS para apontar para o endereço IP do appliance réplica. O tráfego é direcionado para o réplica após o término do período TTL. Se você estiver usando um balanceador de carga, verifique se ele está configurado para enviar tráfego para o réplica.
6. Avise aos usuários que eles podem voltar a trabalhar normalmente.
7. Se desejar, configure a replicação do novo primário para os appliances existentes e o primário anterior. Para obter mais informações, consulte "[Sobre a configuração de alta disponibilidade](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)".
8. Appliances para os quais você não pretende configurar replicação faziam parte da configuração de alta disponibilidade antes da falha precisam ser removidos da configuração de alta disponibilidade por UUID.
    - Nos appliances anteriores, obtenha seu UUID via `cat /data/user/common/uid`.
      ```shell
      $ cat /data/user/common/uuid
      ```
    - No novo primário, remova os UUIDs usando `ghe-repl-teardown`. Substitua *`UUID`* por um UUID que você recuperou na etapa anterior.
      ```shell
      $ ghe-repl-teardown -u <em>UUID</em>
      ```

## Leia mais

- [Utilitários para gerenciamento de replicações](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)
