---
title: Eliminar un remoto
intro: Utiliza el comando `git remote rm` para eliminar una URL remota de tu repositorio.
redirect_from:
  - /articles/removing-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

El comando `git remote rm` toma un argumento:

* El nombre de un remoto, por ejemplo `destination` (destino)

### Ejemplo

Estos ejemplos asumen que estás [clonando con HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), lo cual se recomienda.

```shell
$ git remote -v
# Ver los remotos actuales
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (push)

$ git remote rm destination
# Eliminar remoto
$ git remote -v
# Verificar que se haya ido
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
```

{% warning %}

**Nota**: `git remote rm` no elimina el repositorio remoto del servidor.  Simplemente, elimina de tu repositorio local el remoto y sus referencias.

{% endwarning %}

### Solución de problemas

Te puedes encontrar con estos errores al intentar eliminar un remoto.

#### No se pudo eliminar la sección de configuración 'remote.[name]'

Este error significa que el remoto que trataste de eliminar no existe:

```shell
$ git remote rm sofake
> error: No se pudo eliminar la sección de configuración 'remote.sofake'
```

Comprueba que escribiste correctamente el nombre del remoto.

### Leer más

- ["Working with Remotes" (Trabajar con remotos) desde el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
