---
title: Enabling Codespaces for your organization
shortTitle: Enable Codespaces
intro: 'You can control which users in your organization can use {% data variables.product.prodname_codespaces %}.'
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


## About enabling {% data variables.product.prodname_codespaces %} for your organization

Organization owners can control which users in your organization can create and use codespaces.

To use codespaces in your organization, you must do the following:

- Ensure that users have [at least write access](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) to the repositories where they want to use a codespace. 
- [Enable {% data variables.product.prodname_codespaces %} for users in your organization](#enable-codespaces-for-users-in-your-organization). You can choose to allow {% data variables.product.prodname_codespaces %} for selected users or only for specific users.
- [Set a spending limit](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Ensure that your organization does not have an IP address allow list enabled. For more information, see "[Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

By default, a codespace can only access the repository from which it was created. If you want codespaces in your organization to be able to access other organization repositories that the codespace creator can access, see "[Managing access and security for {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)."

## Enable {% data variables.product.prodname_codespaces %} for users in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select one of the following options:

   * **Selected users** to select specific organization members to use {% data variables.product.prodname_codespaces %}.
   * **Allow for all members** to allow all your organization members to use {% data variables.product.prodname_codespaces %}.
   * **Allow for all members and outside collaborators** to allow all your organization members as well as outside collaborators to use {% data variables.product.prodname_codespaces %}.

   ![Radio buttons for "User permissions"](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Note:** When you select **Allow for all members and outside collaborators**,  all outside collaborators who have been added to specific repositories can create and use {% data variables.product.prodname_codespaces %}. Your organization will be billed for all usage incurred by outside collaborators. For more information on managing outside collaborators, see "[About outside collaborators](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)."

   {% endnote %}

1. Click **Save**.

## Disabling {% data variables.product.prodname_codespaces %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select **Disabled**.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)."
