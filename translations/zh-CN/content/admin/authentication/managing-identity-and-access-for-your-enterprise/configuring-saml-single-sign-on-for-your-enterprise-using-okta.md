---
title: Configuring SAML single sign-on for your enterprise using Okta
intro: '您可以使用安全声明标记语言 (SAML) 单点登录 (SSO) 与 Okta 一起来自动管理对 {% data variables.product.product_name %} 上企业帐户的访问。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML with Okta
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.enterprise-accounts.emu-saml-note %}

## 关于使用 Octa 的 SAML

您可以通过配置企业帐户使用 SAML SSO 以及身份提供程序 (IdP) Okta，从一个中心界面控制对 {% data variables.product.product_name %} 企业帐户及其他 web 应用程序的访问。

SAML SSO 控制并保护对企业帐户资源（如组织、仓库、议题和拉取请求）的访问。 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

## 基本要求

{% data reusables.saml.use-classic-ui %}

## 在 Okta 中添加 {% data variables.product.prodname_ghe_cloud %} 应用程序

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. 单击“{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts（企业帐户）”。
1. 单击 **Add（添加）**。
1. （可选）在“Application label（应用程序标签）”右边输入应用程序的描述性名称。 ![应用程序标签字段](/assets/images/help/saml/okta-application-label.png)
1. 在“{% data variables.product.prodname_dotcom %} Enterprises”右侧，键入企业帐户的名称。 例如，如果企业帐户的 URL 是`https://github.com/enterprises/octo-corp`，请键入 `octo-corp`。 ![GitHub Enterprises 字段](/assets/images/help/saml/okta-github-enterprises.png)
1. 单击 **Done（完成）**。

## 启用和测试 SAML SSO

{% data reusables.saml.okta-admin-button %}
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

## 启用 SAML 用户预配

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML User Provisioning（SAML 用户预配）”下，选择 **Enable SAML user provisioning（启用 SAML 用户预配）**。 ![使用 SAML 启用用户预配的复选框](/assets/images/help/business-accounts/user-provisioning.png)
1. 单击 **Save（保存）**。
1. （可选）启用 SAML 用户解除预配。
   - 选择 **Enable SAML user deprovisioning（启用 SAML 用户解除预配）**，然后单击 **Save（保存）**。 ![使用 SAML 启用用户解除预配的复选框](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - 阅读警告，然后单击 **Enable SAML deprovisioning（启用 SAML 解除预配）**。 ![启用 SAML 解除预配按钮](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
