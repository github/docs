---
title: 将新许可证上传到 GitHub Enterprise Server
intro: '您可以将 {% data variables.product.prodname_enterprise %} 的许可文件上传到 {% data variables.product.product_location_enterprise %} 以验证您的应用程序。'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
ms.openlocfilehash: 184206b210289e062e83e237acaa853bb80470c1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084436'
---
## 关于 {% data variables.product.prodname_enterprise %} 的许可证文件

从 {% data variables.contact.contact_enterprise_sales %} 购买或升级 {% data variables.product.prodname_enterprise %} 许可证后，必须将新许可证文件上传到 {% data variables.product.product_location_enterprise %} 才能解锁新用户许可证。 有关 {% data variables.product.product_name %} 许可证的详细信息，请参阅“[关于 {% data variables.product.prodname_enterprise %} 的许可证](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)”和“[下载 {% data variables.product.prodname_enterprise %} 的许可证](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)”。

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## 将许可证上传到 {% data variables.product.product_location_enterprise %}

{% warning %}

警告：更新许可证会导致 {% data variables.product.product_location %} 出现短暂停机。

{% endwarning %}

1. 以站点管理员的身份登录到 {% data variables.product.product_location_enterprise %}。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 在“快速链接”下，单击“更新许可证”。
  ![“更新许可证”链接](/assets/images/enterprise/business-accounts/update-license-link.png)
1. 若要选择许可证，请单击“许可证文件”，或将许可证文件拖动到“许可证文件” 。
  ![上传许可证文件](/assets/images/enterprise/management-console/upload-license.png)
1. 单击“上载” 。
  ![开始上传](/assets/images/enterprise/management-console/begin-upload.png)

