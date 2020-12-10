---
title: Enabling unified contributions between GitHub Enterprise Server and GitHub.com
intro: 'After enabling {% data variables.product.prodname_github_connect %}, you can allow {% data variables.product.prodname_ghe_cloud %} members to highlight their work on {% data variables.product.prodname_ghe_server %} by sending the contribution counts to their {% data variables.product.prodname_dotcom_the_website %} profiles.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified contributions between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '*'
---

As a site administrator, you can allow end users to send anonymized contribution counts for their work from {% data variables.product.prodname_ghe_server %} to their {% data variables.product.prodname_dotcom_the_website %} contribution graph.

After you enable {% data variables.product.prodname_github_connect %} and enable {% data variables.product.prodname_unified_contributions %} in both environments, end users on your instance can connect to their {% data variables.product.prodname_dotcom_the_website %} accounts and send contribution counts from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.github-connect.sync-frequency %} For more information, see "[Sending your {% data variables.product.prodname_ghe_server %} contributions to your {% data variables.product.prodname_dotcom_the_website %} profile](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)."

If the site administrator disables the functionality or developers opt out of the connection, the {% data variables.product.prodname_ghe_server %} contribution counts will be deleted on {% data variables.product.prodname_dotcom_the_website %}. If the developer reconnects their profiles after disabling them, the contribution counts for the past 90 days are restored.

{% data variables.product.prodname_ghe_server %} **only** sends the contribution count and source ({% data variables.product.prodname_ghe_server %}) for connected users. It does not send any information about the contribution or how it was made.

Before enabling {% data variables.product.prodname_unified_contributions %} on {% data variables.product.product_location_enterprise %}, you must connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Connecting {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)."

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. Under "Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}", click **Request access**.
  ![Request access to unified contributions option](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
5. [Sign in](https://enterprise.github.com/login) to the {% data variables.product.prodname_ghe_server %} site to receive further instructions.

When you request access, we'll redirect you to the {% data variables.product.prodname_ghe_server %} site to check your current terms of service. If {% data variables.product.product_location_enterprise %} uses the standard terms of service, the request will automatically redirect you to instructions on enabling {% data variables.product.prodname_unified_contributions %}. If you're using a custom terms of service, we'll log your request and contact you to set up access.
