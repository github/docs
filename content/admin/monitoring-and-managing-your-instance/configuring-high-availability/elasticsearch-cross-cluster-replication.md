---
title: Configuring Elasticsearch Cross-Cluster Replication for high availability
shortTitle: Elasticsearch Cross-Cluster Replication
intro: 'You can make search more resilient during maintenance, failovers, and upgrades on a high availability deployment by enabling Elasticsearch Cross-Cluster Replication (CCR).'
versions:
  ghes: '>=3.19'
contentType: how-tos
category:
  - Scale your instance
---

## About Elasticsearch Cross-Cluster Replication

{% data variables.product.prodname_ghe_server %} uses Elasticsearch to power search across issues, pull requests, repositories, the projects and releases pages, and the counts shown throughout the web interface. Because search is central to the product, the reliability of Elasticsearch directly affects the day-to-day administration of your instance.

In a high availability (HA) configuration, {% data variables.product.prodname_ghe_server %} uses a leader/follower model. The primary appliance receives all writes and traffic, and replica appliances stay in sync as read-only standbys that can take over if the primary fails. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration).

In earlier releases, Elasticsearch did not support this leader/follower model directly. To replicate search data, {% data variables.product.prodname_ghe_server %} ran a single Elasticsearch cluster that spanned the primary and replica appliances. This approach worked, but it introduced a class of problems: Elasticsearch could move a primary shard (the shard responsible for receiving and validating writes) onto a replica appliance. If that replica was then taken offline for maintenance, the instance could enter a locked state, because the replica waited for Elasticsearch to become healthy while Elasticsearch could not become healthy until the replica rejoined.

Elasticsearch Cross-Cluster Replication (CCR) removes this dependency. Instead of one cluster spanning every appliance, each appliance runs as an independent single-node Elasticsearch cluster. CCR then replicates index data between these clusters using a natively supported leader/follower pattern. Data is copied only after it has been durably persisted to the underlying Lucene segments, so replicas always follow data that has been safely written. As a result, a critical primary shard can no longer end up stranded on a read-only replica.

### Benefits

* **Fewer locked upgrades and maintenance windows.** Removing the circular dependency between the primary and replica appliances during maintenance reduces the risk of an instance becoming stuck.
* **Stronger data protection.** Data is replicated only after it is durably saved, which helps prevent index corruption during failovers.
* **Simpler operations.** The pattern reduces the need for manual index repairs that previously occurred when maintenance steps were performed out of order.

### Availability

Elasticsearch CCR is supported beginning with {% data variables.product.prodname_ghe_server %} 3.19.1. The feature is optional. {% data variables.product.company_short %} plans to make CCR the default HA search architecture over the following two years, so you have time to test it and provide feedback before it becomes the default.

## Requirements

Before you enable CCR, confirm the following.

* Your instance runs {% data variables.product.prodname_ghe_server %} 3.19.1 or later.
* Your instance is configured for high availability with at least two appliances (a primary and one or more replicas).
* You have an updated {% data variables.product.prodname_ghe_server %} license that includes the Elasticsearch entitlement required for CCR. Contact {% data variables.contact.contact_enterprise_sales %} or {% data variables.contact.github_support %} to have your enterprise enabled for the new license, then download the updated license file.

{% warning %}

**Warning:** When CCR is enabled, the upgrade preflight check requires a valid CCR-enabled license. If the flag is enabled and the license check fails, the upgrade will not proceed. Make sure your updated license is installed before you enable the feature or upgrade. If you are unsure whether your license includes the Elasticsearch entitlement, contact {% data variables.contact.github_support %}.

{% endwarning %}

## Enabling Elasticsearch Cross-Cluster Replication

{% note %}

**Note:** The migration may take a significant amount of time depending on the size of your instance, because search data is consolidated onto the primary before replication restarts. Plan to enable CCR during a maintenance window, and test the process in a non-production environment first. For more information, see [AUTOTITLE](/admin/upgrading-your-instance).

{% endnote %}

1. Contact {% data variables.contact.github_support %} and request access to the new HA search architecture. {% data variables.product.company_short %} will enable your enterprise so that you can download the required CCR-enabled license.
1. Download your updated license and upload it to your instance. For more information, see [AUTOTITLE](/admin/overview/managing-your-github-enterprise-license).
1. On the primary appliance, enable the feature.

   ```shell
   ghe-config app.elasticsearch.ccr true
   ```

1. Apply the configuration by running a configuration run, or by upgrading the instance to 3.19.1 or later.

   ```shell
   ghe-config-apply
   ```

1. When the instance restarts, Elasticsearch migrates the installation to the new replication method. This migration consolidates search data onto the primary, ends the cluster that previously spanned appliances, and restarts replication using CCR. During the migration, {% data variables.product.prodname_ghe_server %} attaches followers to your existing search indexes and enables an auto-follow rule so that any indexes created in the future are followed automatically.

## Using Elasticsearch Cross-Cluster Replication

### Verifying replication

After the migration completes, search continues to function normally and no change is required in how users search. To confirm replication health, generate a support bundle, which includes CCR status information for review. For more information, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support).

### Failover and disaster recovery

You continue to use the standard high availability replication utilities to manage replicas and to fail over. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/initiating-a-failover-to-your-replica-appliance) and [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/recovering-a-high-availability-configuration).

After a failover with CCR enabled, the promoted appliance becomes the new leader for search, and replicas re-follow its indexes as part of the standard recovery process. If you encounter errors related to search replication during or after a failover, contact {% data variables.contact.github_support %}.

### Disabling Elasticsearch Cross-Cluster Replication

{% warning %}

**Warning:** Do not disable CCR on a production instance without guidance from {% data variables.contact.github_support %}. Disabling CCR is not a routine self-service operation. Turning the feature off can trigger removal of replica Elasticsearch data as part of returning to the previous mode.

{% endwarning %}

If you need to return to the previous search architecture, contact {% data variables.contact.github_support %} before making any changes. {% data variables.product.company_short %} will help you confirm that your license, replication state, and upgrade path are handled safely.

## Further reading

* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration)
* [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities)
* [How we rebuilt the search architecture for high availability in GitHub Enterprise Server](https://github.blog/engineering/architecture-optimization/how-we-rebuilt-the-search-architecture-for-high-availability-in-github-enterprise-server/) on the {% data variables.product.prodname_blog %}
