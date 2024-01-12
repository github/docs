---
title: Reordering commits in GitHub Desktop
shortTitle: Reordering commits
intro: 'You can use {% data variables.product.prodname_desktop %} to reorder commits in your branch''s history.'
versions:
  feature: desktop
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reordering-commits
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reordering-commits-in-github-desktop
---

## About reordering a commit

Reordering allows you to alter your commit history to provide a more meaningful progression of commits. {% data variables.product.prodname_desktop %} allows you to drag-and-drop commits in your branch's history to reorder them.

## Reordering a commit

{% data reusables.desktop.current-branch-menu %}
1. In the list of branches, click the branch with the commits that you want to reorder.

   ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches", a branch, named "my-feature", is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)

{% data reusables.desktop.history-tab %}
1. Drag the commit that you want to reorder and drop it between two adjoining commits.

   ![Screenshot of a list of commits in the "History" tab. The cursor hovers over a narrow horizontal line between two commits, with a "one" icon indicating one commit is being moved.](/assets/images/help/desktop/reorder-drag-and-drop.png)

While the application reorders the commits, a **Reorder in process** dialog indicates the progress of the change.

## Error messages when reordering commits

When you reorder commits, you may see one of the following notifications or error messages.

- A notification states that the requested change to the branch will require a force push to update the remote branch. This is shown when the commits that you reordered were previously pushed to the remote branch. Force pushing alters the commit history of the branch and will affect other collaborators who are working in that branch.  Select **Begin reorder** to start the reorder, and then click **Force push origin** to push your changes.
- An error states that the reorder failed because there is a merge commit among the reordered commits.
- A notification is shown indicating that there are uncommitted changes present on your current branch. Select **Stash Changes and Continue** to store the changes and proceed, or select **Close** to dismiss the message and commit the changes. When there are no longer any uncommitted changes, you can reorder your commits.
- A message states that there are merge conflicts that you must resolve before the application can continue reordering commits on your branch.
    1. Click **View conflicts**.

       ![Screenshot of a notification about conflicts. At the end of the message, a link, labeled "View commits", is highlighted with an orange outline.](/assets/images/help/desktop/reorder-resolve-conflicts.png)
    {% data reusables.desktop.resolve-merge-conflicts %}

    1. When all conflicts are resolved, you can reorder your commits.
