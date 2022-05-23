---
title: 使用 Okta 为企业配置 SAML 单点登录
intro: '您可以使用安全声明标记语言 (SAML) 单点登录 (SSO) 与 Okta 一起来自动管理对 {% data variables.product.product_name %} 上企业帐户的访问。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: 使用 Okta 配置 SAML SSO
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## 关于使用 Octa 的 SAML

您可以通过配置企业帐户使用 SAML SSO 以及身份提供程序 (IdP) Okta，从一个中心界面控制对 {% data variables.product.product_name %} 企业帐户及其他 web 应用程序的访问。

SAML SSO 控制并保护对企业帐户资源（如组织、仓库、议题和拉取请求）的访问。 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.saml.switching-from-org-to-enterprise %} 更多信息请参阅“[将 SAML 配置从组织切换到企业帐户](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”。

或者，您也可以使用 Okta 配置为使用 {% data variables.product.prodname_ghe_cloud %} 的组织 SAML SSO。 更多信息请参阅“[使用 Okta 配置 SAML 单点登录和 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)”。

## 在 Okta 中添加 {% data variables.product.prodname_ghe_cloud %} 应用程序

{% data reusables.saml.okta-sign-into-your-account %}
1. 导航到 Okta 集成网络中的 [{% data variables.product.prodname_ghe_cloud %} - 企业帐户](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) 应用程序，然后单击 **Add Integration（添加集成）**。
{% data reusables.saml.okta-dashboard-click-applications %}
1. （可选）在“Application label（应用程序标签）”右边输入应用程序的描述性名称。
1. 在“{% data variables.product.prodname_dotcom %} Enterprises”右侧，键入企业帐户的名称。 例如，如果企业帐户的 URL 是`https://github.com/enterprises/octo-corp`，请键入 `octo-corp`。
1. 单击 **Done（完成）**。

## 启用和测试 SAML SSO

{% data reusables.saml.okta-sign-into-your-account %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. 在 Settings（设置）右侧，单击 **Edit（编辑）**。
1. 在“Configured SAML Attributes（配置的 SAML 属性）”下，使用下拉菜单并选择 **Matches regex（匹配正则表达式）**。
1. 在下拉菜单右侧键入 `.*.*`。
1. 单击 **Save（保存）**。
{% data reusables.saml.okta-view-setup-instructions %}
1. 使用设置说明中的信息为企业帐户启用 SAML。 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

## 在 Okta 中创建组

1. 在 Okta 中，创建一个组来匹配企业帐户拥有的每个组织。 每个组的名称必须与组织的帐户名称匹配（而不是组织的显示名称）。 例如，如果组织的 URL 为`https://github.com/octo-org`，则将组命名为 `octo-org`。
1. 将为企业帐户创建的应用程序分配给每个组。 {% data variables.product.prodname_dotcom %} 将接收每个用户的所有`组`数据。
1. 根据您希望用户所属的组织将用户添加到组。
