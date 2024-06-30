---
title: 'Disabling {% ifversion projects-v2 %}projects{% else %}{% data variables.projects.projects_v1_boards %}{% endif %} in your organization'
intro: 'Organization owners can turn off {% ifversion projects-v2 %}organization-wide {% data variables.projects.projects_v2 %}, organization-wide {% data variables.projects.projects_v1_boards %}, and repository-level {% data variables.projects.projects_v1_boards %}{% else %}organization-wide {% data variables.projects.projects_v1_boards %} and repository {% data variables.projects.projects_v1_boards %}{% endif %} in an organization.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
---
After you disable organization-wide projects, it won’t be possible to create new projects at the organization level, and any existing organization-level projects will become inaccessible at their previous URLs. {% ifversion projects-v2 and projects-v1 %}These settings apply to {% data variables.projects.projects_v2 %} and {% data variables.projects.projects_v1_boards %}.{% endif %}{% ifversion projects-v1 %} {% data variables.projects.projects_v1_boards_caps %} in repositories in the organization are not affected.{% endif %}

{% ifversion projects-v1 %}

After you disable repository-level {% data variables.projects.projects_v1_boards %} in an organization, it won't be possible to create new {% data variables.projects.projects_v1_boards %} in any repositories in the organization, and any existing {% data variables.projects.projects_v1_boards %} in repositories in the organization will become inaccessible at their previous URLs. {% data variables.projects.projects_v1_boards_caps %} at the organization level are not affected.

When {% data variables.projects.projects_v1_boards %} are disabled, you will no longer see {% data variables.projects.projects_v1_board %} information in timelines or [audit logs](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).

{% endif %}

## Disabling {% data variables.projects.projects_v2_and_v1 %} in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "table" aria-label="The table icon" %} Projects**.
1. Decide whether to disable {% data variables.projects.projects_v2_and_v1 %} in your organization. Then, under "Projects":
    * To disable {% data variables.projects.projects_v2_and_v1 %}, deselect **Enable Projects for the organization**.
    * To enable {% data variables.projects.projects_v2_and_v1 %} in the organization, select **Enable Projects for the organization**.
1. Click **Save**.

If you decide to re-enable {% data variables.projects.projects_v2_and_v1 %}, any {% data variables.projects.projects_v2_and_v1 %} that were previously added will be available.

{% ifversion projects-v1 %}

## Managing {% data variables.projects.projects_v1_boards %} in your organization's repositories

You can control whether organization members can create {% data variables.projects.projects_v1_boards %} in repositories in your organization. You can still disable {% data variables.projects.projects_v1_boards %} in individual repositories. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "table" aria-label="The table icon" %} Projects**.
1. Decide whether to allow members to create {% data variables.projects.projects_v1_boards %} in repositories in your organization. Then, under "Projects (classic) only":
    * To enable {% data variables.projects.projects_v1_boards %} in repositories, select **Allow members to enable {% data variables.product.prodname_projects_v1_caps %} for all repositories**.
    * To disable {% data variables.projects.projects_v1_boards %} in repositories, deselect **Allow members to enable {% data variables.product.prodname_projects_v1_caps %} for all repositories**.
1. Click **Save**.

{% endif %}

## Further reading

{% ifversion projects-v2 %}- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"{% endif %}
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)"
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)"
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)"
* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository)"
