---
title: Configuring SCIM provisioning for Enterprise Managed Users
shortTitle: Configure SCIM provisioning
intro: "You can manage the lifecycle of your enterprise's user accounts on {% data variables.location.product_location %} from your identity provider (IdP) using System for Cross-domain Identity Management (SCIM)."
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
---

## About provisioning for {% data variables.product.prodname_emus %}

{% data reusables.enterprise_user_management.about-scim-provisioning %}

After you configure provisioning for {% data variables.product.prodname_emus %}, your IdP uses SCIM to provision user accounts on {% data variables.location.product_location %} and add the accounts to your enterprise. If you assign a group to the application, your IdP will provision new {% data variables.enterprise.prodname_managed_users %} for all members of the group.

{% ifversion emu-public-scim-schema %}

If you use a partner IdP, you can simplify the configuration of SCIM provisioning by using the partner IdP's application. If you don't use a partner IdP for provisioning, you can implement SCIM using calls to {% data variables.product.company_short %}'s REST API for SCIM, which is in beta and subject to change. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#about-authentication-and-user-provisioning)."

{% endif %}

SCIM manages the lifecycle of user accounts in your enterprise. When you update information associated with a user's identity on your IdP, your IdP will update the user's account on {% data variables.product.prodname_dotcom %}. When you unassign the user from the IdP application for {% data variables.product.prodname_emus %} or deactivate a user's account on your IdP, your IdP will communicate with {% data variables.product.prodname_dotcom %} to invalidate any sessions and disable the member's account. The disabled account's information is maintained and their username is changed to a hash of their original username with the short code appended. If you reassign a user to the IdP application for {% data variables.product.prodname_emus %} or reactivate their account on your IdP, the {% data variables.enterprise.prodname_managed_user %} on {% data variables.product.prodname_dotcom %} will be reactivated, and the username will be restored.

To configure team and organization membership, repository access, and permissions on {% data variables.product.product_name %}, you can use groups on your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

## Prerequisites

- {% data reusables.scim.emu-prerequisite-authentication %}

{%- ifversion emu-public-scim-schema %}
- {% data reusables.scim.emu-understand-types-and-support %}
{%- endif %}

## Creating a {% data variables.product.pat_generic %}

To configure provisioning for your {% data variables.enterprise.prodname_emu_enterprise %}, you need a {% data variables.product.pat_v1 %} with the **admin:enterprise** scope that belongs to the setup user.

{% warning %}

**Warning:** If the token expires or a provisioned user creates the token, SCIM provisioning may unexpectedly stop working. Make sure that you create the token while signed in as the setup user and that the token expiration is set to "No expiration".

{% endwarning %}

1. Sign into {% data variables.product.prodname_dotcom %} as the setup user for your new enterprise with the username **@<em>SHORT-CODE</em>_admin**.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
{% data reusables.user-settings.generate_new_token %}
1. Under **Note**, give your token a descriptive name.
1. Select the **Expiration** dropdown menu, then click **No expiration**.
1. Select the **admin:enterprise** scope.
   ![Screenshot of a list of scopes with checkboxes. The "admin:enterprise" scope, accompanied by the text "Full control of enterprises," is selected and highlighted with an orange outline.](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Click **Generate token**.
1. To copy the token to your clipboard, click {% octicon "copy" aria-label="Copy token" %}.

   ![Screenshot of the "{% data variables.product.pat_generic_caps_plural %}" page. Next to a blurred-out token, an icon of two overlapping squares is outlined in orange.](/assets/images/help/settings/personal-access-tokens.png)
1. To save the token for use later, store the new token securely in a password manager.

## Configuring provisioning for {% data variables.product.prodname_emus %}

After creating your {% data variables.product.pat_generic %} and storing it securely, you can configure provisioning on your IdP. {% ifversion emu-public-scim-schema %} The instructions you should follow differ depending on whether you use a partner IdP's application for both authentication and provisioning.

- [Configuring provisioning if you use a partner IdP's application](#configuring-provisioning-if-you-use-a-partner-idps-application)
- [Configuring provisioning for other identity management systems](#configuring-provisioning-for-other-identity-management-systems)

### Configuring provisioning if you use a partner IdP's application

To use a partner IdP's application both authentication and provisioning, review the partner's instructions for configuring provisioning in the links in the following table. {% else %} For instructions about the configuration of provisioning on your IdP, click a link in the following table.

{% endif %}

{% rowheaders %}

| IdP | SSO method | More information |
|---|---|---|
{%- ifversion oidc-for-emu %}
| Microsoft Entra ID (previously known as Azure AD) | OIDC | [Tutorial: Configure GitHub Enterprise Managed User (OIDC) for automatic user provisioning](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) on Microsoft Learn |
{%- endif %}
| Entra ID | SAML | [Tutorial: Configure GitHub Enterprise Managed User for automatic user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) on Microsoft Learn |
| Okta | SAML | "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)" |
| PingFederate | SAML | [Configure PingFederate for provisioning and SSO](https://docs.pingidentity.com/r/en-us/pingfederate-github-emu-connector/pingfederate_github_connector_configure_pingfederate_for_provisioning_and_sso) and [Managing channels](https://docs.pingidentity.com/r/en-us/pingfederate-112/help_saasmanagementtasklet_saasmanagementstate) in the PingFederate documentation |

{% endrowheaders %}

{% ifversion emu-public-scim-schema %}

Alternatively, if you configured authentication on a partner IdP, but you would like to provision users from a different identity management system, you can have your IdP make calls to {% data variables.product.company_short %}'s REST API endpoints for SCIM provisioning.

### Configuring provisioning for other identity management systems

If you don't use a partner IdP, or if you only use a partner IdP for authentication, you can manage the lifecycle of user accounts using {% data variables.product.company_short %}'s REST API endpoints for SCIM provisioning. These endpoints are in beta and subject to change. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-and-groups-with-scim-using-the-rest-api)."

{% data reusables.emus.sign-in-as-setup-user %}

   {% note %}

   **Note**: {% data reusables.enterprise-accounts.emu-password-reset-session %}

   {% endnote %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "Open SCIM Configuration", select "Enable open SCIM configuration".
1. Manage the lifecycle of your users by making calls to the REST API endpoints for SCIM provisioning. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-and-groups-with-scim-using-the-rest-api)."

{% endif %}

## Assigning users and groups

{% data reusables.enterprise-managed.assigning-users %}

{% data reusables.enterprise-managed.assigning-roles %}

Entra ID does not support provisioning nested groups. For more information, see [How Application Provisioning works in Microsoft Entra ID](https://learn.microsoft.com/entra/identity/app-provisioning/how-provisioning-works#assignment-based-scoping) on Microsoft Learn.
