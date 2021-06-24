---
title: Quickstart for GitHub Issues
intro: 'Follow this brief interactive guide to learn about {% data variables.product.prodname_github_issues %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: quick_start
topics:
  - Issues
  - Project management
---

## Introduction

This guide demonstrates how to use {% data variables.product.prodname_github_issues %} to plan and track a piece of work. In this guide, you will create a new issue and add a task list to track sub-tasks. You'll also learn how to add labels, milestones, assignees, and projects to communicate metadata about your issue.

## Prerequisites

To create an issue, you need a repository. You can use an existing repository that you have write access to, or you can create a new repository. The repository must have issues enabled. For more information about creating a repository, see "[Creating a new repository](/articles/creating-a-new-repository)." For more information about enabling issues if they are disabled in your repository, see "[Disabling issues](/github/administering-a-repository/managing-repository-settings/disabling-issues)."

## Opening a blank issue

First, create an issue. There are multiple ways to create an issue; you can choose the most convenient method for your workflow. This example will use the {% data variables.product.prodname_dotcom %} UI. For more information about other ways to create an issue, see "[Creating an issue](/issues/tracking-your-work-with-issues/creating-an-issue)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. In this example, we will start with a blank issue. Your repository may use issue templates{% ifversion fpt %} and issue forms{% endif %} to encourage contributors to provide specific information. If your repository uses issue templates, {% ifversion fpt or ghes %}click **Open a blank issue**{% else %}click **Open a regular issue.**{% endif %}.

![blank issue](/assets/images/help/issues/blank-issue.png)

## Filling in information

Give your issue a descriptive title. The title should convey at a glance what the issue is about.

Add a description that explains the purpose of the issue, including any details that might help resolve the issue. For example, if this is a bug report, describe the steps to reproduce the bug, the expected result, and the actual result.

You can use markdown to add formatting, links, emojis, and more. For more information, see "[Writing on GitHub](/github/writing-on-github)."

![issue title and body](/assets/images/help/issues/issue-title-body.png)

## Adding a task list

It can be helpful to break large issues into smaller tasks, or to track multiple related issues in a single larger issue. Add a task list to your issue by prefacing list items with `[ ]`. Reference existing issues by issue number or URL. You can use plain text to track tasks that don't have a corresponding issue and convert them to issues later. For more information, see "[About task lists](/issues/tracking-your-work-with-issues/about-task-lists)."

![issue with task list](/assets/images/help/issues/issue-task-list-raw.png)

## Adding labels

Add a label to categorize your issue. For example, you might use a `bug` label and a `good first issue` label to indicate that an issue is a bug that a first-time contributor could pick up. Users can filter issues by label to find all issues that have a specific label.

You can use the default labels, or you can create a new label. For more information, see "[Managing labels](/issues/using-labels-and-milestones-to-track-work/managing-labels)."

![issue with labels](/assets/images/help/issues/issue-with-label.png)

## Adding milestones

You can add a milestone to track the issue as part of a date based target. A milestone will show the progress of the issues as the target date approaches. For more information, see "[About milestones](/issues/using-labels-and-milestones-to-track-work/about-milestones)."

![issue with milestone](/assets/images/help/issues/issue-milestone.png)

## Assigning the issue

To communicate responsibility, you can assign the issue to a member of your organization. For more information, see "[Assigning issues and pull requests to other GitHub users](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)."

![issue with assignees](/assets/images/help/issues/issue-assignees.png)

## Adding the issue to a project

You can add the issue to an existing project. {% ifversion fpt %}If you are using projects (beta), you can also populate metadata for the project. {% endif %} For more information about projects, see {% ifversion fpt %}"[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)" and {% endif %}"[Organizing your work with project boards](/issues/organizing-your-work-with-project-boards)".

![issue with projects](/assets/images/help/issues/issue-project.png)

## Submitting your issue

Click **Submit new issue** to create your issue. You can edit any of the above fields after creating the issue. Your issue has a unique URL that you can share with team members, or reference in other issues or pull requests.

## Communicating

After your issue is created, continue the conversation by adding comments to the issue. You can @mention collaborators or teams to draw their attention to a comment. To link related issues in the same repository, you can type `#` followed by part of the issue title and then clicking the issue that you want to link. For more information, see "[Writing on GitHub](/github/writing-on-github)."

![issue comment](/assets/images/help/issues/issue-comment.png)

## Next steps

You can use issues for a wide range of purposes. For example:

- Tracking ideas
- Collecting feedback
- Planning tasks
- Reporting bugs

Here are some helpful resources for taking your next steps with {% data variables.product.prodname_github_issues %}:

- To learn more about issues, see "[About issues](/issues/tracking-your-work-with-issues/about-issues)."
- To learn more about how projects can help you with planning and tracking, see {% ifversion fpt %}"[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)" or {% endif %}"[Organizing your work with project boards](/issues/organizing-your-work-with-project-boards)".
- To learn more about using issue templates{% ifversion fpt %} and issue forms{% endif %} to encourage contributors to provide specific information, see "[Using templates to encourage useful issues and pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."
