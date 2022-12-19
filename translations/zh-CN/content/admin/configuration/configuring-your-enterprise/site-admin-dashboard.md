---
title: 站点管理员仪表板
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
  - /admin/configuration/site-admin-dashboard
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: aacf1705ce0f520dc740bc3bc19c7e280f30abfd
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '146332062'
---
要访问仪表板，请在任意页面右上角单击 {% octicon "rocket" aria-label="The rocket ship" %}。
![用于访问站点管理员设置的火箭图标](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% ifversion ghes or ghae %}

## <a name="search"></a>搜索

请参阅站点管理员仪表板的此部分搜索用户和存储库，并查询[审核日志](#audit-log)。

{% else %}

## <a name="license-info--search"></a>许可证信息和搜索

请参照站点管理员仪表板的此部分检查当前的 {% data variables.product.prodname_enterprise %} 许可；搜索用户和存储库；查询[审核日志](#audit-log)。

{% endif %} {% ifversion ghes %}
## <a name="-data-variablesenterprisemanagement_console-"></a>{% data variables.enterprise.management_console %}

您可以在此处启动 {% data variables.enterprise.management_console %}，以管理域、身份验证和 SSL 等虚拟设备设置。
{% endif %}
## <a name="explore"></a>探究

将按每天、每周和每月的时间跨度为存储库和开发者计算 GitHub [趋势页][]中的数据。 在“浏览”部分中，可以看到此数据的最后缓存时间，并将新的趋势计算作业加入队列。

  [趋势页]: https://github.com/blog/1585-explore-what-is-trending-on-github

## <a name="audit-log"></a>审核日志

{% data variables.product.product_name %} 会实时记录你可以查询的审核操作。

默认情况下，审核日志会按时间倒序显示所有已审核操作的列表。 要对此列表进行筛选，可以在“查询”文本框中输入键值对，然后单击“搜索”，如“[搜索企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)”所述 。

有关审核日志记录的详细信息，请参阅“[关于企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)”。 有关受审核操作的完整列表，请参阅“[审核企业的日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”。

## <a name="reports"></a>报表

如果需要获取关于 {% data variables.product.product_location %} 中用户、组织和存储库的信息，正常情况下，可通过 [GitHub API](/rest) 提取 JSON 数据。 但遗憾的是，此 API 可能无法提供您需要的所有数据，并且需要一定的专业技术知识才能使用。 站点管理员仪表板提供“报表”部分来代替，使你可以轻松下载 CSV 报告，其中包含大部分你可能需要的用于用户、组织和存储库的信息。

具体来讲，您可以下载列出以下信息的 CSV 报告：

- 所有用户
- 所有活跃用户
- 所有[休眠用户](/admin/user-management/managing-dormant-users)
- 曾被挂起的所有用户
- 所有组织
- 所有仓库

您还可以通过向站点管理员帐户进行标准 HTTP 身份验证，以编程方式访问这些报告。 必须使用具有 `site_admin` 作用域的个人访问令牌。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

下面是如何使用 cURL 下载“所有用户”报告的示例：

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

若要以编程方式访问其他报告，请将 `all_users` 替换为 `active_users`、`dormant_users`、`suspended_users`、`all_organizations` 或 `all_repositories`。

{% note %}

注意：如果没有可用的缓存报告，最初的 `curl` 请求会返回 202 HTTP 响应；将在后台生成报告。 您可以发送另一个请求来下载报告。 可以使用作用域为 `site_admin` 的密码或 OAuth 令牌代替密码。

{% endnote %}

### <a name="user-reports"></a>用户报告

密钥               | 说明
-----------------:| ------------------------------------------------------------
`created_at`      | 用户帐户的创建时间（ISO 8601 时间戳形式）
`id`              | 用户或组织的帐户 ID
`login`           | 帐户的登录名称
`email`           | 帐户的主电子邮件地址
`role`            | 帐户属于管理员还是普通用户
`suspended?`      | 帐户是否已挂起
`last_logged_ip`  | 最近登录帐户的 IP 地址
`repos`           | 帐户拥有的仓库数量
`ssh_keys`        | 注册到帐户的 SSH 密钥数量
`org_memberships` | 帐户所属的组织数量
`dormant?`        | 帐户是否休眠
`last_active`     | 帐户上次活动时间（ISO 8601 时间戳形式）
`raw_login`       | 原始登录信息（JSON 格式）
`2fa_enabled?`    | 用户是否已启用双重身份验证

### <a name="organization-reports"></a>组织报告

密钥            | 说明
--------------:| ------------------------------------
`id`           | 组织 ID
`created_at`   | 组织创建时间
`login`        | 组织的登录名称
`email`        | 组织的主电子邮件地址
`owners`       | 组织所有者数量
`members`      | 组织成员数量
`teams`        | 组织团队数量
`repos`        | 组织仓库数量
`2fa_required?`| 组织是否需要双重身份验证

### <a name="repository-reports"></a>仓库报告

密钥             | 说明
---------------:| ------------------------------------------------------------
`created_at`    | 仓库创建时间
`owner_id`      | 仓库所有者的 ID
`owner_type`    | 仓库由用户所有还是由组织所有
`owner_name`    | 仓库所有者的名称
`id`            | 仓库 ID
`name`          | 存储库名称
`visibility`    | 仓库是公共还是私有
`readable_size` | 以人类可读格式表示的仓库大小
`raw_size`      | 以数字形式表示的仓库大小
`collaborators` | 仓库协作者数量
`fork?`         | 仓库是否为分叉
`deleted?`      | 仓库是否已删除

{% ifversion ghes %}
## <a name="indexing"></a>索引

GitHub 的[代码搜索][]功能由 [ElasticSearch][] 提供支持。 站点管理员仪表板的这一部分会显示 ElasticSearch 集群的当前状态，并提供多种工具来控制搜索和索引行为。 这些工具分为以下三类。

  [代码搜索]: https://github.com/blog/1381-a-whole-new-code-search
  [ElasticSearch]: http://www.elasticsearch.org/

### <a name="code-search"></a>代码搜索

此类允许您启用或禁用对源代码进行的搜索和索引操作。

### <a name="code-search-index-repair"></a>代码搜索索引修复

此类控制着代码搜索索引的修复方式。 可以

- 启用或禁用索引修复作业
- 开始新的索引修复作业
- 重置所有索引修复状态

{% data variables.product.prodname_enterprise %} 使用修复作业协调搜索索引的状态与数据库中存储的数据（问题、拉取请求、仓库和用户）以及 Git 仓库中存储的数据（源代码）。 发生条件

- 创建新的搜索索引；
- 需要重新填入缺失的数据；或者
- 需要更新旧的搜索数据。

也就是说，修复作业是根据需要启动的，并在后台运行，而不是站点管理员通过任何方式排定的。

此外，修复作业还使用“修复偏移”实现并行化。 偏移是指协调的记录在数据库表中的偏移。 多个后台作业可以基于此偏移同步工作。

进度条会在所有后台工作进程中显示修复作业的当前状态。 此值是修复偏移与数据中最高记录 ID 的百分比差异。 不用担心修复作业完成后在进度条中显示的值：因为它表示的是修复偏移与数据库中最高记录 ID 之差，随着更多的存储库添加到 {% data variables.product.product_location %} 中，此值会减小，即使这些存储库实际上已编制索引。

您可以随时启动新的代码搜索索引修复作业。 在协调搜索索引与数据库和 Git 仓库数据时，它将使用单个 CPU。 为了最大限度地减小对 I/O 性能的影响并减小操作超时的几率，请先尝试在非高峰期运行修复作业。 使用 `top` 等实用程序监视系统的平均负载和 CPU 利用率；如果未发现任何显著的变化，那么在高峰期运行索引修复作业也应当是安全的。

### <a name="issues-index-repair"></a>问题索引修复

这会控制[问题][]索引的修复方式。 可以

  [问题]: https://github.com/blog/831-issues-2-0-the-next-generation

- 启用或禁用索引修复作业
- 开始新的索引修复作业
- 重置所有索引修复状态 {% endif %}
## <a name="reserved-logins"></a>保留的登录名

某些词是保留给内部使用的 {% data variables.product.product_location %}，这意味着这些词不能用作用户名。

例如，保留以下词语，包括：

- `admin`
- `enterprise`
- `login`
- `staff`
- `support`

对于完整列表或保留词，导航到站点管理面板中的“保留的登录名”。

{% ifversion ghas-committers-calculator %}
## <a name="-data-variablesproductprodname_advanced_security--committers"></a>{% data variables.product.prodname_advanced_security %} 提交者

可以查看当前使用 {% data variables.product.prodname_GH_advanced_security %} 席位的活动提交者数量，并且可以计算如果为更多的组织和存储库启用 {% data variables.product.prodname_GH_advanced_security %} 会使用多少额外席位。

在“当前活动提交者计数”下，可以查看启用了 {% data variables.product.prodname_GH_advanced_security %} 的存储库的活动提交者数量。 这是当前正在使用的许可席位数。

在“跨整个实例的最大提交者”下，可以看到企业中所有存储库的活动提交者数。 如果为企业中的每个存储库启用了 {% data variables.product.prodname_GH_advanced_security %}，这是将使用的席位数。

在“计算其他高级提交者”下，可以计算如果为特定组织和存储库启用 {% data variables.product.prodname_GH_advanced_security %} 将使用多少额外席位。 在“组织和存储库”下，输入或粘贴组织和存储库列表，每行有一个组织或存储库。 

```
example-org
octo-org/octo-repo
```

结果是为这些组织和存储库启用 {% data variables.product.prodname_GH_advanced_security %} 时将使用的额外席位数量。

有关 {% data variables.product.prodname_advanced_security %} 计费的详细信息，请参阅“[关于 {% data variables.product.prodname_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”。
{% endif %}

## <a name="enterprise-overview"></a>所有用户

请参阅站点管理员仪表板的此部分以管理组织、人员、策略和设置。

## <a name="repositories"></a>存储库

这是 {% data variables.product.product_location %} 上的存储库列表。 您可以单击仓库名称，然后访问各项功能，对仓库进行管理。

- [阻止对存储库进行强制推送](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [配置 {% data variables.large_files.product_name_long %}](/enterprise/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [存档和取消存档存储库](/enterprise/admin/guides/user-management/archiving-and-unarchiving-repositories/)

## <a name="all-users"></a>所有用户

可以在此查看 {% data variables.product.product_location %} 上的所有用户，并[发起 SSH 密钥审核](/enterprise/admin/guides/user-management/auditing-ssh-keys)。

## <a name="site-admins"></a>站点管理员

可以在此查看 {% data variables.product.product_location %} 上的所有管理员，并[发起 SSH 密钥审核](/enterprise/admin/guides/user-management/auditing-ssh-keys)。

## <a name="dormant-users"></a>休眠用户
{% ifversion ghes %} 在这里，你可以看到并[取消](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) {% data variables.product.product_location %} 上所有非活动用户的访问权限。 以下情况下，用户帐户视为处于非活动状态（“休眠”）：当用户帐户 {% endif %} {% ifversion ghae %} 在这里，你可以查看和暂停 {% data variables.product.product_location %} 上的所有非活动用户。 以下情况下，会认定用户帐户处于非活动状态（“休眠”）：{% endif %}

- 存在时间长于为 {% data variables.product.product_location %} 设置的休眠阈值。
- 在该时间段内没有发生任何活动。
- 不是站点管理员。

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} 有关详细信息，请参阅“[管理休眠用户](/enterprise/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)”。

## <a name="suspended-users"></a>已挂起的用户

可以在此查看 {% data variables.product.product_location %} 上被取消访问权限的所有用户，并[发起 SSH 密钥审核](/enterprise/admin/guides/user-management/auditing-ssh-keys)。
