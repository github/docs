---
title: Habilitar los Codespaces para tu organización
shortTitle: Habilitar Codespaces
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
- [Habilitar los {% data variables.product.prodname_codespaces %} para los usuarios en tu organización](#enable-codespaces-for-users-in-your-organization). Puedes elegir permitir los {% data variables.product.prodname_codespaces %} para los usuarios seleccionados o únicamente para los usuarios específicos.
- [Configurar un límite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Asegúrate de que tu organización no tenga habilitada una lista de direcciones IP permitidas. Para obtener más información, consulta "[Administrar las direcciones IP permitidas en tu organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

Predeterminadamente, un codespace solo puede acceder al repositorio desde el cual se creó. Si quieres que los codespaces de tu organización puedan acceder a otros repositorios de organización a los que puede acceder el creador de dichos codespaces, consulta la sección "[Administrar el acceso y la seguridad de los {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

## Habilitar los {% data variables.product.prodname_codespaces %} para los usuarios en tu organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Debajo de "Permisos de usuario", selecciona una de las siguientes opciones:

   * **Usuarios selectos** para seleccionar miembros específicos de la organización que puedan utilizar {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos los miembros** para permitir que todos los miembros de tu organización utilicen {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos los miembros y colaboradores externos** para permitir que todos los miembros de tu organización, así como los colaboradores externos, utilicen {% data variables.product.prodname_codespaces %}.

   ![Botones radiales de "Permisos de usuario"](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Nota:** Cuando seleccionas **Permitir para todos los miembros y colaboradores externos**, todos los colaboradores externos que hayan agregado información a repositorios específicos podrán crear y utilizar {% data variables.product.prodname_codespaces %}. Se le facturará a tu organización por todo el uso en el que incurrieron los colaboradores externos. Para obtener más información sobre cómo administrar colaboradores externos, consulta la sección "[Acerca de los colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Haz clic en **Save ** (guardar).

## Inhabilitar los {% data variables.product.prodname_codespaces %} para tu organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Debajo de "Permisos de usuario", selecciona **Inhabilitado**.

## Configurar un límite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obtener más información sobre cómo administrar y cambiar el límite de gastos de tu organización, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
