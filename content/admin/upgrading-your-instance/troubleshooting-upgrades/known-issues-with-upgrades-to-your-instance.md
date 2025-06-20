---
title: Known issues with upgrades to your instance
intro: 'See an overview of workarounds for issues that impact the upgrade process for {% data variables.product.prodname_ghe_server %}, or impact your instance after you complete an upgrade.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Troubleshooting
  - Upgrades
shortTitle: Known issues with upgrades
redirect_from:
  - /admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/known-issues-with-upgrades-to-your-instance
  - /admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/known-issues-with-upgrades-to-your-instance
  - /admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/known-issues-with-upgrades-to-your-instance
---

## About known issues with {% data variables.product.prodname_ghe_server %} upgrades

{% data variables.product.company_short %} is aware of the following issues that could impact upgrades to new releases of {% data variables.product.prodname_ghe_server %}. For more information, see "Known issues" in the [{% data variables.product.prodname_ghe_server %} release notes](/admin/release-notes).

{% data variables.product.company_short %} strongly recommends regular backups of your instance's configuration and data. Before you proceed with any upgrade, back up your instance, then validate the backup in a staging environment. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance) and [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

{% ifversion ghes < 3.15 %}

## Elasticsearch Upgrade

As part of upgrading GitHub Enterprise Server to version 3.13 or later, the Elasticsearch service will be upgraded. {% data variables.product.company_short %} strongly recommends following the guidance in [AUTOTITLE](/admin/upgrading-your-instance/performing-an-upgrade/preparing-for-the-elasticsearch-upgrade).
{% endif %}

{% ifversion ghes > 3.14 %}

## Required root disk size increased to 400GB

> [!Note]
> The previous root disk size requirement of 400GB for versions 3.15.2 and later has been removed. This requirement was based on analysis of support bundles and support tickets. Some factors, such as logs, put excessive pressure on the root disk which caused appliance issues. After receiving feedback that it's challenging for many customers to procure new hardware, we rolled back the requirement in favor of a gradual approach. We still recommend customers, especially those using standalone or standalone high-availability topologies, upgrade the root disk to 400GB. When you are able to upgrade the root disk to 400GB, see the following instructions.

To customers using standalone or HA topologies, it is recommended that new installations of 3.15 or later, or upgrades to 3.15 to use root disk size of at least 400GB. {% data variables.product.company_short %} strongly recommends following the guidance in [AUTOTITLE](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity).

## Undecryptable records

If you are upgrading from {% data variables.product.prodname_ghe_server %} 3.11 or 3.12 to 3.13, or from 3.12 to 3.14, you may run into an issue with undecryptable records due to missing required keys for decryption. The only solution is to delete the undecryptable records. The type of records impacted by this issue are 2FA records, that means you might need to ask users to re-enable two-factor authentication (2FA).

### Before upgrading

If you are upgrading from {% data variables.product.prodname_ghe_server %} 3.11 or 3.12 to 3.13, or from 3.12 to 3.14, you can run the encryption diagnostics script to identify the undecryptable records ahead of time. This script will not modify any records but it will give you the opportunity to understand the impact and plan for it.

1. Download the [encryption diagnostics script](https://gh.io/ghes-encryption-diagnostics). You can use a command like `curl -L -O https://gh.io/ghes-encryption-diagnostics` to download the script.
1. Save the script to the `/data/user/common` directory on the appliance.
1. Follow the instructions at the top of the script and execute it on the appliance. If there are any undecryptable records, they are logged in `/tmp/column_encryption_records_to_be_deleted.log`. Any records logged here were unable to be decrypted because the system was not able to find the keys that were used to encrypt the records.

Please note that these records will be deleted as part of the upgrade process. The script will warn you about the users who will need to re-enroll into 2FA after the upgrade. The impacted users' handles are logged in `/tmp/column_encryption_users_to_have_2fa_disabled.log`. These users will need to be re-enrolled into 2FA.

If the script runs into unexpected issues, you will be prompted to [contact {% data variables.contact.github_support %}](/support/contacting-github-support). Errors related to these issues will be logged in `/tmp/column_encryption_unexpected_errors.log`. If you are in a dire situation and are unable to have users re-enroll into 2FA, [contact {% data variables.contact.github_support %}](/support/contacting-github-support) for help.

The script will print "Success: Encrypted Records OK." if it was able to find the keys associated with the encrypted records. These records will be decrypted and preserved during the upgrade process and require no manual intervention from you.

### During the upgrade

In case you did not have the opportunity to run the encryption diagnostics script ahead of time, there are mechanisms in the product to help you. The pre-flight checks during the upgrade process will detect undecryptable records and log them in `/tmp/column_encryption_records_to_be_deleted.log`. The sequence will warn you of the users who will need to re-enable 2FA after the upgrade. The impacted users records are logged in `/tmp/column_encryption_users_to_have_2fa_disabled.log`.

If undecryptable records are detected, you will be prompted whether you want to proceed with the upgrade or not. If you proceed, the upgrade process deletes the undecryptable records. Otherwise, the upgrade process will exit.

If you have any questions during the upgrade, you can reach out to {% data variables.contact.github_support %}. Once you have had the time and opportunity to understand the impact, you can retrigger the upgrade.
{% endif %}

{% ifversion ghes > 3.13 and ghes < 3.17 %}

## Upgrading from 3.14 to 3.16.0

If you are using {% data variables.product.prodname_ghe_server %} 3.14, and you have enabled security products by default at the organization level, you cannot upgrade directly from 3.14 to 3.16.0. To determine your upgrade eligibility, run the following command:

```shell
ghe-console -y
Organization.any? { |o| [o.vulnerability_updates_enabled_for_new_repos?, o.security_alerts_enabled_for_new_repos?, o.dependency_graph_enabled_for_new_repos?, o.advanced_security_enabled_on_new_repos?, SecretScanning::Features::Org::TokenScanning.new(o).secret_scanning_enabled_for_new_repos?, SecretScanning::Features::Org::PushProtection.new(o).enabled_for_new_repos?].any? }
```

If the command returns `true`, a direct upgrade from 3.14 to 3.16.0 will fail, and we recommend you wait for the next 3.16 patch to upgrade.

Alternatively, you can move to 3.16.0 now by first upgrading from 3.14 to 3.15, then from 3.15 to 3.16.0.

## Upgrading to 3.16.0 and 3.17.0 includes a slow data migration for code scanning

Customers who have code scanning enabled may experience slower transitions when upgrading to version 3.16.0, due to changes in the data model that require data migration. We recommend testing this upgrade in a non-production environment first, as it could result in longer downtime than expected. [Updated: 2025-06-12]

{% endif %}
