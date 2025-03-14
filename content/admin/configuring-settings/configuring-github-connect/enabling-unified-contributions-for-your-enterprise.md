---
title: Enabling unified contributions for your enterprise
shortTitle: Unified contributions
intro: 'You can allow users to include anonymized contribution counts for their work on {% data variables.location.product_location %} in their contribution graphs on {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-contributions-between-your-enterprise-account-and-githubcom
  - /admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise
permissions: 'Enterprise owners'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
---

## About unified contributions

As an enterprise owner, you can allow end users to send anonymized contribution counts for their work from {% data variables.location.product_location %} to their contribution graph on {% data variables.product.prodname_dotcom_the_website %}{% ifversion ghecom-github-connect %} or {% data variables.enterprise.data_residency_site %}{% endif %}.

After you enable {% data variables.enterprise.prodname_unified_contributions %}, before individual users can send contribution counts from {% data variables.location.product_location %} to {% data variables.product.prodname_ghe_cloud %}, each user must also connect their user account on {% data variables.product.prodname_ghe_server %} with an account on {% data variables.product.prodname_ghe_cloud %}. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile).

{% data reusables.github-connect.sync-frequency %}

If the enterprise owner disables the functionality or individual users opt out of the connection, the contribution counts from {% data variables.product.prodname_ghe_server %} will be deleted on {% data variables.product.prodname_ghe_cloud %}. If the user reconnects their profiles after disabling them, the contribution counts for the past 90 days are restored.

{% data variables.product.prodname_ghe_server %} **only** sends the contribution count and source ({% data variables.product.prodname_ghe_server %}) for connected users. It does not send any information about the contribution or how it was made.

## Enabling unified contributions

Before enabling {% data variables.enterprise.prodname_unified_contributions %} on {% data variables.location.product_location %}, you must enable {% data variables.product.prodname_github_connect %}. See {% ifversion ghecom-github-connect %}[AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom) or {% endif %}[AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. To the right of "Unified contributions", click **Enable**.

   ![Screenshot of the "Unified contributions" option on the GitHub Connect page. The "Enable" button is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
1. [Sign in](https://enterprise.github.com/login) to the {% data variables.product.prodname_ghe_server %} site to receive further instructions.

When you request access, we may redirect you to the {% data variables.product.prodname_ghe_server %} site to check your current terms of service.
