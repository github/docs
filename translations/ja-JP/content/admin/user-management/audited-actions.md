---
title: 監査されたアクション
intro: 監査ログでいろんなアクションを検索することができます。
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
versions:
  enterprise-server: '*'
  github-ae: '*'
---

#### 認証

|                                   名前 | 説明                                                                                                                              |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------- |
|                `oauth_access.create` | ユーザアカウントに[OAuth アクセストークン][] が[作成][generate token] されました。                                                                        |
|               `oauth_access.destroy` | [OAuth アクセストークン][] がユーザアカウントから削除されました。                                                                                          |
|          `oauth_application.destroy` | [OAuth application][]がユーザまたは Organization のアカウントから削除されました。                                                                      |
|     `oauth_application.reset_secret` | [OAuth アプリケーション][]の秘密鍵がリセットされました。                                                                                               |
|         `oauth_application.transfer` | [OAuth アプリケーション][]が別のユーザ、または Organization のアカウントへ移されました。                                                                        |
|                  `public_key.create` | SSHキーがユーザアカウントに[追加][add key]されたか[デプロイキー][]がリポジトリに追加されました。                                                                       |
|                  `public_key.delete` | SSHキーがユーザアカウントから削除されたか[デプロイキー][]がリポジトリから削除されました。                                                                                |
|                  `public_key.update` | A user account's SSH key or a repository's [deploy key][] was updated.{% if enterpriseServerVersions contains currentVersion %}
|  `two_factor_authentication.enabled` | ユーザアカウントの[二段階認証][2fa]が有効化されました。                                                                                                 |
| `two_factor_authentication.disabled` | [Two-factor authentication][2fa] was disabled for a user account.{% endif %}

#### フック

|                    名前 | 説明                       |
| ---------------------:| ------------------------ |
|         `hook.create` | リポジトリに新規フックが追加されました。     |
| `hook.config_changed` | フックのコンフィグレーションが変更されました。  |
|        `hook.destroy` | フックが削除されました。             |
| `hook.events_changed` | フックの設定されているイベントが変更されました。 |

#### Enterprise configuration settings

|                                                      名前 | 説明                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `business.update_member_repository_creation_permission` | A site admin restricts repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."                                                                                       |
|               `business.clear_members_can_create_repos` | A site admin clears a restriction on repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."                                                                         |
|           `enterprise.config.lock_anonymous_git_access` | A site admin locks anonymous Git read access to prevent repository admins from changing existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)." |
|         `enterprise.config.unlock_anonymous_git_access` | A site admin unlocks anonymous Git read access to allow repository admins to change existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."     |

#### Issue およびプルリクエスト

|                                   名前 | 説明                                                                                                                              |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------- |
|                       `issue.update` | Issue のテキスト本体（最初のコメント）が変更されました。                                                                                                 |
|               `issue_comment.update` | Issue （最初以外）のコメントが変更されました。                                                                                                      |
| `pull_request_review_comment.delete` | A comment on a pull request was deleted.                                                                                        |
|                      `issue.destroy` | Issue がリポジトリから削除されました。 For more information, see "[Deleting an issue](/github/managing-your-work-on-github/deleting-an-issue)." |

#### Organization

|                 名前 | 説明                                                                                                                                                                                                                  |
| ------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | ユーザが Organization を削除するための背景ジョブを開始しました。                                                                                                                                                                             |
|       `org.delete` | An organization was deleted by a user-initiated background job.{% if currentVersion != "github-ae@latest" %}
|    `org.transform` | ユーザアカウントが Organization へと変換されました。 For more information, see "[Converting a user into an organization](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."{% endif %}

#### 保護されたブランチ

|                                                                 名前 | 説明                                                                |
| ------------------------------------------------------------------:| ----------------------------------------------------------------- |
|                                          `protected_branch.create` | ブランチ保護がブランチで有効になっています。                                            |
|                                         `protected_branch.destroy` | ブランチ保護がブランチで無効になっています。                                            |
|                           `protected_branch.update_admin_enforced` | ブランチ保護がリポジトリ管理者に対して強制されます。                                        |
|                `protected_branch.update_require_code_owner_review` | Enforcement of required code owner review is updated on a branch. |
|                           `protected_branch.dismiss_stale_reviews` | 却下している古いプルリクエストの強制がブランチで更新されます。                                   |
|  `protected_branch.update_signature_requirement_enforcement_level` | 必要なコミット署名の強制がブランチで更新されます。                                         |
|   `protected_branch.update_pull_request_reviews_enforcement_level` | 必要なプルリクエストレビューの強制がブランチで更新されます。                                    |
| `protected_branch.update_required_status_checks_enforcement_level` | 必要なステータスチェックの強制がブランチで更新されます。                                      |
|                             `protected_branch.rejected_ref_update` | ブランチ更新の試行が拒否されます。                                                 |
|                                 `protected_branch.policy_override` | ブランチ保護の要件がリポジトリ管理者によってオーバーライドされます。                                |

#### リポジトリ

