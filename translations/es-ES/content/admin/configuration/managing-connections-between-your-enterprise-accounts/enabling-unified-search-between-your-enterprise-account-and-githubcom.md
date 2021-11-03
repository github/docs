---
title: Enabling unified search between your enterprise account and GitHub.com
shortTitle: Habilitar la búsqueda unificada
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
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
---

{% data reusables.github-connect.beta %}

When you enable unified search, users can view search results from public and private content on {% data variables.product.prodname_dotcom_the_website %} when searching from {% data variables.product.product_location %}{% ifversion ghae %} on {% data variables.product.prodname_ghe_managed %}{% endif %}.

Los usuarios no podrán buscar {% data variables.product.product_location %} desde {% data variables.product.prodname_dotcom_the_website %}, incluso si tienen acceso a ambos entornos. Los usuarios solo pueden buscar repositorios privados para los que hayas habilitado {% data variables.product.prodname_unified_search %} y a los que tengan acceso en las organizaciones conectadas {% data variables.product.prodname_ghe_cloud %}. For more information, see "[About searching on {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)" and "[Enabling private {% data variables.product.prodname_dotcom_the_website %} repository search in your enterprise account](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

Buscar a través de las API REST y GraphQL no incluye {% data variables.product.prodname_dotcom_the_website %} los resultados de búsqueda. No están admitidas la búsqueda avanzada y buscar wikis en {% data variables.product.prodname_dotcom_the_website %}.

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Iniciar sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. En "Los usuarios pueden buscar {% data variables.product.prodname_dotcom_the_website %}", utiliza el menú desplegable y haz clic en **Enabled (Habilitado)**. ![Habilitar la opción de búsqueda en el menú desplegable de búsqueda de GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. De manera opcional, en "Users can search private repositories on (Los usuarios pueden buscar repositorios privados en) {% data variables.product.prodname_dotcom_the_website %}", utiliza el menú desplegable y haz clic en **Enabled (Habilitado)**. ![Habilitar la opción de búsqueda de repositorios privados en el menú desplegable de búsqueda de GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

## Leer más

- "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)"

