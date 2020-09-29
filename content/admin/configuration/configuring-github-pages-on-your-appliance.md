---
title: Configuring GitHub Pages on your appliance
intro: 'You can enable or disable {% data variables.product.prodname_pages %} on your instance. You can also choose to make {% data variables.product.prodname_pages %} sites publicly accessible.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
versions:
  enterprise-server: '*'
---

### Making {% data variables.product.prodname_pages %} publicly accessible

If private mode is enabled on your instance, the public cannot access {% data variables.product.prodname_pages %} sites hosted on {% data variables.product.product_location_enterprise %}.

{% warning %}

**Warning:** If you enable public {% data variables.product.prodname_pages %} sites, every {% data variables.product.prodname_pages %} site in every repository on your instance will be accessible to the public.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. Select **Public Pages**.
![Checkbox to enable Public Pages](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### Disabling {% data variables.product.prodname_pages %} on {% data variables.product.product_location_enterprise %}

If subdomain isolation is disabled for {% data variables.product.product_location_enterprise %}, you should also disable {% data variables.product.prodname_pages %} to protect yourself from potential security vulnerabilities. For more information, see "[Enabling subdomain isolation](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. Unselect **Enable Pages**.
![Checkbox to disable {% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}

### Further reading

- "[Enabling private mode](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode)"
