---
title: Configuring a hostname
intro: We recommend setting a hostname for your appliance instead of using a hard-coded IP address.
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
---
If you configure a hostname instead of a hard-coded IP address, you will be able to change the physical hardware that {% data variables.location.product_location %} runs on without affecting users or client software.

The hostname setting in the {% data variables.enterprise.management_console %} should be set to an appropriate fully qualified domain name (FQDN) which is resolvable on the internet or within your internal network. For example, your hostname setting could be `github.companyname.com.` Web and API requests will automatically redirect to the hostname configured in the {% data variables.enterprise.management_console %}. Note that `localhost` is not a valid hostname setting. 

Hostnames must be less than 63 characters in length per [Section 2.3.4 of the Domain Names Specification RFC](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4).

After you configure a hostname, you can enable subdomain isolation to further increase the security of {% data variables.location.product_location %}. For more information, see "[Enabling subdomain isolation](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)."

For more information on the supported hostname types, see [Section 2.1 of the HTTP RFC](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Type the hostname you'd like to set for {% data variables.location.product_location %}.
  ![Field for setting a hostname](/assets/images/enterprise/management-console/hostname-field.png)
5. To test the DNS and SSL settings for the new hostname, click **Test domain settings**.
  ![Test domain settings button](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

To help mitigate various cross-site scripting vulnerabilities, we recommend that you enable subdomain isolation for {% data variables.location.product_location %} after you configure a hostname. For more information, see "[Enabling subdomain isolation](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)."
