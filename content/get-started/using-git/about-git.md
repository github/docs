---
title: About Git
intro: 'Learn about the version control system, Git, and how it works with {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
  - Git
---

## About version control and Git

A version control system (VCS) keeps track of changes over time as people and teams work together on projects. When developers make changes to a project, they can always go back to a previous version of the project.

Developers can look back at a project’s history to see:

What was changed?
Who changed it?
When was it changed?
Why was it changed?

VCSs provide each contributor with a unified and unified view of the project, highlighting work that has already been completed. Having a clear record of changes, the origin of those changes, and how those changes contribute to the advancement of the project allows team members to work in harmony while working independently.

A distributed version control system is a system where every developer has a copy of their project and its history. Unlike the days when centralized version control systems were the go-to, a DVCS doesn't need to be connected to a central repository all the time. The most popular version control system is known as Git, and it's used for both free and commercial software development. People, teams, and businesses all benefit from using Git.

- Git makes it easy for developers to keep track of all the changes they've made, the decisions they've made, and the progress of their projects all in one spot. From the first time they look at a project's history, they have all the info they need to get started and get involved.

- No matter what time zone you're in, developers are working in the same place. With a distributed version control system like Git, you can collaborate whenever you want while keeping source code safe. With branches, you can easily suggest changes to your production code.

- Using Git can help teams communicate better and stay focused on what they do best. Plus, it allows teams across the company to work together on big projects.

## About repositories

A Git repository is a collection of all the files and folders related to a project, plus the revision history of each file. The revision history is shown as snapshots of time, called commits, and the commits can be divided into different lines of development, called branches. Since Git is a version control system, the repository is self-contained, and anyone with a copy of it can see the whole codebase and the history of the project. You can also interact with the history using the command line, clone the repository, create branches, commit, merge, compare changes across versions, and more using the easy-to-use interfaces.

Through platforms like {% data variables.product.product_name %}, Git also provides more opportunities for project transparency and collaboration. Public repositories help teams work together to build the best possible final product.

## How {% data variables.product.product_name %} works

{% data variables.product.product_name %} hosts Git repositories and provides developers with tools to ship better code through command line features, issues (threaded discussions), pull requests, code review, or the use of a collection of free and for-purchase apps in the {% data variables.product.prodname_marketplace %}. With collaboration layers like the {% data variables.product.product_name %} flow, a community of 100 million developers, and an ecosystem with hundreds of integrations, {% data variables.product.product_name %} changes the way software is built.

{% data variables.product.product_name %} builds collaboration directly into the development process. Work is organized into repositories where developers can outline requirements or direction and set expectations for team members. Then, using the {% data variables.product.product_name %} flow, developers simply create a branch to work on updates, commit changes to save them, open a pull request to propose and discuss changes, and merge pull requests once everyone is on the same page. For more information, see "[AUTOTITLE](/get-started/quickstart/github-flow)."

For {% data variables.product.prodname_dotcom %} plans and costs, see {% data variables.product.pricing_link %}. For information on how {% data variables.product.prodname_enterprise %} compares to other options, see [Comparing GitHub to other DevOps solutions](https://resources.github.com/devops/tools/compare/).

## {% data variables.product.product_name %} and the command line

### Basic Git commands

To use Git, developers use specific commands to copy, create, change, and combine code. These commands can be executed directly from the command line or by using an application like {% data variables.product.prodname_desktop %}. Here are some common commands for using Git:

- `git init` initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.

- `git clone` creates a local copy of a project that already exists remotely. The clone includes all the project's files, history, and branches.

- `git add` stages a change. Git tracks changes to a developer's codebase, but it's necessary to stage and take a snapshot of the changes to include them in the project's history. This command performs staging, the first part of that two-step process. Any changes that are staged will become a part of the next snapshot and a part of the project's history. Staging and committing separately gives developers complete control over the history of their project without changing how they code and work.

- `git commit` saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo. Anything that's been staged with `git add` will become a part of the snapshot with `git commit`.

- `git status` shows the status of changes as untracked, modified, or staged.

- `git branch` shows the branches being worked on locally.

- `git merge` merges lines of development together. This command is typically used to combine changes made on two distinct branches. For example, a developer would merge when they want to combine changes from a feature branch into the main branch for deployment.

- `git pull` updates the local line of development with updates from its remote counterpart. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.

- `git push` updates the remote repository with any commits made locally to a branch.

For more information, see the [full reference guide to Git commands](https://git-scm.com/docs).

### Example: Contribute to an existing repository

```bash
# download a repository on {% data variables.product.product_name %} to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch
```

### Example: Start a new repository and publish it to {% data variables.product.product_name %}

First, you will need to create a new repository on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/get-started/quickstart/hello-world)." **Do not** initialize the repository with a README, .gitignore or License file. This empty repository will await your code.

```bash
# create a new directory, and initialize it with git-specific functions
git init my-repo

# change into the `my-repo` directory
cd my-repo

# create the first file in the project
touch README.md

# git isn't aware of the file, stage it
git add README.md

# take a snapshot of the staging area
git commit -m "add README to initial commit"

# provide the path for the repository you created on github
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# push changes to github
git push --set-upstream origin main
```

### Example: contribute to an existing branch on {% data variables.product.product_name %}

This example assumes that you already have a project called `repo` on the machine and that a new branch has been pushed to {% data variables.product.product_name %} since the last time changes were made locally.

```bash
# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```

## Models for collaborative development

There are two primary ways people collaborate on {% data variables.product.product_name %}:

1. Shared repository
1. Fork and pull

With a shared repository, individuals and teams are explicitly designated as contributors with read, write, or administrator access. This simple permission structure, combined with features like protected branches, helps teams progress quickly when they adopt {% data variables.product.product_name %}.

For an open source project, or for projects to which anyone can contribute, managing individual permissions can be challenging, but a fork and pull model allows anyone who can view the project to contribute. A fork is a copy of a project under a developer's personal account. Every developer has full control of their fork and is free to implement a fix or a new feature. Work completed in forks is either kept separate, or is surfaced back to the original project via a pull request. There, maintainers can review the suggested changes before they're merged. For more information, see "[AUTOTITLE](/get-started/quickstart/contributing-to-projects)."
