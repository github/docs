---
title: Configuring high availability replication for a cluster
intro: 'You can configure a passive replica of your entire {% data variables.product.prodname_ghe_server %} cluster in a different location, allowing your cluster to fail over to redundant nodes.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  enterprise-server: '>2.21'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
---

### About high availability replication for clusters

You can configure a cluster deployment of {% data variables.product.prodname_ghe_server %} for high availability, where an identical set of passive nodes sync with the nodes in your active cluster. If hardware or software failures affect the datacenter with your active cluster, you can manually fail over to the replica nodes and continue processing user requests, minimizing the impact of the outage.

In high availability mode, each active node syncs regularly with a corresponding passive node. The passive node runs in standby and does not serve applications or process user requests.

We recommend configuring high availability as a part of a comprehensive disaster recovery plan for {% data variables.product.prodname_ghe_server %}. We also recommend performing regular backups. For more information, see "[Configuring backups on your appliance](/enterprise/admin/configuration/configuring-backups-on-your-appliance)."

### Требования

#### Hardware and software

For each existing node in your active cluster, you'll need to provision a second virtual machine with identical hardware resources. For example, if your cluster has 11 nodes and each node has 12 vCPUs, 96 GB of RAM, and 750 GB of attached storage, you must provision 11 new virtual machines that each have 12 vCPUs, 96 GB of RAM, and 750 GB of attached storage.

On each new virtual machine, install the same version of {% data variables.product.prodname_ghe_server %} that runs on the nodes in your active cluster. You don't need to upload a license or perform any additional configuration. For more information, see "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)."

{% note %}

**Note**: The nodes that you intend to use for high availability replication should be standalone {% data variables.product.prodname_ghe_server %} instances. Don't initialize the passive nodes as a second cluster.

{% endnote %}

#### Network

You must assign a static IP address to each new node that you provision, and you must configure a load balancer to accept connections and direct them to the nodes in your cluster's front-end tier.

We don't recommend configuring a firewall between the network with your active cluster and the network with your passive cluster. The latency between the network with the active nodes and the network with the passive nodes must be less than 70 milliseconds. For more information about network connectivity between nodes in the passive cluster, see "[Cluster network configuration](/enterprise/admin/enterprise-management/cluster-network-configuration)."

### Creating a high availability replica for a cluster

