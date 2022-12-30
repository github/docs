---
title: Recuperar configuração de alta disponibilidade
intro: 'Após o failover para um appliance do {% data variables.product.prodname_ghe_server %}, você deve recuperar a redundância o quanto antes, em vez de usar somente um appliance.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Recover a HA configuration
ms.openlocfilehash: a61cdf4b3f7338c986112f67a0ca66be33d75c5f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332765'
---
## Sobre a recuperação de uma configuração de alta disponibilidade

Você pode usar o appliance primário anterior como novo appliance de réplica em caso de failover planejado ou não relacionado à integridade do appliance. Se o failover estiver relacionado a um problema no appliance primário, talvez você prefira criar outro appliance de réplica. Para obter mais informações, confira "[Como criar uma réplica de alta disponibilidade](/enterprise/admin/guides/installation/creating-a-high-availability-replica/)".

{% warning %}

**Aviso:** você precisa habilitar o modo de manutenção antes de configurar um dispositivo primário anterior como uma nova réplica. Se você não habilitar o modo de manutenção, você causará uma interrupção na produção.

{% endwarning %}

## Configurar appliance primário anterior como nova réplica

1. Conecte-se ao endereço IP do appliance primário anterior usando SSH.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
1. Habilite o modo de manutenção no dispositivo primário antigo. Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)".
1. No dispositivo primário anterior, execute `ghe-repl-setup` com o endereço IP da réplica anterior.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para verificar a conexão com o novo primário e habilitar o modo de réplica na nova réplica, execute `ghe-repl-setup` novamente.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
