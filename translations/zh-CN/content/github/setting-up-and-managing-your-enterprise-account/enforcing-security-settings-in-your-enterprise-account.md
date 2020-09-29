---
title: 在企业帐户中实施安全设置
intro: 企业所有者可以为企业帐户拥有的所有组织实施特定的安全策略。
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

### 要求企业帐户中的组织进行双重身份验证

企业所有者可以要求企业帐户拥有的所有组织中的组织成员、帐单管理员和外部协作者使用双重身份验证来保护其个人帐户。

您必须为自己的帐户启用双重身份验证，然后才能对企业帐户拥有的所有组织都要求 2FA。 更多信息请参阅“[使用双重身份验证 (2FA) 保护您的帐户](/articles/securing-your-account-with-two-factor-authentication-2fa/)”。

{% warning %}

**警告：**

- 当您需要为企业帐户进行双重身份验证时，不使用 2FA 的企业帐户拥有的所有组织中的成员、外部协作者和帐单管理员（包括自动程序帐户）将从组织中删除，并失去对其仓库的访问权限。 他们还会失去对组织私有仓库的复刻的访问权限。 如果他们在从您的组织中删除后的三个月内为其个人帐户启用双重身份验证，您可以恢复其访问权限和设置。 更多信息请参阅“[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”。
- 为其个人帐户禁用 2FA 的企业帐户拥有的任何组织中的任何组织所有者、成员、帐单管理员或外部协作者在您启用所需的双重身份验证后将自动从组织中删除。
- 如果您是某个要求双重身份验证的企业帐户的唯一所有者，则在不为企业帐户禁用双重身份验证要求的情况下，您将无法为个人帐户禁用 2FA。

{% endwarning %}

在您要求使用双重身份验证之前，我们建议通知组织成员、外部协作者和帐单管理员，并要求他们为帐户设置双重身份验证。 组织所有者可以查看成员和外部协作者是否已在每个组织的 People（人员）页面上使用 2FA。 更多信息请参阅“[查看组织中的用户是否已启用 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. 在“Two-factor authentication（双重身份验证）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Two-factor authentication（双重身份验证）”下，选择 **Require two-factor authentication for all organizations in your business（对您企业中的所有组织要求双重身份验证）**，然后单击 **Save（保存）**。 ![要求双重身份验证的复选框](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. 如果出现提示，请阅读有关将从企业帐户所拥有的组织中删除的成员和外部协作者的信息。 要确认更改，请输入企业帐户的名称，然后单击 **Remove members & require two-factor authentication（删除成员并要求双重身份验证）**。 ![确认双重实施框](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. （可选）如果从您的企业帐户拥有的组织中删除了任何成员或外部协作者，我们建议向他们发送邀请，以恢复其以前对组织的权限和访问权限。 每个人都必须启用双重身份验证，然后才能接受您的邀请。

### 管理企业帐户中组织允许的 IP 地址

企业所有者可以通过为特定 IP 地址配置允许列表，来限制对企业帐户中组织拥有的资产的访问。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

您还可以为单个组织配置允许的 IP 地址。 更多信息请参阅“[管理组织允许的 IP 地址](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)”。

#### 添加允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### 启用允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. 在“IP allow list（IP 允许列表）”下，选择 **Enable IP allow list（启用 IP 允许列表）**。 ![允许 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. 单击 **Save（保存）**。

#### 编辑允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Click **Update**.

#### 删除允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

#### 对 {% data variables.product.prodname_actions %} 使用 IP 允许列表

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

### 为企业帐户中的组织启用 SAML 单点登录

{% data reusables.saml.dotcom-saml-explanation %}更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)”。

企业所有者可以通过 SAML IdP 跨企业帐户拥有的所有组织启用 SAML SSO 和集中式身份验证。 为企业帐户启用 SAML SSO 后，默认情况下会为您的企业帐户拥有的所有组织启用 SAML SSO。 所有成员都需要使用 SAML SSO 进行身份验证才能访问其所属的组织，并且企业所有者在访问企业帐户时需要使用 SAML SSO 进行身份验证。

{% data reusables.saml.about-saml-access-enterprise-account %} 更多信息请参阅“[查看和管理用户对企业帐户的 SAML 访问](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)”。

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} 如果您没有参与私人测试，那么 SIM 卡不支持企业账户。 更多信息请参阅“[管理企业帐户中组织的用户配置](#managing-user-provisioning-for-organizations-in-your-enterprise-account)”。

{% note %}

**Note:** Enabling authentication with SAML single sign-on for your enterprise account will override any existing organization-level SAML configurations.

{% endnote %}

有关如何使用 Okta 启用 SAML 的更多详细信息，请参阅[使用 Okta 为企业帐户配置 SAML 单点登录和 SCIM](/github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“SAML single sign-on”（SAML 单点登录）下，选择 **Enable SAML authentication（启用 SAML 身份验证）**。 ![用于启用 SAML SSO 的复选框](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. 在 **Sign on URL（登录 URL）**字段中，为单点登录请求输入您的 IdP 的 HTTPS 端点。 此值可在 IdP 配置中找到。 ![登录时将成员转发到的 URL 字段](/assets/images/help/saml/saml_sign_on_url_business.png)
7. （可选）在 **Issuer（签发者）** 字段中，输入您的 SAML 签发者的姓名。 此操作验证已发送消息的真实性。 ![SAML 签发者姓名字段](/assets/images/help/saml/saml_issuer.png)
8. 在 **Public Certificate（公共证书）**下，粘贴证书以验证 SAML 响应。 ![身份提供程序的公共证书字段](/assets/images/help/saml/saml_public_certificate.png)
9. 要验证来自 SAML 签发者的请求的完整性，请单击 {% octicon "pencil" aria-label="The edit icon" %}。 然后，在 Signature Method（签名方法）和 Digest Method（摘要方法）下拉菜单中，选择 SAML 签发者使用的哈希算法。 ![SAML 签发者使用的签名方法和摘要方法哈希算法下拉列表](/assets/images/help/saml/saml_hashing_method.png)
10. 在为企业启用 SAML SSO 之前，单击 **Test SAML configuration（测试 SMAL 配置）** ，以确保已输入的信息正确。 ![实施前测试 SAML 配置的按钮](/assets/images/help/saml/saml_test.png)
11. 单击 **Save（保存）**。

### 管理企业帐户中组织的用户配置

企业所有者可直接从身份提供程序 (IdP) 管理企业帐户中的组织成员身份。

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %}（可选）您也可以启用 SAML 预配和单独取消预配。

如果您在 IdP 中配置 SCIM，每次更改您在 IdP 中的成员身份时， 您的 IdP 将向 {% data variables.product.prodname_dotcom %} 发出 SCIM 呼叫来更新对应组织的成员身份。 如果启用 SAML 预配，则每当企业成员访问受企业帐户 SAML 配置保护的资源时，该 SAML 断言都将触发预配。

对于每个 SCIM 呼叫或 SAML 断言，{% data variables.product.product_name %} 都将检查用户所属的 IdP 组并执行以下操作：

- 如果用户是企业帐户拥有的组织对应的 IdP 组的成员，并且该用户当前不是该组织的成员，请将该用户添加到组织（SAML 断言）或向用户发送电子邮件邀请其加入组织（SCIM 呼叫）。
- 取消邀请用户加入您的企业帐户所拥有的组织的任何现有邀请。

对于每个 SCIM 呼叫，如果您启用 SAML 解除预配，则对于每个 SAML 断言，{% data variables.product.product_name %} 也会执行以下操作：

- 如果用户不是企业帐户拥有的组织对应的 IdP 组的成员，并且该用户当前是该组织的成员，请将组织中删除该用户。

如果解除预配从组织中删除最后一个剩余的所有者，组织将变得没有所有者。 企业所有者可以接管无所有者组织的所有权。 更多信息请参阅“[管理企业帐户中无所有者的组织](/github/setting-up-and-managing-your-enterprise-account/managing-unowned-organizations-in-your-enterprise-account)”。

要使用 Okta 为您的企业帐户启用用户预配，请参阅“[使用 Okta 为企业帐户配置 SAML 单点登录和 SCIM](/github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)”。

### 管理企业帐户中组织的团队同步

企业所有者可以在 IdP 与 {% data variables.product.product_name %} 之间启用团队同步，以让组织所有者和团队维护员将企业帐户拥有的组织中的团队与 IdP 组连接起来。

{% data reusables.identity-and-permissions.about-team-sync %}

您可通过 Azure AD 对企业帐户使用团队同步。

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

You can also configure and manage team synchronization for an individual organization. 更多信息请参阅“[管理组织的团队同步](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)”。

#### 基本要求

在可以为企业帐户启用团队同步之前：
  - 您或您的 Azure AD 管理员必须是 Azure AD 中的全局管理员或特权角色管理员。
  - 您必须使用受支持的 IdP 为企业帐户中的组织启用 SAML 单点登录。 更多信息请参阅“[为企业帐户中的组织启用 SAML 单点登录](#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)”。
  - 您必须使用 SAML SSO 和支持的 IdP 向企业帐户进行身份验证。 更多信息请参阅“[使用 SAML 单点登录进行身份验证](/articles/authenticating-with-saml-single-sign-on)”。

#### 管理 Azure AD 的团队同步

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. 查看要连接到企业帐户的身份提供程序租户信息，然后单击 **Approve（批准）**。 ![启用特定 IdP 租户团队同步且含有批准或取消请求选项的待处理请求](/assets/images/help/teams/approve-team-synchronization.png)
8. 要禁用团队同步，单击 **Disable team synchronization（禁用团队同步）**。 ![禁用团队同步](/assets/images/help/teams/disable-team-synchronization.png)

### 管理企业帐户的 SSH 认证中心

企业所有者可以添加和删除企业帐户的 SSH 认证中心 (CA)。

将 SSH CA 添加到企业帐户后，您可以允许企业帐户拥有的任何组织的成员使用您提供的 SSH 证书，访问该组织的仓库。 {% data reusables.organizations.can-require-ssh-cert %} 更多信息请参阅“[关于 SSH 认证中心](/articles/about-ssh-certificate-authorities)”。

#### 添加 SSH 认证中心

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

#### 删除 SSH 认证中心

对 CA 的删除无法撤销。 如果以后要使用同一 CA，您需要重新上传该 CA。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}
