---
title: Using source control in your codespace
intro: 'After making changes to a file in your codespace you can quickly commit the changes and push your update to the remote repository.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### About source control in {% data variables.product.prodname_codespaces %}

You can perform all the Git actions you need directly within your codespace. For example, you can fetch changes from the remote repository, switch branches, create a new branch, commit and push changes, and create a pull request. You can use the integrated terminal within your codespace to enter Git commands, or you can click icons and menu options to complete all the most common Git tasks. This guide explains how to use the graphical user interface for source control.

Source control in {% data variables.product.prodname_github_codespaces %} uses the same workflow as {% data variables.product.prodname_vscode %}. For more information, see the {% data variables.product.prodname_vscode %} documentation "[Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)."

A typical workflow for updating a file using {% data variables.product.prodname_github_codespaces %} would be:

* From the default branch of your repository on {% data variables.product.prodname_dotcom %}, create a codespace. See "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace)."
* In your codespace, create a new branch to work on.
* Make your changes and save them.
* Commit the change.
* Raise a pull request.

### Creating or switching branches

1. If the current branch is not shown in the status bar, at the bottom of your codespace, right-click the status bar and select **Source control**.
1. Click the branch name in the status bar.
![The branch in the status bar](/assets/images/help/codespaces/branch-in-status-bar.png)
1. In the drop-down, either click the branch you want to switch to, or enter the name for a new branch and click **Create new branch**.
![Choose from the branch menu](/assets/images/help/codespaces/create-new-branch.png)

{% tip %}

**Tip**: If someone has changed a file on the remote repository, in the branch you switched to, you will not see those changes until you pull the changes into your codespace. 

{% endtip %}

### Pulling changes from the remote repository

You can pull changes from the remote repository into your codespace at any time. 

{% data reusables.codespaces.source-control-display-dark %}
1. At the top of the side bar, click the ellipsis (**...**).
![Ellipsis button for View and More Actions](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. In the drop-down menu, click **Pull**.

If a dev container has been changed since you created the codespace you can apply the changes by rebuilding the container for the codespace. For more information, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)."

### Setting your codespace to automatically fetch new changes 

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

### Committing your changes 

{% data reusables.codespaces.source-control-display-dark %}
1. To stage your changes, click  **+** next to the file you've changed, or next to **Changes** if you've changed multiple files and you want to stage them all.
![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-stage.png)
1. Type a commit message describing the change you've made.
![Source control side bar with a commit message](/assets/images/help/codespaces/codespaces-commit-commit-message.png)  
1. To commit your staged changes, click the check mark at the top the source control side bar.
![Click the check mark icon](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)  

### Raising a pull request

1. After you've committed changes to your local copy of the repository, click the **Create Pull Request** icon. 
![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-pr-button.png)  
1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description. 
![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Click **Create**.

### Pushing changes to your remote repository

You can push the changes you've made. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on {% data variables.product.prodname_dotcom %}.

1. At the top of the side bar, click the ellipsis (**...**).
![Ellipsis button for View and More Actions](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. In the drop-down menu, click **Push**.
