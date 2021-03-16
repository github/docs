---
title: Disabling project boards in a repository
intro: Repository administrators can turn off project boards for a repository if you or your team manages work differently.
redirect_from:
  - /articles/disabling-project-boards-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
When you disable project boards, you will no longer see project board information in timelines or [audit logs](/articles/reviewing-your-security-log/).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Features," unselect the **Projects** checkbox.
  ![Remove Projects checkbox](/assets/images/help/projects/disable-projects-checkbox.png)

After project boards are disabled, existing project boards are inaccessible at their previous URLs. {% data reusables.organizations.disable_project_board_results %}
