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
  - Organizations
  - Teams
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
- No hay redireccionamientos automáticos de [@mención](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) para los equipos que utilizan el nombre antiguo de la organización.{% if currentVersion == "free-pro-team@latest" %}
- Si se habilita el inicio de sesión único (SSO) para la organización, debes actualizar el nombre de la misma en la aplicación para {% data variables.product.prodname_ghe_cloud %} en tu proveedor de identidad (IdP). Si no actualizas el nombre de organización en tu IdP, los miembros de esta ya no podrán autenticarse con tu IdP para acceder a los recursos de la organización. Para obtener más información, consulta la sección "[Conectar a tu proveedor de identidad con tu organización](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)."{% endif %}

### Cambiar el nombre de tu organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Cerca de la parte de abajo de la página de parámetros, en "Rename organization" (Renombrar organización), haz clic en **Rename Organization** (Renombrar organización). ![Botón Rename organization (Renombrar organización)](/assets/images/help/settings/settings-rename-organization.png)

### Leer más

* "[¿Por qué mis confirmaciones están vinculadas al usuario incorrecto?](/articles/why-are-my-commits-linked-to-the-wrong-user)"
