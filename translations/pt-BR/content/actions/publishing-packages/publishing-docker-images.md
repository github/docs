---
title: Publicar imagens do Docker
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar um fluxo de trabalho que realiza uma criação do Docker e, em seguida, publica imagens do Docker no Docker Hub ou no {% data variables.product.prodname_registry %}. Com um único fluxo de trabalho, você pode publicar imagens em um único registro ou em vários registros.

{% note %}

**Observação:** Se você desejar fazer push para outro registro do Docker de terceiros, o exemplo na seção "[Publicar imagens em {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" poderá servir como um bom modelo.

{% endnote %}

## Pré-requisitos

Recomendamos que você tenha um entendimento básico das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"{% ifversion fpt or ghec %}
- "[Trabalhando com {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)"{% else %}
- "[Trabalhando com o registro Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"{% endif %}

## Sobre a configuração da imagem

Este guia pressupõe que você tem uma definição completa para uma imagem Docker armazenada em um repositório {% data variables.product.prodname_dotcom %}. Por exemplo, seu repositório deve conter um _arquivo Docker_ e quaisquer outros arquivos necessários para executar uma criação do Docker para criar uma imagem.

Neste guia, usaremos a ação `build-push-action` do Docker para criar a imagem do Docker e enviá-la para um ou mais registros do Docker. Para obter mais informações, consulte [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Publicar imagens no Docker Hub

{% data reusables.actions.release-trigger-workflow %}

No exemplo de fluxo de trabalho, nós usamos as ações de login do Docker `login-action` e `build-push-action` para construir a imagem do Docker e, se a construção for bem-sucedida, faça push da imagem construída para o Docker Hub.

Para fazer push para o Docker Hub, você deverá ter uma conta Docker Hub e ter criado um repositório Docker Hub. Para obter mais informações, consulte "[Fazer push de uma imagem de contêiner do Docker para o Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" na documentação do Docker.

As opções</code>login-action` obrigatórias para o Docker Hub são:</p>

<ul>
<li><code>nome de usuário` e `senha`: Este é o seu nome de usuário e senha do Docker Hub. Recomendamos armazenar seu nome de usuário e senha do Docker Hub como segredos para que não estejam expostos no seu arquivo de fluxo de trabalho. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".</li> </ul>

A opção de `metadata-action` necessária para o Docker Hub é:
* `imagens`: O namespace e o nome da imagem Docker que você está construindo/fazendo push do Docker Hub.

As opções `build-push-action` necessárias para o Docker Hub são:
* `tags`: A tag de sua nova imagem no formato `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. Você pode definir uma única tag, conforme mostrado abaixo, ou especificar várias tags em uma lista.
* `push`: Se definido como `verdadeiro`, a imagem será enviada por push para o registro, se este for construído com sucesso.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

O fluxo de trabalho acima verifica o repositório {% data variables.product.prodname_dotcom %}, usa `login-action` para efetuar login no registro e, em seguida, usa a ação `build-push-action` para: criar uma imagem Docker com base no `arquivo Docker do seu repositório`; faça push da imagem do Docker Hub e aplique uma tag à imagem.

## Publicar imagens em {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

{% data reusables.actions.release-trigger-workflow %}

No exemplo abaixo, usamos a `login-action do Docker`{% ifversion fpt or ghec %}, `metadados-ação`,{% endif %} e ações de `build-push-action` para construir a imagem Docker e, se a criação for bem-sucedida, faça push da imagem criada para {% data variables.product.prodname_registry %}.

As opções de `login-action` de login necessárias para {% data variables.product.prodname_registry %} são:
* `registro`: Deve ser definido como {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}.
* `nome de usuário`: Você pode usar o contexto {% raw %}`${{ github.actor }}`{% endraw %} para usar automaticamente o nome de usuário que acionou a execução do fluxo de trabalho. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts#github-context)".
* `senha`: Você pode usar o segredo `GITHUB_TOKEN` gerado automaticamente para a senha. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

{% ifversion fpt or ghec %}
A opção `metadata-action` obrigatória para {% data variables.product.prodname_registry %} é:
* `imagens`: O espaço do nome e o nome da imagem Docker que você está criando.
{% endif %}

As opções de `build-push-action` necessárias para {% data variables.product.prodname_registry %} são:{% ifversion fpt or ghec %}
* `contexto`: Define o contexto da criação como o conjunto de arquivos localizados no caminho especificado.{% endif %}
* `push`: Se definido como `verdadeiro`, a imagem será enviada por push para o registo se for criada com êxito.{% ifversion fpt or ghec %}
* `tags` e `etiquetas`: são preenchidas pela saída de `metadados`.{% else %}
* `tags`: Deve ser definido no formato {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.

   Por exemplo, para uma imagem chamada `octo-image` armazenada em {% data variables.product.prodname_ghe_server %} em `https://HOSTNAME/octo-org/octo-repo`, a opção de `tags` deve ser definida como `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.

   Por exemplo, para uma imagem denominada `octo-image` armazenada em {% data variables.product.prodname_dotcom %} em `http://github. om/octo-org/octo-repo`, a opção `tags` deve estar definida como `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`.{% endif %}. Você pode definir uma única tag, conforme mostrado abaixo, ou especificar várias tags em uma lista.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %}
{% data reusables.package_registry.publish-docker-image %}

O fluxo de trabalho acima é acionado por um push para o branch da "versão". Ele verifica o repositório GitHub e usa `login-action` para fazer login no {% data variables.product.prodname_container_registry %}. Em seguida, extrai etiquetas e tags para a imagem do Docker. Finalmente, ele usa a ação `de build-push-action` para criar a imagem e publicá-la no {% data variables.product.prodname_container_registry %}.

{% else %}
```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

O fluxo de trabalho acima faz o check-out do repositório {% data variables.product.product_name %}, usa o `login-action` para efetuar o login no registro e, em seguida, usa a ação `build-push-action` para criar uma imagem Docker com base no `arquivo Docker` do seu repositório; fazer push da imagem para o registro Docker e aplicar o commit SHA e a versão como tags de imagem.
{% endif %}

## Publicar imagens no Docker Hub e {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

Em um único fluxo de trabalho, você pode publicar sua imagem Docker em vários registros usando as ações de `login-action` e `build-push-action` para cada registro.

O fluxo de trabalho a seguir usa os passos das seções anteriores ("[Publicar imagens no Docker Hub](#publishing-images-to-docker-hub)e "[Publicar imagens para {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") para criar um único fluxo de trabalho que faz push em ambos os registros.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

O fluxo de trabalho acima faz checkout do repositório {% data variables.product.product_name %} usa o `login-action` duas vezes para fazer login em ambos os registros e gerar etiquetas com a ação `metadata-action`. Em seguida, a ação `build-push-action` cria e faz push da imagem do Docker para o Docker Hub e, posteriormente, o {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}registro do Docker{% endif %}.
