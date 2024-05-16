---
title: Enabling guest collaborators
intro: "You can use the role of guest collaborator to grant limited access to vendors and contractors in your enterprise."
versions:
  feature: guest-collaborators
topics:
  - Enterprise
---

## About guest collaborators

{% data reusables.emus.guest-collaborators-note %}

If your enterprise uses {% data variables.product.prodname_emus %}, you can use the role of guest collaborator to grant limited access to vendors and contractors. For more information, see "[AUTOTITLE](/admin/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#guest-collaborators)."

All repository access for organization members, including guest collaborators, is governed by the base permission policy for the organization. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization)."

If you use Microsoft Entra ID (previously known as Azure AD) or Okta for SAML authentication, or if you use Entra ID for OIDC authentication, you may need to update your IdP application to use guest collaborators.

## Enabling guest collaborators with Entra ID

1. Sign into the Microsoft Azure portal.
1. Click **Identity**.
1. Click **Applications**.
1. Click **Enterprise applications**.
1. Click **All applications**.
1. View the details for your {% data variables.product.prodname_emus %} application
1. In the left sidebar, click **Users and Groups**.
1. View the application registration.

   - If the application registration displays the "Restricted User" or "Guest Collaborator" roles, you're ready to invite guest collaborators to your enterprise.
   - If the application registration does not display the roles, proceed to the next step.
1. In the Azure portal, click **App registrations**.
1. Click **All applications**, then use the search bar to find your application for {% data variables.product.prodname_emus %}.
1. Click your SAML or OIDC application.
1. In the left sidebar, click **Manifest**.
1. Search for the following `id`: `1ebc4a02-e56c-43a6-92a5-02ee09b90824` within the Manifest file:

    - If the `id` is not present, proceed to the next step.
    - If the `id` is present, review the `description` and `displayName` values. If the values are not set to `Guest Collaborator`, you can rename both to be so, and proceed to step 15.

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

## Enabling guest collaborators with Okta

To add the guest collaborator role to your Okta application:

1. Navigate to your application for {% data variables.product.prodname_emus %} on Okta.
1. Click **Provisioning**.
1. Click **Go to Profile Editor**.
1. Find "Roles" at the bottom of the profile editor and click the edit icon.
1. Add a new role.

   - For "Display name", type `Guest Collaborator`.
   - For "Value", type `guest_collaborator`.
1. Click **Save**.

## Enabling guest collaborators with PingFederate

For more information about adding guest collaborators using PingFederate, see "[Configure PingFederate for provisioning and SSO](https://docs.pingidentity.com/r/en-us/pingfederate-github-emu-connector/pingfederate_github_connector_configure_pingfederate_for_provisioning_and_sso)."

## Enabling guest collaborators with the GitHub REST API

For more information about adding guest collaborators with SCIM using GitHub's REST API, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api#user-and-group-attributes)."

## Adding guest collaborators to your enterprise

After you enable guest collaborators, you can add guest collaborators to your enterprise as you would any other user. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users#assigning-users-and-groups)."

{% data reusables.emus.giving-access-to-guest-collaborators %}
