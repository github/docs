---
title: Sensible Daten aus einem Repository entfernen
intro: 'Wenn Du vertrauliche Daten wie Passwörter oder SSH-Schlüssel in ein Git-Repository überträgst, kannst Du diese aus dem Verlauf entfernen. To entirely remove unwanted files from a repository''s history you can use either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.'
redirect_from:
  - /remove-sensitive-data/
  - /removing-sensitive-data/
  - /articles/remove-sensitive-data/
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Remove sensitive data
---

The `git filter-repo` tool and the BFG Repo-Cleaner rewrite your repository's history, which changes the SHAs for existing commits that you alter and any dependent commits. Geänderte Commit-SHAs können sich auf offene Pull Requests in Deinem Repository auswirken. Wir raten dringend, alle offenen Pull Requests zusammenzuführen oder zu schließen, bevor Du Dateien aus Deinem Repository entfernst.

Die Datei aus dem letzten Commit kannst Du auch mit `git rm` entfernen. For information on removing a file that was added with the latest commit, see "[About large files on {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)."

{% warning %}

In diesem Artikel erfährst Du, wie Du Commits mit vertraulichen Daten für alle Branches und Tags Deines {% data variables.product.product_name %}-Repositorys unzugänglich machst. Nicht verhindern lässt sich dadurch jedoch, dass diese Commits nach wie vor in Klonen oder Forks Ihres Repositorys, in zwischengespeicherten Ansichten auf {% data variables.product.product_name %} direkt über ihre SHA-1-Hashes und über alle referenzierten Pull Requests zugänglich sind. You cannot remove sensitive data from other users' clones or forks of your repository, but you can permanently remove cached views and references to the sensitive data in pull requests on {% data variables.product.product_name %} by contacting {% data variables.contact.contact_support %}.

**Warning: Once you have pushed a commit to {% data variables.product.product_name %}, you should consider any sensitive data in the commit compromised.** If you committed a password, change it! Falls Du einen Schlüssel mitgegeben hast, generiere einen neuen. Removing the compromised data doesn't resolve its initial exposure, especially in existing clones or forks of your repository. Consider these limitations in your decision to rewrite your repository's history.

{% endwarning %}

## Datei aus dem Verlauf Deines Repositorys löschen

You can purge a file from your repository's history using either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.

### Benutze BFG

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) ist ein von der Open-Source-Community entwickeltes und verwaltetes Tool. Für das Löschen unerwünschter Daten ist es eine schnellere und einfachere Alternative zum Befehl `git filter-branch`.

Um beispielsweise Deine Datei mit vertraulichen Daten zu entfernen und Deinen letzten Commit unberührt zu lassen, führe folgenden Befehl aus:

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

### Using git filter-repo

{% warning %}

