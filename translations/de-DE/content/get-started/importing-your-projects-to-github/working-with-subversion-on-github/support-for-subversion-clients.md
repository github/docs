---
title: Unterstützung für Subversion-Clients
intro: 'Der Zugriff auf GitHub-Repositorys kann von Git- und Subversion-Clients (SVN)erfolgen. In diesem Artikel erhältst du Informationen über die Ausführung eines Subversion-Clients auf GitHub sowie zu einigen häufigen Problemen, die auftreten können.'
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Support for Subversion clients
ms.openlocfilehash: 49422fbd5dd07b84975172f077091e92bcd5b543
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145131218'
---
GitHub unterstützt Subversion-Clients über das HTTPS-Protokoll. Zur Übertragung von SVN-Befehlen an GitHub wird eine Subversion-Bridge verwendet.

## Auf GitHub unterstützte Subversion-Funktionen

### Kasse

Dein erster Schritt in Verbindung mit Subversion ist der Checkout.  Da das Arbeitsverzeichnis (wo du Dateien bearbeitest) in Git-Klonen getrennt von den Repository-Daten geführt wird, enthält das Arbeitsverzeichnis jeweils nur einen Branch.

Subversion-Check-Outs sind anders: Sie kombinieren die Repositorydaten in den Arbeitsverzeichnissen, sodass für jeden Branch und jedes Tag, den bzw. das du ausgecheckt hast, ein Arbeitsverzeichnis vorhanden ist. Bei Repositorys mit vielen Branches und Tags könnte durch ein vollständiges Check-Out die Bandbreite stark beansprucht werden, sodass du mit einem partiellen Check-Out beginnen solltest.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %}

3. Erstelle einen leeren Checkout des Repositorys:
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. Rufe den `trunk`-Branch ab. Die Subversion-Bridge ordnet den Trunk dem Git HEAD-Branch zu.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. Rufe einen leeren Check-Out des Verzeichnisses `branches` ab.  In diesem Verzeichnis befinden sich alle Nicht-`HEAD`-Branches, und hier erstellst du Feature-Branches.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

### Branches erstellen

Zur Erstellung der Branches kannst du auch die Subversion-Bridge für GitHub verwenden.

Stelle auf deinem SVN-Client sicher, dass der Standardbranch auf dem neuesten Stand ist, indem du `trunk` aktualisierst:
```shell
$ svn up trunk
> At revision 1.
```

Als Nächstes kannst du mithilfe von `svn copy` einen neuen Branch erstellen:
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

Im Branch-Dropdownmenü des Repositorys kannst du überprüfen, ob der neue Branch erstellt wurde:

![Branch-Snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

Dies kannst du auch über die Befehlszeile überprüfen:

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Commits an Subversion

Nachdem du einige Features hinzugefügt und Fehler behoben hast, möchtest du diese Änderungen auf GitHub committen. Dies funktioniert genauso, wie du es von Subversion gewohnt bist. Bearbeite deine Dateien, und verwende `svn commit`, um die Änderungen aufzuzeichnen:

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

### Wechseln zwischen Zweigen

Um zwischen Branches zu wechseln, wirst du vermutlich zunächst `trunk` auschecken wollen:

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

Danach kannst du zu einem anderen Branch wechseln:

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

## Git-Commit-SHA für einen Subversion-Commit finden

Der Subversion-Server von GitHub stellt die Git-Commit-SHA für jeden Subversion-Commit bereit.

Um diesen Commit-SHA zu finden, solltest du nach der nicht versionierten Remote-Eigenschaft `git-commit` fragen.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

Mit dieser Commit-SHA kannst du beispielsweise nach dem zugehörigen Git-Commit auf GitHub suchen.

## Weitere Informationsquellen

* [Von GitHub unterstützte Subversion-Eigenschaften](/articles/subversion-properties-supported-by-github)
