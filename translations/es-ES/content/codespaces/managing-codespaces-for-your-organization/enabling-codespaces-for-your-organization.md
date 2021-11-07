---
title: Habilitar los Codespaces para tu organización
shortTitle: Habilitar los Codespaces
intro: 'Puedes controlar qué usuarios de tu organización pueden utilizar {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---


## Acerca de cómo habilitar los {% data variables.product.prodname_codespaces %} para tu organización

Los propietarios de organización pueden controlar qué usuarios de tu organización pueden crear y utilizar codespaces.

Para utilizar codespaces en tu organización, debes hacer lo siguiente:

- Asegurarte de que los usuarios tengan [por lo menos acceso de escritura](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) en los repositorios en donde quieren utilizar un codespace.
- [Habilitar los {% data variables.product.prodname_codespaces %} para los usuarios en tu organización](#configuring-which-users-in-your-organization-can-use-codespaces). Puedes elegir permitir los {% data variables.product.prodname_codespaces %} para los usuarios seleccionados o únicamente para los usuarios específicos.
- [Configurar un límite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)

Predeterminadamente, un codespace solo puede acceder al repositorio desde el cual se creó. Si quieres que los codespaces de tu organización puedan acceder a otros repositorios de organización a los que puede acceder el creador de dichos codespaces, consulta la sección "[Administrar el acceso y la seguridad de los {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

## Habilitar los {% data variables.product.prodname_codespaces %} para los usuarios en tu organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Debajo de "Permisos de usuario", selecciona una de las siguientes opciones:

   * **Permitir para todos los usuarios** para permitir que todos los miembros de tu organización utilicen los {% data variables.product.prodname_codespaces %}.
   * **Usuarios selectos** para seleccionar miembros específicos de la organización que puedan utilizar {% data variables.product.prodname_codespaces %}.

   ![Botones radiales de "Permisos de usuario"](/assets/images/help/codespaces/organization-user-permission-settings.png)

## Inhabilitar los {% data variables.product.prodname_codespaces %} para tu organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Debajo de "Permisos de usuario", selecciona **Inhabilitado**.

## Configurar un límite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obtener más información sobre cómo administrar y cambiar el límite de gastos de tu organización, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
