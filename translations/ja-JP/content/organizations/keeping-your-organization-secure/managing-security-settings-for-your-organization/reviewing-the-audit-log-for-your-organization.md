---
title: Organization の Audit log をレビューする
intro: Audit log により、Organization の管理者は Organization のメンバーによって行われたアクションをすばやくレビューできます。 これには、誰がいつ何のアクションを実行したかなどの詳細が残されます。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
ms.openlocfilehash: 430cf928f91cad2851c9ad0c661f159177866463
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180678'
---
## Audit log にアクセスする

Audit logは、当月及び過去6ヶ月の間にOrganizationに影響するアクティビティによって生じたイベントをリストします。 Organization の Audit log にアクセスできるのはオーナーのみです。

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Audit log を検索する

{% data reusables.audit_log.audit-log-search %}

### 実行されたアクションに基づく検索

特定のイベントを検索するには、クエリで `action` 修飾子を使用します。 Audit log に一覧表示されるアクションは以下のカテゴリに分類されます。

| カテゴリ名 | 説明 |------------------|-------------------{% ifversion fpt or ghec %} | [`account`](#account-category-actions) | Organization アカウントに関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion fpt or ghec %} | [`advisory_credit`](#advisory_credit-category-actions) | {% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリの共同作成者の与信に関連するすべてのアクティビティが含まれます。 詳しくは、「[{% data variables.product.prodname_dotcom %} セキュリティ アドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。{% endif %}{% ifversion pat-v2%} | [`auto_approve_personal_access_token_requests`](#auto_approve_personal_access_token_requests-category-actions) | {% data variables.product.pat_v2 %} に対する Organization の承認ポリシーに関連するアクティビティが含まれます。 詳しくは、「[Organization の{% data variables.product.pat_generic %}ポリシーを設定する](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)」を参照してください。{% endif %}{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Organization の課金に関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion fpt or ghec %} | [`business`](#business-category-actions) | Enterprise のビジネス設定に関連するアクティビティが含まれます。 |{% endif %}{% ifversion fpt or ghec %} | [`codespaces`](#codespaces-category-actions) | Organization の codespace に関連するすべてのアクティビティが含まれます。 |{% endif %} | [`dependabot_alerts`](#dependabot_alerts-category-actions) | 既存のリポジトリの {% data variables.product.prodname_dependabot_alerts %}に対する Organization レベルの設定アクティビティが含まれます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | Organization で作成された新しいリポジトリ内の {% data variables.product.prodname_dependabot_alerts %}の Organization レベルの構成アクティビティが含まれます。{% ifversion fpt or ghec or ghes %} | [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | 既存のリポジトリ内の {% data variables.product.prodname_dependabot_security_updates %}の Organization レベルの構成アクティビティが含まれます。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %} の構成](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | 組織で作成された新しいリポジトリ内の {% data variables.product.prodname_dependabot_security_updates %} の組織レベルの構成アクティビティが含まれています。{% endif %}{% ifversion fpt or ghec %} | [`dependency_graph`](#dependency_graph-category-actions) | リポジトリの依存関係グラフの組織レベルの構成アクティビティが含まれています。 詳細については、「[依存関係グラフの概要](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | 組織で作成された新しいリポジトリの組織レベルの構成アクティビティが含まれています。{% endif %} | [`discussion_post`](#discussion_post-category-actions) | チーム ページに投稿されたディスカッションに関連するすべてのアクティビティが含まれます。
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | チーム ページに投稿されたディスカッションへの返信に関連するすべてのアクティビティが含まれます。{% ifversion fpt or ghes or ghec %} | [`enterprise`](#enterprise-category-actions) | エンタープライズ設定に関連するアクティビティが含まれます。 |{% endif %} | [`hook`](#hook-category-actions) | Webhook に関連するすべてのアクティビティが含まれます。
| [`integration_installation`](#integration_installation-category-actions) | アカウント内にインストールされたインテグレーションに関連するアクティビティが含まれます。 | | [`integration_installation_request`](#integration_installation_request-category-actions) | Organization 内で使用するインテグレーションをオーナーが承認するよう求める、Organization メンバーからのリクエストに関連するすべてのアクティビティが含まれます。 |{% ifversion ghec or ghae %} | [`ip_allow_list`](#ip_allow_list-category-actions) | Organization の IP 許可リストの有効化または無効化に関連するアクティビティが含まれます。
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | Organization に対する IP 許可リストのエントリの作成、削除、編集に関連するアクティビティが含まれます。{% endif %} | [`issue`](#issue-category-actions) | イシューの削除に関連するアクティビティが含まれます。 {% ifversion fpt or ghec %} | [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | {% data variables.product.prodname_marketplace %} 開発者契約の署名に関連するすべてのアクティビティが含まれます。
| [`marketplace_listing`](#marketplace_listing-category-actions) | {% data variables.product.prodname_marketplace %} のアプリの一覧表示に関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion fpt or ghes or ghec %} | [`members_can_create_pages`](#members_can_create_pages-category-actions) | 組織内のリポジトリの {% data variables.product.prodname_pages %} サイトの発行の管理に関連するすべてのアクティビティが含まれます。 詳細については、「[Organization の {% data variables.product.prodname_pages %} サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。 |{% endif %} | [`org`](#org-category-actions) | Organization のメンバーシップに関連するアクティビティが含まれます。{% ifversion ghec %} | [`org_credential_authorization`](#org_credential_authorization-category-actions) | SAML シングル サインオンで使用する資格情報の承認に関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | カスタム パターンをスキャンするシークレットに関連する Organization レベルのアクティビティが含まれます。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)」を参照してください。 {% endif %} | [`organization_default_label`](#organization_default_label-category-actions) | Organization のリポジトリのデフォルト ラベルに関連するすべてのアクティビティが対象です。
| [`oauth_application`](#oauth_application-category-actions) | OAuth アプリに関連するすべてのアクティビティが含まれます。
| [`packages`](#packages-category-actions) | {% data variables.product.prodname_registry %} に関連するすべてのアクティビティが含まれます。{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Organization が GitHub に対して支払う方法に関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Organization の{% data variables.product.pat_v2 %}に関連するすべてのアクティビティが含まれます。 詳しくは、「[{% data variables.product.pat_generic %}の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。{% endif %} | [`profile_picture`](#profile_picture-category-actions) | Organization のプロファイル画像に関連するすべてのアクティビティが含まれます。
| [`project`](#project-category-actions) | プロジェクト ボードに関連するすべてのアクティビティが含まれます。
| [`protected_branch`](#protected_branch-category-actions) | 保護されたブランチに関連するすべてのアクティビティが対象です。
| [`repo`](#repo-category-actions) | 組織が所有するリポジトリに関連するアクティビティが含まれます。{% ifversion fpt or ghec %} | [`repository_advisory`](#repository_advisory-category-actions) |{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリに関連するリポジトリ レベルのアクティビティが含まれます。  詳細については、「[{% data variables.product.prodname_dotcom %} セキュリティ アドバイザリの概要](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | [プライベート リポジトリのデータ使用の有効化または無効化](/articles/about-github-s-use-of-your-data)に関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion fpt or ghec %} | [`repository_dependency_graph`](#repository_dependency_graph-category-actions) |{% ifversion fpt or ghec %} プライベート {% endif %} リポジトリの依存関係グラフの有効化または無効化に関連するリポジトリ レベルのアクティビティが含まれます。 詳細については、「[依存関係グラフについて」を](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)参照してください。{% endif %}{% ifversion ghes or ghae or ghec %} | [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | シークレット スキャンに関連するリポジトリ レベルのアクティビティが含まれます。 詳細については、「[シークレット スキャンについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。 {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_custom_pattern`](#repository_secret_scanning_custom_pattern-category-actions) | シークレット スキャン カスタム パターンに関連するリポジトリ レベルのアクティビティが含まれます。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)に関する記事を参照してください。 {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_push_protection`](#repository_secret_scanning_push_protection-category-actions) | シークレット スキャン カスタム パターンに関連するリポジトリ レベルのアクティビティが含まれます。 詳細については、「[Protecting pushes with secret scanning (シークレット スキャンによるプッシュの保護)](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。 {% endif %} | [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) に関連するすべてのアクティビティが含まれます。{% ifversion fpt or ghec %} | [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) |{% data variables.product.prodname_dependabot_alerts %} のリポジトリ レベルの構成アクティビティが含まれています。{% endif %}{% ifversion custom-repository-roles %} | [`role`](#role-category-actions) | [カスタム リポジトリ ロール](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)に関連するすべてのアクティビティが含まれます。{% endif %}{% ifversion ghes or ghae or ghec %} | [`secret_scanning`](#secret_scanning-category-actions) | 既存のリポジトリでシークレット スキャンを行う Organization レベルの構成アクティビティが含まれます。 詳細については、「[シークレット スキャンについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | Organization 内に作成された新しいリポジトリ内のシークレット スキャンに対する Organization レベルの構成アクティビティが含まれます。 {% endif %}{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | スポンサー ボタンに関連するすべてのイベントが含まれます (「[リポジトリにスポンサー ボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照してください){% endif %} | [`team`](#team-category-actions) | 組織内のチームに関連するすべてのアクティビティが含まれます。
| [`team_discussions`](#team_discussions-category-actions) | Organization のチーム ディスカッション管理に関連するアクティビティが含まれます。
| [`workflows`](#workflows-category-actions) | {% data variables.product.prodname_actions %} ワークフローに関連するアクティビティが含まれます。

次の用語を使用すれば、特定の一連の行動を検索できます。 次に例を示します。

  * `action:team` は、チーム カテゴリ内でグループ化されたすべてのイベントを検索します。
  * `-action:hook` は、Webhook カテゴリのすべてのイベントを除外します。

各カテゴリには、フィルタできる一連の関連アクションがあります。 次に例を示します。

  * `action:team.create` は、チームが作成されたすべてのイベントを検索します。
  * `-action:hook.events_changed` は、Webhook 上のイベントが変更されたすべてのイベントを除外します。

### アクション時間に基づく検索

`created` 修飾子を使用して、発生した日時に基づいて監査ログ内のイベントをフィルター処理します。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

次に例を示します。

  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したすべてのイベントを検索します。
  * `created:>=2014-07-08` は、2014 年 7 月 8 日またはそれ以降に発生したすべてのイベントを検索します。
  * `created:<=2014-07-08` は、2014 年 7 月 8 日またはそれより前に発生したすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31` は、2014 年 7 月の月に発生したすべてのイベントを検索します。

{% note %}

**注**: 監査ログには、当月と過去 6 か月の毎日のデータが含まれます。

{% endnote %}

### 場所に基づく検索

修飾子 `country` を使用すると、発信元の国に基づいて監査ログ内のイベントをフィルター処理できます。 国の 2 文字のショートコードまたはフル ネームを使用できます。 名前に空白がある国は引用符で囲む必要があることに注意してください。 次に例を示します。

  * `country:de` は、ドイツで発生したすべてのイベントを検索します。
  * `country:Mexico` は、メキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` は、米国で発生したすべてのイベントを検索します。

{% ifversion fpt or ghec %}
## Audit log をエクスポートする

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %} {% endif %}

## Audit log API を使用する

{% ifversion fpt %}

{% data variables.product.prodname_ghe_cloud %} を使用する組織は、GraphQL API と REST API を使用して監査ログを操作できます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api)を参照してください。

{% else %}

監査ログは、GraphQL API{% ifversion fpt or ghec %} または REST API{% endif %} を使用して操作できます。{% ifversion read-audit-scope %}これらの API を介して `read:audit_log` スコープを使用して、監査ログにアクセスできます。{% endif %}

{% ifversion ghec %}

{% note %}

**注:** 監査ログ API を使用するには、組織で {% data variables.product.prodname_ghe_cloud %} を使用している必要があります。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### GraphQL API を使用する

{% endif %}

知的財産が確実にセキュアに保たれるようにし、組織のコンプライアンスを維持するために、Audit log GraphQL API を使って監査ログのデータのコピーを保持し、モニタリングできます: {% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %} GraphQL API を使用して Git イベントを取得することはできませんので、ご注意ください。 Git イベントを取得するには、代わりに REST API を使用してください。 詳細については、「[`git`カテゴリ アクション」](#git-category-actions)を参照してください。
{% endif %}

GraphQL のレスポンスには、90 日から 120 日までのデータを含めることができます。

たとえば、GraphQL にリクエストして、Organization に新しく追加された Organization メンバー全員を表示できます。 詳細については、「[GraphQL API 監査ログ](/graphql/reference/interfaces#auditentry/)」を参照してください。

{% ifversion ghec %}

### REST API を使用して

知的財産が確実にセキュアに保たれるようにし、組織のコンプライアンスを維持するために、Audit log REST API を使って監査ログのデータのコピーを保持し、モニタリングできます: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

デフォルトでは、過去3ヶ月のイベントのみが返されます。 さらに古いイベントを含めるには、クエリでタイムスタンプを指定しなければなりません。

監査ログ REST API の詳細については、「[組織](/rest/reference/orgs#get-the-audit-log-for-an-organization)」を参照してください。

{% endif %} {% endif %}

## Audit log のアクション

Audit log にイベントとして記録される最も一般的なアクションの概要です。

{% ifversion fpt or ghec %}
### `account` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `billing_plan_change` | 組織の[課金サイクル](/articles/changing-the-duration-of-your-billing-cycle)が変更されたときにトリガーされます。
| `plan_change` | 組織の[サブスクリプション](/articles/about-billing-for-github-accounts)が変更されたときにトリガーされます。
| `pending_plan_change` | 組織所有者または支払いマネージャーが、[有料サブスクリプションを取り消すかダウングレードします](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/)。
| `pending_subscription_change` | [{% data variables.product.prodname_marketplace %} 無料試用版が開始されたか、期限切れになった](/articles/about-billing-for-github-marketplace/)ときにトリガーされました。
{% endif %}

{% ifversion fpt or ghec %}
### `advisory_credit` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `accept` | ユーザがセキュリティアドバイザリのクレジットを受け入れるとトリガーされます。 詳細については、[セキュリティ アドバイザリの編集](/github/managing-security-vulnerabilities/editing-a-security-advisory)に関する記事を参照してください。
| `create` | セキュリティアドバイザリの管理者がクレジットセクションにユーザを追加するとトリガーされます。
| `decline` | ユーザがセキュリティアドバイザリのクレジットを拒否するとトリガーされます。
| `destroy` | セキュリティアドバイザリの管理者がクレジットセクションからユーザを削除するとトリガーされます。
{% endif %}

{% ifversion pat-v2 %}

### `auto_approve_personal_access_token_requests` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | トークンが Organization のリソースにアクセスする前に、Organization が{% data variables.product.pat_v2 %}を承認する必要がある場合にトリガーされます。 詳しくは、「[Organization の {% data variables.product.pat_generic %} ポリシーを設定する](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)」をご覧ください。
| `enable` | {% data variables.product.pat_v2 %}が事前の承認なしに Organization のリソースにアクセスできる場合にトリガーされます。 詳しくは、「[Organization の {% data variables.product.pat_generic %} ポリシーを設定する](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)」をご覧ください。

{% endif %}

{% ifversion fpt or ghec %}
### `billing` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `change_billing_type` | 組織が [{% data variables.product.prodname_dotcom %} に対する支払い方法を変更](/articles/adding-or-editing-a-payment-method)したときにトリガーされます。
| `change_email` | 組織の[請求先メール アドレス](/articles/setting-your-billing-email)が変更されたときにトリガーされます。
{% endif %}

### `business` カテゴリのアクション

| アクション | 説明 |------------------|-------------------{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Enterprise で、パブリック フォークからのワークフローが承認を必要とする設定が変更されたときにトリガーされます。 詳細については、「[エンタープライズでの {% data variables.product.prodname_actions %} に対するポリシーの適用](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)」を参照してください。{% endif %} | `set_actions_retention_limit` |{% data variables.product.prodname_actions %} 成果物とログの保持期間がエンタープライズに対して変更されたときにトリガーされます。 詳細については、「[エンタープライズで {% data variables.product.prodname_actions %} のポリシーを適用する]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)」を参照してください。{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | プライベート リポジトリ フォーク上のワークフローのポリシーが変更されたときにトリガーされます。 詳細については、「{% ifversion fpt or ghec%} [エンタープライズで {% data variables.product.prodname_actions %} のポリシーを適用する]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories) {% else ifversion ghes > 2.22 %} [プライベート リポジトリ フォークのワークフローを有効にする](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks) {% endif %}」を参照してください。{% endif %}

{% ifversion fpt or ghec %}
### `codespaces` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | ユーザーが [codespace を作成](/github/developing-online-with-codespaces/creating-a-codespace)するときにトリガーされます。
| `resume` | ユーザがサスペンドされたCodespaceを再開するとトリガーされます。
| `delete` | ユーザーが [codespace を削除](/github/developing-online-with-codespaces/deleting-a-codespace)するときにトリガーされます。
| `create_an_org_secret` | ユーザーが [{% data variables.product.prodname_github_codespaces %} の Organization レベルのシークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を作成するときにトリガーされます
| `update_an_org_secret` | ユーザーが [{% data variables.product.prodname_github_codespaces %} の Organization レベルのシークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を更新するときにトリガーされます。
| `remove_an_org_secret` | ユーザーが [{% data variables.product.prodname_github_codespaces %} の Organization レベルのシークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を削除するときにトリガーされます。
| `manage_access_and_security` | [codespace がアクセスできるリポジトリ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)をユーザーが更新したときにトリガーされます。
{% endif %}

### `dependabot_alerts` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | Organizationのオーナーが既存のすべての{% ifversion fpt or ghec %}プライベート{% endif %}リポジトリの{% data variables.product.prodname_dependabot_alerts %}を無効化したときにトリガーされます。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `enable` | Organizationのオーナーが既存のすべての{% ifversion fpt or ghec %}プライベート{% endif %}リポジトリで{% data variables.product.prodname_dependabot_alerts %}を有効化したときにトリガーされます。

### `dependabot_alerts_new_repos` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | Organizationのオーナーがすべての新しい{% ifversion fpt or ghec %}プライベート{% endif %}リポジトリで{% data variables.product.prodname_dependabot_alerts %}を無効化したときにトリガーされます。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `enable` | Organizationのオーナーがすべての新しい{% ifversion fpt or ghec %}プライベート{% endif %}リポジトリで{% data variables.product.prodname_dependabot_alerts %}を有効化したときにトリガーされます。

{% ifversion fpt or ghec or ghes %}
### `dependabot_security_updates` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | Organization のオーナーが既存のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にするとトリガーされます。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `enable` | Organization のオーナーが既存のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にするとトリガーされます。

### `dependabot_security_updates_new_repos` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | Organization のオーナーが新規のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にするとトリガーされます。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `enable` | Organization のオーナーが新規のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にするとトリガーされます。
{% endif %}

{% ifversion fpt or ghec %}
### `dependency_graph` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | Organization のオーナーが既存のすべてのリポジトリに対して依存関係グラフを無効にするとトリガーされます。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `enable` | Organization のオーナーが既存のすべてのリポジトリに対して依存関係グラフを有効にするとトリガーされます。

### `dependency_graph_new_repos` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | Organization のオーナーが新規のすべてのリポジトリに対して依存関係グラフを無効にするとトリガーされます。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `enable` | Organization のオーナーが新規のすべてのリポジトリに対して依存関係グラフを有効にするとトリガーされます。
{% endif %}

### `discussion_post` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `update` | [チーム ディスカッションの投稿が編集](/articles/managing-disruptive-comments/#editing-a-comment)されたときにトリガーされます。
| `destroy` | [チーム ディスカッションの投稿が削除](/articles/managing-disruptive-comments/#deleting-a-comment)されたときにトリガーされます。

### `discussion_post_reply` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `update` | [チーム ディスカッションの投稿への返信が編集](/articles/managing-disruptive-comments/#editing-a-comment)されたときにトリガーされます。
| `destroy` | [チーム ディスカッションの投稿への返信が削除](/articles/managing-disruptive-comments/#deleting-a-comment)されたときにトリガーされます。

{% ifversion fpt or ghes or ghec %}
### `enterprise` カテゴリのアクション

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### `environment` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create_actions_secret` | シークレットが環境で作成されたときにトリガーされます。 詳しくは、「[環境のシークレット](/actions/reference/environments#environment-secrets)」をご覧ください。
| `delete` | 環境が削除されるとトリガーされます。 詳しくは、「[環境の削除](/actions/reference/environments#deleting-an-environment)」をご覧ください。
| `remove_actions_secret` |  シークレットが環境で削除されたときにトリガーされます。 詳しくは、「[環境のシークレット](/actions/reference/environments#environment-secrets)」をご覧ください。
| `update_actions_secret` | 環境内のシークレットが更新されたときにトリガーされます。 詳しくは、「[環境のシークレット](/actions/reference/environments#environment-secrets)」をご覧ください。
{% endif %}

{% ifversion ghae %}
### `external_group` カテゴリのアクション

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### `external_identity` カテゴリのアクション

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### `git` カテゴリのアクション

{% note %}

**注:** 監査ログの Git イベントにアクセスするには、Audit log REST API を使用する必要があります。 Audit log REST API は、{% data variables.product.prodname_ghe_cloud %} のユーザのみが利用できます。 詳細については、「[組織](/rest/reference/orgs#get-the-audit-log-for-an-organization)」を参照してください。

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| アクション  | 説明
|---------|----------------------------
| `clone` | リポジトリがクローンされるとトリガーされます。
| `fetch` | リポジトリから変更がフェッチされるとトリガーされます。
| `push`  | リポジトリに変更がプッシュされるとトリガーされます。

{% endif %}

### `hook` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | 組織が所有するリポジトリに [新しいフックが追加された](/articles/creating-webhooks)ときにトリガーされます。
| `config_changed` | 既存のフックに変更された設定がある場合にトリガーされます。
| `destroy` | 既存のフックがリポジトリから削除されたときにトリガーされます。
| `events_changed` | フックでのイベントが変更された場合にトリガーされます。

### `integration_installation` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `contact_email_changed` | 統合の連絡先メール アドレスが変更されました。
| `create` | 統合がインストールされました。
| `destroy` | 統合がアンインストールされました。
| `repositories_added` | リポジトリが統合に追加されました。
| `repositories_removed` | リポジトリが統合から削除されました。
{%- ifversion fpt or ghec %} | `suspend` | 統合が一時停止されました。
| `unsuspend` | 統合が停止解除されました。
{%- endif %} | `version_updated` | 統合のアクセス許可が更新されました。

### `integration_installation_request` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | Organization のメンバーが、Organization 内で使用するために、Organization のオーナーにインテグレーションをインストールすることを要求するときにトリガーされます。
| `close` | Organization 内で使用するためにインテグレーションをインストールする要求が、Organization のオーナーにより承認または拒否されるか、あるいは要求を公開した Organization のメンバーによりキャンセルされるときにトリガーされます。

{% ifversion ghec or ghae %}
### `ip_allow_list` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `enable` | OrganizationでIP許可リストが有効化されたときにトリガーされます。
| `disable` | OrganizationでIP許可リストが無効化されたときにトリガーされます。
| `enable_for_installed_apps` | インストールされた{% data variables.product.prodname_github_apps %}でIP許可リストが有効化されたときにトリガーされます。
| `disable_for_installed_apps` | インストールされた{% data variables.product.prodname_github_apps %}でIP許可リストが無効化されたときにトリガーされます。

### `ip_allow_list_entry` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | IP許可リストにIPアドレスが追加されたときにトリガーされます。
| `update` | IPアドレスもしくはその説明が変更されたときにトリガーされます。
| `destroy` | IP許可リストからIPアドレスが削除されたときにトリガーされます。
{% endif %}

### `issue` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `destroy`        | リポジトリで管理者権限を所有する Organization のオーナーまたは誰かが、Organization が所有するリポジトリから問題を削除するときにトリガーされます。

{% ifversion fpt or ghec %}

### `marketplace_agreement_signature` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | {% data variables.product.prodname_marketplace %} Developer Agreement に署名するときにトリガーされます。

### `marketplace_listing` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `approve` | 一覧表を {% data variables.product.prodname_marketplace %}に掲載することが承認されるときにトリガーされます。
| `create` | {% data variables.product.prodname_marketplace %} で自分のアプリケーションの一覧表を作成するときにトリガーされます。
| `delist` | 一覧表が {% data variables.product.prodname_marketplace %} から削除されるときにトリガーされます。
| `redraft` | 一覧表がドラフト状態に戻されるときにトリガーされます。
| `reject` | 一覧表が {% data variables.product.prodname_marketplace %} に掲載することを認められないときにトリガーされます。

{% endif %}

{% ifversion fpt or ghes or ghec %}

### `members_can_create_pages` カテゴリのアクション

詳細については、「[Organization の {% data variables.product.prodname_pages %} サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。

| アクション | 説明 |
| :- | :- |
| `enable` | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を有効化するときトリガーされます。 |
| `disable` | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を無効化するときトリガーされます。 |

{% endif %}

### `oauth_application` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | 新たな {% data variables.product.prodname_oauth_app %} が作成されるときにトリガーされます。
| `destroy` | 既存の {% data variables.product.prodname_oauth_app %} が削除されるときにトリガーされます。
| `reset_secret` | {% data variables.product.prodname_oauth_app %} のクライアント シークレットがリセットされるときにトリガーされます。
| `revoke_tokens` | {% data variables.product.prodname_oauth_app %} のユーザートークンが取り消されるときにトリガーされます。
| `transfer` |  既存の {% data variables.product.prodname_oauth_app %} が新しい Organization に移譲されるときにトリガーされます。

### `org` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `add_member` | ユーザがOrganizationの参加したときにトリガーされます。
| `advanced_security_policy_selected_member_disabled` | Enterprise のオーナーが、Organization が所有するリポジトリで {% data variables.product.prodname_GH_advanced_security %} 機能を有効化できないようにするとトリガーされます。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Enterprise のオーナーが、Organization が所有するリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} 機能を有効化できるようにするとトリガーされます。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | 組織の管理者が[組織の監査ログのエクスポートを作成](#exporting-the-audit-log)するときにトリガーされます。 エクスポートにクエリが含まれていた場合、ログには使用されたクエリとそのクエリに一致する Audit log エントリの数が一覧表示されます。
| `block_user` | 組織所有者により、[ユーザーが組織のリポジトリにアクセスする操作がブロックされた](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)ときにトリガーされます。
| `cancel_invitation` | Organization の招待が取り消されている場合にトリガーされます。 {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | Organization に対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳細については、「[Organization の暗号化されたシークレットの作成](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)」を参照してください。{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | 所有者が組織の [{% data variables.product.prodname_oauth_app %} アクセス制限を無効](/articles/disabling-oauth-app-access-restrictions-for-your-organization)にしたときにトリガーされます。{% ifversion ghec %}
| `disable_saml` | Organizationの管理者がOrganizationでSAMLシングルサインオンを無効化したときにトリガーされます。{% endif %}{% endif %}
| `disable_member_team_creation_permission` | Organization のオーナーがオーナーに Team 作成を制限するときにトリガーされます。 詳細については、「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 |{% ifversion not ghae %}
| `disable_two_factor_requirement` | Organization のすべてのメンバー {% ifversion fpt or ghec %}、支払いマネージャー、{% endif %} および外部のコラボレーターに対してオーナーが 2 要素認証を無効化するときにトリガーされます。{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | 所有者が組織の [{% data variables.product.prodname_oauth_app %} アクセス制限を有効](/articles/enabling-oauth-app-access-restrictions-for-your-organization)にしたときにトリガーされます。{% ifversion ghec %}
| `enable_saml` | 組織の管理者が組織で [SAML シングル サインオンを有効](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)にしたときにトリガーされます。{% endif %}{% endif %}
| `enable_member_team_creation_permission` | メンバーが Team を作成するのを Organizationのオーナーが許可するときにトリガーされます。 詳細については、「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 |{% ifversion not ghae %}
| `enable_two_factor_requirement` | Organization のすべてのメンバー{% ifversion fpt or ghec %}、支払いマネージャー、{% endif %}および外部のコラボレータに対してオーナーが 2 要素認証を必須にしたときにトリガーされます。{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | [新しいユーザーが組織に参加するように招待された](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)ときにトリガーされます。
| `oauth_app_access_approved` | 所有者が、[組織に対して {% data variables.product.prodname_oauth_app %} へのアクセス権を付与](/articles/approving-oauth-apps-for-your-organization/)したときにトリガーされます。
| `oauth_app_access_denied` | 所有者が、組織に対して[以前に承認した {% data variables.product.prodname_oauth_app %} のアクセス権を無効にした](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)ときにトリガーされます。
| `oauth_app_access_requested` | オーナーが組織への {% data variables.product.prodname_oauth_app %} アクセスを許可することを組織のメンバーが要求するときにトリガーされます。{% endif %}
{%- ifversion ghec %} | `org.transfer` | Organization が Enterprise アカウント間で移転されるときにトリガーされます。 詳しくは、「[Enterprise アカウント間での Organization の移転](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)」をご覧ください。
{%- endif %} | `register_self_hosted_runner` | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳細については、「[Organization へのセルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)」を参照してください。
| `remove_actions_secret` | {% data variables.product.prodname_actions %} シークレットが削除されるときにトリガーされます。{% ifversion fpt or ghec %} | `remove_billing_manager` | [所有者が Organization から支払いマネージャーを削除したとき](/articles/removing-a-billing-manager-from-your-organization/)、または、[Organization で 2 要素認証が要求され、](/articles/requiring-two-factor-authentication-in-your-organization)支払いマネージャーが 2FA を使用しないか、または 2FA を無効にしたときにトリガーされます。 |{% endif %} | `remove_member` | [所有者が Organization からメンバーを削除するとき、](/articles/removing-a-member-from-your-organization/){% ifversion not ghae %} または、[Organization で 2 要素認証が要求され、](/articles/requiring-two-factor-authentication-in-your-organization)Organization メンバーが 2FA{% endif %} を使用しないか、または 2FA を無効にしたときにトリガーされます。 また、[Organization メンバーが自身を Organization から削除したとき](/articles/removing-yourself-from-an-organization/)にもトリガーされます。| | `remove_outside_collaborator` | 所有者が Organization から外部コラボレーターを削除するとき、{% ifversion not ghae %}または、[Organization で 2 要素認証が要求され、](/articles/requiring-two-factor-authentication-in-your-organization)外部コラボレーターが 2FA を使用しないか、または 2FA を無効にしたときにトリガーされます{% endif %}. | | `remove_self_hosted_runner` | セルフホステッド ランナーが削除されるときにトリガーされます。 詳細については、「[Organization からのランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)」を参照してください。 {% ifversion ghec %} | `revoke_external_identity` | Organization の所有者がメンバーのリンクされた ID を取り消すときにトリガーされます。 詳細については、「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。
| `revoke_sso_session` | Organization の所有者がメンバーの SAML セッションを取り消すときにトリガーされます。 詳細については、「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。 {% endif %} | `runner_group_created` | セルフホステッド ランナー グループが作成されるときにトリガーされます。 詳細については、[組織のセルフホスト ランナー グループの作成](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)に関する記事を参照してください。
| `runner_group_removed` | セルフホステッド ランナー グループが削除されるときにトリガーされます。 詳細については、「[セルフホスト ランナー グループを削除する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。
| `runner_group_updated` | セルフホステッド ランナー グループの設定が変更されるときにトリガーされます。 詳細については、「[セルフホスト ランナー グループのアクセス ポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
| `runner_group_runners_added` | セルフホステッド ランナーがグループに追加されるときにトリガーされます。 詳細については、「[セルフホスト ランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。
| `runner_group_runner_removed` |  セルフホステッド ランナーをグループから削除するのに REST API が使われたときにトリガーされます。 詳細については、「[組織のグループからセルフホスト ランナーを削除する](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)」を参照してください。
| `runner_group_runners_updated`|  ランナーグループのメンバーリストが更新されるときにトリガーされます。 詳細については、「[組織のグループにセルフホストランナーを設定する](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。
{%- ifversion code-security-audit-log-events %} | `secret_scanning_push_protection_custom_message_disabled` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージを、Organization の所有者または管理者が無効にしたときにトリガーされます。 詳細については、「[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)」(シークレット スキャンを使用したプッシュの保護) を参照してください。
| `secret_scanning_push_protection_custom_message_enabled` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージを、Organization の所有者または管理者が有効にしたときにトリガーされます。 詳細については、「[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)」(シークレット スキャンを使用したプッシュの保護) を参照してください。
| `secret_scanning_push_protection_custom_message_updated` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージを、Organization の所有者または管理者が更新したときにトリガーされます。 詳細については、「[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)」(シークレット スキャンを使用したプッシュの保護) を参照してください。
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `secret_scanning_push_protection_disable ` | Organization の所有者または Organization への管理者アクセス権を持つユーザーがシークレット スキャンのプッシュ保護を無効にしたときにトリガーされます。 詳細については、「[Protecting pushes with secret scanning (シークレット スキャンによるプッシュの保護)](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。
| `secret_scanning_push_protection_enable ` | Organization の所有者または Organization への管理者アクセス権を持つユーザーが {% data variables.product.prodname_secret_scanning %} のプッシュ保護を有効にしたときにトリガーされます。{%- endif %} | `self_hosted_runner_online` | ランナー アプリケーションの起動時にトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `self_hosted_runner_offline` | ランナー アプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳しくは、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。{% ifversion fpt or ghes or ghec %} | `self_hosted_runner_updated` | ランナー アプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳しくは、「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」を参照してください。{% endif %}{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | パブリック フォークからワークフローの承認を要求するための設定が Organization で変更されたときにトリガーされます。 詳しくは、「[パブリック フォークからワークフローの承認を要求する](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)」を参照してください。{% endif %} | `set_actions_retention_limit` | {% data variables.product.prodname_actions %} の成果物とログの保持期間が変更されたときにトリガーされます。 詳細については、「[エンタープライズで {% data variables.product.prodname_actions %} のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)」を参照してください。{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | プライベート リポジトリ フォーク上のワークフローのポリシーが変更されたときにトリガーされます。 詳しくは、「[プライベート リポジトリ フォークのワークフローを有効にする](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)」を参照してください。{% endif %}{% ifversion fpt or ghec %} | `unblock_user` | Organization の所有者が [Organization からユーザーのブロックを解除](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)したときにトリガーされます。{% endif %}{% ifversion fpt or ghes or ghec %} | `update_actions_secret` |{% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。{% endif %} | `update_new_repository_default_branch_setting` | 所有者が Organization 内の新しいリポジトリの既定のブランチ名を変更したときにトリガーされます。 詳細については、「[Managing the default branch name for repositories in your organization (組織内のリポジトリについて既定のブランチ名を管理する)](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)」を参照してください。
| `update_default_repository_permission` | 所有者が Organization のメンバーの既定リポジトリの権限レベルを変更したときにトリガーされます。
| `update_member` | 所有者がユーザーのロールを所有者からメンバーに、またはメンバーから所有者に変更したときにトリガーされます。
| `update_member_repository_creation_permission` | 所有者が Organization メンバーのリポジトリ作成アクセス許可を変更したときにトリガーされます。{% ifversion fpt or ghec %} | `update_saml_provider_settings` | Organization の SAML プロバイダー設定が更新されたときにトリガーされます。
| `update_terms_of_service` | Organization が標準利用規約と企業向け利用規約を切り替えたときにトリガーされます。 詳細については、「[企業利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。{% endif %}

{% ifversion ghec %}
### `org_credential_authorization` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `grant` | メンバーが、[SAML シングル サインオンに使う資格情報を承認した](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)場合にトリガーされます。
| `deauthorized` | メンバーが、[SAML シングル サインオンに使う資格情報の承認を取り消した](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)場合にトリガーされます。
| `revoke` | 所有者が[承認された資格情報を取り消した](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)場合にトリガーされます。

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `org_secret_scanning_custom_pattern` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | 組織内のシークレット スキャン用のカスタム パターンが発行された場合にトリガーされます。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)」を参照してください。
| `update` | カスタム パターンの変更が、組織内のシークレット スキャン用に保存された場合にトリガーされます。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)」を参照してください。
| `delete` | 組織内のシークレット スキャンからカスタム パターンが削除された場合にトリガーされます。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)」を参照してください。

{% endif %}
### `organization_default_label` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | デフォルトラベルが作成されるときにトリガーされます。
| `update` | デフォルトラベルが編集されるときにトリガーされます。
| `destroy` | デフォルトラベルが削除されるときにトリガーされます。

### `packages` カテゴリのアクション

| アクション | 説明 |
|--------|-------------|
| `package_version_published` | パッケージのバージョンが公開されるとトリガーされます。 |
| `package_version_deleted` | 特定のパッケージのバージョンが削除されるとトリガーされます。 詳しくは、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。
| `package_deleted` | パッケージ全体が削除されるとトリガーされます。 詳しくは、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。
| `package_version_restored` | 特定のパッケージのバージョンが削除されるとトリガーされます。 詳しくは、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。
| `package_restored` | パッケージ全体がリストアされるとトリガーされます。 詳しくは、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。

{% ifversion fpt or ghec %}

### `payment_method` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` |  新しいクレジット カードや PayPal アカウントなど、新たな支払い方法が追加されるときにトリガーされます。
| `update` | 既存の支払い方法が更新されるときにトリガーされます。

{% endif %}

{% ifversion pat-v2 %}

### `personal_access_token` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `access_granted` | {% data variables.product.pat_v2 %} に Organization リソースへのアクセス権が付与されたときにトリガーされます。 詳しくは、「[Organization での{% data variables.product.pat_generic %}の要求の管理](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)」を参照してください。
| `access_revoked` | {% data variables.product.pat_v2 %}による Organization リソースへのアクセスが取り消されたときにトリガーされます。 このトークンは引き続きパブリック Organization リソースを読み取ることができます。 詳しくは、「[Organization 内の{% data variables.product.pat_generic %}の確認と取り消し](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)」を参照してください。
| `request_cancelled` | Organization のメンバーが{% data variables.product.pat_v2 %}の要求を取り消して Organization のリソースにアクセスしたときにトリガーされます。
| `request_created` | Organization のメンバーが Organization リソースにアクセスするために{% data variables.product.pat_v2 %}を作成し、{% data variables.product.pat_v2 %}が Organization リソースにアクセスする前に Organization が承認を必要とするときにトリガーされます。 詳しくは、「[Organization での{% data variables.product.pat_generic %}の要求の管理](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)」を参照してください。
| `request_denied` | Organization リソースにアクセスするための{% data variables.product.pat_v2 %}の要求が拒否されたときにトリガーされます。 詳しくは、「[Organization での{% data variables.product.pat_generic %}の要求の管理](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)」を参照してください。

{% endif %}

### `profile_picture` カテゴリのアクション
| アクション | 説明
|------------------|-------------------
| update | Organization のプロファイル写真を設定または更新するときにトリガーされます。

### `project` カテゴリのアクション

| アクション | 説明
|--------------------|---------------------
| `create` | プロジェクト ボードが作成されるときにトリガーされます。
| `link` | リポジトリがプロジェクト ボードにリンクされるときにトリガーされます。
| `rename` | プロジェクトボードの名前が変更されるときにトリガーされます。
| `update` | プロジェクト ボードが更新されるときにトリガーされます。
| `delete` | プロジェクトボードが削除されるときにトリガーされます。
| `unlink` | リポジトリがプロジェクトボードからリンク解除されるときにトリガーされます。
| `update_org_permission` | Organization のすべてのメンバーに対して、基本レベルの権限が変更または削除されるときにトリガーされます。 |
| `update_team_permission` | Team のプロジェクト ボードの権限レベルが変更されるとき、または Team がプロジェクト ボードに追加または削除されるときにトリガーされます。 |
| `update_user_permission` | Organization のメンバーまたは外部コラボレーターがプロジェクト ボードに追加または削除されるとき、または彼らの権限レベルが変更されている場合にトリガーされます。|

### `protected_branch` カテゴリのアクション

| アクション | 説明
|--------------------|---------------------
| `create ` | ブランチでブランチの保護が有効になるときにトリガーされます。
| `destroy` | ブランチでブランチの保護が無効になるときにトリガーされます。
| `update_admin_enforced ` | リポジトリの管理者に対してブランチの保護が実施されるときにトリガーされます。
| `update_require_code_owner_review ` | 必須コードオーナーレビューの実施がブランチで更新されるときにトリガーされます。
| `dismiss_stale_reviews ` | 古い Pull Request の却下の実施がブランチで更新されるときにトリガーされます。
| `update_signature_requirement_enforcement_level ` | 必須コミット署名の実施がブランチで更新されるときにトリガーされます。
| `update_pull_request_reviews_enforcement_level ` | 必須 Pull Request レビューの実施がブランチで更新されるときにトリガーされます。 `0`(非アクティブ)、`1`(非管理者)、`2`(すべてのユーザー) のいずれかです。
| `update_required_status_checks_enforcement_level ` | 必須ステータスチェックの実施がブランチで更新されるときにトリガーされます。
| `update_strict_required_status_checks_policy` | マージする前に最新にする必要があるブランチの要件が変更されるときにトリガーされます。
| `rejected_ref_update ` | ブランチ更新の試行が拒否されるときにトリガーされます。
| `policy_override ` | ブランチ保護の要件がリポジトリの管理者によりオーバーライドされるときにトリガーされます。
| `update_allow_force_pushes_enforcement_level ` | 保護されたブランチについて、フォースプッシュが有効化または無効化されるときにトリガーされます。
| `update_allow_deletions_enforcement_level ` | 保護されたブランチについて、ブランチ削除が有効化または無効化されるときにトリガーされます。
| `update_linear_history_requirement_enforcement_level ` | 保護されたブランチについて、必須の直線状のコミット履歴が有効化または無効化されるときにトリガーされます。

### `pull_request` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | Pull Requestが作成されたときにトリガーされます。
| `close` | Pull Requestがマージされずにクローズされたときにトリガーされます。
| `reopen` | 以前クローズされたPull Requestが再オープンされたときにトリガーされます。
| `merge` | Pull Requestがマージされたときにトリガーされます。
| `indirect_merge` | Pull Requestのコミットがターゲットブランチにマージされたことで、そのPull Requestがマージされたと考えられるときにトリガーされます。
| `ready_for_review` | Pull Requestがレビューの準備ができたとしてマークされたときにトリガーされます。
| `converted_to_draft` | Pull Requestがドラフトに変換されたときにトリガーされます。
| `create_review_request` | レビューが要求されたときにトリガーされます。
| `remove_review_request` | レビューの要求が削除されたときにトリガーされます。

### `pull_request_review` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `submit` | レビューがサブミットされたときにトリガーされます。
| `dismiss` | レビューが却下されたときにトリガーされます。
| `delete` | レビューが削除されたときにトリガーされます。

### `pull_request_review_comment` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | レビューコメントが追加されたときにトリガーされます。
| `update` | レビューコメントが変更されたときにトリガーされます。
| `delete` | レビューコメントが削除されたときにトリガーされます。

### `repo` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `access` | ユーザーが組織内のリポジトリの[可視性を変更した](/github/administering-a-repository/setting-repository-visibility)ときにトリガーされます。
| `actions_enabled` | リポジトリに対して {% data variables.product.prodname_actions %} が有効化されたときにトリガーされます。 UI を使用して表示できます。 REST API を使用して Audit log にアクセスする場合、このイベントは対象外です。 詳細については、[REST API の使用](#using-the-rest-api)に関するページをご覧ください。
| `add_member` | ユーザーが[リポジトリへのコラボレーション アクセス権を持つ招待を](/articles/inviting-collaborators-to-a-personal-repository)受け入れたときにトリガーされます。
| `add_topic` | リポジトリ所有者がリポジトリに[トピックを追加](/articles/classifying-your-repository-with-topics)したときにトリガーされます。
| `advanced_security_disabled` | リポジトリ管理者がリポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能を無効にするとトリガーされます。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
| `advanced_security_enabled` | リポジトリ管理者がリポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能を有効にするとトリガーされます。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
| `archived` | リポジトリ管理者が[リポジトリをアーカイブ](/articles/about-archiving-repositories)するときにトリガーされます。{% ifversion ghes %}
| `config.disable_anonymous_git_access` | パブリック リポジトリで[匿名の Git 読み取りアクセスが無効になった](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。
| `config.enable_anonymous_git_access` | パブリック リポジトリで[匿名の Git 読み取りアクセスが有効になった](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。
| `config.lock_anonymous_git_access` | リポジトリの[匿名の Git 読み取りアクセス設定がロックされる](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。
| `config.unlock_anonymous_git_access` | リポジトリの[匿名の Git 読み取りアクセス設定がロック解除される](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。{% endif %}
| `create` | [新しいリポジトリが作成される](/articles/creating-a-new-repository)ときにトリガーされます。{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |リポジトリに対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳細については、「[リポジトリの暗号化されたシークレットの作成](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。{% endif %}
| `destroy` | [リポジトリが削除される](/articles/deleting-a-repository)ときにトリガーされます。{% ifversion fpt or ghec %}
| `disable` | リポジトリが無効になっているときにトリガーされます ([資金が不足している](/articles/unlocking-a-locked-account)場合など)。{% endif %}
| `enable` | リポジトリが再び有効になるときにトリガーされます。{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | {% data variables.product.prodname_actions %} シークレットが削除されたときにトリガーされます。{% endif %}
| `remove_member` | ユーザーが[コラボレーターとしてリポジトリから削除](/articles/removing-a-collaborator-from-a-personal-repository)されたときにトリガーされます。
| `register_self_hosted_runner` | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳細については、「[リポジトリへのセルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)」を参照してください。
| `remove_self_hosted_runner` | セルフホストランナーが削除されたときにトリガーされます。 詳細については、「[リポジトリからのランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)」を参照してください。
| `remove_topic` | リポジトリの管理者がリポジトリからトピックを削除するときにトリガーされます。
| `rename` | [リポジトリの名前が変更される](/articles/renaming-a-repository)ときにトリガーされます。
| `self_hosted_runner_online` | ランナーアプリケーションが開始されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホストランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `self_hosted_runner_offline` | ランナーアプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳しくは、「[セルフホストランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」をご覧ください。{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳細については、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」を参照してください。{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | パブリックフォークからのワークフローが承認を必要とする設定が変更されたときにトリガーされます。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)」を参照してください。{% endif %}
| `set_actions_retention_limit` | {% data variables.product.prodname_actions %}の成果物とログの保持期間が変更されたときにトリガーされます。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)」を参照してください。{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | プライベートのリポジトリフォークのワークフローのポリシーが変更されたときにトリガーされます。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)」を参照してください。{% endif %}
| `staff_unlock` | エンタープライズ所有者または {% data variables.contact.github_support %} (リポジトリ管理者からのアクセス許可を持つ) が一時的にリポジトリのロックを解除したときにトリガーされます。 リポジトリの可視性は変更されません。
| `transfer` | [リポジトリが移譲される](/articles/how-to-transfer-a-repository)ときにトリガーされます。
| `transfer_start` | リポジトリの移譲が行われようとしているときにトリガーされます。
| `unarchived` | リポジトリ管理者がリポジトリをアーカイブ解除するとトリガーされます。{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | {% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。{% endif %}

{% ifversion fpt or ghec %}

### `repository_advisory` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `close` | ユーザがセキュリティアドバイザリをクローズするとトリガーされます。 詳細については、「[{% data variables.product.prodname_dotcom %} セキュリティ アドバイザリの概要](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。
| `cve_request` | ユーザがセキュリティアドバイザリのドラフトのために {% data variables.product.prodname_dotcom %} に CVE (Common Vulnerabilities and Exposures) 番号をリクエストするとトリガーされます。
| `github_broadcast` | {% data variables.product.prodname_dotcom %} が {% data variables.product.prodname_advisory_database %} でセキュリティアドバイザリを公開するとトリガーされます。
| `github_withdraw` | {% data variables.product.prodname_dotcom %} が誤って公開されたセキュリティアドバイザリを撤回するとトリガーされます。
| `open` | ユーザがドラフトのセキュリティアドバイザリをオープンするとトリガーされます。
| `publish` | ユーザがセキュリティアドバイザリを公開するとトリガーされます。
| `reopen` | ユーザがドラフトのセキュリティアドバイザリとして再オープンするとトリガーされます。
| `update` | ユーザがドラフトまたは公開済みのセキュリティアドバイザリを編集するとトリガーされます。

### `repository_content_analysis` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `enable` | 組織の所有者またはリポジトリへの管理者アクセス権を持つユーザーが、[プライベート リポジトリのデータ使用設定を有効にした](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)場合にトリガーされます。
| `disable` | 組織の所有者またはリポジトリへの管理者アクセス権を持つユーザーが、[プライベート リポジトリのデータ使用設定を無効にした](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)場合にトリガーされます。

{% endif %}{% ifversion fpt or ghec %}

### `repository_dependency_graph` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザーが {% ifversion fpt or ghec %} プライベート {% endif %} リポジトリの依存関係グラフを無効にするとトリガーされます。 詳細については、「[依存関係グラフの概要](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
| `enable` | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザーが {% ifversion fpt or ghec %} プライベート {% endif %} リポジトリの依存関係グラフを有効にするとトリガーされます。

{% endif %}{% ifversion ghec or ghes or ghae %}
### `repository_secret_scanning` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | リポジトリ所有者またはリポジトリへの管理者アクセスを持つユーザーがプライベート リポジトリのシークレット スキャンを無効にするとトリガーされます。 詳細については、「[シークレット スキャンについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。
| `enable` | リポジトリ所有者またはリポジトリへの管理者アクセスを持つユーザーがプライベート リポジトリのシークレット スキャンを有効にするとトリガーされます。

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_custom_pattern` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | リポジトリ内のシークレット スキャン用のカスタム パターンが発行されたときにトリガーされます。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)」を参照してください。
| `update` | カスタム パターンの変更が、リポジトリ内のシークレット スキャン用に保存されたときにトリガーされます。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)」を参照してください。
| `delete` | リポジトリ内のシークレット スキャンからカスタム パターンが削除されたときにトリガーされます。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)」を参照してください。

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_push_protection` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | リポジトリ所有者またはリポジトリへの管理者アクセスを持つユーザーがプライベート リポジトリのシークレット スキャンを無効にするとトリガーされます。 詳細については、「[シークレット スキャンによるプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。
| `enable` | リポジトリ所有者またはリポジトリへの管理者アクセスを持つユーザーがプライベート リポジトリのシークレット スキャンを有効にするとトリガーされます。

{% endif %}
### `repository_vulnerability_alert` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | 脆弱性のある依存関係を使っているリポジトリに対して{% data variables.product.product_name %}が{% data variables.product.prodname_dependabot %}アラートを生成したときにトリガーされます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
| `dismiss` | 脆弱性のある依存関係に関する{% data variables.product.prodname_dependabot %}アラートを、Organizationのオーナーあるいはリポジトリへの管理アクセス権を持つユーザが却下したときにトリガーされます。
| `resolve` | リポジトリへの書き込みアクセスを持つユーザが変更をプッシュして、プロジェクトの依存関係の脆弱性を更新および解決するとトリガーされます。
{% ifversion fpt or ghec %}
### `repository_vulnerability_alerts` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `authorized_users_teams` | Organization の所有者またはリポジトリへの管理者権限を持つユーザーが、リポジトリの {% data variables.product.prodname_dependabot_alerts %} を受け取ることを許可されたユーザーまたは Team のリストを更新するとトリガーされます。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。
| `disable` | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが {% data variables.product.prodname_dependabot_alerts %} を無効にするとトリガーされます。
| `enable` | リポジトリのオーナーまたはリポジトリへの管理者アクセスを持つユーザが {% data variables.product.prodname_dependabot_alerts %} を有効にするとトリガーされます。

{% endif %}{% ifversion custom-repository-roles %}
### `role` カテゴリのアクション
| アクション | 説明
|------------------|-------------------
|`create` | Organizationのオーナーがリポジトリの新しいカスタムロールを作成したときにトリガーされます。 詳細については、「[Organization のカスタム リポジトリ ロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。
|`destroy` | Organization の所有者がカスタム リポジトリ ロールを削除するとトリガーされます。 詳細については、「[Organization のカスタム リポジトリ ロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。
|`update` | Organizationのオーナーが既存のカスタムリポジトリロールを編集したときにトリガーされます。 詳細については、「[Organization のカスタム リポジトリ ロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。

{% endif %} {% ifversion ghec or ghes or ghae %}
### `secret_scanning` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | Organizationのオーナーが既存の{% ifversion ghec %}プライベートもしくはインターナル{% endif %}リポジトリのSecret scanningを無効化したときにトリガーされます。 詳細については、「[シークレット スキャンについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。
| `enable` | Organizationのオーナーがすべての既存の{% ifversion ghec %}プライベートもしくはインターナル{% endif %}リポジトリでSecret scanningを有効化したときにトリガーされます。
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### `secret_scanning_alert` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `create` | {% data variables.product.prodname_dotcom %} が公開されたシークレットを検出して {% data variables.product.prodname_secret_scanning %} アラートを作成するとトリガーされます。 詳細については、「[{% data variables.product.prodname_secret_scanning %}からのアラートの管理](/code-security/secret-scanning/managing-alerts-from-secret-scanning)」を参照してください。
| `reopen` | ユーザーが {% data variables.product.prodname_secret_scanning %} アラートをもう一度開くとトリガーされます。
| `resolve` | ユーザーが {% data variables.product.prodname_secret_scanning %} アラートを解決するとトリガーされます。
{% endif %}

{% ifversion ghec or ghes or ghae %}
### `secret_scanning_new_repos` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `disable` | Organizationのオーナーがすべての新しい{% ifversion ghec %}プライベートもしくはインターナル{% endif %}リポジトリのSecret scanningを無効化したときにトリガーされます。 詳細については、「[シークレット スキャンについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。
| `enable` | Organizationのオーナーがすべての新しい{% ifversion ghec %}プライベートもしくはインターナル{% endif %}リポジトリのSecret scanningを有効化したときにトリガーされます。
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### `secret_scanning_push_protection` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `bypass` | ユーザーがシークレット スキャンによって検出されたシークレットのプッシュ保護をバイパスするとトリガーされます。 詳しくは、「[シークレットのプッシュ保護をバイパスする](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)」をご覧ください。
{% endif %}

{% ifversion fpt or ghec %}
### `sponsors` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `custom_amount_settings_change` | カスタムの額を有効または無効にするとき、あるいは推奨されるカスタムの額を変更するときにトリガーされます (「[スポンサーシップ層を管理する](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)」を参照)。
| `repo_funding_links_file_action` | リポジトリ内の FUNDING ファイルを変更するときにトリガーされます (「[リポジトリにスポンサー ボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)。
| `sponsor_sponsorship_cancel` | スポンサーシップをキャンセルするときにトリガーされます (「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)。
| `sponsor_sponsorship_create` | アカウントをスポンサーするときにトリガーされます (「[オープンソース共同作成者をスポンサーする](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照)。
| `sponsor_sponsorship_payment_complete` | アカウントをスポンサーして支払いが処理された後にトリガーされます (「[オープンソース共同作成者をスポンサーする](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照)。
| `sponsor_sponsorship_preference_change` | スポンサー付きアカウントからメールによる更新を受け取るかどうかを変更するときにトリガーされます (「[スポンサーシップを管理する](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)」を参照)。
| `sponsor_sponsorship_tier_change` | スポンサーシップをアップグレードまたはダウングレードするときにトリガーされます (「[スポンサーシップをアップグレードする](/articles/upgrading-a-sponsorship)」および「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照)。
| `sponsored_developer_approve` | {% data variables.product.prodname_sponsors %} アカウントが承認されるときにトリガーされます ([組織に対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)を参照)。
| `sponsored_developer_create` | {% data variables.product.prodname_sponsors %} アカウントが作成されるときにトリガーされます ([組織に対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)を参照)。
| `sponsored_developer_disable` | {% data variables.product.prodname_sponsors %} アカウントが無効になるとトリガーされます
| `sponsored_developer_redraft` | {% data variables.product.prodname_sponsors %} アカウントが承認済みの状態からドラフト状態に戻るとトリガーされます
| `sponsored_developer_profile_update` | スポンサー付き組織のプロフィールを編集するときにトリガーされます (「[{% data variables.product.prodname_sponsors %} のプロフィール詳細を編集する](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)」を参照)。
| `sponsored_developer_request_approval` | 承認のために {% data variables.product.prodname_sponsors %} のアプリケーションを送信するときにトリガーされます ([組織に対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)を参照)。
| `sponsored_developer_tier_description_update` | スポンサーシップ層の説明を変更するときにトリガーされます (「[スポンサーシップ層を管理する](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)」を参照)。
| `sponsored_developer_update_newsletter_send` | メールによる更新をスポンサーに送信するときにトリガーされます (「[スポンサーに連絡する](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)」を参照)。
| `waitlist_invite_sponsored_developer` | 順番待ちリストから {% data variables.product.prodname_sponsors %} への参加の招待を受けたときにトリガーされます ([組織に対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)を参照)。
| `waitlist_join` | スポンサー付き組織になるために順番待ちリストに参加するときにトリガーされます ([ユーザー アカウントに対する {% data variables.product.prodname_sponsors %} の設定に関するページ](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)を参照)。
{% endif %}

### `team` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `add_member` | 組織のメンバーが[チームに追加](/articles/adding-organization-members-to-a-team)されたときにトリガーされます。
| `add_repository` | リポジトリの管理が Team に任せられるときにトリガーされます。
| `change_parent_team` | 子チームが作成されたとき、または[子チームの親が変更された](/articles/moving-a-team-in-your-organization-s-hierarchy)ときにトリガーされます。
| `change_privacy` | Team のプライバシー レベルが変更されるときにトリガーされます。
| `create` | 新たな Team が作成されるときにトリガーされます。
| `demote_maintainer` | ユーザがチームメンテナから Team メンバーに降格されるとトリガーされます。 詳細については、「[Team メンバーへのチーム メンテナ ロールの割り当て](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)」を参照してください。
| `destroy` | Team が Organization から削除されるときにトリガーされます。
| `team.promote_maintainer` | ユーザがTeamメンバーからチームメンテナに昇格されるとトリガーされます。 詳細については、「[Team メンバーへのチーム メンテナ ロールの割り当て](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)」を参照してください。
| `remove_member` | 組織のメンバーが[チームから削除](/articles/removing-organization-members-from-a-team)されたときにトリガーされます。
| `remove_repository` | リポジトリが Team の管理下でなくなるときにトリガーされます。

### `team_discussions` カテゴリのアクション

| アクション | 説明
|---|---|
| `disable` | Organization のオーナーが Organization の Team ディスカッションを無効にするときにトリガーされます。 詳細については、「[Organization の Team ディスカッションを無効にする](/articles/disabling-team-discussions-for-your-organization)」を参照してください。
| `enable` | Organization のオーナーが Organization の Team ディスカッションを有効にするときにトリガーされます。

### `workflows` カテゴリのアクション

{% data reusables.actions.actions-audit-events-workflow %}
## 参考資料

- 「[Organization を安全に保つ](/articles/keeping-your-organization-secure)」{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {%- ifversion fpt or ghec %}
- [Organization のメンバー情報のエクスポート](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization){% endif %} {%- endif %}
