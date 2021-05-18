---
title: 監査されたアクション
intro: 監査ログでいろんなアクションを検索することができます。
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
versions:
  enterprise-server: '*'
  github-ae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Security
---

#### 認証

| アクション                                | 説明                                                                                                    |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `oauth_access.create`                | ユーザアカウントに[OAuth アクセストークン][] が[作成][generate token] されました。                                              |
| `oauth_access.destroy`               | [OAuth アクセストークン][] がユーザアカウントから削除されました。                                                                |
| `oauth_application.destroy`          | [OAuth application][]がユーザまたは Organization のアカウントから削除されました。                                            |
| `oauth_application.reset_secret`     | [OAuth アプリケーション][]の秘密鍵がリセットされました。                                                                     |
| `oauth_application.transfer`         | [OAuth アプリケーション][]が別のユーザ、または Organization のアカウントへ移されました。                                              |
| `public_key.create`                  | SSHキーがユーザアカウントに[追加][add key]されたか[デプロイキー][]がリポジトリに追加されました。                                             |
| `public_key.delete`                  | SSHキーがユーザアカウントから削除されたか[デプロイキー][]がリポジトリから削除されました。                                                      |
| `public_key.update`                  | ユーザアカウントの SSH キーまたはリポジトリの[デプロイキー][]が更新されました。{% if enterpriseServerVersions contains currentVersion %}
| `two_factor_authentication.enabled`  | ユーザアカウントの[二段階認証][2fa]が有効化されました。                                                                       |
| `two_factor_authentication.disabled` | ユーザアカウントの [2 要素認証][2fa]が無効になりました。{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
#### {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

#### フック

| アクション                 | 説明                       |
| --------------------- | ------------------------ |
| `hook.create`         | リポジトリに新規フックが追加されました。     |
| `hook.config_changed` | フックのコンフィグレーションが変更されました。  |
| `hook.destroy`        | フックが削除されました。             |
| `hook.events_changed` | フックの設定されているイベントが変更されました。 |

#### Enterprise 設定

| アクション                                                   | 説明                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `business.advanced_security_policy_update`              | A site admin creates, updates, or removes a policy for {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)."{% endif %}
| `business.clear_members_can_create_repos`               | サイトアドミンは、Enterprise 内の Organization でのリポジトリ作成の制限を解除します。 詳しい情報については、「[Enterprise でのリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)」を参照してください。                                                                                                            |
| `business.update_member_repository_creation_permission` | サイトアドミンは、Enterprise 内の Organization でのリポジトリの作成を制限します。 詳しい情報については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)」を参照してください。{% if enterpriseServerVersions contains currentVersion %}
| `enterprise.config.lock_anonymous_git_access`           | サイトアドミンは匿名の Git 読み取りアクセスをロックして、リポジトリ管理者が Enterprise 内のリポジトリの既存の匿名 Git 読み取りアクセス設定を変更できないようにします。 詳しい情報については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)」を参照してください。                                                                         |
| `enterprise.config.unlock_anonymous_git_access`         | サイトアドミンは匿名 Git 読み取りアクセスのロックを解除して、リポジトリ管理者が Enterprise 内のリポジトリの既存の匿名 Git 読み取りアクセス設定を変更できるようにします。 詳しい情報については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)」を参照してください。{% endif %}

{% if currentVersion == "github-ae@latest" %}

#### IP 許可リスト

|                                         名前 | 説明                                                                                      |
| ------------------------------------------:| --------------------------------------------------------------------------------------- |
|               `ip_allow_list_entry.create` | IP アドレスが IP 許可リストに追加されました。                                                              |
|               `ip_allow_list_entry.update` | IP アドレスまたはその説明が変更されました。                                                                 |
|              `ip_allow_list_entry.destroy` | IP アドレスが IP 許可リストから削除されました。                                                             |
|                     `ip_allow_list.enable` | IP 許可リストが有効化されました。                                                                      |
|  `ip_allow_list.enable_for_installed_apps` | インストールされている {% data variables.product.prodname_github_apps %} に対して IP 許可リストが有効化されました。 |
|                    `ip_allow_list.disable` | IP 許可リストが無効化されました。                                                                      |
| `ip_allow_list.disable_for_installed_apps` | インストールされている {% data variables.product.prodname_github_apps %} に対して IP 許可リストが無効化されました。 |

