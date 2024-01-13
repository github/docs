---
title: Moving a team in your organization’s hierarchy
intro: 'Team maintainers and organization owners can nest a team under a parent team, or change or remove a nested team''s parent.'
redirect_from:
  - /articles/changing-a-team-s-parent
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Move a team
---

Organization owners can change the parent of any team. Team maintainers can change a team's parent if they are maintainers in both the child team and the parent team. Team maintainers without maintainer permissions in the child team can request to add a parent or child team. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/requesting-to-add-or-change-a-parent-team)" and "[AUTOTITLE](/organizations/organizing-members-into-teams/requesting-to-add-a-child-team)."

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Tips:**
- You cannot change a team's parent to a secret team. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."
- You cannot nest a parent team beneath one of its child teams.

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.teams %}
1. In the list of teams, click the name of the team whose parent you'd like to change.
{% data reusables.organizations.team_settings %}
1. Under "Parent team", select the **Select a parent team** dropdown menu and either click a parent team, or, to remove an existing parent, click **Clear selected value**.
1. Click **Update**.
{% data reusables.repositories.changed-repository-access-permissions %}
1. Click **Confirm new parent team**.

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)"
