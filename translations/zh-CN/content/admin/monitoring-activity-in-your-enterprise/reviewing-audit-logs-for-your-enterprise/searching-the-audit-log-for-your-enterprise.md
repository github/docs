---
title: 搜索企业的审核日志
intro: 可以在企业中搜索已审核操作的广泛列表。
shortTitle: Search audit logs
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
ms.openlocfilehash: 12bc44b7d81df55366f8b839261cf8899a53729d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183994'
---
## 关于搜索企业审核日志

通过使用“筛选器”下拉菜单或键入搜索查询来直接从用户界面搜索企业审核日志。

  ![搜索查询](/assets/images/enterprise/site-admin-settings/search-query.png)

有关查看企业审核日志的详细信息，请参阅“[访问企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”。 

{% data reusables.audit_log.git-events-not-in-search-results %}

也可以使用 API 检索审核日志事件。 有关详细信息，请参阅“[使用你企业的审核日志 API](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)”。

无法使用文本搜索条目。 但是，您可以使用各种过滤器构建搜索查询。 查询日志时使用的许多运算符，如 `-`、`>` 或 `<`，与在 {% data variables.product.product_name %} 上搜索时的格式相同。 有关详细信息，请参阅“[在 {% data variables.product.prodname_dotcom %} 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。

{% note %}

注意：{% data reusables.audit_log.retention-periods %}

{% endnote %}

## 搜索查询筛选器

筛选器| 说明
--------------:| -----------
`Yesterday's activity` | 在过去一天中创建的所有操作。
`Enterprise account management` | `business` 类别中的所有操作。
`Organization membership` | 邀请新用户加入组织时的所有操作。
`Team management` | 与团队管理相关的所有操作。<br/>- 从团队添加或删除用户帐户或存储库时<br/>- 当团队维护者被提升或降级时<br/>- 删除团队时
`Repository management` | 用于存储库管理的所有操作。<br/>- 创建或删除存储库时<br/>- 更改存储库可见性时<br/>- 从存储库添加或删除团队时{% ifversion ghec %}
`Billing updates` | 有关企业如何支付 {% data variables.product.prodname_dotcom %} 以及计费电子邮件地址更改时如何付费的所有操作。{% endif %}
`Hook activity` | 用于 Webhook 和预接收挂钩的所有操作。
`Security management` | 有关 SSH 密钥、部署密钥、安全密钥、2FA 和 SAML 单一登录凭据授权以及存储库漏洞警报的所有操作。

## 搜索查询语法

你可以用一个或多个 `key:value` 对（以 AND/OR 逻辑运算符分隔）构成一个搜索查询。 例如，要查看自 2017 年初开始影响存储库 `octocat/Spoon-Knife` 的所有操作：

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

可以在搜索查询中使用的 `key:value` 对包括：

密钥            | 值
--------------:| --------------------------------------------------------
`actor_id`     | 发起操作的用户帐户的 ID
`actor`        | 发起操作的用户帐户的名称
`oauth_app_id` | 与操作相关联的 OAuth 应用程序的 ID
`action`       | 已审核操作的名称
`user_id`      | 受操作影响的用户的 ID
`user`         | 受操作影响的用户的名称
`repo_id`      | 受操作影响的仓库的 ID（若适用）
`repo`         | 受操作影响的仓库的名称（若适用）
`actor_ip`     | 发起操作的 IP 地址
`created`      | 发生操作的时间 {% ifversion ghes %}。 如果从站点管理员仪表板查询审核日志，请改用 `created_at`{% endif %}
`from`         | 发起操作的视图
`note`         | 事件特定的其他信息（采用纯文本或 JSON 格式）
`org`          | 受操作影响的组织的名称（若适用）
`org_id`       | 受操作影响的组织的 ID（若适用）
`business` | 受操作影响的企业名（若适用）
`business_id` | 受操作影响的企业 ID（若适用）
{%- ifversion token-audit-log %} `hashed_token` | 用于对操作进行身份验证的令牌（如果适用，请参阅“[标识由访问令牌执行的审核日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)”）{%- endif %}

要查看按类别分组的操作，还可以将操作限定符用作 `key:value` 对。 有关详细信息，请参阅“[基于执行的操作进行搜索](#search-based-on-the-action-performed)”。

有关企业审核日志中的操作的完整列表，请参阅“[企业的审核日志操作](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”。

## 搜索审核日志

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### 基于执行的操作搜索

要搜索特定事件，请在查询中使用 `action` 限定符。 例如：

  * `action:team` 查找分组在团队类别中的所有事件。
  * `-action:hook` 排除 Webhook 类别中的所有事件。

每个类别都有一组可进行过滤的关联操作。 例如：

  * `action:team.create` 查找创建团队的所有事件。
  * `-action:hook.events_changed` 排除已更改 Webhook 上事件的所有事件。

可在企业审核日志中找到的操作按以下类别分组：

{% data reusables.audit_log.audit-log-action-categories %}

### 基于操作时间搜索

使用 `created` 限定符可以根据事件发生的时间筛选审核日志中的事件。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

例如：

  * `created:2014-07-08` 查找 2014 年 7 月 8 日发生的所有事件。
  * `created:>=2014-07-08` 查找 2014 年 7 月 8 日当天或之后发生的所有事件。
  * `created:<=2014-07-08` 查找 2014 年 7 月 8 日当天或之前发生的所有事件。
  * `created:2014-07-01..2014-07-31` 查找 2014 年 7 月发生的所有事件。

### 基于位置搜索

使用限定符 `country`，可以根据原始国家/地区筛选审核日志中的事件。 你可以使用国家/地区的两字母短代码或完整名称。 名称中包含空格的国家/地区需要加引号。 例如：

  * `country:de` 查找在德国发生的所有事件。
  * `country:Mexico` 查找在墨西哥发生的所有事件。
  * `country:"United States"` 查找在美国发生的所有事件。

{% ifversion token-audit-log %}
### 根据执行操作的令牌进行搜索

使用 `hashed_token` 限定符根据执行操作的令牌进行搜索。 必须先生成 SHA-256 哈希，然后才能搜索令牌。 有关详细信息，请参阅“[标识由访问令牌执行的审核日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)”。
{% endif %}