{% endif %}

#### Issue およびプルリクエスト

| アクション                                | 説明                                                                                                                   |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `issue.update`                       | Issue のテキスト本体（最初のコメント）が変更されました。                                                                                      |
| `issue_comment.update`               | Issue （最初以外）のコメントが変更されました。                                                                                           |
| `pull_request_review_comment.delete` | プルリクエストに関するコメントが削除されました。                                                                                             |
| `issue.destroy`                      | Issue がリポジトリから削除されました。 詳しい情報については、「[>Issue を削除する](/github/managing-your-work-on-github/deleting-an-issue)」を参照してください。 |

#### Organization

| アクション              | 説明                                                                                                                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | ユーザが Organization を削除するための背景ジョブを開始しました。                                                                                                                                                        |
| `org.delete`       | ユーザが開始したバックグラウンドジョブによって Organization が削除されました。{% if currentVersion != "github-ae@latest" %}
| `org.transform`    | ユーザアカウントが Organization へと変換されました。 詳しい情報については、「[ユーザを Organization に変換する](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)」を参照してください。{% endif %}

#### 保護されたブランチ

| アクション                                                              | 説明                                 |
| ------------------------------------------------------------------ | ---------------------------------- |
| `protected_branch.create`                                          | ブランチ保護がブランチで有効になっています。             |
| `protected_branch.destroy`                                         | ブランチ保護がブランチで無効になっています。             |
| `protected_branch.update_admin_enforced`                           | ブランチ保護がリポジトリ管理者に対して強制されます。         |
| `protected_branch.update_require_code_owner_review`                | 必要なコードオーナーレビューの強制がブランチで更新されます。     |
| `protected_branch.dismiss_stale_reviews`                           | 却下している古いプルリクエストの強制がブランチで更新されます。    |
| `protected_branch.update_signature_requirement_enforcement_level`  | 必要なコミット署名の強制がブランチで更新されます。          |
| `protected_branch.update_pull_request_reviews_enforcement_level`   | 必要なプルリクエストレビューの強制がブランチで更新されます。     |
| `protected_branch.update_required_status_checks_enforcement_level` | 必要なステータスチェックの強制がブランチで更新されます。       |
| `protected_branch.rejected_ref_update`                             | ブランチ更新の試行が拒否されます。                  |
| `protected_branch.policy_override`                                 | ブランチ保護の要件がリポジトリ管理者によってオーバーライドされます。 |

#### リポジトリ

