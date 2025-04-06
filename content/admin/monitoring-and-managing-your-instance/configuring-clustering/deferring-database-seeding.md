---
title: Deferring database seeding
intro: You can speed up the process of adding a new MySQL replica node to your cluster by opting to defer database seeding.
product: '{% data reusables.gated-features.cluster %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
redirect_from:
  - /admin/monitoring-managing-and-updating-your-instance/configuring-clustering/deferring-database-seeding
---

## About deferring database seeding of a MySQL replica node

>[!NOTE]
>The ability to defer database seeding{% ifversion ghes < 3.13 %} was added in patch release
{%- ifversion ghes = 3.12 %} 3.12.1{%- endif %}
{%- ifversion ghes = 3.11 %} 3.11.7{%- endif %}
{%- ifversion ghes = 3.10 %} 3.10.10{%- endif %}
 and{% endif %} is available as a public beta.

Adding a new MySQL replica node to your cluster when your primary node has more than seven days of data will normally trigger database seeding which can take several hours depending on the amount of data. You can choose to defer database seeding, allowing the config apply run to complete sooner, resulting in being able to open your appliance to traffic sooner.

You should only defer database seeding if you have already configured at least one MySQL replica, and you are adding an additional MySQL replica. Otherwise, there is no MySQL redundancy until the seeding is complete.

When you defer database seeding, the new MySQL replica will not be configured for replication nor have a copy of the data on your MySQL primary node until seeding is manually completed later.

## Configuring deferral of MySQL seeding when adding a new MySQL node

{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
1. Create the `cluster.conf` entry for the new MySQL node and include the `skip-data-setup = true` field. The example below adds a new node with the hostname `ghe-data-node-3` and the `mysql-server` role.

    <pre>
    ...
    [cluster "ghe-data-node-3"]
      hostname = ghe-data-node-3
      ipv4 = 192.168.0.9
      # ipv6 = fd12:3456:789a:1::7
      mysql-server = true
      <strong>skip-data-setup = true</strong>
    ...
    </pre>

1. To initialize the new node in the cluster, from the administrative shell of the node with the modified `cluster.conf`, run `ghe-cluster-config-init`.
1. To validate the configuration file, and also copy and configure each node according to the modified `cluster.conf` file, run `ghe-cluster-config-apply`.

## Manually seeding the data

Once you have run `ghe-cluster-config-apply`, the MySQL service will be running on your new node but will not be configured as a replica nor will it be seeded with data from the MySQL primary node. To seed data from the MySQL primary node, you will need to configure replication manually.

1. From the new node, to start manual replication of the MySQL primary node data, run the following command, replacing `PRIMARY_IP` with the IP address of the node running the MySQL primary.

    ```shell
    /usr/local/share/enterprise/ghe-mysql-repl-start PRIMARY_IP
    ```

The time required for database seeding is dependent on the size of data. For large datasets, we recommend running the above command in a `screen` session to ensure it survives SSH disconnects.
