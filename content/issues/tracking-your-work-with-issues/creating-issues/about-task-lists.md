---
title: About task lists
intro: You can use task lists to break the work for an issue or pull request into smaller tasks, then track the full set of work to completion.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
---

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Note:** Improved task lists are currently in beta and subject to change.

{% endnote %}
{% endif %}

### About task lists

A task list is a set of tasks that each render on a separate line with a clickable checkbox. You can select or deselect the checkboxes to mark the tasks as complete or incomplete. 

You can use Markdown to create a task list in any comment on {% data variables.product.product_name %}. {% if currentVersion == "free-pro-team@latest" %}If you reference an issue, pull request, or disussion in a task list, the reference will unfurl to show the title and state.{% endif %} 

{% if currentVersion != "free-pro-team@latest" %} 
You can view task list summary information in issue and pull request lists, when the task list is in the initial comment.
{% else %}

### About issue task lists

If you add a task list to the body of an issue, the list has added functionality.

- To help you track your team's work on an issue, the progress of an issue's task list appears in various places on {% data variables.product.product_name %}, such as a repository's list of issues.
- If a task references another issue and someone closes that issue, the task's checkbox will automatically be marked as complete. 
- If a task requires further tracking or discussion, you can can convert the task to an issue by hovering over the task and clicking {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. To add more details before creating the issue, you can use keyboard shortcuts to open the new issue form. For more information, see "[Keyboard shortcuts](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests)."

![Rendered task list](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## Creating task lists

{% data reusables.repositories.task-list-markdown %}

## Reordering tasks

You can reorder the items in a task list by clicking to the left of a task's checkbox, dragging the task to a new location, and dropping the task. You can reorder tasks across different lists in the same comment, but you can not reorder tasks across different comments.

![Reordered task list](/assets/images/help/writing/task-list-reordered.gif)

## Further reading

* "[Basic writing and formatting syntax](/articles/basic-writing-and-formatting-syntax)"
