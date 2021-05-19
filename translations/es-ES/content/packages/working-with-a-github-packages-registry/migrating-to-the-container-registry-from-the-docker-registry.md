---
title: Migrating to the Container registry from the Docker registry
intro: 'If you''ve used the GitHub Packages Docker registry to store Docker images, you can migrate your images to the new {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  free-pro-team: '*'
---

### Key differences between the {% data variables.product.prodname_container_registry %} and the Docker registry

{% data reusables.package_registry.container-registry-beta %}

The {% data variables.product.prodname_container_registry %} supersedes the existing {% data variables.product.prodname_registry %} Docker registry and is optimized to support some of the unique needs of containers.

With the {% data variables.product.prodname_container_registry %} you can:
- Almacenar imágenes de contenedor dentro de tu organización y cuenta de usuario, en vez de en un repositorio.
- Set granular permissions and visibility independently of repository permissions and visibility.
- Acceder a imágenes de contenedores públicos anónimamente.

|                          | Docker registry                                                                                                                                                                                                                                                                                           | {% data variables.product.prodname_container_registry %}
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ubicaciones de hospedaje | You can host multiple Docker images in one repository.                                                                                                                                                                                                                                                    | Puedes hospedar imagenes de contenedor múltiples en una cuenta de organización o de usuario.                                                                                                                 |
| Permisos                 | Each image inherits the permissions of the repository where the image is hosted. Cualquier persona con permisos de lectura para un repositorio puede instalar un paquete como una dependencia en un proyecto, y cualquier persona con permisos de escritura puede publicar una nueva versión del paquete. | Para cada imagen de contenedor, puedes elegir el nivel de acceso que tienen los demás. Los permisos para acceso a la imagen de contenedor son independientes de aquellos para tu organización y repositorio. |
 Visibility          | {% data reusables.package_registry.public-or-private-packages %} | You can set the visibility of each of your container images. Solo las personas y equipos a las cuales se les haya otorgado acceso dentro de tu organización podrán ver las imágenes de contenedor privadas. Cualquiera puede ver las imágenes de contenedor públicas. | Anonymous access    | N/A | You can access public container images anonymously. Foreign layer support | Doesn't support foreign layers, such as Windows images. | Supports foreign layers, such as Windows images.

### Cambios en la facturación

During the {% data variables.product.prodname_container_registry %} beta, both the new {% data variables.product.prodname_container_registry %} and the existing {% data variables.product.prodname_registry %} Docker registry are free of charge. For more information about the {% data variables.product.prodname_registry %} Docker registry, see "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)."

After the beta, the same billing and storage rates that other {% data variables.product.prodname_registry %} registries use will apply to the {% data variables.product.prodname_container_registry %}. Para obtener más información, consulta la sección "[Acerca de la facturación para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

### Cambios de dominio

El dominio para el {% data variables.product.prodname_container_registry %} es `ghcr.io`.

| Registro                                                               | URL de Ejemplo                                      |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| Registro de Docker para {% data variables.product.prodname_registry %} | `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME` |
| {% data variables.product.prodname_container_registry %}             | `ghcr.io/OWNER/IMAGE_NAME`                          |

### Authenticating to the {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.feature-preview-for-container-registry %}

Necesitarás autenticarte en el {% data variables.product.prodname_container_registry %} con la URL base `ghcr.io`. Te recomendamos crear un token de acceso nuevo para utilizar el {% data variables.product.prodname_container_registry %}.

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

### Migrar la imagen de Docker utilizando el Docker CLI

Para mover las imágenes de Docker que hospedes en el registro de Docker para {% data variables.product.prodname_registry %} debes republicar las imágenes en {% data variables.product.prodname_container_registry %}. Te recomendamos volver a publicar tus imágenes existentes de Docker utilizando la línea de comandos en tu máquina local.

1. Ingresa en el registro de Docker utilizando un PAT temporal con un alcance mínimo de `read:packages`. Este PAT solo se utilizará para ingresar al registro de Docker para extraer imágenes y puede borrarse después.
  {% raw %}
  ```shell
  $ echo $READ_PACKAGES_TOKEN | docker login docker.pkg.github.com -u USERNAME --password-stdin
  ```
  {% endraw %}
