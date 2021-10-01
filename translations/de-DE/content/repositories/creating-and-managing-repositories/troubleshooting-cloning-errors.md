---
title: Beheben von Fehlern beim Klonen
intro: 'If you''re having trouble cloning a repository, check these common errors.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

## Fehler bei HTTPS-Klonvorgängen

Bei der Verwendung von HTTPS bei Git treten einige Fehler häufiger auf. Sie deuten normalerweise darauf hin, dass Du eine alte Version von Git verwendest oder keinen Zugriff auf das Repository hast.

Hier siehst Du ein Beispiel für einen möglichen HTTPS-Fehler:

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs not found: did you run git
> update-server-info on the server?
```

### Git-Version überprüfen

Für die Interaktion mit {% data variables.product.product_name %} ist keine Mindestversion von Git erforderlich. Unserer Erfahrung nach ist aber die Version 1.7.10 eine gute, stabile Version, die auf vielen Plattformen verfügbar ist. Du kannst immer [die neueste Version auf der Git-Website herunterladen](https://git-scm.com/downloads).

### Überprüfen, ob das Remote-Repository korrekt ist

Das Repository, von dem Sie etwas abrufen möchten, muss auf {% data variables.product.product_location %} vorhanden sein. Bei der URL müssen Sie die Groß- und Kleinschreibung beachten.

Um die URL des lokalen Repositorys zu ermitteln, öffne die Befehlszeile und gib `git remote -v` ein:

```shell
$ git remote -v
# Zeigt vorhandene Remote-Repositorys an
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Ändert die origin-Remote-URL

$ git remote -v
# Überprüft die neue Remote-URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Alternativ können Sie die URL auch über unsere [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)-Anwendung ändern.

### Zugriffstoken angeben

To access {% data variables.product.prodname_dotcom %}, you must authenticate with a personal access token instead of your password. Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."

{% data reusables.command_line.provide-an-access-token %}

### Berechtigungen überprüfen

Wenn Du zur Eingabe eines Benutzernamens und Passworts aufgefordert wirst, stelle sicher, dass Du ein Konto verwendest, das Zugriff auf das Repository hat.

{% tip %}

**Tip**: If you don't want to enter your credentials every time you interact with the remote repository, you can turn on [credential caching](/github/getting-started-with-github/caching-your-github-credentials-in-git). If you are already using credential caching, please make sure that your computer has the correct credentials cached. Incorrect or out of date credentials will cause authentication to fail.

{% endtip %}

### Stattdessen SSH verwenden

Wenn Du zuvor SSH-Schlüssel eingerichtet hast, kannst Du statt HTTPS die SSH-Klon-URL verwenden.  For more information, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

## Fehler: „Repository not found“ (Repository wurde nicht gefunden)

{% ifversion fpt or ghae %}If you see this error when cloning a repository, it means that the repository does not exist or you do not have permission to access it.{% else %}If you see this error when cloning a repository, it means that the repository does not exist, you do not have permission to access it, or {% data variables.product.product_location %} is in private mode.{% endif %} There are a few solutions to this error, depending on the cause.

### Schreibweise überprüfen

Tippfehler kommen immer wieder vor, und bei den Namen von Repositorys muss die Groß- und Kleinschreibung beachtet werden.  Wenn Sie versuchen, `git@{% data variables.command_line.codeblock %}:user/repo.git` zu klonen, das Repository aber in Wirklichkeit `User/Repo` heißt, wird diese Fehlermeldung angezeigt.

Um diesen Fehler beim Klonen zu verhindern, solltest Du die Klon-URL immer von der Repository-Seite kopieren und einfügen. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.

To update the remote on an existing repository, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)".

### Berechtigungen überprüfen

Wenn Du versuchst, ein privates Repository zu klonen, aber keine Berechtigung zum Anzeigen dieses Repositorys hast, wird diese Fehlermeldung angezeigt.

Stelle sicher, dass Du in einer der folgenden Rollen Zugriff auf das Repository hast:

* Inhaber des Repositorys
* [Mitarbeiter](/articles/inviting-collaborators-to-a-personal-repository) bei einem Repository
* [Mitglied eines Teams](/articles/adding-organization-members-to-a-team), das Zugriff auf das Repository hat (wenn das Repository zu einer Organisation gehört)

### SSH-Zugriff überprüfen

In seltenen Fällen kann Dir der richtige SSH-Zugriff auf ein Repository fehlen.

Sie sollten sicherstellen, dass der von Ihnen verwendete SSH-Schlüssel an Ihr {% data variables.product.product_name %}-Benutzerkonto angehängt ist. Um zu prüfen, ob dies bei Dir der Fall ist, gib Folgendes in die Befehlszeile ein:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Wenn das Repository zu einer Organisation gehört und Du einen SSH-Schlüssel verwendest, der von einer OAuth-App generiert wurde, wurde der OAuth-App-Zugriff möglicherweise von einem Organisationsinhaber eingeschränkt. For more information, see "<a href="/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions" class="dotcom-only">About OAuth App access restrictions</a>."

Weitere Informationen findest Du unter „[Einen neuen SSH-Schlüssel zum GitHub-Konto hinzufügen](/articles/adding-a-new-ssh-key-to-your-github-account)“.

{% ifversion ghes %}
### Überprüfe, ob sich Deine Instanz im privaten Modus befindet

Wenn Dein Websiteadministrator den privaten Modus auf Deiner GitHub Enterprise-Instanz aktiviert hat, sind anonyme Klone über `git://` deaktiviert. Wenn Du ein Repository nicht klonen kannst, wende Dich an den Websiteadministrator.
{% endif %}

### Überprüfen ob das Repository wirklich vorhanden ist

Wenn alles andere nicht hilft, stelle sicher, dass das Repository tatsächlich auf {% data variables.product.product_location %} vorhanden ist! Wenn Du versuchst, einen Push zu einem Repository zu machen, das nicht vorhanden ist, wird diese Fehlermeldung angezeigt.

## Fehler: „Remote HEAD refers to nonexistent ref, unable to checkout“ (Remote-HEAD verweist auf nicht vorhandene Referenz, Auschecken nicht möglich)

Dieser Fehler tritt auf, wenn der Standardbranch eines Repositorys auf {% data variables.product.product_location %} gelöscht wurde.

Es ist nicht schwierig, diesen Fehler zu erkennen. Git warnt Dich, wenn Du versuchst, das Repository zu klonen:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Klont ein Repository
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

Um das Problem zu beheben, musst Du ein Administrator des Repositorys auf {% data variables.product.product_location %} sein. [Ändere den Standardbranch](/github/administering-a-repository/changing-the-default-branch) des Repositorys.

Anschließend kannst Du über die Befehlszeile eine Liste aller verfügbaren Branches abrufen:

```shell
$ git branch -a
# Führt ALLE Branches auf
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-master
```

Danach kannst Du einfach zum neuen Branch wechseln:

```shell
$ git checkout new-master
# Erstellt einen Tracking-Branch und checkt ihn aus
> Branch new-master set up to track remote branch new-master from origin.
> Switched to a new branch 'new-master'
```
