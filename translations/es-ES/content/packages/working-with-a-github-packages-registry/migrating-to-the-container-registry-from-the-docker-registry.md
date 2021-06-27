---
title: Migrarse al registro del contenedor desde el registro de Docker
intro: 'Si utilizaste el registro de Docker de los Paquetes de GitHub para almacenar imágenes de Docker, puedes migrar tus imágenes al {% data variables.product.prodname_container_registry %} nuevo.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  free-pro-team: '*'
---

### Diferencias clave entre el {% data variables.product.prodname_container_registry %} y el registro de Docker

{% data reusables.package_registry.container-registry-beta %}

El {% data variables.product.prodname_container_registry %} sustituye el registro de Docker del {% data variables.product.prodname_registry %} existente y se optimiza para ser compatible con algunas de las necesidades únicas de los contenedores.

Con el {% data variables.product.prodname_container_registry %} puedes:
- Almacenar imágenes de contenedor dentro de tu organización y cuenta de usuario, en vez de en un repositorio.
- Configurar permisos granulares y la visibilidad independientemente de los permisos y visibilidad del repositorio.
- Acceder a imágenes de contenedores públicos anónimamente.

|                          | Registro de Docker                                                                                                                                                                                                                                                                                 | {% data variables.product.prodname_container_registry %}
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ubicaciones de hospedaje | Puedes hospedar imágenes múltiples de Docker en un repositorio.                                                                                                                                                                                                                                    | Puedes hospedar imagenes de contenedor múltiples en una cuenta de organización o de usuario.                                                                                                                 |
| Permisos                 | Cada imagen hereda los permisos del repositorio en donde esta se hospeda. Cualquier persona con permisos de lectura para un repositorio puede instalar un paquete como una dependencia en un proyecto, y cualquier persona con permisos de escritura puede publicar una nueva versión del paquete. | Para cada imagen de contenedor, puedes elegir el nivel de acceso que tienen los demás. Los permisos para acceso a la imagen de contenedor son independientes de aquellos para tu organización y repositorio. |
 Visibilidad          | {% data reusables.package_registry.public-or-private-packages %} | Puedes configurar la visibilidad de cada una de tus imágenes de contenedor. Solo las personas y equipos a las cuales se les haya otorgado acceso dentro de tu organización podrán ver las imágenes de contenedor privadas. Cualquiera puede ver las imágenes de contenedor públicas. | Acceso anónimo    | N/A | Puedes acceder a imágenes de contenedor públicas anónimamente. Compatibilidad con capa ajena | No es compatible con capas ajenas, tales como las imágenes de Windows. | Es compatible con capas ajenas, tales como las imágenes de Windows.

### Cambios en la facturación

Durante el beta del {% data variables.product.prodname_container_registry %}, tanto el {% data variables.product.prodname_container_registry %} nuevo como el {% data variables.product.prodname_registry %} existente del registro de Docker son gratuitos. Para obtener más información sobre el registro de Docker del {% data variables.product.prodname_registry %}, consulta la sección "[Trabajar con el registro de Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)".

Después del beta, se aplicarán al {% data variables.product.prodname_container_registry %} las mismas tasas de facturación y almacenamiento que se utilizan en otros registros del {% data variables.product.prodname_registry %}. Para obtener más información, consulta la sección "[Acerca de la facturación para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

### Cambios de dominio

El dominio para el {% data variables.product.prodname_container_registry %} es `ghcr.io`.

| Registro                                                               | URL de Ejemplo                                      |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| Registro de Docker para {% data variables.product.prodname_registry %} | `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME` |
| {% data variables.product.prodname_container_registry %}             | `ghcr.io/OWNER/IMAGE_NAME`                          |

### Autenticarse en el {% data variables.product.prodname_container_registry %}

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

3. Utiliza el `GITHUB_TOKEN` para tu token de acceso personal (PAT) de autenticación. Para obtener más información, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)".

4. En tu archivo de flujo de trabajo de {% data variables.product.prodname_actions %}, utiliza el token de autenticación {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} como tu PAT de {% data variables.product.prodname_container_registry %}.

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

Entonces necesitarás actualizar tu flujo de trabajo con la URL nueva del {% data variables.product.prodname_container_registry %}, de esta forma:

{% raw %}
```yaml
# new login with new container registry url and PAT
echo ${{ secrets.GITHUB_TOKEN }} | docker login ghcr.io -u $GITHUB_ACTOR --password-stdin
# new container registry urls added
docker pull ghcr.io/github/octoshift:latest
docker build . --tag ghcr.io/github/octoshift:$GITHUB_SHA --cache-from ghcr.io/github/octoshift:latest
docker push ghcr.io/github/octoshift:$GITHUB_SHA
```
{% endraw %}
