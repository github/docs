---
title: About forks
shortTitle: About forks
intro: 'Use forks to make changes in your own copy of a repository and propose them back to the original project.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: get-started
category:
  - Work with forks
---

A fork is a copy of a repository that you own, connected to the original repository, called the upstream repository. A fork lets you make changes in your own space without affecting the upstream project, and propose those changes back with a pull request.

## Why use a fork

A fork gives you an independent place to work while staying connected to the original project. Forks are useful when you want to:

* Contribute to a project where you don't have write access.
* Experiment with changes without affecting the upstream repository.
* Explore a new direction that might become independent later.
* Keep your own branches, issues, and pull requests separate from the upstream project.

## Forks and branches

Forks and branches both give you a place to work on changes, but they work differently:

* A **branch** lives inside a single repository. Use a branch when you have write access and collaborate in a shared repository.
* A **fork** is a separate repository with its own settings, permissions, and collaboration space. Use a fork when you need independence from the upstream repository, or when you don't have write access.

Because a fork is its own repository, it gives you more independence than a branch. Because it stays connected to the upstream repository, your changes can still flow back through pull requests.

## How forks connect to the upstream repository

A fork shares its history with the upstream repository, so the two can exchange changes through pull requests. A fork also has its own visibility and permissions, which are tied to the upstream repository and the repository network it belongs to.

For most contributors, this connection stays in the background: you fork a repository, work in your copy, and open a pull request when you're ready to propose your changes.

## Further reading

* [AUTOTITLE](/pull-requests/how-tos/work-with-forks/fork-a-repo)
* [AUTOTITLE](/pull-requests/concepts/writing-code-for-a-project)
* [AUTOTITLE](/pull-requests/reference/forks)
