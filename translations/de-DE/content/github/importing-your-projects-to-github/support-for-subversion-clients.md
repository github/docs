---
title: Unterstützung für Subversion-Clients
intro: 'Der Zugriff auf GitHub-Repositorys kann von Git- und Subversion (SVN)-Clients erfolgen. In diesem Artikel erhältst Du Informationen zur Ausführung eines Subversion-Clients auf GitHub sowie zu einigen häufigen Problemen, die in Verbindung mit Subversion auftreten können.'
redirect_from:
  - /articles/support-for-subversion-clients
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub unterstützt Subversion-Clients über das HTTPS-Protokoll. Zur Übertragung von SVN-Befehlen an GitHub wird eine Subversion-Bridge verwendet.

### Auf GitHub unterstützte Subversion-Funktionen

#### Auschecken

Dein erster Schritt in Verbindung mit Subversion ist der Checkout.  Da das Arbeitsverzeichnis (wo Du Dateien bearbeitest) in Git-Klonen getrennt von den Repository-Daten geführt wird, enthält das Arbeitsverzeichnis jeweils nur einen Branch.

Subversion-Checkouts unterscheiden sich hier: In Subversion sind die Repository-Daten in den Arbeitsverzeichnissen enthalten, weswegen es für jeden Branch und jedes Tag, das Du ausgecheckt hast, ein eigenes Arbeitsverzeichnis gibt.  Bei Repositorys mit vielen Branches und Tags kann das Auschecken zu einem Bandbreitenproblem werden. In diesem Fall empfiehlt sich zunächst ein teilweiser Checkout.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}

3. Erstelle einen leeren Checkout des Repositorys:
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. Rufe den `trunk`-Branch ab. The Subversion bridge maps trunk to the Git HEAD branch.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. Rufe einen leeren Checkout des Verzeichnisses `branches` ab.  In diesem Verzeichnis befinden sich alle Nicht-`HEAD`-Branches, und hier erstellst Du auch die Funktions-Branches.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

#### Branches erstellen

Zur Erstellung der Branches kannst Du auch die Subversion-Bridge für GitHub verwenden.

From your svn client, make sure the default branch is current by updating `trunk`:
```shell
$ svn up trunk
> At revision 1.
```

Nun kannst Du `svn copy` zur Erstellung eines neuen Branches verwenden:
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

Im Branch-Dropdownmenü des Repositorys kannst Du überprüfen, ob der neue Branch erstellt wurde:

![Branch-Snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

Dies kannst Du auch über die Befehlszeile überprüfen:

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

#### Commits an Subversion

Nachdem Du einige Funktionen hinzugefügt und Bugs behoben hast, möchtest Du diese Änderungen auf GitHub freigeben. Dies funktioniert genauso, wie Du es von Subversion gewohnt bist. Verwende nach der Bearbeitung Deiner Dateien `svn commit`, um Deine Änderungen festzuschreiben:

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

#### Zwischen Branches wechseln

Um zwischen Branches zu wechseln, wirst Du vermutlich zunächst `trunk` auschecken wollen:

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

Danach kannst Du zu einem anderen Branch wechseln:

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

### Git-Commit-SHA für einen Subversion-Commit finden

Der Subversion-Server von GitHub stellt die Git-Commit-SHA für jeden Subversion-Commit bereit.

Um diese Commit-SHA zu finden, solltest Du nach der nicht versionierten Remote-Eigenschaft `git-commit` fragen.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

Mit dieser Commit-SHA kannst Du beispielsweise nach dem zugehörigen Git-Commit auf GitHub suchen.

### Weiterführende Informationen

* „[Von GitHub unterstützte Subversion-Eigenschaften](/articles/subversion-properties-supported-by-github)“
