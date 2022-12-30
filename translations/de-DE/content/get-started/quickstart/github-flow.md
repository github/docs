---
title: GitHub-Flow
intro: 'Befolge den {% data variables.product.prodname_dotcom %}-Ablauf, um an Projekten zusammenzuarbeiten.'
redirect_from:
  - /articles/creating-and-editing-files-in-your-repository
  - /articles/github-flow-in-the-browser
  - /articles/github-flow
  - /github/collaborating-with-issues-and-pull-requests/github-flow
  - /github/getting-started-with-github/github-flow
  - /github/getting-started-with-github/quickstart/github-flow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5458d7b14ff59bf7059f093ee47ee92034b9319f
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876942'
---
## Einführung

{% data variables.product.prodname_dotcom %}-Flow ist ein schlanker, branchbasierter Workflow. Der {% data variables.product.prodname_dotcom %}-Flow ist für alle Benutzer von Vorteil, nicht nur für Entwickler. Hier bei {% data variables.product.prodname_dotcom %} nutzen wir den {% data variables.product.prodname_dotcom %}-Flow zum Beispiel für unsere [Standortrichtlinie](https://github.com/github/site-policy), [Dokumentation](https://github.com/github/docs) und [Roadmap](https://github.com/github/roadmap).

## Voraussetzungen

Um dem {% data variables.product.prodname_dotcom %}-Flow zu folgen, benötigst du ein {% data variables.product.prodname_dotcom %}-Konto und ein Repository. Informationen zum Erstellen eines Kontos findest du unter [Registrierung für {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github). Wie du ein Repository erstellst, erfährst du unter [Erstellen eines Repositorys](/github/getting-started-with-github/create-a-repo).{% ifversion fpt or ghec %} Informationen zur Suche nach einem vorhandenen Projektarchiv, zu dem du beitragen kannst, findest du unter [Beitragen zu Open-Source-Projekten auf {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).{% endif %}

## Durchlaufen des {% data variables.product.prodname_dotcom %}-Flows

{% tip %}

{% ifversion fpt or ghec %} **Tipp:** Du kannst alle Schritte des {% data variables.product.prodname_dotcom %}-Flows über die {% data variables.product.prodname_dotcom %}-Weboberfläche, Befehlszeile und [{% data variables.product.prodname_cli %}](https://cli.github.com) oder über [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop) ausführen.
{% else %} **Tipp:** Du kannst alle Schritte des {% data variables.product.prodname_dotcom %}-Flows über die {% data variables.product.prodname_dotcom %}-Weboberfläche oder über die Befehlszeile und die [{% data variables.product.prodname_cli %}](https://cli.github.com) ausführen.
{% endif %}

{% endtip %}

### Erstellen einer Verzweigung

  Erstelle einen Branch in deinem Repository. Ein kurzer, beschreibender Branchname ermöglicht es den Projektmitarbeitern, sich auf einen Blick über die laufenden Arbeiten zu informieren. Zum Beispiel: `increase-test-timeout` oder `add-code-of-conduct`. Weitere Informationen findest du unter [Erstellen und Löschen von Branches innerhalb deines Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository).

  Indem du einen Branch erstellst, schaffst du einen Raum zum Arbeiten, ohne den Standardbranch zu beeinflussen. Außerdem gibst du den Projektmitarbeitern die Möglichkeit, deine Arbeit zu überprüfen.

### Vornehmen von Änderungen

In deinem Branch kannst du alle gewünschten Änderungen am Repository vornehmen. Weitere Informationen findest du unter [Erstellen neuer Dateien](/articles/creating-new-files), [Bearbeiten von Dateien](/articles/editing-files), [Umbenennen einer Datei](/articles/renaming-a-file), [Verschieben einer Datei an einen neuen Speicherort](/articles/moving-a-file-to-a-new-location) oder [Löschen von Dateien in einem Repository](/github/managing-files-in-a-repository/deleting-files-in-a-repository).

Dein Branch ist ein sicherer Ort, um Änderungen vorzunehmen. Wenn du einen Fehler machst, kannst du deine Änderungen rückgängig machen oder zusätzliche Änderungen vornehmen, um den Fehler zu korrigieren. Deine Änderungen werden erst dann in den Standardbranch übernommen, wenn du deinen Branch mergst.

Committe deine Änderungen und pushe sie in deinen Branch. Gib jedem Commit eine aussagekräftige Beschreibung, damit du und zukünftige Mitwirkende nachvollziehen können, welche Änderungen der Commit enthält. Zum Beispiel: `fix typo` oder `increase rate limit`.

Im Idealfall enthält jeder Commit eine isolierte, vollständige Änderung. Das macht es einfach, deine Änderungen rückgängig zu machen, wenn du dich für einen anderen Ansatz entscheidest. Wenn du zum Beispiel eine Variable umbenennen und einige Tests hinzufügen möchtest, fügst du die Variablenumbenennung in einen Commit und die Tests in einen anderen Commit ein. Wenn du später die Tests beibehalten, aber die Umbenennung der Variablen rückgängig machen möchtest, kannst du den Commit rückgängig machen, der die Umbenennung der Variablen beinhaltet. Wenn du die Variablenumbenennung und die Tests in denselben Commit einfügst oder die Variablenumbenennung auf mehrere Commits verteilst, würde dies den Aufwand für das Rückgängigmachen deiner Änderungen erhöhen.

Durch das Committen und Pushen deiner Änderungen sicherst du deine Arbeit in einem Remotespeicher. Dies bedeutet, dass du von jedem Gerät aus auf deine Arbeit zugreifen kannst. Außerdem können alle Projektmitarbeiter deine Arbeit sehen, Fragen beantworten und Vorschläge oder Beiträge einbringen.

Fahre damit fort, Änderungen zu erstellen und in deinen Branch zu committen und zu pushen, bis du bereit bist, Feedback einzuholen.

{% tip %}

**Tipp:** Erstelle einen separaten Branch für jeden Satz nicht zusammengehöriger Änderungen. Das macht es für die Reviewer einfacher, Feedback zu geben. Außerdem ist es so für dich und zukünftige Projektmitarbeiter einfacher, die Änderungen nachzuvollziehen und sie rückgängig zu machen oder darauf aufzubauen. Zudem gibt es keine Verzögerungen bei deinen anderen Änderungen, falls es bei einem Satz von Änderungen zu einer Verzögerung kommt.

{% endtip %}

### Erstellen eines Pull Requests

Erstelle einen Pull Request, um die Projektmitarbeiter um Feedback zu deinen Änderungen zu bitten. Die Überprüfung von Pull Requests ist so wichtig, dass in einigen Repositorys ein Review zur Genehmigung erforderlich ist, bevor Pull Requests gemergt werden können. Wenn du frühes Feedback oder Ratschläge einholen möchtest, bevor du deine Änderungen fertigstellst, kannst du deinen Pull Request als Entwurf markieren. Weitere Informationen findest du unter [Erstellen eines Pull Requests](/articles/creating-a-pull-request).

Wenn du einen Pull Request erstellst, fasse in einer Beschreibung zusammen, welche Änderungen durchgeführt werden und welches Problem gelöst wird. Du kannst zur Verdeutlichung Bilder, Links und Tabellen einfügen. Wenn dein Pull Request ein Issue betrifft, verlinke das Issue, damit die am Issue beteiligten Personen über den Pull Request informiert werden und umgekehrt. Bei einer Verknüpfung mit einem Schlüsselwort wird das Issue automatisch geschlossen, wenn der Pull Request gemergt wird. Weitere Informationen findest du unter [Grundlegende Schreib- und Formatierungssyntax](/github/writing-on-github/basic-writing-and-formatting-syntax) und [Verknüpfen eines Pull Requests mit einem Issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).

![Pull Request-Text](/assets/images/help/pull_requests/pull-request-body.png)

Du kannst nicht nur den Text des Pull Requests ausfüllen, sondern auch Kommentare zu bestimmten Zeilen des Pull Requests hinzufügen, um die Reviewer ausdrücklich auf etwas hinzuweisen.

![Pull Request-Kommentar](/assets/images/help/pull_requests/pull-request-comment.png)

Dein Repository kann so konfiguriert werden, dass es automatisch einen Review von bestimmten Teams oder Benutzern anfordert, wenn ein Pull Request erstellt wird. Darüber hinaus kannst du manuell per Erwähnung (@mention) oder bei bestimmten Personen oder Teams einen Review anfordern.

Wenn dein Repository so konfiguriert ist, dass Überprüfungen für Pull Requests durchgeführt werden, werden dir alle Überprüfungen angezeigt, die bei deinem Pull Request fehlgeschlagen sind. Das hilft dir, Fehler zu finden, bevor du deinen Branch zusammenführst. Weitere Informationen findest du unter [Informationen zu Statusüberprüfungen](/github/collaborating-with-issues-and-pull-requests/about-status-checks).

### Nutzen von Reviewkommentaren

Reviewer sollten Fragen stellen, Kommentare abgeben und Vorschläge machen. Reviewer können den gesamten Pull Request kommentieren oder Kommentare zu bestimmten Zeilen hinzufügen. Du und die Reviewer können Bilder oder Codevorschläge einfügen, um Kommentare zu verdeutlichen. Weitere Informationen findest du unter [Überprüfen von Änderungen in Pull Requests](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests).

Du kannst als Reaktion auf die Reviews weitere Änderungen committen und pushen. Dein Pull Request wird automatisch aktualisiert werden.

### Mergen deines Pull Requests

Sobald dein Pull Request genehmigt wurde, kannst du ihn mergen. Dabei wird dein Branch automatisch zusammengeführt, sodass deine Änderungen im Standardbranch erscheinen. {% data variables.product.prodname_dotcom %} speichert den Verlauf der Kommentare und Commits im Pull Request, damit zukünftige Mitwirkende deine Änderungen nachvollziehen können. Weitere Informationen findest du unter [Mergen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% data variables.product.prodname_dotcom %} informiert dich, ob dein Pull Request Konflikte aufweist, die vor dem Zusammenführen aufgelöst werden müssen. Weitere Informationen findest du unter [Informationen zu Mergekonflikten](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts).

Die Schutzeinstellungen für den Branch können das Mergen blockieren, wenn dein Pull Request bestimmte Anforderungen nicht erfüllt. Du benötigst z. B. eine bestimmte Anzahl von Reviews zur Genehmigung oder ein Review zur Genehmigung durch ein bestimmtes Team. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches).

### Löschen deines Branches

Nachdem du deinen Pull Request gemergt hast, löschst du deinen Branch. Dies zeigt an, dass die Arbeit an dem Branch abgeschlossen ist und verhindert, dass du oder andere versehentlich alte Branches verwenden. Weitere Informationen findest du unter [Löschen und Wiederherstellen von Branches in einem Pull Request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request).

Du musst keine Angst haben, Informationen zu verlieren. Dein Pull Request und der Commitverlauf werden nicht gelöscht. Du kannst deinen gelöschten Branch oder den Pull Request bei Bedarf jederzeit wiederherstellen.
