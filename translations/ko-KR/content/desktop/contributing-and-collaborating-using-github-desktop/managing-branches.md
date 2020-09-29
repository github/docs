---
title: Managing branches
intro: You can create a branch off of a repository's default branch so you can safely experiment with changes.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
versions:
  free-pro-team: '*'
---

### About managing branches
You can use branches to safely experiment with changes to your project. Branches isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug.

You always create a branch from an existing branch. Typically, you might create a branch from the default branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository.

Once you're satisfied with your work, you can create a pull request to merge your changes in the current branch into another branch. For more information, see "[Creating an issue or pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" and "[About pull requests](/articles/about-pull-requests)."

You can always create a branch in {% data variables.product.prodname_desktop %} if you have read access to a repository, but you can only push the branch to {% data variables.product.prodname_dotcom %} if you have write access to the repository.

{% data reusables.desktop.protected-branches %}

### Creating a branch

{% tip %}

**Tip:** The first new branch you create will be based on the default branch. If you have more than one branch, you can choose to base the new branch on the currently checked out branch or the default branch.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Drop-down menu to switch your current branch](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
{% data reusables.desktop.create-new-branch %}
  ![New Branch option in the Branch menu](/assets/images/help/desktop/new-branch-button-mac.png)
{% data reusables.desktop.name-branch %}
  ![Field for creating a name for the new branch](/assets/images/help/desktop/create-branch-name-mac.png)
{% data reusables.desktop.select-base-branch %}
  ![Base branch options](/assets/images/help/desktop/create-branch-choose-branch-mac.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Create Branch button](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Drop-down menu to switch your current branch](/assets/images/help/desktop/click-branch-in-drop-down-win.png)
{% data reusables.desktop.create-new-branch %}
  ![New Branch option in the Branch menu](/assets/images/help/desktop/new-branch-button-win.png)
{% data reusables.desktop.name-branch %}
  ![Field for creating a name for the new branch](/assets/images/help/desktop/create-branch-name-win.png)
{% data reusables.desktop.select-base-branch %}
  ![Base branch options](/assets/images/help/desktop/create-branch-choose-branch-win.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Create branch button](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

### Publishing a branch

If you create a branch on {% data variables.product.product_name %}, you'll need to publish the branch to make it available for collaboration on {% data variables.product.prodname_dotcom %}.

1. At the top of the app, click {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch**, then click the branch that you want to publish. ![Drop-down menu to select which branch to publish](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
2. Click **Publish branch**. ![The Publish branch button](/assets/images/help/desktop/publish-branch-button.png)

### Switching between branches
You can view and make commits to any of your repository's branches. If you have uncommitted, saved changes, you'll need to decide what to do with your changes before you can switch branches. You can commit your changes on the current branch, stash your changes on the current branch, or bring the changes to your new branch. If you want to commit your changes on the current branch, follow the steps in "[Committing and reviewing changes to your project](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)" before switching branches.

{% tip %}

**Tip**: You can set a default behavior for switching branches in the **Advanced** settings. For more information, see "[Configuring basic settings](/desktop/getting-started-with-github-desktop/configuring-basic-settings)."

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![List of branches in the repository](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. If you have saved, uncommitted changes, choose **Leave my changes** or **Bring my changes**, then click **Switch Branch**. ![Switch branch with changes options](/assets/images/help/desktop/stash-changes-options.png)

### Retrieving stashed changes
To access changes you've stashed in another branch, switch back to the branch you stashed the changes in.

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![List of branches in the repository](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. In the left sidebar, click **Stashed Changes**. ![Stashed changes option](/assets/images/help/desktop/stashed-changes.png)
4. To delete your stashed changes, click **Discard**, or to use your stashed changes, click **Restore**. ![Discard or Restore stashed changes](/assets/images/help/desktop/discard-restore-stash-buttons.png)

### Deleting a branch

You can't delete a branch if it's currently associated with an open pull request. You cannot undo deleting a branch.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Drop-down menu to select which branch to delete](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-mac %}
  ![Delete... option in the Branch menu](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Drop-down menu to select which branch to delete](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-win %}
  ![Delete... option in the Branch menu](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

### 더 읽을거리

- "[Cloning a repository from {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)"
- "[Branch](/articles/github-glossary/#branch)" in the {% data variables.product.prodname_dotcom %} glossary
- "[About branches](/articles/about-branches)"
- "[Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" in the Git documentation
