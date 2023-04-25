---
title: 'Disabling {% ifversion projects-v2 %}projects{% else %}project boards{% endif %} in your organization'
intro: 'Organization owners can turn off {% ifversion projects-v2 %}organization-wide {% data variables.projects.projects_v2 %}, organization-wide {% data variables.projects.projects_v1_boards %}, and repository-level {% data variables.projects.projects_v1_boards %}{% else %}organization-wide project boards and repository project boards{% endif %} in an organization.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
---
After you disable organization-wide project boards, it won’t be possible to create new project boards at the organization level, and any existing organization-level project boards will become inaccessible at their previous URLs. Project boards in repositories in the organization are not affected. {% ifversion projects-v2 %}These settings apply to {% data variables.projects.projects_v2 %} and {% data variables.projects.projects_v1_boards %}.{% endif %}

After you disable repository project boards in an organization, it won't be possible to create new project boards in any repositories in the organization, and any existing project boards in repositories in the organization will become inaccessible at their previous URLs. Project boards at the organization level are not affected.


When you disable project boards, you will no longer see project board information in timelines or [audit logs](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "table" aria-label="The table icon" %} Projects**.
{% endif %}
1. Decide whether to disable organization-wide project boards, disable repository project boards in the organization, or both. Then, under "Projects":
    - To disable organization-wide project boards, unselect **Enable projects for the organization**.
    - To disable repository project boards in the organization, unselect **Enable projects for all repositories**.
  ![Checkboxes to disable projects for an organization or for all of an organization's repositories](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. Click **Save**.

{% data reusables.organizations.disable_project_board_results %}

## Further reading

{% ifversion projects-v2 %}- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"{% endif %}
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)"
- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository)"
