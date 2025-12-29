When users attempt to authenticate with your SAML identity provider (IdP) to access a {% data variables.product.github %} organization or enterprise for the first time, they may encounter the following error message.

> Your GitHub user account [GitHub username] is currently unlinked. However, you are attempting to authenticate with your Identity Provider using [IdP user account] SAML identity which is already linked to a different GitHub user account in the [organization/enterprise]. Please reach out to one of your GitHub [organization/enterprise] owners for assistance.

If the IdP is Entra ID, the error message will include the `User Object ID` of the linked identity in Entra ID, which {% data variables.product.github %} refers to as the `External ID`.

This error message occurs because an external identity can only be linked to a single {% data variables.product.github %} user account within an organization or enterprise.

### Identifying the user with a conflicting identity

When users contact you with this error, you can run through the following steps to identify the conflicting accounts.

1. Use the GitHub GraphQL API to determine which user is linked to the conflicting external identity.
   * If SAML is configured at the GitHub **organization** level: an organization owner must query the existing external identities at the organization level and filter them by the SAML `NameID` of the IdP account that the user is authenticating with when this error occurs. See the [org-saml-identities-filtered-by-nameid-username.graphql](https://github.com/github/platform-samples/blob/master/graphql/queries/org-saml-identities-filtered-by-nameid-username.graphql) sample in the `platform-samples` repository.
   * If SAML is configured at the GitHub **enterprise** level: an enterprise owner must query the existing external identities at the enterprise level and filter them by the SAML `NameID` of the IdP account that the user is authenticating with when this error occurs. See the [enterprise-saml-identities-filtered-by-nameid.graphql](https://github.com/github/platform-samples/blob/master/graphql/queries/enterprise-saml-identities-filtered-by-nameid.graphql) sample in the `platform-samples` repository.
1. If you identified a GitHub user associated with the conflicting external identity, to confirm if the user is still active in the enterprise and any organizations within it, an enterprise owner can follow the steps in [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members).

### Resolving the conflict

When you have followed the steps to identify conflicting accounts, there are various resolution options depending on your findings. If you encounter issues when attempting to follow these steps or have questions, you can open a GitHub support ticket using the {% ifversion ghes %}{% data variables.contact.enterprise_portal %}{% else %}{% data variables.contact.contact_support_portal %}{% endif %}.

* [Conflicting GitHub user no longer needs access](#conflicting-github-user-no-longer-needs-access)
* [Conflicting GitHub user still needs access](#conflicting-github-user-still-needs-access)
* [No conflicting GitHub user found](#no-conflicting-github-user-found)

#### Conflicting GitHub user no longer needs access

If there is a GitHub user account associated with the conflicting external identity that **no longer needs access** to the GitHub organization or enterprise, remove them as a member. If the user is removed properly, this should also remove their linked SAML identity, and linked SCIM identity if this exists at the organization level.
* If you **use SCIM provisioning** to manage organization membership, you must deprovision the user from your IdP via SCIM, rather than following the steps on GitHub. Otherwise, the user's linked SAML and SCIM identity will remain in the organization, which may continue to cause the error.
* If **don't use SCIM provisioning** to manage organization membership, see [AUTOTITLE](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization) or [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise). Make sure to also remove the user's access from the GitHub app for the organization or enterprise in your IdP.

To confirm that a SAML or SCIM identity has been successfully removed from a GitHub organization for a user, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization#auditing-organization-members-on-github).

#### Conflicting GitHub user still needs access

If there is a GitHub user account associated with the conflicting external identity and this user **still needs access** to the organization or enterprise, you will need to either **change the linked identity** for the user account or have the user who is receiving the error **authenticate with a different IdP identity**.
* If you **use SCIM provisioning** to manage membership of an organization and you need to change the external identity that is linked to the member's GitHub account, deprovision then reprovision the user from your IdP (for example, unassign and reassign the user to the app).
  * When the IdP user is deprovisioned, their GitHub account and linked SAML/SCIM identity will be removed from the GitHub organization.
  * When the IdP user is reprovisioned to the GitHub organization, a new pending organization invitation and new unlinked SCIM identity will be created. This will allow the user to sign in with this GitHub user account, authenticate via SAML, and link the new IdP identity to their account. These steps will help ensure that both the new SAML and SCIM identity are properly linked to the GitHub user account in the organization.
* If you **don't use SCIM provisioning** to manage organization membership, or if SAML is configured at the enterprise level, you can revoke the linked external identity for the user by following the steps in one of the following articles:
  * [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)
  * [AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)

#### No conflicting GitHub user found

If there is no GitHub user account associated with the conflicting external identity, you can revoke the external identity.

* If you **use SCIM provisioning** to manage membership of the organization, remove the stale, unlinked identity from your IdP (for example, unassign the user from the IdP app).
  * If the IdP does not send the appropriate SCIM API call to GitHub, the identity will remain in the organization, which may continue to cause the error.
  * To confirm that a SAML or SCIM identity has been successfully removed from a GitHub organization for a user, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization#auditing-organization-members-on-github).
* If you **don't use SCIM provisioning** to manage membership of the organization, to revoke the linked external identity, navigate to one of the following URLs below to revoke the external identity. Replace `USERNAME` with the GitHub username of the user who cannot sign in, and `ORGANIZATION` or `ENTERPRISE` with the appropriate value.
  * `https://github.com/orgs/ORGANIZATION/people/USERNAME/sso`
  * `https://github.com/enterprises/ENTERPRISE/people/USERNAME/sso`
