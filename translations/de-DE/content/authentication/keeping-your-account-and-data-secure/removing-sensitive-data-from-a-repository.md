---
title: Entfernen vertraulicher Daten aus einem Repository
intro: 'Wenn du vertrauliche Daten wie Passwörter oder SSH-Schlüssel in ein Git-Repository überträgst, kannst du sie aus dem Verlauf entfernen. Du kannst unerwünschte Dateien mit dem Tool `git filter-repo` oder dem Open-Source-Tool „BFG Repo-Cleaner“ vollständig aus dem Verlauf eines Repositorys entfernen.'
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Remove sensitive data
ms.openlocfilehash: 4c93f372f1d537fd94f06e66986e53d6641923d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086028'
---
Das Tool `git filter-repo` und der BFG Repo-Cleaner generieren einen neuen Verlauf deines Repositorys, wodurch die SHAs für vorhandene Commits, die du bearbeitest, und alle abhängigen Commits geändert werden. Geänderte Commit-SHAs können sich auf offene Pull Requests in deinem Repository auswirken. Wir empfehlen, alle geöffneten Pull Requests zusammenzuführen oder zu schließen, bevor du Dateien aus deinem Repository entfernst.

Du kannst die Datei mit `git rm` aus dem letzten Commit entfernen. Informationen zum Entfernen einer Datei, die mit dem letzten Commit hinzugefügt wurde, findest du unter [Informationen zu großen Dateien auf {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history).

{% warning %}

**Warnung**: In diesem Artikel erfährst du, wie du Commits mit vertraulichen Daten so konfigurierst, dass diese über keinen Branch oder Tag in deinem Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} erreichbar sind. Nicht verhindern lässt sich dadurch jedoch, dass diese Commits nach wie vor in Klonen oder Forks deines Repositorys, in zwischengespeicherten Ansichten auf {% data variables.product.product_name %} direkt über ihre SHA-1-Hashes und über alle referenzierten Pull Requests zugänglich sind. Du kannst vertrauliche Daten nicht aus den Klonen oder Forks deines Repositorys von anderen Benutzern entfernen, aber du kannst zwischengespeicherte Ansichten und Verweise auf die vertraulichen Daten in Pull Requests auf {% data variables.product.product_name %} über den {% data variables.contact.contact_support %} dauerhaft entfernen lassen. 

**Sobald du einen Commit an {% data variables.product.product_name %} gepusht hast, solltest du alle vertraulichen Daten im Commit als kompromittiert betrachten.** Wenn du ein Kennwort per Commit übertragen hast, ändere es! Falls du einen Schlüssel mitgegeben hast, generiere einen neuen. Durch das Entfernen der kompromittierten Daten wird die ursprüngliche Offenlegung nicht behoben, insbesondere nicht in vorhandenen Klonen oder Forks deines Repositorys. Berücksichtige diese Einschränkungen bei deiner Entscheidung, den Verlauf deines Repositorys neu zu generieren.

{% endwarning %}

## Datei aus dem Verlauf deines Repositorys löschen

Du kannst eine Datei endgültig aus dem Verlauf deines Repositorys löschen, indem du entweder das Tool `git filter-repo` oder das Open-Source-Tool BFG Repo-Cleaner verwendest.

### Benutze BFG

Der [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) ist ein von der Open-Source-Community entwickeltes und verwaltetes Tool. Es stellt eine schnellere und einfachere Alternative zu `git filter-branch` dar, um unerwünschte Daten zu entfernen. 

Um beispielsweise deine Datei mit vertraulichen Daten zu entfernen und deinen letzten Commit unberührt zu lassen, führe folgenden Befehl aus:

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Um den gesamten, in `passwords.txt` enthaltenen Text dort zu ersetzen, wo er im Verlauf deines Repositorys aufgeführt ist, musst du folgenden Code ausführen:

```shell
$ bfg --replace-text passwords.txt
```

Nachdem die vertraulichen Daten entfernt wurden, musst du einen Push deiner Änderungen an {% data variables.product.product_name %} erzwingen. Durch den erzwungenen Push wird der Repositoryverlauf neu generiert, wodurch vertrauliche Daten aus dem Commitverlauf entfernt werden. Wenn du einen Push erzwingst, werden möglicherweise Commits überschrieben, auf denen andere Personen ihre Arbeit aufgebaut haben.

```shell
$ git push --force
```

Informationen zur vollständigen Verwendung sowie eine Downloadanleitung findest du in der Dokumentation für [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/).

### Verwenden von „git filter-repo“

{% warning %}

