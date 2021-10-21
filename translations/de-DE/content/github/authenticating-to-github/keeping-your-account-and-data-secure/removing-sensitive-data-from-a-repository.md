---
title: Sensible Daten aus einem Repository entfernen
intro: 'Wenn Du vertrauliche Daten wie Passwörter oder SSH-Schlüssel in ein Git-Repository überträgst, kannst Du diese aus dem Verlauf entfernen. Zum vollständigen Entfernen unerwünschter Dateien aus dem Verlauf eines Repositorys kannst Du den Befehl ''git filter-branch'' oder das Open-Source-Tool BFG Repo-Cleaner verwenden.'
redirect_from:
  - /remove-sensitive-data/
  - /removing-sensitive-data/
  - /articles/remove-sensitive-data/
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

Der Befehl `git filter-branch` und BFG Repo-Cleaner schreiben den Verlauf Deines Repositorys neu, was die SHAs verändert für bestehende und davon abhängige Commits, die Du veränderst. Geänderte Commit-SHAs können sich auf offene Pull Requests in Deinem Repository auswirken. Wir raten dringend, alle offenen Pull Requests zusammenzuführen oder zu schließen, bevor Du Dateien aus Deinem Repository entfernst.

Die Datei aus dem letzten Commit kannst Du auch mit `git rm` entfernen. Informationen zum Entfernen einer Datei, die beim letzten Commit hinzugefügt wurde, findest Du unter „[Dateien aus dem Verlauf eines Repositorys entfernen](/articles/removing-files-from-a-repository-s-history)."

{% warning %}

**Warnung: Wenn Du einen Commit per Push auf {% data variables.product.product_name %} überträgst, solltest Du alle darin enthaltenen Daten als kompromittiert betrachten.** Falls Du ein Passwort mitgegeben hast, ändere es! Falls Du einen Schlüssel mitgegeben hast, generiere einen neuen.

In diesem Artikel erfährst Du, wie Du Commits mit vertraulichen Daten für alle Branches und Tags Deines {% data variables.product.product_name %}-Repositorys unzugänglich machst. Nicht verhindern lässt sich dadurch jedoch, dass diese Commits nach wie vor in Klonen oder Forks Ihres Repositorys, in zwischengespeicherten Ansichten auf {% data variables.product.product_name %} direkt über ihre SHA-1-Hashes und über alle referenzierten Pull Requests zugänglich sind. An bestehenden Klonen oder Forks Ihres Repositorys können Sie nichts ändern. Zwischengespeicherte Ansichten und Referenzen auf sensible Daten in Pull Requests auf {% data variables.product.product_name %} können Sie jedoch dauerhaft durch den {% data variables.contact.contact_support %} entfernen lassen.

{% endwarning %}

### Datei aus dem Verlauf Deines Repositorys löschen

#### Benutze BFG

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) ist ein von der Open-Source-Community entwickeltes und verwaltetes Tool. Für das Löschen unerwünschter Daten ist es eine schnellere und einfachere Alternative zum Befehl `git filter-branch`. Um beispielsweise Deine Datei mit vertraulichen Daten zu entfernen und Deinen letzten Commit unberührt zu lassen, führe folgenden Befehl aus:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Um allen Text in der Datei `passwords.txt` zu ersetzen, unabhängig davon, wo er sich im Verlauf Deines Repository befindet, führe folgenden Befehl aus:

```shell
$ bfg --replace-text passwords.txt
```

After the sensitive data is removed, you must force push your changes to {% data variables.product.product_name %}.

```shell
$ git push --force
```

Ausführliche Informationen zum Download und zur Verwendung von [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) findest Du in seiner Dokumentation.

#### Mit „filter-branch“

{% warning %}

