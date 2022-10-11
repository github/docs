---
title: Reordering commits
intro: "You can use {% data variables.product.prodname_desktop %} to reorder commits in your branch's history."
versions:
  free-pro-team: '*'
---

## About reordering a commit

Reordering allows you to alter your commit history to provide a more meaningful progression of commits. {% data variables.product.prodname_desktop %} allows you to drag-and-drop commits in your branch's history to reorder them.

## Reordering a commit

{% data reusables.desktop.current-branch-menu %}
2. In the list of branches, click the branch with the commits that you want to reorder.
{% data reusables.desktop.history-tab %}
4. Drag the commit that you want to reorder and drop it between two adjoining commits.
  ![reorder drag and drop](/assets/images/help/desktop/reorder-drag-and-drop.png)
While the application reorders the commits, a **Reorder in process** dialog indicates the progress of the change.

## Error messages when reordering commits

When you reorder commits, you may see one of the following notifications or error messages.

* A notification states that the requested change to the branch will require a force push to update the remote branch. This is shown when the commits that you reordered were previously pushed to the remote branch. Force pushing alters the commit history of the branch and will affect other collaborators who are working in that branch.  Select **Begin reorder** to start the reorder, and then click **Force push origin** to push your changes.

  ![reorder force push dialog](/assets/images/help/desktop/reorder-force-push-dialog.png)

* An error states that the reorder failed because there is a merge commit among the reordered commits.

  ![reorder merge commit dialog](/assets/images/help/desktop/reorder-merge-commit-dialog.png)

* A notification is shown indicating that there are uncommitted changes present on your current branch. Select **Stash Changes and Continue** to store the changes and proceed, or select **Close** to dismiss the message and commit the changes. When there are no longer any uncommitted changes, you can reorder your commits.

  ![reorder stash dialog](/assets/images/help/desktop/reorder-stash-dialog.png)

* A message states that there are merge conflicts that you must resolve before the application can continue reordering commits on your branch.
    1. Click **View conflicts** to see the conflicts.
    {% data reusables.desktop.resolve-merge-conflicts %}

  ![reorder resolve conflicts message](/assets/images/help/desktop/reorder-resolve-conflicts.png)
