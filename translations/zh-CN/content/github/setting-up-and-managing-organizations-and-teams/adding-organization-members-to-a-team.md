---
title: 添加组织成员到团队
intro: '拥有所有者或团队维护员权限的人员可以添加成员到团队。 People with owner permissions can also {% if currentVersion == "free-pro-team@latest" %}invite non-members to join{% else %}add non-members to{% endif %} a team and the organization.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program/
  - /articles/adding-organization-members-to-a-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
6. 在团队成员列表上方，单击 **Add a member（添加成员）**。 ![添加成员按钮](/assets/images/help/teams/add-member-button.png)
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

### 延伸阅读

- "[关于团队](/articles/about-teams)"
- "[管理团队对组织仓库的访问](/articles/managing-team-access-to-an-organization-repository)"
