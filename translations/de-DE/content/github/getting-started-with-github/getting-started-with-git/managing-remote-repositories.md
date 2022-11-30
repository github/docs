---
title: Remote-Repositorys verwalten
intro: 'Lerne, mit Deinen lokalen Repositories auf Deinem Computer und Remote-Repositories auf {% data variables.product.product_name %} zu arbeiten.'
redirect_from:
  - /categories/18/articles/
  - /remotes/
  - /categories/managing-remotes/
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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Adding a remote repository

To add a new remote, use the `git remote add` command on the terminal, in the directory your repository is stored at.

Der Befehl `git remote add` hat zwei Argumente:
* einen Remote-Namen, z. B. `origin`
* eine Remote-URL, z. B. `https://{% data variables.command_line.backticks %}/user/repo/git`

Ein Beispiel:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Legt ein neues Remote-Repository fest

$ git remote -v
# Überprüft das neue Remote-Repository
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (push)
```

For more information on which URL to use, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

#### Troubleshooting: Remote origin already exists

Dieser Fehler bedeutet, dass Du versucht hast, ein Remote-Repository hinzuzufügen, dessen Name bereits im lokalen Repository vorhanden ist.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Um diesen Fehler zu beheben, kannst Du:
* einen anderen Namen für das Remote-Repository verwenden
* Rename the existing remote repository
* Delete the existing remote repository

### Changing a remote repository's URL

The `git remote set-url` command changes an existing remote repository URL.

{% tip %}

**Tip:** For information on the difference between HTTPS and SSH URLs, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

{% endtip %}

Der Befehl `git remote set-url` hat zwei Argumente:

* einen vorhandenen Remote-Namen. Zwei gängige Namen sind z. B. `origin` oder `upstream`.
* eine neue URL für das Remote-Repository. Ein Beispiel:
  * Wenn Du eine Aktualisierung auf HTTPS durchführst, sieht die URL ähnlich aus wie folgende:
```shell
https://{% data variables.command_line.backticks %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
```
  * Wenn Du eine Aktualisierung auf SSH durchführst, sieht die URL ähnlich aus wie folgende:
```shell
git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
```

#### Remote-URLs von SSH auf HTTPS umstellen

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Wechsle Dein aktuelles Arbeitsverzeichnis in das lokale Projekt.
3. Liste die vorhandenen Remote-Repositorys auf, um den Namen des Remote-Repositorys zu erhalten, dessen URL Du ändern möchtest.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Ändere die URL Deines Remote-Repositorys mit dem Befehl `git remote set-url` von SSH in HTTPS.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Überprüfe, ob die Remote-URL geändert wurde.
  ```shell
  $ git remote -v
  # Überprüfe die neue Remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```

Wenn Du das nächste Mal den Befehl `git fetch`, `git pull` oder `git push` für das Remote-Repository ausführst, musst Du Deinen GitHub-Benutzernamen und Dein Passwort eingeben. {% data reusables.user_settings.password-authentication-deprecation %}

You can [use a credential helper](/github/getting-started-with-github/caching-your-github-credentials-in-git) so Git will remember your GitHub username and personal access token every time it talks to GitHub.

#### Switching remote URLs from HTTPS to SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Wechsle Dein aktuelles Arbeitsverzeichnis in das lokale Projekt.
3. Liste die vorhandenen Remote-Repositorys auf, um den Namen des Remote-Repositorys zu erhalten, dessen URL Du ändern möchtest.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Ändere die URL Deines Remote-Repositorys mit dem Befehl `git remote set-url` von HTTPS in SSH.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Überprüfe, ob die Remote-URL geändert wurde.
  ```shell
  $ git remote -v
  # Überprüfe die neue Remote URL
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```

#### Troubleshooting: No such remote '[name]'

Wenn dieser Fehler ausgegeben wird, ist das Remote-Repository, das Du ändern wolltest, nicht vorhanden:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Überprüfen Sie, ob Sie den Remote-Namen korrekt eingegeben haben.

### Renaming a remote repository

Use the `git remote rename` command to rename an existing remote.

Der Befehl `git remote rename` hat zwei Argumente:
* den Namen eines vorhandenen Remote-Repositorys, zum Beispiel `origin`
* den neuen Namen für das Remote-Repository, zum Beispiel `destination`

### Beispiel

Bei diesen Beispielen wird davon ausgegangen, dass Du wie empfohlen [Klone mit HTTPS erstellst](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls).

```shell
$ git remote -v
# Zeigt die vorhandenen Remote-Respositorys an
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)

$ git remote rename origin destination
# Ändert den Namen des Remote-Repositorys von 'origin' in 'destination'

$ git remote -v
# Überprüft den neuen Namen des Remote-Repositorys
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### Troubleshooting: Could not rename config section 'remote.[old name]' to 'remote.[new name]'

Wenn dieser Fehler ausgegeben wird, ist das Remote-Repository mit dem eingegebenen bisherigen Namen nicht vorhanden.

Mit dem Befehl `git remote -v` kannst du überprüfen, welche Remote-Repositorys vorhanden sind:

```shell
$ git remote -v
# Zeigt die vorhandenen Remote-Repositorys an
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### Troubleshooting: Remote [new name] already exists

Wenn dieser Fehler ausgegeben wird, wird der Name, in den Du das Remote-Repository umbenennen möchtest, bereits verwendet. To solve this, either use a different remote name, or rename the original remote.

### Removing a remote repository

Use the `git remote rm` command to remove a remote URL from your repository.

Der Befehl `git remote rm` hat ein Argument:
* den Namen eines Remote-Repositorys, zum Beispiel `destination`

### Beispiel

Bei diesen Beispielen wird davon ausgegangen, dass Du wie empfohlen [Klone mit HTTPS erstellst](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls).

```shell
$ git remote -v
# Zeigt die aktuellen Remote-Repositorys an
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (push)

$ git remote rm destination
# Entfernt das Remote-Repository
$ git remote -v
# Überprüft, ob das Remote-Repository entfernt wurde
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
```

{% warning %}

**Hinweis**: `git remote rm` löscht das Remote-Repository nicht vom Server.  Der Befehl entfernt das Remote-Repository und alle relevanten Referenzen lediglich von Deinem lokalen Repository.

{% endwarning %}

#### Troubleshooting: Could not remove config section 'remote.[name]'

Wenn dieser Fehler ausgegeben wird, ist das Remote-Repository, das Du entfernen wolltest, nicht vorhanden:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Überprüfen Sie, ob Sie den Remote-Namen korrekt eingegeben haben.

### Weiterführende Informationen

- „[Mit Remote-Repositorys arbeiten“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)“
