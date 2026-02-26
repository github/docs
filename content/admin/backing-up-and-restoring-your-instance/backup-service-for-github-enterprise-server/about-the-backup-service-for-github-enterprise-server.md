---
title: About the backup service for GitHub Enterprise Server
shortTitle: About the backup service
intro: 'Learn what the built-in backup service offers and how it differs from a High Availability replica.'
versions:
  ghes: '>=3.17'
type: overview
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
---

{% ifversion ghes < 3.20 %}
>[!NOTE] {% data variables.product.prodname_enterprise_backup_service %} is currently in {% data variables.release-phases.public_preview %} and subject to change. The service is available at no additional cost and will remain free.
{% endif %}

## About the {% data variables.product.prodname_enterprise_backup_service %}

The {% data variables.product.prodname_enterprise_backup_service %} is a managed backup solution built directly into {% data variables.product.prodname_ghe_server %}. It offers a simplified alternative to the legacy {% data variables.product.prodname_enterprise_backup_utilities %}.

With this service, you can:

* Configure scheduled backups from the {% data variables.enterprise.management_console %}.
* View backup status and history.

Compared to the legacy backup utilities, the {% data variables.product.prodname_enterprise_backup_service %}:

* Can be configured through the {% data variables.enterprise.management_console %}.
* Doesn’t require a separate host for backup software.
* Stores backups on a dedicated storage volume directly accessible by your instance.

{% ifversion ghes < 3.20 %}
>[!NOTE] {% data variables.product.prodname_enterprise_backup_service %} is currently only supported on standalone instances and high availability primary nodes. Cluster configurations and replica nodes are not yet supported.
{% endif %}

## How does the backup service differ from a High Availability replica?

While both the backup service and a High Availability (HA) replica contribute to data protection, they serve different purposes and are recommended together for a robust deployment.

### High Availability replica

An HA replica is a redundant, passive {% data variables.product.prodname_ghe_server %} instance that stays in sync with the primary instance via datastore replication. It minimizes service disruption during hardware failure or network outages.

However, it’s not a replacement for backups—because any data corruption or loss on the primary can be immediately replicated to the HA node.

### {% data variables.product.prodname_enterprise_backup_service %}

The backup service is a disaster recovery solution. It captures full, timestamped snapshots of instance data that can be used to restore an instance or spin up a new one—without needing an always-on replica.

## Further reading

* [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/backup-service-for-github-enterprise-server/understanding-the-backup-service)
* [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/backup-service-for-github-enterprise-server/configuring-the-backup-service)
* [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/backup-service-for-github-enterprise-server/restoring-from-a-backup)
* [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/backup-service-for-github-enterprise-server/restoring-with-github-actions-enabled)
