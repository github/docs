---
title: Managing organization members
intro: 'Learn how to give users access to organizations and repositories in your enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Enterprise
shortTitle: Manage organization members
---

## About roles in an organization

To perform any actions on {% data variables.product.github %}, a person must have sufficient access to the relevant account or resource. This access is controlled by permissions. A permission is the ability to perform a specific action, such as changing billing settings for the organization. A role is a set of permissions you can assign to individuals or teams.

In your enterprise's organizations, you can give roles to individuals or teams to allow them to manage the organization's settings or contribute to the organization's repositories.

Organization owners have full administrative access to the organization. To ensure that no one will lose access to a project, we recommend that each organization has at least two owners. As an organization owner, you can change the role of other organization members and owners. You can't change your own role.

## Types of organization roles

Every user you add to an organization has a **membership type** (owner, member, or billing manager) which determines the user's base set of permissions in the organization. For example:

 * An organization **owner** can access all organization settings.
 * An organization **member** can create repositories but not change any organization settings.

In addition to the membership type, you can assign users and teams additional **roles** which give users more permissions in the organization and its repositories.

Depending on the level of control you need, you can grant users:

* A **pre-defined role** that {% data variables.product.company_short %} provides, which can include access to organization settings and blanket access to repositories. For example: "All-repository write."
* A **custom role** where you define your own set of organization and repository permissions.

For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) and [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles).

## Adding users to organizations

How you add users to organizations depends on whether you are using {% data variables.product.prodname_emus %}.

* If you're **not** using {% data variables.product.prodname_emus %}:
  * You will send an invite to users' personal accounts, asking them to join the organization. See [AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
  * As an alternative, if the organization uses SAML SSO, you can manage membership from your SSO provider using SCIM. See [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).
* If you **are** using {% data variables.product.prodname_emus %}:
  * First, you will add users to the enterprise from your identity provider using SCIM.
  * Then, you can either add users to organizations directly, or link identity provider (IdP) groups to teams within organizations, which will automatically add users to organizations. See [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).

Once you have added a user to the organization, you can grant them a specific role.

>[!TIP] You can also add users directly to repositories in an organization without giving them organization membership. This is called the "outside collaborator" or "repository collaborator" role, depending on whether you use {% data variables.product.prodname_emus %}. See [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization).

## Next steps

Next, learn best practices for managing your organizations. See [AUTOTITLE](/enterprise-onboarding/setting-up-organizations-and-teams/managing-your-organizations).
