---
title: Configuring backups on your appliance
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: 'As part of a disaster recovery plan, you can protect production data on {% data variables.product.product_location %} by configuring automated backups.'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
---
## About {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} is a backup system you install on a separate host, which takes backup snapshots of {% data variables.product.product_location %} at regular intervals over a secure SSH network connection. You can use a snapshot to restore an existing {% data variables.product.prodname_ghe_server %} instance to a previous state from the backup host.

Only data added since the last snapshot will transfer over the network and occupy additional physical storage space. To minimize performance impact, backups are performed online under the lowest CPU/IO priority. You do not need to schedule a maintenance window to perform a backup.

For more detailed information on features, requirements, and advanced usage, see the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme).

## Prerequisites

To use {% data variables.product.prodname_enterprise_backup_utilities %}, you must have a Linux or Unix host system separate from {% data variables.product.product_location %}.

You can also integrate {% data variables.product.prodname_enterprise_backup_utilities %} into an existing environment for long-term permanent storage of critical data.

We recommend that the backup host and {% data variables.product.product_location %} be geographically distant from each other. This ensures that backups are available for recovery in the event of a major disaster or network outage at the primary site.

Physical storage requirements will vary based on Git repository disk usage and expected growth patterns:

| Hardware | Recommendation |
| -------- | --------- |
| **vCPUs**  | 2 |
| **Memory** | 2 GB |
| **Storage** | Five times the primary instance's allocated storage |

More resources may be required depending on your usage, such as user activity and selected integrations.

## Installing {% data variables.product.prodname_enterprise_backup_utilities %}

{% note %}

**Note:** To ensure a recovered appliance is immediately available, perform backups targeting the primary instance even in a Geo-replication configuration.

{% endnote %}

1. Download the latest [{% data variables.product.prodname_enterprise_backup_utilities %} release](https://github.com/github/backup-utils/releases) and extract the file with the `tar` command.
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz	  
  ```
2. Copy the included `backup.config-example` file to `backup.config` and open in an editor.
3. Set the `GHE_HOSTNAME` value to your primary {% data variables.product.prodname_ghe_server %} instance's hostname or IP address.

  {% note %}

  **Note:** If your {% data variables.product.product_location %} is deployed as a cluster or in a high availability configuration using a load balancer, the `GHE_HOSTNAME` can be the load balancer hostname, as long as it allows SSH access (on port 122) to {% data variables.product.product_location %}.

  {% endnote %}

4. Set the `GHE_DATA_DIR` value to the filesystem location where you want to store backup snapshots.
5. Open your primary instance's settings page at `https://HOSTNAME/setup/settings` and add the backup host's SSH key to the list of authorized SSH keys. For more information, see [Accessing the administrative shell (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).
6. Verify SSH connectivity with {% data variables.product.product_location %} with the `ghe-host-check` command.
  ```shell
  $ bin/ghe-host-check		  
  ```		  
  7. To create an initial full backup, run the `ghe-backup` command.
  ```shell
  $ bin/ghe-backup		  
  ```

For more information on advanced usage, see the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme).

## Scheduling a backup

You can schedule regular backups on the backup host using the `cron(8)` command or a similar command scheduling service. The configured backup frequency will dictate the worst case recovery point objective (RPO) in your recovery plan. For example, if you have scheduled the backup to run every day at midnight, you could lose up to 24 hours of data in a disaster scenario. We recommend starting with an hourly backup schedule, guaranteeing a worst case maximum of one hour of data loss if the primary site data is destroyed.

If backup attempts overlap, the `ghe-backup` command will abort with an error message, indicating the existence of a simultaneous backup. If this occurs, we recommended decreasing the frequency of your scheduled backups. For more information, see the "Scheduling backups" section of the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#scheduling-backups).

## Restoring a backup

In the event of prolonged outage or catastrophic event at the primary site, you can restore {% data variables.product.product_location %} by provisioning another {% data variables.product.prodname_enterprise %} appliance and performing a restore from the backup host. You must add the backup host's SSH key to the target {% data variables.product.prodname_enterprise %} appliance as an authorized SSH key before restoring an appliance.

{% ifversion ghes %}
{% note %}

**Note:** If {% data variables.product.product_location %} has {% data variables.product.prodname_actions %} enabled, you must first configure the {% data variables.product.prodname_actions %} external storage provider on the replacement appliance before running the `ghe-restore` command. For more information, see "[Backing up and restoring {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_actions %} enabled](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)."

{% endnote %}
{% endif %}

{% note %}

**Note:** When performing backup restores to {% data variables.product.product_location %}, the same version supportability rules apply. You can only restore data from at most two feature releases behind.

For example, if you take a backup from GHES 3.0.x, you can restore it into a GHES 3.2.x instance. But, you cannot restore data from a backup of GHES 2.22.x onto 3.2.x, because that would be three jumps between versions (2.22 > 3.0 > 3.1 > 3.2). You would first need to restore onto a 3.1.x instance, and then upgrade to 3.2.x.

{% endnote %}

To restore {% data variables.product.product_location %} from the last successful snapshot, use the `ghe-restore` command. You should see output similar to this:

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %}
Optionally, to validate the restore, configure an IP exception list to allow access to a specified list of IP addresses. For more information, see "[Validating changes in maintenance mode using the IP exception list](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)."
{% endif %}

{% note %}

**Note:** The network settings are excluded from the backup snapshot. You must manually configure the network on the target {% data variables.product.prodname_ghe_server %} appliance as required for your environment.

{% endnote %}

You can use these additional options with `ghe-restore` command:
- The `-c` flag overwrites the settings, certificate, and license data on the target host even if it is already configured. Omit this flag if you are setting up a staging instance for testing purposes and you wish to retain the existing configuration on the target. For more information, see the "Using backup and restore commands" section of the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands).
- The `-s` flag allows you to select a different backup snapshot.
