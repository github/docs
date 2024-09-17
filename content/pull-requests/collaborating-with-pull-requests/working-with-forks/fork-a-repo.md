---
title: Fork a repository
allowTitleToDifferFromFilename: true
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
  - /get-started/quickstart/fork-a-repo
intro: A fork is a new repository that shares code and visibility settings with the original “upstream” repository.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---
## About forks

{% data reusables.repositories.fork-definition-long %}  For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks)."

### Propose changes to someone else's project

For example, you can use forks to propose changes related to fixing a bug. Rather than logging an issue for a bug you have found, you can:

* Fork the repository.
* Make the fix.
* Submit a pull request to the project owner.

### Use someone else's project as a starting point for your own idea.

Open source software is based on the idea that by sharing code, we can make better, more reliable software. For more information, see the "[About the Open Source Initiative](https://opensource.org/about)" on the Open Source Initiative.

For more information about applying open source principles to your organization's development work on {% data variables.product.prodname_dotcom %}, see {% data variables.product.prodname_dotcom %}'s white paper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

When creating your public repository from a fork of someone's project, make sure to include a license file that determines how you want your project to be shared with others. For more information, see "[Choose an open source license](https://choosealicense.com/)" at choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning %}

## Prerequisites

If you haven't yet, first set up Git and authentication with {% data variables.location.product_location %} from Git. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/set-up-git)."

## Forking a repository

{% webui %}

You might fork a project to propose changes to the upstream repository. In this case, it's good practice to regularly sync your fork with the upstream repository. To do this, you'll need to use Git on the command line. You can practice setting the upstream repository using the same [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository you just forked.

1. On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}, navigate to the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository.
1. In the top-right corner of the page, click **Fork**.

   ![Screenshot of the main page of repository. A button, labeled with a fork icon and "Fork 59.3k," is outlined in dark orange.](/assets/images/help/repository/fork-button.png)
1. Under "Owner," select the dropdown menu and click an owner for the forked repository.
1. By default, forks are named the same as their upstream repositories. Optionally, to further distinguish your fork, in the "Repository name" field, type a name.
1. Optionally, in the "Description" field, type a description of your fork.
1. Optionally, select **Copy the DEFAULT branch only**.

   For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. If you do not select this option, all branches will be copied into the new fork.
1. Click **Create fork**.

{% note %}

**Note:** If you want to copy additional branches from the upstream repository, you can do so from the **Branches** page. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)."{% endnote %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a fork of a repository, use the `gh repo fork` subcommand.

```shell
gh repo fork REPOSITORY
```

To create the fork in an organization, use the `--org` flag.

```shell
gh repo fork REPOSITORY --org "octo-org"
```

{% endcli %}

{% desktop %}

You can fork a repository on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_desktop %}. For information about forking on {% data variables.product.prodname_dotcom_the_website %}, see [the web browser version of this article](/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?tool=webui).

{% data reusables.desktop.forking-a-repo %}

{% enddesktop %}

## Cloning your forked repository

Right now, you have a fork of the Spoon-Knife repository, but you do not have the files in that repository locally on your computer.

{% webui %}

1. On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}, navigate to **your fork** of the Spoon-Knife repository.
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
   > remote: Total 10 (delta 1), reused 10 (delta 1)
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

## Configuring Git to sync your fork with the upstream repository

When you fork a project in order to propose changes to the upstream repository, you can configure Git to pull changes from the upstream repository into the local clone of your fork.

{% webui %}

1. On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}, navigate to the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Change directories to the location of the fork you cloned.
    * To go to your home directory, type just `cd` with no other text.
    * To list the files and folders in your current directory, type `ls`.
    * To go into one of your listed directories, type `cd YOUR-LISTED-DIRECTORY`.
    * To go up one directory, type `cd ..`.
1. Type `git remote -v` and press **Enter**. You will see the current configured remote repository for your fork.

   ```shell
   $ git remote -v
   > origin  https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (fetch)
   > origin  https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (push)
   ```

1. Type `git remote add upstream`, and then paste the URL you copied in Step 3 and press **Enter**. It will look like this:

   ```shell
   git remote add upstream https://{% data variables.product.product_url %}/ORIGINAL-OWNER/Spoon-Knife.git
   ```

1. To verify the new upstream repository you have specified for your fork, type `git remote -v` again. You should see the URL for your fork as `origin`, and the URL for the upstream repository as `upstream`.

   ```shell
   $ git remote -v
   > origin    https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (fetch)
   > origin    https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-FORK.git (push)
   > upstream  https://{% data variables.product.product_url %}/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
   > upstream  https://{% data variables.product.product_url %}/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)
   ```

Now, you can keep your fork synced with the upstream repository with a few Git commands. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)."

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To configure a remote repository for the forked repository, use the `--remote` flag.

```shell
gh repo fork REPOSITORY --remote=true
```

To specify the remote repository's name, use the `--remote-name` flag.

```shell
gh repo fork REPOSITORY --remote-name "main-remote-repo"
```

{% endcli %}

### Editing a fork

You can make any changes to a fork, including:

* **Creating branches:** [_Branches_](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) allow you to build new features or test out ideas without putting your main project at risk.
* **Opening pull requests:** If you want to contribute back to the upstream repository, you can send a request to the original author to pull your fork into their repository by submitting a [pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

## Find another repository to fork

Fork a repository to start contributing to a project. {% data reusables.repositories.you-can-fork %} For more information about when you can fork a repository, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks)."

{% ifversion fpt or ghec %}You can browse [Explore {% data variables.product.prodname_dotcom %}](https://github.com/explore) to find projects and start contributing to open source repositories. For more information, see "[AUTOTITLE](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)."

{% endif %}

## Next steps

You have now forked a repository, practiced cloning your fork, and configured an upstream repository.

* For more information about cloning the fork and syncing the changes in a forked repository from your computer, see "[AUTOTITLE](/get-started/getting-started-with-git/set-up-git)."

* You can also create a new repository where you can put all your projects and share the code on {% data variables.product.prodname_dotcom %}. {% data reusables.getting-started.create-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
