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
product: '{% data reusables.copilot.direct-assignment-rollout %}'
---

You can create groups of users in your enterprise with enterprise teams. This allows you to simplify licensing by managing {% data variables.product.prodname_copilot_short %} access with team membership.

**Current limitations:** You can create up to 50 teams for a single enterprise and add up to 500 users to each team.
<!-- If the team size limit changes, also update the reference in "Limits on IdP group sizes" below -->

## 1. Find the enterprise teams page

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. In the left sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Enterprise teams**.

## 2. Create a team

1. Navigate to the enterprise teams page. See [1. Find the enterprise teams page](#1-find-the-enterprise-teams-page).
1. Click **Create Enterprise team**.
1. Choose the team's name, description, and organization access, then click **Create Enterprise team**.

Once you have created a team, you can manage the team's membership and licenses.

## 3. Add users

There are multiple ways to add users to an enterprise team.

* [Adding users manually](#adding-users-manually)
* [Syncing with an IdP group](#syncing-with-an-idp-group) ({% data variables.product.prodname_emus %} only)
* Using the API

Enterprise teams can contain organization members and unaffiliated users.

### Adding users manually

1. Navigate to the enterprise teams page. See [1. Find the enterprise teams page](#1-find-the-enterprise-teams-page).
1. Click the team you want to add users to.
1. Click **Add members**, then search for and select the users you want to add.
1. Click **Add**.

You can remove users from an enterprise team at any time using the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="More member actions" %}** menu next to the user's name in the member list. This action does not remove a user from the enterprise account.

### Syncing with an IdP group

If you use {% data variables.product.prodname_emus %}, you can sync membership of an enterprise team to a group in your identity provider. That way, any changes made to the group in the IdP (such as adding or removing a user) will be synced to the enterprise team via SCIM. For details and requirements, see [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).

1. Navigate to the enterprise teams page. See [1. Find the enterprise teams page](#1-find-the-enterprise-teams-page).
1. Click the team you want to sync.
1. Ensure the team contains no manually assigned users. You can remove users by using the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="More member actions" %}** menu next to the user's name in the member list.
1. Next to the team's name, click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit**.
1. Under "Manage members", click **Identity provider group**.
1. Click **Select group**, then choose the external IdP group to sync to the team. Members from the IdP group will display in the team's member list.
1. Click **Update team**.

#### Limits on IdP group sizes

If an IdP group goes over the team size limit of 500 users, the team will stop being synced.

For example:

* An enterprise team is initially synced with an IdP group of 5 users.
* 500 more users are added to the IdP group. Because the IdP group now has 505 users, the group isn't synced and the enterprise team remains at 5 members.
* 5 users are removed from the IdP group to bring it to 500 users. Syncing resumes and the enterprise team now contains the same 500 users as the IdP group.

## 4. Assign licenses

You can assign {% data variables.product.prodname_copilot %} licenses to an enterprise team. This allows you to manage {% data variables.product.prodname_copilot_short %} access through team membership, independent of organizations. Once you have assigned licenses to a team, users will gain or lose access to {% data variables.product.prodname_copilot_short %} when they are added or removed from the team.

For instructions, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).
