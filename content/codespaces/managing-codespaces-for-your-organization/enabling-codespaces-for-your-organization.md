---
title: Enabling Codespaces for your organization
shortTitle: Enabling Codespaces
intro: 'You can control which users in your organization can use {% data variables.product.prodname_codespaces %}.'
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

Organization owners can control which users in your organization can create and use codespaces.

To use codespaces in your organization, you must do the following:

- Ensure that users have [at least write access](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) to the repositories where they want to use a codespace. 
- [Enable {% data variables.product.prodname_codespaces %} for users in your organization](#configuring-which-users-in-your-organization-can-use-codespaces). You can choose allow {% data variables.product.prodname_codespaces %} for selected users or only for specific users.
- [Set a spending limit](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

By default, a codespace can only access the repository from which it was created. If you want codespaces in your organization to be able to access other organization repositories that the codespace creator can access, see "[Managing access and security for {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)."

## Enable {% data variables.product.prodname_codespaces %} for users in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select one of the following options:

   * **Allow for all users** to allow all your organization members to use {% data variables.product.prodname_codespaces %}.
   * **Selected users** to select specific organization members to use {% data variables.product.prodname_codespaces %}.

   ![Radio buttons for "User permissions"](/assets/images/help/codespaces/organization-user-permission-settings.png)

## Disabling {% data variables.product.prodname_codespaces %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select **Disabled**.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)."
