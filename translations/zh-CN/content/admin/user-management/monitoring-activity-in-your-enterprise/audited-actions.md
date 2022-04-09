---
title: 审核的操作
intro: 您可以在审核日志中搜索各种操作。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Security
---

## 身份验证

| 操作                                   | 描述                                               |
| ------------------------------------ | ------------------------------------------------ |
| `oauth_access.create`                | 已为用户帐户[生成>][generate token] [OAuth 访问令牌][]。      |
| `oauth_access.destroy`               | 已从用户帐户中删除 [OAuth 访问令牌][]。                        |
| `oauth_application.destroy`          | 已从用户或组织帐户中删除 [OAuth 应用程序][]。                     |
| `oauth_application.reset_secret`     | 已重置 [OAuth 应用程序][]的密钥。                           |
| `oauth_application.transfer`         | 已将 [OAuth 应用程序][]从一个用户或组织帐户传送到另一个用户或组织帐户。        |
| `public_key.create`                  | 已将 SSH 密钥[添加][add key]到用户帐户中，或者已将[部署密钥][]添加到仓库中。 |
| `public_key.delete`                  | 已从用户帐户中移除 SSH 密钥，或已从仓库中移除[部署密钥][]。               |
| `public_key.update`                  | 已更新用户帐户的 SSH 密钥或仓库的[部署密钥][]。{% ifversion ghes %}
| `two_factor_authentication.enabled`  | 已为用户帐户启用[双重身份验证][2fa]。                           |
| `two_factor_authentication.disabled` | 已为用户帐户禁用[双重身份验证][2fa]。{% endif %}

{% ifversion ghes %}
## {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

## 挂钩

| 操作                    | 描述          |
| --------------------- | ----------- |
| `hook.create`         | 已向仓库添加新挂钩。  |
| `hook.config_changed` | 已更改挂钩的配置。   |
| `hook.destroy`        | 已删除挂钩。      |
| `hook.events_changed` | 已更改挂钩的配置事件。 |

## 企业配置设置

| 操作                                                      | 描述                                                                                                                                                                                                                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion ghes or ghae %}
| `business.advanced_security_policy_update`              | 站点管理员创建、更新或删除 {% data variables.product.prodname_GH_advanced_security %} 策略。 更多信息请参阅“[在企业中执行 {% data variables.product.prodname_advanced_security %} 的策略](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)”。{% endif %}
| `business.clear_members_can_create_repos`               | 站点管理员取消了对在企业中的组织中创建仓库的限制。 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)”。{% ifversion ghes > 3.1 %}
| `business.referrer_override_enable`                     | 站点管理员可以改写推荐策略。 更多信息请参阅“[配置企业的推荐策略](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)”。                                                                                                              |
| `business.referrer_override_disable`                    | 站点管理员可以禁用推荐策略。 更多信息请参阅“[配置企业的推荐策略](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)”。{% endif %}
| `business.update_member_repository_creation_permission` | 站点管理员限制在企业中的组织中创建仓库。 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)”。{% ifversion ghes %}
| `enterprise.config.lock_anonymous_git_access`           | 站点管理员锁定匿名 Git 读取权限，以防止仓库管理员更改该企业中仓库的现有匿名 Git 读取权限设置。 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”。                                                        |
| `enterprise.config.unlock_anonymous_git_access`         | 站点管理员解锁匿名 Git 读取权限，以允许仓库管理员更改该企业中仓库的现有匿名 Git 读取权限设置。 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”。{% endif %}

{% ifversion ghae %}

## IP 允许列表

|                                         名称 | 描述                                                                    |
| ------------------------------------------:| --------------------------------------------------------------------- |
|               `ip_allow_list_entry.create` | IP 地址已添加到 IP 允许列表中。                                                   |
|               `ip_allow_list_entry.update` | IP 地址或描述已更改。                                                          |
|              `ip_allow_list_entry.destroy` | IP 地址已从 IP 允许列表中删除。                                                   |
|                     `ip_allow_list.enable` | IP 允许列表已启用。                                                           |
|  `ip_allow_list.enable_for_installed_apps` | 已为安装的 {% data variables.product.prodname_github_apps %} 启用 IP 允许列表。 |
|                    `ip_allow_list.disable` | IP 允许列表已禁用。                                                           |
| `ip_allow_list.disable_for_installed_apps` | 已为安装的 {% data variables.product.prodname_github_apps %} 禁用 IP 允许列表。 |

{% endif %}

## 议题

| 操作                     | 描述                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `issue.update`         | 问题的正文文本（初始注释）已更改。                                                                   |
| `issue_comment.update` | 已更改问题的正文文本（初始注释）。                                                                   |
| `issue.destroy`        | 已从仓库中删除问题。 更多信息请参阅“[删除议题](/github/managing-your-work-on-github/deleting-an-issue)”。 |

## 组织

