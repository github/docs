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

You can control access to your organization on {% data variables.product.product_location %} and other web applications from one central interface by configuring the organization to use SAML SSO and SCIM with Okta, an Identity Provider (IdP).

SAML SSO 控制并保护对组织资源（如仓库、议题和拉取请求）的访问。 SCIM automatically adds, manages, and removes members' access to your organization on {% data variables.product.product_location %} when you make changes in Okta. 更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”和“[关于 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim)”。

启用 SCIM 后，您在 Okta 中为其分配了 {% data variables.product.prodname_ghe_cloud %} 应用程序的任何用户都可以使用以下配置。

| 功能       | 描述                                                                                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 推送新用户    | When you create a new user in Okta, the user will receive an email to join your organization on {% data variables.product.product_location %}.                           |
| 推送用户停用   | When you deactivate a user in Okta, Okta will remove the user from your organization on {% data variables.product.product_location %}.                                   |
| 推送个人资料更新 | When you update a user's profile in Okta, Okta will update the metadata for the user's membership in your organization on {% data variables.product.product_location %}. |
| 重新激活用户   | When you reactivate a user in Okta, Okta will send an email invitation for the user to rejoin your organization on {% data variables.product.product_location %}.        |

Alternatively, you can configure SAML SSO for an enterprise using Okta. SCIM for enterprise accounts is only available with Enterprise Managed Users. For more information, see "[Configuring SAML single sign-on for your enterprise using Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)" and "[Configuring SCIM provisioning for Enterprise Managed Users with Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)."

## 在 Okta 中添加 {% data variables.product.prodname_ghe_cloud %} 应用程序

{% data reusables.saml.okta-sign-into-your-account %}
1. Navigate to the [Github Enterprise Cloud - Organization](https://www.okta.com/integrations/github-enterprise-cloud-organization) application in the Okta Integration Network and click **Add Integration**.
1. （可选）在“Application label（应用程序标签）”右边输入应用程序的描述性名称。
1. In the **GitHub Organization** field, type the name of your organization on {% data variables.product.product_location %}. 例如，如果组织的 URL 是 https://github.com/octo-org，则组织名称为 `octo-org`。
1. 单击 **Done（完成）**。

## 启用和测试 SAML SSO

{% data reusables.saml.okta-sign-into-your-account %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
1. 按照“如何配置 SAML 2.0”指南，使用登录 URL、发行机构 URL 和公共证书在 {% data variables.product.prodname_dotcom %} 上启用并测试 SAML SSO。 更多信息请参阅“[对组织启用并测试 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)”。

## 在 Okta 中使用 SCIM 配置访问配置

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. 单击 **Authenticate with Github Enterprise Cloud - Organization（向 Github Enterprise Cloud 验证 - 组织）**。
1. 在组织名称的右侧，单击 **Grant（授予）**。

  ![用于授权 Okta SCIM 集成访问组织的"Grant（授予）"按钮](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **注**：如果在列表中看不到您的组织，请在浏览器中访问 `https://github.com/orgs/ORGANIZATION-NAME/sso`，并使用 IdP 上的管理员帐户通过 SAML SSO 向您的组织验证身份。 例如，如果您的组织名称是 `octo-org`，则 URL 是 `https://github.com/orgs/octo-org/so`。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”。

  {% endnote %}
1. 单击 **Authorize OktaOAN（授权 OktaOAN）**。
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

## 延伸阅读

- “[使用 Okta 为企业帐户配置 SAML 单点登录](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)”
- "[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)"
- Okta 文档中的[了解 SAML](https://developer.okta.com/docs/concepts/saml/)
- Okta 文档中的[了解 SCIM](https://developer.okta.com/docs/concepts/scim/)
