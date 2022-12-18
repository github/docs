---
title: 审查您的安全日志
intro: 你可以查看个人帐户的安全日志，以更好地了解你执行的操作以及其他人执行的与你有关的操作。
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
shortTitle: Security log
ms.openlocfilehash: af0c238e3bda40874ed09d6afb402cc6934e7c4b
ms.sourcegitcommit: 5b0becac9098ab45c2204882d719f5cf17bfff18
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120845'
---
## 访问安全日志

安全日志列出了过去 90 天内执行的所有操作。

{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. 在边栏的“存档”部分中，单击“{% octicon "log" aria-label="The log icon" %} 安全日志”。
{% else %}
1. 在“用户设置”边栏中，单击“安全日志”。
  ![安全日志选项卡](/assets/images/help/settings/audit-log-tab.png) {% endif %}

## 搜索安全日志

{% data reusables.audit_log.audit-log-search %}

### 基于执行的操作搜索

安全日志中列出的事件由您的操作触发。 操作分为以下几类：

| 类别名称 | 说明 |------------------|-------------------{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | 包含与你的账单信息相关的所有活动。
| [`codespaces`](#codespaces-category-actions) | 包含与 {% data variables.product.prodname_github_codespaces %} 相关的所有活动。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)”。
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | 包含与签署 {% data variables.product.prodname_marketplace %} 开发者协议相关的所有活动。
| [`marketplace_listing`](#marketplace_listing-category-actions) | 包含与在 {% data variables.product.prodname_marketplace %} 中推广应用相关的所有活动。{% endif %} | [`oauth_access`](#oauth_access-category-actions) | 包含与已连接的 [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)相关的所有活动。{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | 包含与支付 {% data variables.product.prodname_dotcom %} 订阅相关的所有活动。{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | 包含与{% data variables.product.pat_v2 %}相关的活动。 有关详细信息，请参阅“[创建{% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。{% endif %} | [`profile_picture`](#profile_picture-category-actions) | 包含与你的个人资料图片相关的所有活动。
| [`project`](#project-category-actions) | 包含与项目板相关的所有活动。
| [`public_key`](#public_key-category-actions) | 包含与[公共 SSH 密钥](/articles/adding-a-new-ssh-key-to-your-github-account)相关的所有活动。
| [`repo`](#repo-category-actions) | 包含与你拥有的存储库相关的所有活动。{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | 包含与 {% data variables.product.prodname_sponsors %} 和发起人按钮相关的所有事件（请参阅“[关于 {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”和“[在存储库中显示发起人按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）{% endif %}{% ifversion ghes or ghae %} | [`team`](#team-category-actions) | 包含与你所属的团队相关的所有活动。{% endif %}{% ifversion not ghae %} | [`two_factor_authentication`](#two_factor_authentication-category-actions) | 包含与[双重身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)相关的所有活动。{% endif %} | [`user`](#user-category-actions) | 包含与帐户相关的所有活动。

{% ifversion fpt or ghec %}

## 导出安全日志

{% data reusables.audit_log.export-log %} {% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## 安全日志操作

安全日志中记录为事件的一些最常见操作的概述。

{% ifversion fpt or ghec %}

### `billing` 类别操作

| 操作 | 说明
|------------------|-------------------
| `change_billing_type` | [更改 {% data variables.product.prodname_dotcom %} 的支付方式](/articles/adding-or-editing-a-payment-method)时触发。
| `change_email` | [更改电子邮件地址](/articles/changing-your-primary-email-address)时触发。

### `codespaces` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | [创建 codespace](/github/developing-online-with-codespaces/creating-a-codespace) 时触发。
| `resume` | 恢复暂停的代码空间时触发。
| `delete` | [删除 codespace](/github/developing-online-with-codespaces/deleting-a-codespace) 时触发。
| `manage_access_and_security` | 更新 [codespace 有权访问的存储库](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。
| `trusted_repositories_access_update` | [为 {% data variables.product.prodname_codespaces %} 更改个人帐户的访问权限和安全设置](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。

### `marketplace_agreement_signature` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在签署 {% data variables.product.prodname_marketplace %} 开发者协议时触发。

### `marketplace_listing` 类别操作

| 操作 | 说明
|------------------|-------------------
| `approve` | 当您的列表被批准包含在 {% data variables.product.prodname_marketplace %} 中时触发。
| `create` | 当您在 {% data variables.product.prodname_marketplace %} 中为应用程序创建列表时触发。
| `delist` | 当您的列表从 {% data variables.product.prodname_marketplace %} 中被删除时触发。
| `redraft` | 将您的列表被返回到草稿状态时触发。
| `reject` | 当您的列表被拒绝包含在 {% data variables.product.prodname_marketplace %} 中时触发。

{% endif %}

### `oauth_authorization` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | [授予对 {% data variables.product.prodname_oauth_app %} 的访问权限](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)时触发。
| `destroy` | [撤销 {% data variables.product.prodname_oauth_app %}对帐户的访问权限](/articles/reviewing-your-authorized-integrations)以及[授权被撤销或过期](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)时触发。

{% ifversion fpt or ghec %}

### `payment_method` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在添加新的付款方式（例如新的信用卡或 PayPal 帐户）时触发。
| `update` | 当现有付款方式被更新时触发。

{% endif %}

{% ifversion pat-v2 %}

### `personal_access_token` 类别操作

| 操作 | 说明
|------------------|-------------------
| `access_granted` | 向创建的{% data variables.product.pat_v2 %}授予对资源的访问权限时触发。
| `access_revoked` | 创建的{% data variables.product.pat_v2 %}被撤销时触发。 令牌仍可读取公共组织资源。
| `create` | 创建{% data variables.product.pat_v2 %}时触发。
| `credential_regenerated` | 生成{% data variables.product.pat_v2 %}时触发。
| `destroy` | 删除{% data variables.product.pat_v2 %}时触发。
| `request_cancelled` | 取消{% data variables.product.pat_v2 %}访问组织资源的挂起请求时触发。
| `request_created` | 创建{% data variables.product.pat_v2 %}来访问组织资源，并且{% data variables.product.pat_v2 %}需要在组织批准后才能访问组织资源时触发。
| `request_denied` | {% data variables.product.pat_v2 %} 访问组织资源的请求被拒绝时触发。 有关详细信息，请参阅“[管理组织中{% data variables.product.pat_generic %}的请求](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)”。

{% endif %}

### `profile_picture` 类别操作

| 操作 | 说明
|------------------|-------------------
| `update` | [设置或更新个人资料图片](/articles/setting-your-profile-picture/)时触发。

### `project` 类别操作

| 操作 | 说明
|--------------------|---------------------
| `access` | 当项目板的可见性被更改时触发。
| `create` | 在创建项目板时触发。
| `rename` | 当项目板被重命名时触发。
| `update` | 当项目板被更新时触发。
| `delete` | 在删除项目板时触发。
| `link`   | 当仓库被链接到项目板时触发。
| `unlink` | 当仓库从项目板解除链接时触发。
| `update_user_permission` | 在项目板中添加或删除外部协作者时，或者他们的权限级别被更改时触发。

### `public_key` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | [将新的公共 SSH 密钥添加到 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}上的帐户](/articles/adding-a-new-ssh-key-to-your-github-account)时触发。
| `delete` | [删除 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上的帐户的公共 SSH 密钥](/articles/reviewing-your-ssh-keys)时触发。

### `repo` 类别操作

| 操作 | 说明
|------------------|-------------------
| `access` | 当你拥有的存储库[从“专用”切换到“公共”](/articles/making-a-private-repository-public)时触发（反之亦然）。
| `add_member` | 当 {% data variables.product.product_name %} 用户{% ifversion fpt or ghec %}[被邀请协作访问](/articles/inviting-collaborators-to-a-personal-repository){% else %}[被授权协作访问](/articles/inviting-collaborators-to-a-personal-repository){% endif %}存储库时触发。
| `add_topic` | 当存储库所有者[添加主题](/articles/classifying-your-repository-with-topics)至存储库时触发。
| `archived` | 存储库所有者[存档存储库](/articles/about-archiving-repositories)时触发。{% ifversion ghes %}
| `config.disable_anonymous_git_access` | 在公共存储库中[禁用匿名 Git 读取访问](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。
| `config.enable_anonymous_git_access` | 在公共存储库中[启用匿名 Git 读取访问](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。
| `config.lock_anonymous_git_access` | 当存储库的[匿名 Git 读取访问设置锁定](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。
| `config.unlock_anonymous_git_access` | 当存储库的[匿名 Git 读取访问设置解锁](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。{% endif %}
| `create` | [创建新存储库](/articles/creating-a-new-repository)时触发。
| `destroy` |  [创建存储库](/articles/deleting-a-repository)时触发。{% ifversion fpt or ghec %}
| `disable` | 在禁用存储库时触发（例如针对[资金不足](/articles/unlocking-a-locked-account)）。{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | 下载存储库的 ZIP 或 TAR 存档时触发。
| `enable` | 在重新启用仓库时触发。{% endif %}
| `remove_member` | 在 {% data variables.product.product_name %} 用户[以协作者身份从存储库中被删除](/articles/removing-a-collaborator-from-a-personal-repository)时触发。
| `remove_topic` | 当仓库所有者从仓库中删除主题时触发。
| `rename` | [存储库重命名](/articles/renaming-a-repository)时触发。
| `staff_unlock` | 在企业所有者或 {% data variables.contact.github_support %}（得到存储库管理员的许可）临时解锁存储库时触发。 存储库的可见性不会变化。
| `transfer` | 在[传输存储库](/articles/how-to-transfer-a-repository)时触发。
| `transfer_start` | 在仓库转让即将发生时触发。
| `unarchived` | 当仓库所有者取消存档仓库时触发。

{% ifversion fpt or ghec %}
### `sponsors` 类别操作

| 操作 | 说明
|------------------|-------------------
| `custom_amount_settings_change` | 在启用或禁用自定义金额，或者在更改建议的自定义金额时触发（请参阅“[管理赞助级别](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)”）
| `repo_funding_links_file_action` | 更改存储库中的 FUNDING 文件时触发（请参阅“[在存储库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）
| `sponsor_sponsorship_cancel` | 取消赞助时触发（请参阅“[降级赞助](/articles/downgrading-a-sponsorship)”）
| `sponsor_sponsorship_create` | 赞助帐户时触发（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”）
| `sponsor_sponsorship_payment_complete` | 赞助帐户并且付款已处理后触发（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”）
| `sponsor_sponsorship_preference_change` | 更改是否从受赞助的开发者接收电子邮件更新时触发（请参阅“[管理赞助](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)”）
| `sponsor_sponsorship_tier_change` | 升级或降级赞助时触发（请参阅“[升级赞助](/articles/upgrading-a-sponsorship)”和“[降级赞助](/articles/downgrading-a-sponsorship)”）
| `sponsored_developer_approve` | 审批 {% data variables.product.prodname_sponsors %} 帐户时触发（请参阅“[为个人帐户设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)”）
| `sponsored_developer_create` | 创建 {% data variables.product.prodname_sponsors %} 帐户时触发（请参阅“[为个人帐户设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)”）
| `sponsored_developer_disable` | 帐户 {% data variables.product.prodname_sponsors %} 禁用时触发
| `sponsored_developer_redraft` | 当您的 {% data variables.product.prodname_sponsors %} 帐户从已批准状态恢复为草稿状态时触发
| `sponsored_developer_profile_update` | 在编辑受赞助开发者个人资料时触发（请参阅“[编辑 {% data variables.product.prodname_sponsors %} 的个人资料详细信息](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)”）
| `sponsored_developer_request_approval` | 提交 {% data variables.product.prodname_sponsors %} 申请以供审批时触发（请参阅“[为个人帐户设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)”）
| `sponsored_developer_tier_description_update` | 更改赞助级别的描述时触发（请参阅“[管理赞助级别](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)”）
| `sponsored_developer_update_newsletter_send` | 向赞助商发送电子邮件更新时触发（请参阅“[与赞助商联系](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)”）
| `waitlist_invite_sponsored_developer` | 受邀加入候补名单中的 {% data variables.product.prodname_sponsors %} 时触发（请参阅“[为个人帐户设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)”）
| `waitlist_join` | 加入候补名单成为受赞助开发者时触发（请参阅“[为个人帐户设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)”）
{% endif %}

{% ifversion fpt or ghec %}
### `successor_invitation` 类别操作

| 操作 | 说明
|------------------|-------------------
| `accept` | 接受连续邀请时触发（请参阅“[个人帐户存储库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”）
| `cancel` | 取消连续邀请时触发（请参阅“[保持个人帐户存储库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”）
| `create` | 创建连续邀请时触发（请参阅“[保持个人帐户存储库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”）
| `decline` | 拒绝连续邀请时触发（请参阅“[保持个人帐户存储库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”）
| `revoke` | 撤销连续邀请时触发（请参阅“[保持个人帐户存储库的所有权连续性](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)”）
{% endif %}

{% ifversion ghes or ghae %}

### `team` 类别操作

| 操作 | 说明
|------------------|-------------------
| `add_member` | 当你所属组织的成员[将你添加到团队](/articles/adding-organization-members-to-a-team)时触发。
| `add_repository` | 当您所属团队被授予控制仓库的权限时触发。
| `create` | 当您所属组织中创建了新团队时触发。
| `destroy` | 当您所属团队从组织中被删除时触发。
| `remove_member` | [从你所属的团队中删除](/articles/removing-organization-members-from-a-team)组织成员时触发。
| `remove_repository` | 当仓库不再受团队控制时触发。

{% endif %}

{% ifversion not ghae %}
### `two_factor_authentication` 类别操作

| 操作 | 说明
|------------------|-------------------
| `enabled` | 在启用[双因素身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)时触发。
| `disabled` | 在禁用双重身份验证时触发。
{% endif %}

### `user` 类别操作

| 操作 | 说明
|--------------------|---------------------
| `add_email` | 在你 {% ifversion not ghae %}[添加新电子邮件地址](/articles/changing-your-primary-email-address)时触发{% else %}添加新电子邮件地址{% endif %}。{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | [允许为某个存储库创建的 codespaces 访问个人帐户拥有的其他存储库](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。
| `codespaces_trusted_repo_access_revoked` | [禁止为某个存储库创建的 codespaces 访问个人帐户拥有的其他存储库](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。 {% endif %}
| `create` | 新建个人帐户时触发。{% ifversion not ghae %}
| `change_password` | 当您更改密码时触发。
| `forgot_password` | 请求[密码重置](/articles/how-can-i-reset-my-password)时触发。{% endif %}
| `hide_private_contributions_count` | 在[个人资料中隐藏私人贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)时触发。
| `login` | 当你登录到 {% data variables.location.product_location %}时触发。{% ifversion ghes or ghae %}
`mandatory_message_viewed`   | 查看强制消息时触发（请参阅“[自定义用户消息](/admin/user-management/customizing-user-messages-for-your-enterprise)”以了解详细信息） | {% endif %}
| `failed_login` | 当您未能成功登录时触发。
| `remove_email` | 当您删除电子邮件地址时触发。
| `rename` | 重命名帐户时触发。{% ifversion fpt or ghec %}
| `report_content` | 当你[报告问题或拉取请求，或者报告对问题、拉取请求或提交的评论](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)时触发。{% endif %}
| `show_private_contributions_count` | [在个人资料中公开私人贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)时触发。{% ifversion not ghae %}
| `two_factor_requested` | 当 {% data variables.product.product_name %} 要求你提供[双因素身份验证代码](/articles/accessing-github-using-two-factor-authentication)时触发。{% endif %}

### `user_status` 类别操作

| 操作 | 说明
|--------------------|---------------------
| `update` | 当您在个人资料中设置或更改状态时触发。 有关详细信息，请参阅“[设置状态](/articles/personalizing-your-profile/#setting-a-status)”。
| `destroy` | 当您在个人资料中清除状态时触发。
