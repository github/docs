---
title: 关于 Enterprise 托管用户
shortTitle: About managed users
intro: You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 9ca2be64f3806cf8b7b449ea64532c5ae2b17782
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145099044"
---
## <a name="about--data-variablesproductprodname_emus-"></a>关于 {% data variables.product.prodname_emus %}

使用 {% data variables.product.prodname_emus %}，可以通过标识提供者 (IdP) 控制企业成员的用户帐户。 可以使用 SAML 单一登录 (SSO) 简化身份验证，并为企业成员预配、更新和取消预配用户帐户。 IdP 中分配给 {% data variables.product.prodname_emu_idp_application %} 应用程序的用户将会预配为 {% data variables.product.prodname_dotcom %} 上的新用户帐户，并添加到企业中。 可以通过 IdP 控制用户名、配置文件数据、团队成员身份和存储库访问权限。

在 IdP 中，你可以为每个 {% data variables.product.prodname_managed_user %} 提供用户、企业所有者或帐单管理员的角色。 {% data variables.product.prodname_managed_users_caps %} 可以拥有企业内的组织，并且可以将其他 {% data variables.product.prodname_managed_users %} 添加到组织和其中的团队。 有关详细信息，请参阅“[企业中的角色](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)”和“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)”。

将 {% data variables.product.prodname_managed_users %} 添加到连接到组织内团队的 IdP 组后，可以手动管理或自动更新组织成员身份。 将 {% data variables.product.prodname_managed_user %} 手动添加到组织后，从 IdP 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序中取消分配它们将暂停用户，但不会将其从组织中删除。 有关自动管理组织和团队成员身份的详细信息，请参阅“[使用标识提供者组管理团队成员身份](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)”。

可以授予 {% data variables.product.prodname_managed_users %} 访问权限以及参与企业内部存储库的能力，但 {% data variables.product.prodname_managed_users %} 无法创建公共内容，也不能与其他用户、组织和企业协作处理 {% data variables.product.prodname_dotcom %} 的其余部分。 不能邀请为企业预配的 {% data variables.product.prodname_managed_users %} 加入企业外部的组织或存储库，也不能邀请 {% data variables.product.prodname_managed_users %} 加入其他企业。 {% data variables.product.prodname_emus %} 不支持外部协作者。

