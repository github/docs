---
title: エンタープライズの監査ログ イベント
intro: Enterprise で記録される監査ログ イベントについて説明します。
shortTitle: Audit log events
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can interact with the audit log.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
  - /admin/user-management/monitoring-activity-in-your-enterprise/audited-actions
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 5a936791aff8706cd04773bb0f7428cd11f29329
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183949'
---
{% ifversion ghec%}
## Enterprise の監査ログ イベントについて

Enterprise の監査ログに表示されるイベントのスコープは、Enterprise で {% data variables.product.prodname_emus %} を使っているかどうかによって異なります。 {% data variables.product.prodname_emus %} の詳しい情報については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)」を参照してください。

- Enterprise で {% data variables.product.prodname_emus %} を使わない場合、監査ログには、Enterprise アカウントと Enterprise アカウント内の Organaization に関連するイベントのみが含まれます。一覧をこの記事で示します。
- エンタープライズで {% data variables.product.prodname_emus %} を使う場合、監査ログには {% data variables.enterprise.prodname_managed_users %} のユーザー イベントも含まれます。たとえば、ユーザーが毎回 {% data variables.product.product_name %} にログインするときや、ユーザー アカウント内で実行したアクションなどです。 これらのユーザー アカウント イベントの一覧については、「[セキュリティ ログをレビューする](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log#security-log-actions)」をご覧ください。
{% endif %}

{%- ifversion fpt or ghec %}
## `account` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `account.billing_plan_change` | 組織の請求期間が変更されました。 詳細については、「[支払いサイクル期間の変更](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)」を参照してください。
| `account.plan_change` | 組織のサブスクリプションが変更されました。 詳細については、「[GitHub アカウントの支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)」を参照してください。
| `account.pending_plan_change` | 組織所有者または支払いマネージャーが、有料サブスクリプションを取り消すかダウングレードしました。 詳細については、「[How does upgrading or downgrading affect the billing process? (アップグレードまたはダウングレードは課金プロセスにどのように影響しますか?)](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process)」を参照してください。
| `account.pending_subscription_change` | {% data variables.product.prodname_marketplace %} 無料試用版が開始されたか、期限切れになりました。 詳細については、「[GitHub Marketplace の支払いについて](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)」を参照してください。
{%- endif %}

{%- ifversion fpt or ghec %}
## `advisory_credit` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `advisory_credit.accept` | 誰かがセキュリティ アドバイザリのクレジットを受け入れました。 詳細については、[セキュリティ アドバイザリの編集](/github/managing-security-vulnerabilities/editing-a-security-advisory)に関する記事を参照してください。
| `advisory_credit.create` | セキュリティ アドバイザリの管理者が、クレジット セクションにユーザーを追加しました。
| `advisory_credit.decline` | 誰かがセキュリティ アドバイザリのクレジットを拒否しました。
| `advisory_credit.destroy` | セキュリティ アドバイザリの管理者が、クレジット セクションからユーザーを削除しました。
{%- endif %}

## `artifact` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `artifact.destroy`    | ワークフロー実行の成果物が手動で削除されました。

{%- ifversion audit-log-streaming %}
## `audit_log_streaming` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `audit_log_streaming.check` | 監査ログ ストリーミングのために構成されたエンドポイントの手動チェックが実行されました。
| `audit_log_streaming.create` | エンドポイントが監査ログ ストリーミングのために追加されました。
| `audit_log_streaming.update` | 監査ログ ストリーミングのためのエンドポイント構成が更新されました (ストリームが一時停止された、有効にされた、または無効にされたなど)。
| `audit_log_streaming.destroy` | 監査ログ ストリーミング エンドポイントが削除されました。
{%- endif %}

{%- ifversion fpt or ghec %}
## `billing` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `billing.change_billing_type` | 組織が {% data variables.product.prodname_dotcom %} に対する支払い方法を変更しました。 詳細については、「[支払い方法を追加または編集する](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)」を参照してください。
| `billing.change_email` | 組織の支払い請求先メール アドレスが変更されました。 詳細については、「[支払い請求先メールアドレスを設定する](/billing/managing-your-github-billing-settings/setting-your-billing-email)」を参照してください。
{%- endif %}

## `business` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `business.add_admin` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}がエンタープライズに追加されました。
{%- ifversion ghec %} | `business.add_billing_manager` | 支払いマネージャーがエンタープライズに追加されました。
{%- endif %} | `business.add_organization` | 組織がエンタープライズに追加されました。
{%- ifversion ghec %} | `business.add_support_entitlee` | サポート エンタイトルメントがエンタープライズのメンバーに追加されました。 詳細については、「[Managing support entitlements for your enterprise (エンタープライズのサポート エンタイトルメントの管理)](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)」を参照してください。
{%- endif %} {%- ifversion ghes or ghae %} | `business.advanced_security_policy_update` | Enterprise 所有者{% ifversion ghes %}またはサイト管理者{% endif %}が {% data variables.product.prodname_GH_advanced_security %} のポリシーを作成、更新、または削除しました。 詳細については、「[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise (エンタープライズで GitHub Actions のポリシーを適用する)](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)」を参照してください。
{%- endif %} {%- ifversion ghec %} | `business.cancel_admin_invitation` | 誰かをエンタープライズの所有者{% ifversion ghes %}またはサイト管理者{% endif %}にする招待が取り消されました。
| `business.cancel_billing_manager_invitation` | 誰かをエンタープライズの支払いマネージャーにする招待が取り消されました。
{%- endif %} {%- ifversion ghes %} | `business.clear_actions_settings` | エンタープライズ所有者またはサイト管理者が、エンタープライズの {% data variables.product.prodname_actions %} ポリシー設定をクリアしました。 詳細については、「[Enforcing policies for GitHub Actions in your enterprise (エンタープライズで GitHub Actions のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)」を参照してください。
{%- endif %} | `business.clear_default_repository_permission` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}がエンタープライズのベース リポジトリ アクセス許可ポリシー設定をクリアしました。 詳細については、「[Enforcing a policy for base repository permissions (ベース リポジトリ アクセス許可のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)」を参照してください。
| `business.clear_members_can_create_repos`      | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}がエンタープライズの組織のリポジトリ作成に対する制限をクリアしました。 詳細については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)」を参照してください。
| `business.create`                              | エンタープライズが作成されました。
{%- ifversion ghec %} | `business.disable_oidc` | エンタープライズの OIDC シングル サインオンが無効にされました。 詳しくは、「[{% data variables.product.prodname_emus %} の OIDC の構成](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)」を参照してください。
| `business.disable_saml` | エンタープライズの SAML シングル サインオンが無効にされました。
{%- endif %} | `business.disable_two_factor_requirement` | メンバーがエンタープライズにアクセスするには 2 要素認証を有効にするという要件が無効にされました。
{%- ifversion ghec %} | `business.enable_oidc` | エンタープライズの OIDC シングル サインオンが有効にされました。 詳しくは、「[{% data variables.product.prodname_emus %} の OIDC の構成](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)」を参照してください。
| `business.enable_saml` | エンタープライズの SAML シングル サインオンが有効にされました。
{%- endif %} | `business.enable_two_factor_requirement` | メンバーがエンタープライズにアクセスするには 2 要素認証を有効にするという要件が有効にされました。
{%- ifversion ghec %} | `business.enterprise_server_license_download` | {% data variables.product.prodname_ghe_server %} ライセンスがダウンロードされました。
| `business.import_license_usage` | {% data variables.product.prodname_ghe_server %} インスタンスから {% data variables.product.prodname_dotcom_the_website %} 上のエンタープライズ アカウントにライセンス使用状況情報がインポートされました。
| `business.invite_admin` | 誰かをエンタープライズのエンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}にする招待が送信されました。
| `business.invite_billing_manager` | 誰かをエンタープライズの支払いマネージャーにする招待が送信されました。
{%- endif %} | `business.members_can_update_protected_branches.clear` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、エンタープライズのメンバーが個々の組織のリポジトリ上にある保護されたブランチを更新できるかどうかのポリシー設定を解除しました。 組織管理者は、保護されたブランチの設定の更新を許可するかどうかを選択できます。
| `business.members_can_update_protected_branches.disable` | エンタープライズ メンバーがブランチ保護規則を更新する機能が無効にされました。 エンタープライズ所有者のみが保護されたブランチを更新できます。
| `business.members_can_update_protected_branches.enable` | エンタープライズ メンバーがブランチ保護規則を更新する機能が有効にされました。 エンタープライズ所有者とメンバーが保護されたブランチを更新できます。
| `business.remove_admin` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}がエンタープライズから削除されました。
{%- ifversion ghes %} | `business.referrer_override_enable` | Enterprise 所有者またはサイト管理者が、参照元ポリシーのオーバーライドを有効にしました。 詳細については、「[Configuring the referrer policy for your enterprise (エンタープライズの参照元ポリシーの構成)](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)」を参照してください。
| `business.referrer_override_disable` | エンタープライズ所有者またはサイト管理者が参照元ポリシーのオーバーライドを無効にしました。 詳細については、「[Configuring the referrer policy for your enterprise (エンタープライズの参照元ポリシーの構成)](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)」を参照してください。
{%- endif %} {%- ifversion ghec %} | `business.remove_billing_manager` | 支払いマネージャーがエンタープライズから削除されました。
| `business.remove_member` | メンバーがエンタープライズから削除されました。
{%- endif %} | `business.remove_organization` | 組織がエンタープライズから削除されました。
{%- ifversion ghec %} | `business.remove_support_entitlee` | サポート エンタイトルメントがエンタープライズのメンバーから削除されました。 詳細については、「[Managing support entitlements for your enterprise (エンタープライズのサポート エンタイトルメントの管理)](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)」を参照してください。
{%- endif %} | `business.rename_slug` | エンタープライズ URL の slug の名前が変更されました。
{%- ifversion ghec %} | `business.revoke_external_identity` | エンタープライズのメンバーの外部 ID が取り消されました。
| `business.revoke_sso_session` | エンタープライズのメンバーの SAML シングル サインオン セッションが取り消されました。
{%- endif %} {%- ifversion ghec %} | `business.set_actions_fork_pr_approvals_policy` | エンタープライズのパブリック フォークからのワークフローに承認を必要とする設定が変更されました。 詳細については、「[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise (エンタープライズでフォーク pull request のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)」を参照してください。
{%- endif %} | `business.set_actions_retention_limit` | エンタープライズの {% data variables.product.prodname_actions %} の成果物とログの保持期間が変更されました。 詳細については、「[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise (エンタープライズでフォーク pull request のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)」を参照してください。
{%- ifversion ghec or ghes %} | `business.set_fork_pr_workflows_policy` | プライベート リポジトリ フォークのワークフローのポリシーが変更されました。 詳細については、「{% ifversion ghec %}[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise (エンタープライズでフォーク pull request のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Enabling workflows for private repository forks (プライベート リポジトリ フォークのワークフローを有効にする)](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}」を参照してください。
{%- endif %} {%- ifversion audit-log-sso-response-events %} |`business.sso_response` | メンバーがエンタープライズの認証を受けようとしたときに SAML シングル サインオン (SSO) 応答が生成されました。 このイベントは、監査ログ ストリーミングと REST API を介してのみあります。
{%- endif %} {%- ifversion ghes %} | `business.update_actions_settings` | エンタープライズ所有者またはサイト管理者が、エンタープライズの {% data variables.product.prodname_actions %} ポリシー設定を更新しました。 詳細については、「[Enforcing policies for GitHub Actions in your enterprise (エンタープライズで GitHub Actions のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)」を参照してください。
{%- endif %} | `business.update_default_repository_permission` | エンタープライズのすべての組織に対して、ベース リポジトリのアクセス許可設定が更新されました。 詳細については、「[Enforcing a policy for base repository permissions (ベース リポジトリ アクセス許可のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)」を参照してください。
| `business.update_member_repository_creation_permission` | エンタープライズのリポジトリの作成設定が更新されました。 詳細については、「[リポジトリ作成のためのポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)」を参照してください。
| `business.update_member_repository_invitation_permission` | エンタープライズ メンバーが外部の共同作業者をリポジトリに招待する場合のポリシー設定が更新されました。 詳細については、[外部コラボレーターをリポジトリに招待するためのポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)に関する記事を参照してください。
{%- ifversion ghec %} | `business.update_saml_provider_settings` | エンタープライズの SAML シングル サインオン プロバイダー設定が更新されました。
{%- endif %}

{% ifversion code-security-audit-log-events %}

## `business_advanced_security` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `business_advanced_security.disabled` | Enterprise に対して {% data variables.product.prodname_GH_advanced_security %} が無効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_advanced_security.enabled` | Enterprise に対して {% data variables.product.prodname_GH_advanced_security %} が有効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_advanced_security.disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} が、Enterprise の新しいリポジトリに対して無効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_advanced_security.enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} が、Enterprise の新しいリポジトリに対して有効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。

{% endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `business_secret_scanning.disable` | Enterprise に対して {% data variables.product.prodname_secret_scanning_caps %} が無効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning.enable` | Enterprise に対して {% data variables.product.prodname_secret_scanning_caps %} が有効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning.disabled_for_new_repos` | Enterprise 内の新しいリポジトリに対して {% data variables.product.prodname_secret_scanning_caps %} が無効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning.enabled_for_new_repos` | Enterprise 内の新しいリポジトリに対して {% data variables.product.prodname_secret_scanning_caps %} が有効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。

{% endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## `business_secret_scanning_custom_pattern` カテゴリのアクション

アクション                        | 説明
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | エンタープライズレベルのカスタム パターンが発行され、シークレット スキャンが行われます。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account)に関する記事を参照してください。
| `business_secret_scanning_custom_pattern.delete` | エンタープライズレベルのカスタム パターンがシークレット スキャンから削除されます。
| `business_secret_scanning_custom_pattern.update` | シークレット スキャンに対するエンタープライズレベルのカスタム パターンへの変更は保存されます。
{%- endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning_push_protection` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `business_secret_scanning_push_protection.disable` | Enterprise に対して {% data variables.product.prodname_secret_scanning %} 用のプッシュ保護が無効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning_push_protection.enable` | Enterprise に対して {% data variables.product.prodname_secret_scanning %} 用のプッシュ保護が有効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning_push_protection.disabled_for_new_repos` | Enterprise 内の新しいリポジトリに対して {% data variables.product.prodname_secret_scanning %} 用のプッシュ保護が無効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning_push_protection.enabled_for_new_repos` | Enterprise 内の新しいリポジトリに対して {% data variables.product.prodname_secret_scanning %} 用のプッシュ保護が有効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。

{% endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning_push_protection_custom_message` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `business_secret_scanning_push_protection_custom_message.disable` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージが、Enterprise に対して無効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning_push_protection_custom_message.enable` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージが、Enterprise に対して有効にされました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning_push_protection_custom_message.update` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージが、Enterprise に対して更新されました。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。

{% endif %}

## `checks` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `checks.auto_trigger_disabled` | 組織またはエンタープライズのリポジトリでチェック スイートの自動作成が無効にされました。 詳細については、「[Update repository preferences for check suites (チェック スイートのリポジトリ設定を更新する)](/rest/reference/checks#update-repository-preferences-for-check-suites)」を参照してください。
| `checks.auto_trigger_enabled` | 組織またはエンタープライズのリポジトリでチェック スイートの自動作成が有効にされました。 詳細については、「[Update repository preferences for check suites (チェック スイートのリポジトリ設定を更新する)](/rest/reference/checks#update-repository-preferences-for-check-suites)」を参照してください。
{%- ifversion fpt or ghec %} | `checks.delete_logs` | チェック スイートのログが削除されました。
{%- endif %}

{%- ifversion fpt or ghec %}
## `codespaces` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `codespaces.connect` | codespace が開始されました。
| `codespaces.create` | ユーザーが [codespace を作成しました](/github/developing-online-with-codespaces/creating-a-codespace)。
| `codespaces.destroy` | ユーザーが [codespace を削除しました](/github/developing-online-with-codespaces/deleting-a-codespace)。
| `codespaces.allow_permissions` | `devcontainer.json` ファイルのカスタム アクセス許可を使う codespace が起動されました。
| `codespaces.attempted_to_create_from_prebuild` | プレビルドから codespace を作成しようとしました。
| `codespaces.create_an_org_secret` | ユーザーが、Organaization レベルの [{% data variables.product.prodname_github_codespaces %} のシークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を作成しました
| `codespaces.update_an_org_secret` | ユーザーが、Organaization レベルの [{% data variables.product.prodname_github_codespaces %} のシークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を更新しました。
| `codespaces.remove_an_org_secret` | ユーザーが、Organaization レベルの [{% data variables.product.prodname_github_codespaces %} のシークレット](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)を削除しました。
| `codespaces.manage_access_and_security` | ユーザーが [codespace からアクセスできるリポジトリ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)を更新しました。
{%- endif %}

{%- ifversion fpt or ghec %}
## `commit_comment` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `commit_comment.destroy` | コミット コメントが削除されました。
| `commit_comment.update` | コミット コメントが更新されました。
{%- endif %}

{%- ifversion ghes %}
## `config_entry` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `config_entry.create` | 構成設定が作成されました。 これらのイベントは、サイト管理者の監査ログにのみ表示されます。 記録されるイベントの種類は、次に関連します。</br>- Enterprise の設定とポリシー</br>- 組織とリポジトリのアクセス許可および設定</br>- Git、Git LFS、{% data variables.product.prodname_github_connect %}、{% data variables.product.prodname_registry %}、プロジェクト、およびコードのセキュリティ設定。
| `config_entry.destroy` | 構成設定が削除されました。 これらのイベントは、サイト管理者の監査ログにのみ表示されます。 記録されるイベントの種類は、次に関連します。</br>- Enterprise の設定とポリシー</br>- 組織とリポジトリのアクセス許可および設定</br>- Git、Git LFS、{% data variables.product.prodname_github_connect %}、{% data variables.product.prodname_registry %}、プロジェクト、およびコードのセキュリティ設定。
| `config_entry.update` | 構成設定が編集されました。 これらのイベントは、サイト管理者の監査ログにのみ表示されます。 記録されるイベントの種類は、次に関連します。</br>- Enterprise の設定とポリシー</br>- 組織とリポジトリのアクセス許可および設定</br>- Git、Git LFS、{% data variables.product.prodname_github_connect %}、{% data variables.product.prodname_registry %}、プロジェクト、およびコードのセキュリティ設定。
{%- endif %}

## `dependabot_alerts` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `dependabot_alerts.disable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、既存のすべての{% ifversion fpt or ghec %}プライベート {% endif %}リポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を無効にしました。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `dependabot_alerts.enable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、既存のすべての{% ifversion fpt or ghec %}プライベート {% endif %}リポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効にしました。

## `dependabot_alerts_new_repos` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `dependabot_alerts_new_repos.disable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、新しいすべての{% ifversion fpt or ghec %}プライベート {% endif %}リポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を無効にしました。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `dependabot_alerts_new_repos.enable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、新しいすべての{% ifversion fpt or ghec %}プライベート {% endif %}リポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効にしました。

## `dependabot_repository_access` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `dependabot_repository_access.repositories_updated` | {% data variables.product.prodname_dependabot %} からアクセスできるリポジトリが更新されました。

{%- ifversion fpt or ghec or ghes %}
## `dependabot_security_updates` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `dependabot_security_updates.disable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、既存のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にしました。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `dependabot_security_updates.enable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、既存のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にしました。

## `dependabot_security_updates_new_repos` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、新しいすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にしました。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `dependabot_security_updates_new_repos.enable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、新しいすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にしました。
{%- endif %}

## `dependency_graph` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `dependency_graph.disable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、すべての既存のリポジトリに対して依存関係グラフを無効にしました。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `dependency_graph.enable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、すべての既存のリポジトリに対して依存関係グラフを有効にしました。

## `dependency_graph_new_repos` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `dependency_graph_new_repos.disable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、すべての新しいリポジトリに対して依存関係グラフを無効にしました。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
| `dependency_graph_new_repos.enable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、すべての新しいリポジトリに対して依存関係グラフを有効にしました。

{%- ifversion fpt or ghec %}
## `discussion` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `discussion.destroy` | チーム ディスカッションが削除されました。

## `discussion_comment` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `discussion_comment.destroy` | [チーム ディスカッションの投稿に対するコメントが削除されました](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment)。
| `discussion_comment.update` | [チーム ディスカッションの投稿に対するコメントが編集されました](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment)。

## `discussion_post` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `discussion_post.destroy` | [チーム ディスカッションの投稿が削除されました](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)。
| `discussion_post.update` | [チーム ディスカッションの投稿が編集されました](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)。

## `discussion_post_reply` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `discussion_post_reply.destroy` | [チーム ディスカッションの投稿に対する返信が削除されました](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment)。
| `discussion_post_reply.update` | [チーム ディスカッションの投稿に対する返信が編集されました](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment)。
{%- endif %}

{%- ifversion ghec or ghes %}
## `dotcom_connection` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `dotcom_connection.create` | {% data variables.product.prodname_dotcom_the_website %} に対する {% data variables.product.prodname_github_connect %} の接続が作成されました。
| `dotcom_connection.destroy` | {% data variables.product.prodname_dotcom_the_website %} に対する {% data variables.product.prodname_github_connect %} の接続が削除されました。
| `dotcom_connection.token_updated` | {% data variables.product.prodname_dotcom_the_website %} に対する {% data variables.product.prodname_github_connect %} の接続トークンが更新されました。
| `dotcom_connection.upload_license_usage` | {% data variables.product.prodname_ghe_server %} ライセンスの使用状況が {% data variables.product.prodname_ghe_cloud %} に手動でアップロードされました。
| `dotcom_connection.upload_usage_metrics` | {% data variables.product.prodname_ghe_server %} 使用状況メトリックが {% data variables.product.prodname_dotcom_the_website %} にアップロードされました。
{%- endif %}

## `enterprise` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、エンタープライズのリポジトリに対する匿名 Git 読み取りアクセスを無効にしました。 詳細については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)」を参照してください。
| `enterprise.config.enable_anonymous_git_access`   | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、エンタープライズのリポジトリに対する匿名 Git 読み取りアクセスを有効にしました。 詳細については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)」を参照してください。
| `enterprise.config.lock_anonymous_git_access`   | リポジトリ管理者がエンタープライズのリポジトリに対する既存の匿名 Git 読み取りアクセスの設定を変更できないように、エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が匿名 Git 読み取りアクセスをロックしました。 詳細については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)」を参照してください。
| `enterprise.config.unlock_anonymous_git_access` | リポジトリ管理者がエンタープライズのリポジトリに対する既存の匿名 Git 読み取りアクセスの設定を変更できるように、エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が匿名 Git 読み取りアクセスのロックを解除しました。 詳細については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)」を参照してください。
| `enterprise.register_self_hosted_runner` | 新しい {% data variables.product.prodname_actions %} セルフホスト ランナーが登録されました。 詳細については、「[リポジトリへのセルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)」を参照してください。
| `enterprise.remove_self_hosted_runner` | {% data variables.product.prodname_actions %} セルフホスト ランナーが削除されました。 詳細については、「[リポジトリからのランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)」を参照してください。
| `enterprise.runner_group_created` | {% data variables.product.prodname_actions %} セルフホスト ランナー グループが作成されました。 詳細については、[組織のセルフホスト ランナー グループの作成](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)に関する記事を参照してください。
| `enterprise.runner_group_removed` | {% data variables.product.prodname_actions %} セルフホスト ランナー グループが削除されました。 詳細については、「[セルフホスト ランナー グループを削除する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。
| `enterprise.runner_group_renamed` | {% data variables.product.prodname_actions %} セルフホスト ランナー グループの名前が変更されました。 詳細については、「[セルフホスト ランナー グループのアクセス ポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
| `enterprise.runner_group_updated` | {% data variables.product.prodname_actions %} セルフホスト ランナー グループの構成が変更されました。 詳細については、「[セルフホスト ランナー グループのアクセス ポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
| `enterprise.runner_group_runner_removed` |  グループから {% data variables.product.prodname_actions %} セルフホスト ランナーを削除する REST API が使用されました。 詳細については、「[組織のグループからセルフホスト ランナーを削除する](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)」を参照してください。
| `enterprise.runner_group_runners_added` | {% data variables.product.prodname_actions %} セルフホスト ランナーがグループに追加されました。 詳細については、「[セルフホスト ランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。
| `enterprise.runner_group_runners_updated`|  {% data variables.product.prodname_actions %} ランナー グループのメンバー一覧が更新されました。 詳細については、「[組織のグループにセルフホスト ランナーを設定する](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。
{%- ifversion ghec %} | `enterprise.runner_group_visiblity_updated` | {% data variables.product.prodname_actions %} セルフホスト ランナー グループの可視性が REST API を使って更新されました。 詳細については、「[組織のセルフホスト ランナー グループを更新する](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)」を参照してください。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `enterprise.self_hosted_runner_online` | {% data variables.product.prodname_actions %} ランナー アプリケーションが開始されました。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `enterprise.self_hosted_runner_offline` | {% data variables.product.prodname_actions %} ランナー アプリケーションが停止されました。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
{%- endif %} {%- ifversion ghec or ghes %} | `enterprise.self_hosted_runner_updated` | {% data variables.product.prodname_actions %} ランナー アプリケーションが更新されました。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)に関する記述をご覧ください。
{%- endif %}

{%- ifversion ghec %}
## `enterprise_domain` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `enterprise_domain.approve` | エンタープライズに対してエンタープライズ ドメインが承認されました。 詳細については、「[Approving a domain for your enterprise account (エンタープライズ アカウントのドメインを承認する)](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account)」を参照してください。
| `enterprise_domain.create` | エンタープライズ ドメインがエンタープライズに追加されました。 詳細については、「[Verifying a domain for your enterprise account (エンタープライズ アカウントのドメインを検証する)](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)」を参照してください。
| `enterprise_domain.destroy` | エンタープライズ ドメインがエンタープライズから削除されました。 詳細については、「[検証済みあるいは承認済みのドメインの削除](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain)」を参照してください。
| `enterprise_domain.verify` | エンタープライズに対してエンタープライズ ドメインが検証されました。 詳細については、「[Verifying a domain for your enterprise account (エンタープライズ アカウントのドメインを検証する)](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)」を参照してください。

## `enterprise_installation` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `enterprise_installation.create` | {% data variables.product.prodname_github_connect %} エンタープライズ接続に関連付けられた {% data variables.product.prodname_github_app %} が作成されました。
| `enterprise_installation.destroy` | {% data variables.product.prodname_github_connect %} エンタープライズ接続に関連付けられた {% data variables.product.prodname_github_app %} が削除されました。
| `enterprise_installation.token_updated` | {% data variables.product.prodname_github_connect %} エンタープライズ接続に関連付けられた {% data variables.product.prodname_github_app %} に属するトークンが更新されました。
{%- endif %}

{%- ifversion fpt or ghec %}
## `environment` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `environment.add_protection_rule` | {% data variables.product.prodname_actions %} 環境の保護ルールが API を使って作成されました。 詳細については、「[環境の保護ルール](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)」を参照してください。
| `environment.create_actions_secret` | {% data variables.product.prodname_actions %} 環境のシークレットが API を使って作成されました。 詳細については、「[環境のシークレット](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)」を参照してください。
| `environment.delete` | 環境が API を使って削除されました。 詳細については、「[環境の削除](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment)」を参照してください。
| `environment.remove_actions_secret` | {% data variables.product.prodname_actions %} 環境のシークレットが API を使って削除されました。 詳細については、「[環境のシークレット](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)」を参照してください。
| `environment.remove_protection_rule` | {% data variables.product.prodname_actions %} 環境の保護ルールが API を使って削除されました。 詳細については、「[環境の保護ルール](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)」を参照してください。
| `environment.update_actions_secret` | {% data variables.product.prodname_actions %} 環境のシークレットが API を使って更新されました。 詳細については、「[環境のシークレット](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)」を参照してください。
| `environment.update_protection_rule` | {% data variables.product.prodname_actions %} 環境の保護ルールが API を使って更新されました。 詳細については、「[環境の保護ルール](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)」を参照してください。
{%- endif %}

{%- ifversion ghae %}
## `external_group` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `external_group.delete` | Okta グループが削除されました。 詳細については、[Okta グループのチームへのマッピング](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
| `external_group.link` | Okta グループが {% data variables.product.prodname_ghe_managed %} チームにマップされました。 詳細については、[Okta グループのチームへのマッピング](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
| `external_group.provision` | Okta グループが {% data variables.product.prodname_ghe_managed %} 上のチームにマップされました。 詳細については、[Okta グループのチームへのマッピング](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
| `external_group.unlink` | Okta グループが {% data variables.product.prodname_ghe_managed %} チームからマップ解除されました。 詳細については、[Okta グループのチームへのマッピング](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
| `external_group.update` | Okta グループの設定が更新されました。 詳細については、[Okta グループのチームへのマッピング](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。

## `external_identity` カテゴリのアクション
| アクション | 説明
|--------|-------------
| `external_identity.deprovision` | ユーザーが Okta グループから削除され、その後、{% data variables.product.prodname_ghe_managed %} からプロビジョニング解除されました。 詳細については、[Okta グループのチームへのマッピング](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
| `external_identity.provision` | Okta ユーザーが Okta グループに追加され、その後、{% data variables.product.prodname_ghe_managed %} 上のマップされたチームにプロビジョニングされました。 詳細については、[Okta グループのチームへのマッピング](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
| `external_identity.update` | Okta ユーザーの設定が更新されました。 詳細については、[Okta グループのチームへのマッピング](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)に関する記事を参照してください。
{%- endif %}

## `gist` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `gist.create` | gist が作成されます。
| `gist.destroy` | gist が削除されます。
| `gist.visibility_change` | gist の可視性が変更されます。

{% ifversion git-events-audit-log %}
## `git` カテゴリのアクション

{% ifversion enable-git-events %} `git` カテゴリのアクションを表示する前に、監査ログで Git イベントを有効にする必要があります。 詳しくは、「[企業の監査ログの構成](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise#managing-git-events-in-the-audit-log)」を参照してください。
{% endif %}

{% data reusables.audit_log.git-events-not-in-search-results %}

| アクション | 説明
|--------|-------------
| `git.clone` | リポジトリがクローンされました。
| `git.fetch` | 変更がリポジトリからフェッチされました。
| `git.push`  | 変更がリポジトリにプッシュされました。
{% endif %}

## `hook` カテゴリのアクション

| アクション | 説明
|--------|-------------
{%- ifversion ghes or ghae %} | `hook.active_changed`             | フックのアクティブ状態が更新されました。
{%- endif %} | `hook.config_changed`             | フックの構成が変更されました。
| `hook.create`                     | 新しいフックが追加されました。
| `hook.destroy`                    | フックが削除されました。
| `hook.events_changed`             | フックの構成されているイベントが変更されました。

## `integration` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `integration.create` | 統合が作成されました。
| `integration.destroy` | 統合が削除されました。
| `integration.manager_added` | エンタープライズまたは組織のメンバーが統合マネージャーとして追加されました。
| `integration.manager_removed` | エンタープライズまたは組織のメンバーが統合マネージャーから削除されました。
| `integration.transfer` | 統合の所有権が他のユーザーまたは組織に転送されました。
| `integration.remove_client_secret` | 統合のクライアント シークレットが削除されました。
| `integration.revoke_all_tokens` | 統合のすべてのユーザー トークンの取り消しが要求されました。
| `integration.revoke_tokens` | 統合のトークンが取り消されました。

## `integration_installation` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `integration_installation.contact_email_changed` | 統合の連絡先メール アドレスが変更されました。
| `integration_installation.create` | 統合がインストールされました。
| `integration_installation.destroy` | 統合がアンインストールされました。
| `integration_installation.repositories_added` | リポジトリが統合に追加されました。
| `integration_installation.repositories_removed` | リポジトリが統合から削除されました。
{%- ifversion fpt or ghec %} | `integration_installation.suspend` | 統合が一時停止されました。
| `integration_installation.unsuspend` | 統合が停止解除されました。
{%- endif %} | `integration_installation.version_updated` | 統合のアクセス許可が更新されました。

## `integration_installation_request` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `integration_installation_request.create` | エンタープライズまたは組織で使うために所有者が統合をインストールすることを、メンバーが要求しました。
| `integration_installation_request.close` | エンタープライズまたは組織で使うために統合をインストールする要求は、所有者によって承認または拒否されたか、要求を開いたメンバーによって取り消されました。

{%- ifversion ghec or ghae %}
## `ip_allow_list` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `ip_allow_list.enable`               | IP 許可リストが有効化されました。
| `ip_allow_list.enable_for_installed_apps` | インストールされている {% data variables.product.prodname_github_apps %} に対して IP 許可リストが有効化されました。
| `ip_allow_list.disable`              | IP 許可リストが無効化されました。
| `ip_allow_list.disable_for_installed_apps` | インストールされている {% data variables.product.prodname_github_apps %} に対して IP 許可リストが無効化されました。

## `ip_allow_list_entry` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `ip_allow_list_entry.create` | IP アドレスが IP 許可リストに追加されました。
| `ip_allow_list_entry.update` | IP アドレスまたはその説明が変更されました。
| `ip_allow_list_entry.destroy` | IP アドレスが IP 許可リストから削除されました。
{%- endif %}

## `issue` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `issue.destroy`                      | Issue がリポジトリから削除されました。 詳細については、「[Issue の削除](/issues/tracking-your-work-with-issues/deleting-an-issue)」を参照してください。
| `issue.pinned`                       | issue がリポジトリにピン留めされました。 詳細については、「[Issue をリポジトリにピン止めする](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)」を参照してください。
| `issue.transfer`                     | issue が別のリポジトリに転送されました。 詳細については、「[Transferring an issue to another repository (Issue を別のリポジトリに転送する)](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)」を参照してください。
| `issue.unpinned`                     | issue がリポジトリからピン留めを外されました。 詳細については、「[Issue をリポジトリにピン止めする](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)」を参照してください。

## `issue_comment` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `issue_comment.destroy`  | issue へのコメントがリポジトリから削除されました。
| `issue_comment.pinned`   | issue へのコメントがリポジトリにピン留めされました。
| `issue_comment.unpinned` | issue へのコメントがリポジトリからピン留めを外されました。
| `issue_comment.update`   | Issue （最初以外）のコメントが変更されました。

## `issues` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `issues.deletes_disabled` | エンタープライズ メンバーが issue を削除する機能が無効にされました。 メンバーは、エンタープライズのどの組織の issue も削除できません。 詳細については、「[Enforcing a policy for deleting issues (Issue を削除するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)」を参照してください。
| `issues.deletes_enabled` | エンタープライズ メンバーが issue を削除する機能が有効にされました。 メンバーは、エンタープライズのすべての組織の issue を削除できます。 詳細については、「[Enforcing a policy for deleting issues (Issue を削除するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)」を参照してください。
| `issues.deletes_policy_cleared` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、メンバーがエンタープライズの issue を削除することを許可する場合のポリシー設定をクリアしました。 詳細については、「[Enforcing a policy for deleting issues (Issue を削除するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)」を参照してください。

{%- ifversion fpt or ghec %}
## `marketplace_agreement_signature` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `marketplace_agreement_signature.create` | ユーザーが組織に代わって {% data variables.product.prodname_marketplace %} 開発者契約に署名しました。

## `marketplace_listing` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `marketplace_listing.approve` | 一覧を {% data variables.product.prodname_marketplace %} に掲載することが承認されました。
| `marketplace_listing.change_category` | {% data variables.product.prodname_marketplace %} のアプリの一覧のカテゴリが変更されました。
| `marketplace_listing.create` | {% data variables.product.prodname_marketplace %} のアプリの一覧が作成されました。
| `marketplace_listing.delist` | 一覧が {% data variables.product.prodname_marketplace %} から削除されました。
| `marketplace_listing.redraft` | 一覧が下書き状態に戻されました。
| `marketplace_listing.reject` | 一覧を {% data variables.product.prodname_marketplace %} に掲載することが認められませんでした。
{%- endif %}

## `members_can_create_pages` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `members_can_create_pages.disable` | メンバーが {% data variables.product.prodname_pages %} を公開する機能が無効にされました。 メンバーは、組織の {% data variables.product.prodname_pages %} を公開できません。 詳細については、「[Organization の GitHub Pages サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。
| `members_can_create_pages.enable` | メンバーが {% data variables.product.prodname_pages %} を公開する機能が有効にされました。 メンバーは、組織の {% data variables.product.prodname_pages %} を公開できます。 詳細については、「[Organization の GitHub Pages サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。

## `members_can_create_private_pages` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `members_can_create_private_pages.disable` | メンバーがプライベート {% data variables.product.prodname_pages %} を公開する機能が無効にされました。 メンバーは、組織のプライベート {% data variables.product.prodname_pages %} を公開できません。 詳細については、「[Organization の GitHub Pages サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。
| `members_can_create_private_pages.enable` |  メンバーがプライベート {% data variables.product.prodname_pages %} を公開する機能が有効にされました。 メンバーは、組織のプライベート {% data variables.product.prodname_pages %} を公開できます。 詳細については、「[Organization の GitHub Pages サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。

## `members_can_create_public_pages` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `members_can_create_public_pages.disable` |  メンバーがパブリック {% data variables.product.prodname_pages %} を公開する機能が無効にされました。 メンバーは、組織のパブリック {% data variables.product.prodname_pages %} を公開できません。 詳細については、「[Organization の GitHub Pages サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。
| `members_can_create_public_pages.enable` |  メンバーがパブリック {% data variables.product.prodname_pages %} を公開する機能が有効にされました。 メンバーは、組織のパブリック {% data variables.product.prodname_pages %} を公開できます。 詳細については、「[Organization の GitHub Pages サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。

{%- ifversion ghec or ghes or ghae %}
## `members_can_delete_repos` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `members_can_delete_repos.clear` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、エンタープライズのすべての組織のリポジトリを削除または転送する場合のポリシー設定をクリアしました。 詳細については、「[リポジトリの削除と転送に関するポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)」を参照してください。
| `members_can_delete_repos.disable` | エンタープライズ メンバーがリポジトリを削除する機能が無効にされました。 メンバーは、エンタープライズのどの組織のリポジトリも削除または転送できません。 詳細については、「[リポジトリの削除と転送に関するポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)」を参照してください。
| `members_can_delete_repos.enable` |  エンタープライズ メンバーがリポジトリを削除する機能が有効にされました。 メンバーは、エンタープライズのすべての組織のリポジトリを削除または転送できます。 詳細については、「[リポジトリの削除と転送に関するポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)」を参照してください。

## `members_can_view_dependency_insights` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `members_can_view_dependency_insights.clear` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、エンタープライズのすべての組織の依存関係の分析情報を表示する場合のポリシー設定をクリアしました。{% ifversion ghec %}詳細については、「[Enforcing a policy for visibility of dependency insights (依存関係の分析情報の可視性に関するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)」を参照してください。{% endif %}
| `members_can_view_dependency_insights.disable` | エンタープライズ メンバーが依存関係の分析情報を表示する機能が無効にされました。 メンバーは、エンタープライズのどの組織の依存関係の分析情報も表示できません。{% ifversion ghec %}詳細については、「[Enforcing a policy for visibility of dependency insights (依存関係の分析情報の可視性に関するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)」を参照してください。{% endif %}
| `members_can_view_dependency_insights.enable` |  エンタープライズ メンバーが依存関係の分析情報を表示する機能が有効にされました。 メンバーは、エンタープライズのすべての組織の依存関係の分析情報を表示できます。{% ifversion ghec %}詳細については、「[Enforcing a policy for visibility of dependency insights (依存関係の分析情報の可視性に関するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)」を参照してください。{% endif %}

## `migration` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `migration.create` | *"ソース"* の場所 ({% data variables.product.prodname_dotcom_the_website %} 組織、{% data variables.product.prodname_ghe_server %} インスタンスなど) から *"ターゲット"* となる {% data variables.product.prodname_ghe_server %} インスタンスにデータを転送するための移行ファイルが作成されました。
| `migration.destroy_file` | *"ソース"* の場所 ({% data variables.product.prodname_dotcom_the_website %} 組織、{% data variables.product.prodname_ghe_server %} インスタンスなど) から *"ターゲット"* となる {% data variables.product.prodname_ghe_server %} インスタンスにデータを転送するための移行ファイルが削除されました。
|  `migration.download` | *"ソース"* の場所 ({% data variables.product.prodname_dotcom_the_website %} 組織、{% data variables.product.prodname_ghe_server %} インスタンスなど) から *"ターゲット"* となる {% data variables.product.prodname_ghe_server %} インスタンスにデータを転送するための移行ファイルがダウンロードされました。
{%- endif %}

## `oauth_access` カテゴリのアクション

| アクション | 説明
|--------|-------------
`oauth_access.create`   | ユーザー アカウントに対して [OAuth アクセス トークン][]が生成されました。 詳しい情報については、「[{% data variables.product.pat_generic %}の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。
`oauth_access.destroy`  | ユーザー アカウントから [OAuth アクセス トークン][]が削除されました。

  [OAuth アクセス トークン]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

## `oauth_application` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `oauth_application.create`           | ユーザーまたは組織アカウント用に [OAuth アプリケーション][]が作成されました。
| `oauth_application.destroy`          | ユーザーまたは組織アカウントから [OAuth アプリケーション][]が削除されました。
{%- ifversion fpt or ghec %} | `oauth_application.generate_client_secret`   | [OAuth アプリケーション][]の秘密鍵が生成されました。
| `oauth_application.remove_client_secret`     | [OAuth アプリケーション][]の秘密鍵が削除されました。
{%- endif %} | `oauth_application.reset_secret`      | [OAuth アプリケーション][]の秘密鍵がリセットされました。
{%- ifversion fpt or ghec %} | `oauth_application.revoke_all_tokens` | [OAuth アプリケーション][]のすべてのユーザー トークンの取り消しが要求されました。
{%- endif %} | `oauth_application.revoke_tokens`     | [OAuth アプリケーション][]のトークンが取り消されました。
| `oauth_application.transfer`          | [OAuth アプリケーション][]がユーザーまたは組織のアカウント間で転送されました。
{%- ifversion ghes or ghae %} | `oauth_application.unsuspend`         | ユーザーまたは組織アカウントの [OAuth アプリケーション][]が停止解除されました。
{%- endif %}

  [OAuth アプリケーション]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
## `oauth_authorization` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `oauth_authorization.create`          | OAuth アプリケーションの認可が作成されました。 詳細については、「[Authorizing OAuth Apps (OAuth アプリの認可)](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)」を参照してください。
| `oauth_authorization.destroy`          | OAuth アプリケーションの認可が削除されました。 詳細については、「[Authorizing OAuth Apps (OAuth アプリの認可)](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)」を参照してください。
| `oauth_authorization.update`          | OAuth アプリケーションの認可が更新されました。 詳細については、「[Authorizing OAuth Apps (OAuth アプリの認可)](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)」を参照してください。
{%- endif %}

## `org` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `org.accept_business_invitation` | エンタープライズに参加するために組織に送信された招待が受け入れられました。 {% ifversion ghec %}詳細については、「[Inviting an organization to join your enterprise account (エンタープライズ アカウントに参加するように組織を招待する)](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)」を参照してください。{% endif %}
| `org.add_billing_manager` | 支払いマネージャーが組織に追加されました。 {% ifversion fpt or ghec %}詳細については、「[Organization への支払いマネージャーの追加](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)」を参照してください。{% endif %}
| `org.add_member` | ユーザーが組織に参加しました。
| `org.advanced_security_disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} が、Organaization の新しいリポジトリに対して無効にされました。
| `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} が、Organaization のすべてのリポジトリに対して無効にされました。
| `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} が、Organaization の新しいリポジトリに対して有効にされました。
| `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} が、Organaization のすべてのリポジトリに対して有効にされました。
| `org.advanced_security_policy_selected_member_disabled` | Enterprise 所有者が、Organaization が所有するリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} 機能を有効にすることを禁止しました。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | Enterprise 所有者が、Organaization が所有するリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} 機能を有効にすることを許可しました。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | Organaization 所有者が、Enterprise の {% data variables.product.prodname_GH_advanced_security %} のポリシーを更新しました。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.async_delete` | ユーザーが、Organization を削除するバックグラウンド ジョブを開始しました。
{%- ifversion ghec %} | `org.audit_log_export` | 組織所有者が組織監査ログのエクスポートを作成しました。 エクスポートにクエリが含まれていた場合、ログには使用されたクエリとそのクエリに一致する Audit log エントリの数が一覧表示されます。 詳細については、[エンタープライズの監査ログ アクティビティのエクスポート](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)に関する記事を参照してください。
{%- endif %} | `org.block_user` | ユーザーが組織のリポジトリにアクセスする操作を組織所有者がブロックしました。 {% ifversion fpt or ghec %}詳細については、「[Organization からのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」を参照してください。{% endif %} | `org.cancel_business_invitation` | 組織に対してエンタープライズへの参加を求める招待が取り消されました。 {% ifversion ghec %}詳細については、「[Inviting an organization to join your enterprise account (エンタープライズ アカウントに参加するように組織を招待する)](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)」を参照してください。{% endif %} | `org.cancel_invitation` | ユーザーに送信された組織への参加を求める招待が取り消されました。
| `org.clear_actions_settings` |  組織所有者が、組織の {% data variables.product.prodname_actions %} ポリシー設定をクリアしました。 詳細については、「[Managing GitHub Actions permissions for your organization (組織の GitHub Actions のアクセス許可を管理する)](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)」を参照してください。
| `org.clear_default_repository_permission` | 組織所有者が、組織のベース リポジトリ アクセス許可ポリシー設定をクリアしました。 詳細については、「[基本レベルの権限の設定](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)」を参照してください。
| `org.clear_member_team_creation_permission` | 組織所有者が、組織の新しいチーム作成設定をクリアしました。 詳細については、「[Organization のチーム作成権限を設定する](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)」を参照してください。
| `org.clear_reader_discussion_creation_permission` | 組織所有者が、組織の新しいディスカッション作成設定をクリアしました。 {% ifversion fpt or ghec %}詳細については、「[Organization 内のリポジトリのディスカッション作成を管理する](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)」を参照してください。{% endif %} | `org.clear_members_can_create_repos`                 | 組織所有者が、組織のリポジトリ作成に関する制限をクリアしました。 詳細については、「[Organization 内でリポジトリの作成を制限する](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)」を参照してください。
| `org.clear_members_can_invite_outside_collaborators` | 組織所有者が、組織の外部コラボレーター招待ポリシーをクリアしました。 詳細については、「[外部のコラボレーターを追加するための権限を設定する](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)」を参照してください。
| `org.clear_new_repository_default_branch_setting`    | 組織所有者が、組織の新しいリポジトリに関する既定のブランチ名の設定をクリアしました。 詳細については、「[Setting the default branch name (既定のブランチ名を設定する)](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name)」を参照してください。
{%- ifversion fpt or ghec %} | `org.codespaces_trusted_repo_access_granted`         | {% data variables.product.prodname_github_codespaces %} は、Organaization 内の他のすべてのリポジトリに対する信頼済みリポジトリ アクセスを付与されました。 詳細については、「[Managing repository access for your organization's codespaces (組織の codespace に関するリポジトリ アクセスを管理する)](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)」を参照してください。
| `org.codespaces_trusted_repo_access_revoked`         | Organaization 内の他のすべてのリポジトリに対する {% data variables.product.prodname_github_codespaces %} の信頼済みリポジトリ アクセスが取り消されました。 詳細については、「[Managing repository access for your organization's codespaces (組織の codespace に関するリポジトリ アクセスを管理する)](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)」を参照してください。
{%- endif %}                                                                                                             | | `org.config.disable_collaborators_only` | ある組織に対してのみ、コラボレーターのインタラクション制限が無効にされました。 {% ifversion fpt or ghec %}詳細については、「[Organization での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)」を参照してください。{% endif %} | `org.config.disable_contributors_only` | ある組織に対してのみ、以前の共同作成者に関する操作の制限が無効にされました。 {% ifversion fpt or ghec %}詳細については、「[Organization での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)」を参照してください。{% endif %} | `org.config.disable_sockpuppet_disallowed` | ある組織に対してのみ、既存のユーザーに関する操作の制限が無効にされました。 {% ifversion fpt or ghec %}詳細については、「[Organization での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)」を参照してください。{% endif %} | `org.config.enable_collaborators_only` | ある組織に対してのみ、コラボレーターに関する操作の制限が有効にされました。 {% ifversion fpt or ghec %}詳細については、「[Organization での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)」を参照してください。{% endif %} | `org.config.enable_contributors_only` | ある組織に対してのみ、以前の共同作成者に関する操作の制限が有効にされました。 {% ifversion fpt or ghec %}詳細については、「[Organization での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)」を参照してください。{% endif %} | `org.config.enable_sockpuppet_disallowed` | ある組織に対してのみ、既存のユーザーに関する操作の制限が有効にされました。 {% ifversion fpt or ghec %}詳細については、「[Organization での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)」を参照してください。{% endif %} | `org.confirm_business_invitation` | 組織に対してエンタープライズへの参加を求める招待が確認されました。 {% ifversion ghec %}詳細については、「[Inviting an organization to join your enterprise account (エンタープライズ アカウントに参加するように組織を招待する)](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)」を参照してください。{% endif %} | `org.create` | 組織が作成されました。 詳細については、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。
{%- ifversion fpt or ghec or ghes %} | `org.create_actions_secret` | 組織の {% data variables.product.prodname_actions %} シークレットが作成されました。 詳細については、「[Organization の暗号化されたシークレットの作成](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)」を参照してください。
{%- endif %} | `org.create_integration_secret` | Organization 用に {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} または {% data variables.product.prodname_github_codespaces %}{% endif %} 統合シークレットが作成されました。
| `org.delete`       | ユーザーが開始したバックグラウンド ジョブによって組織が削除されました。
| `org.disable_member_team_creation_permission` | 組織所有者が所有者に対してチーム作成を制限しました。 詳細については、「[Organization のチーム作成権限を設定する](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)」を参照してください。
| `org.disable_reader_discussion_creation_permission` | 組織所有者が、組織内で少なくともトリアージ アクセス許可を持つユーザーに対してディスカッション作成を制限しました。 {% ifversion fpt or ghec %}詳細については、「[読み取りアクセス権を持つユーザーがディスカッションを作成することを許可または禁止する](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)」を参照してください。{% endif %} {%- ifversion fpt or ghec %} | `org.disable_oauth_app_restrictions` | 組織のサードパーティ アプリケーション アクセスの制限が無効にされました。 詳細については、「[Organization の OAuth App アクセス制限の無効化](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)」を参照してください。
{%- endif %} {%- ifversion ghec %} | `org.disable_saml` | 組織所有者が SAML シングル サインオンを無効にしました。
{%- endif %} {%- ifversion not ghae %} | `org.disable_two_factor_requirement` | 組織所有者が、組織内のすべてのメンバー{% ifversion fpt or ghec %}、支払いマネージャー{% endif %}、外部コラボレーターに対して 2 要素認証の要件を無効にしました。
{%- endif %} | `org.display_commenter_full_name_disabled` | 組織所有者は、コメント入力者のフル ネームの表示を無効にしました。 メンバーはコメント作成者のフル ネームを表示できません。
| `org.display_commenter_full_name_enabled` | 組織所有者が、コメント入力者のフル ネームの表示を有効にしました。 メンバーはコメント作成者のフル ネームを表示できます。
| `org.enable_member_team_creation_permission` | 組織所有者が、メンバーに対してチームの作成を許可しました。 詳細については、「[Organization のチーム作成権限を設定する](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)」を参照してください。
| `org.enable_reader_discussion_creation_permission` | 組織所有者が、読み取りアクセス権を持つユーザーに対して、組織内でディスカッションを作成することを許可しました。 {% ifversion fpt or ghec %}詳細については、「[読み取りアクセス権を持つユーザーがディスカッションを作成することを許可または禁止する](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)」を参照してください。{% endif %} {%- ifversion fpt or ghec %} | `org.enable_oauth_app_restrictions` | 組織のサードパーティ アプリケーション アクセスの制限が有効にされました。 詳細については、「[Organization の OAuth App アクセス制限の有効化](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)」を参照してください。
{%- endif %} {%- ifversion ghec %} | `org.enable_saml` | 組織所有者が [SAML シングル サインオンを有効にしました](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)。
{%- endif %} {%- ifversion not ghae %} | `org.enable_two_factor_requirement` | 組織所有者が、組織内のすべてのメンバー{% ifversion fpt or ghec %}、支払いマネージャー{% endif %}、外部コラボレーターに対して 2 要素認証を必須にしました。
{%- endif %} | `org.integration_manager_added` | 組織所有者が、組織が所有するすべての GitHub Actions を管理するアクセス権をメンバーに付与しました。
| `org.integration_manager_removed` | 組織所有者が、組織が所有するすべての GitHub Actions を管理するアクセス権を組織メンバーから削除しました。
| `org.invite_member` | 組織に参加するように新しいユーザーが招待されました。 {% ifversion fpt or ghec %}詳細については、「[Organization に参加するようユーザーを招待する](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)」を参照してください。{% endif %} | `org.invite_to_business` | エンタープライズに参加するように組織が招待されました。
| `org.members_can_update_protected_branches.clear` | 組織所有者が、組織のメンバーが組織内のリポジトリ上の保護されたブランチを更新できるかどうかのポリシーの設定を解除しました。 組織管理者は、保護されたブランチの設定の更新を許可するかどうかを選択できます。
| `org.members_can_update_protected_branches.disable` | エンタープライズ メンバーが保護されたブランチを更新する機能が無効にされました。 エンタープライズ所有者のみが保護されたブランチを更新できます。
| `org.members_can_update_protected_branches.enable` |  エンタープライズ メンバーが保護されたブランチを更新する機能が有効にされました。 組織のメンバーは、保護されたブランチを更新できます。
{%- ifversion fpt or ghec %} | `org.oauth_app_access_approved` | 所有者が、[組織に対して {% data variables.product.prodname_oauth_app %} へのアクセス権を付与しました](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization)。
| `org.oauth_app_access_denied` | 所有者が、組織に対して[以前に承認した {% data variables.product.prodname_oauth_app %} のアクセス権を無効にしました](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization)。
| `org.oauth_app_access_requested` | 所有者が組織に対して {% data variables.product.prodname_oauth_app %} アクセス権を付与することを、組織メンバーが要求しました。
{%- endif %} | `org.recreate` | 組織が復元されました。
| `org.register_self_hosted_runner` | 新しいセルフホスト ランナーが登録されました。 詳細については、「[Organization へのセルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)」を参照してください。
| `org.remove_actions_secret` | {% data variables.product.prodname_actions %} シークレットが削除されました。
| `org.remove_integration_secret` | Organization の {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} または {% data variables.product.prodname_github_codespaces %}{% endif %} 統合シークレットが Organization から削除されました。
| `org.remove_billing_manager` | 組織所有者が組織から支払いマネージャーを削除しました。 {% ifversion fpt or ghec %}詳細については、「[Organization から支払いマネージャーを削除する](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization)」を参照してください。{% endif %}{% ifversion not ghae %}または[組織で 2 要素認証が必要](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)で、支払いマネージャーが 2 要素認証を使用しなかった、または 2 要素認証を無効にした場合。{% endif %} | `org.remove_member` | [所有者が組織からメンバーを削除しました。](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %}または[組織で 2 要素認証が必要](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)で、組織メンバーが 2 要素認証を使用していない、または 2 要素認証を無効にした場合{% endif %}。 また、[組織メンバーが組織から自分自身を削除しました](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization)。
| `org.remove_outside_collaborator` | 所有者が外部コラボレーターを組織から削除しました。{% ifversion not ghae %} または[組織で 2 要素認証が必須](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)で、外部コラボレーターが 2 要素認証を使用しなかったか、2 要素認証を無効にした場合{% endif %}。
| `org.remove_self_hosted_runner` | セルフホスト ランナーが削除されました。 詳細については、「[Organization からのランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)」を参照してください。
| `org.rename` | 組織の名前が変更されました。
| `org.restore_member` | 組織メンバーが復元されました。 詳細については、「[Oraganization の以前のメンバーを復帰させる](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)」を参照してください。
{%- ifversion ghec %} | `org.revoke_external_identity` | 組織所有者がメンバーのリンクされた ID を取り消しました。 詳細については、「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。
| `org.revoke_sso_session` | 組織所有者がメンバーの SAML セッションを取り消しました。 詳細については、「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。
{%- endif %} | `org.runner_group_created` | セルフホスト ランナー グループが作成されました。 詳細については、[組織のセルフホスト ランナー グループの作成](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)に関する記事を参照してください。
| `org.runner_group_removed` | セルフホスト ランナー グループが削除されました。 詳細については、「[セルフホスト ランナー グループを削除する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。
{%- ifversion fpt or ghec %} | `org.runner_group_renamed` | セルフホスト ランナー グループの名前が変更されました。 詳細については、「[セルフホスト ランナー グループのアクセス ポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
{%- endif %} | `org.runner_group_updated` | セルフホスト ランナー グループの構成が変更されました。 詳細については、「[セルフホスト ランナー グループのアクセス ポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
| `org.runner_group_runner_removed` |  セルフホスト ランナーをグループから削除する REST API が使われました。 詳細については、「[組織のグループからセルフホスト ランナーを削除する](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)」を参照してください。
| `org.runner_group_runners_added` | セルフホスト ランナーがグループに追加されました。 詳細については、「[セルフホスト ランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。
| `org.runner_group_runners_updated`|  ランナー グループのメンバー一覧が更新されました。 詳細については、「[組織のグループにセルフホスト ランナーを設定する](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。
{%- ifversion fpt or ghec %} | `org.runner_group_visiblity_updated` | REST API を使ってセルフホスト ランナー グループの可視性が更新されました。 詳細については、「[組織のセルフホスト ランナー グループを更新する](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)」を参照してください。
{%- endif %} {%- ifversion code-security-audit-log-events %} | `org.secret_scanning_push_protection_custom_message_disabled` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージは、Organization に対して無効にされました。 詳細については、「[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)」(シークレット スキャンを使用したプッシュの保護) を参照してください。
| `org.secret_scanning_push_protection_custom_message_enabled` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージが、Organization に対して有効にされました。 詳細については、「[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)」(シークレット スキャンを使用したプッシュの保護) を参照してください。
| `org.secret_scanning_push_protection_custom_message_updated` | プッシュで保護されたリポジトリへのプッシュ試行によってトリガーされたカスタム メッセージが、Organization に対して更新されました。 詳細については、「[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)」(シークレット スキャンを使用したプッシュの保護) を参照してください。
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org.secret_scanning_push_protection_disable` | Organaization 所有者または管理者が、シークレット スキャンのプッシュ保護を無効にしました。 詳細については、「[Protecting pushes with secret scanning (シークレット スキャンによるプッシュの保護)](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。
| `org.secret_scanning_push_protection_enable` | 組織所有者または管理者がシークレット スキャンのプッシュ保護を有効にしました。
{%- endif %} | `org.self_hosted_runner_online` | ランナー アプリケーションが開始されました。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `org.self_hosted_runner_offline` | ランナー アプリケーションが停止されました。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
{%- ifversion fpt or ghec or ghes %} | `org.self_hosted_runner_updated` | ランナー アプリケーションが更新されました。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)に関する記述をご覧ください。
{%- endif %} {%- ifversion fpt or ghec %} | `org.set_actions_fork_pr_approvals_policy` | 組織のパブリック フォークからのワークフローに承認を必要とする設定が変更されました。 詳細については、[パブリック フォークからのワークフローに対して承認を必須にする](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)方法に関する記事を参照してください。
{%- endif %} | `org.set_actions_retention_limit` | 組織の {% data variables.product.prodname_actions %} の成果物とログの保持期間が変更されました。 詳細については、「[Organization 内の {% data variables.product.prodname_actions %} アーティファクトとログの保持期間を設定する](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)」を参照してください。
{%- ifversion fpt or ghec or ghes %} | `org.set_fork_pr_workflows_policy` | プライベート リポジトリ フォークのワークフローのポリシーが変更されました。 詳細については、「[プライベート リポジトリ フォークのワークフローを有効にする](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)」を参照してください。
{%- endif %} {%- ifversion ghes or audit-log-sso-response-events %} |`org.sso_response` | メンバーが Organization の認証を受けようとしたときに SAML シングル サインオン (SSO) 応答が生成されました。 このイベントは、監査ログ ストリーミングと REST API を介してのみあります。
{%- endif %} {%- ifversion ghec %} | `org.transfer` | Organization が Enterprise アカウント間で移転されました。 詳細については、「[Adding organizations to your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)」 (Enterprise への Organization の追加) を参照してください。
{%- endif %} {%- ifversion not ghae %} | `org.transform`    | ユーザー アカウントが組織に変換されました。 詳細については、[ユーザーの組織への変換](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)に関する記事を参照してください。
{%- endif %} | `org.unblock_user` | 組織所有者が組織からのユーザーのブロックを解除しました。 {% ifversion fpt or ghec %}詳細については、「[Organization からユーザーのブロックを解除する](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)」を参照してください。{% endif %} {%- ifversion fpt or ghec or ghes %} | `org.update_actions_secret` | {% data variables.product.prodname_actions %} シークレットが更新されました。
{%- endif %} | `org.update_integration_secret` | Organization の {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} または {% data variables.product.prodname_github_codespaces %}{% endif %} 統合シークレットが更新されました。
| `org.update_default_repository_permission` | 組織所有者が組織メンバーの既定のリポジトリ アクセス許可レベルを変更しました。
| `org.update_member` | 組織所有者が、個人のロールを所有者からメンバーへ、またはメンバーから所有者へ変更しました。
| `org.update_member_repository_creation_permission` | 組織所有者が、組織メンバーのリポジトリの作成アクセス許可レベルを変更しました。
| `org.update_member_repository_invitation_permission` | 組織所有者が、組織メンバーが外部コラボレーターをリポジトリに招待する場合のポリシー設定を変更しました。 詳細については、「[外部のコラボレーターを追加するための権限を設定する](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)」を参照してください。
| `org.update_new_repository_default_branch_setting` | 組織所有者が、組織内の新しいリポジトリの既定のブランチ名を変更しました。 詳細については、「[Managing the default branch name for repositories in your organization (組織内のリポジトリについて既定のブランチ名を管理する)](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)」を参照してください。
{%- ifversion ghec or ghae %} | `org.update_saml_provider_settings` | 組織の SAML プロバイダー設定が更新されました。
| `org.update_terms_of_service` | 組織が標準利用規約と企業向け利用規約間の切り替えを行いました。 {% ifversion ghec %}詳細については、「[企業利用規約にアップグレードする](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service)」を参照してください。{% endif %} {%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `org_credential_authorization` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `org_credential_authorization.deauthorized` | メンバーが、SAML シングル サインオンに使う資格情報の認可を取り消しました。 {% ifversion ghec or ghae %}詳細については、「[SAML シングル サインオンで認証する](/authentication/authenticating-with-saml-single-sign-on)」を参照してください。{% endif %}
| `org_credential_authorization.grant` | メンバーが、SAML シングル サインオンに使う資格情報を認可しました。 {% ifversion ghec or ghae %}詳細については、「[SAML シングル サインオンで認証する](/authentication/authenticating-with-saml-single-sign-on)」を参照してください。{% endif %}
| `org_credential_authorization.revoke` | 所有者が、承認された資格情報を取り消しました。 {% ifversion ghec %}詳細については、「[アクティブな SAML セッションの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)」を参照してください。{% endif %}
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## `org_secret_scanning_custom_pattern` カテゴリのアクション

| アクション | 説明
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | 組織内のシークレット スキャン用のカスタム パターンが発行されました。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)に関する記事を参照してください。
| `org_secret_scanning_custom_pattern.delete` | 組織内のシークレット スキャンからカスタム パターンが削除されました。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)に関する記事を参照してください。
| `org_secret_scanning_custom_pattern.update` |カスタム パターンの変更が、組織内のシークレット スキャン用に保存されました。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)に関する記事を参照してください。
{%- endif %}

## `organization_default_label` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `organization_default_label.create` | 組織内のリポジトリの既定のラベルが作成されました。 詳細については、「[デフォルト ラベルの作成](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label)」を参照してください。
| `organization_default_label.update` | 組織内のリポジトリの既定のラベルが編集されました。 詳細については、「[デフォルト ラベルの編集](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label)」を参照してください。
| `organization_default_label.destroy` | 組織内のリポジトリの既定のラベルが削除されました。 詳細については、「[デフォルト ラベルの削除](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label)」を参照してください。

{%- ifversion fpt or ghec or ghes %}
## `organization_domain` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `organization_domain.approve` | 組織に対してエンタープライズ ドメインが承認されました。 詳細については、[組織のドメインの承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization)に関する記事を参照してください。
| `organization_domain.create` | 組織に対してエンタープライズ ドメインが追加されました。 詳細については、[組織のドメインの検証](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)に関する記事を参照してください。
| `organization_domain.destroy` | 組織からエンタープライズ ドメインが削除されました。 詳細については、「[検証済みあるいは承認済みのドメインの削除](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain)」を参照してください。
| `organization_domain.verify` | 組織のエンタープライズ ドメインが検証されました。 詳細については、[組織のドメインの検証](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)に関する記事を参照してください。

## `organization_projects_change` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `organization_projects_change.clear` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、エンタープライズ内の組織全体のプロジェクト ボードに関するポリシー設定をクリアしました。 詳しくは、[エンタープライズ内でプロジェクトにポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)ことに関する説明を参照してください。
| `organization_projects_change.disable` | エンタープライズ内のすべての組織に対して、組織プロジェクトが無効にされました。 詳しくは、[エンタープライズ内でプロジェクトにポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)ことに関する説明を参照してください。
| `organization_projects_change.enable` | エンタープライズ内のすべての組織に対して、組織プロジェクトが有効にされました。 詳しくは、[エンタープライズ内でプロジェクトにポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)ことに関する説明を参照してください。
{%- endif %}

## `packages` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `packages.insecure_hash` | Maven が、特定のパッケージ バージョン用のセキュリティで保護されていないハッシュを発行しました。
| `packages.package_deleted` | パッケージが Organaization から削除されました。{% ifversion fpt or ghec or ghes %} 詳しい情報については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。{% endif %}
| `packages.package_published` | パッケージが組織に対して発行または再発行されました。
| `packages.package_restored` | パッケージ全体が復元されました。{% ifversion fpt or ghec or ghes %} 詳しい情報については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。{% endif %}
| `packages.package_version_deleted` | 特定のパッケージ バージョンが削除されました。{% ifversion fpt or ghec or ghes %} 詳しい情報については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。{% endif %}
| `packages.package_version_published` | 特定のパッケージ バージョンがパッケージに対して発行または再発行されました。
| `packages.package_version_restored` | 特定のパッケージ バージョンが削除されました。{% ifversion fpt or ghec or ghes %} 詳しい情報については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。{% endif %}
| `packages.part_upload` | 特定のパッケージ バージョンが組織に対して部分的にアップロードされました。
| `packages.upstream_package_fetched` | npm アップストリーム プロキシから特定のパッケージ バージョンがフェッチされました。
| `packages.version_download` | 特定のパッケージ バージョンがダウンロードされました。
| `packages.version_upload` | 特定のパッケージ バージョンがアップロードされました。

{%- ifversion fpt or ghec %}
## `pages_protected_domain` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `pages_protected_domain.create` | 組織またはエンタープライズに対して {% data variables.product.prodname_pages %} 検証済みドメインが作成されました。 詳細については、「[{% data variables.product.prodname_pages %} のカスタム ドメインの検証](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)」を参照してください。
| `pages_protected_domain.delete` | 組織またはエンタープライズから {% data variables.product.prodname_pages %} 検証済みドメインが削除されました。 詳細については、「[{% data variables.product.prodname_pages %} のカスタム ドメインの検証](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)」を参照してください。
| `pages_protected_domain.verify`  | 組織またはエンタープライズに対して {% data variables.product.prodname_pages %} ドメインが検証されました。 詳細については、「[{% data variables.product.prodname_pages %} のカスタム ドメインの検証](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)」を参照してください。

## `payment_method` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `payment_method.create` | 新しいクレジット カードや PayPal アカウントなど、新しい支払い方法が追加されました。
| `payment_method.remove` | 支払い方法が削除されました。
| `payment_method.update` | 既存の支払い方法が更新されました。

## `prebuild_configuration` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `prebuild_configuration.create` | リポジトリの {% data variables.product.prodname_github_codespaces %} プレビルド構成が作成されました。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} プレビルドについて](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)」をご覧ください。
| `prebuild_configuration.destroy` | リポジトリの {% data variables.product.prodname_github_codespaces %} プレビルド構成が削除されました。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} プレビルドについて](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)」をご覧ください。
| `prebuild_configuration.run_triggered` | ユーザーが、リポジトリ ブランチの {% data variables.product.prodname_github_codespaces %} プレビルド構成の実行を開始しました。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} プレビルドについて](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)」をご覧ください。
| `prebuild_configuration.update` | リポジトリの {% data variables.product.prodname_github_codespaces %} プレビルド構成が編集されました。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} プレビルドについて](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)」をご覧ください。
{%- endif %}

{%- ifversion ghes %}
## `pre_receive_environment` カテゴリのアクション

| アクション | 説明
| ------ | -----------
| `pre_receive_environment.create` | pre-receive フック環境が作成されました。 詳細については、「[Creating a pre-receive hook environment (pre-receive フック環境の作成)](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)」を参照してください。
| `pre_receive_environment.destroy` | pre-receive フック環境が削除されました。 詳細については、「[Creating a pre-receive hook environment (pre-receive フック環境の作成)](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)」を参照してください。
| `pre_receive_environment.download` | pre-receive フック環境がダウンロードされました。 詳細については、「[Creating a pre-receive hook environment (pre-receive フック環境の作成)](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)」を参照してください。
| `pre_receive_environment.update` | pre-receive フック環境が更新されました。 詳細については、「[Creating a pre-receive hook environment (pre-receive フック環境の作成)](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)」を参照してください。

## `pre_receive_hook` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `pre_receive_hook.create` | pre-receive フックが作成されました。 詳細については、「[Creating pre-receive hooks (pre-receive フックの作成)](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks)」を参照してください。
| `pre_receive_hook.destroy` | pre-receive フックが削除されました。 詳細については、「[Deleting pre-receive hooks (pre-receive フックの削除)](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks)」を参照してください。
| `pre_receive_hook.enforcement` | リポジトリおよび組織管理者がフック構成をオーバーライドすることを許可する pre-receive フックの適用設定が有効または無効にされました。 詳細については、「[Managing pre-receive hooks on the GitHub Enterprise Server appliance (GitHub Enterprise Server アプライアンス上で pre-receive フックを管理する)](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance)」を参照してください。
| `pre_receive_hook.rejected_push` | pre-receive フックによってプッシュが拒否されました。
| `pre_receive_hook.update` | pre-receive フックが作成されました。 詳細については、「[Editing pre-receive hooks (pre-receive フックの編集)](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks)」を参照してください。
| `pre_receive_hook.warned_push` | pre-receive フックによって、プッシュについて警告されました。
{%- endif %}

## `private_repository_forking` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `private_repository_forking.clear` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、プライベートおよび内部リポジトリのフォークをリポジトリ、組織、またはエンタープライズに対して許可する場合のポリシー設定をクリアしました。 詳細については、「[リポジトリのフォーク ポリシーを管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)」、「[Organization のフォーク ポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」、エンタープライズの場合は「[Enforcing a policy for forking private or internal repositories (プライベートまたは内部リポジトリのフォークに関するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)」を参照してください。
| `private_repository_forking.disable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、プライベートおよび内部リポジトリのフォークをリポジトリ、組織、またはエンタープライズに対して許可する場合のポリシー設定を無効にしました。 プライベートおよび内部リポジトリのフォークを許可することはできません。 詳細については、「[リポジトリのフォーク ポリシーを管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)」、「[Organization のフォーク ポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」、エンタープライズの場合は「[Enforcing a policy for forking private or internal repositories (プライベートまたは内部リポジトリのフォークに関するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)」を参照してください。
| `private_repository_forking.enable` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、プライベートおよび内部リポジトリのフォークをリポジトリ、組織、またはエンタープライズに対して許可する場合のポリシー設定を有効にしました。 プライベートおよび内部リポジトリのフォークは、常に許可されています。 詳細については、「[リポジトリのフォーク ポリシーを管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)」、「[Organization のフォーク ポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」、エンタープライズの場合は「[Enforcing a policy for forking private or internal repositories (プライベートまたは内部リポジトリのフォークに関するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)」を参照してください。

{%- ifversion fpt or ghec %}
## `profile_picture` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `profile_picture.update` | プロフィール画像が更新されました。
{%- endif %}

## `project` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `project.access` | プロジェクト ボードの可視性が変更されました。 詳細については、「[プロジェクト ボードの可視性の変更](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)」を参照してください。
| `project.close` | プロジェクト ボードが閉じられました。 詳細については、「[プロジェクト ボードをクローズする](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)」を参照してください。
| `project.create` | プロジェクト ボードが作成されました。 詳細については、「[プロジェクト ボードの作成](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)」を参照してください。
| `project.delete` | プロジェクト ボードが削除されました。 詳細については、「[プロジェクト ボードの削除](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)」を参照してください。
| `project.link` | リポジトリがプロジェクト ボードにリンクされました。 詳細については、「[リポジトリをプロジェクト ボードにリンクする](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)」を参照してください。
| `project.open` | プロジェクト ボードが再び開かれました。 詳細については、「[クローズされたプロジェクトボードを再びオープンする](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)」を参照してください。
| `project.rename` | プロジェクト ボードの名前が変更されました。 詳細については、「[プロジェクト ボードの編集](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)」を参照してください。
| `project.unlink` | リポジトリとプロジェクト ボードのリンクが解除されました。 詳細については、「[リポジトリをプロジェクト ボードにリンクする](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)」を参照してください。
| `project.update_org_permission` | すべての組織メンバーに対するプロジェクトのベースレベルのアクセス許可が変更または削除されました。 詳細については、「[Organization メンバーのプロジェクトボードへのアクセスを管理する](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)」を参照してください。
| `project.update_team_permission` | チームのプロジェクト ボードのアクセス許可レベルが変更されました。またはチームがプロジェクト ボードに追加または削除された場合。 詳細については、「[Organization のプロジェクトボードに対するチームのアクセスを管理する](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)」を参照してください。
| `project.update_user_permission` | 組織メンバーまたは外部コラボレーターがプロジェクト ボードに追加または削除されたか、アクセス許可レベルが変更されました。 詳細については、「[Organization のプロジェクトボードに対する個々のアクセスを管理する](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)」を参照してください。

{%- ifversion projects-v2 %}
## `project_field` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `project_field.create` | プロジェクト ボードにフィールドが作成されました。 詳しくは、「[フィールドの型について](/issues/planning-and-tracking-with-projects/understanding-field-types)」を参照してください。
| `project_field.delete` | プロジェクト ボードのフィールドが削除されました。 詳しくは、「[フィールドの削除](/issues/planning-and-tracking-with-projects/understanding-field-types/deleting-fields)」を参照してください。

## `project_view` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `project_view.create` | プロジェクト ボードにビューが作成されました。 詳しくは、「[ビューの管理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)」を参照してください。
| `project_view.delete` | プロジェクト ボードのビューが削除されました。 詳しくは、「[ビューの管理](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)」を参照してください。
{%- endif %}

## `protected_branch` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `protected_branch.create ` | ブランチ保護がブランチで有効にされました。
| `protected_branch.destroy` | ブランチ保護がブランチで無効にされました。
| `protected_branch.dismiss_stale_reviews ` | 古い pull request の却下の適用がブランチ上で更新されました。
{%- ifversion ghes %} | `protected_branch.dismissal_restricted_users_teams` | レビューを却下できるユーザーやチームの制限の適用がブランチ上で更新されました。
{%- endif %} | `protected_branch.policy_override ` | ブランチ保護要件がリポジトリ管理者によってオーバーライドされました。
| `protected_branch.rejected_ref_update ` | ブランチ更新の試行が拒否されました。
| `protected_branch.required_status_override` | 必須の状態チェック ブランチ保護要件がリポジトリ管理者によってオーバーライドされました。
| `protected_branch.review_policy_and_required_status_override` | 必須のレビューと必須の状態チェック ブランチ保護要件がリポジトリ管理者によってオーバーライドされました。
| `protected_branch.review_policy_override` | 必須のレビュー ブランチ保護要件がリポジトリ管理者によってオーバーライドされました。
| `protected_branch.update_admin_enforced ` | ブランチ保護がリポジトリ管理者に対して適用されました。
{%- ifversion ghes %} | `protected_branch.update_allow_deletions_enforcement_level` | プッシュ アクセス権を持つユーザーに対して、一致するブランチを削除することを許可する適用がブランチ上で更新されました。
| `protected_branch.update_allow_force_pushes_enforcement_level` | プッシュ アクセス権を持つすべてのユーザーに対して、強制プッシュを許可する適用がブランチ上で更新されました。
| `protected_branch.update_linear_history_requirement_enforcement_level` | 線形コミット履歴を必須にする適用がブランチ上で更新されました。
{%- endif %} | `protected_branch.update_pull_request_reviews_enforcement_level ` | 必須の pull request レビューの適用がブランチ上で更新されました。 `0`(非アクティブ)、`1`(非管理者)、`2`(すべてのユーザー) のいずれかです。
| `protected_branch.update_require_code_owner_review ` | 必須のコード所有者レビューの適用がブランチ上で更新されました。
| `protected_branch.update_required_approving_review_count` | マージ前の必須の筆数の承認回数の適用がブランチ上で更新されました。
| `protected_branch.update_required_status_checks_enforcement_level ` | 必須の状態チェックの適用がブランチ上で更新されました。
| `protected_branch.update_signature_requirement_enforcement_level ` | 必須のコミット署名の適用がブランチ上で更新されました。
| `protected_branch.update_strict_required_status_checks_policy` | 必須の状態チェックの適用がブランチ上で更新されました。
| `protected_branch.update_name` | ブランチのブランチ名パターンが更新されました。

## `public_key` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `public_key.create` | SSH キーがユーザー アカウントに[追加][add key]されました。または[デプロイ キー][]がリポジトリに追加されました。
| `public_key.delete` | SSH キーがユーザー アカウントから削除されました。または[デプロイ キー][]がリポジトリから削除されました。
| `public_key.update` | ユーザー アカウントの SSH キーまたはリポジトリの[デプロイ キー][]が更新されました。
| `public_key.unverification_failure` | ユーザー アカウントの SSH キーまたはリポジトリの[デプロイ キー][]を未検証にできませんでした。
| `public_key.unverify` | ユーザー アカウントの SSH キーまたはリポジトリの[デプロイ キー][]が未検証になりました。
| `public_key.verification_failure` | ユーザー アカウントの SSH キーまたはリポジトリの[デプロイ キー][]を検証できませんでした。
| `public_key.verify` | ユーザー アカウントの SSH キーまたはリポジトリの[デプロイ キー][]が検証されました。

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [デプロイ キー]: /developers/overview/managing-deploy-keys#deploy-keys

## `pull_request` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `pull_request.close` | pull request がマージされないまま閉じられました。 詳細については、「[プル リクエストをクローズする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)」を参照してください。
| `pull_request.converted_to_draft` | pull request がドラフトに変換されました。 詳細については、「[プル リクエストのステージの変更](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)」を参照してください。
| `pull_request.create` | pull request が作成されました。 詳細については、「[プルリクエストの作成方法](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)」を参照してください。
| `pull_request.create_review_request` | pull request に対するレビューが要求されました。 詳細については、「[プル リクエストのレビューについて](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)」を参照してください。
| `pull_request.in_progress` | pull request が進行中とマークされました。
| `pull_request.indirect_merge` | pull request のコミットはターゲット ブランチにマージされたため、pull request はマージされたと見なされました。
| `pull_request.merge` | pull request はマージされました。 詳細については、「[プル リクエストをマージする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)」を参照してください。
| `pull_request.ready_for_review` | pull request はレビューの準備完了とマークされました。 詳細については、「[プル リクエストのステージの変更](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)」を参照してください。
| `pull_request.remove_review_request` | レビュー要求は pull request から削除されました。 詳細については、「[プル リクエストのレビューについて](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)」を参照してください。
| `pull_request.reopen` | pull request は、以前に閉じられた後に再度開かれました。
| `pull_request_review.delete` | pull request に対するレビューが削除されました。
| `pull_request_review.dismiss` | pull request に対するレビューは却下されました。 詳細については、「[プル リクエスト レビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)」を参照してください。
| `pull_request_review.submit` | pull request のレビューが送信されました。 詳細については、「[プル リクエストのレビューについて](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)」を参照してください。

## `pull_request_review` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `pull_request_review.delete` | pull request に対するレビューが削除されました。
| `pull_request_review.dismiss` | pull request に対するレビューは却下されました。 詳細については、「[プル リクエスト レビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)」を参照してください。
| `pull_request_review.submit` | pull request に対するレビューが送信されました。 詳細については、「[レビューの送信](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review)」を参照してください。

## `pull_request_review_comment` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `pull_request_review_comment.create` | pull request にレビュー コメントが追加されました。 詳細については、「[プル リクエストのレビューについて](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)」を参照してください。
| `pull_request_review_comment.delete` | pull request に対するレビュー コメントが削除されました。
| `pull_request_review_comment.update` | pull request に対するレビュー コメントが変更されました。

## `repo` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repo.access`         | リポジトリの可視性がプライベート{%- ifversion ghes %}、パブリック{% endif %}、または内部に変更されました。
| `repo.actions_enabled` | リポジトリに対して {% data variables.product.prodname_actions %} が有効にされました。
| `repo.add_member`     | リポジトリにコラボレーターが追加されました。
| `repo.add_topic`     | リポジトリにトピックが追加されました。
| `repo.advanced_security_disabled` | リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} が無効にされました。
| `repo.advanced_security_enabled` | リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} が有効にされました。
| `repo.advanced_security_policy_selected_member_disabled` | リポジトリ管理者が、リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} 機能を有効にすることを禁止しました。
| `repo.advanced_security_policy_selected_member_enabled` | リポジトリ管理者が、リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} 機能を有効にすることを許可しました。
| `repo.archived`       | リポジトリがアーカイブされました。 詳細については、「[{% data variables.product.prodname_dotcom %} リポジトリのアーカイブ](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)」を参照してください。
| `repo.code_scanning_analysis_deleted` | リポジトリのコード スキャン分析が削除されました。 詳細については、「[リポジトリからコード スキャン分析を削除する](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository)」を参照してください。
| `repo.change_merge_setting` | リポジトリの pull request マージ オプションが変更されました。
| `repo.clear_actions_settings` | リポジトリ管理者が、リポジトリの {% data variables.product.prodname_actions %} ポリシー設定をクリアしました。
| `repo.config`         | リポジトリ管理者が強制プッシュをブロックしました。 詳細については、リポジトリに対して[リポジトリへの強制プッシュをブロックする](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)方法に関する記事を参照してください。
{%- ifversion fpt or ghec %} | `repo.config.disable_collaborators_only` | コラボレーターに対してのみ、インタラクション制限が無効にされました。 詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
| `repo.config.disable_contributors_only` | 以前の共同作成者に対してのみ、リポジトリ内のインタラクション制限が無効にされました。 詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
| `repo.config.disable_sockpuppet_disallowed` | 既存のユーザーに対してのみ、リポジトリ内のインタラクション制限が無効にされました。 詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
| `repo.config.enable_collaborators_only` | コラボレーターに対してのみ、リポジトリ内のインタラクション制限が有効にされました。 コラボレーターまたは組織メンバーではないユーザーは、設定された期間、リポジトリを操作できませんでした。 詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
| `repo.config.enable_contributors_only` | 以前の共同作成者に対してのみ、リポジトリ内のインタラクション制限が有効にされました。 以前の共同作成者、コラボレーター、または組織メンバーではないユーザーは、設定された期間、リポジトリを操作できませんでした。 詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
| `repo.config.enable_sockpuppet_disallowed` | 既存のユーザーに対して、リポジトリ内のインタラクション制限が有効にされました。 新しいユーザーは、設定した期間、リポジトリを操作できません。 リポジトリの既存のユーザー、共同作成者、コラボレーター、組織メンバーは、リポジトリを操作できます。 詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
{%- endif %} {%- ifversion ghes %} | `repo.config.disable_anonymous_git_access`| リポジトリに対して匿名 Git 読み取りアクセスが無効にされました。 詳細については、「[リポジトリに対する匿名 Git 読み取りアクセスの有効化](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。
| `repo.config.enable_anonymous_git_access` | リポジトリに対して匿名 Git 読み取りアクセスが有効にされました。 詳細については、「[リポジトリに対する匿名 Git 読み取りアクセスの有効化](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。
| `repo.config.lock_anonymous_git_access` | リポジトリの匿名 Git 読み取りアクセス設定がロックされているため、リポジトリ管理者はこの設定を変更 (有効化または無効化) できませんでした。 詳細については、「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。
| `repo.config.unlock_anonymous_git_access` | リポジトリの匿名 Git 読み取りアクセス設定がロック解除されているため、リポジトリ管理者はこの設定を変更 (有効化または無効化) できました。 詳細については、「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。
{%- endif %} | `repo.create` | リポジトリが作成されました。
| `repo.create_actions_secret` | リポジトリの {% data variables.product.prodname_actions %} シークレットが作成されました。 詳細については、「[リポジトリの暗号化されたシークレットの作成](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。
| `repo.create_integration_secret` | リポジトリの {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} または {% data variables.product.prodname_github_codespaces %}{% endif %} 統合シークレットが作成されました。
| `repo.destroy` | リポジトリが削除されました。
{%- ifversion ghes %} | `repo.disk_archive`  | ディスク上でリポジトリがアーカイブされました。 詳細については、「[リポジトリのアーカイブ](/repositories/archiving-a-github-repository/archiving-repositories)」を参照してください。
{%- endif %} | `repo.download_zip` | リポジトリのソース コード アーカイブが ZIP ファイルとしてダウンロードされました。
| `repo.pages_cname` | リポジトリ内の {% data variables.product.prodname_pages %} カスタム ドメインが変更されました。
| `repo.pages_create` | {% data variables.product.prodname_pages %} サイトが作成されました。
| `repo.pages_destroy` | {% data variables.product.prodname_pages %} サイトが削除されました。
| `repo.pages_https_redirect_disabled` | {% data variables.product.prodname_pages %} サイトの HTTPS リダイレクトが無効にされました。
| `repo.pages_https_redirect_enabled` | {% data variables.product.prodname_pages %} サイトの HTTPS リダイレクトが有効にされました。
| `repo.pages_source` | {% data variables.product.prodname_pages %} ソースが変更されました。
| `repo.pages_private` | {% data variables.product.prodname_pages %} サイトの可視性がプライベートに変更されました。
| `repo.pages_public` | {% data variables.product.prodname_pages %} サイトの可視性がパブリックに変更されました。
| `repo.register_self_hosted_runner` | 新しいセルフホスト ランナーが登録されました。 詳細については、「[リポジトリへのセルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)」を参照してください。
| `repo.remove_self_hosted_runner` | セルフホスト ランナーが削除されました。 詳細については、「[リポジトリからのランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)」を参照してください。
| `repo.remove_actions_secret` | リポジトリの {% data variables.product.prodname_actions %} シークレットが削除されました。
| `repo.remove_integration_secret` | リポジトリの {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} または {% data variables.product.prodname_github_codespaces %}{% endif %} 統合シークレットが削除されました。
| `repo.remove_member` | コラボレーターがリポジトリから削除されました。
| `repo.remove_topic` | トピックがリポジトリから削除されました。
| `repo.rename` | リポジトリの名前が変更されました。
{%- ifversion fpt or ghec %} | `repo.set_actions_fork_pr_approvals_policy` | リポジトリのパブリック フォークからのワークフローに承認を必要とする設定が変更されました。 詳細については、「[パブリック フォークからのワークフローに必要な承認の構成](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)」を参照してください。
{%- endif %} | `repo.set_actions_retention_limit` | リポジトリの {% data variables.product.prodname_actions %} の成果物とログの保持期間が変更されました。 詳細については、「[リポジトリ内の成果物とログの {% data variables.product.prodname_actions %} の保持期間を設定する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)」を参照してください。
| `repo.self_hosted_runner_online` | ランナー アプリケーションが開始されました。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `repo.self_hosted_runner_offline` | ランナー アプリケーションが停止されました。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `repo.self_hosted_runner_updated` | ランナー アプリケーションが更新されました。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)に関する記述をご覧ください。
| `repo.staff_unlock` | Enterprise 管理者または GitHub スタッフ (リポジトリ管理者からアクセス許可を付与されている) が、一時的にリポジトリのロックを解除しました。
| `repo.transfer` | ユーザーが転送されたリポジトリを受け取る要求を受け入れました。
| `repo.transfer_outgoing` | リポジトリが別のリポジトリ ネットワークに転送されました。
| `repo.transfer_start` | ユーザーがリポジトリを別のユーザーまたは Organization に転送する要求を送信しました。
| `repo.unarchived` | リポジトリがアーカイブ解除されました。 詳細については、「[{% data variables.product.prodname_dotcom %} リポジトリのアーカイブ](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)」を参照してください。
| `repo.update_actions_settings` | リポジトリ管理者が、リポジトリの {% data variables.product.prodname_actions %} ポリシー設定を変更しました。
| `repo.update_actions_secret` | {% data variables.product.prodname_actions %} シークレットが更新されました。
| `repo.update_actions_access_settings` | 他のリポジトリ内の {% data variables.product.prodname_actions %} ワークフローからリポジトリを使用する方法を制御する設定が変更されました。
| `repo.update_default_branch` | リポジトリの既定のブランチが変更されました。
| `repo.update_integration_secret` | リポジトリの {% data variables.product.prodname_dependabot %} または {% data variables.product.prodname_github_codespaces %} 統合シークレットが更新されました。
| `repo.update_member` | ユーザーのリポジトリに対するアクセス許可が変更されました。

{%- ifversion fpt or ghec %}
## `repository_advisory` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_advisory.close` | 誰かがセキュリティ アドバイザリを閉じました。 詳細については、「[{% data variables.product.prodname_dotcom %} セキュリティ アドバイザリの概要](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。
| `repository_advisory.cve_request` | 誰かが、ドラフト セキュリティ アドバイザリについて {% data variables.product.prodname_dotcom %} の CVE (Common Vulnerabilities and Exposures) 番号を要求しました。
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %} により、{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリが公開されました。
| `repository_advisory.github_withdraw` | {% data variables.product.prodname_dotcom %} により、誤って公開されたセキュリティ アドバイザリが撤回されました。
| `repository_advisory.open` | 誰かがドラフト セキュリティ アドバイザリを開きました。
| `repository_advisory.publish` | 誰かがセキュリティ アドバイザリを公開しました。
| `repository_advisory.reopen` | 誰かがドラフト セキュリティ アドバイザリを開き直しました。
| `repository_advisory.update` | 誰かがドラフトまたは公開済みのセキュリティ アドバイザリを編集しました。

## `repository_content_analysis` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_content_analysis.enable` | 組織所有者またはリポジトリ管理者が、[プライベート リポジトリのデータ使用設定を有効にしました](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)。
| `repository_content_analysis.disable` | 組織所有者またはリポジトリ管理者が、[プライベート リポジトリのデータ使用設定を無効にしました](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)。

## `repository_dependency_graph` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_dependency_graph.disable` | リポジトリ所有者または管理者が、プライベート リポジトリの依存関係グラフを無効にしました。 詳細については、「[About the dependency graph (依存関係グラフの概要)](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
| `repository_dependency_graph.enable` | リポジトリ所有者または管理者が、プライベート リポジトリの依存関係グラフを有効にしました。
{%- endif %}

## `repository_image` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_image.create` | リポジトリを表すイメージがアップロードされました。
| `repository_image.destroy` | リポジトリを表すイメージが削除されました。

## `repository_invitation` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_invitation.accept` | リポジトリに参加するための招待が受け入れられました。
| `repository_invitation.create` | リポジトリに参加するための招待が送信されました。
| `repository_invitation.reject` | リポジトリに参加するための招待がキャンセルされました。

## `repository_projects_change` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_projects_change.clear` | 1 つの組織、またはエンタープライズ内のすべての組織に対して、リポジトリ プロジェクト ポリシーが削除されました。 組織管理者は、リポジトリ プロジェクト設定を制御できるようになりました。 詳しくは、[エンタープライズ内でプロジェクトにポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)ことに関する説明を参照してください。
| `repository_projects_change.disable` | リポジトリ、組織内のすべてのリポジトリ、またはエンタープライズ内のすべての組織に対して、リポジトリ プロジェクトが無効にされました。
| `repository_projects_change.enable` | リポジトリ、組織内のすべてのリポジトリ、またはエンタープライズ内のすべての組織に対して、リポジトリ プロジェクトが有効にされました。

{%- ifversion ghec or ghes or ghae %}
## `repository_secret_scanning` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_secret_scanning.disable` | {% ifversion ghec %}プライベートまたは内部{% endif %}リポジトリに対して、所有者または管理者がシークレット スキャンを無効にしました。 詳細については、「[About secret scanning (シークレット スキャンについて)](/github/administering-a-repository/about-secret-scanning)」を参照してください。
| `repository_secret_scanning.enable` | {% ifversion ghec %}プライベートまたは内部{% endif %}リポジトリに対して、所有者または管理者がシークレット スキャンを有効にしました。
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}

## `repository_secret_scanning_custom_pattern` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | リポジトリ内のシークレット スキャン用のカスタム パターンが発行されました。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)に関する記事を参照してください。
| `repository_secret_scanning_custom_pattern.delete` | リポジトリ内のシークレット スキャンからカスタム パターンが削除されました。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)に関する記事を参照してください。
| `repository_secret_scanning_custom_pattern.update` | カスタム パターンの変更が、リポジトリ内のシークレット スキャン用に保存されました。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)に関する記事を参照してください。

## `repository_secret_scanning_push_protection` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | リポジトリ所有者または管理者がリポジトリのシークレット スキャンを無効にしました。 詳細については、「[Protecting pushes with secret scanning (シークレット スキャンによるプッシュの保護)](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。
| `repository_secret_scanning_push_protection.enable` | リポジトリ所有者または管理者がリポジトリのシークレット スキャンを有効にしました。 詳細については、「[Protecting pushes with secret scanning (シークレット スキャンによるプッシュの保護)](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。
{%- endif %}
## `repository_visibility_change` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_visibility_change.clear` | 組織またはエンタープライズに対して、リポジトリの可視性の変更設定がクリアされました。 詳細については、「[組織内のリポジトリの可視性の変更を制限する](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)」と、エンタープライズの場合は「[Enforcing a policy for changes to repository visibility (リポジトリの可視性の変更に関するポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility)」を参照してください。
| `repository_visibility_change.disable` | エンタープライズ メンバーがリポジトリの可視性を更新する機能が無効にされました。 メンバーは、組織またはエンタープライズ内のすべての組織のリポジトリの可視性を変更できません。
| `repository_visibility_change.enable` | エンタープライズ メンバーがリポジトリの可視性を更新する機能が有効にされました。 メンバーは、組織またはエンタープライズ内のすべての組織のリポジトリの可視性を変更できます。

## `repository_vulnerability_alert` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_vulnerability_alert.create` | {% data variables.product.product_name %} が、安全ではない依存関係を使っているリポジトリに対して {% data variables.product.prodname_dependabot %} アラートを作成しました。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)」を参照してください。
| `repository_vulnerability_alert.dismiss` | Organaization 所有者またはリポジトリ管理者が、脆弱な依存関係{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% data variables.product.prodname_dependabot %}に関するアラートを無視しました{% endif %}。
| `repository_vulnerability_alert.resolve` | リポジトリへの書き込みアクセスを持つだれかが、プロジェクトの依存関係にある {% data variables.product.prodname_dependabot %} アラートを更新および解決するための変更をプッシュしました。

{%- ifversion fpt or ghec %}
## `repository_vulnerability_alerts` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | Organaization 所有者またはリポジトリ管理者が、リポジトリ内の {% data variables.product.prodname_dependabot_alerts %} を受け取ることを認可されたユーザーまたはチームのリストを更新しました。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。
| `repository_vulnerability_alerts.disable` | リポジトリ所有者またはリポジトリ管理者が {% data variables.product.prodname_dependabot_alerts %} を無効にしました。
| `repository_vulnerability_alerts.enable` | リポジトリ所有者またはリポジトリ管理者が {% data variables.product.prodname_dependabot_alerts %} を有効にしました。
{%- endif %}

## `required_status_check` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `required_status_check.create` | 保護されたブランチの状態チェックが必須とマークされました。 詳細については、「[マージ前にステータス チェック必須](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)」を参照してください。
| `required_status_check.destroy` | 保護されたブランチの状態チェックが必須というマークではなくなりました。 詳細については、「[マージ前にステータス チェック必須](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)」を参照してください。

{%- ifversion ghec or ghes %}
## `restrict_notification_delivery` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `restrict_notification_delivery.enable` | 組織またはエンタープライズのメール通知制限が有効になりました。 詳細については、「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)」と「[Restricting email notifications for your enterprise (エンタープライズのメール通知を制限する)](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)」を参照してください。
| `restrict_notification_delivery.disable` | 組織またはエンタープライズのメール通知制限が無効になりました。 詳細については、「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)」と「[Restricting email notifications for your enterprise (エンタープライズのメール通知を制限する)](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)」を参照してください。
{%- endif %}

{%- ifversion custom-repository-roles %}
## `role` カテゴリのアクション

| アクション | 説明
|--------|-------------
|`create` | 組織所有者が新しいカスタム リポジトリ ロールを作成しました。 詳細については、「[Organization のカスタム リポジトリ ロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。
|`destroy` | 組織所有者がカスタム リポジトリ ロールを削除しました。 詳細については、「[Organization のカスタム リポジトリ ロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。
|`update` | 組織所有者が既存のカスタム リポジトリ ロールを編集しました。 詳細については、「[Organization のカスタム リポジトリ ロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `secret_scanning` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `secret_scanning.disable` | すべての既存の{% ifversion ghec %}プライベートまたは内部{% endif %}リポジトリに対して、組織所有者がシークレット スキャンを無効にしました。 詳細については、「[About secret scanning (シークレット スキャンについて)](/github/administering-a-repository/about-secret-scanning)」を参照してください。
| `secret_scanning.enable` | すべての既存の{% ifversion ghec %}プライベートまたは内部{% endif %}リポジトリに対して、組織所有者がシークレット スキャンを有効にしました。

{% ifversion secret-scanning-alert-audit-log %}
## `secret_scanning_alert` カテゴリのアクション

| アクション | 説明
|------------------|-------------------
| `secret_scanning_alert.create` | {% data variables.product.prodname_dotcom %} によってシークレットが検出され、{% data variables.product.prodname_secret_scanning %} アラートが作成されました。 詳細については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/code-security/secret-scanning/managing-alerts-from-secret-scanning)」を参照してください。
| `secret_scanning_alert.reopen` | ユーザーが、{% data variables.product.prodname_secret_scanning %} アラートをもう一度開きました。
| `secret_scanning_alert.resolve` | ユーザーが、{% data variables.product.prodname_secret_scanning %} アラートを解決しました。
{% endif %}

## `secret_scanning_new_repos` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `secret_scanning_new_repos.disable` | すべての新しい{% ifversion ghec %}プライベートまたは内部{% endif %}リポジトリに対して、組織所有者がシークレット スキャンを無効にしました。 詳細については、「[About secret scanning (シークレット スキャンについて)](/github/administering-a-repository/about-secret-scanning)」を参照してください。
| `secret_scanning_new_repos.enable` | すべての新しい{% ifversion ghec %}プライベートまたは内部{% endif %}リポジトリに対して、組織所有者がシークレット スキャンを有効にしました。
{%- endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
## `secret_scanning_push_protection` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `bypass` | シークレット スキャンによって検出されたシークレットのプッシュ保護をユーザーがバイパスしたときにトリガーされます。 詳しい情報については、「[シークレットのプッシュ保護をバイパスする](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)」をご覧ください。{% endif %}

{%- ifversion ghec or ghes or ghae %}
## `security_key` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `security_key.register` | アカウントにセキュリティ キーが登録されました。
| `security_key.remove` | アカウントからセキュリティ キーが削除されました。
{%- endif %}

{%- ifversion fpt or ghec %}
## `sponsors` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `sponsors.agreement_sign` | 組織に代わって {% data variables.product.prodname_sponsors %} 契約が署名されました。
| `sponsors.custom_amount_settings_change` | {% data variables.product.prodname_sponsors %} のカスタム金額が有効または無効にされました。または提案されたカスタム金額が変更されました。 詳細については、「[スポンサーシップ層を管理する](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)」を参照してください。
| `sponsors.fiscal_host_change` | {% data variables.product.prodname_sponsors %} 一覧の会計ホストが更新されました。
| `sponsors.withdraw_agreement_signature` | 組織に適用される {% data variables.product.prodname_sponsors %} 契約から署名が取り消されました。
| `sponsors.repo_funding_links_file_action` | リポジトリ内の FUNDING ファイルが変更されました。 詳細については、「[Displaying a sponsor button in your repository (リポジトリにスポンサー ボタンを表示する)](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)」を参照してください。
| `sponsors.sponsor_sponsorship_cancel` | スポンサーシップが取り消されました。 詳細については、「[スポンサーシップをダウングレードする](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)」を参照してください。
| `sponsors.sponsor_sponsorship_create` | アカウントをスポンサーすることで、スポンサーシップが作成されました。 詳細については、「[オープン ソース コントリビューターに対するスポンサー](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照してください。
| `sponsors.sponsor_sponsorship_payment_complete` | アカウントをスポンサーし、支払いが処理された後、スポンサーシップの支払いが完了とマークされました。 詳細については、「[オープン ソース コントリビューターに対するスポンサー](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)」を参照してください。
| `sponsors.sponsor_sponsorship_preference_change` | スポンサー付きアカウントからメールの更新を受信するオプションが変更されました。 詳細については、「[スポンサーシップを管理する](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)」を参照してください。
| `sponsors.sponsor_sponsorship_tier_change` | スポンサーシップがアップグレードまたはダウングレードされました。 詳細については、「[スポンサーシップをアップグレードする](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)」と「[スポンサーシップをダウングレードする](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)」を参照してください。
| `sponsors.sponsored_developer_approve` | {% data variables.product.prodname_sponsors %} アカウントが承認されました。 詳細については、「[Organization の {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照してください。
| `sponsors.sponsored_developer_create` | {% data variables.product.prodname_sponsors %} アカウントが作成されました。 詳細については、「[Organization の {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照してください。
| `sponsors.sponsored_developer_disable` | {% data variables.product.prodname_sponsors %} アカウントが無効にされました。
| `sponsors.sponsored_developer_profile_update` | スポンサー付き組織プロファイルを編集します。 詳細については、「[{% data variables.product.prodname_sponsors %} のプロフィール詳細を編集する](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)」を参照してください。
| `sponsors.sponsored_developer_redraft` | {% data variables.product.prodname_sponsors %} アカウントが承認済みの状態からドラフト状態に戻されました。
| `sponsors.sponsored_developer_request_approval` | 承認のために {% data variables.product.prodname_sponsors %} の申請が送信されました。 詳細については、「[Organization の {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照してください。
| `sponsors.sponsored_developer_tier_description_update` | スポンサーシップ層の説明が変更されました。 詳細については、「[スポンサーシップ層を管理する](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)」を参照してください。
| `sponsors.update_tier_welcome_message` | 組織の {% data variables.product.prodname_sponsors %} 層のウェルカム メッセージが更新されました。
| `sponsors.update_tier_repository` | リポジトリの {% data variables.product.prodname_sponsors %} 層のアクセスが変更されました。
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `ssh_certificate_authority` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `ssh_certificate_authority.create` | 組織またはエンタープライズの SSH 証明機関が作成されました。 詳細については、「[Organization の SSH 認証局を管理する](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)」と「[Managing SSH certificate authorities for your enterprise (エンタープライズの SSH 認証局を管理する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)」を参照してください。
| `ssh_certificate_authority.destroy` | 組織またはエンタープライズの SSH 証明機関が削除されました。 詳細については、「[Organization の SSH 認証局を管理する](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)」と「[Managing SSH certificate authorities for your enterprise (エンタープライズの SSH 認証局を管理する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)」を参照してください。

## `ssh_certificate_requirement` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `ssh_certificate_requirement.enable` | メンバーが組織のリソースにアクセスするために SSH 証明書を使用する要件が有効にされました。 詳細については、「[Organization の SSH 認証局を管理する](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)」と「[Managing SSH certificate authorities for your enterprise (エンタープライズの SSH 認証局を管理する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)」を参照してください。
| `ssh_certificate_requirement.disable` | メンバーが組織のリソースにアクセスするために SSH 証明書を使用する要件が無効にされました。 詳細については、「[Organization の SSH 認証局を管理する](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)」と「[Managing SSH certificate authorities for your enterprise (エンタープライズの SSH 認証局を管理する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)」を参照してください。
{%- endif %}

{% ifversion sso-redirect %}
## `sso_redirect` カテゴリのアクション

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

| アクション | 説明 |
|--------|------------ |
`sso_redirect.enable` | ユーザーのシングル サインオン (SSO) への自動リダイレクトが有効になりました。 |
`sso_redirect.disable` | ユーザーのシングル サインオン (SSO) への自動リダイレクトが無効になりました。 |

詳細については、「[エンタープライズでのセキュリティ設定のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)」を参照してください。
{% endif %}

## `staff` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `staff.disable_repo`          | 組織{% ifversion ghes %}、リポジトリ、またはサイト{% else %}または{% endif %}管理者が、リポジトリとそのすべてのフォークに対するアクセスを無効にしました。
| `staff.enable_repo`           | 組織{% ifversion ghes %}、リポジトリ、またはサイト{% else %}または{% endif %}管理者が、リポジトリとそのすべてのフォークに対するアクセスを再び有効にしました。
{%- ifversion ghes or ghae %} | `staff.exit_fake_login`       | Enterprise 所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、{% data variables.product.product_name %} 上の偽装セッションを終了しました。
| `staff.fake_login`            | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}が、別のユーザーとして {% data variables.product.product_name %} にサインインしました。
{%- endif %} | `staff.repo_lock`             | 組織{% ifversion ghes %}、リポジトリ、またはサイト{% else %}またはリポジトリ{% endif %}管理者が、ユーザーのプライベート リポジトリをロックしました (一時的にフル アクセスを取得しました)。
| `staff.repo_unlock`           | 組織{% ifversion ghes %}、リポジトリ、またはサイト{% else %}またはリポジトリ{% endif %}管理者が、ユーザーのプライベート リポジトリのロックを解除しました (取得した一時的なアクセスを終了しました)。
{%- ifversion ghes %} | `staff.search_audit_log` | サイト管理者がサイト管理者監査ログの検索を実行しました。
{%- endif %} | `staff.set_domain_token_expiration` | {% ifversion ghes %}サイト管理者または {% endif %}GitHub スタッフが、組織または Enterprise ドメインの確認コードの有効期限を設定しました。 {% ifversion ghec or ghes %}詳しい情報については、「[Organization のためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」と「[Enterprise のドメインを検証または承認する](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」をご覧ください。{% endif %} {%- ifversion ghes %} | `staff.unlock`                | サイト管理者が、ユーザーのすべてのプライベート リポジトリのロックを解除しました (一時的にフル アクセスを取得しました)。
{%- endif %} | `staff.unverify_domain` | {% ifversion ghes %}サイト管理者または {% endif %}GitHub スタッフが、組織または Enterprise ドメインを検証しませんでした。 {% ifversion ghec or ghes %}詳しい情報については、「[Organization のためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」と「[Enterprise のドメインを検証または承認する](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」をご覧ください。{% endif %} | `staff.verify_domain` | {% ifversion ghes %}サイト管理者または {% endif %}GitHub スタッフが、Organaization または Enterprise ドメインを検証しました。 {% ifversion ghec or ghes %}詳しい情報については、「[Organization のためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」と「[Enterprise のドメインを検証または承認する](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」をご覧ください。{% endif %} {%- ifversion ghes %} | `staff.view_audit_log` | サイト管理者が、サイト管理者監査ログを表示しました。
{%- endif %}

## `team` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `team.add_member` | 組織のメンバーがチームに追加されました。 詳細については、「[Team への Organization メンバーの追加](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)」を参照してください。
| `team.add_repository` | チームには、リポジトリへのアクセスとアクセス許可が与えられました。
| `team.change_parent_team` | 子チームが作成されたか、子チームの親が変更されました。 詳細については、「[Organization 階層内で Team を移動する](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)」を参照してください。
| `team.change_privacy` | チームのプライバシー レベルが変更されました。 詳細については、「[Team の可視性の変更](/organizations/organizing-members-into-teams/changing-team-visibility)」を参照してください。
| `team.create` | ユーザアカウントまたはリポジトリが Team に追加されました。
| `team.delete` | ユーザアカウントまたはリポジトリが Team から削除されました。
| `team.destroy` | Teamが削除されました。
{%- ifversion ghec or ghes or ghae %} | `team.demote_maintainer` | ユーザーがチーム メンテナーからチーム メンバーに降格されました。
| `team.promote_maintainer` | ユーザーがチーム メンバーからチーム メンテナーに昇格しました。 詳細については、「[Organization メンバーをチーム メンテナに昇格させる](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer)」を参照してください。
{%- endif %} | `team.remove_member` | 組織のメンバーがチームから削除されました。 詳細については、「[Team から Organization メンバーを削除する](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)」を参照してください。
| `team.remove_repository` | リポジトリがチームの管理下ではなくなりました。
| `team.rename` | チームの名前が変更されました。
| `team.update_permission` | チームのアクセスが変更されました。
| `team.update_repository_permission` | チームのリポジトリに対するアクセス許可が変更されました。

## `team_discussions` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `team_discussions.clear` | 組織所有者が、組織またはエンタープライズに対してチーム ディスカッションを許可する設定をクリアしました。
| `team_discussions.disable` | 組織所有者が、組織のチーム ディスカッションを無効にしました。 詳細については、「[Organization の Team ディスカッションを無効にする](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)」を参照してください。
| `team_discussions.enable` | 組織所有者が、組織のチーム ディスカッションを有効にしました。

{%- ifversion ghec %}
## `team_sync_tenant` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `team_sync_tenant.disabled` | チームのテナントとの同期が無効になりました。 詳細については、「[Organization の Team 同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」と「[エンタープライズの Team 同期を管理する](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)」を参照してください。
| `team_sync_tenant.enabled` | チームのテナントとの同期が有効になりました。 詳細については、「[Organization の Team 同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」と「[エンタープライズの Team 同期を管理する](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)」を参照してください。
| `team_sync_tenant.update_okta_credentials` | チームのテナントとの同期に関する Okta の資格情報が変更されました。
{%- endif %}

{%- ifversion fpt or ghes %}
## `two_factor_authentication` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `two_factor_authentication.disabled` | ユーザー アカウントの [2 要素認証][2fa]が無効にされました。
| `two_factor_authentication.enabled`  | ユーザー アカウントの [2 要素認証][2fa]が有効にされました。
| `two_factor_authentication.password_reset_fallback_sms` | ワンタイム パスワード コードがユーザー アカウントのフォールバック電話番号に送信されました。
| `two_factor_authentication.recovery_codes_regenerated` | ユーザーアカウントの 2 要素回復コードが生成されました。
| `two_factor_authentication.sign_in_fallback_sms` | ワンタイム パスワード コードがユーザー アカウントのフォールバック電話番号に送信されました。
| `two_factor_authentication.update_fallback` | ユーザー アカウントの 2 要素認証のフォールバックが変更されました。
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
## `user` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `user.add_email`                  | ユーザアカウントにメールアドレスが追加されました。
| `user.async_delete`               | ユーザー アカウントを破棄し、最終的に `user.delete` イベントをトリガーする非同期ジョブが開始されました。
| `user.audit_log_export` | 監査ログ エントリがエクスポートされました。
| `user.block_user` | ユーザーが別のユーザー{% ifversion ghes %}またはサイト管理者{% endif %}によってブロックされました。
| `user.change_password`            | ユーザがパスワードを変更しました。
| `user.create`                     | 新規ユーザが作成されました。
| `user.creation_rate_limit_exceeded` | ユーザー アカウント、アプリケーション、issue、pull request、またはその他のリソースの作成速度が構成した速度制限を超えたか、ごく短時間で非常に多くのユーザーがフォローされました。
| `user.delete`                     | ユーザアカウントが非同期的ジョブによって削除されました。
{%- ifversion ghes %} | `user.demote`                     | サイト管理者が通常のユーザー アカウントに降格されました。
{%- endif %} | `user.destroy`                    | ユーザーが自分のアカウントを削除し、`user.async_delete` をトリガーしました。
| `user.failed_login`               | ユーザーが、正しくないユーザー名、パスワード、2 要素認証コードでサインインしようとしました。
| `user.flag_as_large_scale_contributor` | ユーザー アカウントに大規模な共同作成者とフラグが付けられました。 タイムアウトを防ぐため、そのユーザーが所有するパブリック リポジトリからのコントリビューションのみがコントリビューション グラフに表示されます。
| `user.forgot_password`            | ユーザーがサインイン ページでパスワードのリセットを要求しました。
| `user.hide_private_contributions_count` | ユーザーがプライベート コントリビューションの可視性を変更しました。 ユーザーのプロフィールに掲載されるプライベート リポジトリへのコントリビューション数が非表示になりました。 詳細については、「[プライベート コントリビューションをプロフィールで公開または非公開にする](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)」を参照してください。
| `user.lockout` | ユーザーが自分のアカウントからロックアウトされました。
| `user.login`                      | ユーザーがサインインしました。
{%- ifversion ghes or ghae %} | `user.mandatory_message_viewed`   | ユーザーが必須のメッセージを表示しました。 詳細については、「[Customizing user messages for your enterprise (エンタープライズのユーザー メッセージをカスタマイズする)](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)」を参照してください。
{%- endif %} | `user.minimize_comment` | ユーザーが作成したコメントが最小化されました。
{%- ifversion ghes %} | `user.promote`                    | 通常のユーザー アカウントがサイト管理者に昇格されました。
{%- endif %} | `user.recreate` | ユーザーのアカウントが復元されました。
| `user.remove_email`               | ユーザー アカウントからメール アドレスが削除されました。
| `user.remove_large_scale_contributor_flag` | ユーザー アカウントには、大規模な共同作成者というフラグが付かなくなりました。
| `user.rename`                     | ユーザー名が変更されました。
| `user.reset_password` | ユーザーが自分のアカウント パスワードをリセットしました。
| `user.show_private_contributions_count` | ユーザーがプライベート コントリビューションの可視性を変更しました。 ユーザーのプロフィールに掲載されるプライベート リポジトリへのコントリビューション数が表示されるようになりました。 詳細については、「[プライベート コントリビューションをプロフィールで公開または非公開にする](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)」を参照してください。
| `user.sign_in_from_unrecognized_device` | 認識できないデバイスからユーザーがサインインしました。
| `user.sign_in_from_unrecognized_device_and_location` | 認識できないデバイスと場所からユーザーがサインインしました。
| `user.sign_in_from_unrecognized_location` | 認識できない場所からユーザーがサインインしました。
| `user.suspend`                    | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}によってユーザー アカウントが一時停止されました。
| `user.two_factor_challenge_failure` | ユーザー アカウントに対して発行された 2 要素認証チャレンジが失敗しました。
| `user.two_factor_challenge_success` | ユーザー アカウントに対して発行された 2 要素認証チャレンジが成功しました。
| `user.two_factor_recover` | ユーザーが 2 要素認証回復コードを使用しました。
| `user.two_factor_recovery_codes_downloaded` | ユーザーが自分のアカウントの 2 要素認証回復コードをダウンロードしました。
| `user.two_factor_recovery_codes_printed` | ユーザーが自分のアカウントの 2 要素認証回復コードを出力しました。
| `user.two_factor_recovery_codes_viewed` | ユーザーが自分のアカウントの 2 要素認証回復コードを表示しました。
| `user.two_factor_requested`       | ユーザーが 2 要素認証コードの入力を求められました。
| `user.unblock_user` | ユーザーに対する別のユーザー{% ifversion ghes %}またはサイト管理者{% endif %}によるブロックが解除されました。
| `user.unminimize_comment` | ユーザーが作成したコメントの最小化が解除されました。
| `user.unsuspend` | エンタープライズ所有者{% ifversion ghes %}またはサイト管理者{% endif %}によるユーザー アカウントの一時停止が解除されました。
{%- endif %}

{%- ifversion ghec or ghes %}
## `user_license` カテゴリのアクション

| アクション | 説明
|--------|-------------
| `user_license.create` | エンタープライズ内のユーザーのシート ライセンスが作成されました。
| `user_license.destroy` | エンタープライズ内のユーザーのシート ライセンスが削除されました。
| `user_license.update` | エンタープライズ内のユーザーのシート ライセンスの種類が作成されました。
{%- endif %}

## `workflows` カテゴリのアクション

{% data reusables.audit_log.audit-log-events-workflows %}
