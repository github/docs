---
title: 'Planning your work'
shortTitle: 'Plan your work'
intro: 'Organize your work and track your progress so you always know what to build next.'
category:
  - Learn to code
contentType: get-started
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

Before you write code, capture what you want to build and track your progress. In this tutorial, you'll plan and organize work for your website's first feature using {% data variables.product.prodname_github_issues %} and {% data variables.product.prodname_projects_v2 %}.

## Prerequisites

* A `stargazers-log` repository. If you haven't created it yet, see [AUTOTITLE](/get-started/start-your-journey/creating-a-repository-for-your-project-on-github).

## Creating an issue

Issues track ideas, tasks, and bugs for your software project. Create one for the first feature you'll build: a list of starred repositories on your web page.

1. On the main page of your `stargazers-log` repository, click **Issues**.
1. Click **New issue**.
1. In the **Add a title** field, type `Display a list of starred repositories`.
1. In the description field, add a few details about what you want to build, such as "Show a list of starred repositories on the home page."
1. Click **Create**.

## Creating a project board and importing your issue

{% data variables.product.prodname_projects_v2 %} give you visual tables, boards, and roadmaps to organize and track issues for your software projects. In this tutorial, you'll create a user project board for `stargazers-log`.

1. On {% data variables.product.github %}, in the top right corner of {% data variables.product.prodname_dotcom %}, click your profile picture, then click **Profile**.
1. Click **Projects**.
1. Click **New project**.
1. Under **Templates**, select **Board**.
1. In the project name field, type `Stargazers log`.
1. Leave **Import items from a repository** checked, to import the issue you recently created to the board.
1. Click **Create project**.

## Moving work across the board

The board's columns represent stages of your work. As you make progress, move each item to show its status.

1. On your project board, find the `Display a list of starred repositories` item in the **Todo** column.
1. Drag the item into the **In Progress** column to show that you've started the work.

You'll return to the board later to move the item to **Done** once your feature is live.

## Adding follow up issues

Create one or more issues to describe ideas and features for your website that you want to work on later. For example, you might create an issue to:

* Add a search feature to your website
* Improve the styling of the starred repositories list
* Allow filtering of starred repositories by programming language, such as JavaScript, Python, or Go

Add each new issue to your project board, and move it into **In Progress** once you start working on it.

## What you accomplished

| Task | Outcome |
| ---- | ------- |
| Created an issue | You captured your first feature as a trackable task. |
| Created a project board | You set up a board to organize and track your work. |
| Tracked your progress | You added the issue to the board and moved it into progress. |
| Added more issues | You created new issues to capture future work for your website. |

## Next steps

* With your work planned, bring your repository to your computer so you can start writing, storing, and updating your website code. Continue to [AUTOTITLE](/get-started/start-your-journey/connecting-to-your-code-locally).
