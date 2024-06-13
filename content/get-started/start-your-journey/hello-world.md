---
title: Hello World
intro: 'Follow this Hello World exercise to learn {% data variables.product.product_name %}''s pull request workflow.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
redirect_from:
  - /get-started/quickstart/hello-world
---

## Introduction

This tutorial teaches you {% data variables.product.product_name %} essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn {% data variables.product.product_name %}'s pull request workflow, a popular way to create and review code.

In this quickstart guide, you will:

* Create and use a repository.
* Start and manage a new branch.
* Make changes to a file and push them to {% data variables.product.product_name %} as commits.
* Open and merge a pull request.

### Prerequisites

* You must have a {% data variables.product.prodname_dotcom %} account. {% ifversion fpt or ghec %}For more information, see "[AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github)."{% endif %}

* You don't need to know how to code, use the command line, or install Git (the version control software that {% data variables.product.product_name %} is built on).

## Step 1: Create a repository

The first thing we'll do is create a repository. You can think of a repository as a folder that contains related items, such as files, images, videos, or even other folders. A repository usually groups together items that belong to the same "project" or thing you're working on.

Often, repositories include a README file, a file with information about your project. README files are written in Markdown, which is an easy-to-read, easy-to-write language for formatting plain text. We'll learn more about Markdown in the next tutorial, "[AUTOTITLE](/get-started/start-your-journey/setting-up-your-profile)."

{% data variables.product.product_name %} lets you add a README file at the same time you create your new repository. {% data variables.product.product_name %} also offers other common options such as a license file, but you do not have to select any of them now.

Your `hello-world` repository can be a place where you store ideas, resources, or even share and discuss things with others.

{% data reusables.repositories.create_new %}
1. In the "Repository name" box, type `hello-world`.
{% data reusables.repositories.add-description %} For example, type "This repository is for practicing the {% data variables.product.prodname_dotcom %} Flow."
{% data reusables.repositories.select-public-or-private %}
{% data reusables.repositories.add-readme %}
{% data reusables.repositories.click-create %}

## Step 2: Create a branch

Branching lets you have different versions of a repository at one time.

By default, your repository has one branch named `main` that is considered to be the definitive branch. You can create additional branches off of `main` in your repository.

Branching is helpful when you want to add new features to a project without changing the main source of code. The work done on different branches will not show up on the main branch until you merge it, which we will cover later in this guide. You can use branches to experiment and make edits before committing them to `main`.

When you create a branch off the `main` branch, you're making a copy, or snapshot, of `main` as it was at that point in time. If someone else made changes to the `main` branch while you were working on your branch, you could pull in those updates.

This diagram shows:

* The `main` branch
* A new branch called `feature`
* The journey that `feature` takes before it's merged into `main`

![Diagram of the two branches. The "feature" branch diverges from the "main" branch, goes through stages for "Commit changes," "Submit pull request," and "Discuss proposed changes," and is then merged back into main.](/assets/images/help/repository/branching.png)

### Creating a branch

1. Click the **Code** tab of your `hello-world` repository.
1. Above the file list, click the dropdown menu that says **main**.

{% ifversion global-nav-update %}

   ![Screenshot of the repository page. A dropdown menu, labeled with a branch icon and "main", is highlighted with an orange outline.](/assets/images/help/branches/branch-selection-dropdown-global-nav-update.png)

{% else %}

   ![Screenshot of the repository page. A dropdown menu, labeled with a branch icon and "main", is highlighted with an orange outline.](/assets/images/help/branches/branch-selection-dropdown.png)

{% endif %}

1. Type a branch name, `readme-edits`, into the text box.
1. Click **Create branch: readme-edits from main**.

   ![Screenshot of the branch dropdown for a repository. "Create branch: readme-edits from 'main'" is outlined in dark orange.](/assets/images/help/repository/new-branch.png)

Now you have two branches, `main` and `readme-edits`. Right now, they look exactly the same. Next you'll add changes to the new `readme-edits` branch.

## Step 3: Make and commit changes

When you created a new branch in the previous step, {% data variables.product.product_name %} brought you to the code page for your new `readme-edits` branch, which is a copy of `main`.

