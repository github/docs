---
title: 管理 GitHub Connect
shortTitle: Manage GitHub Connect
intro: '可启用 {% data variables.product.prodname_github_connect %} 来访问 {% data variables.location.product_location %} 的其他功能和工作流。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
ms.openlocfilehash: 30a170543b63c390aa8975b1ca57c265bc7fa8fa
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160646'
---
{% data reusables.github-connect.beta %}

## 关于 {% data variables.product.prodname_github_connect %}

可以通过启用 {% data variables.product.prodname_github_connect %} 来访问 {% data variables.location.product_location %} 上的其他功能和工作流。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)”。

启用 {% data variables.product.prodname_github_connect %} 时，需要在 {% data variables.location.product_location %} 与 {% data variables.product.prodname_ghe_cloud %} 上的组织或企业帐户之间配置连接。 {% data reusables.github-connect.connection-port-protocol %}

启用 {% data variables.product.prodname_github_connect %} 可以在 {% data variables.product.prodname_ghe_cloud %} 上创建组织或企业帐户所拥有的 {% data variables.product.prodname_github_app %}。 {% data variables.product.product_name %} 使用 {% data variables.product.prodname_github_app %} 的凭据向 {% data variables.product.prodname_ghe_cloud %} 发出请求。

{% ifversion ghes %} {% data variables.product.prodname_ghe_server %} 会存储来自 {% data variables.product.prodname_github_app %} 的凭据。 这些凭据将复制到任何高可用性或集群环境中的所有节点，并存储在任何备份中，包括由 {% data variables.product.prodname_enterprise_backup_utilities %} 创建的快照。
- 有效期为一小时的身份验证令牌
- 用于生成新的身份验证令牌的私钥 {% endif %}

## 先决条件

若要使用 {% data variables.product.prodname_github_connect %}，必须在使用 {% data variables.product.prodname_ghe_cloud %} 的 {% data variables.product.prodname_dotcom_the_website %} 上拥有组织或企业帐户。 你可能已将 {% data variables.product.prodname_ghe_cloud %} 包含在计划中。 {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %}如果 {% data variables.product.prodname_dotcom_the_website %} 上的组织或企业帐户使用 IP 允许列表，则必须将 {% data variables.location.product_location %} 的 IP 地址或网络添加到 {% data variables.product.prodname_dotcom_the_website %} 上的 IP 允许列表。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[管理组织的允许 IP 地址](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)”或“[为企业中的安全设置实施策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)”。

若要配置连接，代理配置必须允许连接到 `github.com`、`api.github.com` 和 `uploads.github.com`。 有关详细信息，请参阅“[配置出站代理服务器](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server)”。
{% endif %}

## 启用 {% data variables.product.prodname_github_connect %}

如果企业所有者同时也是使用 {% data variables.product.prodname_ghe_cloud %} 的组织或企业帐户的所有者，可以启用 {% data variables.product.prodname_github_connect %}。

如果要将 {% data variables.location.product_location %} 连接到 {% data variables.product.prodname_ghe_cloud %} 上不属于企业帐户的组织，则必须以组织所有者身份登录到 {% data variables.product.prodname_dotcom_the_website %}。

如果要将 {% data variables.location.product_location %} 连接到 {% data variables.product.prodname_ghe_cloud %} 上企业帐户拥有的组织或者连接到企业帐户本身，则必须以企业所有者身份登录到 {% data variables.product.prodname_dotcom_the_website %}。

{% ifversion ghes %}
1. 登录到 {% data variables.location.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. 登录到 {% data variables.location.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 在“{% data variables.product.prodname_github_connect %} 尚未启用”下，单击“启用 {% data variables.product.prodname_github_connect %}”。 单击“启用 {% data variables.product.prodname_github_connect %}”，表示你同意“<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} 其他产品和功能的条款</a>”。
{% ifversion ghes %} ![“启用 GitHub 连接”按钮](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %} ![“启用 GitHub 连接”按钮](/assets/images/enterprise/github-ae/enable-github-connect-button.png) {% endif %}
1. 在要连接的企业帐户或组织旁，单击“连接”。
  ![企业帐户或企业旁边的“连接”按钮](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## 禁用 {% data variables.product.prodname_github_connect %}

企业所有者可以禁用 {% data variables.product.prodname_github_connect %}。

与 {% data variables.product.prodname_ghe_cloud %} 断开连接后，{% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} 会从企业帐户或组织中删除，{% data variables.location.product_location %} 上存储的凭据也会删除。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. 在要断开连接的企业帐户或组织旁，单击“禁用 {% data variables.product.prodname_github_connect %}”。
{% ifversion ghes %} ![企业帐户或组织名称旁的“禁用 GitHub Connect”按钮](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. 阅读有关断开连接的信息，并单击“禁用 {% data variables.product.prodname_github_connect %}”。
  ![包含关于断开连接的警告信息和确认按钮的模式窗口](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %} ![企业帐户或组织名称旁的“禁用 GitHub Connect”按钮](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. 阅读有关断开连接的信息，并单击“禁用 {% data variables.product.prodname_github_connect %}”。
  ![包含关于断开连接的警告信息和确认按钮的模式窗口](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png) {% endif %} 
