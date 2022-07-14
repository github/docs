---
title: 搜索企业的审核日志
intro: 您可以搜索企业中已审核操作的广泛列表。
shortTitle: 搜索审核日志
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
miniTocMaxHeadingLevel: 3
---

## 关于搜索企业审核日志

通过使用 **Filters（筛选器）**下拉列表或键入搜索查询，可以直接从用户界面搜索企业审核日志。

  ![搜索查询](/assets/images/enterprise/site-admin-settings/search-query.png)

有关查看企业审核日志的更多信息，请参阅“[访问企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”。

还可以使用 API 检索审核日志事件。 更多信息请参阅“[使用企业的审核日志 API](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)”。

请注意，无法使用文本搜索条目。 但是，您可以使用各种过滤器构建搜索查询。 查询日志时使用的许多运算符，如 `-`、`>` 或 `<`，与在 {% data variables.product.product_name %} 上搜索时的格式相同。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

{% note %}

**注**：{% data reusables.audit_log.retention-periods %}

{% endnote %}

## 搜索查询筛选器

|   过滤，过滤器 | 描述                                                                                                       |
| --------:| -------------------------------------------------------------------------------------------------------- |
|   `昨日活动` | 过去一天创建的所有操作。                                                                                             |
| `企业帐户管理` | `business` 类别中的所有操作。                                                                                     |
| `组织成员资格` | 邀请新用户加入组织时的所有操作。                                                                                         |
|   `团队管理` | 与团队管理相关的所有操作。<br/>- 在团队中添加或删除用户帐户或存储库时<br/>- 当团队维护者被提升或降级时<br/>- 当团队被删除时               |
|  `存储库管理` | 存储库管理的所有操作。<br/>- 创建或删除存储库的时间<br/>- 更改存储库可见性<br/>- 在存储库中添加或删除团队的时间{% ifversion ghec %}
|   `帐单更新` | 有关企业如何支付 {% data variables.product.prodname_dotcom %} 以及帐单电子邮件地址更改时的所有操作。{% endif %}
|   `挂钩活动` | Web 挂钩和预接收挂钩的所有操作。                                                                                       |
|   `安全管理` | 有关 SSH 密钥、部署密钥、安全密钥、2FA 和 SAML 单点登录凭据授权以及存储库漏洞警报的所有操作。                                                   |

## 搜索查询语法

您可以从一个或多个 `key:value` 对（由 AND/OR 逻辑运算符分隔）编写搜索查询。 例如，要查看自 2017 年初开始影响仓库 `octocat/Spoon-Knife` 的所有操作：

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

可在搜索查询中使用的 `key:value` 对包括：

|              键 | 值                                                                         |
| --------------:| ------------------------------------------------------------------------- |
|     `actor_id` | 发起操作的用户帐户的 ID                                                             |
|        `actor` | 发起操作的用户帐户的名称                                                              |
| `oauth_app_id` | 与操作相关联的 OAuth 应用程序的 ID                                                    |
|       `action` | 已审核操作的名称                                                                  |
|      `user_id` | 受操作影响的用户的 ID                                                              |
|           `用户` | 受操作影响的用户的名称                                                               |
|      `repo_id` | 受操作影响的仓库的 ID（若适用）                                                         |
|         `repo` | 受操作影响的仓库的名称（若适用）                                                          |
|     `actor_ip` | 发起操作的 IP 地址                                                               |
|      `created` | 操作发生的时间{% ifversion ghes %}。 如果从站点管理仪表板查询审核日志，请改用 `created_at`{% endif %}
|         `from` | 发起操作的视图                                                                   |
|         `note` | 事件特定的其他信息（采用纯文本或 JSON 格式）                                                 |
|          `org` | 受操作影响的组织的名称（若适用）                                                          |
|       `org_id` | 受操作影响的组织的 ID（若适用）                                                         |
|     `business` | 受操作影响的企业的名称（若适用）                                                          |
|  `business_id` | 受操作影响的企业的 ID（若适用）                                                         |

若要查看按类别分组的操作，还可以将操作限定符用作 `key:value` 对。 更多信息请参阅“[根据执行的操作进行搜索](#search-based-on-the-action-performed)”。

有关企业审核日志中操作的完整列表，请参阅“[企业的审核日志操作](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”。

## 搜索审核日志

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### 基于执行的操作搜索

要搜索特定事件，请在查询中使用 `action` 限定符。 例如：

  * `action:team` 会找到团队类别中的所有事件。
  * `-action:hook` 会排除 web 挂钩类别中的所有事件。

每个类别都有一组可进行过滤的关联操作。 例如：

  * `action:team.create` 会找到团队创建处的所有事件。
  * `-action:hook.events_changed` 会排除 web 挂钩上事件已经改动的所有事件。

可在企业审核日志中找到的操作分为以下几类：

{% data reusables.audit_log.audit-log-action-categories %}
### 基于操作时间搜索

使用 `created` 限定符在审核日志中根据事件发生的时间过滤事件。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

例如：

  * `created:2014-07-08` 会找到在 2014 年 7 月 8 日发生的所有事件。
  * `created:>=2014-07-08` 查找在 2014 年 7 月 8 日或之后发生的所有事件。
  * `created:<=2014-07-08` 查找在 2014 年 7 月 8 日或之前发生的所有事件。
  * `created:2014-07-01..2014-07-31` 会找到在 2014 年 7 月发生的所有事件。

### 基于位置搜索

使用限定符 `country`，您可以在审核日志中根据发生事件的国家/地区过滤事件。 您可以使用国家/地区的两字母短代码或完整名称。 名称中包含空格的国家/地区需要用引号括起来。 例如：

  * `country:de` 会找到在德国发生的所有事件。
  * `country:Mexico` 会找到在墨西哥发生的所有事件。
  * `country:"United States"` 会找到在美国发生的所有事件。
