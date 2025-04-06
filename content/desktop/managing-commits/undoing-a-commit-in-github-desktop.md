---
title: Undoing a commit in GitHub Desktop
shortTitle: Undoing a commit
intro: 'You can undo a commit before you have pushed it to the remote branch.'
versions:
  feature: desktop
---

## About undoing a commit

If you made a mistake in your changes, you can undo a commit in {% data variables.product.prodname_desktop %}. Undoing a commit restores the changes in the commit to your working directory and resets the branch to the previous commit, so you can make further changes before committing again.

You can undo multiple sequential commits up to a commit that has already been pushed to the remote repository by selecting a previous commit and using the "reset to commit" option. For more information, see "[AUTOTITLE](/desktop/managing-commits/resetting-to-a-commit-in-github-desktop)." To undo a pushed commit without disrupting commit history for other contributors, you can revert the commit. For more information, see "[AUTOTITLE](/desktop/managing-commits/reverting-a-commit-in-github-desktop)."

If you want to edit your most recent commit message, or combine new changes with your most recent commit, you can amend a commit. For more information, see "[AUTOTITLE](/desktop/managing-commits/amending-a-commit-in-github-desktop)."

## Undoing a commit

1. In the left sidebar, ensure you are on the **Changes** tab.
1. At the bottom of the sidebar, click **Undo**.

   ![Screenshot of part of the "Changes" tab. Next to the commit message, a button, labeled "Undo", is highlighted with an orange outline.](/assets/images/help/desktop/undo-commit.png)

## Further reading

* "[AUTOTITLE](/desktop/managing-commits/options-for-managing-commits-in-github-desktop)"
