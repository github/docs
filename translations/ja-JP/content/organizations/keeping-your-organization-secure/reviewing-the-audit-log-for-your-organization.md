---
title: Organization の Audit log をレビューする
intro: Audit log により、Organization の管理者は Organization のメンバーによって行われたアクションをすばやくレビューできます。 これには、誰がいつ何のアクションを実行したかなどの詳細が残されます。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 監査ログのレビュー
---

## Audit log にアクセスする

Audit log には、過去 90 日以内に Organization に影響を与えたアクティビティによってトリガーされたイベントが一覧表示されます。 Organization の Audit log にアクセスできるのはオーナーのみです。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Audit log を検索する

{% data reusables.audit_log.audit-log-search %}

### 実行されたアクションに基づく検索

特定のイベントを検索するには、クエリで `action` 修飾子を使用します。 Audit log に一覧表示されるアクションは以下のカテゴリに分類されます。

| カテゴリ名                                                                                                                                                                                                          | 説明                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| [`アカウント`](#account-category-actions)                                                                                                                                                                           | Organization アカウントに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                        |
| [`advisory_credit`](#advisory_credit-category-actions)                                                                                                                                                         | {% data variables.product.prodname_advisory_database %} のセキュリティアドバイザリのコントリビューターのクレジットに関連するすべてのアクティビティが対象です。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のセキュリティアドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。                               |
| [`支払い`](#billing-category-actions)                                                                                                                                                                             | Organization の支払いに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                         |
| [`business`](#business-category-actions)                                                                                                                                                                       | Enterpriseのビジネス設定に関連するアクティビティを含みます。                                                                                                                                                                                                                                                                             |
| [`codespaces`](#codespaces-category-actions)                                                                                                                                                                   | OrganizationのCodespacesに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                   |
| [`dependabot_alerts`](#dependabot_alerts-category-actions)                                                                                                                                                     | 既存のリポジトリ内の {% data variables.product.prodname_dependabot %} アラートの Organization レベルの設定アクティビティが対象です。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。                                                                          |
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions)                                                                                                                                 | Organization 内に作成された新しいリポジトリ内の {% data variables.product.prodname_dependabot %} アラートの Organization レベルの設定アクティビティが対象です。                                                                                                                                                                                          |
| [`dependabot_security_updates`](#dependabot_security_updates-category-actions)                                                                                                                                 | 既存のリポジトリ内の {% data variables.product.prodname_dependabot_security_updates %} の Organization レベルの設定アクティビティが対象です。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。         |
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions)                                                                                                             | Organization で作成された新しいリポジトリ内の {% data variables.product.prodname_dependabot_security_updates %} の Organization レベルの設定アクティビティが対象です。                                                                                                                                                                            |
| [`dependency_graph`](#dependency_graph-category-actions)                                                                                                                                                       | リポジトリの依存関係グラフの Organization レベルの設定アクティビティが対象です。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。                                                                                                                                                |
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions)                                                                                                                                   | Organization 内に作成された新しいリポジトリの Organization レベルの設定アクティビティが対象です。{% endif %}
| [`discussion_post`](#discussion_post-category-actions)                                                                                                                                                         | Team ページに投稿されたディスカッションに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                    |
| [`discussion_post_reply`](#discussion_post_reply-category-actions)                                                                                                                                             | Teamページにポストされたディスカッションへの返信に関連するすべてのアクティビティを含みます。{% ifversion fpt or ghes or ghec %}
| [`Enterprise`](#enterprise-category-actions)                                                                                                                                                                   | Enterprise設定に関連するアクティビティを含みます。                                                                                                                                                                                                                                                                                  |{% endif %}
| [`フック`](#hook-category-actions)                                                                                                                                                                                | webhookに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                                   |
| [`integration_installation_request`](#integration_installation_request-category-actions)                                                                                                                       | Organization 内で使用するインテグレーションをオーナーが承認するよう求める、 Organization メンバーからのリクエストに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                    |
| [`ip_allow_list`](#ip_allow_list)                                                                                                                                                                              | Contains activitites related to enabling or disabling the IP allow list for an organization.                                                                                                                                                                                                                    |
| [`ip_allow_list_entry`](#ip_allow_list_entry)                                                                                                                                                                  | Contains activities related to the creation, deletion, and editing of an IP allow list entry for an organization.                                                                                                                                                                                               |
| [`Issue`](#issue-category-actions)                                                                                                                                                                             | Issue の削除に関連するアクティビティが対象です。                                                                                                                                                                                                                                                                                     |{% ifversion fpt or ghec %}
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions)                                                                                                                         | {% data variables.product.prodname_marketplace %} Developer Agreement の署名に関連するすべての活動が対象です。                                                                                                                                                                                                                      |
| [`marketplace_listing`](#marketplace_listing-category-actions)                                                                                                                                                 | {% data variables.product.prodname_marketplace %}.{% endif %}{% ifversion fpt or ghes > 3.0 or ghec %} でのアプリのリストに関連するすべてのアクティビティが対象です。                                                                                                                                                                          |
| [`members_can_create_pages`](#members_can_create_pages-category-actions)                                                                                                                                       | Organization 内のリポジトリの {% data variables.product.prodname_pages %} サイトの公開の管理に関連するすべてのアクティビティが対象です。 詳しい情報については「[Organizationの{% data variables.product.prodname_pages %}サイトの公開の管理](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。 |{% endif %}
| [`org`](#org-category-actions)                                                                                                                                                                                 | Organizationのメンバーシップに関連するアクティビティを含みます。{% ifversion fpt or ghec %}
| [`org_credential_authorization`](#org_credential_authorization-category-actions)                                                                                                                               | SAML シングルサインオンで使用する認可クレデンシャルに関連するすべてのアクティビティが対象です。{% endif %}{% ifversion fpt or ghes or ghae or ghec %}
| [`organization_label`](#organization_label-category-actions)                                                                                                                                                   | Organization のリポジトリのデフォルトラベルに関連するすべてのアクティビティが対象です。{% endif %}
| [`oauth_application`](#oauth_application-category-actions)                                                                                                                                                     | OAuth アプリに関連するすべてのアクティビティが対象です。{% ifversion fpt or ghes > 3.0 or ghec %}
| [`パッケージ`](#packages-category-actions)                                                                                                                                                                          | {% data variables.product.prodname_registry %} に関連するすべてのアクティビティが対象です。{% endif %}{% ifversion fpt or ghec %}
| [`payment_method`](#payment_method-category-actions)                                                                                                                                                           | Organization の GitHub への支払い方法に関連するすべてのアクティビティが対象です。{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                                                                                                                                         | Organization のプロフィール画像に関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                    |
| [`project`](#project-category-actions)                                                                                                                                                                         | プロジェクト ボードに関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                     |
| [`protected_branch`](#protected_branch-category-actions)                                                                                                                                                       | 保護されたブランチ関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                  |
| [`repo`](#repo-category-actions)                                                                                                                                                                               | Organization が所有するリポジトリに関連するアクティビティを含みます。{% ifversion fpt or ghec %}
| [`repository_advisory`](#repository_advisory-category-actions)                                                                                                                                                 | {% data variables.product.prodname_advisory_database %} のセキュリティアドバイザリに関連するリポジトリレベルのアクティビティが対象です。  詳しい情報については、「[{% data variables.product.prodname_dotcom %} のセキュリティアドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。                                         |
| [`repository_content_analysis`](#repository_content_analysis-category-actions)                                                                                                                                 | [プライベート リポジトリに対するデータの使用を有効または無効にする](/articles/about-github-s-use-of-your-data)に関連するすべての活動が対象です。{% endif %}{% ifversion fpt or ghec %}
| [`repository_dependency_graph`](#repository_dependency_graph-category-actions)                                                                                                                                 | プライベートリポジトリの依存関係グラフの有効化または無効化に関連する                                                                                                                                                                                                                                                                              |
| {% ifversion fpt or ghec %}リポジトリ{% endif %}レベルのアクティビティが含まれます。 For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."{% endif %} |                                                                                                                                                                                                                                                                                                                 |
| [`repository_secret_scanning`](#repository_secret_scanning-category-actions)                                                                                                                                   | シークレットスキャンに関連するリポジトリレベルのアクティビティが対象です。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。                                                                                                                                                                       |{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
| [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions)                                                                                                                           | [脆弱性のある依存関係](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)の {% data variables.product.prodname_dependabot_alerts %} に関連するすべてのアクティビティが対象です。{% endif %}{% ifversion fpt or ghec %}
| [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions)                                                                                                                         | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot %} alerts.{% endif %}{% ifversion ghec %}
| [`ロール`](#role-category-actions)                                                                                                                                                                                | Contains all activities related to [custom repository roles](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}
| [`secret_scanning`](#secret_scanning-category-actions)                                                                                                                                                         | 既存のリポジトリ内のシークレットスキャンの Organization レベルの設定アクティビティが対象です。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。                                                                                                                                                      |
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions)                                                                                                                                     | Organization で作成された新しいリポジトリ内のシークレットスキャンの Organization レベルの設定アクティビティが対象です。                                                                                                                                                                                                                                       |{% ifversion fpt or ghec %}
| [`sponsors`](#sponsors-category-actions)                                                                                                                                                                       | スポンサーボタンに関連するすべてのアクティビティが対象です (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照){% endif %}
| [`Team`](#team-category-actions)                                                                                                                                                                               | Organization内のチームに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                         |
| [`team_discussions`](#team_discussions-category-actions)                                                                                                                                                       | Organization の Team ディスカッションに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                              |

次の用語を使用すれば、特定の一連の行動を検索できます。 例:

  * `action:team`はteamカテゴリ内でグループ化されたすべてのイベントを検索します。
  * `-action:hook` は webhook カテゴリ内のすべてのイベントを除外します。

各カテゴリには、フィルタできる一連の関連アクションがあります。 例:

  * `action:team.create`はTeamが作成されたすべてのイベントを検索します。
  * `-action:hook.events_changed` は webhook の変更されたすべてのイベントを除外します。

### アクション時間に基づく検索

`created` 修飾子を使用して、行われた日時に基づいて Audit log 内のイベントをフィルタします。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

例:

  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したイベントをすべて検索します。
  * `created:>=2014-07-08` は、2014 年 7 月 8 日かそれ以降に生じたすべてのイベントを検索します。
  * `created:<=2014-07-08`は、2014 年 7 月 8 日かそれ以前に生じたすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31`は、2014 年 7 月に起きたすべてのイベントを検索します。

Audit log には過去 90 日間のデータが存在しますが、`created` 修飾子を使用すればそれより前のイベントを検索できます。

### 場所に基づく検索

修飾子 `country` を使用すれば、発信元の国に基づいて Audit log 内のイベントをフィルタリングできます。 国の 2 文字のショートコードまたはフル ネームを使用できます。 名前に空白がある国は引用符で囲む必要があることに注意してください。 例:

  * `country:de` は、ドイツで発生したイベントをすべて検索します。
  * `country:Mexico` はメキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` はアメリカ合衆国で発生したすべてのイベントを検索します。

{% ifversion fpt or ghec %}
## Audit log をエクスポートする

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

## Audit log API を使用する

GraphQL API{% ifversion fpt or ghec %} または REST API を使用して Audit log を操作できます{% endif %}。

{% ifversion fpt or ghec %}
The audit log API requires {% data variables.product.prodname_ghe_cloud %}.{% ifversion fpt %} {% data reusables.enterprise.link-to-ghec-trial %}{% endif %}

### GraphQL API を使用する

{% endif %}

{% note %}

**注釈**: {% data variables.product.prodname_enterprise %} を使用している Organization が Audit log GraphQL API を利用できます。 {% data reusables.gated-features.more-info-org-products %}

{% endnote %}

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}

{% ifversion fpt or ghec %}
GraphQL API を使用して Git イベントを取得することはできませんので、ご注意ください。 Git イベントを取得するには、代わりに REST API を使用してください。 詳しい情報については、「[`git` category actions](#git-category-actions)」を参照してください。
{% endif %}

GraphQL のレスポンスには、90 日から 120 日までのデータを含めることができます。

たとえば、GraphQL にリクエストして、Organization に新しく追加された Organization メンバー全員を表示できます。 詳細は「[GraphQL API Audit Log]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/interfaces#auditentry/)」を参照してください。

{% ifversion fpt or ghec %}

### REST API を使用する

{% note %}

**注釈:** Audit log REST API は、{% data variables.product.prodname_ghe_cloud %} のユーザのみが利用できます。

{% endnote %}

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log REST API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

Audit log REST API の詳細については、「[Organization](/rest/reference/orgs#get-the-audit-log-for-an-organization)」を参照してください。

{% endif %}

## Audit log のアクション

Audit log にイベントとして記録される最も一般的なアクションの概要です。

{% ifversion fpt or ghec %}
### `account` カテゴリアクション

| アクション                         | 説明                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `billing_plan_change`         | Organization の[支払いサイクル](/articles/changing-the-duration-of-your-billing-cycle)が変わるときにトリガーされます。                                                         |
| `plan_change`                 | Organization の[プラン](/articles/about-billing-for-github-accounts)が変わるときにトリガーされます。                                                                       |
| `pending_plan_change`         | Organization のオーナーまたは支払いマネージャーが[支払い済みサブスクリプションをキャンセルまたはダウングレードする](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/)ときにトリガーされます。 |
| `pending_subscription_change` | [{% data variables.product.prodname_marketplace %} の無料トライアルが始まるか期限切れになる](/articles/about-billing-for-github-marketplace/)ときにトリガーされます。                  |
{% endif %}

{% ifversion fpt or ghec %}
### `advisory_credit` カテゴリアクション

| アクション     | 説明                                                                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`  | ユーザがセキュリティアドバイザリのクレジットを受け入れるとトリガーされます。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory)」を参照してください。 |
| `create`  | セキュリティアドバイザリの管理者がクレジットセクションにユーザを追加するとトリガーされます。                                                                                                           |
| `decline` | ユーザがセキュリティアドバイザリのクレジットを拒否するとトリガーされます。                                                                                                                    |
| `destroy` | セキュリティアドバイザリの管理者がクレジットセクションからユーザを削除するとトリガーされます。                                                                                                          |
{% endif %}

{% ifversion fpt or ghec %}
### `billing` カテゴリアクション

| アクション                 | 説明                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | Organization が[{% data variables.product.prodname_dotcom %} の支払い方法を変更する](/articles/adding-or-editing-a-payment-method)ときにトリガーされます。 |
| `change_email`        | Organization の[支払い請求先メール アドレス](/articles/setting-your-billing-email)が変わるときにトリガーされます。                                               |
{% endif %}

### `business`カテゴリアクション

| アクション                                  | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Enterpriseで、パブリックフォークからのワークフローが承認を必要とする設定が変更されたときにトリガーされます。 For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)."{% endif %}
| `set_actions_retention_limit`          | {% data variables.product.prodname_actions %}の成果物とログの保持期間がEnterpriseで変更されたときにトリガーされます。 For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy`         | プライベートのリポジトリフォークのワークフローのポリシーが変更されたときにトリガーされます。 For more information, see "{% ifversion fpt or ghec%}[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Enabling workflows for private repository forks](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}."{% endif %}

{% ifversion fpt or ghec %}
### `codespaces` カテゴリアクション

| アクション                        | 説明                                                                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `create`                     | ユーザが[Codespaceを作成](/github/developing-online-with-codespaces/creating-a-codespace)するとトリガーされます。                                                                                                                           |
| `resume`                     | ユーザがサスペンドされたCodespaceを再開するとトリガーされます。                                                                                                                                                                                     |
| `delete`                     | ユーザが[Codespaceを削除](/github/developing-online-with-codespaces/deleting-a-codespace)するとトリガーされます。                                                                                                                           |
| `create_an_org_secret`       | ユーザがOrganizationレベルの[{% data variables.product.prodname_codespaces %}用シークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を作成するとトリガーされます。 |
| `update_an_org_secret`       | ユーザがOrganizationレベルの[{% data variables.product.prodname_codespaces %}用シークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を更新するとトリガーされます。 |
| `remove_an_org_secret`       | ユーザがOrganizationレベルの[{% data variables.product.prodname_codespaces %}用シークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を削除するとトリガーされます。 |
| `manage_access_and_security` | ユーザが[Codespaceがアクセスできるリポジトリ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)を更新するとトリガーされます。                                                                                       |
{% endif %}

{% ifversion fpt or ghec %}
### `dependabot_alerts` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories. 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories.                                                                                                                                                                        |
{% endif %}

{% ifversion fpt or ghec %}
### `dependabot_alerts_new_repos` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories. 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories.                                                                                                                                                                        |

### `dependabot_security_updates` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが既存のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが既存のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にするとトリガーされます。                                                                                                                                                                       |

### `dependabot_security_updates_new_repos` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが新規のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが新規のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にするとトリガーされます。                                                                                                                                                                       |
{% endif %}

{% ifversion fpt or ghec %}
### `dependency_graph` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが既存のすべてのリポジトリに対して依存関係グラフを無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが既存のすべてのリポジトリに対して依存関係グラフを有効にするとトリガーされます。                                                                                                                                                                       |

### `dependency_graph_new_repos` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが新規のすべてのリポジトリに対して依存関係グラフを無効にするとトリガーされます。 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Organization のオーナーが新規のすべてのリポジトリに対して依存関係グラフを有効にするとトリガーされます。                                                                                                                                                                       |
{% endif %}

### `discussion_post` カテゴリアクション

| アクション     | 説明                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------ |
| `update`  | [Team ディスカッションの投稿が編集される](/articles/managing-disruptive-comments/#editing-a-comment)ときにトリガーされます。  |
| `destroy` | [Team ディスカッションの投稿が削除される](/articles/managing-disruptive-comments/#deleting-a-comment)ときにトリガーされます。 |

### `discussion_post_reply` カテゴリアクション

| アクション     | 説明                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `update`  | [Team ディスカッションの投稿への返答が編集される](/articles/managing-disruptive-comments/#editing-a-comment)ときにトリガーされます。  |
| `destroy` | [Team ディスカッションの投稿への返答が削除される](/articles/managing-disruptive-comments/#deleting-a-comment)ときにトリガーされます。 |

{% ifversion fpt or ghes or ghec %}
### `enterprise` カテゴリアクション

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### `environment` カテゴリアクション

| アクション                   | 説明                                                                                                                   |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `create_actions_secret` | シークレットが環境で作成されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。  |
| `delete`                | 環境が削除されるとトリガーされます。 詳しい情報については、「[環境を削除する](/actions/reference/environments#deleting-an-environment)」を参照してください。         |
| `remove_actions_secret` | シークレットが環境で削除されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。  |
| `update_actions_secret` | 環境内のシークレットが更新されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。 |
{% endif %}

{% ifversion fpt or ghec %}
### `git` カテゴリアクション

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

### `hook` カテゴリアクション

| アクション            | 説明                                                                              |
| ---------------- | ------------------------------------------------------------------------------- |
| `create`         | Organization が所有するリポジトリに[新たなフックが追加された](/articles/creating-webhooks)ときにトリガーされます。 |
| `config_changed` | 既存のフックに変更された設定がある場合にトリガーされます。                                                   |
| `destroy`        | 既存のフックがリポジトリから削除されたときにトリガーされます。                                                 |
| `events_changed` | フックでのイベントが変更された場合にトリガーされます。                                                     |

### `integration_installation_request` カテゴリアクション

| アクション    | 説明                                                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Organization のメンバーが、Organization 内で使用するために、Organization のオーナーにインテグレーションをインストールすることを要求するときにトリガーされます。                                |
| `close`  | Organization 内で使用するためにインテグレーションをインストールする要求が、Organization のオーナーにより承認または拒否されるか、あるいは要求を公開した Organization のメンバーによりキャンセルされるときにトリガーされます。 |

### `ip_allow_list` category actions

| アクション                        | 説明                                                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `enable`                     | Triggered when an IP allow list was enabled for an organization.                                                |
| `disable`                    | Triggered when an IP allow list was disabled for an organization.                                               |
| `enable_for_installed_apps`  | Triggered when an IP allow list was enabled for installed {% data variables.product.prodname_github_apps %}.  |
| `disable_for_installed_apps` | Triggered when an IP allow list was disabled for installed {% data variables.product.prodname_github_apps %}. |

### `ip_allow_list_entry` category actions

| アクション     | 説明                                                              |
| --------- | --------------------------------------------------------------- |
| `create`  | Triggered when an IP address was added to an IP allow list.     |
| `update`  | Triggered when an IP address or its description was changed.    |
| `destroy` | Triggered when an IP address was deleted from an IP allow list. |

### `issue` カテゴリアクション

| アクション     | 説明                                                                                     |
| --------- | -------------------------------------------------------------------------------------- |
| `destroy` | リポジトリで管理者権限を所有する Organization のオーナーまたは誰かが、Organization が所有するリポジトリから問題を削除するときにトリガーされます。 |

{% ifversion fpt or ghec %}

### `marketplace_agreement_signature` カテゴリアクション

| アクション    | 説明                                                                                      |
| -------- | --------------------------------------------------------------------------------------- |
| `create` | {% data variables.product.prodname_marketplace %} Developer Agreement に署名するときにトリガーされます。 |

### `marketplace_listing` カテゴリアクション

| アクション     | 説明                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| `承認`      | 一覧表を {% data variables.product.prodname_marketplace %}に掲載することが承認されるときにトリガーされます。     |
| `create`  | {% data variables.product.prodname_marketplace %} で自分のアプリケーションの一覧表を作成するときにトリガーされます。 |
| `delist`  | 一覧表が {% data variables.product.prodname_marketplace %} から削除されるときにトリガーされます。          |
| `redraft` | 一覧表がドラフト状態に戻されるときにトリガーされます。                                                         |
| `reject`  | 一覧表が {% data variables.product.prodname_marketplace %} に掲載することを認められないときにトリガーされます。   |

{% endif %}

{% ifversion fpt or ghes > 3.0 or ghec %}

### `members_can_create_pages` カテゴリアクション

詳しい情報については「[Organizationの{% data variables.product.prodname_pages %}サイトの公開の管理](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。

| アクション     | 説明                                                                                                             |
|:--------- |:-------------------------------------------------------------------------------------------------------------- |
| `enable`  | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を有効化するときトリガーされます。 |
| `disable` | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を無効化するときトリガーされます。 |

{% endif %}

### `org` カテゴリアクション

| アクション                                               | 説明                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member`                                        | Triggered when a user joins an organization.{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
| `advanced_security_policy_selected_member_disabled` | Enterprise のオーナーが、Organization が所有するリポジトリで {% data variables.product.prodname_GH_advanced_security %} 機能を有効化できないようにするとトリガーされます。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled`  | Enterprise のオーナーが、Organization が所有するリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} 機能を有効化できるようにするとトリガーされます。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% endif %}{% ifversion fpt or ghec %}
| `audit_log_export`                                  | Organization の管理者が [Organization の Audit log のエクスポートを作成する](#exporting-the-audit-log)ときにトリガーされます。 エクスポートにクエリが含まれていた場合、ログには使用されたクエリとそのクエリに一致する Audit log エントリの数が一覧表示されます。                                                                                                                                                                                                                                                     |
| `block_user`                                        | Organization のオーナーが[Organization のリポジトリにユーザーがアクセスするのをブロックする](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                             |
| `cancel_invitation`                                 | Organization の招待が取り消されている場合にトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                       |{% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret`                             | Organization に対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳しい情報については、「[Organization の暗号化されたシークレットを作成する](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)」を参照してください。{% endif %}                                                                                                                                                                           |{% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions`                    | オーナーが Organization に対して[{% data variables.product.prodname_oauth_app %} のアクセス制限を無効にする](/articles/disabling-oauth-app-access-restrictions-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                               |
| `disable_saml`                                      | Organization の管理者が Organization に対して SML シングルサインオンを無効にするときにトリガーされます。{% endif %}
| `disable_member_team_creation_permission`           | Organization のオーナーがオーナーに Team 作成を制限するときにトリガーされます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 {% ifversion not ghae %}
| `disable_two_factor_requirement`                    | Triggered when an owner disables a two-factor authentication requirement for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions`                     | オーナーが Organization に対して[{% data variables.product.prodname_oauth_app %} のアクセス制限を有効にする](/articles/enabling-oauth-app-access-restrictions-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                |
| `enable_saml`                                       | Organization の管理者が Organization に対して [SAML シングルサインオン を有効にする](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)ときにトリガーされます。{% endif %}
| `enable_member_team_creation_permission`            | メンバーが Team を作成するのを Organizationのオーナーが許可するときにトリガーされます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 {% ifversion not ghae %}
| `enable_two_factor_requirement`                     | Triggered when an owner requires two-factor authentication for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% ifversion fpt or ghec %}
| `invite_member`                                     | [新しいユーザーがOrganization に参加するよう招待](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)されたときにトリガーされます。                                                                                                                                                                                                                                                                           |
| `oauth_app_access_approved`                         | オーナーが [{% data variables.product.prodname_oauth_app %} へのアクセスを許可する](/articles/approving-oauth-apps-for-your-organization/)ときにトリガーされます。                                                                                                                                                                                                                                                                                    |
| `oauth_app_access_denied`                           | オーナーが Organization への[以前に承認した {% data variables.product.prodname_oauth_app %} のアクセス権を無効にする](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                |
| `oauth_app_access_requested`                        | オーナーが Organization への {% data variables.product.prodname_oauth_app %} アクセスを許可することを Organization のメンバーが要求するときにトリガーされます。{% endif %}
| `register_self_hosted_runner`                       | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳しい情報については、「[Organization へのセルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)」を参照してください。                                                                                                                                                                                                                          |
| `remove_actions_secret`                             | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% ifversion fpt or ghec %}
| `remove_billing_manager`                            | [オーナーが Organization から支払いマネージャーを削除する](/articles/removing-a-billing-manager-from-your-organization/)とき、または [Organization で 2 要素認証が義務付けられている](/articles/requiring-two-factor-authentication-in-your-organization)が、支払いマネージャーが 2 要素認証を使用しないか 2 要素認証を無効にしているときにトリガーされます。 
{% endif %}
| `remove_member`                                     | [オーナーが Organization からメンバーを削除する](/articles/removing-a-member-from-your-organization/)とき {% ifversion not ghae %}、または[Organization で 2 要素認証が義務付けられている](/articles/requiring-two-factor-authentication-in-your-organization)が、Organization のメンバーが 2 要素認証を使用しないか 2 要素認証を無効化するとき{% endif %}にトリガーされます。 Organization から [Organization のメンバーが自身を削除](/articles/removing-yourself-from-an-organization/)するときにもトリガーされます。               |
| `remove_outside_collaborator`                       | オーナーが Organization から外部のコラボレータを削除するとき{% ifversion not ghae %}、または[Organization で 2 要素認証が義務付けられている](/articles/requiring-two-factor-authentication-in-your-organization)が、外部のコラボレータが 2 要素認証を使用しないか 2 要素認証を無効化するとき{% endif %}にトリガーされます。                                                                                                                                                                                        |
| `remove_self_hosted_runner`                         | セルフホストランナーが削除されたときにトリガーされます。 詳しい情報については、「[Organization からランナーを削除する](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)」を参照してください。                                                                                                                                                                                                                                       |{% ifversion fpt or ghec %}
| `revoke_external_identity`                          | Organization のオーナーがメンバーのリンクされたアイデンティティを取り消すときにトリガーされます。 詳細は、「[Organizationへのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。                                                                                                                          |
| `revoke_sso_session`                                | Organization のオーナーがメンバーの SAML セッションを取り消すときにトリガーされます。 詳細は、「[Organizationへのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。                                                                                                                             |{% endif %}
| `runner_group_created`                              | セルフホストランナーグループが作成されたときにトリガーされます。 詳しい情報については、「[Organization のセルフホストランナーグループを作成する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)」を参照してください。                                                                                                                                                                                  |
| `runner_group_created`                              | セルフホストランナーグループが削除されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループの削除](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。                                                                                                                                                                                                                       |
| `runner_group_updated`                              | セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループのアクセスポリシーの変更](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。                                                                                                                                                                                      |
| `runner_group_runners_added`                        | セルフホストランナーがグループに追加されたときにトリガーされます。 詳しい情報については、「[セルフホストランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。                                                                                                                                                                                                               |
| `runner_group_runner_removed`                       | セルフホストランナーをグループから削除するのにREST APIが使われたときにトリガーされます。 詳しい情報については、「[Organization のグループからセルフホストランナーを削除する](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)」を参照してください。                                                                                                                                                                                                                         |
| `runner_group_runners_updated`                      | ランナーグループのメンバーリストが更新されたときにトリガーされます。 For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."{% ifversion fpt or ghes > 3.1 or ghae-issue-1157 or ghec %}
| `self_hosted_runner_online`                         | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."                                                                             |
| `self_hosted_runner_offline`                        | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% endif %}{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated`                        | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy`              | Organizationで、パブリックフォークからのワークフローが承認を必要とする設定が変更されたときにトリガーされます。 For more information, see "[Requiring approval for workflows from public forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)."{% endif %}
| `set_actions_retention_limit`                       | {% data variables.product.prodname_actions %}の成果物とログの保持期間が変更されたときにトリガーされます。 For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy`                      | プライベートのリポジトリフォークのワークフローのポリシーが変更されたときにトリガーされます。 For more information, see "[Enabling workflows for private repository forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)."{% endif %}{% ifversion fpt or ghec %}
| `unblock_user`                                      | Triggered when an organization owner [unblocks a user from an organization](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %}{% ifversion fpt or ghes or ghec %}
| `update_actions_secret`                             | {% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。{% endif %}
| `update_new_repository_default_branch_setting`      | オーナーが Organization の新しいリポジトリのデフォルトブランチの名前を変更するときにトリガーされます。 For more information, see "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)."                                                                                                                                      |
| `update_default_repository_permission`              | オーナーが Organization のメンバーのデフォルトリポジトリの権限レベルを変更するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                  |
| `update_member`                                     | オーナーがユーザーのロールをオーナーからメンバーに、またはメンバーからオーナーに変更するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                    |
| `update_member_repository_creation_permission`      | Triggered when an owner changes the create repository permission for organization members.{% ifversion fpt or ghec %}
| `update_saml_provider_settings`                     | Organization の SAML プロバイダ設定が更新されるときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                               |
| `update_terms_of_service`                           | Organization が標準利用規約と企業向け利用規約を切り替えるときにトリガーされます。 詳細は「[企業利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。{% endif %}

{% ifversion fpt or ghec %}
### `org_credential_authorization` カテゴリアクション

| アクション          | 説明                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grant`        | [SAML シングルサインオンに使用するクレデンシャルをメンバーが認可する](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)ときにトリガーされます。                                                    |
| `deauthorized` | [SAML シングルサインオンに使用するクレデンシャルの認可をメンバーが取り消す](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)ときにトリガーされます。                                                 |
| `revoke`       | オーナーが[認可された認証情報を取り消す](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)ときにトリガーされます。 |

{% endif %}

{% ifversion fpt or ghes or ghae or ghec %}
### `organization_label` カテゴリアクション

| アクション     | 説明                         |
| --------- | -------------------------- |
| `create`  | デフォルトラベルが作成されるときにトリガーされます。 |
| `update`  | デフォルトラベルが編集されるときにトリガーされます。 |
| `destroy` | デフォルトラベルが削除されるときにトリガーされます。 |

{% endif %}

### `oauth_application` カテゴリアクション

| アクション           | 説明                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ |
| `create`        | 新たな {% data variables.product.prodname_oauth_app %} が作成されるときにトリガーされます。                   |
| `destroy`       | 既存の {% data variables.product.prodname_oauth_app %} が削除されるときにトリガーされます。                   |
| `reset_secret`  | {% data variables.product.prodname_oauth_app %} のクライアント シークレットがリセットされるときにトリガーされます。       |
| `revoke_tokens` | {% data variables.product.prodname_oauth_app %} のユーザートークンが取り消されるときにトリガーされます。             |
| `移譲`            | 既存の {% data variables.product.prodname_oauth_app %} が新しい Organization に移譲されるときにトリガーされます。 |

{% ifversion fpt or ghes > 3.0 or ghec %}
### `packages` カテゴリアクション

| アクション                       | 説明                                                                                                                                      |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `package_version_published` | パッケージのバージョンが公開されるとトリガーされます。                                                                                                             |
| `package_version_deleted`   | 特定のパッケージのバージョンが削除されるとトリガーされます。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。 |
| `package_deleted`           | パッケージ全体が削除されるとトリガーされます。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。        |
| `package_version_restored`  | 特定のパッケージのバージョンが削除されるとトリガーされます。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。 |
| `package_restored`          | パッケージ全体がリストアされるとトリガーされます。 詳しい情報については、「[パッケージの削除とリストア](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。      |

{% endif %}

{% ifversion fpt or ghec %}

### `payment_method` カテゴリアクション

| アクション    | 説明                                                                   |
| -------- | -------------------------------------------------------------------- |
| `clear`  | ファイル上の支払い方法が[削除される](/articles/removing-a-payment-method)ときにトリガーされます。 |
| `create` | 新しいクレジット カードや PayPal アカウントなど、新たな支払い方法が追加されるときにトリガーされます。              |
| `update` | 既存の支払い方法が更新されるときにトリガーされます。                                           |

{% endif %}

### `profile_picture` カテゴリアクション
| アクション  | 説明                                           |
| ------ | -------------------------------------------- |
| update | Organization のプロファイル写真を設定または更新するときにトリガーされます。 |

### `project` カテゴリアクション

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

### `protected_branch` カテゴリアクション

| アクション                                                 | 説明                                                                                                                                     |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                                              | ブランチでブランチの保護が有効になるときにトリガーされます。                                                                                                         |
| `destroy`                                             | ブランチでブランチの保護が無効になるときにトリガーされます。                                                                                                         |
| `update_admin_enforced`                               | リポジトリの管理者に対してブランチの保護が実施されるときにトリガーされます。                                                                                                 |
| `update_require_code_owner_review`                    | 必須コードオーナーレビューの実施がブランチで更新されるときにトリガーされます。                                                                                                |
| `dismiss_stale_reviews`                               | 古い Pull Request の却下の実施がブランチで更新されるときにトリガーされます。                                                                                          |
| `update_signature_requirement_enforcement_level`      | 必須コミット署名の実施がブランチで更新されるときにトリガーされます。                                                                                                     |
| `update_pull_request_reviews_enforcement_level`       | 必須 Pull Request レビューの実施がブランチで更新されるときにトリガーされます。                                                                                         |
| `update_required_status_checks_enforcement_level`     | 必須ステータスチェックの実施がブランチで更新されるときにトリガーされます。                                                                                                  |
| `update_strict_required_status_checks_policy`         | マージする前に最新にする必要があるブランチの要件が変更されるときにトリガーされます。                                                                                             |
| `rejected_ref_update`                                 | ブランチ更新の試行が拒否されるときにトリガーされます。                                                                                                            |
| `policy_override`                                     | Triggered when a branch protection requirement is overridden by a repository administrator.{% ifversion fpt or ghes or ghae or ghec %}
| `update_allow_force_pushes_enforcement_level`         | 保護されたブランチについて、フォースプッシュが有効化または無効化されるときにトリガーされます。                                                                                        |
| `update_allow_deletions_enforcement_level`            | 保護されたブランチについて、ブランチ削除が有効化または無効化されるときにトリガーされます。                                                                                          |
| `update_linear_history_requirement_enforcement_level` | 保護されたブランチについて、必須の直線状のコミット履歴が有効化または無効化されるときにトリガーされます。                                                                                   |
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}

### `pull_request`カテゴリのアクション

| アクション                   | 説明                                                                            |
| ----------------------- | ----------------------------------------------------------------------------- |
| `create`                | Pull Requestが作成されたときにトリガーされます。                                                |
| `close`                 | Pull Requestがマージされずにクローズされたときにトリガーされます。                                       |
| `reopen`                | 以前クローズされたPull Requestが再オープンされたときにトリガーされます。                                    |
| `マージ`                   | Pull Requestがマージされたときにトリガーされます。                                               |
| `indirect_merge`        | Pull Requestのコミットがターゲットブランチにマージされたことで、そのPull Requestがマージされたと考えられるときにトリガーされます。 |
| `ready_for_review`      | Pull Requestがレビューの準備ができたとしてマークされたときにトリガーされます。                                 |
| `converted_to_draft`    | Pull Requestがドラフトに変換されたときにトリガーされます。                                           |
| `create_review_request` | レビューが要求されたときにトリガーされます。                                                        |
| `remove_review_request` | レビューの要求が削除されたときにトリガーされます。                                                     |

### `pull_request_review`カテゴリのアクション

| アクション    | 説明                        |
| -------- | ------------------------- |
| `サブミット`  | レビューがサブミットされたときにトリガーされます。 |
| `却下`     | レビューが却下されたときにトリガーされます。    |
| `delete` | レビューが削除されたときにトリガーされます。    |

### `pull_request_review_comment`カテゴリのアクション

| アクション    | 説明                         |
| -------- | -------------------------- |
| `create` | レビューコメントが追加されたときにトリガーされます。 |
| `update` | レビューコメントが変更されたときにトリガーされます。 |
| `delete` | レビューコメントが削除されたときにトリガーされます。 |

{% endif %}

### `repo` カテゴリアクション

| アクション                                  | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                               | ユーザが Organization 内のリポジトリの[可視性を変更](/github/administering-a-repository/setting-repository-visibility)するとトリガーされます。                                                                                                                                                                                                                                                                                                                                                                |
| `actions_enabled`                      | リポジトリに対して {% data variables.product.prodname_actions %} が有効化されたときにトリガーされます。 UI を使用して表示できます。 REST API を使用して Audit log にアクセスする場合、このイベントは対象外です。 詳しい情報については、「[REST API を使用する](#using-the-rest-api)」を参照してください。                                                                                                                                                                                                                                                                       |
| `add_member`                           | ユーザーが[リポジトリへのコラボレーションアクセスへの招待](/articles/inviting-collaborators-to-a-personal-repository)を受諾するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                      |
| `add_topic`                            | Triggered when a repository admin [adds a topic](/articles/classifying-your-repository-with-topics) to a repository.{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
| `advanced_security_disabled`           | リポジトリ管理者がリポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能を無効にするとトリガーされます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。                                                                                                                                                                                                                                  |
| `advanced_security_enabled`            | リポジトリ管理者がリポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能を有効にするとトリガーされます。 詳しい情報については、「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。{% endif %}
| `archived`                             | リポジトリの管理者が[リポジトリをアーカイブする](/articles/about-archiving-repositories)ときにトリガーされます。{% ifversion ghes %}
| `config.disable_anonymous_git_access`  | 公開リポジトリで[匿名の Git 読み取りアクセスが無効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                                |
| `config.enable_anonymous_git_access`   | 公開リポジトリで[匿名の Git 読み取りアクセスが有効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                                |
| `config.lock_anonymous_git_access`     | リポジトリの[匿名の Git 読み取りアクセス設定がロックされる](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。                                                                                                                                                                                                                                                                                                           |
| `config.unlock_anonymous_git_access`   | リポジトリの[匿名の Git 読み取りアクセス設定がロック解除される](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。{% endif %}
| `create`                               | Triggered when [a new repository is created](/articles/creating-a-new-repository).{% ifversion fpt or ghes or ghec %}
| `create_actions_secret`                | リポジトリに対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳しい情報については、「[リポジトリの暗号化されたシークレットを作成する](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。{% endif %}
| `destroy`                              | [リポジトリが削除される](/articles/deleting-a-repository)ときにトリガーされます。{% ifversion fpt or ghec %}
| `disable`                              | リポジトリが無効になるときにトリガーされます ([残高不足](/articles/unlocking-a-locked-account)などの場合)。{% endif %}
| `enable`                               | Triggered when a repository is re-enabled.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret`                | {% data variables.product.prodname_actions %} シークレットが削除されたときにトリガーされます。{% endif %}
| `remove_member`                        | ユーザーが[リポジトリのコラボレーターではなくなる](/articles/removing-a-collaborator-from-a-personal-repository)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                            |
| `register_self_hosted_runner`          | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳しい情報については、「[リポジトリにセルフホストランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)」を参照してください。                                                                                                                                                                                                                                                                                        |
| `remove_self_hosted_runner`            | セルフホストランナーが削除されたときにトリガーされます。 詳しい情報については、「[リポジトリからランナーを削除する](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)」を参照してください。                                                                                                                                                                                                                                                                                                      |
| `remove_topic`                         | リポジトリの管理者がリポジトリからトピックを削除するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `rename`                               | Triggered when [a repository is renamed](/articles/renaming-a-repository).{% ifversion fpt or ghes > 3.1 or ghae-issue-1157 or ghec %}
| `self_hosted_runner_online`            | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."                                                                                                                                 |
| `self_hosted_runner_offline`           | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% endif %}{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated`           | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | パブリックフォークからのワークフローが承認を必要とする設定が変更されたときにトリガーされます。 For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)."{% endif %}
| `set_actions_retention_limit`          | {% data variables.product.prodname_actions %}の成果物とログの保持期間が変更されたときにトリガーされます。 For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy`         | プライベートのリポジトリフォークのワークフローのポリシーが変更されたときにトリガーされます。 For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)."{% endif %}
| `移譲`                                   | [リポジトリが移譲される](/articles/how-to-transfer-a-repository)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                               |
| `transfer_start`                       | リポジトリの移譲が行われようとしているときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `unarchived`                           | Triggered when a repository admin unarchives a repository.{% ifversion fpt or ghes or ghec %}
| `update_actions_secret`                | {% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。{% endif %}

{% ifversion fpt or ghec %}

### `repository_advisory` カテゴリアクション

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

### `repository_content_analysis`カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                          |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enable`  | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対してデータ使用設定を有効にする](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)ときにトリガーされます。 |
| `disable` | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対してデータ使用設定を無効にする](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)ときにトリガーされます。 |

{% endif %}{% ifversion fpt or ghec %}

### `repository_dependency_graph` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when a repository owner or person with admin access to the repository disables the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository. 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。 |
| `enable`  | Triggered when a repository owner or person with admin access to the repository enables the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository.                                                                                                                   |

{% endif %}
### `repository_secret_scanning` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when a repository owner or person with admin access to the repository disables secret scanning for a {% ifversion fpt or ghec %}private {% endif %}repository. 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | Triggered when a repository owner or person with admin access to the repository enables secret scanning for a {% ifversion fpt or ghec %}private {% endif %}repository.                                                                                                      |

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
### `repository_vulnerability_alert` カテゴリアクション

| アクション    | 説明                                                                                                                                                                                                                                                                                                                                                                                  |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Triggered when {% data variables.product.product_name %} creates a {% ifversion fpt or ghes or ghec %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert for a repository that uses a vulnerable dependency. 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。 |
| `却下`     | Triggered when an organization owner or person with admin access to the repository dismisses a {% ifversion fpt or ghes or ghec %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert about a vulnerable dependency.                                                                                                                                |
| `解決`     | リポジトリへの書き込みアクセスを持つユーザが変更をプッシュして、プロジェクトの依存関係の脆弱性を更新および解決するとトリガーされます。                                                                                                                                                                                                                                                                                                                 |

{% endif %}{% ifversion fpt or ghec %}
### `repository_vulnerability_alerts` カテゴリアクション

| アクション                    | 説明                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorized_users_teams` | Organization のオーナーまたはリポジトリへの管理者権限を持つユーザが、リポジトリ内の脆弱性のある依存関係の {% data variables.product.prodname_dependabot_alerts %} を受け取ることを許可されたユーザまたは Team のリストを更新するとトリガーされます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。 |
| `disable`                | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが {% data variables.product.prodname_dependabot_alerts %} を無効にするとトリガーされます。                                                                                                                                                                                                                                        |
| `enable`                 | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが {% data variables.product.prodname_dependabot_alerts %} を有効にするとトリガーされます。                                                                                                                                                                                                                                        |

{% endif %}{% ifversion ghec %}
### `role` category actions
| アクション     | 説明                                                                                                                                                                                                                                                                                              |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`  | Triggered when an organization owner creates a new custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."     |
| `destroy` | Triggered when a organization owner deletes a custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."          |
| `update`  | Triggered when an organization owner edits an existing custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)." |

{% endif %}

### `secret_scanning` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                              |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables secret scanning for all existing{% ifversion fpt or ghec %}, private{% endif %} repositories. 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables secret scanning for all existing{% ifversion fpt or ghec %}, private{% endif %} repositories.                                                                                                      |

### `secret_scanning_new_repos` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                                                                        |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables secret scanning for all new {% ifversion fpt or ghec %}private {% endif %}repositories. 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables secret scanning for all new {% ifversion fpt or ghec %}private {% endif %}repositories.                                                                                                      |

{% ifversion fpt or ghec %}
### `sponsors` カテゴリアクション

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

### `team` カテゴリアクション

| アクション                     | 説明                                                                                                                                                                                                                                                               |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member`              | Organization のメンバーが[Team に追加される](/articles/adding-organization-members-to-a-team)ときにトリガーされます。                                                                                                                                                                    |
| `add_repository`          | リポジトリの管理が Team に任せられるときにトリガーされます。                                                                                                                                                                                                                                |
| `change_parent_team`      | 子チームが作成されるとき、または[子チームの親が変更される](/articles/moving-a-team-in-your-organization-s-hierarchy)ときにトリガーされます。                                                                                                                                                             |
| `change_privacy`          | Team のプライバシー レベルが変更されるときにトリガーされます。                                                                                                                                                                                                                               |
| `create`                  | 新たな Team が作成されるときにトリガーされます。                                                                                                                                                                                                                                      |
| `demote_maintainer`       | Triggered when a user was demoted from a team maintainer to a team member. For more information, see "[Assigning the team maintainer role to a team member](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)."  |
| `destroy`                 | Team が Organization から削除されるときにトリガーされます。                                                                                                                                                                                                                          |
| `team.promote_maintainer` | Triggered when a user was promoted from a team member to a team maintainer. For more information, see "[Assigning the team maintainer role to a team member](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)." |
| `remove_member`           | Organization のメンバーが[Team から削除される](/articles/removing-organization-members-from-a-team)ときにトリガーされます。                                                                                                                                                               |
| `remove_repository`       | リポジトリが Team の管理下でなくなるときにトリガーされます。                                                                                                                                                                                                                                |

### `team_discussions` カテゴリアクション

| アクション     | 説明                                                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが Organization の Team ディスカッションを無効にするときにトリガーされます。 詳しい情報については [Organization の Team ディスカッションの無効化](/articles/disabling-team-discussions-for-your-organization)を参照してください。 |
| `enable`  | Organization のオーナーが Organization の Team ディスカッションを有効にするときにトリガーされます。                                                                                                                     |

### `workflows` カテゴリアクション

{% data reusables.actions.actions-audit-events-workflow %}

## 参考リンク

- "[Organization を安全に保つ](/articles/keeping-your-organization-secure)"
