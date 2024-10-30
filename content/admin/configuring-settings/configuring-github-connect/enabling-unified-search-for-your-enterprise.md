---
title: Enabling unified search for your enterprise
shortTitle: Unified search
intro: 'You can allow users to include repositories on {% data variables.product.prodname_dotcom_the_website %} in their search results when searching from {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom
  - /admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise
permissions: 'Enterprise owners can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
---

## About {% data variables.enterprise.prodname_unified_search %}

When you enable unified search, users can view search results from content on {% data variables.product.prodname_dotcom_the_website %} when searching from {% data variables.location.product_location %}.

You can choose to allow search results for public repositories on {% data variables.product.prodname_dotcom_the_website %}, and you can separately choose to allow search results for private repositories on {% data variables.product.prodname_ghe_cloud %}. If you enable unified search for private repositories, users can only search private repositories that they have access to and that are owned by the connected enterprise account. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-across-github-enterprise-and-githubcom-simultaneously)."

Users will never be able to search {% data variables.location.product_location %} from {% data variables.product.prodname_dotcom_the_website %}, even if they have access to both environments.

After you enable unified search for {% data variables.location.product_location %}, before individual users can see search results from private repositories on {% data variables.product.prodname_dotcom_the_website %} in {% data variables.location.product_location %}, each user must also connect their user account on {% data variables.product.product_name %} with a user account on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

Searching via the REST and GraphQL APIs does not include {% data variables.product.prodname_dotcom_the_website %} search results. Advanced search and searching for wikis in {% data variables.product.prodname_dotcom_the_website %} are not supported.

## Enabling {% data variables.enterprise.prodname_unified_search %}

Before you can enable {% data variables.enterprise.prodname_unified_search %}, you must enable {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/managing-github-connect)."

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Sign into {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. To the right of "Unified search", click **Enable**.

   ![Screenshot of the "Unified search" option on the GitHub Connect page. The "Enable" button is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. Optionally, to the right of "Users can search private repositories on ENTERPRISE ACCOUNT when searching from Enterprise Server", click **Enable**.

   ![Screenshot of the "Unified search" option on the GitHub Connect page. To the right of the setting to allow search of private repositories, the "Enable" button is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
