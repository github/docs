---
title: Conectar un repositorio a un paquete
intro: 'Puedes conectar un repositorio a una imagen de contenedor en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  free-pro-team: '*'
---

Si conectas un repositorio a un paquete, la página de llegada de dicho paquete mostrará información y enlaces del repositorio, tales como el README.

### Conectar un repositorio a un paquete qu pertenezca a un usuario en {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

### Conectar un repositorio a un paquete que pertenezca a una organización en {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

### Conectar un repositorio a una imagen de contenedor que utilice la línea de comandos

1. En tu Dockerfile, agrega esta línea, reemplazando a `OWNER` y `REPO` con tu información:

 ```shell
 LABEL org.opencontainers.image.source=https://github.com/<em>OWNER</em>/<em>REPO</em>
 ```
 Por ejemplo, si eres el usuario `monalisa` y eres propietario de `my-repo`, agregarías esta línea a tu Dockerfile:
 ```shell
 LABEL org.opencontainers.image.source=https://github.com/monalisa/my-repo
 ```
 Para obtener más información, consulta "[LABEL](https://docs.docker.com/engine/reference/builder/#label)" en la documentación oficial de Docker, y "[Llaves de Anotación Predefinidas](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)" en el repositorio `opencontainers/image-spec`.

2. Crea tu imagen de contenedor. Este ejemplo crea una imagen del Dockerfile en el directorio actual y asigna el nombre de imagen `hello_docker`.

  ```shell
  $ docker build -t hello_docker .
  ```
3. Opcionalmente, revisa los detalles para la imagen de Docker que quieres etiquetar.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Etiqueta tu imagen de Docker con el nombre que hayas elegido para la imagen y con el destino del host.
  ```shell
  $ docker tag IMAGE_NAME ghcr.io/OWNER/NEW_IMAGE_NAME:TAG
  ```
  Por ejemplo:
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/monalisa/hello_docker:latest
  ```

5. Si aún no lo haces, autentícate en el {% data variables.product.prodname_container_registry %}. Para obtener más información, consulta la sección "[Autenticarse en el {% data variables.product.prodname_container_registry %}](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)".
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Sube tu imagen de contenedor al {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:TAG
  ```
  Por ejemplo:
  ```shell
  $ docker push ghcr.io/monalisa/hello_docker:latest
  ```
