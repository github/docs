---
title: Beheben von Fehlern beim Klonen
intro: 'Wenn du Probleme beim Klonen eines Repositorys hast, sieh dir diese häufigen Fehler an.'
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
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 60a5ff0350fed34841099c18f495b185b75f9832
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147093142'
---
## Fehler bei HTTPS-Klonvorgängen

Bei der Verwendung von HTTPS bei Git treten einige Fehler häufiger auf. Sie deuten normalerweise darauf hin, dass du eine alte Version von Git verwendest oder keinen Zugriff auf das Repository hast.

Hier siehst du ein Beispiel für einen möglichen HTTPS-Fehler:

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

Für die Interaktion mit {% data variables.product.product_name %} ist keine Mindestversion von Git erforderlich. Unserer Erfahrung nach ist aber die Version 1.7.10 eine gute, stabile Version, die auf vielen Plattformen verfügbar ist. Du kannst jederzeit [die neueste Version auf der Git-Website herunterladen](https://git-scm.com/downloads).

### Überprüfen, ob das Remote-Repository korrekt ist

Das Repository, von dem du etwas abrufen möchtest, muss auf {% data variables.product.product_location %} vorhanden sein. Bei der URL musst du die Groß- und Kleinschreibung beachten.

Um die URL des lokalen Repositorys zu ermitteln, öffne die Befehlszeile und gib `git remote -v` ein:

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Alternativ kannst du die URL über die [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)-Anwendung ändern.

### Zugriffstoken angeben

Um auf {% data variables.product.prodname_dotcom %} zuzugreifen, musst du dich mit einem persönlichen Zugriffstoken anstelle deines Kennworts authentifizieren. Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).

{% data reusables.command_line.provide-an-access-token %}

### Überprüfen Ihrer Berechtigungen

Wenn du zur Eingabe eines Benutzernamens und Passworts aufgefordert wirst, stelle sicher, dass du ein Konto verwendest, das Zugriff auf das Repository hat.

{% tip %}

**Tipp:** Wenn du deine Anmeldeinformationen nicht jedes Mal eingeben möchtest, wenn du das Remoterepository verwendest, kannst du die [Zwischenspeicherung von Anmeldeinformationen](/github/getting-started-with-github/caching-your-github-credentials-in-git) aktivieren. Wenn du die Zwischenspeicherung von Anmeldeinformationen bereits verwendest, solltest du sicherstellen, dass auf deinem Computer die richtigen Anmeldeinformationen zwischengespeichert sind. Falsche oder veraltete Anmeldeinformationen führen zu einem Fehler bei der Authentifizierung.

{% endtip %}

### Stattdessen SSH verwenden

Wenn du zuvor SSH-Schlüssel eingerichtet hast, kannst du statt HTTPS die SSH-Klon-URL verwenden.  Weitere Informationen findest du unter [Informationen zu Remoterepositorys](/github/getting-started-with-github/about-remote-repositories).

## Fehler: „Repository not found“ (Repository wurde nicht gefunden)

{% ifversion fpt or ghae or ghec %}Wenn dieser Fehler beim Klonen eines Repositorys auftritt, bedeutet dies, dass das Repository nicht vorhanden ist oder du nicht über die Berechtigung zum Zugreifen darauf verfügst.{% else %}Wenn dieser Fehler beim Klonen eines Repositorys auftritt, bedeutet dies, dass das Repository nicht vorhanden ist, du nicht über die Berechtigung zum Zugreifen darauf verfügst oder {% data variables.product.product_location %} im privaten Modus ausgeführt wird.{% endif %} Je nach Ursache gibt es verschiedene Lösungen für diesen Fehler.

### Überprüfe die Rechtschreibung.

Tippfehler kommen immer wieder vor, und bei den Namen von Repositorys muss die Groß- und Kleinschreibung beachtet werden.  Wenn du versuchst `git@{% data variables.command_line.codeblock %}:user/repo.git` zu klonen, aber das Repository eigentlich `User/Repo` heißt, erhältst du diesen Fehler.

Um diesen Fehler beim Klonen zu verhindern, solltest du die Klon-URL immer von der Repository-Seite kopieren und einfügen. Weitere Informationen findest du unter [Klonen eines Repositorys](/articles/cloning-a-repository).

Informationen zum Remoteaktualisieren eines vorhandenen Repositorys findest du unter [Verwalten von Remoterepositorys](/github/getting-started-with-github/managing-remote-repositories).

### Berechtigungen überprüfen

Wenn du versuchst, ein privates Repository zu klonen, aber keine Berechtigung zum Anzeigen dieses Repositorys hast, wird diese Fehlermeldung angezeigt.

Stelle sicher, dass du in einer der folgenden Rollen Zugriff auf das Repository hast:

* Inhaber des Repositorys
* Ein [Projektmitarbeiter](/articles/inviting-collaborators-to-a-personal-repository) im Repository
* Ein [Teammitglied](/articles/adding-organization-members-to-a-team) mit Zugriff auf das Repository (wenn das Repository zu einer Organisation gehört)

### SSH-Zugriff überprüfen

In seltenen Fällen kann Dir der richtige SSH-Zugriff auf ein Repository fehlen.

Du solltest sicherstellen, dass der von dir verwendete SSH-Schlüssel an dein persönliches Konto bei {% data variables.product.product_name %} angefügt ist. Um zu prüfen, ob dies bei dir der Fall ist, gib Folgendes an der Befehlszeile ein:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %} Wenn das Repository zu einer Organisation gehört und du einen SSH-Schlüssel verwendest, der von einer OAuth-App generiert wurde, wurde der OAuth-App-Zugriff möglicherweise von einem Organisationsinhaber eingeschränkt. Weitere Informationen findest du unter [Informationen zu OAuth-App-Zugriffsbeschränkungen](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions).
{% endif %}

Weitere Informationen findest du unter [Hinzufügen eines neuen SSH-Schlüssels zu deinem GitHub-Konto](/articles/adding-a-new-ssh-key-to-your-github-account).

{% ifversion ghes %}
### Überprüfe, ob sich deine Instanz im privaten Modus befindet

Wenn die Websiteadministrator*innen für deine GitHub Enterprise-Instanz den privaten Modus aktiviert haben, sind anonyme Klone über `git://` deaktiviert. Wenn du ein Repository nicht klonen kannst, wende Dich an den Websiteadministrator.
{% endif %}

### Überprüfen ob das Repository wirklich vorhanden ist

Wenn alles andere nicht hilft, stelle sicher, dass das Repository tatsächlich auf {% data variables.product.product_location %} vorhanden ist!
Wenn du versuchst, einen Push zu einem Repository zu machen, das nicht vorhanden ist, wird diese Fehlermeldung angezeigt.

## Fehler: „Remote HEAD refers to nonexistent ref, unable to checkout“ (Remote-HEAD verweist auf nicht vorhandene Referenz, Auschecken nicht möglich)

Dieser Fehler tritt auf, wenn der Standardbranch eines Repositorys auf {% data variables.product.product_location %} gelöscht wurde.

Es ist nicht schwierig, diesen Fehler zu erkennen. Git warnt Dich, wenn du versuchst, das Repository zu klonen:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

Um das Problem zu beheben, musst du ein Administrator des Repositorys auf {% data variables.product.product_location %} sein.
[Ändere den Standardbranch](/github/administering-a-repository/changing-the-default-branch) des Repositorys.

Anschließend kannst du über die Befehlszeile eine Liste aller verfügbaren Branches abrufen:

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

Danach kannst du einfach zum neuen Branch wechseln:

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
