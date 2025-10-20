---
title: Getting started with Git
intro: 'Learn the basics of Git by working through an example scenario.'
topics:
  - Copilot
  - Git
  - Desktop
versions:
  fpt: '*'
shortTitle: Get started with Git
---

Have you ever wished you had a time machine for your code? Well, Git is exactly that, and so much more!

If you aren't familiar with Git, it's a **version control** system that helps you keep track of changes to your code. You can save a snapshot of your project at a particular point in time, then make experimental changes without risking your work, since you can always go back to your snapshot.

{% data variables.product.github %} itself is a platform built around Git, letting you save your Git projects to the cloud and work on them with other developers.

While Git can be complicated, it's a powerful and necessary tool for any developer. This article will give you all the tools you need to use Git in your day-to-day workflow.

## Prerequisites

To follow this tutorial, you need to [install {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download).

## Learning Git basics with {% data variables.product.prodname_desktop %}

For standard Git operations, we recommend {% data variables.product.prodname_desktop %}, an app that lets you interact with Git visually instead of through written commands. In this section, we'll learn how to use {% data variables.product.prodname_desktop %} to quickly perform the most common Git operations.

### Setting up {% data variables.product.prodname_desktop %}

If this is your first time using {% data variables.product.prodname_desktop %}, you need to install it and connect your {% data variables.product.github %} account.

1. [Download {% data variables.product.prodname_desktop %}](https://desktop.github.com/download/).
1. Open {% data variables.product.prodname_desktop %}, then click **Sign in to {% data variables.product.prodname_dotcom_the_website %}** and authorize {% data variables.product.prodname_desktop %} to access your account.
1. Back in {% data variables.product.prodname_desktop %}, click **Finish**. This will add your name and email from your {% data variables.product.github %} account to Git.

### Creating a local repository

Now, you can take your first steps into Git by creating a **repository**. Think of a repository as a project folder that tracks changes and stores history. First, we'll create a **local** repository:

1. In {% data variables.product.prodname_desktop %}, click **Create a New Repository on your Local Drive**.
1. Name the repository `learning-git`.
1. Select **Initialize this repository with a README** to create a blank `README.md` file automatically.

    > [!TIP] It's standard practice to include a `README.md` file, also known as a README, in your projects. READMEs typically contain information that helps others understand, set up, and run your project.
1. Click **Create repository**.

### Creating a remote repository

The local repository you just created lives on your computer. Now, let's create a **remote** repository for the same project, which will be hosted on {% data variables.product.github %}. Linking a remote repository makes it easier to collaborate on and back up your work.

1. In {% data variables.product.prodname_desktop %}, click **Publish repository**.
1. In the pop up that appears, click **Publish repository** one more time.
1. To see your remote repository, click **View on {% data variables.product.github %}**.

### Setting up a space to make changes

Now that you've created a repository, let's talk about **branches**. Branches are essentially copies of your project where you can test changes without risking the stability of your existing work.

Repositories are automatically created with a `main` branch, which you can think of as the stable, primary version of your project. For example, in the repository for a website, the `main` branch corresponds to the site that visitors can see.

When you create a new branch, you're creating a safe space to work on a new feature without affecting the primary version. You and your collaborators can use different branches to work on multiple features at the same time.

Let's create a branch to work on changes in our repository:

1. In {% data variables.product.prodname_desktop %}, select the {% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} **Current Branch** dropdown menu, then click **New Branch**.
1. Name your new branch `readme-updates`, then click **Create Branch**.

### Saving snapshots of your project

To save your progress to your branch, you make a **commit**. A commit is a snapshot you take of your project at a particular point in time. You've actually already made your first commit: when you initialized your project with a README, {% data variables.product.prodname_desktop %} automatically created an initial commit to add the `README.md` file.

Whenever you complete a chunk of work that you want to save, you should make a commit. After you do, you can always go back to that point in time, no matter how many changes you make in the future.

1. In {% data variables.product.prodname_desktop %}, click **Open in {% data variables.product.prodname_vscode %}**.
1. In {% data variables.product.prodname_vscode_shortname %}, paste the following text into `README.md` and save your changes:

    ```markdown copy
    Hello, World!

    This is a demo project for learning how to use Git.
    ```

1. Back in {% data variables.product.prodname_desktop %}, you'll see the updates you just made to your README. In the bottom left, next to your {% data variables.product.github %} profile picture, type "Update README" in the text box. This is called a **commit message**, and it helps you keep track of the changes you make in each commit.
1. To make your commit, click **Commit to readme-updates**.

### Bringing your changes into your main branch

When you're happy with the changes you've made on a branch, you can publish your branch to the remote repository and create a **pull request**. Pull requests let you review a set of proposed changes, then merge them from one branch into another. In our case, we'll create a pull request that brings the changes we made in `readme-updates` into our original branch, `main`.

1. Click **Publish branch** to push the `readme-updates` branch with your changes to the remote repository.
1. To review your suggested changes, click **Preview Pull Request**.
1. Click **Create Pull Request**.
1. In the {% data variables.product.github %} window that appears, change your pull request title to "Add a message to the README", then write a brief description of your changes in the comment box.
1. Click **Create pull request**.
1. To bring your changes into the `main` branch, at the bottom of the page, click **Merge pull request**.

    > [!NOTE] When you're working on a project with other developers, it's standard practice for someone else to review your pull request before it's merged.

1. Near the bottom of the page, click **Delete branch**. Deleting branches that have been merged into `main` helps keep your repository clean and easy to navigate.

### Preparing to make more changes

Congratulations on merging your first pull request! Now that you've successfully brought your changes into the `main` branch, there are a few steps you should take to get ready for your next round of changes:

1. In {% data variables.product.prodname_desktop %}, if you aren't on the `main` branch, select the {% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} **Current Branch** dropdown menu, then click **main**.

   You should almost always switch back to the `main` branch before creating a new branch, since new branches are created as copies of the currently selected branch.
1. To check if any changes have been made to your remote `main` branch, click **Fetch origin**.
1. Finally, to update your local `main` branch with changes to the remote `main` branch, click **Pull origin**.

You now have all of the skills necessary for setting up and using Git on a project!

## Diving deeper into Git on the command line

{% data variables.product.prodname_desktop %} is designed to address your day-to-day Git needs. As you grow as a developer, you're likely to run into some unusual situations where you want more control over a Git operation, or you need to use more complex commands. In those instances, you'll need to switch to using written Git commands on the command line.

### Setting up your command line

Before you start working with the command line, you need to set up a few tools.

1. In {% data variables.product.prodname_desktop %}, press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open your project on the command line.
1. If you're using Windows, [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). For macOS and Linux, Git is installed by default.
1. [Install the {% data variables.product.prodname_cli %}](https://github.com/cli/cli?tab=readme-ov-file#installation), which lets you perform {% data variables.product.github %}-related actions quickly from the command line.
1. To authenticate to {% data variables.product.github %} from the {% data variables.product.prodname_cli %}, run the following command:

    ```shell copy
    gh auth login
    ```

    Choose to authenticate with **{% data variables.product.prodname_dotcom_the_website %}**, then follow the on-screen prompts.
1. Install {% data variables.copilot.copilot_cli %}, so that you can use {% data variables.product.prodname_copilot_short %} from the command line. See [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-cli).

### Experimenting with complex commands

Now that you're set up, let's learn how to find and understand the commands you might need in the future. For example, let's say you saw someone online mention `git blame`, but you don't know what it does. Try asking {% data variables.product.prodname_copilot_short %} to explain it with the following command:

```shell copy
gh copilot explain "git blame"
```

{% data variables.product.prodname_copilot_short %} will tell us that `git blame` provides a detailed history of a file, showing the author and commit that last modified each line in the file. Try it yourself with the following command:

```shell copy
git blame README.md
```

This is a great tool, but as you can imagine, the blame for a file can get really long. Let's say you're only interested in the most recent update to a specific line in a file. You can ask {% data variables.product.prodname_copilot_short %} to build you the right command:

```shell copy
gh copilot suggest "Show me the blame for line 1 of README.md"
```

When {% data variables.product.prodname_copilot_short %} asks what kind of command you're looking for, use your arrow keys to choose **git command**, then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot_short %} will then suggest the following command:

```shell copy
git blame -L 1,1 README.md
```

Use your arrow keys to choose **Execute command**, then press <kbd>Enter</kbd>. You'll see the author and commit that last modified line 1 of `README.md`.

## Review and next steps

In this article, we covered the basics of Git with {% data variables.product.prodname_desktop %}, learning important terms like:

* **Repository**: A folder that saves all of the changes made to files in your project.
* **Commit**: A snapshot of your project at a particular point in time.
* **Branch**: A copy of your project where you can work on a set of changes.
* **Pull request**: A request to merge changes from one branch into another.

We also talked about performing more complicated Git operations on the command line. We tried out `gh copilot explain` and `gh copilot suggest` to understand and find new commands and functionality.

Now, try applying what you've learned to your own work. Add Git to an existing project with {% data variables.product.prodname_desktop %} by pressing <kbd>Ctrl</kbd>+<kbd>O</kbd> (Windows/Linux) or <kbd>Command</kbd>+<kbd>O</kbd> (Mac) and experience the benefits of version control yourself!
