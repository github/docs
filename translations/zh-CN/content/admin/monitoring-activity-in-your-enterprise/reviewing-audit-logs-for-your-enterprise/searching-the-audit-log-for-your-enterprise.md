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

You can search your enterprise audit log directly from the user interface by using the **Filters** dropdown, or by typing a search query.

  ![搜索查询](/assets/images/enterprise/site-admin-settings/search-query.png)

For more information about viewing your enterprise audit log, see "[Accessing the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."

You can also use the API to retrieve audit log events. 更多信息请参阅“[使用企业的审核日志 API](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)”。

请注意，无法使用文本搜索条目。 但是，您可以使用各种过滤器构建搜索查询。 查询日志时使用的许多运算符，如 `-`、`>` 或 `<`，与在 {% data variables.product.product_name %} 上搜索时的格式相同。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

{% note %}

**注**：{% data reusables.audit_log.retention-periods %}

{% endnote %}

## Search query filters

|                          过滤，过滤器 | 描述                                                                                                                                                                                                                                    |
| -------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          `Yesterday's activity` | All actions created in the past day.                                                                                                                                                                                                  |
| `Enterprise account management` | All actions in the `business` category.                                                                                                                                                                                               |
|                        `组织成员资格` | All actions for when a new user was invited to join an organization.                                                                                                                                                                  |
|               `Team management` | All actions related to team management.<br/>- When a user account or repository was added or removed from a team<br/>- When a team maintainer was promoted or demoted<br/>-  When a team was deleted                |
|         `Repository management` | All actions for repository management.<br/>- When a repository was created or deleted<br/>- When the repository visibility was changed<br/>- When a team was added or removed from a repository{% ifversion ghec %}
|               `Billing updates` | All actions concerning how your enterprise pays for {% data variables.product.prodname_dotcom %} and for when your billing email address was changed.{% endif %}
|                 `Hook activity` | All actions for webhooks and pre-receive hooks.                                                                                                                                                                                       |
|           `Security management` | All actions concerning SSH keys, deploy keys, security keys, 2FA, and SAML single sign-on credential authorization, and vulnerability alerts for repositories.                                                                        |

## 搜索查询语法

You can compose a search query from one or more `key:value` pairs, separated by AND/OR logical operators. 例如，要查看自 2017 年初开始影响仓库 `octocat/Spoon-Knife` 的所有操作：

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

The `key:value` pairs that can be used in a search query are:

|              键 | 值                                                                                                                                                   |
| --------------:| --------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `actor_id` | 发起操作的用户帐户的 ID                                                                                                                                       |
|        `actor` | 发起操作的用户帐户的名称                                                                                                                                        |
| `oauth_app_id` | 与操作相关联的 OAuth 应用程序的 ID                                                                                                                              |
|       `action` | 已审核操作的名称                                                                                                                                            |
|      `user_id` | 受操作影响的用户的 ID                                                                                                                                        |
|           `用户` | 受操作影响的用户的名称                                                                                                                                         |
|      `repo_id` | 受操作影响的仓库的 ID（若适用）                                                                                                                                   |
|         `repo` | 受操作影响的仓库的名称（若适用）                                                                                                                                    |
|     `actor_ip` | 发起操作的 IP 地址                                                                                                                                         |
|      `created` | Time at which the action occurred{% ifversion ghes %}. If querying the audit log from the site admin dashboard, use `created_at` instead{% endif %}
|         `from` | 发起操作的视图                                                                                                                                             |
|         `note` | 事件特定的其他信息（采用纯文本或 JSON 格式）                                                                                                                           |
|          `org` | 受操作影响的组织的名称（若适用）                                                                                                                                    |
|       `org_id` | 受操作影响的组织的 ID（若适用）                                                                                                                                   |
|     `business` | Name of the enterprise affected by the action (if applicable)                                                                                       |
|  `business_id` | ID of the enterprise affected by the action (if applicable)                                                                                         |

To see actions grouped by category, you can also use the action qualifier as a `key:value` pair. For more information, see "[Search based on the action performed](#search-based-on-the-action-performed)."

For a full list of actions in your enterprise audit log, see "[Audit log actions for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."

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

Actions that can be found in your enterprise audit log are grouped within the following categories:

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

使用限定符 `country`，您可以在审核日志中根据发生事件的国家/地区过滤事件。 You can use a country's two-letter short code or full name. Countries with spaces in their name will need to be wrapped in quotation marks. 例如：

  * `country:de` 会找到在德国发生的所有事件。
  * `country:Mexico` 会找到在墨西哥发生的所有事件。
  * `country:"United States"` 会找到在美国发生的所有事件。
