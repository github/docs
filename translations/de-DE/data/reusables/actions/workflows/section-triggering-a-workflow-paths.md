---
ms.openlocfilehash: 621271104f28983cd2cc1319a302fc1654e54acb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067780"
---

Wenn du die Ereignisse `push` und `pull_request` verwendest, kannst du einen Workflow konfigurieren, der basierend auf den geänderten Dateipfaden ausgeführt wird. Bei Push-Vorgängen zu Tags werden Pfadfilter nicht ausgewertet.

Verwende den Filter `paths`, wenn du Dateipfadmuster entweder einschließen oder einschließen und ausschließen möchtest. Verwende den Filter `paths-ignore`, wenn du Dateipfadmuster nur ausschließen möchtest. Du kannst die Filter `paths` und `paths-ignore` nicht für dasselbe Ereignis in einem Workflow nutzen.

Wenn du sowohl `branches`/`branches-ignore` als auch `paths` definierst, wird der Workflow nur ausgeführt, wenn beide Filter zutreffen.

Die Schlüsselwörter `paths` und `paths-ignore` akzeptieren Globmuster, die die Platzhalterzeichen `*` und `**` verwenden, um zu mehr als einem Pfadnamen zu passen. Weitere Informationen findest du auf dem [Filtermuster-Spickzettel](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

#### Beispiel: Einschließen von Pfaden

Wenn mindestens ein Pfad zu einem Muster im Filter `paths` passt, wird der Workflow ausgeführt. Der folgende Workflow wird beispielsweise jedes Mal ausgeführt, wenn du eine JavaScript-Datei (`.js`) pushst.

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Hinweis:** Wenn ein Workflow aufgrund von [Pfadfilterung](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [Branchfilterung](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) oder einer [Commitnachricht](/actions/managing-workflow-runs/skipping-workflow-runs) übersprungen wird, verbleiben diesem Workflow zugeordnete Überprüfungen im Status „Ausstehend“. Ein Pull Request, bei dem diese Prüfungen erfolgreich sein müssen, wird vom Mergen ausgeschlossen. Weitere Informationen findest du unter [Handhabung übersprungener, jedoch erforderlicher Überprüfungen](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks).

{% endnote %}

#### Beispiel: Ausschließen von Pfaden

Wenn alle Pfadnamen mit Mustern in `paths-ignore` übereinstimmen, wird der Workflow nicht ausgeführt. Wenn manche Pfadnamen nicht mit Mustern in `paths-ignore` übereinstimmen, wird der Workflow ausgeführt, obwohl einige Pfadnamen den Mustern entsprechen.

Ein Workflow mit dem folgenden Pfadfilter wird nur bei `push`-Ereignissen ausgeführt, bei denen sich mindestens eine Datei außerhalb des Verzeichnisses `docs` im Stamm des Repositorys befindet.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Beispiel: Einschließen und Ausschließen von Pfaden

Du kannst dasselbe Ereignis nicht mit `paths` und `paths-ignore` in einem einzigen Workflow filtern. Wenn du Pfadmuster für ein einzelnes Ereignis sowohl einschließen als auch ausschließen möchtest, verwende den Filter `paths` zusammen mit dem Zeichen `!`, um die auszuschließenden Pfade anzugeben.

Wenn du einen Pfad mit dem Zeichen `!` definierst, musst du auch mindestens einen Pfad ohne das Zeichen `!` definieren. Wenn du nur Pfade ausschließen möchtest, verwende stattdessen `paths-ignore`.

Die Reihenfolge, in der du Muster definierst, ist entscheidend:

- Ein passendes negatives Muster mit dem Präfix `!` nach einem positiven Abgleich schließt den Pfad aus.
- Ein passendes positives Muster nach einem negativen Abgleich schließt den Pfad wieder ein.

In diesem Beispiel wird jedes Mal ausgeführt, wenn das Ereignis `push` eine Datei im Verzeichnis `sub-project` oder in seinen Unterverzeichnissen enthält, es sei denn, die Datei befindet sich im Verzeichnis `sub-project/docs`. Beispielsweise löst in Push, der `sub-project/index.js` oder `sub-project/src/index.js` geändert hat, die Ausführung eines Workflows aus, dies geschieht jedoch nicht, wenn nur `sub-project/docs/readme.md` geändert wurde.

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Git-Diff-Vergleiche

{% note %}

**Hinweis:** Wenn der Push-Vorgang mehr als 1.000 Commits umfasst oder wenn {% data variables.product.prodname_dotcom %} die Diff wegen einer Zeitüberschreitung nicht erzeugt, wird der Workflow immer ausgeführt.

{% endnote %}

Um zu ermitteln, ob ein Workflow ausgeführt werden soll, wertet der Filter die geänderten Dateien anhand der Listen `paths-ignore` oder `paths` aus. Wurden keine Dateien geändert, wird der Workflow nicht ausgeführt.

{% data variables.product.prodname_dotcom %} erzeugt die Liste der geänderten Dateien mithilfe von „Two-Dot-Diffs“ (Vergleiche mittels 2 Punkt-Syntax „..“) für Push-Vorgänge und „Three-Dot-Diffs“ (Vergleiche mittels 3 Punkt-Syntax „...“) für Pull-Requests:
- **Pull Requests:** Three-Dot-Diffs ziehen den Vergleich zwischen der neuesten Version des Topic-Branch und des Commit, bei dem der Topic-Branch zuletzt mit dem Basis-Branch synchronisiert wurde.
- **Push-Vorgänge an bestehende Branches:** Eine Two-Dot-Diff vergleicht die Head- und Basis-SHAs direkt miteinander.
- **Push-Vorgänge an neue Branches:** Eine Two-Dot-Diff wird zum übergeordneten Element des Vorgängers des tiefsten Commits gepusht.

Diffs sind auf 300 Dateien beschränkt. Wenn Dateien geändert werden, die nicht mit den ersten 300 vom Filter zurückgegebenen Dateien übereinstimmen, wird der Workflow nicht ausgeführt. Du musst eventuell genauere Filter erstellen, damit der Workflow automatisch ausgeführt wird.

Weitere Informationen findest du unter [Informationen zum Vergleichen von Branches in Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests).
