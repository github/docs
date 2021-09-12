---
title: Publicando imagens do Docker
intro: 'Você pode publicar imagens Docker para um registro, como o Docker Hub ou {% data variables.product.prodname_registry %}, como parte do seu fluxo de trabalho de integração contínua (CI).'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Este guia mostra como criar um fluxo de trabalho que realiza uma criação do Docker e, em seguida, publica imagens do Docker no Docker Hub ou no {% data variables.product.prodname_registry %}. Com um único fluxo de trabalho, você pode publicar imagens em um único registro ou em vários registros.

{% note %}

**Observação:** Se você desejar fazer push para outro registro do Docker de terceiros, o exemplo na seção "[Publicar imagens em {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" poderá servir como um bom modelo.

{% endnote %}

### Pré-requisitos

Recomendamos que você tenha um entendimento básico das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"
- "[Trabalhando com o registro Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"

### Sobre a configuração da imagem

Este guia pressupõe que você tem uma definição completa para uma imagem Docker armazenada em um repositório {% data variables.product.prodname_dotcom %}. Por exemplo, seu repositório deve conter um _arquivo Docker_ e quaisquer outros arquivos necessários para executar uma criação do Docker para criar uma imagem.

Neste guia, usaremos a ação `build-push-action` do Docker para criar a imagem do Docker e enviá-la para um ou mais registros do Docker. Para obter mais informações, consulte [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

### Publicar imagens no Docker Hub

{% data reusables.github-actions.release-trigger-workflow %}

No exemplo de fluxo de trabalho, nós usamos as ações de login do Docker `login-action` e `build-push-action` para construir a imagem do Docker e, se a construção for bem-sucedida, faça push da imagem construída para o Docker Hub.

Para fazer push para o Docker Hub, você deverá ter uma conta Docker Hub e ter criado um repositório Docker Hub. Para obter mais informações, consulte "[Fazer push de uma imagem de contêiner do Docker para o Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" na documentação do Docker.

As opções</code>login-action` obrigatórias para o Docker Hub são:</p>

<ul>
<li><code>nome de usuário` e `senha`: Este é o seu nome de usuário e senha do Docker Hub. Recomendamos armazenar seu nome de usuário e senha do Docker Hub como segredos para que não estejam expostos no seu arquivo de fluxo de trabalho. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".</li> </ul>

As opções `build-push-action` necessárias para o Docker Hub são:
* `tags`: A tag de sua nova imagem no formato `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. Você pode definir uma única tag, conforme mostrado abaixo, ou especificar várias tags em uma lista.
* `push`: Se definido como `verdadeiro`, a imagem será enviada por push para o registro, se este for construído com sucesso.

{% raw %}
```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Push to Docker Hub
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-docker-hub-namespace/my-docker-hub-repository:latest
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Publicar imagens em {% data variables.product.prodname_registry %}

{% data reusables.github-actions.release-trigger-workflow %}

No exemplo de fluxo de trabalho, nós usamos as ações `login-action` do Docker e `build-push-action` para construir a imagem do Docker e, se a compilação for bem-sucedida, faça push da imagem construída para {% data variables.product.prodname_registry %}.

As opções de `login-action` de login necessárias para {% data variables.product.prodname_registry %} são:
* `registro`: Deve ser definido como `docker.pkg.github.com`.
* `nome de usuário`: Você pode usar o contexto {% raw %}`${{ github.actor }}`{% endraw %} para usar automaticamente o nome de usuário que acionou a execução do fluxo de trabalho. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".
* `senha`: Você pode usar o segredo `GITHUB_TOKEN` gerado automaticamente para a senha. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

As opções de `build-push-action` necessárias para {% data variables.product.prodname_registry %} são:
* `tags`: Deve ser definido no formato `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`. Por exemplo, para uma imagem denominada `octo-image` armazenada em {% data variables.product.prodname_dotcom %} em `http://github. om/octo-org/octo-repo`, a opção `tags` deve estar definida como `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`. Você pode definir uma única tag, conforme mostrado abaixo, ou especificar várias tags em uma lista.
* `push`: Se definido como `verdadeiro`, a imagem será enviada por push para o registro, se este for construído com sucesso.

```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@v1
        with:
          registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build container image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: |
            {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
```

{% data reusables.github-actions.docker-tag-with-ref %}

### Publicar imagens no Docker Hub e {% data variables.product.prodname_registry %}

Em um único fluxo de trabalho, você pode publicar sua imagem Docker em vários registros usando as ações de `login-action` e `build-push-action` para cada registro.

O fluxo de trabalho a seguir usa os passos das seções anteriores ("[Publicar imagens no Docker Hub](#publishing-images-to-docker-hub)e "[Publicar imagens para {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") para criar um único fluxo de trabalho que faz push em ambos os registros.

```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@v1
        with:
          registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Push to Docker Hub
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-docker-hub-namespace/my-docker-hub-repository:{% raw %}${{ github.ref }}{% endraw %}
      - name: Build container image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/my-image:${{ github.ref }}{% endraw %}
```

O fluxo de trabalho acima faz o check-out do repositório {% data variables.product.prodname_dotcom %}, usa o `login-action` duas vezes para fazer login em ambos os registros e, em seguida, usa a ação `build-push-action` duas vezes para criar e fazer push da imagem do Docker para o Docker Hub e {% data variables.product.prodname_registry %}. Para ambas as etapas, ele marca a imagem do Docker criada com a referência do Git do evento do fluxo de trabalho. Este fluxo de trabalho é acionado na publicação de uma versão do {% data variables.product.prodname_dotcom %}. Portanto, a referência para ambos os registros será a tag do Git para a versão.
