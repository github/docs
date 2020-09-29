---
title: Non-Fast-Forward-Fehler handhaben
intro: 'Manchmal kann Git Deine Änderungen nicht für ein Remote-Repository durchführen, ohne Commits zu verlieren. Wenn dieses Problem auftritt, wird Dein Push abgelehnt.'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn ein anderer Benutzer einen Push zum selben Branch durchgeführt hat wie Du, kann Git Deine Änderungen nicht überführen:

```shell
$ git push origin master
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        master -> master (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

Du kannst dieses Problem beheben, indem Du die Änderungen, die Du am Remote-Branch vorgenommen hast, mit den lokal gemachten Änderungen [abrufst und überträgst](/articles/getting-changes-from-a-remote-repository):

```shell
$ git fetch origin
# Ruft die Änderungen von einem Online-Repository ab
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Führt die online vorgenommen Änderungen mit Deiner lokalen Arbeit zusammen
```

Alternativ kannst Du auch einfach den Befehl `git pull` verwenden, um beide Befehle gleichzeitig auszuführen:

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Ruft Online-Änderungen ab und führt sie mit Deiner lokalen Arbeit zusammen
```
