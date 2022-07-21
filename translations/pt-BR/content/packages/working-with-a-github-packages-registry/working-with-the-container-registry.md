---
title: Trabalhando com o registro do Contêiner
intro: 'Você pode armazenar e gerenciar imagens do Docker e OCI no {% data variables.product.prodname_container_registry %}, que usa o namespace do pacote ''https://{% data reusables.package_registry.container-registry-hostname %}''.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images
  - /packages/guides/container-guides-for-github-packages/pushing-and-pulling-docker-images
  - /packages/guides/pushing-and-pulling-docker-images
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
  - /packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.5'
shortTitle: Container registry
---

{% ifversion ghes > 3.4 %}
{% note %}

**Observação**: {% data variables.product.prodname_container_registry %} está atualmente em beta para {% data variables.product.product_name %} e sujeito a alterações.

{% endnote %}
{% endif %}

{% ifversion ghes > 3.4 %}
## Pré-requisitos

Para configurar e usar o {% data variables.product.prodname_container_registry %} em {% data variables.product.prodname_ghe_server %}, primeiro seu administrador do site deve habilitar {% data variables.product.prodname_registry %} **e** o isolamento de subdomínio. Para obter mais informações, consulte "[Primeiros passos com o GitHub Packages para sua empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)" e "[Habilitando o isolamento do subdomínio](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)".
{% endif %}
## Sobre o suporte de {% data variables.product.prodname_container_registry %}

O {% data variables.product.prodname_container_registry %} é atualmente compatível com os seguintes formatos de imagem do contêiner:

* [Docker Image Manifest V2, Modelo 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Especificações de Open Container Initiative (OCI)](https://github.com/opencontainers/image-spec)

Ao instalar ou publicar uma imagem Docker, a {% data variables.product.prodname_container_registry %} é compatível com as camadas estrangeiras, como imagens do Windows.

## Efetuar a autenticação no {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% ifversion ghes %}Certifique-se de substituir o `HOSTNAME` pelo nome do host {% data variables.product.product_location_enterprise %} ou endereço IP nos exemplos abaixo.{% endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## Fazer push das imagens do contêiner

Este exemplo faz push da versão mais recente de `IMAGE-NAME`.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

Este exemplo faz push da versão `2.5` da imagem.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:2.5
  ```

Ao publicar um pacote pela primeira vez a visibilidade-padrão será privada. Para alterar a visibilidade ou definir as permissões de acesso, consulte "[Configurar controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

## Fazer pull das imagens de contêiner

### Pull por resumo

Para garantir que você esteja sempre usando a mesma imagem, você pode especificar a versão exata da imagem de contêiner que você deseja fazer pull pelo valor do SHA do `resumo`.

1. Para encontrar o valor do SHA do resumo, use `docker inspect` or `docker pull` e copie o valor de SHA após `Digest:`
  ```shell
  $ docker inspect {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```
2. Remova a imagem localmente, conforme necessário.
  ```shell
  $ docker rmi  {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

3. Faça pull da imagem do contêiner com `@YOUR_SHA_VALUE` após o nome da imagem.
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

### Pull por nome

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```

### Pull por nome e versão

Exemplo de CLI do Docker mostrando uma imagem extraída pelo seu nome e a tag de versão `1.14.1`:
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  > {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  ```

### Pull por nome e última versão

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  > {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  ```

## Criar imagens de contêiner

Este exemplo cria a imagem `hello_docker`:
  ```shell
  $ docker build -t hello_docker .
  ```

## Marcar imagens de contêiner

1. Encontre o ID da imagem do Docker que você deseja marcar.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. Marque a sua imagem do Docker usando o ID da imagem, o nome da imagem desejada e a hospedagem de destino.
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:latest
  ```
