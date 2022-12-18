---
title: Mergekonflikt auf GitHub beheben
intro: 'Einfache Mergekonflikte auf GitHub, bei denen Zeilenänderungen in Konflikt stehen, kannst du mit dem Konflikteditor beheben.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
  - /github/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts
ms.openlocfilehash: 48613d8c8974d14a1de70e0dee5a7f4819d37fd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133025'
---
Auf {% data variables.product.product_name %} kannst du nur Mergekonflikte beheben, die durch konkurrierende Zeilenänderungen verursacht werden, beispielsweise, wenn mehrere Personen unterschiedliche Änderungen an der gleichen Zeile in der gleichen Datei in verschiedenen Branches deines Git-Repositorys vornehmen. Alle anderen Mergekonflikte musst Du lokal in der Befehlszeile beheben. Weitere Informationen findest du unter [Auflösen eines Mergekonflikts mithilfe der Befehlszeile](/articles/resolving-a-merge-conflict-using-the-command-line/).

{% ifversion ghes or ghae %} Wenn ein Websiteadministrator den Editor für Mergekonflikte für Pull Requests zwischen Repositorys deaktiviert, kannst du den Konflikt-Editor nicht für {% data variables.product.product_name %} verwenden und musst Mergekonflikte über die Befehlszeile beseitigen. Beispielsweise kannst du den Mergekonflikt-Editor, wenn er deaktiviert ist, nicht für Pull Requests zwischen einem Fork und einem vorgelagerten Repository verwenden.
{% endif %}

{% warning %}

**Warnung:** Wenn du einen Mergekonflikt für {% data variables.product.product_name %} auflöst, wird der gesamte [Basisbranch](/github/getting-started-with-github/github-glossary#base-branch) deines Pull Requests in den [Headbranch](/github/getting-started-with-github/github-glossary#head-branch) gemergt. Vergewissere Dich, dass Du wirklich diesen Branch freigeben willst. Wenn der Headbranch der Standardbranch deines Repositorys ist, hast du die Möglichkeit, einen neuen Branch zu erstellen, der als Headbranch für deinen Pull Request dient. Wenn der Head-Branch geschützt ist, kannst Du Deine Konflikt-Auflösung nicht zusammenführen, deshalb wirst Du aufgefordert werden, einen neuen Head-Branch zu erstellen. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches).

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. Klicke in der Liste der Pull Requests auf den Pull Request mit dem Mergekonflikt, den Du beheben möchtest.
1. Klicke im unteren Bereich deines Pull Requests auf **Konflikte auflösen**.
![Schaltfläche „Mergekonflikte lösen“](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **Tipp:** Wenn die Schaltfläche **Konflikte auflösen** deaktiviert ist, ist der Mergekonflikt deines Pull Requests für eine Behebung auf {% data variables.product.product_name %} zu komplex{% ifversion ghes or ghae %}, oder der Websiteadministrator hat den Konflikt-Editor für Pull Requests zwischen Repositorys deaktiviert{% endif %}. Du musst den Mergekonflikt mit einem alternativen Git-Client auflösen, oder durch Verwendung von Git auf der Befehlszeile. Weitere Informationen findest du unter [Auflösen eines Mergekonflikts mithilfe der Befehlszeile](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).

 {% endtip %} {% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} ![Anzeigen eines Mergekonfliktbeispiels mit Konflikthinweisen](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. Wenn Deine Datei mehrere Mergekonflikte enthält, scrolle nach unten zum nächsten Konflikthinweis, und wiederhole dort die Schritte 4 und 5, um auch diesen Mergekonflikt zu beheben.
1. Wenn du alle Konflikte in der Datei aufgelöst hast, klicke auf **Als behoben markieren**.
 ![Klicken auf die Schaltfläche „Als behoben markieren“](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. Wenn mehrere Dateien Konflikte enthalten, wähle auf der linken Seite unter „Conflicting files“ (Dateien mit Konflikten) die nächste Datei aus, und wiederhole die Schritte 4 bis 7, bis Du alle Mergekonflikte Deines Pull Request behoben hast.
 ![Auswählen der nächsten Datei mit Konflikten, falls zutreffend](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. Sobald du alle Mergekonflikte gelöst hast, klickst du auf **Merge committen**. Dadurch wird der gesamte Basis-Branch in Deinen Head-Branch zusammengeführt.
 ![Schaltfläche „Mergekonflikte lösen“](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)
1. Sofern Du eine entsprechende Aufforderung erhältst, überprüfe den Branch, in den der Commit erfolgt.

   Wenn der Head-Branch der Standardbranch Deines Repositorys ist, kannst Du wählen, entweder diesen Branch mit den Änderungen zu aktualisieren, die Du zur Auflösung des Konfliktes gemacht hast, oder einen neuen Branch zu erstellen und diesen als Head-Branch des Pull Requests zu verwenden.
 ![Aufforderung zum Überprüfen des Branches, der aktualisiert wird](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   Wenn Du Dich für einen neuen Branch entscheidest, gib den Namen für den Branch ein.

   Wenn der Head-Branch Deines Pull-Requests geschützt ist, musst Du einen neuen Branch erstellen. Du hast keine Möglichkeit, den geschützten Branch zu aktualisieren.

   Klicke auf **Branch erstellen und Pull Request aktualisieren** oder **Verstanden, Aktualisierung von _BRANCH_ fortsetzen**. Der Text der Schaltfläche entspricht der Aktion, die Du durchführst.
1. Um deinen Pull Request zu mergen, klicke auf **Pull Request mergen**. Informationen zu weiteren Optionen zum Mergen von Pull Requests findest du unter [Mergen eines Pull Requests](/articles/merging-a-pull-request/).

## Weiterführende Themen

- [Informationen zum Zusammenführen von Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
