---
title: Änderungen an Deinem Projekt sowohl per Commit übertragen als auch überprüfen
intro: '{% data variables.product.prodname_desktop %} verfolgt alle Änderungen an allen Dateien, während Du sie bearbeitest. Du kannst festlegen, wie die Änderungen gruppiert werden sollen, um aussagekräftige Commits zu erstellen.'
versions:
  free-pro-team: '*'
---

### Informationen zu Commits

Bei einem Commit, der dem Speichern einer Datei ähnelt, handelt es sich um eine Änderung an mindestens einer Datei in Deinem Branch. Git weist jedem Commit eine eindeutige ID zu, die als SHA oder Hash bezeichnet wird. Damit wird Folgendes festgehalten:

- Die jeweiligen Änderungen
- Der Zeitpunkt der Änderungen
- Wer die Änderungen vorgenommen hat

Wenn Du einen Commit durchführst, musst Du eine Commit-Mitteilung hinzufügen, in der die Änderungen kurz beschrieben werden. Du kannst auch einen Co-Autor zu Commits hinzufügen, an denen Du mitarbeitest.

### 1. Branch auswählen und Änderungen vornehmen

1. [Erstelle einen neuen Branch](/desktop/guides/contributing-to-projects/managing-branches), oder wähle einen vorhandenen Branch aus. Klicke dazu auf der Symbolleiste auf {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** (Aktueller Branch), und wähle den Branch aus der Liste aus. ![Dropdownmenü, um Deinen aktuellen Branch zu wechseln](/assets/images/help/desktop/click-branch-in-drop-down.png)
{% data reusables.desktop.make-changes %}

### 2. Die in einen Commit einzubeziehenden Änderungen auswählen

Wenn Du in Deinem Texteditor Änderungen an Dateien vornimmst und Du diese lokal speicherst, werden die Änderungen auch in {% data variables.product.prodname_desktop %} angezeigt.

* Das rote {% octicon "diff-removed" aria-label="The diff removed icon color-red" %}-Symbol weist auf entfernte Dateien hin.
* Das gelbe {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %}-Symbol weist auf geänderte Dateien hin.
* Das grüne {% octicon "diff-added" aria-label="The diff added icon color-green" %}-Symbol weist auf hinzugefügte Dateien hin.
* Klicke auf **„Stashed Changes“ (Versteckte Änderungen)**, um auf versteckte Änderungen zuzugreifen. ![Option für versteckte Änderungen](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}
![Kontrollkästchen, um allen geänderten Dateien per Commit zu übertragen](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}
![Kontrollkästchen neben den Dateien, die zur Übertragung per Commit ausgewählt werden](/assets/images/help/desktop/commit-some.png)

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
  ![Schaltfläche „Discard Changes“ (Änderungen verwerfen) im Bestätigungsdialog](/assets/images/help/desktop/discard-changes-confirm-mac.png)

{% tip %}

**Tipp:** Die von Dir verworfenen Änderungen werden unter „Trash“ (Papierkorb) in einer Datei mit entsprechender Datumsangabe gespeichert. Du kannst diese wiederherstellen, bis der Papierkorb geleert wird.

{% endtip %}

{% endmac %}

{% windows %}

{% data reusables.desktop.select-discard-files %}{% data reusables.desktop.click-discard-files %}
  ![Option „Discard Changes“ (Änderungen verwerfen) im Kontextmenü](/assets/images/help/desktop/discard-changes-win.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Schaltfläche „Discard Changes“ (Änderungen verwerfen) im Bestätigungsdialog](/assets/images/help/desktop/discard-changes-confirm-win.png)

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
