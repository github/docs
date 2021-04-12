---
title: Organization の Audit log をレビューする
intro: 'Audit log により、Organization の管理者は Organization のメンバーによって行われたアクションをすばやくレビューできます。 これには、誰がいつ何のアクションを実行したかなどの詳細が残されます。'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

### Audit log にアクセスする

The audit log lists events triggered by activities that affect your organization within the last 90 days. Organization の Audit log にアクセスできるのはオーナーのみです。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

### Audit log を検索する

{% data reusables.audit_log.audit-log-search %}

#### 実行されたアクションに基づく検索

特定のイベントを検索するには、クエリで `action` 修飾子を使用します。 Audit log に一覧表示されるアクションは以下のカテゴリに分類されます。

| カテゴリ名                                                                                                                                                                                                                                                                                                                                                                       | 説明                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| [`アカウント`](#account-category-actions)                                                                                                                                                                                                                                                                                                                                        | Contains all activities related to your organization account.                                                                                                                                                                                                                                                                                                                                                           |
| [`advisory_credit`](#advisory_credit-category-actions)                                                                                                                                                                                                                                                                                                                      | Contains all activities related to crediting a contributor for a security advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."                                                                                  |
| [`支払い`](#billing-category-actions)                                                                                                                                                                                                                                                                                                                                          | Contains all activities related to your organization's billing.                                                                                                                                                                                                                                                                                                                                                         |
| [`dependabot_alerts`](#dependabot_alerts-category-actions)                                                                                                                                                                                                                                                                                                                  | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot %} alerts in existing repositories. 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。                                                                                                                                          |
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions)                                                                                                                                                                                                                                                                                              | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot %} alerts in new repositories created in the organization.                                                                                                                                                                                                                                                       |
| [`dependabot_security_updates`](#dependabot_security_updates-category-actions)                                                                                                                                                                                                                                                                                              | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} in existing repositories. 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。                                                                            |
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions)                                                                                                                                                                                                                                                                          | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} for new repositories created in the organization.                                                                                                                                                                                                                                          |
| [`dependency_graph`](#dependency_graph-category-actions)                                                                                                                                                                                                                                                                                                                    | Contains organization-level configuration activities for dependency graphs for repositories. 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。                                                                                                                                                                                                           |
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions)                                                                                                                                                                                                                                                                                                | Contains organization-level configuration activities for new repositories created in the organization.{% endif %}
| [`discussion_post`](#discussion_post-category-actions)                                                                                                                                                                                                                                                                                                                      | Team ページに投稿されたディスカッションに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                            |
| [`discussion_post_reply`](#discussion_post_reply-category-actions)                                                                                                                                                                                                                                                                                                          | Team ページに投稿されたディスカッションへの返答に関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                        |
| [`フック`](#hook-category-actions)                                                                                                                                                                                                                                                                                                                                             | webhookに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                                                                                                                                           |
| [`integration_installation_request`](#integration_installation_request-category-actions)                                                                                                                                                                                                                                                                                    | Organization 内で使用するインテグレーションをオーナーが承認するよう求める、 Organization メンバーからのリクエストに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                            |
| [`Issue`](#issue-category-actions)                                                                                                                                                                                                                                                                                                                                          | Contains activities related to deleting an issue.                                                                                                                                                                                                                                                                                                                                                                       |{% if currentVersion == "free-pro-team@latest" %}
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions)                                                                                                                                                                                                                                                                                      | {% data variables.product.prodname_marketplace %} Developer Agreement の署名に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                              |
| [`marketplace_listing`](#marketplace_listing-category-actions)                                                                                                                                                                                                                                                                                                              | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| [`members_can_create_pages`](#members_can_create_pages-category-actions)                                                                                                                                                                                                                                                                                                    | Contains all activities related to managing the publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization)." |{% endif %}
| [`org`](#org-category-actions)                                                                                                                                                                                                                                                                                                                                              | Contains activities related to organization membership.{% if currentVersion == "free-pro-team@latest" %}
| [`org_credential_authorization`](#org_credential_authorization-category-actions)                                                                                                                                                                                                                                                                                            | Contains all activities related to authorizing credentials for use with SAML single sign-on.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| [`organization_label`](#organization_label-category-actions)                                                                                                                                                                                                                                                                                                                | Contains all activities related to default labels for repositories in your organization.{% endif %}
| [`oauth_application`](#oauth_application-category-actions)                                                                                                                                                                                                                                                                                                                  | Contains all activities related to OAuth Apps.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| [`パッケージ`](#packages-category-actions)                                                                                                                                                                                                                                                                                                                                       | Contains all activities related to {% data variables.product.prodname_registry %}.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions)                                                                                                                                                                                                                                                                                                                        | Organization の GitHub への支払い方法に関連するすべてのアクティビティが対象です。{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                                                                                                                                                                                                                                                                                                      | Organization のプロフィール画像に関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                            |
| [`project`](#project-category-actions)                                                                                                                                                                                                                                                                                                                                      | プロジェクト ボードに関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                                                                                             |
| [`protected_branch`](#protected_branch-category-actions)                                                                                                                                                                                                                                                                                                                    | 保護されたブランチ関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                                          |
| [`repo`](#repo-category-actions)                                                                                                                                                                                                                                                                                                                                            | Contains activities related to the repositories owned by your organization.{% if currentVersion == "free-pro-team@latest" %}
| [`repository_advisory`](#repository_advisory-category-actions)                                                                                                                                                                                                                                                                                                              | Contains repository-level activities related to security advisories in the {% data variables.product.prodname_advisory_database %}.  For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."                                                                                                |
| [`repository_content_analysis`](#repository_content_analysis-category-actions)                                                                                                                                                                                                                                                                                              | Contains all activities related to [enabling or disabling data use for a private repository](/articles/about-github-s-use-of-your-data).{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`repository_dependency_graph`](#repository_dependency_graph-category-actions)                                                                                                                                                                                                                                                                                              | Contains repository-level activities related to enabling or disabling the dependency graph for a                                                                                                                                                                                                                                                                                                                        |
| {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} |                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`repository_secret_scanning`](#repository_secret_scanning-category-actions)                                                                                                                                                                                                                                                                                                | Contains repository-level activities related to secret scanning. 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。                                                                                                                                                                                                                                                    |{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions)                                                                                                                                                                                                                                                                                        | Contains all activities related to [{% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions)                                                                                                                                                                                                                                                                                      | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot %} alerts.                                                                                                                                                                                                                                                                                                         |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| [`secret_scanning`](#secret_scanning-category-actions)                                                                                                                                                                                                                                                                                                                      | Contains organization-level configuration activities for secret scanning in existing repositories. 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。                                                                                                                                                                                                                  |
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions)                                                                                                                                                                                                                                                                                                  | Contains organization-level configuration activities for secret scanning for new repositories created in the organization.                                                                                                                                                                                                                                                                                              |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions)                                                                                                                                                                                                                                                                                                                                    | スポンサーボタンに関連するすべてのアクティビティが対象です (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照){% endif %}
| [`Team`](#team-category-actions)                                                                                                                                                                                                                                                                                                                                            | Organization内のチームに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                                                                                                                                 |
| [`team_discussions`](#team_discussions-category-actions)                                                                                                                                                                                                                                                                                                                    | Organization の Team ディスカッションに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                      |

次の用語を使用すれば、特定の一連の行動を検索できます。 例:

  * `action:team`はteamカテゴリ内でグループ化されたすべてのイベントを検索します。
  * `-action:hook` は webhook カテゴリ内のすべてのイベントを除外します。

Each category has a set of associated actions that you can filter on. 例:

  * `action:team.create`はTeamが作成されたすべてのイベントを検索します。
  * `-action:hook.events_changed` は webhook の変更されたすべてのイベントを除外します。

#### アクション時間に基づく検索

Use the `created` qualifier to filter events in the audit log based on when they occurred. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

例:

  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したイベントをすべて検索します。
  * `created:>=2014-07-08` は、2014 年 7 月 8 日かそれ以降に生じたすべてのイベントを検索します。
  * `created:<=2014-07-08`は、2014 年 7 月 8 日かそれ以前に生じたすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31`は、2014 年 7 月に起きたすべてのイベントを検索します。

Audit log には過去 90 日間のデータが存在しますが、`created` 修飾子を使用すればそれより前のイベントを検索できます。

#### 場所に基づく検索

Using the qualifier `country`, you can filter events in the audit log based on the originating country. 国の 2 文字のショートコードまたはフル ネームを使用できます。 名前に空白がある国は引用符で囲む必要があることに注意してください。 例:

  * `country:de` は、ドイツで発生したイベントをすべて検索します。
  * `country:Mexico` はメキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` はアメリカ合衆国で発生したすべてのイベントを検索します。

{% if currentVersion == "free-pro-team@latest" %}
### Audit log をエクスポートする

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

### Using the audit log API

You can interact with the audit log using the GraphQL API{% if currentVersion == "free-pro-team@latest" %} or the REST API{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}

#### Using the GraphQL API

{% endif %}

{% note %}

**Note**: The audit log GraphQL API is available for organizations using {% data variables.product.prodname_enterprise %}. {% data reusables.gated-features.more-info-org-products %}

{% endnote %}

To ensure a secure IP and maintain compliance for your organization, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}

{% if currentVersion == "free-pro-team@latest" %}
Note that you can't retrieve Git events using the GraphQL API. To retrieve Git events, use the REST API instead. For more information, see "[`git` category actions](#git-category-actions)."
{% endif %}

GraphQL のレスポンスには、90 日から 120 日までのデータを含めることができます。

たとえば、GraphQL にリクエストして、Organization に新しく追加された Organization メンバー全員を表示できます。 詳細は「[GraphQL API Audit Log](/graphql/reference/interfaces#auditentry/)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

#### Using the REST API

{% note %}

**Note:** The audit log REST API is available as a public beta for users of {% data variables.product.prodname_ghe_cloud %} only.

{% endnote %}

To ensure a secure IP and maintain compliance for your organization, you can use the audit log REST API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}
* Git events, such as cloning, fetching, and pushing

{% data reusables.audit_log.audit-log-git-events-retention %}

For more information about the audit log REST API, see "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)" in the REST API documentation.

{% endif %}

### Audit log actions

An overview of some of the most common actions that are recorded as events in the audit log.

{% if currentVersion == "free-pro-team@latest" %}

#### `account` category actions

| アクション                         | 説明                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `billing_plan_change`         | Organization の[支払いサイクル](/articles/changing-the-duration-of-your-billing-cycle)が変わるときにトリガーされます。                                                         |
| `plan_change`                 | Organization の[プラン](/articles/about-billing-for-github-accounts)が変わるときにトリガーされます。                                                                       |
| `pending_plan_change`         | Organization のオーナーまたは支払いマネージャーが[支払い済みサブスクリプションをキャンセルまたはダウングレードする](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/)ときにトリガーされます。 |
| `pending_subscription_change` | [{% data variables.product.prodname_marketplace %} の無料トライアルが始まるか期限切れになる](/articles/about-billing-for-github-marketplace/)ときにトリガーされます。                  |

#### `advisory_credit` category actions

| アクション     | 説明                                                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`  | Triggered when someone accepts credit for a security advisory. 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory)」を参照してください。 |
| `create`  | Triggered when the administrator of a security advisory adds someone to the credit section.                                                                                      |
| `decline` | Triggered when someone declines credit for a security advisory.                                                                                                                  |
| `destroy` | Triggered when the administrator of a security advisory removes someone from the credit section.                                                                                 |

#### `billing` カテゴリアクション

| アクション                 | 説明                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | Organization が[{% data variables.product.prodname_dotcom %} の支払い方法を変更する](/articles/adding-or-editing-a-payment-method)ときにトリガーされます。 |
| `change_email`        | Organization の[支払い請求先メール アドレス](/articles/setting-your-billing-email)が変わるときにトリガーされます。                                               |

#### `dependabot_alerts` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all existing {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all existing {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.                                                                                                                                                                                |

#### `dependabot_alerts_new_repos` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.                                                                                                                                                                                |

#### `dependabot_security_updates` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories. 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories.                                                                                                                                                                                |

#### `dependabot_security_updates_new_repos` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories. 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories.                                                                                                                                                                                |

#### `dependency_graph` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables the dependency graph for all existing repositories. 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables the dependency graph for all existing repositories.                                                                                                                                                                                |

#### `dependency_graph_new_repos` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                         |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables the dependency graph for all new repositories. 詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables the dependency graph for all new repositories.                                                                                                                                                                                |

{% endif %}

#### `discussion_post` category actions

| アクション     | 説明                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------ |
| `update`  | [Team ディスカッションの投稿が編集される](/articles/managing-disruptive-comments/#editing-a-comment)ときにトリガーされます。  |
| `destroy` | [Team ディスカッションの投稿が削除される](/articles/managing-disruptive-comments/#deleting-a-comment)ときにトリガーされます。 |

#### `discussion_post_reply` category actions

| アクション     | 説明                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `update`  | [Team ディスカッションの投稿への返答が編集される](/articles/managing-disruptive-comments/#editing-a-comment)ときにトリガーされます。  |
| `destroy` | [Team ディスカッションの投稿への返答が削除される](/articles/managing-disruptive-comments/#deleting-a-comment)ときにトリガーされます。 |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
#### `enterprise` category actions

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `environment` category actions

| アクション                   | 説明                                                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create_actions_secret` | Triggered when a secret is created in an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."   |
| `delete`                | Triggered when an environment is deleted. For more information, see ["Deleting an environment](/actions/reference/environments#deleting-an-environment)."       |
| `remove_actions_secret` | Triggered when a secret is removed from an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)." |
| `update_actions_secret` | Triggered when a secret in an environment is updated. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."   |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `git` category actions

{% note %}

**Note:** To access Git events in the audit log, you must use the audit log REST API. This functionality is available as a public beta for users of {% data variables.product.prodname_ghe_cloud %} only.

For more information about the audit log REST API, see "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)" in the REST API documentation.

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| アクション  | 説明                                                    |
| ------ | ----------------------------------------------------- |
| `クローン` | Triggered when a repository is cloned.                |
| `フェッチ` | Triggered when changes are fetched from a repository. |
| `プッシュ` | Triggered when changes are pushed to a repository.    |

{% endif %}

#### `hook` category actions

| アクション            | 説明                                                                              |
| ---------------- | ------------------------------------------------------------------------------- |
| `create`         | Organization が所有するリポジトリに[新たなフックが追加された](/articles/creating-webhooks)ときにトリガーされます。 |
| `config_changed` | 既存のフックに変更された設定がある場合にトリガーされます。                                                   |
| `destroy`        | 既存のフックがリポジトリから削除されたときにトリガーされます。                                                 |
| `events_changed` | フックでのイベントが変更された場合にトリガーされます。                                                     |

#### `integration_installation_request` category actions

| アクション    | 説明                                                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Organization のメンバーが、Organization 内で使用するために、Organization のオーナーにインテグレーションをインストールすることを要求するときにトリガーされます。                                |
| `close`  | Organization 内で使用するためにインテグレーションをインストールする要求が、Organization のオーナーにより承認または拒否されるか、あるいは要求を公開した Organization のメンバーによりキャンセルされるときにトリガーされます。 |

#### `issue` category actions

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

#### `members_can_create_pages` category actions

For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization)."

| アクション     | 説明                                                                                                             |
|:--------- |:-------------------------------------------------------------------------------------------------------------- |
| `enable`  | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を有効化するときトリガーされます。 |
| `disable` | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を無効化するときトリガーされます。 |

{% endif %}

#### `org` category actions

| アクション                                                                                                                                    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `advanced_security_policy_selected_member_disabled`                                                                                      | Triggered when an enterprise owner prevents {% data variables.product.prodname_GH_advanced_security %} features from being enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled`                                                                                       | Triggered when an enterprise owner allows {% data variables.product.prodname_GH_advanced_security %} features to be enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `audit_log_export`                                                                                                                       | Organization の管理者が [Organization の Audit log のエクスポートを作成する](#exporting-the-audit-log)ときにトリガーされます。 エクスポートにクエリが含まれていた場合、ログには使用されたクエリとそのクエリに一致する Audit log エントリの数が一覧表示されます。                                                                                                                                                                                                                                                                                                                      |
| `block_user`                                                                                                                             | Organization のオーナーが[Organization のリポジトリにユーザーがアクセスするのをブロックする](/articles/blocking-a-user-from-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                   |
| `cancel_invitation`                                                                                                                      | Organization の招待が取り消されている場合にトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                                        |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`                                                                                                                  | Organization に対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 For more information, see "[Creating encrypted secrets for an organization](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)."{% endif %}                                                                                                                                                                                                                       |{% if currentVersion == "free-pro-team@latest"%}
| `disable_oauth_app_restrictions`                                                                                                         | オーナーが Organization に対して[{% data variables.product.prodname_oauth_app %} のアクセス制限を無効にする](/articles/disabling-oauth-app-access-restrictions-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                |
| `disable_saml`                                                                                                                           | Organization の管理者が Organization に対して SML シングルサインオンを無効にするときにトリガーされます。{% endif %}
| `disable_member_team_creation_permission`                                                                                                | Organization のオーナーがオーナーに Team 作成を制限するときにトリガーされます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 |{% if currentVersion != "github-ae@latest" %}
| `disable_two_factor_requirement`                                                                                                         | Triggered when an owner disables a two-factor authentication requirement for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable_oauth_app_restrictions`                                                                                                          | オーナーが Organization に対して[{% data variables.product.prodname_oauth_app %} のアクセス制限を有効にする](/articles/enabling-oauth-app-access-restrictions-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                 |
| `enable_saml`                                                                                                                            | Organization の管理者が Organization に対して [SAML シングルサインオン を有効にする](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)ときにトリガーされます。{% endif %}
| `enable_member_team_creation_permission`                                                                                                 | メンバーが Team を作成するのを Organizationのオーナーが許可するときにトリガーされます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 |{% if currentVersion != "github-ae@latest" %}
| `enable_two_factor_requirement`                                                                                                          | Triggered when an owner requires two-factor authentication for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}
| `invite_member`                                                                                                                          | [新しいユーザーがOrganization に参加するよう招待](/articles/adding-organization-members-to-a-team)されたにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `oauth_app_access_approved`                                                                                                              | オーナーが [{% data variables.product.prodname_oauth_app %} へのアクセスを許可する](/articles/approving-oauth-apps-for-your-organization/)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                     |
| `oauth_app_access_denied`                                                                                                                | オーナーが Organization への[以前に承認した {% data variables.product.prodname_oauth_app %} のアクセス権を無効にする](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                                                 |
| `oauth_app_access_requested`                                                                                                             | Triggered when an organization member requests that an owner grant an {% data variables.product.prodname_oauth_app %} access to your organization.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`                                                                                                            | 新しいセルフホストランナーが登録されたときにトリガーされます。 For more information, see "[Adding a self-hosted runner to an organization](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)."                                                                                                                                                                                                                                                                   |
| `remove_actions_secret`                                                                                                                  | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% endif %}{% if currentVersion == "free-pro-team@latest"%}
| `remove_billing_manager`                                                                                                                 | [オーナーが Organization から支払いマネージャーを削除する](/articles/removing-a-billing-manager-from-your-organization/)とき、または [Organization で 2 要素認証が義務付けられている](/articles/requiring-two-factor-authentication-in-your-organization)が、支払いマネージャーが 2 要素認証を使用しないか 2 要素認証を無効にしているときにトリガーされます。 
{% endif %}
| `remove_member`                                                                                                                          | Triggered when an [owner removes a member from an organization](/articles/removing-a-member-from-your-organization/){% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disables 2FA{% endif %}. Organization から [Organization のメンバーが自身を削除](/articles/removing-yourself-from-an-organization/)するときにもトリガーされます。 |
| `remove_outside_collaborator`                                                                                                            | Triggered when an owner removes an outside collaborator from an organization{% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an outside collaborator does not use 2FA or disables 2FA{% endif %}. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_self_hosted_runner`                                                                                                              | セルフホストランナーが削除されたときにトリガーされます。 For more information, see "[Removing a runner from an organization](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)."                                                                                                                                                                                                                                                                                    |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `revoke_external_identity`                                                                                                               | Organization のオーナーがメンバーのリンクされたアイデンティティを取り消すときにトリガーされます。 詳細は、「[組織へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。                                                                                                                                                                                                                          |
| `revoke_sso_session`                                                                                                                     | Organization のオーナーがメンバーの SAML セッションを取り消すときにトリガーされます。 詳細は、「[組織へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。                                                                                                                                                                                                                             |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `runner_group_created`                                                                                                                   | セルフホストランナーグループが作成されたときにトリガーされます。 For more information, see "[Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)."                                                                                                                                                                                                                       |
| `runner_group_created`                                                                                                                   | セルフホストランナーグループが削除されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループの削除](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。                                                                                                                                                                                                                                                                                        |
| `runner_group_updated`                                                                                                                   | セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループのアクセスポリシーの変更](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。                                                                                                                                                                                                                                                       |
| `runner_group_runners_added`                                                                                                             | セルフホストランナーがグループに追加されたときにトリガーされます。 For more information, see [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).                                                                                                                                                                                                                                                          |
| `runner_group_runner_removed`                                                                                                            | Triggered when the REST API is used to remove a self-hosted runner from a group. For more information, see "[Remove a self-hosted runner from a group for an organization](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)."                                                                                                                                                                                                                           |
| `runner_group_runners_updated`                                                                                                           | Triggered when a runner group's list of members is updated. For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."{% endif %}{% if currentVersion == "free-pro-team@latest"%}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `self_hosted_runner_updated`                                                                                                             | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}
| `unblock_user`                                                                                                                           | Organizationのオーナーが[ Organization からユーザりブロックを解除](/articles/unblocking-a-user-from-your-organization)するときにトリガーされます。{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`                                                                                                                  | Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `update_new_repository_default_branch_setting`                                                                                           | オーナーが Organization の新しいリポジトリのデフォルトブランチの名前を変更するときにトリガーされます。 詳しい情報については、「[Organization のリポジトリのデフォルブランチ名を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)」を参照してください。{% endif %}
| `update_default_repository_permission`                                                                                                   | オーナーが Organization のメンバーのデフォルトリポジトリの権限レベルを変更するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `update_member`                                                                                                                          | オーナーがユーザーのロールをオーナーからメンバーに、またはメンバーからオーナーに変更するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `update_member_repository_creation_permission`                                                                                           | オーナーが Organization のメンバーのリポジトリ作成権限を変更するときにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `update_saml_provider_settings`                                                                                                          | Organization の SAML プロバイダ設定が更新されるときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `update_terms_of_service`                                                                                                                | Organization が標準利用規約と企業向け利用規約を切り替えるときにトリガーされます。 詳細は「[企業利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `org_credential_authorization` category actions

| アクション          | 説明                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grant`        | [SAML シングルサインオンに使用するクレデンシャルをメンバーが認可する](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)ときにトリガーされます。                                  |
| `deauthorized` | [SAML シングルサインオンに使用するクレデンシャルの認可をメンバーが取り消す](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)ときにトリガーされます。                               |
| `revoke`       | オーナーが[認可されたクレデンシャルを取り消す](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)ときにトリガーされます。 |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
#### `organization_label` category actions

| アクション     | 説明                         |
| --------- | -------------------------- |
| `create`  | デフォルトラベルが作成されるときにトリガーされます。 |
| `update`  | デフォルトラベルが編集されるときにトリガーされます。 |
| `destroy` | デフォルトラベルが削除されるときにトリガーされます。 |

{% endif %}

#### `oauth_application` category actions

| アクション           | 説明                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ |
| `create`        | 新たな {% data variables.product.prodname_oauth_app %} が作成されるときにトリガーされます。                   |
| `destroy`       | 既存の {% data variables.product.prodname_oauth_app %} が削除されるときにトリガーされます。                   |
| `reset_secret`  | {% data variables.product.prodname_oauth_app %} のクライアント シークレットがリセットされるときにトリガーされます。       |
| `revoke_tokens` | {% data variables.product.prodname_oauth_app %} のユーザートークンが取り消されるときにトリガーされます。             |
| `移譲`            | 既存の {% data variables.product.prodname_oauth_app %} が新しい Organization に移譲されるときにトリガーされます。 |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
#### `packages` category actions

| アクション                       | 説明                                                                                                                                                                                      |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `package_version_published` | Triggered when a package version is published.                                                                                                                                          |
| `package_version_deleted`   | Triggered when a specific package version is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)." |
| `package_deleted`           | Triggered when an entire package is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."          |
| `package_version_restored`  | Triggered when a specific package version is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)." |
| `package_restored`          | Triggered when an entire package is restored. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."         |

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

#### `protected_branch` category actions

| アクション                                                 | 説明                                                                                                                                                                                                                                     |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                                              | ブランチでブランチの保護が有効になるときにトリガーされます。                                                                                                                                                                                                         |
| `destroy`                                             | ブランチでブランチの保護が無効になるときにトリガーされます。                                                                                                                                                                                                         |
| `update_admin_enforced`                               | リポジトリの管理者に対してブランチの保護が実施されるときにトリガーされます。                                                                                                                                                                                                 |
| `update_require_code_owner_review`                    | 必須コードオーナーレビューの実施がブランチで更新されるときにトリガーされます。                                                                                                                                                                                                |
| `dismiss_stale_reviews`                               | 古い Pull Request の却下の実施がブランチで更新されるときにトリガーされます。                                                                                                                                                                                          |
| `update_signature_requirement_enforcement_level`      | 必須コミット署名の実施がブランチで更新されるときにトリガーされます。                                                                                                                                                                                                     |
| `update_pull_request_reviews_enforcement_level`       | 必須 Pull Request レビューの実施がブランチで更新されるときにトリガーされます。                                                                                                                                                                                         |
| `update_required_status_checks_enforcement_level`     | 必須ステータスチェックの実施がブランチで更新されるときにトリガーされます。                                                                                                                                                                                                  |
| `update_strict_required_status_checks_policy`         | マージする前に最新にする必要があるブランチの要件が変更されるときにトリガーされます。                                                                                                                                                                                             |
| `rejected_ref_update`                                 | ブランチ更新の試行が拒否されるときにトリガーされます。                                                                                                                                                                                                            |
| `policy_override`                                     | Triggered when a branch protection requirement is overridden by a repository administrator.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| `update_allow_force_pushes_enforcement_level`         | 保護されたブランチについて、フォースプッシュが有効化または無効化されるときにトリガーされます。                                                                                                                                                                                        |
| `update_allow_deletions_enforcement_level`            | 保護されたブランチについて、ブランチ削除が有効化または無効化されるときにトリガーされます。                                                                                                                                                                                          |
| `update_linear_history_requirement_enforcement_level` | 保護されたブランチについて、必須の直線状のコミット履歴が有効化または無効化されるときにトリガーされます。                                                                                                                                                                                   |
{% endif %}

#### `repo` カテゴリアクション

| アクション                                 | 説明                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | Triggered when a user [changes the visibility](/github/administering-a-repository/setting-repository-visibility) of a repository in the organization.                                                                                                                                                                                              |
| `actions_enabled`                     | Triggered when {% data variables.product.prodname_actions %} is enabled for a repository. Can be viewed using the UI. This event is not included when you access the audit log using the REST API. For more information, see "[Using the REST API](#using-the-rest-api)."                                                                          |
| `add_member`                          | ユーザーが[リポジトリへのコラボレーションアクセスへの招待](/articles/inviting-collaborators-to-a-personal-repository)を受諾するときにトリガーされます。                                                                                                                                                                                                                                         |
| `add_topic`                           | Triggered when a repository admin [adds a topic](/articles/classifying-your-repository-with-topics) to a repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `advanced_security_disabled`          | Triggered when a repository administrator disables {% data variables.product.prodname_GH_advanced_security %} features for the repository. 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。                                                        |
| `advanced_security_enabled`           | Triggered when a repository administrator enables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).".{% endif %}
| `archived`                            | リポジトリの管理者が[リポジトリをアーカイブする](/articles/about-archiving-repositories)ときにトリガーされます。{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access` | 公開リポジトリで[匿名の Git 読み取りアクセスが無効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                                                                                                                   |
| `config.enable_anonymous_git_access`  | 公開リポジトリで[匿名の Git 読み取りアクセスが有効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                                                                                                                                   |
| `config.lock_anonymous_git_access`    | リポジトリの[匿名の Git 読み取りアクセス設定がロックされる](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。                                                                                                                                                                              |
| `config.unlock_anonymous_git_access`  | リポジトリの[匿名の Git 読み取りアクセス設定がロック解除される](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。{% endif %}
| `create`                              | Triggered when [a new repository is created](/articles/creating-a-new-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`               | リポジトリに対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 For more information, see "[Creating encrypted secrets for a repository](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."{% endif %}
| `destroy`                             | [リポジトリが削除される](/articles/deleting-a-repository)ときにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `disable`                             | リポジトリが無効になるときにトリガーされます ([残高不足](/articles/unlocking-a-locked-account)などの場合)。{% endif %}
| `enable`                              | Triggered when a repository is reenabled.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_actions_secret`               | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% endif %}
| `remove_member`                       | Triggered when a user is [removed from a repository as a collaborator](/articles/removing-a-collaborator-from-a-personal-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`         | 新しいセルフホストランナーが登録されたときにトリガーされます。 For more information, see "[Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."                                                                                                                               |
| `remove_self_hosted_runner`           | セルフホストランナーが削除されたときにトリガーされます。 For more information, see "[Removing a runner from a repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)."                                                                                                                                                |{% endif %}
| `remove_topic`                        | リポジトリの管理者がリポジトリからトピックを削除するときにトリガーされます。                                                                                                                                                                                                                                                                                                             |
| `rename`                              | Triggered when [a repository is renamed](/articles/renaming-a-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `self_hosted_runner_updated`          | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}
| `移譲`                                  | [リポジトリが移譲される](/articles/how-to-transfer-a-repository)ときにトリガーされます。                                                                                                                                                                                                                                                                                  |
| `transfer_start`                      | リポジトリの移譲が行われようとしているときにトリガーされます。                                                                                                                                                                                                                                                                                                                    |
| `unarchived`                          | Triggered when a repository admin unarchives a repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`               | Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

#### `repository_advisory` category actions

| アクション              | 説明                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `close`            | Triggered when someone closes a security advisory. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)." |
| `cve_request`      | Triggered when someone requests a CVE (Common Vulnerabilities and Exposures) number from {% data variables.product.prodname_dotcom %} for a draft security advisory.                                                                 |
| `github_broadcast` | Triggered when {% data variables.product.prodname_dotcom %} makes a security advisory public in the {% data variables.product.prodname_advisory_database %}.                                                                       |
| `github_withdraw`  | Triggered when {% data variables.product.prodname_dotcom %} withdraws a security advisory that was published in error.                                                                                                               |
| `オープン`             | Triggered when someone opens a draft security advisory.                                                                                                                                                                              |
| `publish`          | Triggered when someone publishes a security advisory.                                                                                                                                                                                |
| `さいお`              | Triggered when someone reopens as draft security advisory.                                                                                                                                                                           |
| `update`           | Triggered when someone edits a draft or published security advisory.                                                                                                                                                                 |

#### `repository_content_analysis` category actions

| アクション     | 説明                                                                                                                                                                                                          |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enable`  | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対してデータ使用設定を有効にする](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)ときにトリガーされます。 |
| `disable` | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対してデータ使用設定を無効にする](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)ときにトリガーされます。 |

{% endif %}{% if currentVersion != "github-ae@latest" %}

#### `repository_dependency_graph` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                                                                   |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when a repository owner or person with admin access to the repository disables the dependency graph for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。 |
| `enable`  | Triggered when a repository owner or person with admin access to the repository enables the dependency graph for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository.                                                                                                                   |

{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### `repository_secret_scanning` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                                                 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when a repository owner or person with admin access to the repository disables secret scanning for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | Triggered when a repository owner or person with admin access to the repository enables secret scanning for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository.                                                                                                      |

{% endif %}{% if currentVersion != "github-ae@latest" %}
#### `repository_vulnerability_alert` category actions

| アクション    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Triggered when {% data variables.product.product_name %} creates a {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert for a repository that uses a vulnerable dependency. 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。 |
| `却下`     | Triggered when an organization owner or person with admin access to the repository dismisses a {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert about a vulnerable dependency.                                                                                                                              |
| `解決`     | Triggered when someone with write access to a repository pushes changes to update and resolve a vulnerability in a project dependency.                                                                                                                                                                                                                                                                                                              |

{% endif %}{% if currentVersion == "free-pro-team@latest" %}
#### `repository_vulnerability_alerts` category actions

| アクション                    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorized_users_teams` | Triggered when an organization owner or a person with admin permissions to the repository updates the list of people or teams authorized to receive {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies in the repository. 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。 |
| `disable`                | Triggered when a repository owner or person with admin access to the repository disables {% data variables.product.prodname_dependabot_alerts %}.                                                                                                                                                                                                                                                                                            |
| `enable`                 | Triggered when a repository owner or person with admin access to the repository enables {% data variables.product.prodname_dependabot_alerts %}.                                                                                                                                                                                                                                                                                             |

{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### `secret_scanning` category actions

| アクション     | 説明                                                                                                                                                                                                                                                                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables secret scanning for all existing{% if currentVersion == "free-pro-team@latest" %}, private{% endif %} repositories. 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables secret scanning for all existing{% if currentVersion == "free-pro-team@latest" %}, private{% endif %} repositories.                                                                                                      |

#### `secret_scanning_new_repos` category actions

| アクション     | 説明                                                                                                                                                                                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Triggered when an organization owner disables secret scanning for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 |
| `enable`  | Triggered when an organization owner enables secret scanning for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.                                                                                                      |

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `sponsors` カテゴリアクション

| アクション                                          | 説明                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `repo_funding_link_button_toggle`              | リポジトリでスポンサーボタンの表示を有効化または無効化したときにトリガーされます (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)                                                                                                                                                                                          |
| `repo_funding_links_file_action`               | リポジトリで FUNDING ファイルを変更したときにトリガーされます (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)                                                                                                                                                                                               |
| `sponsor_sponsorship_cancel`                   | スポンサーシップをキャンセルしたときにトリガーされます (「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)                                                                                                                                                                                                                             |
| `sponsor_sponsorship_create`                   | アカウントをスポンサーするとトリガーされます (「[オープンソースコントリビューターに対するスポンサー](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor)」を参照)                                                                                                                                                       |
| `sponsor_sponsorship_preference_change`        | Triggered when you change whether you receive email updates from a sponsored account (see "[Managing your sponsorship](/articles/managing-your-sponsorship)")                                                                                                                                                            |
| `sponsor_sponsorship_tier_change`              | スポンサーシップをアップグレードまたはダウングレードしたときにトリガーされます (「[スポンサーシップをアップグレードする](/articles/upgrading-a-sponsorship)」および「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)                                                                                                                                                     |
| `sponsored_developer_approve`                  | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")                     |
| `sponsored_developer_create`                   | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")                      |
| `sponsored_developer_profile_update`           | Triggered when you edit your sponsored organization profile (see "[Editing your profile details for {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/editing-your-profile-details-for-github-sponsors)")                                                |
| `sponsored_developer_request_approval`         | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)") |
| `sponsored_developer_tier_description_update`  | スポンサーシップ層の説明を変更したときにトリガーされます (「[スポンサーシップ層を変更する](/articles/changing-your-sponsorship-tiers)」を参照)                                                                                                                                                                                                                          |
| sponsored_developer_update_newsletter_send | スポンサーにメールで最新情報を送信したときにトリガーされます (「[スポンサーに連絡する](/articles/contacting-your-sponsors)」を参照)                                                                                                                                                                                                                                   |
| `waitlist_invite_sponsored_developer`          | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")    |
| `waitlist_join`                                | Triggered when you join the waitlist to become a sponsored organization (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")                                    |
{% endif %}

#### `team` カテゴリアクション

| アクション                | 説明                                                                                                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member`         | Organization のメンバーが[Team に追加される](/articles/adding-organization-members-to-a-team)ときにトリガーされます。                                                                                    |
| `add_repository`     | リポジトリの管理が Team に任せられるときにトリガーされます。                                                                                                                                                |
| `change_parent_team` | 子チームが作成されるとき、または[子チームの親が変更される](/articles/moving-a-team-in-your-organization-s-hierarchy)ときにトリガーされます。                                                                             |
| `change_privacy`     | Team のプライバシー レベルが変更されるときにトリガーされます。                                                                                                                                               |
| `create`             | Triggered when a new team is created.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}


`demote_maintainer` | Triggered when a user was demoted from a team maintainer to a team member. For more information, see "[Giving "team maintainer" permissions to an organization member](/github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member)."{% endif %} | `destroy` | Triggered when a team is deleted from the organization.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} `team.promote_maintainer` | Triggered when a user was promoted from a team member to a team maintainer. For more information, see "[Giving "team maintainer" permissions to an organization member](/github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member)."{% endif %} | `remove_member` | Triggered when a member of an organization is [removed from a team](/articles/removing-organization-members-from-a-team). | `remove_repository` | Triggered when a repository is no longer under a team's control.

#### `team_discussions` category actions

| アクション     | 説明                                                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが Organization の Team ディスカッションを無効にするときにトリガーされます。 詳しい情報については [Organization の Team ディスカッションの無効化](/articles/disabling-team-discussions-for-your-organization)を参照してください。 |
| `enable`  | Organization のオーナーが Organization の Team ディスカッションを有効にするときにトリガーされます。                                                                                                                     |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest"%}
#### `workflows` category actions

{% data reusables.actions.actions-audit-events-workflow %}

{% endif %}

### 参考リンク

- "[Organization を安全に保つ](/articles/keeping-your-organization-secure)"
