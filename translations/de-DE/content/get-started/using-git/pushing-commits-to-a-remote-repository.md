---
title: Commits per Push-Vorgang an ein Remote-Repository übertragen
intro: Mit `git push` kannst du Commits aus deinem lokalen Branch an ein Remoterepository pushen.
redirect_from:
  - /articles/pushing-to-a-remote
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/using-git/pushing-commits-to-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Push commits to a remote
ms.openlocfilehash: 61a3eb3e0b0147810b561b59b58879688dd4ba36
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145125786'
---
## Informationen zum `git push`
Der Befehl `git push` akzeptiert zwei Argumente:

* Einen Remotenamen (beispielsweise `origin`)
* Einen Branchnamen (z. B. `main`)

Beispiel:

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

Als Beispiel führst du in der Regel `git push origin main` aus, um deine lokalen Änderungen an dein Onlinerepository zu pushen.

## Branches umbenennen

Um einen Branch umzubenennen, verwendest du den gleichen Befehl `git push`, fügst aber in diesem Fall ein weiteres Argument hinzu: den Namen des neuen Branches. Beispiel:

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

Dadurch wird der `LOCALBRANCHNAME` an deinen `REMOTENAME` gepusht, aber in `REMOTEBRANCHNAME` umbenannt.

## „Non-Fast-Forward“-Fehler handhaben

Wenn deine lokale Kopie eines Repositorys mit dem Upstreamrepository, an das du überträgst, nicht synchronisiert ist oder älter als dieses ist, erhältst du die Meldung `non-fast-forward updates were rejected`.
Das bedeutet, dass du die Änderungen im Upstreamrepository abrufen (fetchen) musst, bevor du deine lokalen Änderungen pushen kannst.

Weitere Informationen zu diesem Fehler findest du unter [Behandeln von Non-Fast-Forward-Fehlern](/github/getting-started-with-github/dealing-with-non-fast-forward-errors).

## Tags pushen

Standardmäßig und ohne zusätzliche Parameter sendet `git push` alle übereinstimmenden Branches, die den gleichen Namen wie Remotebranches haben.

Um ein einzelnes Tag zu übertragen, kannst du den gleichen Befehl wie beim Push eines Branches ausführen:

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

Zum Pushen aller deiner Tags kannst du folgenden Befehl eingeben:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

## Einen Remote-Branch oder ein Tag löschen

Die Syntax zum Löschen eines Branches ist auf den ersten Blick etwas irreführend:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

Beachte, dass vor dem Doppelpunkt ein Leerzeichen steht. Der Befehl ähnelt den Schritten, die du beim Umbenennen eines Branches ausführst. Hier weist du Git jedoch an, _nichts_ in `BRANCHNAME` auf `REMOTENAME` zu pushen. Aus diesem Grund löscht `git push` den Branch im Remoterepository.

## Remotes und Forks

Möglicherweise weißt du bereits, dass es auf GitHub möglich ist, [Repositorys zu forken](https://guides.github.com/overviews/forking/).

Wenn du ein eigenes Repository klonst, gibst du dafür eine Remote-URL an, die Git mitteilt, wo Updates gefetcht und gepusht werden sollen. Wenn du mit dem ursprünglichen Repository zusammenarbeiten möchtest, fügst du deinem lokalen Git-Klon eine neue Remote-URL hinzu, die normalerweise mit `upstream` bezeichnet wird:

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

Nun kannst du Updates und Branches aus *ihrem* Fork fetchen:

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      main     -> upstream/main
```

Wenn du mit den lokalen Änderungen fertig bist, kannst du deinen lokalen Branch an GitHub pushen und [einen Pull Request initiieren](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Weitere Informationen zum Arbeiten mit Forks findest du unter [Synchronisieren eines Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

## Weitere Informationsquellen

- [Kapitel „Remotes“ im Buch „Pro Git“](https://git-scm.com/book/ch5-2.html)
- [Hauptseite zu `git remote`](https://git-scm.com/docs/git-remote.html)
- [Git-Spickzettel](/articles/git-cheatsheet)
- [Git-Workflows](/github/getting-started-with-github/git-workflows)
- [Git-Handbuch](https://guides.github.com/introduction/git-handbook/)
