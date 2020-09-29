---
title: Disabling project boards in your organization
intro: Organization owners can turn off organization-wide project boards and repository project boards in an organization.
redirect_from:
  - /articles/disabling-project-boards-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

After you disable organization-wide project boards, it won’t be possible to create new project boards at the organization level, and any existing organization-level project boards will become inaccessible at their previous URLs. Project boards in repositories in the organization are not affected.

After you disable repository project boards in an organization, it won't be possible to create new project boards in any repositories in the organization, and any existing project boards in repositories in the organization will become inaccessible at their previous URLs. Project boards at the organization level are not affected.

When you disable project boards, you will no longer see project board information in timelines or [audit logs](/articles/reviewing-the-audit-log-for-your-organization/).

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Decide whether to disable organization-wide project boards, disable repository project boards in the organization, or both. Then, under "Projects":
    - To disable organization-wide project boards, unselect **Enable projects for the organization**.
    - To disable repository project boards in the organization, unselect **Enable projects for all repositories**. ![Checkboxes to disable projects for an organization or for all of an organization's repositories](/assets/images/help/projects/disable-org-projects-checkbox.png)
5. Click **Save**.

{% data reusables.organizations.disable_project_board_results %}

### 더 읽을거리

- "[About project boards](/articles/about-project-boards)"
- "[Closing a project board](/articles/closing-a-project-board)"
- "[Deleting a project board](/articles/deleting-a-project-board)"
- "[Disabling project boards in a repository](/articles/disabling-project-boards-in-a-repository)"
