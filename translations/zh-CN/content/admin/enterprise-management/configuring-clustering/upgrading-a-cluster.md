---
title: 升级集群
intro: '使用管理 shell (SSH) 将 {% data variables.product.prodname_ghe_server %} 集群升级到最新版本。'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
---
### 使用热补丁升级
{% data reusables.enterprise_installation.hotpatching-explanation %} 热补丁安装脚本可在集群中的每个节点上安装热补丁，并按正确顺序重新启动服务以避免停机。

1. 使用 [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme) 备份数据。
2. 在任何节点的管理 shell 中，使用 `ghe-cluster-hotpatch` 命令安装最新的热补丁。 您可以为热补丁提供 URL，也可以手动下载该热补丁并指定本地文件名。
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

### 使用升级包升级
使用升级包将 {% data variables.product.prodname_ghe_server %} 集群升级到最新功能版本。 例如，您可以从 `2.11` 升级到 `2.13`。

#### 准备升级

1. 查看要升级到的版本的[集群网络配置](/enterprise/admin/guides/clustering/cluster-network-configuration)，并根据需要更新配置。
2. 使用 [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme) 备份数据。
3. 为 {% data variables.product.prodname_ghe_server %} 集群的最终用户排定维护窗口，因为它在升级期间无法正常使用。 在群集群升级过程中，维护模式会阻止用户访问并防止数据更改。
4. 在 [{% data variables.product.prodname_ghe_server %} 下载页面](https://enterprise.github.com/download)上，将 *.pkg* 升级文件的 URL 复制到剪贴板。
5. 在任何节点的管理 shell 中，将 `ghe-cluster-each` 命令与 `curl` 结合使用，只需一步即可将发布包下载到每个节点。 使用您在上一步中复制的 URL 作为参数。
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
6. 确定主 MySQL 节点，此节点在 `cluster.conf` 中定义为 `mysql-master = <hostname>`。 此节点将最后升级。

#### 升级集群节点

1. 通过连接到任何集群节点的管理 shell 并运行 `ghe-cluster-maintenance -s`，根据排定的窗口启用维护模式。
2. **除了主 MySQL 节点之外**，连接到每个 {% data variables.product.prodname_ghe_server %} 节点的管理 shell。 运行 `ghe-upgrade` 命令，提供在[准备升级](#preparing-to-upgrade)的步骤 4 中下载的包文件名：
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
3. 升级过程将在完成后重启节点。 验证您可以在其重启后 `ping` 每个节点。
4. 连接到主 MySQL 节点的管理 shell。 运行 `ghe-upgrade` 命令，提供在[准备升级](#preparing-to-upgrade)的步骤 4 中下载的包文件名：
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
5. 升级过程将在完成后重启主 MySQL 节点。 验证您可以在其重启后 `ping` 每个节点。
6. 通过运行 `ghe-cluster-maintenance -u`，从任何节点的管理 shell 退出维护模式。
