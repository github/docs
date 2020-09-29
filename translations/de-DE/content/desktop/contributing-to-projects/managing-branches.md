---
title: Managing branches
intro: You can create a branch off of a repository's default branch so you can safely experiment with changes.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
versions:
  free-pro-team: '*'
---

### About managing branches
You can use branches to safely experiment with changes to your project. Branches isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug.

Du erstellst einen Branch immer aus einem existierenden Branch. Normalerweise würdest Du einen Branch aus dem `master`-Branch deines Repository erstellen. Da kannst dann in diesem Branch unabhängig von Änderungen arbeiten, die andere Personen im Repository machen.

Once you're satisfied with your work, you can [open a pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) to merge the changes in the current branch into another branch. Weitere Informationen findest Du unter „[Informationen zu Pull Requests](/articles/about-pull-requests).“

You can always create a branch in {% data variables.product.prodname_desktop %} if you have read access to a repository, but you can only push the branch to {% data variables.product.prodname_dotcom %} if you have write access to the repository.

{% data reusables.desktop.protected-branches %}

### Branch erstellen

{% tip %}

**Tipp:** Der erste neue von Dir erstellte Branch basiert auf dem Standardbranch, für gewöhnlich `master`. If you have more than one branch, you can choose to base the new branch on the currently checked out branch or the default branch.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Dropdownmenü, um den aktuellen Branch zu wechseln](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
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

### Zwischen Branches wechseln
Du kannst Commits auf allen Branches Deiner Repositorys anzeigen und durchführen. Wenn Du Änderungen gespeichert hast, die nicht per Commit übertragen wurden, musst Du Dich entscheiden, was mit Deinen Änderungen geschehen soll, bevor Du den Branch wechseln kannst. Du kannst Deine Änderungen per Commit zum aktuellen Branch übertragen, auf dem aktuellen Branch per Stash verbergen oder zu Deinem neuen Branch übertragen. Wenn Du Deine Änderungen per Commit auf den aktuellen Branch übertragen möchtest, solltest Du vor dem Wechseln der Branches die unter „[Änderungen an Deinem Projekt per Commit übertragen und überprüfen](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)“ beschriebenen Schritte befolgen.

{% tip %}

**Tipp**: Du kannst ein Standardverhalten für das Wechseln zwischen Branches in den **Advanced** (Erweiterten) Einstellungen festlegen. For more information, see "[Configuring basic settings](/desktop/getting-started-with-github-desktop/configuring-basic-settings)."

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Liste der Branches im Repository](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Wenn Du Änderungen gespeichert, aber noch nicht per Commit übertragen hast, wähle **Leave my changes** (Meine Änderungen vergessen) oder **Bring my changes** (Meine Änderungen mitnehmen) aus, und klicke anschließend auf **Switch Branch** (Branch wechseln). ![Optionen zum Wechseln des Branches mit Änderungen](/assets/images/help/desktop/stash-changes-options.png)

### Gestashte Änderungen abrufen
Um auf die Änderungen zuzugreifen, die Sie im anderen Branch gestasht haben, wechseln Sie zurück zum Branch, auf dem Sie die Änderungen gestasht haben.

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Liste der Branches im Repository](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Klicke auf der linken Seitenleiste auf **Stashed Changes** (Versteckte Änderungen). ![Option für gestashte Änderungen](/assets/images/help/desktop/stashed-changes.png)
4. Klicke zum Löschen Deiner versteckten Änderungen auf **Discard** (Verwerfen). Klicke zum Verwenden Deiner versteckte Änderungen auf **Restore** (Wiederherstellen). ![Versteckte Änderungen verwerfen oder wiederherstellen](/assets/images/help/desktop/discard-restore-stash-buttons.png)

### Branch löschen

Du kannst einen Branch nicht löschen, wenn er derzeit einem offenen Pull Request zugeordnet ist. You cannot undo deleting a branch.

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

### Weiterführende Informationen

- „[Repository in {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop) klonen“
- „[Branch](/articles/github-glossary/#branch)“ im {% data variables.product.prodname_dotcom %}-Glossar
- „[Informationen zu Branches](/articles/about-branches)“
- „[Branches auf einen Blick](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)“ in der Git-Dokumentation
