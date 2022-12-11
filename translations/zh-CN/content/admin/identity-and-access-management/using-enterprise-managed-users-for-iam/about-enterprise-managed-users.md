---
title: '关于 {% data variables.product.prodname_emus %}'
shortTitle: About managed users
intro: '可以从标识提供者的 {% data variables.product.prodname_dotcom %} 上集中管理企业成员的标识和访问。'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e24ae7adb9f5c2efbb08be63788dae1eff501d99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192695'
---
## 关于 {% data variables.product.prodname_emus %}

使用 {% data variables.product.prodname_emus %}，可以通过标识提供者 (IdP) 控制企业成员的用户帐户。 IdP 中分配给 {% data variables.product.prodname_emu_idp_application %} 应用程序的用户将会预配为 {% data variables.product.prodname_dotcom %} 上的新用户帐户，并添加到企业中。 可以通过 IdP 控制用户帐户的用户名、配置文件数据、团队成员身份和存储库访问权限。

在 IdP 中，你可以为每个 {% data variables.enterprise.prodname_managed_user %} 提供用户、企业所有者或计费管理员的角色。 {% data variables.enterprise.prodname_managed_users_caps %} 可以拥有企业内的组织，并且可以将其他 {% data variables.enterprise.prodname_managed_users %} 添加到组织和其中的团队。 有关详细信息，请参阅“[企业中的角色](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)”和“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)”。

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} 有关详细信息，请参阅“[关于对 IdP 的条件访问策略的支持](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)”。

{% endif %}

可以授予 {% data variables.enterprise.prodname_managed_users %} 访问权限以及参与企业内部存储库的能力，但 {% data variables.enterprise.prodname_managed_users %} 无法创建公共内容，也不能与其他用户、组织和企业协作处理 {% data variables.product.prodname_dotcom %} 的其余部分。 有关详细信息，请参阅“[{% data variables.enterprise.prodname_managed_users %} 的功能和限制](#abilities-and-restrictions-of-enterprise-managed-users)”。

企业的 {% data variables.enterprise.prodname_managed_users %} 的用户名及其个人资料信息（例如显示名称和电子邮件地址）通过 IdP 设置，用户无法自行更改。 有关详细信息，请参阅“[用户名和个人资料信息](#usernames-and-profile-information)”。

企业所有者可以在 {% data variables.product.prodname_dotcom %} 上审核所有 {% data variables.enterprise.prodname_managed_users %} 的操作。 有关详细信息，请参阅“[企业的审核日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)”。

若要使用 {% data variables.product.prodname_emus %}，需要启用了 {% data variables.product.prodname_emus %} 的单独企业帐户类型。 有关创建此帐户的详细信息，请参阅“[关于具有托管用户的企业](#about-enterprises-with-managed-users)”。

{% note %}

注意：使用 {% data variables.product.prodname_ghe_cloud %} 进行标识和访问管理有多个选项，而 {% data variables.product.prodname_emus %} 并不是每个客户的最佳解决方案。 如需详细了解 {% data variables.product.prodname_emus %} 是否适合你的企业，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)”。

{% endnote %}

## 关于组织成员身份管理

可手动管理组织成员身份，也可使用 IdP 组自动更新成员身份。 要通过 IdP 管理组织成员身份，必须将成员添加到 IdP 组，并且 IdP 组必须连接到组织内的团队。 有关自动管理组织和团队成员身份的详细信息，请参阅“[使用标识提供者组管理团队成员身份](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)”。

将成员添加到企业拥有的组织的方式（通过 IdP 组或手动）决定了必须如何从组织中删除他们。 

- 如果将成员手动添加到组织，则必须手动将其删除。 从 IdP 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序中取消分配他们，将暂停用户，但不会将其从组织中删除。
- 如果用户由于被添加到映射到组织中的一个或多个团队的 IdP 组而成为该组织的成员，则从与组织关联的所有映射的 IdP 组中删除这些用户会将其从组织中删除。

要了解成员是如何添加到组织中的，可以按类型筛选成员列表。 有关详细信息，请参阅[查看企业中的人员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users)。

## 标识提供者支持

{% data variables.product.prodname_emus %} 支持以下 IdP{% ifversion oidc-for-emu %} 和身份验证方法：

|                                  | SAML                                          | OIDC                                          |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## {% data variables.enterprise.prodname_managed_users %} 的功能和限制

{% data variables.enterprise.prodname_managed_users_caps %} 只能参与企业中的专用和内部存储库及其用户帐户拥有的专用存储库。 {% data variables.enterprise.prodname_managed_users_caps %} 对更广泛的 {% data variables.product.prodname_dotcom %} 社区具有只读访问权限。 这些针对用户和内容的可见性和访问限制适用于所有请求，包括 API 请求。

* 不能邀请 {% data variables.enterprise.prodname_managed_users_caps %} 加入企业外部的组织或存储库，也不能邀请 {% data variables.enterprise.prodname_managed_users %} 加入其他企业。 
* {% data variables.product.prodname_emus %} 不支持外部协作者。
* {% data variables.enterprise.prodname_managed_users_caps %} 无法在企业外部的存储库中创建问题或拉取请求、添加评论或添加反应，也不能加注星标、监视或创建分支。
* {% data variables.enterprise.prodname_managed_users_caps %} 可以查看 {% data variables.product.prodname_dotcom_the_website %} 上的所有公共存储库，但无法将代码推送到企业外部的存储库。
* {% data variables.enterprise.prodname_managed_users_caps %} 和创建的内容只对企业的其他成员可见。 
* {% data variables.enterprise.prodname_managed_users_caps %} 无法关注企业外部的用户。
* {% data variables.enterprise.prodname_managed_users_caps %} 无法创建 Gist 或对 Gist 添加评论。
* {% data variables.enterprise.prodname_managed_users_caps %} 无法为 {% data variables.product.prodname_actions %} 创建入门工作流。
* {% data variables.enterprise.prodname_managed_users_caps %} 无法在其用户帐户上安装 {% data variables.product.prodname_github_apps %}。
* 其他 {% data variables.product.prodname_dotcom %} 用户无法查看、提及或邀请 {% data variables.enterprise.prodname_managed_user %} 进行协作。
* 可以选择 {% data variables.enterprise.prodname_managed_users %} 是否能够创建其用户帐户拥有的存储库。 有关详细信息，请参阅“[在企业中实施存储库管理策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)”。
* 如果允许 {% data variables.enterprise.prodname_managed_users %} 创建其用户帐户拥有的存储库，则他们只能拥有专用存储库，并且只能邀请其他企业成员协作处理其用户拥有的存储库。
* {% data reusables.enterprise-accounts.emu-forks %}
* 只能在 {% data variables.enterprise.prodname_emu_enterprise %} 拥有的组织中创建专用和内部存储库，具体取决于组织和企业存储库可见性设置。 
* {% data variables.enterprise.prodname_managed_users_caps %} 在使用 {% data variables.product.prodname_pages %} 方面受到限制。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)”。

## {% data variables.product.prodname_emus %} 入门

必须先执行一系列配置步骤，开发人员才能将 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_emus %} 一起使用。

