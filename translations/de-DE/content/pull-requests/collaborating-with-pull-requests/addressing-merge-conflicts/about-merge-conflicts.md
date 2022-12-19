---
title: Informationen zu Mergekonflikten
intro: 'Zu Mergekonflikten kommt es, wenn du Branches zusammenführst, die konkurrierende Commits haben, und Git deine Hilfe benötigt, um zu entscheiden, welche Änderungen in den endgültigen Merge aufgenommen werden sollen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/about-merge-conflicts
  - /articles/about-merge-conflicts
  - /github/collaborating-with-issues-and-pull-requests/about-merge-conflicts
  - /github/about-merge-conflicts
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
ms.openlocfilehash: 5902f74a9c51772dc3f1d8883b60723ffec3e1d1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145133029'
---
Oft kann Git Unterschiede zwischen Branches beheben und diese automatisch zusammenführen. In der Regel liegen die Änderungen in verschiedenen Zeilen oder sogar in verschiedenen Dateien vor, was das Zusammenführen für Computer leicht verständlich macht. Manchmal gibt es jedoch konkurrierende Änderungen, die Git ohne deine Hilfe nicht bewältigen kann. Häufig treten Mergekonflikte auf, wenn Personen unterschiedliche Änderungen an derselben Zeile derselben Datei vornehmen, oder wenn eine Person eine Datei bearbeitet und eine andere Person dieselbe Datei löscht.

Du musst alle Mergekonflikte lösen, bevor du einen Pull Request auf {% data variables.product.product_name %} mergen kannst. Wenn in deinem Pull Request ein Mergekonflikt zwischen dem Vergleichsbranch und dem Basisbranch vorliegt, kannst du eine Liste der Dateien mit in Konflikt stehenden Änderungen oberhalb der Schaltfläche **Pull Request mergen** anzeigen. Die Schaltfläche **Pull Request mergen** wird erst aktiviert, wenn du alle Konflikte zwischen dem Vergleichsbranch und dem Basisbranch gelöst hast.

![Fehlermeldung bei Mergekonflikten](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

## Auflösen von Mergekonflikten

Um einen Mergekonflikt zu beheben, musst du die Konfliktdatei manuell bearbeiten, um die Änderungen auszuwählen, die du beim endgültigen Merge beibehalten möchtest. Es gibt verschiedene Möglichkeiten, einen Mergekonflikt zu beheben:

- Wenn dein Mergekonflikt durch konkurrierende Zeilenänderungen verursacht wird, z. B. wenn Personen unterschiedliche Änderungen an derselben Zeile derselben Datei auf verschiedenen Branches in deinem Git-Repository vornehmen, kannst du ihn mit dem Konflikteditor von {% data variables.product.product_name %} beheben. Weitere Informationen findest du unter [Auflösen eines Mergekonflikts unter {% data variables.product.prodname_dotcom %}](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).
- Bei allen anderen Arten von Mergekonflikten musst du den Mergekonflikt in einem lokalen Klon des Repositorys beheben und die Änderung an deinen Branch auf {% data variables.product.product_name %} übertragen. Du kannst die Befehlszeile oder ein Tool wie [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) verwenden, um die Änderung zu pushen. Weitere Informationen findest du unter [Auflösen eines Mergekonflikts mithilfe der Befehlszeile](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).

Wenn du einen Mergekonflikt in der Befehlszeile hast, kannst du deine lokalen Änderungen erst an {% data variables.product.product_name %} pushen, wenn du den Mergekonflikt lokal auf deinem Computer behoben hast. Wenn du versuchst, Branches mit einem Mergekonflikt in der Befehlszeile zusammenzuführen, wird Ihnen eine Fehlermeldung angezeigt. Weitere Informationen findest du unter [Auflösen eines Mergekonflikts mithilfe der Befehlszeile](/articles/resolving-a-merge-conflict-using-the-command-line/).
```shell
$ git merge <em>BRANCH-NAME</em>
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

## Weitere Informationsquellen

- [Informationen zum Zusammenführen von Pull Requests](/articles/about-pull-request-merges/)
- [Informationen zu Pull Requests](/articles/about-pull-requests/)
- [Auflösen eines Mergekonflikts mithilfe der Befehlszeile](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)
- [Mergekonflikt auf GitHub beheben](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)
