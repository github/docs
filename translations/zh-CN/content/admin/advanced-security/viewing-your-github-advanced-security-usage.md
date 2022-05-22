---
title: 查看您的 GitHub 高级安全使用情况
intro: 'You can view usage of your {% data variables.product.prodname_GH_advanced_security %} license.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  enterprise-server: '>=3.1'
topics:
  - Enterprise
---

{% data reusables.advanced-security.about-ghas-license-seats %} For more information, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)."

### Viewing license usage for {% data variables.product.prodname_GH_advanced_security %}

You can check how many seats your license includes and how many seats are currently in use.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   “{% data variables.product.prodname_GH_advanced_security %}”部分显示了当前使用详情。 You can see the total number of seats used, as well as a table with the number of committers and unique committers for each organization. ![{% data variables.product.prodname_GH_advanced_security %} section of Enterprise license](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. （可选）单击您是所有者的组织的名称，以显示组织的安全和分析设置。 ![在企业帐单设置的 {% data variables.product.prodname_GH_advanced_security %} 部分中拥有的组织](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. 在“Security & analysis（安全性和分析）”设置页面上，滚动到“{% data variables.product.prodname_GH_advanced_security %} 仓库”部分以查看此组织的仓库使用明细。 ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
