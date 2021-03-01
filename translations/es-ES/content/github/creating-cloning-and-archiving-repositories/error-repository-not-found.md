---
title: 'Error: Repositorio no encontrado'
intro: '{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}Si ves este error al clonar un repositorio, significa que éste no existe o que no tienes permiso para acceder a él.{% else %}Si ves este error cuando clonas un repositorio, significa que éste no existe, no tienes permiso para acceder a él, o {% data variables.product.product_location %} se encuentra en modo privado.{% endif %} Hay algunas cuantas formas de solucionar este error, dependiendo de cuál sea su causa.'
redirect_from:
  - /articles/error-repository-not-found
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Comprueba que no haya errores tipográficos

Los errores tipográficos suceden, y los nombres de los repositorios distinguen mayúsculas de minúsculas.  Si intentas clonar `git@{% data variables.command_line.codeblock %}:user/repo.git`, pero el repositorio se llama en realidad `User/Repo` recibirás este error.

Para evitar este error, cuando clonas, copia y pega siempre la URL del clon desde la página del repositorio. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".

Para actualizar el remoto en un repositorio existente, consulta "[Cambiar la URL de un remoto](/articles/changing-a-remote-s-url)".

### Comprobar tus permisos

Si estás tratando de clonar un repositorio privado pero no tienes permiso para ver el repositorio, recibirás este error.

Verifica si tienes acceso al repositorio de alguna de las siguientes maneras:

* Como propietario del repositorio
* Como [colaborador](/articles/inviting-collaborators-to-a-personal-repository) del repositorio
* Como [miembro de un equipo](/articles/adding-organization-members-to-a-team) que tiene acceso al repositorio (si el repositorio pertenece a una organización)

### Comprueba tu acceso SSH

En muy raros casos, es posible que no tengas el acceso SSH correcto al repositorio.

Debes asegurarte de que la clave SSH que estás usando se encuentre conectada con tu usuario de {% data variables.product.product_name %}. Para comprobarlo, escribe lo siguiente en la línea de comando:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Si el repositorio pertenece a una organización y estás utilizando una llave SSH generada por una OAuth App, puede que algún dueño de la organización haya restringido el acceso OAuth App. Para obtener más información, consulta la sección "<a href="/github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions" class="dotcom-only">Acerca de las restricciones al acceso OAuth App</a>".

Para obtener más información, consulta "[Agregar una nueva clave SSH a tu cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)".

{% if enterpriseServerVersions contains currentVersion %}
### Comprueba si tu instancia se encuentra en el modo privado

Si tu administrador del sitio ha habilitado el modo privado en tu instancia de GitHub Enterprise, los clones anónimos creados sobre `git://` se inhabilitarán. Si no puedes clonar un repositorio, comunícate con el administrador de tu sitio.
{% endif %}

### Comprueba que el repositorio realmente exista

Si nada de lo anterior funciona, verifica que el repositorio realmente exista en {% data variables.product.product_location %}. Si estás intentando subir a un repositorio que no existe, se producirá este error.
