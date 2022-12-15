---
title: Conectar um repositório a um pacote
intro: 'É possível conectar um repositório a uma imagem de contêiner na {% data variables.product.product_location %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect a repository
ms.openlocfilehash: 087775df9862c3b2a88dd555d9f571066fef8759
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882332'
---
Ao conectar um repositório a um pacote, a página inicial do pacote mostrará informações e links do repositório, como o LEIAME.

## Conectar um repositório a um pacote de propriedade do usuário em {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## Conectar um repositório a um pacote de propriedade da organização em {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## Conectar um repositório a uma imagem de contêiner usando a linha de comando

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

1. Em seu Dockerfile, adicione esta linha, substituindo {% ifversion ghes %}`HOSTNAME`, {% endif %}`OWNER` and `REPO` pelos seus detalhes:

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPO</em>
 ```
 Por exemplo, se você fosse o usuário `monalisa` e o proprietário do `my-repo` e o nome do host do {% data variables.product.product_location %} fosse `github.companyname.com`, você adicionaria essa linha ao Dockerfile:
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 Para obter mais informações, confira "[LABEL](https://docs.docker.com/engine/reference/builder/#label)" na documentação oficial do Docker e "[Chaves de Anotação Predefinidas](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)" no repositório `opencontainers/image-spec`.

2. Construa a sua imagem do contêiner. Este exemplo cria uma imagem do Dockerfile no diretório atual e atribui o nome `hello_docker` à imagem.

  ```shell
  $ docker build -t hello_docker .
  ```
3. Opcionalmente, revise os detalhes para a imagem do Docker que você deseja marcar.
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Marque sua imagem Docker com o nome de imagem desejado e hospedagem de destino.
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  Por exemplo:
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. Se você ainda não o fez, efetue a autenticação em {% data variables.product.prodname_container_registry %}. Para obter mais informações, confira "[Autenticação no {% data variables.product.prodname_container_registry %}](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)".
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Faça push da sua imagem de contêiner para o {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  Por exemplo:
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
