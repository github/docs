---
title: 下载 GitHub Enterprise 许可证
intro: '您可以下载 {% data variables.product.prodname_ghe_server %} 的许可证文件副本。'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
ms.openlocfilehash: eed588e2580558280e2e11639f0904b5f9fcf118
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084441'
---
## 关于 {% data variables.product.prodname_enterprise %} 的许可证文件

从 {% data variables.contact.contact_enterprise_sales %}购买或升级 {% data variables.product.prodname_enterprise %} 许可证后，必须下载新的许可证文件。 有关 {% data variables.product.prodname_enterprise %} 许可证的详细信息，请参阅“[关于 {% data variables.product.prodname_enterprise %} 的许可证](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)”。

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## 从 {% data variables.product.prodname_dotcom_the_website %} 下载许可证

您必须在 {% data variables.product.prodname_dotcom_the_website %} 上拥有企业帐户才能从 {% data variables.product.prodname_dotcom_the_website %} 下载许可证。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于企业帐户](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %}”。{% elsif ghec %}。”{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 在左侧边栏中，单击“企业许可”。
  ![企业帐户设置侧边栏中的“企业许可”选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. 在“Enterprise Server 实例”下，单击 {% octicon "download" aria-label="The download icon" %} 下载许可证文件。
  ![下载 GitHub Enterprise Server 许可证](/assets/images/help/business-accounts/download-ghes-license.png)

下载许可证文件后，可以将文件上传到 {% data variables.product.product_location_enterprise %} 以验证应用程序。 有关详细信息，请参阅 {% ifversion ghec %}{% data variables.product.prodname_ghe_server %} 文档中的“[将新许可证上传到 {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)”。{% elsif ghes %}“[将新许可证上传到 {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)”。{% endif %}

## 如果您在 {% data variables.product.prodname_dotcom_the_website %} 上没有企业帐户，请下载许可证

如果你没有 {% data variables.product.prodname_dotcom_the_website %} 的企业帐户，或者不确定，可从 [{% data variables.product.prodname_enterprise %} 网站](https://enterprise.github.com/download)下载你的 {% data variables.product.prodname_ghe_server %} 许可证。

如对下载许可证有任何疑问，请联系 {% data variables.contact.contact_enterprise_sales %}。