|                                         名前 | 説明                                                                                                                                                                                                                                             |
| ------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                              `repo.access` | プライベートリポジトリが公開されたか、パブリックリポジトリが非公開にされました。                                                                                                                                                                                                       |
|                             `repo.archive` | リポジトリがアーカイブされました。 For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."                                        |
|                          `repo.add_member` | リポジトリにコラボレーターが追加されました。                                                                                                                                                                                                                         |
|                              `repo.config` | サイト管理者がフォースプッシュをブロックしました。 詳しくは、 [リポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)を参照してください。                                                                      |
|                              `repo.create` | リポジトリが作成されました。                                                                                                                                                                                                                                 |
|                             `repo.destroy` | リポジトリが削除されました。                                                                                                                                                                                                                                 |
|                       `repo.remove_member` | コラボレーターがリポジトリから削除されました。                                                                                                                                                                                                                        |
|                              `repo.rename` | リポジトリの名前が変更されました。                                                                                                                                                                                                                              |
|                            `repo.transfer` | ユーザーが転送されたリポジトリを受け取る要求を受け入れました。                                                                                                                                                                                                                |
|                      `repo.transfer_start` | ユーザーがリポジトリを別のユーザーまたは Organization に転送する要求を送信しました。                                                                                                                                                                                              |
|                           `repo.unarchive` | リポジトリがアーカイブ解除されました。 For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."                                      |
| `repo.config.disable_anonymous_git_access` | 匿名 Git 読み取りアクセスがパブリックリポジトリに対して無効になります。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。                                                     |
|  `repo.config.enable_anonymous_git_access` | 匿名 Git 読み取りアクセスがパブリックリポジトリに対して有効になっています。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。                                                   |
|    `repo.config.lock_anonymous_git_access` | リポジトリの匿名 Git 読み取りアクセス設定がロックされているため、リポジトリ管理者はこの設定を変更 (有効化または無効化) できません。 詳細は「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。  |
|  `repo.config.unlock_anonymous_git_access` | リポジトリの匿名 Git 読み取りアクセス設定がロック解除されているため、リポジトリ管理者はこの設定を変更 (有効化または無効化) できます。 詳細は「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。 |

#### サイトアドミンのツール

|                   名前 | 説明                                                                    |
| --------------------:| --------------------------------------------------------------------- |
| `staff.disable_repo` | サイトアドミンがリポジトリとその全てのフォークへのアクセスを無効にしました。                                |
|  `staff.enable_repo` | サイトアドミンがリポジトリとその全てのフォークへのアクセスを再度有効化しました。                              |
|   `staff.fake_login` | サイトアドミンが {% data variables.product.product_name %}に別のユーザとしてサインインしました。 |
|  `staff.repo_unlock` | サイトアドミンがユーザのプライベートリポジトリを解除（一時的にフルアクセスが可能）しました。                        |
|       `staff.unlock` | サイトアドミンがユーザの全てのプライベートリポジトリを解除（一時的にフルアクセスが可能）しました。                     |

#### Team

|             名前 | 説明                                |
| --------------:| --------------------------------- |
|  `team.create` | ユーザアカウントまたはリポジトリが Team に追加されました。  |
|  `team.delete` | ユーザアカウントまたはリポジトリが Team から削除されました。 |
| `team.destroy` | Teamが削除されました。                     |

#### ユーザ

|                          名前 | 説明                                                                                                                                                       |
| ---------------------------:| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
|            `user.add_email` | ユーザアカウントにメールアドレスが追加されました。                                                                                                                                |
|         `user.async_delete` | An asynchronous job was started to destroy a user account, eventually triggering `user.delete`.{% if enterpriseServerVersions contains currentVersion %}
|      `user.change_password` | A user changed his or her password.{% endif %}
|               `user.create` | 新規ユーザが作成されました。                                                                                                                                           |
|               `user.delete` | ユーザアカウントが非同期的ジョブによって削除されました。                                                                                                                             |
|               `user.demote` | サイトアドミンが一般ユーザアカウントに変更されました。                                                                                                                              |
|              `user.destroy` | A user deleted his or her account, triggering `user.async_delete`.{% if enterpriseServerVersions contains currentVersion %}
|         `user.failed_login` | ユーザが間違ったユーザネームやパスワード、または二段階認証コードでサインインしようとしました。                                                                                                          |
|      `user.forgot_password` | A user requested a password reset via the sign-in page.{% endif %}
|                `user.login` | ユーザがサインインしました。                                                                                                                                           |
|              `user.promote` | 一般ユーザアカウントがサイトアドミンへと変更されました。                                                                                                                             |
|         `user.remove_email` | ユーザアカウントからメールアドレスが削除されました。                                                                                                                               |
|               `user.rename` | ユーザ名が変更されました。                                                                                                                                            |
|              `user.suspend` | A user account was suspended by a site admin.{% if enterpriseServerVersions contains currentVersion %}
| `user.two_factor_requested` | A user was prompted for a two-factor authentication code.{% endif %}
|            `user.unsuspend` | サイトアドミンがユーザアカウント停止を解除しました。                                                                                                                               |

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [デプロイキー]: /guides/managing-deploy-keys/#deploy-keys
  [deploy key]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [OAuth アクセストークン]: /v3/oauth/
  [OAuth application]: /guides/basics-of-authentication/#registering-your-app
  [OAuth アプリケーション]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
