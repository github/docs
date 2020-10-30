---
title: Publicar imágenes de Docker
intro: 'Puedes publicar imágenes de Docker en un registro, tale como Docker Hub o {% data variables.product.prodname_registry %}, como parte de tu flujo de trabajo de integración continua (IC).'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza una compilación de Docker y posteriormente publica las imágenes de Docker en Docker Hub o {% data variables.product.prodname_registry %}. Con un solo flujo de trabajo, puedes publicar imágenes a un solo registro o a varios de ellos.

{% note %}

**Nota:** Si quieres subir otro registro de terceros de Docker, el ejemplo en la sección "[Publicar imágenes en {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" puede servir como plantilla.

{% endnote %}

### Prerrequisitos

Recomendamos que tengas un conocimiento básico de las opciones de configuración de flujo de trabajo y de cómo crear un archivo de flujo de trabajo. Para obtener más información, consulta "[Configurar un flujo de trabajo](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)."

También puede que encuentres útil el tener un entendimiento básico de lo siguiente:

- "[Conceptos básicos para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)"
- "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)"
- "[Autenticar con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)"
- "[Configurar Docker para su uso con {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)"

### Acerca de la configuración de imágenes

Esta guía asume que tienes una definición completa de una imagen de Docker almacenada en un repositorio de {% data variables.product.prodname_dotcom %}. Por ejemplo, tu repositorio debe contener un _Dockerfile_, y cualquier otro archivo que se necesite para realizar una compilación de Docker para crear una imagen.

En esta guía, utilizaremos la acción `build-push-action` de Docker para compilar la imagen de Docker y cargarla a uno o más registros de Docker. Para obtener más información, consulta la sección [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

### Publicar imágenes en Docker Hub

{% data reusables.github-actions.release-trigger-workflow %}

En el siguiente ejemplo de flujo de trabajo, utilizamos la acción `build-push-action` de Docker para compilar la imagen de Docker y, si la compilación es exitosa, cargar la imagen compilada a Docker Hub.

Para hacer una carga en Docker hub, necesitarás tener una cuenta de Docker Hub y haber creado un repositorio ahí mismo. Para obtener más información, consulta la sección "[Share images on Docker Hub](https://docs.docker.com/get-started/part3/)" en la documentación de Docker.

Las opciones de `build-push-action` que se requieren para Docker Hub son:

* `username` y `password`: Este es tu nombre de usuario y contraseña de Docker Hub. Te recomendamos almacenar tu nombre de usuario y contraseña de Docker Hub como secretos cirfrados el repositorio tu {% data variables.product.prodname_dotcom %} para que no se expongan en tu archivo de flujo de trabajo. Para obtener más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
* `repository`: Tu repositorio de Docker hub en el formato `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY`.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Publicar imágenes en {% data variables.product.prodname_registry %}

{% data reusables.github-actions.release-trigger-workflow %}

En el flujo de trabajo de ejemplo que se encuentra a continuación, utilizamos la acción `build-push-action` para compilar la imagen de Docker y, si la compilación es exitosa, cargar la imagen compilada a {% data variables.product.prodname_registry %}.

Las opciones de `build-push-action` requeridas para {% data variables.product.prodname_registry %} son:

* `username`: Puedes utilizar el contexto {% raw %}`${{ github.actor }}`{% endraw %} para utilizar automáticamente el nombre de usuario del usuario que desencadenó la ejecución del flujo de trabajo. Para obtener más información, consulta la sección "[Sintaxis de contexto y expresión para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".
* `password`: Puedes utilizar el secreto generado automáticamente `GITHUB_TOKEN` para la contraseña. Para más información, consulta "[Autenticando con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."
* `registry`: Debe configurarse como `docker.pkg.github.com`.
* `repository`: Debe configurarse en el formato `OWNER/REPOSITORY/IMAGE_NAME`. Por ejemplo, para una imagen nombrada como `octo-image` almacenada en {% data variables.product.prodname_dotcom %} en `http://github.com/octo-org/octo-repo`, la opción de `repository` debe configurarse como `octo-org/octo-repo/octo-image`.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true

```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Publicar imágenes en Docker Hub y en {% data variables.product.prodname_registry %}

En un solo flujo de trabajo, puedes publicar tu imagen de Docker en varios registros utilizando la acción `build-push-action` para cada uno.

El siguiente flujo de trabajo de ejemplo utiliza los pasos de `build-push-action` de las secciones anteriores ("[Publicar imágenes en Docker Hub](#publishing-images-to-docker-hub)" y "[Publicar imágenes en {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") para crear un solo flujo de trabajo que cargue ambos registros.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true
```
{% endraw %}

El flujo de trabajo anterior revisa el repositorio de {% data variables.product.prodname_dotcom %} y utiliza la acción `build-push-action` dos veces para crear y cargar la imagen de Docker a Docker Hub y {% data variables.product.prodname_registry %}. Para ambos pasos, configura la opción `build-push-action` [`tag_with_ref`](https://github.com/marketplace/actions/build-and-push-docker-images#tag_with_ref) para etiquetar automáticamente la imagen de Docker con la referencia de Git para el evento del flujo de trabajo. Este flujo de trabajo se desencadena cuando se publica un lanzamiento de {% data variables.product.prodname_dotcom %}, así que la referencia para ambos registros será la etiqueta de Git para el lanzamiento.
