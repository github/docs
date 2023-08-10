---
title: Managing moderators in your organization
intro: 'You can give an individual or team in your organization the ability to block and limit access, by assigning them to the moderator role.'
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Managing moderators
---

## About organization moderators

Sometimes it's necessary to block a contributor, or to set up interaction limits for your organization, or for individual repositories. As an organization owner, you can perform these tasks, but you may want to delegate these tasks to other members of your organization. You can do this by assigning an organization member, or a team, to the moderator role.

Organization moderators can:
- Block and unblock users from the organization. For more information, see "[AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)."
- Manage organization interaction limits. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)."
- Manage repository interaction limits. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
- Hide comments in all public repositories owned by the organization. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments)."

Making someone an organization moderator does not give them additional abilities other than those listed above. For example, someone who only has read access to a repository will not gain write access by being made a moderator.

You can add up to 10 individual people, or teams, as moderators. If you've already assigned 10 individuals and/or teams as users and you want to add more, you can group people in a moderators team and then use this to replace one or more of the existing assignments. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)."

## Adding an organization moderator

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.sidebar-moderators %}
1. Under **Moderators**, in the search field, search for and select the person or team you want to assign the moderator role. Each person or team you select will appear in a list below the search bar.

## Removing an organization moderator

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.sidebar-moderators %}
1. Next to the person or team you want to remove, click **Remove moderator**.
