---
title: Monitoring cluster nodes
intro: 'A {% data variables.product.prodname_ghe_server %} cluster is comprised of redundant services that are distributed across two or more nodes. If an individual service or an entire node were to fail, it should not be immediately apparent to users of the cluster. However since performance and redundancy are affected, it is important to monitor the health of a {% data variables.product.prodname_ghe_server %} cluster.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
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
## Manually checking cluster status

{% data variables.product.prodname_ghe_server %} has a built-in command line utility for monitoring the health of the cluster. From the administrative shell, running the `ghe-cluster-status` command executes a series of health checks on each node including verification of connectivity and service status. The output shows all test results including the text `ok` or `error`. For example, to only display failing tests, run:

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**Note:** If there are no failing tests, this command produces no output. This indicates the cluster is healthy.

{% endnote %}

## Monitoring cluster status with Nagios

You can configure [Nagios](https://www.nagios.org/) to monitor {% data variables.product.prodname_ghe_server %}. In addition to monitoring basic connectivity to each of the cluster nodes, you can check the cluster status by configuring Nagios to use the `ghe-cluster-status -n` command. This returns output in a format that Nagios understands.

### Prerequisites
* Linux host running Nagios.
* Network access to the {% data variables.product.prodname_ghe_server %} cluster.

### Configuring the Nagios host
1. Generate an SSH key with a blank passphrase. Nagios uses this to authenticate to the {% data variables.product.prodname_ghe_server %} cluster.
  ```shell
  nagiosuser@nagios:~$ <em>ssh-keygen -t ed25519</em>
  > Generating public/private ed25519 key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
  > Enter passphrase (empty for no passphrase): <em>leave blank by pressing enter</em>
  > Enter same passphrase again: <em>press enter again</em>
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
2. Copy the private key (`id_ed25519`) to the `nagios` home folder and set the appropriate ownership.
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. To authorize the public key to run *only* the `ghe-cluster-status -n` command, use a `command=` prefix in the `/data/user/common/authorized_keys` file. From the administrative shell on any node, modify this file to add the public key generated in step 1. For example: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. Validate and copy the configuration to each node in the cluster by running `ghe-cluster-config-apply` on the node where you modified the `/data/user/common/authorized_keys` file.

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. To test that the Nagios plugin can successfully execute the command, run it interactively from Nagios host.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Create a command definition in your Nagios configuration.
  ###### Example definition

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. Add this command to a service definition for a node in the {% data variables.product.prodname_ghe_server %} cluster.

  ###### Example definition

  ```
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

Once you add the definition to Nagios, the service check executes according to your configuration. You should be able to see the newly configured service in the Nagios web interface.

![Nagios Example](/assets/images/enterprise/cluster/nagios-example.png)
