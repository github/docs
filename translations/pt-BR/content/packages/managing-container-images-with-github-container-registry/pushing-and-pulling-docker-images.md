---
title: Fazer push e pull das imagens do Docker
intro: 'Você pode armazenar e gerenciar imagens de Docker em {% data variables.product.prodname_github_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

Para fazer push e pull das imagens de contêiner pertencentes a uma organização, um administrador da organização deve habilitar o {% data variables.product.prodname_github_container_registry %} para a organização. Para obter mais informações, consulte "[Habilitar suporte ao contêiner aprimorado](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)".

### Autenticar-se no {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

### Fazer push das imagens do contêiner

Este exemplo faz push da versão mais recente de `IMAGE-NAME`.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME:latest
  ```

Este exemplo faz push da versão `2.5` da imagem.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:2.5
  ```

Ao publicar um pacote pela primeira vez a visibilidade-padrão será privada. Para alterar a visibilidade ou definir permissões de acesso, consulte "[Configurar controle de acesso e visibilidade para imagens de contêiner](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)".

### Fazer pull das imagens de contêiner

#### Pull por resumo

Para garantir que você esteja sempre usando a mesma imagem, você pode especificar a versão exata da imagem de contêiner que você deseja fazer pull pelo valor do SHA do `resumo`.

1. Para encontrar o valor do SHA do resumo, use `docker inspect` or `docker pull` e copie o valor de SHA após `Digest:`
  ```shell
  $ docker inspect ghcr.io/OWNER/IMAGE_NAME
  ```
2. Remova a imagem localmente, conforme necessário.
  ```shell
  $ docker rmi  ghcr.io/OWNER/IMAGE_NAME:latest
  ```

3. Faça pull da imagem do contêiner com `@YOUR_SHA_VALUE` após o nome da imagem.
  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

#### Pull por nome

  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME
  ```

#### Pull por nome e versão

Exemplo de CLI do Docker mostrando uma imagem extraída pelo seu nome e a tag de versão `1.14.1`:
  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for ghcr.io/orgname/image-name/release:1.14.1
  > ghcr.io/orgname/image-name/release:1.14.1
  ```

#### Pull por nome e última versão

  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for ghcr.io/user/image-name:latest
  > ghcr.io/user/image-name:latest
  ```

### Criar imagens de contêiner

Este exemplo cria a imagem `hello_docker`:
  ```shell
  $ docker build -t hello_docker .
  ```

### Marcar imagens de contêiner

1. Encontre o ID da imagem do Docker que você deseja marcar.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. Marque a sua imagem do Docker usando o ID da imagem, o nome da imagem desejada e a hospedagem de destino.
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/OWNER/NEW_IMAGE_NAME:latest
  ```
