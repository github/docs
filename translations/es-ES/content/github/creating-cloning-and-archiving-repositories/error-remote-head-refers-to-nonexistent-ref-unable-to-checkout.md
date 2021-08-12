---
title: 'Error: HEAD remoto remite a una referencia que no existe, imposible de controlar'
intro: 'Este error ocurre si la rama por defecto de un repositorio se ha eliminado en {% data variables.product.product_location %}.'
redirect_from:
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Es muy fácil detectar este error; Git te dará una advertencia cuando intentes clonar el repositorio:

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

Para resolver el error, es necesario que seas un administrador del repositorio en {% data variables.product.product_location %}. Desearás [cambiar la rama por defecto](/github/administering-a-repository/changing-the-default-branch) del repositorio.

Luego de hacerlo, puedes obtener una lista de todas las ramas disponibles en la línea de comando:

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

Luego, puedes pasar a tu nueva rama:

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