- [Assigning active nodes to the primary datacenter](#assigning-active-nodes-to-the-primary-datacenter)
- [Adding passive nodes to the cluster configuration file](#adding-passive-nodes-to-the-cluster-configuration-file)
- [Example configuration](#example-configuration)

#### Assigning active nodes to the primary datacenter

Before you define a secondary datacenter for your passive nodes, ensure that you assign your active nodes to the primary datacenter.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Note the name of your cluster's primary datacenter. The `[cluster]` section at the top of the cluster configuration file defines the primary datacenter's name, using the `primary-datacenter` key-value pair. By default, the primary datacenter for your cluster is named `default`.

    ```shell
    [cluster]
      mysql-master = <em>HOSTNAME</em>
      redis-master = <em>HOSTNAME</em>
      <strong>primary-datacenter = default</strong>
    ```

    - Optionally, change the name of the primary datacenter to something more descriptive or accurate by editing the value of `primary-datacenter`.

4. {% data reusables.enterprise_clustering.configuration-file-heading %} Under each node's heading, add a new key-value pair to assign the node to a datacenter. Use the same value as `primary-datacenter` from step 3 above. For example, if you want to use the default name (`default`), add the following key-value pair to the section for each node.

    ```
    datacenter = default
    ```

    When you're done, the section for each node in the cluster configuration file should look like the following example. {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "<em>HOSTNAME</em>"]
      <strong>datacenter = default</strong>
      hostname = <em>HOSTNAME</em>
      ipv4 = <em>IP ADDRESS</em>
      ...
    ...
    ```

    {% note %}

    **Note**: If you changed the name of the primary datacenter in step 3, find the `consul-datacenter` key-value pair in the section for each node and change the value to the renamed primary datacenter. For example, if you named the primary datacenter `primary`, use the following key-value pair for each node.

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

After {% data variables.product.prodname_ghe_server %} returns you to the prompt, you've finished assigning your nodes to the cluster's primary datacenter.

#### Adding passive nodes to the cluster configuration file

To configure high availability, you must define a corresponding passive node for every active node in your cluster. The following instructions create a new cluster configuration that defines both active and passive nodes. You will:

- Create a copy of the active cluster configuration file.
- Edit the copy to define passive nodes that correspond to the active nodes, adding the IP addresses of the new virtual machines that you provisioned.
- Merge the modified copy of the cluster configuration back into your active configuration.
- Apply the new configuration to start replication.

For an example configuration, see "[Example configuration](#example-configuration)."

1. For each node in your cluster, provision a matching virtual machine with identical specifications, running the same version of  {% data variables.product.prodname_ghe_server %}. Note the IPv4 address and hostname for each new cluster node. For more information, see "[Prerequisites](#prerequisites)."

    {% note %}

    **Note**: If you're reconfiguring high availability after a failover, you can use the old nodes from the primary datacenter instead.

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. Back up your existing cluster configuration.

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. Create a copy of your existing cluster configuration file in a temporary location, like _/home/admin/cluster-passive.conf_. Delete unique key-value pairs for IP addresses (`ipv*`), UUIDs (`uuid`), and public keys for WireGuard (`wireguard-pubkey`).

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. Remove the `[cluster]` section from the temporary cluster configuration file that you copied in the previous step.

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. Decide on a name for the secondary datacenter where you provisioned your passive nodes, then update the temporary cluster configuration file with the new datacenter name. Replace `SECONDARY` with the name you choose.

    ```shell
    sed -i 's/datacenter = default/datacenter = <em>SECONDARY</em>/g' ~/cluster-passive.conf
    ```

7. Decide on a pattern for the passive nodes' hostnames.

    {% warning %}

    **Warning**: Hostnames for passive nodes must be unique and differ from the hostname for the corresponding active node.

    {% endwarning %}

8. Open the temporary cluster configuration file from step 3 in a text editor. For example, you can use Vim.

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. In each section within the temporary cluster configuration file, update the node's configuration. {% data reusables.enterprise_clustering.configuration-file-heading %}

    - Change the quoted hostname in the section heading and the value for `hostname` within the section to the passive node's hostname, per the pattern you chose in step 7 above.
    - Add a new key named `ipv4`, and set the value to the passive node's static IPv4 address.
    - Add a new key-value pair, `replica = enabled`.

    ```shell
    [cluster "<em>NEW PASSIVE NODE HOSTNAME</em>"]
      ...
      hostname = <em>NEW PASSIVE NODE HOSTNAME</em>
      ipv4 = <em>NEW PASSIVE NODE IPV4 ADDRESS</em>
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. Append the contents of the temporary cluster configuration file that you created in step 4 to the active configuration file.

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. Designate the primary MySQL and Redis nodes in the secondary datacenter. Replace `REPLICA MYSQL PRIMARY HOSTNAME` and `REPLICA REDIS PRIMARY HOSTNAME` with the hostnames of the passives node that you provisioned to match your existing MySQL and Redis primaries.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica <em>REPLICA MYSQL PRIMARY HOSTNAME</em>
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica <em>REPLICA REDIS PRIMARY HOSTNAME</em>
    ```

12. Enable MySQL to fail over automatically when you fail over to the passive replica nodes.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-auto-failover true
    ```

    {% warning %}

    **Warning**: Review your cluster configuration file before proceeding.

    - In the top-level `[cluster]` section, ensure that the values for `mysql-master-replica` and `redis-master-replica` are the correct hostnames for the passive nodes in the secondary datacenter that will serve as the MySQL and Redis primaries after a failover.
    - In each section for an active node named `[cluster "<em>ACTIVE NODE HOSTNAME</em>"]`, double-check the following key-value pairs.
      - `datacenter` should match the value of `primary-datacenter` in the top-level `[cluster]` section.
      - `consul-datacenter` should match the value of `datacenter`, which should be the same as the value for `primary-datacenter` in the top-level `[cluster]` section.
    - Ensure that for each active node, the configuration has **one** corresponding section for **one** passive node with the same roles. In each section for a passive node, double-check each key-value pair.
      - `datacenter` should match all other passive nodes.
      - `consul-datacenter` should match all other passive nodes.
      - `hostname` should match the hostname in the section heading.
      - `ipv4` should match the node's unique, static IPv4 address.
      - `replica` should be configured as `enabled`.
    - Take the opportunity to remove sections for offline nodes that are no longer in use.

    To review an example configuration, see "[Example configuration](#example-configuration)."

    {% endwarning %}

13. Initialize the new cluster configuration. {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. After the initialization finishes, {% data variables.product.prodname_ghe_server %} displays the following message.

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. Configure a load balancer that will accept connections from users if you fail over to the passive nodes. For more information, see "[Cluster network configuration](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer)."

You've finished configuring high availability replication for the nodes in your cluster. Each active node begins replicating configuration and data to its corresponding passive node, and you can direct traffic to the load balancer for the secondary datacenter in the event of a failure. For more information about failing over, see "[Initiating a failover to your replica cluster](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)."

#### Example configuration

The top-level `[cluster]` configuration should look like the following example.

```shell
[cluster]
  mysql-master = <em>HOSTNAME OF ACTIVE MYSQL MASTER</em>
  redis-master = <em>HOSTNAME OF ACTIVE REDIS MASTER</em>
  primary-datacenter = <em>PRIMARY DATACENTER NAME</em>
  mysql-master-replica = <em>HOSTNAME OF PASSIVE MYSQL MASTER</em>
  redis-master-replica = <em>HOSTNAME OF PASSIVE REDIS MASTER</em>
  mysql-auto-failover = true
...
```

The configuration for an active node in your cluster's storage tier should look like the following example.

```shell
...
[cluster "<em>UNIQUE ACTIVE NODE HOSTNAME</em>"]
  datacenter = default
  hostname = <em>UNIQUE ACTIVE NODE HOSTNAME</em>
  ipv4 = <em>IPV4 ADDRESS</em>
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
  vpn = <em>IPV4 ADDRESS SET AUTOMATICALLY</em>
  uuid = <em>UUID SET AUTOMATICALLY</em>
  wireguard-pubkey = <em>PUBLIC KEY SET AUTOMATICALLY</em>
...
```

The configuration for the corresponding passive node in the storage tier should look like the following example.

- Important differences from the corresponding active node are **bold**.
- {% data variables.product.prodname_ghe_server %} assigns values for `vpn`, `uuid`, and `wireguard-pubkey` automatically, so you shouldn't define the values for passive nodes that you will initialize.
- The server roles, defined by `*-server` keys, match the corresponding active node.

```shell
...
<strong>[cluster "<em>UNIQUE PASSIVE NODE HOSTNAME</em>"]</strong>
  <strong>replica = enabled</strong>
  <strong>ipv4 = <em>IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES</em></strong>
  <strong>datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  <strong>hostname = <em>UNIQUE PASSIVE NODE HOSTNAME</em></strong>
  <strong>consul-datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  <strong>vpn = <em>DO NOT DEFINE</em></strong>
  <strong>uuid = <em>DO NOT DEFINE</em></strong>
  <strong>wireguard-pubkey = <em>DO NOT DEFINE</em></strong>
...
```

### Monitoring replication between active and passive cluster nodes

Initial replication between the active and passive nodes in your cluster takes time. The amount of time depends on the amount of data to replicate and the activity levels for {% data variables.product.prodname_ghe_server %}.

You can monitor the progress on any node in the cluster, using command-line tools available via the {% data variables.product.prodname_ghe_server %} administrative shell. For more information about the administrative shell, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

- Monitor replication of databases:

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- Monitor replication of repository and Gist data:

  ```
  ghe-spokes status
  ```

- Monitor replication of attachment and LFS data:

  ```
  ghe-storage replication-status
  ```

- Monitor replication of Pages data:

  ```
  ghe-dpages replication-status
  ```

You can use `ghe-cluster-status` to review the overall health of your cluster. For more information, see  "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status)."

### Reconfiguring high availability replication after a failover

After you fail over from the cluster's active nodes to the cluster's passive nodes, you can reconfigure high availability replication in two ways.

#### Provisioning and configuring new passive nodes

After a failover, you can reconfigure high availability in two ways. The method you choose will depend on the reason that you failed over, and the state of the original active nodes.

1. Provision and configure a new set of passive nodes for each of the new active nodes in your secondary datacenter.

2. Use the old active nodes as the new passive nodes.

The process for reconfiguring high availability is identical to the initial configuration of high availability. For more information, see "[Creating a high availability replica for a cluster](#creating-a-high-availability-replica-for-a-cluster)."


### Disabling high availability replication for a cluster

You can stop replication to the passive nodes for your cluster deployment of {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. In the top-level `[cluster]` section, delete the `mysql-auto-failover`, `redis-master-replica`, and `mysql-master-replica` key-value pairs.

4. Delete each section for a passive node. For passive nodes, `replica` is configured as `enabled`.

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

After {% data variables.product.prodname_ghe_server %} returns you to the prompt, you've finished disabling high availability replication.
