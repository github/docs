---
title: Soporte de Dockerfile para GitHub Actions
shortTitle: Dockerfile support
intro: 'Cuando creas un `Dockerfile` para una acción de un contenedor de Docker, debes ser consciente de cómo interactúan algunas instrucciones de Docker con GitHub Actions y con el archivo de metadatos de la acción.'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
ms.openlocfilehash: 6e061e479f4988398cbdc92114e387a3055734af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091875'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de las instrucciones de Dockerfile

Un elemento `Dockerfile` incluye instrucciones y argumentos que definen el contenido y comportamiento inicial de un contenedor Docker. Para obtener más información sobre las instrucciones compatibles con Docker, vea "[Referencia de Dockerfile](https://docs.docker.com/engine/reference/builder/)" en la documentación de Docker.

## Instrucciones e invalidaciones de Dockerfile

Algunas instrucciones de Docker interactúan con GitHub Actions, y un archivo de metadatos de la acción puede invalidar algunas instrucciones de Docker. Asegúrate de que estás familiarizado con la manera en que tu Dockerfile interactúa con {% data variables.product.prodname_actions %} para prevenir cualquier comportamiento inesperado.

### USER

Las acciones de Docker deben ejecutarse mediante el usuario predeterminado de Docker (root). No use la instrucción `USER` en `Dockerfile`, porque no podrá acceder a `GITHUB_WORKSPACE`. Para obtener más información, vea "[Uso de variables de entorno](/actions/configuring-and-managing-workflows/using-environment-variables)" y [referencia USER](https://docs.docker.com/engine/reference/builder/#user) en la documentación de Docker.

### FROM

La primera instrucción de `Dockerfile` debe ser `FROM`, que selecciona una imagen base de Docker. Para obtener más información, vea la [referencia FROM](https://docs.docker.com/engine/reference/builder/#from) en la documentación de Docker.

Estos son algunos procedimientos recomendados al establecer el argumento `FROM`:

- Se recomienda utilizar imágenes oficiales de Docker. Por ejemplo, `python` o `ruby`.
- Utiliza una etiqueta de versión si es que existe, preferentemente con una versión mayor. Por ejemplo, use `node:10` en lugar de `node:latest`.
- Se recomienda usar imágenes de Docker basadas en el sistema operativo [Debian](https://www.debian.org/).

### WORKDIR

{% data variables.product.product_name %} establece la ruta de acceso del directorio de trabajo en la variable de entorno `GITHUB_WORKSPACE`. Se recomienda no usar la instrucción `WORKDIR` en `Dockerfile`. Antes de que se ejecute la acción, {% data variables.product.product_name %} montará el directorio `GITHUB_WORKSPACE` sobre todo lo que estuviera en esa ubicación en la imagen de Docker y se establecerá `GITHUB_WORKSPACE` como directorio de trabajo. Para obtener más información, vea "[Uso de variables de entorno](/actions/configuring-and-managing-workflows/using-environment-variables)" y [referencia WORKDIR](https://docs.docker.com/engine/reference/builder/#workdir) en la documentación de Docker.

### ENTRYPOINT

Si define `entrypoint` en el archivo de metadatos de una acción, invalidará el elemento `ENTRYPOINT` definido en `Dockerfile`. Para más información, vea "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)".

La instrucción `ENTRYPOINT` de Docker tiene un formato _shell_ y otro _exec_. En la documentación `ENTRYPOINT` de Docker se recomienda usar el formato _exec_ de la instrucción `ENTRYPOINT`. Para obtener más información sobre los formatos _exec_ y _shell_, vea la [referencia ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) en la documentación de Docker.

No debe usar `WORKDIR` para especificar el entrypoint en el Dockerfile. En vez de esto, deberías utilizar una ruta absoluta. Para obtener más información, vea [WORKDIR](#workdir).

Si configura el contenedor para usar el formato _exec_ de la instrucción `ENTRYPOINT`, el elemento `args` configurado en el archivo de metadatos de la acción no se ejecutará en un shell de comandos. Si el elemento `args` de la acción contiene una variable de entorno, esta no se sustituirá. Por ejemplo, el uso del siguiente formato _exec_ no imprimirá el valor almacenado en `$GITHUB_SHA`, sino que en su lugar imprimirá `"$GITHUB_SHA"`.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 Si quiere la sustitución de variables, puede utilizar el formato _shell_ o ejecutar un shell directamente. Por ejemplo, con el siguiente formato _exec_, puede ejecutar un shell para imprimir el valor almacenado en la variable de entorno `GITHUB_SHA`.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 Para proporcionar `args` definidos en el archivo de metadatos de la acción a un contenedor de Docker que use el formato _exec_ en `ENTRYPOINT`, se recomienda crear un script de shell denominado `entrypoint.sh` que llame desde la instrucción `ENTRYPOINT`:

#### *Dockerfile* de ejemplo

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

#### Archivo *entrypoint.sh* de ejemplo

Con el Dockerfile de ejemplo anterior, {% data variables.product.product_name %} enviará el elemento `args` configurado en el archivo de metadatos de la acción como argumentos a `entrypoint.sh`. Agregue el elemento `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) en la parte superior del archivo `entrypoint.sh` para usar explícitamente el shell compatible con [POSIX](https://en.wikipedia.org/wiki/POSIX) del sistema.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

Tu código debe ser ejecutable. Asegúrese de que el archivo `entrypoint.sh` tiene permisos `execute` antes de usarlo en un flujo de trabajo. Puedes modificar los permisos de tu terminal si utilizas este comando:
  ``` sh
  chmod +x entrypoint.sh
  ```

Cuando un script de shell `ENTRYPOINT` no sea ejecutable, recibirá un error similar al siguiente:

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

### CMD

Si define `args` en el archivo de metadatos de la acción, `args` invalidará la instrucción `CMD` especificada en `Dockerfile`. Para más información, vea "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)".

Si usa `CMD` en `Dockerfile`, siga estas instrucciones:

{% data reusables.actions.dockerfile-guidelines %}

## Capacidades de Linux compatibles

{% data variables.product.prodname_actions %} es compatible con las capacidades predeterminadas de Linux que acepta Docker. Estas capacidades no se pueden añadir ni eliminar. Para obtener más información acerca de las capacidades predeterminadas de Linux compatibles con Docker, vea "[Capacidades de Linux y privilegio en tiempo de ejecución](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)" en la documentación de Docker. Para obtener más información sobre las capacidades de Linux, vea "[Información general sobre las capacidades de Linux](http://man7.org/linux/man-pages/man7/capabilities.7.html)" en las páginas man de Linux.
