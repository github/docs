---
title: 审查您的安全日志
intro: 您可以查看个人帐户的安全日志，以更好地了解您执行的操作以及其他人执行的与您有关的操作。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 安全日志
---

## 访问安全日志

安全日志列出了过去 90 天内执行的所有操作。

{% data reusables.user-settings.access_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 在边栏的“Archives（存档）”部分中，单击 **{% octicon "log" aria-label="The log icon" %} 安全日志**。
{% else %}
1. 在用户设置侧边栏中，单击 **Security log（安全日志）**。 ![安全日志选项卡](/assets/images/help/settings/audit-log-tab.png)
{% endif %}

## 搜索安全日志

{% data reusables.audit_log.audit-log-search %}

### 基于执行的操作搜索

安全日志中列出的事件由您的操作触发。 操作分为以下几类：

| 类别名称                                                                                   | 描述                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| [`计费，帐单`](#billing-category-actions)                                                   | 包含与帐单信息相关的所有活动。                                                                                                                                                                                                                                                                                                  |
| [`codespaces`](#codespaces-category-actions)                                           | 包含与 {% data variables.product.prodname_codespaces %} 相关的所有活动。 更多信息请参阅“[关于 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)”。                                                                                                                        |
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | 包含与签署 {% data variables.product.prodname_marketplace %} 开发者协议相关的所有活动。                                                                                                                                                                                                                                            |
| [`marketplace_listing`](#marketplace_listing-category-actions)                         | 包含与 {% data variables.product.prodname_marketplace %} 中列出的应用程序相关的所有活动。{% endif %}
| [`oauth_access`](#oauth_access-category-actions)                                       | 包含与您已连接的 [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) 相关的所有活动。{% ifversion fpt or ghec %}
| [`payment_method`](#payment_method-category-actions)                                   | 包含与 {% data variables.product.prodname_dotcom %} 订阅支付相关的所有活动。{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                 | 包含与头像相关的所有活动。                                                                                                                                                                                                                                                                                                    |
| [`project`](#project-category-actions)                                                 | 包含与项目板相关的所有活动。                                                                                                                                                                                                                                                                                                   |
| [`public_key`](#public_key-category-actions)                                           | 包含与[公共 SSH 密钥](/articles/adding-a-new-ssh-key-to-your-github-account)相关的所有活动。                                                                                                                                                                                                                                    |
| [`repo`](#repo-category-actions)                                                       | 包含与您拥有的仓库相关的所有活动。{% ifversion fpt or ghec %}
| [`sponsors`](#sponsors-category-actions)                                               | 包含与 {% data variables.product.prodname_sponsors %}和赞助者按钮相关的所有事件（请参阅“[关于 {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”和“[在仓库中显示赞助者按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）{% endif %}{% ifversion ghes or ghae %}
| [`团队`](#team-category-actions)                                                         | 包含与您所在团队相关的所有活动。{% endif %}{% ifversion not ghae %}
| [`two_factor_authentication`](#two_factor_authentication-category-actions)             | 包含与[双重身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)相关的所有活动。{% endif %}
| [`用户`](#user-category-actions)                                                         | 包含与您的帐户相关的所有活动。                                                                                                                                                                                                                                                                                                  |

{% ifversion fpt or ghec %}

## 导出安全日志

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## 安全日志操作

安全日志中记录为事件的一些最常见操作的概述。

{% ifversion fpt or ghec %}

### `billing` 类操作

| 操作                    | 描述                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | 当您[更改 {% data variables.product.prodname_dotcom %} 的支付方式](/articles/adding-or-editing-a-payment-method)时触发。 |
| `change_email`        | 当您[更改您的电子邮件地址](/articles/changing-your-primary-email-address)时触发。                                           |

### `codespaces` 类操作

| 操作                                   | 描述                                                                                                                                                                |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                             | 当您[创建代码空间](/github/developing-online-with-codespaces/creating-a-codespace)时触发。                                                                                    |
| `resume`                             | 恢复暂停的代码空间时触发。                                                                                                                                                     |
| `delete`                             | 当您[删除代码空间](/github/developing-online-with-codespaces/deleting-a-codespace)时触发。                                                                                    |
| `manage_access_and_security`         | 当您更新[代码空间可以访问的仓库时](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)触发。                                                      |
| `trusted_repositories_access_update` | 当您更改个人帐户的 [{% data variables.product.prodname_codespaces %} 访问权限和安全设置](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。 |

### `marketplace_agreement_signature` 类操作

| 操作       | 描述                                                              |
| -------- | --------------------------------------------------------------- |
| `create` | 在签署 {% data variables.product.prodname_marketplace %} 开发者协议时触发。 |

### `marketplace_listing` 类操作

| 操作        | 描述                                                                   |
| --------- | -------------------------------------------------------------------- |
| `批准`      | 当您的列表被批准包含在 {% data variables.product.prodname_marketplace %} 中时触发。  |
| `create`  | 当您在 {% data variables.product.prodname_marketplace %} 中为应用程序创建列表时触发。 |
| `delist`  | 当您的列表从 {% data variables.product.prodname_marketplace %} 中被删除时触发。    |
| `redraft` | 将您的列表被返回到草稿状态时触发。                                                    |
| `reject`  | 当您的列表被拒绝包含在 {% data variables.product.prodname_marketplace %} 中时触发。  |

{% endif %}

### `oauth_authority` 类别操作

| 操作        | 描述                                                                                                                                                                                                                                                                                                                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`  | 当您[授予 {% data variables.product.prodname_oauth_app %} 访问权限](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)时触发。                                                                                                                                                       |
| `destroy` | 当您 [撤销 {% data variables.product.prodname_oauth_app %}对您帐户的访问](/articles/reviewing-your-authorized-integrations){% ifversion fpt or ghae or ghes > 3.2 or ghec %} 时，以及当 [授权被吊销或过期](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)时触发。{% else %}。{% endif %}

{% ifversion fpt or ghec %}

### `payment_method` 类操作

| 操作       | 描述                                |
| -------- | --------------------------------- |
| `create` | 在添加新的付款方式（例如新的信用卡或 PayPal 帐户）时触发。 |
| `update` | 当现有付款方式被更新时触发。                    |

{% endif %}

### `profile_picture` 类操作

| 操作       | 描述                                                           |
| -------- | ------------------------------------------------------------ |
| `update` | 当您[设置或更新个人资料图片](/articles/setting-your-profile-picture/)时触发。 |

### `project` 类操作

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

### `public_key` 类操作

| 操作       | 描述                                                                                                                                                                                                                      |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | 当您 [向您在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户添加新的公有 SSH 密钥时触发](/articles/adding-a-new-ssh-key-to-your-github-account)。 |
| `delete` | 当您 [从您在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户删除公有 SSH 密钥时触发](/articles/reviewing-your-ssh-keys)。                       |

### `repo` 类操作

| 操作                                    | 描述                                                                                                                                                                                                                                           |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | 当您拥有的仓库[从“私有”切换到“公共”](/articles/making-a-private-repository-public)（反之亦然）时触发。                                                                                                                                                                |
| `add_member`                          | 当 {% data variables.product.product_name %} 用户{% ifversion fpt or ghec %}[被邀请协作使用](/articles/inviting-collaborators-to-a-personal-repository){% else %}[被授权协作使用](/articles/inviting-collaborators-to-a-personal-repository){% endif %}仓库时触发。 |
| `add_topic`                           | 当仓库所有者向仓库[添加主题](/articles/classifying-your-repository-with-topics)时触发。                                                                                                                                                                       |
| `archived`                            | 当仓库所有者[存档仓库](/articles/about-archiving-repositories)时触发。{% ifversion ghes %}
| `config.disable_anonymous_git_access` | 当公共仓库中[禁用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。                                                                                                                |
| `config.enable_anonymous_git_access`  | 当公共仓库中[启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。                                                                                                                |
| `config.lock_anonymous_git_access`    | 当仓库的[匿名 Git 读取权限设置被锁定](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。                                                                                           |
| `config.unlock_anonymous_git_access`  | 当仓库的[匿名 Git 读取权限设置被解锁](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。{% endif %}
| `create`                              | 在[创建新仓库](/articles/creating-a-new-repository)时触发。                                                                                                                                                                                            |
| `destroy`                             | 当[仓库被删除](/articles/deleting-a-repository)时触发。{% ifversion fpt or ghec %}
| `禁用`                                  | 当仓库被禁用（例如，因[资金不足](/articles/unlocking-a-locked-account)）时触发。{% endif %}{% ifversion fpt or ghec %}
| `download_zip`                        | 在下载存储库的 ZIP 或 TAR 存档时触发。                                                                                                                                                                                                                     |
| `启用`                                  | 在重新启用仓库时触发。{% endif %}
| `remove_member`                       | 从[仓库中删除 {% data variables.product.product_name %} 用户的协作者身份](/articles/removing-a-collaborator-from-a-personal-repository)时触发。                                                                                                                |
| `remove_topic`                        | 当仓库所有者从仓库中删除主题时触发。                                                                                                                                                                                                                           |
| `rename`                              | 当[仓库被重命名](/articles/renaming-a-repository)时触发。                                                                                                                                                                                               |
| `转让`                                  | 当[仓库被转让](/articles/how-to-transfer-a-repository)时触发。                                                                                                                                                                                         |
| `transfer_start`                      | 在仓库转让即将发生时触发。                                                                                                                                                                                                                                |
| `unarchived`                          | 当仓库所有者取消存档仓库时触发。                                                                                                                                                                                                                             |

{% ifversion fpt or ghec %}
### `sponsors` 类操作

| 操作                                            | 描述                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom_amount_settings_change`               | 启用或禁用自定义金额时或更改建议的自定义金额时触发（请参阅“[管理您的赞助级别](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)”）                                                                                                                                                                           |
| `repo_funding_links_file_action`              | 更改仓库中的 FUNDING 文件时触发（请参阅“[在仓库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）                                                                                                                                                                                                                       |
| `sponsor_sponsorship_cancel`                  | 当您取消赞助时触发（请参阅“[降级赞助](/articles/downgrading-a-sponsorship)”）                                                                                                                                                                                                                                                             |
| `sponsor_sponsorship_create`                  | 当您赞助帐户时触发（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”）                                                                                                                                                                                                          |
| `sponsor_sponsorship_payment_complete`        | 当您赞助一个帐户并且您的付款已经处理完毕后触发（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”）                                                                                                                                                                                            |
| `sponsor_sponsorship_preference_change`       | 当您更改是否接收被赞助开发者的电子邮件更新时触发（请参阅“[管理赞助](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)”）                                                                                                                                                                                                          |
| `sponsor_sponsorship_tier_change`             | 当您升级或降级赞助时触发（请参阅“[升级赞助](/articles/upgrading-a-sponsorship)”和“[降级赞助](/articles/downgrading-a-sponsorship)”）                                                                                                                                                                                                              |
| `sponsored_developer_approve`                 | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")                     |
| `sponsored_developer_create`                  | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")                      |
| `sponsored_developer_disable`                 | 帐户 {% data variables.product.prodname_sponsors %} 禁用时触发                                                                                                                                                                                                                                                                 |
| `sponsored_developer_redraft`                 | 当您的 {% data variables.product.prodname_sponsors %} 帐户从已批准状态恢复为草稿状态时触发                                                                                                                                                                                                                                                   |
| `sponsored_developer_profile_update`          | 在编辑您的被赞助开发者个人资料时触发（请参阅“[编辑 {% data variables.product.prodname_sponsors %} 的个人资料详细信息](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)”）                                                                                                                       |
| `sponsored_developer_request_approval`        | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)") |
| `sponsored_developer_tier_description_update` | 当您更改赞助等级的说明时触发（请参阅“[管理赞助等级](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)”）                                                                                                                                                                                                 |
| `sponsored_developer_update_newsletter_send`  | 当您向赞助者发送电子邮件更新时触发（请参阅“[联系赞助者](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)”）                                                                                                                                                                                                      |
| `waitlist_invite_sponsored_developer`         | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")    |
| `waitlist_join`                               | Triggered when you join the waitlist to become a sponsored developer (see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")                                       |
{% endif %}

{% ifversion fpt or ghec %}
### `successor_invitation` 类操作

| 操作        | 描述                                                                                                                                                                |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`  | 当您接受继承邀请时触发（请参阅“[保持个人帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
| `cancel`  | 当您取消继承邀请时触发（请参阅“[保持个人帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
| `create`  | 当您创建继承邀请时触发（请参阅“[保持个人帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
| `decline` | 当您拒绝继承邀请时触发（请参阅“[保持个人帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
| `revoke`  | 当您撤销继承邀请时触发（请参阅“[保持个人帐户仓库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”） |
{% endif %}

{% ifversion ghes or ghae %}

### `team` 类操作

| 操作                  | 描述                                                                       |
| ------------------- | ------------------------------------------------------------------------ |
| `add_member`        | 当您所属组织的成员[将您添加到团队](/articles/adding-organization-members-to-a-team)时触发。  |
| `add_repository`    | 当您所属团队被授予控制仓库的权限时触发。                                                     |
| `create`            | 当您所属组织中创建了新团队时触发。                                                        |
| `destroy`           | 当您所属团队从组织中被删除时触发。                                                        |
| `remove_member`     | [从您所属团队中删除组织成员](/articles/removing-organization-members-from-a-team)时触发。 |
| `remove_repository` | 当仓库不再受团队控制时触发。                                                           |

{% endif %}

{% ifversion not ghae %}
### `two_factor_authentication` 类操作

| 操作         | 描述                                                                                  |
| ---------- | ----------------------------------------------------------------------------------- |
| `enabled`  | 在启用[双重身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)时触发。 |
| `disabled` | 在禁用双重身份验证时触发。                                                                       |
{% endif %}

### `user` 类操作

| 操作                                                                                                                                              | 描述                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `add_email`                                                                                                                                     | 当您                                                                                                                            |
| {% ifversion not ghae %}[添加新电子邮件地址](/articles/changing-your-primary-email-address){% else %}添加新电子邮件地址{% endif %}时触发。{% ifversion fpt or ghec %} |                                                                                                                               |
| `codespaces_trusted_repo_access_granted`                                                                                                        | 当[允许您为存储库创建的代码空间访问您的个人帐户拥有的其他存储库](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。  |
| `codespaces_trusted_repo_access_revoked`                                                                                                        | 当[不允许您为存储库创建的代码空间访问您的个人帐户拥有的其他存储库](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。 |{% endif %}
| `create`                                                                                                                                        | 在创建新个人帐户时触发。{% ifversion not ghae %}
| `change_password`                                                                                                                               | 当您更改密码时触发。                                                                                                                    |
| `forgot_password`                                                                                                                               | 在您要求[重置密码](/articles/how-can-i-reset-my-password)时触发。{% endif %}
| `hide_private_contributions_count`                                                                                                              | 当您[在个人资料中隐藏私有贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)时触发。                              |
| `login`                                                                                                                                         | 当您登录到 {% data variables.product.product_location %} 时触发。{% ifversion ghes or ghae %}


`mandatory_message_viewed`   | 当您查看必读消息时触发（更多信息请参阅“[自定义用户消息](/admin/user-management/customizing-user-messages-for-your-enterprise)” | |{% endif %}| | `failed_login` | 当您未能成功登录时触发。 | `remove_email` | 当您删除电子邮件地址时触发。 | `rename` | Triggered when you rename your account.{% ifversion fpt or ghec %} | `report_content` | Triggered when you [report an issue or pull request, or a comment on an issue, pull request, or commit](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %} | `show_private_contributions_count` | Triggered when you [publicize private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% ifversion not ghae %} | `two_factor_requested` | Triggered when {% data variables.product.product_name %} asks you for [your two-factor authentication code](/articles/accessing-github-using-two-factor-authentication).{% endif %}

### `user_status` 类操作

| 操作        | 描述                                                                                           |
| --------- | -------------------------------------------------------------------------------------------- |
| `update`  | 当您在个人资料中设置或更改状态时触发。 更多信息请参阅“[设置状态](/articles/personalizing-your-profile/#setting-a-status)”。 |
| `destroy` | 当您在个人资料中清除状态时触发。                                                                             |
