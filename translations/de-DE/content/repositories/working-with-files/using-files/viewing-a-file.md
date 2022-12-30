---
title: Anzeigen einer Datei
intro: 'Du kannst Rohdatendateiinhalte anzeigen oder die Änderungen an den einzelnen Zeilen einer Datei verfolgen und so feststellen, wie sich die Datei im Lauf der Zeit entwickelt hat.'
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
ms.openlocfilehash: 7d34e776cb1747ee749531e49abf6f0e3d052b3b
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179861'
---
## Anzeigen oder Kopieren des Rohdateiinhalts

Mit der unformatierten Ansicht kannst du den rohen Inhalt einer Datei ohne Formatierung anzeigen oder kopieren.

{% data reusables.repositories.navigate-to-repo %}
1. Klicke auf die Datei, die du anzeigen möchtest.
2. Klicke in der oberen rechten Ecke der Dateiansicht auf **Rohformat**.
![Screenshot der Schaltfläche „Rohformat“ im Dateiheader](/assets/images/help/repository/raw-file-button.png)
3. Wenn du optional den Rohdateiinhalt kopieren möchtest, klicke in der oberen rechten Ecke der Dateiansicht auf **{% octicon "copy" aria-label="The copy icon" %}**.

## Anzeigen des zeilenweisen Revisionsverlaufs für eine Datei

In der Blame-Ansicht kannst du den Revisionsverlauf einer vollständigen Datei Zeile für Zeile sehen oder durch klicken auf {% octicon "versions" aria-label="The prior blame icon" %} auch nur den Revisionsverlauf einer einzelnen Zeile anzeigen. Mit jedem Klick auf {% octicon "versions" aria-label="The prior blame icon" %} siehst du die vorangegangene Revisionsinformation zur betreffenden Zeile, einschließlich des Committers und des Commit-Zeitpunkts der Änderung.

![Git Blame-Ansicht](/assets/images/help/repository/git_blame.png)

In einer Datei oder einem Pull Request kannst du auch das {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}-Menü verwenden, um Git Blame für eine ausgewählte Zeile oder einen ausgewählten Zeilenbereich anzuzeigen.

![Kebab-Menü mit Option zum Anzeigen von Git Blame für eine ausgewählte Zeile](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Tipp:** In der Befehlszeile kannst du auch `git blame` verwenden, um den Revisionsverlauf von Zeilen innerhalb einer Datei anzuzeigen. Weitere Informationen findest du in der [`git blame`-Dokumentation von Git](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Zum Öffnen klicke auf die Datei, deren Zeilenverlauf du anzeigen möchtest.
3. Klicke in der oberen rechten Ecke der Dateiansicht auf **Blame**, um die Blame-Ansicht zu öffnen.
![Schaltfläche „Blame“](/assets/images/help/repository/blame-button.png)
4. Wenn du frühere Überarbeitungen einer bestimmten Zeile oder erneut die Blame-Ansicht anzeigen möchtest, klicke auf {% octicon "versions" aria-label="The prior blame icon" %}, bis du die gewünschten Änderungen gefunden hast.
![Schaltfläche „Vorheriges Blame“](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## Ignorieren von Commits in der Blame-Ansicht

Alle Überarbeitungen, die in der `.git-blame-ignore-revs`-Datei angegeben sind, die sich im Stammverzeichnis deines Repositorys befinden muss, sind in der Blame-Ansicht mithilfe der Git-Konfigurationseinstellung `git blame --ignore-revs-file` ausgeblendet. Weitere Informationen findest du in der Git-Dokumentation unter [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt).

1. Erstelle im Stammverzeichnis deines Repositorys eine Datei mit dem Namen `.git-blame-ignore-revs`.
2. Füge die Commithashes hinzu, die du aus der Blame-Ansicht dieser Datei ausschließen möchtest. Es wird empfohlen, die Datei wie folgt zu strukturieren, einschließlich der Kommentare:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Committe und pushe die Änderungen.

Wenn du nun die Blame-Ansicht öffnest, werden die aufgelisteten Überarbeitungen darin nicht angezeigt. Es wird ein Banner **Überarbeitungen in .git-blame-ignore-revs werden ignoriert** angezeigt, das darauf hinweist, dass einige Commits möglicherweise ausgeblendet sind:

![Screenshot eines Banners in der Blame-Ansicht, die mit der .git-blame-ignore-revs-Datei verknüpft ist](/assets/images/help/repository/blame-ignore-revs-file.png)

Dies kann hilfreich sein, wenn einige Commits umfangreiche Änderungen an deinem Code vornehmen. Du kannst die Datei auch bei der lokalen Ausführung von `git blame` verwenden:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

Du kannst Git auch lokal so konfigurieren, dass Überarbeitungen in dieser Datei immer ignoriert werden:

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}

## Umgehen von `.git-blame-ignore-revs` in der Blame-Ansicht

Wenn in der Blame-Ansicht für eine Datei **Überarbeitungen in .git-blame-ignore-revs werden ignoriert** angezeigt wird, kannst du `.git-blame-ignore-revs` umgehen und dennoch die normale Blame-Ansicht anzeigen. Füge in der URL `~` an den SHA an, und **Überarbeitungen in .git-blame-ignore-revs werden ignoriert** wird nicht mehr angezeigt.
