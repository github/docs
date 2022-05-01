---
title: 管理您在企业拥有的组织中的角色
intro: 您可以管理您在企业拥有的任何组织中的成员身份，并更改您在组织中的角色。
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: 管理您的组织角色
---

{% note %}

**注意：** 企业所有者在企业拥有的组织中管理其角色的能力处于测试阶段，可能会发生变化。

{% endnote %}

## 关于角色管理

您可以选择以成员或组织所有者的身份加入企业拥有的组织，更改您在组织中的角色或离开组织。

{% warning %}

**警告**：如果组织使用 SCIM 来预配用户，则以这种方式加入组织可能会产生意想不到的后果。 更多信息请参阅“[关于组织的 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”。

{% endwarning %}

## 使用企业设置管理您的角色

您可以加入企业拥有的组织，并直接从企业帐户的设置中管理您在组织中的角色。

如果组织强制实施 SAML 单点登录 (SSO)，则无法使用企业设置加入组织。 相反，您必须使用该组织的身份提供程序 (IdP) 加入组织。 然后，您可以在企业设置中管理您的角色。 更多信息请参阅“[加入强制实施 SAML SSO 的组织](#joining-an-organization-that-enforces-saml-sso)”。

{% data reusables.enterprise-accounts.access-enterprise %}
1. 在 **Organizations（组织）**选项卡上，在您要在其中管理角色的组织右侧，选择 {% octicon "gear" aria-label="The gear icon" %} 下拉菜单，然后单击要执行的操作。

   ![组织的齿轮图标下拉菜单的屏幕截图](/assets/images/help/business-accounts/change-role-in-org.png)

## 加入强制实施 SAML SSO 的组织

如果组织强制实施 SAML SSO，则无法使用企业设置加入组织。 相反，您必须使用该组织的身份提供程序 (IdP) 加入组织。

1. 您必须在 IdP 中为组织使用的 {% data variables.product.prodname_ghe_cloud %} 的应用程序分配访问权限。 如果您无法自行配置 IdP，请联系您的 IdP 管理员。
1. 使用 SAML SSO 向组织进行身份验证。

   - 如果组织使用 SCIM，请接受将由 SCIM 集成生成的组织邀请。
   - 如果组织不使用 SCIM，请访问以下 URL，将 ORGANIZATION 替换为组织的名称，然后按照提示进行身份验证。

    `https://github.com/orgs/ORGANIZATION/sso`

加入组织后，您可以使用企业设置来管理您在组织中的角色，例如成为组织所有者。 更多信息请参阅“[使用企业设置管理您的角色](#managing-your-role-with-the-enterprise-settings)。。