2. Extrae la imagen que quieres migrar reemplazando OWNER con el nombre de la cuenta de usuario u organización a la que pertenece el repositorio, REPOSITORY con el nombre del repositorio que contiene tu proyecto, IMAGE_NAME con el nombre del paquete o imagen, y VERSION con la etiqueta para la imagen que quieres instalar. Por ejemplo, `docker pull docker.pkg.github.com/octo-org/octoshift/octoshift:latest` extraerá la última etiqueta de la imagen `octoshift/octoshift` en la organización octo-org.
  ```shell
  $ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```

3. Vuelve a etiquetar la imagen con el dominio nuevo y con un nombre de imagen nuevo. Para obtener más información, consulta "[Etiqueta Docker](https://docs.docker.com/engine/reference/commandline/tag/)" en la documentación de Docker. Utiliza la misma URL que utilizaste en el paso anterior para la SOURCE URL. Reemplaza el TARGET_OWNER con el usuario u organización al cual estás migrando la imagen de contenedor y reemplaza TARGET_IMAGE_NAME con el nombre de imagen para {% data variables.product.prodname_container_registry %} nuevo.
  ```shell
  $ docker tag docker.pkg.github.com/SOURCE_OWNER/SOURCE_REPOSITORY/SOURCE_IMAGE_NAME:VERSION ghcr.io/TARGET_OWNER/TARGET_IMAGE_NAME:VERSION
  ```

4. Ingresa al nuevo {% data variables.product.prodname_container_registry %}. Te recomendamos crear un PAT limitado nuevo con los alcances de `read:packages` y `write:packages`, dado que ya no necesitas el alcance `repo` y tu PAT anterior podría no tener el alcance `write:packages`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  ```
  {% endraw %}
5. Sube tu imagen reetiquetada al {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME:VERSION
  ```

### Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

{% data reusables.package_registry.feature-preview-for-container-registry %}

Si tienes un flujo de trabajo de {% data variables.product.prodname_actions %} que utiliza una imagen de Docker desde el registro de Docker para {% data variables.product.prodname_registry %}, tal vez quieras actualizarlo al {% data variables.product.prodname_container_registry %} para permitir el acceso anónimo para las imágenes de contenedor públicas, permisos de acceso más específicos, y para tener mejor compatibilidad de almacenamiento y ancho de banda para los contenedores.

1. Migra tus imágenes de Docker al nuevo {% data variables.product.prodname_container_registry %} en `ghcr.io`. Para encontrar un ejemplo, consulta la sección "[Migrar una imagen de Docker utilizando el CLI de Docker](#migrating-a-docker-image-using-the-docker-cli)".

2. En tu archivo de flujo de trabajo de {% data variables.product.prodname_actions %}, actualiza la url del paquete de `https://docker.pkg.github.com` a `ghcr.io`.

3. Agrega tu token de acceso personal (PAT) para autenticación en el {% data variables.product.prodname_container_registry %} como un secreto de GitHub Actions. The {% data variables.product.prodname_container_registry %} does not support using `GITHUB_TOKEN` for your PAT so you must use a different custom variable, such as `CR_PAT`. Para obtener más información, consulta "[Crear y almacenar secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

4. En tu archivo de flujo de trabajo de {% data variables.product.prodname_actions %}, actualiza el PAT de autenticación reemplazando tu PAT del registro de Docker ({% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}) con una variable nueva para tu PAT del {% data variables.product.prodname_container_registry %}, tal como {% raw %}`${{ secrets.CR_PAT }}`{% endraw %}.

#### Ejemplo de un flujo de trabajo actualizado

Si parte de tu flujo de trabajo accedió a una imagen de Docker que se hospeda en el registro de Docker de esta forma:

{% raw %}
```yaml
echo ${{ secrets.GITHUB_TOKEN }} | docker login https://docker.pkg.github.com -u $GITHUB_ACTOR --password-stdin
docker pull docker.pkg.github.com/github/octoshift/octoshift:latest
docker build . --tag docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA --cache-from docker.pkg.github.com/github/octoshift/octoshift:latest
docker push docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA
```
{% endraw %}

Entonces necesitarás actualizar tu flujo de trabajo con la URL de {% data variables.product.prodname_container_registry %} y PAT nuevos de esta forma:

{% raw %}
```yaml
# new login with new container registry url and PAT
echo ${{ secrets.CR_PAT }} | docker login ghcr.io -u $GITHUB_ACTOR --password-stdin
# new container registry urls added
docker pull ghcr.io/github/octoshift:latest
docker build . --tag ghcr.io/github/octoshift:$GITHUB_SHA --cache-from ghcr.io/github/octoshift:latest
docker push ghcr.io/github/octoshift:$GITHUB_SHA
```
{% endraw %}
