---
title: Contributing to a project
shortTitle: Contribute to a project
intro: Learn how to contribute to a project through forking.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
redirect_from:
  - /get-started/quickstart/contributing-to-projects
---

## About forking

If you want to contribute to someone else's project but don't have write access to the repository, you can use a "fork and pull request" workflow.

{% data reusables.repositories.fork-definition-long %}

You can contribute by submitting pull requests from your fork to the upstream repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)."

## Forking a repository

This tutorial uses [the Spoon-Knife project](https://github.com/octocat/Spoon-Knife), a test repository that's hosted on {% data variables.product.prodname_dotcom_the_website %} that lets you test the fork and pull request workflow.

1. Navigate to the `Spoon-Knife` project at https://github.com/octocat/Spoon-Knife.
1. In the top-right corner of the page, click **Fork**.

   ![Screenshot of the main page of repository. A button, labeled with a fork icon and "Fork 59.3k," is outlined in dark orange.](/assets/images/help/repository/fork-button.png)
1. Under "Owner," select the dropdown menu and click an owner for the forked repository.
   >[!NOTE] If your username is grayed out, it's because the fork already exists. Instead, you should bring your existing fork up to date. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui)."
1. By default, forks are named the same as their upstream repositories. Optionally, to further distinguish your fork, in the "Repository name" field, type a name.
1. Optionally, in the "Description" field, type a description of your fork.
1. Optionally, select **Copy the DEFAULT branch only**.

    For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. If you do not select this option, all branches will be copied into the new fork.
1. Click **Create fork**.

{% note %}

**Note:** If you want to copy additional branches from the upstream repository, you can do so from the **Branches** page. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)."

{% endnote %}

## Cloning a fork

You've successfully forked the Spoon-Knife repository, but so far, it only exists on {% data variables.product.product_name %}. To be able to work on the project, you will need to clone it to your computer.

You can clone your fork with the command line, {% data variables.product.prodname_cli %}, or {% data variables.product.prodname_desktop %}.

{% webui %}

1. On {% data variables.product.product_name %}, navigate to **your fork** of the Spoon-Knife repository.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
1. Type `git clone`, and then paste the URL you copied earlier. It will look like this, with your {% data variables.product.product_name %} username instead of `YOUR-USERNAME`:

   ```shell
   git clone https://{% data variables.product.product_url %}/YOUR-USERNAME/Spoon-Knife
   ```

1. Press **Enter**. Your local clone will be created.

   ```shell
   $ git clone https://{% data variables.product.product_url %}/YOUR-USERNAME/Spoon-Knife
   > Cloning into `Spoon-Knife`...
   > remote: Counting objects: 10, done.
   > remote: Compressing objects: 100% (8/8), done.
   > remove: Total 10 (delta 1), reused 10 (delta 1)
   > Unpacking objects: 100% (10/10), done.
   ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a clone of your fork, use the `--clone` flag.

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## Creating a branch to work on

Before making changes to the project, you should create a new branch and check it out. By keeping changes in their own branch, you follow GitHub Flow and ensure that it will be easier to contribute to the same project again in the future. For more information, see "[AUTOTITLE](/get-started/using-github/github-flow#following-github-flow)."

{% webui %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endwebui %}

{% cli %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endcli %}

{% desktop %}

For more information about how to create and manage branches in {% data variables.product.prodname_desktop %}, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop)."

{% enddesktop %}

## Making and pushing changes

Go ahead and make a few changes to the project using your favorite text editor, like [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com). You could, for example, change the text in `index.html` to add your GitHub username.

When you're ready to submit your changes, stage and commit your changes. `git add .` tells Git that you want to include all of your changes in the next commit. `git commit` takes a snapshot of those changes.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

For more information about how to stage and commit changes in {% data variables.product.prodname_desktop %}, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#selecting-changes-to-include-in-a-commit)."

{% enddesktop %}

When you stage and commit files, you essentially tell Git, "Okay, take a snapshot of my changes!" You can continue to make more changes, and take more commit snapshots.

Right now, your changes only exist locally. When you're ready to push your changes up to {% data variables.product.product_name %}, push your changes to the remote.

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

For more information about how to push changes in {% data variables.product.prodname_desktop %}, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop)."

{% enddesktop %}

## Making a pull request

At last, you're ready to propose changes into the main project! This is the final step in producing a fork of someone else's project, and arguably the most important. If you've made a change that you feel would benefit the community as a whole, you should definitely consider contributing back.

To do so, head on over to the repository on {% data variables.product.product_name %} where your project lives. For this example, it would be at `https://github.com/<your_username>/Spoon-Knife`. You'll see a banner indicating that your branch is one commit ahead of `octocat:main`. Click **Contribute** and then **Open a pull request**.

{% data variables.product.product_name %} will bring you to a page that shows the differences between your fork and the `octocat/Spoon-Knife` repository. Click **Create pull request**.

{% data variables.product.product_name %} will bring you to a page where you can enter a title and a description of your changes. It's important to provide as much useful information and a rationale for why you're making this pull request in the first place. The project owner needs to be able to determine whether your change is as useful to everyone as you think it is. Finally, click **Create pull request**.

## Managing feedback

Pull requests are an area for discussion. Don't be offended if the project owner rejects your pull request, or asks for more information on why it's been made. Even if the project owner chooses not to merge your pull request, your changes still exist in your fork. It could be that someone else will find your fork much more valuable than the original project.

## Finding projects

You've successfully forked and contributed back to a repository. Go forth, and
contribute some more!{% ifversion fpt %} For more information, see "[AUTOTITLE](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}
