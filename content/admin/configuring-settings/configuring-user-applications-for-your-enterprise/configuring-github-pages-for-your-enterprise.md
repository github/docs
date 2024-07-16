---
title: Configuring GitHub Pages for your enterprise
intro: 'You can enable or disable {% data variables.product.prodname_pages %} for your enterprise{% ifversion ghes %} and choose whether to make sites publicly accessible{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-your-enterprise/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-user-applications-for-your-enterprise/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
---

{% ifversion ghes %}

## Enabling public sites for {% data variables.product.prodname_pages %}

If private mode is enabled on your enterprise, the public cannot access {% data variables.product.prodname_pages %} sites hosted by your enterprise unless you enable public sites.

{% warning %}

**Warning:** If you enable public sites for {% data variables.product.prodname_pages %}, every site in every repository on your enterprise will be accessible to the public.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
1. Select **Public Pages**.
{% data reusables.enterprise_management_console.save-settings %}

## Disabling {% data variables.product.prodname_pages %} for your enterprise

If subdomain isolation is disabled for your enterprise, you should also disable {% data variables.product.prodname_pages %} to protect yourself from potential security vulnerabilities. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
1. Deselect **Enable Pages**.
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}

## Configuring {% data variables.product.prodname_pages %} response headers for your enterprise

You can add or override response headers for {% data variables.product.prodname_pages %} sites hosted by {% data variables.location.product_location %}.

{% warning %}

**Warning:** Ensure that your response headers are properly configured before saving. Improper configurations may negatively impact the security of {% data variables.location.product_location %}.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
1. Under "Http Header Name," type the header name. The length of header name should less than 128 characters.
1. Under "Http Header Value," type the header value. The length of header value should less than 300 characters.
1. Click **Add headers**.
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}

## Further reading

* "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-private-mode)"
{% endif %}
