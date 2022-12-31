---
title: Publicando imagens do Docker
intro: 'Você pode publicar imagens Docker para um registro, como o Docker Hub ou {% data variables.product.prodname_registry %}, como parte do seu fluxo de trabalho de integração contínua (CI).'
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
ms.openlocfilehash: 01f20527dedeea3685855797993187e7af462de4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410288'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar um fluxo de trabalho que realiza uma criação do Docker e, em seguida, publica imagens do Docker no Docker Hub ou no {% data variables.product.prodname_registry %}. Com um único fluxo de trabalho, você pode publicar imagens em um único registro ou em vários registros.

{% note %}

**Observação:** caso você deseje efetuar push para outro registro do Docker de terceiros, o exemplo descrito na seção "[Como publicar imagens no {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" pode servir como um bom modelo.

{% endnote %}

## Pré-requisitos

Recomendamos que você tenha um entendimento básico das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, confira "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"{% ifversion fpt or ghec %}
- "[Como trabalhar com o {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)"{% else %}
- "[Como trabalhar com o registro do Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"{% endif %}

## Sobre a configuração da imagem

Este guia pressupõe que você tem uma definição completa para uma imagem Docker armazenada em um repositório {% data variables.product.prodname_dotcom %}. Por exemplo, seu repositório precisa conter um _Dockerfile_ e todos os outros arquivos necessários para executar um build do Docker para criar uma imagem.

Neste guia, usaremos a ação `build-push-action` do Docker para compilar a imagem do Docker e efetuar push dela para um ou mais registros do Docker. Para obter mais informações, confira [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Publicar imagens no Docker Hub

{% data reusables.actions.release-trigger-workflow %}

No exemplo de fluxo de trabalho abaixo, usaremos as ações `login-action` e `build-push-action` do Docker para compilar a imagem do Docker e, se o build for bem-sucedido, efetuaremos push da imagem compilada para o Docker Hub.

Para fazer push para o Docker Hub, você deverá ter uma conta Docker Hub e ter criado um repositório Docker Hub. Para obter mais informações, confira "[Como efetuar push de uma imagem de contêiner do Docker para o Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" na documentação do Docker.

As opções `login-action` necessárias para o Docker Hub são:
* `username` e `password`: esse é seu nome de usuário e sua senha do Docker Hub. Recomendamos armazenar seu nome de usuário e senha do Docker Hub como segredos para que não estejam expostos no seu arquivo de fluxo de trabalho. Para obter mais informações, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

A opção `metadata-action` obrigatória para o Docker Hub é:
* `images`: o namespace e o nome da imagem do Docker que você está compilando/enviando por push para o Docker Hub.

As opções `build-push-action` necessárias para o Docker Hub são:
* `tags`: a marca da nova imagem no formato `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. Você pode definir uma única tag, conforme mostrado abaixo, ou especificar várias tags em uma lista.
* `push`: se isso for definido como `true`, a imagem será enviada por push para o registro se for compilada com sucesso.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

O fluxo de trabalho acima faz check-out do repositório do {% data variables.product.prodname_dotcom %}, usa `login-action` para fazer logon no registro e usa a ação `build-push-action` para: compilar uma imagem do Docker com base no `Dockerfile` do seu repositório, efetuar push da imagem para o Docker Hub e aplicar uma marca à imagem.

## Publicar imagens em {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

{% data reusables.actions.release-trigger-workflow %}

No exemplo de fluxo de trabalho abaixo, usaremos as ações `login-action`{% ifversion fpt or ghec %}, `metadata-action`{% endif %} e `build-push-action` do Docker para compilar a imagem do Docker e, se o build for bem-sucedido, efetuar push da imagem compilada para o {% data variables.product.prodname_registry %}.

As opções `login-action` obrigatórias para o {% data variables.product.prodname_registry %} são:
* `registry`: deve ser definido como {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}.
* `username`: use o contexto {% raw %}`${{ github.actor }}`{% endraw %} para usar automaticamente o nome de usuário do usuário que disparou a execução de fluxo de trabalho. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts#github-context)".
* `password`: use o segredo `GITHUB_TOKEN` gerado automaticamente para a senha. Para obter mais informações, confira "[Como se autenticar com o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

{% ifversion fpt or ghec %} A opção `metadata-action` obrigatória para o {% data variables.product.prodname_registry %} é:
* `images`: o namespace e o nome da imagem do Docker que está sendo compilada.
{% endif %}

As opções `build-push-action` obrigatórias para o {% data variables.product.prodname_registry %} são:{% ifversion fpt or ghec %}
* `context`: define o contexto do build como o conjunto de arquivos localizado no caminho especificado.{% endif %}
* `push`: se isso for definido como `true`, a imagem será enviada por push para o registro se for compilada com sucesso.{% ifversion fpt or ghec %}
* `tags` e `labels`: são preenchidos pela saída de `metadata-action`.{% else %}
* `tags`: deve ser definido no formato {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION`. 
  
   Por exemplo, para uma imagem chamada `octo-image` armazenada no {% data variables.product.prodname_ghe_server %} em `https://HOSTNAME/octo-org/octo-repo`, a opção `tags` deverá ser definida como `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.
  
   Por exemplo, para uma imagem chamada `octo-image` armazenada no {% data variables.product.prodname_dotcom %} em `http://github.com/octo-org/octo-repo`, a opção `tags` deve ser definida como `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}. Você pode definir uma única tag, conforme mostrado abaixo, ou especificar várias tags em uma lista.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% data reusables.package_registry.publish-docker-image %}

O fluxo de trabalho acima é acionado por um push para o branch da "versão". Ele faz check-out do repositório do GitHub e usa `login-action` para fazer logon no {% data variables.product.prodname_container_registry %}. Em seguida, extrai etiquetas e tags para a imagem do Docker. Por fim, ele usa a ação `build-push-action` para criar a imagem e publicá-la no {% data variables.product.prodname_container_registry %}.

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

O fluxo de trabalho acima faz check-out do repositório do {% data variables.product.product_name %}, usa `login-action` para fazer logon no registro e usa a ação `build-push-action` para: compilar uma imagem do Docker com base no `Dockerfile` do repositório, enviar por push a imagem para o registro do Docker e aplicar a confirmação do SHA e a versão como marcas da imagem.
{% endif %}

## Publicar imagens no Docker Hub e {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

Em um fluxo de trabalho individual, você pode publicar sua imagem do Docker em vários registros usando as ações `login-action` e `build-push-action` para cada registro.

O exemplo de fluxo de trabalho a seguir usa as etapas das seções anteriores ("[Como publicar imagens no Docker Hub](#publishing-images-to-docker-hub)" e "[Como publicar imagens no {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") para criar um fluxo de trabalho individual que efetua push para os dois registros.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

O fluxo de trabalho acima faz check-out do repositório do {% data variables.product.product_name %}, usa a `login-action` duas vezes para fazer logon nos dois registros e gera marcas e rótulos com a ação `metadata-action`.
Em seguida, a ação `build-push-action` compila a imagem do Docker e a envia por push para o Docker Hub e o {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}Registro do Docker{% endif %}.
