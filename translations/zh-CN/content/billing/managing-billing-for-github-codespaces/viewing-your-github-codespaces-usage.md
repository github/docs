---
title: 查看 GitHub Codespaces 使用情况
shortTitle: Viewing your usage
intro: '可以查看 {% data variables.product.prodname_github_codespaces %} 使用的计算小时数和存储空间。'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: 67e29ee71b1881ee2ae6e9ca872fd7969f86afca
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158739'
---
## 查看个人帐户的 {% data variables.product.prodname_github_codespaces %} 使用情况

可以查看当前月度计费周期中到目前为止，个人帐户中的已使用量。 如果已设置付款方式、设置支出限制并使用了所有包含的使用量，则还可以检查当前月份的帐单。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. 在“{% data variables.product.prodname_codespaces %}”下，可以查看当前计费月份到目前为止使用的 {% data variables.product.prodname_github_codespaces %} 计算使用量和 GB/月存储的核心小时数。

   ![个人使用量的初始视图的屏幕截图](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

   有关“核心小时数”和“GB/月”的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/enterprise-cloud@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。

1. （可选）单击“使用小时数”和“存储”以查看更多详细信息 。

   ![个人使用量的展开视图的屏幕截图](/assets/images/help/codespaces/view-personal-usage-expanded.png)

   “包含”列显示本月到目前为止帐户中已使用的免费计算使用核心小时数或 GB/月存储。 “付费”列显示已使用的计费核心小时数或 GB/月存储。 这些数字每小时更新一次。

   在上面的屏幕截图中，已使用当月包含的存储的全部配额。 使用完所有包含的计算使用量或存储（以先达到者为准）时，必须设置付款方式和支出限制才能在当前计费月份继续使用 {% data variables.product.prodname_github_codespaces %}。 有关详细信息，请参阅“[添加或编辑付款方式](/enterprise-cloud@latest/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)”和“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-personal-account)”。

{% data reusables.codespaces.usage-report-download %}

## 查看组织帐户的 {% data variables.product.prodname_github_codespaces %} 使用情况

组织所有者和账单管理员可查看组织的 {% data variables.product.prodname_github_codespaces %} 使用情况。

{% data reusables.organizations.billing-settings %}
1. 在“{% data variables.product.prodname_codespaces %}”下，查看本月到目前为止使用的计算小时数和存储的详细信息。

   ![计算使用量和存储详细信息的屏幕截图](/assets/images/help/billing/codespaces-compute-storage.png)

   还可以查看和更新当前的支出限制。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)”。

   {% note %}

   **注释**： 
   * 此处显示的成本是当前每月计费周期内的累计成本。 此页上显示的 {% data variables.product.prodname_github_codespaces %} 的计量成本会在每月计费周期开始时重置为零。 不显示前几个月的未结成本。
   * 此页面上的数字每小时更新一次。

   {% endnote %}

{% data reusables.codespaces.usage-report-download %}

{% ifversion ghec %}
## 查看企业帐户的 {% data variables.product.prodname_codespaces %} 使用情况

企业所有者和帐单管理员可查看企业帐户的 {% data variables.product.prodname_github_codespaces %} 使用情况。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_codespaces %} 每月使用情况”下，查看企业帐户中每个组织的使用详细信息。
{% data reusables.codespaces.usage-report-download %} {% endif %}

## 延伸阅读

- “[列出组织中的 codespace](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)”
