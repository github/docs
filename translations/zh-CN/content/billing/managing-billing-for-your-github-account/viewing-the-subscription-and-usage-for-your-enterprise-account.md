---
title: 查看企业帐户的订阅和使用情况
intro: '您可以查看当前{% ifversion ghec %}订阅、 {% endif %}许可证使用情况{% ifversion ghec %}、发票、付款历史记录以及 {% ifversion ghec %}企业帐户{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}{% endif %} 的其他帐单信息。'
permissions: 'Enterprise owners {% ifversion ghec %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
ms.openlocfilehash: 503f870542180cfe9ae088a161370b9370d36f1c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145189636'
---
## 关于企业帐户的计费

可以在 {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %} 上查看{% ifversion ghec %}{% elsif ghes %}{% endif %}企业帐户{% ifversion ghec %}订阅和已付费{% elsif ghes %}许可证{% endif %}使用情况的概述。{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %}有关详细信息，请参阅“[创建企业帐户](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)。”{% endif %}

对于同时使用 {% data variables.product.prodname_ghe_cloud %} 和 {% data variables.product.prodname_ghe_server %}{% endif %}的开票 {% data variables.product.prodname_enterprise %} 客户{% ifversion ghes %} ，每张发票都包含有关所有产品的计费服务的详细信息。 例如，除了用于 {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}之外，您可能还用于 {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}、 {% elsif ghes %}。 您可能还会在 {% data variables.product.prodname_dotcom_the_website %} 上使用，例如{% endif %}企业帐户以外的组织中的付费许可证、{% data variables.large_files.product_name_long %} 的数据包或 {% data variables.product.prodname_marketplace %} 中的应用订阅。 有关发票的详细信息，请参阅 {% data variables.product.prodname_dotcom_the_website %} 文档中的“[管理企业发票]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise){% ifversion ghec %}。”{% elsif ghes %}。{% endif %}

{% ifversion ghec %}

除了企业所有者之外，帐单管理员还可以查看企业帐户的订阅和使用情况。 有关详细信息，请参阅“[企业中的角色](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager)”和“[邀请人员管理企业](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)”。

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。

{% endif %}

{% ifversion ghes %}

如果要在 {% data variables.product.prodname_dotcom_the_website %} 上查看 {% data variables.product.prodname_enterprise %} 和任何相关服务的订阅和使用情况概述，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[查看企业帐户的订阅和使用情况](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”。

{% endif %}

## 查看企业帐户的订阅和使用情况

您可以查看企业的订阅和使用情况，并下载包含许可证详细信息的文件。

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 在“User licenses（用户许可证）”下，查看许可证总数、已使用许可证数量和订阅到期日期。
  {% ifversion ghec %}![企业计费设置中的许可证和订阅信息](/assets/images/help/business-accounts/billing-license-info.png){% else %}![企业计费设置中的许可证和订阅信息](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. （可选）若要查看许可证使用情况详细信息或下载包含许可证详情的 {% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %} 文件{% ifversion ghec %}，请在“用户许可证”的右侧{% endif %}，单击“查看{% ifversion ghec %}详细信息{% elsif ghes %}用户{% endif %}”或{% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}“导出许可证使用情况”{% endif %}。{% ifversion ghec %} ![“用户许可证”右侧的“查看详细信息”按钮和带下载图标的按钮](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %} 
1. （可选）若要查看其他功能使用情况的详细信息，请在左侧边栏中单击“计费”。
  ![企业帐户设置边栏中的“计费”选项卡](/assets/images/help/business-accounts/settings-billing-tab.png){% endif %}
