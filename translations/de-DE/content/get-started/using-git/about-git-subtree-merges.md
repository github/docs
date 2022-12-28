---
title: Informationen zum Mergen von Git-Unterstrukturen
redirect_from:
  - /articles/working-with-subtree-merge
  - /subtree-merge
  - /articles/about-git-subtree-merges
  - /github/using-git/about-git-subtree-merges
  - /github/getting-started-with-github/about-git-subtree-merges
  - /github/getting-started-with-github/using-git/about-git-subtree-merges
intro: 'Wenn du mehrere Projekte innerhalb eines einzigen Repositorys verwalten musst, kannst du einen *Teilstrukturmerge* verwenden, um alle Referenzen zu berücksichtigen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: cd553d4193f3e4ad5de54abc218df623b1d53276
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880028'
---
## Informationen zum Mergen von Unterstrukturen

Typischerweise wird eine Unterstruktur zusammengeführt, um ein Repository innerhalb eines anderen Repositorys einzubinden. Das „Unterrepository“ wird in einem Ordner des Haupt-Repositorys gespeichert.

Das Zusammenführen von Unterstrukturen lässt sich am besten anhand eines Beispiels erläutern. Dabei sind folgende Schritte notwendig:

- Erstellen eines leeren Repositorys namens `test`, das unser Projekt repräsentiert.
- Hineinmergen eines anderen Repositorys als Unterstruktur namens `Spoon-Knife`.
- Das Projekt `test` wird dieses Unterprojekt so verwenden, als sei es ein Teil desselben Repositorys.
- Abrufen von Updates aus `Spoon-Knife` in unser `test`-Projekt.

## Leeres Repository für das Zusammenführen einer Unterstruktur einrichten

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstelle ein neues Verzeichnis und navigiere zu diesem.
  ```shell
  $ mkdir test
  $ cd test
  ```
3. Initialisiere ein neues Git-Repository.
  ```shell
  $ git init
  > Initialized empty Git repository in /Users/octocat/tmp/test/.git/
  ```
4. Erstelle eine neue Datei mit Commit.
  ```shell
  $ touch .gitignore
  $ git add .gitignore
  $ git commit -m "initial commit"
  > [main (root-commit) 3146c2a] initial commit
  >  0 files changed, 0 insertions(+), 0 deletions(-)
  >  create mode 100644 .gitignore
  ```

## Ein neues Repository als Unterstruktur hinzufügen

1. Füge eine neue Remote-URL hinzu, die auf das separate Projekt von Interesse verweist.
  ```shell
  $ git remote add -f spoon-knife https://github.com/octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From https://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. Merge das `Spoon-Knife`-Projekt in das lokale Git-Projekt. Dadurch wird keine deiner Dateien lokal geändert, aber Git wird auf den nächsten Schritt vorbereitet.

  Bei Verwendung von Git 2.9 oder höher:
  ```shell
  $ git merge -s ours --no-commit --allow-unrelated-histories spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```

  Bei Verwendung von Git 2.8 oder älter:
  ```shell
  $ git merge -s ours --no-commit spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```
3. Erstelle ein neues Verzeichnis namens **spoon-knife**, und kopiere den Git-Verlauf des `Spoon-Knife`-Projekts in dieses Verzeichnis.
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. Erstelle einen Commit der Änderungen, um sie zu sichern.
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

Hier wurde nur ein Unterprojekt hinzugefügt. Du kannst jedoch eine beliebige Anzahl an Unterprojekten in ein Git-Repository integrieren.

{% tip %}

**Tipp**: Wenn du in Zukunft einen neuen Klon des Repositorys erstellst, werden die von dir hinzugefügten Remotes nicht für dich erstellt. Du musst sie erneut mithilfe [des `git remote add`-Befehls](/github/getting-started-with-github/managing-remote-repositories) hinzufügen.

{% endtip %}

## Mit Aktualisierungen und Änderungen synchronisieren

Wenn ein Subprojekt hinzugefügt wird, wird es nicht automatisch mit den vorgelagerten Änderungen synchronisiert. Du musst das Subprojekt mit dem folgenden Befehl aktualisieren:

```shell
$ git pull -s subtree <em>remotename</em> <em>branchname</em>
```

Im Beispiel oben würde dies so aussehen:

```shell
$ git pull -s subtree spoon-knife main
```

## Weitere Informationsquellen

- [Das Kapitel „Advanced Merging“ (Erweitertes Mergen) aus dem _Pro Git_-Buch](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- [How to use the subtree merge strategy](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html) (Verwenden der Unterstrukturmerge-Strategie)
