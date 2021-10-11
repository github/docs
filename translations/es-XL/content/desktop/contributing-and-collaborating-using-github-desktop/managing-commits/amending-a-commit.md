---
title: Amending a commit
intro: 'You can use {% data variables.product.prodname_desktop %} to amend your last commit.'
versions:
  fpt: '*'
---

## About amending a commit

Amending a commit is a way to modify the most recent commit you have made in your current branch. This can be helpful if you need to edit the commit message or if you forgot to include changes in the commit.

You can continue to amend a commit until you push it to the remote repository. After you push a commit, the option to amend it is disabled in {% data variables.product.prodname_desktop %}. When you amend a commit, you replace the previous commit with a new commit to your current branch. Amending a commit that has been pushed to the remote repository could cause confusion for other collaborators working with the repository.

## Amending a commit

{% data reusables.desktop.history-tab %}
2. Right-click on the most recent commit and select **Amend commit**.
  ![Amend commit context menu](/assets/images/help/desktop/amend-commit-context-menu.png)
3. Click the **Summary** field to modify the commit message. Optionally, you can modify or add information about the commit in the **Description** field.
4. Select any uncommitted changes that you would like to add to the commit. For more information about selecting changes, see "[Committing and reviewing changes to your project](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)."
5. Once you have finalized your changes, click **Amend last commit**.
  ![Amend last commit overview](/assets/images/help/desktop/amend-last-commit-overview.png)
