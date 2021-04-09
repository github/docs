---
title: Moving a team in your organization’s hierarchy
intro: 'Team maintainers and organization owners can nest a team under a parent team, or change or remove a nested team''s parent.'
redirect_from:
  - /articles/changing-a-team-s-parent/
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

Organization owners can change the parent of any team. Team maintainers can change a team's parent if they are maintainers in both the child team and the parent team. Team maintainers without maintainer permissions in the child team can request to add a parent or child team. For more information, see "[Requesting to add or change a parent team](/articles/requesting-to-add-or-change-a-parent-team)" and "[Requesting to add a child team](/articles/requesting-to-add-a-child-team)."

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**팁:**
- You cannot change a team's parent to a secret team. For more information, see "[About teams](/articles/about-teams)."
- You cannot nest a parent team beneath one of its child teams.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.teams %}
4. In the list of teams, click the name of the team whose parent you'd like to change. ![List of the organization's teams](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. Use the drop-down menu to choose a parent team, or to remove an existing parent, select **Clear selected value**. ![Drop-down menu listing the organization's teams](/assets/images/help/teams/choose-parent-team.png)
7. Click **Update**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Click **Confirm new parent team**. ![Modal box with information about the changes in repository access permissions](/assets/images/help/teams/confirm-new-parent-team.png)

### 더 읽을거리

- "[About teams](/articles/about-teams)"
