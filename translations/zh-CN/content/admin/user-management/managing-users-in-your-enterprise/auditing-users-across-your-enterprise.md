---
title: 审核整个企业的用户
intro: 审核日志仪表板向站点管理员显示企业中所有用户和组织在当前月份和前六个月内执行的操作。 审核日志包含操作执行人、操作内容和执行时间等详细信息。
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Organizations
  - Security
  - User account
shortTitle: Audit users
ms.openlocfilehash: 18ea00b69f452ff496670fbd31e41bb8038cc46d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331686'
---
## 访问审核日志

审核日志仪表板让您能够直观地看到企业中的审计数据。

![实例级审核日志仪表板](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}

在地图中，您可以平移和缩放来查看世界范围内的事件。 将鼠标悬停在国家/地区上，可以看到该国家/地区内事件的快速盘点。

## 在企业中搜索事件

审核日志列出了有关企业内所执行操作的以下信息：

* 执行操作的[存储库](#search-based-on-the-repository)
* 执行操作的[用户](#search-based-on-the-user)
* 操作所属的[组织](#search-based-on-the-organization)
* 执行的[操作内容](#search-based-on-the-action-performed)
* 发生操作的[国家/地区](#search-based-on-the-location)
* 发生操作的[日期和时间](#search-based-on-the-time-of-action)

{% warning %}

**注意：**

- 您无法使用文本搜索审核条目，但您可以使用多个筛选器构建搜索查询。 {% data variables.product.product_name %} 支持在 {% data variables.product.product_name %} 中使用多种运算符进行搜索。 有关详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 中搜索](/github/searching-for-information-on-github/about-searching-on-github)”。
- 提供当月和前六个月每天的审核记录。

{% endwarning %}

### 基于仓库搜索

`repo` 限定符可将操作限制为你的组织拥有的特定存储库。 例如：

* `repo:my-org/our-repo` 查找 `my-org` 组织中 `our-repo` 存储库发生的所有事件。
* `repo:my-org/our-repo repo:my-org/another-repo` 查找 `my-org` 组织中 `our-repo` 和 `another-repo` 存储库发生的所有事件。
* `-repo:my-org/not-this-repo` 排除 `my-org` 组织中 `not-this-repo` 存储库发生的所有事件。

必须在 `repo` 限定符中包含组织名称；仅搜索 `repo:our-repo` 将不起作用。

### 基于用户搜索

`actor` 限定符可将事件限定为执行操作的组织成员。 例如：

* `actor:octocat` 查找 `octocat` 执行的所有事件。
* `actor:octocat actor:hubot` 查找 `octocat` 和 `hubot` 执行的所有事件。
* `-actor:hubot` 排除 `hubot` 执行的所有事件。

只能使用 {% data variables.product.product_name %} 用户名，而不是个人的真实姓名。

### 基于组织搜索

`org` 限定符可将操作限制为特定组织。 例如：

* `org:my-org` 查找针对 `my-org` 组织发生的所有事件。
* `org:my-org action:team` 查找 `my-org` 组织内执行的所有团队事件。
* `-org:my-org` 排除针对 `my-org` 组织发生的所有事件。

### 基于执行的操作搜索

`action` 限定符可搜索按类别分组的特定事件。 有关与这些类别相关的事件的信息，请参阅“[企业的审核日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”。

| 类别名称 | 说明
|------------------|-------------------
| `hook` | 包含与 web 挂钩相关的所有活动。
| `org` | 包含与组织成员资格相关的所有活动
| `repo` | 包含与您的组织拥有的仓库相关的所有活动。
| `team` | 包含与您的组织中的团队相关的所有活动。

您可以使用这些词搜索特定的操作集。 例如：

* `action:team` 查找分组在团队类别中的所有事件。
* `-action:billing` 排除计费类别中的所有事件。

每个类别都有一组可进行过滤的关联事件。 例如：

* `action:team.create` 查找创建团队的所有事件。
* `-action:billing.change_email` 排除帐单电子邮件已更改的所有事件。

### 基于位置搜索

`country` 限定符可根据来源国家/地区筛选操作。
- 您可以使用国家/地区的两字母短代码或完整名称。
- 名称中包含空格的国家/地区必须用引号引起。 例如：
  * `country:de` 查找在德国发生的所有事件。
  * `country:Mexico` 查找在墨西哥发生的所有事件。
  * `country:"United States"` 查找在美国发生的所有事件。

### 基于操作时间搜索

`created` 限定符可按操作发生的时间筛选操作。
- 使用 `YYYY-MM-DD` 格式定义日期，即年、月、日。
- 日期支持[大于、小于和范围限定符](/enterprise/user/articles/search-syntax)。 例如：
  * `created:2014-07-08` 查找 2014 年 7 月 8 日发生的所有事件。
  * `created:>=2014-07-01` 查找 2014 年 7 月 8 日当天或之后发生的所有事件。
  * `created:<=2014-07-01` 查找 2014 年 7 月 8 日当天或之前发生的所有事件。
  * `created:2014-07-01..2014-07-31` 查找 2014 年 7 月发生的所有事件。
