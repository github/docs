---
title: Monitoring the health of your cluster nodes with Node Eligibility Service
shortTitle: Node Eligibility Service
intro: "You can monitor when nodes in a {% data variables.product.product_name %} cluster have been offline long enough to cause issues by using {% data variables.product.prodname_nes %}."
permissions: People with administrative SSH access to a {% data variables.product.product_name %} instance can monitor cluster nodes.
product: '{% data reusables.gated-features.cluster %}'
versions:
  feature: 'node-eligibility-service'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
redirect_from:
  - /admin/enterprise-management/configuring-clustering/monitoring-the-health-of-your-cluster-nodes-with-node-eligibility-service
---

## About {% data variables.product.prodname_nes %}

In a {% data variables.product.product_name %} cluster, an individual node may become unreachable by other nodes due to a hardware or software failure. After time, even if you restore the node's health, the subsequent synchronization of data can negatively impact your instance's performance.

You can proactively mitigate the impact of reduced node availability by using {% data variables.product.prodname_nes %}. This service monitors the state of your cluster's nodes and emits a warning if a node has been offline for too long. You can also prevent an offline node from rejoining the cluster. Optionally, you can allow {% data variables.product.prodname_nes %} to take ineligible nodes offline.

By default, {% data variables.product.prodname_nes %} is disabled. If you enable {% data variables.product.prodname_nes %}, your instance will alert you of unhealthy nodes by displaying a banner in the administrative web UI for {% data variables.product.product_name %}, and in CLI output for some cluster-related utilities, such as `ghe-config-apply` and `ghe-cluster-diagnostics`.

{% data variables.product.prodname_nes %} allows you to monitor the health of individual nodes. You can also monitor the overall health of your cluster. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/monitoring-the-health-of-your-cluster)."

## About health and eligibility of cluster nodes

To determine whether to emit a warning or automatically adjust the configuration of your cluster, {% data variables.product.prodname_nes %} continuously monitors the health of each node. Each node regularly reports a timestamped health state, which {% data variables.product.prodname_nes %} compares to a Time To Live (TTL) duration.

Each node has a health state and an eligibility state.

- Health refers to the accessibility of the node within the cluster and has three possible states: `healthy`, `warning`, or `critical`.
- Eligibility refers to the ability of the node to work in the cluster and has two possible states: `eligible` or `ineligible`.

{% data variables.product.prodname_nes %} provides a configurable TTL setting for two states, `warn` and `fail`.

- `warn`: The node has been offline for a short period of time. This may indicate something is wrong with the node and that administrators should investigate. The default setting is 15 minutes.
- `fail`: The node has been offline for a long period of time, and reintroduction into the cluster could cause performance issues due to resynchronization. The default setting is 60 minutes.

For each node, {% data variables.product.prodname_nes %} determines health and eligibility for participation in the cluster in the following ways.

- If a node has been observed to be healthy, the health state is `healthy` and the eligibility state is `eligible`.
- If a node hasn't been observed to be healthy for longer than the `warn` TTL, the health state is `warning` and the eligibility state is `eligible`.
- If a node hasn't been observed to be healthy for longer than the `fail` TTL, the health state is `critical` and its eligibility state is `ineligible`.

## Enabling {% data variables.product.prodname_nes %} for your cluster

By default, {% data variables.product.prodname_nes %} is disabled. You can enable {% data variables.product.prodname_nes %} by setting the value for `app.nes.enabled` using `ghe-config`.

{% data reusables.enterprise_installation.ssh-into-cluster-node %}
1. To verify whether {% data variables.product.prodname_nes %} is currently enabled, run the following command.

   ```shell copy
   ghe-config app.nes.enabled
   ```

1. To enable {% data variables.product.prodname_nes %}, run the following command.

   ```shell copy
   ghe-config app.nes.enabled true
   ```

{% data reusables.enterprise.apply-configuration %}
1. To verify that {% data variables.product.prodname_nes %} is running, from any node, run the following command.

   ```shell copy
   nomad status nes
   ```

## Configuring TTL settings for {% data variables.product.prodname_nes %}

To determine how {% data variables.product.prodname_nes %} notifies you, you can configure TTL settings for `fail` and `warn` states. The TTL for the `fail` state must be higher than the TTL for the `warn` state.

{% data reusables.enterprise_installation.ssh-into-cluster-node %}
1. To verify the current TTL settings, run the following command.

   ```shell copy
   nes get-node-ttl all
   ```

