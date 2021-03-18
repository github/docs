---
title: Conectar um repositório a uma imagem de contêiner
intro: 'É possível vincular um repositório a uma imagem de contêiner localmente e no {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
versions:
  free-pro-team: '*'
---

Ao vincular um contêiner a um repositório, a página de destino do pacote mostrará informações e links do repositório, como, por exemplo, LEIAME.

Para conectar um repositório e uma imagem de contêiner no {% data variables.product.prodname_dotcom %}, eles devem compartilhar o mesmo proprietário no {% data variables.product.prodname_dotcom %}. Por exemplo, `my_repo` e `hello_docker` são propriedade do usuário `monalisa`:
```shell
https://github.com/monalisa/my_repo
https://github.com/monalisa/hello_docker
```

### Conectar um repositório a uma imagem de contêiner de propriedade do usuário no {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

### Conectar um repositório a uma imagem de contêiner de propriedade de organização no {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

### Conectar um repositório a uma imagem de contêiner na linha de comando

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

5. Se você ainda não o fez, efetue a autenticação em

{% data variables.product.prodname_github_container_registry %}. Para obter mais informações, consulte "[Efetuar a autenticação no GitHub Container Registry](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-github-container-registry)".
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Faça push da sua imagem de contêiner para {% data variables.product.prodname_github_container_registry %}.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:TAG
  ```
  Por exemplo:
  ```shell
  $ docker push ghcr.io/monalisa/hello_docker:latest
  ```
