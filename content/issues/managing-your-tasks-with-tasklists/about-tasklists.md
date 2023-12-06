---
title: 'About tasklists'
intro: 'You can use tasklists to quickly sketch out projects, divide tasks into subtasks, and track issues and pull requests.'
allowTitleToDifferFromFilename: true
versions:
  feature: projects-v2-tasklists
type: overview
topics:
  - Issues
---

{% note %}

**Notes:**

- Tasklists are in private beta and subject to change. We have currently paused onboarding to the beta. Tasklists build upon the previous iteration of [task lists](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists).
- For the best experience, we recommend adding no more than 50 tasks to a tasklist and no more than 5 tasklists per issue. There is a hard limit of 250 tasks per tasklist and 10 tasklists per issue.

{% endnote %}

## About tasklists and issue hierarchy

You can add a tasklist to an issue to quickly break down larger pieces of work into subtasks. You can sketch out a draft of your plans, in either Markdown or in the UI, and optionally convert those draft tasks into real issues or add existing issues and pull requests to your tasklists.

![Two views of the same issue. In one, the body is being edited to include the Markdown for tasklists. In the other, the body includes rendered tasklists.](/assets/images/help/projects-v2/tasklist-hero.png)

When you add issues and pull requests to a tasklist, the tasklist will show metadata associated with the issue or pull request, including any labels applied, the avatars of people assigned, and the open/close state. When you view the issues and pull requests that have been added to a tasklist, {% data variables.product.product_name %} shows which issues are tracking that subtask.

![Screenshot that shows the header of an issue. The "Tracked by" information in the header is highlighted with an orange outline.](/assets/images/help/projects-v2/tasklist-tracked-by-pill.png)

Tasklists add support for hierarchies of issues on {% data variables.product.product_name %} by creating relationships between your issues. You can create parent and child relationships, you can also create multiple levels of hierarchy that accurately represent your project by breaking down tasks into exactly the amount of detail that you and your team require.

![Diagram showing the relationships built between issues using tasklists. The "Video game" issue has two tasklists. One of the tasks in those tasklists, "3D models," is an issue with its own tasklist.](/assets/images/help/projects-v2/tasklist-diagram.png)

You can create a tasklist using Markdown or using the {% data variables.product.product_name %} UI. Regardless of how you created your tasklist, you can edit it using either Markdown or the UI. For more information, see "[AUTOTITLE](/issues/managing-your-tasks-with-tasklists/creating-a-tasklist)" and "[AUTOTITLE](/issues/managing-your-tasks-with-tasklists/managing-tasks-in-a-tasklist)."

Tasklists also integrate with your projects. {% ifversion projects-v2-tasklists-without-breadcrumbs %}You can{% else %}When you click on an issue in your project, the side-panel opens and displays the issue's place in the hierarchy on a breadcrumb menu, allowing you to navigate through the issues included in your tasklists. You can also{% endif %} add the "Tracks" and "Tracked-by fields" to your project views to quickly see the relationships between your issues. For information, see "[AUTOTITLE](/issues/managing-your-tasks-with-tasklists/using-projects-and-tasklists)."
