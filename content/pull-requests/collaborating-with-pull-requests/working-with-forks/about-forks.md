---
title: About forks
intro: A fork is a new repository that shares code and visibility settings with the original “upstream” repository.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
---

## About forks

Forks are like independent copies of repositories. Unlike branches, forks give you more freedom to experiment without affecting the original project. Unlike cloned or duplicated repositories, changes from forks can be merged back into the upstream repository via pull requests, similar to a branch.

When you view a forked repository on {% data variables.product.github %}, the upstream repository is indicated below the name of the fork.

![Screenshot of a repository's page on GitHub. Below the name of the repository, "mona/docs", the text "forked from github/docs" is outlined in orange.](/assets/images/help/pull_requests/fork-path.png)

## What makes forks distinct from branches

Each fork is a complete repository with its own:

* Branches
* Members and discussions
* Issues and pull requests
* Actions and projects
* Tags, labels, and wikis

## When to use a fork

There are times when a fork may be a better fit for your task than a branch would be. A fork might be better:

* To experiment safely without affecting the original project
* To create separate space for discussions unrelated to a project's main goals
* When you might want to make your work an independent repository later

## Which repositories can be forked?

{% data reusables.repositories.you-can-fork %}

## Next steps

For instructions for forking a repository, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

For more information about when you can create forks, and the permission and visibility settings of forks, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks).
