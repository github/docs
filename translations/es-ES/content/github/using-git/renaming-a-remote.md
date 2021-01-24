---
title: Renombrar un remoto
intro: Utiliza el comando `git remote rename` para renombrar un remoto existente.
redirect_from:
  - /articles/renaming-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

El comando `git remote rename` toma dos argumentos:

* Un nombre de remoto existente, por ejemplo, `origen`
* Un nombre nuevo para el remoto, por ejemplo, `destino`

### Ejemplo

Estos ejemplos asumen que estás [clonando con HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), lo cual se recomienda.

```shell
$ git remote -v
# Ver remotos existentes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)

$ git remote rename origin destination
# Cambiar el nombre del remoto de 'origen' a 'destino'

$ git remote -v
# Verificar el nombre nuevo del remoto
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

### Solución de problemas

Puedes encontrar estos errores cuando intentes renombrar un remoto.

#### No se pudo renombrar la sección de configuración 'remoto.[nombre antiguo]' con 'remoto.[nombre nuevo]'

Este error significa que el remoto que probaste con el nombre del remoto antiguo que escribiste no existe.

Puedes verificar los remotos que existen actualmente con el comando `git remote -v`:

```shell
$ git remote -v
# Ver remotos existentes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### El [nombre nuevo] del remoto ya existe.

Este error significa que el nombre del remoto que quieres utilizar ya existe. Para resolverlo, utiliza un nombre de remoto diferente o renombra el remoto original.

### Further reading

- ["Working with Remotes" (Trabajar con remotos) desde el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
