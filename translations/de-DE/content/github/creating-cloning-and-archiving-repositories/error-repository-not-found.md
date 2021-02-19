---
title: 'Fehler: „Repository not found“ (Repository wurde nicht gefunden)'
intro: '{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}If you see this error when cloning a repository, it means that the repository does not exist or you do not have permission to access it.{% else %}If you see this error when cloning a repository, it means that the repository does not exist, you do not have permission to access it, or {% data variables.product.product_location %} is in private mode.{% endif %} There are a few solutions to this error, depending on the cause.'
redirect_from:
  - /articles/error-repository-not-found
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Schreibweise überprüfen

Tippfehler kommen immer wieder vor, und bei den Namen von Repositorys muss die Groß- und Kleinschreibung beachtet werden.  Wenn Sie versuchen, `git@{% data variables.command_line.codeblock %}:user/repo.git` zu klonen, das Repository aber in Wirklichkeit `User/Repo` heißt, wird diese Fehlermeldung angezeigt.

Um diesen Fehler beim Klonen zu verhindern, solltest Du die Klon-URL immer von der Repository-Seite kopieren und einfügen. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.

Informationen zum Aktualisieren des Remote eines bestehenden Repositorys findest Du unter „[URL eines Remote-Repositorys ändern](/articles/changing-a-remote-s-url)“.

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

Wenn das Repository zu einer Organisation gehört und Du einen SSH-Schlüssel verwendest, der von einer OAuth-App generiert wurde, wurde der OAuth-App-Zugriff möglicherweise von einem Organisationsinhaber eingeschränkt. Weitere Informationen findest Du unter „<a href="/github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions" class="dotcom-only">Informationen zu OAuth-App-Zugriffsbeschränkungen</a>.“

Weitere Informationen findest Du unter „[Einen neuen SSH-Schlüssel zum GitHub-Konto hinzufügen](/articles/adding-a-new-ssh-key-to-your-github-account)“.

{% if enterpriseServerVersions contains currentVersion %}
### Überprüfe, ob sich Deine Instanz im privaten Modus befindet

Wenn Dein Websiteadministrator den privaten Modus auf Deiner GitHub Enterprise-Instanz aktiviert hat, sind anonyme Klone über `git://` deaktiviert. Wenn Du ein Repository nicht klonen kannst, wende Dich an den Websiteadministrator.
{% endif %}

### Überprüfen ob das Repository wirklich vorhanden ist

Wenn alles andere nicht hilft, stelle sicher, dass das Repository tatsächlich auf {% data variables.product.product_location %} vorhanden ist! Wenn Du versuchst, einen Push zu einem Repository zu machen, das nicht vorhanden ist, wird diese Fehlermeldung angezeigt.
