---
title: 命令行实用程序
intro: '{% data variables.product.prodname_ghe_server %} 包含的各种实用程序可以帮助解决特殊问题或执行特定任务。'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services/
  - /enterprise/admin/articles/command-line-utilities/
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

以 SSH 管理员用户身份登录后，您可以在虚拟机上的任何位置执行这些命令。 更多信息请参阅“[访问管理 shell (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)”。

### 常规

#### ghe-announce

此实用程序会在每个 {% data variables.product.prodname_enterprise %} 页面顶部设置横幅， 您可以使用横幅向用户广播消息。

{% if currentVersion ver_gt "enterprise-server@2.21" %}
You can also set an announcement banner using the enterprise settings on {% data variables.product.product_name %}. 更多信息请参阅“[自定义您的实例上的用户消息](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)”。
{% endif %}

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

#### ghe-check-disk-usage

此实用程序会检查磁盘中的大文件或已删除但文件句柄仍保持打开的文件。 如果尝试释放根分区中的空间，应运行此实用程序。

```shell
ghe-check-disk-usage
```

#### ghe-cleanup-caches

此实用程序会清理各种有可能占用根卷上的额外磁盘空间的缓存。 如果您发现一段时间内根卷磁盘空间的使用量显著升高，最好运行此应用程序，查看是否可以帮助降低整体使用量 。

```shell
ghe-cleanup-caches
```
#### ghe-cleanup-settings

此实用程序会擦除所有现有的 {% data variables.enterprise.management_console %} 设置。

{% tip %}

**提示**：{% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

#### ghe-config

此实用程序可用于检索和修改 {% data variables.product.product_location_enterprise %} 的配置设置。

```shell
$ ghe-config <em>core.github-hostname</em>
# Gets the configuration value of `core.github-hostname`
$ ghe-config <em>core.github-hostname</em> <em>'example.com'</em>
# Sets the configuration value of `core.github-hostname` to `example.com`
$ ghe-config -l
# Lists all the configuration values
```
允许您在 `cluster.conf` 中查找节点的 uuid。

``` shell
  $ ghe-config _hostname_.uuid
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Allows you to exempt a list of users from API rate limits. For more information, see "[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limiting)."

``` shell
$ ghe-config app.github.rate_limiting_exempt_users "<em>hubot</em> <em>github-actions</em>"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

#### ghe-config-apply

此实用程序会应用 {% data variables.enterprise.management_console %} 设置，重新加载系统服务，准备存储设备，重新加载应用程序服务并运行任何待处理的数据库迁移。 相当于在 {% data variables.enterprise.management_console %} Web UI 中单击 **Save settings（保存设置）**，或相当于向[ `/setup/api/configure` 端点](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)发送 POST 请求。

您有可能永远不需要手动运行此实用程序，但如果希望通过 SSH 自动完成设置保存过程，也可以使用此实用程序。

```shell
ghe-config-apply
```

#### ghe-console

此实用程序会在您的 {% data variables.product.prodname_enterprise %} 设备上打开 GitHub Rails 控制台。 {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

#### ghe-dbconsole

此实用程序会在您的 {% data variables.product.prodname_enterprise %} 设备上打开 MySQL 数据库会话。 {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

#### ghe-es-index-status
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

#### ghe-legacy-github-services-report

此实用程序会列出您的设备中使用 {% data variables.product.prodname_dotcom %} Services 的仓库，作为一种集成方法，此服务将于 2018 年 10 月 1 日停用。 您的设备上的用户可能已设置 {% data variables.product.prodname_dotcom %} Services，为发往某些仓库的推送创建通知。 For more information, see "[Announcing the deprecation of {% data variables.product.prodname_dotcom %} Services](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" on {% data variables.product.prodname_blog %} or "[Replacing {% data variables.product.prodname_dotcom %} Services](/v3/guides/replacing-github-services/)." 如需获取关于此命令的更多信息或附加选项，请使用 `-h` 标志。

```shell
ghe-legacy-github-services-report

```

#### ghe-logs-tail

此实用程序允许跟踪记录安装中的所有相关日志文件。 您可以传入选项，将日志限制为特定集合。 使用 -h 标志表示附加选项。

```shell
ghe-logs-tail
```

#### ghe-maintenance

此实用程序允许您控制安装维护模式的状态， 其设计为主要由 {% data variables.enterprise.management_console %} 在后台使用，但也可以直接使用。

```shell
ghe-maintenance -h
```

{% if currentVersion ver_gt "enterprise-server@2.17" %}
#### ghe-motd

此实用程序重新显示管理员通过管理 shell 访问实例时看到的当天消息 (MOTD)。 输出包含实例状态的概述。

```shell
ghe-motd
```
{% endif %}

#### ghe-nwo

此实用程序会根据仓库 ID 返回仓库名称和所有者。

```shell
ghe-nwo <em>REPOSITORY_ID</em>
```

#### ghe-org-admin-promote

使用此命令可为设备上具有站点管理员权限的用户提供组织所有者权限，或者为组织中的任何用户提供组织所有者权限。 您必须指定用户和/或组织。 `ghe-org-admin-promote` 命令始终会在运行前要求确认，除非您使用 `-y` 标志绕过确认过程。

您可将以下选项与实用程序配合使用：

- `-u` 标志指定用户名。 使用此标志可为特定用户提供组织所有者权限。 省略 `-u` 标志会将所有站点管理员升级为指定组织的所有者。
- `-o` 标志指定组织。 使用此标志可提供特定组织中的所有者权限。 省略 `-o` 标志会将所有组织中的所有者权限授予指定的站点管理员。
- `-a` 标志会将所有组织中的所有者权限授予所有站点管理员。
- `-y` 标志可绕过手动确认。

此实用程序无法将非站点管理员升级为所有组织的所有者。 您可以使用 [ghe-user-promote](#ghe-user-promote) 将普通用户帐户升级为站点管理员。

将特定组织中的组织所有者权限授予一个用户

```shell
ghe-org-admin-promote -u <em>USERNAME</em> -o <em>ORGANIZATION</em>
```

将所有组织中的组织所有者权限授予特定的站点管理员

```shell
ghe-org-admin-promote -u <em>USERNAME</em>
```

将特定组织中的组织所有者权限授予所有站点管理员

```shell
ghe-org-admin-promote -o <em>ORGANIZATION</em>
```

将所有组织中的组织所有者权限授予所有站点管理员

```shell
ghe-org-admin-promote -a
```

#### ghe-reactivate-admin-login

在 10 分钟内登录尝试失败 10 次后，使用此命令可立即解锁 {% data variables.enterprise.management_console %}。

```shell
$ ghe-reactivate-admin-login
```

#### ghe-resque-info

此实用程序会显示关于后台作业（活动作业和队列中的作业）的信息， 它提供的作业计数与每个页面顶部管理员统计信息栏中的计数相同。

此实用程序可以帮助确定 Resque 服务器在处理后台作业时是否会出现问题。 下列任一场景均可能指示 Resque 存在问题：

* 后台作业数增加，而活动作业数保持不变。
* 事件源未更新。
* Web 挂钩未触发。
* Web 界面在 Git 推送后未更新。

如果怀疑 Resque 出现故障，请联系 {% data variables.contact.contact_ent_support %} 获取帮助。

使用此命令，您还可以暂停或恢复队列中的作业。

```shell
$ ghe-resque-info
# lists queues and the number of currently queued jobs
$ ghe-resque-info -p <em>QUEUE</em>
# pauses the specified queue
$ ghe-resque-info -r <em>QUEUE</em>
# resumes the specified queue
```

#### ghe-saml-mapping-csv

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

#### ghe-service-list

此实用程序会列出您的设备上已启动或停止（正在运行或等待）的服务。

```shell
$ ghe-service-list
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
```

{% tip %}

如有需要，可将此命令返回的服务名称与 [`systemctl`](https://www.freedesktop.org/software/systemd/man/systemctl.html) 命令结合使用，以手动停止、启动或重启这些服务。 例如：

```shell
$ sudo systemctl restart github-resqued
```

停止服务会导致安装停机，因此建议您在停止或重启任何服务之前联系 {% data variables.contact.contact_ent_support %}。

{% endtip %}

#### ghe-set-password

使用 `ghe-set-password`，您可以设置新密码，在 [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console) 中进行身份验证。

```shell
ghe-set-password <new_password>
```

#### ghe-ssh-check-host-keys

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

#### ghe-ssh-roll-host-keys

此实用程序会滚动 SSH 主机密钥并将其替换为新生成的密钥。

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

#### ghe-ssh-weak-fingerprints

此实用程序会返回存储在 {% data variables.product.prodname_enterprise %} 设备上的已知弱 SSH 密钥的报告。 您可以选择批量撤销用户密钥。 此实用程序将报告弱系统密钥，您必须在 [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console) 中手动撤销这些密钥。

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

#### ghe-ssl-acme

此实用程序允许您在 {% data variables.product.prodname_enterprise %} 设备上安装 Let's Encrypt 证书。 更多信息请参阅“[配置 TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)”。

您可以使用 `-x` 标志来删除 ACME 配置。

```shell
ghe-ssl-acme -e
```

#### ghe-ssl-ca-certificate-install

此实用程序允许您在 {% data variables.product.prodname_enterprise %} 服务器上安装自定义根 CA 证书。 证书必须采用 PEM 格式。 此外，如果您的证书提供者在一个文件中包含多个 CA 证书，则必须将其拆分到多个单独文件中，随后再将这些文件逐个传递到 `ghe-ssl-ca-certificate-install`。

Run this utility to add a certificate chain for S/MIME commit signature verification. 更多信息请参阅“[关于提交签名验证](/enterprise/{{ currentVersion }}/user/articles/about-commit-signature-verification/)”。

如果 {% data variables.product.product_location_enterprise %} 无法连接到另一台服务器的原因是后者使用自签名 SSL 证书或没有为其提供必要 CA 包的 SSL 证书，请运行此实用程序。 确认这种情况的一种方法是通过 {% data variables.product.product_location_enterprise %} 运行 `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs`。 如果可以验证远程服务器的 SSL 证书，`SSL-Session` 的返回代码应为 0，如下所示。

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

另一方面，如果*无法<0>验证远程服务器的 SSL 证书，`SSL-Session` 的返回代码应为非零值：</p>

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
- `-r` 标志允许您卸载 CA 证书。
- `-h` 标志可显示更多用法信息。

```shell
ghe-ssl-ca-certificate-install -c <em>/path/to/certificate</em>
```

#### ghe-ssl-generate-csr

此实用程序允许您生成可与商业或私有证书颁发机构共享的私钥和证书签名请求 (CSR)，以获取可与您的实例配合使用的有效证书。 更多信息请参阅“[配置 TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)”。

如需获取关于此命令的更多信息或附加选项，请使用 `-h` 标志。

```shell
ghe-ssl-generate-csr
```

#### ghe-storage-extend

某些平台需要使用此脚本扩展用户量。 更多信息请参阅“[增加存储容量](/enterprise/admin/guides/installation/increasing-storage-capacity/)”。

```shell
$ ghe-storage-extend
```

#### ghe-version

此实用程序会打印 {% data variables.product.product_location_enterprise %} 的版本、平台和内部版本号。

```shell
$ ghe-version
```

#### ghe-webhook-logs

此实用程序会返回 web 挂钩交付日志，供管理员审查和确定任何问题。

```shell
ghe-webhook-logs
```

要显示过去一天所有失败的挂钩交付：
```shell
ghe-webhook-logs -f -a <em>YYYYMMDD</em>
```

要显示交付的完整挂钩有效负载、结果以及任何异常：
```shell
ghe-webhook-logs -g <em>delivery-guid</em> -v
```

要显示全局 web 挂钩交付：
```shell
ghe-webhook-logs --global
```

### 集群

#### ghe-cluster-status

此实用程序可用于管理分配的 {% data variables.product.prodname_pages %} 服务器。

```shell
$ ghe-cluster-status
```

#### ghe-cluster-support-bundle

此实用程序创建的支持包 tarball 包含采用 Geo-replication 或集群配置的各个节点中的重要日志。

默认情况下，此命令会在 */tmp* 中创建 tarball，但为了便于通过 SSH 进行传输，您也可以通过 `cat` 将打包文件创建到 `STDOUT` 中。 在 Web UI 未响应或从 */setup/support* 下载支持包失败的情况下，您可以使用此方法。 如果要生成包含旧日志的*扩展*包，则必须使用此命令。 您还可以使用此命令将集群支持包直接上传到 {% data variables.product.prodname_enterprise %} Support。

要创建标准捆绑包：
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

要创建扩展捆绑包：
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

要将捆绑包发送至 {% data variables.contact.github_support %}：
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -u'
```

要将捆绑包发送至 {% data variables.contact.github_support %} 并关联捆绑包与事件单：
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -t <em>ticket-id</em>'
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
#### ghe-cluster-failover

Fail over from active cluster nodes to passive cluster nodes. For more information, see "[Initiating a failover to your replica cluster](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)."

```shell
ghe-cluster-failover
```
{% endif %}

#### ghe-dpages

此实用程序可用于管理分配的 {% data variables.product.prodname_pages %} 服务器。

```shell
ghe-dpages
```

要显示仓库位置和健康状态摘要：
```shell
ghe-dpages status
```

要在撤出集群节点之前撤出 {% data variables.product.prodname_pages %} 存储服务：
``` shell
ghe-dpages evacuate pages-server-<uuid>
```

#### ghe-spokes

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

``` shell
ghe-spokes server evacuate git-server-<uuid>
```

#### ghe-storage

此实用程序允许您在撤出集群节点之前撤出所有存储服务。

``` shell
ghe-storage evacuate storage-server-<uuid>
```

### Git

#### ghe-btop

当前 Git 操作的类 `top` 接口。

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-repo

此实用程序允许您切换到仓库的目录并以 `git` 用户身份打开交互式 shell。 您可以通过 `git-*` 或 `git-nw-*` 等命令对仓库执行手动检查或维护。

```shell
ghe-repo <em>username</em>/<em>reponame</em>
```

#### ghe-repo-gc

此实用程序会手动重新打包仓库网络，以优化包存储。 如果仓库较大，运行此命令有助于减小其整体大小。 {% data variables.product.prodname_enterprise %} 会在与仓库网络交互的过程中自动运行此命令。

您可以添加可选的 `--prune` 参数来移除不是从分支、标记或其他任何 ref 引用的不可达 Git 对象。 此方法特别适用于立即移除[之前泄露的敏感信息](/enterprise/user/articles/remove-sensitive-data/)。

```shell
ghe-repo-gc <em>username</em>/<em>reponame</em>
```

### 导入和导出

#### ghe-migrator

`ghe-migrator` 属于高保真工具，可帮助用户从一个 GitHub 实例迁移到另一个实例。 您可以整合实例或将组织、用户、团队和仓库从 GitHub.com 移至 {% data variables.product.prodname_enterprise %}。

更多信息请参阅[迁移用户、组织和仓库数据](/enterprise/admin/guides/migrations/)上的指南。

#### git-import-detect

给定一个 URL，检测哪种类型的源控制管理系统位于另一端。 在手动导入过程中，此信息很可能是已知的，但在自动执行的脚本中非常有用。
```shell
git-import-detect
```

#### git-import-hg-raw

此实用程序可将 Mercurial 仓库导入至此 Git 仓库。 更多信息请参阅“[从第三方版本控制系统导入数据](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)。”
```shell
git-import-hg-raw
```

#### git-import-svn-raw

此实用程序可将 Subversion 历史记录和文件数据导入至 Git 分支。 这属于直接复制树，会忽略任何主干或分支差异。 更多信息请参阅“[从第三方版本控制系统导入数据](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)。”
```shell
git-import-svn-raw
```

#### git-import-tfs-raw

此实用程序可从 Team Foundation Version Control 导入。 更多信息请参阅“[从第三方版本控制系统导入数据](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)。”
```shell
git-import-tfs-raw
```

#### git-import-rewrite

此实用程序可重写导入的仓库。 这样，您将有机会重命名作者，对于 Subversion 和 TFS，可基于文件夹生成 Git 分支。 更多信息请参阅“[从第三方版本控制系统导入数据](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)。”
```shell
git-import-rewrite
```

### 支持

#### ghe-diagnostics

此实用程序会执行各项检查并收集关于安装的信息，您可以将此类信息发送给支持团队，以帮助诊断您遇到的问题。

目前，此实用程序的输出与下载 {% data variables.enterprise.management_console %} 中的诊断信息类似，但会逐渐增加一些 Web UI 中未提供的其他改进。 更多信息请参阅“[创建和共享诊断文件](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)”。

```shell
ghe-diagnostics
```

#### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}
此实用程序会创建一个支持包 tarball，其中包含实例中的重要日志。

默认情况下，此命令会在 */tmp* 中创建 tarball，但为了便于通过 SSH 进行传输，您也可以通过 `cat` 将打包文件创建到 `STDOUT` 中。 在 Web UI 未响应或从 */setup/support* 下载支持包失败的情况下，您可以使用此方法。 如果要生成包含旧日志的*扩展*包，则必须使用此命令。 您还可以使用此命令将支持包直接上传到 {% data variables.product.prodname_enterprise %} Support。

要创建标准捆绑包：
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
```

要创建扩展捆绑包：
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

要将捆绑包发送至 {% data variables.contact.github_support %}：
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
```

要将捆绑包发送至 {% data variables.contact.github_support %} 并关联捆绑包与事件单：

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -t <em>ticket-id</em>'
```

#### ghe-support-upload

此实用程序会将您的设备中的信息发送到 {% data variables.product.prodname_enterprise %} Support。 您可以指定本地文件，或通过 `STDIN` 提供最大 100MB 的数据流。 可以选择将上传的数据与支持事件单相关联。

要将文件发送至 {% data variables.contact.github_support %} 并关联文件与事件单：
```shell
ghe-support-upload -f <em>path/to/your/file</em> -t <em>ticket-id</em>
```

要通过 `STDIN` 上传数据并关联数据与事件单：
```shell
<em>ghe-repl-status -vv</em> | ghe-support-upload -t <em>ticket-id</em> -d "<em>Verbose Replication Status</em>"
```

在本例中，`ghe-repl-status -vv` 会发送副本设备中的 verbose 状态信息。 您应将 `ghe-repl-status -vv` 替换为要传输到 `STDIN` 的特定数据，并将 `Verbose Replication Status` 替换为数据的简单说明。 {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

### 升级 {% data variables.product.prodname_ghe_server %}

#### ghe-upgrade

此实用程序会安装或验证升级包。 如果升级失败或中断，您还可以使用此实用程序回滚补丁版本。 更多信息请参阅“[升级 {% data variables.product.prodname_ghe_server %}”](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)。

要验证升级包：
```shell
ghe-upgrade --verify <em>UPGRADE-PACKAGE-FILENAME</em>
```

要安装升级包：
```shell
ghe-upgrade <em>UPGRADE-PACKAGE-FILENAME</em>
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

#### ghe-upgrade-scheduler

此实用程序可以管理已排定的升级包安装。 您可以显示、新建或移除已排定的安装。 您必须使用 cron 表达式创建日程。 更多信息请参阅 [Cron 维基百科词条](https://en.wikipedia.org/wiki/Cron#Overview)。

要安排新的包安装：
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" <em>UPGRADE-PACKAGE-FILENAME</em>
```

要显示已安排的包安装：
```shell
$ ghe-upgrade-scheduler -s <em>UPGRADE PACKAGE FILENAME</em>
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s <em>UPGRADE-PACKAGE-FILENAME</em> > /data/user/common/<em>UPGRADE-PACKAGE-FILENAME</em>.log 2>&1
```

要删除已安排的包安装：
```shell
$ ghe-upgrade-scheduler -r <em>UPGRADE PACKAGE FILENAME</em>
```

#### ghe-update-check

此实用程序将检查 {% data variables.product.prodname_enterprise %} 是否有新的补丁版本可用。 如果有新的补丁版本，并且实例中有可用空间，系统将下载此包。 默认情况下，包会保存到 */var/lib/ghe-updates*。 管理员随后可[执行升级](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/)。

包含下载状态的文件位于 */var/lib/ghe-updates/ghe-update-check.status*。

要查看最新的 {% data variables.product.prodname_enterprise %} 版本，请使用 `-i` 开关。

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-update-check'
```

### 用户管理

#### ghe-license-usage

此实用程序可按 JSON 格式导出安装用户列表。 如果您的实例连接至 {% data variables.product.prodname_ghe_cloud %}，{% data variables.product.prodname_ghe_server %} 将使用此信息向 {% data variables.product.prodname_ghe_cloud %} 报告许可信息。 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接至 {% data variables.product.prodname_ghe_cloud %} ](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)。”

默认情况下，生成的 JSON 文件中的用户列表为加密格式。 使用 `-h` 标志可获取更多选项。

```shell
ghe-license-usage
```

#### ghe-org-membership-update

此实用程序将对您的实例中的所有成员强制实施默认的组织成员关系可见性设置。 For more information, see "[Configuring visibility for organization membership](/enterprise/{{ currentVersion }}/admin/guides/user-management/configuring-visibility-for-organization-membership)." Setting options are `public` or `private`.

```shell
ghe-org-membership-update --visibility=<em>SETTING</em>
```

#### ghe-user-csv

此实用程序可将所有安装用户列表导出为 CSV 格式。 CSV 文件包含电子邮件地址、用户所属类型（例如管理员、用户）、用户拥有的仓库数量、SSH 密钥数量、组织成员关系数量、上次登录的 IP 地址等。 使用 `-h` 标志可获取更多选项。

```shell
ghe-user-csv -o > users.csv
```

#### ghe-user-demote

此实用程序会将指定用户从管理员状态降级为普通用户状态。 建议使用 Web UI 执行此操作，但会在 `ghe-user-promote` 实用程序运行出错并且需要再次通过 CLI 将用户降级的情况下提供此实用程序。

```shell
ghe-user-demote <em>some-user-name</em>
```

#### ghe-user-promote

此实用程序会将指定用户帐户升级为站点管理员。

```shell
ghe-user-promote <em>some-user-name</em>
```

#### ghe-user-suspend

此实用程序会挂起指定用户，避免他们登录、推送或从仓库拉取。

```shell
ghe-user-suspend <em>some-user-name</em>
```

#### ghe-user-unsuspend

此实用程序会取消挂起指定用户，向他们授予登录、推送以及从仓库拉取的权限。

```shell
ghe-user-unsuspend <em>some-user-name</em>
```
