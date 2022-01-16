---
title: Organization の Audit log をレビューする
intro: Audit log により、Organization の管理者は Organization のメンバーによって行われたアクションをすばやくレビューできます。 これには、誰がいつ何のアクションを実行したかなどの詳細が残されます。
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

### Audit log にアクセスする

Audit log には、過去 90 日以内に Organization に影響を与えたアクティビティによってトリガーされたイベントが一覧表示されます。 Organization の Audit log にアクセスできるのはオーナーのみです。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

### Audit log を検索する

{% data reusables.audit_log.audit-log-search %}

#### 実行されたアクションに基づく検索

特定のイベントを検索するには、クエリで `action` 修飾子を使用します。 Audit log に一覧表示されるアクションは以下のカテゴリに分類されます。

| カテゴリ名                                                                                                                                                                                                                                                                                                                                                      | 説明                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| [`アカウント`](#account-category-actions)                                                                                                                                                                                                                                                                                                                       | Organization アカウントに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                        |
| [`advisory_credit`](#advisory_credit-category-actions)                                                                                                                                                                                                                                                                                                     | {% data variables.product.prodname_advisory_database %} のセキュリティアドバイザリのコントリビューターのクレジットに関連するすべてのアクティビティが対象です。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のセキュリティアドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。                               |
| [`支払い`](#billing-category-actions)                                                                                                                                                                                                                                                                                                                         | Organization の支払いに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                         |
| [`codespaces`](#codespaces-category-actions)                                                                                                                                                                                                                                                                                                               | OrganizationのCodespacesに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                   |
| [`dependabot_alerts`](#dependabot_alerts-category-actions)                                                                                                                                                                                                                                                                                                 | 既存のリポジトリ内の {% data variables.product.prodname_dependabot %} アラートの Organization レベルの設定アクティビティが対象です。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。                                                                          |
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions)                                                                                                                                                                                                                                                                             | Organization 内に作成された新しいリポジトリ内の {% data variables.product.prodname_dependabot %} アラートの Organization レベルの設定アクティビティが対象です。                                                                                                                                                                                          |
| [`dependabot_security_updates`](#dependabot_security_updates-category-actions)                                                                                                                                                                                                                                                                             | 既存のリポジトリ内の {% data variables.product.prodname_dependabot_security_updates %} の Organization レベルの設定アクティビティが対象です。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。         |
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions)                                                                                                                                                                                                                                                         | Organization で作成された新しいリポジトリ内の {% data variables.product.prodname_dependabot_security_updates %} の Organization レベルの設定アクティビティが対象です。                                                                                                                                                                            |
| [`dependency_graph`](#dependency_graph-category-actions)                                                                                                                                                                                                                                                                                                   | リポジトリの依存関係グラフの Organization レベルの設定アクティビティが対象です。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。                                                                                                                                                |
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions)                                                                                                                                                                                                                                                                               | Organization 内に作成された新しいリポジトリの Organization レベルの設定アクティビティが対象です。{% endif %}
| [`discussion_post`](#discussion_post-category-actions)                                                                                                                                                                                                                                                                                                     | Team ページに投稿されたディスカッションに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                    |
| [`discussion_post_reply`](#discussion_post_reply-category-actions)                                                                                                                                                                                                                                                                                         | Team ページに投稿されたディスカッションへの返答に関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                |
| [`フック`](#hook-category-actions)                                                                                                                                                                                                                                                                                                                            | webhookに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                                   |
| [`integration_installation_request`](#integration_installation_request-category-actions)                                                                                                                                                                                                                                                                   | Organization 内で使用するインテグレーションをオーナーが承認するよう求める、 Organization メンバーからのリクエストに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                    |
| [`Issue`](#issue-category-actions)                                                                                                                                                                                                                                                                                                                         | Issue の削除に関連するアクティビティが対象です。                                                                                                                                                                                                                                                                                     |{% if currentVersion == "free-pro-team@latest" %}
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions)                                                                                                                                                                                                                                                                     | {% data variables.product.prodname_marketplace %} Developer Agreement の署名に関連するすべての活動が対象です。                                                                                                                                                                                                                      |
| [`marketplace_listing`](#marketplace_listing-category-actions)                                                                                                                                                                                                                                                                                             | {% data variables.product.prodname_marketplace %}.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} でのアプリのリストに関連するすべてのアクティビティが対象です。                                                                                                               |
| [`members_can_create_pages`](#members_can_create_pages-category-actions)                                                                                                                                                                                                                                                                                   | Organization 内のリポジトリの {% data variables.product.prodname_pages %} サイトの公開の管理に関連するすべてのアクティビティが対象です。 詳しい情報については「[Organizationの{% data variables.product.prodname_pages %}サイトの公開の管理](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。 |{% endif %}
| [`org`](#org-category-actions)                                                                                                                                                                                                                                                                                                                             | Organization メンバーシップに関連するアクティビティが対象です。{% if currentVersion == "free-pro-team@latest" %}
| [`org_credential_authorization`](#org_credential_authorization-category-actions)                                                                                                                                                                                                                                                                           | SAML シングルサインオンで使用する認証情報の認可に関連するすべてのアクティビティが対象です。{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| [`organization_label`](#organization_label-category-actions)                                                                                                                                                                                                                                                                                               | Organization のリポジトリのデフォルトラベルに関連するすべてのアクティビティが対象です。{% endif %}
| [`oauth_application`](#oauth_application-category-actions)                                                                                                                                                                                                                                                                                                 | OAuth アプリに関連するすべてのアクティビティが対象です。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| [`パッケージ`](#packages-category-actions)                                                                                                                                                                                                                                                                                                                      | {% data variables.product.prodname_registry %} に関連するすべてのアクティビティが対象です。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions)                                                                                                                                                                                                                                                                                                       | Organization の GitHub への支払い方法に関連するすべてのアクティビティが対象です。{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                                                                                                                                                                                                                                                                                     | Organization のプロフィール画像に関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                    |
| [`project`](#project-category-actions)                                                                                                                                                                                                                                                                                                                     | プロジェクト ボードに関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                     |
| [`protected_branch`](#protected_branch-category-actions)                                                                                                                                                                                                                                                                                                   | 保護されたブランチ関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                  |
| [`repo`](#repo-category-actions)                                                                                                                                                                                                                                                                                                                           | Organization が所有するリポジトリに関連するアクティビティが対象です。{% if currentVersion == "free-pro-team@latest" %}
| [`repository_advisory`](#repository_advisory-category-actions)                                                                                                                                                                                                                                                                                             | {% data variables.product.prodname_advisory_database %} のセキュリティアドバイザリに関連するリポジトリレベルのアクティビティが対象です。  詳しい情報については、「[{% data variables.product.prodname_dotcom %} のセキュリティアドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。                                         |
| [`repository_content_analysis`](#repository_content_analysis-category-actions)                                                                                                                                                                                                                                                                             | [プライベート リポジトリに対するデータの使用を有効または無効にする](/articles/about-github-s-use-of-your-data)に関連するすべての活動が対象です。{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`repository_dependency_graph`](#repository_dependency_graph-category-actions)                                                                                                                                                                                                                                                                             | プライベートリポジトリの依存関係グラフの有効化または無効化に関連する                                                                                                                                                                                                                                                                              |
| {% if currentVersion == "free-pro-team@latest" %}リポジトリ{% endif %}レベルのアクティビティが含まれます。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} |                                                                                                                                                                                                                                                                                                                 |
| [`repository_secret_scanning`](#repository_secret_scanning-category-actions)                                                                                                                                                                                                                                                                               | シークレットスキャンに関連するリポジトリレベルのアクティビティが対象です。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。                                                                                                                                                                       |{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions)                                                                                                                                                                                                                                                                       | [脆弱性のある依存関係](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)の {% data variables.product.prodname_dependabot_alerts %} に関連するすべてのアクティビティが対象です。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions)                                                                                                                                                                                                                                                                     | {% data variables.product.prodname_dependabot %} アラートの リポジトリレベルの設定アクティビティが対象です。                                                                                                                                                                                                                                 |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| [`secret_scanning`](#secret_scanning-category-actions)                                                                                                                                                                                                                                                                                                     | 既存のリポジトリ内のシークレットスキャンの Organization レベルの設定アクティビティが対象です。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。                                                                                                                                                      |
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions)                                                                                                                                                                                                                                                                                 | Organization で作成された新しいリポジトリ内のシークレットスキャンの Organization レベルの設定アクティビティが対象です。                                                                                                                                                                                                                                       |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions)                                                                                                                                                                                                                                                                                                                   | スポンサーボタンに関連するすべてのアクティビティが対象です (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照){% endif %}
| [`Team`](#team-category-actions)                                                                                                                                                                                                                                                                                                                           | Organization内のチームに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                         |
| [`team_discussions`](#team_discussions-category-actions)                                                                                                                                                                                                                                                                                                   | Organization の Team ディスカッションに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                              |

次の用語を使用すれば、特定の一連の行動を検索できます。 例:

  * `action:team`はteamカテゴリ内でグループ化されたすべてのイベントを検索します。
  * `-action:hook` は webhook カテゴリ内のすべてのイベントを除外します。

各カテゴリには、フィルタできる一連の関連アクションがあります。 例:

  * `action:team.create`はTeamが作成されたすべてのイベントを検索します。
  * `-action:hook.events_changed` は webhook の変更されたすべてのイベントを除外します。

#### アクション時間に基づく検索

`created` 修飾子を使用して、行われた日時に基づいて Audit log 内のイベントをフィルタします。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

例:

  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したイベントをすべて検索します。
  * `created:>=2014-07-08` は、2014 年 7 月 8 日かそれ以降に生じたすべてのイベントを検索します。
  * `created:<=2014-07-08`は、2014 年 7 月 8 日かそれ以前に生じたすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31`は、2014 年 7 月に起きたすべてのイベントを検索します。

Audit log には過去 90 日間のデータが存在しますが、`created` 修飾子を使用すればそれより前のイベントを検索できます。

#### 場所に基づく検索

修飾子 `country` を使用すれば、発信元の国に基づいて Audit log 内のイベントをフィルタリングできます。 国の 2 文字のショートコードまたはフル ネームを使用できます。 名前に空白がある国は引用符で囲む必要があることに注意してください。 例:

  * `country:de` は、ドイツで発生したイベントをすべて検索します。
  * `country:Mexico` はメキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` はアメリカ合衆国で発生したすべてのイベントを検索します。

{% if currentVersion == "free-pro-team@latest" %}
### Audit log をエクスポートする

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

### Audit log API を使用する

GraphQL API{% if currentVersion == "free-pro-team@latest" %} または REST API を使用して Audit log を操作できます{% endif %}。

{% if currentVersion == "free-pro-team@latest" %}

#### GraphQL API を使用する

{% endif %}

{% note %}

**注釈**: {% data variables.product.prodname_enterprise %} を使用している Organization が Audit log GraphQL API を利用できます。 {% data reusables.gated-features.more-info-org-products %}

{% endnote %}

IP の安全性を保ち、Organization のコンプライアンスを守るため、Audit log GraphQL API を使って、Audit log データのコピーを保存し、モニタリングできます。
{% data reusables.audit_log.audit-log-api-info %}

{% if currentVersion == "free-pro-team@latest" %}
GraphQL API を使用して Git イベントを取得することはできませんので、ご注意ください。 Git イベントを取得するには、代わりに REST API を使用してください。 詳しい情報については、「[`git` category actions](#git-category-actions)」を参照してください。
{% endif %}

GraphQL のレスポンスには、90 日から 120 日までのデータを含めることができます。

たとえば、GraphQL にリクエストして、Organization に新しく追加された Organization メンバー全員を表示できます。 詳細は「[GraphQL API Audit Log](/graphql/reference/interfaces#auditentry/)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

#### REST API を使用する

{% note %}

**注釈:** Audit log REST API は、{% data variables.product.prodname_ghe_cloud %} のユーザのみが利用できます。

{% endnote %}

IP の安全性を保ち、Organization のコンプライアンスを守るため、Audit log REST API を使って、Audit log データのコピーを保存し、モニタリングできます。
{% data reusables.audit_log.audit-log-api-info %}
* クローン、フェッチ、プッシュなどの Git イベント

{% data reusables.audit_log.audit-log-git-events-retention %}

Audit log REST API の詳細については、「[Organization](/rest/reference/orgs#get-the-audit-log-for-an-organization)」を参照してください。

{% endif %}

### Audit log のアクション

Audit log にイベントとして記録される最も一般的なアクションの概要です。

{% if currentVersion == "free-pro-team@latest" %}

#### `account` カテゴリアクション

| アクション                         | 説明                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `billing_plan_change`         | Organization の[支払いサイクル](/articles/changing-the-duration-of-your-billing-cycle)が変わるときにトリガーされます。                                                         |
| `plan_change`                 | Organization の[プラン](/articles/about-billing-for-github-accounts)が変わるときにトリガーされます。                                                                       |
| `pending_plan_change`         | Organization のオーナーまたは支払いマネージャーが[支払い済みサブスクリプションをキャンセルまたはダウングレードする](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/)ときにトリガーされます。 |
| `pending_subscription_change` | [{% data variables.product.prodname_marketplace %} の無料トライアルが始まるか期限切れになる](/articles/about-billing-for-github-marketplace/)ときにトリガーされます。                  |

#### `advisory_credit` カテゴリアクション

| アクション     | 説明                                                                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`  | ユーザがセキュリティアドバイザリのクレジットを受け入れるとトリガーされます。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory)」を参照してください。 |
| `create`  | セキュリティアドバイザリの管理者がクレジットセクションにユーザを追加するとトリガーされます。                                                                                                           |
| `decline` | ユーザがセキュリティアドバイザリのクレジットを拒否するとトリガーされます。                                                                                                                    |
| `destroy` | セキュリティアドバイザリの管理者がクレジットセクションからユーザを削除するとトリガーされます。                                                                                                          |

#### `billing` カテゴリアクション

| アクション                 | 説明                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | Organization が[{% data variables.product.prodname_dotcom %} の支払い方法を変更する](/articles/adding-or-editing-a-payment-method)ときにトリガーされます。 |
| `change_email`        | Organization の[支払い請求先メール アドレス](/articles/setting-your-billing-email)が変わるときにトリガーされます。                                               |

#### `codespaces` カテゴリアクション

| アクション                        | 説明                                                                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `create`                     | ユーザが[Codespaceを作成](/github/developing-online-with-codespaces/creating-a-codespace)するとトリガーされます。                                                                                                                           |
| `resume`                     | ユーザがサスペンドされたCodespaceを再開するとトリガーされます。                                                                                                                                                                                     |
| `delete`                     | ユーザが[Codespaceを削除](/github/developing-online-with-codespaces/deleting-a-codespace)するとトリガーされます。                                                                                                                           |
| `create_an_org_secret`       | ユーザがOrganizationレベルの[{% data variables.product.prodname_codespaces %}用シークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を作成するとトリガーされます。 |
| `update_an_org_secret`       | ユーザがOrganizationレベルの[{% data variables.product.prodname_codespaces %}用シークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を更新するとトリガーされます。 |
| `remove_an_org_secret`       | ユーザがOrganizationレベルの[{% data variables.product.prodname_codespaces %}用シークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を削除するとトリガーされます。 |
| `manage_access_and_security` | ユーザが[Codespaceがアクセスできるリポジトリ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)を更新するとトリガーされます。                                                                                       |



#### `dependabot_alerts` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが既存のすべての{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリの {% data variables.product.prodname_dependabot_alerts %} を無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが既存のすべての{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリの {% data variables.product.prodname_dependabot_alerts %} を有効にするとトリガーされます。                                                                                                                                                                       |

#### `dependabot_alerts_new_repos` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが新規のすべての{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリの {% data variables.product.prodname_dependabot_alerts %} を無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが新規のすべての{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリの {% data variables.product.prodname_dependabot_alerts %} を有効にするとトリガーされます。                                                                                                                                                                       |

#### `dependabot_security_updates` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが既存のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが既存のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にするとトリガーされます。                                                                                                                                                                       |

#### `dependabot_security_updates_new_repos` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが新規のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが新規のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にするとトリガーされます。                                                                                                                                                                       |

#### `dependency_graph` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが既存のすべてのリポジトリに対して依存関係グラフを無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが既存のすべてのリポジトリに対して依存関係グラフを有効にするとトリガーされます。                                                                                                                                                                       |

#### `dependency_graph_new_repos` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが新規のすべてのリポジトリに対して依存関係グラフを無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが新規のすべてのリポジトリに対して依存関係グラフを有効にするとトリガーされます。                                                                                                                                                                       |

{% endif %}

#### `discussion_post` カテゴリアクション

| アクション     | 説明                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------ |
| `update`  | [Team ディスカッションの投稿が編集される](/articles/managing-disruptive-comments/#editing-a-comment)ときにトリガーされます。  |
| `destroy` | [Team ディスカッションの投稿が削除される](/articles/managing-disruptive-comments/#deleting-a-comment)ときにトリガーされます。 |

#### `discussion_post_reply` カテゴリアクション

| アクション     | 説明                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `update`  | [Team ディスカッションの投稿への返答が編集される](/articles/managing-disruptive-comments/#editing-a-comment)ときにトリガーされます。  |
| `destroy` | [Team ディスカッションの投稿への返答が削除される](/articles/managing-disruptive-comments/#deleting-a-comment)ときにトリガーされます。 |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
#### `enterprise` カテゴリアクション

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `environment` カテゴリアクション

| アクション                   | 説明                                                                                                                   |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `create_actions_secret` | シークレットが環境で作成されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。  |
| `delete`                | 環境が削除されるとトリガーされます。 詳しい情報については、「[環境を削除する](/actions/reference/environments#deleting-an-environment)」を参照してください。         |
| `remove_actions_secret` | シークレットが環境で削除されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。  |
| `update_actions_secret` | 環境内のシークレットが更新されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。 |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `git` カテゴリアクション

{% note %}

**注釈:** Audit log の Git イベントにアクセスするには、Audit log REST API を使用する必要があります。 Audit log REST API は、{% data variables.product.prodname_ghe_cloud %} のユーザのみが利用できます。 詳しい情報については「[Organization](/rest/reference/orgs#get-the-audit-log-for-an-organization)」を参照してください。

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| アクション  | 説明                          |
| ------ | --------------------------- |
| `クローン` | リポジトリがクローンされるとトリガーされます。     |
| `フェッチ` | リポジトリから変更がフェッチされるとトリガーされます。 |
| `プッシュ` | リポジトリに変更がプッシュされるとトリガーされます。  |

{% endif %}

#### `hook` カテゴリアクション

| アクション            | 説明                                                                              |
| ---------------- | ------------------------------------------------------------------------------- |
| `create`         | Organization が所有するリポジトリに[新たなフックが追加された](/articles/creating-webhooks)ときにトリガーされます。 |
| `config_changed` | 既存のフックに変更された設定がある場合にトリガーされます。                                                   |
| `destroy`        | 既存のフックがリポジトリから削除されたときにトリガーされます。                                                 |
| `events_changed` | フックでのイベントが変更された場合にトリガーされます。                                                     |

#### `integration_installation_request` カテゴリアクション

| アクション    | 説明                                                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Organization のメンバーが、Organization 内で使用するために、Organization のオーナーにインテグレーションをインストールすることを要求するときにトリガーされます。                                |
| `close`  | Organization 内で使用するためにインテグレーションをインストールする要求が、Organization のオーナーにより承認または拒否されるか、あるいは要求を公開した Organization のメンバーによりキャンセルされるときにトリガーされます。 |

#### `issue` カテゴリアクション

| アクション     | 説明                                                                                     |
| --------- | -------------------------------------------------------------------------------------- |
| `destroy` | リポジトリで管理者権限を所有する Organization のオーナーまたは誰かが、Organization が所有するリポジトリから問題を削除するときにトリガーされます。 |

{% if currentVersion == "free-pro-team@latest" %}

#### `marketplace_agreement_signature` カテゴリアクション

| アクション    | 説明                                                                                      |
| -------- | --------------------------------------------------------------------------------------- |
| `create` | {% data variables.product.prodname_marketplace %} Developer Agreement に署名するときにトリガーされます。 |

#### `marketplace_listing` カテゴリアクション

| アクション     | 説明                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| `承認`      | 一覧表を {% data variables.product.prodname_marketplace %}に掲載することが承認されるときにトリガーされます。     |
| `create`  | {% data variables.product.prodname_marketplace %} で自分のアプリケーションの一覧表を作成するときにトリガーされます。 |
| `delist`  | 一覧表が {% data variables.product.prodname_marketplace %} から削除されるときにトリガーされます。          |
| `redraft` | 一覧表がドラフト状態に戻されるときにトリガーされます。                                                         |
| `reject`  | 一覧表が {% data variables.product.prodname_marketplace %} に掲載することを認められないときにトリガーされます。   |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

#### `members_can_create_pages` カテゴリアクション

詳しい情報については「[Organizationの{% data variables.product.prodname_pages %}サイトの公開の管理](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。

| アクション     | 説明                                                                                                             |
|:--------- |:-------------------------------------------------------------------------------------------------------------- |
| `enable`  | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を有効化するときトリガーされます。 |
| `disable` | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を無効化するときトリガーされます。 |

{% endif %}

#### `org` カテゴリアクション

| アクション                                                                                                                                    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `advanced_security_policy_selected_member_disabled`                                                                                      | Enterprise のオーナーが、Organization が所有するリポジトリで {% data variables.product.prodname_GH_advanced_security %} 機能を有効化できないようにするとトリガーされます。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled`                                                                                       | Enterprise のオーナーが、Organization が所有するリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} 機能を有効化できるようにするとトリガーされます。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `audit_log_export`                                                                                                                       | Organization の管理者が [Organization の Audit log のエクスポートを作成する](#exporting-the-audit-log)ときにトリガーされます。 エクスポートにクエリが含まれていた場合、ログには使用されたクエリとそのクエリに一致する Audit log エントリの数が一覧表示されます。                                                                                                                                                                                                                                                              |
| `block_user`                                                                                                                             | Organization のオーナーが[Organization のリポジトリにユーザーがアクセスするのをブロックする](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                      |
| `cancel_invitation`                                                                                                                      | Organization の招待が取り消されている場合にトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`                                                                                                                  | Organization に対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳しい情報については、「[Organization の暗号化されたシークレットを作成する](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)」を参照してください。{% endif %}                                                                                                                                                                                    |{% if currentVersion == "free-pro-team@latest"%}
| `disable_oauth_app_restrictions`                                                                                                         | オーナーが Organization に対して[{% data variables.product.prodname_oauth_app %} のアクセス制限を無効にする](/articles/disabling-oauth-app-access-restrictions-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                        |
| `disable_saml`                                                                                                                           | Organization の管理者が Organization に対して SML シングルサインオンを無効にするときにトリガーされます。{% endif %}
| `disable_member_team_creation_permission`                                                                                                | Organization のオーナーがオーナーに Team 作成を制限するときにトリガーされます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 |{% if currentVersion != "github-ae@latest" %}
| `disable_two_factor_requirement`                                                                                                         | Organization のすべてのメンバー{% if currentVersion == "free-pro-team@latest" %}、支払いマネージャー、{% endif %}および外部のコラボレータに対してオーナーが 2 要素認証を無効化するときにトリガーされます。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable_oauth_app_restrictions`                                                                                                          | オーナーが Organization に対して[{% data variables.product.prodname_oauth_app %} のアクセス制限を有効にする](/articles/enabling-oauth-app-access-restrictions-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                         |
| `enable_saml`                                                                                                                            | Organization の管理者が Organization に対して [SAML シングルサインオン を有効にする](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)ときにトリガーされます。{% endif %}
| `enable_member_team_creation_permission`                                                                                                 | メンバーが Team を作成するのを Organizationのオーナーが許可するときにトリガーされます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 |{% if currentVersion != "github-ae@latest" %}
| `enable_two_factor_requirement`                                                                                                          | Organization のすべてのメンバー{% if currentVersion == "free-pro-team@latest" %}、支払いマネージャー、{% endif %}および外部のコラボレータに対してオーナーが 2 要素認証を有効化するときにトリガーされます。{% endif %}
| `invite_member`                                                                                                                          | [新しいユーザーがOrganization に参加するよう招待](/articles/adding-organization-members-to-a-team)されたにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `oauth_app_access_approved`                                                                                                              | オーナーが [{% data variables.product.prodname_oauth_app %} へのアクセスを許可する](/articles/approving-oauth-apps-for-your-organization/)ときにトリガーされます。                                                                                                                                                                                                                                                                                             |
| `oauth_app_access_denied`                                                                                                                | オーナーが Organization への[以前に承認した {% data variables.product.prodname_oauth_app %} のアクセス権を無効にする](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                         |
| `oauth_app_access_requested`                                                                                                             | オーナーが Organization への {% data variables.product.prodname_oauth_app %} アクセスを許可することを Organization のメンバーが要求するときにトリガーされます。{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`                                                                                                            | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳しい情報については、「[Organization へのセルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)」を参照してください。                                                                                                                                                                                                                                   |
| `remove_actions_secret`                                                                                                                  | {% data variables.product.prodname_actions %} シークレットが削除されるとトリガーされます。{% endif %}{% if currentVersion == "free-pro-team@latest"%}
| `remove_billing_manager`                                                                                                                 | [オーナーが Organization から支払いマネージャーを削除する](/articles/removing-a-billing-manager-from-your-organization/)とき、または [Organization で 2 要素認証が義務付けられている](/articles/requiring-two-factor-authentication-in-your-organization)が、支払いマネージャーが 2 要素認証を使用しないか 2 要素認証を無効にしているときにトリガーされます。 
{% endif %}
| `remove_member`                                                                                                                          | [オーナーが Organization からメンバーを削除する](/articles/removing-a-member-from-your-organization/)とき、または {% if currentVersion != "github-ae@latest" %}[Organization で 2 要素認証が義務付けられている](/articles/requiring-two-factor-authentication-in-your-organization)が、Organization のメンバーが 2 要素認証を使用しないか 2 要素認証を無効にしているときにトリガーされます{% endif %}。 Organization から [Organization のメンバーが自身を削除](/articles/removing-yourself-from-an-organization/)するときにもトリガーされます。 |
| `remove_outside_collaborator`                                                                                                            | オーナーが Organization から外部のコラボレータを削除するとき、{% if currentVersion != "github-ae@latest" %}または[Organization で 2 要素認証が義務付けられている](/articles/requiring-two-factor-authentication-in-your-organization)が、外部のコラボレータが 2 要素認証を使用しないか 2 要素認証を無効にしているときにトリガーされます{% endif %}。 |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_self_hosted_runner`                                                                                                              | セルフホストランナーが削除されたときにトリガーされます。 詳しい情報については、「[Organization からランナーを削除する](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)」を参照してください。                                                                                                                                                                                                                                                |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `revoke_external_identity`                                                                                                               | Organization のオーナーがメンバーのリンクされたアイデンティティを取り消すときにトリガーされます。 詳細は、「[Organizationへのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。                                                                                                                                   |
| `revoke_sso_session`                                                                                                                     | Organization のオーナーがメンバーの SAML セッションを取り消すときにトリガーされます。 詳細は、「[Organizationへのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。                                                                                                                                      |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `runner_group_created`                                                                                                                   | セルフホストランナーグループが作成されたときにトリガーされます。 詳しい情報については、「[Organization のセルフホストランナーグループを作成する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)」を参照してください。                                                                                                                                                                                           |
| `runner_group_created`                                                                                                                   | セルフホストランナーグループが削除されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループの削除](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。                                                                                                                                                                                                                                |
| `runner_group_updated`                                                                                                                   | セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループのアクセスポリシーの変更](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。                                                                                                                                                                                               |
| `runner_group_runners_added`                                                                                                             | セルフホストランナーがグループに追加されたときにトリガーされます。 詳しい情報については、「[セルフホストランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。                                                                                                                                                                                                                        |
| `runner_group_runner_removed`                                                                                                            | セルフホストランナーをグループから削除するのにREST APIが使われたときにトリガーされます。 詳しい情報については、「[Organization のグループからセルフホストランナーを削除する](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)」を参照してください。                                                                                                                                                                                                                                  |
| `runner_group_runners_updated`                                                                                                           | ランナーグループのメンバーリストが更新されたときにトリガーされます。 詳しい情報については、「[Organization のグループにセルフホストランナーを設定する](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。{% endif %}{% if currentVersion == "free-pro-team@latest"%}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `self_hosted_runner_updated`                                                                                                             | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳しい情報については、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」を参照してください。{% endif %}
| `unblock_user`                                                                                                                           | Organizationのオーナーが[ Organization からユーザりブロックを解除](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)するときにトリガーされます。{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`                                                                                                                  | {% data variables.product.prodname_actions %} シークレットが更新されるとトリガーされます。{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `update_new_repository_default_branch_setting`                                                                                           | オーナーが Organization の新しいリポジトリのデフォルトブランチの名前を変更するときにトリガーされます。 詳しい情報については、「[Organization のリポジトリのデフォルブランチ名を管理する](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)」を参照してください。{% endif %}
| `update_default_repository_permission`                                                                                                   | オーナーが Organization のメンバーのデフォルトリポジトリの権限レベルを変更するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                           |
| `update_member`                                                                                                                          | オーナーがユーザーのロールをオーナーからメンバーに、またはメンバーからオーナーに変更するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                             |
| `update_member_repository_creation_permission`                                                                                           | オーナーが Organization のメンバーのリポジトリ作成権限を変更するときにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `update_saml_provider_settings`                                                                                                          | Organization の SAML プロバイダ設定が更新されるときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                        |
| `update_terms_of_service`                                                                                                                | Organization が標準利用規約と企業向け利用規約を切り替えるときにトリガーされます。 詳細は「[企業利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `org_credential_authorization` カテゴリアクション

| アクション          | 説明                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grant`        | [SAML シングルサインオンに使用するクレデンシャルをメンバーが認可する](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)ときにトリガーされます。                                                    |
| `deauthorized` | [SAML シングルサインオンに使用するクレデンシャルの認可をメンバーが取り消す](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)ときにトリガーされます。                                                 |
| `revoke`       | オーナーが[認可された認証情報を取り消す](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)ときにトリガーされます。 |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
#### `organization_label` カテゴリアクション

| アクション     | 説明                         |
| --------- | -------------------------- |
| `create`  | デフォルトラベルが作成されるときにトリガーされます。 |
| `update`  | デフォルトラベルが編集されるときにトリガーされます。 |
| `destroy` | デフォルトラベルが削除されるときにトリガーされます。 |

{% endif %}

#### `oauth_application` カテゴリアクション

| アクション           | 説明                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ |
| `create`        | 新たな {% data variables.product.prodname_oauth_app %} が作成されるときにトリガーされます。                   |
| `destroy`       | 既存の {% data variables.product.prodname_oauth_app %} が削除されるときにトリガーされます。                   |
| `reset_secret`  | {% data variables.product.prodname_oauth_app %} のクライアント シークレットがリセットされるときにトリガーされます。       |
| `revoke_tokens` | {% data variables.product.prodname_oauth_app %} のユーザートークンが取り消されるときにトリガーされます。             |
| `移譲`            | 既存の {% data variables.product.prodname_oauth_app %} が新しい Organization に移譲されるときにトリガーされます。 |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
#### `packages` カテゴリアクション

| アクション                       | 説明                                                                                                                                      |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `package_version_published` | パッケージのバージョンが公開されるとトリガーされます。                                                                                                             |
| `package_version_deleted`   | 特定のパッケージのバージョンが削除されるとトリガーされます。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。 |
| `package_deleted`           | パッケージ全体が削除されるとトリガーされます。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。        |
| `package_version_restored`  | 特定のパッケージのバージョンが削除されるとトリガーされます。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。 |
| `package_restored`          | パッケージ全体がリストアされるとトリガーされます。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。      |

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

#### `payment_method` カテゴリアクション

| アクション    | 説明                                                                   |
| -------- | -------------------------------------------------------------------- |
| `clear`  | ファイル上の支払い方法が[削除される](/articles/removing-a-payment-method)ときにトリガーされます。 |
| `create` | 新しいクレジット カードや PayPal アカウントなど、新たな支払い方法が追加されるときにトリガーされます。              |
| `update` | 既存の支払い方法が更新されるときにトリガーされます。                                           |

{% endif %}

#### `profile_picture` カテゴリアクション
| アクション  | 説明                                           |
| ------ | -------------------------------------------- |
| update | Organization のプロファイル写真を設定または更新するときにトリガーされます。 |

#### `project` カテゴリアクション

| アクション                    | 説明                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------------- |
| `create`                 | プロジェクト ボードが作成されるときにトリガーされます。                                                           |
| `link`                   | リポジトリがプロジェクト ボードにリンクされるときにトリガーされます。                                                    |
| `rename`                 | プロジェクトボードの名前が変更されるときにトリガーされます。                                                         |
| `update`                 | プロジェクト ボードが更新されるときにトリガーされます。                                                           |
| `delete`                 | プロジェクトボードが削除されるときにトリガーされます。                                                            |
| `unlink`                 | リポジトリがプロジェクトボードからリンク解除されるときにトリガーされます。                                                  |
| `update_org_permission`  | Organization のすべてのメンバーに対して、基本レベルの権限が変更または削除されるときにトリガーされます。                             |
| `update_team_permission` | Team のプロジェクト ボードの権限レベルが変更されるとき、または Team がプロジェクト ボードに追加または削除されるときにトリガーされます。             |
| `update_user_permission` | Organization のメンバーまたは外部コラボレーターがプロジェクト ボードに追加または削除されるとき、または彼らの権限レベルが変更されている場合にトリガーされます。 |

#### `protected_branch` カテゴリアクション

| アクション                                                 | 説明                                                                                                                                                                                      |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                                              | ブランチでブランチの保護が有効になるときにトリガーされます。                                                                                                                                                          |
| `destroy`                                             | ブランチでブランチの保護が無効になるときにトリガーされます。                                                                                                                                                          |
| `update_admin_enforced`                               | リポジトリの管理者に対してブランチの保護が実施されるときにトリガーされます。                                                                                                                                                  |
| `update_require_code_owner_review`                    | 必須コードオーナーレビューの実施がブランチで更新されるときにトリガーされます。                                                                                                                                                 |
| `dismiss_stale_reviews`                               | 古い Pull Request の却下の実施がブランチで更新されるときにトリガーされます。                                                                                                                                           |
| `update_signature_requirement_enforcement_level`      | 必須コミット署名の実施がブランチで更新されるときにトリガーされます。                                                                                                                                                      |
| `update_pull_request_reviews_enforcement_level`       | 必須 Pull Request レビューの実施がブランチで更新されるときにトリガーされます。                                                                                                                                          |
| `update_required_status_checks_enforcement_level`     | 必須ステータスチェックの実施がブランチで更新されるときにトリガーされます。                                                                                                                                                   |
| `update_strict_required_status_checks_policy`         | マージする前に最新にする必要があるブランチの要件が変更されるときにトリガーされます。                                                                                                                                              |
| `rejected_ref_update`                                 | ブランチ更新の試行が拒否されるときにトリガーされます。                                                                                                                                                             |
| `policy_override`                                     | ブランチ保護の要件がリポジトリ管理者によってオーバーライドされるときにトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| `update_allow_force_pushes_enforcement_level`         | 保護されたブランチについて、フォースプッシュが有効化または無効化されるときにトリガーされます。                                                                                                                                         |
| `update_allow_deletions_enforcement_level`            | 保護されたブランチについて、ブランチ削除が有効化または無効化されるときにトリガーされます。                                                                                                                                           |
| `update_linear_history_requirement_enforcement_level` | 保護されたブランチについて、必須の直線状のコミット履歴が有効化または無効化されるときにトリガーされます。                                                                                                                                    |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `pull_request`カテゴリのアクション

| アクション                   | 説明                                                                            |
| ----------------------- | ----------------------------------------------------------------------------- |
| `create`                | Pull Requestが作成されたときにトリガーされます。                                                |
| `close`                 | Pull Requestがマージされずにクローズされたときにトリガーされます。                                       |
| `reopen`                | 以前クローズされたPull Requestが再オープンされたときにトリガーされます。                                    |
| `merge`                 | Pull Requestがマージされたときにトリガーされます。                                               |
| `indirect_merge`        | Pull Requestのコミットがターゲットブランチにマージされたことで、そのPull Requestがマージされたと考えられるときにトリガーされます。 |
| `ready_for_review`      | Pull Requestがレビューの準備ができたとしてマークされたときにトリガーされます。                                 |
| `converted_to_draft`    | Pull Requestがドラフトに変換されたときにトリガーされます。                                           |
| `create_review_request` | レビューが要求されたときにトリガーされます。                                                        |
| `remove_review_request` | レビューの要求が削除されたときにトリガーされます。                                                     |

#### `pull_request_review`カテゴリのアクション

| アクション     | 説明                        |
| --------- | ------------------------- |
| `サブミット`   | レビューがサブミットされたときにトリガーされます。 |
| `dismiss` | レビューが却下されたときにトリガーされます。    |
| `delete`  | レビューが削除されたときにトリガーされます。    |

#### `pull_request_review_comment`カテゴリのアクション

| アクション    | 説明                         |
| -------- | -------------------------- |
| `create` | レビューコメントが追加されたときにトリガーされます。 |
| `update` | レビューコメントが変更されたときにトリガーされます。 |
| `delete` | レビューコメントが削除されたときにトリガーされます。 |
{% endif %}

#### `repo` カテゴリアクション

| アクション                                 | 説明                                                                                                                                                                                                                                                         |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | ユーザが Organization 内のリポジトリの[可視性を変更](/github/administering-a-repository/setting-repository-visibility)するとトリガーされます。                                                                                                                                           |
| `actions_enabled`                     | リポジトリに対して {% data variables.product.prodname_actions %} が有効化されたときにトリガーされます。 UI を使用して表示できます。 REST API を使用して Audit log にアクセスする場合、このイベントは対象外です。 詳しい情報については、「[REST API を使用する](#using-the-rest-api)」を参照してください。                                                  |
| `add_member`                          | ユーザーが[リポジトリへのコラボレーションアクセスへの招待](/articles/inviting-collaborators-to-a-personal-repository)を受諾するときにトリガーされます。                                                                                                                                                 |
| `add_topic`                           | リポジトリ管理者がリポジトリに[トピックを追加](/articles/classifying-your-repository-with-topics)するとトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `advanced_security_disabled`          | リポジトリ管理者がリポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能を無効にするとトリガーされます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。             |
| `advanced_security_enabled`           | リポジトリ管理者がリポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能を有効にするとトリガーされます。 詳しい情報については、「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。{% endif %}
| `archived`                            | リポジトリの管理者が[リポジトリをアーカイブする](/articles/about-archiving-repositories)ときにトリガーされます。{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access` | 公開リポジトリで[匿名の Git 読み取りアクセスが無効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                           |
| `config.enable_anonymous_git_access`  | 公開リポジトリで[匿名の Git 読み取りアクセスが有効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                           |
| `config.lock_anonymous_git_access`    | リポジトリの[匿名の Git 読み取りアクセス設定がロックされる](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。                                                                                      |
| `config.unlock_anonymous_git_access`  | リポジトリの[匿名の Git 読み取りアクセス設定がロック解除される](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。{% endif %}
| `create`                              | [新しいリポジトリが作成された](/articles/creating-a-new-repository)ときにトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`               | リポジトリに対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳しい情報については、「[リポジトリの暗号化されたシークレットを作成する](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。{% endif %}
| `destroy`                             | [リポジトリが削除される](/articles/deleting-a-repository)ときにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `disable`                             | リポジトリが無効になるときにトリガーされます ([残高不足](/articles/unlocking-a-locked-account)などの場合)。{% endif %}
| `enable`                              | リポジトリが有効化されたときにトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_actions_secret`               | {% data variables.product.prodname_actions %} シークレットが削除されたときにトリガーされます。{% endif %}
| `remove_member`                       | [ユーザがコラボレータとしてリポジトリから削除](/articles/removing-a-collaborator-from-a-personal-repository)されたときにトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`         | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳しい情報については、「[リポジトリにセルフホストランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)」を参照してください。                                                                   |
| `remove_self_hosted_runner`           | セルフホストランナーが削除されたときにトリガーされます。 詳しい情報については、「[リポジトリからランナーを削除する](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)」を参照してください。                                                                                 |{% endif %}
| `remove_topic`                        | リポジトリの管理者がリポジトリからトピックを削除するときにトリガーされます。                                                                                                                                                                                                                     |
| `rename`                              | [リポジトリの名前が変更された](/articles/renaming-a-repository)ときにトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `self_hosted_runner_updated`          | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳しい情報については、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」を参照してください。{% endif %}
| `移譲`                                  | [リポジトリが移譲される](/articles/how-to-transfer-a-repository)ときにトリガーされます。                                                                                                                                                                                          |
| `transfer_start`                      | リポジトリの移譲が行われようとしているときにトリガーされます。                                                                                                                                                                                                                            |
| `unarchived`                          | リポジトリ管理者がリポジトリをアーカイブ解除するとトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`               | {% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

#### `repository_advisory` カテゴリアクション

| アクション              | 説明                                                                                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `close`            | ユーザがセキュリティアドバイザリをクローズするとトリガーされます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のセキュリティアドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。 |
| `cve_request`      | ユーザがセキュリティアドバイザリのドラフトのために {% data variables.product.prodname_dotcom %} に CVE (Common Vulnerabilities and Exposures) 番号をリクエストするとトリガーされます。                                                              |
| `github_broadcast` | {% data variables.product.prodname_dotcom %} が {% data variables.product.prodname_advisory_database %} でセキュリティアドバイザリを公開するとトリガーされます。                                                                 |
| `github_withdraw`  | {% data variables.product.prodname_dotcom %} が誤って公開されたセキュリティアドバイザリを撤回するとトリガーされます。                                                                                                                     |
| `オープン`             | ユーザがドラフトのセキュリティアドバイザリをオープンするとトリガーされます。                                                                                                                                                                |
| `publish`          | ユーザがセキュリティアドバイザリを公開するとトリガーされます。                                                                                                                                                                       |
| `reopen`           | ユーザがドラフトのセキュリティアドバイザリとして再オープンするとトリガーされます。                                                                                                                                                             |
| `update`           | ユーザがドラフトまたは公開済みのセキュリティアドバイザリを編集するとトリガーされます。                                                                                                                                                           |

#### `repository_content_analysis`カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                          |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enable`  | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対してデータ使用設定を有効にする](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)ときにトリガーされます。 |
| `disable` | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対してデータ使用設定を無効にする](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)ときにトリガーされます。 |

{% endif %}{% if currentVersion != "github-ae@latest" %}

#### `repository_dependency_graph` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリの依存関係グラフを無効にするとトリガーされます。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。 |
| `enable`  | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリの依存関係グラフを有効にするとトリガーされます。                                                                                                                  |

{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### `repository_secret_scanning` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリのシークレットスキャンを無効にするとトリガーされます。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリのシークレットスキャンを有効にするとトリガーされます。                                                                                                     |

{% endif %}{% if currentVersion != "github-ae@latest" %}
#### `repository_vulnerability_alert` カテゴリアクション

| アクション    | 説明                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | {% data variables.product.product_name %} が脆弱性のある依存関係を使用するリポジトリの{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}セキュリティ{% endif %}アラートを作成するとトリガーされます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。 |
| `却下`     | Organization のオーナーまたはリポジトリへの管理者アクセスを持つユーザが、脆弱性のある依存関係に関する{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}セキュリティ{% endif %}アラートを却下したときにトリガーされます。                                                                                                                                          |
| `解決`     | リポジトリへの書き込みアクセスを持つユーザが変更をプッシュして、プロジェクトの依存関係の脆弱性を更新および解決するとトリガーされます。                                                                                                                                                                                                                                                                                                                                     |

{% endif %}{% if currentVersion == "free-pro-team@latest" %}
#### `repository_vulnerability_alerts` カテゴリアクション

| アクション                    | 説明                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorized_users_teams` | Organization のオーナーまたはリポジトリへの管理者権限を持つユーザが、リポジトリ内の脆弱性のある依存関係の {% data variables.product.prodname_dependabot_alerts %} を受け取ることを許可されたユーザまたは Team のリストを更新するとトリガーされます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。 |
| `disable`                | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが {% data variables.product.prodname_dependabot_alerts %} を無効にするとトリガーされます。                                                                                                                                                                                                                                        |
| `enable`                 | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが {% data variables.product.prodname_dependabot_alerts %} を有効にするとトリガーされます。                                                                                                                                                                                                                                        |

{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### `secret_scanning` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが既存のすべての{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリのシークレットスキャンを無効にするとトリガーされます。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | Organization のオーナーが既存のすべての{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリのシークレットスキャンを有効にするとトリガーされます。                                                                                                     |

#### `secret_scanning_new_repos` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが新規のすべての{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリのシークレットスキャンを無効にするとトリガーされます。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | Organization のオーナーが新規のすべての{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリのシークレットスキャンを有効にするとトリガーされます。                                                                                                     |

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `sponsors` カテゴリアクション

| アクション                                         | 説明                                                                                                                                                                                                                                                                     |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom_amount_settings_change`               | カスタム金額を有効または無効にするとき、または提案されたカスタム金額を変更するときにトリガーされます (「[スポンサーシップ層を管理する](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)」を参照)。                                                                                         |
| `repo_funding_links_file_action`              | リポジトリで FUNDING ファイルを変更したときにトリガーされます (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)                                                                                                                                             |
| `sponsor_sponsorship_cancel`                  | スポンサーシップをキャンセルしたときにトリガーされます (「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)                                                                                                                                                                           |
| `sponsor_sponsorship_create`                  | アカウントをスポンサーするとトリガーされます (「[オープンソースコントリビューターに対するスポンサー](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照)                                                                                                                         |
| `sponsor_sponsorship_payment_complete`        | アカウントをスポンサーし、支払が処理されるとトリガーされます (「[オープンソースコントリビューターに対するスポンサー](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照)                                                                                                                 |
| `sponsor_sponsorship_preference_change`       | スポンサードアカウントからメールで最新情報を受け取るかどうかを変更するとトリガーされます (「[スポンサーシップを管理する](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)」を参照)                                                                                                                           |
| `sponsor_sponsorship_tier_change`             | スポンサーシップをアップグレードまたはダウングレードしたときにトリガーされます (「[スポンサーシップをアップグレードする](/articles/upgrading-a-sponsorship)」および「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)                                                                                                   |
| `sponsored_developer_approve`                 | {% data variables.product.prodname_sponsors %} アカウントが承認されるとトリガーされます（「[Organization に{% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照）              |
| `sponsored_developer_create`                  | {% data variables.product.prodname_sponsors %} アカウントが作成されるとトリガーされます（「[Organization に{% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照）              |
| `sponsored_developer_disable`                 | {% data variables.product.prodname_sponsors %} アカウントが無効になるとトリガーされます                                                                                                                                                                                                    |
| `sponsored_developer_redraft`                 | {% data variables.product.prodname_sponsors %} アカウントが承認済みの状態からドラフト状態に戻るとトリガーされます                                                                                                                                                                                       |
| `sponsored_developer_profile_update`          | スポンサード Organization のプロフィールを編集するとトリガーされます（「[{% data variables.product.prodname_sponsors %} のプロフィール詳細を編集する](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)」を参照）                                             |
| `sponsored_developer_request_approval`        | 承認のために {% data variables.product.prodname_sponsors %} のアプリケーションをサブミットするとトリガーされます（「[Organization に{% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照） |
| `sponsored_developer_tier_description_update` | スポンサーシップ層の説明を変更したときにトリガーされます (「[スポンサーシップ層を管理する](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)」を参照)                                                                                                                         |
| `sponsored_developer_update_newsletter_send`  | スポンサーにメールで最新情報を送信するとトリガーされます (「[スポンサーに連絡する](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)」を参照)                                                                                                                                    |
| `waitlist_invite_sponsored_developer`         | 待ちリストから {% data variables.product.prodname_sponsors %} に参加するよう招待されたときにトリガーされます（「[Organization に {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照）  |
| `waitlist_join`                               | スポンサード Organization になるために待ちリストに参加するとトリガーされます（「[Organization に {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照）                                   |
{% endif %}

#### `team` カテゴリアクション

| アクション                | 説明                                                                                                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member`         | Organization のメンバーが[Team に追加される](/articles/adding-organization-members-to-a-team)ときにトリガーされます。                                                                        |
| `add_repository`     | リポジトリの管理が Team に任せられるときにトリガーされます。                                                                                                                                    |
| `change_parent_team` | 子チームが作成されるとき、または[子チームの親が変更される](/articles/moving-a-team-in-your-organization-s-hierarchy)ときにトリガーされます。                                                                 |
| `change_privacy`     | Team のプライバシー レベルが変更されるときにトリガーされます。                                                                                                                                   |
| `create`             | 新しい Team が更新されるとトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}


`demote_maintainer` | ユーザがチームメンテナから Team メンバーに降格されるとトリガーされます。 詳しい情報については、「[Organization メンバーへの"team maintainer"権限を付与する](/organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member)」を参照してください。{% endif %} | `destroy` | Team が Organization から削除されるとトリガーされます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} `eam.promote_maintainer` | ユーザが Team メンバーからTeamメンテナに昇格するとトリガーされます。 詳しい情報については、「[Organizationメンバーへの"team maintainer"権限を付与する](/organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member)」を参照してください。{% endif %} | `remove_member` | Organization のメンバーが[Team から削除](/articles/removing-organization-members-from-a-team)されるとトリガーされます。 | `remove_repository` | リポジトリが Team の管理下でなくなるとトリガーされます。

#### `team_discussions` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが Organization の Team ディスカッションを無効にするときにトリガーされます。 詳しい情報については [Organization の Team ディスカッションの無効化](/articles/disabling-team-discussions-for-your-organization)を参照してください。 |
| `enable`  | Organization のオーナーが Organization の Team ディスカッションを有効にするときにトリガーされます。                                                                                                                     |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest"%}
#### `workflows` カテゴリアクション

{% data reusables.actions.actions-audit-events-workflow %}

{% endif %}

### 参考リンク

- "[Organization を安全に保つ](/articles/keeping-your-organization-secure)"
