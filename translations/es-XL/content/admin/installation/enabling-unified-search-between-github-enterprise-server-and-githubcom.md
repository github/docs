---
title: Habilitar la búsqueda unificada entre el Servidor de GitHub Enterprise y GitHub.com
intro: 'Después de habilitar {{ site.data.variables.product.prodname_github_connect }}, puedes permitir la búsqueda de {{ site.data.variables.product.prodname_dotcom_the_website }} desde {{ site.data.variables.product.product_location_enterprise }}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: 'Los administradores de sitio para {{ site.data.variables.product.prodname_ghe_server }} que también sean dueños de la cuenta organizacional o empresarial conectada de {{ site.data.variables.product.prodname_ghe_cloud }} pueden habilitar la búsqueda unificada entre {{ site.data.variables.product.prodname_ghe_server }} y {{ site.data.variables.product.prodname_dotcom_the_website }}.'
versions:
  enterprise-server: '*'
---

Cuando habilitas la búsqueda unificada, los usuarios pueden ver los resultados de la búsqueda desde contenido público y privado en {{ site.data.variables.product.prodname_dotcom_the_website }} cuando buscan desde {{ site.data.variables.product.product_location_enterprise }}.

Los usuarios no podrán buscar {{ site.data.variables.product.product_location_enterprise }} desde {{ site.data.variables.product.prodname_dotcom_the_website }}, incluso si tienen acceso a ambos entornos. Los usuarios solo pueden buscar repositorios privados para los que hayas habilitado {{ site.data.variables.product.prodname_unified_search }} y a los que tengan acceso en las organizaciones conectadas {{ site.data.variables.product.prodname_ghe_cloud }}. Para obtener más información, consulta "[Acerca de la búsqueda en {{ site.data.variables.product.prodname_dotcom }}](/articles/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)" y "[Habilitar la búsqueda de repositorio privado {{ site.data.variables.product.prodname_dotcom_the_website }} en tu cuenta {{ site.data.variables.product.prodname_ghe_server }}](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)."

Buscar a través de las API REST y GraphQL no incluye {{ site.data.variables.product.prodname_dotcom_the_website }} los resultados de búsqueda. No están admitidas la búsqueda avanzada y buscar wikis en {{ site.data.variables.product.prodname_dotcom_the_website }}.

{{ site.data.reusables.github-connect.access-dotcom-and-enterprise }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. En "Los usuarios pueden buscar {{ site.data.variables.product.prodname_dotcom_the_website }}", utiliza el menú desplegable y haz clic en **Enabled (Habilitado)**. ![Habilitar la opción de búsqueda en el menú desplegable de búsqueda de GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
6. De manera opcional, en "Users can search private repositories on (Los usuarios pueden buscar repositorios privados en) {{ site.data.variables.product.prodname_dotcom_the_website }}", utiliza el menú desplegable y haz clic en **Enabled (Habilitado)**. ![Habilitar la opción de búsqueda de repositorios privados en el menú desplegable de búsqueda de GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

### Leer más

- "[Conectar {{ site.data.variables.product.prodname_ghe_server }} a {{ site.data.variables.product.prodname_dotcom_the_website }}](/enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)"
