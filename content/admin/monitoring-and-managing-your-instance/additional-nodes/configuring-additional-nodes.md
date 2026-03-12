---
title: Adding nodes to a high availability configuration
shortTitle: Adding nodes to HA
intro: 'Add nodes to the primary high availability (HA) datacenter. This is intended to offload CPU-intensive tasks from the primary node, allowing for horizontal scaling of the {% data variables.product.prodname_ghe_server %} instance.'
versions:
  ghes: '>= 3.18'
type: how_to
topics:
  - High availability
  - Enterprise
  - Infrastructure
allowTitleToDifferFromFilename: true
---

> [!NOTE]
> The ability to add additional compute nodes to HA is in {% data variables.release-phases.public_preview %} and subject to change. During the preview, please share any feedback with your customer success team.


For {% data variables.product.prodname_ghe_server %} customers looking to scale horizontally, migrating to and operating a cluster is an option, but is resource-intensive and time-consuming. As an alternative, we recommend adding nodes to an HA configuration.

The terms "additional node" and "stateless node" are used interchangeably throughout this article. Stateless nodes can only be added to HA deployments that contain at least one replica.

## Additional nodes

Of all the services running on a {% data variables.product.prodname_ghe_server %} appliance, Unicorn is often the most CPU and memory intensive, closely followed by Aqueduct, Git, and MySQL. Because Unicorn and Aqueduct are stateless services, they are well-suited for horizontal scaling and can run on a separate set of nodes. The remaining services can continue operating with a single instance per datacenter. 

Additional nodes allow you to scale web and job workloads horizontally. They can also offload Unicorn and Aqueduct from the primary node, freeing up substantial compute and memory resources for the remaining stateful services. If you are experiencing performance-related outages due to high CPU usage by Unicorn instances, adding additional nodes is recommended. There are no significant restrictions on the number of these nodes you can add within a datacenter.

## Criteria

If you are experiencing degraded performance due to an overloaded primary node in an HA configuration, you should consider adding additional nodes to your HA environment. By scaling web and job roles horizontally beyond the primary node, these extra nodes can help reduce the load on the primary host.

For example, if you notice backlogs in Unicorn or Aqueduct queues, or are experiencing other types of resource contention, you should consider this approach. Even if there isn't visible queuing, running out of CPU on the primary node is another clear signal. In these cases, you can add additional nodes and reduce the number of workers per node, so the primary node handles less of the overall workload.

## Adding a node

Each node you add to an HA deployment is a virtual machine (VM) running the {% data variables.product.prodname_ghe_server %} software. It should be running the same software as the primary. Generally, a stateless node does not need to match the primary's memory, CPU, or storage specifications. However, both the stateless node and the primary instance require sub-millisecond connectivity. Replica connectivity requirements remain unchanged.

To add nodes to the primary datacenter in an HA configuration, use the `ghe-add-node` command. The `ghe-add-node` command sets up the current appliance as a node within the HA deployment, and is intended to offload CPU-intensive tasks from the primary data node, enabling horizontal scaling. These nodes are designed to handle web and job workloads, allowing for more efficient workload distribution and management.
This command takes the form:

``` shell copy
/usr/local/share/enterprise/ghe-add-node PRIMARY_IP [--hostname HOSTNAME]
```

- `PRIMARY_IP`: The IP address of the primary node.
- `HOSTNAME` (optional): Desired hostname for the added host.

For example, to add a node with hostname `ghes-node-1` to the HA primary instance with IP address `192.168.1.1` in the HA primary datacenter, you would run the following command:

``` shell copy
/usr/local/share/enterprise/ghe-add-node 192.168.1.1 --hostname ghes-node-1
```

Then, on the primary node, you must run the following commands:

``` shell copy
ghe-config-apply
ghe-cluster-balance rebalance --yes
```

The `ghe-config-apply` command is a requirement to add stateless nodes.

For the public preview, we have not specifically tested for downtime, and it's not clear if a maintenance window is required.

## Removing an additional node

To remove a node, run `ghe-remove-node` from the node you want to remove. Then, on the primary node, you must run:

``` shell copy
ghe-config-apply
```

The `ghe-config-apply` command is a requirement to remove stateless nodes.

For the public preview, we have not specifically tested for downtime, and it's not clear if a maintenance window is required.

## Reprovisioning a node that previously hosted {% data variables.product.prodname_ghe_server %}

You can use a node that previously hosted and ran {% data variables.product.prodname_ghe_server %} as a stateless node. To do so, the node should be updated to version 3.18 or above and all the nodes in the deployment must be running the same version. On that node, check if `/data/user/common/cluster.conf` already exists. If it does, you will need to perform cleanup before running `ghe-add-node` command on the stateless node.

For example:

``` shell copy
sudo rm -f /etc/github/cluster /data/user/common/cluster.conf
sudo timeout -k4 10 systemctl stop wireguard 2>/dev/null || sudo ip link delete tun0 || true
```

## Limits and behavior

There is no theoretical limit to the number of nodes you can add. However, in practice, adding too many nodes can cause issues and impact stability or performance. At this time, newly added nodes will process a predefined set of tasks. You are not able to choose which type of tasks are offloaded. All APIs can be processed by the additional node.

If a Git operation is in the path, there is logic in place to process Git operations only on the primary node. Git operations are not handled by the additional node. For example, branch deletion is a Git operation, and won't be handled by the stateless node.

Stateless nodes do not run Elasticsearch workloads, but they do run kafka-lite.

## System and networking requirements

Generally, stateless nodes don't need to match the memory, CPU, and storage specs of the primary node. System requirements should take into account the existing resource consumption of web and job services on the primary node, and whether the primary node will completely offload those workloads to the new node.

The stateless node and the primary instance require sub-millisecond connectivity. Generally, all nodes within the primary datacenter require sub-millisecond connectivity. Replica connectivity requirements remain unchanged.

## Traffic routing and request handling

Primary routes the traffic to the additional nodes. In case of multiple stateless nodes, the primary sends new connections to the server with the fewest active connections at that moment.

## Upgrading an HA deployment with additional nodes

The following is an example upgrade sequence:

* Start maintenance window.
* Stop replicas.
* Upgrade stateless nodes in parallel.
* Upgrade the primary node.
* Upgrade the replicas. They can be upgraded in parallel or sequentially depending on your disaster recovery preferences.
* Start replicas.
* Remove maintenance window.

The additional nodes should not cause additional downtime during upgrades. 

## Failover and disaster recovery behavior

There is no need to "tear down" additional nodes, as they do not contain any data.

During failover, the replica node is removed from the original deployment and converted to a standalone node. Stateless nodes should be re-attached to the promoted replica, similar to how additional replicas are re-attached after a failover.

If the primary node is functional and you want to promote a replica to be primary, you should remove stateless nodes from the primary with the `ghe-remove-node` command, before re-adding them to the promoted node.

If the primary node is unreachable and unrecoverable, stateless nodes can be re-added without removing them from the original primary.

## Monitoring, logs, and support bundles

On the primary node, the Management Console monitoring dashboards display metrics for all nodes, including the stateless nodes. Commands such as `ghe-cluster-nodes` and `ghe-cluster-status` contain details on stateless nodes. All Management Console requests are served by the primary node.

Logs are stored locally on the stateless nodes. They can be exported from these nodes to third-party log management services.

You can use the `ghe-cluster-support-bundle` and `ghe-support-bundle` commands to generate and upload cluster or single-node bundles.

## Known limitations

This feature is not designed for monorepos, but the addition of new stateless nodes may indirectly improve monorepo operations by reducing web and job workloads on the primary node. There are no autoscaling and scaledown features.
