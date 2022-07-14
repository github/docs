---
title: Publicar imágenes de Docker
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza una compilación de Docker y posteriormente publica las imágenes de Docker en Docker Hub o {% data variables.product.prodname_registry %}. Con un solo flujo de trabajo, puedes publicar imágenes a un solo registro o a varios de ellos.

{% note %}

**Nota:** Si quieres subir otro registro de terceros de Docker, el ejemplo en la sección "[Publicar imágenes en {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" puede servir como plantilla.

{% endnote %}

## Prerrequisitos

Te recomendamos que tengas una comprensión básica de las opciones de configuración de flujo de trabajo y cómo crear un archivo de flujo de trabajo. Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

También puede que encuentres útil el tener un entendimiento básico de lo siguiente:

- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"{% ifversion fpt or ghec %}
- "[Trabajar con el {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)"{% else %}
- "[Trabajar con el registro de Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"{% endif %}

## Acerca de la configuración de imágenes

Esta guía asume que tienes una definición completa de una imagen de Docker almacenada en un repositorio de {% data variables.product.prodname_dotcom %}. Por ejemplo, tu repositorio debe contener un _Dockerfile_, y cualquier otro archivo que se necesite para realizar una compilación de Docker para crear una imagen.

En esta guía, utilizaremos la acción `build-push-action` de Docker para compilar la imagen de Docker y cargarla a uno o más registros de Docker. Para obtener más información, consulta la sección [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Publicar imágenes en Docker Hub

{% data reusables.actions.release-trigger-workflow %}

En el flujo de trabajo de ejemplo a continuación, utilizamos las acciones `login-action` y `build-push-action` para crear la imagen de Docker y, si la compilación es exitosa, subimos la imagen compilada a Docker Hub.

Para hacer una carga en Docker hub, necesitarás tener una cuenta de Docker Hub y haber creado un repositorio ahí mismo. Para obtener más información, consulta la sección "[Publicar una imagen de contenedor de Docker en Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" en la documentación de Docker.

Las opciones de `login-action` que se requieren para Docker hub son:
* `username` y `password`: Este es tu nombre de usuario y contraseña de Docker Hub. Te recomendamos almacenar tu nombre de usuario y contraseña de Docker Hub como un secreto para que no se expongan en tu archivo de flujo de trabajo. Para más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

La opción `metadata-action` que se requiere para Docker hub es:
* `images`: El designador de nombre para la imagen de Docker que estás compilando/subiendo a Docker Hub.

Las opciones de `build-push-action` que se requieren para Docker Hub son:
* `tags`: La etiqueta de tu nueva imagen en el formato `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. Puedes configurar una etiqueta sencilla como se muestra a continuación o especificar etiquetas múltiples en una lista.
* `push`: Si se configura como `true`, se subirá la imagen al registro si se compila con éxito.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

El flujo de trabajo anterior verifica el repositorio de {% data variables.product.prodname_dotcom %}, utiliza la `login-action` para iniciar sesión en el registro y luego utiliza la acción `build-push-action` para: crear una imagen de Docker con base en el `Dockerfile` de tu repositorio; subir la imagen a Docker Hub y aplicar una etiqueta a la imagen.

## Publicar imágenes en {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

{% data reusables.actions.release-trigger-workflow %}

En el siguiente ejemplo de flujo de trabajo, utilizamos las acciones `login-action` {% ifversion fpt or ghec %}, `metadata-action`,{% endif %} y `build-push-action` de Docker para crear la imagen de Docker y, si la compilación tiene éxito, sube la imagen cargada al {% data variables.product.prodname_registry %}.

Las opciones de `login-action` que se requieren para el {% data variables.product.prodname_registry %} son:
* `registry`: Debe configurarse en {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}.
* `username`: Puedes utilizar el contexto {% raw %}`${{ github.actor }}`{% endraw %} para utilizar automáticamente el nombre de usuario del usuario que desencadenó la ejecución del flujo de trabajo. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts#github-context)".
* `password`: Puedes utilizar el secreto generado automáticamente `GITHUB_TOKEN` para la contraseña. Para más información, consulta "[Autenticando con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."

{% ifversion fpt or ghec %}
La opción de `metadata-action` que se requiere para el {% data variables.product.prodname_registry %} es:
* `images`: El designador de nombre de la imagen de Docker que estás compilando.
{% endif %}

Las opciones de `build-push-action` requeridas para el {% data variables.product.prodname_registry %} son:{% ifversion fpt or ghec %}
* `context`: Define el contexto de la compilación como el conjunto de archivos que se ubican en la ruta especificada.{% endif %}
* `push`: Si se configura en `true`, la imagen se cargará al registro si se compila con éxito.{% ifversion fpt or ghec %}
* `tags` y `labels`: Estos se llenan con la salida de la `metadata-action`.{% else %}
* `tags`: Debe configurarse en el formato {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.

   Por ejemplo, para una imagen que se llama `octo-image` y se almacena en {% data variables.product.prodname_ghe_server %} en `https://HOSTNAME/octo-org/octo-repo`, la opción de `tags` debe configurarse como `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.

   Por ejemplo, para el caso de una imagen que se llame `octo-image` y esté almacenada en {% data variables.product.prodname_dotcom %} en `http://github.com/octo-org/octo-repo`, la opción `tags` debe configurarse como `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}. Puedes configurar una tarjeta sencilla como se muestra a continuación o especificar etiquetas múltiples en una lista.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %}
{% data reusables.package_registry.publish-docker-image %}

El flujo de trabajo anterior se activa mediante una subida a la rama "release". Verifica el repositorio de GitHub y utiliza la `login-action` para ingresar en el {% data variables.product.prodname_container_registry %}. Luego extrae las etiquetas y marcas de la imagen de Docker. Finalmente, utiliza la acción `build-push-action` para crear la imagen y publicarla en el {% data variables.product.prodname_container_registry %}.

{% else %}
```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

El flujo de trabajo anterior verifica el repositorio de {% data variables.product.product_name %}, utiliza la `login-action` para iniciar sesión en el registro y luego utiliza la acción `build-push-action` para: compilar una imagen de Docker con base en el `Dockerfile` de tu repositorio; subir la imagen al registro de Docker y aplicar el SHA de confirmación y versión de lanzamiento como etiquetas de imagen.
{% endif %}

## Publicar imágenes en Docker Hub y en {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

En un flujo de trabajo sencillo, puedes publicar tu imagen de Docker en registros múltiples si utilizas las acciones `login-action` y `build-push-action` para cada registro.

El siguiente flujo de trabajo de ejemplo utiliza los pasos de las secciones anteriores ("[Publicar imágenes en Docker Hub](#publishing-images-to-docker-hub)" y "[Publicar imágenes en el {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") para crear un solo flujo de trabajo que cargue ambos registros.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

El flujo de trabajo anterior verifica el repositorio de {% data variables.product.product_name %}, utiliza `login-action` dos veces para iniciar sesión en ambos registros y genera etiquetas y marcadores con la acción `metadata-action`. Entonces, la acción `build-push-action` crea y sube la imagen de Docker a Docker Hub y al {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}registro de Docker{% endif %}.
