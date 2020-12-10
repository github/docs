---
title: Remote-Repository entfernen
intro: Zum Entfernen einer Remote-URL Deines Repositorys verwende den Befehl 'git remote rm'.
redirect_from:
  - /articles/removing-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Der Befehl `git remote rm` hat ein Argument:

* den Namen eines Remote-Repositorys, zum Beispiel `destination`

### Beispiel

Bei diesen Beispielen wird davon ausgegangen, dass Du wie empfohlen [Klone mit HTTPS erstellst](/articles/which-remote-url-should-i-use/#cloning-with-https-urls).

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

### Problemlösungen

Beim Entfernen eines Remote-Repositorys können folgende Fehler auftreten.

#### Could not remove config section 'remote.[name]' (Kann den konfigurierten Abschnitt 'remote' nicht entfernen)

Wenn dieser Fehler ausgegeben wird, ist das Remote-Repository, das Du entfernen wolltest, nicht vorhanden:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Überprüfen Sie, ob Sie den Remote-Namen korrekt eingegeben haben.

### Weiterführende Informationen

- [„Mit Remote-Repositorys arbeiten“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
