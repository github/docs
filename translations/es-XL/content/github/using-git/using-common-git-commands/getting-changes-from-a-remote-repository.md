---
title: Obtener cambios de un repositorio remoto
intro: Puedes usar los comandos Git más frecuentes para acceder a repositorios remotos.
redirect_from:
  - /articles/fetching-a-remote/
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Estos comandos son muy útiles cuando interactúas con [un repositorio remoto](/articles/about-remote-repositories). `clone` y `fetch` descargan código remoto de la URL de un repositorio remoto en tu computadora local, `merge` se usa para fusionar el trabajo de diferentes personas con el tuyo, y `pull` es una combinación de `fetch` y `merge`.

### Clonar un repositorio

Para obtener una copia completa del repositorio de otro usuario, usa `git clone` de la siguientes manera:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clona el repositorio en tu computadora
```

Puedes elegir entre [distintas URL](/articles/which-remote-url-should-i-use) cuando clonas un repositorio. Cuando inicias sesión en {% data variables.product.prodname_dotcom %}, estas URL están disponibles debajo de los detalles del repositorio:

![Lista de URL remotas](/assets/images/help/repository/remotes-url.png)

Cuando ejecutas `git clone`, se producen las siguientes acciones:
- Se forma una nueva carpeta llamada `repo`.
- Esta carpeta se inicializa como un repositorio de Git.
- Se crea un remoto llamado `origin` que apunta a la URL desde donde clonaste.
- Todos los archivos y confirmaciones del repositorio se descargan aquí.
- La rama predeterminada está desmarcada

Para cada rama `foo` en el repositorio remoto, se crea la rama de seguimiento remoto correspondiente `refs/remotes/origin/foo` en tu repositorio local. Por lo general, puedes abreviar estos nombres de rama de seguimiento remoto como `origin/foo`.

### Extraer cambios de un repositorio remoto

Usa `git fetch` para recuperar trabajo nuevo realizado por otras personas. Extraer desde un repositorio permite obtener todas las etiquetas y ramas de seguimiento remoto *sin* fusionar estos cambios en tus propias ramas.

Si ya tienes un repositorio local [con una URL remota](/articles/adding-a-remote) configurada para el proyecto deseado, puedes obtener toda la información nueva usando `git fetch *remotename*` en la terminal:

```shell
$ git fetch <em>remotename</em>
# Extrae las actualizaciones realizadas en un repositorio remoto
```

Si no, siempre puedes [agregar un nuevo remoto](/articles/adding-a-remote) y luego extraer.

### Fusionar cambios en tu rama local

La fusión combina tus cambios locales con los cambios realizados por otros.

Por lo general, fusionas una rama de seguimiento remoto (es decir, una rama extraída desde un repositorio remoto) con tu rama local:

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Fusiona actualizaciones realizadas en línea con tu trabajo local
```

### Extraer cambios de un repositorio remoto

`git pull` es un atajo conveniente para realizar tanto `git fetch` y `git merge` en el mismo comando:

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Obtiene actualizaciones en línea y las fusiona con tu trabajo local.
```

Como `pull` realiza una fusión en los cambios recuperados, debes asegurarte de que tu trabajo local esté confirmado antes de ejecutar el comando `pull`. Si se produce un [conflicto de fusión](/articles/resolving-a-merge-conflict-using-the-command-line) que no puedes resolver, o si decides abandonar la fusión, puedes usar `git merge --abort` para hacer que la rama vuelva al estado anterior antes de que extrajeras.

### Leer más

- "[Trabajar con remotos" desde el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes){% if currentVersion == "free-pro-team@latest" %}
- "[Solucionar problemas de conectividad ](/articles/troubleshooting-connectivity-problems)"{% endif %}
