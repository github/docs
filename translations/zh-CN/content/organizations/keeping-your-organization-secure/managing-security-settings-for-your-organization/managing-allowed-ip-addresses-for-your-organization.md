---
title: 管理组织允许的 IP 地址
intro: 可以通过配置允许连接的 IP 地址列表来限制对组织专用资产的访问。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
ms.openlocfilehash: f0484aae26b5acb8bac07c7b002af2d623d7dfef
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184026'
---
## 关于允许的 IP 地址

可通过为特定 IP 地址配置允许列表来限制对专用组织资产的访问。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %} {% note %}

注意：只有使用 {% data variables.product.prodname_ghe_cloud %} 的组织才能使用 IP 允许列表。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

如果您设置了允许列表，您还可以选择将为组织中安装的 {% data variables.product.prodname_github_apps %} 配置的任何 IP 地址自动添加到允许列表中。 {% data variables.product.prodname_github_app %} 的创建者可以为其应用程序配置允许列表，指定应用程序运行的 IP 地址。 通过将允许列表继承到您的列表中，您可以避免申请中的连接请求被拒绝。 有关详细信息，请参阅“[允许 {% data variables.product.prodname_github_apps %} 进行访问](#allowing-access-by-github-apps)”。

还可以在企业帐户级别配置允许的 IP 地址，企业帐户允许列表中的条目由企业拥有的所有组织继承。 {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %}有关详细信息，请参阅“[为企业中的安全设置实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)”。

## 添加允许的 IP 地址

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## 启用允许的 IP 地址

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. 在“IP 允许列表”下，选择“启用 IP 允许列表”。
  ![允许 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. 单击“ **保存**”。

## 允许 {% data variables.product.prodname_github_apps %} 访问

如果您设置允许列表，您还可以选择将为组织中安装的 {% data variables.product.prodname_github_apps %} 配置的任何 IP 地址自动添加到允许列表中。 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

若要详细了解如何为已创建的 {% data variables.product.prodname_github_app %} 创建允许列表，请参阅“[管理 GitHub 应用的允许 IP 地址](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)”。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. 在“IP 允许列表”下，选择“为已安装的 GitHub 应用启用 IP 允许列表配置”。
  ![允许 GitHub 应用 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. 单击“ **保存**”。

## 编辑允许的 IP 地址

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. 单击“更新”。
{% data reusables.identity-and-permissions.check-ip-address %}

## 检查是否允许使用 IP 地址

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## 删除允许的 IP 地址

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## 对 {% data variables.product.prodname_actions %} 使用 IP 允许列表

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
