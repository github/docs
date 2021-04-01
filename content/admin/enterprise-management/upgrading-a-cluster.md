---
title: Upgrading a cluster
intro: 'Use the administrative shell (SSH) to upgrade a {% data variables.product.prodname_ghe_server %} cluster to the latest release.'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
versions:
  enterprise-server: '*'
topics:
  - enterprise
---
### Upgrading with a hotpatch
{% data reusables.enterprise_installation.hotpatching-explanation %} The hotpatch installation script installs the hotpatch on every node in the cluster and restarts the services in their proper sequence to avoid downtime.

1. Back up your data with [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
2. From the administrative shell of any node, use the `ghe-cluster-hotpatch` command to install the latest hotpatch. You can provide a URL for a hotpatch, or manually download the hotpatch and specify a local filename.
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

### Upgrading with an upgrade package
Use an upgrade package to upgrade a {% data variables.product.prodname_ghe_server %} cluster to the latest feature release. For example, you can upgrade from `2.11` to `2.13`.

#### Preparing to upgrade

1. Review [Cluster network configuration](/enterprise/admin/guides/clustering/cluster-network-configuration) for the version you are upgrading to, and update your configuration as needed.
2. Back up your data with [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
3. Schedule a maintenance window for end users of your {% data variables.product.prodname_ghe_server %} cluster, as it will be unavailable for normal use during the upgrade. Maintenance mode blocks user access and prevents data changes while the cluster upgrade is in progress.
4. On the [{% data variables.product.prodname_ghe_server %} Download Page](https://enterprise.github.com/download), copy the URL for the upgrade *.pkg* file to the clipboard.
5. From the administrative shell of any node, use the `ghe-cluster-each` command combined with `curl` to download the release package to each node in a single step. Use the URL you copied in the previous step as an argument.
  ```shell
  $ ghe-cluster-each -- "cd /home/admin && curl -L -O  https://<em>PACKAGE-URL</em>.pkg"
  > ghe-app-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  24.2M      0  0:00:20  0:00:20 --:--:-- 27.4M
  > ghe-data-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  21.3M      0  0:00:23  0:00:23 --:--:-- 25.8M
  > ghe-data-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.6M
  > ghe-app-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.8M      0  0:00:25  0:00:25 --:--:-- 17.6M
  > ghe-data-node-3:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-3:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.5M
  ```
6. Identify the primary MySQL node, which is defined as `mysql-master = <hostname>` in `cluster.conf`. This node will be upgraded last.

#### Upgrading the cluster nodes

1. Enable maintenance mode according to your scheduled window by connecting to the administrative shell of any cluster node and running `ghe-cluster-maintenance -s`.
2. **With the exception of the primary MySQL node**, connect to the administrative shell of each of the {% data variables.product.prodname_ghe_server %} nodes.
Run the `ghe-upgrade` command, providing the package file name you downloaded in Step 4 of [Preparing to upgrade](#preparing-to-upgrade):
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
3. The upgrade process will reboot the node once it completes. Verify that you can `ping` each node after it reboots.
4. Connect to the administrative shell of the primary MySQL node. Run the `ghe-upgrade` command, providing the package file name you downloaded in Step 4 of [Preparing to upgrade](#preparing-to-upgrade):
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
5. The upgrade process will reboot the primary MySQL node once it completes. Verify that you can `ping` each node after it reboots.
6. Exit maintenance mode from the administrative shell of any node by running `ghe-cluster-maintenance -u`.
