---
title: Enabling unified search between your enterprise account and GitHub.com
shortTitle: Enable unified search
intro: 'After enabling {% data variables.product.prodname_github_connect %}, you can allow search of {% data variables.product.prodname_dotcom_the_website %} for members of your enterprise on {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: next
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
---

{% data reusables.github-connect.beta %}

When you enable unified search, users can view search results from public and private content on {% data variables.product.prodname_dotcom_the_website %} when searching from {% data variables.product.product_location %}{% ifversion ghae %} on {% data variables.product.prodname_ghe_managed %}{% endif %}.

Users will not be able to search {% data variables.product.product_location %} from {% data variables.product.prodname_dotcom_the_website %}, even if they have access to both environments. Users can only search private repositories you've enabled {% data variables.product.prodname_unified_search %} for and that they have access to in the connected {% data variables.product.prodname_ghe_cloud %} organizations. For more information, see "[About searching on {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)" and "[Enabling private {% data variables.product.prodname_dotcom_the_website %} repository search in your enterprise account](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

Searching via the REST and GraphQL APIs does not include {% data variables.product.prodname_dotcom_the_website %} search results. Advanced search and searching for wikis in {% data variables.product.prodname_dotcom_the_website %} are not supported.

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Sign in to {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Under "Users can search {% data variables.product.prodname_dotcom_the_website %}", use the drop-down menu and click **Enabled**. ![Enable search option in the search GitHub.com drop-down menu](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. Optionally, under "Users can search private repositories on {% data variables.product.prodname_dotcom_the_website %}", use the drop-down menu and click **Enabled**. ![Enable private repositories search option in the search GitHub.com drop-down menu](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

## Дополнительная литература

- "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)"

