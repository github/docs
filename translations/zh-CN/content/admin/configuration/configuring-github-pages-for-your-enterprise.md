---
title: 为企业配置 GitHub Pages
intro: '您可以为企业启用或禁用 {% data variables.product.prodname_pages %}，并选择是否让站点被公开访问。'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### 为 {% data variables.product.prodname_pages %} 启用公共站点

{% if enterpriseServerVersions contains currentVersion %}如果您的企业启用了私有模式，则除非您启用公共站点，否则{% else %}{% endif %}公众无法访问您的企业托管的 {% data variables.product.prodname_pages %} 站点。

{% warning %}

**警告**：如果为 {% data variables.product.prodname_pages %} 启用公共站点，则企业上每个仓库中的每个站点均可由公众访问。

{% endwarning %}

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. 选择 **Public Pages**。 ![启用公共页面复选框](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. 在“Pages policies（页面策略）”下，选择 **Public {% data variables.product.prodname_pages %}（公共 Github）**。 ![用于启用公共 {% data variables.product.prodname_pages %} 的复选框](/assets/images/enterprise/business-accounts/public-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}
{% endif %}

### 为企业禁用 {% data variables.product.prodname_pages %}

{% if enterpriseServerVersions contains currentVersion %}
如果为企业禁用了子域隔离，则还应禁用
{% data variables.product.prodname_pages %} 以保护自己免受潜在安全漏洞的威胁。 更多信息请参阅“[启用子域隔离](/admin/configuration/enabling-subdomain-isolation)”。
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. 取消选择 **Enable Pages**。 ![禁用 {% data variables.product.prodname_pages %} 复选框](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. 在“Pages policies（页面策略）”下，取消选择 **Enable {% data variables.product.prodname_pages %}（启用 Github）**。 ![禁用 {% data variables.product.prodname_pages %} 复选框](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### 延伸阅读

- "[启用私人模式](/admin/configuration/enabling-private-mode)"
{% endif %}
