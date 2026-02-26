---
title: Backup from replica in high availability
shortTitle: Backup from replica
intro: 'Enable backup from a high availability replica node.'
versions:
  ghes: '> 3.19'
type: how_to
topics:
  - Backups
---

## Configuring backups from a replica node

For high availability, you can designate a replica node as your backup server. To minimize latency, {% data variables.product.github %} recommends picking a replica node in the same region or datacenter as your primary node.

> [!IMPORTANT] 
> Backups from cache replica nodes or active geo replica nodes are not supported.

To configure your backup server, run the following commands, replacing `HOSTNAME` with the hostname of the node:

```shell
ghe-config cluster.HOSTNAME.backup-server true

ghe-config-apply
```

You can now run `ghe-backup` directly on your replica node.

> [!WARNING]
> Due to the latency between primary and replica nodes, you may lose data when backing up from a replica node.
