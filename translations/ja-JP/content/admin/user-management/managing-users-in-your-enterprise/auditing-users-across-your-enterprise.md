---
title: Enterprise にわたるユーザの監査
intro: Audit log ダッシュボードには、サイト管理者に、過去 90 日間に企業全体のすべてのユーザと Organization によって実行されたアクションが表示されます。これには、アクションを実行したユーザ、アクションの内容、アクションの実行時期などの詳細が含まれます。
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization/
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Organizations
  - Security
  - User account
---

### Audit log にアクセスする

Audit log ダッシュボードには、Enterprise 全体の監査データが表示されます。

![インスタンスにわたるAudit logのダッシュボード](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

地図内では、世界中のイベントを見るためにパンやズームができます。 国にカーソルを合わせれば、その国のイベントの簡単な集計が表示されます。

### Enterprise にわたるイベントの検索

Audit log には、Enterprise 内で行われたアクションに関する次の情報が一覧表示されます。

* アクションが行われた[リポジトリ](#search-based-on-the-repository)
* アクションを行った[ユーザ](#search-based-on-the-user)
* アクションに関係する[Organization](#search-based-on-the-organization)
* 行われた[アクション](#search-based-on-the-action-performed)
* アクションが行われた[国](#search-based-on-the-location)
* アクションが生じた[日時](#search-based-on-the-time-of-action)

{% warning %}

**ノート:**

- Audit logのエントリはテキストを使った検索はできませんが、様々なフィルタを使って検索クエリを構築できます。 {% data variables.product.product_name %} は、{% data variables.product.product_name %} 全体を検索するための多くの演算子をサポートしています。 詳細は「[{% data variables.product.prodname_dotcom %} での検索について](/github/searching-for-information-on-github/about-searching-on-github)」を参照してください。
- 90日よりも古いイベントの検索には、`created`修飾子を使ってください。

{% endwarning %}

#### リポジトリに基づく検索

`repo` 修飾子は、Organization が所有する特定のリポジトリにアクションを制限します。 例:

* `repo:my-org/our-repo`は`my-org` Organization内の`our-repo`リポジトリで起きたすべてのイベントを検索します。
* `repo:my-org/our-repo repo:my-org/another-repo`は、`my-org` Organization内の`our-repo`及び`another-repo`の両リポジトリ内で起きたすべてのイベントを検索します。
* `-repo:my-org/not-this-repo`は、`my-org` Organization内の`not-this-repo`リポジトリで起きたすべてのイベントを除外します。

`repo`修飾子内には、Organizationの名前を含めなければなりません。単に`repo:our-repo`として検索することはできません。

#### ユーザーに基づく検索

`actor` 修飾子は、アクションを実行した Organization のメンバーに基づいてイベントの範囲を設定します。 例:

* `actor:octocat`は`octocat`が行ったすべてのイベントを検索します。
* `actor:octocat actor:hubot`は、`octocat`及び`hubot`が行ったすべてのイベントを検索します。
* `-actor:hubot`は、`hubot`が行ったすべてのイベントを除外します。

使用できるのは {% data variables.product.product_name %} ユーザ名のみで、個人の本当の名前ではありません。

#### Organizationに基づく検索

`org` 修飾子は、特定の Organization にアクションを限定します。 例:

* `org:my-org` は `my-org` という Organization で生じたすべてのイベントを検索します。
* `org:my-org action:team`は`my-org`というOrganization内で行われたすべてのteamイベントを検索します。
* `-org:my-org` は `my-org` という Organization で生じたすべてのイベントを除外します。

#### 実行されたアクションに基づく検索

`action`修飾子は、特定のイベントをカテゴリ内でグループ化して検索します。 以下のカテゴリに関連するイベントの詳しい情報については「[監査済みのアクション](/admin/user-management/audited-actions)」を参照してください。

| カテゴリ名  | 説明                                           |
| ------ | -------------------------------------------- |
| `フック`  | webhookに関連するすべてのアクティビティを含みます。                |
| `org`  | Organizationのメンバーシップに関連するすべてのアクティビティを含みます。   |
| `repo` | Organizationが所有するリポジトリに関連するすべてのアクティビティを含みます。 |
| `Team` | Organization内のチームに関連するすべてのアクティビティを含みます。      |

次の用語を使用すれば、特定の一連の行動を検索できます。 例:

* `action:team`はteamカテゴリ内でグループ化されたすべてのイベントを検索します。
* `-action:billing`はbillingカテゴリ内のすべてのイベントを除外します。

各カテゴリには、フィルタリングできる一連の関連イベントがあります。 例:

* `action:team.create`はTeamが作成されたすべてのイベントを検索します。
* `-action:billing.change_email`は課金のメールが変更されたすべてのイベントを検索します。

#### 場所に基づく検索

`country`修飾子は、発生元の国によってアクションをフィルタリングします。
- 国の 2 文字のショートコードまたはフル ネームを使用できます。
- 名前に空白を含む国は、引用符で囲まなければなりません。 例:
  * `country:de` は、ドイツで発生したイベントをすべて検索します。
  * `country:Mexico` はメキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` はアメリカ合衆国で発生したすべてのイベントを検索します。

#### アクションの時刻に基づく検索

`created`修飾子は、発生した時刻でアクションをフィルタリングします。
- 日付には `YYYY-MM-DD` という形式を使います。これは、年の後に月、その後に日が続きます。
- 日付では[大なり、小なりおよび範囲指定](/enterprise/{{ currentVersion }}/user/articles/search-syntax)を使用できます。 例:
  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したイベントをすべて検索します。
  * `created:>=2014-07-01` は、2014 年 7 月 1 日かそれ以降に生じたすべてのイベントを検索します。
  * `created:<=2014-07-01`は、2014 年 7 月 1 日かそれ以前に生じたすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31`は、2014 年 7 月に起きたすべてのイベントを検索します。