| アクション                                      | 説明                                                                                                                                                                                                                                                                |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.access`                              | リポジトリの可視性がプライベート{% if enterpriseServerVersions contains currentVersion %}、パブリック、{% endif %} または内部に変更されました。                                                                                                                                                        |
| `repo.archived`                            | リポジトリがアーカイブされました。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のリポジトリをアーカイブする](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)」を参照してください。                                                                         |
| `repo.add_member`                          | リポジトリにコラボレーターが追加されました。                                                                                                                                                                                                                                            |
| `repo.config`                              | サイト管理者がフォースプッシュをブロックしました。 詳しくは、 [リポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)を参照してください。                                                                                         |
| `repo.create`                              | リポジトリが作成されました。                                                                                                                                                                                                                                                    |
| `repo.destroy`                             | リポジトリが削除されました。                                                                                                                                                                                                                                                    |
| `repo.remove_member`                       | コラボレーターがリポジトリから削除されました。                                                                                                                                                                                                                                           |
| `repo.rename`                              | リポジトリの名前が変更されました。                                                                                                                                                                                                                                                 |
| `repo.transfer`                            | ユーザーが転送されたリポジトリを受け取る要求を受け入れました。                                                                                                                                                                                                                                   |
| `repo.transfer_start`                      | ユーザーがリポジトリを別のユーザーまたは Organization に転送する要求を送信しました。                                                                                                                                                                                                                 |
| `repo.unarchived`                          | リポジトリがアーカイブ解除されました。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のリポジトリをアーカイブする](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)」を参照してください。{% if enterpriseServerVersions contains currentVersion %}
| `repo.config.disable_anonymous_git_access` | 匿名 Git 読み取りアクセスがリポジトリに対して無効になります。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。                                                                             |
| `repo.config.enable_anonymous_git_access`  | 匿名 Git 読み取りアクセスがリポジトリに対して有効になります。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。                                                                             |
| `repo.config.lock_anonymous_git_access`    | リポジトリの匿名 Git 読み取りアクセス設定がロックされているため、リポジトリ管理者はこの設定を変更 (有効化または無効化) できません。 詳しい情報については、「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。             |
| `repo.config.unlock_anonymous_git_access`  | リポジトリの匿名 Git 読み取りアクセス設定がロック解除されているため、リポジトリ管理者はこの設定を変更 (有効化または無効化) できます。 詳しい情報については、「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。{% endif %}

#### サイトアドミンのツール

| アクション                | 説明                                                                    |
| -------------------- | --------------------------------------------------------------------- |
| `staff.disable_repo` | サイトアドミンがリポジトリとその全てのフォークへのアクセスを無効にしました。                                |
| `staff.enable_repo`  | サイトアドミンがリポジトリとその全てのフォークへのアクセスを再度有効化しました。                              |
| `staff.fake_login`   | サイトアドミンが {% data variables.product.product_name %}に別のユーザとしてサインインしました。 |
| `staff.repo_unlock`  | サイトアドミンがユーザのプライベートリポジトリを解除（一時的にフルアクセスが可能）しました。                        |
| `staff.unlock`       | サイトアドミンがユーザの全てのプライベートリポジトリを解除（一時的にフルアクセスが可能）しました。                     |

#### Team

| アクション                     | 説明                                                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `team.create`             | ユーザアカウントまたはリポジトリが Team に追加されました。                                                                                                 |
| `team.delete`             | ユーザアカウントまたはリポジトリが Team から削除されました。{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `team.demote_maintainer`  | ユーザがチームメンテナからチームメンバーに降格されました。{% endif %}
| `team.destroy`            | Team が削除されました。{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `team.promote_maintainer` | ユーザーがチームメンバーからチームメンテナに昇格しました。{% endif %}


#### ユーザ

| アクション                           | 説明                                                                                                                                            |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `user.add_email`                | ユーザアカウントにメールアドレスが追加されました。                                                                                                                     |
| `user.async_delete`             | ユーザアカウントを破棄する非同期ジョブが開始され、最終的に ` user.delete ` がトリガーされました。{% if enterpriseServerVersions contains currentVersion %}
| `user.change_password`          | ユーザがパスワードを変更しました。{% endif %}
| `user.create`                   | 新規ユーザが作成されました。                                                                                                                                |
| `user.delete`                   | ユーザアカウントが非同期的ジョブによって削除されました。                                                                                                                  |
| `user.demote`                   | サイトアドミンが一般ユーザアカウントに変更されました。                                                                                                                   |
| `user.destroy`                  | ユーザが自分のアカウントを削除し、`user.async_delete` をトリガーしました。{% if enterpriseServerVersions contains currentVersion %}
| `user.failed_login`             | ユーザが間違ったユーザネームやパスワード、または二段階認証コードでサインインしようとしました。                                                                                               |
| `user.forgot_password`          | ユーザがサインインページでパスワードリセットを申請しました。{% endif %}
| `user.login`                    | ユーザがサインインしました。{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `user.mandatory_message_viewed` | ユーザが必須メッセージを表示します（詳細については、「[ユーザメッセージをカスタマイズする](/admin/user-management/customizing-user-messages-for-your-enterprise)」を参照してください） | {% endif %}
| `user.promote`                  | 一般ユーザアカウントがサイトアドミンへと変更されました。                                                                                                                  |
| `user.remove_email`             | ユーザアカウントからメールアドレスが削除されました。                                                                                                                    |
| `user.rename`                   | ユーザ名が変更されました。                                                                                                                                 |
| `user.suspend`                  | ユーザアカウントがサイトアドミンによって一時停止されました。{% if enterpriseServerVersions contains currentVersion %}
| `user.two_factor_requested`     | ユーザが 2 要素認証コードを求められました。{% endif %}
| `user.unsuspend`                | サイトアドミンがユーザアカウント停止を解除しました。                                                                                                                    |

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [デプロイキー]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [OAuth アクセストークン]: /developers/apps/authorizing-oauth-apps
  [OAuth application]: /guides/basics-of-authentication/#registering-your-app
  [OAuth アプリケーション]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
