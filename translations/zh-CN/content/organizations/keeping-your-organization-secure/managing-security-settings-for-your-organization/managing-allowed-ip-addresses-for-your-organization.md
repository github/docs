---
title: 管理组织允许的 IP 地址
intro: 您可以通过配置允许连接的 IP 地址列表来限制对组织资产的访问。
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 管理允许的 IP 地址
---

组织所有者可以管理组织允许的 IP 地址。

## 关于允许的 IP 地址

您可以通过为特定 IP 地址配置允许列表来限制对组织资产的访问。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

如果您设置了允许列表，您还可以选择将为组织中安装的 {% data variables.product.prodname_github_apps %} 配置的任何 IP 地址自动添加到允许列表中。 {% data variables.product.prodname_github_app %} 的创建者可以为其应用程序配置允许列表，指定应用程序运行的 IP 地址。 通过将允许列表继承到您的列表中，您可以避免申请中的连接请求被拒绝。 更多信息请参阅“[允许 {% data variables.product.prodname_github_apps %} 访问](#allowing-access-by-github-apps)”。

您还可以为企业帐户中的组织配置允许的 IP 地址。 更多信息请参阅“[在企业中实施安全设置策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)”。

## 添加允许的 IP 地址

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

## 启用允许的 IP 地址

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. 在“IP allow list（IP 允许列表）”下，选择 **Enable IP allow list（启用 IP 允许列表）**。 ![允许 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. 单击 **Save（保存）**。

## 允许 {% data variables.product.prodname_github_apps %} 访问

如果您设置允许列表，您还可以选择将为组织中安装的 {% data variables.product.prodname_github_apps %} 配置的任何 IP 地址自动添加到允许列表中。

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

有关如何为您创建的 {% data variables.product.prodname_github_app %} 创建允许列表的更多信息，请参阅“[管理 GitHub 应用程序允许的 IP 地址](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)”。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. 在“IP allow list（IP允许列表）”下，选择 **Enable IP allow list configuration for installed GitHub Apps（启用已安装 GitHub 应用程序的 IP 允许列表配置）**。 ![允许 GitHub 应用程序 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. 单击 **Save（保存）**。

## 编辑允许的 IP 地址

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. 单击 **Update（更新）**。

## 删除允许的 IP 地址

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## 对 {% data variables.product.prodname_actions %} 使用 IP 允许列表

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
