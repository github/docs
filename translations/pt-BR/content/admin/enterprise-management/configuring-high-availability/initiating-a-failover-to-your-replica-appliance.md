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
shortTitle: Initiate failover to appliance
ms.openlocfilehash: 65e522d2a7b466c4f75cea087760ecb3001317a7
ms.sourcegitcommit: 3ea3ccb5af64bd7d9e4699757db38fdd8f98cde7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/12/2022
ms.locfileid: '147076696'
---
O tempo do failover dependerá do tempo necessário para promover manualmente a réplica e redirecionar o tráfego. Em média, o procedimento leva de dois a dez minutos.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. Se o dispositivo primário estiver disponível, para permitir que a replicação seja concluída antes de você alternar os dispositivos, no dispositivo primário, coloque o dispositivo primário no modo de manutenção.

    - Coloque o dispositivo no modo de manutenção.

       - Para usar o console de gerenciamento, confira "[Como habilitar e agendar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)"

       - Use também o comando `ghe-maintenance -s`.
         ```shell
         $ ghe-maintenance -s
         ```

   - Quando o número de operações ativas do Git, consultas MySQL e tarefas do Resque alcançam zero, aguarde 30 segundos. 

      {% note %}

      **Observação:** o Nomad sempre terá trabalhos em execução, mesmo no modo de manutenção, ou seja, você pode ignorar esses trabalhos com segurança.
    
      {% endnote %}

   - Para verificar se todos os canais de replicação relatam `OK`, use o comando `ghe-repl-status -vv`.

      ```shell
      $ ghe-repl-status -vv
      ```

4. No dispositivo de réplica, para interromper a replicação e promover o dispositivo de réplica ao status primário, use o comando `ghe-repl-promote`. A ação também colocará automaticamente o nó primário no nó de manutenção, se ele for acessível.
  ```shell
  $ ghe-repl-promote
  ```
5. Atualize o registro DNS para apontar para o endereço IP do appliance réplica. O tráfego é direcionado para o réplica após o término do período TTL. Se você estiver usando um balanceador de carga, verifique se ele está configurado para enviar tráfego para o réplica.
6. Avise aos usuários que eles podem voltar a trabalhar normalmente.
7. Se desejar, configure a replicação do novo primário para os appliances existentes e o primário anterior. Para obter mais informações, confira "[Sobre a configuração de alta disponibilidade](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)".
8. Appliances para os quais você não pretende configurar replicação faziam parte da configuração de alta disponibilidade antes da falha precisam ser removidos da configuração de alta disponibilidade por UUID.
    - Nos dispositivos anteriores, obtenha o UUID por meio de `cat /data/user/common/uuid`.
      ```shell
      $ cat /data/user/common/uuid
      ```
    - No novo primário, remova os UUIDs usando `ghe-repl-teardown`. Substitua *`UUID`* por um UUID recuperado na etapa anterior.
      ```shell
      $ ghe-repl-teardown -u <em>UUID</em>
      ```

## <a name="further-reading"></a>Leitura adicional

- "[Utilitários para o gerenciamento de replicações](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
