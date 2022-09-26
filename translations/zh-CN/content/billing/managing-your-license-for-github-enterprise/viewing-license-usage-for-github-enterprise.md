---
title: 查看 GitHub Enterprise 的许可证使用情况
intro: '您可以在 {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %} 上查看企业的许可证使用情况。'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
ms.openlocfilehash: 7f3c3c6e65928601d01ac17139928af6ceedf354
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572614'
---
## 关于 {% data variables.product.prodname_enterprise %} 的许可证使用情况

可在 {% data variables.product.product_location %} 上查看 {% data variables.product.product_name %} 的许可证使用情况。

如果同时使用 {% data variables.product.prodname_ghe_cloud %} 和 {% data variables.product.prodname_ghe_server %} 并在这两个产品之间同步许可证使用情况，则可在 {% data variables.product.prodname_dotcom_the_website %} 上查看两者的许可证使用情况。 有关许可证同步的详细信息，请参阅“[同步 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间的许可证使用情况](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。

{% ifversion ghes %}

要详细了解如何在 {% data variables.product.prodname_dotcom_the_website %} 上查看许可证使用情况，并了解如何确定许可证上次同步时间，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[查看 {% data variables.product.prodname_enterprise %} 的许可证使用情况](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)”。

{% endif %}

还可使用 REST API 返回已使用的许可证数据和许可证同步作业的状态。 有关详细信息，请参阅 REST API 文档中的“[GitHub Enterprise 管理](/enterprise-cloud@latest/rest/enterprise-admin/license)”。

若要详细了解与企业帐户关联的许可证数据以及如何计算已使用的用户席位数，请参阅“[GitHub Enterprise 许可证使用情况疑难解答](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)”。


## 查看 {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %} 上的许可证使用情况

您可以查看企业的许可证使用情况并下载包含许可证详细信息的文件。 如果在此报告中未看到预期的许可证计数，则订阅者拥有的 {% data variables.product.prodname_vs %} 订阅电子邮件地址和 {% data variables.product.prodname_dotcom_the_website %} 电子邮件地址可能不完全相同。 有关详细信息，请参阅“[GitHub Enterprise 许可证使用情况疑难解答](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)”。

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 在左侧边栏中，单击“企业许可”。
  ![企业帐户设置侧边栏中的“企业许可”选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. 检查您当前的 {% data variables.product.prodname_enterprise %} 许可，以及已使用和可用的用户许可。
    - 若要以 CSV 文件的形式下载已使用的许可证报表，请在右上角单击 {% octicon "download" aria-label="The download icon" %}。 若要详细了解如何查看此报表中的数据，请参阅“[GitHub Enterprise 许可证使用情况疑难解答](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)”。
    - 如果您的许可证包含 {% data variables.product.prodname_GH_advanced_security %}，您可以查看您的总席位使用情况。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_GH_advanced_security %} 使用情况](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)”。

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 查看你当前的 {% data variables.product.prodname_enterprise %} 许可证，以及已使用和可用的用户许可证。{% ifversion ghes %}
    - 若要以 JSON 文件的形式下载已使用的许可证报表，请在右上角的“快速链接”下，选择“导出许可证使用情况”。 若要详细了解如何查看此报表中的数据，请参阅“[GitHub Enterprise 许可证使用情况疑难解答](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)”。
    - 如果您的许可证包含 {% data variables.product.prodname_GH_advanced_security %}，您可以查看您的总席位使用情况以及每个组织的提交者细分。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security)”。{% endif %}

{% endif %} {% ifversion ghec %}
## 查看许可证上次同步日期

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 在左侧边栏中，单击“企业许可”。
  ![企业帐户设置侧边栏中的“企业许可”选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. 要确定许可证上次同步时间，请在“企业服务器实例”下，查找“使用情况已上传”或“使用情况已同步”事件旁边的时间戳。
   - “服务器使用情况已上传”表示在上传 {% data variables.product.prodname_ghe_server %} 许可证文件时，手动更新了环境之间的许可证使用情况。
   - “{% data variables.product.prodname_github_connect %} 服务器使用情况已同步”表示环境之间的许可证使用情况已自动更新。
   - “{% data variables.product.prodname_github_connect %} 服务器使用情况从未同步”表示已配置 {% data variables.product.prodname_github_connect %}，但从未成功更新环境之间的许可证使用情况。

{% endif %}
