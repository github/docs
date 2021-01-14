---
title: Managing GitHub for mobile for your enterprise
intro: You can decide whether authenticated users can connect to {% data variables.product.product_location %} with {% data variables.product.prodname_mobile %}.
permissions: Enterprise owners can manage {% data variables.product.prodname_mobile %} for an enterprise on {% data variables.product.product_name %}.
versions:
  enterprise-server: '>=3.0'
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### About {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %} For more information, see "[GitHub for mobile](/github/getting-started-with-github/github-for-mobile)."

Members of your enterprise can use {% data variables.product.prodname_mobile %} to triage, collaborate, and manage work on {% data variables.product.product_location %} from a mobile device. By default, {% data variables.product.prodname_mobile %} is enabled for {% data variables.product.product_location %}. You can allow or disallow enterprise members from using {% data variables.product.prodname_mobile %} to authenticate to {% data variables.product.product_location %} and access your enterprise's data.

### Enabling or disabling {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. In the left sidebar, click **Mobile**.
  !["Mobile" in the left sidebar for the {% data variables.product.prodname_ghe_server %} management console](/assets/images/enterprise/management-console/click-mobile.png)
1. Under "GitHub for mobile", select or deselect **Enable GitHub Mobile Apps**.
  ![Checkbox for "Enable GitHub Mobile Apps" in the {% data variables.product.prodname_ghe_server %} management console](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png)
{% data reusables.enterprise_management_console.save-settings %}
