---
title: Configuring high availability replication for a cluster
intro: 'You can configure a replica of your entire {% data variables.product.prodname_ghe_server %} cluster in a separate datacenter, allowing your cluster to fail over to redundant nodes.'
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  ghes: '>= 3.9'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Configure HA replication
---

## About high availability replication for clusters

{% data reusables.enterprise_clustering.high-availability-requires-391 %}

You can provide protection against disruption in a datacenter or cloud region by configuring a cluster deployment of {% data variables.product.prodname_ghe_server %} for high availability. In a high availability configuration, an identical set of replica nodes sync with the nodes in your active cluster. If hardware or software failures affect the datacenter with your active cluster, you can manually fail over to the replica nodes and continue processing user requests, minimizing the impact of the outage.

In a high availability configuration, nodes that host data services sync regularly with the replica cluster. Replica nodes run in standby and do not serve applications or process user requests.

We recommend configuring high availability as a part of a comprehensive disaster recovery plan for {% data variables.product.prodname_ghe_server %} clustering. We also recommend performing regular backups. For more information, see "[AUTOTITLE](/enterprise/admin/configuration/configuring-backups-on-your-appliance)."

## Prerequisites

### Hardware and software

For each existing node in your active cluster, you'll need to provision a second virtual machine with identical hardware resources. For example, if your cluster has 13 nodes and each node has 12 vCPUs, 96 GB of RAM, and 750 GB of attached storage, you must provision 13 new virtual machines that each have 12 vCPUs, 96 GB of RAM, and 750 GB of attached storage.

On each new virtual machine, install the same version of {% data variables.product.prodname_ghe_server %} that runs on the nodes in your active cluster. You don't need to upload a license or perform any additional configuration. For more information, see "[AUTOTITLE](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)."

{% note %}

**Note**: The nodes that you intend to use for high availability replication should be standalone {% data variables.product.prodname_ghe_server %} instances. Don't initialize the replica nodes as a second cluster.

{% endnote %}

### Network

You must assign a static IP address to each new node that you provision, and you must configure a load balancer to accept connections and direct them to the nodes in your cluster's front-end tier.

{% data reusables.enterprise_clustering.network-latency %} For more information about network connectivity between nodes in the replica cluster, see "[AUTOTITLE](/enterprise/admin/enterprise-management/cluster-network-configuration)."

## Creating a high availability replica for a cluster

