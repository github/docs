---
title: 将 Elasticsearch 索引迁移到 GitHub Enterprise Server 2.14 或更高版本
intro: '要准备升级到 {% data variables.product.prodname_ghe_server %} 2.14，您需要通过迁移脚本将索引迁移到 Elasticsearch 5.6。'
redirect_from:
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-2-14-or-later/
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-server-2-14-or-later
  - /enterprise/admin/installation/migrating-elasticsearch-indices-to-github-enterprise-server-214-or-later
versions:
  enterprise-server: '*'
---

{% data variables.product.prodname_ghe_server %} 2.14 包含 Elasticsearch 5.6 升级。从 {% data variables.product.prodname_ghe_server %} 2.12 或 2.13 升级到 2.14 或更高版本之前，我们建议您建议下载、安装并运行 Elasticsearch 迁移工具，以便在设备仍具有在线访问权限时在线迁移最大的索引。

### 搜索索引

迁移脚本会在设备在线时先检查任何 `search` 索引。 迁移 `search` 索引可能需要几分钟到几天，具体时长视其大小而定。 以大索引为例，需要几天的时间才能将这类索引迁移到测试环境。

```
admin@ip-172-31-2-141:~$ curl -s http://localhost:9200/_cat/indices?v | sort -n -k 6
green  open   blog-1                     1   0          0            0       144b           144b
green  open   projects-1                 1   0          0            0       144b           144b
green  open   registry-packages-1        1   0          0            0       144b           144b
green  open   showcases-1                1   0          0            0       144b           144b
health status index                    pri rep docs.count docs.deleted store.size pri.store.size
green  open   pull-requests-1            1   0          1            0      9.3kb          9.3kb
green  open   wikis-1                    1   0          2            0        5kb            5kb
green  open   hookshot-logs-2018-05-29   5   0         25            0    124.2kb        124.2kb
green  open   repos-1                    1   0       1638            1      1.4mb          1.4mb
green  open   gists-1                    1   0       3531           64    291.9kb        291.9kb
green  open   audit_log-1-2018-06-1      1   0      11108            0        3mb            3mb
green  open   users-1                    1   0      19866           56      2.7mb          2.7mb
green  open   hookshot-logs-2018-05-31   5   0      20000            0     33.4mb         33.4mb
green  open   hookshot-logs-2018-06-04   5   0      20000            0     32.6mb         32.6mb
green  open   issues-1                   1   0      26405            6     82.8mb         82.8mb
green  open   hookshot-logs-2018-05-30   5   0     119744            0    196.8mb        196.8mb
green  open   audit_log-1-2018-05-1      1   0     191664            0       50mb           50mb
green  open   code-search-1              1   0    6932626           44     42.9gb         42.9gb
green  open   commits-1                  1   0   63753587         1485     45.4gb         45.4gb
```

`search` 索引开头为：

- blog-
- code-search-
- commits-
- gists-
- issues-
- labels-
- marketplace-listings-
- non-marketplace-listings-
- projects-
- pull-requests-
- registry-packages-
- repos-
- showcases-
- topics-
- users-

### Web 挂钩索引

在迁移脚本在线重建必要的 `search` 索引后，脚本将检查是否需要重建 `webhook` 索引。 如果运行使用 {% data variables.product.prodname_ghe_server %} 2.12 或 2.13 的设备已达到 14 天或更久，那么您很可能不需要重建 `webhook` 索引，因为 `webhook` 索引的默认保留政策为七天。 如果您要从 {% data variables.product.prodname_enterprise %} 2.11 或更早版本更新设备，则可能需要重建 `webhook` 索引。

如果需要重建任何 `webhook` 索引，则系统会先提示您启用维护模式，然后脚本才能重建 `webhook` 索引。 尽管迁移 `webhook` 索引需要一定的停机时间，但不需要较长的维护窗口或停机时间。

`webhook` 索引以 `hookshot-logs-` 开头。

### 可用索引

您可以使用 curl 查看设备上的可用索引。

