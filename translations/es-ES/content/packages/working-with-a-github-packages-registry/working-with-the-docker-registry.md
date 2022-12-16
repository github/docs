---
title: Trabajar con el registro de Docker
intro: '{% ifversion fpt or ghec %}El registro de Docker ahora se reemplazó con el {% data variables.product.prodname_container_registry %}.{% else %} Puedes subir y extraer tus imágenes de Docker utilizando el Registro de Docker del {% data variables.product.prodname_registry %}.{% endif %}'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages
  - /packages/guides/container-guides-for-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/guides/configuring-docker-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Docker registry
ms.openlocfilehash: f5d37e74f93535fd48f3400ef0b504825aadc657
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888456'
---
<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

El registro de Docker de {% data variables.product.prodname_dotcom %} (que utilizó el espacio de nombres `docker.pkg.github.com`) lo ha reemplazado {% data variables.product.prodname_container_registry %} (que utiliza el espacio de nombres `https://ghcr.io`). El {% data variables.product.prodname_container_registry %} ofrece beneficios tales como permisos granulares y optimización de almacenamiento para las imágenes de Docker.

Las imágenes de Docker que se almacenaron previamente en el registro de Docker se están migrando automáticamente al {% data variables.product.prodname_container_registry %}. Para obtener más información, consulta "[Migración a {% data variables.product.prodname_container_registry %} desde el registro de Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)" y "[Trabajo con {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Acerca de la compatibilidad de Docker

Cuando instalas o publicas una imagen de Docker, el registro de Docker no es compatible actualmente con capas ajenas, tales como imágenes de Windows.

## Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Puedes autenticarte en {% data variables.product.prodname_registry %} con Docker utilizando el comando de inicio de sesión `docker`.

Para mantener tus credenciales seguras, te recomendamos que guardes tu token de acceso personal en un archivo local de tu equipo y utilices la marca `--password-stdin` de Docker, que lee tu token desde un archivo local.

{% ifversion fpt or ghec %} {% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %} {% endif %}

{% ifversion ghes or ghae %} {% ifversion ghes %} Si la instancia tiene habilitado el aislamiento de subdominio: {% endif %} {% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login docker.HOSTNAME -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% ifversion ghes %} Si la instancia tiene deshabilitado el aislamiento de subdominio:

{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login <em>HOSTNAME</em> -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% endif %}

{% endif %}

Para utilizar este ejemplo de comando de inicio de sesión, reemplaza `USERNAME` por tu nombre de usuario de {% data variables.product.product_name %}{% ifversion ghes or ghae %}, `HOSTNAME` por la URL de {% data variables.product.product_location %},{% endif %} y `~/TOKEN.txt` por la ruta de archivo de tu token de acceso personal para {% data variables.product.product_name %}.

Para obtener más información, consulta "[Inicio de sesión de Docker](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)".

## Publicar una imagen

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Nota**: Los nombres de imagen solo deben usar letras minúsculas.

{% endnote %}

{% data variables.product.prodname_registry %} admite varias imágenes Docker de primer nivel por repositorio. Un repositorio puede tener cualquier cantidad de etiquetas de imagen. Puedes experimentar un servicio de menor calidad al publicar o instalar imágenes de Docker de más de 10 GB, las capas tienen un límite de 5 GB cada una. Para obtener más información, consulta "[Etiqueta de Docker](https://docs.docker.com/engine/reference/commandline/tag/)" en la documentación de Docker.

{% data reusables.package_registry.viewing-packages %}

1. Determina el nombre y la id. de la imagen Docker mediante `docker images`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. Utilizando la id. de la imagen de Docker, etiqueta a la imagen de docker, reemplazando *OWNER* por el nombre de la cuenta de usuario u organización a la que pertenece el repositorio, *REPOSITORY* por el nombre del repositorio que contiene tu proyecto, *IMAGE_NAME* por el nombre del paquete o imagen,{% ifversion ghes or ghae %} *HOSTNAME* por el nombre de host de {% data variables.product.product_location %},{% endif %} y *VERSION* por la versión del paquete en tiempo de compilación.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %} Si la instancia tiene habilitado el aislamiento de subdominio: {% endif %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %}Si en la instancia se ha deshabilitado el aislamiento de subdominios:
  ```shell
  $ docker tag <em>IMAGE_ID</em> <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %}
3. Si aún no has compilado una imagen de Docker para el paquete, compila la imagen, reemplazando *OWNER* por el nombre de la cuenta de organización o usuario a la que pertenece el repositorio, *REPOSITORY* por el nombre del repositorio que contiene tu proyecto, *IMAGE_NAME* por el nombre del paquete o imagen, *VERSION* por la versión de paquete en tiempo de compilación,{% ifversion ghes or ghae %} *HOSTNAME* por el nombre de host de {% data variables.product.product_location %},{% endif %} y *PATH* en la imagen en caso de que no esté en el directorio de trabajo actual.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %} {% ifversion ghes %} Si la instancia tiene habilitado el aislamiento de subdominio: {% endif %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% ifversion ghes %}Si en la instancia se ha deshabilitado el aislamiento de subdominios:
  ```shell
  $ docker build -t <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %} {% endif %}
4. Publicar la imagen para {% data variables.product.prodname_registry %}.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %} Si la instancia tiene habilitado el aislamiento de subdominio: {% endif %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %}Si en la instancia se ha deshabilitado el aislamiento de subdominios:
  ```shell
  $ docker push <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %} {% note %}

  **Nota**: Debes insertar la imagen con `IMAGE_NAME:VERSION` en lugar de con `IMAGE_NAME:SHA`.

  {% endnote %}

### Ejemplo de publicación de una imagen Docker

{% ifversion ghes %} En estos ejemplos se da por hecho que la instancia tiene habilitado el aislamiento de subdominio.
{% endif %}

Puedes publicar la versión 1.0 de la imagen `monalisa` en el repositorio `octocat/octo-app` mediante un id. de imagen.

{% ifversion fpt or ghec %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```

{% endif %}

Puedes publicar una nueva imagen de Docker por primera vez y denominarla `monalisa`.

{% ifversion fpt or ghec %}
```shell
# Build the image with docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}
```shell
# Build the image with docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```
{% endif %}

## Descarga de una imagen

{% data reusables.package_registry.docker_registry_deprecation_status %}

Puedes utilizar el comando `docker pull` para instalar una imagen de Docker desde {% data variables.product.prodname_registry %}, reemplazando *OWNER* por el nombre de la cuenta de usuario u organización a la que pertenece el repositorio, *REPOSITORY* por el nombre de repositorio que contiene tu proyecto, *IMAGE_NAME* por el nombre del paquete o imagen,{% ifversion ghes or ghae %} *HOSTNAME* por el nombre del host de {% data variables.product.product_location %}, {% endif %} y *TAG_NAME* por la etiqueta de la imagen que quieres instalar.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %} Si en la instancia se ha habilitado el aislamiento de subdominios: {% endif %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% ifversion ghes %}Si en la instancia se ha deshabilitado el aislamiento de subdominios:
```shell
$ docker pull <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %} {% endif %}

{% note %}

**Nota**: Debes extraer la imagen con `IMAGE_NAME:VERSION` en lugar de con `IMAGE_NAME:SHA`.

{% endnote %}

## Información adicional

- "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)"

{% endif %}  <!-- End of main versioning block -->
