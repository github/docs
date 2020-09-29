---
title: 在设备上配置 GitHub Pages
intro: '您可以在实例上启用或禁用 {% data variables.product.prodname_pages %}。 还可以选择将 {% data variables.product.prodname_pages %} 站点设为可公开访问。'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
versions:
  enterprise-server: '*'
---

### 将 {% data variables.product.prodname_pages %} 设为可公开访问

如果已在实例上启用私有模式，则公众无法访问在 {% data variables.product.product_location_enterprise %} 上托管的 {% data variables.product.prodname_pages %} 站点。

{% warning %}

**警告**：如果启用公共 {% data variables.product.prodname_pages %} 站点，则实例上每个仓库中的每一个 {% data variables.product.prodname_pages %} 站点均可由公众访问。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. 选择 **Public Pages**。 ![启用公共页面复选框](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### 在 {% data variables.product.product_location_enterprise %} 上禁用 {% data variables.product.prodname_pages %}

如果为 {% data variables.product.product_location_enterprise %} 禁用了子域隔离，则还应禁用 {% data variables.product.prodname_pages %}，以免遭受潜在安全漏洞的攻击。 更多信息请参阅“[启用子域隔离](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. 取消选择 **Enable Pages**。 ![禁用 {% data variables.product.prodname_pages %} 复选框](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}

### 延伸阅读

- "[启用私有模式](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode)"
