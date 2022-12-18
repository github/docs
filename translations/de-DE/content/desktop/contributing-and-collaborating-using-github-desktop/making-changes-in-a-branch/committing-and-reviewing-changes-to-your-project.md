---
title: Committen und Überprüfen von Änderungen an deinem Projekt
intro: '{% data variables.product.prodname_desktop %} verfolgt alle Änderungen an allen Dateien nach, während du sie bearbeitest. Du kannst festlegen, wie die Änderungen gruppiert werden sollen, um aussagekräftige Commits zu erstellen.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  fpt: '*'
shortTitle: Commit & review changes
ms.openlocfilehash: ecc12722a7d0eebeedc13878972d138ca894db5a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105372'
---
## Informationen zu Commits

{% data reusables.commits.about-commits %} Du kannst außerdem Mitautor*innen zu allen Commits hinzufügen, an denen du mitarbeitest.

{% data reusables.desktop.update-email-address %} Weitere Informationen findest du unter [Konfigurieren von Git für GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop).

## Branch auswählen und Änderungen vornehmen

1. [Erstelle einen neuen Branch](/desktop/guides/contributing-to-projects/managing-branches), oder wähle einen vorhandenen Branch aus, indem du auf der Symbolleiste auf {% octicon "git-branch" aria-label="The branch icon" %} **Aktueller Branch** klickst und den Branch aus der Liste auswählst.

  ![Dropdownmenü zum Wechseln des aktuellen Branches](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.make-changes %}

## Auswählen der Anzeige von Unterschieden

Du kannst die Art der Anzeige von Unterschieden {% data variables.product.prodname_desktop %} an deine Anforderungen bei der Überprüfung anpassen.

Um die Anzeige der Unterschiede zu ändern, klicke in der rechten oberen Ecke der Diff-Ansicht auf {% octicon "gear" aria-label="The Gear icon" %}.
- Um die gesamte Darstellung der Unterschiede zu ändern, wähle unter „Diff-Anzeige“ die Optionen **Einheitlich** oder **Geteilt** aus. Die einheitliche Ansicht zeigt Änderungen linear an, während die geteilte Ansicht alte Inhalte auf der linken Seite und neue Inhalte auf der rechten Seite anzeigt.
- Um Leerraumänderungen auszublenden, damit du dich auf wichtigere Änderungen konzentrieren kannst, wähle **Leerraumänderungen ausblenden** aus.

![Diff-Optionsmenü](/assets/images/help/desktop/diff-selection.png)

Wenn du mehr von der Datei sehen möchtest, als {% data variables.product.prodname_desktop %} standardmäßig anzeigt, kannst du die Diff-Ansicht erweitern.
- Um die nächsten Zeilen über oder unter den hervorgehobenen Änderungen zu sehen, klicke auf den Pfeil über oder unter den Zeilennummern.
- Um die gesamte Datei zu sehen, klicke mit der rechten Maustaste in die Diff-Ansicht, und klicke auf **Gesamte Datei erweitern**.

![Erweitern der Diff-Ansicht](/assets/images/help/desktop/expand-diff-view.png)

## Die in einen Commit einzubeziehenden Änderungen auswählen

Wenn du in deinem Texteditor Änderungen an Dateien vornimmst und diese lokal speicherst, werden die Änderungen auch in {% data variables.product.prodname_desktop %} angezeigt.

