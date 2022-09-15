---
title: 为企业配置 SAML 单点登录
shortTitle: Configure SAML SSO
intro: '你可以通过{% ifversion ghec %}强制执行{% elsif ghes or ghae %}配置{% endif %}通过身份提供商 (IdP) 的 SAML 单一登录 (SSO)，控制和保护对{% ifversion ghec %}资源（如企业组织中的存储库、问题和拉取请求）{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}你在 {% data variables.product.prodname_ghe_managed %} 上的企业{% endif %}的访问。'
permissions: '{% ifversion ghes %}Site administrators{% elsif ghec or ghae %}Enterprise owners{% endif %} can configure SAML SSO for {% ifversion ghec or ghae %}an enterprise on {% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
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
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
ms.openlocfilehash: a53a82ca88bb13b4e8fbb6ec5b2f2cd513f7b6a4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526828'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## 关于 SAML SSO

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

有关详细信息，请参阅[关于使用 SAML 单一登录进行标识和访问管理](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)。

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}有关详细信息，请参阅“[查看和管理用户对企业帐户 SAML 的访问](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)”。

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.scim.enterprise-account-scim %}

{% elsif ghes or ghae %}

SAML SSO 允许您从 SAML IDP 集中控制和安全访问 {% data variables.product.product_location %}。 当未经身份验证的用户在浏览器中访问 {% data variables.product.product_location %} 时，{% data variables.product.product_name %} 会将用户重定向到您的 SAML IDP 进行身份验证。 在用户使用 IdP 上的帐户成功进行身份验证后，IdP 会将用户重定向回 {% data variables.product.product_location %}。 {% data variables.product.product_name %} 将验证 IdP 的响应，然后授予用户访问权限。

当用户在 IdP 上成功进行身份验证后，用户对 {% data variables.product.product_location %} 的 SAML 会话将在浏览器中激活 24 小时。 24 小时后，用户必须再次使用您的 IdP 进行身份验证。

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} 有关详细信息，请参阅[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)。

{% endif %}

{% endif %}

## 支持的身份提供程序

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## 使用 SAML 时的用户名考量因素

{% ifversion ghec %}如果使用 {% data variables.product.prodname_emus %}，{% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} 有关详细信息，请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。

## 为企业帐户中的组织强制实施 SAML 单一登录

{% note %}

**注意：**

