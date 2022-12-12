---
title: Remote-Repositorys verwalten
intro: 'Lerne, mit Deinen lokalen Repositories auf Deinem Computer und Remote-Repositories auf {% data variables.product.product_name %} zu arbeiten.'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
  - /github/getting-started-with-github/managing-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
ms.openlocfilehash: d89a9c008128154e7de045be0de54db04168cb33
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185051'
---
## Hinzufügen eines Remoterepositorys

Verwende zum Hinzufügen eines neuen Remoterepositorys im Terminal den Befehl `git remote add` in dem Verzeichnis, in dem dein Repository gespeichert ist.

Der Befehl `git remote add` akzeptiert zwei Argumente:
* Einen Remotenamen (beispielsweise `origin`)
* Eine Remote-URL (beispielsweise `https://{% data variables.command_line.backticks %}/user/repo.git`)

Beispiel:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

Weitere Informationen zu der zu verwendenden URL findest du unter [Informationen zu Remoterepositorys](/github/getting-started-with-github/about-remote-repositories).

### Problembehandlung: Das Remoterepository „origin“ ist bereits vorhanden.

Dieser Fehler bedeutet, dass du versucht hast, ein Remoterepository hinzuzufügen, dessen Name bereits in deinem lokalen Repository vorhanden ist.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Du kannst das Problem wie folgt beheben:
* Verwende einen anderen Namen für das Remoterepository.
* Benenne das vorhandene Remoterepository um, bevor du das neue Remoterepository hinzufügst. Weitere Informationen findest du weiter unten unter [Umbenennen eines Remoterepositorys](#renaming-a-remote-repository).
* Lösche das vorhandene Remoterepository, bevor du das neue Remoterepository hinzufügst. Weitere Informationen findest du weiter unten unter [Entfernen eines Remoterepositorys](#removing-a-remote-repository).

## Ändern der URL eines Remoterepositorys

Der Befehl `git remote set-url` dient zum Ändern der URL eines vorhandenen Remoterepositorys.

{% tip %}

**Tipp:** Informationen zum Unterschied zwischen HTTPS- und SSH-URLs findest du unter [Informationen zu Remoterepositorys](/github/getting-started-with-github/about-remote-repositories).

{% endtip %}

Der Befehl `git remote set-url` akzeptiert zwei Argumente:

* einen vorhandenen Remote-Namen. `origin` und `upstream` werden beispielsweise häufig verwendet.
* eine neue URL für das Remote-Repository. Beispiel:
  * Wenn Du eine Aktualisierung auf HTTPS durchführst, sieht die URL ähnlich aus wie folgende:
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * Wenn Du eine Aktualisierung auf SSH durchführst, sieht die URL ähnlich aus wie folgende:
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### Remote-URLs von SSH auf HTTPS umstellen

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere das aktuelle Arbeitsverzeichnis in das lokale Projekt.
3. Liste die vorhandenen Remote-Repositorys auf, um den Namen des Remote-Repositorys zu erhalten, dessen URL Du ändern möchtest.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. Ändere die URL deines Remoterepositorys mithilfe des Befehls `git remote set-url` von SSH in HTTPS.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. Überprüfe, ob die Remote-URL geändert wurde.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

Wenn du das nächste Mal `git fetch`, `git pull` oder `git push` für das Remoterepository verwendest, wirst du zur Angabe deines GitHub-Benutzernamens und deines GitHub-Kennworts aufgefordert. {% data reusables.user-settings.password-authentication-deprecation %}

Du kannst ein [Hilfsprogramm für Anmeldeinformationen](/github/getting-started-with-github/caching-your-github-credentials-in-git) verwenden, damit Git deinen GitHub-Benutzernamen und dein {% data variables.product.pat_generic %} speichert und bei jeder Kommunikation mit GitHub darauf zurückgreift.

### Umstellen von Remote-URLs von HTTPS auf SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere das aktuelle Arbeitsverzeichnis in das lokale Projekt.
3. Liste die vorhandenen Remote-Repositorys auf, um den Namen des Remote-Repositorys zu erhalten, dessen URL Du ändern möchtest.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. Ändere die URL deines Remoterepositorys mithilfe des Befehls `git remote set-url` von HTTPS in SSH.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. Überprüfe, ob die Remote-URL geändert wurde.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### Problembehandlung: Es ist kein Remoterepository mit dem Namen „[Name]“ vorhanden.

Wenn dieser Fehler ausgegeben wird, ist das Remote-Repository, das Du ändern wolltest, nicht vorhanden:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Überprüfe, ob Du den Namen des Remote-Repositorys korrekt eingegeben hast.

## Umbenennen eines Remoterepositorys

Verwende den Befehl `git remote rename`, um ein vorhandenes Remoterepository umzubenennen.

Der Befehl `git remote rename` akzeptiert zwei Argumente:
* Den Namen eines vorhandenen Remoterepositorys (beispielsweise `origin`)
* Einen neuen Namen für das Remoterepository (beispielsweise `destination`)

## Beispiel

In diesen Beispielen wird davon ausgegangen, dass du [beim Klonen HTTPS verwendest](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) (wie empfohlen).

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Problembehandlung: Der Konfigurationsabschnitt „remote.[alter Name]“ konnte nicht in „remote.[neuer Name]“ umbenannt werden.

Dieser Fehler tritt auf, wenn der alte Name, den du für das Remoterepository eingegeben hast, nicht vorhanden ist.

Mit dem Befehl `git remote -v` kannst du überprüfen, welche Remoterepositorys vorhanden sind:

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Problembehandlung: Das Remoterepository „[neuer Name]“ ist bereits vorhanden.

Wenn dieser Fehler ausgegeben wird, wird der Name, in den Du das Remote-Repository umbenennen möchtest, bereits verwendet. Verwende in diesem Fall entweder einen anderen Namen für das Remoterepository, oder benenne das ursprüngliche Remoterepository um.

## Entfernen eines Remoterepositorys 

Verwende den Befehl `git remote rm`, um eine Remote-URL aus deinem Repository zu entfernen.

Der Befehl `git remote rm` akzeptiert ein einzelnes Argument:
* Einen Remotenamen (beispielsweise `destination`)

Wenn du die Remote-URL aus deinem Repository entfernst, wird lediglich die Verknüpfung zwischen lokalem Repository und Remoterepository aufgehoben. Das Remoterepository wird dadurch nicht gelöscht.

## Beispiel

In diesen Beispielen wird davon ausgegangen, dass du [beim Klonen HTTPS verwendest](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) (wie empfohlen).

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

{% warning %}

**Hinweis:** Durch `git remote rm` wird das Remoterepository nicht vom Server gelöscht. Der Befehl entfernt lediglich das Remoterepository und die zugehörigen Verweise aus deinem lokalen Repository.

{% endwarning %}

### Problembehandlung: Der Konfigurationsabschnitt „remote.[Name]“ konnte nicht entfernt werden.

Wenn dieser Fehler ausgegeben wird, ist das Remote-Repository, das Du entfernen wolltest, nicht vorhanden:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Überprüfe, ob Du den Namen des Remote-Repositorys korrekt eingegeben hast.

## Weiterführende Themen

- [„Working with Remotes“ (Verwenden von Remoterepositorys) aus dem Buch _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
