---
title: Ein Remote-Repository hinzufügen
intro: 'Um ein neues Remote-Repository hinzuzufügen, führe den Befehl „git remote add“ im Terminal des Verzeichnisses aus, in dem Dein Repository gespeichert ist.'
redirect_from:
  - /articles/adding-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

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

Bist Du unsicher, welche URL Du verwenden musst?  Informationen dazu findest Du unter „[Welche Remote-URL sollte ich verwenden?](/articles/which-remote-url-should-i-use).“

### Problemlösungen

Beim Hinzufügen eines Remote-Repositorys können folgende Fehler auftreten.

#### Remote `name` already exists (Name des Remote-Repositorys ist bereits vorhanden)

Dieser Fehler bedeutet, dass Du versucht hast, ein Remote-Repository hinzuzufügen, dessen Name bereits im lokalen Repository vorhanden ist:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: remote origin already exists.
```

Um diesen Fehler zu beheben, kannst Du

* einen anderen Namen für das Remote-Repository verwenden
* [das vorhandene Remote-Repository umbenennen](/articles/renaming-a-remote)
* [das vorhandene Remote-Repository löschen](/articles/removing-a-remote)

### Weiterführende Informationen

- „[Mit Remote-Repositorys arbeiten“ aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)“
