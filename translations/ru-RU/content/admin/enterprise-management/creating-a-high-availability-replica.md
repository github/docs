---
title: Creating a high availability replica
intro: 'In an active/passive configuration, the replica appliance is a redundant copy of the primary appliance. If the primary appliance fails, high availability mode allows the replica to act as the primary appliance, allowing minimal service disruption.'
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_installation.replica-limit %}

### Creating a high availability replica

1. Set up a new {% data variables.product.prodname_ghe_server %} appliance on your desired platform. The replica appliance should mirror the primary appliance's CPU, RAM, and storage settings. We recommend that you install the replica appliance in an independent environment. The underlying hardware, software, and network components should be isolated from those of the primary appliance. If you are a using a cloud provider, use a separate region or zone. For more information, see ["Setting up a {% data variables.product.prodname_ghe_server %} instance"](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
2. In a browser, navigate to the new replica appliance's IP address and upload your {% data variables.product.prodname_enterprise %} license.
3. Set an admin password that matches the password on the primary appliance and continue.
4. Click **Configure as Replica**. ![Installation options with link to configure your new instance as a replica](/assets/images/enterprise/management-console/configure-as-replica.png)
5. Under "Add new SSH key", type your SSH key. ![Add SSH key](/assets/images/enterprise/management-console/add-ssh-key.png)
6. Click **Add key**, then click **Continue**.
6. Connect to the replica appliance's IP address using SSH.
  ```shell
  $ ssh -p 122 admin@<em>REPLICA IP</em>
  ```
7. To generate a key pair for replication, use the `ghe-repl-setup` command with the primary appliance's IP address and copy the public key that it returns.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
9. To verify the connection to the primary and enable replica mode for the new replica, run `ghe-repl-setup` again.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
11. To verify the status of each datastore's replication channel, use the `ghe-repl-status` command.
  ```shell
  $ ghe-repl-status
  ```

### Creating geo-replication replicas

This example configuration uses a primary and two replicas, which are located in three different geographic regions. While the three nodes can be in different networks, all nodes are required to be reachable from all the other nodes. At the minimum, the required administrative ports should be open to all the other nodes. For more information about the port requirements, see "[Network Ports](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports/#administrative-ports)."

1. Create the first replica the same way you would for a standard two node configuration by running `ghe-repl-setup` on the first replica.
  ```shell
  (replica1)$ ghe-repl-setup <em>PRIMARY IP</em>
  (replica1)$ ghe-repl-start
  ```
2. Create a second replica and use the `ghe-repl-setup --add` command. The `--add` flag prevents it from overwriting the existing replication configuration and adds the new replica to the configuration.
  ```shell
  (replica2)$ ghe-repl-setup --add <em>PRIMARY IP</em>
  (replica2)$ ghe-repl-start
  ```
3. By default, replicas are configured to the same datacenter, and will now attempt to seed from an existing node in the same datacenter. Configure the replicas for different datacenters by setting a different value for the datacenter option. The specific values can be anything you would like as long as they are different from each other. Run the `ghe-repl-node` command on each node and specify the datacenter.

  On the primary:
  ```shell
  (primary)$ ghe-repl-node --datacenter <em>[PRIMARY DC NAME]</em>
  ```
  On the first replica:
  ```shell
  (replica1)$ ghe-repl-node --datacenter <em>[FIRST REPLICA DC NAME]</em>
  ```
  On the second replica:
  ```shell
  (replica2)$ ghe-repl-node --datacenter <em>[SECOND REPLICA DC NAME]</em>
  ```
  {% tip %}

  **Tip:** You can set the `--datacenter` and `--active` options at the same time.

  {% endtip %}
4. An active replica node will store copies of the appliance data and service end user requests. An inactive node will store copies of the appliance data but will be unable to service end user requests. Enable active mode using the `--active` flag or inactive mode using the `--inactive` flag.

  On the first replica:
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  On the second replica:
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. To apply the configuration, use the `ghe-config-apply` command on the primary.
  ```shell
  (primary)$ ghe-config-apply
  ```

### Configuring DNS for geo-replication

Configure Geo DNS using the IP addresses of the primary and replica nodes. You can also create a DNS CNAME for the primary node (e.g. `primary.github.example.com`) to access the primary node via SSH or to back it up via `backup-utils`.

For testing, you can add entries to the local workstation's `hosts` file (for example, `/etc/hosts`). These example entries will resolve requests for `HOSTNAME` to `replica2`. You can target specific hosts by commenting out different lines.

```
# <primary IP>     <em>HOSTNAME</em>
# <replica1 IP>    <em>HOSTNAME</em>
<replica2 IP>    <em>HOSTNAME</em>
```

### Дополнительная литература

- "[About high availability configuration](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration)"
- "[Utilities for replication management](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
- "[About geo-replication](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)"
