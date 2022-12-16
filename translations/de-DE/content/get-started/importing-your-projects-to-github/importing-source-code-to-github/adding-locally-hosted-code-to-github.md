---
title: Hinzufügen von lokal gehostetem Code zu GitHub
intro: 'Hier erfährst du, wie du {% data variables.product.product_name %} mithilfe von {% data variables.product.prodname_cli %} oder Git-Befehlen über die Befehlszeile vorhandenen Quellcode oder Repositorys hinzufügst. Teile dann deinen Code, und lade andere ein, mit dir zusammenzuarbeiten.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add locally hosted code
ms.openlocfilehash: 646ea2b0267ffebe546cf014ba7af74ab3c36284
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147855040'
---
## Informationen zum Hinzufügen von vorhandenem Quellcode zu {% data variables.product.product_name %}

Wenn Quellcode oder Repositorys vorhanden sind, die lokal auf deinem Computer oder in deinem privaten Netzwerk gespeichert sind, kannst du sie zu {% data variables.product.product_name %} hinzufügen, indem du Befehle in ein Terminal eingibst. Hierzu kannst du die Git-Befehle direkt eingeben oder {% data variables.product.prodname_cli %} verwenden.

{% data variables.product.prodname_cli %} ist ein Open-Source-Tool zur Verwendung von {% data variables.product.prodname_dotcom %} über die Befehlszeile deines Computers. {% data variables.product.prodname_cli %} kann das Hinzufügen eines bestehenden Projekts zu {% data variables.product.product_name %} über die Befehlszeile vereinfachen. Weitere Informationen zu {% data variables.product.prodname_cli %} findest du unter [Informationen zu {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

{% tip %}

**Tipp:** Wenn du am liebsten mit Point-and-Click-Benutzeroberflächen arbeitest, kannst du dein Projekt auch zu {% data variables.product.prodname_desktop %} hinzufügen. Weitere Informationen findest du unter [Hinzufügen eines Repositorys von deinem lokalen Computer zu GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop) in der *{% data variables.product.prodname_desktop %}-Hilfe*.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Hinzufügen eines lokalen Repositorys zu {% data variables.product.product_name %} mit {% data variables.product.prodname_cli %}

1. Navigiere in der Befehlszeile zum Stammverzeichnis deines Projekts.
1. Initialisiere das lokale Verzeichnis als Git-Repository.

    ```shell
    git init -b main
    ```

1. Stagen und Committen aller Dateien in deinem Projekt

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. Verwende zum Erstellen eines Repositorys für dein Projekt auf GitHub den Unterbefehl `gh repo create`. Wenn du aufgefordert wirst, wähle **Vorhandenes lokales Repository zu GitHub pushen** aus, und gib den gewünschten Namen für dein Repository ein. Wenn dein Projekt anstelle deines Benutzerkontos zu einer Organisation gehören soll, gib den Organisationsnamen und den Projektnamen mit `organization-name/project-name` ein.

1. Befolge die interaktiven Eingabeaufforderungen. Um das Remoterepository hinzuzufügen und das Repository zu pushen, bestätige die Aufforderung mit „Ja“, um das Remoterepository hinzuzufügen und die Commits zur aktuellen Branch zu pushen.

1. Du kannst auch alle Eingabeaufforderungen überspringen. Gib dazu den Pfad zum Repository mit dem Flag `--source` an, und übergib ein Sichtbarkeitsflag (`--public`, `--private` oder `--internal`). Beispiel: `gh repo create --source=. --public`. Gib ein Remoterepository mit dem Flag `--remote` an. Um deine Commits zu pushen, übergib das Flag `--push`. Weitere Informationen zu möglichen Argumenten findest du im [GitHub CLI-Handbuch](https://cli.github.com/manual/gh_repo_create).

## Hinzufügen eines lokalen Repositorys zu {% data variables.product.product_name %} mithilfe von Git

{% mac %}

1. [Erstelle ein neues Repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) auf {% data variables.product.product_location %}. Um Fehler zu vermeiden, initialisiere das neue Repository nicht mit *README*, der Lizenz oder `gitignore`-Dateien. Du kannst diese Dateien hinzufügen, nachdem dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde.
    ![Erstellen eines neuen Repository-Dropdownmenüs](/assets/images/help/repository/repo-create.png) auf {% data reusables.command_line.open_the_multi_os_terminal %}
3. Ändere das aktuelle Arbeitsverzeichnis in das lokale Projekt.
4. Verwende den Befehl `init`, um das lokale Verzeichnis als Git-Repository zu initialisieren. Standardmäßig wird der erste Branch als `master` bezeichnet.
   
   Wenn du Git 2.28.0 oder eine spätere Version verwendest, kannst du den Namen des Standardbranchs mithilfe von `-b` festlegen.

   ``` shell
   $ git init -b main
   ```

   Wenn du Git 2.27.1 oder eine frühere Version verwendest, kannst du den Namen des Standardbranchs mithilfe von `&& git symbolic-ref HEAD refs/heads/main` festlegen.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Füge die Daten zum neuen lokalen Repository hinzu. Das stellt sie für den ersten Commit bereit.
  
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Gib die Dateien frei, die du im lokalen Repository bereitgestellt hast.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. Klicke oben in deinem Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} auf der Seite zur Schnelleinrichtung auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um die URL des Remoterepositorys zu kopieren.
    ![Feld zum Kopieren der Remoterepository-URL](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. [Füge in Terminal die URL für das Remoterepository hinzu](/github/getting-started-with-github/managing-remote-repositories), in das dein lokales Repository gepusht wird.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Pushe die Änderungen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in deinem lokalen Repository an {% data variables.product.product_location %}.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [Erstelle ein neues Repository](/articles/creating-a-new-repository) auf {% data variables.product.product_location %}. Um Fehler zu vermeiden, initialisiere das neue Repository nicht mit *README*, der Lizenz oder `gitignore`-Dateien. Du kannst diese Dateien hinzufügen, nachdem dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde.
    ![Erstellen eines neuen Repository-Dropdownmenüs](/assets/images/help/repository/repo-create.png) auf {% data reusables.command_line.open_the_multi_os_terminal %}
3. Ändere das aktuelle Arbeitsverzeichnis in das lokale Projekt.
4. Verwende den Befehl `init`, um das lokale Verzeichnis als Git-Repository zu initialisieren. Standardmäßig wird der erste Branch als `master` bezeichnet.
   
   Wenn du Git 2.28.0 oder eine spätere Version verwendest, kannst du den Namen des Standardbranchs mithilfe von `-b` festlegen.

   ``` shell
   $ git init -b main
   ```

   Wenn du Git 2.27.1 oder eine frühere Version verwendest, kannst du den Namen des Standardbranchs mithilfe von `&& git symbolic-ref HEAD refs/heads/main` festlegen.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Füge die Daten zum neuen lokalen Repository hinzu. Das stellt sie für den ersten Commit bereit.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Gib die Dateien frei, die du im lokalen Repository bereitgestellt hast.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. Klicke oben in deinem Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} auf der Seite zur Schnelleinrichtung auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um die URL des Remoterepositorys zu kopieren.
    ![Feld zum Kopieren der Remoterepository-URL](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. [Füge in der Eingabeaufforderung die URL für das Remoterepository hinzu](/github/getting-started-with-github/managing-remote-repositories), in das dein lokales Repository gepusht wird.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Pushe die Änderungen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in deinem lokalen Repository an {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. [Erstelle ein neues Repository](/articles/creating-a-new-repository) auf {% data variables.product.product_location %}. Um Fehler zu vermeiden, initialisiere das neue Repository nicht mit *README*, der Lizenz oder `gitignore`-Dateien. Du kannst diese Dateien hinzufügen, nachdem dein Projekt per Push an {% data variables.product.product_name %} übergeben wurde.
    ![Erstellen eines neuen Repository-Dropdownmenüs](/assets/images/help/repository/repo-create.png) auf {% data reusables.command_line.open_the_multi_os_terminal %}
3. Ändere das aktuelle Arbeitsverzeichnis in das lokale Projekt.
4. Verwende den Befehl `init`, um das lokale Verzeichnis als Git-Repository zu initialisieren. Standardmäßig wird der erste Branch als `master` bezeichnet.
   
   Wenn du Git 2.28.0 oder eine spätere Version verwendest, kannst du den Namen des Standardbranchs mithilfe von `-b` festlegen.

   ``` shell
   $ git init -b main
   ```

   Wenn du Git 2.27.1 oder eine frühere Version verwendest, kannst du den Namen des Standardbranchs mithilfe von `&& git symbolic-ref HEAD refs/heads/main` festlegen.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Füge die Daten zum neuen lokalen Repository hinzu. Das stellt sie für den ersten Commit bereit.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Gib die Dateien frei, die du im lokalen Repository bereitgestellt hast.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. Klicke oben in deinem Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} auf der Seite zur Schnelleinrichtung auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um die URL des Remoterepositorys zu kopieren.
    ![Feld zum Kopieren der Remoterepository-URL](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. [Füge in Terminal die URL für das Remoterepository hinzu](/github/getting-started-with-github/managing-remote-repositories), in das dein lokales Repository gepusht wird.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Pushe die Änderungen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in deinem lokalen Repository an {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## Weitere Informationsquellen

- [Hinzufügen einer Datei zu einem Repository](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)
