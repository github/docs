---
title: Monitoring the health of your cluster
shortTitle: Monitor cluster health
intro: 'To ensure the performance and redundancy of a {% data variables.product.product_name %} cluster, you can monitor the cluster''s health.'
product: '{% data reusables.gated-features.cluster %}'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/configuring-clustering/monitoring-cluster-nodes
  - /admin/enterprise-management/configuring-clustering/monitoring-the-health-of-your-cluster
  - /admin/monitoring-managing-and-updating-your-instance/configuring-clustering/monitoring-the-health-of-your-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
---

## About {% data variables.product.product_name %} cluster health

A {% data variables.product.product_name %} cluster comprises multiple nodes, with redundant services distributed across two or more nodes. If an individual service or an entire node fails, users should not notice. Failures affect performance and redundancy, so it's important to monitor the health of your cluster. You can monitor the health of your cluster using a command-line utility or an external monitoring tool like Nagios.

{% ifversion node-eligibility-service %}

You can also monitor the health of individual nodes using {% data variables.product.prodname_nes %}. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/monitoring-the-health-of-your-cluster-nodes-with-node-eligibility-service)."

{% endif %}

## Manually checking cluster status

{% data variables.product.prodname_ghe_server %} has a built-in command line utility for monitoring the health of the cluster. From the administrative shell, running the `ghe-cluster-status` command executes a series of health checks on each node including verification of connectivity and service status. The output shows all test results including the text `ok` or `error`. For example, to only display failing tests, run:

```shell
admin@ghe-data-node-0:~$ ghe-cluster-status | grep error
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```

{% note %}

**Note:** If there are no failing tests, this command produces no output. This indicates the cluster is healthy.

{% endnote %}

{% ifversion ghes-manage-api-cli-extension %}

## Monitoring cluster status using the {% data variables.product.prodname_cli %}

You can use the `gh es` extension for {% data variables.product.prodname_cli %} to check the status of your {% data variables.product.product_name %} cluster. For more information, see the [GH ES CLI usage documentation](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-cluster-status) and "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli)".

{% endif %}

## Monitoring cluster status with Nagios

You can configure [Nagios](https://www.nagios.org/) to monitor {% data variables.product.prodname_ghe_server %}. In addition to monitoring basic connectivity to each of the cluster nodes, you can check the cluster status by configuring Nagios to use the `ghe-cluster-status -n` command. This returns output in a format that Nagios understands.

### Prerequisites

* Linux host running Nagios.
* Network access to the {% data variables.product.prodname_ghe_server %} cluster.

### Configuring the Nagios host

1. Generate an SSH key with a blank passphrase. Nagios uses this to authenticate to the {% data variables.product.prodname_ghe_server %} cluster.

   ```shell
   nagiosuser@nagios:~$ ssh-keygen -t ed25519
   > Generating public/private ed25519 key pair.
   > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
   > Enter passphrase (empty for no passphrase): LEAVE BLANK BY PRESSING ENTER
   > Enter same passphrase again: PRESS ENTER AGAIN
   > Your identification has been saved in /home/nagiosuser/.ssh/id_ed25519.
   > Your public key has been saved in /home/nagiosuser/.ssh/id_ed25519.pub.
   ```

   {% danger %}

   **Security Warning:** An SSH key without a passphrase can pose a security risk if authorized for full access to a host. Limit this key's authorization to a single read-only command.

   {% enddanger %}
   {% note %}

   **Note:** If you're using a distribution of Linux that doesn't support the Ed25519 algorithm, use the command:

   ```shell
   nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
   ```

   {% endnote %}
1. Copy the private key (`id_ed25519`) to the `nagios` home folder and set the appropriate ownership.

   ```shell
   nagiosuser@nagios:~$ sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/
   nagiosuser@nagios:~$ sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519
   ```

1. To authorize the public key to run _only_ the `ghe-cluster-status -n` command, use a `command=` prefix in the `/data/user/common/authorized_keys` file. From the administrative shell on any node, modify this file to add the public key generated in step 1. For example: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

1. Validate and copy the configuration to each node in the cluster by running `ghe-cluster-config-apply` on the node where you modified the `/data/user/common/authorized_keys` file.

   ```shell
   admin@ghe-data-node-0:~$ ghe-cluster-config-apply
   > Validating configuration
   > ...
   > Finished cluster configuration
   ```

1. To test that the Nagios plugin can successfully execute the command, run it interactively from Nagios host.

   ```shell
   nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H HOSTNAME -C "ghe-cluster-status -n" -t 30
   > OK - No errors detected
   ```

1. Create a command definition in your Nagios configuration.

   **Example definition**

   ```text
   define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
   }
   ```

1. Add this command to a service definition for a node in the {% data variables.product.prodname_ghe_server %} cluster.

   **Example definition**

   ```text
   define host{
        use                     generic-host
        host_name               ghe-data-node-0
        alias                   ghe-data-node-0
        address                 10.11.17.180
        }

   define service{
          use                             generic-service
          host_name                       ghe-data-node-0
          service_description             GitHub Cluster Status
          check_command                   check_ssh_ghe_cluster
          }
   ```

After you add the definition to Nagios, the service check executes according to your configuration. You should be able to see the newly configured service in the Nagios web interface.
