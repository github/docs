---
title: Connecting a repository to a package
intro: 'You can connect a repository to a container image on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  free-pro-team: '*'
---

By connecting a repository to a package, the package landing page will show information and links from the repository, such as the README.

### Connecting a repository to a user-owned package on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

### Connecting a repository to an organization-owned package on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

### Connecting a repository to a container image using the command line

1. No seu arquivo Docker, adicione esta linha, substituindo `PROPRIETÁRIO` e `REPO` pelas suas informações:

 ```shell
 LABEL org.opencontainers.image.source=https://github.com/<em>OWNER</em>/<em>REPO</em>
 ```
 Por exemplo, se você é o usuário de `monalisa` e proprietário de `my-repo`, você adicionaria essa linha ao seu arquivo Docker:
 ```shell
 ETIQUETA org.opencontainers.image.source=https://github.com/monalisa/my-repo
 ```
 Para obter mais informações, consulte "[ETIQUETA](https://docs.docker.com/engine/reference/builder/#label)" na documentação oficial do Docker e "[Chaves de anotação pré-definidas](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)" no repositório `opencontainers/image-spec`.

2. Construa a sua imagem do contêiner. Este exemplo cria uma imagem do arquivo Docker no diretório atual e atribui o nome da imagem `hello_docker`.

  ```shell
  $ docker build -t hello_docker .
  ```
3. Opcionalmente, revise os detalhes para a imagem do Docker que você deseja marcar.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Marque sua imagem Docker com o nome de imagem desejado e hospedagem de destino.
  ```shell
  $ docker tag IMAGE_NAME ghcr.io/OWNER/NEW_IMAGE_NAME:TAG
  ```
  Por exemplo:
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/monalisa/hello_docker:latest
  ```

5. If you haven't already, authenticate to the {% data variables.product.prodname_container_registry %}. For more information, see "[Authenticating to the {% data variables.product.prodname_container_registry %}](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)."
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Push your container image to the {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:TAG
  ```
  Por exemplo:
  ```shell
  $ docker push ghcr.io/monalisa/hello_docker:latest
  ```
