---
title: Understanding the snapshot file structure
shortTitle: Snapshot structure
intro: 'Understand the structure and contents of backup snapshot directories, including what is stored and how hard links are used.'
versions:
  ghes: '>= 3.17'
type: reference
topics:
  - Backups
---

Each backup snapshot is stored in a timestamped directory (e.g., `YYYYMMDDTHHMMSS`) under the backup target path (e.g., `/data/backup/data`). Snapshots include full exports of key data stores. Git repositories, {% data variables.product.prodname_pages %}, and other components are stored using hard links to optimize storage and enable efficient point-in-time restores.

>[!NOTE] If you archive backup snapshots, you must preserve symbolic links. Dereferencing or excluding symbolic links—or storing snapshots on a filesystem that doesn’t support them—can cause restore failures.

The `current` symlink always points to the most recent successful snapshot directory.

## Contents of a snapshot directory (`<SNAPSHOT_TIMESTAMP>/`)

Each snapshot directory contains files and folders for your instance’s configuration, data stores, and operational metadata. Below is a typical structure.

### Settings and configuration

```text
settings.json             # Main appliance settings
manage-password           # Management console password hash
uuid                      # Appliance UUID
version                   # GHES version at backup time
strategy                  # Backup strategy used (e.g., rsync, cluster)
cluster.conf              # Cluster configuration (if applicable)
```

### Datastore exports

```text
mysql.sql.gz              # Logical database dump (default) OR
xtrabackup_checkpoints    # Binary backup metadata (if binary backups used)
xtrabackup-export.log     # Log snippet from binary backup
mysql-binary-backup-sentinel # Indicates binary backup type
# May include other files related to logical or binary MySQL backups
```

### Redis

```text
redis.rdb                 # Redis database dump
```

### Elasticsearch

```text
audit-log/                # Audit log indices (uses hard links)
elasticsearch/            # Search indices (if not skipped, uses hard links)
```

### {% data variables.product.github %} data

```text
repositories/             # Git repositories (uses hard links)
pages/                    # GitHub Pages content (uses hard links)
storage/                  # Alambic-managed storage: avatars, attachments, etc. (uses hard links)
```

### {% data variables.product.prodname_actions %} and CI/CD

```text
actions/                  # GitHub Actions blob storage (uses hard links)
mssql/                    # MS SQL Server backups (.bak, .diff, .log) (uses hard links)
minio/                    # MinIO object storage (if Actions or Packages enabled, uses hard links)
```

### Secrets and credentials

```text
authorized-keys.json      # SSH keys authorized for administrative access
github-secrets.tar        # Tarball of various exported instance secrets
saml-keys.tar             # SAML IdP keys (if applicable)
ssh-host-keys.tar         # SSH host keys
ssl-ca-certificates.tar   # Custom CA certificates (if applicable)
# Includes other internal secrets and keys necessary for instance operation.
```

### Hooks and delivery data

```text
git-hooks/                # Custom Git hooks (uses hard links)
hookshot/                 # Webhook delivery data (uses hard links)
```

### Miscellaneous

```text
enterprise.ghl            # License file (often restored separately)
live-upgrade/             # Data for live upgrades or migrations (uses hard links)
benchmarks/               # Performance logs for backup steps
```

## Backup root directory contents (`/data/backup/data/`)

The root backup directory includes all snapshot folders and metadata used for incremental backup tracking and pruning:

```text
YYYYMMDDTHHMMSS/          # Snapshot directory (one per backup)
...                       # Other snapshot directories
current                   # Symlink to the most recent successful snapshot
inc_full_backup           # Tracks base for MySQL incremental backups
inc_snapshot_data         # Tracks incremental MySQL snapshots
prune_*                   # Temporary directories marked for deletion
inc_previous_*            # Renamed snapshot directories during pruning cycle
```
