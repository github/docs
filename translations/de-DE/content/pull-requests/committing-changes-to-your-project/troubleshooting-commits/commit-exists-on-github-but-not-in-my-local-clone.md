---
title: 'Commit ist auf GitHub vorhanden, aber nicht in meinem lokalen Klon'
intro: 'Manchmal kann ein Commit auf {% data variables.product.product_name %} angezeigt werden, befindet sich aber nicht im lokalen Klon des Repositorys.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit missing in local clone
ms.openlocfilehash: 9374b17a111bc3f88bf81d60de97e354c0bcf8ac
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132531'
---
Wenn du mit `git show` einen bestimmten Commit in der Befehlszeile anzeigen möchtest, kann ein schwerer Fehler auftreten.

Beispielsweise kannst du lokal einen `bad object`-Fehler erhalten:

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

Wenn du den Commit jedoch auf {% data variables.product.product_location %} anzeigst, kannst du ihn ohne Probleme sehen:

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

Dafür sind mehrere Erklärungen möglich:

* Das lokale Repository ist veraltet.
* Der Branch, der den Commit enthält, wurde gelöscht, weshalb nicht mehr auf den Commit verwiesen wird.
* Jemand hat einen Push über den Commit erzwungen.

## Das lokale Repository ist veraltet

Möglicherweise enthält dein lokales Repository den Commit noch nicht. Um Informationen aus dem Remoterepository auf den lokalen Klon abzurufen, verwende den Befehl `git fetch`:

```shell
$ git fetch <em>remote</em>
```

Dadurch werden Informationen aus dem Remoterepository sicher auf den lokalen Klon kopiert, ohne Änderungen an den Dateien vorzunehmen, die du ausgecheckt hast. Über `git fetch upstream` kannst du Informationen aus einem geforkten Repository abrufen. Du kannst auch `git fetch origin` verwenden, um Informationen aus einem Repository abzurufen, das du nur geklont hast.

{% tip %}

**Tipp**: Weitere Informationen zum [Verwalten von Remoterepositorys und zum Abrufen von Daten](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) findest du im [Pro Git](https://git-scm.com/book)-Buch.

{% endtip %}

## Der Branch, der den Commit enthielt, wurde gelöscht

Wenn ein Mitarbeiter des Repositorys den Branch mit dem Commit gelöscht oder durch einen erzwungenen Push überschrieben hat, ist der fehlende Commit möglicherweise verwaist (das heißt, er kann über keine Referenz mehr erreicht werden). Er wird daher nicht in deinen lokalen Klon abgerufen.

Wenn ein Mitarbeiter jedoch einen lokalen Klon des Repositorys mit dem fehlenden Commit besitzt, kann er ihn jedoch wieder zurück an {% data variables.product.product_name %} pushen.  Dabei muss er sicherstellen, dass von einem lokalen Branch auf den Commit verwiesen wird, und ihn dann als neuen Branch an {% data variables.product.product_name %} pushen.

Nehmen wir an, die Person verfügt noch über einen lokalen Branch (nennen wir ihn `B`), der den Commit enthält.  Dieser verfolgt vielleicht den Branch, der durch einen erzwungenen Push überschrieben oder gelöscht wurde, und es wurde einfach noch keine Aktualisierung durchgeführt.  Um den Commit beizubehalten, kann die Person diesen lokalen Branch an einen neuen Branch (nennen wir ihn `recover-B`) auf {% data variables.product.product_name %} pushen.  Gehen wir in diesem Beispiel davon aus, dass die Person über ein Remoterepository namens `upstream` verfügt, über das sie Pushzugriff auf `github.com/$account/$repository` besitzt.

Die andere Person führt Folgendes aus:

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

Jetzt kannst *du* Folgendes ausführen:

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

## Erzwungene Push-Vorgänge vermeiden

Vermeide erzwungenes Pushen zu einem Repository, sofern es nicht absolut notwendig ist. Dies gilt insbesondere, wenn mehrere Personen Pushes zum Repository durchführen können. Wenn jemand einen Push an ein Repository erzwingt, überschreibt der erzwungene Push möglicherweise Commits, auf denen die Arbeit anderer Projektmitarbeiter basiert. Erzwungene Pushes ändern den Repositoryverlauf und können Pull Requests beschädigen.

## Weitere Informationsquellen

- [„Arbeiten mit Remoterepositorys“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- [„Datenwiederherstellung“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
