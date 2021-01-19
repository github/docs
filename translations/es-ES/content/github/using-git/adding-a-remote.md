---
title: Agregar un remoto
intro: 'Para agregar un remoto nuevo, usa el comando `git remote add` en el terminal, dentro del directorio donde está almacenado tu repositorio.'
redirect_from:
  - /articles/adding-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

El comando `git remote add` toma dos argumentos:

* Un nombre remoto, por ejemplo, `origin`
* Una URL remota, por ejemplo, `https://{% data variables.command_line.backticks %}/user/repo.git`

Por ejemplo:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (push)
```

¿No estás seguro de que URL usar?  Examina "[¿Qué URL remota debería usar?](/articles/which-remote-url-should-i-use)"

### Solución de problemas

Puedes encontrar estos errores al tratar de agregar un remoto.

#### El `nombre` remoto ya existe

Este error significa que trataste de agregar un remoto con un nombre que ya existe en tu repositorio local:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Para arreglar esto, puedes

* Usar un nombre diferente para el nuevo remoto
* [Renombrar el remoto existente](/articles/renaming-a-remote)
* [Eliminar el remoto existente](/articles/removing-a-remote)

### Further reading

- "[Trabajar con remotos" desde el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
