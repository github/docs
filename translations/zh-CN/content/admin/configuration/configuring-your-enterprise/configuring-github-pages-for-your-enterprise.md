---
title: 为企业配置 GitHub Pages
intro: '您可以为企业{% ifversion ghes %} 启用或禁用 {% data variables.product.prodname_pages %} ，并选择是否使网站{% endif %}可公开访问。'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
ms.openlocfilehash: 1cb2bd78f006bfd86a3f0a2e42db4fcf2cea3b73
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145098112'
---
{% ifversion ghes %}

## 为 {% data variables.product.prodname_pages %} 启用公共站点

如果在企业上启用了专用模式，则除非启用公用网站，否则公众无法访问企业托管的 {% data variables.product.prodname_pages %} 网站。

{% warning %}

**警告：** 如果为 {% data variables.product.prodname_pages %} 启用公共站点，则企业上每个存储库中的每个站点均可由公众访问。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
4. 选择“公共页面”。
  ![启用“公共页面”的复选框](/assets/images/enterprise/management-console/public-pages-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## 为企业禁用 {% data variables.product.prodname_pages %}

如果为企业禁用了子域隔离，则还应禁用 {% data variables.product.prodname_pages %}，以免遭受潜在安全漏洞的攻击。 有关详细信息，请参阅“[启用子域隔离](/admin/configuration/enabling-subdomain-isolation)”。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. 取消选择“启用页面”。
  ![禁用 {% data variables.product.prodname_pages %} 的复选框](/assets/images/enterprise/management-console/pages-select-button.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.pages-tab %}
1. 在“页面策略”下，取消选择“启用 {% data variables.product.prodname_pages %}”。
  ![禁用 {% data variables.product.prodname_pages %} 的复选框](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png) {% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## 为企业配置 {% data variables.product.prodname_pages %} 响应头

你可以为 {% data variables.product.product_location %} 托管的 {% data variables.product.prodname_pages %} 站点添加或覆盖响应头。

{% warning %}

**警告：** 确保在保存前正确配置响应头。 配置错误可能会对 {% data variables.product.product_location %} 的安全性产生负面影响。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. 键入标头设置，然后单击“添加标头”。
   - 在“Http 标头名称”字段中，输入标头名称。 标头名称的长度应小于 128 个字符。
   - 在“Http 标头值”字段中，键入标头值。 标头值的长度应小于 300 个字符。
![{% data variables.enterprise.management_console %} 中的 {% data variables.product.prodname_pages %} 响应头名称和值字段](/assets/images/enterprise/management-console/pages-override-header-section.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## 延伸阅读

- “[启用专用模式](/admin/configuration/enabling-private-mode)”{% endif %}
