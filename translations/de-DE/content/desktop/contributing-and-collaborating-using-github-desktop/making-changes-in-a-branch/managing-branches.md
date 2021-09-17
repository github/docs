---
title: Managing branches
intro: You can create a branch off of a repository's default branch so you can safely experiment with changes.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  free-pro-team: '*'
---

### About managing branches
You can use branches to safely experiment with changes to your project. Branches isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug.

Du erstellst einen Branch immer aus einem existierenden Branch. Typically, you might create a branch from the default branch of your repository. Da kannst dann in diesem Branch unabhängig von Änderungen arbeiten, die andere Personen im Repository machen.

Once you're satisfied with your work, you can create a pull request to merge your changes in the current branch into another branch. For more information, see "[Creating an issue or pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" and "[About pull requests](/articles/about-pull-requests)."

You can always create a branch in {% data variables.product.prodname_desktop %} if you have read access to a repository, but you can only push the branch to {% data variables.product.prodname_dotcom %} if you have write access to the repository.

{% data reusables.desktop.protected-branches %}

### Branch erstellen

{% tip %}

**Tip:** The first new branch you create will be based on the default branch. If you have more than one branch, you can choose to base the new branch on the currently checked out branch or the default branch.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Dropdownmenü, um den aktuellen Branch zu wechseln](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.create-new-branch %}
  ![Option „New Branch“ (Neuer Branch) im Branch-Menü](/assets/images/help/desktop/new-branch-button-mac.png)
{% data reusables.desktop.name-branch %}
  ![Feld zum Erstellen eines Namens für den neuen Branch](/assets/images/help/desktop/create-branch-name-mac.png)
{% data reusables.desktop.select-base-branch %}
  ![Optionen für Basis-Branch](/assets/images/help/desktop/create-branch-choose-branch-mac.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Schaltfläche „Create Branch“ (Branch erstellen)](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Dropdownmenü, um den aktuellen Branch zu wechseln](/assets/images/help/desktop/click-branch-in-drop-down-win.png)
{% data reusables.desktop.create-new-branch %}
  ![Option „New Branch“ (Neuer Branch) im Branch-Menü](/assets/images/help/desktop/new-branch-button-win.png)
{% data reusables.desktop.name-branch %}
  ![Feld zum Erstellen eines Namens für den neuen Branch](/assets/images/help/desktop/create-branch-name-win.png)
{% data reusables.desktop.select-base-branch %}
  ![Optionen für Basis-Branch](/assets/images/help/desktop/create-branch-choose-branch-win.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Schaltfläche „Create branch“ (Branch erstellen)](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

### Publishing a branch

If you create a branch on {% data variables.product.product_name %}, you'll need to publish the branch to make it available for collaboration on {% data variables.product.prodname_dotcom %}.

1. At the top of the app, click {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch**, then click the branch that you want to publish. ![Drop-down menu to select which branch to publish](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. Click **Publish branch**. ![The Publish branch button](/assets/images/help/desktop/publish-branch-button.png)

### Zwischen Branches wechseln
Du kannst Commits auf allen Branches Deiner Repositorys anzeigen und durchführen. Wenn Du Änderungen gespeichert hast, die nicht per Commit übertragen wurden, musst Du Dich entscheiden, was mit Deinen Änderungen geschehen soll, bevor Du den Branch wechseln kannst. You can commit your changes on the current branch, stash your changes to temporarily save them on the current branch, or bring the changes to your new branch. If you want to commit your changes before switching branches, see "[Committing and reviewing changes to your project](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)."
{% tip %}

**Tipp**: Du kannst ein Standardverhalten für das Wechseln zwischen Branches in den **Advanced** (Erweiterten) Einstellungen festlegen. For more information, see "[Configuring basic settings](/desktop/getting-started-with-github-desktop/configuring-basic-settings)."

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Liste der Branches im Repository](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. Wenn Du Änderungen gespeichert, aber noch nicht per Commit übertragen hast, wähle **Leave my changes** (Meine Änderungen vergessen) oder **Bring my changes** (Meine Änderungen mitnehmen) aus, und klicke anschließend auf **Switch Branch** (Branch wechseln). ![Optionen zum Wechseln des Branches mit Änderungen](/assets/images/help/desktop/stash-changes-options.png)

### Branch löschen

Du kannst einen Branch nicht löschen, wenn er derzeit einem offenen Pull Request zugeordnet ist. You cannot undo deleting a branch.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Drop-down menu to select which branch to delete](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.delete-branch-mac %}
  ![Delete... option in the Branch menu](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Drop-down menu to select which branch to delete](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.delete-branch-win %}
  ![Delete... option in the Branch menu](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

### Weiterführende Informationen

- „[Repository in {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop) klonen“
- „[Branch](/articles/github-glossary/#branch)“ im {% data variables.product.prodname_dotcom %}-Glossar
- „[Informationen zu Branches](/articles/about-branches)“
- „[Branches auf einen Blick](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)“ in der Git-Dokumentation
- "[Stashing changes](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)"
