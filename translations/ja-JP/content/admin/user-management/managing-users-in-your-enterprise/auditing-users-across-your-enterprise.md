---
title: Enterprise にわたるユーザの監査
intro: 監査ログ ダッシュボードでは、サイト管理者に、現在の月および過去 6 か月間に、Enterprise 全体で、すべてのユーザーと Organization によって実行されたアクションが表示されます。 監査ログには、誰がいつ何のアクションを実行したかなどの詳細が含まれます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331689'
---
## Audit log にアクセスする

Audit log ダッシュボードには、Enterprise 全体の監査データが表示されます。

![インスタンスにわたるAudit logのダッシュボード](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}

地図内では、世界中のイベントを見るためにパンやズームができます。 国にカーソルを合わせれば、その国のイベントの簡単な集計が表示されます。

## Enterprise にわたるイベントの検索

Audit log には、Enterprise 内で行われたアクションに関する次の情報が一覧表示されます。

* アクションが実行された[リポジトリ](#search-based-on-the-repository)
* アクションを実行した[ユーザー](#search-based-on-the-user)
* [アクション](#search-based-on-the-organization)が関連する組織
* 実行された[アクション](#search-based-on-the-action-performed)
* アクションが実行された[国](#search-based-on-the-location)
* アクションが発生した[日時](#search-based-on-the-time-of-action)

{% warning %}

**注:**

- Audit logのエントリはテキストを使った検索はできませんが、様々なフィルタを使って検索クエリを構築できます。 {% data variables.product.product_name %} は、{% data variables.product.product_name %} 全体を検索するための多くの演算子をサポートしています。 詳細については、「[{% data variables.product.prodname_dotcom %} での検索について](/github/searching-for-information-on-github/about-searching-on-github)」を参照してください。
- 監査レコードは、現在の月と過去 6 か月間のすべての日に使用できます。

{% endwarning %}

### リポジトリに基づく検索

`repo` 修飾子は、組織が所有する特定のリポジトリにアクションを制限します。 次に例を示します。

* `repo:my-org/our-repo` は、`my-org` 組織内の `our-repo` リポジトリで発生したすべてのイベントを検索します。
* `repo:my-org/our-repo repo:my-org/another-repo` は、`my-org`組織内の `our-repo` および `another-repo` リポジトリで発生したすべてのイベントを検索します。
* `-repo:my-org/not-this-repo` は、`my-org` 組織内の `not-this-repo` リポジトリで発生したすべてのイベントを除外します。

`repo` 修飾子内に組織の名前を含める必要があります。`repo:our-repo` を検索するだけでは機能しません。

### ユーザーに基づく検索

`actor` 修飾子は、アクションを実行した組織のメンバーに基づいてイベントの範囲を設定します。 次に例を示します。

* `actor:octocat` は `octocat` によって実行されたすべてのイベントを検索します。
* `actor:octocat actor:hubot` は `octocat` および `hubot` によって実行されたすべてのイベントを検索します。
* `-actor:hubot` は `hubot` によって実行されたすべてのイベントを除外します。

使用できるのは {% data variables.product.product_name %} のユーザー名のみであり、個人の実名ではありません。

### Organizationに基づく検索

`org` 修飾子は、特定の組織にアクションを制限します。 次に例を示します。

* `org:my-org` は、`my-org` 組織内で発生したすべてのイベントを検索します。
* `org:my-org action:team` は、`my-org` 組織内で実行されたすべてのチーム イベントを検索します。
* `-org:my-org` は、`my-org` 組織内で発生したすべてのイベントを除外します。

### 実行されたアクションに基づく検索

`action` 修飾子は、カテゴリ内にグループ化された特定のイベントを検索します。 これらのカテゴリに関連付けられているイベントの詳細については、「[エンタープライズの監査ログ イベント](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)」を参照してください。

| カテゴリ名 | 説明
|------------------|-------------------
| `hook` | webhookに関連するすべてのアクティビティを含みます。
| `org` | Organizationのメンバーシップに関連するすべてのアクティビティを含みます。
| `repo` | Organizationが所有するリポジトリに関連するすべてのアクティビティを含みます。
| `team` | Organization内のチームに関連するすべてのアクティビティを含みます。

次の用語を使用すれば、特定の一連の行動を検索できます。 次に例を示します。

* `action:team` は、チーム カテゴリ内でグループ化されたすべてのイベントを検索します。
* `-action:billing` は、課金カテゴリのすべてのイベントを除外します。

各カテゴリには、フィルタリングできる一連の関連イベントがあります。 次に例を示します。

* `action:team.create` は、チームが作成されたすべてのイベントを検索します。
* `-action:billing.change_email` は、請求のメールが変更されたすべてのイベントを除外します。

### 場所に基づく検索

`country` 修飾子は、発生元の国ごとにアクションをフィルター処理します。
- 国の 2 文字のショートコードまたはフル ネームを使用できます。
- 名前に空白を含む国は、引用符で囲まなければなりません。 次に例を示します。
  * `country:de` は、ドイツで発生したすべてのイベントを検索します。
  * `country:Mexico` は、メキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` は、米国で発生したすべてのイベントを検索します。

### アクションの時刻に基づく検索

`created` 修飾子は、アクションが発生した時間ごとにフィルター処理します。
- 年、月、日の `YYYY-MM-DD` 形式を使用して日付を定義します。
- 日付では、[より大きい、より小さい、範囲修飾子](/enterprise/user/articles/search-syntax)をサポートします。 次に例を示します。
  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したすべてのイベントを検索します。
  * `created:>=2014-07-01` は、2014 年 7 月 8 日またはそれ以降に発生したすべてのイベントを検索します。
  * `created:<=2014-07-01` は、2014 年 7 月 8 日またはそれより前に発生したすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31` は、2014 年 7 月の月に発生したすべてのイベントを検索します。
