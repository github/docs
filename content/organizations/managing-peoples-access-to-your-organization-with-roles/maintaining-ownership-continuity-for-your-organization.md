---
title: Maintaining ownership continuity for your organization
intro: Organizations can have more than one organization owner to avoid lapses in ownership.
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
---

## About maintaining ownership continuity for your organization

{% data reusables.organizations.org-ownership-recommendation %}

Organization owners have full administrative access to the organization. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**Note**: As an organization owner, you can change the role of other organization members and owners. You can't change your own role.

{% endnote %}

{% ifversion enterprise-owner-join-org %}
If your organization is owned by an enterprise account, any enterprise owner can make themselves an owner of your organization. For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."
{% endif %}

## Appointing an organization owner

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. Select the person or people you'd like to promote to owner.

   ![Screenshot of the first two users in a list of organization members. To the left of each member, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/list-of-members-selected-bulk.png)
1. Above the list of members, select the **X members selected...** dropdown menu and click **Change role**.

   ![Screenshot of the list of organization members. Above the list, a dropdown menu, labeled "2 members selected..." is outlined in dark orange.](/assets/images/help/teams/user-bulk-management-options.png)
1. Select a new role for the person or people, then click **Change role**.
