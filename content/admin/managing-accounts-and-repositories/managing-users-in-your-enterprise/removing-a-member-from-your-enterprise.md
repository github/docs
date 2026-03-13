---
title: Removing a member from your enterprise
intro: Offboard users from an enterprise by following the recommended approach for your enterprise type.
permissions: Enterprise owners or IdP administrators
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
redirect_from:
  - /admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise
---

The recommended offboarding approach for your enterprise depends on whether you use personal accounts or {% data variables.product.prodname_emus %}. To learn more about the effects of offboarding users, see [AUTOTITLE](/admin/concepts/identity-and-access-management/user-offboarding).

## Removing a member from an enterprise with personal accounts

When you remove a member from your enterprise, the member is removed from all organizations owned by your enterprise and loses privileges granted through the enterprise, such as roles or licenses.

If the enterprise member you're removing is the last owner of an organization owned by your enterprise, you will become an owner of that organization.

>[!TIP] For automated offboarding, you can also remove users with the GraphQL API. See [AUTOTITLE](/graphql/reference/mutations#removeenterprisemember).

{% data reusables.enterprise-accounts.access-enterprise-personal-accounts %}
{% data reusables.enterprise-accounts.people-tab %}
1. To the right of the person you want to remove, select the {% octicon "kebab-horizontal" aria-label="Member settings" %} dropdown menu and click **Remove from enterprise**.

   ![Screenshot of a user in the list of enterprise members. A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/business-accounts/remove-member.png)

1. If your enterprise uses SAML SSO, or if any of your organizations use SAML and SCIM provisioning, **remove the user's access to {% data variables.product.github %} apps on your identity provider**. A user may be assigned access directly or via an IdP group assigned to the app: make sure to remove the user from both.  For organizations with SCIM provisioning enabled, this should trigger a SCIM deprovisioning call, which ensures that the user's associated SAML and SCIM identities are fully removed from the organization.

   This is a good practice for security, and it also helps ensure that users cannot rejoin the organization using the SAML endpoint when SAML is configured at the organization level (see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on#adding-members-to-an-organization-using-saml-sso)).

If the user is still listed as an enterprise member, this may be because the user is a member of a {% data variables.product.prodname_ghe_server %} instance that is linked to your enterprise via {% data variables.product.prodname_github_connect %}. You will need to remove this user from the {% data variables.product.prodname_ghe_server %} settings.

## Suspending a user with {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, including all enterprises on {% data variables.enterprise.data_residency_site %}, you manage user access from your identity provider (IdP).

To offboard a user, you will suspend their account rather than removing them from the enterprise completely.

1. Trigger a deprovisioning call for the user. For more information about the types of deprovisioning and the actions that trigger it for different integrations, see [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/deprovisioning-and-reinstating-users#triggers-of-soft-deprovisioning).
1. Check if the user's organization membership is managed directly or managed by IdP groups. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users).
1. If the user's organization membership is managed directly, remove the user manually from all organizations. See [AUTOTITLE](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization).

## Removing an outside collaborator

In enterprises that use personal accounts, you cannot remove outside collaborators using the enterprise settings. However, an organization owner can remove an outside collaborator from all repositories in an organization. See [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/removing-an-outside-collaborator-from-an-organization-repository).
