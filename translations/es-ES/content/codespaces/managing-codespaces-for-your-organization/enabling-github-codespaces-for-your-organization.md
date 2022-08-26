---
title: Enabling GitHub Codespaces for your organization
shortTitle: 'Habilitar el {% data variables.product.prodname_codespaces %}'
intro: 'You can control which users in your organization can use {% data variables.product.prodname_github_codespaces %} at the organization''s expense.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
---

## Acerca de cómo habilitar los {% data variables.product.prodname_github_codespaces %} para tu organización

Organization owners can control which users in your organization can create and use codespaces at the organization's expense.

Only people who can clone a repository can create a codespace for that repository. To allow people to create codespaces for repositories owned by your organization, you must:

- Ensure that users have at least write access to the repositories where they want to use a codespace. Para obtener más información, consulta la sección "[Administrar los equipos y personas con acceso a tu repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".
- Asegúrate de que tu organización no tenga habilitada una lista de direcciones IP permitidas. Para obtener más información, consulta la sección "[Administrar las direcciones IP permitidas para tu organización](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

To allow people to create codespaces for which your organization will be billed, you must:

- [Configurar un límite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [Choose who can create codespaces that are billed to your organization](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %}
{% note %}

**Nota:** Si eres un maestro o docente verificado, debes habilitar {% data variables.product.prodname_codespaces %} desde un {% data variables.product.prodname_classroom %} para utilizar tu beneficio de docente de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta la sección "[Utilizar los Codespaces de GitHub con GitHub Clasroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)".

{% endnote %}
{% endif %}

Predeterminadamente, un codespace solo puede acceder al repositorio desde el cual se creó. If you want codespaces in your organization to be able to access other organization repositories that the codespace creator can access, see "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)."

## Choose who can create codespaces that are billed to your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "Billing," select one of the following options:

   * **Disabled** - Your organization will not be charged for codespace usage. {% data variables.product.prodname_codespaces %} created for your organization's repositories will be billed to the individual users who create them.
   * **Selected members** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by selected members will be billed to the organization.
   * **All members** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by members of your organization will be billed to the organization.
   * **All members and outside collaborators** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by organization members and outside collaborators will be billed to the organization.

   ![Radio buttons for "Billing"](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **Note:** When you select **All members and outside collaborators**,  all outside collaborators who have been added to specific repositories can create and use {% data variables.product.prodname_codespaces %} for those repositories, and your organization will be billed for this usage. Para obtener más información sobre cómo administrar colaboradores externos, consulta la sección "[Acerca de los colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Haz clic en **Save ** (guardar).
1. If you chose **Selected members**, an input box is displayed for you to enter the names of users you want to select.

   ![Input box for selecting users](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Inhabilitar los {% data variables.product.prodname_codespaces %} para tu organización

You can prevent the creation and use of codespaces billable to your organization.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "Billing," select **Disabled**.

## Configurar un límite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obtener más información sobre cómo administrar y cambiar el límite de gastos de tu organización, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