**Warnung:** Wenn du `git filter-repo` nach dem Stashen von Änderungen ausführst, ist es nicht länger möglich, deine Änderungen über andere Stashbefehle erneut abzurufen. Vor dem Ausführen von `git filter-repo` solltest du den Stash aufheben, den du für deine vorgenommenen Änderungen ausgeführt hast. Führe `git stash show -p | git apply -R` aus, um deinen letzten Stash aufzuheben. Weitere Informationen findest du unter [Git Tools – Stashen und Bereinigen](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

Um zu veranschaulichen, wie `git filter-repo` funktioniert, zeigen wir dir, wie du deine Datei mit vertraulichen Daten aus dem Verlauf deines Repositorys entfernst und `.gitignore` hinzufügst, um sicherzustellen, dass sie nicht versehentlich erneut committet wird.

1. Installiere die neueste Version des Tools [git filter-repo](https://github.com/newren/git-filter-repo). Du kannst `git-filter-repo` manuell oder mithilfe eines Paket-Managers installieren. Verwende beispielsweise den Befehl `brew install`, um das Tool mit HomeBrew zu installieren.
  ```
  brew install git-filter-repo
  ```
  Weitere Informationen findest du in [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) im Repository `newren/git-filter-repo`.

2. Wenn du keine lokale Kopie des Repositorys mit den vertraulichen Daten im Verlauf hast, musst du [das Repository auf deinem lokalen Computer klonen](/articles/cloning-a-repository/).
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
4. Führe den folgenden Befehl aus, und ersetze `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` durch den **Pfad zur Datei, die du entfernen möchtest, nicht nur durch den Dateinamen**. Diese Argumente werden:
    - erzwingen, dass Git den gesamten Verlauf eines jeden Branchs und Tags verarbeitet, ohne ihn auszuchecken
    - die angegebene Datei sowie alle leeren Commits entfernen, die als Ergebnis generiert wurden
    - einige Konfigurationen entfernen, wie zum Beispiel die Remote-URL, die in der Datei *.git/config* gespeichert ist Du solltest diese Datei zur späteren Wiederherstellung im Voraus sichern.
    - **vorhandene Tags überschreiben**
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

  **Hinweis:** Wenn die Datei mit vertraulichen Daten in weiteren Pfaden enthalten war (weil sie verschoben oder umbenannt wurde), musst du diesen Befehl auch für diese Pfade ausführen.

  {% endnote %}

5. Füge deine Datei mit vertraulichen Daten zu `.gitignore` hinzu, um sicherzustellen, dass du sie nicht versehentlich erneut committest.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. Überprüfe noch einmal, ob du alles Gewünschte aus dem Verlauf deines Repositorys entfernt hast und ob alle deine Branches ausgecheckt sind.
7. Wenn du mit dem Zustand deines Repositorys zufrieden bist, erzwinge einen Push deiner lokalen Änderungen, um dein Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zu überschreiben, ebenso wie alle von dir gepushten Branches. Ein erzwungener Push ist erforderlich, um vertrauliche Daten aus deinem Commitverlauf zu entfernen.
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
8. Um die vertrauliche Datei aus [Deinen getaggten Releases](/articles/about-releases) zu entfernen, musst du auch einen Push für deine Git-Tags erzwingen:
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

## Vollständiges Entfernen der Daten aus {% data variables.product.prodname_dotcom %}

Nachdem du die vertraulichen Daten entweder mit dem BFG-Tool oder mit `git filter-repo` entfernt und deine Änderungen in {% data variables.product.product_name %} gepusht hast, musst du noch einige weitere Schritte ausführen, um die Daten vollständig aus {% data variables.product.product_name %} zu entfernen.

1. Kontaktiere den {% data variables.contact.contact_support %}, um ihn zu bitten, zwischengespeicherte Ansichten und Referenzen auf die sensiblen Daten in Pull Requests auf {% data variables.product.product_name %} zu entfernen. Gib den Namen des Repositorys und/oder einen Link zu dem Commit an, der entfernt werden soll.{% ifversion ghes %} Weitere Informationen darüber, wie Websiteadministratoren unerreichbare Git-Objekte entfernen können, findest du unter [Befehlszeilen-Hilfsprogramme](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc).{% endif %}

2. Teile deinen Projektmitarbeitern, dass sie für alle Branches, die sie aus deinem alten (nicht mehr gültigen) Repositoryverlauf erstellt haben, ein [Rebase](https://git-scm.com/book/en/Git-Branching-Rebasing), *keinen* Merge durchführen sollen. Durch einen Merge-Commit würde womöglich der gesamte unbrauchbare Verlauf wiederhergestellt, den zu entfernen du Dir gerade so viel Mühe gemacht hast.

3. Nachdem etwas Zeit vergangen ist und du dir sicher bist, dass das BFG-Tool/`git filter-repo` keine unbeabsichtigten Nebenwirkungen verursacht hat, kannst du mithilfe der folgenden Befehle erzwingen, dass Verweise auf alle Objekte in deinem lokalen Repository aufgehoben werden und eine Garbage Collection durchgeführt wird (bei Verwendung von Git 1.8.5 oder höher):
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

   **Hinweis:** Du kannst dies auch erreichen, indem du deinen gefilterten Verlauf in ein neues oder leeres Repository pushst und dann einen neuen Klon von {% data variables.product.product_name %} erstellst.

  {% endnote %}

## Versehentliche Commits künftig vermeiden

Durch einige einfache Tricks vermeidest du den versehentlichen Commit von Änderungen, die nicht festgeschrieben werden sollen:

- Verwende ein visuelles Programm wie [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) oder [gitk](https://git-scm.com/docs/gitk), um die Änderungen zu committen. In visuellen Programmen ist meist leichter erkennbar, welche Dateien durch einen Commit hinzugefügt, gelöscht und geändert werden.
- Vermeide die allgemeingültigen Befehle `git add .` und `git commit -a` für die Befehlszeile – verwende stattdessen `git add filename` und `git rm filename`, um die Dateien einzeln bereitzustellen.
- Verwende `git add --interactive`, um die Änderungen in jeder Datei einzeln zu überprüfen und zu stagen.
- Verwende `git diff --cached`, um die für den Commit gestageten Änderungen zu überprüfen. Das ist genau der Unterschied, den `git commit` erzeugt, solange du nicht das `-a` Flag verwendest.

## Weitere Informationsquellen

- [`git filter-repo`-Manpage](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Git-Tools – Erneutes Generieren des Verlaufs](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- [Informationen zur Geheimnisüberprüfung](/code-security/secret-security/about-secret-scanning)
