---
title: Amending a commit in GitHub Desktop
shortTitle: Amending commits
intro: 'You can use {% data variables.product.prodname_desktop %} to amend your last commit.'
versions:
  feature: desktop
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/amending-a-commit
---

## About amending a commit

Amending a commit is a way to modify the most recent commit you have made in your current branch. This can be helpful if you need to edit the commit message or if you forgot to include changes in the commit.

You can continue to amend a commit until you push it to the remote repository. After you push a commit, the option to amend it is disabled in {% data variables.product.prodname_desktop %}. When you amend a commit, you replace the previous commit with a new commit to your current branch. Amending a commit that has been pushed to the remote repository could cause confusion for other collaborators working with the repository.

## Amending a commit

{% data reusables.desktop.history-tab %}
1. Right-click on the most recent commit and select **Amend commit**.

   ![Screenshot of a list of commits in the "History" tab. Next to a commit, in a context menu, the cursor hovers over "Amend commit".](/assets/images/help/desktop/amend-commit-context-menu.png)
1. In the "Amend Will Require Force Push" dialog window, click **Begin Amend**.
1. In the "Changes" tab, use the **Summary** field to modify the commit message. Optionally, you can modify or add information about the commit in the **Description** field.
1. Select any uncommitted changes that you would like to add to the commit. For more information about selecting changes, see "[AUTOTITLE](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)."
1. Once you have finalized your changes, click **Amend last commit**.
