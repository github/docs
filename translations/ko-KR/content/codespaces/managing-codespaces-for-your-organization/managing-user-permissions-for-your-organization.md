---
title: Managing user permissions for your organization
intro: You can control which users in your organization can use {% data variables.product.prodname_codespaces %}.
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---

{% data reusables.codespaces.release-stage %}

### About user permissions for {% data variables.product.prodname_codespaces %}

Organization owners can control which users in your organization can create and use codespaces.

To use codespaces in your organization, your users must have at least write access to the repositories where they want to use a codespace. You can enable codespaces for all users in your organization, or only specific users.

By default, a codespace can only access the repository where it was created. If you want codespaces in your organization to be able to access other organization repositories that the codespace creator can access, see "[Managing access and security for {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)."

### Configuring which users in your organization can use {% data variables.product.prodname_codespaces %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select one of the following options:

   * **Disabled** to not allow any organization members to use {% data variables.product.prodname_codespaces %}.
   * **Allow for all users** to allow all your organization members to use {% data variables.product.prodname_codespaces %}.
   * **Selected users** to select specific organization members to use {% data variables.product.prodname_codespaces %}.

   ![Radio buttons for "User permissions"](/assets/images/help/codespaces/organization-user-permission-settings.png)
