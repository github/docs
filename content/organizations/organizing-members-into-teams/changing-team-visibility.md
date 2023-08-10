---
title: Changing team visibility
intro: Team maintainers and organization owners can determine whether a team is *visible* or *secret*.
redirect_from:
  - /articles/changing-team-visibility
  - /github/setting-up-and-managing-organizations-and-teams/changing-team-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.organizations.types-of-team-visibility %}

{% tip %}

**Tip:** If a team has [child or parent teams](/organizations/organizing-members-into-teams/about-teams), you cannot make it a secret team.

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.teams %}
1. Select the team or teams whose visibility you'd like to change.

   ![Screenshot of the first two teams in the list of teams. To the left of each team, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/list-of-teams-selected.png)
1. Above the list of teams, use the drop-down menu and click **Change visibility**.

   {% data reusables.organizations.bulk-edit-team-dropdown %}
1. Select a visibility, then click **Change visibility**.