**Warnung:** Wenn Du `git filter-branch` nach dem Stashing (Ausblenden) von Änderungen ausführst, lassen sich diese Änderungen nicht mehr mit anderen Stash-Befehlen abrufen. Daher empfehlen wir vor der Ausführung von `git filter-branch` das unstashing (wiedereinblenden) Deiner Änderungen. Zum Wiedereinblenden (unstash) des letzten von Dir verborgenen (stashed) Änderungssatzes führe `git stash show -p | git apply -R` aus. Weitere Informationen findest Du unter „[Git Tools - Stashing](https://git-scm.com/book/en/v1/Git-Tools-Stashing)“.

{% endwarning %}

Zur Veranschaulichung der Funktionsweise von `git filter-branch` zeigen wir Dir, wie Du Deine Datei mit vertraulichen Daten aus Deinem Repository-Verlauf entfernst und sie `.gitignore` hinzufügst, um sicherzustellen, dass sie nicht versehentlich erneut festgeschrieben wird.

1. Wenn Du noch keine lokale Kopie Deines Repositorys hast, dessen Verlauf vertrauliche Daten enthält, [klone das Repository](/articles/cloning-a-repository/) auf Deinen lokalen Computer.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
2. Navigiere zum Arbeitsverzeichnis des Repositorys.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
3. Führe folgenden Befehl aus und ersetzte dabei `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` durch **den Pfad der zu entfernenden Datei, nicht nur durch ihren Dateinamen**. Diese Argumente bewirken Folgendes:
    - Sie zwingen Git, den gesamten Verlauf eines jeden Branches und Tags zu verarbeiten, nicht aber sie auszuchecken.
    - Sie entfernen die angegebene Datei sowie alle als Ergebnis generierten leeren Commits
    - **Sie überschreiben Deine bestehenden Tags**
        ```shell
        $ git filter-branch --force --index-filter \
        "git rm --cached --ignore-unmatch <em>PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA</em>" \
        --prune-empty --tag-name-filter cat -- --all
        > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (266/266)
        > Ref 'refs/heads/main' was rewritten
        ```

  {% note %}

  **Hinweis:** Wenn die angegebene Datei mit vertraulichen Daten auch unter anderen Pfaden vorlag (weil sie verschoben oder umbenannt wurde), musst Du diesen Befehl auch für diese Pfade ausführen.

  {% endnote %}

4. Fügen Deine Datei mit vertraulichen Daten `.gitignore` hinzu, um sicherzustellen, dass sie nicht versehentlich erneut festgeschrieben wird.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
5. Vergewissere Dich, dass Du alles aus Deinem Repository-Verlauf entfernt hast, was Du entfernen wolltest, und dass alle Deine Branches ausgecheckt wurden.
6. Wenn Du mit dem Status Deines Repositorys zufrieden bist, erzwinge einen Push Deiner lokalen Änderungen, um Dein {% data variables.product.product_name %}-Repository wie auch alle Branches, die Du per Push übertragen hast, zu überschreiben:
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
7. Um die Datei mit vertraulichen Daten aus [Deinen getaggten Releases](/articles/about-releases) zu entfernen, musst Du auch einen „force-push“ an Deine Git-Tags ausführen:
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
8. Kontaktiere den {% data variables.contact.contact_support %}, um ihn zu bitten, zwischengespeicherte Ansichten und Referenzen auf die vertraulichen Daten in Pull Requests auf {% data variables.product.product_name %} zu entfernen.
9. Weise Deine Mitarbeiter an, ein [Rebase](https://git-scm.com/book/en/Git-Branching-Rebasing), *kein* Merge, aller Branches auszuführen, die sie aus Deinem alten (unbrauchbaren) Repository-Verlauf erstellt haben. Durch einen Merge-Commit würde womöglich der gesamte unbrauchbare Verlauf wiederhergestellt, den zu entfernen Du Dir gerade so viel Mühe gemacht hast.
10. Wenn Du nach einer Weile zuversichtlich bist, dass die Ausführung von `git filter-branch` keine unerwünschten Folgen hatte, kannst Du erzwingen, dass Referenzen auf alle Objekte in Deinem lokalen Repository aufgehoben werden und entstandener „Müll“ mit folgenden Befehlen eingesammelt wird (mit Git 1.8.5 oder einer früheren Version):
  ```shell
  $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
  $ git reflog expire --expire=now --all
  $ git gc --prune=now
  > Counting objects: 2437, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (1378/1378), done.
  > Writing objects: 100% (2437/2437), done.
  > Total 2437 (delta 1461), reused 1802 (delta 1048)
  ```
  {% note %}

   **Hinweis:** Alternativ können Sie den gefilterten Verlauf per Push in ein neues, noch leeres Repository übertragen und dann einen neuen Klon aus {% data variables.product.product_name %} erstellen.

  {% endnote %}

### Versehentliche Commits künftig vermeiden

Durch einige einfache Tricks vermeidest Du den versehentlichen Commit von Änderungen, die nicht festgeschrieben werden sollen:

- Verwenden Sie zum Festschreiben von Änderungen ein visuelles Programm wie [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) oder [gitk](https://git-scm.com/docs/gitk). In visuellen Programmen ist meist leichter erkennbar, welche Dateien durch einen Commit hinzugefügt, gelöscht und geändert werden.
- Vermeide in der Befehlszeile möglichst die Verwendung der catch-all-Befehle `git add .` und `git commit -a` – verwende stattdessen die Befehle `git add filename` und `git rm filename` für das Staging einzelner Dateien.
- Verwende `git add --interactive`, um die Änderungen jeder Datei einzeln zu überprüfen und per Staging für den Commit bereitzustellen.
- Verwende `git diff --cached`, um die Änderungen zu überprüfen, die Du per Staging für den Commit bereitgestellt hast. Du siehst dadurch die exakte Differenz, die `git commit` generieren wird, sofern Du nicht das Flag `-a` verwendest.

### Weiterführende Informationen

- [`git filter-branch` man page](https://git-scm.com/docs/git-filter-branch)
- [Pro Git: Git-Tools – Verlauf umschreiben](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
