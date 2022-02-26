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
  ghae: issue-5378
miniTocMaxHeadingLevel: 3
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
   “{% data variables.product.prodname_GH_advanced_security %}”部分显示了当前使用详情。 ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) 如果您的席位用完了，该部分将为红色并显示“已超出限制”。 您应该减少您对 {% data variables.product.prodname_GH_advanced_security %} 的使用，或者购买更多席位。 更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)”。 ![企业许可设置中的 {% data variables.product.prodname_GH_advanced_security %} 显示"超出限制"](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
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

{% ifversion ghec or ghes > 3.3 or ghae-issue-5378 %}

## 下载 {% data variables.product.prodname_GH_advanced_security %} 许可证使用信息

You can download a CSV file with {% data variables.product.prodname_GH_advanced_security %} license usage information at both the enterprise and organization levels. The CSV file contains information about each {% data variables.product.prodname_advanced_security %} seat that is in use, including:

- The username of the person using the seat
- The {% data variables.product.prodname_advanced_security %}-enabled repositories where commits were made
- The organizations that people using seats belong to
- The most recent commit dates

您可以使用此信息深入了解 {% data variables.product.prodname_advanced_security %} 许可证的使用方式，例如企业的哪些成员正在使用 {% data variables.product.prodname_advanced_security %} 席位，或者您的组织中如何使用 {% data variables.product.prodname_advanced_security %} 许可证。

You can download the {% data variables.product.prodname_advanced_security %} license usage CSV through the {% data variables.product.product_name %} user interface or the REST API.

### Downloading {% data variables.product.prodname_advanced_security %} license usage information through the UI

#### At the organization-level

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. Underneath "{% data variables.product.prodname_GH_advanced_security %}," click {% octicon "download" aria-label="The download icon" %} next to "Committers." ![Download button for organization-level data](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### At the enterprise-level

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "{% data variables.product.prodname_GH_advanced_security %}," click {% octicon "download" aria-label="The download icon" %} next to "Commiters." ![Download button for enterprise-level data](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### Downloading {% data variables.product.prodname_advanced_security %} license usage information through the REST API

You can retrieve {% data variables.product.prodname_advanced_security %} usage information via the billing API.

{% ifversion ghec %}

For organization-level data, use the `/orgs/{org}/settings/billing/advanced-security` endpoint. For more information, see "[Billing](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization)" in the {% data variables.product.prodname_dotcom %} REST API documentation.

{% endif %}

For enterprise-level data, use the `/enterprises/{enterprise}/settings/billing/advanced-security` endpoint. For more information, see "[{% data variables.product.prodname_enterprise %} administration](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise)" in the {% data variables.product.prodname_dotcom %} REST API documentation.

{% endif %}
