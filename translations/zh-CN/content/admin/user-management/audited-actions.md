---
title: 审核的操作
intro: 您可以在审核日志中搜索各种操作。
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
versions:
  enterprise-server: '*'
  github-ae: '*'
---

#### 身份验证

|                                   名称 | 描述                                                                                                                              |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------- |
|                `oauth_access.create` | 已为用户帐户[生成>][generate token] [OAuth 访问令牌][]。                                                                                     |
|               `oauth_access.destroy` | 已从用户帐户中删除 [OAuth 访问令牌][]。                                                                                                       |
|          `oauth_application.destroy` | 已从用户或组织帐户中删除 [OAuth 应用程序][]。                                                                                                    |
|     `oauth_application.reset_secret` | 已重置 [OAuth 应用程序][]的密钥。                                                                                                          |
|         `oauth_application.transfer` | 已将 [OAuth 应用程序][]从一个用户或组织帐户传送到另一个用户或组织帐户。                                                                                       |
|                  `public_key.create` | 已将 SSH 密钥[添加][add key]到用户帐户中，或者已将[部署密钥][]添加到仓库中。                                                                                |
|                  `public_key.delete` | 已从用户帐户中移除 SSH 密钥，或已从仓库中移除[部署密钥][]。                                                                                              |
|                  `public_key.update` | A user account's SSH key or a repository's [deploy key][] was updated.{% if enterpriseServerVersions contains currentVersion %}
|  `two_factor_authentication.enabled` | 已为用户帐户启用[双重身份验证][2fa]。                                                                                                          |
| `two_factor_authentication.disabled` | [Two-factor authentication][2fa] was disabled for a user account.{% endif %}

#### 挂钩

|                    名称 | 描述          |
| ---------------------:| ----------- |
|         `hook.create` | 已向仓库添加新挂钩。  |
| `hook.config_changed` | 已更改挂钩的配置。   |
|        `hook.destroy` | 已删除挂钩。      |
| `hook.events_changed` | 已更改挂钩的配置事件。 |

#### Enterprise configuration settings

|                                                      名称 | 描述                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `business.update_member_repository_creation_permission` | A site admin restricts repository creation in organizations in the enterprise. 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)”。                                                                                       |
|               `business.clear_members_can_create_repos` | A site admin clears a restriction on repository creation in organizations in the enterprise. 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)”。                                                                         |
|           `enterprise.config.lock_anonymous_git_access` | A site admin locks anonymous Git read access to prevent repository admins from changing existing anonymous Git read access settings for repositories in the enterprise. 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”。 |
|         `enterprise.config.unlock_anonymous_git_access` | A site admin unlocks anonymous Git read access to allow repository admins to change existing anonymous Git read access settings for repositories in the enterprise. 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”。     |

#### 议题和拉取请求

|                                   名称 | 描述                                                                                                                  |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------- |
|                       `issue.update` | 问题的正文文本（初始注释）已更改。                                                                                                   |
|               `issue_comment.update` | 已更改问题的正文文本（初始注释）。                                                                                                   |
| `pull_request_review_comment.delete` | 已删除对拉取请求的评论。                                                                                                        |
|                      `issue.destroy` | 已从仓库中删除问题。 For more information, see "[Deleting an issue](/github/managing-your-work-on-github/deleting-an-issue)." |

#### 组织

|                 名称 | 描述                                                                                                                                                                                             |
| ------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | 用户发起了删除组织的后台作业。                                                                                                                                                                                |
|       `org.delete` | An organization was deleted by a user-initiated background job.{% if currentVersion != "github-ae@latest" %}
|    `org.transform` | 已将用户帐户转换为组织。 For more information, see "[Converting a user into an organization](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."{% endif %}

#### 受保护分支

|                                                                 名称 | 描述                                                                |
| ------------------------------------------------------------------:| ----------------------------------------------------------------- |
|                                          `protected_branch.create` | 已在分支上启用分支保护。                                                      |
|                                         `protected_branch.destroy` | 已在分支上禁用分支保护。                                                      |
|                           `protected_branch.update_admin_enforced` | 已为仓库管理员强制执行分支保护。                                                  |
|                `protected_branch.update_require_code_owner_review` | Enforcement of required code owner review is updated on a branch. |
|                           `protected_branch.dismiss_stale_reviews` | 已在分支上更新忽略旧拉取请求的强制执行。                                              |
|  `protected_branch.update_signature_requirement_enforcement_level` | 已在分支上更新必需提交签名的强制执行。                                               |
|   `protected_branch.update_pull_request_reviews_enforcement_level` | 已在分支上更新必需拉取请求审查的强制执行。                                             |
| `protected_branch.update_required_status_checks_enforcement_level` | 已在分支上更新必需状态检查的强制执行。                                               |
|                             `protected_branch.rejected_ref_update` | 分支更新尝试被拒。                                                         |
|                                 `protected_branch.policy_override` | 分支保护要求被仓库管理员覆盖。                                                   |

