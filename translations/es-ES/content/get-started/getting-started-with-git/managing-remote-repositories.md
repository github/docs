---
title: Administrar repositorios remotos
intro: 'Aprende a trabajar con tus repositorios locales en tu computadora y repositorios remotos alojados en {% data variables.product.product_name %}.'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
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
  - /github/getting-started-with-github/managing-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
ms.openlocfilehash: d89a9c008128154e7de045be0de54db04168cb33
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185055'
---
## Agregar un repositorio remoto

Para agregar un repositorio remoto nuevo, use el comando `git remote add` en el terminal, dentro del directorio donde está almacenado su repositorio.

El comando `git remote add` toma dos argumentos:
* Un nombre remoto, por ejemplo, `origin`
* Una dirección URL remota, por ejemplo, `https://{% data variables.command_line.backticks %}/user/repo.git`

Por ejemplo:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

Para obtener más información sobre la dirección URL que se va a usar, consulte "[Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)".

### Solución de problemas: El origen remoto ya existe

Este error significa que trató de agregar un repositorio remoto con un nombre que ya existe en su repositorio local:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Para corregir esto, puedes:
* Usar un nombre diferente para el nuevo repositorio remoto.
* Renombra el repositorio remoto existente antes de que agregues el remoto nuevo. Para obtener más información, consulte "[Cambiar el nombre de un repositorio remoto](#renaming-a-remote-repository)" a continuación.
* Borra el repositorio remoto existente antes de que agregues el remoto nuevo. Para obtener más información, consulte "[Eliminación de un repositorio remoto](#removing-a-remote-repository)" a continuación.

## Cambiar la URL del repositorio remoto

El comando `git remote set-url` cambia una dirección URL del repositorio remoto existente.

{% tip %}

**Sugerencia:** Para obtener información sobre la diferencia entre las direcciones URL HTTPS y SSH, consulte ["Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)".

{% endtip %}

El comando `git remote set-url` toma dos argumentos:

* Un nombre de remoto existente. Por ejemplo, `origin` o `upstream` son dos opciones comunes.
* Una nueva URL para el remoto. Por ejemplo:
  * Si estás actualizando para usar HTTPS, tu URL puede verse como:
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * Si estás actualizando para usar SSH, tu URL puede verse como:
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### Cambiar direcciones URL remotas de SSH a HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Enumerar tus remotos existentes a fin de obtener el nombre de los remotos que deseas cambiar.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. Cambie la dirección URL del repositorio remoto de SSH a HTTPS con el comando `git remote set-url`.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. Verificar que la URL remota ha cambiado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

La próxima vez que `git fetch`, `git pull` o `git push` en el repositorio remoto, se le pedirá el nombre de usuario y la contraseña de GitHub. {% data reusables.user-settings.password-authentication-deprecation %}

Puedes [usar un asistente de credenciales](/github/getting-started-with-github/caching-your-github-credentials-in-git) para que Git recuerde tu nombre de usuario de GitHub y el {% data variables.product.pat_generic %} cada vez que se comunique con GitHub.

### Cambiar las URL remotas de HTTPS a SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Enumerar tus remotos existentes a fin de obtener el nombre de los remotos que deseas cambiar.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. Cambie la dirección URL del repositorio remoto de HTTPS a SSH con el comando `git remote set-url`.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. Verificar que la URL remota ha cambiado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### Solución de problemas: No existe tal remoto '[name]'

Este error significa que el remoto que trataste de cambiar no existe:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Comprueba que escribiste correctamente el nombre del remoto.

## Renombrar un repositorio remoto

Use el comando `git remote rename` para cambiar el nombre de un repositorio remoto existente.

El comando `git remote rename` toma dos argumentos:
* Un nombre de repositorio remoto existente, por ejemplo, `origin`
* Un nuevo nombre para el repositorio remoto, por ejemplo, `destination`

## Ejemplo

En estos ejemplos se supone que va a [clonar mediante HTTP](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), que es la opción recomendada.

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Solución de problemas: No se pudo renombrar la sección de configuración 'remote.[old name]' a 'remote.[new name]'

Este error significa que el nombre remoto antiguo que tecleaste ya no existe.

Puede comprobar qué repositorios remotos existen con el comando `git remote -v`:

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Solución de problemas: Ya existe el Remoto [new name]

Este error significa que el nombre del remoto que quieres utilizar ya existe. Para resolver esto, puedes ya sea utilizar un nombre diferente para el remoto o renombrar el remoto original.

## Eliminar un repositorio remoto 

Use el comando `git remote rm` para quitar la dirección URL de un repositorio remoto del repositorio.

El comando `git remote rm` toma un argumento:
* Un nombre de repositorio remoto, por ejemplo, `destination`

El eliminar la URL remota de tu repositorio únicamente desenlazará los repositorios remoto y local. Esto no borra el repositorio remoto.

## Ejemplo

En estos ejemplos se supone que va a [clonar mediante HTTP](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), que es la opción recomendada.

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

{% warning %}

**Nota**: `git remote rm` no elimina el repositorio remoto del servidor. Simplemente elimina del repositorio local el repositorio remoto y sus referencias.

{% endwarning %}

### Solución de problemas: No se pudo eliminar la sección de configuración 'remote.[name]'

Este error significa que el remoto que trataste de eliminar no existe:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Comprueba que escribiste correctamente el nombre del remoto.

## Información adicional

- "[Trabajar con remotos" del libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