- [Assigning active nodes to the primary datacenter](#assigning-active-nodes-to-the-primary-datacenter)
- [Adding replica nodes to the cluster configuration file](#adding-replica-nodes-to-the-cluster-configuration-file)
- [Example configuration](#example-configuration)

### Assigning active nodes to the primary datacenter

Before you define a secondary datacenter for your replica nodes, ensure that you assign your active nodes to the primary datacenter.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
{% data reusables.enterprise_clustering.open-configuration-file %}
1. Note the name of your cluster's primary datacenter. The `[cluster]` section at the top of the cluster configuration file defines the primary datacenter's name, using the `primary-datacenter` key-value pair.

    ```text
    [cluster]
      mysql-master = HOSTNAME
      redis-master = HOSTNAME
      primary-datacenter = primary
    ```

    - Optionally, change the name of the primary datacenter to something more descriptive or accurate by editing the value of `primary-datacenter`.

1. {% data reusables.enterprise_clustering.configuration-file-heading %} Under each node's heading, add a new key-value pair to assign the node to a datacenter. Use the same value as `primary-datacenter` from step 3 above. For example, if you want to use the default name (`default`), add the following key-value pair to the section for each node.

    ```text
    datacenter = primary
    ```

    When you're done, the section for each node in the cluster configuration file should look like the following example. {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```text
    [cluster "HOSTNAME"]
      datacenter = default
      hostname = HOSTNAME
      ipv4 = IP-ADDRESS
      ...
    ...
    ```

    {% note %}

    **Note**: If you changed the name of the primary datacenter in step 3, find the `consul-datacenter` key-value pair in the section for each node and change the value to the renamed primary datacenter. For example, if you named the primary datacenter `primary`, use the following key-value pair for each node.

    ```text
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}
{% data reusables.enterprise_clustering.configuration-finished %}

After {% data variables.product.prodname_ghe_server %} returns you to the prompt, you've finished assigning your nodes to the cluster's primary datacenter.

### Adding replica nodes to the cluster configuration file

To configure high availability, you must define a corresponding replica node for every active node in your cluster. To create a new cluster configuration that defines both active and replica nodes, you'll complete the following tasks.

- Create a copy of the active cluster configuration file.
- Edit the copy to define replica nodes that correspond to the active nodes, adding the IP addresses of the new virtual machines that you provisioned.
- Merge the modified copy of the cluster configuration back into your active configuration.
- Apply the new configuration to start replication.

For an example configuration, see "[Example configuration](#example-configuration)."

1. For each node in your cluster, provision a matching virtual machine with identical specifications, running the same version of  {% data variables.product.prodname_ghe_server %}. Note the IPv4 address and hostname for each new cluster node. For more information, see "[Prerequisites](#prerequisites)."

    {% note %}

    **Note**: If you're reconfiguring high availability after a failover, you can use the old nodes from the primary datacenter instead.

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. Back up your existing cluster configuration.

    ```shell
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

1. Create a copy of your existing cluster configuration file in a temporary location, like `/home/admin/cluster-replica.conf`.

    ```shell
    grep -Ev "(?:|ipv|uuid)" /data/user/common/cluster.conf > ~/cluster-replica.conf
    ```

1. Remove the `[cluster]` section from the temporary cluster configuration file that you copied in the previous step.

    ```shell
    git config -f ~/cluster-replica.conf --remove-section cluster
    ```

1. Decide on a name for the secondary datacenter where you provisioned your replica nodes, then update the temporary cluster configuration file with the new datacenter name. Replace `SECONDARY` with the name you choose.

    ```shell
    sed -i 's/datacenter = default/datacenter = SECONDARY/g' ~/cluster-replica.conf
    ```

1. Decide on a pattern for the replica nodes' hostnames.

    {% warning %}

    **Warning**: Hostnames for replica nodes must be unique and differ from the hostname for the corresponding active node.

    {% endwarning %}

1. Open the temporary cluster configuration file from step 3 in a text editor. For example, you can use Vim.

    ```shell
    sudo vim ~/cluster-replica.conf
    ```

1. In each section within the temporary cluster configuration file, update the node's configuration. {% data reusables.enterprise_clustering.configuration-file-heading %}

    - Change the quoted hostname in the section heading and the value for `hostname` within the section to the replica node's hostname, per the pattern you chose in step 7 above.
    - Add a new key named `ipv4`, and set the value to the replica node's static IPv4 address.
    - Add a new key-value pair, `replica = enabled`.

    ```shell
    [cluster "NEW REPLICA NODE HOSTNAME"]
      ...
      hostname = NEW REPLICA NODE HOSTNAME
      ipv4 = NEW REPLICA NODE IPV4 ADDRESS
      replica = enabled
      ...
    ...
    ```

1. Append the contents of the temporary cluster configuration file that you created in step 4 to the active configuration file.

    ```shell
    cat ~/cluster-replica.conf >> /data/user/common/cluster.conf
    ```

1. Designate the primary MySQL and Redis nodes in the secondary datacenter. Replace `REPLICA MYSQL PRIMARY HOSTNAME` and `REPLICA REDIS PRIMARY HOSTNAME` with the hostnames of the replica node that you provisioned to match your existing MySQL and Redis primaries.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica REPLICA-MYSQL-PRIMARY-HOSTNAME
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica REPLICA-REDIS-PRIMARY-HOSTNAME
    ```

    {% warning %}

    **Warning**: Review your cluster configuration file before proceeding.

    - In the top-level `[cluster]` section, ensure that the values for `mysql-master-replica` and `redis-master-replica` are the correct hostnames for the replica nodes in the secondary datacenter that will serve as the MySQL and Redis primaries after a failover.
    - In each section for an active node named <code>[cluster "ACTIVE NODE HOSTNAME"]</code>, double-check the following key-value pairs.
      - `datacenter` should match the value of `primary-datacenter` in the top-level `[cluster]` section.
      - `consul-datacenter` should match the value of `datacenter`, which should be the same as the value for `primary-datacenter` in the top-level `[cluster]` section.
    - Ensure that for each active node, the configuration has **one** corresponding section for **one** replica node with the same roles. In each section for a replica node, double-check each key-value pair.
      - `datacenter` should match all other replica nodes.
      - `consul-datacenter` should match all other replica nodes.
      - `hostname` should match the hostname in the section heading.
      - `ipv4` should match the node's unique, static IPv4 address.
      - `replica` should be configured as `enabled`.
    - Take the opportunity to remove sections for offline nodes that are no longer in use.

    To review an example configuration, see "[Example configuration](#example-configuration)."

    {% endwarning %}

1. Initialize the new cluster configuration. {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

1. After the initialization finishes, {% data variables.product.prodname_ghe_server %} displays the following message.

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}
1. After the configuration run finishes, verify that cluster replication is correctly set up and working.

    ```shell
    ghe-cluster-repl-status
    ```

{% data reusables.enterprise_clustering.configuration-finished %}
1. Configure a load balancer that will accept connections from users after you fail over to the replica nodes. For more information, see "[AUTOTITLE](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer)."

You've finished configuring high availability replication for the nodes in your cluster. Each active node begins replicating configuration and data to its corresponding replica node, and you can direct traffic to the load balancer for the secondary datacenter in the event of a failure. For more information about failing over, see "[AUTOTITLE](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)."

### Example configuration

The top-level `[cluster]` configuration should look like the following example.

```shell
[cluster]
  mysql-master = HOSTNAME-OF-ACTIVE-MYSQL-MASTER
  redis-master = HOSTNAME-OF-ACTIVE-REDIS-MASTER
  primary-datacenter = PRIMARY-DATACENTER-NAME
  mysql-master-replica = HOSTNAME-OF-REPLICA-MYSQL-MASTER
  redis-master-replica = HOSTNAME-OF-REPLICA-REDIS-MASTER
  mysql-auto-failover = false
...
```

The configuration for an active node in your cluster's storage tier should look like the following example.

```shell
...
[cluster "UNIQUE ACTIVE NODE HOSTNAME"]
  datacenter = default
  hostname = UNIQUE-ACTIVE-NODE-HOSTNAME
  ipv4 = IPV4-ADDRESS
  consul-datacenter = default
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  uuid = UUID SET AUTOMATICALLY
...
```

The configuration for the corresponding replica node in the storage tier should look like the following example.

- Important differences from the corresponding active node are **bold**.
- {% data variables.product.prodname_ghe_server %} assigns the value for `uuid` automatically, so you shouldn't define this value for replica nodes that you will initialize.
- The server roles, defined by `*-server` keys, match the corresponding active node.

```shell
...
[cluster "UNIQUE REPLICA NODE HOSTNAME"]
  replica = enabled
  ipv4 = IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES
  datacenter = SECONDARY DATACENTER NAME
  hostname = UNIQUE REPLICA NODE HOSTNAME
  consul-datacenter = SECONDARY DATACENTER NAME
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  uuid = DO NOT DEFINE
...
```

## Monitoring replication between active and replica cluster nodes

Initial replication between the active and replica nodes in your cluster takes time. The amount of time depends on the amount of data to replicate and the activity levels for {% data variables.product.prodname_ghe_server %}.

You can monitor the progress on any node in the cluster, using command-line tools available via the {% data variables.product.prodname_ghe_server %} administrative shell. For more information about the administrative shell, see "[AUTOTITLE](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

To monitor the replication of all services, use the following command.

```shell
ghe-cluster-repl-status
```

You can use `ghe-cluster-status` to review the overall health of your cluster. For more information, see  "[AUTOTITLE](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status)."

## Reconfiguring high availability replication after a failover

After you fail over from the cluster's active nodes to the cluster's replica nodes, you can reconfigure high availability in one of two ways. The method you choose will depend on the reason that you failed over, and the state of the original active nodes.

- Provision and configure a new set of replica nodes for each of the new active nodes in your secondary datacenter.
- Use the original active nodes as the new replica nodes.

The process for reconfiguring high availability is identical to the initial configuration of high availability. For more information, see "[Creating a high availability replica for a cluster](#creating-a-high-availability-replica-for-a-cluster)."

If you use the original active nodes, after reconfiguring high availability, you will need to unset maintenance mode on the nodes. For more information, see "[AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#enabling-or-disabling-maintenance-mode-for-all-nodes-in-a-cluster-via-the-cli)."

## Disabling high availability replication for a cluster

You can stop replication to the replica nodes for your cluster deployment of {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
{% data reusables.enterprise_clustering.open-configuration-file %}
1. In the top-level `[cluster]` section, delete the `redis-master-replica`, and `mysql-master-replica` key-value pairs.
1. Delete each section for a replica node. For replica nodes, `replica` is configured as `enabled`.
{% data reusables.enterprise_clustering.apply-configuration %}
{% data reusables.enterprise_clustering.configuration-finished %}

After {% data variables.product.prodname_ghe_server %} returns you to the prompt, you've finished disabling high availability replication.
