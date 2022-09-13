---
title: 查看您的 GitHub 高级安全使用情况
intro: '您可以查看企业的 {% data variables.product.prodname_GH_advanced_security %} 使用情况。'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  ghec: '*'
  ghae: issue-5378
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
ms.openlocfilehash: 8647ba2eb00f580256bd3f49ac2218331e45eef3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180485'
---
## 关于 {% data variables.product.prodname_GH_advanced_security %} 的许可

{% data reusables.advanced-security.about-ghas-license-seats %}有关详细信息，请参阅"[关于 {% data variables.product.prodname_GH_advanced_security %} 计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)。”

{% ifversion ghas-committers-calculator %} 如果使用站点管理仪表板为更多组织和存储库启用 {% data variables.product.prodname_GH_advanced_security %}，可计算将要使用的额外席位数。 有关详细信息，请参阅“[站点管理仪表板](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-active-committers)”。
{% endif %}

## 查看企业帐户的 {% data variables.product.prodname_GH_advanced_security %} 许可使用情况

您可以检查您的许可证包含多少个席位，以及其中多少席位目前在使用。

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}“{% data variables.product.prodname_GH_advanced_security %}”部分显示当前使用情况的详细信息。
  ![{% data variables.product.prodname_GH_advanced_security %} 在企业许可设置](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png)中，如果席位不足，则分区将显示为红色，并显示“超出限制。” 您应该减少您对 {% data variables.product.prodname_GH_advanced_security %} 的使用，或者购买更多席位。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)。”
  ![企业许可设置中显示“超出限制”的 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. （可选）若要查看每个组织使用情况的明细，请在左侧栏中单击“计费”。
  ![企业帐户设置边栏中的“计费”选项卡](/assets/images/help/business-accounts/settings-billing-tab.png) 在“{% data variables.product.prodname_GH_advanced_security %}”部分中可以查看每个组织的提交者和唯一提交者数量。
  ![企业计费设置中的 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. （可选）单击您是所有者的组织的名称，以显示组织的安全和分析设置。
  ![在企业计费设置的 {% data variables.product.prodname_GH_advanced_security %} 部分中拥有的组织](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. 在“安全性和分析”设置页面上，滚动到“{% data variables.product.prodname_GH_advanced_security %} 存储库”部分，查看该组织的存储库使用情况的明细。
  ![“{% data variables.product.prodname_GH_advanced_security %} 存储库”部分](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 有关详细信息，请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。”

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}“{% data variables.product.prodname_GH_advanced_security %}”部分显示当前使用情况的详细信息。 您可以查看已使用的席位总数，以及一份表格，其中包含每个组织的提交者数量和唯一提交者。
  ![企业许可证的 {% data variables.product.prodname_GH_advanced_security %} 部分](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. （可选）单击您是所有者的组织的名称，以显示组织的安全和分析设置。
  ![在企业计费设置的 {% data variables.product.prodname_GH_advanced_security %} 部分中拥有的组织](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. 在“安全性和分析”设置页面上，滚动到“{% data variables.product.prodname_GH_advanced_security %} 存储库”部分，查看该组织的存储库使用情况的明细。
  ![“{% data variables.product.prodname_GH_advanced_security %} 存储库”部分](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 有关详细信息，请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。”

{% endif %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-5378 %}

## 下载 {% data variables.product.prodname_GH_advanced_security %} 许可证使用信息

您可以在企业和组织级别下载包含 {% data variables.product.prodname_GH_advanced_security %} 许可证使用情况信息的 CSV 文件。 CSV 文件包含有关正在使用的每个 {% data variables.product.prodname_advanced_security %} 席位的信息，包括：

- 使用席位的人的用户名
- 在其中进行提交的启用了 {% data variables.product.prodname_advanced_security %} 的存储库
- 使用席位的用户所属的组织
- 最近的提交日期

您可以使用此信息深入了解 {% data variables.product.prodname_advanced_security %} 许可证的使用方式，例如企业的哪些成员正在使用 {% data variables.product.prodname_advanced_security %} 席位，或者您的组织中如何使用 {% data variables.product.prodname_advanced_security %} 许可证。

您可以通过 {% data variables.product.product_name %} 用户界面或 REST API 下载 {% data variables.product.prodname_advanced_security %} 许可证使用情况 CSV。

### 通过 UI 下载 {% data variables.product.prodname_advanced_security %} 许可证使用信息

#### 在组织级

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
1. 在“{% data variables.product.prodname_GH_advanced_security %}”下方，单击“Committers（提交者）”旁边的 {% octicon "download" aria-label="The download icon" %}。
  ![组织级数据的下载按钮](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### 在企业级

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 在“{% data variables.product.prodname_GH_advanced_security %}”下方，单击“Committers（提交者）”旁边的 {% octicon "download" aria-label="The download icon" %}。
  ![企业级数据的下载按钮](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### 通过 REST API 下载 {% data variables.product.prodname_advanced_security %} 许可证使用信息

可以通过计费 API 检索 {% data variables.product.prodname_advanced_security %} 使用情况信息。

{% ifversion ghec %}

对于组织级数据，请使用 `/orgs/{org}/settings/billing/advanced-security` 终结点。 有关详细信息，请参阅 {% data variables.product.prodname_dotcom %} REST API 文档中的“[计费](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization)”。

{% endif %}

对于企业级数据，请使用 `/enterprises/{enterprise}/settings/billing/advanced-security` 终结点。 有关详细信息，请参阅 {% data variables.product.prodname_dotcom %} REST API 文档中的“[{% data variables.product.prodname_enterprise %} 管理](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise)”。

{% endif %}
