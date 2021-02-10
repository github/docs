---
title: Stashing changes
intro: You can stash changes to temporarily save them without committing them to a branch.
versions:
  free-pro-team: '*'
---

### About stashed changes
You can view and make commits to any of your repository's branches. If you have uncommitted, saved changes, you'll need to decide what to do with your changes before you can switch branches. You can commit your changes on the current branch, stash your changes on the current branch, or bring the changes to your new branch. If you want to commit your changes on the current branch, follow the steps in "[Committing and reviewing changes to your project](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)" before switching branches.

You can stash all uncommitted changes to temporarily save the changes without committing them, and then reapply the changes later. You can only stash one set of changes at a time with {% data variables.product.prodname_desktop %}. After you stash changes on a branch, you can safely change branches or make other changes to your current branch.

### Stashing changes

{% data reusables.desktop.click-changed-files-header %}
{% data reusables.desktop.click-stash-all-changes %}

### Switching between branches

{% tip %}

**Tip**: You can set a default behavior for switching branches in the **Advanced** settings. For more information, see "[Configuring basic settings](/desktop/getting-started-with-github-desktop/configuring-basic-settings)."

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![List of branches in the repository](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. If you have saved, uncommitted changes, choose **Leave my changes** or **Bring my changes**, then click **Switch Branch**.
  ![Switch branch with changes options](/assets/images/help/desktop/stash-changes-options.png)

### Retrieving stashed changes
To access changes you've stashed in another branch, switch back to the branch you stashed the changes in.

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![List of branches in the repository](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. In the left sidebar, click **Stashed Changes**.
![Stashed changes option](/assets/images/help/desktop/stashed-changes.png)
4. To delete your stashed changes, click **Discard**, or to use your stashed changes, click **Restore**.
![Discard or Restore stashed changes](/assets/images/help/desktop/discard-restore-stash-buttons.png)