企业的 {% data variables.product.prodname_managed_users %} 的用户名及其个人资料信息（例如显示名称和电子邮件地址）通过 IdP 设置，用户无法自行更改。 有关详细信息，请参阅“[用户名和个人资料信息](#usernames-and-profile-information)”。

{% data reusables.enterprise-accounts.emu-forks %}

企业所有者可以审核 {% data variables.product.prodname_dotcom %} 上的所有 {% data variables.product.prodname_managed_users %}' 操作。

若要使用 {% data variables.product.prodname_emus %}，需要启用了 {% data variables.product.prodname_emus %} 的单独企业帐户类型。 有关创建此帐户的详细信息，请参阅“[关于具有托管用户的企业](#about-enterprises-with-managed-users)”。


## <a name="identity-provider-support"></a>标识提供者支持

{% data variables.product.prodname_emus %} 支持以下 IdP：

{% data reusables.enterprise-accounts.emu-supported-idps %}

## <a name="abilities-and-restrictions-of--data-variablesproductprodname_managed_users-"></a>{% data variables.product.prodname_managed_users %} 的功能和限制

{% data variables.product.prodname_managed_users_caps %} 只能参与企业中的专用和内部存储库及其用户帐户拥有的专用存储库。 {% data variables.product.prodname_managed_users_caps %} 对更广泛的 {% data variables.product.prodname_dotcom %} 社区具有只读访问权限。 这些针对用户和内容的可见性和访问限制适用于所有请求，包括 API 请求。

* {% data variables.product.prodname_managed_users_caps %} 无法在企业外部的存储库中创建问题或拉取请求、添加评论或添加反应，也不能加注星标、监视或创建分支。
* {% data variables.product.prodname_managed_users_caps %} 可以查看 {% data variables.product.prodname_dotcom_the_website %} 上的所有公共存储库，但无法将代码推送到企业外部的存储库。
* {% data variables.product.prodname_managed_users_caps %} 和创建的内容只对企业的其他成员可见。 
* {% data variables.product.prodname_managed_users_caps %} 无法关注企业外部的用户。
* {% data variables.product.prodname_managed_users_caps %} 无法创建 Gist 或对 Gist 添加评论。
* {% data variables.product.prodname_managed_users_caps %} 无法在其用户帐户上安装 {% data variables.product.prodname_github_apps %}。
* 其他 {% data variables.product.prodname_dotcom %} 用户无法查看、提及或邀请 {% data variables.product.prodname_managed_user %} 进行协作。
* {% data variables.product.prodname_managed_users_caps %} 只能拥有专用数据库，而 {% data variables.product.prodname_managed_users %} 只能邀请其他企业成员在其自己的存储库上进行协作。
* 只能在 {% data variables.product.prodname_emu_enterprise %} 拥有的组织中创建专用和内部存储库，具体取决于组织和企业存储库可见性设置。 
* {% data variables.product.prodname_managed_users_caps %} 在使用 {% data variables.product.prodname_pages %} 方面受到限制。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)”。

## <a name="about-enterprises-with-managed-users"></a>关于具有托管用户的企业

若要使用 {% data variables.product.prodname_emus %}，需要启用了 {% data variables.product.prodname_emus %} 的单独企业帐户类型。 若要试用 {% data variables.product.prodname_emus %} 或讨论从现有企业迁移的选项，请联系 [{% data variables.product.prodname_dotcom %} 的销售团队](https://enterprise.github.com/contact)。

GitHub 销售团队的联系人将与你合作创建新的 {% data variables.product.prodname_emu_enterprise %}。 你需要为将设置企业的用户提供电子邮件地址，以及一个短代码，该代码将用作企业成员用户名的后缀。 {% data reusables.enterprise-accounts.emu-shortcode %} 有关详细信息，请参阅“[用户名和个人资料信息](#usernames-and-profile-information)”。

创建企业后，你将收到来自 {% data variables.product.prodname_dotcom %} 的电子邮件，邀请你为企业的设置用户选择密码，该用户将是企业的第一个所有者。 设置密码时，请使用隐身或专用浏览窗口。 设置用户仅用于为企业配置 SAML 单一登录和 SCIM 预配集成。 成功启用 SAML 后，设置用户将不再有权管理企业帐户。

设置用户的用户名是企业的短代码，后缀为 `_admin`。 登录到设置用户后，可以开始为企业配置 SAML SSO。 有关详细信息，请参阅“[为 Enterprise Managed User 配置 SAML 单一登录](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)”。

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

## <a name="authenticating-as-a--data-variablesproductprodname_managed_user-"></a>作为 {% data variables.product.prodname_managed_user %} 进行身份验证

{% data variables.product.prodname_managed_users_caps %} 必须通过其标识提供者进行身份验证。 若要进行身份验证，{% data variables.product.prodname_managed_user %} 可以访问其 IdP 应用程序门户或使用 {% data variables.product.prodname_dotcom_the_website %} 上的登录页。

{% data reusables.enterprise-accounts.about-recovery-codes %} 有关详细信息，请参阅“[管理企业的恢复代码](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)”。

### <a name="authenticating-as-a--data-variablesproductprodname_managed_user--via--data-variablesproductprodname_dotcom_the_website-"></a>通过 {% data variables.product.prodname_dotcom_the_website %} 作为 {% data variables.product.prodname_managed_user %} 进行身份验证

1. 导航到 [https://github.com/login](https://github.com/login)。
1. 在“用户名或电子邮件地址”文本框中，输入用户名，包括下划线和短代码。
  ![显示登录表单的屏幕截图](/assets/images/help/enterprises/emu-login-username.png) 表单识别用户名后将更新。 无需在此表单中输入密码。
1. 若要继续访问标识提供者，请单击“使用标识提供者登录”。
  ![显示“使用标识提供者登录”按钮的屏幕截图](/assets/images/help/enterprises/emu-login-submit.png)

## <a name="usernames-and-profile-information"></a>用户名和个人资料信息

{% data variables.product.product_name %} 通过规范 IdP 提供的标识符自动为每个用户创建用户名。 有关详细信息，请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。

如果在规范化期间删除 IdP 提供的标识符的唯一部分，则预配用户时可能会发生冲突。 如果由于用户名冲突而无法预配用户，则应修改 IdP 提供的用户名。 有关详细信息，请参阅“[解决用户名冲突](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts)”。

IdP 还提供了 {% data variables.product.prodname_managed_user %} 的个人资料名称和电子邮件地址。 {% data variables.product.prodname_managed_users_caps %} 无法更改 {% data variables.product.prodname_dotcom %} 上的个人资料名称或电子邮件地址。
