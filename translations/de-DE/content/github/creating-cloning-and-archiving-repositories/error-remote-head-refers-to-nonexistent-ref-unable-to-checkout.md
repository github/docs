---
title: 'Fehler: „Remote HEAD refers to nonexistent ref, unable to checkout“ (Remote-HEAD verweist auf nicht vorhandene Referenz, Auschecken nicht möglich)'
intro: 'Dieser Fehler tritt auf, wenn der Standardbranch eines Repositorys auf {% data variables.product.product_location %} gelöscht wurde.'
redirect_from:
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

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