1. 若要使用 {% data variables.product.prodname_emus %}，需要启用了 {% data variables.product.prodname_emus %} 的单独企业帐户类型。 若要试用 {% data variables.product.prodname_emus %} 或讨论从现有企业迁移的选项，请联系 [{% data variables.product.prodname_dotcom %} 的销售团队](https://enterprise.github.com/contact)。
  
  GitHub 销售团队的联系人将与你合作创建新的 {% data variables.enterprise.prodname_emu_enterprise %}。 你需要为将设置企业的用户提供电子邮件地址，以及一个短代码，该代码将用作企业成员用户名的后缀。 {% data reusables.enterprise-accounts.emu-shortcode %} 有关详细信息，请参阅“[用户名和个人资料信息](#usernames-and-profile-information)”。
  
2. 创建企业后，你将收到来自 {% data variables.product.prodname_dotcom %} 的电子邮件，邀请你为企业的设置用户选择密码，该用户将是企业的第一个所有者。 设置密码时，请使用隐身或专用浏览窗口。 设置用户仅用于为企业配置单一登录和 SCIM 预配集成。 成功启用 SSO 后，设置用户将不再有权管理企业帐户。 设置用户的用户名是企业的短代码，后缀为 `_admin`。 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. 你以设置用户身份登录后，我们建议你启用双因素身份验证。 有关详细信息，请参阅“[配置双因素身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)”。

1. 首先，请配置 {% ifversion oidc-for-emu %} 成员如何进行身份验证。 如果使用 Azure Active Directory 作为标识提供者，可以在 OpenID Connect (OIDC) 和安全断言标记语言 (SAML) 之间进行选择。 建议使用 OIDC，其中包括对条件访问策略 (CAP) 的支持。 如果需要从一个租户预配具有 {% data variables.enterprise.prodname_managed_users %} 的多个企业，则必须在第一个之后为每个企业使用 SAML。 如果使用 Okta 作为标识提供者，则可以使用 SAML 对成员进行身份验证。{% else %}SAML SSO 适用于企业。 有关详细信息，请参阅“[为 Enterprise 托管用户配置 SAML 单一登录](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)”。{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  首先，请阅读所选身份验证方法的指南。
  
    - “[为企业托管用户配置 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)”。
    - “[为企业托管用户配置 SAML 单一登录](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)”。
  
  {% endif %}
  
4. 配置 SSO 后，可以配置 SCIM 预配。 SCIM 是标识提供者在 {% data variables.product.prodname_dotcom_the_website %} 上创建 {% data variables.enterprise.prodname_managed_users %} 的方式。 有关配置 SCIM 预配的详细信息，请参阅“[为企业托管用户配置 SCIM 预配](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)”。
  
5. 配置身份验证和预配后，可以通过将 IdP 组与团队同步来开始管理 {% data variables.enterprise.prodname_managed_users %} 的组织成员身份。 有关详细信息，请参阅[使用标识提供者组管理团队成员身份](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)。

如果企业成员必须使用一个工作站同时从 {% data variables.enterprise.prodname_managed_user %} 和个人帐户参与 {% data variables.location.product_location %} 上的存储库，则可以提供支持。 有关详细信息，请参阅“[支持在 {% data variables.product.prodname_dotcom_the_website %} 上具有多个用户帐户的开发人员](#supporting-developers-with-multiple-user-accounts-on-githubcom)”。

## 作为 {% data variables.enterprise.prodname_managed_user %} 进行身份验证

{% data variables.enterprise.prodname_managed_users_caps %} 必须通过其标识提供者进行身份验证。 若要进行身份验证，{% data variables.enterprise.prodname_managed_user %} 可以访问其 IdP 应用程序门户或使用 {% data variables.product.prodname_dotcom_the_website %} 上的登录页。 

默认情况下，当未经身份验证的用户尝试访问使用 {% data variables.product.prodname_emus %} 的企业时，{% data variables.product.company_short %} 会显示 404 错误。 企业所有者可以选择性地启用自动重定向到单一登录 (SSO)，而不会显示 404。 有关详细信息，请参阅“[为企业中的安全设置强制实施策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)”。

{% data reusables.enterprise-accounts.about-recovery-codes %} 有关详细信息，请参阅“[管理企业的恢复代码](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)”。

### 通过 {% data variables.product.prodname_dotcom_the_website %} 作为 {% data variables.enterprise.prodname_managed_user %} 进行身份验证

1. 导航到 [https://github.com/login](https://github.com/login)。
1. 在“用户名或电子邮件地址”文本框中，输入用户名，包括下划线和短代码。
  ![显示登录表单的屏幕截图](/assets/images/help/enterprises/emu-login-username.png) 表单识别用户名后将更新。 无需在此表单中输入密码。
1. 若要继续访问标识提供者，请单击“使用标识提供者登录”。
  ![显示“使用标识提供者登录”按钮的屏幕截图](/assets/images/help/enterprises/emu-login-submit.png)

## 用户名和个人资料信息

{% data variables.product.product_name %} 通过规范 IdP 提供的标识符自动为每个用户创建用户名。 有关详细信息，请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。

如果在规范化期间删除 IdP 提供的标识符的唯一部分，则预配用户时可能会发生冲突。 如果由于用户名冲突而无法预配用户，则应修改 IdP 提供的用户名。 有关详细信息，请参阅“[解决用户名问题](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems)”。

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %} 

IdP 还提供了 {% data variables.enterprise.prodname_managed_user %} 的个人资料名称和电子邮件地址。 {% data variables.enterprise.prodname_managed_users_caps %} 无法更改 {% data variables.product.prodname_dotcom %} 上的个人资料名称或电子邮件地址，并且 IdP 仅可提供单个电子邮件地址。

## 支持在 {% data variables.location.product_location %} 上具有多个用户帐户的开发人员

团队中的人员可能需要在 {% data variables.location.product_location %} 上参与 {% data variables.enterprise.prodname_emu_enterprise %} 外部的资源。 例如，你可能希望为公司的开放源代码项目维护单独的企业。 由于 {% data variables.enterprise.prodname_managed_user %} 无法参与公共资源，因此用户需要为此工作维护单独的个人帐户。

必须使用一个工作站在 {% data variables.location.product_location %} 上从两个用户帐户进行参与的人员可以配置 Git 以简化该过程。 有关详细信息，请参阅“[管理多个帐户](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)”。
