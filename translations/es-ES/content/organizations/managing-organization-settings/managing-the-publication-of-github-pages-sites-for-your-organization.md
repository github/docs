---
title: Administrar la publicación de sitios de GitHub Pages de tu organización
intro: 'Puedes controlar si los miembros de tu organización pueden publicar sitios de {% data variables.product.prodname_pages %} desde los repositorios que le pertenecen{% ifversion ghec %} y restringir las visibilidades que estos eligen para dichos sitios{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Administrar la publicación de sitios de páginas
---

{% ifversion fpt %}
You can choose to allow or disallow organization members from publishing {% data variables.product.prodname_pages %} sites. Organizations that use {% data variables.product.prodname_ghe_cloud %} can also choose to allow publicly published sites, privately published sites, both, or neither. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% elsif ghec %}
You can choose to allow organization members to create publicly published sites, privately published sites, both, or neither. Para obtener más información acerca del control de accesos de los sitios de {% data variables.product.prodname_pages %}, consulta la sección "[Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

Si dejas de permitir la publicación de sitios de {% data variables.product.prodname_pages %}, cualquier sitio que ya se haya publicado permanecerá así. Puedes anular la publicación del sitio manualmente. Para obtener más información, consulta la sección "[Anular la publicación de un sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. Under "Pages creation, select or deselect **Public**.

   ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. Debajo de "Creación de páginas", selecciona las visibilidades que quieras permitir y deselecciona aquellas que quieres dejar de permitir.

   ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. Debajo de "Creación de páginas", selecciona y deselecciona **Permitir a los miembros publicar sitios**.

   ![Casilla deseleccionada para la opción "Permitir que los miembros publiquen sitios"](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. Haz clic en **Save ** (guardar).

## Leer más

- "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)"
