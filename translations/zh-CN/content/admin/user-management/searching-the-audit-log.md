---
title: 搜索审核日志
intro: 站点管理员可以在企业上搜索已审核操作的广泛列表。
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log/
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### 搜索查询语法

由一个或多个键值对（以 AND/OR 逻辑运算符分隔）构成一个搜索查询。

|              键 | 值                         |
| --------------:| ------------------------- |
|     `actor_id` | 发起操作的用户帐户的 ID             |
|        `actor` | 发起操作的用户帐户的名称              |
| `oauth_app_id` | 与操作相关联的 OAuth 应用程序的 ID    |
|       `action` | 已审核操作的名称                  |
|      `user_id` | 受操作影响的用户的 ID              |
|           `用户` | 受操作影响的用户的名称               |
|      `repo_id` | 受操作影响的仓库的 ID（若适用）         |
|         `repo` | 受操作影响的仓库的名称（若适用）          |
|     `actor_ip` | 发起操作的 IP 地址               |
|   `created_at` | 操作发生的时间                   |
|         `from` | 发起操作的视图                   |
|         `note` | 事件特定的其他信息（采用纯文本或 JSON 格式） |
|          `org` | 受操作影响的组织的名称（若适用）          |
|       `org_id` | 受操作影响的组织的 ID（若适用）         |

例如，要查看自 2017 年初开始影响仓库 `octocat/Spoon-Knife` 的所有操作：

  `repo:"octocat/Spoon-Knife" AND created_at:[2017-01-01 TO *]`

有关操作的完整列表，请参阅“[审核的操作](/admin/user-management/audited-actions)”。

### 搜索审核日志

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
4. 输入搜索查询。 ![搜索查询](/assets/images/enterprise/site-admin-settings/search-query.png)
