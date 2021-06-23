---
title: 使用 Okta 为企业帐户配置 SAML 单点登录和 SCIM
intro: '您可以使用安全声明标记语言 (SAML) 单点登录 (SSO) 和跨域身份管理系统 (SCIM) 与 Okta 一起来自动管理对 {% data variables.product.product_name %} 上企业帐户的访问。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/configuring-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
versions:
  free-pro-team: '*'
---
{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

### 关于 SAML 和 SCIM 与 Octa

您可以通过配置企业帐户使用 SAML SSO 和 SCIM 以及身份提供程序 (IdP) Okta，从一个中心界面控制对 {% data variables.product.product_name %} 企业帐户及其他 web 应用程序的访问。

SAML SSO 控制并保护对企业帐户资源（如组织、仓库、议题和拉取请求）的访问。 当您在 Okta 中进行更改时，SCIM 会自动添加、管理和删除成员对您的企业帐户拥有的组织的访问权限。 更多信息请参阅“[在企业帐户中实施安全设置](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account)”。

启用 SCIM 后，您在 Okta 中为其分配了 {% data variables.product.prodname_ghe_cloud %} 应用程序的任何用户都可以使用以下配置。

| 功能       | 描述                                                                          |
| -------- | --------------------------------------------------------------------------- |
| 推送新用户    | 在 Okta 中创建的新用户可以访问企业帐户资源，并且可以选择被自动邀请加入企业帐户拥有的任何组织                           |
| 推送用户停用   | 停用 Okta 中的用户将撤销用户对企业帐户资源的访问权限，并从企业帐户拥有的所有组织中删除该用户                           |
| 推送个人资料更新 | 对 Okta 中用户配置文件的更新将被推送到用户的企业帐户元数据                                            |
| 重新激活用户   | 在 Okta 中重新激活用户将重新启用用户对企业帐户的访问权限，并可以选择发送电子邮件邀请，以便邀请该用户重新加入其以前所属的企业帐户拥有的任何组织。 |

### 基本要求

{% data reusables.saml.use-classic-ui %}

### 在 Okta 中添加 {% data variables.product.prodname_ghe_cloud %} 应用程序

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. 单击“{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts（企业帐户）”。
1. 单击 **Add（添加）**。
1. （可选）在“Application label（应用程序标签）”右边输入应用程序的描述性名称。 ![应用程序标签字段](/assets/images/help/saml/okta-application-label.png)
1. 在“{% data variables.product.prodname_dotcom %} Enterprises”右侧，键入企业帐户的名称。 例如，如果企业帐户的 URL 是`https://github.com/enterprises/octo-corp`，请键入 `octo-corp`。 ![GitHub Enterprises 字段](/assets/images/help/saml/okta-github-enterprises.png)
1. 单击 **Done（完成）**。

### 启用和测试 SAML SSO

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
1. 使用设置说明中的信息为企业帐户启用 SAML。 更多信息请参阅“[在企业帐户中实施安全设置](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)”。

### 在 Okta 中创建组

1. 在 Okta 中，创建一个组来匹配企业帐户拥有的每个组织。 每个组的名称必须与组织的帐户名称匹配（而不是组织的显示名称）。 例如，如果组织的 URL 为`https://github.com/octo-org`，则将组命名为 `octo-org`。
1. 将为企业帐户创建的应用程序分配给每个组。 {% data variables.product.prodname_dotcom %} 将接收每个用户的所有`组`数据。
1. 根据您希望用户所属的组织将用户添加到组。

### 在 Okta 中使用 SCIM 配置用户预配

{% data reusables.scim.enterprise-account-scim %}

要在 Okta 中使用 SCIM 配置用户预配，必须授权 OAuth 应用程序创建 Okta 可用于代表您向 {% data variables.product.product_name %} 验证的令牌。 Okta-oauth 应用程序由 Okta 与 {% data variables.product.prodname_dotcom %} 合作创建。

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. 单击 **Authenticate with Github Enterprise Cloud - Enterprise Accounts（向 Github Enterprise Cloud 验证 - 企业帐户）**。 ![用于向 {% data variables.product.prodname_dotcom %} 验证的按钮](/assets/images/help/business-accounts/authenticate-with-github-button.png)
1. 在企业帐户名称的右侧，单击 **Grant（授予）**。
1. 单击 **Authorize okta-oauth（授权 okta-oauth）**。
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}
1. 在应用程序名称下，单击 **Push Groups（推送组）**。 ![Push Groups（推送组）选项卡](/assets/images/help/business-accounts/okta-push-groups-tab.png)
1. 使用 **Push Groups（推送组）**下拉菜单，然后选择 **Find groups by name（按名称查找组）**。 ![Push Groups（推送组）下拉菜单](/assets/images/help/business-accounts/okta-push-groups-drop-down.png)
1. 为您要启用用户预配的企业帐户中的每个组织添加推送组。
   - 在“PUSH GROUPS BY NAME（按名称推送组）”下，搜索与企业帐户拥有的组织对应的组，然后单击搜索结果中的组。
   - 在组名称的右侧，在"匹配结果“Match results & push action（匹配结果和推送操作）”下拉菜单中，验证是否选择了 **Create Group（创建组）**。 ![选择了 Create Group（创建组）的匹配结果下拉菜单](/assets/images/help/saml/create-group-okta.png)
   - 单击 **Save（保存）**。
   - 对每个组织重复。
1. 在应用程序名称下，单击 **Assignments（分配）**。 ![Assignments（分配）选项卡](/assets/images/help/business-accounts/okta-assignments-tab.png)
1. 如果看到 **Provision users（预配用户）**，则表示尚未预配在为该组添加推送组之前属于 Okta 组成员的用户。 要将 SCIM 数据发送到这些用户的 {% data variables.product.product_name %}，请单击 **Provision users（预配用户）**。

### 启用 SAML 用户预配

在启用 SCIM 预配和解除预配后，您可以选择启用 SAML 用户预配和解除预配。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML User Provisioning（SAML 用户预配）”下，选择 **Enable SAML user provisioning（启用 SAML 用户预配）**。 ![使用 SAML 启用用户预配的复选框](/assets/images/help/business-accounts/user-provisioning.png)
1. 单击 **Save（保存）**。
1. （可选）启用 SAML 用户解除预配。
   - 选择 **Enable SAML user deprovisioning（启用 SAML 用户解除预配）**，然后单击 **Save（保存）**。 ![使用 SAML 启用用户解除预配的复选框](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - 阅读警告，然后单击 **Enable SAML deprovisioning（启用 SAML 解除预配）**。 ![启用 SAML 解除预配按钮](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
