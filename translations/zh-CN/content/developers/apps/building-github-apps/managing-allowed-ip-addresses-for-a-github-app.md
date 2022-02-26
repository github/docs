---
title: 管理 GitHub 应用程序允许的 IP 地址
intro: '您可以将 IP 允许列表添加到您的 {% data variables.product.prodname_github_app %}，以防止您的应用被组织自己的允许列表阻止。'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: 管理允许的 IP 地址
---

## 关于 {% data variables.product.prodname_github_apps %} 的 IP 地址允许列表

企业和组织所有者可以通过配置 IP 地址允许列表来限制对资产的访问。 此列表指定允许连接的 IP 地址。 更多信息请参阅“[在企业中实施安全设置策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)”。

当组织拥有允许列表时，通过 {% data variables.product.prodname_github_app %} 连接的第三方应用程序将被拒绝访问，除非以下两个条件成立：

* {% data variables.product.prodname_github_app %} 的创建者为应用程序配置了允许列表，其中指定了其应用程序运行的 IP 地址。 有关如何操作的详细信息，请参阅下文。
* 组织所有者选择允许将 {% data variables.product.prodname_github_app %} 允许列表中的地址添加到自己的允许列表中。 更多信息请参阅“[管理组织允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#allowing-access-by-github-apps)”。

{% data reusables.apps.ip-allow-list-only-apps %}

## 将 IP 地址允许列表添加到 {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
1. 向下滚动到“IP 允许列表”部分。 ![GitHub 应用程序的基本信息部分](/assets/images/github-apps/github-apps-allow-list-empty.png)
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
  该说明供您参考，并未在安装 {% data variables.product.prodname_github_app %} 的组织允许列表中使用。 相反，组织允许列表将包括“按名称 GitHub 应用程序管理”作为说明。
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
