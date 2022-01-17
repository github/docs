---
title: 为企业配置 GitHub Pages
intro: 'You can enable or disable {% data variables.product.prodname_pages %} for your enterprise{% ifversion ghes %} and choose whether to make sites publicly accessible{% endif %}.'
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
shortTitle: 配置 GitHub Pages
---

{% ifversion ghes %}

## 为 {% data variables.product.prodname_pages %} 启用公共站点

If private mode is enabled on your enterprise, the public cannot access {% data variables.product.prodname_pages %} sites hosted by your enterprise unless you enable public sites.

{% warning %}

**警告**：如果为 {% data variables.product.prodname_pages %} 启用公共站点，则企业上每个仓库中的每个站点均可由公众访问。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. 选择 **Public Pages**。 ![启用公共页面复选框](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

## 为企业禁用 {% data variables.product.prodname_pages %}

如果为企业禁用了子域隔离，则还应禁用 {% data variables.product.prodname_pages %}，以免遭受潜在安全漏洞的攻击。 更多信息请参阅“[启用子域隔离](/admin/configuration/enabling-subdomain-isolation)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. 取消选择 **Enable Pages**。 ![禁用 {% data variables.product.prodname_pages %} 复选框](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. 在“Pages policies（页面策略）”下，取消选择 **Enable {% data variables.product.prodname_pages %}（启用 Github）**。 ![禁用 {% data variables.product.prodname_pages %} 复选框](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes %}
## 延伸阅读

- "[启用私人模式](/admin/configuration/enabling-private-mode)"
{% endif %}
