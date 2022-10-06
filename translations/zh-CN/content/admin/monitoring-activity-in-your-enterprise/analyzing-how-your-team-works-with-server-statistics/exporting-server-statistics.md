---
title: 导出服务器统计信息
shortTitle: Export Server Statistics
intro: '可以通过下载 CSV 或 JSON 文件形式的 {% data variables.product.prodname_server_statistics %} 指标来分析 {% data variables.product.prodname_ghe_server %} 使用情况。'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
ms.openlocfilehash: 4e8fa1d040303ec569d11a8a41708ede10b3e76e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718163'
---
最多可以在 CSV 或 JSON 文件中下载过去 365 天的 {% data variables.product.prodname_server_statistics %} 数据。 此数据包括存储库、问题和拉取请求的聚合指标，可帮助你预测组织的需求、了解团队的工作方式，以及显示从 {% data variables.product.prodname_ghe_server %} 获取的值。 

必须先启用 {% data variables.product.prodname_server_statistics %} 才能下载此数据。 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_server_statistics %}](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)”。 

若要预览可供下载的指标，请参阅“[关于 {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)”。

若要下载这些指标，你必须是 {% data variables.product.prodname_ghe_cloud %} 的企业所有者或组织所有者。
  - 如果 {% data variables.product.product_location %} 连接到了 {% data variables.product.prodname_ghe_cloud %} 上的企业帐户，请参阅“[从企业帐户下载指标](#downloading-metrics-from-your-enterprise-account)”。
  - 如果 {% data variables.product.product_location %} 连接到了 {% data variables.product.prodname_ghe_cloud %} 上的组织，请参阅“[从组织下载指标](#downloading-metrics-from-your-organization)”。

若要了解有关 {% data variables.product.prodname_github_connect %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)”。

## 从企业帐户下载指标

1. 在 {% data variables.product.prodname_ghe_cloud %} 的右上角，单击你的配置文件照片，然后单击“你的企业”。
  ![包含“你的企业”选项的下拉菜单](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. 在所需的企业帐户旁边，单击“设置”。
  ![企业管理员帐户旁边的“设置”按钮](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. 在左侧，单击“GitHub Connect”。
  ![企业管理员帐户下的“GitHub Connect”选项](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## 从组织下载指标

1. 在 {% data variables.product.prodname_ghe_cloud %} 的右上角，单击你的配置文件照片，然后单击“你的组织”。
  ![包含“你的组织”选项的下拉菜单](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. 在组织列表中，在连接到 {% data variables.product.product_location %} 的组织旁边，单击“设置”。
  ![{% data variables.product.prodname_ghe_cloud %} 组织旁边的“设置”按钮](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. 在左侧，单击“GitHub Connect”。
  ![组织帐户设置左侧栏中的“GitHub Connect”选项](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
