---
title: Best practices for managing projects (beta)
intro: 'Learn tips for managing your projects on {% data variables.product.company_short %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: overview
topics:
  - Projects
  - Issues
  - Project management
---

{% data reusables.projects.projects-beta %}

You can use projects to manage your work on {% data variables.product.company_short %}, where your issues and pull requests live. Read on for tips to manage your projects efficiently and effectively. For more information about projects, see "[About projects](/issues/trying-out-the-new-projects-experience/about-projects)."

## Break down large issues into smaller issues

Breaking a large issue into smaller issues makes the work more manageable and enables team members to work in parallel. It also leads to smaller pull requests, which are easier to review.

To track how smaller issues fit into the larger goal, use task lists, milestones, or labels. For more information, see "[About task lists](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)", "[About milestones](/issues/using-labels-and-milestones-to-track-work/about-milestones)", and "[Managing labels](/issues/using-labels-and-milestones-to-track-work/managing-labels)."

## Communicate

Issues and pull requests include built-in features to let you easily communicate with your collaborators. Use @mentions to alert a person or entire team about a comment. Assign collaborators to issues to communicate responsibility. Link to related issues or pull requests to communicate how they are connected.

## Use views

Use project views to look at your project from different angles.

For example:

- Filter by status to view all un-started items
- Group by a custom priority field to monitor the volume of high priority items
- Sort by a custom date field to view the items with the earliest target ship date

For more information, see "[Customizing your project views](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)."

## Have a single source of truth

To prevent information from getting out of sync, maintain a single source of truth. For example, track a target ship date in a single location instead of spread across multiple fields. Then, if the target ship date shifts, you only need to update the date in one location.

{% data variables.product.company_short %} projects automatically stay up to date with {% data variables.product.company_short %} data, such as assignees, milestones, and labels. When one of these fields changes in an issue or pull request, the change is automatically reflected in your project.

## Use automation

Automating tasks lets you spend less time on busy work and more time on the project itself. The less you need to remember to do manually, the more likely your project will stay up to date. {% data variables.product.prodname_actions %} and the GraphQL API enable you to automate routine project management tasks. For example, to keep track of pull requests awaiting review, you can create a workflow that adds a pull request to a project and sets the status to "needs review"; this process can be automatically triggered when a pull request is marked as "ready for review".

- For an example workflow, see "[Automating projects](/issues/trying-out-the-new-projects-experience/automating-projects)." 
- For more information about the API, see "[Using the API to manage projects](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)."
- For more information about {% data variables.product.prodname_actions %}, see ["{% data variables.product.prodname_actions %}](/actions)."
