---
title: Commit ist auf GitHub vorhanden, aber nicht in meinem lokalen Klon
intro: 'Manchmal kann ein Commit auf {% data variables.product.product_name %} angezeigt werden, befindet sich aber nicht im lokalen Klon des Repositorys.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Wenn Du mit `git show` einen bestimmten Commit in der Befehlszeile anzeigen möchtest, kann ein schwerer Fehler auftreten.

Beispielsweise könnte lokal der Fehler `bad object` entstehen:

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

Wenn Sie den Commit jedoch auf {% data variables.product.product_location %} anzeigen, können Sie ihn ohne Probleme sehen:

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

Dafür sind mehrere Erklärungen möglich:

* Das lokale Repository ist veraltet.
* Der Branch, der den Commit enthält, wurde gelöscht, weshalb nicht mehr auf den Commit verwiesen wird.
* Jemand hat einen Push über den Commit erzwungen.

### Das lokale Repository ist veraltet

Möglicherweise enthält Dein lokales Repository den Commit noch nicht. Um Informationen vom Remote-Repository auf den lokalen Klon abzurufen, verwende den Befehl `git fetch`:

```shell
$ git fetch <em>remote</em>
```

Dadurch werden die Informationen vom Remote-Repository sicher auf Deinen lokalen Klon kopiert, ohne die bereits ausgecheckten Dateien zu ändern. Mit `git fetch upstream` kannst Du Informationen von einem geforkten Repository abrufen, mit `git fetch origin` Informationen von einem nur geklonten Repository.

{% tip %}

**Tipp:** Weitere Informationen findest Du unter „[Remote-Repositorys verwalten und Daten abrufen](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)“ im [Pro Git](https://git-scm.com/book)-Buch.

{% endtip %}

### Der Branch, der den Commit enthielt, wurde gelöscht

Wenn ein Mitarbeiter des Repositorys den Branch mit dem Commit gelöscht oder einen Push über den Branch erzwungen hat, ist der fehlende Commit möglicherweise verwaist (das heißt, er kann über keine Referenz mehr erreicht aufgerufen werden) und wird daher nicht in Deinen lokalen Klon abgerufen.

Wenn irgendein Mitarbeiter jedoch einen lokalen Klon des Repositorys mit dem fehlenden Commit besitzt, kann er ihn glücklicherweise zurück zu {% data variables.product.product_name %} pushen.  Dabei muss er sicherstellen, dass von einem lokalen Branch auf den Commit verwiesen wird, und ihn dann als neuen Branch zu {% data variables.product.product_name %} pushen.

Nehmen wir an, diese Person hat noch einen lokalen Branch (nennen wir ihn `B`), der den Commit enthält.  Dieser verfolgt vielleicht den Branch, dessen Push erzwungen oder der gelöscht wurde, und es wurde einfach noch keine Aktualisierung durchgeführt.  Um den Commit zu bewahren, kann er diesen lokalen Branch zu einem neuen Branch (nennen wir ihn `recover-B`) auf {% data variables.product.product_name %} pushen.  Für dieses Beispiel nehmen wir an, dass die Person ein Remote-Repository namens `upstream` besitzt, über das sie Push-Zugriff auf `github.coom/$account/$repository` hat.

Die andere Person führt Folgendes aus:

```shell
$ git branch recover-B B
# Erstellt einen neuen lokalen Branch mit Verweis auf den Commit
$ git push upstream B:recover-B
# Pusht den lokalen Branch B auf den neuen vorgelagerten Branch und erstellt dabei einen neuen Verweis auf den Commit
```

Jetzt kannst *Du* Folgendes ausführen:

```shell
$ git fetch upstream recover-B
# Ruft den Commit in Dein lokales Repository ab.
```

### Erzwungene Push-Vorgänge vermeiden

Vermeide erzwungenes Pushen zu einem Repository, sofern es nicht absolut notwendig ist. Dies gilt insbesondere, wenn mehrere Personen Pushes zum Repository durchführen können.

### Weiterführende Informationen

- [„Mit Remote-Repositorys arbeiten“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- [„Datenwiederherstellung“ im _Pro Git_-Buch](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
