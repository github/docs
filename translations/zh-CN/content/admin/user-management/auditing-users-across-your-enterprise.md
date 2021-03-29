---
title: 审核整个企业的用户
intro: '审核日志仪表板向站点管理员显示过去 90 天内企业中所有用户和组织执行的操作，包括操作执行者、操作内容以及操作执行时间等详细信息。'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization/
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 企业
---

### 访问审核日志

审核日志仪表板让您能够直观地看到企业中的审计数据。

![实例级审核日志仪表板](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

在地图中，您可以平移和缩放来查看世界范围内的事件。 将鼠标悬停在国家/地区上，可以看到该国家/地区内事件的快速盘点。

### 在企业中搜索事件

审核日志列出了有关企业内所执行操作的以下信息：

* 操作发生的[仓库](#search-based-on-the-repository)
* 执行操作的[用户](#search-based-on-the-user)
* 操作所属的[组织](#search-based-on-the-organization)
* 执行的[操作](#search-based-on-the-action-performed)
* 操作发生的[国家/地区](#search-based-on-the-location)
* 操作发生的[日期和时间](#search-based-on-the-time-of-action)

{% warning %}

**注意：**

- 您无法使用文本搜索审核条目，但您可以使用多个筛选器构建搜索查询。 {% data variables.product.product_name %} 支持在 {% data variables.product.product_name %} 中使用多种运算符进行搜索。 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上搜索](/github/searching-for-information-on-github/about-searching-on-github)”。
- 要搜索 90 天之前的事件，请使用 `created` 限定符。

{% endwarning %}

#### 基于仓库搜索

`repo` 限定符可将操作限定为您的组织拥有的特定仓库。 例如：

* `repo:my-org/our-repo` 会找到在 `my-org` 组织的 `our-repo` 仓库中发生的所有事件。
* `repo:my-org/our-repo repo:my-org/another-repo` 会找到在 `my-org` 组织的 `our-repo` 和 `another-repo` 仓库中发生的所有事件。
* `-repo:my-org/not-this-repo` 会排除在 `my-org` 组织的 `not-this-repo` 仓库中发生的所有事件。

您必须在 `repo` 限定符中包含组织的名称，仅搜索 `repo:our-repo` 将不起作用。

#### 基于用户搜索

`actor` 限定符会将事件限定为执行操作的组织成员。 例如：

* `actor:octocat` 会找到 `octocat` 执行的所有事件。
* `actor:octocat actor:hubot` 会找到 `octocat` 和 `hubot` 执行的所有事件。
* `-actor:hubot` 会排除 `hubot` 执行的所有事件。

您可以仅使用 {% data variables.product.product_name %} 用户名，而不是个人的真实姓名。

#### 基于组织搜索

`org` 限定符可将操作限定为特定组织。 例如：

* `org:my-org` 会找到 `my-org` 组织发生的所有事件。
* `org:my-org action:team` 会找到在 `my-org` 组织中执行的所有团队事件。
* `-org:my-org` 会排除 `my-org` 组织发生的所有事件。

#### 基于执行的操作搜索

`action` 限定符可搜索特定事件（按类别组织）。 有关与这些类别相关的事件的信息，请参阅“[审核的操作](/admin/user-management/audited-actions)”。

| 类别名称   | 描述                   |
| ------ | -------------------- |
| `挂钩`   | 包含与 web 挂钩相关的所有活动。   |
| `org`  | 包含与组织成员资格相关的所有活动     |
| `repo` | 包含与您的组织拥有的仓库相关的所有活动。 |
| `团队`   | 包含与您的组织中的团队相关的所有活动。  |

您可以使用这些词搜索特定的操作集。 例如：

* `action:team` 会找到团队类别中的所有事件。
* `-action:billing` 会排除帐单类别中的所有事件。

每个类别都有一组可进行过滤的关联事件。 例如：

* `action:team.create` 会找到团队创建处的所有事件。
* `-action:billing.change_email` 会排除帐单邮箱更改处的所有事件。

#### 基于位置搜索

`country` 限定符可根据来源国家/地区筛选操作。
- 您可以使用国家/地区的两字母短代码或完整名称。
- 名称中包含空格的国家/地区必须用引号引起。 例如：
  * `country:de` 会找到在德国发生的所有事件。
  * `country:Mexico` 会找到在墨西哥发生的所有事件。
  * `country:"United States"` 会找到在美国发生的所有事件。

#### 基于操作时间搜索

`created` 限定符可根据事件发生的时间筛选操作。
- 使用 `YYYY-MM-DD` 格式定义日期，即年后面是月份，之后是具体日期。
- 日期支持[大于、小于和范围限定符](/enterprise/{{ currentVersion }}/user/articles/search-syntax)。 例如：
  * `created:2014-07-08` 会找到在 2014 年 7 月 8 日发生的所有事件。
  * `created:>=2014-07-01` 会找到在 2014 年 7 月 8 日或之后发生的所有事件。
  * `created:<=2014-07-01` 会找到在 2014 年 7 月 8 日或之前发生的所有事件。
  * `created:2014-07-01..2014-07-31` 会找到在 2014 年 7 月发生的所有事件。
