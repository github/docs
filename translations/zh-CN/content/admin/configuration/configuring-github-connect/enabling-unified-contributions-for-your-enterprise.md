---
title: 为企业启用统一贡献
shortTitle: Unified contributions
intro: '可以允许用户将经过匿名处理的工作贡献计数包含在 {% data variables.product.prodname_dotcom_the_website %} 上贡献图的 {% data variables.product.product_location %} 中。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-contributions-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
ms.openlocfilehash: af07f30a8f164f6bec3d3c0f44c77181f1e8db7b
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875978'
---
{% data reusables.github-connect.beta %}

## 关于统一贡献

作为企业所有者，你可以允许最终用户将进行过匿名处理的工作贡献计数从 {% data variables.product.product_location %} 发送到其 {% data variables.product.prodname_dotcom_the_website %} 贡献图。

启用 {% data variables.product.prodname_unified_contributions %} 后，每个用户还必须将自己在 {% data variables.product.product_name %} 上的用户帐户与 {% data variables.product.prodname_dotcom_the_website %} 上的个人帐户连接起来，个人用户才能将贡献计数从 {% data variables.product.product_location %} 发送到 {% data variables.product.prodname_dotcom_the_website %}。 有关详细信息，请参阅“[将企业贡献发送到自己的 {% data variables.product.prodname_dotcom_the_website %} 配置文件](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)”。

{% data reusables.github-connect.sync-frequency %}

如果企业所有者禁用了该功能或个人用户选择退出连接，则系统将删除 {% data variables.product.prodname_dotcom_the_website %} 上的 {% data variables.product.product_name %} 贡献计数。 如果用户在禁用该功能后重新连接自己的配置文件，则系统将恢复过去 90 天的贡献计数。

{% data variables.product.product_name %} 仅为已连接的用户发送贡献计数和来源 ({% data variables.product.product_name %})。 它不会发送有关贡献或做出该贡献的方式的任何信息。

## 启用统一贡献

在 {% data variables.product.product_location %} 上启用 {% data variables.product.prodname_unified_contributions %} 之前，必须先启用 {% data variables.product.prodname_github_connect %}。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)”。

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. 登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 在“用户可将贡献计数分享到 {% data variables.product.prodname_dotcom_the_website %}”下，单击“请求访问”。
  ![请求访问统一贡献选项](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. [登录](https://enterprise.github.com/login)到站点 {% data variables.product.prodname_ghe_server %} 以接收其他说明。

当你请求访问时，我们可能会将你重定向到 {% data variables.product.prodname_ghe_server %} 站点，以检查当前的服务条款。
{% endif %}
