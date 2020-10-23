---
title: Informationen zum Zusammenführen von Git-Unterstrukturen
redirect_from:
  - /articles/working-with-subtree-merge/
  - /subtree-merge/
  - /articles/about-git-subtree-merges
intro: 'Wenn Du mehrere Projekte innerhalb eines einzigen Repositorys verwalten musst, kannst Du *subtree merge* (Unterstruktur zusammenführen) benutzen, um alle Referenzen zu verwalten.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Typischerweise wird eine Unterstruktur zusammengeführt, um ein Repository innerhalb eines anderen Repositorys einzubinden. Das „Unterrepository“ wird in einem Ordner des Haupt-Repositorys gespeichert.

Das Zusammenführen von Unterstrukturen lässt sich am besten anhand eines Beispiels erläutern. Dabei sind folgende Schritte notwendig:

- Ein leeres Repository namens `test` erstellen, das das Projekt repräsentiert
- Ein anderes Repository als Unterstruktur namens `Spoon-Knife` hineinführen.
- Das Projekt `test` wird dieses Unterprojekt so verwenden, als wäre es Teil desselben Repositorys.
- Aktualisierungen von `Spoon-Knife` in das Projekt `test` abrufen

### Leeres Repository für das Zusammenführen einer Unterstruktur einrichten

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

### Ein neues Repository als Unterstruktur hinzufügen

1. Füge eine neue Remote-URL hinzu, die auf das separate Projekt von Interesse verweist.
  ```shell
  $ git remote add -f spoon-knife git@github.com:octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From git://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. Führe das Projekt `Spoon-Knife` in das lokale Git-Projekt zusammen. Dadurch wird keine Deiner Dateien lokal geändert, aber Git wird auf den nächsten Schritt vorbereitet.

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
3. Erstelle ein neues Verzeichnis mit dem Namen **spoon-knife**, und kopiere den Git-Verlauf des Projekts `Spoon-Knife` in dieses Verzeichnis.
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. Erstelle einen Commit der Änderungen, um sie zu sichern.
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

Wir haben hier nur ein Subprojekt hinzugefügt. Du kannst jedoch eine beliebige Anzahl an Subprojekten in ein Git-Repository integrieren.

{% tip %}

**Tipp:** Wenn Du in Zukunft einen neuen Klon des Repositorys erstellst, werden die von Dir hinzugefügten Remotes nicht für Dich erstellt. Du musst sie erneut mit dem [Befehl `git remote add`](/articles/adding-a-remote) hinzufügen.

{% endtip %}

### Mit Aktualisierungen und Änderungen synchronisieren

Wenn ein Subprojekt hinzugefügt wird, wird es nicht automatisch mit den vorgelagerten Änderungen synchronisiert. Du musst das Subprojekt mit dem folgenden Befehl aktualisieren:

```shell
$ git pull -s subtree <em>remotename</em> <em>branchname</em>
```

Im Beispiel oben würde dies so aussehen:

```shell
$ git pull -s subtree spoon-knife main
```

### Weiterführende Informationen

- [Kapitel „Eine Unterstruktur zusammenführen“ im _Pro Git_-Buch](https://git-scm.com/book/en/Git-Tools-Subtree-Merging)
- „[Die Strategie des Zusammenführens von Unterstrukturen verwenden](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html)“
