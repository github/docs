---
title: 管理组织允许的 IP 地址
intro: 您可以通过配置允许连接的 IP 地址列表来限制对组织资产的访问。
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
versions:
  free-pro-team: '*'
---

组织所有者可以管理组织允许的 IP 地址。

### 关于允许的 IP 地址

您可以通过为特定 IP 地址配置允许列表来限制对组织资产的访问。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

您还可以为企业帐户中的组织配置允许的 IP 地址。 更多信息请参阅“[在企业帐户中实施安全设置](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)”。

### 添加允许的 IP 地址

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### 启用允许的 IP 地址

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
3. 在“IP allow list（IP 允许列表）”下，选择 **Enable IP allow list（启用 IP 允许列表）**。 ![允许 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
4. 单击 **Save（保存）**。

### 编辑允许的 IP 地址

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. 单击 **Update（更新）**。

### 删除允许的 IP 地址

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### 对 {% data variables.product.prodname_actions %} 使用 IP 允许列表

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}
