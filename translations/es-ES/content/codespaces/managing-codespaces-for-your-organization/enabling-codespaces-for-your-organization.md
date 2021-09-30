---
title: Enabling Codespaces for your organization
shortTitle: Enabling Codespaces
intro: 'Puedes controlar qué usuarios de tu organización pueden utilizar {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---


## About enabling {% data variables.product.prodname_codespaces %} for your organization

Los propietarios de organización pueden controlar qué usuarios de tu organización pueden crear y utilizar codespaces.

To use codespaces in your organization, you must do the following:

- Ensure that users have [at least write access](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) to the repositories where they want to use a codespace.
- [Enable {% data variables.product.prodname_codespaces %} for users in your organization](#configuring-which-users-in-your-organization-can-use-codespaces). You can choose allow {% data variables.product.prodname_codespaces %} for selected users or only for specific users.
- [Set a spending limit](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)

By default, a codespace can only access the repository from which it was created. Si quieres que los codespaces de tu organización puedan acceder a otros repositorios de organización a los que puede acceder el creador de dichos codespaces, consulta la sección "[Administrar el acceso y la seguridad de los {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

## Enable {% data variables.product.prodname_codespaces %} for users in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Debajo de "Permisos de usuario", selecciona una de las siguientes opciones:

   * **Permitir para todos los usuarios** para permitir que todos los miembros de tu organización utilicen los {% data variables.product.prodname_codespaces %}.
   * **Usuarios selectos** para seleccionar miembros específicos de la organización que puedan utilizar {% data variables.product.prodname_codespaces %}.

   ![Botones radiales de "Permisos de usuario"](/assets/images/help/codespaces/organization-user-permission-settings.png)

## Disabling {% data variables.product.prodname_codespaces %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select **Disabled**.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obtener más información sobre cómo administrar y cambiar el límite de gastos de tu organización, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
