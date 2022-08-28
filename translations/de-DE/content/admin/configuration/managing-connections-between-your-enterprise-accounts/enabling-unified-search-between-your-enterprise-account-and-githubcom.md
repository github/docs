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

Benutzer können auf {% data variables.product.prodname_dotcom_the_website %} nicht nach {% data variables.product.product_location %} suchen, selbst wenn sie auf beide Umgebungen zugreifen können. Benutzer können nur auf die privaten Repositorys zugreifen, für die Sie {% data variables.product.prodname_unified_search %} aktiviert haben und auf die sie in den verbundenen {% data variables.product.prodname_ghe_cloud %}-Organisationen zugreifen können. For more information, see "[About searching on {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)" and "[Enabling private {% data variables.product.prodname_dotcom_the_website %} repository search in your enterprise account](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

Bei der Suche über die REST und GraphQL-APIs sind die {% data variables.product.prodname_dotcom_the_website %}-Suchergebnisse nicht enthalten. Die erweiterte Suche und die Suche nach Wikis in {% data variables.product.prodname_dotcom_the_website %} werden nicht unterstützt.

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Melden Sie sich bei {% data variables.product.product_location %} und {% data variables.product.prodname_dotcom_the_website %} an.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Verwenden Sie unter „Users can search {% data variables.product.prodname_dotcom_the_website %}“ (Benutzer können {% data variables.product.prodname_dotcom_the_website %} durchsuchen) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Option zum Aktivieren der Suche im Dropdownmenü zum Durchsuchen von GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. Verwenden Sie optional unter „Users can search private repositories on {% data variables.product.prodname_dotcom_the_website %}“ (Benutzer können private Repositorys auf {% data variables.product.prodname_dotcom_the_website %} durchsuchen) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Option zum Aktivieren der Suche nach privaten Repositorys im Dropdownmenü zum Durchsuchen von GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

## Weiterführende Informationen

- "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)"

