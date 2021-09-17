---
title: Commits per Push-Vorgang an ein Remote-Repository übertragen
intro: 'Mit „git push“ kannst Du Commits, die auf Deinem lokalen Branch erstellt wurden, an ein Remote-Repository pushen.'
redirect_from:
  - /articles/pushing-to-a-remote/
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Der Befehl `git push` hat zwei Argumente:

* einen Remote-Namen, z. B. `origin`
* einen Branch-Namen, z. B. `master`

Ein Beispiel:

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

Ein Beispiel: Normalerweise führst Du `git push origin master` aus, um Deine lokalen Änderungen an Dein Online-Repository zu übertragen.

### Branches umbenennen

Um einen Branch umzubenennen, verwendest Du den gleichen `git push`-Befehl, aber in diesem Fall fügst Du ein weiteres Argument hinzu: den Namen des neuen Branches. Ein Beispiel:

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

Dadurch wird der `LOCALBRANCHNAME` an Deinen `REMOTENAME` übertragen, aber er wird umbenannt in `REMOTEBRANCHNAME`.

### „Non-Fast-Forward“-Fehler handhaben

Wenn Deine lokale Kopie eines Repositorys nicht mit dem vorgelagerten Repository synchronisiert ist, an das Du überträgst, erhältst Du die Meldung `non-fast-forward updates were rejected` ('non-fast-forward'-Aktualisierungen wurden zurückgewiesen). Das bedeutet, dass Du die vorgelagerten Änderungen abrufen musst, bevor Du Deine lokalen Änderungen übertragen kannst.

Weitere Informationen zu diesem Fehler findest Du unter „[Non-Fast-Forward-Fehler handhaben](/github/getting-started-with-github/dealing-with-non-fast-forward-errors).“

### Tags pushen

Standardmäßig und ohne zusätzliche Parameter sendet `git push` alle entsprechenden Branches, die den gleichen Namen wie Remote-Branches haben.

Um ein einzelnes Tag zu übertragen, kannst Du den gleichen Befehl wie beim Push eines Branches ausführen:

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

Zum Pushen aller Deiner Tags kannst Du folgenden Befehl eingeben:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

### Einen Remote-Branch oder ein Tag löschen

Die Syntax zum Löschen eines Branches ist auf den ersten Blick etwas irreführend:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

Beachte, dass vor dem Doppelpunkt ein Leerzeichen steht. Der Befehl ähnelt den gleichen Schritten, die Du beim Umbenennen eines Branches ausführst. Hier befiehlst Du Git jedoch, _nichts_ in `BRANCHNAME` an `REMOTENAME` zu übertragen. Aus diesem Grund löscht `git push` den Branch im Remote-Repository.

### Remotes und Forks

Du weißt vielleicht schon, dass Du auf GitHub [Repositorys „forken“ kannst](https://guides.github.com/overviews/forking/).

Wenn Du ein eigenes Repository klonst, stellst Du ihm eine Remote-URL zur Verfügung, die Git wissen lässt, wo Aktualisierungen abgerufen und gepusht werden sollen. Wenn Du mit dem ursprünglichen Repository zusammenarbeiten möchtest, füge Deinem lokalen Git-Klon eine neue Remote-URL hinzu, die typischerweise `upstream` genannt wird:

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

Nun kannst Du Updates und Branches aus *deren* Fork abrufen:

```shell
git fetch upstream
# Rufe die Branches des vorgelagerten Remotes ab
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      master     -> upstream/master
```

Wenn Du mit den lokalen Änderungen fertig bist, kannst Du Deinen lokalen Branch an GitHub übertragen und [einen Pull Request initiieren](/articles/about-pull-requests).

Weitere Informationen zur Arbeit mit Forks findest Du unter „[Fork synchronisieren](/articles/syncing-a-fork)“.

### Weiterführende Informationen

- [Kapitel „Remotes“ im „Pro Git“-Buch](https://git-scm.com/book/ch5-2.html)
- [„`git remote`"-Handbuch-Seiten](https://git-scm.com/docs/git-remote.html)
- „[Git-Merkzettel](/articles/git-cheatsheet)“
- „[Git-Workflows](/github/getting-started-with-github/git-workflows)“
- "[Git Handbook](https://guides.github.com/introduction/git-handbook/)"
