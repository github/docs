---
title: Deinen Branch synchronisieren
intro: 'As commits are pushed to your project on {% data variables.product.prodname_dotcom %}, you can keep your local copy of the project in sync by pulling from the remote repository.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
versions:
  free-pro-team: '*'
---

### About branch synchronization

You can sync your local branch with the remote repository by pulling any commits that have been added to the branch on {% data variables.product.product_name %} since the last time you synced. If you make commits from another device or if multiple people contribute to a project, you will need to sync your local branch to keep the branch updated.

When you pull to your local branch, you only update your local copy of the repository. To update your branch on {% data variables.product.prodname_dotcom %}, you must push your changes. For more information, see "[Pushing changes to {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github)."

To add changes from one branch to another branch, you can merge the branches. To apply changes to your branch from another branch in the same repository, you can merge the other branch into your branch on {% data variables.product.prodname_desktop %}. To request that changes from your branch are merged into another branch, in the same repository or in another repository in the network, you can create a pull request on {% data variables.product.prodname_desktop %}. For more information, see "[Merging another branch into your project branch](#merging-another-branch-into-your-project-branch)" and "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."

Some workflows require or benefit from rebasing instead of merging. Durch das Rebasing können Sie Commits neu anordnen, bearbeiten oder zusammen squashen. For more information, see "[About Git rebase](/articles/about-git-rebase)" and "[Rebasing your project branch onto another branch](#rebasing-your-project-branch-onto-another-branch)."

### Pulling to your local branch from the remote

1. In {% data variables.product.prodname_desktop %}, use the {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** drop-down, and select the local branch you want to update.
2.  To check for commits on the remote branch, click **Fetch origin** ![Die Schaltfläche „Fetch origin“ (Ursprung abrufen)](/assets/images/help/desktop/fetch-button.png)
3. To pull any commits from the remote branch, click **Pull origin** or **Pull origin with rebase**. ![Die Schaltfläche „Pull origin“ (Ursprung abrufen)](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### Merging another branch into your project branch

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Hinweis:** Bei Mergekonflikten werden Sie oberhalb der Schaltfläche **Merge <em>BRANCH</em> into <em>BRANCH</em>** (Branch in Branch mergen) von {% data variables.product.prodname_desktop %} gewarnt. Sie können die Branches erst mergen, nachdem Sie alle Konflikte behoben haben.

   {% endnote %}

   ![Die Schaltfläche „Merge“](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### Rebasing your project branch onto another branch

{% mac %}

1. In the menu bar, use the **Branch** drop-down and click **Rebase Current Branch**. ![„Rebase Current Branch“ (Basis des aktuellen Branches neu setzen) im Dropdown-Menü des Branches](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. Klicke auf den Branch, den Du als neue Basis für den aktuellen Branch setzen möchtest, und klicke anschließend auf **Start rebase** (Rebase starten). ![Schaltfläche „Start rebase“ (Rebase starten)](/assets/images/help/desktop/start-rebase-button.png)
3. Wenn Du sicher bist, dass Du ein Rebasing vornehmen möchtest, klicke auf **Begin rebase** (Rebase beginnen). ![Schaltfläche „Begin rebase“ (Rebase starten)](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. To push your local changes, click **Force push origin**. ![Force push origin (Ursprungs-Push erzwingen)](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Verwende das Dropdown-Menü **Branch**, und klicke auf **Rebase Current Branch** (Aktuellen Branch auf neue Basis legen). ![„Rebase Current Branch“ (Basis des aktuellen Branches neu setzen) im Dropdown-Menü des Branches](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. Klicke auf den Branch, den Du als neue Basis für den aktuellen Branch setzen möchtest, und klicke anschließend auf **Start rebase** (Rebase starten). ![Schaltfläche „Start rebase“ (Rebase starten)](/assets/images/help/desktop/start-rebase-button.png)
3. Wenn Du sicher bist, dass Du ein Rebasing vornehmen möchtest, klicke auf **Begin rebase** (Rebase beginnen). ![Schaltfläche „Begin rebase“ (Rebase starten)](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. Klicke zum Übertragen Deiner lokalen Änderungen per Push auf **Force push origin** (Ursprungs-Push erzwingen). ![Force push origin (Ursprungs-Push erzwingen)](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

### Weiterführende Informationen
- "[Pull](/github/getting-started-with-github/github-glossary#pull)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Merge](/github/getting-started-with-github/github-glossary#merge)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Rebase](/github/getting-started-with-github/github-glossary#rebase)" in the {% data variables.product.prodname_dotcom %} glossary
