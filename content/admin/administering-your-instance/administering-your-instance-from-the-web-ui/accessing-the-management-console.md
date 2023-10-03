---
title: Accessing the Management Console
shortTitle: Access Management Console
intro: 'You can access the {% data variables.enterprise.management_console %} {% ifversion ghes < 3.8 %}using the {% data variables.enterprise.management_console %} password{% elsif enterprise-management-console-multi-user-auth %}as the root site administrator or a {% data variables.enterprise.management_console %} user{% endif %}.'
redirect_from:
  - /admin/configuration/administering-your-instance-from-the-management-console/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Authentication
---

{% data reusables.enterprise_site_admin_settings.management-console-access %}

## Accessing the {% data variables.enterprise.management_console %}

The first time that you access the {% data variables.enterprise.management_console %} for {% data variables.location.product_location %}, you must upload your license file. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.click-continue-authentication %}

## Accessing the {% data variables.enterprise.management_console %} as an unauthenticated user

1. Visit this URL in your browser, replacing `hostname` with your actual {% data variables.product.prodname_ghe_server %} hostname or IP address:

   ```shell
   http(s)://HOSTNAME/setup
   ```

{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.click-continue-authentication %}
