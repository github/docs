---
title: 'Preparing for the Elasticsearch upgrade in {% data variables.product.prodname_ghe_server %} 3.13'
intro: 'As part of upgrading {% data variables.product.prodname_ghe_server %} to version 3.13 or later, the Elasticsearch service will be upgraded.'
versions:
  ghes: '>3.10 <3.15'
type: reference
topics:
  - Enterprise
  - Upgrades
shortTitle: Elasticsearch upgrade in 3.13
allowTitleToDifferFromFilename: true
redirect_from:
  - /admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/preparing-for-the-elasticsearch-upgrade
  - /admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/preparing-for-the-elasticsearch-upgrade
---

## Overview

Elasticsearch (ES) powers the search functionality on your {% data variables.product.prodname_ghe_server %} instance. To bring the benefits of better performance and security posture, when you upgrade your instance to version 3.13 or later, the Elasticsearch version in the appliance will be upgraded from 5.6.16 to 8.7.0.

The following sections help administrators prepare for and monitor the Elasticsearch upgrade. The key points are:

* The upgrade will temporarily degrade the experience of the search and audit log features.
* If you're upgrading an instance in a cluster configuration, you must run a script to prepare your cluster for the ES upgrade. See "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/upgrading-a-cluster#upgrading-the-cluster-nodes)."
* For backups, all customers should take a snapshot of their instance when the upgrade is complete.

## Impact on search and audit logs

All search indexes will be rebuilt after the upgrade to ES8. Users will experience degraded search experience during the rebuild, but the instance is otherwise expected to be functional and available. The index rebuild process depends on the size of the data set and may take a few hours to days.

Audit logs will not be available immediately after upgrade, and it may take several hours to migrate all audit logs.

We strongly recommend you take a backup (using backup-utils) immediately following completion of the index rebuild and use that snapshot for all future restores. See "[AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance)." If you restore a backup from an instance running {% data variables.product.prodname_ghe_server %} 3.11 or 3.12, then any content that relies on ES will only be available after the ES indexes have been migrated and rebuilt on the 3.13 instance.

## Monitoring the Elasticsearch upgrade

You can monitor the progress of the ES upgrade in the site admin dashboard.

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Search indexes**.

When the index rebuild is complete, all the search indexes should show green and "100%."

## Changing the number of repair workers

By default, the number of index repair workers is set to the number of CPU cores divided by 8 (with an upper bound of 8). To speed up the index rebuild, you can adjust the worker count. However, before doing so, you should consider the potential impact to the load.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To change the number of workers, enter the following command.

      ```shell copy
      ghe-config app.github.es-workers NUMBER-OF-WORKERS
      ```

1. Run `ghe-config-apply`.

You can also adjust the worker count for individual index rebuilds in the "Search Indexes" section of the site admin dashboard. See the "[Monitoring the Elasticsearch upgrade](#monitoring-the-elasticsearch-upgrade)" section.
