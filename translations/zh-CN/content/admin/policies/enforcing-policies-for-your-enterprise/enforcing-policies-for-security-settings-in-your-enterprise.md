---
title: Enforcing policies for security settings in your enterprise
intro: 'You can enforce policies to manage security settings in your enterprise''s organizations, or allow policies to be set in each organization.'
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
shortTitle: Policies for security settings
---

## About policies for security settings in your enterprise

You can enforce policies to control the security settings for organizations owned by your enterprise on {% data variables.product.product_name %}. By default, organization owners can manage security settings. For more information, see "[Keeping your organization secure](/organizations/keeping-your-organization-secure)."

{% ifversion ghec or ghes %}

## Requiring two-factor authentication for organizations in your enterprise

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise use two-factor authentication to secure their personal accounts.

Before you can require 2FA for all organizations owned by your enterprise, you must enable two-factor authentication for your own account. 更多信息请参阅“[使用双重身份验证 (2FA) 保护您的帐户](/articles/securing-your-account-with-two-factor-authentication-2fa/)”。

{% warning %}

**警告：**

- When you require two-factor authentication for your enterprise, members, outside collaborators, and billing managers (including bot accounts) in all organizations owned by your enterprise who do not use 2FA will be removed from the organization and lose access to its repositories. 他们还会失去对组织私有仓库的复刻的访问权限。 如果他们在从您的组织中删除后的三个月内为其个人帐户启用双重身份验证，您可以恢复其访问权限和设置。 更多信息请参阅“[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”。
- Any organization owner, member, billing manager, or outside collaborator in any of the organizations owned by your enterprise who disables 2FA for their personal account after you've enabled required two-factor authentication will automatically be removed from the organization.
- If you're the sole owner of a enterprise that requires two-factor authentication, you won't be able to disable 2FA for your personal account without disabling required two-factor authentication for the enterprise.

{% endwarning %}

在您要求使用双重身份验证之前，我们建议通知组织成员、外部协作者和帐单管理员，并要求他们为帐户设置双重身份验证。 组织所有者可以查看成员和外部协作者是否已在每个组织的 People（人员）页面上使用 2FA。 更多信息请参阅“[查看组织中的用户是否已启用 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. 在“Two-factor authentication（双重身份验证）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Two-factor authentication（双重身份验证）”下，选择 **Require two-factor authentication for all organizations in your business（对您企业中的所有组织要求双重身份验证）**，然后单击 **Save（保存）**。 ![要求双重身份验证的复选框](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. If prompted, read the information about members and outside collaborators who will be removed from the organizations owned by your enterprise. To confirm the change, type your enterprise's name, then click **Remove members & require two-factor authentication**. ![确认双重实施框](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Optionally, if any members or outside collaborators are removed from the organizations owned by your enterprise, we recommend sending them an invitation to reinstate their former privileges and access to your organization. 每个人都必须启用双重身份验证，然后才能接受您的邀请。

{% endif %}

{% ifversion ghec or ghae %}

## Managing allowed IP addresses for organizations in your enterprise

{% ifversion ghae %}

You can restrict network traffic to your enterprise on {% data variables.product.product_name %}. 更多信息请参阅“[限制到企业的网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)”。

{% elsif ghec %}

Enterprise owners can restrict access to assets owned by organizations in an enterprise by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

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

## Managing SSH certificate authorities for your enterprise

You can use a SSH certificate authorities (CA) to allow members of any organization owned by your enterprise to access that organization's repositories using SSH certificates you provide. {% data reusables.organizations.can-require-ssh-cert %} 更多信息请参阅“[关于 SSH 认证中心](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”。

{% data reusables.organizations.add-extension-to-cert %}

### 添加 SSH 认证中心

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. 更多信息请参阅“[关于 SSH 认证中心](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)”。

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

- "[About identity and access management for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)"{% ifversion ghec %}
- "[Accessing compliance reports for your enterprise](/admin/overview/accessing-compliance-reports-for-your-enterprise)"{% endif %}
{% endif %}
