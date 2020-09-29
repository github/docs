---
title: Requesting to add a child team
intro: 'If you have maintainer permissions in a team, you can request to nest an existing team under your team in your organization’s hierarchy.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

When you request to add a team as a child, a request is sent to the maintainers of the child team. Once a maintainer of the child team approves your request, the child team is nested under the parent team in your organization's hierarchy.

If you're an organization owner or you have team maintainer permissions in both the child team and the parent team, you can add the child team without requesting approval or change the child team's parent from the child team's settings page. For more information, see "[Moving a team in your organization's hierarchy](/articles/moving-a-team-in-your-organization-s-hierarchy)."

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.teams %}
4. In the list of teams, click the name of the team where you'd like to add the child team. ![List of the organization's teams](/assets/images/help/teams/click-team-name.png)
5. At the top of the team page, click {% octicon "people" aria-label="The people icon" %} **Teams**. ![Teams tab on a team page](/assets/images/help/teams/team-teams-tab.png)
6. Click **Add a team**. ![Add a team button on a team page](/assets/images/help/teams/add-a-team.png)
7. Type the name of the team you'd like to add as a child team, and select it from the drop-down list. ![Text box to type and drop-down menu to select the name of the child team](/assets/images/help/teams/type-child-team-name.png)
{% data reusables.repositories.changed-repository-access-permissions %}
9. Click **Confirm changes** to send a request to add the child team. ![Modal box with information about the changes in repository access permissions](/assets/images/help/teams/confirm-new-parent-team.png)

### 더 읽을거리

- "[About teams](/articles/about-teams)"
- "[Moving a team in your organization’s hierarchy](/articles/moving-a-team-in-your-organization-s-hierarchy)"
- "[Requesting to add or change a parent team](/articles/requesting-to-add-or-change-a-parent-team)"
