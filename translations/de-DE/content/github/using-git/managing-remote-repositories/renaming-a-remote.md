---
title: Remote-Repository umbenennen
intro: Zum Umbenennen eines vorhandenen Remote-Repositorys verwende den Befehl „git remote rename“.
redirect_from:
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Der Befehl `git remote rename` hat zwei Argumente:

* den Namen eines vorhandenen Remote-Repositorys, zum Beispiel `origin`
* den neuen Namen für das Remote-Repository, zum Beispiel `destination`

### Beispiel

Bei diesen Beispielen wird davon ausgegangen, dass Du wie empfohlen [Klone mit HTTPS erstellst](/articles/which-remote-url-should-i-use/#cloning-with-https-urls).

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

### Problemlösungen

Beim Umbenennen eines Remote-Repositorys können folgende Fehler auftreten.

#### Could not rename config section 'remote.[old name]' to 'remote.[new name]' (kann die Umbenennung nicht vornehmen)

Wenn dieser Fehler ausgegeben wird, ist das Remote-Repository mit dem eingegebenen bisherigen Namen nicht vorhanden.

Mit dem Befehl `git remote -v` kannst du überprüfen, welche Remote-Repositorys vorhanden sind:

```shell
$ git remote -v
# Zeigt die vorhandenen Remote-Repositorys an
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### Remote [new name] already exists (Neuer Name des Remote existiert bereits)

Wenn dieser Fehler ausgegeben wird, wird der Name, in den Du das Remote-Repository umbenennen möchtest, bereits verwendet. Gib in diesem Fall für dieses Remote-Repository einen anderen Namen ein oder benenne das ursprüngliche Remote-Repository um.

### Weiterführende Informationen

- [„Mit Remote-Repositorys arbeiten“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
