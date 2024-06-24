---
title: Configuring the hostname for your instance
shortTitle: Configure hostname
intro: 'You can provide reliable access to {% data variables.location.product_location %} by assigning a hostname that''s accessible over your network.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-network-settings/configuring-a-hostname
  - /admin/configuration/configuring-network-settings/configuring-the-hostname-for-your-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
---

## About the hostname for {% data variables.product.product_name %}

To provide reliable access to {% data variables.location.product_location %} via a known name on the network, you can configure a hostname. If you configure a hostname instead of using a hard-coded IP address, you will be able to change the physical hardware that {% data variables.location.product_location %} runs on without affecting users or client software.

The hostname setting in the {% data variables.enterprise.management_console %} should be set to an appropriate fully qualified domain name (FQDN) which is resolvable on the internet or within your internal network. For example, your hostname setting could be `github.companyname.com.` Web and API requests will automatically redirect to the hostname configured in the {% data variables.enterprise.management_console %}. Note that `localhost` is not a valid hostname setting.

Hostnames must be less than 63 characters in length per [Section 2.3.4 of the Domain Names Specification RFC](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4).

After you configure a hostname, you can enable subdomain isolation to further increase the security of {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)."

{% data variables.product.company_short %} strongly recommends that you do not change the hostname for an existing {% data variables.product.product_name %} instance. Changing the hostname will cause unexpected behavior, up to and including instance outages. Instead, configure a new instance with the desired hostname, and then restore settings and data from the original instance to the new instance.

For more information on the supported hostname types, see [Section 2.1 of the HTTP RFC](https://tools.ietf.org/html/rfc1123#section-2).

## Configuring the hostname

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
1. Under "Hostname", type the hostname you'd like to set for {% data variables.location.product_location %}.
1. To test the DNS and SSL settings for the new hostname, click **Test domain settings**.
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

To help mitigate various cross-site scripting vulnerabilities, we recommend that you enable subdomain isolation for {% data variables.location.product_location %} after you configure a hostname. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)."

## Changing the hostname

If you need to change the hostname for {% data variables.location.product_location %}, you must restore a backup of your existing instance to a new instance with the desired hostname. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/changing-the-hostname-for-your-instance)."

{% data reusables.enterprise_installation.changing-hostname-not-supported %}
