---
title: Fehler bei HTTPS-Klonvorgängen
intro: 'Bei der Verwendung von HTTPS bei Git treten einige Fehler häufiger auf. Sie deuten normalerweise darauf hin, dass Du eine alte Version von Git verwendest oder keinen Zugriff auf das Repository hast.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403/
  - /articles/error-the-requested-url-returned-error-401/
  - /articles/error-did-you-run-git-update-server-info-on-the-server/
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs/
  - /articles/https-cloning-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

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

Das Repository, von dem Du etwas abrufen möchtest, muss auf {% data variables.product.product_location %} vorhanden sein. Bei der URL musst Du die Groß- und Kleinschreibung beachten.

Um die URL des lokalen Repositorys zu ermitteln, öffne die Befehlszeile und gib `git remote -v` ein:

```shell
$ git remote -v
# Zeigt vorhandene Remote-Repositorys an
> origin  https://github.com/github/reactivecocoa.git (fetch)
> origin  https://github.com/github/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/github/ReactiveCocoa.git
# Ändert die origin-Remote-URL

$ git remote -v
# Überprüft die neue Remote-URL
> origin  https://github.com/github/ReactiveCocoa.git (fetch)
> origin  https://github.com/github/ReactiveCocoa.git (push)
```

Alternativ kannst Du die URL auch über unsere [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)-Anwendung ändern.

### Zugriffstoken angeben

To access {% data variables.product.prodname_dotcom %}, you must authenticate with a personal access token instead of your password. Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."

{% data reusables.command_line.provide-an-access-token %}

### Berechtigungen überprüfen

Wenn Du zur Eingabe eines Benutzernamens und Passworts aufgefordert wirst, stelle sicher, dass Du ein Konto verwendest, das Zugriff auf das Repository hat.

{% tip %}

**Tip**: If you don't want to enter your credentials every time you interact with the remote repository, you can turn on [credential caching](/github/using-git/caching-your-github-credentials-in-git).

{% endtip %}

### Stattdessen SSH verwenden

Wenn Du zuvor SSH-Schlüssel eingerichtet hast, kannst Du statt HTTPS die SSH-Klon-URL verwenden.  Weitere Informationen findest Du unter „[Welche Remote-URL sollte ich verwenden?](/articles/which-remote-url-should-i-use).“
