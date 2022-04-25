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
---

## Errores de clonación de HTTPS

Existen algunos errores comunes cuando se utiliza HTTPS con Git. Estos errores suelen indicar que tienes una versión antigua de Git o que no tienes acceso al repositorio.

Aquí aparece un ejemplo de un error de HTTPS que puedes recibir:

```shell
> error: La URL solicitada generó el error: 401 al intentar acceder a
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: la solicitud de HTTP falló
```

```shell
> Error: La URL solicitada generó el error: 403 al intentar acceder a
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: la solicitud de HTTP falló
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs no encontrado: ¿ejecutaste git
> update-server-info en el servidor?
```

### Comprueba tu versión de Git

No hay una versión mínima de Git que sea necesaria para interactuar con {% data variables.product.product_name %}, pero hemos descubierto que la versión 1.7.10 es una versión estable y cómoda que está disponible en muchas plataformas. Siempre puedes [descargar la última versión en el sitio web de Git](https://git-scm.com/downloads).

### Asegúrate de que el remoto sea correcto

El repositorio que estás tratando de extraer debe existir en {% data variables.product.product_location %}, y la URL distingue entre mayúsculas y minúsculas.

Puedes encontrar la URL del repositorio local abriendo la línea de comando y escribiendo `git remote -v`:

```shell
$ git remote -v
# Visualiza los remotos existentes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Cambia la URL del remoto 'origen'

$ git remote -v
# Verifica la nueva URL remota
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Como alternativa, puedes cambiar la URL a través de nuestra aplicación [{% data variables.product.prodname_desktop %}](https://desktop.github.com/).

### Proporciona un token de acceso

Para acceder a {% data variables.product.prodname_dotcom %}, debes autenticarte con un token de acceso personal en vez de con tu contraseña. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

{% data reusables.command_line.provide-an-access-token %}

### Comprueba tus permisos

Cuando se te solicite un nombre de usuario y contraseña, asegúrate de usar una cuenta que tenga acceso al repositorio.

{% tip %}

**Tip**: Si no quieres ingresar tu nombre de usuario y contraseña cada vez que interactúes con el repositorio remoto, puedes activar el [almacenamiento en caché de las contraseñas](/github/getting-started-with-github/caching-your-github-credentials-in-git). Si ya estás utilizando el almacenamiento de credenciales en caché, por favor, asegúrate de que tu computadora tenga las credenciales correctas almacenadas en caché. Las credenciales erróneas o desactualizadas causarán que falle la autenticación.

{% endtip %}

### Usar SSH en su lugar

Si ya has configurado claves SSH, puedes usar el clon SSH en lugar de HTTPS.  Para obtener más información, consulta la sección "[Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)".

## Error: Repositorio no encontrado

{% ifversion fpt or ghae or ghec %}Si ves este error al clonar un repositorio, significa que éste no existe o que no tienes permiso para acceder a él.{% else %}Si ves este error cuando clonas un repositorio, significa que éste no existe, no tienes permiso para acceder a él, o {% data variables.product.product_location %} se encuentra en modo privado.{% endif %} Hay algunas cuantas formas de solucionar este error, dependiendo de cuál sea su causa.

### Comprueba que no haya errores tipográficos

Los errores tipográficos suceden, y los nombres de los repositorios distinguen mayúsculas de minúsculas.  Si intentas clonar `git@{% data variables.command_line.codeblock %}:user/repo.git`, pero el repositorio se llama en realidad `User/Repo` recibirás este error.

Para evitar este error, cuando clonas, copia y pega siempre la URL del clon desde la página del repositorio. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".

Para actualizar el remoto en un repositorio existente, consulta la sección "[Administrar los repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)".

### Comprobar tus permisos

Si estás tratando de clonar un repositorio privado pero no tienes permiso para ver el repositorio, recibirás este error.

Verifica si tienes acceso al repositorio de alguna de las siguientes maneras:

* Como propietario del repositorio
* Como [colaborador](/articles/inviting-collaborators-to-a-personal-repository) del repositorio
* Como [miembro de un equipo](/articles/adding-organization-members-to-a-team) que tiene acceso al repositorio (si el repositorio pertenece a una organización)

### Comprueba tu acceso SSH

En muy raros casos, es posible que no tengas el acceso SSH correcto al repositorio.

Debes asegurarte de que la llave SSH que estás utilizando esté adjunta a tu cuenta personal en {% data variables.product.product_name %}. Para comprobarlo, escribe lo siguiente en la línea de comando:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Si el repositorio pertenece a una organización y estás utilizando una llave SSH generada por una OAuth App, puede que algún dueño de la organización haya restringido el acceso OAuth App. Para obtener más información, consulta la sección "<a href="/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions" class="dotcom-only">Acerca de las restricciones de acceso a las OAuth Apps</a>".

Para obtener más información, consulta "[Agregar una nueva clave SSH a tu cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)".

{% ifversion ghes %}
### Comprueba si tu instancia se encuentra en el modo privado

Si tu administrador del sitio ha habilitado el modo privado en tu instancia de GitHub Enterprise, los clones anónimos creados sobre `git://` se inhabilitarán. Si no puedes clonar un repositorio, comunícate con el administrador de tu sitio.
{% endif %}

### Comprueba que el repositorio realmente exista

Si nada de lo anterior funciona, verifica que el repositorio realmente exista en {% data variables.product.product_location %}. Si estás intentando subir a un repositorio que no existe, se producirá este error.

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
