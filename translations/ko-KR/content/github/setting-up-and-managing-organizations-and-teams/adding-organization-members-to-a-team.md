---
title: Adding organization members to a team
intro: 'People with owner or team maintainer permissions can add organization members to teams. People with owner permissions can also {% if currentVersion == "free-pro-team@latest" %}invite non-members to join{% else %}add non-members to{% endif %} a team and the organization.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program/
  - /articles/adding-organization-members-to-a-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
6. Above the list of team members, click **Add a member**. ![Add member button](/assets/images/help/teams/add-member-button.png)
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

### 더 읽을거리

- "[About teams](/articles/about-teams)"
- "[Managing team access to an organization repository](/articles/managing-team-access-to-an-organization-repository)"
