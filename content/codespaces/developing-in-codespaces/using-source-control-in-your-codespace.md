---
title: Using source control in your codespace
intro: After making changes to a file in your codespace you can quickly commit the changes and push your update to the remote repository.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
---

 

## About source control in {% data variables.product.prodname_github_codespaces %}

You can perform all the Git actions you need directly within your codespace. For example, you can fetch changes from the remote repository, switch branches, create a new branch, commit and push changes, and create a pull request. You can use the integrated terminal within your codespace to enter Git commands, or you can click icons and menu options to complete all the most common Git tasks. This guide explains how to use the graphical user interface for source control.

Source control in {% data variables.product.prodname_github_codespaces %} uses the same workflow as {% data variables.product.prodname_vscode %}. For more information, see the {% data variables.product.prodname_vscode_shortname %} documentation "[Using Version Control in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)."

A typical workflow for updating a file using {% data variables.product.prodname_github_codespaces %} would be:

* From the default branch of your repository on {% data variables.product.prodname_dotcom %}, create a codespace. See "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace)."
* In your codespace, create a new branch to work on.
* Make your changes and save them.
* Commit the change.
* Raise a pull request.

## Creating or switching branches

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Tip**: If someone has changed a file on the remote repository, in the branch you switched to, you will not see those changes until you pull the changes into your codespace. 

{% endtip %}

## Pulling changes from the remote repository

You can pull changes from the remote repository into your codespace at any time. 

{% data reusables.codespaces.source-control-display-dark %}
1. At the top of the side bar, click the ellipsis (**...**).
![Ellipsis button for View and More Actions](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. In the drop-down menu, click **Pull**.

If the dev container configuration has been changed since you created the codespace, you can apply the changes by rebuilding the container for the codespace. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-configuration-changes-to-a-codespace)."

## Setting your codespace to automatically fetch new changes 

You can set your codespace to automatically fetch details of any new commits that have been made to the remote repository. This allows you to see whether your local copy of the repository is out of date, in which case you may choose to pull in the new changes. 

If the fetch operation detects new changes on the remote repository, you'll see the number of new commits in the status bar. You can then pull the changes into your local copy.

1. Click the **Manage** button at the bottom of the Activity Bar.
![Manage button](/assets/images/help/codespaces/manage-button.png)
1. In the menu, slick **Settings**.
1. On the Settings page, search for: `autofetch`.
![Search for autofetch](/assets/images/help/codespaces/autofetch-search.png)
1. To fetch details of updates for all remotes registered for the current repository, set **Git: Autofetch** to `all`.
![Enable Git autofetch](/assets/images/help/codespaces/autofetch-all.png)
1. If you want to change the number of seconds between each automatic fetch, edit the value of **Git: Autofetch Period**.

## Committing your changes 

{% data reusables.codespaces.source-control-commit-changes %} 

## Raising a pull request

{% data reusables.codespaces.source-control-pull-request %} 

## Pushing changes to your remote repository

You can push the changes you've made. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on {% data variables.product.prodname_dotcom %}.

1. At the top of the side bar, click the ellipsis (**...**).
![Ellipsis button for View and More Actions](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. In the drop-down menu, click **Push**.
