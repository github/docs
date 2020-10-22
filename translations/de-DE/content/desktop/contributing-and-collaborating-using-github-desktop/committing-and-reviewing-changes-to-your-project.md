---
title: Änderungen an Deinem Projekt sowohl per Commit übertragen als auch überprüfen
intro: '{% data variables.product.prodname_desktop %} verfolgt alle Änderungen an allen Dateien, während Sie sie bearbeiten. Du kannst festlegen, wie die Änderungen gruppiert werden sollen, um aussagekräftige Commits zu erstellen.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
versions:
  free-pro-team: '*'
---

### Informationen zu Commits

{% data reusables.commits.about-commits %} You can also add a co-author on any commits you collaborate on.

{% data reusables.desktop.update-email-address %} For more information, see ["Configuring Git for GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)."

### 1. Branch auswählen und Änderungen vornehmen

1. [Create a new branch](/desktop/guides/contributing-to-projects/managing-branches), or select an existing branch by clicking

{% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** on the toolbar and selecting the branch from the list.
  ![Dropdownmenü, um Deinen aktuellen Branch zu wechseln](/assets/images/help/desktop/click-branch-in-drop-down.png)
{% data reusables.desktop.make-changes %}

### 2. Die in einen Commit einzubeziehenden Änderungen auswählen

Wenn Sie in Ihrem Texteditor Änderungen an Dateien vornehmen und Sie diese lokal speichern, werden die Änderungen auch in {% data variables.product.prodname_desktop %} angezeigt.

* Das rote {% octicon "diff-removed" aria-label="The diff removed icon color-red" %}-Symbol weist auf entfernte Dateien hin.
* Das gelbe {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %}-Symbol weist auf geänderte Dateien hin.
* Das grüne {% octicon "diff-added" aria-label="The diff added icon color-green" %}-Symbol weist auf hinzugefügte Dateien hin.
* Klicke auf **„Stashed Changes“ (Versteckte Änderungen)**, um auf versteckte Änderungen zuzugreifen. ![Option für gestashte Änderungen](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}
![Kontrollkästchen zum Committen von allen geänderten Dateien aktivieren](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}
![Kontrollkästchen neben den zu committenden Dateien aktivieren](/assets/images/help/desktop/commit-some.png)

#### Partiellen Commit erstellen

Wenn eine Datei mehrere Änderungen aufweist, Du aber möchtest, dass nur *einige* dieser Änderungen in einem Commit enthalten sind, kannst Du einen partiellen Commit erstellen. Der Rest Deiner Änderungen bleibt erhalten, sodass Du zusätzliche Änderungen und Commits vornehmen kannst. Dadurch kannst Du separate, aussagekräftige Commits erstellen, beispielsweise kannst Du Änderungen der Zeilenumbrüche in einem Commit vom Code oder von Fließtextänderungen getrennt halten.

Wenn Du den Diff der Datei überprüfst, werden die Zeilen, die in den Commit aufgenommen werden, blau hervorgehoben. Um die Änderung auszuschließen, klickst Du auf die geänderte Zeile, damit das Blau verschwindet.

![Zeilen in einer Datei aus der Auswahl entfernen](/assets/images/help/desktop/partial-commit.png)

#### Änderungen verwerfen

Du kannst alle nicht per Commit übertragenen Änderungen in einer einzelnen Datei, in einer Gruppe von Dateien oder alle Änderungen in allen Dateien seit dem letzten Commit verwerfen.

{% mac %}

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}
  ![Option „Discard Changes“ (Änderungen verwerfen) im Kontextmenü](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Schaltfläche „Discard Changes“ (Änderungen verwerfen) im Bestätigungsdialogfeld](/assets/images/help/desktop/discard-changes-confirm-mac.png)

{% tip %}

**Tipp:** Die von Dir verworfenen Änderungen werden unter „Trash“ (Papierkorb) in einer Datei mit entsprechender Datumsangabe gespeichert. Du kannst diese wiederherstellen, bis der Papierkorb geleert wird.

{% endtip %}

{% endmac %}

{% windows %}

{% data reusables.desktop.select-discard-files %}{% data reusables.desktop.click-discard-files %}
  ![Option „Discard Changes“ (Änderungen verwerfen) im Kontextmenü](/assets/images/help/desktop/discard-changes-win.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Schaltfläche „Discard Changes“ (Änderungen verwerfen) im Bestätigungsdialogfeld](/assets/images/help/desktop/discard-changes-confirm-win.png)

{% tip %}

**Tipp:** Die von Dir verworfenen Dateien werden im „Recycle Bin“ (Papierkorb) in einer Datei gespeichert. Du kannst diese wiederherstellen, bis der Papierkorb geleert wird.

{% endtip %}

{% endwindows %}

### 3. Eine Commit-Mitteilung schreiben und Deine Änderungen per Push übertragen

Sobald Du mit den Änderungen zufrieden bist, die Du in Deinen Commit aufnehmen möchtest, schreibest Du Deine Commit-Mitteilung, und überträgst Deine Änderungen per Push. Wenn Du an einem Commit mitgewirkt hast, kannst Du einen Commit auch mehr als einem Autor zuweisen.

{% note %}

**Hinweis**: {% data reusables.desktop.tags-push-with-commits %} Weitere Informationen findest Du unter „[Tags verwalten](/desktop/contributing-to-projects/managing-tags)“.

{% endnote %}

{% data reusables.desktop.commit-message %}
  ![Feld für Commit-Mitteilung](/assets/images/help/desktop/commit-message.png)
2. Um einen Commit einem anderen Autor zuzuweisen, kannst Du optional auf das Symbol zum Hinzufügen von Co-Autoren klicken und den bzw. die Benutzername(n) eingeben, den bzw. die Du hinzufügen möchtest. ![Einen Co-Autor zur Commit-Mitteilung hinzufügen](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}
  ![Schaltfläche zur Übertragung per Commit](/assets/images/help/desktop/commit-button.png)
4. Wenn der Branch, zu dem Du per Commit übertragen möchtest, geschützt ist, wirst Du von Desktop benachrichtigt.
    - Um Deine Änderungen zu verschieben, klickst Du auf **„switch branches“ (Branches umschalten)**.
    - Um Deine Änderungen in den geschützten Branch zu übertragen, klickst Du auf **„Commit to _BRANCH_“ (Per Commit an _BRANCH_ übertragen)**.

  Weitere Informationen über geschützte Branches findest Du unter „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches)“. ![Warnung wegen geschütztem Branch](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}
