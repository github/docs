---
title: 为企业配置 SAML 单点登录
shortTitle: 配置 SAML SSO
intro: '您可以通过{% ifversion ghec %}执行{% elsif ghae %}配置{% endif %}通过身份提供商 (IdP) 的 SAML 单点登录 (SSO)，控制和保护对 {% ifversion ghec %} 资源（如企业组织中的仓库、议题和拉取请求）{% elsif ghae %}您在 {% data variables.product.prodname_ghe_managed %} 上的企业{% endif %}的访问。'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: 'Enterprise owners can configure SAML SSO for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## 关于企业帐户的 SAML SSO

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %}更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”。

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} 更多信息请参阅“[查看和管理用户对企业帐户的 SAML 访问](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)”。

{% data reusables.scim.enterprise-account-scim %}

{% elsif ghae %}

SAML SSO 允许您从 SAML IDP 集中控制和安全访问 {% data variables.product.product_location %}。 当未经身份验证的用户在浏览器中访问 {% data variables.product.product_location %} 时，{% data variables.product.product_name %} 会将用户重定向到您的 SAML IDP 进行身份验证。 在用户使用 IdP 上的帐户成功进行身份验证后，IdP 会将用户重定向回 {% data variables.product.product_location %}。 {% data variables.product.product_name %} 将验证 IdP 的响应，然后授予用户访问权限。

当用户在 IdP 上成功进行身份验证后，用户对 {% data variables.product.product_location %} 的 SAML 会话将在浏览器中激活 24 小时。 24 小时后，用户必须再次使用您的 IdP 进行身份验证。

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。

{% endif %}

## 支持的身份提供程序

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Enforcing SAML single-sign on for organizations in your enterprise account

{% note %}

**注意：**

- 为您的企业实施 SAML SSO 时，企业配置将覆盖任何现有的组织级 SAML 配置。 {% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."
- When you enforce SAML SSO for an organization, {% data variables.product.company_short %} removes any members of the organization that have not authenticated successfully with your SAML IdP. When you require SAML SSO for your enterprise, {% data variables.product.company_short %} does not remove members of the enterprise that have not authenticated successfully with your SAML IdP. The next time a member accesses the enterprise's resources, the member must authenticate with your SAML IdP.

{% endnote %}

有关如何使用 Okta 启用 SAML 的更多详细信息，请参阅“[使用 Okta 为企业帐户配置 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "SAML single sign-on", select **Require SAML authentication**. ![用于启用 SAML SSO 的复选框](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. 在 **Sign on URL（登录 URL）**字段中，为单点登录请求输入您的 IdP 的 HTTPS 端点。 此值可在 IdP 配置中找到。 ![登录时将成员转发到的 URL 字段](/assets/images/help/saml/saml_sign_on_url_business.png)
7. （可选）在 **Issuer（签发者）**字段中，输入 SAML 签发者 URL 以验证已发送消息的真实性。 ![SAML 签发者姓名字段](/assets/images/help/saml/saml_issuer.png)
8. 在 **Public Certificate（公共证书）**下，粘贴证书以验证 SAML 响应。 ![身份提供程序的公共证书字段](/assets/images/help/saml/saml_public_certificate.png)
9. 要验证来自 SAML 签发者的请求的完整性，请单击 {% octicon "pencil" aria-label="The edit icon" %}。 然后，在“Signature Method（签名方法）”和“Digest Method（摘要方法）”下拉菜单中，选择 SAML 签发者使用的哈希算法。 ![SAML 签发者使用的签名方法和摘要方法哈希算法下拉列表](/assets/images/help/saml/saml_hashing_method.png)
10. 在为企业启用 SAML SSO 之前，单击 **Test SAML configuration（测试 SMAL 配置）** ，以确保已输入的信息正确。 ![实施前测试 SAML 配置的按钮](/assets/images/help/saml/saml_test.png)
11. 单击 **Save（保存）**。

{% elsif ghae %}

## 启用 SAML SSO

{% ifversion ghae %}

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

以下 IdP 提供有关为 {% data variables.product.product_name %} 配置 SAML SSO 的文档。 如果您的 IdP 未列出，请与您的 IdP 联系，以请求 {% data variables.product.product_name %}。

 | IdP      | 更多信息                                                                                                                                                                                               |
 |:-------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Azure AD | [教程： Microsoft 文档中的“与 {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) 的 Azure Active Directory 单点登录 (SSO) 集成” |

在 {% data variables.product.product_name %} 的初始化期间，您必须在 IdP 上将 {% data variables.product.product_name %} 配置为 SAML 服务提供程序 (SP)。 您必须在 IdP 上输入多个唯一值以将 {% data variables.product.product_name %} 配置为有效的 SP。

| 值                    | 其他名称   | 描述                                                         | 示例                        |
|:-------------------- |:------ |:---------------------------------------------------------- |:------------------------- |
| SP 实体 ID             | SP URL | {% data variables.product.prodname_ghe_managed %} 顶级 URL | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code> |
| SP 断言使用者服务 (ACS) URL | 回复 URL | IdP 发送 SAML 响应的 URL                                        | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| SP 单点登录 (SSO) URL    |        | IdP 开始 SSO 的 URL                                           | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

{% endif %}

## 编辑 SAML SSO 配置

如果 IdP 的详细信息发生更改，则需要编辑 {% data variables.product.product_location %} 的 SAML SSO 配置。 例如，如果 IdP 的证书过期，您可以编辑公共证书的值。

{% ifversion ghae %}

{% note %}

**注**：{% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML single sign-on（SAML 单点登录）”下，键入 IdP 的新详细信息。 ![包含企业 SAML SSO 配置 IdP 详细信息的文本输入字段](/assets/images/help/saml/ae-edit-idp-details.png)
1. （可选）单击 {% octicon "pencil" aria-label="The edit icon" %} 以配置新的签名或摘要方法。 ![用于更改签名和摘要方法的编辑图标](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - 使用下拉菜单并选择新的签名或摘要方法。 ![用于选择新签名或摘要方法的下拉菜单](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. 为确保输入的信息正确，请单击 **Test SAML configuration（测试 SAML 配置）**。 !["Test SAML configuration（测试 SAML 配置）"按钮](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. 单击 **Save（保存）**。 ![用于 SAML SSO 配置的"Save（保存）"按钮](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. （可选）要自动预配和取消预配 {% data variables.product.product_location %} 的用户帐户，请使用 SCIM 重新配置用户预配。 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。

{% endif %}

## 禁用 SAML SSO

{% ifversion ghae %}

{% warning %}

**警告**：如果您对 {% data variables.product.product_location %} 禁用 SAML SSO，则没有现有 SAML SSO 会话的用户无法登录 {% data variables.product.product_location %}。 {% data variables.product.product_location %} 上的 SAML SSO 会话在 24 小时后结束。

{% endwarning %}

{% note %}

**注**：{% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML single sign-on”（SAML 单点登录）下，取消选择 **Enable SAML authentication（启用 SAML 身份验证）**。 !["Enable SAML authentication（启用 SAML 身份验证）"的复选框](/assets/images/help/saml/ae-saml-disabled.png)
1. 要禁用 SAML SSO 并要求使用在初始化期间创建的内置用户帐户登录，请单击“**Save（保存）**”。 ![用于 SAML SSO 配置的"Save（保存）"按钮](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}
