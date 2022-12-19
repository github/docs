---
title: エンタープライズの監査ログの検索
intro: Enterprise で監査されたアクションの広範なリストを検索できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183997'
---
## エンタープライズの監査ログの検索について

**[フィルター]** ドロップダウンを使用するか、検索クエリを入力して、ユーザー インターフェイスからエンタープライズの監査ログを直接検索できます。

  ![Search query (検索クエリ)](/assets/images/enterprise/site-admin-settings/search-query.png)

エンタープライズの監査ログの表示の詳細については、「[エンタープライズ監査ログへのアクセス](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)」を参照してください。 

{% data reusables.audit_log.git-events-not-in-search-results %}

API を使用して監査ログ イベントを取得することもできます。 詳細については、「[エンタープライズでの監査ログ API の使用](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)」を参照してください。

テキストを使用してエントリを検索することはできません。 ただし、さまざまなフィルターを使用すれば検索クエリを作成できます。 ログを検索するときに使用される多くの演算子 (`-`、`>`、`<` など) は、{% data variables.product.product_name %} 全体で検索するものと同じ形式です。 詳細については、「[{% data variables.product.prodname_dotcom %} 上での検索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

{% note %}

**注**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## 検索クエリ フィルター

Assert| 説明
--------------:| -----------
`Yesterday's activity` | 過去 1 日に作成されたすべてのアクション。
`Enterprise account management` | `business` カテゴリ内のすべてのアクション。
`Organization membership` | 新しいユーザーが組織に参加するように招待されたときのすべてのアクション。
`Team management` | チーム管理に関連するすべてのアクション。<br/>- ユーザー アカウントまたはリポジトリがチームに追加またはチームから削除されたとき<br/>- チームの保守担当者が昇格または降格されたとき<br/>- チームが削除されたとき
`Repository management` | リポジトリ管理のすべてのアクション。<br/>- リポジトリが作成または削除されたとき<br/>- リポジトリの可視性が変更されたとき<br/>- チームがリポジトリに追加または削除されたとき{% ifversion ghec %}
`Billing updates` | {% data variables.product.prodname_dotcom %} と請求先の電子メール アドレスが変更された場合のエンタープライズの支払い方法に関するすべてのアクション。{% endif %}
`Hook activity` | Webhook と pre-receive フックのすべてのアクション。
`Security management` | SSH キー、デプロイ キー、セキュリティ キー、2FA、SAML シングル サインオン資格情報の承認、リポジトリの脆弱性アラートに関するすべてのアクション。

## 検索クエリ構文

AND/OR の論理演算子で区切られた 1 つ以上の `key:value` のペアから検索クエリを構成できます。 たとえば、2017 年の初めからリポジトリ `octocat/Spoon-Knife` に影響を与えたすべてのアクションを確認するには、次のようにします。

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

検索クエリで使用できる `key:value` ペアは次のとおりです。

キー            | 値
--------------:| --------------------------------------------------------
`actor_id`     | アクションを開始したユーザアカウントの ID
`actor`        | アクションを開始したユーザアカウントの名前
`oauth_app_id` | アクションに関連付けられている OAuth アプリケーションの ID
`action`       | 監査されたアクションの名前
`user_id`      | アクションによって影響を受けたユーザの ID
`user`         | アクションによって影響を受けたユーザの名前
`repo_id`      | アクションによって影響を受けたリポジトリの ID （妥当な場合）
`repo`         | アクションによって影響を受けたリポジトリの名前 （妥当な場合）
`actor_ip`     | アクション元の IP アドレス
`created`      | アクションが発生した時刻{% ifversion ghes %}。 サイト管理者ダッシュボードから監査ログを照会する場合は、代わりに `created_at` を使用します{% endif %}
`from`         | アクション元の View
`note`         | イベント固有の他の情報（プレーンテキストまたは JSON フォーマット）
`org`          | アクションによって影響を受けたOrganizationの名前（該当する場合）
`org_id`       | アクションによって影響を受けたOrganizationの ID（該当する場合）
`business` | アクションによって影響を受けたリポジトリの名前 (該当する場合)
`business_id` | アクションによって影響を受けたエンタープライズの ID (該当する場合)
{%- ifversion token-audit-log %} `hashed_token` | アクションの認証に使用されるトークン (該当する場合は、「[アクセス トークンによって実行される監査ログ イベントの識別](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)」をご覧ください) {%- endif %}

カテゴリ別にグループ化されたアクションを表示するには、アクション修飾子を `key:value` ペアとして使用することもできます。 詳細については、「[実行されたアクションに基づく検索](#search-based-on-the-action-performed)」を参照してください。

エンタープライズの監査ログのアクションの完全な一覧については、「[エンタープライズの監査ログ アクション](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)」を参照してください。

## Audit log を検索する

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### 実行されたアクションに基づく検索

特定のイベントを検索するには、クエリで `action` 修飾子を使用します。 次に例を示します。

  * `action:team` は、チーム カテゴリ内でグループ化されたすべてのイベントを検索します。
  * `-action:hook` は、Webhook カテゴリのすべてのイベントを除外します。

各カテゴリには、フィルタできる一連の関連アクションがあります。 次に例を示します。

  * `action:team.create` は、チームが作成されたすべてのイベントを検索します。
  * `-action:hook.events_changed` は、Webhook 上のイベントが変更されたすべてのイベントを除外します。

エンタープライズの監査ログで検出できるアクションは、次のカテゴリにグループ化されます。

{% data reusables.audit_log.audit-log-action-categories %}

### アクション時間に基づく検索

`created` 修飾子を使用して、発生した日時に基づいて監査ログ内のイベントをフィルター処理します。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

次に例を示します。

  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したすべてのイベントを検索します。
  * `created:>=2014-07-08` は、2014 年 7 月 8 日またはそれ以降に発生したすべてのイベントを検索します。
  * `created:<=2014-07-08` は、2014 年 7 月 8 日またはそれより前に発生したすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31` は、2014 年 7 月の月に発生したすべてのイベントを検索します。

### 場所に基づく検索

修飾子 `country` を使用すると、発信元の国に基づいて監査ログ内のイベントをフィルター処理できます。 国の 2 文字の短いコードまたはフル ネームを使用できます。 名前に空白がある国は引用符で囲む必要があります。 次に例を示します。

  * `country:de` は、ドイツで発生したすべてのイベントを検索します。
  * `country:Mexico` は、メキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` は、米国で発生したすべてのイベントを検索します。

{% ifversion token-audit-log %}
### アクションを実行したトークンに基づいて検索する

`hashed_token` 修飾子を使用して、アクションを実行したトークンに基づいて検索します。 トークンを検索する前に、SHA-256 ハッシュを生成する必要があります。 詳しくは、「[アクセス トークンによって実行された監査ログ イベントの特定](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)」をご覧ください。
{% endif %}
