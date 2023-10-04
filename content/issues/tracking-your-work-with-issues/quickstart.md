---
title: Quickstart for GitHub Issues
intro: 'Follow this brief interactive guide to learn about {% data variables.product.prodname_github_issues %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Issues
  - Project management
---

## Introduction

This guide demonstrates how to use {% data variables.product.prodname_github_issues %} to plan and track a piece of work. In this guide, you will create a new issue and add a task list to track sub-tasks. You'll also learn how to add labels, milestones, assignees, and projects to communicate metadata about your issue.

## Prerequisites

To create an issue, you need a repository. You can use an existing repository that you have write access to, or you can create a new repository. {% data reusables.enterprise-accounts.emu-permission-repo %} The repository must have issues enabled. For more information about creating a repository, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)." For more information about enabling issues if they are disabled in your repository, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-issues)."

## Opening a blank issue

First, create an issue. There are multiple ways to create an issue; you can choose the most convenient method for your workflow. This example will use the {% data variables.product.prodname_dotcom %} UI. For more information about other ways to create an issue, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. In this example, we will start with a blank issue. Your repository may use issue templates{% ifversion fpt or ghec %} and issue forms{% endif %} to encourage contributors to provide specific information. If your repository uses issue templates, click **Open a blank issue**.

## Filling in information

Give your issue a descriptive title. The title should convey at a glance what the issue is about.

Add a description that explains the purpose of the issue, including any details that might help resolve the issue. For example, if this is a bug report, describe the steps to reproduce the bug, the expected result, and the actual result.

You can use markdown to add formatting, links, emojis, and more. For more information, see "[AUTOTITLE](/get-started/writing-on-github)."

![Screenshot of the new issue form, with a title and body filled in.](/assets/images/help/issues/issue-title-body.png)

{% ifversion task-lists-v1 %}

## Adding a task list

It can be helpful to break large issues into smaller tasks, or to track multiple related issues in a single larger issue. Add a task list to your issue by prefacing list items with `[ ]`. Reference existing issues by issue number or URL. You can use plain text to track tasks that don't have a corresponding issue and convert them to issues later. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."

![Screenshot of the new issue form, with the title and body filled in. The body includes the Markdown for a task list.](/assets/images/help/issues/issue-task-list-raw.png)
{% endif %}

## Adding labels

Add a label to categorize your issue. For example, you might use a `bug` label and a `good first issue` label to indicate that an issue is a bug that a first-time contributor could pick up. Users can filter issues by label to find all issues that have a specific label.

You can use the default labels, or you can create a new label. For more information, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels)."

![Screenshot of the new issue form. In the right sidebar, the "Labels" section is outlined in dark orange.](/assets/images/help/issues/issue-with-label.png)

## Adding milestones

You can add a milestone to track the issue as part of a date based target. A milestone will show the progress of the issues as the target date approaches. For more information, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/about-milestones)."

![Screenshot of the new issue form. In the right sidebar, the "Milestone" section is outlined in dark orange.](/assets/images/help/issues/issue-milestone.png)

## Assigning the issue

To communicate responsibility, you can assign the issue to a member of your organization. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)."

![Screenshot of the new issue form. In the right sidebar, the "Assignees" section is outlined in a dark orange.](/assets/images/help/issues/issue-assignees.png)

## Adding the issue to a project

You can add the issue to an existing project{% ifversion projects-v2 %} and populate metadata for the project. {% endif %} For more information about projects, see {% ifversion projects-v2 %}"[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."{% else %}"[AUTOTITLE](/issues/organizing-your-work-with-project-boards)."{% endif %}

![Screenshot of the new issue form. In the right sidebar, the "Projects" section is outlined in dark orange.](/assets/images/help/issues/issue-project.png)

## Submitting your issue

Click **Submit new issue** to create your issue. You can edit any of the above fields after creating the issue. Your issue has a unique URL that you can share with team members, or reference in other issues or pull requests.

## Communicating

After your issue is created, continue the conversation by adding comments to the issue. You can @mention collaborators or teams to draw their attention to a comment. To link related issues in the same repository, you can type `#` followed by part of the issue title and then clicking the issue that you want to link. For more information, see "[AUTOTITLE](/get-started/writing-on-github)."

![Screenshot of an issue comment. The header says "octocat commented now" and the body says "@hubot Do we also need to update the rocket logic?"](/assets/images/help/issues/issue-comment.png)

## Next steps

You can use issues for a wide range of purposes. For example:

- Tracking ideas
- Collecting feedback
- Planning tasks
- Reporting bugs

Here are some helpful resources for taking your next steps with {% data variables.product.prodname_github_issues %}:

- To learn more about issues, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)."
- To learn more about how projects can help you with planning and tracking, see {% ifversion projects-v2 %}"[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."{% else %}"[AUTOTITLE](/issues/organizing-your-work-with-project-boards)."{% endif %}
- To learn more about using issue templates{% ifversion fpt or ghec %} and issue forms{% endif %} to encourage contributors to provide specific information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."
