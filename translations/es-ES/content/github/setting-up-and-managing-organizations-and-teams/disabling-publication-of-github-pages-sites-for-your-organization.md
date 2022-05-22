---
title: Inhabilitar la publicación de sitios de GitHub Pages para tu organización
intro: 'Puedes prevenir que los miembros de tu organización publiquen sitios de {% data variables.product.prodname_pages %} desde repositorios de la misma.'
permissions: 'Los propietarios de la organización pueden inhabilitar la publicación de sitios de {% data variables.product.prodname_pages %} desde los repositorios en la misma.'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>2.22'
  github-ae: '*'
---

### Acerca de las restricciones de la publicación de sitios de {% data variables.product.prodname_pages %}

Puedes controlar si los miembros de tu organización pueden publicar sitios web desde repositorios en tu organización utilizando {% data variables.product.prodname_pages %}. Para obtener más información acerca de las {% data variables.product.prodname_pages %}, consulta la sección "[Acerca del {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages)".

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}Si tu administrador de sitio habilitó las Páginas Públicas, {% endif %}Los sitios de {% data variables.product.prodname_pages %} estarán disponibles al público general en la internet, aún si el repositorio del sitio es privado{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} o interno{% endif %}. Para obtener más información, consulta las secciones{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} "[Configurar {% data variables.product.prodname_pages %} para tu empresa](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)" y {% endif %} "[Acerca de la visibilidad del repositorio](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

### Inhabilitar la publicación de sitios de {% data variables.product.prodname_pages %}

Después de que inhabilites la publicación de sitios de {% data variables.product.prodname_pages %}, cualquier sitio publicado permanecerá así. Puedes anular la publicación del sitio manualmente. Para obtener más información, consulta la sección "[Anular la publicación de un sitio de {% data variables.product.prodname_pages %}](/github/working-with-github-pages/unpublishing-a-github-pages-site)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Debajo de "Creación de páginas", deselecciona la opción **Permitir que los miembros publiquen sitios**. ![Casilla deseleccionada para la opción "Permitir que los miembros publiquen sitios"](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)
1. Haz clic en **Save ** (guardar). ![Botón de "Guardar" para la opción "Permitir que los miembros publiquen sitios"](/assets/images/help/organizations/org-settings-pages-disable-publication-save-button.png)
