---
title: Known issues with upgrades to your instance
intro: '{% data variables.product.company_short %} is aware of issues that impact the upgrade process for {% data variables.product.prodname_ghe_server %}, or impact your instance after you complete an upgrade.'
versions:
  ghes: '>=3.7'
type: overview
topics:
  - Enterprise
  - Troubleshooting
  - Upgrades
shortTitle: Known issues with upgrades
---

## About known issues with {% data variables.product.prodname_ghe_server %} upgrades

{% data variables.product.company_short %} is aware of the following issues that could impact upgrades to new releases of {% data variables.product.prodname_ghe_server %}. For more information, see "Known issues" in the [{% data variables.product.prodname_ghe_server %} release notes](/admin/release-notes).

{% data variables.product.company_short %} strongly recommends regular backups of your instance's configuration and data. Before you proceed with any upgrade, back up your instance, then validate the backup in a staging environment. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)" and "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% ifversion mysql-8-upgrade %}

## Known issue: increased I/O utilization from MySQL 8 upgrade

If you upgrade from {% data variables.product.prodname_ghe_server %} 3.7 or 3.8 to 3.9 or later, an upgrade to the database software on your instance will increase I/O utilization. In some cases, this may affect your instance's performance.

{% data variables.product.prodname_ghe_server %} includes a MySQL database server supported by the InnoDB storage engine. {% data variables.product.prodname_ghe_server %} 3.8 and earlier use MySQL 5.7. In October 2023, Oracle will end extended support for MySQL 5.1. For more information, see [Oracle Lifetime Support Policy](https://www.oracle.com/us/support/library/lifetime-support-technology-069183.pdf) on the Oracle Support website.

To future-proof {% data variables.product.prodname_ghe_server %} and provide the latest security updates, bug fixes, and performance improvements, {% data variables.product.prodname_ghe_server %} 3.9 and later use MySQL 8.0. MySQL 8.0 achieves a higher number of queries per second (QPS) due to a redesigned REDO log. For more information, see [MySQL Performance: 8.0 re-designed REDO log & ReadWrite Workloads Scalability](http://dimitrik.free.fr/blog/archives/2017/10/mysql-performance-80-redesigned-redo-log-readwrite-workloads-scalability.html) on DimitriK's (dim) Weblog.

After the upgrade to {% data variables.product.prodname_ghe_server %} 3.9, if you experience unacceptable degradation in the performance of your instance, you can collect data from your instance's monitor dashboard to confirm the impact. You can attempt to mitigate the issue, and you can provide the data to {% data variables.contact.github_support %} to help profile and communicate the real-world impact of this change.

{% warning %}

**Warning**: Due to the nature of this upgrade, back up your instance's configuration and data before proceeding. Validate the backup in a staging environment. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)" and "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endwarning %}

### Collecting baseline I/O utilization data before the MySQL upgrade

Collect the baseline data before upgrading to {% data variables.product.prodname_ghe_server %} 3.9 or later. To collect baseline data, {% data variables.product.company_short %} recommends that you set up a staging instance of {% data variables.product.prodname_ghe_server %} running 3.7 or 3.8 and restore data from your production instance using {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)."

You may not be able to simulate the load that your instance experiences in a production environment. However, it's useful if you can collect baseline data while simulating patterns of usage from your production environment on the staging instance.

1. Browse to your instance's monitor dashboard. For more information, see "[AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)."
1. From the monitor dashboard, monitor relevant graphs.

   - Under "Processes", monitor the graphs for "I/O operations (Read IOPS)" and "I/O operations (Write IOPS)", filtering for `mysqld`. These graphs display I/O operations for all of the node's services.
   - Under "Storage", monitor the graph for "Disk utilization (Data Device DEVICE-ID)". This graph displays the amount of time spent on all of the node's I/O operations.

### Reviewing I/O utilization data after the MySQL upgrade

After the upgrade to {% data variables.product.prodname_ghe_server %} 3.9, review the instance's I/O utilization. {% data variables.product.company_short %} recommends that you upgrade a staging instance of {% data variables.product.prodname_ghe_server %} running 3.7 or 3.8 that includes restored data from your production instance, or that you restore data from your production instance to a new staging instance running 3.9. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)."

1. Browse to your instance's monitor dashboard. For more information, see "[AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)."
1. From the monitor dashboard, monitor relevant graphs.

   - Under "Processes", monitor the graphs for "I/O operations (Read IOPS)" and "I/O operations (Write IOPS)", filtering for `mysqld`. These graphs display I/O operations for all of the node's services.
   - Under "Storage", monitor the graphs for "Disk utilization (Data Device DEVICE ID)" and "Disk Latency (Data Device DEVICE-ID)". These graph display the amount of time spent on all of the node's I/O operations, as well as overall disk latency.
     - Significant increases to disk latency could indicate that your instance is forcing disk IOPS to wait to complete.
     - You can corroborate an observation of increased latency by reviewing the graph for "Disk pending operations (Data Device DEVICE-ID)", which could indicate that the disk cannot sufficiently address all operations.

### Mitigating impact of the MySQL upgrade

To address unacceptable degradation of performance, {% data variables.product.company_short %} recommends the following solutions.

Before you test any mitigation procedure in a production environment, back up your instance, validate the backup, then test the procedure in a staging environment. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)" and "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."
- [Adjust InnoDB's flushing method](#adjust-innodbs-flushing-method)
- [Upgrade your instance's storage](#upgrade-your-instances-storage)

#### Adjust InnoDB's flushing method

To attempt to mitigate the performance impact, you can adjust InnoDB's flushing method to skip the `fsync()` system call after each write operation. For more information, see [`innodb_flush_method`](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_flush_method) in the MySQL 8.0 Reference Manual.

The following instructions are only intended for  {% data variables.product.product_name %} 3.9 and later.

{% warning %}

**Warning**: Adjustment of the flushing method requires that your instance's storage device has a battery-backed cache. If the device's cache is not battery-backed, you risk data loss.

- If you host your instance using a virtualization hypervisor within an on-premises datacenter, review your storage specifications to confirm.
- If you host your instance in a public cloud service, consult your provider's documentation or support team to confirm.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To validate the current flushing method for InnoDB, run the following command.

   ```shell copy
   ghe-config mysql.innodb-flush-no-fsync
   ```

   By default, the command returns `false`, indicating that your instance performs an `fsync()` system call after each write operation.
1. To configure InnoDB to skip the `fsync()` system call after each write operation, run the following command.

   ```shell copy
   ghe-config mysql.innodb-flush-no-fsync true
   ```

{% data reusables.enterprise.apply-configuration %}

#### Upgrade your instance's storage

You can reduce pending operations, increase IOPS, and improve performance by provisioning faster storage for your instance's nodes. To upgrade your instance's storage, back up your instance and restore the backup to a new replacement instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)."

### Sharing data with {% data variables.product.company_short %}

Finally, if you're willing to help {% data variables.product.company_short %}  understand the real-world impact of the upgrade to MySQL 8, you can provide the data you've collected to {% data variables.contact.github_support %}. Provide the baseline and post-upgrade observations from the monitor dashboard, along with a support bundle that covers the period when you collected data. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-support)" and "[AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support)."

The data you submit helps {% data variables.product.company_short %} continue to provide a performant product, but {% data variables.product.company_short %} does not guarantee any additional mitigation steps or changes to the product as a result of the data you provide.

{% endif %}
