---
title: Errores de clonación de HTTPS
intro: 'Existen algunos errores comunes cuando se utiliza HTTPS con Git. Estos errores suelen indicar que tienes una versión antigua de Git o que no tienes acceso al repositorio.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403/
  - /articles/error-the-requested-url-returned-error-401/
  - /articles/error-did-you-run-git-update-server-info-on-the-server/
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs/
  - /articles/https-cloning-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

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
