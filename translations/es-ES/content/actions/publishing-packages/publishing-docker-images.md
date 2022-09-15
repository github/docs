---
title: Publicación de imágenes de Docker
intro: 'Puedes publicar imágenes de Docker en un registro, tale como Docker Hub o {% data variables.product.prodname_registry %}, como parte de tu flujo de trabajo de integración continua (IC).'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
  - /actions/guides/publishing-docker-images
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
ms.openlocfilehash: 01f20527dedeea3685855797993187e7af462de4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410295'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza una compilación de Docker y posteriormente publica las imágenes de Docker en Docker Hub o {% data variables.product.prodname_registry %}. Con un solo flujo de trabajo, puedes publicar imágenes a un solo registro o a varios de ellos.

{% note %}

**Nota**: Si quiere insertar en otro registro de Docker de terceros, el ejemplo de la sección "[Publicar imágenes en {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" puede servir como plantilla.

{% endnote %}

## Requisitos previos

Recomendamos que tengas un conocimiento básico de las opciones de configuración de flujo de trabajo y de cómo crear un archivo de flujo de trabajo. Para más información, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

También puede que encuentres útil el tener un entendimiento básico de lo siguiente:

- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"{% ifversion fpt or ghec %}
- "[Trabajar con {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)"{% else %}
- "[Trabajar con el registro de Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"{% endif %}

## Acerca de la configuración de imágenes

Esta guía asume que tienes una definición completa de una imagen de Docker almacenada en un repositorio de {% data variables.product.prodname_dotcom %}. Por ejemplo, su repositorio debe contener un _Dockerfile_ y cualquier otro archivo que se necesite para realizar una compilación de Docker a fin de crear una imagen.