- 为您的企业实施 SAML SSO 时，企业配置将覆盖任何现有的组织级 SAML 配置。 {% data reusables.saml.switching-from-org-to-enterprise %} 有关详细信息，请参阅“[将 SAML 配置从组织切换为企业帐户](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”。
- 当你为组织强制实施 SAML SSO 时，{% data variables.product.company_short %} 会删除未通过 SAML IdP 成功进行身份验证的任何组织成员。 当为企业强制实施 SAML SSO 时，{% data variables.product.company_short %} 不会删除未通过 SAML IdP 成功进行身份验证的企业成员。 下一次当某个成员访问企业资源时，该成员必须使用 SAML IdP 进行身份验证。

{% endnote %}

有关如何使用 Okta 启用 SAML 的详细信息，请参阅“[使用 Okta 为企业帐户配置 SAML 单一登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“SAML 单一登录”下，选择“要求 SAML 身份验证”。
  ![用于启用 SAML SSO 的复选框](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. 在“登录 URL”字段中，为单一登录请求键入 IdP 的 HTTPS 终结点。 此值可在 IdP 配置中找到。
![登录时将成员转发到的 URL 字段](/assets/images/help/saml/saml_sign_on_url_business.png)
7. （可选）在“颁发者”字段中，键入 SAML 颁发者 URL 以验证已发送消息的真实性。
![SAML 颁发者的姓名字段](/assets/images/help/saml/saml_issuer.png)
8. 在“公共证书”下，粘贴证书以验证 SAML 响应。
![标识提供程序的公共证书字段](/assets/images/help/saml/saml_public_certificate.png)
9. 若要验证来自 SAML 颁发者的请求完整性，请单击 {% octicon "pencil" aria-label="The edit icon" %}。 然后，在“Signature Method（签名方法）”和“Digest Method（摘要方法）”下拉菜单中，选择 SAML 签发者使用的哈希算法。
![SAML 颁发者使用的签名方法和摘要方法哈希算法下拉列表](/assets/images/help/saml/saml_hashing_method.png)
10. 在为企业启用 SAML SSO 之前，请单击“测试 SMAL 配置”，以确保已输入的信息正确。 ![实施前测试 SAML 配置的按钮](/assets/images/help/saml/saml_test.png)
11. 单击“ **保存**”。
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## 配置 SAML SSO

可以为 {% data variables.product.product_location %} 启用或禁用 SAML 身份验证，也可以编辑现有配置。 可以在管理控制台中查看和编辑 {% data variables.product.product_name %} 的身份验证设置。 有关详细信息，请参阅“[访问管理控制台](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”。

{% note %}

注意：{% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. 选择“SAML”。
   
   ![在管理控制台中启用 SAML 身份验证的选项的屏幕截图](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![在 SAML IdP 外部启用内置身份验证的选项的屏幕截图](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. （可选）若要启用未经请求的响应 SSO，请选择“IdP 发起的 SSO”。 默认情况下，{% data variables.product.prodname_ghe_server %} 将对未经请求的标识提供者 (IdP) 发起的请求进行回复，并向 IdP 返回一个 `AuthnRequest`。

   ![启用 IdP 发起的未经请求响应的选项的屏幕截图](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   注意：建议将此值保持未选中状态。 应仅在罕见情况下才启用此功能，即 SAML 实现不支持服务提供程序发起的 SSO，并且 {% data variables.contact.enterprise_support %} 建议执行此操作。

   {% endtip %}

1. 如果你不希望 SAML 提供程序为 {% data variables.product.product_location %} 上的用户确定管理员权限，请选择“禁用管理员降级/升级” 。

   ![用于启用选项以遵从 IdP 的“管理员”属性，从而启用或禁用管理权限的选项的屏幕截图](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png) {%- ifversion ghes > 3.3 %}
1. （可选）若要允许 {% data variables.product.product_location %} 从 SAML IdP 接收加密断言，请选择“需要加密断言”。 必须确保 IdP 支持加密断言，并且管理控制台中的加密和密钥传输方法与 IdP 上配置的值相匹配。 还必须向 IdP 提供 {% data variables.product.product_location %} 的公共证书。 有关详细信息，请参阅“[启用加密断言](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions)”。

   ![管理控制台“身份验证”部分中“启用加密断言”复选框的屏幕截图](/assets/images/help/saml/management-console-enable-encrypted-assertions.png) {%- endif %}
1. 在“单一登录 URL”字段中，输入 IdP 上用于单一登录请求的 HTTP 或 HTTPS 终结点。 此值由您的 IdP 配置提供。 如果主机只能在内部网络中使用，则可能需要[配置 {% data variables.product.product_location %} 以使用内部名称服务器](/enterprise/admin/guides/installation/configuring-dns-nameservers/)。

   ![单一登录 URL 的文本字段的屏幕截图](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. （可选）在“颁发者”字段中，键入 SAML 颁发者的名称。 这将验证发送到 {% data variables.product.product_location %} 的消息的真实性。

   ![SAML 颁发者 URL 的文本字段的屏幕截图](/assets/images/enterprise/management-console/saml-issuer.png)
1. 在“签名方法”和“摘要方法”下拉菜单中，选择 SAML 颁发者用来验证来自 {% data variables.product.product_location %} 的请求完整性的哈希算法 。 使用“名称标识符格式”下拉菜单指定格式。

   ![用于选择签名和摘要方法的下拉菜单的屏幕截图](/assets/images/enterprise/management-console/saml-method.png)
1. 在“验证证书”下，单击“选择文件”并选择一个证书以验证来自 IdP 的 SAML 响应 。

   ![用于从 IdP 上传验证证书的按钮的屏幕截图](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. 如果需要，请修改 SAML 属性名称以匹配您的 IdP，或者接受默认名称。

   ![用于输入其他 SAML 属性的字段的屏幕截图](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## 启用 SAML SSO

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

以下 IdP 提供有关为 {% data variables.product.product_name %} 配置 SAML SSO 的文档。 如果您的 IdP 未列出，请与您的 IdP 联系，以请求 {% data variables.product.product_name %}。

 | IdP | 详细信息 |
 | :- | :- |
 | Azure AD | “[使用 Azure AD 为企业配置身份验证和预置](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)” |
| Okta | “[使用 Okta 为企业配置身份验证和预配](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)” |

在 {% data variables.product.product_name %} 的初始化期间，必须在 IdP 上将 {% data variables.product.product_name %} 配置为 SAML 服务提供程序 (SP)。 您必须在 IdP 上输入多个唯一值以将 {% data variables.product.product_name %} 配置为有效的 SP。 有关详细信息，请参阅“[SAML 配置参考](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata)”。

## 编辑 SAML SSO 配置

如果 IdP 的详细信息发生更改，则需要编辑 {% data variables.product.product_location %} 的 SAML SSO 配置。 例如，如果 IdP 的证书过期，您可以编辑公共证书的值。

{% ifversion ghae %}

{% note %}

注意：{% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML single sign-on（SAML 单点登录）”下，键入 IdP 的新详细信息。
  ![具有 IdP 详细信息的文本输入字段，用于企业 SAML SSO 配置](/assets/images/help/saml/ae-edit-idp-details.png)
1. （可选）单击 {% octicon "pencil" aria-label="The edit icon" %} 以配置新的签名或摘要方法。
  ![用于更改签名和摘要方法的编辑图标](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - 使用下拉菜单并选择新的签名或摘要方法。
      ![用于选择新签名或摘要方法的下拉菜单](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. 要确保输入的信息是正确的，请单击“测试 SAML 配置”。
  ![“测试 SAML 配置”按钮](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. 单击“ **保存**”。
    ![SAML SSO 配置的“保存”按钮](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. （可选）要自动预配和取消预配 {% data variables.product.product_location %} 的用户帐户，请使用 SCIM 重新配置用户预配。 有关详细信息，请参阅“[为企业配置用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。

{% endif %}

{% ifversion ghae %}

## 禁用 SAML SSO

{% warning %}

警告：如果禁用 {% data variables.product.product_location %} 的 SAML SSO，没有现有 SAML SSO 会话的用户不能登录 {% data variables.product.product_location %}。 {% data variables.product.product_location %} 上的 SAML SSO 会话在 24 小时后结束。

{% endwarning %}

{% note %}

注意：{% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML 单一登录”下，取消选择“启用 SAML 身份验证”。
  ![“启用 SAML 身份验证”的复选框](/assets/images/help/saml/ae-saml-disabled.png)
1. 若要禁用 SAML SSO 并要求使用在初始化期间创建的内置用户帐户进行登录，请单击“保存”。
    ![SAML SSO 配置的“保存”按钮](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}

{% ifversion ghec or ghes %}

## 延伸阅读

{%- ifversion ghec %}
- “[管理组织的 SAML 单一登录](/organizations/managing-saml-single-sign-on-for-your-organization)”{%- endif %} {%- ifversion ghes %}
- “[升级或降级站点管理员](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)”{%- endif %}

{% endif %}
