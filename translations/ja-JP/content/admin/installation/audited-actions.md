---
title: 監査されたアクション
intro: 監査ログでいろんなアクションを検索することができます。
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
versions:
  enterprise-server: '*'
---

#### 認証

|                                   名前 | 説明                                                                                                                                               |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------ |
|                `oauth_access.create` | ユーザアカウントに[OAuth アクセストークン](/v3/oauth/) が[作成](/articles/creating-an-access-token-for-command-line-use) されました。                                      |
|               `oauth_access.destroy` | [OAuth アクセストークン](/v3/oauth/) がユーザアカウントから削除されました。                                                                                                 |
|          `oauth_application.destroy` | [OAuth application](/guides/basics-of-authentication/#registering-your-app)がユーザまたは Organization のアカウントから削除されました。                                 |
|     `oauth_application.reset_secret` | [OAuth アプリケーション](/guides/basics-of-authentication/#registering-your-app)の秘密鍵がリセットされました。                                                          |
|         `oauth_application.transfer` | [OAuth アプリケーション](/guides/basics-of-authentication/#registering-your-app)が別のユーザ、または Organization のアカウントへ移されました。                                   |
|                  `public_key.create` | SSHキーがユーザアカウントに[追加](/articles/adding-a-new-ssh-key-to-your-github-account)されたか[デプロイキー](/guides/managing-deploy-keys/#deploy-keys)がリポジトリに追加されました。 |
|                  `public_key.delete` | SSHキーがユーザアカウントから削除されたか[デプロイキー](/guides/managing-deploy-keys/#deploy-keys)がリポジトリから削除されました。                                                        |
|                  `public_key.update` | ユーザアカウントのSSHキーもしくは、リポジトリの[デプロイキー](/guides/managing-deploy-keys/#deploy-keys)が更新されました。                                                            |
|  `two_factor_authentication.enabled` | ユーザアカウントの[二段階認証](/articles/about-two-factor-authentication)が有効化されました。                                                                            |
| `two_factor_authentication.disabled` | ユーザアカウントの[二段階認証](/articles/about-two-factor-authentication)が無効化されました。                                                                            |

#### フック

|                    名前 | 説明                       |
| ---------------------:| ------------------------ |
|         `hook.create` | リポジトリに新規フックが追加されました。     |
| `hook.config_changed` | フックのコンフィグレーションが変更されました。  |
|        `hook.destroy` | フックが削除されました。             |
| `hook.events_changed` | フックの設定されているイベントが変更されました。 |

#### インスタンス設定

|                                                      名前 | 説明                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `business.update_member_repository_creation_permission` | サイトアドミンは、インスタンス上の Organization でリポジトリの作成を制限しています。 詳しい情報については、「[インスタンスでリポジトリ作成を制限する](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)」を参照してください。                                                              |
|               `business.clear_members_can_create_repos` | サイトアドミンは、インスタンス上の Organization でリポジトリ作成の制限を解除しています。 詳しい情報については、「[インスタンスでリポジトリ作成を制限する](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)」を参照してください。                                                            |
|           `enterprise.config.lock_anonymous_git_access` | リポジトリ管理者が、インスタンス上のリポジトリに対する既存の匿名 Git 読み取りアクセス設定を変更できないようにするため、サイトアドミンは、匿名 Git 読み取りアクセス設定をロックしています。 詳細は「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。   |
|         `enterprise.config.unlock_anonymous_git_access` | リポジトリ管理者が、インスタンス上のリポジトリに対する既存の匿名 Git 読み取りアクセス設定を変更できるようにするため、サイトアドミンは、匿名 Git 読み取りアクセス設定のロックを解除しています。 詳細は「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。 |

#### Issue およびプルリクエスト

|                                   名前 | 説明                                                                                                                  |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------- |
|                       `issue.update` | Issue のテキスト本体（最初のコメント）が変更されました。                                                                                     |
|               `issue_comment.update` | Issue （最初以外）のコメントが変更されました。                                                                                          |
| `pull_request_review_comment.delete` | プルリクエストに関するコメントが削除されました。                                                                                            |
|                      `issue.destroy` | Issue がリポジトリから削除されました。 詳細は「[Issue を削除する](/enterprise/{{ currentVersion }}/user/articles/deleting-an-issue)」を参照してください。 |

#### Organization

|                 名前 | 説明                                                                                                                                                                |
| ------------------:| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | ユーザが Organization を削除するための背景ジョブを開始しました。                                                                                                                           |
|       `org.delete` | ユーザが行った背景ジョブによって Organization が削除されました。                                                                                                                           |
|    `org.transform` | ユーザアカウントが Organization へと変換されました。 詳しくは [ユーザをOrganization に変換する方法](/enterprise/{{ currentVersion}}/user/articles/converting-a-user-into-an-organization/) を参照してください。 |

#### 保護されたブランチ

|                                                                 名前 | 説明                                 |
| ------------------------------------------------------------------:| ---------------------------------- |
|                                          `protected_branch.create` | ブランチ保護がブランチで有効になっています。             |
|                                         `protected_branch.destroy` | ブランチ保護がブランチで無効になっています。             |
|                           `protected_branch.update_admin_enforced` | ブランチ保護がリポジトリ管理者に対して強制されます。         |
|                `protected_branch.update_require_code_owner_review` | 必要なコードオーナーレビューの強制がブランチで更新されます。     |
|                           `protected_branch.dismiss_stale_reviews` | 却下している古いプルリクエストの強制がブランチで更新されます。    |
|  `protected_branch.update_signature_requirement_enforcement_level` | 必要なコミット署名の強制がブランチで更新されます。          |
|   `protected_branch.update_pull_request_reviews_enforcement_level` | 必要なプルリクエストレビューの強制がブランチで更新されます。     |
| `protected_branch.update_required_status_checks_enforcement_level` | 必要なステータスチェックの強制がブランチで更新されます。       |
|                             `protected_branch.rejected_ref_update` | ブランチ更新の試行が拒否されます。                  |
|                                 `protected_branch.policy_override` | ブランチ保護の要件がリポジトリ管理者によってオーバーライドされます。 |

#### リポジトリ

|                                         名前 | 説明                                                                                                                                                                                                                                           |
| ------------------------------------------:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                              `repo.access` | プライベートリポジトリが公開されたか、パブリックリポジトリが非公開にされました。                                                                                                                                                                                                     |
|                             `repo.archive` | リポジトリがアーカイブされました。 詳細は「[リポジトリのアーカイブとアーカイブ削除](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)」を参照してください。                                                                                  |
|                          `repo.add_member` | リポジトリにコラボレーターが追加されました。                                                                                                                                                                                                                       |
|                              `repo.config` | サイト管理者がフォースプッシュをブロックしました。 詳しくは、 [リポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)を参照してください。                                                                      |
|                              `repo.create` | リポジトリが作成されました。                                                                                                                                                                                                                               |
|                             `repo.destroy` | リポジトリが削除されました。                                                                                                                                                                                                                               |
|                       `repo.remove_member` | コラボレーターがリポジトリから削除されました。                                                                                                                                                                                                                      |
|                              `repo.rename` | リポジトリの名前が変更されました。                                                                                                                                                                                                                            |
|                            `repo.transfer` | ユーザーが転送されたリポジトリを受け取る要求を受け入れました。                                                                                                                                                                                                              |
|                      `repo.transfer_start` | ユーザーがリポジトリを別のユーザーまたは Organization に転送する要求を送信しました。                                                                                                                                                                                            |
|                           `repo.unarchive` | リポジトリがアーカイブ解除されました。 詳細は「[リポジトリのアーカイブとアーカイブ削除](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)」を参照してください。                                                                                |
| `repo.config.disable_anonymous_git_access` | 匿名 Git 読み取りアクセスがパブリックリポジトリに対して無効になります。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。                                                     |
|  `repo.config.enable_anonymous_git_access` | 匿名 Git 読み取りアクセスがパブリックリポジトリに対して有効になっています。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。                                                   |
|    `repo.config.lock_anonymous_git_access` | リポジトリの匿名 Git 読み取りアクセス設定がロックされているため、リポジトリ管理者はこの設定を変更 (有効化または無効化) できません。 詳細は「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。  |
|  `repo.config.unlock_anonymous_git_access` | リポジトリの匿名 Git 読み取りアクセス設定がロック解除されているため、リポジトリ管理者はこの設定を変更 (有効化または無効化) できます。 詳細は「[ユーザによる匿名 Git 読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。 |

#### サイトアドミンのツール

|                   名前 | 説明                                                                                |
| --------------------:| --------------------------------------------------------------------------------- |
| `staff.disable_repo` | サイトアドミンがリポジトリとその全てのフォークへのアクセスを無効にしました。                                            |
|  `staff.enable_repo` | サイトアドミンがリポジトリとその全てのフォークへのアクセスを再度有効化しました。                                          |
|   `staff.fake_login` | サイトアドミンが {% data variables.product.prodname_enterprise %}に別のユーザとしてサインインしました。 |
|  `staff.repo_unlock` | サイトアドミンがユーザのプライベートリポジトリを解除（一時的にフルアクセスが可能）しました。                                    |
|       `staff.unlock` | サイトアドミンがユーザの全てのプライベートリポジトリを解除（一時的にフルアクセスが可能）しました。                                 |

#### Team

|             名前 | 説明                                |
| --------------:| --------------------------------- |
|  `team.create` | ユーザアカウントまたはリポジトリが Team に追加されました。  |
|  `team.delete` | ユーザアカウントまたはリポジトリが Team から削除されました。 |
| `team.destroy` | Teamが削除されました。                     |

#### ユーザ

|                          名前 | 説明                                                           |
| ---------------------------:| ------------------------------------------------------------ |
|            `user.add_email` | ユーザアカウントにメールアドレスが追加されました。                                    |
|         `user.async_delete` | ユーザアカウントを削除するための非同期的ジョブが開始されました。おって `user.delete` がトリガーされます。 |
|      `user.change_password` | ユーザがパスワードを変更しました。                                            |
|               `user.create` | 新規ユーザが作成されました。                                               |
|               `user.delete` | ユーザアカウントが非同期的ジョブによって削除されました。                                 |
|               `user.demote` | サイトアドミンが一般ユーザアカウントに変更されました。                                  |
|              `user.destroy` | ユーザが自分のアカウントを削除し、`user.async_delete` をトリガーしました。              |
|         `user.failed_login` | ユーザが間違ったユーザネームやパスワード、または二段階認証コードでサインインしようとしました。              |
|      `user.forgot_password` | ユーザがサインインページでパスワードリセットを申請しました。                               |
|                `user.login` | ユーザがサインインしました。                                               |
|              `user.promote` | 一般ユーザアカウントがサイトアドミンへと変更されました。                                 |
|         `user.remove_email` | ユーザアカウントからメールアドレスが削除されました。                                   |
|               `user.rename` | ユーザ名が変更されました。                                                |
|              `user.suspend` | サイトアドミンがユーザアカウントを停止しました。                                     |
| `user.two_factor_requested` | ユーザが二段階認証コードを要求されました。                                        |
|            `user.unsuspend` | サイトアドミンがユーザアカウント停止を解除しました。                                   |
