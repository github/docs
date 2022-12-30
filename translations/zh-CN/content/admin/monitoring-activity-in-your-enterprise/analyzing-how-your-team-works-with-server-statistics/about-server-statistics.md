---
title: 关于服务器统计信息
intro: '你可以使用 {% data variables.product.prodname_server_statistics %} 分析 {% data variables.product.prodname_ghe_server %} 中你自己的聚合数据，并帮助我们改进 {% data variables.product.company_short %} 产品。'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
ms.openlocfilehash: 3d17df54cd5dcf9ad102ab5079794a9bcb3e664b
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185183'
---
## 关于 {% data variables.product.prodname_server_statistics %} 的优势

{% data variables.product.prodname_server_statistics %} 可以帮助你预测组织的需求，了解团队的工作方式，并显示从 {% data variables.product.prodname_ghe_server %} 获取的值。

启用后，{% data variables.product.prodname_server_statistics %} 会收集有关随时间推移在实例上使用多少特定功能的聚合数据。 与其他仅返回前一天的数据的[管理员统计信息 API](/rest/reference/enterprise-admin#admin-stats) 终结点不同，{% data variables.product.prodname_server_statistics %} 可提供自启用该功能以来收集的所有 {% data variables.product.prodname_server_statistics %} 指标的历史数据。 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_server_statistics %}](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)”。

启用 {% data variables.product.prodname_server_statistics %} 时，你将帮助构建更好的 {% data variables.product.prodname_dotcom %}。 你将提供的聚合数据让我们能够深入了解 {% data variables.product.prodname_dotcom %} 如何为我们的客户增加价值。 此信息使 {% data variables.product.company_short %} 能够做出更好、更明智的产品决策，最终使你受益。

## 关于数据安全性

我们尊重你的数据。 除非你先授予我们权限，否则我们永远不会从 {% data variables.location.product_location %} 传输数据。

我们不会收集任何个人数据。 我们也不会收集任何 {% data variables.product.company_short %} 内容，例如代码、问题、评论或拉取请求内容。

只有 {% data variables.product.prodname_ghe_cloud %} 上连接的企业帐户或组织的所有者才能访问数据。

我们仅在存储库、问题、拉取请求和其他功能上收集某些聚合指标。 有关收集的聚合指标列表，请参阅“[收集的 {% data variables.product.prodname_server_statistics %} 数据](#server-statistics-data-collected)”。 

我们可能会在 {% data variables.product.prodname_ghe_server %} 的未来功能版本中更新收集的指标，届时将在 [{% data variables.product.prodname_ghe_server %} 发行说明](/admin/release-notes)中进行介绍。 此外，我们会将所有指标更新都更新到本文中。

若要更好地了解如何存储和保护 {% data variables.product.prodname_server_statistics %} 数据，请参阅“[GitHub 安全性](https://github.com/security)”。

### 关于数据保留和删除

只要 {% data variables.product.prodname_ghe_server %} 许可证处于活动状态，并且启用了 {% data variables.product.prodname_server_statistics %} 功能，{% data variables.product.company_short %} 就会收集 {% data variables.product.prodname_server_statistics %} 数据。

如果要删除数据，可以联系 GitHub 支持、{% data variables.product.prodname_dotcom %} 客户代表或客户成功经理。  通常，我们在隐私声明中指定的时间范围内删除数据。 有关详细信息，请参阅 {% data variables.product.prodname_dotcom_the_website %} 文档中的 [{% data variables.product.company_short %} 隐私声明](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data)。

### 关于数据可移植性

作为 {% data variables.product.prodname_ghe_cloud %} 上的组织所有者或企业所有者，你可以通过导出 CSV 或 JSON 文件中的数据或通过 {% data variables.product.prodname_server_statistics %} REST API 来访问 {% data variables.product.prodname_server_statistics %} 数据。 有关详细信息，请参阅“[使用 REST API 请求 {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)”或“[导出 {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics)”。

## 关于禁用数据收集

可以随时禁用 {% data variables.product.prodname_server_statistics %} 功能。 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_server_statistics %}](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)”。

## 收集的 {% data variables.product.prodname_server_statistics %} 数据

启用 {% data variables.product.prodname_server_statistics %} 后，将通过在 {% data variables.location.product_location %} 上运行的每日作业收集指标。 聚合指标存储在 {% data variables.product.prodname_ghe_cloud %} 上的组织或企业帐户上，不会存储在 {% data variables.location.product_location %} 上。

将每天收集和传输以下聚合指标，并显示当天的总计数。

CSV 列 | 名称 | 说明 |
---------- | ---- | ----------- |
A   | `github_connect.features_enabled` | 为实例启用的 {% data variables.product.prodname_github_connect %} 功能数组（请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features)”） |
B   | `host_name` | 实例的主机名 |
C   | `dormant_users.dormancy_threshold` | 用户必须多久不活动才被视为休眠 |
D   | `dormant_users.total_dormant_users` | 休眠用户帐户数 |
E   | `ghes_version` | 实例正在运行的 {% data variables.product.product_name %} 的版本 |
F   | `server_id` | 为实例生成的 UUID
G   | `collection_date` | 收集指标的日期 |
H   | `schema_version` | 用于存储此数据的数据库架构的版本 |
I   | `ghe_stats.comments.total_commit_comments` | 提交评论数 |
J   | `ghe_stats.comments.total_gist_comments` | Gist 评论数 |
K   | `ghe_stats.comments.total_issue_comments` | 问题评论数 | 
L   | `ghe_stats.comments.total_pull_request_comments` | 拉取请求评论数 |
M   | `ghe_stats.gists.total_gists` | Gist 数量（机密和公共） |
N   | `ghe_stats.gists.private_gists` | 机密 Gist 数量 |
O   | `ghe_stats.gists.public_gists` | 公共 Gist 数量 |
P   | `ghe_stats.hooks.total_hooks` | 预接收挂钩数量（活动和非活动） |
Q   | `ghe_stats.hooks.active_hooks` | 活动预接收挂钩数量 |
R   | `ghe_stats.hooks.inactive_hooks` | 非活动预接收挂钩数量 |
S   | `ghe_stats.issues.total_issues` | 问题数量（未结和已完结） |
T   | `ghe_stats.issues.open_issues` | 未结问题数量 |
U   | `ghe_stats.issues.closed_issues` | 已完结问题数量 |
V   | `ghe_stats.milestones.total_milestones` | 里程碑数（未结和已完结） |
W   | `ghe_stats.milestones.open_milestones` | 未结里程碑数 |
X   | `ghe_stats.milestones.closed_milestones` | 已完结里程碑数 |
Y   | `ghe_stats.orgs.total_orgs` | 组织数（启用和禁用） |
Z   | `ghe_stats.orgs.disabled_orgs` | 禁用组织数 |
AA | `ghe_stats.orgs.total_teams` | 团队数 |
AB | `ghe_stats.orgs.total_team_members` | 团队成员数 |
AC | `ghe_stats.pages.total_pages` | {% data variables.product.prodname_pages %} 站点数 |
AD | `ghe_stats.pulls.total_pulls` | 拉取请求数 |
AE | `ghe_stats.pulls.merged_pulls` | 合并拉取请求数 |
AF | `ghe_stats.pulls.mergeable_pulls` | 当前可合并的拉取请求数 |
AG | `ghe_stats.pulls.unmergeable_pulls` | 当前不可合并的拉取请求数 |
AH | `ghe_stats.repos.total_repos` | 存储库数（上游存储库和分支） |
AI | `ghe_stats.repos.root_repos` | 上游存储库数 |
AJ | `ghe_stats.repos.fork_repos` | 分支数 |
AK | `ghe_stats.repos.org_repos` | 组织拥有的存储库数量 |
AL | `ghe_stats.repos.total_pushes` | 推送到存储库的次数 |
AM | `ghe_stats.repos.total_wikis` | wiki 数 |
AN | `ghe_stats.users.total_users` | 用户帐户数 |
AO | `ghe_stats.users.admin_users` | 站点管理员用户帐户数 |
AP | `ghe_stats.users.suspended_users` | 暂停的用户帐户数 |

## {% data variables.product.prodname_server_statistics %} 数据示例

若要查看 {% data variables.product.prodname_server_statistics %} CSV 导出中包含的标题示例，请下载 [{% data variables.product.prodname_server_statistics %} CSV 示例](/assets/server-statistics-csv-example.csv)。

若要查看 {% data variables.product.prodname_server_statistics %} API 的响应有效负载示例，请参阅“[使用 REST API 请求 {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)”。
