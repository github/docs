---
title: Managing GitHub Mobile for your enterprise
intro: 'You can decide whether people can use {% data variables.product.prodname_mobile %} to connect to {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise
  - /admin/configuration/configuring-user-applications-for-your-enterprise/managing-github-mobile-for-your-enterprise
shortTitle: Manage GitHub Mobile
---

## About {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} allows people to triage, collaborate, and manage work on {% data variables.location.product_location %} from a mobile device after successful authentication. {% data reusables.mobile.about-mobile %} For more information, see "[AUTOTITLE](/get-started/using-github/github-mobile)."

You can allow or disallow people from using {% data variables.product.prodname_mobile %} to authenticate to {% data variables.location.product_location %} and access your instance's data. By default, {% data variables.product.prodname_mobile %} is enabled for people who use {% data variables.location.product_location %}.

## Enabling or disabling {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. In the "Settings" sidebar, click **Mobile**.
1. Under "{% data variables.product.prodname_mobile %}", select or deselect **Enable GitHub Mobile Apps**.
{% data reusables.enterprise_management_console.save-settings %}
