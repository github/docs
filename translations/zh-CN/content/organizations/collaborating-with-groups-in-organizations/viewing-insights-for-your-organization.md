---
title: 查看组织的洞察
intro: 组织洞察提供有关组织的活动、贡献和依赖项的数据。
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
ms.openlocfilehash: 5398d60f6a937c35e188dc97e44bf25b01b6d676
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128591'
---
## 关于组织见解

您可以使用组织活动洞察来帮助您更好地了解组织成员如何使用 {% data variables.product.product_name %} 进行协作和处理代码。 依赖项洞察可帮助您跟踪、报告和处理组织的开源使用情况。

{% note %}

注意：要查看组织的见解，组织必须使用 {% data variables.product.prodname_ghe_cloud %}。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## 查看组织活动洞察

{% note %}

注意：组织活动见解目前处于公开测试阶段，可能会发生变化。

{% endnote %}

通过组织活动洞察，您可以查看整个组织或特定仓库每周、每月和每年的数据可视化，包括议题和拉取请求活动、热门使用语言以及有关组织成员花费其时间累积的信息。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. 在组织名称下，单击 {% octicon "graph" aria-label="The bar graph icon" %}“见解”。
  ![单击“组织见解”选项卡](/assets/images/help/organizations/org-nav-insights-tab.png)
4. （可选）在页面的右上角，选择查看过去“一周”、“一个月”或“一年”的数据  。
  ![选择查看组织见解的时间段](/assets/images/help/organizations/org-insights-time-period.png)
5. （可选）在页面的右上角，选择查看最多三个存储库的数据，然后单击“应用”。
  ![选择查看组织见解的存储库](/assets/images/help/organizations/org-insights-repos.png)

## 查看组织依赖项洞察

{% note %}

注意：请确保已启用[依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)。 

{% endnote %}

通过依赖项洞察，您可以查看组织所依赖的开源项目的漏洞、许可证和其他重要信息。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. 在组织名称下，单击 {% octicon "graph" aria-label="The bar graph icon" %}“见解”。
  ![主要组织导航栏中的“见解”选项卡](/assets/images/help/organizations/org-nav-insights-tab.png)
4. 要查看此组织的依赖项，请单击“依赖项”。
  ![主要组织导航栏下的“依赖项”选项卡](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. 要查看所有 {% data variables.product.prodname_ghe_cloud %} 组织的依赖项见解，请单击“我的组织”。
  ![“依赖项”选项卡下的“我的组织”按钮](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. 可以单击“打开安全通告”和“许可证”图表中的结果，按漏洞状态、许可证或两者的组合进行筛选 。
  ![我的组织的漏洞和许可证图表](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. 可以单击每个漏洞旁边的 {% octicon "package" aria-label="The package icon" %}“依赖项”，了解组织中的哪些依赖项正在使用每个库。
  ![我的组织有漏洞的依赖项](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## 延伸阅读
 - [关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)
 - [探索存储库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)
 - [更改组织依赖项见解的可见性](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights) {% ifversion ghec %}
- [在企业中强制实施依赖项见解的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise) {% endif %}