You can make and save changes to the files in your repository. On {% data variables.product.product_name %}, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes so that other contributors can understand what you’ve done and why.

1. Under the `readme-edits` branch you created, click the `README.md` file.
1. To edit the file, click {% octicon "pencil" aria-label="Edit file" %}.
1. In the editor, write a bit about yourself.
{% ifversion code-view-ui %}1. Click **Commit changes**.{% endif %}
1. In the "Commit changes" box, write a commit message that describes your changes.
1. Click **Commit changes**.

These changes will be made only to the README file on your `readme-edits` branch, so now this branch contains content that's different from `main`.

## Step 4: Open a pull request

Now that you have changes in a branch off of `main`, you can open a pull request.

Pull requests are the heart of collaboration on {% data variables.product.product_name %}. When you open a pull request, you're proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch. Pull requests show diffs, or differences, of the content from both branches. The changes, additions, and subtractions are shown in different colors.

As soon as you make a commit, you can open a pull request and start a discussion, even before the code is finished.

In this step, you'll open a pull request in your own repository and then merge it yourself. It's a great way to practise the {% data variables.product.product_name %} flow before working on larger projects.

1. Click the **Pull requests** tab of your `hello-world` repository.
1. Click **New pull request**.
1. In the **Example Comparisons** box, select the branch you made, `readme-edits`, to compare with `main` (the original).
1. Look over your changes in the diffs on the Compare page, make sure they're what you want to submit.

   ![Screenshot of a diff for the README.md file. 3 red lines list the text that's being removed, and 3 green lines list the text being added.](/assets/images/help/repository/diffs.png)

1. Click **Create pull request**.
1. Give your pull request a title and write a brief description of your changes. You can include emojis and drag and drop images and gifs.
1. Click **Create pull request**.

### Reviewing a pull request

When you start collaborating with others, this is the time you'd ask for their review. This allows your collaborators to comment on, or propose changes to, your pull request before you merge the changes into the `main` branch.

We won't cover reviewing pull requests in this tutorial, but if you're interested in learning more, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)." Alternatively, try the [{% data variables.product.prodname_learning %}](https://skills.github.com/) "Reviewing pull requests" course.

## Step 5: Merge your pull request

In this final step, you will merge your `readme-edits` branch into the `main` branch.  After you merge your pull request, the changes on your `readme-edits` branch will be incorporated into `main`.

Sometimes, a pull request may introduce changes to code that conflict with the existing code on `main`. If there are any conflicts, {% data variables.product.product_name %} will alert you about the conflicting code and prevent merging until the conflicts are resolved. You can make a commit that resolves the conflicts or use comments in the pull request to discuss the conflicts with your team members.

In this walk-through, you should not have any conflicts, so you are ready to merge your branch into the main branch.

1. At the bottom of the pull request, click **Merge pull request** to merge the changes into `main`.
1. Click **Confirm merge**. You will receive a message that the request was successfully merged and the request was closed.
1. Click **Delete branch**. Now that your pull request is merged and your changes are on `main`, you can safely delete the `readme-edits` branch. If you want to make more changes to your project, you can always create a new branch and repeat this process.
1. Click back to the **Code** tab of your `hello-world` repository to see your published changes on `main`.

## Conclusion

By completing this tutorial, you've learned to create a project and make a pull request on {% data variables.product.product_name %}.

As part of that, we've learned how to:

* Create a repository.
* Start and manage a new branch.
* Change a file and commit those changes to {% data variables.product.product_name %}.
* Open and merge a pull request.

## Next steps

* Take a look at your {% data variables.product.product_name %} profile and you'll see your work reflected on your contribution graph.
* If you want to practice the skills you've learned in this tutorial again, try the [{% data variables.product.prodname_learning %}](https://skills.github.com/) "Introduction to {% data variables.product.prodname_dotcom %}" course.
* In the next tutorial, "[AUTOTITLE](/get-started/start-your-journey/setting-up-your-profile)," you'll learn how to personalize your profile and you'll also learn some basic Markdown syntax for writing on {% data variables.product.product_name %}.

## Further reading

* "[AUTOTITLE](/get-started/using-github/github-flow)"