| 操作                 | 描述                                                                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | 用户发起了删除组织的后台作业。                                                                                                                              |
| `org.delete`       | 用户发起的背景作业删除了组织。{% ifversion not ghae %}
| `org.transform`    | 已将用户帐户转换为组织。 更多信息请参阅“[将用户转换为组织](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)”{% endif %}

## 拉取请求

| 操作 | 描述n | | :- | :- |{% ifversion ghes > 3.1 or ghae %} | `pull_request.create` | 创建了拉取请求。 更多信息请参阅“[创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)”。 | | `pull_request.close` | 关闭了拉取请求而未合并。 更多信息请参阅“[关闭拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)”。 | | `pull_request.reopen` | 重新打开了之前关闭的拉取请求。 | | `pull_request.merge` | 合并了拉取请求。 更多信息请参阅“[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”。 | | `pull_request.indirect_merge` | 考虑合并拉取请求，因为拉取请求的提交已合并到目标分支。 | | `pull_request.ready_for_review` | 拉取请求标记为可供审查。 更多信息请参阅“[更改拉取请求的阶段](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)”。 | | `pull_request.converted_to_draft` | 拉取请求转换为草稿。 更多信息请参阅“[更改拉取请求的阶段](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)”。 | | `pull_request.create_review_request` | 请求对拉取请求的审查。 更多信息请参阅“[关于拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”。 | | `pull_request.remove_review_request` | 从拉取请求删除审查请求。 更多信息请参阅“[关于拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”。 | | `pull_request_review.submit` | 为拉取请求提交审查。 更多信息请参阅“[关于拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”。 | | `pull_request_review.discute` | 撤销对拉取请求的审查。 更多信息请参阅“[忽略拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”。 | | `pull_request_review.delete` | 删除对拉取请求的审查。 | | `pull_request_review_comment.create` | 审查评论添加到拉取请求。 更多信息请参阅“[关于拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”。 | | `pull_request_review_comment.update` | 更改拉取请求上的审查评论。 |{% endif %} | `pull_request_review_comment.delete` | 删除了拉取请求上的审查评论。 |

## 受保护分支

| 操作                                                                 | 描述                                                      |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| `protected_branch.create`                                          | 已在分支上启用分支保护。                                            |
| `protected_branch.destroy`                                         | 已在分支上禁用分支保护。                                            |
| `protected_branch.update_admin_enforced`                           | 已为仓库管理员强制执行分支保护。                                        |
| `protected_branch.update_require_code_owner_review`                | 已在分支上更新必需代码所有者审查的强制执行。                                  |
| `protected_branch.dismiss_stale_reviews`                           | 已在分支上更新忽略旧拉取请求的强制执行。                                    |
| `protected_branch.update_signature_requirement_enforcement_level`  | 已在分支上更新必需提交签名的强制执行。                                     |
| `protected_branch.update_pull_request_reviews_enforcement_level`   | 已在分支上更新必需拉取请求审查的强制执行。 可以是 `0`（已停用）、`1`（非管理员）`2`（所有人）之一。 |
| `protected_branch.update_required_status_checks_enforcement_level` | 已在分支上更新必需状态检查的强制执行。                                     |
| `protected_branch.rejected_ref_update`                             | 分支更新尝试被拒。                                               |
| `protected_branch.policy_override`                                 | 分支保护要求被仓库管理员覆盖。                                         |

## 仓库

| 操作                                         | 描述                                                                                                                                                                                                        |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.access`                              | 仓库的可见性已更改为私有{% ifversion ghes %}、公共{% endif %} 或内部。                                                                                                                                                       |
| `repo.archived`                            | 已存档仓库。 更多信息请参阅“[存档 {% data variables.product.prodname_dotcom %} 仓库](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)”。                                                  |
| `repo.add_member`                          | 已向仓库添加协作者。                                                                                                                                                                                                |
| `repo.config`                              | 站点管理员已阻止强制推送。 更多信息请参阅“[阻止对仓库进行强制推送](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)”。                                                            |
| `repo.create`                              | 已创建仓库。                                                                                                                                                                                                    |
| `repo.destroy`                             | 已删除仓库。                                                                                                                                                                                                    |
| `repo.remove_member`                       | 已从仓库中移除协作者。                                                                                                                                                                                               |
| `repo.rename`                              | 已重命名仓库。                                                                                                                                                                                                   |
| `repo.transfer`                            | 用户已接受接收传输仓库的请求。                                                                                                                                                                                           |
| `repo.transfer_start`                      | 用户已发送向另一用户或组织传输仓库的请求。                                                                                                                                                                                     |
| `repo.unarchived`                          | 已取消存档仓库。 更多信息请参阅“[存档 {% data variables.product.prodname_dotcom %} 仓库](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)”。{% ifversion ghes %}
| `repo.config.disable_anonymous_git_access` | 已为仓库禁用匿名 Git 读取权限。 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)。”                                                       |
| `repo.config.enable_anonymous_git_access`  | 已为仓库启用匿名 Git 读取权限。 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)。”                                                       |
| `repo.config.lock_anonymous_git_access`    | 已锁定仓库的匿名 Git 读取权限设置，阻止仓库管理员更改（启用或禁用）此设置。 更多信息请参阅“[阻止用户更改匿名 Git 读取权限](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”。            |
| `repo.config.unlock_anonymous_git_access`  | 已解锁仓库的匿名 Git 读取权限设置，允许仓库管理员更改（启用或禁用）此设置。 更多信息请参阅“[阻止用户更改匿名 Git 读取权限](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”。{% endif %}

{% if secret-scanning-audit-log-custom-patterns %}
## 秘密扫描

| 操作 | 描述                                                                                                                                                                                                                                                                                                                                                  |
| -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    | `business_secret_scanning_custom_pattern.create` | Triggered when an enterprise-level custom pattern is published for secret scanning. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account)." |
|    | `business_secret_scanning_custom_pattern.update` | Triggered when changes to an enterprise-level custom pattern are saved for secret scanning.                                                                                                                                                                                                      |
|    | `business_secret_scanning_custom_pattern.delete` | Triggered when an enterprise-level custom pattern is removed from secret scanning.                                                                                                                                                                                                               |
{% endif %}

## 站点管理员工具

| 操作                      | 描述                                                                    |
| ----------------------- | --------------------------------------------------------------------- |
| `staff.disable_repo`    | 站点管理员已禁用对仓库及其所有复刻的访问。                                                 |
| `staff.enable_repo`     | 站点管理员重新启用了对仓库及其所有复刻的访问权限。{% ifversion ghae or ghes > 3.2 %}
| `staff.exit_fake_login` | 站点管理员在 {% data variables.product.product_name %} 上结束了模拟会话。            |
| `staff.fake_login`      | 站点管理员以另一用户的身份登录 {% data variables.product.product_name %}。{% endif %}
| `staff.repo_unlock`     | 站点管理员已解锁（临时获得完全访问权限）用户的一个私有仓库。                                        |
| `staff.unlock`          | 站点管理员已解锁（临时获得完全访问权限）用户的所有私有仓库。                                        |

## 团队

| 操作                        | 描述                                          |
| ------------------------- | ------------------------------------------- |
| `team.create`             | 已向团队添加用户帐户或仓库。                              |
| `team.delete`             | 用户帐户或仓库已从团队中删除。{% ifversion ghes or ghae %}
| `team.demote_maintainer`  | 用户从团队维护员降级为团队成员。{% endif %}
| `team.destroy`            | 团队被删除。{% ifversion ghes or ghae %}
| `team.promote_maintainer` | 用户从团队成员晋升为团队维护员。{% endif %}

## 用户

| 操作                              | 描述                                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `user.add_email`                | 已向用户帐户添加电子邮件地址。                                                                                               |
| `user.async_delete`             | 异步作业已开始破坏用户帐户，最终触发 `user.delete`。{% ifversion ghes %}
| `user.change_password`          | 用户已更改其密码。{% endif %}
| `user.create`                   | 已创建新的用户帐户。                                                                                                    |
| `user.delete`                   | 已通过异步作业销毁用户帐户。                                                                                                |
| `user.demote`                   | 已将站点管理员降级为普通用户帐户。                                                                                             |
| `user.destroy`                  | 用户已删除其帐户，触发 `user.async_delete`。{% ifversion ghes %}
| `user.failed_login`             | 用户尝试登录时使用的用户名、密码或双重身份验证码不正确。                                                                                  |
| `user.forgot_password`          | 用户通过登录页面请求了密码重置。{% endif %}
| `user.login`                    | 用户已登录。{% ifversion ghes or ghae %}
| `user.mandatory_message_viewed` | 用户查看必读消息（详情请参阅“[自定义用户消息](/admin/user-management/customizing-user-messages-for-your-enterprise)”）| {% endif %}
| `user.promote`                  | 已将普通用户帐户升级为站点管理员。                                                                                             |
| `user.remove_email`             | 已从用户帐户中移除电子邮件地址。                                                                                              |
| `user.rename`                   | 已更改用户名。                                                                                                       |
| `user.suspend`                  | 用户帐户被站点管理员暂停。{% ifversion ghes %}
| `user.two_factor_requested`     | 已提示用户输入双重身份验证码。{% endif %}
| `user.unsuspend`                | 站点管理员已取消挂起用户帐户。                                                                                               |

{% ifversion ghes > 3.1 or ghae %}
## 工作流程

{% data reusables.actions.actions-audit-events-workflow %}
{% endif %}

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [部署密钥]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [OAuth 访问令牌]: /developers/apps/authorizing-oauth-apps
  [OAuth 应用程序]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
