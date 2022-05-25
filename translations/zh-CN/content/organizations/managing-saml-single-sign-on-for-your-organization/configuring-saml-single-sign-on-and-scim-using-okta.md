---
title: 使用 Octa 配置 SAML 单个登录和 SCIM
intro: '您可以使用安全声明标记语言 (SAML) 单点登录 (SSO) 和跨域身份管理系统 (SCIM) 与 Okta 一起来自动管理对 {% data variables.product.product_location %} 上组织的访问。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 使用 Octa 配置 SAML 和 SCIM
---

## 关于 SAML 和 SCIM 与 Octa

通过将组织配置为将 SAML SSO 和 SCIM 与身份提供程序 (IdP) Okta 结合使用，您可以从一个中心界面控制对您 {% data variables.product.product_location %} 和其他 Web 应用程序上的组织的访问。

{% data reusables.saml.ghec-only %}

SAML SSO 控制并保护对组织资源（如仓库、议题和拉取请求）的访问。 当您在 Okta 中进行更改时，SCIM 会自动添加、管理和删除成员对您在 {% data variables.product.product_location %} 上的组织的访问权限。 更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”和“[关于组织的 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”。

启用 SCIM 后，您在 Okta 中为其分配了 {% data variables.product.prodname_ghe_cloud %} 应用程序的任何用户都可以使用以下配置。

| 功能       | 描述                                                                                              |
| -------- | ----------------------------------------------------------------------------------------------- |
| 推送新用户    | 当您在 Okta 中创建新用户时，该用户将收到一封电子邮件，要求您在 {% data variables.product.product_location %} 上加入您的组织。       |
| 推送用户停用   | 当您在 Okta 中停用用户时，Okta 将从您在 {% data variables.product.product_location %} 上的组织中删除该用户。             |
| 推送个人资料更新 | 当您在 Okta 中更新用户的个人资料时，Okta 将更新您在 {% data variables.product.product_location %} 上的组织中该用户成员身份的元数据。 |
| 重新激活用户   | 当您在 Okta 中重新激活用户时，Okta 将发送电子邮件邀请该用户在 {% data variables.product.product_location %} 上重新加入您的组织。   |

或者，您可以使用 Okta 为企业配置 SAML SSO。 适用于企业帐户的 SCIM 仅适用于企业托管用户。 更多信息请参阅“[使用 Okta 为企业配置 SAML 单点登录](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)”和“[使用 Okta 为企业托管用户配置 SCIM 预配](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)”。

## 在 Okta 中添加 {% data variables.product.prodname_ghe_cloud %} 应用程序

{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
1. 按照“如何配置 SAML 2.0”指南，使用登录 URL、发行机构 URL 和公共证书在 {% data variables.product.prodname_dotcom %} 上启用并测试 SAML SSO。 更多信息请参阅“[对组织启用并测试 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)”。

## 在 Okta 中使用 SCIM 配置访问配置

{% data reusables.scim.dedicated-configuration-account %}

1. 使用作为组织所有者且理想情况下仅用于 SCIM 配置的帐户登录到 {% data variables.product.prodname_dotcom_the_website %}。
1. 要为组织创建活动的 SAML 会话，请导航到 `https://github.com/orgs/ORGANIZATION-NAME/sso`。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)”。
1. 导航到 Okta。
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. 单击**使用 {% data variables.product.prodname_ghe_cloud %} 进行身份验证 - 组织**。
1. 在组织名称的右侧，单击 **Grant（授予）**。

  ![用于授权 Okta SCIM 集成访问组织的"Grant（授予）"按钮](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. 单击 **Authorize OktaOAN（授权 OktaOAN）**。
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

## 延伸阅读

- “[使用 Okta 为企业帐户配置 SAML 单点登录](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)”
- Okta 文档中的[了解 SAML](https://developer.okta.com/docs/concepts/saml/)
- Okta 文档中的[了解 SCIM](https://developer.okta.com/docs/concepts/scim/)
