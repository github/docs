---
title: Searching the audit log for your enterprise
intro: You can search an extensive list of audited actions in your enterprise.
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
---

## About search for the enterprise audit log

You can search your enterprise audit log directly from the user interface by using the **Filters** dropdown, or by typing a search query.

  ![検索クエリ](/assets/images/enterprise/site-admin-settings/search-query.png)

For more information about viewing your enterprise audit log, see "[Accessing the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."

You can also use the API to retrieve audit log events. For more information, see "[Using the audit log API for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)."

テキストを使用してエントリを検索することはできません。 ただし、さまざまなフィルターを使用すれば検索クエリを作成できます。 ログを検索するときに使用される多くの演算子 (`-`、`>`、`<` など) は、{% data variables.product.product_name %} 全体で検索するものと同じ形式です。 詳細は「[{% data variables.product.prodname_dotcom %} での検索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

{% note %}

**注釈**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Search query filters

|                            フィルタ | 説明                                                                                                                                                                                                                                    |
| -------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          `Yesterday's activity` | All actions created in the past day.                                                                                                                                                                                                  |
| `Enterprise account management` | All actions in the `business` category.                                                                                                                                                                                               |
|       `Organization membership` | All actions for when a new user was invited to join an organization.                                                                                                                                                                  |
|               `Team management` | All actions related to team management.<br/>- When a user account or repository was added or removed from a team<br/>- When a team maintainer was promoted or demoted<br/>-  When a team was deleted                |
|         `Repository management` | All actions for repository management.<br/>- When a repository was created or deleted<br/>- When the repository visibility was changed<br/>- When a team was added or removed from a repository{% ifversion ghec %}
|               `Billing updates` | All actions concerning how your enterprise pays for {% data variables.product.prodname_dotcom %} and for when your billing email address was changed.{% endif %}
|                 `Hook activity` | All actions for webhooks and pre-receive hooks.                                                                                                                                                                                       |
|           `Security management` | All actions concerning SSH keys, deploy keys, security keys, 2FA, and SAML single sign-on credential authorization, and vulnerability alerts for repositories.                                                                        |

## 検索クエリの構文

You can compose a search query from one or more `key:value` pairs, separated by AND/OR logical operators. たとえば、2017 年の初めからリポジトリ `octocat/Spoon-Knife` に影響を与えたすべてのアクションを確認するには、次のようにします:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

The `key:value` pairs that can be used in a search query are:

|             キー | 値                                                                                                                                                   |
| --------------:| --------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `actor_id` | アクションを開始したユーザアカウントの ID                                                                                                                              |
|        `actor` | アクションを開始したユーザアカウントの名前                                                                                                                               |
| `oauth_app_id` | アクションに関連付けられている OAuth アプリケーションの ID                                                                                                                  |
|       `action` | 監査されたアクションの名前                                                                                                                                       |
|      `user_id` | アクションによって影響を受けたユーザの ID                                                                                                                              |
|          `ユーザ` | アクションによって影響を受けたユーザの名前                                                                                                                               |
|      `repo_id` | アクションによって影響を受けたリポジトリの ID （妥当な場合）                                                                                                                    |
|         `repo` | アクションによって影響を受けたリポジトリの名前 （妥当な場合）                                                                                                                     |
|     `actor_ip` | アクション元の IP アドレス                                                                                                                                     |
|      `created` | Time at which the action occurred{% ifversion ghes %}. If querying the audit log from the site admin dashboard, use `created_at` instead{% endif %}
|         `from` | アクション元の View                                                                                                                                        |
|         `note` | イベント固有の他の情報（プレーンテキストまたは JSON フォーマット）                                                                                                                |
|          `org` | アクションによって影響を受けたOrganizationの名前（該当する場合）                                                                                                              |
|       `org_id` | アクションによって影響を受けたOrganizationの ID（該当する場合）                                                                                                             |
|     `business` | Name of the enterprise affected by the action (if applicable)                                                                                       |
|  `business_id` | ID of the enterprise affected by the action (if applicable)                                                                                         |

To see actions grouped by category, you can also use the action qualifier as a `key:value` pair. For more information, see "[Search based on the action performed](#search-based-on-the-action-performed)."

For a full list of actions in your enterprise audit log, see "[Audit log actions for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."

## Audit log を検索する

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### 実行されたアクションに基づく検索

特定のイベントを検索するには、クエリで `action` 修飾子を使用します。 例:

  * `action:team`はteamカテゴリ内でグループ化されたすべてのイベントを検索します。
  * `-action:hook` は webhook カテゴリ内のすべてのイベントを除外します。

各カテゴリには、フィルタできる一連の関連アクションがあります。 例:

  * `action:team.create`はTeamが作成されたすべてのイベントを検索します。
  * `-action:hook.events_changed` は webhook の変更されたすべてのイベントを除外します。

Actions that can be found in your enterprise audit log are grouped within the following categories:

{% data reusables.audit_log.audit-log-action-categories %}
### アクション時間に基づく検索

`created` 修飾子を使用して、行われた日時に基づいて Audit log 内のイベントをフィルタします。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

例:

  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したイベントをすべて検索します。
  * `created:>=2014-07-08` は、2014 年 7 月 8 日かそれ以降に生じたすべてのイベントを検索します。
  * `created:<=2014-07-08`は、2014 年 7 月 8 日かそれ以前に生じたすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31`は、2014 年 7 月に起きたすべてのイベントを検索します。

### 場所に基づく検索

修飾子 `country` を使用すれば、発信元の国に基づいて Audit log 内のイベントをフィルタリングできます。 You can use a country's two-letter short code or full name. Countries with spaces in their name will need to be wrapped in quotation marks. 例:

  * `country:de` は、ドイツで発生したイベントをすべて検索します。
  * `country:Mexico` はメキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` はアメリカ合衆国で発生したすべてのイベントを検索します。