1. To set the TTL for the `fail` state, run the following command. Replace MINUTES with the number of minutes to use for failures.

   ```shell copy
   nes set-node-ttl fail MINUTES
   ```

1. To set the TTL for the `warn` state, run the following command. Replace MINUTES with the number of minutes to use for warnings.

   ```shell copy
   nes set-node-ttl warn MINUTES
   ```

## Managing whether {% data variables.product.prodname_nes %} can take a node offline

By default, {% data variables.product.prodname_nes %} provides alerts to notify you about changes to the health of cluster nodes. Optionally, if the service determines that an unhealthy node is ineligible to rejoin the cluster, you can allow the service to take the node offline.

When a node is taken offline, the instance removes job allocations from the node. If the node runs data storage services, {% data variables.product.prodname_nes %} updates the configuration to reflect the node's ineligibility to rejoin the cluster.

To manage whether {% data variables.product.prodname_nes %} can take a node and its services offline, you can configure `adminaction` states for the node. If a node is in the `approved` state, {% data variables.product.prodname_nes %} can take the node offline. If a node is in the `none` state, {% data variables.product.prodname_nes %} cannot take the node offline.

{% data reusables.enterprise_installation.ssh-into-cluster-node %}
1. To configure whether {% data variables.product.prodname_nes %} can take a node offline, run one of the following commands.
   - To allow the service to automatically take administrative action when a node goes offline, run the following command. Replace HOSTNAME with the node's hostname.

     ```shell copy
     nes set-node-adminaction approved HOSTNAME
     ```

   - To revoke {% data variables.product.prodname_nes %}'s ability to take a node offline, run the following command. Replace HOSTNAME with the node's hostname.

     ```shell copy
     nes set-node-adminaction none HOSTNAME
     ```

## Viewing an overview of node health

To view an overview of your nodes' health using {% data variables.product.prodname_nes %}, use one of the following methods.

- SSH into any node in the cluster, then run `nes get-cluster-health`.
- Navigate to the {% data variables.enterprise.management_console %}'s "Status" page. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/accessing-the-management-console)."

## Re-enabling an ineligible node to join the cluster

After {% data variables.product.prodname_nes %} detects that a node has exceeded the TTL for the `fail` state, and after the service marks the node as `ineligible`, the service will no longer update the health status for the node. To re-enable a node to join the cluster, you can remove the `ineligible` status from the node.

{% data reusables.enterprise_installation.ssh-into-cluster-node %}
1. To check the current `adminaction` state for the node, run the following command. Replace HOSTNAME with the hostname of the ineligible node.

   ```shell copy
   nes get-node-adminaction HOSTNAME
   ```

1. If the `adminaction` state is currently set to `approved`, change the state to `none` by running the following command. Replace HOSTNAME with the hostname of the ineligible node.

   ```shell copy
   nes set-node-adminaction none HOSTNAME
   ```

1. To ensure the node is in a healthy state, run the following command and confirm that the node's status is `ready`.

   ```shell copy
   nomad node status
   ```

   - If the node's status is `ineligible`, make the node eligible by connecting to the node via SSH and running the following command.

     ```shell copy
     nomad node eligibility -enable -self
     ```

1. To update the node's eligibility in {% data variables.product.prodname_nes %}, run the following command. Replace HOSTNAME with the node's hostname.

   ```shell copy
   nes set-node-eligibility eligible HOSTNAME
   ```

1. Wait 30 seconds, then check the cluster's health to confirm the target node is eligible by running the following command.

   ```shell copy
   nes get-cluster-health
   ```

## Viewing logs for {% data variables.product.prodname_nes %}

You can view logs for {% data variables.product.prodname_nes %} from any node in the cluster, or from the node that runs the service. If you generate a support bundle, the logs are included. For more information, see "[AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support)."

{% data reusables.enterprise_installation.ssh-into-cluster-node %}
1. To view logs for {% data variables.product.prodname_nes %} from any node in the cluster, run the following command.

   ```shell copy
   nomad alloc logs -job nes
   ```

1. Alternatively, you can view logs for {% data variables.product.prodname_nes %} on the node that runs the service. The service writes logs to the systemd journal.

   - To determine which node runs {% data variables.product.prodname_nes %}, run the following command.

     ```shell copy
     nomad job status "nes" | grep running | grep "${nomad_node_id}" | awk 'NR==2{ print $1 }' | xargs nomad alloc status | grep "Node Name"
     ```

   - To view logs on the node, connect to the node via SSH, then run the following command.

     ```shell copy
     journalctl -t nes
     ```

## Further reading

- "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#nes)"
