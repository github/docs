---
title: Solucionar los errores de clonado
intro: 'Si estás teniendo problemas para clonar un repositorio, verifica estos errores comunes.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 60a5ff0350fed34841099c18f495b185b75f9832
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147093146'
---
## Errores de clonación de HTTPS

Existen algunos errores comunes cuando se utiliza HTTPS con Git. Estos errores suelen indicar que tienes una versión antigua de Git o que no tienes acceso al repositorio.

Aquí aparece un ejemplo de un error de HTTPS que puedes recibir:

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs not found: did you run git
> update-server-info on the server?
```

### Comprueba tu versión de Git

No hay una versión mínima de Git que sea necesaria para interactuar con {% data variables.product.product_name %}, pero hemos descubierto que la versión 1.7.10 es una versión estable y cómoda que está disponible en muchas plataformas. Siempre puede [descargar la versión más reciente en el sitio web de Git](https://git-scm.com/downloads).

### Asegúrate de que el remoto sea correcto

El repositorio que estás tratando de extraer debe existir en {% data variables.product.product_location %}, y la URL distingue entre mayúsculas y minúsculas.

Para encontrar la dirección URL del repositorio local, abra la línea de comandos y escriba `git remote -v`:

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

También puede cambiar la dirección URL desde nuestra aplicación [{% data variables.product.prodname_desktop %}](https://desktop.github.com/).

### Proporciona un token de acceso

Para acceder a {% data variables.product.prodname_dotcom %}, debes autenticarte con un token de acceso personal en vez de con tu contraseña. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

{% data reusables.command_line.provide-an-access-token %}

### Comprobar los permisos

Cuando se te solicite un nombre de usuario y contraseña, asegúrate de usar una cuenta que tenga acceso al repositorio.

{% tip %}

**Sugerencia**: Si no desea escribir sus credenciales cada vez que interactúe con el repositorio remoto, puede activar el [almacenamiento en caché de credenciales](/github/getting-started-with-github/caching-your-github-credentials-in-git). Si ya estás utilizando el almacenamiento de credenciales en caché, por favor, asegúrate de que tu computadora tenga las credenciales correctas almacenadas en caché. Las credenciales erróneas o desactualizadas causarán que falle la autenticación.

{% endtip %}

### Usar SSH en su lugar

Si ya has configurado claves SSH, puedes usar el clon SSH en lugar de HTTPS.  Para obtener más información, consulte "[Acerca de los repositorios](/github/getting-started-with-github/about-remote-repositories)".

## Error: Repositorio no encontrado

{% ifversion fpt or ghae or ghec %}Si aparece este error al clonar un repositorio, significa que el repositorio no existe o no tiene permiso para acceder a él.{% else %}Si aparece este error al clonar un repositorio, significa que el repositorio no existe, no tiene permiso para acceder a él o {% data variables.product.product_location %} está en modo privado.{% endif %} Hay varias soluciones para este error que varían en función de la causa.

### Revise la ortografía

Los errores tipográficos suceden, y los nombres de los repositorios distinguen mayúsculas de minúsculas.  Si intenta clonar `git@{% data variables.command_line.codeblock %}:user/repo.git`, pero el repositorio se denomina `User/Repo`, aparecerá este error.

Para evitar este error, cuando clonas, copia y pega siempre la URL del clon desde la página del repositorio. Para más información, vea "[Clonación de un repositorio](/articles/cloning-a-repository)".

Para actualizar el repositorio remoto en un repositorio existente, consulte "[Administración de repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)".

### Comprobar tus permisos

Si estás tratando de clonar un repositorio privado pero no tienes permiso para ver el repositorio, recibirás este error.

Verifica si tienes acceso al repositorio de alguna de las siguientes maneras:

* Como propietario del repositorio
* Un [colaborador](/articles/inviting-collaborators-to-a-personal-repository) en el repositorio
* Un [miembro de un equipo](/articles/adding-organization-members-to-a-team) que tenga acceso al repositorio (si el repositorio pertenece a una organización)

### Comprueba tu acceso SSH

En muy raros casos, es posible que no tengas el acceso SSH correcto al repositorio.

Debes asegurarte de que la clave SSH que estás usando se encuentre asociada a tu cuenta personal en {% data variables.product.product_name %}. Para comprobarlo, escriba lo siguiente en la línea de comandos:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %} Si el repositorio pertenece a una organización y estás usando una llave SSH generada por una OAuth App, puede que algún dueño de la organización haya restringido el acceso OAuth App. Para obtener más información, consulte "[Acerca de las restricciones de acceso a la aplicación de OAuth](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)".
{% endif %}

Para obtener más información, consulte [Agregar una clave SSH nueva a su cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% ifversion ghes %}
### Comprueba si tu instancia se encuentra en el modo privado

Si su administrador del sitio ha habilitado el modo privado en su instancia de GitHub Enterprise, los clones anónimos creados sobre `git://` se deshabilitarán. Si no puedes clonar un repositorio, comunícate con el administrador de tu sitio.
{% endif %}

### Comprueba que el repositorio realmente exista

Si nada de lo anterior funciona, verifica que el repositorio realmente exista en {% data variables.product.product_location %}.
Si estás intentando subir a un repositorio que no existe, se producirá este error.

## Error: HEAD remoto remite a una referencia que no existe, imposible de controlar

Este error ocurre si la rama por defecto de un repositorio se ha eliminado en {% data variables.product.product_location %}.

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

Para resolver el error, es necesario que seas un administrador del repositorio en {% data variables.product.product_location %}.
Le recomendamos [cambiar la rama predeterminada](/github/administering-a-repository/changing-the-default-branch) del repositorio.

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