#### 仓库

|                                         名称 | 描述                                                                                                                                                                                             |
| ------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                              `repo.access` | 已将私有仓库设为公共，或者已将公共仓库设为私有。                                                                                                                                                                       |
|                             `repo.archive` | 已存档仓库。 For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."   |
|                          `repo.add_member` | 已向仓库添加协作者。                                                                                                                                                                                     |
|                              `repo.config` | 站点管理员已阻止强制推送。 更多信息请参阅“[阻止对仓库进行强制推送](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)”。                                                 |
|                              `repo.create` | 已创建仓库。                                                                                                                                                                                         |
|                             `repo.destroy` | 已删除仓库。                                                                                                                                                                                         |
|                       `repo.remove_member` | 已从仓库中移除协作者。                                                                                                                                                                                    |
|                              `repo.rename` | 已重命名仓库。                                                                                                                                                                                        |
|                            `repo.transfer` | 用户已接受接收传输仓库的请求。                                                                                                                                                                                |
|                      `repo.transfer_start` | 用户已发送向另一用户或组织传输仓库的请求。                                                                                                                                                                          |
|                           `repo.unarchive` | 已取消存档仓库。 For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)." |
| `repo.config.disable_anonymous_git_access` | 已为公共仓库禁用匿名 Git 读取权限。 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)。”                                          |
|  `repo.config.enable_anonymous_git_access` | 已为公共仓库启用匿名 Git 读取权限。 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)。”                                          |
|    `repo.config.lock_anonymous_git_access` | 已锁定仓库的匿名 Git 读取权限设置，阻止仓库管理员更改（启用或禁用）此设置。 更多信息请参阅“[阻止用户更改匿名 Git 读取权限](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”。 |
|  `repo.config.unlock_anonymous_git_access` | 已解锁仓库的匿名 Git 读取权限设置，允许仓库管理员更改（启用或禁用）此设置。 更多信息请参阅“[阻止用户更改匿名 Git 读取权限](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”。 |

#### 站点管理员工具

|                   名称 | 描述                                                         |
| --------------------:| ---------------------------------------------------------- |
| `staff.disable_repo` | 站点管理员已禁用对仓库及其所有复刻的访问。                                      |
|  `staff.enable_repo` | 站点管理员已重新启用对仓库及其所有复刻的访问。                                    |
|   `staff.fake_login` | 站点管理员以另一用户的身份登录 {% data variables.product.product_name %}。 |
|  `staff.repo_unlock` | 站点管理员已解锁（临时获得完全访问权限）用户的一个私有仓库。                             |
|       `staff.unlock` | 站点管理员已解锁（临时获得完全访问权限）用户的所有私有仓库。                             |

#### 团队

|             名称 | 描述              |
| --------------:| --------------- |
|  `team.create` | 已向团队添加用户帐户或仓库。  |
|  `team.delete` | 已从团队中移除用户帐户或仓库。 |
| `team.destroy` | 已删除团队。          |

#### 用户

|                          名称 | 描述                                                                                                                                                       |
| ---------------------------:| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
|            `user.add_email` | 已向用户帐户添加电子邮件地址。                                                                                                                                          |
|         `user.async_delete` | An asynchronous job was started to destroy a user account, eventually triggering `user.delete`.{% if enterpriseServerVersions contains currentVersion %}
|      `user.change_password` | A user changed his or her password.{% endif %}
|               `user.create` | 已创建新的用户帐户。                                                                                                                                               |
|               `user.delete` | 已通过异步作业销毁用户帐户。                                                                                                                                           |
|               `user.demote` | 已将站点管理员降级为普通用户帐户。                                                                                                                                        |
|              `user.destroy` | A user deleted his or her account, triggering `user.async_delete`.{% if enterpriseServerVersions contains currentVersion %}
|         `user.failed_login` | 用户尝试登录时使用的用户名、密码或双重身份验证码不正确。                                                                                                                             |
|      `user.forgot_password` | A user requested a password reset via the sign-in page.{% endif %}
|                `user.login` | 用户已登录。                                                                                                                                                   |
|              `user.promote` | 已将普通用户帐户升级为站点管理员。                                                                                                                                        |
|         `user.remove_email` | 已从用户帐户中移除电子邮件地址。                                                                                                                                         |
|               `user.rename` | 已更改用户名。                                                                                                                                                  |
|              `user.suspend` | A user account was suspended by a site admin.{% if enterpriseServerVersions contains currentVersion %}
| `user.two_factor_requested` | A user was prompted for a two-factor authentication code.{% endif %}
|            `user.unsuspend` | 站点管理员已取消挂起用户帐户。                                                                                                                                          |

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [部署密钥]: /guides/managing-deploy-keys/#deploy-keys
  [deploy key]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [OAuth 访问令牌]: /v3/oauth/
  [OAuth 应用程序]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
