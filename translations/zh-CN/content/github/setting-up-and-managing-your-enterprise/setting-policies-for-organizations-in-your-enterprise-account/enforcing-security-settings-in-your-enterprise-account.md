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
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
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

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

您还可以为单个组织配置允许的 IP 地址。 更多信息请参阅“[管理组织允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)”。

#### 添加允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### 允许 {% data variables.product.prodname_github_apps %} 访问

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

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
8. 单击 **Update（更新）**。

#### 删除允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

#### 对 {% data variables.product.prodname_actions %} 使用 IP 允许列表

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

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

### 延伸阅读

- "[为企业帐户配置身份和访问权限管理](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account)"
