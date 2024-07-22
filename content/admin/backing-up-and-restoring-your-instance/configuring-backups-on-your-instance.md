---
title: Configuring backups on your instance
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
  - /admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-your-enterprise/configuring-backups-on-your-instance
intro: 'As part of a disaster recovery plan, you can protect production data on {% data variables.location.product_location %} by configuring automated backups.'
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

{% data variables.product.prodname_enterprise_backup_utilities %} is a backup system you install on a separate host, which takes backup snapshots of {% data variables.location.product_location %} at regular intervals over a secure SSH network connection. You can use a snapshot to restore an existing {% data variables.product.prodname_ghe_server %} instance to a previous state from the backup host.

Only data added since the last snapshot will transfer over the network and occupy additional physical storage space. To minimize performance impact, backups are performed online under the lowest CPU/IO priority. You do not need to schedule a maintenance window to perform a backup.

Major releases and version numbers for {% data variables.product.prodname_enterprise_backup_utilities %} align with feature releases of {% data variables.product.product_name %}. We support the four most recent versions of both products. For more information, see "[AUTOTITLE](/admin/all-releases)."

For more detailed information on features, requirements, and advanced usage, see the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

## Prerequisites

To use {% data variables.product.prodname_enterprise_backup_utilities %}, you must have a host system separate from {% data variables.location.product_location %}. For details about how the system should be configured, see [Requirements](https://github.com/github/backup-utils/blob/master/docs/requirements.md) in the github/backup-utils repository.

You can also integrate {% data variables.product.prodname_enterprise_backup_utilities %} into an existing environment for long-term permanent storage of critical data.

We recommend that the backup host and {% data variables.location.product_location %} be geographically distant from each other. This ensures that backups are available for recovery in the event of a major disaster or network outage at the primary site.

Physical storage requirements will vary based on Git repository disk usage and expected growth patterns:

| Hardware | Recommendation |
| -------- | --------- |
| **vCPUs**  | 4 |
| **Memory** | 8 GB |
| **Storage** | Five times the primary instance's allocated storage |

More resources may be required depending on your usage, such as user activity and selected integrations.

For more information, see [{% data variables.product.prodname_enterprise_backup_utilities %} requirements](https://github.com/github/backup-utils/blob/master/docs/requirements.md) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

## Installing {% data variables.product.prodname_enterprise_backup_utilities %}

To install {% data variables.product.prodname_enterprise_backup_utilities %} on your backup host, download the latest version of {% data variables.product.prodname_enterprise_backup_utilities %} from the [github/backup-utils repository](https://github.com/github/backup-utils/releases) that is compatible with your version of {% data variables.product.product_name %}. For example, if you are running version 3.8.4 of {% data variables.product.product_name %}, then download the latest version of {% data variables.product.prodname_enterprise_backup_utilities %} in the 3.10 series. This is possible because all versions of {% data variables.product.prodname_enterprise_backup_utilities %} are backwards compatible for 2 versions, meaning the {% data variables.product.prodname_enterprise_backup_utilities %} 3.10 series can be used to backup and restore {% data variables.product.product_name %} instances running versions 3.8, 3.9, or 3.10.

After you download a compressed archive, you can extract and install the contents. For more information, see [Getting started](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) in the github/backup-utils repository.

If you have an existing backup configuration file, `backup.config`, ensure you copy the file to the location of the newly extracted and installed version of {% data variables.product.prodname_enterprise_backup_utilities %}.

Backup snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %} are written to the disk path set by the `GHE_DATA_DIR` data directory variable in your `backup.config` file. These snapshots need to be stored on a filesystem which supports symbolic and hard links.

{% note %}

**Note:** We recommend ensuring your snapshots are not kept in a subdirectory of the {% data variables.product.prodname_enterprise_backup_utilities %} installation directory, to avoid inadvertently overwriting your data directory when upgrading {% data variables.product.prodname_enterprise_backup_utilities %} versions.

{% endnote %}

1. Download the relevant {% data variables.product.prodname_enterprise_backup_utilities %} release from the [Releases](https://github.com/github/backup-utils/releases) page of the github/backup-utils repository.

1. To extract the repository using tar, run the following command.

   ```shell
   tar -xzvf /path/to/github-backup-utils-vMAJOR.MINOR.PATCH.tar.gz
   ```

1. To change into the local repository directory, run the following command.

   ```shell
   cd backup-utils
   ```

1. To copy the included `backup.config-example` file to `backup.config`, run the following command.

   ```shell
   cp backup.config-example backup.config
   ```

1. To customize your configuration, edit `backup.config` in a text editor.

   1. If you previously upgraded {% data variables.product.prodname_enterprise_backup_utilities %} using Git, ensure that you copy your existing configuration from `backup.config` into the new file. For more information, see "[Upgrading {% data variables.product.prodname_enterprise_backup_utilities %}](#upgrading-github-enterprise-server-backup-utilities)."
   1. Set the `GHE_HOSTNAME` value to your primary {% data variables.product.prodname_ghe_server %} instance's hostname or IP address.

      {% note %}

      **Note:** If {% data variables.location.product_location %} is deployed as a cluster or in a high availability configuration using a load balancer, the `GHE_HOSTNAME` can be the load balancer hostname, as long as the load balancer allows SSH access over port 122 to {% data variables.location.product_location %}.

      To ensure a recovered instance is immediately available, perform backups targeting the primary instance even in a geo-replication configuration.

      {% endnote %}
   1. Set the `GHE_DATA_DIR` value to the filesystem location where you want to store backup snapshots. We recommend choosing a location on the same filesystem as your backup host.
1. To grant your backup host access to your instance, open your primary instance's settings page at `http(s)://HOSTNAME/setup/settings` and add the backup host's SSH key to the list of authorized SSH keys. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)."
1. On your backup host, verify SSH connectivity with {% data variables.location.product_location %} with the `ghe-host-check` command.

   ```shell
   ./bin/ghe-host-check
   ```

1. To create an initial full backup, run the following command.

   ```shell
   ./bin/ghe-backup
   ```

For more information on advanced usage, see the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

## Upgrading {% data variables.product.prodname_enterprise_backup_utilities %}

When upgrading {% data variables.product.prodname_enterprise_backup_utilities %}, you must choose a version that will work with your current version of {% data variables.product.product_name %}. Your installation of {% data variables.product.prodname_enterprise_backup_utilities %} must be at least the same version as {% data variables.location.product_location %}, and cannot be more than two versions ahead. For more information, see [{% data variables.product.prodname_ghe_server %} version requirements](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

1. Verify the installation method for {% data variables.product.prodname_enterprise_backup_utilities %}. Previous versions of {% data variables.product.prodname_enterprise_backup_utilities %} supported installation and updates in a local Git repository, but this method is no longer supported.

   {% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
   1. To check if a valid working directory exists inside a Git repository, run the following command.

      ```shell
      git rev-parse --is-inside-work-tree
      ```

1. To determine how to upgrade {% data variables.product.prodname_enterprise_backup_utilities %}, review the output from `git rev-parse --is-inside-work-tree`.

   * If the output is `true`, {% data variables.product.prodname_enterprise_backup_utilities %} was installed by cloning the project's Git repository. To upgrade, copy your existing configuration in `backup.config`, then follow the instructions in "[Installing {% data variables.product.prodname_enterprise_backup_utilities %}](#installing-github-enterprise-server-backup-utilities)."
   * If the output includes `fatal: not a git repository (or any of the parent directories)`, {% data variables.product.prodname_enterprise_backup_utilities %} was extracted from a compressed archive file. To upgrade, follow the instructions in "[Installing {% data variables.product.prodname_enterprise_backup_utilities %}](#installing-github-enterprise-server-backup-utilities)."

## Scheduling a backup

You can schedule regular backups on the backup host using the `cron(8)` command or a similar command scheduling service. The configured backup frequency will dictate the worst case recovery point objective (RPO) in your recovery plan. For example, if you have scheduled the backup to run every day at midnight, you could lose up to 24 hours of data in a disaster scenario. We recommend starting with an hourly backup schedule, guaranteeing a worst case maximum of one hour of data loss if the primary site data is destroyed.

If backup attempts overlap, the `ghe-backup` command will abort with an error message, indicating the existence of a simultaneous backup. If this occurs, we recommended decreasing the frequency of your scheduled backups. For more information, see the "Scheduling backups" section of the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#scheduling-backups) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

## Restoring a backup

In the event of prolonged outage or catastrophic event at the primary site, you can restore {% data variables.location.product_location %} by provisioning another instance and performing a restore from the backup host. You must add the backup host's SSH key to the target {% data variables.product.prodname_enterprise %} instance as an authorized SSH key before restoring an instance.

When performing backup restores to {% data variables.location.product_location %}, you can only restore data from at most two feature releases behind. For example, if you take a backup from {% data variables.product.product_name %} 3.0.x, you can restore the backup to an instance running {% data variables.product.product_name %} 3.2.x. You cannot restore data from a backup of {% data variables.product.product_name %} 2.22.x to an instance running 3.2.x, because that would be three jumps between versions (2.22 to 3.0 to 3.1 to 3.2). You would first need to restore to an instance running 3.1.x, and then upgrade to 3.2.x.

Network settings are excluded from the backup snapshot. After restoration, you must manually configure networking on the target {% data variables.product.prodname_ghe_server %} instance.

### Prerequisites

1. Ensure maintenance mode is enabled on the primary instance and all active processes have completed. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
1. Stop replication on all replica nodes in a high-availability configuration. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop)."
1. Provision a new {% data variables.product.product_name %} instance to use as a target for the restoration of your backup. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)."
1. If {% data variables.location.product_location %} has {% data variables.product.prodname_actions %} enabled, you must configure the external storage provider for {% data variables.product.prodname_actions %} on the replacement instance. For more information, see "[AUTOTITLE](/admin/github-actions/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)."

### Starting the restore operation

To restore {% data variables.location.product_location %} from your backup host using the last successful snapshot, use the `ghe-restore` command. You can use the following additional options with `ghe-restore`.

* The `-c` flag overwrites the settings, certificate, and license data on the target host even if it is already configured. Omit this flag if you are setting up a staging instance for testing purposes and you wish to retain the existing configuration on the target. For more information, see the "Using backup and restore commands" section of the [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) in the github/backup-utils repository.
* The `-s` flag allows you to select a different backup snapshot.

After you run `ghe-restore`, the command confirms the restoration, then outputs details and status during the operation.

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: yes

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %}
Optionally, to validate the restore, configure an IP exception list to allow access to a specified list of IP addresses. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)."
{% endif %}

On an instance in a high-availability configuration, after you restore to new disks on an existing or empty instance, `ghe-repl-status` may report that Git or Alambic replication is out of sync due to stale server UUIDs. These stale UUIDs can be the result of a retired node in a high-availability configuration still being present in the application database, but not in the restored replication configuration.

To remediate after the restoration completes and before starting replication, you can tear down stale UUIDs using `ghe-repl-teardown`. If you need further assistance, visit {% data variables.contact.contact_ent_support %}.

{% ifversion backup-utilities-progress %}

## Monitoring backup or restoration progress

During a backup or restoration operation, you can use the `ghe-backup-progress` utility on your backup host to monitor the operation's progress. The utility prints the progress of each job sequentially.

To monitor progress on the backup host, from the directory containing {% data variables.product.prodname_enterprise_backup_utilities %}, run the following command.

```shell copy
bin/ghe-backup-progress
```

By default, the utility prints progress continuously until the operation is complete. You can press any key to return to the prompt.

Optionally, you can run the following command to print the current progress, the last completed job, and then immediately exit.

```shell copy
bin/ghe-backup-progress --once
```

{% endif %}
