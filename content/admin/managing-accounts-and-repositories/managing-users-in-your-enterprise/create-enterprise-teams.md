---
title: Creating enterprise teams
intro: 'Organize users into teams to simplify license management.'
versions:
  feature: enterprise-teams
type: how_to
topics:
  - Enterprise
  - User account
shortTitle: Create enterprise teams
permissions: Enterprise owners
redirect_from:
  - /admin/user-management/managing-users-in-your-enterprise/managing-organization-members-in-your-enterprise
  - /admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-organization-members-in-your-enterprise
---

To simplify administration at scale, you can create enterprise teams. {% data reusables.enterprise.enterprise-teams-can %}

Adding a user to a team grants them the privileges associated with the team. Removing a user from a team removes those privileges, but does not remove the user from the enterprise account.

{% data reusables.enterprise.enterprise-teams-limits %}
<!-- If the team size limit changes, also update the reference in "Limits on IdP group sizes" below -->

{% data reusables.enterprise-onboarding.create-enterprise-teams %}

## 4. Assign licenses

You can assign {% data variables.product.prodname_copilot %} licenses to an enterprise team. This allows you to manage {% data variables.product.prodname_copilot_short %} access through team membership, independent of organizations. Once you have assigned licenses to a team, users will gain or lose access to {% data variables.product.prodname_copilot_short %} when they are added or removed from the team.

For instructions, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).

## 5. Assign roles

You can assign custom enterprise roles and certain predefined roles to enterprise teams. This allows you to delegate administrative duties to specific teams or provide non-administrators with permissions that will help them work independently. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/assign-roles).
