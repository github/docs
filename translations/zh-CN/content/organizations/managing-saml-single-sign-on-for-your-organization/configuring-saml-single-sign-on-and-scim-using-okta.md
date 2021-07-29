---
title: 使用 Octa 配置 SAML 单个登录和 SCIM
intro: '您可以使用安全声明标记语言 (SAML) 单点登录 (SSO) 和跨域身份管理系统 (SCIM) 与 Okta 一起来自动管理对 {% data variables.product.prodname_dotcom %} 上组织的访问。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
product: '{% data reusables.gated-features.saml-sso %}'
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

### 关于 SAML 和 SCIM 与 Octa

您可以通过配置组织使用 SAML SSO 和 SCIM 以及身份提供程序 (IdP) Okta，从一个中心界面控制对 {% data variables.product.prodname_dotcom %} 组织及其他 web 应用程序的访问。

SAML SSO 控制并保护对组织资源（如仓库、议题和拉取请求）的访问。 当您在 Octa 中进行更改时，SCIM 会自动添加、管理和删除成员对您的 {% data variables.product.prodname_dotcom %} 组织的访问权限。 更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”和“[关于 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim)”。

启用 SCIM 后，您在 Okta 中为其分配了 {% data variables.product.prodname_ghe_cloud %} 应用程序的任何用户都可以使用以下配置。

| 功能       | 描述                                                                                                 |
| -------- | -------------------------------------------------------------------------------------------------- |
| 推送新用户    | 在 Okta 中创建新用户时，该用户将收到一封电子邮件，让其加入您的 {% data variables.product.prodname_dotcom %} 组织。                |
| 推送用户停用   | 当您在 Okta 中停用某用户时，Okta 会将该用户从您的 {% data variables.product.prodname_dotcom %} 组织中删除。                 |
| 推送个人资料更新 | 当您在 Okta 中更新某用户的个人资料时，Okta 会在您的 {% data variables.product.prodname_dotcom %} 组织中更新该用户成员资格的元数据。     |
| 重新激活用户   | 当您在 Okta 中重新激活某用户时，Okta 会向该用户发送一封邀请电子邮件，邀请其重新加入您的 {% data variables.product.prodname_dotcom %} 组织。 |

### 基本要求

{% data reusables.saml.use-classic-ui %}

### 在 Okta 中添加 {% data variables.product.prodname_ghe_cloud %} 应用程序

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
4. 在“Github Enterprise Cloud - Organization（Github Enterprise Cloud - 组织）”的右侧单击 **Add（添加）**。 ![对 {% data variables.product.prodname_ghe_cloud %} 应用程序单击"Add（添加）"](/assets/images/help/saml/okta-add-ghec-application.png)

5. 在 **GitHub Organization（GitHub 组织）**字段中，键入您的 {% data variables.product.prodname_dotcom %} 组织的名称。 例如，如果组织的 URL 是 https://github.com/octo-org，则组织名称为 `octo-org`。 ![键入 GitHub 组织名称](/assets/images/help/saml/okta-github-organization-name.png)

6. 单击 **Done（完成）**。

### 启用和测试 SAML SSO

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
6. 按照“如何配置 SAML 2.0”指南，使用登录 URL、发行机构 URL 和公共证书在 {% data variables.product.prodname_dotcom %} 上启用并测试 SAML SSO。 更多信息请参阅“[对组织启用并测试 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)”。

### 在 Okta 中使用 SCIM 配置访问配置

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}


6. 单击 **Authenticate with Github Enterprise Cloud - Organization（向 Github Enterprise Cloud 验证 - 组织）**。 ![Okta 应用程序的"Authenticate with Github Enterprise Cloud - Organization（ 向 Github Enterprise Cloud 验证 - 组织）"按钮](/assets/images/help/saml/okta-authenticate-with-ghec-organization.png)

7. 在组织名称的右侧，单击 **Grant（授予）**。 ![用于授权 Okta SCIM 集成访问组织的"Grant（授予）"按钮](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **注**：如果在列表中看不到您的组织，请在浏览器中访问 `https://github.com/orgs/ORGANIZATION-NAME/sso`，并使用 IdP 上的管理员帐户通过 SAML SSO 向您的组织验证身份。 例如，如果您的组织名称是 `octo-org`，则 URL 是 `https://github.com/orgs/octo-org/so`。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”。

  {% endnote %}
1. 单击 **Authorize OktaOAN（授权 OktaOAN）**。 ![用于授权 Okta SCIM 集成访问组织的"Authorize OktaOAN（授权 OktaOAN）"按钮](/assets/images/help/saml/okta-scim-integration-authorize-oktaoan.png)
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

### 延伸阅读

- “[使用 Okta 为企业帐户配置 SAML 单点登录和 SCIM](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)”
- "[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)"
- Okta 文档中的[了解 SAML](https://developer.okta.com/docs/concepts/saml/)
- Okta 文档中的[了解 SCIM](https://developer.okta.com/docs/concepts/scim/)
