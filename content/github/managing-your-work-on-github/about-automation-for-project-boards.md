---
title: About automation for project boards
intro: You can configure automatic workflows to keep the status of project board cards in sync with the associated issues and pull requests.
redirect_from:
  - /articles/about-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.project-management.automate-project-board-permissions %}  For more information, see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)."

You can automate actions based on triggering events for project board columns. This eliminates some of the manual tasks in managing a project board. For example, you can configure a "To do" column, where any new issues or pull requests you add to a project board are automatically moved to the configured column. For more information, see "[Configuring automation for project boards](/articles/configuring-automation-for-project-boards)."  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

Project board automation can also help teams develop a shared understanding of a project board's purpose and the team's development process by creating a standard workflow for certain actions.

{% data reusables.project-management.resync-automation %}

### Automation options

| Column preset | Configuration options |
| --- | --- |
| To do | <ul><li>Move all newly added issues here</li><li>Move all newly added pull requests here</li><li>Move all reopened issues here</li><li>Move all reopened pull requests here</li></ul> |
| In progress | <ul><li>Move all newly opened pull requests here</li><li>Move all reopened issues here</li><li>Move all reopened pull requests here</li><li>Move all pull requests that meet the base branch's minimum number of required reviews here</li><li>Move all pull requests that no longer meet the base branch's minimum number of required reviews here</li></ul> |
| Done | <ul><li>Move all closed issues here</li><li>Move all merged pull requests here</li><li>Move all closed, unmerged pull requests here</li></ul> |

### Project progress tracking

You can track the progress on your project board. Cards in the "To do", "In progress", or "Done" columns count toward the overall project progress. {% data reusables.project-management.project-progress-locations %}

For more information, see "[Tracking progress on your project board](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)."

### Further reading
- "[Configuring automation for project boards](/articles/configuring-automation-for-project-boards)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
