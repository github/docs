---
title: Recuperar configuração de alta disponibilidade
intro: 'Após o failover para um appliance do {% data variables.product.prodname_ghe_server %}, você deve recuperar a redundância o quanto antes, em vez de usar somente um appliance.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
---
Você pode usar o appliance primário anterior como novo appliance de réplica em caso de failover planejado ou não relacionado à integridade do appliance. Se o failover estiver relacionado a um problema no appliance primário, talvez você prefira criar outro appliance de réplica. Para obter mais informações, consulte "[Criar réplica de alta disponibilidade](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/)".

### Configurar appliance primário anterior como nova réplica

1. Conecte-se ao endereço IP do appliance primário anterior usando SSH.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
2. No appliance primário anterior, execute `ghe-repl-setup` com o endereço IP da réplica anterior.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
4. Para verificar a conexão com o novo primário e habilitar o modo de réplica para a nova réplica, execute `ghe-repl-setup` novamente.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