En esta guía, utilizaremos la acción `build-push-action` de Docker para compilar la imagen de Docker e insertarla en uno o varios registros de Docker. Para más información, vea [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Publicar imágenes en Docker Hub

{% data reusables.actions.release-trigger-workflow %}

En el siguiente ejemplo de flujo de trabajo, utilizamos las acciones `login-action` y `build-push-action` de Docker para compilar la imagen de Docker y, si la compilación se realiza correctamente, insertar la imagen compilada en Docker Hub.

Para hacer una carga en Docker hub, necesitarás tener una cuenta de Docker Hub y haber creado un repositorio ahí mismo. Para obtener más información, vea "[Insertar una imagen de contenedor Docker en Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" en la documentación de Docker.

Las opciones `login-action` necesarias para Docker Hub son las siguientes:
* `username` y `password`: son el nombre de usuario y la contraseña de Docker Hub. Te recomendamos almacenar tu nombre de usuario y contraseña de Docker Hub como un secreto para que no se expongan en tu archivo de flujo de trabajo. Para más información, vea ["Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

La opción `metadata-action` necesaria para Docker Hub es la siguiente:
* `images`: el espacio de nombres y el nombre para la imagen de Docker que está compilando o insertando en Docker Hub.

Las opciones `build-push-action` necesarias para Docker Hub son las siguientes:
* `tags`: la etiqueta de la nueva imagen con el formato `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. Puedes configurar una etiqueta sencilla como se muestra a continuación o especificar etiquetas múltiples en una lista.
* `push`: si se establece en `true`, la imagen se insertará en el registro si se ha compilado correctamente.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: my-docker-hub-namespace/my-docker-hub-repository
      
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

El flujo de trabajo anterior comprueba el repositorio de {% data variables.product.prodname_dotcom %}, utiliza `login-action` para iniciar sesión en el registro y luego utiliza la acción `build-push-action` para lo siguiente: compilar una imagen de Docker basada en el elemento `Dockerfile` del repositorio; insertar la imagen en Docker Hub y aplicar una etiqueta a la imagen.

## Publicar imágenes en {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

{% data reusables.actions.release-trigger-workflow %}

En el flujo de trabajo de ejemplo siguiente, utilizamos las acciones `login-action`{% ifversion fpt or ghec %}, `metadata-action`{% endif %} y `build-push-action` de Docker para compilar la imagen de Docker y, si la compilación se realiza correctamente, insertar la imagen compilada en {% data variables.product.prodname_registry %}.

Las opciones `login-action` necesarias para {% data variables.product.prodname_registry %} son las siguientes:
* `registry`: debe establecerse en {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}.
* `username`: puede utilizar el contexto {% raw %}`${{ github.actor }}`{% endraw %} para utilizar automáticamente el nombre de usuario del usuario que ha desencadenado la ejecución del flujo de trabajo. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts#github-context)".
* `password`: puede usar el secreto `GITHUB_TOKEN` generado automáticamente para la contraseña. Para más información, vea "[Autenticación con GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

{% ifversion fpt or ghec %} La opción `metadata-action` necesaria para {% data variables.product.prodname_registry %} es la siguiente:
* `images`: el espacio de nombres y el nombre de la imagen de Docker que está compilando.
{% endif %}

Las opciones `build-push-action` necesarias para {% data variables.product.prodname_registry %} son las siguientes:{% ifversion fpt or ghec %}
* `context`: define el contexto de compilación como el conjunto de archivos que se ubican en la ruta de acceso especificada.{% endif %}
* `push`: si se establece en `true`, la imagen se insertará en el registro si se ha compilado correctamente.{% ifversion fpt or ghec %}
* `tags` y `labels`: se rellenan mediante la salida de `metadata-action`.{% else %}
* `tags`: debe establecerse con el formato {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION`. 
  
   Por ejemplo, para una imagen denominada `octo-image` almacenada en {% data variables.product.prodname_ghe_server %} en `https://HOSTNAME/octo-org/octo-repo`, la opción `tags` debe establecerse en `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.
  
   Por ejemplo, para una imagen denominada `octo-image` almacenada en {% data variables.product.prodname_dotcom %} en `http://github.com/octo-org/octo-repo`, la opción `tags` debe establecerse en `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}. Puedes configurar una tarjeta sencilla como se muestra a continuación o especificar etiquetas múltiples en una lista.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% data reusables.package_registry.publish-docker-image %}

El flujo de trabajo anterior se activa mediante una subida a la rama "release". Comprueba el repositorio de GitHub y utiliza `login-action` para iniciar sesión en {% data variables.product.prodname_container_registry %}. Luego extrae las etiquetas y marcas de la imagen de Docker. Finalmente, utiliza la acción `build-push-action` para compilar la imagen y publicarla en el {% data variables.product.prodname_container_registry %}.

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.event.release.tag_name }}{% endraw %}
```

El flujo de trabajo anterior comprueba el repositorio {% data variables.product.product_name %}, utiliza `login-action` para iniciar sesión en el registro y, luego, utiliza la acción `build-push-action` para lo siguiente: compilar una imagen de Docker basada en el elemento `Dockerfile` del repositorio; insertar la imagen en el registro de Docker, y aplicar el SHA de confirmación y la versión de lanzamiento como etiquetas de la imagen.
{% endif %}

## Publicar imágenes en Docker Hub y en {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

En un solo flujo de trabajo, puede publicar su imagen de Docker en varios registros mediante las acciones `login-action` y `build-push-action` para cada uno de ellos.

En el flujo de trabajo de ejemplo siguiente se usan los pasos de las secciones anteriores ("[Publicar imágenes en Docker Hub](#publishing-images-to-docker-hub)" y "[Publicar imágenes en {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") para crear un único flujo de trabajo que inserte en ambos registros.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Log in to the {% ifversion fpt or ghec or ghes > 3.4 %}Container{% else %}Docker{% endif %} registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion fpt or ghec %}ghcr.io{% elsif ghae %}docker.YOUR-HOSTNAME.com{% elsif ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: |
            my-docker-hub-namespace/my-docker-hub-repository
            {% ifversion fpt or ghec or ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}/{% raw %}${{ github.repository }}{% endraw %}{% elsif ghae %}{% raw %}docker.YOUR-HOSTNAME.com/${{ github.repository }}/my-image{% endraw %}{% else %}{% raw %}docker.pkg.github.com/${{ github.repository }}/my-image{% endraw %}{% endif %}
      
      - name: Build and push Docker images
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

El flujo de trabajo anterior comprueba el repositorio {% data variables.product.product_name %}, utiliza `login-action` dos veces para iniciar sesión en ambos registros y genera etiquetas con la acción `metadata-action`.
Después, la acción `build-push-action` compila la imagen de Docker y la inserta en Docker Hub y en el {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}registro de Docker{% endif %}.
