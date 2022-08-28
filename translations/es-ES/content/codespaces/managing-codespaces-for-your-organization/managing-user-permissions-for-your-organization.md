---
title: Administrar los permisos de usuario para tu organización
intro: 'Puedes controlar qué usuarios de tu organización pueden utilizar {% data variables.product.prodname_codespaces %}.'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---

{% data reusables.codespaces.release-stage %}

### Acerca de los permisos de usuario para {% data variables.product.prodname_codespaces %}

Los propietarios de organización pueden controlar qué usuarios de tu organización pueden crear y utilizar codespaces.

Para utilizar codespaces en tu organización, tus usuarios deben tener por lo menos acceso de escritura en los repositorios en donde quieren utilizarlos. Puedes habilitar los codespaces para todos los usuarios en tu organización o solo para algunos específicos.

Predeterminadamente, un codespace solo puede acceer al repositorio en donde se creó. Si quieres que los codespaces de tu organización puedan acceder a otros repositorios de organización a los que puede acceder el creador de dichos codespaces, consulta la sección "[Administrar el acceso y la seguridad de los {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

### Configurar qué usuarios de tu organización pueden utilizar {% data variables.product.prodname_codespaces %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Debajo de "Permisos de usuario", selecciona una de las siguientes opciones:

   * **Inhabilitado** para no permitir que los miembros de la organización utilicen {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos los usuarios** para permitir que todos los miembros de tu organización utilicen los {% data variables.product.prodname_codespaces %}.
   * **Usuarios selectos** para seleccionar miembros específicos de la organización que puedan utilizar {% data variables.product.prodname_codespaces %}.

   ![Botones radiales de "Permisos de usuario"](/assets/images/help/codespaces/organization-user-permission-settings.png)
