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
shortTitle: Recuperar uma configuração HA
---

## Sobre a recuperação de uma configuração de alta disponibilidade

Você pode usar o appliance primário anterior como novo appliance de réplica em caso de failover planejado ou não relacionado à integridade do appliance. Se o failover estiver relacionado a um problema no appliance primário, talvez você prefira criar outro appliance de réplica. Para obter mais informações, consulte "[Criar réplica de alta disponibilidade](/enterprise/admin/guides/installation/creating-a-high-availability-replica/)".

{% warning %}

**Aviso:** Você deve habilitar o modo de manutenção antes de configurar um dispositivo antigo primário como uma nova réplica. Se você não habilitar o modo de manutenção, você causará uma interrupção na produção.

{% endwarning %}

## Configurar appliance primário anterior como nova réplica

1. Conecte-se ao endereço IP do appliance primário anterior usando SSH.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
1. Habilite o modo de manutenção no dispositivo primário antigo. Para obter mais informações, consulte "[Habilitar e programar o modo de manutenção](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)".
1. No appliance primário anterior, execute `ghe-repl-setup` com o endereço IP da réplica anterior.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para verificar a conexão com o novo primário e habilitar o modo de réplica para a nova réplica, execute `ghe-repl-setup` novamente.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
