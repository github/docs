---
title: Administrar repositorios remotos
intro: 'Aprende a trabajar con tus repositorios locales en tu computadora y repositorios remotos alojados en {% data variables.product.product_name %}.'
redirect_from:
  - /categories/18/articles/
  - /remotes/
  - /categories/managing-remotes/
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Adding a remote repository

To add a new remote, use the `git remote add` command on the terminal, in the directory your repository is stored at.

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

For more information on which URL to use, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

#### Troubleshooting: Remote origin already exists

Este error significa que trataste de agregar un remoto con un nombre que ya existe en tu repositorio local.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Para arreglar esto, puedes:
* Usar un nombre diferente para el nuevo remoto
* Rename the existing remote repository
* Delete the existing remote repository

### Changing a remote repository's URL

The `git remote set-url` command changes an existing remote repository URL.

{% tip %}

**Tip:** For information on the difference between HTTPS and SSH URLs, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

{% endtip %}

El comando `git remote set-url` toma dos argumentos:

* Un nombre de remoto existente. Por ejemplo, `origin` o `upstream` son dos de las opciones comunes.
* Una nueva URL para el remoto. Por ejemplo:
  * Si estás actualizando para usar HTTPS, tu URL puede verse como:
```shell
https://{% data variables.command_line.backticks %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
```
  * Si estás actualizando para usar SSH, tu URL puede verse como:
```shell
git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
```

#### Cambiar direcciones URL remotas de SSH a HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Enumerar tus remotos existentes a fin de obtener el nombre de los remotos que deseas cambiar.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Cambiar tu URL remota de SSH a HTTPS con el comando `git remote set-url`.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Verificar que la URL remota ha cambiado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```

La próxima vez que ejecutes `git`, `git pull` o `git push` en el repositorio remoto, se te pedirá el nombre de usuario y la contraseña de GitHub. {% data reusables.user_settings.password-authentication-deprecation %}

Puedes [utilizar un ayudante de credenciales](/github/getting-started-with-github/caching-your-github-credentials-in-git) para que Git recuerde tu nombre de usuario y token de acceso personal cada vez que se comunique con GitHub.

#### Cambiar las URL remotas de HTTPS a SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Enumerar tus remotos existentes a fin de obtener el nombre de los remotos que deseas cambiar.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Cambiar tu URL remota de HTTPS a SSH con el comando `git remote set-url`.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Verificar que la URL remota ha cambiado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```

#### Troubleshooting: No such remote '[name]'

Este error significa que el remoto que trataste de cambiar no existe:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Comprueba que escribiste correctamente el nombre del remoto.

### Renaming a remote repository

Use the `git remote rename` command to rename an existing remote.

El comando `git remote rename` toma dos argumentos:
* Un nombre de remoto existente, por ejemplo, `origen`
* Un nombre nuevo para el remoto, por ejemplo, `destino`

### Ejemplo

Estos ejemplos asumen que estás[clonando con HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), lo cual se recomienda.

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

#### Troubleshooting: Could not rename config section 'remote.[old name]' to 'remote.[new name]'

Este error significa que el remoto que probaste con el nombre del remoto antiguo que escribiste no existe.

Puedes verificar los remotos que existen actualmente con el comando `git remote -v`:

```shell
$ git remote -v
# Ver remotos existentes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### Troubleshooting: Remote [new name] already exists

Este error significa que el nombre del remoto que quieres utilizar ya existe. To solve this, either use a different remote name, or rename the original remote.

### Removing a remote repository

Use the `git remote rm` command to remove a remote URL from your repository.

El comando `git remote rm` toma un argumento:
* El nombre de un remoto, por ejemplo `destination` (destino)

### Ejemplo

Estos ejemplos asumen que estás[clonando con HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), lo cual se recomienda.

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

#### Troubleshooting: Could not remove config section 'remote.[name]'

Este error significa que el remoto que trataste de eliminar no existe:

```shell
$ git remote rm sofake
> error: No se pudo eliminar la sección de configuración 'remote.sofake'
```

Comprueba que escribiste correctamente el nombre del remoto.

### Leer más

- "[Trabajar con remotos" desde el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
