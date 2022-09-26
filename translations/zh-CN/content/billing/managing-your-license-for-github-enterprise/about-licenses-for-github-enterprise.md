---
title: 关于 GitHub Enterprise 的许可证
intro: '{% ifversion ghec %}如果除了使用 {% data variables.product.prodname_ghe_cloud %} 之外还部署 {% data variables.product.prodname_ghe_server %}，{% else %}你{% endif %}可以在 {% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} 部署之间同步许可证使用情况，并使用许可证文件解锁每个 {% data variables.product.prodname_ghe_server %} 实例。'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
ms.openlocfilehash: eb904ed497df785cfefa25cee7a5cb1fe5acfaa0
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145910509'
---
## 关于 {% data variables.product.prodname_enterprise %} 的许可

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

为确保同一用户不会为多个企业部署使用多个许可证，可以在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 部署之间同步许可证使用情况。

若要使用 {% data variables.product.prodname_ghe_server %} 实例，必须上传 {% data variables.product.company_short %} 在你购买、续订或向 {% data variables.product.prodname_enterprise %} 添加用户许可证时提供的许可证文件。

## 关于同步 {% data variables.product.prodname_enterprise %} 的许可证使用情况

{% data reusables.enterprise-licensing.about-license-sync %} 有关详细信息，请参阅“[同步 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间的许可证使用情况](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。

## 关于 {% data variables.product.prodname_enterprise %} 的许可证文件

购买或续订 {% data variables.product.prodname_enterprise %} 时，{% data variables.product.company_short %} 会为 {% ifversion ghec %}{% data variables.product.prodname_ghe_server %}的部署{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}提供许可证文件。 许可证文件有到期日期，控制可以使用 {% data variables.product.product_location_enterprise %} 的人数。 下载并安装 {% data variables.product.prodname_ghe_server %} 后，必须上传许可证文件以解锁应用程序以供使用。

有关下载许可证文件的详细信息，请参阅“[下载 {% data variables.product.prodname_enterprise %} 的许可证文件](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)”。 

有关上传许可证文件的详细信息，请参阅 {% ifversion ghec %} {% data variables.product.prodname_ghe_server %} 文档中的[将新的许可证上传到 {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)。{% elsif ghes %} [将新的许可证上传到 {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)。{% endif %}

如果您的许可证过期，将无法通过 Web 浏览器或 Git 访问 {% data variables.product.prodname_ghe_server %}。 需要时，您可以使用命令行实用程序备份所有数据。 有关详细信息，请参阅{% ifversion ghec %}"[Configuring backups on your appliance]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}“[在设备上配置备份](/admin/guides/installation/configuring-backups-on-your-appliance)”。 {% endif %}

如对续订许可有任何疑问，请联系 {% data variables.contact.contact_enterprise_sales %}。

## 延伸阅读

- [关于企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)
- [{% data variables.product.prodname_enterprise %} 发布](https://enterprise.github.com/releases/)网站
- [设置 {% data variables.product.prodname_ghe_server %} 实例]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)
