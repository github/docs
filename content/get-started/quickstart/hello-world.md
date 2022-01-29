---
title: Hello World
intro: 'Follow this Hello World exercise to get started with {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
---

## Introduction

{% data variables.product.product_name %} is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

This tutorial teaches you {% data variables.product.product_name %} essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn {% data variables.product.product_name %}'s pull request workflow, a popular way to create and review code.

In this quickstart guide, you will:

* Create and use a repository
* Start and manage a new branch
* Make changes to a file and push them to {% data variables.product.product_name %} as commits
* Open and merge a pull request

To complete this tutorial, you need a [{% data variables.product.product_name %} account](http://github.com) and Internet access. You don't need to know how to code, use the command line, or install Git (the version control software that {% data variables.product.product_name %} is built on).

## Creating a repository

A repository is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs. Often, repositories include a `README` file, a file with information about your project. {% data variables.product.product_name %} makes it easy to add one at the same time you create your new repository. It also offers other common options such as a license file.

Your `hello-world` repository can be a place where you store ideas, resources, or even share and discuss things with others.

{% data reusables.repositories.create_new %}
1. In the **Repository name** box, enter `hello-world`.
2. In the **Description** box, write a short description.
3. Select **Add a README file**.
4. Click **Create repository**.

   ![Create a hello world repository](/assets/images/help/repository/hello-world-repo.png)

## Creating a branch

Branching lets you have different versions of a repository at one time.

By default, your repository has one branch named `main` that is considered to be the definitive branch. You can use branches to experiment and make edits before committing them to `main`.

When you create a branch off the `main` branch, you're making a copy, or snapshot, of `main` as it was at that point in time. If someone else made changes to the `main` branch while you were working on your branch, you could pull in those updates.

This diagram shows:

* The `main` branch
* A new branch called `feature`
* The journey that `feature` takes before it's merged into `main`

![branching diagram](/assets/images/help/repository/branching.png)

Have you ever saved different versions of a file? Something like:

* `story.txt`
* `story-joe-edit.txt`
* `story-joe-edit-reviewed.txt`

Branches accomplish similar goals in {% data variables.product.product_name %} repositories.

Here at {% data variables.product.product_name %}, our developers, writers, and designers use branches for keeping bug fixes and feature work separate from our `main` (production) branch. When a change is ready, they merge their branch into `main`.

### Create a branch

1. Click the **Code** tab of your `hello-world` repository.
2. Click the drop down at the top of the file list that says **main**.
   ![Branch menu](/assets/images/help/branch/branch-selection-dropdown.png)
4. Type a branch name, `readme-edits`, into the text box.
5. Click **Create branch: readme-edits from main**.

![Branch menu](/assets/images/help/repository/new-branch.png)

Now you have two branches, `main` and `readme-edits`. Right now, they look exactly the same. Next you'll add changes to the new branch.

## Making and committing changes

When you created a new branch in the previous step, {% data variables.product.product_name %} brought you to the code page for your new `readme-edits` branch, which is a copy of `main`.

You can make and save changes to the files in your repository. On {% data variables.product.product_name %}, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes so that other contributors can understand what you’ve done and why.

1. Click the `README.md` file.
1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the file.
3. In the editor, write a bit about yourself.
4. In the **Commit changes** box, write a commit message that describes your changes.
5. Click **Commit changes**.

   ![Commit example](/assets/images/help/repository/first-commit.png)

These changes will be made only to the README file on your `readme-edits` branch, so now this branch contains content that's different from `main`.

## Opening a pull request

Now that you have changes in a branch off of `main`, you can open a pull request.

Pull requests are the heart of collaboration on {% data variables.product.product_name %}. When you open a pull request, you're proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch. Pull requests show diffs, or differences, of the content from both branches. The changes, additions, and subtractions are shown in different colors.

As soon as you make a commit, you can open a pull request and start a discussion, even before the code is finished.

By using {% data variables.product.product_name %}'s `@mention` feature in your pull request message, you can ask for feedback from specific people or teams, whether they're down the hall or 10 time zones away.

You can even open pull requests in your own repository and merge them yourself. It's a great way to learn the {% data variables.product.product_name %} flow before working on larger projects.

1. Click the **Pull requests** tab of your `hello-world` repository.
2. Click **New pull request**
3. In the **Example Comparisons** box, select the branch you made, `readme-edits`, to compare with `main` (the original).
4. Look over your changes in the diffs on the Compare page, make sure they're what you want to submit.

   ![diff example](/assets/images/help/repository/diffs.png)

5. Click **Create pull request**.
6. Give your pull request a title and write a brief description of your changes. You can include emojis and drag and drop images and gifs.
7. Click **Create pull request**.

Your collaborators can now review your edits and make suggestions.

## Merging your pull request

In this final step, you will merge your `readme-edits` branch into the `main` branch.

1. Click **Merge pull request** to merge the changes into `main`.
2. Click **Confirm merge**.
3. Go ahead and delete the branch, since its changes have been incorporated, by clicking **Delete branch**.

## Next steps

By completing this tutorial, you've learned to create a project and make a pull request on {% data variables.product.product_name %}.

Here's what you accomplished in this tutorial:

* Created an open source repository
* Started and managed a new branch
* Changed a file and committed those changes to {% data variables.product.product_name %}
* Opened and merged a pull request

Take a look at your {% data variables.product.product_name %} profile and you'll see your work reflected on your contribution graph.

For more information about the power of branches and pull requests, see "[GitHub flow](/get-started/quickstart/github-flow)." For more information about getting started with {% data variables.product.product_name %}, see the other guides in the [getting started quickstart](/get-started/quickstart).
