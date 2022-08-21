---
title: 为企业中的安全设置实施策略
intro: 您可以实施策略来管理企业组织中的安全设置，或允许在每个组织中设置策略。
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: 安全设置策略
---

## 关于企业中安全设置的策略

您可以在 {% data variables.product.product_name %} 上实施策略以控制企业拥有的组织的安全设置。 默认情况下，组织所有者可以管理安全设置。 更多信息请参阅“[保护组织安全](/organizations/keeping-your-organization-secure)”。

{% ifversion ghec or ghes %}

## 要求企业中的组织进行双重身份验证

企业所有者可以要求企业拥有的所有组织中的组织成员、帐单管理员和外部协作者使用双重身份验证来保护其用户帐户。

您必须为自己的帐户启用双重身份验证，然后才能对企业拥有的所有组织都要求 2FA。 更多信息请参阅“[使用双重身份验证 (2FA) 保护您的帐户](/articles/securing-your-account-with-two-factor-authentication-2fa/)”。

{% warning %}

**警告：**

- 当您需要为企业进行双重身份验证时，不使用 2FA 的企业拥有的所有组织中的成员、外部协作者和帐单管理员（包括自动程序帐户）将从组织中删除，并失去对其仓库的访问权限。 他们还会失去对组织私有仓库的复刻的访问权限。 如果他们在从您的组织中删除后的三个月内为其帐户启用双重身份验证，您可以恢复其访问权限和设置。 更多信息请参阅“[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”。
- 为其帐户禁用 2FA 的企业拥有的任何组织中的任何组织所有者、成员、帐单管理员或外部协作者在您启用所需的双重身份验证后将自动从组织中删除。
- If you're the sole owner of an enterprise that requires two-factor authentication, you won't be able to disable 2FA for your user account without disabling required two-factor authentication for the enterprise.

{% endwarning %}

在您要求使用双重身份验证之前，我们建议通知组织成员、外部协作者和帐单管理员，并要求他们为帐户设置双重身份验证。 组织所有者可以查看成员和外部协作者是否已在每个组织的 People（人员）页面上使用 2FA。 更多信息请参阅“[查看组织中的用户是否已启用 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. 在“Two-factor authentication（双重身份验证）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Two-factor authentication（双重身份验证）”下，选择 **Require two-factor authentication for all organizations in your business（对您企业中的所有组织要求双重身份验证）**，然后单击 **Save（保存）**。 ![要求双重身份验证的复选框](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. 如果出现提示，请阅读有关将从企业所拥有的组织中删除的成员和外部协作者的信息。 要确认更改，请输入企业的名称，然后单击 **Remove members & require two-factor authentication（删除成员并要求双重身份验证）**。 ![确认双重实施框](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. （可选）如果从您的企业拥有的组织中删除了任何成员或外部协作者，我们建议向他们发送邀请，以恢复其以前对组织的权限和访问权限。 每个人都必须启用双重身份验证，然后才能接受您的邀请。

{% endif %}

{% ifversion ghec or ghae %}

## 管理企业中组织允许的 IP 地址

{% ifversion ghae %}

您可以在 {% data variables.product.product_name %}上限制到企业的网络流量。 更多信息请参阅“[限制到企业的网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)”。

{% elsif ghec %}

企业所有者可以通过为特定 IP 地址配置允许列表，来限制对企业中组织拥有的私有资产的访问。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

您还可以为单个组织配置允许的 IP 地址。 更多信息请参阅“[管理组织允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)”。

### 添加允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### 允许 {% data variables.product.prodname_github_apps %} 访问

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### 启用允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. 在“IP allow list（IP 允许列表）”下，选择 **Enable IP allow list（启用 IP 允许列表）**。 ![允许 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. 单击 **Save（保存）**。

### 编辑允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. 单击 **Update（更新）**。

### 删除允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### 对 {% data variables.product.prodname_actions %} 使用 IP 允许列表

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

{% endif %}

{% endif %}

## 管理企业的 SSH 认证机构

您可以使用 SSH 认证机构 (CA) 来允许企业拥有的任何组织的成员使用您提供的 SSH 证书访问该组织的存储库。 {% data reusables.organizations.can-require-ssh-cert %} 更多信息请参阅“[关于 SSH 认证中心](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”。

{% data reusables.organizations.add-extension-to-cert %}

### 添加 SSH 认证中心

如果您的企业需要 SSH 证书，企业成员应使用特殊的 URL 通过 SSH 进行 Git 操作。 更多信息请参阅“[关于 SSH 认证中心](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### 删除 SSH 认证中心

对 CA 的删除无法撤销。 如果以后要使用同一 CA，您需要重新上传该 CA。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

{% ifversion ghec or ghae %}
## 延伸阅读

- "[关于企业的身份和访问权限管理](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)"{% ifversion ghec %}
- "[访问企业的合规性报告](/admin/overview/accessing-compliance-reports-for-your-enterprise)"{% endif %}
{% endif %}