* Das rote {% octicon "diff-removed" aria-label="The diff removed icon color-red" %}-Symbol weist auf entfernte Dateien hin.
* Das gelbe {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %}-Symbol verweist auf geänderte Dateien.
* Das grüne {% octicon "diff-added" aria-label="The diff added icon color-green" %}-Symbol weist auf hinzugefügte Dateien hin.
* Wenn du auf gestashte Änderungen zugreifen möchtest, klicke auf **Gestashte Änderungen**.

  ![Option für versteckte Änderungen](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![Kontrollkästchen, um allen geänderten Dateien per Commit zu übertragen](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![Kontrollkästchen neben den Dateien, die zur Übertragung per Commit ausgewählt werden](/assets/images/help/desktop/commit-some.png)

### Partiellen Commit erstellen

Wenn eine Datei mehrere Änderungen enthält, du aber nur einen Teil dieser Änderungen in einen Commit einbeziehen möchtest, kannst du einen partiellen Commit erstellen. Der Rest deiner Änderungen bleibt erhalten, sodass du zusätzliche Änderungen und Commits vornehmen kannst. Dadurch kannst du separate, aussagekräftige Commits erstellen, beispielsweise kannst du Änderungen der Zeilenumbrüche in einem Commit vom Code oder von Fließtextänderungen getrennt halten.

Um geänderte Zeilen aus deinem Commit auszuschließen, klicke auf eine oder mehrere geänderte Zeilen, um sie nicht länger blau zu markieren. Die Zeilen, die weiterhin blau markiert sind, werden in den Commit aufgenommen.

  ![Zeilen in einer Datei aus der Auswahl entfernen](/assets/images/help/desktop/partial-commit.png)

## Änderungen verwerfen
Wenn ausgecheckte Änderungen vorhanden sind, die du nicht beibehalten möchtest, kannst du die Änderungen verwerfen. Dadurch werden die Änderungen aus den Dateien auf deinem Computer entfernt. Du kannst alle ausgecheckten Änderungen in einer oder mehreren Dateien verwerfen, oder du kannst bestimmte Zeilen verwerfen, die du hinzugefügt hast.

Verworfene Änderungen werden in einer datierten Datei im Papierkorb gespeichert. Du kannst verworfene Änderungen wiederherstellen, bis der Papierkorb geleert wird.

### Verwerfen von Änderungen in einer oder mehreren Dateien

{% data reusables.desktop.select-discard-files %} {% data reusables.desktop.click-discard-files %}

  ![Option „Änderungen verwerfen“ im Kontextmenü](/assets/images/help/desktop/discard-changes-mac.png) {% data reusables.desktop.confirm-discard-files %}

  ![Schaltfläche „Discard Changes“ (Änderungen verwerfen) im Bestätigungsdialog](/assets/images/help/desktop/discard-changes-confirm-mac.png)

### Verwerfen von Änderungen in einer oder mehreren Zeilen
Du kannst eine oder mehrere geänderte Zeilen verwerfen, für die noch kein Commit durchgeführt wurde.

{% note %}

**Hinweis:** Das Verwerfen einzelner Zeilen ist bei einer Gruppe von Änderungen, die Zeilen hinzufügen und entfernen, deaktiviert.

{% endnote %}

Um eine hinzugefügte Zeile zu verwerfen, klickst du in der Liste der geänderten Zeilen mit der rechten Maustaste auf die Zeile, die du verwerfen möchtest, und wählst **Zeile verwerfen** aus.

  ![Verwerfen einer einzelnen Zeile im Bestätigungsdialogfeld](/assets/images/help/desktop/discard-single-line.png)

Um eine Gruppe geänderter Zeilen zu verwerfen, klickst du mit der rechten Maustaste auf den vertikalen Balken rechts neben den Zeilennummern der Zeilen, die du verwerfen möchtest, und wählst dann **Hinzufügte Zeilen verwerfen** aus.

  ![Verwerfen einer Gruppe hinzugefügter Zeilen im Bestätigungsdialogfeld](/assets/images/help/desktop/discard-multiple-lines.png)


## Eine Commit-Mitteilung schreiben und deine Änderungen per Push übertragen

Sobald du mit den Änderungen zufrieden bist, die du in deinen Commit aufnehmen möchtest, schreibest du deine Commit-Mitteilung, und überträgst deine Änderungen per Push. Wenn du an einem Commit mitgewirkt hast, kannst du einen Commit auch mehr als einem Autor zuweisen.

{% note %}

**Hinweis**: {% data reusables.desktop.tags-push-with-commits %} Weitere Informationen findest du unter [Verwalten von Tags](/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags).

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Feld für Commit-Mitteilung](/assets/images/help/desktop/commit-message.png)
1. Um einen Commit einem anderen Autor zuzuweisen, kannst du optional auf das Symbol zum Hinzufügen von Co-Autoren klicken und den bzw. die Benutzername(n) eingeben, den bzw. die du hinzufügen möchtest.

  ![Hinzufügen eines Co-Autors zur Commitmeldung](/assets/images/help/desktop/add-co-author-commit.png) {% data reusables.desktop.commit-button %}

  ![Schaltfläche „Commit“](/assets/images/help/desktop/commit-button.png)
4. Wenn der Branch, zu dem du per Commit übertragen möchtest, geschützt ist, wirst du von Desktop benachrichtigt.
    - Wenn du deine Änderungen verschieben möchtest, klicke auf **Branches wechseln**.
    - Um deine Änderungen an den geschützten Branch zu committen, klicke auf **Commit an _BRANCH_**.

  Weitere Informationen zu geschützten Branches findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches).

  ![Warnung zu geschütztem Branch](/assets/images/help/desktop/protected-branch-warning.png) {% data reusables.desktop.push-origin %}

6. Wenn du über einen Pull Request verfügst, der auf dem Branch basiert, an dem du gerade arbeitest, zeigt {% data variables.product.prodname_desktop %} den Status der Überprüfungen an, die für den Pull Request durchgeführt wurden. Weitere Informationen zu Überprüfungen findest du unter [Anzeigen und erneutes Ausführen von Überprüfungen in GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop).

 ![Überprüfungsanzeige neben dem Branchnamen](/assets/images/help/desktop/checks-dialog.png)

 Wenn für den aktuellen Zweig noch kein Pull Request erstellt wurde, gibt {% data variables.product.prodname_desktop %} dir die Möglichkeit, einen Pull Request zu erstellen. Weitere Informationen findest du unter [Erstellen eines Issues oder Pull Requests](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request).

 ![Erstellen eines Pull Requests](/assets/images/help/desktop/mac-create-pull-request.png)
