---
title: 'About automation for {% data variables.product.prodname_projects_v1 %}'
intro: 'You can configure automatic workflows to keep the status of {% data variables.projects.projects_v1_board %} cards in sync with the associated issues and pull requests.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}  For more information, see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)."

You can automate actions based on triggering events for {% data variables.projects.projects_v1_board %} columns. This eliminates some of the manual tasks in managing a {% data variables.projects.projects_v1_board %}. For example, you can configure a "To do" column, where any new issues or pull requests you add to a {% data variables.projects.projects_v1_board %} are automatically moved to the configured column. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/configuring-automation-for-project-boards)."  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %} automation can also help teams develop a shared understanding of a {% data variables.projects.projects_v1_board %}'s purpose and the team's development process by creating a standard workflow for certain actions.

{% data reusables.project-management.resync-automation %}

## Automation options

| Column preset | Configuration options |
| --- | --- |
| To do | <ul><li>Move all newly added issues here</li><li>Move all newly added pull requests here</li><li>Move all reopened issues here</li><li>Move all reopened pull requests here</li></ul> |
| In progress | <ul><li>Move all newly opened pull requests here</li><li>Move all reopened issues here</li><li>Move all reopened pull requests here</li><li>Move all pull requests that meet the base branch's minimum number of required reviews here</li><li>Move all pull requests that no longer meet the base branch's minimum number of required reviews here</li></ul> |
| Done | <ul><li>Move all closed issues here</li><li>Move all merged pull requests here</li><li>Move all closed, unmerged pull requests here</li></ul> |

## Project progress tracking

You can track the progress on your {% data variables.projects.projects_v1_board %}. Cards in the "To do", "In progress", or "Done" columns count toward the overall project progress. {% data reusables.project-management.project-progress-locations %}

For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/tracking-progress-on-your-project-board)."

## Further reading

- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/configuring-automation-for-project-boards)"{% ifversion fpt or ghec %}
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/copying-a-project-board)"{% endif %}