```
admin@ip-172-31-2-141:~$ curl -s http://localhost:9200/_cat/indices?v | sort -n -k 6
green  open   blog-1                     1   0          0            0       144b           144b
green  open   projects-1                 1   0          0            0       144b           144b
green  open   registry-packages-1        1   0          0            0       144b           144b
green  open   showcases-1                1   0          0            0       144b           144b
health status index                    pri rep docs.count docs.deleted store.size pri.store.size
green  open   pull-requests-1            1   0          1            0      9.3kb          9.3kb
green  open   wikis-1                    1   0          2            0        5kb            5kb
green  open   hookshot-logs-2018-05-29   5   0         25            0    124.2kb        124.2kb
green  open   repos-1                    1   0       1638            1      1.4mb          1.4mb
green  open   gists-1                    1   0       3531           64    291.9kb        291.9kb
green  open   audit_log-1-2018-06-1      1   0      11108            0        3mb            3mb
green  open   users-1                    1   0      19866           56      2.7mb          2.7mb
green  open   hookshot-logs-2018-05-31   5   0      20000            0     33.4mb         33.4mb
green  open   hookshot-logs-2018-06-04   5   0      20000            0     32.6mb         32.6mb
green  open   issues-1                   1   0      26405            6     82.8mb         82.8mb
green  open   hookshot-logs-2018-05-30   5   0     119744            0    196.8mb        196.8mb
green  open   audit_log-1-2018-05-1      1   0     191664            0       50mb           50mb
green  open   code-search-1              1   0    6932626           44     42.9gb         42.9gb
green  open   commits-1                  1   0   63753587         1485     45.4gb         45.4gb
```

### 准备 {% data variables.product.prodname_ghe_server %} 2.12 或 2.13 设备

如果您在不运行迁移工具的情况下升级到 {% data variables.product.prodname_ghe_server %} 2.14 或更高版本，现有的 Elasticsearch 索引可能无效并无法正常使用。 要运行 Elasticsearch 迁移脚本，您的 {% data variables.product.prodname_ghe_server %} 设备必须运行 {% data variables.product.prodname_enterprise %} 2.12 或 2.13。

{% warning %}

**警告：**
- 使用 {% data variables.product.prodname_enterprise_backup_utilities %} 将在恢复后销毁不兼容 5.X 的旧 Elasticsearch 索引。 在这种情况下，可能需要手动重新编制索引。
- 如果 {% data variables.product.prodname_ghe_server %} 配置为高可用性，迁移脚本**必须**在复制仍在进行时运行。 开始升级之前，必须允许更改才能完全复制到其他设备。 如果迁移脚本运行时复制未运行，ElasticSearch 索引可能失效。

{% endwarning %}

1. 使用 SSH 向启用了高可用性的主设备进行身份验证。
2. 将迁移脚本下载到设备并进行安装：
   ```shell
   $ wget https://github-enterprise.s3.amazonaws.com/util/es-5x-transition-tools.tar.gz
   $ sudo tar -C / -xvf es-5x-transition-tools.tar.gz
   ```
   如果您管理 {% data variables.product.prodname_ghe_server %} 集群，则使用 SSH 向其中一个 ElasticSearch 服务器节点进行身份验证，并在该节点上安装迁移工具。 节点定位方法如下：
    ```shell
    $ ghe-cluster-each -r elasticsearch -p
    ghe-test-data-0
    ghe-test-data-1
    ghe-test-data-2
    ```
2. 运行迁移脚本：
   ```shell
   $ /usr/local/share/enterprise/ghe-es-5x-migration -r
   ```
 {% note %}

 **注**：如果您有要迁移的 `webhook` 索引，运行在线迁移后，系统将提示您启用维护模式。

 {% endnote %}
3. 如果您要运行 {% data variables.product.prodname_ghe_server %} 集群，请遵循单 VM 或高可用性环境的官方升级文档或集群升级指南。 更多信息请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)”或“[升级集群](/enterprise/{{ currentVersion }}/admin/guides/clustering/upgrading-a-cluster/)”。
