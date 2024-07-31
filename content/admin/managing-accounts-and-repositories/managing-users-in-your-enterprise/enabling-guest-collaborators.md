---
title: Enabling guest collaborators
intro: "Learn how to enable guest collaborators in your identity provider and add guest collaborators to your enterprise."
versions:
  feature: guest-collaborators
topics:
  - Enterprise
---

## About guest collaborators

{% data reusables.emus.guest-collaborators-note %}

{% data reusables.emus.about-guest-collaborators %}

## Enabling guest collaborators in your IdP

If you use **Microsoft Entra ID** (previously known as Azure AD) or **Okta** for authentication, you may need update the {% data variables.product.prodname_emus %} application in your IdP.

* "[Enabling guest collaborators with Entra ID](#enabling-guest-collaborators-with-entra-id)"
* "[Enabling guest collaborators with Okta](#enabling-guest-collaborators-with-okta)"

### Enabling guest collaborators with Entra ID

1. Sign into the Microsoft Azure portal.
1. Click **Identity**.
1. Click **Applications**.
1. Click **Enterprise applications**.
1. Click **All applications**.
1. View the details for your {% data variables.product.prodname_emus %} application.
1. In the left sidebar, click **Users and Groups**.
1. View the application registration.

   * If the application registration displays the "Restricted User" or "Guest Collaborator" roles, you're ready to invite guest collaborators to your enterprise.
   * If the application registration does not display the roles, proceed to the next step.
1. In the Azure portal, click **App registrations**.
1. Click **All applications**, then use the search bar to find your application for {% data variables.product.prodname_emus %}.
1. Click your SAML or OIDC application.
1. In the left sidebar, click **Manifest**.
1. Search for the following `id`: `1ebc4a02-e56c-43a6-92a5-02ee09b90824` within the Manifest file:

    * If the `id` is not present, proceed to the next step.
    * If the `id` is present, review the `description` and `displayName` values. If the values are not set to `Guest Collaborator`, you can rename both to be so, and proceed to step 15.

1. Under the `appRoles` object, add the following block:

   ```json
   {
     "allowedMemberTypes": [
       "User"
     ],
     "description": "Guest Collaborator",
     "displayName": "Guest Collaborator",
     "id": "1ebc4a02-e56c-43a6-92a5-02ee09b90824",
     "isEnabled": true,
     "lang": null,
     "origin": "Application",
     "value": null
   },
   ```

   {% note %}

   **Note:** The `id` value is critical. If another `id` value is present, the update will fail.

   {% endnote %}
1. Click **Save**.

### Enabling guest collaborators with Okta

To add the guest collaborator role to your Okta application:

1. Navigate to your application for {% data variables.product.prodname_emus %} on Okta.
1. Click **Provisioning**.
1. Click **Go to Profile Editor**.
1. Find "Roles" at the bottom of the profile editor and click the edit icon.
1. Add a new role.

   * For "Display name", type `Guest Collaborator`.
   * For "Value", type `guest_collaborator`.
1. Click **Save**.

## Adding guest collaborators to your enterprise

When guest collaborators are enabled in your IdP, you can use SCIM to provision users with the `guest_collaborator` role.

* If you use a partner IdP, use the "Roles" attribute in the {% data variables.product.prodname_emus %} application.
* If you use the SCIM endpoints of {% data variables.product.company_short %}'s REST API to provision users, use the `roles` user attribute.

For more information about partner IdPs and other identity management systems, see "[AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems)."

## Giving guest collaborators access to resources

When you have added a guest collaborator to your enterprise, you can add the user to specific organizations or repositories.

### Add the user to an organization

To give the user access to repositories in an organization, add the user as a **member of the organization**.

* As for all members, the base permission policy for the organization determines whether the user has access to internal and private repositories by default. See "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization)."
* Guest collaborators can be members of IdP groups that are connected to {% data variables.product.prodname_dotcom %} teams, and will be added to the organization via SCIM, just like other enterprise members. See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

### Add the user to a repository

To give the user access to specific repositories, add the user to the repositories as a **repository collaborator**.

This gives the user access to the repository without giving them access to other internal or private repositories in the same organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators)."

## Further reading

* [Tutorial: Configure GitHub Enterprise Managed User for automatic user provisioning](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-provisioning-tutorial) in the Entra ID documentation
* [Configure PingFederate for provisioning and SSO](https://docs.pingidentity.com/r/en-us/pingfederate-github-emu-connector/pingfederate_github_connector_configure_pingfederate_for_provisioning_and_sso) in the PingIdentity documentation
* "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-with-okta)"
* "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api)"
