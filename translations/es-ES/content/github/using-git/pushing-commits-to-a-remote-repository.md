---
title: Subir confirmaciones de cambios a un repositorio remoto
intro: Utiliza `git push` para subir confirmaciones de cambios realizadas en tu rama local a un repositorio remoto.
redirect_from:
  - /articles/pushing-to-a-remote/
  - /articles/pushing-commits-to-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

El comando `git push` toma dos argumentos:

* Un nombre remoto, por ejemplo, `origin`
* Un nombre de rama, por ejemplo, `main`

Por ejemplo:

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

Como ejemplo, habitualmente ejecutas `git push origin main` para subir tus cambios locales a tu repositorio en línea.

### Renombrar ramas

Para renombrar una rama, utilizarías el mismo comando `git push`, pero agregarías un argumento más: el nombre de la nueva rama. Por ejemplo:

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

Esto sube `LOCALBRANCHNAME` a tu `REMOTENAME`, pero es renombrado a `REMOTEBRANCHNAME`.

### Abordar errores sin avance rápido

Si tu copia local de un repositorio está desincronizada, o "atrasada", con respecto al repositorio ascendente al que estás subiendo, recibirás un mensaje que dice que `non-fast-forward updates were rejected (las actualizaciones sin avance rápido se rechazaron)`. Esto significa que debes recuperar, o "extraer", los cambios ascendentes, antes de poder subir tus cambios locales.

Para obtener más información sobre este error, consulta "[Resolver errores sin avance rápido](/articles/dealing-with-non-fast-forward-errors)."

### Subir etiquetas

Por defecto, y sin parámetros adicionales, `git push` envía todas las ramas que coinciden para que tengan el mismo nombre que las ramas remotas.

Para subir una etiqueta única, puedes emitir el mismo comando que al subir una rama:

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

Para subir todas tus etiquetas, puede escribir el comando:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

### Eliminar una etiqueta o rama remota

La sintaxis para borrar una rama es un poco críptica a primera vista:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

Nota que hay un espacio antes de los dos puntos. El comando se parece a los mismos pasos que tomarías para renombrar una rama. Sin embargo, aquí estás informándole a Git que no suba _nada_ dentro de `BRANCHNAME` en `REMOTENAME`. Debido a esto, `git push` elimina la rama en el repositorio remoto.

### Remotos y bifurcaciones

Posiblemente ya sepas que [puedes "bifurcar" repositorios](https://guides.github.com/overviews/forking/) en GitHub.

Cuando clonas un repositorio de tu propiedad, le proporcionas una URL remota que le indica a Git dónde extraer y subir actualizaciones. Si deseas colaborar con el repositorio original, agregarías una nueva a URL remota, normalmente llamada `upstream` (ascendente), a tu clon de Git local:

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

Ahora, puedes extraer actualizaciones y ramas de *sus* bifurcaciones:

```shell
git extrae ascendente
# Toma las ramas de los remotos ascendentes
> remoto: Contando objetos: 75, realizado.
> remote: Compressing objects: 100% (53/53), done.
> remoto: Total 62 (delta 27), reutilizados 44 (delta 9)
> Descompimiendo objetos: 100 % (62/62), realziado.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      main     -> upstream/main
```

Cuando hayas finalizado tus cambios locales, puedes subir tu rama local a GitHub e [iniciar una solicitud de extracción](/articles/about-pull-requests).

Para obtener más información sobre cómo trabajar con bifurcaciones, consulta "[Sincronizar una bifurcación](/articles/syncing-a-fork)".

### Further reading

- [El capítulo "Remotos" del libro "Pro Git"](https://git-scm.com/book/ch5-2.html)
- [Documentación en línea sobre `git remote`](https://git-scm.com/docs/git-remote.html)
- "[Git cheatsheet](/articles/git-cheatsheet)" (Hoja introductoria de Git)
- "[Flujos de trabajo de Git](/articles/git-workflows)"
- "[Manual de Git](https://guides.github.com/introduction/git-handbook/)"
