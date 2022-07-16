---
title: 使用 Okta 为企业配置身份验证和预配
shortTitle: 使用 Okta 进行配置
intro: '您可以使用 Okta 作为身份提供程序 (IdP) 来集中管理 {% data variables.product.prodname_ghe_managed %} 的身份验证和用户预配。'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
---

{% data reusables.saml.okta-ae-sso-beta %}

## 关于 SAML 和 SCIM 与 Octa

您可以使用 Okta 作为 {% data variables.product.prodname_ghe_managed %} 的身份提供程序 (IdP)，这允许您的 Okta 用户使用其 Okta 凭据登录到 {% data variables.product.prodname_ghe_managed %}。

要使用 Okta 作为 {% data variables.product.prodname_ghe_managed %} 的 IdP，您可以将 {% data variables.product.prodname_ghe_managed %} 应用程序添加到 Okta，将 Okta 配置为您在 {% data variables.product.prodname_ghe_managed %} 中的 IdP，然后为 Okta 用户和组预配访问权限。

以下预配功能可用于分配给 {% data variables.product.prodname_ghe_managed %} 应用程序的所有 Okta 用户。

| 功能       | 描述                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------- |
| 推送新用户    | 在 Okta 中创建新用户时，该用户将添加到 {% data variables.product.prodname_ghe_managed %}。                       |
| 推送用户停用   | 当您在 Okta 中停用用户时，将从您在 {% data variables.product.prodname_ghe_managed %} 上的企业暂停该用户。               |
| 推送个人资料更新 | 当您在 Okta 中更新用户的个人资料时，它将更新您在 {% data variables.product.prodname_ghe_managed %} 上的企业中该用户成员身份的元数据。 |
| 重新激活用户   | 当您在 Okta 中重新激活用户时，它将在 {% data variables.product.prodname_ghe_managed %} 上取消暂停企业中的用户。            |

## 在 Okta 中添加 {% data variables.product.prodname_ghe_managed %} 应用程序

{% data reusables.saml.okta-ae-applications-menu %}
1. 单击 **Browse App Catalog（浏览应用程序目录）**

  !["浏览应用程序目录"](/assets/images/help/saml/okta-ae-browse-app-catalog.png)

1. 在搜索字段中，键入“GitHub AE”，然后单击结果中的 **GitHub AE**。

  !["搜索结果"](/assets/images/help/saml/okta-ae-search.png)

1. 单击 **Add（添加）**。

  !["添加 GitHub AE 应用程序"](/assets/images/help/saml/okta-ae-add-github-ae.png)

1. 对于“基本 URL”，请键入您在 {% data variables.product.prodname_ghe_managed %} 上的企业的 URL。

  !["配置基本 URL"](/assets/images/help/saml/okta-ae-configure-base-url.png)

1. 单击 **Done（完成）**。

## 为 {% data variables.product.prodname_ghe_managed %} 启用 SAML SSO

要为 {% data variables.product.prodname_ghe_managed %} 启用单点登录 (SSO)，必须配置 {% data variables.product.prodname_ghe_managed %} 使用 Okta 提供的登录 URL、颁发者 URL 和公共证书。 您可以在“GitHub AE”应用程序中找到这些详细信息。

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
1. 单击 **Sign On（登录）**。

  ![“登录”选项卡](/assets/images/help/saml/okta-ae-sign-on-tab.png)

1. 单击 **View Setup Instructions（查看设置说明）**。

  ![“登录”选项卡](/assets/images/help/saml/okta-ae-view-setup-instructions.png)

1. 记下“登录 URL”、“颁发者”和“公共证书”详细信息。
1. 使用详细信息为您在 {% data variables.product.prodname_ghe_managed %} 上的企业启用 SAML SSO。 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

{% note %}

**注意：**要从 {% data variables.product.prodname_ghe_managed %} 测试 SAML 配置，必须将 Okta 用户帐户分配给 {% data variables.product.prodname_ghe_managed %} 应用程序。

{% endnote %}

## 启用 API 集成

Okta 中的“GitHub AE”应用程序使用 {% data variables.product.product_name %} API 与 SCIM 和 SSO 的企业进行交互。 此过程说明如何通过使用 {% data variables.product.prodname_ghe_managed %} 的个人访问令牌配置 Okta 来启用和测试对 API 的访问。

1. 在 {% data variables.product.prodname_ghe_managed %} 中，生成具有 `admin:enterprise` 范围的个人访问令牌。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。
{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
{% data reusables.saml.okta-ae-provisioning-tab %}
1. 单击 **Configure API Integration（配置 API 集成）**。

1. 选择 **Enable API integration（启用 API 集成）**。

  ![启用 API 集成](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. 对于“"API Token（API 令牌）”，键入之前生成的 {% data variables.product.prodname_ghe_managed %} 个人访问令牌。

1. 单击 **Test API Credentials（测试 API 凭据）**。

{% note %}

**注意：** 如果看到 `Error authenticating: No results for users returned（身份验证错误：未返回用户结果）`，请确认已为 {% data variables.product.prodname_ghe_managed %} 启用 SSO。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_managed %} 启用 SAML SSO](#enabling-saml-sso-for-github-ae)”。

{% endnote %}

## 配置 SCIM 预配设置

此过程演示如何为 Okta 预配配置 SCIM 设置。 这些设置定义了在自动将 Okta 用户帐户设置为 {% data variables.product.prodname_ghe_managed %} 时将使用哪些功能。

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
{% data reusables.saml.okta-ae-provisioning-tab %}
1. 在“Settings（设置）”下，单击 **To App（到应用程序）**。

  !["到应用程序" 设置](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. 在“Provisioning to App（配置到 App）”的右侧，单击 **Edit（编辑）**。
1. 在“Create Users（创建用户）”的右侧，选择 **Enable（启用）**。
1. 在“Update User Attributes（更新用户属性）”的右侧，选择 **Enable（启用）**。
1. 在“Deactivate Users（停用用户）”的右侧，选择 **Enable（启用）**。
1. 单击 **Save（保存）**。

## 允许 Okta 用户和组访问 {% data variables.product.prodname_ghe_managed %}

您可以为单个 Okta 用户或整个组预配对 {% data variables.product.product_name %} 的访问权限。

### 为 Okta 用户预配访问权限

在 Okta 用户可以使用其凭据登录到 {% data variables.product.prodname_ghe_managed %} 之前，您必须将用户分配到 Okta 中的“GitHub AE”应用程序。

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}

1. 单击 **Assignments（分配）**。

  ![Assignments（分配）选项卡](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. 选择 Assign（分配）下拉菜单，然后单击 **Assign to People（分配给人员）**。

  ![""分配给人员" "按钮](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. 在所需用户帐户的右侧，单击 **Assign（分配）**。

  ![用户列表](/assets/images/help/saml/okta-ae-assign-user.png)

1. 在“Role（角色）”右侧，单击用户的角色，然后单击 **Save and go back（保存并返回）**。

  ![角色选择](/assets/images/help/saml/okta-ae-assign-role.png)

1. 单击 **Done（完成）**。

### 为 Okta 组预配访问权限

您可以将 Okta 组映射到 {% data variables.product.prodname_ghe_managed %} 中的团队。 然后，Okta 组的成员将自动成为映射的 {% data variables.product.prodname_ghe_managed %} 组的成员。 更多信息请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。

## 延伸阅读

- Okta 文档中的[了解 SAML](https://developer.okta.com/docs/concepts/saml/).
- Okta 文档中的[了解 SCIM](https://developer.okta.com/docs/concepts/scim/).
