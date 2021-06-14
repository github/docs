---
title: 查看您的 GitHub 高级安全使用情况
intro: '您可以查看 {% data variables.product.prodname_GH_advanced_security %} 许可证的使用情况。'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  enterprise-server: '>=3.1'
topics:
  - Enterprise
---

{% data reusables.advanced-security.about-ghas-license-seats %}更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的许可](/admin/advanced-security/about-licensing-for-github-advanced-security)”。

### 查看 {% data variables.product.prodname_GH_advanced_security %} 的许可证使用情况

您可以检查您的许可证包含多少个座位以及当前使用的座位数。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   “{% data variables.product.prodname_GH_advanced_security %}”部分显示了当前使用详情。 您可以查看已使用的席位总数，以及一份表格，其中包含每个组织的提交者数量和唯一提交者。 ![企业许可证的 {% data variables.product.prodname_GH_advanced_security %} 部分](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. （可选）单击您是所有者的组织的名称，以显示组织的安全和分析设置。 ![在企业帐单设置的 {% data variables.product.prodname_GH_advanced_security %} 部分中拥有的组织](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. 在“Security & analysis（安全性和分析）”设置页面上，滚动到“{% data variables.product.prodname_GH_advanced_security %} 仓库”部分以查看此组织的仓库使用明细。 ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
