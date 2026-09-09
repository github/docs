---
title: Automating an upgrade
intro: You can automate upgrade operations using the REST API or a {% data variables.product.prodname_cli %} extension.
versions:
  ghes: '>=3.22'
shortTitle: Automate an upgrade
contentType: how-tos
---

You can upgrade your {% data variables.product.prodname_ghe_server %} instance using the Manage {% data variables.product.prodname_ghe_server %} API or the `gh es` extension for {% data variables.product.prodname_cli %}. These tools automate the process of downloading the upgrade package, running pre-upgrade checks, and applying the new version.

## Prerequisites

* Back up your data with [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
* Schedule a maintenance window for end users.
* Ensure you can authenticate to the Manage {% data variables.product.prodname_ghe_server %} API. For more information, see [AUTOTITLE](/rest/enterprise-admin#authentication).

## Automating an upgrade using the REST API

1. Download the upgrade package.

   ```shell
   curl -L \
     -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/download \
     -d '{"version":"VERSION"}'
   ```

1. Confirm the download has completed before proceeding.

   ```shell
   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/download/status
   ```

   Wait until `status` shows `COMPLETED`.

1. Apply the upgrade's pre-upgrade phase.

   ```shell
   curl -L \
     -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/apply \
     -d '{"version":"VERSION", "phase":"pre-upgrade"}'
   ```

1. Monitor the pre-upgrade phase until it completes.

   ```shell
   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     "https://HOSTNAME:8443/manage/v1/upgrade/status?is_verbose=true"
   ```

   Wait until `status` shows `completed` and `is_running` shows `false`.

1. Enable maintenance mode.

   ```shell
   curl -L \
     -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/maintenance \
     -d '{"enabled":true}'
   ```

1. Apply the upgrade's upgrade phase.

   ```shell
   curl -L \
     -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/apply \
     -d '{"version":"VERSION", "phase":"upgrade"}'
   ```

1. Confirm the release version has been updated.

   ```shell
   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/version
   ```

1. Disable maintenance mode.

   ```shell
   curl -L \
     -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/maintenance \
     -d '{"enabled":false}'
   ```

## Automating an upgrade using the {% data variables.product.prodname_cli %} extension

1. Download the upgrade package. To download a specific version, specify the `--version` flag; otherwise, the latest available version is downloaded.

   ```shell
   # Download a specific version
   gh es upgrade download --version VERSION

   # Or download the latest available version
   gh es upgrade download
   ```

1. Confirm the download has completed before proceeding.

   ```shell
   gh es upgrade download status
   ```

   Wait until `status` shows `COMPLETED`.

1. Apply the upgrade's pre-upgrade phase.

   ```shell
   gh es upgrade apply --version VERSION --phase pre-upgrade
   ```

1. Monitor the pre-upgrade phase until it completes.

   ```shell
   gh es upgrade status --verbose
   ```

   Wait until `status` shows `completed` and `is_running` shows `false`.

1. Enable maintenance mode.

   ```shell
   gh es maintenance set --enabled true
   ```

1. Apply the upgrade's upgrade phase.

   ```shell
   gh es upgrade apply --version VERSION --phase upgrade
   ```

1. Confirm the release version has been updated.

   ```shell
   gh es release version
   ```

1. Disable maintenance mode.

   ```shell
   gh es maintenance set --enabled false
   ```

## Upgrading a high availability deployment

For instances with a high availability (HA) replica, the download and pre-upgrade phases are non-disruptive and can run across all nodes at once. UUID targeting is only needed for the upgrade phase itself, which triggers the reboot. This lets you control the order nodes reboot in: upgrade the replica first, then the primary.

To retrieve node UUIDs, run `gh es config get-metadata` or query `GET /manage/v1/config/nodes`.

### Upgrading a high availability deployment using the {% data variables.product.prodname_cli %}

1. Download the package to all nodes.

   ```shell
   gh es upgrade download --version VERSION
   ```

1. Wait for the download to complete on all nodes.

   ```shell
   gh es upgrade download status
   ```

1. Run the pre-upgrade phase on all nodes at once. This phase is non-disruptive.

   ```shell
   gh es upgrade apply --version VERSION --phase pre-upgrade
   ```

1. Wait for the pre-upgrade phase to complete.

   ```shell
   gh es upgrade status --verbose
   ```

1. Enable maintenance mode.

   ```shell
   gh es maintenance set --enabled true
   ```

1. Stop replication on the replica.

   ```shell
   ghe-repl-stop
   ```

1. Upgrade the primary first, which triggers the reboot, then monitor its progress.

   ```shell
   gh es upgrade apply --version VERSION --phase upgrade --uuid PRIMARY-UUID
   gh es upgrade status --uuid PRIMARY-UUID --verbose
   ```

1. After the primary finishes, upgrade the replica, then monitor its progress.

   ```shell
   gh es upgrade apply --version VERSION --phase upgrade --uuid REPLICA-UUID
   gh es upgrade status --uuid REPLICA-UUID --verbose
   ```

1. Start replication again on the replica.

   ```shell
   ghe-repl-start
   ```

1. Verify replication health and the version, then disable maintenance mode.

   ```shell
   gh es replication status
   gh es release version
   gh es maintenance set --enabled false
   ```

### Upgrading a high availability deployment using the REST API

1. Download the package to all nodes.

   ```shell
   curl -L -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/download \
     -d '{"version":"VERSION"}'
   ```

1. Wait for the download to complete on all nodes.

   ```shell
   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/download/status
   ```

1. Run the pre-upgrade phase on all nodes at once. This phase is non-disruptive.

   ```shell
   curl -L -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/apply \
     -d '{"version":"VERSION","phase":"pre-upgrade"}'
   ```

1. Wait for the pre-upgrade phase to complete.

   ```shell
   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     "https://HOSTNAME:8443/manage/v1/upgrade/status?is_verbose=true"
   ```

1. Enable maintenance mode.

   ```shell
   curl -L -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/maintenance \
     -d '{"enabled":true}'
   ```

1. Stop replication on the replica.

   ```shell
   ghe-repl-stop
   ```

1. Upgrade the primary first, which triggers the reboot, then monitor its progress.

   ```shell
   curl -L -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/apply \
     -d '{"version":"VERSION","phase":"upgrade","uuid":"PRIMARY-UUID"}'

   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     "https://HOSTNAME:8443/manage/v1/upgrade/status?uuid=PRIMARY-UUID&is_verbose=true"
   ```

1. After the primary finishes, upgrade the replica, then monitor its progress.

   ```shell
   curl -L -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/upgrade/apply \
     -d '{"version":"VERSION","phase":"upgrade","uuid":"REPLICA-UUID"}'

   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     "https://HOSTNAME:8443/manage/v1/upgrade/status?uuid=REPLICA-UUID&is_verbose=true"
   ```

1. Start replication again on the replica.

   ```shell
   ghe-repl-start
   ```

1. Verify replication health and the version, then disable maintenance mode.

   ```shell
   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/replication/status

   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/version

   curl -L -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/maintenance \
     -d '{"enabled":false}'
   ```
