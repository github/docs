---
title: Using source control in your codespace
intro: After making changes to a file in your codespace you can quickly commit the changes and push your update to the remote repository.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
redirect_from:
  - /codespaces/developing-in-codespaces/using-source-control-in-your-codespace
---

## About source control in {% data variables.product.prodname_github_codespaces %}

You can perform all the Git actions you need directly within your codespace. For example, you can fetch changes from a remote repository, switch branches, create a new branch, commit and push changes, and create a pull request. You can use the integrated terminal within your codespace to enter Git commands, or you can click icons and menu options to complete all the most common Git tasks. This guide explains how to use the graphical user interface for source control.

{% vscode %}

For more information about Git support in {% data variables.product.prodname_vscode %}, see [Using Version Control in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) in the {% data variables.product.prodname_vscode %} documentation.

{% endvscode %}

{% webui %}

Source control in the {% data variables.product.prodname_vscode %} web client uses the same workflow as the {% data variables.product.prodname_vscode %} desktop application. For more information, see [Using Version Control in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) in the {% data variables.product.prodname_vscode %} documentation.

{% endwebui %}

A typical workflow for updating a file using {% data variables.product.prodname_github_codespaces %} would be:

* From the default branch of your repository on {% data variables.product.prodname_dotcom %}, create a codespace. See [AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository).
* In your codespace, create a new branch to work on.
* Make your changes and save them.
* Commit the change.
* Raise a pull request.

> [!NOTE]
> By default, {% data variables.product.prodname_github_codespaces %} uses the HTTPS protocol to transfer data to and from a remote repository, and authenticates with a `GITHUB_TOKEN` configured with read and write access to the repository from which you create the codespace. If you're having issues with authentication, see [AUTOTITLE](/codespaces/troubleshooting/troubleshooting-authentication-to-a-repository).

## About automatic forking

To create a codespace for a repository for which you only have read access, you must have permission to fork the repository.

You do not need to fork the repository before you create the codespace. For example, you can create a codespace from the repository to look at the project and make experimental changes, then delete the codespace if you no longer need it.

If you make a commit from the codespace, or push a new branch, {% data variables.product.prodname_github_codespaces %} either creates a fork of the repository under your account and links it to your codespace, or it links your codespace to an existing fork if you already have one for the repository. You can then push your changes to the fork and create a pull request to propose the changes to the upstream repository.

If you make a commit from the command line, you will see a prompt asking if you would like to proceed with linking your codespace to a new or existing fork. Enter `y` to proceed. If you commit changes from the **Source Control** view in {% data variables.product.prodname_vscode_shortname %}, your codespace is automatically linked to a fork without you being prompted.

> [!NOTE]
> * If you delete your fork repository, then any codespaces linked to the fork are deleted, even if you originally created them from the upstream repository.
> * If you make a commit from the command line and refuse the new fork by entering `n`, you should push your changes from the command line rather than from {% data variables.product.prodname_vscode_shortname %}'s Source Control view. If you use the Source Control view, {% data variables.product.prodname_vscode_shortname %} will still try to create a fork for you on push.

When {% data variables.product.prodname_github_codespaces %} creates a fork, or links your codespace to an existing fork, the following things happen.

* The access token associated with your codespace is updated to include `read` and `write` permission to your fork, in addition to `read` permission to the upstream repository.
* In your Git settings, the upstream repository is reassigned to the name `upstream`, and the fork is added as a new remote repository under the name `origin`.

By default, source control commands that you access from your editor's user interface, such as the **Sync Changes** button in {% data variables.product.prodname_vscode_shortname %}, target your fork. If you're working from the command line, you can use `origin` to refer to your fork and `upstream` to refer to the upstream repository. For example, you can fetch changes from the upstream repository to ensure your codespace is up to date with the latest changes to the project.

```shell
git fetch upstream
```

When you have made some changes, you can push them to a feature branch of your fork.

```shell
git push origin my-feature-branch
```

For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

{% webui %}

{% data reusables.codespaces.source-control %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %}

{% endvscode %}
