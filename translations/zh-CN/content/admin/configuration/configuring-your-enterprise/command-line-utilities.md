---
title: 命令行实用程序
intro: '{% data variables.product.prodname_ghe_server %} 包含的各种实用程序可以帮助解决特殊问题或执行特定任务。'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
ms.openlocfilehash: 290a7eab73e10a88bae1e056e3f5b43d92274f8f
ms.sourcegitcommit: 5b16250eaa0806bf9497756cb27c54a80f688eec
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172803'
---
以 SSH 管理员用户身份登录后，您可以在虚拟机上的任何位置执行这些命令。 有关详细信息，请参阅“[访问管理 shell (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)”。

## 常规

### ghe-announce

此实用程序会在每个 {% data variables.product.prodname_enterprise %} 页面顶部设置横幅， 您可以使用横幅向用户广播消息。

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %} 要允许每个用户自己关闭通知，请使用 `-d` 标志。
```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user dismissible: MESSAGE
```
{% endif %}

{% ifversion ghes %} 你也可以使用企业设置在 {% data variables.product.product_name %} 上设置一个公告横幅。 有关详细信息，请参阅“[自定义实例上的用户消息](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)”。
{% endif %}

{% ifversion ghes %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

此实用程序会显示关于后台作业（活动作业和队列中的作业）的信息， 它提供的作业计数与每个页面顶部管理员统计信息栏中的计数相同。

此实用程序可以帮助确定 Aqueduct 服务器在处理后台作业时是否会出现问题。 下列任一场景均可能指示 Aqueduct 存在问题：

* 后台作业数增加，而活动作业数保持不变。
* 事件源未更新。
* Web 挂钩未触发。
* Web 界面在 Git 推送后未更新。

如果怀疑 Aqueduct 出现故障，请联系 {% data variables.contact.contact_ent_support %} 获取帮助。

使用此命令，您还可以暂停或恢复队列中的作业。

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```
{% endif %}

### ghe-check-disk-usage

此实用程序会检查磁盘中的大文件或已删除但文件句柄仍保持打开的文件。 如果尝试释放根分区中的空间，应运行此实用程序。

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

此实用程序会清理各种有可能占用根卷上的额外磁盘空间的缓存。 如果您发现一段时间内根卷磁盘空间的使用量显著升高，最好运行此应用程序，查看是否可以帮助降低整体使用量 。

```shell
ghe-cleanup-caches
```
### ghe-cleanup-settings

此实用程序会擦除所有现有的 {% data variables.enterprise.management_console %} 设置。

{% tip %}

提示：{% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

此实用程序可用于检索和修改 {% data variables.location.product_location %} 的配置设置。

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname` to the specified URL
$ ghe-config -l
# Lists all the configuration values
```
可让你在 `cluster.conf` 中找到节点的通用唯一标识符 (UUID)。

```shell
  $ ghe-config HOSTNAME.uuid
```

{% ifversion ghes %} 可让你将用户列表从 REST API 速率限制中排除。 120,000 个请求的硬性限制仍将适用于这些用户。 有关详细信息，请参阅“[REST API 中的资源](/rest/overview/resources-in-the-rest-api#rate-limiting)”。

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "HUBOT GITHUB-ACTIONS"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

此实用程序会应用 {% data variables.enterprise.management_console %} 设置，重新加载系统服务，准备存储设备，重新加载应用程序服务并运行任何待处理的数据库迁移。 它等效于单击 {% data variables.enterprise.management_console %} web UI 中的“保存设置”，或向 [`/setup/api/configure` 终结点](/enterprise/user/rest/reference/enterprise-admin#management-console)发送 POST 请求。

您有可能永远不需要手动运行此实用程序，但如果希望通过 SSH 自动完成设置保存过程，也可以使用此实用程序。

```shell
ghe-config-apply
```

### ghe-console

此实用程序会在您的 {% data variables.product.prodname_enterprise %} 设备上打开 GitHub Rails 控制台。 {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

此实用程序会在您的 {% data variables.product.prodname_enterprise %} 设备上打开 MySQL 数据库会话。 {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status
此实用程序会以 CSV 格式返回 ElasticSearch 索引的摘要。

将包含标头行的索引摘要打印到 `STDOUT`：
```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

将索引摘要和管道结果打印到 `column`，以供读取：

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

### ghe-legacy-github-services-report

此实用程序会列出您的设备中使用 {% data variables.product.prodname_dotcom %} Services 的仓库，作为一种集成方法，此服务将于 2018 年 10 月 1 日停用。 您的设备上的用户可能已设置 {% data variables.product.prodname_dotcom %} Services，为发往某些仓库的推送创建通知。 有关详细信息，请参阅 {% data variables.product.prodname_blog %} 上的“[宣布弃用 {% data variables.product.prodname_dotcom %} 服务](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)”或“[替换 {% data variables.product.prodname_dotcom %} 服务](/developers/overview/replacing-github-services)”。 如需获取关于此命令的详细信息或附加选项，请使用 `-h` 标志。

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

此实用程序允许跟踪记录安装中的所有相关日志文件。 您可以传入选项，将日志限制为特定集合。 使用 -h 标志表示附加选项。

```shell
ghe-logs-tail
```

### ghe-maintenance

此实用程序允许您控制安装维护模式的状态， 其设计为主要由 {% data variables.enterprise.management_console %} 在后台使用，但也可以直接使用。 有关详细信息，请参阅“[启用和安排维护模式](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

```shell
ghe-maintenance -h
```

### ghe-motd

此实用程序重新显示管理员通过管理 shell 访问实例时看到的当天消息 (MOTD)。 输出包含实例状态的概述。

```shell
ghe-motd
```

### ghe-nwo

此实用程序会根据仓库 ID 返回仓库名称和所有者。  

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

使用此命令可为设备上具有站点管理员权限的用户提供组织所有者权限，或者为组织中的任何用户提供组织所有者权限。 您必须指定用户和/或组织。 `ghe-org-admin-promote` 命令始终会在运行前要求确认，除非使用 `-y` 标志绕过确认过程。

您可将以下选项与实用程序配合使用：

- `-u` 标志指定用户名。 使用此标志可为特定用户提供组织所有者权限。 省略 `-u` 标志会将所有站点管理员提升为指定组织的所有者。
- `-o` 标志指定组织。 使用此标志可提供特定组织中的所有者权限。 省略 `-o` 标志会将所有组织中的所有者权限授予指定的站点管理员。
- `-a` 标志会将所有组织中的所有者权限授予所有站点管理员。
- `-y` 标志可绕过手动确认。

此实用程序无法将非站点管理员升级为所有组织的所有者。 可以使用 [ghe-user-promote](#ghe-user-promote) 将普通用户帐户提升为站点管理员。

将特定组织中的组织所有者权限授予特定的站点管理员

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

将所有组织中的组织所有者权限授予特定的站点管理员

```shell
ghe-org-admin-promote -u USERNAME
```

将特定组织中的组织所有者权限授予所有站点管理员

```shell
ghe-org-admin-promote -o ORGANIZATION
```

将所有组织中的组织所有者权限授予所有站点管理员

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

使用此命令可以在{% ifversion enterprise-authentication-rate-limits %}帐户锁定后立即解锁{% data variables.enterprise.management_console %}。 若要配置 {% data variables.location.product_location %}的身份验证策略，请参阅“[配置身份验证策略速率限制](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits)”。{% else %}10 分钟内尝试登录失败 10 次。{% endif %}

```shell
$ ghe-reactivate-admin-login
```


### ghe-saml-mapping-csv

此实用程序可帮助映射 SAML 记录。

为 {% data variables.product.product_name %} 用户创建包含所有 SAML 映射的 CSV 文件：
```shell
$ ghe-saml-mapping-csv -d
```

要使用新值执行更新 SAML 映射的排演：
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

要使用新值更新 SAML 映射：
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

### ghe-service-list

此实用程序会列出您的设备上已启动或停止（正在运行或等待）的服务。

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053
stop/waiting
  - ghe-replica-mode
  {% endif %}
```

### ghe-set-password

使用 `ghe-set-password`，可以设置新密码，以便在 [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console) 中进行身份验证。

```shell
ghe-set-password <new_password>
```

### ghe-setup-network

使用此实用工具可以配置主网络接口。

若要进入可视模式（该模式将引导你完成网络设置的配置），请执行以下操作：

```shell
$ ghe-setup-network -v
```

使用 -h 标志表示附加选项。

### ghe-ssh-check-host-keys

此实用程序会对照已知泄露的 SSH 主机密钥检查现有的 SSH 主机密钥。

```shell
$ ghe-ssh-check-host-keys
```

如果发现主机密钥泄露，实用程序会以状态 `1` 退出并显示以下消息：
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

如果未发现主机密钥泄露，实用程序会以状态 `0` 退出并显示以下消息：
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

此实用程序会滚动 SSH 主机密钥并将其替换为新生成的密钥。

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

此实用程序会返回存储在 {% data variables.product.prodname_enterprise %} 设备上的已知弱 SSH 密钥的报告。 您可以选择批量撤销用户密钥。 此实用程序将报告弱系统密钥，必须在 [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console) 中手动撤销这些密钥。

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

此实用程序允许您在 {% data variables.product.prodname_enterprise %} 设备上安装 Let's Encrypt 证书。 有关详细信息，请参阅“[配置 TLS](/enterprise/admin/guides/installation/configuring-tls)”。

可以使用 `-x` 标志来删除 ACME 配置。

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

此实用程序允许您在 {% data variables.product.prodname_enterprise %} 服务器上安装自定义根 CA 证书。 证书必须采用 PEM 格式。 此外，如果证书提供者在一个文件中包含多个 CA 证书，则必须将其拆分到多个单独文件中，随后再将这些文件逐个传递到 `ghe-ssl-ca-certificate-install`。

运行此实用程序可添加证书链进行 S/MIME 提交签名验证。 有关详细信息，请参阅“[关于提交签名验证](/enterprise/user/articles/about-commit-signature-verification/)”。

如果 {% data variables.location.product_location %}无法连接到另一台服务器的原因是后者使用自签名 SSL 证书或没有为其提供必要 CA 包的 SSL 证书，请运行此实用程序。 确认这一点的一种方法是从 {% data variables.location.product_location %}运行 `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs`。 如果可以验证远程服务器的 SSL 证书，`SSL-Session` 的返回代码应为 0，如下所示。

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

另一方面，如果无法验证远程服务器的 SSL 证书，`SSL-Session` 的返回代码应为非零值：

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

您可以将以下附加选项与实用程序结合使用：
- `-r` 标志允许你卸载 CA 证书。
- `-h` 标志可显示更多用法信息。

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

### ghe-ssl-certificate-setup

此实用工具允许你更新 {% data variables.location.product_location %}的 SSL 证书。 

如需获取关于此命令的详细信息或附加选项，请使用 `-h` 标志。

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

此实用程序允许您生成可与商业或私有证书颁发机构共享的私钥和证书签名请求 (CSR)，以获取可与您的实例配合使用的有效证书。 有关详细信息，请参阅“[配置 TLS](/enterprise/admin/guides/installation/configuring-tls)”。

如需获取关于此命令的详细信息或附加选项，请使用 `-h` 标志。

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

某些平台需要使用此脚本扩展用户量。 有关详细信息，请参阅“[增加存储容量](/enterprise/admin/guides/installation/increasing-storage-capacity/)”。

```shell
$ ghe-storage-extend
```

### ghe-version

此实用工具会打印 {% data variables.location.product_location %}的版本、平台和内部版本号。

```shell
$ ghe-version
```

### ghe-webhook-logs

此实用程序会返回 web 挂钩交付日志，供管理员审查和确定任何问题。

```shell
ghe-webhook-logs
```

显示过去一天所有失败的挂钩交付：{% ifversion ghes %}
```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

日期格式应为 `YYYY-MM-DD`、`YYYY-MM-DD HH:MM:SS` 或 `YYYY-MM-DD HH:MM:SS (+/-) HH:M`。
{% else %}
```shell
ghe-webhook-logs -f -a YYYYMMDD
```
{% endif %}

显示交付的完整挂钩有效负载、结果以及任何异常：{% ifversion ghes %}
```shell
ghe-webhook-logs -g DELIVERY_GUID
```
{% else %}
```shell
ghe-webhook-logs -g DELIVERY_GUID -v
```
{% endif %}

## 群集

### ghe-cluster-status

在 {% data variables.product.prodname_ghe_server %} 的集群部署中检查节点和服务的运行状况。

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

此实用程序创建的支持包 tarball 包含采用 Geo-replication 或集群配置的各个节点中的重要日志。

默认情况下，该命令在 /tmp 中创建 tarball，但也可以使用它将 tarball `cat` 为 `STDOUT`，以通过 SSH 轻松进行流式传输。 在 Web UI 未响应或从 /setup/support 下载支持包失败的情况下，可以使用此方法。 如果要生成包含旧日志的 extended 捆绑，则必须使用此命令。 您还可以使用此命令将集群支持包直接上传到 {% data variables.product.prodname_enterprise %} Support。

要创建标准捆绑包：
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

要创建扩展捆绑包：
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

要将捆绑包发送至 {% data variables.contact.github_support %}：
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

要将捆绑包发送至 {% data variables.contact.github_support %} 并关联捆绑包与事件单：
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

{% ifversion ghes %}
### ghe-cluster-failover

从主动群集节点故障转移至被动群集节点。 有关详细信息，请参阅“[启动到副本群集的故障转移](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)”。

```shell
ghe-cluster-failover
```
{% endif %}

### ghe-dpages

此实用程序可用于管理分配的 {% data variables.product.prodname_pages %} 服务器。

```shell
ghe-dpages
```

要显示仓库位置和健康状态摘要：
```shell
ghe-dpages status
```

要在撤出集群节点之前撤出 {% data variables.product.prodname_pages %} 存储服务：
```shell
ghe-dpages evacuate pages-server-UUID
```

### ghe-spokes

此实用程序允许您管理分布式 git 服务器上各仓库的三个副本。

```shell
ghe-spokes
```

要显示仓库位置和健康状态摘要：

```shell
ghe-spokes status
```

要显示存储仓库的服务器：

```shell
ghe-spokes route
```

要撤出集群节点上的存储服务：

```shell
ghe-spokes server evacuate git-server-UUID
```

### ghe-storage

此实用程序允许您在撤出集群节点之前撤出所有存储服务。

```shell
ghe-storage evacuate storage-server-UUID
```

## Git

### ghe-btop

当前 Git 操作的类 `top` 接口。

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

此工具有助于分析 Git 流量。 它查询位于 `/data/user/gitmon` 下的 Governor 数据文件。 {% data variables.product.company_short %} 为每个文件保存一小时的数据，保留两周。 有关详细信息，请参阅 {% data variables.product.prodname_github_community %} 中的[使用 Governor 分析 Git 流量](https://github.community/t/analyzing-git-traffic-using-governor/13516)。

```bash
ghe-governor <subcommand> <column> [options]
```

```
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

此实用程序允许你切换到存储库的目录并以 `git` 用户身份打开交互式 shell。 可以通过 `git-*` 或 `git-nw-*` 等命令对存储库执行手动检查或维护。

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

此实用程序会手动重新打包仓库网络，以优化包存储。 如果仓库较大，运行此命令有助于减小其整体大小。 {% data variables.product.prodname_enterprise %} 会在与仓库网络交互的过程中自动运行此命令。

可以添加可选的 `--prune` 参数来删除不是从分支、标记或其他任何 ref 引用的不可达 Git 对象。此方法特别适用于立即删除[之前泄露的敏感信息](/enterprise/user/articles/remove-sensitive-data/)。

{% warning %}

警告：在使用 `--prune` 参数移除无法访问的 Git 对象之前，请将 {% data variables.location.product_location %}置于维护模式，或确保处于相同存储库网络中的所有存储库都已锁定。 有关详细信息，请参阅“[启用和安排维护模式](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)”。

{% endwarning %}

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

此实用工具检查 {% data variables.product.prodname_actions %} 的所有服务是否正常运行。 有关详细信息，请参阅“[{% data variables.product.product_name %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)”和“[排查企业的 {% data variables.product.prodname_actions %}](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)”。

```shell
ghe-actions-check
```

### ghe-actions-precheck

此实用工具测试 {% data variables.location.product_location %}上 {% data variables.product.prodname_actions %} 的 blob 存储配置。 在为实例启用 {% data variables.product.prodname_actions %} 之前，您可以使用该实用工具验证您的存储配置。

有关 {% data variables.product.prodname_actions %} 的配置的详细信息，请参阅“[{% data variables.product.product_name %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)”。

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

如果存储系统配置正确，您将看到以下输出。

```
All Storage tests passed
```

## 导入和导出

### ghe-migrator

`ghe-migrator` 属于高保真工具，可帮助用户从一个 GitHub 实例迁移到另一个实例。 您可以整合实例或将组织、用户、团队和仓库从 GitHub.com 移至 {% data variables.product.prodname_enterprise %}。

有关详细信息，请参阅有关[将数据迁移到企业和从企业迁移数据](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/)的指南。

### git-import-detect

给定一个 URL，检测哪种类型的源控制管理系统位于另一端。 在手动导入过程中，此信息很可能是已知的，但在自动执行的脚本中非常有用。
```shell
git-import-detect
```

### git-import-hg-raw

此实用程序可将 Mercurial 仓库导入至此 Git 仓库。 有关详细信息，请参阅“[从第三方版本控制系统导入数据](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)”。
```shell
git-import-hg-raw
```

### git-import-svn-raw

此实用程序可将 Subversion 历史记录和文件数据导入至 Git 分支。 这属于直接复制树，会忽略任何主干或分支差异。 有关详细信息，请参阅“[从第三方版本控制系统导入数据](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)”。
```shell
git-import-svn-raw
```

### git-import-tfs-raw

此实用程序可从 Team Foundation Version Control (TFVC) 导入。 有关详细信息，请参阅“[从第三方版本控制系统导入数据](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)”。
```shell
git-import-tfs-raw
```

### git-import-rewrite

此实用程序可重写导入的仓库。 这样，您将有机会重命名作者，对于 Subversion 和 TFVC，可基于文件夹生成 Git 分支。 有关详细信息，请参阅“[从第三方版本控制系统导入数据](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)”。
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## 安全

### ghe-find-insecure-git-operations

此实用工具搜索实例的日志并通过 SSH 识别使用不安全算法或哈希函数（包括 DSA、RSA-SHA-1、HMAC-SHA-1 和 CBC 密码）的 Git 操作。 可以使用输出来支持每个客户端转换到更安全的 SSH 连接。 有关详细信息，请参阅 [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}.{% elsif ghes > 3.5 %} 和“[配置与实例的 SSH 连接](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)。{% endif %}

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## 支持

### ghe-diagnostics

此实用程序会执行各项检查并收集关于安装的信息，您可以将此类信息发送给支持团队，以帮助诊断您遇到的问题。

目前，此实用程序的输出与下载 {% data variables.enterprise.management_console %} 中的诊断信息类似，但会逐渐增加一些 Web UI 中未提供的其他改进。 有关详细信息，请参阅“[创建和共享诊断文件](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)”。

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} 此实用程序会创建包含实例中重要日志的支持捆绑 tarball。

默认情况下，该命令在 /tmp 中创建 tarball，但也可以使用它将 tarball `cat` 为 `STDOUT`，以通过 SSH 轻松进行流式传输。 在 Web UI 未响应或从 /setup/support 下载支持包失败的情况下，可以使用此方法。 如果要生成包含旧日志的 extended 捆绑，则必须使用此命令。 您还可以使用此命令将支持包直接上传到 {% data variables.product.prodname_enterprise %} Support。

要创建标准捆绑包：
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

要创建扩展捆绑包：
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

要将捆绑包发送至 {% data variables.contact.github_support %}：
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

要将捆绑包发送至 {% data variables.contact.github_support %} 并关联捆绑包与事件单：

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

此实用程序会将您的设备中的信息发送到 {% data variables.product.prodname_enterprise %} Support。 可以指定本地文件，或通过 `STDIN` 提供最大 100MB 的数据流。 可以选择将上传的数据与支持事件单相关联。

要将文件发送至 {% data variables.contact.github_support %} 并关联文件与事件单：
```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

通过 `STDIN` 上传数据并关联数据与票证：
```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

在此示例中，`ghe-repl-status -vv` 从副本设备发送详细状态信息。 应将 `ghe-repl-status -vv` 替换为要传输到 `STDIN` 的特定数据，并将 `Verbose Replication Status` 替换为数据的简单说明。 {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## 升级 {% data variables.product.prodname_ghe_server %}

### ghe-upgrade

此实用程序会安装或验证升级包。 如果升级失败或中断，您还可以使用此实用程序回滚补丁版本。 有关详细信息，请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)”。

要验证升级包：
```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

要安装升级包：
```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

此实用程序可以管理已排定的升级包安装。 您可以显示、新建或移除已排定的安装。 您必须使用 cron 表达式创建日程。 有关详细信息，请参阅 [Cron Wikipedia 条目](https://en.wikipedia.org/wiki/Cron#Overview)。

`ghe-upgrade-scheduler` 实用工具最适合用于计划热补丁升级，在大多数情况下不需要维护模式或重启。 此实用工具不适用于完整包升级，需要管理员手动设置维护模式、重启实例和取消设置维护模式。 有关不同升级类型的详细信息，请参阅“[升级 {% data variables.product.product_name %}](/admin/enterprise-management/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package)”

要安排新的包安装：
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

要显示已安排的包安装：
```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

要删除已安排的包安装：
```shell
$ ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

### ghe-update-check

此实用程序将检查 {% data variables.product.prodname_enterprise %} 是否有新的补丁版本可用。 如果有新的补丁版本，并且实例中有可用空间，系统将下载此包。 默认情况下，包会保存到 /var/lib/ghe-updates。 然后，管理员可以[执行升级](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/)。

包含下载状态的文件位于 /var/lib/ghe-updates/ghe-update-check.status。

要查看最新的 {% data variables.product.prodname_enterprise %} 版本，请使用 `-i` 开关。

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

## 用户管理

### ghe-license-usage

此实用程序可按 JSON 格式导出安装用户列表。 如果您的实例连接至 {% data variables.product.prodname_ghe_cloud %}，{% data variables.product.prodname_ghe_server %} 将使用此信息向 {% data variables.product.prodname_ghe_cloud %} 报告许可信息。 有关详细信息，请参阅“[将企业帐户连接到 {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)”。

默认情况下，生成的 JSON 文件中的用户列表为加密格式。 将 `-h` 标志用于更多选项。

```shell
ghe-license-usage
```

### ghe-org-membership-update

此实用程序将对您的实例中的所有成员强制实施默认的组织成员关系可见性设置。 有关详细信息，请参阅“[配置组织成员关系的可见性](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership)”。 设置选项为 `public` 或 `private`。

```shell
ghe-org-membership-update --visibility=SETTING
```

### `ghe-user-csv`

此实用程序可将所有安装用户列表导出为 CSV 格式。 CSV 文件包含电子邮件地址、用户所属类型（例如管理员、用户）、用户拥有的存储库数量、SSH 密钥数量、组织成员关系数量、上次登录的 IP 地址等。有关更多选项，请使用 `-h` 标志。

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

此实用程序会将指定用户从管理员状态降级为普通用户状态。 建议使用 Web UI 执行此操作，但在 `ghe-user-promote` 实用程序运行出错并且需要再次通过 CLI 将用户降级的情况下提供此实用程序。

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

此实用程序会将指定用户帐户升级为站点管理员。

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

此实用程序会挂起指定用户，避免他们登录、推送或从仓库拉取。

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

此实用程序会取消挂起指定用户，向他们授予登录、推送以及从仓库拉取的权限。

```shell
ghe-user-unsuspend USERNAME
```
