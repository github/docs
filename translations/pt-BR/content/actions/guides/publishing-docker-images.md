---
title: Publicar imagens do Docker
intro: 'Você pode publicar imagens Docker para um registro, como o Docker Hub ou {% data variables.product.prodname_registry %}, como parte do seu fluxo de trabalho de integração contínua (CI).'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

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
- "[Configurar o Docker para uso com o {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)"

### Sobre a configuração da imagem

Este guia pressupõe que você tem uma definição completa para uma imagem Docker armazenada em um repositório {% data variables.product.prodname_dotcom %}. Por exemplo, seu repositório deve conter um _arquivo Docker_ e quaisquer outros arquivos necessários para executar uma criação do Docker para criar uma imagem.

Neste guia, usaremos a ação `build-push-action` do Docker para criar a imagem do Docker e enviá-la para um ou mais registros do Docker. Para obter mais informações, consulte [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

### Publicar imagens no Docker Hub

{% data reusables.github-actions.release-trigger-workflow %}

No exemplo do fluxo de trabalho abaixo, usamos a ação `build-push-action` do Docker para criar a imagem e, se a construção for bem-sucedida, faça o push da imagem criada para o Docker Hub.

Para fazer push para o Docker Hub, você deverá ter uma conta Docker Hub e ter criado um repositório Docker Hub. Para obter mais informações, consulte "[Compartilhar imagens no Docker Hub](https://docs.docker.com/get-started/part3/)" na documentação do Docker.

As opções `build-push-action` necessárias para o Docker Hub são:

* `nome de usuário` e `senha`: Este é o seu nome de usuário e senha do Docker Hub. Recomendamos armazenar seu nome de usuário e senha do Docker Hub como segredos encriptados no seu repositório de {% data variables.product.prodname_dotcom %} para que não sejam expostos no seu arquivo de fluxo de trabalho. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
* `repositório`: Seu repositório do Docker Hub no formato `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY`.

{% raw %}
```yaml
nome: Publicar imagem do Docker
em:
  versão:
    tipos: [published]
trabalhos:
  push_to_registry:
    Nome: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    etapas:
      - nome: Verificar repo
        usa: actions/checkout@v2
      - nome: Push to Docker Hub
        usa: docker/build-push-action@v1
        com:
          nome de usuário: ${{ secrets.DOCKER_USERNAME }}
          senha: ${{ secrets.DOCKER_PASSWORD }}
          repositório: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Publicar imagens em {% data variables.product.prodname_registry %}

{% data reusables.github-actions.release-trigger-workflow %}

No exemplo abaixo, usamos a ação `build-push-action` do Docker para criar a imagem do Docker, e se a criação for bem-sucedida, faça o push da imagem criada para {% data variables.product.prodname_registry %}.

As opções de `build-push-action` necessárias para {% data variables.product.prodname_registry %} são:

* `nome de usuário`: Você pode usar o contexto {% raw %}`${{ github.actor }}`{% endraw %} para usar automaticamente o nome de usuário que acionou a execução do fluxo de trabalho. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".
* `senha`: Você pode usar o segredo `GITHUB_TOKEN` gerado automaticamente para a senha. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".
* `registro`: Deve ser definido como `docker.pkg.github.com`.
* `repositório`: Deve ser definido no formato `OWNER/REPOSITORY/IMAGE_NAME`. Por exemplo, para uma imagem denominada `octo-image` armazenada no {% data variables.product.prodname_dotcom %} em `http://github. Um/octo-org/octo-repo`, a opção `repositório` deve ser definida como `octo-org/octo-repo/octo-image`.

{% raw %}
```yaml
nome: Publish Docker image
em:
  versão:
    tipos: [published]
trabalhos:
  push_to_registry:
    nome: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    etapas:
      - nome: Check out the repo
        usa: actions/checkout@v2
      - nome: Push to GitHub Packages
        usa: docker/build-push-action@v1
        com:
          nome de usuário: ${{ github.actor }}
          senha: ${{ secrets.GITHUB_TOKEN }}
          registro: docker.pkg.github.com
          repositório: my-org/my-repo/my-image
          tag_with_ref: true

```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Publicar imagens no Docker Hub e {% data variables.product.prodname_registry %}

Em um único fluxo de trabalho, você pode publicar sua imagem do Docker em vários registros usando a ação `build-push-action` para cada registro.

O exemplo do fluxo de trabalho a seguir usa as etapas `build-push-action` das seções anteriores ("[Publicar imagens para o Docker Hub](#publishing-images-to-docker-hub)" e "[Publicar imagens em {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") para criar um único fluxo de trabalho que faça push em ambos os registros.

{% raw %}
```yaml
nome: Publicar imagem do Docker
em:
  versão:
    tipos: [published]
trabalhos:
  push_to_registries:
    nome: Fazer push da imagem do Docker em múltiplos registros
    runs-on: ubuntu-latest
    etapas:
      - nome: Verificar o repo
        usa: actions/checkout@v2
      - nome: Push to Docker Hub
        usa: docker/build-push-action@v1
        with:
          nome de usuário: ${{ secrets.DOCKER_USERNAME }}
          senha: ${{ secrets.DOCKER_PASSWORD }}
          repositório: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
      - nome: Push to GitHub Packages
        usa: docker/build-push-action@v1
        com:
          nome de usuário: ${{ github.actor }}
          senha: ${{ secrets.GITHUB_TOKEN }}
          registro: docker.pkg.github.com
          repositório: my-org/my-repo/my-image
          tag_with_ref: true
```
{% endraw %}

O fluxo de trabalho acima verifica o repositório {% data variables.product.prodname_dotcom %} e usa a ação `construção-push-action` duas vezes para criar e fazer push da imagem do Docker Hub e {% data variables.product.prodname_registry %}. Para ambas as etapas, ele define a opção `construção-push-action` [`tag_with_ref`](https://github.com/marketplace/actions/build-and-push-docker-images#tag_with_ref) para marcar automaticamente a imagem do Docker criada com a referêcia do Git do evento do fluxo de trabalho. Este fluxo de trabalho é acionado na publicação de uma versão do {% data variables.product.prodname_dotcom %}. Portanto, a referência para ambos os registros será a tag do Git para a versão.
