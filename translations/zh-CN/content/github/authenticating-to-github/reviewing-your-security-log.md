---
title: 审查您的安全日志
intro: 您可以查看用户帐户的安全日志，以更好地了解您执行的操作以及其他人执行的与您有关的操作。
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-your-security-log
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 访问安全日志

安全日志列出过去 90 天内执行的所有操作{% if currentVersion ver_lt "enterprise-server@2.20" %} 最多 50 条{% endif %}。

{% data reusables.user_settings.access_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
2. 在用户设置侧边栏中，单击 **Security log（安全日志）**。 ![安全日志选项卡](/assets/images/help/settings/audit-log-tab.png)
{% else %}
{% data reusables.user_settings.security %}
3. 在“Security history（安全历史记录）”下，将显示您的日志。 ![安全日志](/assets/images/help/settings/user_security_log.png)
4. 单击条目以查看有关该事件的更多信息。 ![安全日志](/assets/images/help/settings/user_security_history_action.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### 搜索安全日志

{% data reusables.audit_log.audit-log-search %}

#### 基于执行的操作搜索
{% else %}
### 了解安全日志中的事件
{% endif %}

安全日志中列出的事件由您的操作触发。 操作分为以下几类：

| 类别名称                                                                                   | 描述                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |{% if currentVersion == "free-pro-team@latest" %}
| [`account_recovery_token`](#account_recovery_token-category-actions)                   | 包含与[添加恢复令牌](/articles/configuring-two-factor-authentication-recovery-methods)相关的所有活动。                                                                                                                                                                                                                                                            |
| [`计费，帐单`](#billing-category-actions)                                                   | 包含与帐单信息相关的所有活动。                                                                                                                                                                                                                                                                                                                                  |
| [`codespaces`](#codespaces-category-actions)                                           | 包含与 {% data variables.product.prodname_codespaces %} 相关的所有活动。 更多信息请参阅“[关于 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)”。                                                                                                                                                        |
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | 包含与签署 {% data variables.product.prodname_marketplace %} 开发者协议相关的所有活动。                                                                                                                                                                                                                                                                            |
| [`marketplace_listing`](#marketplace_listing-category-actions)                         | 包含与 {% data variables.product.prodname_marketplace %} 中列出的应用程序相关的所有活动。{% endif %}
| [`oauth_access`](#oauth_access-category-actions)                                       | 包含与您已连接的 [{% data variables.product.prodname_oauth_app %}](/articles/authorizing-oauth-apps) 相关的所有活动。{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions)                                   | 包含与 {% data variables.product.prodname_dotcom %} 订阅支付相关的所有活动。{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                 | 包含与头像相关的所有活动。                                                                                                                                                                                                                                                                                                                                    |
| [`project`](#project-category-actions)                                                 | 包含与项目板相关的所有活动。                                                                                                                                                                                                                                                                                                                                   |
| [`public_key`](#public_key-category-actions)                                           | 包含与[公共 SSH 密钥](/articles/adding-a-new-ssh-key-to-your-github-account)相关的所有活动。                                                                                                                                                                                                                                                                    |
| [`repo`](#repo-category-actions)                                                       | 包含与您拥有的仓库相关的所有活动。{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions)                                               | 包含与 {% data variables.product.prodname_sponsors %}和赞助者按钮相关的所有事件（请参阅“[关于 {% data variables.product.prodname_sponsors %}](/articles/about-github-sponsors)”和“[在仓库中显示赞助者按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）{% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| [`团队`](#team-category-actions)                                                         | 包含与您所在团队相关的所有活动。{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`two_factor_authentication`](#two_factor_authentication-category-actions)             | 包含与[双重身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)相关的所有活动。{% endif %}
| [`用户`](#user-category-actions)                                                         | 包含与您的帐户相关的所有活动。                                                                                                                                                                                                                                                                                                                                  |

{% if currentVersion == "free-pro-team@latest" %}

### 导出安全日志

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

### 安全日志操作

安全日志中记录为事件的一些最常见操作的概述。

{% if currentVersion == "free-pro-team@latest" %}

#### `account_recovery_token` 类操作

| 操作              | 描述                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------- |
| `confirm`       | 当您成功[使用恢复提供程序存储新令牌](/articles/configuring-two-factor-authentication-recovery-methods)时触发。 |
| `recover`       | 当您成功[取回帐户恢复令牌](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)时触发。    |
| `recover_error` | 当 {% data variables.product.prodname_dotcom %} 无法验证所使用的令牌时触发。                             |

#### `billing` 类操作

| 操作                    | 描述                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | 当您[更改 {% data variables.product.prodname_dotcom %} 的支付方式](/articles/adding-or-editing-a-payment-method)时触发。 |
| `change_email`        | 当您[更改您的电子邮件地址](/articles/changing-your-primary-email-address)时触发。                                           |

#### `codespaces` 类操作

| 操作                                   | 描述                                                                                                                                                                |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `trusted_repositories_access_update` | 当您更改用户帐户的 [{% data variables.product.prodname_codespaces %} 访问权限和安全设置](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。 |

#### `marketplace_agreement_signature` 类操作

| 操作       | 描述                                                              |
| -------- | --------------------------------------------------------------- |
| `create` | 在签署 {% data variables.product.prodname_marketplace %} 开发者协议时触发。 |

#### `marketplace_listing` 类操作

| 操作        | 描述                                                                   |
| --------- | -------------------------------------------------------------------- |
| `批准`      | 当您的列表被批准包含在 {% data variables.product.prodname_marketplace %} 中时触发。  |
| `create`  | 当您在 {% data variables.product.prodname_marketplace %} 中为应用程序创建列表时触发。 |
| `delist`  | 当您的列表从 {% data variables.product.prodname_marketplace %} 中被删除时触发。    |
| `redraft` | 将您的列表被返回到草稿状态时触发。                                                    |
| `reject`  | 当您的列表被拒绝包含在 {% data variables.product.prodname_marketplace %} 中时触发。  |

{% endif %}

#### `oauth_access` 类操作

| 操作        | 描述                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------ |
| `create`  | 当您[授予 {% data variables.product.prodname_oauth_app %} 访问权限](/articles/authorizing-oauth-apps)时触发。                      |
| `destroy` | 当您[撤销 {% data variables.product.prodname_oauth_app %} 对您帐户的访问权限](/articles/reviewing-your-authorized-integrations)时触发。 |

{% if currentVersion == "free-pro-team@latest" %}

#### `payment_method` 类操作

| 操作       | 描述                                                     |
| -------- | ------------------------------------------------------ |
| `clear`  | 当存档的[付款方式](/articles/removing-a-payment-method)被删除时触发。 |
| `create` | 在添加新的付款方式（例如新的信用卡或 PayPal 帐户）时触发。                      |
| `update` | 当现有付款方式被更新时触发。                                         |

{% endif %}

#### `profile_picture` 类操作

| 操作       | 描述                                                           |
| -------- | ------------------------------------------------------------ |
| `update` | 当您[设置或更新个人资料图片](/articles/setting-your-profile-picture/)时触发。 |

#### `project` 类操作

| 操作                       | 描述                                |
| ------------------------ | --------------------------------- |
| `access`                 | 当项目板的可见性被更改时触发。                   |
| `create`                 | 在创建项目板时触发。                        |
| `rename`                 | 当项目板被重命名时触发。                      |
| `update`                 | 当项目板被更新时触发。                       |
| `delete`                 | 在删除项目板时触发。                        |
| `link`                   | 当仓库被链接到项目板时触发。                    |
| `unlink`                 | 当仓库从项目板解除链接时触发。                   |
| `update_user_permission` | 在项目板中添加或删除外部协作者时，或者他们的权限级别被更改时触发。 |

#### `public_key` 类操作

| 操作       | 描述                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `create` | 当您[为 {% data variables.product.product_name %} 帐户添加新公共 SSH 密钥](/articles/adding-a-new-ssh-key-to-your-github-account)时触发。 |
| `delete` | 当您[删除 {% data variables.product.product_name %} 帐户的公共 SSH 密钥](/articles/reviewing-your-ssh-keys)时触发。                      |

#### `repo` 类操作

| 操作                                    | 描述                                                                                                                                                                                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | 当您拥有的仓库[从“私有”切换到“公共”](/articles/making-a-private-repository-public)（反之亦然）时触发。                                                                                                                                                                                       |
| `add_member`                          | 当 {% data variables.product.product_name %} 用户 {% if currentVersion == "free-pro-team@latest" %}[被邀请协作使用](/articles/inviting-collaborators-to-a-personal-repository){% else %}[被授权协作使用](/articles/inviting-collaborators-to-a-personal-repository){% endif %}仓库时触发。 |
| `add_topic`                           | 当仓库所有者向仓库[添加主题](/articles/classifying-your-repository-with-topics)时触发。                                                                                                                                                                                              |
| `archived`                            | 当仓库所有者[存档仓库](/articles/about-archiving-repositories)时触发。{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access` | 当公共仓库中[禁用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。                                                                                                                                       |
| `config.enable_anonymous_git_access`  | 当公共仓库中[启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。                                                                                                                                       |
| `config.lock_anonymous_git_access`    | 当仓库的[匿名 Git 读取权限设置被锁定](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。                                                                                                                  |
| `config.unlock_anonymous_git_access`  | 当仓库的[匿名 Git 读取权限设置被解锁](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。{% endif %}
| `create`                              | 在[创建新仓库](/articles/creating-a-new-repository)时触发。                                                                                                                                                                                                                   |
| `destroy`                             | 当[仓库被删除](/articles/deleting-a-repository)时触发。{% if currentVersion == "free-pro-team@latest" %}
| `禁用`                                  | 当仓库被禁用（例如，因[资金不足](/articles/unlocking-a-locked-account)）时触发。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `启用`                                  | 在重新启用仓库时触发。{% endif %}
| `remove_member`                       | 从[仓库中删除 {% data variables.product.product_name %} 用户的协作者身份](/articles/removing-a-collaborator-from-a-personal-repository)时触发。                                                                                                                                       |
| `remove_topic`                        | 当仓库所有者从仓库中删除主题时触发。                                                                                                                                                                                                                                                  |
| `rename`                              | 当[仓库被重命名](/articles/renaming-a-repository)时触发。                                                                                                                                                                                                                      |
| `转让`                                  | 当[仓库被转让](/articles/how-to-transfer-a-repository)时触发。                                                                                                                                                                                                                |
| `transfer_start`                      | 在仓库转让即将发生时触发。                                                                                                                                                                                                                                                       |
| `unarchived`                          | 当仓库所有者取消存档仓库时触发。                                                                                                                                                                                                                                                    |

{% if currentVersion == "free-pro-team@latest" %}
#### `sponsors` 类操作

| 操作                                            | 描述                                                                                                                                                                                                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo_funding_link_button_toggle`             | 在仓库中启用或禁用赞助按钮时触发（请参阅“[在仓库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）                                                                                                                                                        |
| `repo_funding_links_file_action`              | 更改仓库中的 FUNDING 文件时触发（请参阅“[在仓库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）                                                                                                                                                    |
| `sponsor_sponsorship_cancel`                  | 当您取消赞助时触发（请参阅“[降级赞助](/articles/downgrading-a-sponsorship)”）                                                                                                                                                                                          |
| `sponsor_sponsorship_create`                  | 当您赞助帐户时触发（请参阅“[赞助开源贡献者](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor)”）                                                                                                                   |
| `sponsor_sponsorship_preference_change`       | 当您更改是否接收被赞助开发者的电子邮件更新时触发（请参阅“[管理赞助](/articles/managing-your-sponsorship)”）                                                                                                                                                                           |
| `sponsor_sponsorship_tier_change`             | 当您升级或降级赞助时触发（请参阅“[升级赞助](/articles/upgrading-a-sponsorship)”和“[降级赞助](/articles/downgrading-a-sponsorship)”）                                                                                                                                           |
| `sponsored_developer_approve`                 | 当您的 {% data variables.product.prodname_sponsors %} 帐户被批准时触发（请参阅“[为您的用户帐户设置 {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)”）     |
| `sponsored_developer_create`                  | 当您的 {% data variables.product.prodname_sponsors %} 帐户创建时触发（请参阅“[为您的用户帐户设置 {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)”）      |
| `sponsored_developer_profile_update`          | 在编辑您的被赞助开发者个人资料时触发（请参阅“[编辑 {% data variables.product.prodname_sponsors %} 的个人资料详细信息](/github/supporting-the-open-source-community-with-github-sponsors/editing-your-profile-details-for-github-sponsors)”）                                           |
| `sponsored_developer_request_approval`        | 提交您对 {% data variables.product.prodname_sponsors %} 的申请以供审批时触发（请参阅“[为您的用户帐户设置 {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)”）  |
| `sponsored_developer_tier_description_update` | 当您更改赞助等级的说明时触发（请参阅“[更改赞助等级](/articles/changing-your-sponsorship-tiers)”）                                                                                                                                                                             |
| `sponsored_developer_update_newsletter_send`  | 当您向赞助者发送电子邮件更新时触发（请参阅“[联系赞助者](/articles/contacting-your-sponsors)”）                                                                                                                                                                                  |
| `waitlist_invite_sponsored_developer`         | 当您从等候名单被邀请加入 {% data variables.product.prodname_sponsors %} 时触发（请参阅“[为您的用户帐户设置 {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)”） |
| `waitlist_join`                               | 当您加入成为被赞助开发者的等候名单时触发（请参阅“[为您的用户帐户设置 {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)”）                                            |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `successor_invitation` 类操作

| 操作        | 描述                                                                                                                                                                |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`  | 当您接受继承邀请时触发（请参阅“[保持用户帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
| `cancel`  | 当您取消继承邀请时触发（请参阅“[保持用户帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
| `create`  | 当您创建继承邀请时触发（请参阅“[保持用户帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
| `decline` | 当您拒绝继承邀请时触发（请参阅“[保持用户帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
| `revoke`  | 当您撤销继承邀请时触发（请参阅“[保持用户帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

#### `team` 类操作

| 操作                  | 描述                                                                       |
| ------------------- | ------------------------------------------------------------------------ |
| `add_member`        | 当您所属组织的成员[将您添加到团队](/articles/adding-organization-members-to-a-team)时触发。  |
| `add_repository`    | 当您所属团队被授予控制仓库的权限时触发。                                                     |
| `create`            | 当您所属组织中创建了新团队时触发。                                                        |
| `destroy`           | 当您所属团队从组织中被删除时触发。                                                        |
| `remove_member`     | [从您所属团队中删除组织成员](/articles/removing-organization-members-from-a-team)时触发。 |
| `remove_repository` | 当仓库不再受团队控制时触发。                                                           |

{% endif %}

{% if currentVersion != "github-ae@latest" %}
#### `two_factor_authentication` 类操作

| 操作         | 描述                                                                                  |
| ---------- | ----------------------------------------------------------------------------------- |
| `enabled`  | 在启用[双重身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)时触发。 |
| `disabled` | 在禁用双重身份验证时触发。                                                                       |
{% endif %}

#### `user` 类操作

| 操作                                                                                                                                                                                         | 描述                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_email`                                                                                                                                                                                | 当您                                                                                                                                                        |
| {% if currentVersion != "github-ae@latest" %}[添加新电子邮件地址](/articles/changing-your-primary-email-address){% else %}添加新电子邮件地址{% endif %}时触发。{% if currentVersion == "free-pro-team@latest" %} |                                                                                                                                                           |
| `codespaces_trusted_repo_access_granted`                                                                                                                                                   | 当您[允许为某个仓库创建的代码空间访问您的用户帐户拥有的其他仓库]时触发(/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)。                              |
| `codespaces_trusted_repo_access_revoked`                                                                                                                                                   | 当您[禁止为某个仓库创建的代码空间访问您的用户帐户拥有的其他仓库]时触发(/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)。                              |{% endif %}
| `create`                                                                                                                                                                                   | 在创建新帐户时触发。{% if currentVersion != "github-ae@latest" %}
| `change_password`                                                                                                                                                                          | 当您更改密码时触发。                                                                                                                                                |
| `forgot_password`                                                                                                                                                                          | 在您要求[重置密码](/articles/how-can-i-reset-my-password)时触发。{% endif %}
| `hide_private_contributions_count`                                                                                                                                                         | 当您[在个人资料中隐藏私有贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)时触发。                                                          |
| `login`                                                                                                                                                                                    | 当您登录到 {% data variables.product.product_location %} 时触发。{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}


`mandatory_message_viewed`   | 当您查看必读消息时触发（更多信息请参阅“[自定义用户消息](/admin/user-management/customizing-user-messages-for-your-enterprise)” | |{% endif %}| | `failed_login` | 当您未能成功登录时触发。 | `remove_email` | 当您删除电子邮件地址时触发。 | `rename` | 当您重命名帐户时触发。{% if currentVersion == "free-pro-team@latest" %} | `report_content` | 当您[举报议题或拉取请求，或者举报对议题、拉取请求或提交的评论](/articles/reporting-abuse-or-spam)时触发。{% endif %} | `show_private_contributions_count` | 当您[在个人资料中公布私有贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)时触发。{% if currentVersion != "github-ae@latest" %} | `two_factor_requested` | 当 {% data variables.product.product_name %} 要求您提供[双重身份验证代码](/articles/accessing-github-using-two-factor-authentication)时触发。{% endif %}

#### `user_status` 类操作

| 操作        | 描述                                                                                           |
| --------- | -------------------------------------------------------------------------------------------- |
| `update`  | 当您在个人资料中设置或更改状态时触发。 更多信息请参阅“[设置状态](/articles/personalizing-your-profile/#setting-a-status)”。 |
| `destroy` | 当您在个人资料中清除状态时触发。                                                                             |

