---
title: Recovering a high availability configuration
intro: 'After failing over to a {% data variables.product.prodname_ghe_server %} appliance, you should regain redundancy as soon as possible rather than rely on a single appliance.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
---

You can use the former primary appliance as the new replica appliance if the failover was planned or was not related to the health of the appliance. If the failover was related to an issue with the primary appliance, you may prefer to create a new replica appliance. For more information, see "[Creating a high availability replica](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/)."

### Configuring a former primary appliance as a new replica

1. Connect to the former primary appliance's IP address using SSH.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
2. On the former primary appliance, run `ghe-repl-setup` with the IP address of the former replica.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
4. To verify the connection to the new primary and enable replica mode for the new replica, run `ghe-repl-setup` again.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
