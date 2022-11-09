---
title: Contributing to projects
intro: Learn how to contribute to a project through forking.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
---

## About forking

After using GitHub by yourself for a while, you may find yourself wanting to contribute to someone else’s project. Or maybe you’d like to use someone’s project as the starting point for your own. This process is known as forking.

Creating a "fork" is producing a personal copy of someone else's project. Forks act as a sort of bridge between the original repository and your personal copy. You can submit pull requests to help make other people's projects better by offering your changes up to the original project. Forking is at the core of social coding at GitHub. For more information, see "[Fork a repo](/get-started/quickstart/fork-a-repo)."

## Forking a repository

This tutorial uses [the Spoon-Knife project](https://github.com/octocat/Spoon-Knife), a test repository that's hosted on {% data variables.product.prodname_dotcom_the_website %} that lets you test the fork and pull request workflow.

1. Navigate to the `Spoon-Knife` project at https://github.com/octocat/Spoon-Knife.
2. Click **Fork**.
   ![Fork button](/assets/images/help/repository/fork_button.png){% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. Select an owner for the forked repository.
   ![Create a new fork page with owner dropdown emphasized](/assets/images/help/repository/fork-choose-owner.png)
4. By default, forks are named the same as their parent repositories. You can change the name of the fork to distinguish it further. 
   ![Create a new fork page with repository name field emphasized](/assets/images/help/repository/fork-choose-repo-name.png)
5. Optionally, add a description of your fork.
   ![Create a new fork page with description field emphasized](/assets/images/help/repository/fork-description.png)
6. Choose whether to copy only the default branch or all branches to the new fork. For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. By default, only the default branch is copied.
   ![Option to copy only the default branch](/assets/images/help/repository/copy-default-branch-only.png)
7. Click **Create fork**.
   ![Emphasized create fork button](/assets/images/help/repository/fork-create-button.png)

{% note %}

**Note:** If you want to copy additional branches from the parent repository, you can do so from the **Branches** page. For more information, see "[Creating and deleting branches within your repository](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)."

{% endnote %}
{% endif %}

## Cloning a fork

You've successfully forked the Spoon-Knife repository, but so far, it only exists on {% data variables.product.product_name %}. To be able to work on the project, you will need to clone it to your computer.

You can clone your fork with the command line, {% data variables.product.prodname_cli %}, or {% data variables.product.prodname_desktop %}.

{% webui %}

1. On {% data variables.product.product_name %}, navigate to **your fork** of the Spoon-Knife repository.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. Type `git clone`, and then paste the URL you copied earlier. It will look like this, with your {% data variables.product.product_name %} username instead of `YOUR-USERNAME`:
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. Press **Enter**. Your local clone will be created.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
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

Before making changes to the project, you should create a new branch and check it out. By keeping changes in their own branch, you follow GitHub Flow and ensure that it will be easier to contribute to the same project again in the future. For more information, see "[GitHub Flow](/get-started/quickstart/github-flow#following-github-flow)."

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

For more information about how to create and manage branches in {% data variables.product.prodname_desktop %}, see "[Managing branches](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches)."

{% enddesktop %}

## Making and pushing changes

Go ahead and make a few changes to the project using your favorite text editor, like [Visual Studio Code](https://code.visualstudio.com). You could, for example, change the text in `index.html` to add your GitHub username.

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

For more information about how to stage and commit changes in {% data variables.product.prodname_desktop %}, see "[Committing and reviewing changes to your project](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)."

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

For more information about how to push changes in {% data variables.product.prodname_desktop %}, see "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)."

{% enddesktop %}

## Making a pull request

At last, you're ready to propose changes into the main project! This is the final step in producing a fork of someone else's project, and arguably the most important. If you've made a change that you feel would benefit the community as a whole, you should definitely consider contributing back.

To do so, head on over to the repository on {% data variables.product.product_name %} where your project lives. For this example, it would be at `https://www.github.com/<your_username>/Spoon-Knife`. You'll see a banner indicating that your branch is one commit ahead of `octocat:main`. Click **Contribute** and then **Open a pull request**.

{% data variables.product.product_name %} will bring you to a page that shows the differences between your fork and the `octocat/Spoon-Knife` repository. Click **Create pull request**.

{% data variables.product.product_name %} will bring you to a page where you can enter a title and a description of your changes. It's important to provide as much useful information and a rationale for why you're making this pull request in the first place. The project owner needs to be able to determine whether your change is as useful to everyone as you think it is. Finally, click **Create pull request**.

## Managing feedback

Pull Requests are an area for discussion. In this case, the Octocat is very busy, and probably won't merge your changes. For other projects, don't be offended if the project owner rejects your pull request, or asks for more information on why it's been made. It may even be that the project owner chooses not to merge your pull request, and that's totally okay. Your copy will exist in infamy on the Internet. And who knows--maybe someone you've never met will find your changes much more valuable than the original project.

## Finding projects

You've successfully forked and contributed back to a repository. Go forth, and
contribute some more!{% ifversion fpt %} For more information, see "[Finding ways to contribute to open source on GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}
