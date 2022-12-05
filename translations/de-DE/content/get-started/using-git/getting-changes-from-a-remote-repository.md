---
title: Änderungen von einem Remote-Repository abrufen
intro: Für den Zugriff auf Remoterepositorys kannst du die gängigen Git-Befehle verwenden.
redirect_from:
  - /articles/fetching-a-remote
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/using-git/getting-changes-from-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Get changes from a remote
ms.openlocfilehash: 11996b33ccedea8169f472feb1804f2eed5a5d9d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125793'
---
## Optionen zum Abrufen von Änderungen

Diese Befehle sind bei der Interaktion mit einem [Remoterepository](/github/getting-started-with-github/about-remote-repositories) sehr hilfreich. `clone` und `fetch` laden Remotecode über die Remote-URL eines Repositorys auf deinen lokalen Computer herunter. `merge` wird verwendet, um die Arbeit verschiedener Personen mit deiner Arbeit zusammenzuführen, und `pull` ist eine Kombination aus `fetch` und `merge`.

## Ein Repository klonen

Verwende `git clone` wie folgt, um eine vollständige Kopie eines Repositorys eines anderen Benutzers zu erhalten:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clones a repository to your computer
```

Du kannst beim Klonen eines Repositorys unter [verschiedenen URLs](/github/getting-started-with-github/about-remote-repositories) wählen. Wenn du bei {% data variables.product.prodname_dotcom %} angemeldet bist, findest du diese URLs unter den Repositorydetails:

![Remote-URL-Liste](/assets/images/help/repository/remotes-url.png)

Mit `git clone` werden die folgenden Aktionen ausgeführt:
- Ein neuer Ordner mit dem Namen `repo` wird erstellt.
- Er wird als Git-Repository initialisiert.
- Ein Remoterepository mit dem Namen `origin` wird erstellt, und es verweist auf die URL, von der du den Klon erstellt hast.
- Alle Dateien und Commits des Repository werden dorthin heruntergeladen.
- Der Standardbranch ist ausgecheckt.

Für jeden `foo`-Branch im Remoterepository wird in deinem lokalen Repository ein entsprechender Remote-Tracking-Branch namens `refs/remotes/origin/foo` erstellt. Normalerweise kannst du die Namen solcher Remote-Tracking-Branches in `origin/foo` verkürzen.

## Änderungen von einem Remote-Repository mit <code>git fetch</code> abrufen

Verwende `git fetch`, um neue Arbeiten anderer Benutzer abzurufen. Dabei werden alle neuen Remote-Tracking-Branches und Tags vom Repository abgerufen, *ohne* dass diese Änderungen mit deinen eigenen Branches zusammengeführt werden.

Wenn du bereits ein lokales Repository mit einer Remote-URL für das gewünschte Projekt eingerichtet hast, kannst du alle neuen Informationen mit `git fetch *remotename*` über das Terminal abrufen:

```shell
$ git fetch <em>remotename</em>
# Fetches updates made to a remote repository
```

Andernfalls kannst du jederzeit eine neue Remote-URL hinzufügen und dann den Abruf starten. Weitere Informationen findest du unter [Verwalten von Remoterepositorys](/github/getting-started-with-github/managing-remote-repositories).

## Änderungen in deinen lokalen Branch zusammenführen

Beim Zusammenführen (Merge) werden deine lokalen Änderungen mit den Änderungen anderer Benutzer zusammengeführt.

In der Regel führst du einen Remote-Tracking-Branch (d. h. einen Branch, der aus einem Remote-Repository abgerufen wurde) mit deinem lokalen Branch zusammen:

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Merges updates made online with your local work
```

## Änderungen von einem Remote-Repository mit <code>git pull</code> abrufen

`git pull` ist eine praktische, schnelle Lösung, um sowohl `git fetch` als auch `git merge ` im selben Befehl auszuführen:

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Grabs online updates and merges them with your local work
```

Da `pull` die abgerufenen Änderungen zusammenführt, solltest du sicherstellen, dass deine lokalen Änderungen committed wurden, bevor du den Befehl `pull` ausführst. Wenn ein [Mergekonflikt](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) auftritt, den du nicht auflösen kannst, oder wenn du den Merge abbrechen möchtest, kannst du den Branch mit `git merge --abort` in den Zustand vor dem Pull zurückversetzen.

## Weiterführende Themen

- [„Arbeiten mit Remoterepositorys“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes){% ifversion fpt or ghec %}
- [Beheben von Verbindungsproblemen](/articles/troubleshooting-connectivity-problems){% endif %}
