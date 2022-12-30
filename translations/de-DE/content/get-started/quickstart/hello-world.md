---
title: Hello World
intro: 'Absolviere diese Hallo-Welt-Übung, um dich mit {% data variables.product.product_name %} vertraut zu machen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 71278b720bcbfaabc892c396ab7fb558f5309173
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145125865'
---
## Einführung

{% data variables.product.product_name %} ist eine Codehostingplattform für die Versionskontrolle und Zusammenarbeit. Du kannst von jedem Ort aus mit anderen an Projekten zusammenarbeiten.

In diesem Tutorial werden {% data variables.product.product_name %}-Grundlagen wie Repositorys, Commits und Pull Requests behandelt. Du erstellst ein eigenes Hallo-Welt-Repository und lernst den Pull-Request-Workflow von {% data variables.product.product_name %} kennen, der häufig beim Programmieren und für Code Reviews eingesetzt wird.

Inhalt dieses Schnellstarts:

* Erstellen und Verwenden eines Repositorys
* Beginnen und Verwalten eines neuen Branches
* Bearbeiten von Dateien und Pushen der Dateien an {% data variables.product.product_name %} als Commits
* Öffnen und Mergen von Pull Requests

Für dieses Tutorial benötigst du ein [{% data variables.product.product_name %}-Konto](http://github.com) und Internetzugriff. du benötigst keine Kenntnisse im Programmieren oder im Umgang mit der Befehlszeile. Auch eine Installation von Git (Versionskontrollsoftware, auf der {% data variables.product.product_name %} basiert) ist nicht erforderlich. Wenn du Fragen zu den in diesem Leitfaden verwendeten Begriffen hast, kannst du diese im [Glossar](/get-started/quickstart/github-glossary) nachschlagen.

## Repository erstellen

Ein Repository wird in der Regel verwendet, um ein einzelnes Projekt zu organisieren. Repositorys können Ordner und Dateien, Bilder, Videos, Tabellenkalkulationen und Datasets enthalten – also alles, was dein Projekt benötigt. Häufig enthalten Repositorys eine _README-Datei_. Dabei handelt es sich um eine Datei mit Informationen zu deinem Projekt. _README-Dateien_ werden in einer Markdown-Sprache mit Nur-Text geschrieben. Dieses [Cheatsheet](https://www.markdownguide.org/cheat-sheet/) hilft ihnen beim Einstieg in die Markdown-Syntax. Auf {% data variables.product.product_name %} kannst du beim Erstellen eines neuen Repositorys eine _README-Datei_ hinzuzufügen. Auf {% data variables.product.product_name %} gibt es auch andere gängige Optionen, zum Beispiel für Lizenzdateien, doch diese musst du jetzt nicht ausprobieren.

In deinem `hello-world`-Repository kannst du Ideen und Ressourcen speichern, für andere freigeben und sich mit anderen austauschen.

{% data reusables.repositories.create_new %}
1. Gib `hello-world` in das Feld **Repositoryname** ein.
2. Gib im Feld **Beschreibung** eine kurze Beschreibung ein.
3. Wähle **README-Datei hinzufügen** aus.
4. Wähle die Option **Öffentlich** oder **Privat** für dein Repository aus.
5. Klicke auf **Repository erstellen**.

   ![Erstellen eines Hallo-Welt-Repositorys](/assets/images/help/repository/hello-world-repo.png)

## Branch erstellen

Mithilfe von Branching kannst du verschiedene Versionen eines Repositorys gleichzeitig verwalten.

Standardmäßig verfügt dein Repository über einen Branch mit dem Namen `main`, der als maßgeblicher Branch betrachtet wird. Basierend auf `main` kannst du zusätzliche Branches in deinem Repository erstellen. Du kannst Branches verwenden, wenn du verschiedene Versionen eines Projekts gleichzeitig benötigst. So kannst du dem Projekt neue Features hinzufügen, ohne die Hauptquelle für den Code zu ändern. Die an den anderen Branches vorgenommenen Änderungen werden erst in den Mainbranch aufgenommen, wenn du diese mergst. Dieses Thema wird später in diesem Leitfaden behandelt. Du kannst Branches verwendest, um Experimente und Änderungen vorzunehmen, bevor du diese an `main` committest.

Wenn du einen Branch aus `main` erstellst, handelt es sich um eine Kopie bzw. Momentaufnahme von `main` zum jeweiligen Zeitpunkt. Wenn eine andere Person Änderungen an `main` vornimmt, während du an deinem Branch arbeitest, könntest du diese Updates pullen.

Dieses Diagramm zeigt:

* Der Branch `main`
* Ein neuer Branch namens `feature`
* Der Weg von `feature` bis zum Merge mit `main`

![Diagramm zum Branching](/assets/images/help/repository/branching.png)

Hast du schon einmal verschiedene Versionen einer Datei gespeichert? Zum Beispiel:

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

Branches haben eine ähnliche Funktion in {% data variables.product.product_name %}-Repositorys.

Unsere Entwickler*innen, Autor*innen und Designer*innen bei {% data variables.product.product_name %} verwenden Branches, um Fehlerkorrekturen und Arbeiten an Features vom `main`-Branch (Produktionsbranch) getrennt zu halten. Wenn ein Update fertig ist, mergen sie ihren Branch mit `main`.

### Erstellen einer Verzweigung

1. Klicke auf die Registerkarte **Code** deines `hello-world`-Repositorys.
2. Klicke oben in der Dateiliste auf die Dropdownliste mit dem Namen **main**.
   ![Branchmenü](/assets/images/help/branch/branch-selection-dropdown.png)
4. Gib den Branchnamen `readme-edits` in das Textfeld ein.
5. Klicke auf **Branch erstellen: readme-edits aus main**.

![Branchmenü](/assets/images/help/repository/new-branch.png)

Jetzt besitzt du die beiden Branches `main` und `readme-edits`. Derzeit sind diese identisch. Nimm nun Änderungen am neuen Branch vor.

## Vornehmen und Committen von Änderungen

Als du im vorherigen Schritt einen neuen Branch erstellt hast, hat {% data variables.product.product_name %} dich zur Codepage für den neuen Branch `readme-edits` gebracht, der eine Kopie von `main` ist.

Du kannst Änderungen an den Dateien im Repository vornehmen und speichern. Gespeicherte Änderungen heißen auf {% data variables.product.product_name %} Commits. Jeder Commit hat eine zugehörige Commitnachricht, die als Erklärung dient, warum eine bestimmte Änderung vorgenommen wurde. Commitnachrichten erfassen den Verlauf deiner Änderungen, damit andere Mitwirkende nachvollziehen können, was du getan hast und warum.

1. Klicke unter dem erstellten `readme-edits`-Branch auf die Datei _README.md_.
2. Klicke auf {% octicon "pencil" aria-label="The edit icon" %}, um die Datei zu bearbeiten.
3. Gib im Editor eine kurze Information zu deiner Person an. Probiere verschiedene Markdown-Elemente aus.
4. Gib im Feld **Änderungen committen** eine Nachricht ein, die deine Änderungen erklärt.
5. Klicke auf **Änderungen committen**.

   ![Commitbeispiel](/assets/images/help/repository/first-commit.png)

Diese Änderungen werden nur an der README-Datei in deinem `readme-edits`-Branch vorgenommen, sodass dieser nun einen anderen Inhalt als `main` hat.

## Öffnen eines Pull Request

Nachdem du nun Änderungen in einem aus `main` erstellten Branch vorgenommen hast, kannst du einen Pull Request öffnen.

Pull Requests sind das Herzstück der Zusammenarbeit auf {% data variables.product.product_name %}. Wenn du einen Pull Request öffnest, schlage deine Änderungen vor und beantrage ein Review. Der oder die Reviewer*in pullt deinen Beitrag und mergt diesen mit seinem oder ihrem Branch. Pull Requests heben die Unterschiede zwischen dem Inhalt beider Branches hervor. Die geänderten, ergänzten und entfernten Inhalte werden in verschiedenen Farben angezeigt.

Sobald du einen Commit vornimmst, kannst du einen Pull Request öffnen und eine Diskussion anstoßen, auch wenn der Code noch nicht fertig ist.

Verwende das `@mention`-Feature von {% data variables.product.product_name %} in deiner Pull-Request-Nachricht, um bestimmte Benutzer*innen oder Teams um Feedback zu bitten. Dabei spielt es keine Rolle, ob sich diese im nächsten Büro oder zehn Zeitzonen entfernt aufhalten.

Du kannst sogar Pull Requests in deinem eigenen Repository öffnen und selbst mergen. So kannst du dich mit dem {% data variables.product.product_name %}-Flow vertraut machen, bevor du an größeren Projekten arbeitest.

1. Klicke auf die Registerkarte **Pull Requests** deines `hello-world`-Repositorys.
2. Klicke auf **Neuer Pull Request**.
3. Wähle im Feld **Beispielvergleiche** den von dir erstellten Branch `readme-edits` aus, der mit `main` (dem Original) verglichen werden soll.
4. Überprüfe deine als Unterschiede dargestellten Änderungen auf der Seite „Vergleich“, um sich zu vergewissern, dass du diese Änderungen übermitteln möchtest.

   ![Beispiel für Unterschiede](/assets/images/help/repository/diffs.png)

5. Klicke auf **Pull Request erstellen**.
6. Gib einen Titel für deinen Pull Request und eine kurze Beschreibung deiner Änderungen ein. Du kannst auch Emojis einfügen, außerdem Bilder und GIFs per Drag & Drop.
7. Optional kannst du rechts neben dem Titel und der Beschreibung auf das Symbol {% octicon "gear" aria-label="The Gear icon" %} neben **Reviewer** klicken. Du kannst die Optionen **Zugewiesene Personen**, **Bezeichnungen**, **Projekte** oder **Meilenstein** zu deinem Pull Request hinzufügen. Das musst du nicht jetzt tun, doch du solltest diese Optionen kennen, da sie andere Möglichkeiten für die Zusammenarbeit mithilfe von Pull Requests bieten. Weitere Informationen findest du unter [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).
7. Klicke auf **Pull Request erstellen**.

Die Projektmitarbeiter*innen können deine Bearbeitungen jetzt überprüfen und Vorschläge machen.

## Mergen deines Pull Request

Im letzten Schritt mergst du deinen `readme-edits`-Branch mit dem `main`-Branch.  Nach dem Mergen deines Pull Request werden die Änderungen am `readme-edits`-Branch in `main` integriert.

Manchmal führen die Codeänderungen durch den Pull Request zu Konflikten mit dem bestehenden Code in `main`. Falls Codekonflikte auftreten, zeigt {% data variables.product.product_name %} eine Warnung an und verhindert den Mergevorgang, bis die Konflikte behoben sind. Du kannst die Konflikte mit einem Commit beheben oder Kommentare im Pull Request erstellen, um diese mit Teammitgliedern zu besprechen.

In dieser exemplarische Vorgehensweise sollten keine Konflikte vorhanden sein. Du bist also bereit, deinen Branch mit dem Mainbranch zu mergen.

1. Klicke auf **Pull Request mergen**, um die Änderungen mit `main` zu mergen.
  ![Screenshot: Schaltfläche zum Mergen](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. Klicke auf **Merge bestätigen**. Es wird eine Meldung angezeigt, dass der Pull Request erfolgreich gemergt und geschlossen wurde.
3. Klicke auf **Branch löschen**. Da dein Pull Request gemergt wurde und deine Änderungen in `main` gespeichert sind, kannst du den `readme-edits`-Branch bedenkenlos löschen. Wenn du weitere Änderungen an deinem Projekt vornehmen möchtest, kannst du jederzeit einen neuen Branch erstellen und diesen Vorgang wiederholen.

## Nächste Schritte

In diesem Tutorial hast du erfahren, wie du auf {% data variables.product.product_name %} ein Projekt und einen Pull Request erstellst.

Das hast du in diesem Tutorial gelernt:

* Erstellen eines Open-Source-Repositorys
* Starten und Verwalten eines neuen Branches
* Bearbeiten einer Datei und Committen der Änderungen an {% data variables.product.product_name %}
* Öffnen und Mergen eines Pull Request

Besuche nun dein {% data variables.product.product_name %}-Profil. Dort siehst du, dass deine Aktivitäten auf dem Beitragsdiagramm reflektiert werden.

Weitere Informationen zu Branches und Pull Requests findest du unter [GitHub-Flow](/get-started/quickstart/github-flow). Weitere Informationen zu den ersten Schritten mit {% data variables.product.product_name %} findest du in den anderen Leitfäden in diesem [Schnellstart](/get-started/quickstart).
