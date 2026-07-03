---
title: Enterprise Server Upgrade Automation
intro: You can use the ghes-manage API or `es` plugin to automate upgrade operations in Enterprise Server environments.
versions:
  ghes: '>= 3.21'
shortTitle: Upgrade Enterprise Server
contentType: how-tos
---

You can upgrade a GitHub Enterprise Server instance using the Manage {% data variables.product.prodname_ghe_server %} API or the `gh es` CLI extension. These tools automate the process of downloading the upgrade package, running pre-upgrade checks, and applying the new version.

## Prerequisites

- Back up your data with [GitHub Enterprise Server Backup Utilities](https://github.com/github/backup-utils#readme).
- Schedule a maintenance window for end users.
- Ensure you have authentication credentials for the Manage {% data variables.product.prodname_ghe_server %} API. For more information, see [AUTOTITLE](/rest/enterprise-admin#authentication).

## Step 1: Download the upgrade package

Download the upgrade package to the instance.

### Using the CLI

```shell
# Download a specific version
gh es upgrade download --version VERSION

# Or download the latest available version
gh es upgrade download
```

### Using the API

```shell
curl -L \
  -X POST \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/download \
  -d '{"version":"VERSION"}'
```

## Step 2: Monitor download progress

Confirm the download has completed before proceeding.

### Using the CLI

```shell
gh es upgrade download status
```

### Using the API

```shell
curl -L \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/download/status
```

Wait until `status` shows `COMPLETED`.

## Step 3: Apply the upgrade's pre-upgrade phase

Apply the upgrade. This runs both the pre-upgrade and upgrade phases sequentially.

### Using the CLI

```shell
gh es upgrade apply --version VERSION --phase pre-upgrade
```

### Using the API

```shell
curl -L \
  -X POST \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/apply \
  -d '{"version":"VERSION", "phase":"pre-upgrade}'
```


## Step 4: Monitor pre-upgrade progress

Monitor the upgrade until it completes. The instance will reboot once the upgrade finishes.

### Using the CLI

```shell
gh es upgrade status --verbose
```

### Using the API

```shell
curl -L \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  "https://HOSTNAME:8443/manage/v1/upgrade/status?verbose=true"
```

Wait until `status` shows `completed` and `is_running` shows `false`.

## Step 5: Enable maintenance mode

Enable maintenance mode.

### Using the CLI

   ```shell
   gh es maintenance set --enabled true
   ```

### Using the API

   ```shell
   curl -L \
     -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/maintenance \
     -d '{"enabled":true}'
   ```

## Step 6: Apply the upgrade's upgrade phase

Apply the upgrade. This runs both the pre-upgrade and upgrade phases sequentially.

### Using the CLI

```shell
gh es upgrade apply --version VERSION --phase pre-upgrade
```

### Using the API

```shell
curl -L \
  -X POST \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/apply \
  -d '{"version":"VERSION", "phase":"pre-upgrade}'
```

## Step 7: Verify and disable maintenance mode

After the upgrade completes:

First, confirm the release version has been updated.

### Using the CLI

   ```shell
   gh es release version
   ```

### Using the API

   ```shell
   curl -L \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/version
   ```

Then, disable maintenance mode.

### Using the CLI

   ```shell
   gh es maintenance set --enabled false
   ```

### Using the API

   ```shell
   curl -L \
     -X POST \
     -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
     -H "Content-Type: application/json" \
     https://HOSTNAME:8443/manage/v1/maintenance \
     -d '{"enabled":false}'
   ```

## Upgrading a high availability deployment

For instances with a high availability (HA) replica, the download and pre-upgrade phases are non-disruptive and can run across all nodes at once. UUID targeting is only needed for the upgrade phase itself, which triggers the reboot. This lets you control the order nodes reboot in: upgrade the replica first, then the primary.

To retrieve node UUIDs, run `gh es config get-metadata` or query `GET /manage/v1/config/nodes`.

### Using the CLI

```shell
# Download the package to all nodes
gh es upgrade download --version VERSION

# Wait for download to complete on all nodes
gh es upgrade download status

# Run pre-upgrade on all nodes at once (non-disruptive)
gh es upgrade apply --version VERSION --phase pre-upgrade

# Wait for pre-upgrade to complete
gh es upgrade status --verbose

# Enable maintenance mode
gh es maintenance set --enabled true

# Upgrade the replica first (triggers reboot)
gh es upgrade apply --version VERSION --phase upgrade --uuid REPLICA-UUID
gh es upgrade status --uuid REPLICA-UUID --verbose

# After the replica finishes, upgrade the primary
gh es upgrade apply --version VERSION --phase upgrade --uuid PRIMARY-UUID
gh es upgrade status --uuid PRIMARY-UUID --verbose

# Verify replication health and version, then disable maintenance mode
gh es replication status
gh es release version
gh es maintenance set --enabled false
```

### Using the API

```shell
# Download the package to all nodes
curl -L -X POST \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/download \
  -d '{"version":"VERSION"}'

# Wait for download to complete on all nodes
curl -L \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/download/status

# Run pre-upgrade on all nodes at once (non-disruptive)
curl -L -X POST \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/apply \
  -d '{"version":"VERSION","phase":"pre-upgrade"}'

# Wait for pre-upgrade to complete
curl -L \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  "https://HOSTNAME:8443/manage/v1/upgrade/status?verbose=true"

# Enable maintenance mode
curl -L -X POST \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/maintenance \
  -d '{"enabled":true}'

# Upgrade the replica first (triggers reboot)
curl -L -X POST \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/apply \
  -d '{"version":"VERSION","phase":"upgrade","uuid":"REPLICA-UUID"}'

# Monitor replica upgrade
curl -L \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  "https://HOSTNAME:8443/manage/v1/upgrade/status?uuid=REPLICA-UUID&verbose=true"

# After the replica finishes, upgrade the primary
curl -L -X POST \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  https://HOSTNAME:8443/manage/v1/upgrade/apply \
  -d '{"version":"VERSION","phase":"upgrade","uuid":"PRIMARY-UUID"}'

# Monitor primary upgrade
curl -L \
  -u "api_key:ROOT-SITE-ADMINISTRATOR-PASSWORD" \
  -H "Content-Type: application/json" \
  "https://HOSTNAME:8443/manage/v1/upgrade/status?uuid=PRIMARY-UUID&verbose=true"

# Verify replication health and version, then disable maintenance mode
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
