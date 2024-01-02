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

A version control system, or VCS, tracks the history of changes as people and teams collaborate on projects together. As developers make changes to the project, any earlier version of the project can be recovered at any time.

Developers can review project history to find out:

- Which changes were made?
- Who made the changes?
- When were the changes made?
- Why were changes needed?

VCSs give each contributor a unified and consistent view of a project, surfacing work that's already in progress. Seeing a transparent history of changes, who made them, and how they contribute to the development of a project helps team members stay aligned while working independently.

In a distributed version control system, every developer has a full copy of the project and project history. Unlike once popular centralized version control systems, DVCSs don't need a constant connection to a central repository. Git is the most popular distributed version control system. Git is commonly used for both open source and commercial software development, with significant benefits for individuals, teams and businesses.

- Git lets developers see the entire timeline of their changes, decisions, and progression of any project in one place. From the moment they access the history of a project, the developer has all the context they need to understand it and start contributing.

- Developers work in every time zone. With a DVCS like Git, collaboration can happen any time while maintaining source code integrity. Using branches, developers can safely propose changes to production code.

- Businesses using Git can break down communication barriers between teams and keep them focused on doing their best work. Plus, Git makes it possible to align experts across a business to collaborate on major projects.

## About repositories

A repository, or Git project, encompasses the entire collection of files and folders associated with a project, along with each file's revision history. The file history appears as snapshots in time called commits. The commits can be organized into multiple lines of development called branches. Because Git is a DVCS, repositories are self-contained units and anyone who has a copy of the repository can access the entire codebase and its history. Using the command line or other ease-of-use interfaces, a Git repository also allows for: interaction with the history, cloning the repository, creating branches, committing, merging, comparing changes across versions of code, and more.

Through platforms like {% data variables.product.product_name %}, Git also provides more opportunities for project transparency and collaboration. Public repositories help teams work together to build the best possible final product.

## How {% data variables.product.product_name %} works

{% data variables.product.product_name %} hosts Git repositories and provides developers with tools to ship better code through command line features, issues (threaded discussions), pull requests, code review, or the use of a collection of free and for-purchase apps in the {% data variables.product.prodname_marketplace %}. With collaboration layers like the {% data variables.product.product_name %} flow, a community of 100 million developers, and an ecosystem with hundreds of integrations, {% data variables.product.product_name %} changes the way software is built.

{% data variables.product.product_name %} builds collaboration directly into the development process. Work is organized into repositories where developers can outline requirements or direction and set expectations for team members. Then, using the {% data variables.product.product_name %} flow, developers simply create a branch to work on updates, commit changes to save them, open a pull request to propose and discuss changes, and merge pull requests once everyone is on the same page. For more information, see "[AUTOTITLE](/get-started/quickstart/github-flow)."

For {% data variables.product.prodname_dotcom %} plans and costs, see {% data variables.product.pricing_link %}. For information on how {% data variables.product.prodname_enterprise %} compares to other options, see [Comparing GitHub to other DevOps solutions](https://resources.github.com/devops/tools/compare/).

## {% data variables.product.product_name %} and the command line

### Basic Git commands

To use Git, developers use specific commands to copy, create, change, and combine code. These commands can be executed directly from the command line or by using an application like {% data variables.product.prodname_desktop %}. Here are some common commands for using Git:

#### Version Control

- `git --version`: Check the git version

#### Staging Changes

- `git add [file]`: Stage changes of a particular file
- `git add .`: Stage all files

#### Branch Management

- `git branch`: Display the current working branch
- `git branch [branch-name]`: Create a new branch
- `git branch -M [branch-new-name]`: Rename the current branch
- `git branch -b [new-branch-name]`: Create and switch to a new branch
- `git branch -d [branch-name]`: Delete a branch
- `git branch -D [branch-name]`: Delete a branch forcefully
- `git push origin --delete [deleted-branch-name]`: Delete branch from the remote repository

#### Branch Navigation

- `git checkout`: Navigate between branches
- `git checkout [branch-name]`: Switch to a specific branch

#### File and Directory Management

- `git clean`: Remove untracked files from the working directory

#### Repository Cloning

- `git clone`: Create a copy of an existing repository

#### Committing Changes

- `git commit`: Commit changes with a detailed message
- `git commit -m "message"`: Commit changes with a brief message
- `git commit --amend`: Modify the recent commit

#### Viewing Changes

- `git show [commit]`: Output metadata and content changes of a specific commit

#### Configuration Settings

- `git config`: Set configuration options for your git installation
- `git config --global user.name "[name]"`: Set your name for commit transactions
- `git config --global user.email "[email-address]"`: Set your email for commit transactions
- `git config --global color.ui auto`: Enable helpful colorization of command line output
- `git config --list`: Check user config details

#### Retrieving Changes

- `git fetch`: Retrieve changes from the remote repository without merging

#### Repository Initialization

- `git init`: Turn an existing directory into a git repository
- `git branch -M main`: Rename the current branch to main (after initializing)

#### Viewing Revision History

- `git log`: Explore previous revisions of the project
- `git log --follow [file]`: List version history for a file, including renames

#### Merging Changes

- `git merge`: Integrate changes in divergent branches
- `git merge [branch]`: Combine the specified branch’s history into the current branch

#### Pulling Changes

- `git pull`: Download and merge changes from the remote repository
- `git pull origin main`: Pull changes from the remote main branch
- `git pull origin [branch-name]`: Pull changes from a specific remote branch

#### Pushing Changes

- `git push`: Push changes to the remote repository
- `git push origin main`: Push changes to the remote main branch
- `git push origin [branch-name]`: Push changes to a specific remote branch
- `git push -u origin main`: Push changes to the upstream, for seamless future pushes

#### Comparing Changes

- `git diff [branch-name]`: Compare the current branch with a specific branch
- `git diff [first-branch]...[second-branch]`: Show content difference between two branches

#### Rebasing Changes

- `git rebase`: Incorporate changes from one branch onto another
- `git rebase -i`: Interactive rebasing session

#### Reference Log

- `git reflog`: Display a history of reference updates, providing a safety net to recover lost commits or branches

#### Remote Repository

- `git remote`: Administer remote connections
- `git remote add origin [link]`: Transfer origin from the local system to a remote repository
- `git remote -v`: Verify remote git

#### Undoing Changes

- `git reset`: Undo changes to files in the working directory
- `git reset [filename]`: Undo changes to a particular file
- `git reset HEAD~1`: Undo a single commit and remove the current change
- `git reset [hash]`: Move multiple commits back
- `git reset --hard [hash]`: Move multiple commits back (in the code editor)

#### Status

- `git status`: Display the state of the working directory and the staged snapshot

#### Reverting Changes

- `git revert`: Create a new commit that undoes changes from a previous commit without removing any data
- `git status`: Display the state of the working directory and the staged snapshot

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

For an open source project, or for projects to which anyone can contribute, managing individual permissions can be challenging, but a fork and pull model allows anyone who can view the project to contribute. A fork is a copy of a project under a developer's personal account. Every developer has full control of their fork and is free to implement a fix or a new feature. Work completed in forks is either kept separate, or is surfaced back to the original project via a pull request. There, maintainers can review the suggested changes before they're merged. For more information, see "[AUTOTITLE](/get-started/exploring-projects-on-github/contributing-to-a-project)."
