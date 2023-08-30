---
title: Requesting to add or change a parent team
intro: 'If you have maintainer permissions in a team, you can request to nest your team under a parent team in your organization''s hierarchy.'
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-or-change-a-parent-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add or change parent team
---

When you request to add or change your team's parent, a request is sent to the maintainers of the parent team. When a maintainer of the new parent team approves your request, your team is nested as a child team under the parent team in your organization's hierarchy.

If you're an organization owner or you have team maintainer permissions in the child team and the parent team, you can add the parent team without requesting approval or change your team's parent from your team's settings page. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)."

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.teams %}
1. In the list of teams, click the name of the team you'd like to nest under a parent.
{% data reusables.organizations.team_settings %}
1. Under "Parent team", select the **Select a parent team** dropdown menu and click the name of the new parent team.
1. Click **Save changes**.
{% data reusables.repositories.changed-repository-access-permissions %}
1. To send a request to add or change your team's parent, click **Confirm changes**.

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/requesting-to-add-a-child-team)"
