---
title: Organization の Audit log をレビューする
intro: 'Audit log により、Organization の管理者は Organization のメンバーによって行われたアクションをすばやくレビューできます。 これには、誰がいつ何のアクションを実行したかなどの詳細が残されます。'
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Audit log にアクセスする

Audit log には、過去 90 日間に行われた行動が一覧表示されます。 Organization の Audit log にアクセスできるのはオーナーのみです。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

### Audit log を検索する

{% data reusables.audit_log.audit-log-search %}

#### 実行されたアクションに基づく検索

特定のイベントを検索するには、クエリで `action` 修飾子を使用します。 Audit log に一覧表示されるアクションは以下のカテゴリに分類されます。

| カテゴリー名                                            | 説明                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| `アカウント`                                           | Organization アカウントに関連するすべてのアクティビティが対象です。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `支払い`                                             | Organization の支払いに関連するすべてのアクティビティが対象です。{% endif %}
| `discussion_post`                                 | Team ページに投稿されたディスカッションに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                      |
| `discussion_post_reply`                           | Team ページに投稿されたディスカッションへの返答に関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                  |
| `フック`                                             | webhookに関連するすべてのアクティビティを含みます。                                                                                                                                                                                                                                                                                                                                                                                     |
| `integration_installation_request`                | Organization 内で使用するインテグレーションをオーナーが承認するよう求める、 Organization メンバーからのリクエストに関連するすべてのアクティビティが対象です。 |{% if currentVersion == "free-pro-team@latest" %}
| `marketplace_agreement_signature`                 | {% data variables.product.prodname_marketplace %} Developer Agreement の署名に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                        |
| `marketplace_listing`                             | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `members_can_create_pages`                        | Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を無効化することに関連するすべてのアクティビティが対象です。 詳細については、「[Organization について {% data variables.product.prodname_pages %} サイトの公開を制限する](/github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization)」を参照してください。                                                                               |{% endif %}
| `org`                                             | Organization メンバーシップに関連するすべてのアクティビティが対象です。{% if currentVersion == "free-pro-team@latest" %}
| `org_credential_authorization`                    | Contains all activities related to authorizing credentials for use with SAML single sign-on.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| `organization_label`                              | Organization のリポジトリのデフォルトラベルに関連するすべてのアクティビティが対象です。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `payment_method`                                  | Organization の GitHub への支払い方法に関連するすべてのアクティビティが対象です。{% endif %}
| `profile_picture`                                 | Organization のプロフィール画像に関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                      |
| `project`                                         | プロジェクト ボードに関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                                                                                       |
| `protected_branch`                                | 保護されたブランチ関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                                    |
| `repo`                                            | Organization によって所有されていリポジトリに関連するすべてのアクティビティが対象です。{% if currentVersion == "free-pro-team@latest" %}
| `repository_content_analysis`                     | [プライベート リポジトリに対するデータの使用を有効または無効にする](/articles/about-github-s-use-of-your-data)に関連するすべての活動が対象です。                                                                                                                                                                                                                                                                                                                   |
| `repository_dependency_graph`                     | Contains all activities related to [enabling or disabling the dependency graph for a private repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository).{% endif %}{% if currentVersion != "github-ae@latest" %}
| `repository_vulnerability_alert`                  | Contains all activities related to [{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `sponsors`                                        | Contains all events related to sponsor buttons (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `Team`                                            | Organization の Team に関連するすべてのアクティビティが対処です。{% endif %}
| `team_discussions`                                | Organization の Team ディスカッションに関連するすべてのアクティビティが対象です。                                                                                                                                                                                                                                                                                                                                                                |

次の用語を使用すれば、特定の一連の行動を検索できます。 例:

  * `action:team`はteamカテゴリ内でグループ化されたすべてのイベントを検索します。
  * `-action:hook` は webhook カテゴリ内のすべてのイベントを除外します。

各カテゴリには、フィルタリングできる一連の関連イベントがあります。 例:

  * `action:team.create`はTeamが作成されたすべてのイベントを検索します。
  * `-action:hook.events_changed` は webhook の変更されたすべてのイベントを除外します。

以下リストで、使用できるカテゴリと関連するイベントを説明します。

{% if currentVersion == "free-pro-team@latest" %}- [`account` カテゴリ](#the-account-category)
- [`billing` カテゴリ](#the-billing-category){% endif %}
- [`discussion_post` カテゴリ](#the-discussion_post-category)
- [`discussion_post_reply` カテゴリ](#the-discussion_post_reply-category)
- [`hook` カテゴリ](#the-hook-category)
- [`integration_installation_request` カテゴリ](#the-integration_installation_request-category)
- [`issue` カテゴリ](#the-issue-category){% if currentVersion == "free-pro-team@latest" %}
- [`marketplace_agreement_signature` カテゴリ](#the-marketplace_agreement_signature-category)
- [The `marketplace_listing` category](#the-marketplace_listing-category){% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- [`members_can_create_pages` カテゴリ](#the-members_can_create_pages-category){% endif %}
- [`org` カテゴリ](#the-org-category){% if currentVersion == "free-pro-team@latest" %}
- [The `org_credential_authorization` category](#the-org_credential_authorization-category){% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- [`organization_label` カテゴリ](#the-organization_label-category){% endif %}
- [`oauth_application` カテゴリ](#the-oauth_application-category){% if currentVersion == "free-pro-team@latest" %}
- [`payment_method` カテゴリ](#the-payment_method-category){% endif %}
- [`profile_picture` カテゴリ](#the-profile_picture-category)
- [`project` カテゴリ](#the-project-category)
- [`protected_branch` カテゴリ](#the-protected_branch-category)
- [`repo` カテゴリ](#the-repo-category){% if currentVersion == "free-pro-team@latest" %}
- [`repository_content_analysis` カテゴリ](#the-repository_content_analysis-category)
- [The `repository_dependency_graph` category](#the-repository_dependency_graph-category){% endif %}{% if currentVersion != "github-ae@latest" %}
- [The `repository_vulnerability_alert` category](#the-repository_vulnerability_alert-category){% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [The `sponsors` category](#the-sponsors-category){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- [`team` カテゴリ](#the-team-category){% endif %}
- [`team_discussions` カテゴリ](#the-team_discussions-category)

{% if currentVersion == "free-pro-team@latest" %}

##### `account` カテゴリ

| アクション                         | 説明                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `billing_plan_change`         | Organization の[支払いサイクル](/articles/changing-the-duration-of-your-billing-cycle)が変わるときにトリガーされます。                                                         |
| `plan_change`                 | Organization の[プラン](/articles/about-billing-for-github-accounts)が変わるときにトリガーされます。                                                                       |
| `pending_plan_change`         | Organization のオーナーまたは支払いマネージャーが[支払い済みサブスクリプションをキャンセルまたはダウングレードする](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/)ときにトリガーされます。 |
| `pending_subscription_change` | [{% data variables.product.prodname_marketplace %} の無料トライアルが始まるか期限切れになる](/articles/about-billing-for-github-marketplace/)ときにトリガーされます。                  |

##### `billing` カテゴリ

| アクション                 | 説明                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | Organization が[{% data variables.product.prodname_dotcom %} の支払い方法を変更する](/articles/adding-or-editing-a-payment-method)ときにトリガーされます。 |
| `change_email`        | Organization の[支払い請求先メール アドレス](/articles/setting-your-billing-email)が変わるときにトリガーされます。                                               |

{% endif %}

##### `discussion_post` カテゴリ

| アクション     | 説明                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------ |
| `update`  | [Team ディスカッションの投稿が編集される](/articles/managing-disruptive-comments/#editing-a-comment)ときにトリガーされます。  |
| `destroy` | [Team ディスカッションの投稿が削除される](/articles/managing-disruptive-comments/#deleting-a-comment)ときにトリガーされます。 |

##### `discussion_post_reply` カテゴリ

| アクション     | 説明                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `update`  | [Team ディスカッションの投稿への返答が編集される](/articles/managing-disruptive-comments/#editing-a-comment)ときにトリガーされます。  |
| `destroy` | [Team ディスカッションの投稿への返答が削除される](/articles/managing-disruptive-comments/#deleting-a-comment)ときにトリガーされます。 |

##### `hook` カテゴリ

| アクション            | 説明                                                                              |
| ---------------- | ------------------------------------------------------------------------------- |
| `create`         | Organization が所有するリポジトリに[新たなフックが追加された](/articles/creating-webhooks)ときにトリガーされます。 |
| `config_changed` | 既存のフックに変更された設定がある場合にトリガーされます。                                                   |
| `destroy`        | 既存のフックがリポジトリから削除されたときにトリガーされます。                                                 |
| `events_changed` | フックでのイベントが変更された場合にトリガーされます。                                                     |

##### `integration_installation_request` カテゴリ

| アクション    | 説明                                                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Organization のメンバーが、Organization 内で使用するために、Organization のオーナーにインテグレーションをインストールすることを要求するときにトリガーされます。                                |
| `close`  | Organization 内で使用するためにインテグレーションをインストールする要求が、Organization のオーナーにより承認または拒否されるか、あるいは要求を公開した Organization のメンバーによりキャンセルされるときにトリガーされます。 |

##### `issue` カテゴリ

| アクション     | 説明                                                                                     |
| --------- | -------------------------------------------------------------------------------------- |
| `destroy` | リポジトリで管理者権限を所有する Organization のオーナーまたは誰かが、Organization が所有するリポジトリから問題を削除するときにトリガーされます。 |

{% if currentVersion == "free-pro-team@latest" %}

##### `marketplace_agreement_signature` カテゴリ

| アクション    | 説明                                                                                      |
| -------- | --------------------------------------------------------------------------------------- |
| `create` | {% data variables.product.prodname_marketplace %} Developer Agreement に署名するときにトリガーされます。 |

##### `marketplace_listing` カテゴリ

| アクション     | 説明                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| `承認`      | 一覧表を {% data variables.product.prodname_marketplace %}に掲載することが承認されるときにトリガーされます。     |
| `create`  | {% data variables.product.prodname_marketplace %} で自分のアプリケーションの一覧表を作成するときにトリガーされます。 |
| `delist`  | 一覧表が {% data variables.product.prodname_marketplace %} から削除されるときにトリガーされます。          |
| `redraft` | 一覧表がドラフト状態に戻されるときにトリガーされます。                                                         |
| `reject`  | 一覧表が {% data variables.product.prodname_marketplace %} に掲載することを認められないときにトリガーされます。   |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

##### `members_can_create_pages` カテゴリ

詳細については、「[Organization について {% data variables.product.prodname_pages %} サイトの公開を制限する](/github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization)」を参照してください。

| アクション     | 説明                                                                                                             |
|:--------- |:-------------------------------------------------------------------------------------------------------------- |
| `enable`  | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を有効化するときトリガーされます。 |
| `disable` | Organizationのオーナーが Organization のリポジトリについて {% data variables.product.prodname_pages %} サイトの公開を無効化するときトリガーされます。 |

{% endif %}

##### `org` カテゴリ

| アクション                                                                                                          | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest"%}
| `audit_log_export`                                                                                             | Organization の管理者が [Organization の Audit log のエクスポートを作成する](#exporting-the-audit-log)ときにトリガーされます。 エクスポートにクエリが含まれていた場合、ログには使用されたクエリとそのクエリに一致する Audit log エントリの数が一覧表示されます。                                                                                                                                                                                                                                                                                                                      |
| `block_user`                                                                                                   | Organization のオーナーが[Organization のリポジトリにユーザーがアクセスするのをブロックする](/articles/blocking-a-user-from-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                   |
| `cancel_invitation`                                                                                            | Organization の招待が取り消されている場合にトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                                        |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`                                                                                        | Triggered when a organization admin [creates a {% data variables.product.prodname_actions %} secret](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization).{% endif %}                                                                                                                                                                                                                                                                                        |{% if currentVersion == "free-pro-team@latest"%}
| `disable_oauth_app_restrictions`                                                                               | オーナーが Organization に対して[{% data variables.product.prodname_oauth_app %} のアクセス制限を無効にする](/articles/disabling-oauth-app-access-restrictions-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                |
| `disable_saml`                                                                                                 | Organization の管理者が Organization に対して SML シングルサインオンを無効にするときにトリガーされます。{% endif %}
| `disable_member_team_creation_permission`                                                                      | Organization のオーナーがオーナーに Team 作成を制限するときにトリガーされます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 |{% if currentVersion != "github-ae@latest" %}
| `disable_two_factor_requirement`                                                                               | Triggered when an owner disables a two-factor authentication requirement for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable_oauth_app_restrictions`                                                                                | オーナーが Organization に対して[{% data variables.product.prodname_oauth_app %} のアクセス制限を有効にする](/articles/enabling-oauth-app-access-restrictions-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                 |
| `enable_saml`                                                                                                  | Organization の管理者が Organization に対して [SAML シングルサインオン を有効にする](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)ときにトリガーされます。{% endif %}
| `enable_member_team_creation_permission`                                                                       | メンバーが Team を作成するのを Organizationのオーナーが許可するときにトリガーされます。 詳細は「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照してください。 |{% if currentVersion != "github-ae@latest" %}
| `enable_two_factor_requirement`                                                                                | Triggered when an owner requires two-factor authentication for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}
| `invite_member`                                                                                                | [新しいユーザーがOrganization に参加するよう招待](/articles/adding-organization-members-to-a-team)されたにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `oauth_app_access_approved`                                                                                    | オーナーが [{% data variables.product.prodname_oauth_app %} へのアクセスを許可する](/articles/approving-oauth-apps-for-your-organization/)ときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                     |
| `oauth_app_access_denied`                                                                                      | オーナーが Organization への[以前に承認した {% data variables.product.prodname_oauth_app %} のアクセス権を無効にする](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)ときにトリガーされます。                                                                                                                                                                                                                                                                                                 |
| `oauth_app_access_requested`                                                                                   | Triggered when an organization member requests that an owner grant an {% data variables.product.prodname_oauth_app %} access to your organization.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`                                                                                  | Triggered when an organization owner [registers a new self-hosted runner](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization).                                                                                                                                                                                                                                                                                                      |
| `remove_actions_secret`                                                                                        | Triggered when a organization admin removes a {% data variables.product.prodname_actions %} secret.{% endif %}{% if currentVersion == "free-pro-team@latest"%}
| `remove_billing_manager`                                                                                       | [オーナーが Organization から支払いマネージャーを削除する](/articles/removing-a-billing-manager-from-your-organization/)とき、または [Organization で 2 要素認証が義務付けられている](/articles/requiring-two-factor-authentication-in-your-organization)が、支払いマネージャーが 2 要素認証を使用しないか 2 要素認証を無効にしているときにトリガーされます。 |{% endif %}
| `remove_member`                                                                                                | Triggered when an [owner removes a member from an organization](/articles/removing-a-member-from-your-organization/){% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disables 2FA{% endif %}. Organization から [Organization のメンバーが自身を削除](/articles/removing-yourself-from-an-organization/)するときにもトリガーされます。 |
| `remove_outside_collaborator`                                                                                  | Triggered when an owner removes an outside collaborator from an organization{% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an outside collaborator does not use 2FA or disables 2FA{% endif %}. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_self_hosted_runner`                                                                                    | Triggered when an organization owner [removes a self-hosted runner](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).                                                                                                                                                                                                                                                                                                                  |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `revoke_external_identity`                                                                                     | Organization のオーナーがメンバーのリンクされたアイデンティティを取り消すときにトリガーされます。 詳細は、「[組織へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。                                                                                                                                                                                                                          |
| `revoke_sso_session`                                                                                           | Organization のオーナーがメンバーの SAML セッションを取り消すときにトリガーされます。 詳細は、「[組織へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。                                                                                                                                                                                                                             |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `runner_group_created`                                                                                         | Triggered when an organization admin [creates a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization).                                                                                                                                                                                                                                                                    |
| `runner_group_removed`                                                                                         | Triggered when an organization admin removes a self-hosted runner group.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `runner_group_renamed`                                                                                         | Triggered when an organization admin renames a self-hosted runner group.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `runner_group_runners_added`                                                                                   | Triggered when an organization admin [adds a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).                                                                                                                                                                                                                                                                                   |
| `runner_group_runners_removed`                                                                                 | Triggered when an organization admin removes a self-hosted runner from a group.                                                                                                                                                                                                                                                                                                                                                                                                              |{% endif %}{% if currentVersion == "free-pro-team@latest"%}
| `unblock_user`                                                                                                 | Organizationのオーナーが[ Organization からユーザりブロックを解除](/articles/unblocking-a-user-from-your-organization)するときにトリガーされます。{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`                                                                                        | Triggered when a organization admin updates a {% data variables.product.prodname_actions %} secret.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `update_new_repository_default_branch_setting`                                                                 | オーナーが Organization の新しいリポジトリのデフォルトブランチの名前を変更するときにトリガーされます。 詳しい情報については、「[Organization のリポジトリのデフォルブランチ名を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)」を参照してください。{% endif %}
| `update_default_repository_permission`                                                                         | オーナーが Organization のメンバーのデフォルトリポジトリの権限レベルを変更するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `update_member`                                                                                                | オーナーがユーザーのロールをオーナーからメンバーに、またはメンバーからオーナーに変更するときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `update_member_repository_creation_permission`                                                                 | オーナーが Organization のメンバーのリポジトリ作成権限を変更するときにトリガーされます。{% if currentVersion == "free-pro-team@latest" %}
| `update_saml_provider_settings`                                                                                | Organization の SAML プロバイダ設定が更新されるときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `update_terms_of_service`                                                                                      | Organization が標準利用規約と企業向け利用規約を切り替えるときにトリガーされます。 詳細は「[企業利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### `org_credential_authorization` カテゴリ

| アクション          | 説明                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grant`        | [SAML シングルサインオンに使用するクレデンシャルをメンバーが認可する](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)ときにトリガーされます。                                  |
| `deauthorized` | [SAML シングルサインオンに使用するクレデンシャルの認可をメンバーが取り消す](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)ときにトリガーされます。                               |
| `revoke`       | オーナーが[認可されたクレデンシャルを取り消す](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)ときにトリガーされます。 |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
##### `organization_label` カテゴリ

| アクション     | 説明                         |
| --------- | -------------------------- |
| `create`  | デフォルトラベルが作成されるときにトリガーされます。 |
| `update`  | デフォルトラベルが編集されるときにトリガーされます。 |
| `destroy` | デフォルトラベルが削除されるときにトリガーされます。 |

{% endif %}

##### `oauth_application` カテゴリ

| アクション           | 説明                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ |
| `create`        | 新たな {% data variables.product.prodname_oauth_app %} が作成されるときにトリガーされます。                   |
| `destroy`       | 既存の {% data variables.product.prodname_oauth_app %} が削除されるときにトリガーされます。                   |
| `reset_secret`  | {% data variables.product.prodname_oauth_app %} のクライアント シークレットがリセットされるときにトリガーされます。       |
| `revoke_tokens` | {% data variables.product.prodname_oauth_app %} のユーザートークンが取り消されるときにトリガーされます。             |
| `移譲`            | 既存の {% data variables.product.prodname_oauth_app %} が新しい Organization に移譲されるときにトリガーされます。 |

{% if currentVersion == "free-pro-team@latest" %}

##### `payment_method` カテゴリ

| アクション    | 説明                                                                   |
| -------- | -------------------------------------------------------------------- |
| `clear`  | ファイル上の支払い方法が[削除される](/articles/removing-a-payment-method)ときにトリガーされます。 |
| `create` | 新しいクレジット カードや PayPal アカウントなど、新たな支払い方法が追加されるときにトリガーされます。              |
| `update` | 既存の支払い方法が更新されるときにトリガーされます。                                           |

{% endif %}

##### `profile_picture` カテゴリ
| アクション  | 説明                                           |
| ------ | -------------------------------------------- |
| update | Organization のプロファイル写真を設定または更新するときにトリガーされます。 |

##### `project` カテゴリ

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

##### `protected_branch` カテゴリ

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

##### `repo` カテゴリ

| アクション                                 | 説明                                                                                                                                                                                                                                       |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | Organization が所有するリポジトリが["プライベート" から "パブリック" に切り替えられる](/articles/making-a-private-repository-public) (またはその逆) ときにトリガーされます。                                                                                                               |
| `add_member`                          | ユーザーが[リポジトリへのコラボレーションアクセスへの招待](/articles/inviting-collaborators-to-a-personal-repository)を受諾するときにトリガーされます。                                                                                                                               |
| `add_topic`                           | リポジトリの管理者がリポジトリに[トピックを追加する](/articles/classifying-your-repository-with-topics)ときにトリガーされます。                                                                                                                                               |
| `archived`                            | Triggered when a repository admin [archives a repository](/articles/about-archiving-repositories).{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `config.disable_anonymous_git_access` | 公開リポジトリで[匿名の Git 読み取りアクセスが無効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                         |
| `config.enable_anonymous_git_access`  | 公開リポジトリで[匿名の Git 読み取りアクセスが有効になる](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)ときにトリガーされます。                                                                                         |
| `config.lock_anonymous_git_access`    | リポジトリの[匿名の Git 読み取りアクセス設定がロックされる](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。                                                                    |
| `config.unlock_anonymous_git_access`  | リポジトリの[匿名の Git 読み取りアクセス設定がロック解除される](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)ときにトリガーされます。{% endif %}
| `create`                              | Triggered when [a new repository is created](/articles/creating-a-new-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`               | Triggered when a repository admin [creates a {% data variables.product.prodname_actions %} secret](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).{% endif %}
| `destroy`                             | Triggered when [a repository is deleted](/articles/deleting-a-repository).{% if currentVersion == "free-pro-team@latest" %}
| `disable`                             | リポジトリが無効になるときにトリガーされます ([残高不足](/articles/unlocking-a-locked-account)などの場合)。{% endif %}
| `enable`                              | Triggered when a repository is reenabled.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_actions_secret`               | Triggered when a repository admin removes a {% data variables.product.prodname_actions %} secret.{% endif %}
| `remove_member`                       | Triggered when a user is [removed from a repository as a collaborator](/articles/removing-a-collaborator-from-a-personal-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`         | Triggered when a repository admin [registers a new self-hosted runner](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).                                                        |
| `remove_self_hosted_runner`           | Triggered when a repository admin [removes a self-hosted runner](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).                                                                    |{% endif %}
| `remove_topic`                        | リポジトリの管理者がリポジトリからトピックを削除するときにトリガーされます。                                                                                                                                                                                                   |
| `rename`                              | [リポジトリの名前が変更される](/articles/renaming-a-repository)ときにトリガーされます。                                                                                                                                                                            |
| `移譲`                                  | [リポジトリが移譲される](/articles/how-to-transfer-a-repository)ときにトリガーされます。                                                                                                                                                                        |
| `transfer_start`                      | リポジトリの移譲が行われようとしているときにトリガーされます。                                                                                                                                                                                                          |
| `unarchived`                          | Triggered when a repository admin unarchives a repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`               | Triggered when a repository admin updates a {% data variables.product.prodname_actions %} secret.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

##### `repository_content_analysis` カテゴリ

| アクション     | 説明                                                                                                                                                                                                          |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enable`  | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対してデータ使用設定を有効にする](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)ときにトリガーされます。 |
| `disable` | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対してデータ使用設定を無効にする](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)ときにトリガーされます。 |

##### `repository_dependency_graph` カテゴリ

| アクション     | 説明                                                                                                                                                                                      |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enable`  | リポジトリのオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対して依存グラフを有効にする](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository)ときにトリガーされます。 |
| `disable` | リポジトリのオーナーまたはリポジトリへの管理者アクセス権を所有する人が[プライベート リポジトリに対して依存グラフを無効にする](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository)ときにトリガーされます。 |

{% endif %}
{% if currentVersion != "github-ae@latest" %}
##### `repository_vulnerability_alert` カテゴリ

| アクション                                                                                                                                                                                                                                                                     | 説明                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                                                                                                                                                                                                                                                                  | {% data variables.product.product_name %} が特定のリポジトリで[脆弱な依存性に対する{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}セキュリティ{% endif %}アラート](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)を作成するときにトリガーされます。 |
| `解決`                                                                                                                                                                                                                                                                      | リポジトリへの書き込みアクセス権を所有する人が、プロジェクトの依存関係で、[脆弱性を更新して解決するために変更をプッシュする](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)ときにトリガーされます。                                                                                                                                                                                                 |
| `却下`                                                                                                                                                                                                                                                                      | Organization のオーナーまたはリポジトリへの管理者アクセス権を所有する人は                                                                                                                                                                                                                                                                                                                     |
| 脆弱な依存関係についての {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}セキュリティ{% endif %}アラートを却下するときにトリガーされます。{% if currentVersion == "free-pro-team@latest" %} |                                                                                                                                                                                                                                                                                                                                                                 |
| `authorized_users_teams`                                                                                                                                                                                                                                                  | Organization のオーナーまたはリポジトリへの管理者権限を所有するメンバーが、リポジトリ内の脆弱な依存関係に対する[{% data variables.product.prodname_dependabot_short %}{% endif %}アラートを受信する権限が与えられた人または Team のリストを更新する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-github-dependabot-alerts)ときにトリガーされます。                                 |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### `sponsors` カテゴリ

| アクション                               | 説明                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| repo_funding_link_button_toggle | リポジトリでスポンサーボタンの表示を有効化または無効化したときにトリガーされます (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照) |
| repo_funding_links_file_action  | リポジトリで FUNDING ファイルを変更したときにトリガーされます (「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)      |
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
##### `team` カテゴリ

| アクション                | 説明                                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| `add_member`         | Organization のメンバーが[Team に追加される](/articles/adding-organization-members-to-a-team)ときにトリガーされます。        |
| `add_repository`     | リポジトリの管理が Team に任せられるときにトリガーされます。                                                                    |
| `change_parent_team` | 子チームが作成されるとき、または[子チームの親が変更される](/articles/moving-a-team-in-your-organization-s-hierarchy)ときにトリガーされます。 |
| `change_privacy`     | Team のプライバシー レベルが変更されるときにトリガーされます。                                                                   |
| `create`             | 新たな Team が作成されるときにトリガーされます。                                                                          |
| `destroy`            | Team が Organization から削除されるときにトリガーされます。                                                              |
| `remove_member`      | Organization のメンバーが[Team から削除される](/articles/removing-organization-members-from-a-team)ときにトリガーされます。   |
| `remove_repository`  | リポジトリが Team の管理下でなくなるときにトリガーされます。                                                                    |
{% endif %}

##### `team_discussions` カテゴリ

| アクション     | 説明                                                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable` | Organization のオーナーが Organization の Team ディスカッションを無効にするときにトリガーされます。 詳しい情報については [Organization の Team ディスカッションの無効化](/articles/disabling-team-discussions-for-your-organization)を参照してください。 |
| `enable`  | Organization のオーナーが Organization の Team ディスカッションを有効にするときにトリガーされます。                                                                                                                     |

#### アクション時間に基づく検索

`created` 修飾子を使用して、行われた日時に基づいて Audit log 内の行動をフィルタリングします。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %} 例:

  * `created:2014-07-08` は、2014 年 7 月 8 日に発生したイベントをすべて検索します。
  * `created:>=2014-07-08` は、2014 年 7 月 8 日かそれ以降に生じたすべてのイベントを検索します。
  * `created:<=2014-07-08`は、2014 年 7 月 8 日かそれ以前に生じたすべてのイベントを検索します。
  * `created:2014-07-01..2014-07-31`は、2014 年 7 月に起きたすべてのイベントを検索します。

Audit log には過去 90 日間のデータが存在しますが、`created` 修飾子を使用すればそれより前のイベントを検索できます。

#### 場所に基づく検索

修飾子 `country` を使用すれば、発信元の国に基づいて Audit log 内の行動をフィルタリングできます。 国の 2 文字のショートコードまたはフル ネームを使用できます。 名前に空白がある国は引用符で囲む必要があることに注意してください。 例:

  * `country:de` は、ドイツで発生したイベントをすべて検索します。
  * `country:Mexico` はメキシコで発生したすべてのイベントを検索します。
  * `country:"United States"` はアメリカ合衆国で発生したすべてのイベントを検索します。

{% if currentVersion == "free-pro-team@latest" %}
### Audit log をエクスポートする

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

### Audit log API を使用する

{% note %}

**メモ**: Audit log API は、{% data variables.product.prodname_enterprise %} を使用している Organization が利用できます。 {% data reusables.gated-features.more-info-org-products %}

{% endnote %}

IP の安全性を保ち、Organization のコンプライアンスを守るため、Audit log API を使って、Audit log データのコピーを保存し、モニタリングできます。
* Organization またはリポジトリの設定へのアクセス
* 権限の変更
* Organization、リポジトリ、または Team におけるユーザの追加や削除
* 管理者に昇格しているユーザ
* GitHub App の権限の変更

GraphQL のレスポンスには、90 日から 120 日までのデータを含めることができます。

たとえば、GraphQL にリクエストして、Organization に新しく追加された Organization メンバー全員を表示できます。 詳細は「[GraphQL API Audit Log](/graphql/reference/interfaces#auditentry/)」を参照してください。

### 参考リンク

- "[Organization を安全に保つ](/articles/keeping-your-organization-secure)"
