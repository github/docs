---
title: 查看 GitHub Codespaces 使用情况
shortTitle: Viewing your usage
intro: '你可以查看 {% data variables.product.prodname_github_codespaces %} 使用的计算分钟数和存储空间。'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: 59c7baf22070f534ea42ddde561a4b739a01fed1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147865159'
---
## 查看组织的 {% data variables.product.prodname_github_codespaces %} 使用情况

组织所有者和帐单管理员可查看组织的 {% data variables.product.prodname_github_codespaces %} 使用情况。 对于由企业帐户管理的组织，组织所有者可以在组织计费页面中查看 {% data variables.product.prodname_codespaces %} 使用情况，企业管理员可以查看整个企业的使用情况。

{% data reusables.organizations.billing-settings %}
1. 在“{% data variables.product.prodname_codespaces %}”下，查看本月到目前为止使用的计算小时数和存储的详细信息。
  ![分钟使用情况详细信息](/assets/images/help/billing/codespaces-compute-storage.png) {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}
1. 筛选报告以仅显示 `Product` 字段中提及“Codespaces”的行。

   ![针对 Codespaces 筛选的使用情况报告](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## 查看企业帐户的 {% data variables.product.prodname_codespaces %} 使用情况

企业所有者和帐单管理员可查看企业帐户的 {% data variables.product.prodname_codespaces %} 使用情况。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_codespaces %}”下，查看企业帐户中每个组织的使用详细信息。
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