**Warning:** If you run `git filter-repo` after stashing changes, you won't be able to retrieve your changes with other stash commands. Before running `git filter-repo`, we recommend unstashing any changes you've made. Zum Wiedereinblenden (unstash) des letzten von Dir verborgenen (stashed) Änderungssatzes führe `git stash show -p | git apply -R` aus. For more information, see [Git Tools - Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

To illustrate how `git filter-repo` works, we'll show you how to remove your file with sensitive data from the history of your repository and add it to `.gitignore` to ensure that it is not accidentally re-committed.

1. Install the latest release of the [git filter-repo](https://github.com/newren/git-filter-repo) tool. You can install `git-filter-repo` manually or by using a package manager. For example, to install the tool with HomeBrew, use the `brew install` command.
  ```
  brew install git-filter-repo
  ```
  For more information, see [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) in the `newren/git-filter-repo` repository.

2. Wenn Du noch keine lokale Kopie Deines Repositorys hast, dessen Verlauf vertrauliche Daten enthält, [klone das Repository](/articles/cloning-a-repository/) auf Deinen lokalen Computer.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. Navigiere zum Arbeitsverzeichnis des Repositorys.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. Führe folgenden Befehl aus und ersetzte dabei `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` durch **den Pfad der zu entfernenden Datei, nicht nur durch ihren Dateinamen**. Diese Argumente bewirken Folgendes:
    - Sie zwingen Git, den gesamten Verlauf eines jeden Branches und Tags zu verarbeiten, nicht aber sie auszuchecken.
    - Sie entfernen die angegebene Datei sowie alle als Ergebnis generierten leeren Commits
    - Remove some configurations, such as the remote URL, stored in the *.git/config* file. You may want to back up this file in advance for restoration later.
    - **Sie überschreiben Deine bestehenden Tags**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **Hinweis:** Wenn die angegebene Datei mit vertraulichen Daten auch unter anderen Pfaden vorlag (weil sie verschoben oder umbenannt wurde), musst Du diesen Befehl auch für diese Pfade ausführen.

  {% endnote %}

5. Fügen Deine Datei mit vertraulichen Daten `.gitignore` hinzu, um sicherzustellen, dass sie nicht versehentlich erneut festgeschrieben wird.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. Vergewissere Dich, dass Du alles aus Deinem Repository-Verlauf entfernt hast, was Du entfernen wolltest, und dass alle Deine Branches ausgecheckt wurden.
7. Wenn Du mit dem Status Deines Repositorys zufrieden bist, erzwinge einen Push Deiner lokalen Änderungen, um Dein {% data variables.product.product_name %}-Repository wie auch alle Branches, die Du per Push übertragen hast, zu überschreiben:
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
8. Um die Datei mit vertraulichen Daten aus [Deinen getaggten Releases](/articles/about-releases) zu entfernen, musst Du auch einen „force-push“ an Deine Git-Tags ausführen:
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

## Fully removing the data from {% data variables.product.prodname_dotcom %}

After using either the BFG tool or `git filter-repo` to remove the sensitive data and pushing your changes to {% data variables.product.product_name %}, you must take a few more steps to fully remove the data from {% data variables.product.product_name %}.

1. Kontaktiere den {% data variables.contact.contact_support %}, um ihn zu bitten, zwischengespeicherte Ansichten und Referenzen auf die vertraulichen Daten in Pull Requests auf {% data variables.product.product_name %} zu entfernen. Please provide the name of the repository and/or a link to the commit you need removed.

2. Weise Deine Mitarbeiter an, ein [Rebase](https://git-scm.com/book/en/Git-Branching-Rebasing), *kein* Merge, aller Branches auszuführen, die sie aus Deinem alten (unbrauchbaren) Repository-Verlauf erstellt haben. Durch einen Merge-Commit würde womöglich der gesamte unbrauchbare Verlauf wiederhergestellt, den zu entfernen Du Dir gerade so viel Mühe gemacht hast.

3. After some time has passed and you're confident that the BFG tool / `git filter-repo` had no unintended side effects, you can force all objects in your local repository to be dereferenced and garbage collected with the following commands (using Git 1.8.5 or newer):
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

## Versehentliche Commits künftig vermeiden

Durch einige einfache Tricks vermeidest Du den versehentlichen Commit von Änderungen, die nicht festgeschrieben werden sollen:

- Verwenden Sie zum Festschreiben von Änderungen ein visuelles Programm wie [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) oder [gitk](https://git-scm.com/docs/gitk). In visuellen Programmen ist meist leichter erkennbar, welche Dateien durch einen Commit hinzugefügt, gelöscht und geändert werden.
- Vermeide in der Befehlszeile möglichst die Verwendung der catch-all-Befehle `git add .` und `git commit -a` – verwende stattdessen die Befehle `git add filename` und `git rm filename` für das Staging einzelner Dateien.
- Verwende `git add --interactive`, um die Änderungen jeder Datei einzeln zu überprüfen und per Staging für den Commit bereitzustellen.
- Verwende `git diff --cached`, um die Änderungen zu überprüfen, die Du per Staging für den Commit bereitgestellt hast. Du siehst dadurch die exakte Differenz, die `git commit` generieren wird, sofern Du nicht das Flag `-a` verwendest.

## Weiterführende Informationen

- [`git filter-repo` man page](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Git Tools - Rewriting History](https://git-scm.com/book/en/Git-Tools-Rewriting-History){% ifversion fpt or ghae or ghes > 2.22 %}
- "[About Secret scanning](/code-security/secret-security/about-secret-scanning)"{% endif %}
