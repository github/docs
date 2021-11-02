---
title: 查看您的 GitHub 高级安全使用情况
intro: 'You can view usage of {% data variables.product.prodname_GH_advanced_security %} for your enterprise.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '>=3.1'
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: 查看高级安全用法
---

## 关于 {% data variables.product.prodname_GH_advanced_security %} 的许可

{% data reusables.advanced-security.about-ghas-license-seats %} 更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”。

## 查看企业帐户的 {% data variables.product.prodname_GH_advanced_security %} 许可使用情况

您可以检查您的许可证包含多少个席位，以及其中多少席位目前在使用。

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   “{% data variables.product.prodname_GH_advanced_security %}”部分显示了当前使用详情。 ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) If you run out of seats, the section will be red and show "Limit exceeded". 您应该减少您对 {% data variables.product.prodname_GH_advanced_security %} 的使用，或者购买更多席位。 更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)”。 ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings showing "Limit exceeded"](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. （可选）要查看每个组织的使用详情，请在左侧边栏中单击 **Billing（计费）**。 ![Billing tab in the enterprise account settings sidebar](/assets/images/help/business-accounts/settings-billing-tab.png) 在“{% data variables.product.prodname_GH_advanced_security %}”部分，您可以查看每个组织的提交者和唯一提交者数量。 ![企业计费设置中的 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. （可选）单击您是所有者的组织的名称，以显示组织的安全和分析设置。 ![在企业帐单设置的 {% data variables.product.prodname_GH_advanced_security %} 部分中拥有的组织](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. 在“Security & analysis（安全性和分析）”设置页面上，滚动到“{% data variables.product.prodname_GH_advanced_security %} 仓库”部分以查看此组织的仓库使用明细。 ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   “{% data variables.product.prodname_GH_advanced_security %}”部分显示了当前使用详情。 您可以查看已使用的席位总数，以及一份表格，其中包含每个组织的提交者数量和唯一提交者。 ![企业许可证的 {% data variables.product.prodname_GH_advanced_security %} 部分](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. （可选）单击您是所有者的组织的名称，以显示组织的安全和分析设置。 ![在企业帐单设置的 {% data variables.product.prodname_GH_advanced_security %} 部分中拥有的组织](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. 在“Security & analysis（安全性和分析）”设置页面上，滚动到“{% data variables.product.prodname_GH_advanced_security %} 仓库”部分以查看此组织的仓库使用明细。 ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% endif %}
