---
title: Requesting to add a child team
intro: 'If you have maintainer permissions in a team, you can request to nest an existing team under your team in your organization’s hierarchy.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a child team
---

When you request to add a team as a child, a request is sent to the maintainers of the child team. Once a maintainer of the child team approves your request, the child team is nested under the parent team in your organization's hierarchy.

If you're an organization owner or you have team maintainer permissions in both the child team and the parent team, you can add the child team without requesting approval or change the child team's parent from the child team's settings page. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)."

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.teams %}
1. In the list of teams, click the name of the team where you'd like to add the child team.
1. At the top of the team page, click {% octicon "people" aria-hidden="true" %} **Teams**.

   ![Screenshot of the header of a team's page. A tab, labeled with a people icon and "Teams", is outlined in dark orange.](/assets/images/help/teams/team-teams-tab.png)
1. Click **Add a team**.
1. Type the name of the team you'd like to add as a child team, and click the team in the results.
{% data reusables.repositories.changed-repository-access-permissions %}
1. To send a request to add the child team, click **Confirm changes**.

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/requesting-to-add-or-change-a-parent-team)"
