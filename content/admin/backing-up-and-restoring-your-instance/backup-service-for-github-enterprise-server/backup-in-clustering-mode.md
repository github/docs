---
title: Backup in clustering mode
shortTitle: Backup in clustering
intro: 'Enable backup from a node in cluster.'
versions:
  ghes: '> 3.19'
type: how_to
topics:
  - Backups
---

## Configuring backups from a cluster node

For clustering, you can designate a node as your backup server. To minimize latency, {% data variables.product.github %} recommends picking a data node (for example, a `mysql-server` node or a `git-server` node) instead of a frontend node.

> [!IMPORTANT] 
> Only one node can be specified as a `backup-server` node.

1. To configure your backup server, set up a backup disk on one of the cluster nodes of your choice. See [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/backup-service-for-github-enterprise-server/configuring-the-backup-service).

1. After `ghe-storage-init-backup` is executed, the `backup-server` role will be set on this cluster node. You can now run `ghe-backup` directly on this node, or use the management console to schedule backups.
