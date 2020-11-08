---
title: Änderungen von einem Remote-Repository abrufen
intro: Für den Zugriff auf Remote-Repositorys kannst Du die gängigen Git-Befehle verwenden.
redirect_from:
  - /articles/fetching-a-remote/
  - /articles/getting-changes-from-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Diese Befehle sind bei der Interaktion mit einem [Remote-Repository](/articles/about-remote-repositories) sehr hilfreich. Mit `clone` und `fetch` kannst Du Remote-Code von der Remote-URL eines Repositorys auf Deinen lokalen Computer herunterladen. Der Befehl `merge` dient zum Zusammenführen der Arbeit verschiedener Benutzer mit Deiner eigenen Arbeit, und `pull` ist eine Kombination aus `fetch` und `merge`.

### Ein Repository klonen

Um eine vollständige Kopie eines Repositorys eines anderen Benutzers zu bekommen, verwende `git clone` wie folgt:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Klont ein Repository auf Deinen Computer
```

Beim Klonen eines Repositorys stehen [mehrere unterschiedliche URLs](/articles/which-remote-url-should-i-use) zur Auswahl. Wenn Sie bei {% data variables.product.prodname_dotcom %} angemeldet sind, finden Sie diese URLs unter den Repository-Details:

![Remote-URL-Liste](/assets/images/help/repository/remotes-url.png)

Wenn Du `git clone` ausführst, werden die folgenden Aktionen ausgeführt:
- Ein neuer Ordner mit dem Namen `repo` wird erstellt.
- Er wird als Git-Repository initialisiert.
- Ein Remote-Repository mit dem Namen `origin` wird erstellt und es verweist auf die URL, von der Du den Klon erstellt hast.
- Alle Dateien und Commits des Repository werden dorthin heruntergeladen.
- The default branch is checked out

Für jeden Branch `foo` im Remote-Repository wird in Deinem lokalen Repository ein entsprechender Remote-Tracking-Branch `refs/remotes/origin/foo` angelegt. Normalerweise kannst Du die Namen solcher Remote-Tracking-Branches auf `origin/foo` verkürzen.

### Änderungen von einem Remote-Repository mit `git fetch` abrufen

Mit `git fetch` kannst Du neue Arbeiten von anderen Benutzern abrufen. Dabei werden alle neuen Remote-Tracking-Branches und Tags vom Repository abgerufen, *ohne* dass diese Änderungen in Deine eigenen Branches zusammengeführt werden.

Wenn Du bereits ein lokales Repository [mit einer Remote-URL](/articles/adding-a-remote) für das gewünschte Projekt eingerichtet hast, kannst Du alle neuen Informationen über das Terminal mit dem Befehl `git fetch *remotename*` abrufen:

```shell
$ git fetch <em>remotename</em>
# Ruft Änderungen eines Remote-Repositorys ab
```

Andernfalls kannst Du immer [ein neues Remote-Repository hinzufügen](/articles/adding-a-remote) und dann den Abrufvorgang ausführen.

### Änderungen in Deinen lokalen Branch zusammenführen

Beim Zusammenführen (Merge) werden Deine lokalen Änderungen mit den Änderungen anderer Benutzer zusammengeführt.

In der Regel führst Du einen Remote-Tracking-Branch (d. h. einen Branch, der aus einem Remote-Repository abgerufen wurde) mit Deinem lokalen Branch zusammen:

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Zusammenführen der online vorgenommenen Änderungen mit Deinen lokalen Änderungen
```

### Änderungen von einem Remote-Repository mit `git pull` abrufen

Der Befehl `git pull` ist eine praktische Abkürzung, um sowohl `git fetch` als auch `git merge` in einem einzigen Befehl auszuführen:

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Ruft Online-Aktualisierungen ab und führt sie mit Deinen lokalen Änderungen zusammen
```

Da `pull` das Zusammenführen der abgerufenen Änderungen auslöst, solltest Du sicherstellen, dass Deine lokalen Änderungen freigegeben wurden, bevor Du den Befehl `pull` ausführst. Wenn ein [Mergekonflikt](/articles/resolving-a-merge-conflict-using-the-command-line) auftritt, den Du nicht beheben kannst, oder Du den Merge-Vorgang abbrechen möchtest, kannst Du mit dem Befehl `git merge --abort` den Branch auf den Zustand zurücksetzen, den er vor dem Abrufvorgang hatte.

### Weiterführende Informationen

- ["Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)"{% if currentVersion == "free-pro-team@latest" %}
- „[Verbindungsprobleme beheben](/articles/troubleshooting-connectivity-problems)“{% endif %}
