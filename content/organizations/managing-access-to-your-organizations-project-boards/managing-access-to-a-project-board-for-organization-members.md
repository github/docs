---
title: Managing access to a project board for organization members
intro: 'As an organization owner or project board admin, you can set a default permission level for a project board for all organization members.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

By default, organization members have write access to their organization's project boards unless organization owners or project board admins set different permissions for specific project boards.

### Setting a baseline permission level for all organization members

{% tip %}

**Tip:** You can give an organization member higher permissions to project board. For more information, see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Under "Organization member permission", choose a baseline permission level for all organization members: **Read**, **Write**, **Admin**, or **None**.
![Baseline project board permission options for all organization members](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Click **Save**.

### Further reading

- "[Managing an individual’s access to an organization project board](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Managing team access to an organization project board](/articles/managing-team-access-to-an-organization-project-board)"
- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
