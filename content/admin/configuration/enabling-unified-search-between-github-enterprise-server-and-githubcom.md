---
title: Enabling unified search between GitHub Enterprise Server and GitHub.com
intro: 'After enabling {{ site.data.variables.product.prodname_github_connect }}, you can allow search of {{ site.data.variables.product.prodname_dotcom_the_website }} from {{ site.data.variables.product.product_location_enterprise }}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: 'Site administrators for {{ site.data.variables.product.prodname_ghe_server }} who are also owners of the connected {{ site.data.variables.product.prodname_ghe_cloud }} organization or enterprise account can enable unified search between {{ site.data.variables.product.prodname_ghe_server }} and {{ site.data.variables.product.prodname_dotcom_the_website }}.'
versions:
  enterprise-server: '*'
---

When you enable unified search, users can view search results from public and private content on {{ site.data.variables.product.prodname_dotcom_the_website }} when searching from {{ site.data.variables.product.product_location_enterprise }}.

Users will not be able to search {{ site.data.variables.product.product_location_enterprise }} from {{ site.data.variables.product.prodname_dotcom_the_website }}, even if they have access to both environments. Users can only search private repositories you've enabled {{ site.data.variables.product.prodname_unified_search }} for and that they have access to in the connected {{ site.data.variables.product.prodname_ghe_cloud }} organizations. For more information, see "[About searching on {{ site.data.variables.product.prodname_dotcom }}](/articles/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)" and "[Enabling private {{ site.data.variables.product.prodname_dotcom_the_website }} repository search in your {{ site.data.variables.product.prodname_ghe_server }} account](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)."

Searching via the REST and GraphQL APIs does not include {{ site.data.variables.product.prodname_dotcom_the_website }} search results. Advanced search and searching for wikis in {{ site.data.variables.product.prodname_dotcom_the_website }} are not supported.

{{ site.data.reusables.github-connect.access-dotcom-and-enterprise }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. Under "Users can search {{ site.data.variables.product.prodname_dotcom_the_website }}", use the drop-down menu and click **Enabled**.
  ![Enable search option in the search GitHub.com drop-down menu](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
6. Optionally, under "Users can search private repositories on {{ site.data.variables.product.prodname_dotcom_the_website }}", use the drop-down menu and click **Enabled**.
    ![Enable private repositories search option in the search GitHub.com drop-down menu](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

### Further reading

- "[Connecting {{ site.data.variables.product.prodname_ghe_server }} to {{ site.data.variables.product.prodname_dotcom_the_website }}](/enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)"
