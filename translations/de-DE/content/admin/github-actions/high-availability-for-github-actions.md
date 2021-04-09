---
title: High availability for GitHub Actions
intro: 'There are some special considerations for administering {% data variables.product.prodname_actions %} in a high availability configuration.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Unternehmen
---

### Replication or redundancy of your {% data variables.product.prodname_actions %} data

{% data reusables.actions.enterprise-storage-ha-backups %}

We strongly recommend that you configure your {% data variables.product.prodname_actions %} external storage to use data redundancy or replication. For more information, refer to your storage provider's documentation:

* [Azure Storage redundancy documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Amazon S3 replication documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

### High availability replicas

#### Promoting a replica

When enabling a high availability configuration, any replicas are automatically configured to use the {% data variables.product.prodname_actions %} external storage configuration. If you need to initiate a failover to promote a replica, no extra configuration changes are required for {% data variables.product.prodname_actions %}.

For more information, see "[Initiating a failover to your replica appliance](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance)."

#### Hochverfügbarkeitsreplikat entfernen

Avoid letting multiple instances to write to the same {% data variables.product.prodname_actions %} external storage. This could occur when using the `ghe-repl-teardown` command to stop and permanently remove a {% data variables.product.prodname_actions %}-enabled replica. This is because the replica will be converted into a standalone {% data variables.product.prodname_ghe_server %}, and after the teardown it will still use the same external storage configuration as the primary.

To help avoid this issue, we recommend either decommissioning the replica server or updating its {% data variables.product.prodname_actions %} configuration with different external storage.
