---
title: 'Managing tasks in a tasklist'
intro: 'You can track issues and pull requests as subtasks in a tasklist. You can also add draft tasks and later convert them into issues.'
allowTitleToDifferFromFilename: true
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Issues
---

{% data reusables.projects.tasklists-release-stage %}

## Adding tasks to a tasklist

You can add draft tasks, issues, and pull requests to a tasklist. Draft tasks are useful for quickly capturing ideas that you can later convert into issues. Unlike issues and pull requests that are referenced from your repositories, draft tasks exist only in your tasklist.

You can add issues and pull requests from any repository you have access to. People who do not have access to the issues and pull requests you add to your tasklist will just see the issue or pull request URL.

1. At the bottom of your tasklist, click **Add item to Tasks**.
  
    ![Screenshot of a tasklist. The "Add item to Tasks" field is highlighted with an orange rectangle.](/assets/images/help/projects-v2/tasklist-omnibar.png)
  
1. Add your draft task, issue, or pull request.

   - To add a draft task, just type your task and press <kbd>Enter</kbd>.
   - To add a recently updated issue, click an issue from the list, or use your arrow keys to select it and then press <kbd>Enter</kbd>.
   - To search for an issue in the current repository, start typing the title of an issue or the issue's number and click on the result, or use your arrow keys to select it and press <kbd>Enter</kbd>.
   - To add an issue directly using its URL, paste the URL of an issue and press <kbd>Enter</kbd>.

## Converting draft tasks to issues in a tasklist

You can convert draft tasks into issues. Issues are created in the same repository as the issue containing the tasklist.

1. Place your cursor over the draft task you want to convert and next to the draft task, click {% octicon "kebab-horizontal" aria-label="tracking block item menu" %}.

   ![Screenshot of a tasklist. To the right of a draft task, the tracking block item menu is outlined in dark orange.](/assets/images/help/projects-v2/tasklist-draft-context-menu.png)

1. In the menu, click **Convert to issue**.

## Setting labels, assignees, and projects from a tasklist

1. Place your cursor over the task you want to make changes to and next to the task, click {% octicon "kebab-horizontal" aria-label="tracking block item menu" %}.

    ![Screenshot of a tasklist. To the right of a task, the tracking block item menu, which is labeled with a horizontal kebab icon, is outlined in dark orange.](/assets/images/help/projects-v2/tasklists-item-context-menu.png)

1. Using the context menu, make your changes.
   - To set labels, select **Set labels**, and then select one or more labels from the menu.
   - To set assignees, select **Set assignees**, and then select one or more people from the menu.
   - To add the issue or pull request to a project, select **Set project**, and then select a project from the menu.

## Dragging tasks to change position and move between tasklists

You can move tasks within a tasklist and move tasks to other tasklists in the same issue.

1. Hover your cursor to the left of the task you want to move until a {% octicon "grabber" aria-hidden="true" %} drag handle appears.
1. Click on the {% octicon "grabber" aria-hidden="true" %} drag handle and drag the task to the new destination.
   - Drag the task to another position in the same tasklist.
   - Drag the task to another tasklist in the same issue.

## Removing tasks from a tasklist

You can remove issues, pull requests, and draft tasks from your tasklist. Issues and pull requests removed from a tasklist are not removed from the repository. Draft tasks are permanently deleted.

1. Place your cursor over the task you want to remove and next to the task, click {% octicon "kebab-horizontal" aria-label="tracking block item menu" %}.

   ![Screenshot of a tasklist. To the right of a task, the tracking block item menu is outlined in dark orange.](/assets/images/help/projects-v2/tasklists-item-context-menu.png)

1. In the menu, click **Remove**.
