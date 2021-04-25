---
title: Renombrar una organización
intro: 'Si tu proyecto o empresa cambió de nombre, puedes actualizar el nombre de tu organización para que coincida.'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name/
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - equipos
---

{% tip %}

**Sugerencia:** Solo los propietarios de la organización pueden renombrar una organización. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

### ¿Qué sucede cuando cambio el nombre de mi organización?

Después de cambiar el nombre de tu organización, el nombre antiguo de tu organización se pone a disposición para quien lo quiera utilizar. Cuando cambias el nombre de tu organización, la mayoría de las referencias a los repositorios bajo el nombre antiguo de tu organización se cambiarán automáticamente al nombre nuevo. Sin embargo, algunos enlaces a tu perfil no se redirigirán automáticamente.

#### Cambios que ocurren automáticamente

- {% data variables.product.prodname_dotcom %} redirige automáticamente las referencias a tus repositorios.  Los enlaces web a los **repositorios** existentes de tu organización seguirán funcionando. Puede tomar algunos minutos para que se complete luego de que inicies el cambio.
- Puedes continuar subiendo tus repositorios locales a la URL de seguimiento del remoto antiguo sin actualizarla. Sin embargo, recomendamos que actualices todas las URL de repositorios remotos existentes después de cambiar el nombre de tu organización. Como el nombre antiguo de tu organización queda disponible para que lo utilice cualquier otra persona después de que lo cambies, el propietario de la organización nuevo puede crear repositorios que remplacen las entradas redirigidas a tu repositorio. Para obtener más información, consulta "[Administrar repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)."
- Las confirmaciones de Git anteriores también se atribuirán según corresponda a los usuarios de tu organización.

#### Cambios que no son automáticos

Después de cambiar el nombre de tu organización:
- Los enlaces a la página de perfil de tu organización anterior, como `https://{% data variables.command_line.backticks %}/previousorgname`, generarán un error 404. Te recomendamos que actualices los enlaces a tu organización desde otros sitios{% if currentVersion == "free-pro-team@latest" %}, tales como tus perfiles de LinkedIn o Twitter{% endif %}.
- Las solicitudes API que utilizan el nombre de la organización antiguo generarán un error 404. Recomendamos que actualices el nombre de la organización antiguo en tus solicitudes API.
- There are no automatic [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) redirects for teams that use the old organization's name.{% if currentVersion == "free-pro-team@latest" %}
- If SAML single sign-on (SSO) is enabled for the organization, you must update the organization name in the application for {% data variables.product.prodname_ghe_cloud %} on your identity provider (IdP). If you don't update the organization name on your IdP, members of the organization will no longer be able to authenticate with your IdP to access the organization's resources. For more information, see "[Connecting your identity provider to your organization](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)."{% endif %}

### Cambiar el nombre de tu organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Cerca de la parte de abajo de la página de parámetros, en "Rename organization" (Renombrar organización), haz clic en **Rename Organization** (Renombrar organización). ![Botón Rename organization (Renombrar organización)](/assets/images/help/settings/settings-rename-organization.png)

### Leer más

* "[¿Por qué mis confirmaciones están vinculadas al usuario incorrecto?](/articles/why-are-my-commits-linked-to-the-wrong-user)"
