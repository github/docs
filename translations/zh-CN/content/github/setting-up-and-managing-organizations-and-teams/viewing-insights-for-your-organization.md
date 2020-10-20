---
title: 查看组织的洞察
intro: '组织洞察提供有关组织的活动、贡献和依赖项的数据。'
product: '{% data reusables.gated-features.org-insights %}'
redirect_from:
  - /articles/viewing-insights-for-your-organization
versions:
  free-pro-team: '*'
---

组织的所有成员均可查看组织洞察。 更多信息请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization)”。

您可以使用组织活动洞察来帮助您更好地了解组织成员如何使用 {% data variables.product.product_name %} 进行协作和处理代码。 依赖项洞察可帮助您跟踪、报告和处理组织的开源使用情况。

### 查看组织活动洞察

{% note %}

**注：**组织活动目前处于公开测试阶段，随时可能发生变化。

{% endnote %}

通过组织活动洞察，您可以查看整个组织或特定仓库每周、每月和每年的数据可视化，包括议题和拉取请求活动、热门使用语言以及有关组织成员花费其时间累积的信息。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. 在组织名称下，单击 {% octicon "graph" aria-label="The bar graph icon" %} **Insights（洞察）**。 ![单击组织洞察选项卡](/assets/images/help/organizations/org-nav-insights-tab.png)
4. （可选）在页面的右上角，选择查看过去 **1 周**、**1 个月**或 **1 年**的数据。 ![选择查看组织洞察的时间段](/assets/images/help/organizations/org-insights-time-period.png)
5. （可选）在页面的右上角，选择查看最多三个仓库的数据，然后单击 **Apply（应用）**。 ![选择查看组织洞察的仓库](/assets/images/help/organizations/org-insights-repos.png)

### 查看组织依赖项洞察
通过依赖项洞察，您可以查看组织所依赖的开源项目的漏洞、许可证和其他重要信息。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. 在组织名称下，单击 {% octicon "graph" aria-label="The bar graph icon" %} **Insights（洞察）**。 ![主要组织导航栏中的洞察选项卡](/assets/images/help/organizations/org-nav-insights-tab.png)
4. 要查看此组织的依赖项，请单击 **Dependencies（依赖项）**。 ![主要组织导航栏下的依赖项选项卡](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. 要查看所有您的 {% data variables.product.prodname_ghe_cloud %} 组织的依赖项洞察，请单击 **My organizations（我的组织）**。 ![依赖项选项卡下的我的组织按钮](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. 您可以单击 **Open security advisories（未解决安全通告）**和 **Licenses（许可证）**图表中的结果，按漏洞状态、许可证或两者的组合进行过滤。 ![我的组织漏洞和许可证图表](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. 您可以单击每个漏洞旁边的 {% octicon "package" aria-label="The package icon" %} **dependents（从属者）**，以了解组织中的哪些从属者正在使用每个库。 ![我的组织有漏洞的从属者](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)


  ### 延伸阅读

   - "[关于组织](/github/setting-up-and-managing-organizations-and-teams/about-organizations)"
   - "[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
   - “[更改组织依赖项洞察的可见性](/github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights)”
   - "[在企业帐户中实施关于依赖项洞察的策略](/github/setting-up-and-managing-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account)"
