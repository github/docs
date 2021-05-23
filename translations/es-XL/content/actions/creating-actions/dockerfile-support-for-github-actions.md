---
title: Soporte de Dockerfile para GitHub Actions
shortTitle: Docker
intro: 'Cuando creas un "Dockerfile" para una acción de un contenedor de Docker, debes estar consciente de cómo interactúan algunas instrucciones de Docker con GitHub Actions y con el archivo de metadatos de la acción.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: reference
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de las instrucciones de Dockerfile

Un `Dockerfile` contiene instrucciones y argumentos que definen el contenido y comportamiento inicial de un contenedor de Docker. Para obtener más información acerca de las instrucciones compatibles con Docker, consulta la sección "[Dockerfile reference](https://docs.docker.com/engine/reference/builder/)" en la documentación de Docker.

### Instrucciones e invalidaciones de Dockerfile

Algunas instrucciones de Docker interactúan con GitHub Actions, y un archivo de metadatos de la acción puede invalidar algunas instrucciones de Docker. Asegúrate de que estás familiarizado con la manera en que tu Dockerfile interactúa con {% data variables.product.prodname_actions %} para prevenir cualquier comportamiento inesperado.

#### USER

Las acciones de Docker deben ejecutarse mediante el usuario predeterminado de Docker (root). No utilices la instrucción `USER` en tu `Dockerfile`, ya que no podrás acceder a `GITHUB_WORKSPACE`. Para obtener más información, consulta la sección "[Utilizar variables del ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" y [USER reference](https://docs.docker.com/engine/reference/builder/#user) en la documentación de Docker.

#### FROM

La primera instrucción en el `Dockerfile` debe ser `FROM`, la cual selecciona una imagen base de Docker. Para obtener más información, consulta la sección "[FROM reference](https://docs.docker.com/engine/reference/builder/#from) en la documentación de Docker.

Estas son algunas de las mejores prácticas para configurar el argumento `FROM`:

- Se recomienda utilizar imágenes oficiales de Docker. Por ejemplo, `python` o `ruby`.
- Utiliza una etiqueta de versión si es que existe, preferentemente con una versión mayor. Por ejemplo, utiliza `node:10` en vez de `node:latest`.
- Se recomienda utilizar imágenes de Docker que se basen en el sistema operativo [Debian](https://www.debian.org/).

#### WORKDIR

{% data variables.product.product_name %} configura la ruta del directorio de trabajo en la variable de ambiente `GITHUB_WORKSPACE`. No se recomienda utilizar la instrucción `WORKDIR` en tu `Dockerfile`. Antes de que se ejecute la acción, {% data variables.product.product_name %} montará el directorio `GITHUB_WORKSPACE`sobre cualquiera que fuera la ubicación en la imagen de Docker y configurará a `GITHUB_WORKSPACE` como el directorio de trabajo. Para obtener más información, consulta la sección "[Utilizar variables de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" y [WORKDIR reference](https://docs.docker.com/engine/reference/builder/#workdir) en la documentación de Docker.

#### ENTRYPOINT

Si defines el `entrypoint` en un archivo de metadatos de una acción, este invalidará el `ENTRYPOINT` definido en el `Dockerfile`. Para obtener más información, consulta la sección "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)".

La instrucción `ENTRYPOINT` de Docker tiene una forma de _shell_ y una de _exec_. La documentación de `ENTRYPOINT` de Docker recomienda utilizar la forma de _exec_ de la instrucción `ENTRYPOINT`. Para obtener más información acerca de las formas _exec_ y _shell_, consulta la sección [ENTRYPOINT reference](https://docs.docker.com/engine/reference/builder/#entrypoint) en la documentación de Docker.

Si configuras tu contenedor para que utilice la forma _exec_ de la instrucción `ENTRYPOINT`, entonces el `args` configurado en el archivo de metadatos de la acción no se ejecutará en un shell de comandos. Si el `args` de la accion contiene una variable de ambiente, ésta no se sustituirá. Por ejemplo, utilizar el siguiente formato _exec_ no imprimirá los valores almacenados en `$GITHUB_SHA`, si no que imprimirá `"$GITHUB_SHA"`.

```
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 Si quieres la sustitución de variables, entonces puedes utilizar la forma _shell_ o ejecutar el shell directamente. Por ejemplo, al utilizar el siguiente formato _exec_ puedes ejecutar un shell para imprimir el valor almacenado en la variable de ambiente `GITHUB_SHA`.

```
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 Para proporcionar el `args` que se definió en el archivo de metadatos de la acción en un contenedor de Docker que utiliza la forma _exec_ en el `ENTRYPOINT`, recomendamos crear un script de shell llamado `entrypoint.sh` al que puedas llamar desde la instrucción `ENTRYPOINT`:

##### *Dockerfile* de ejemplo
``` 
# Container image that runs your code
FROM debian:stretch-20210408-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up 
ENTRYPOINT ["/entrypoint.sh"]
```

##### Archivo *entrypoint.sh* de ejemplo

Al utilizar el Dockerfile de ejemplo que se muestra anteriormente, {% data variables.product.product_name %} enviará el `args` configurado en el archivo de metadatos de la acción como un argumento de `entrypoint.sh`. Agrega el `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) hasta arriba del archivo `entrypoint.sh` para utilizar explicitamente el shell compilante [POSIX](https://en.wikipedia.org/wiki/POSIX) del sistema.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually 
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

Tu código debe ser ejecutable. Asegúrate que el archivo `entrypoint.sh` tiene permisos de `execute` antes de utilizarlo en un flujo de trabajo. Puedes modificar los permisos de tu terminal si utilizas este comando:
  ``` sh
  chmod +x entrypoint.sh    
  ```

Cuando un script de shell de `ENTRYPOINT` no es ejecutable, recibirás un error similar al siguiente:

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

#### CMD

Si defines el `args` en el archivo de metadatos de la acción, éste invalidará la instrucción `CMD` especificada en el `Dockerfile`. Para obtener más información, consulta la sección "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)".

Si utilizas `CMD` en tu `Dockerfile`, sigue estos lineamientos:

{% data reusables.github-actions.dockerfile-guidelines %}

### Capacidades de Linux compatibles

{% data variables.product.prodname_actions %} es compatible con las capacidades predeterminadas de Linux que acepta Docker. Estas capacidades no se pueden añadir ni eliminar. Para obtener más información acerca de las capacidades predeterminadas de Linux con las cuales es compatible Docker, consulta "[Runtime priovilege and Linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)" en la documentación de Docker. Para conocer más acerca de las capacidades de Linux, consulta "[Overview of Linux capabilities](http://man7.org/linux/man-pages/man7/capabilities.7.html) en las páginas man de Linux.
