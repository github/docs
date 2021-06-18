---
title: Quickstart for GitHub Issues
intro: "The essentials for getting started with {% data variables.product.prodname_dotcom %}'s planning and tracking tools."
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
## Introduction
You can use {% data variables.product.prodname_dotcom %} repositories, issues, project boards, and other tools to plan and track your work, whether working on an individual project or large initiative.

In this guide, you will learn how to create and set up a repository for collaborating with a team, create issue forms and templates, open issues and use task lists to break down work, and establish a project board for organizing and tracking issues.

## Creating a repository
When starting a new project, initiative or feature, the first step is to create a repository. Repositories contain all of your project's files and are also the place where you can collaborate with others and manage your work. For more information, see "[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)".

You can set up repositories in a variety of ways based on how your organization is structured. The following are some common use cases and types of repositories:

- **Product repositories**: For a larger organization that tracks their work and goals based on specific products, there may be one or more repositories containing the code and other files. These repositories can also be used for documentation, reporting on product health or future plans for the product. 
- **Project repositories**: For an organization that tracks work for short-lived initiatives or projects, such as a consulting firm, there is a need to report on the health of a project and move people between different projects based on skills and needs. Code for the project is often contained in a single repository.
- **Team repositories**: For an organization that keeps groups of people together in teams, and brings projects to them, such as a dev tools team, code may be scattered across many repositories for the different work they need to track. In this case it may be helpful to have a team-specific repository as one place to track all the work the team is involved in.

You can create multiple, separate repositories if you want different access permissions for the source code and for tracking issues and discussions. For more information, see "[Creating an issues-only repository](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository)".

## Creating a team or project README
You can create a README file for your repository to introduce your team or project and communicate important information about it. A README is often the first item a visitor to your repository will see, so you can also provide information on how users or contributors can get started with the project and how to contact the team. For more information, see "[About READMEs](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes)".

You can also create a CONTRIBUTING.MD file specifically to contain guidelines on how users or contributors can contribute and interact with the team or project, such as how to open a bug fix issue or request an improvement. For more information, see "[Setting guidelines for repository contributors](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".

## Making decisions as a team
You can use issues and discussions to communicate and make decisions as a team on planned improvements or priorities for your project. Issues are useful when you create them for discussion of specific details, such as bug or performance reports, planning for the next quarter, or design for a new initiative. Discussions are useful for open-ended brainstorming or feedback, outside the codebase and across repositories. For more information, see "[Which discussion tool should I use?](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use)".

As a team, you can also communicate updates on day-to-day tasks within issues so that everyone knows the status of work. For example, you can create an issue for a large feature that multiple people are working on, and each of them can add updates with their status or open questions in that issue. 
## Creating issue forms and templates

You can use issues to track the different types of work that your team or project covers, as well as gather information from those outside of your project. The following are a few common use cases that issues are used for.

- Release tracking: You can use an issue to track the progress for a release or the steps to complete the day of a launch
- Large initiatives: You can use an issue to track progress on a large initiative or project, which is then linked to the smaller issues. 
- Requests for improvement: You or those outside your team can create issues to request an improvement to your product or project.
- Bugs: You or those outside your team can create issues to report a bug. 

Depending on the type of repository and project you are working on, you may prioritize certain types of issues over others. Once you have identified the most common issue types for your team, you can create issue forms and templates for your repository. Issue templates {% if currentVersion == "free-pro-team@latest" %}and forms{% endif %} allow you to create a standardized list of templates that a contributor can choose from when they open an issue in your repository. For more information, see "[About issue and pull request templates](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)".
## Opening issues and using task lists to track scoped work

You can organize and track your scoped work by creating issues. 

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. Click **New issue**.
  ![New Issues button](/assets/images/help/issues/new_issues_button.png)
4. If you have created issue templates for your repository, click **Get started** next to the type of issue you'd like to open.
  ![Select the type of issue you want to create](/assets/images/help/issues/issue_template_get_started_button.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion >= "enterprise-server@2.21" %}
5. Optionally, click **Open a blank issue.** if the type of issue you'd like to open isn't included in the available options.
  ![Link to open a blank issue](/assets/images/help/issues/blank_issue_link.png)
{% else %}
5. Optionally, click **Open a regular issue.** if the type of issue you'd like to open isn't included in the available options.
  ![Link to open a regular issue](/assets/images/help/issues/regular_issue_link.png)
{% endif %}
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.submit-new-issue %}

A task list in {% data variables.product.prodname_dotcom %} is a set of tasks that each render on a separate line with a clickable checkbox. You can select or deselect the checkboxes to mark the tasks as complete or incomplete. They can be added using Markdown in any comment in {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.task-list-markdown %}

Tasks lists have added functionality when added to the body of an issue. If you are working on a big initiative made up of multiple smaller tasks, you can create a main issue and then smaller issues for each of the tasks that make up the feature. You can then add a task list to the main issue, listing each of the smaller issues. You can then see the progress of tasks completed at the top of the issue, and if someone closes an issue in the list, the checkbox will automatically be marked as complete.

![Rendered task list](/assets/images/help/writing/task-list-rendered.png)
## Using labels to highlight project goals and status
You can create labels for a repository to categorize issues, pull requests and discussions. {% data variables.product.prodname_dotcom %} also provides default labels for every new repository that you can edit or delete. Labels are useful for keeping track of project goals, bugs, types of work, and the status of an issue.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. To the right of the search field, click **New label**.
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

Once you have created a label in a repository, you can apply it on any issue, pull request or discussion in the repository. You can then filter issues and pull requests by label. For more information, see "[Filtering issues and pull requests by labels](/github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels)".
## Adding issues to a project board
{% if currentVersion == "free-pro-team@latest" %}You can use projects on {% data variables.product.prodname_dotcom %}, currently in limited public beta, to plan and track the work for your team. A project is a customizable spreadsheet that integrates with your issues and pull requests on {% data variables.product.prodname_dotcom %}, automatically staying up-to-date with the information on {% data variables.product.prodname_dotcom %}. You can customize the layout by filtering, sorting, and grouping your issues and PRs. To get started with projects, see "[Quickstart for projects (beta)](/issues/trying-out-the-new-projects-experience/quickstart)".

![Project table](/assets/images/help/issues/projects_table.png)

{% else %}

You can use project boards on {% data variables.product.prodname_dotcom %} to plan and track your or your team's work. Project boards are made up of issues, pull requests, and notes that are categorized as cards in columns of your choosing. You can create project boards for feature work, high-level roadmaps, or even release checklists. For more information, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)".

![Project board with basic kanban template](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% endif %}

## Next steps
You have now learned about the tools {% data variables.product.prodname_dotcom %} offers for planning and tracking your work, and made a start in setting up your team or project repository! Here are some helpful resources for further customizing your repository and organizing your work.

- "[About repositories](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)" for learning more about creating repositories
- "[Tracking your work with issues](/issues/tracking-your-work-with-issues)" for learning more about different ways to create and manage issues.
- "[Managing labels](/issues/using-labels-and-milestones-to-track-work/managing-labels)" for learning how to create, edit and delete labels
- "[About milestones](/issues/using-labels-and-milestones-to-track-work/about-milestones)" for learning how to set milestones for your repository
- {% if currentVersion == "free-pro-team@latest" %}"[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)" for learning more about the new projects experience, currently in limited public beta{% else %}"[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)" for learning how to manage project boards{% endif %}

