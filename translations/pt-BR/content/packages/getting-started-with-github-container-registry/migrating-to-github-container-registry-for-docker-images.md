---
title: Fazer a migração para o GitHub Container Registry para imagens do Docker
intro: 'Se você usou o Docker do GitHub Packages Docker Registry para armazenar imagens do Docker, você pode fazer a migração para o novo {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### Principais diferenças entre {% data variables.product.prodname_github_container_registry %} e o registro do pacote do Docker

{% data reusables.package_registry.container-registry-beta %}

O {% data variables.product.prodname_github_container_registry %} substitui o registro do Docker de Pacotes existente e é otimizado para atender a algumas das necessidades únicas dos contêineres.

{% data reusables.package_registry.container-registry-feature-highlights %}

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)."

### Alterações de cobrança

{% data reusables.package_registry.billing-for-container-registry %}

### Alterações de domínio

O domínio para o {% data variables.product.prodname_container_registry %} é `ghcr.io`.

| Registro                                                               | Exemplo de URL                                      |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| Registro Docker de {% data variables.product.prodname_registry %} | `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME` |
| {% data variables.product.prodname_github_container_registry %} | `ghcr.io/OWNER/IMAGE_NAME`                          |

### Efetuar a autenticação com o registro do contêiner

Você deverá efetuar a autenticação no {% data variables.product.prodname_container_registry %} com a URL de base `ghcr.io`. Recomendamos criar um novo token de acesso para usar o {% data variables.product.prodname_container_registry %}.

{% data reusables.package_registry.authenticate-to-container-registry %}

### Fazer a migração de uma imagem do Docker usando a CLI do Docker

Para mover imagens do Docker que você hospeda no registro do Docker do {% data variables.product.prodname_registry %}, você deve republicar as imagens para {% data variables.product.prodname_container_registry %}. Recomendamos republicar as imagens do Docker existentes usando a linha de comando na sua máquina local.

1. Faça o login no registro do Docker usando um PAT temporário com pelo menos o escopo de `read:packages`. Este PAT só será usado para fazer o login no registro do Docker para puxar imagens e poderá ser excluído posteriormente.
  {% raw %}
  ```shell
  $ echo $READ_PACKAGES_TOKEN | docker login docker.pkg.github.com -u USERNAME --password-stdin
  ```
  {% endraw %}
2. Puxe para baixo a imagem que você gostaria de migrar, substituindo o PROPRIETÁRIO pelo nome do usuário ou conta de organização proprietária do repositório, REPOSITÓRIO pelo nome do repositório que contém seu projeto, IMAGE_NAME pelo o nome do pacote ou imagem, VERSÃO pela tag para a imagem que você deseja instalar. Por exemplo, `docker pull docker.pkg.github.com/octo-org/octoshift/octoshift:latest` move a tag mais recente da imagem `octoshift/octoshift` na organização octo-org.
  ```shell
  $ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```

3. Remarque a imagem com o novo domínio e um novo nome de imagem. Para obter mais informações, consulte "[Tag do Docker](https://docs.docker.com/engine/reference/commandline/tag/)" na documentação Docker. Use a mesma URL que você usou na etapa anterior para a URL FONTE. Substitua TARGET_OWNER pelo usuário ou organização para o qual você está migrando a imagem do contêiner e substitua TARGET_IMAGE_NAME pelo novo nome de imagem de {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker tag docker.pkg.github.com/SOURCE_OWNER/SOURCE_REPOSITORY/SOURCE_IMAGE_NAME:VERSION ghcr.io/TARGET_OWNER/TARGET_IMAGE_NAME:VERSION
  ```

4. Faça login no novo {% data variables.product.prodname_container_registry %}. Recomendamos criar um novo PAT limitado aos escopos `read:packages` e `write: packages` já que você não precisa mais do escopo `repositório` e seu PAT anterior pode não ter o escopo `write:packages`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  ```
  {% endraw %}
5. Faça push da sua imagem re-etiquetada para o {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME:VERSION
  ```

### Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Se tiver um fluxo de trabalho de {% data variables.product.prodname_actions %} que usa uma imagem do Docker do registro Docker do {% data variables.product.prodname_registry %}, você deverá atualizar seu fluxo de trabalho para {% data variables.product.prodname_container_registry %} para permitir acesso anônimo para imagens públicas de contêiner, permissões de acesso refinado e melhor compatibilidade de armazenamento e largura de banda para contêineres.

1. Migre as suas imagens do Docker para o novo {% data variables.product.prodname_container_registry %} em `ghcr.io`. Por exemplo, consulte "[Migrar uma imagem do Docker usando a CLI do Docker](#migrating-a-docker-image-using-the-docker-cli)".

2. No seu arquivo de fluxo de trabalho do {% data variables.product.prodname_actions %}, atualize a URL do pacote de `https://docker.pkg.github.com` para `ghcr.io`.

3. Adicione seu novo token de acesso pessoal (PAT) do {% data variables.product.prodname_container_registry %} como um segredo do GitHub ACtions. {% data variables.product.prodname_github_container_registry %} não é compatível com o uso do `GITHUB_TOKEN` para o seu PAT. Portanto, você deve usar uma variável personalizada diferente, como `CR_PAT`. Para obter mais informações, consulte "[Criar e armazenar segredos encriptados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

4. No seu arquivo de fluxo de trabalho de {% data variables.product.prodname_actions %} atualize a autenticação do PAT substituindo o seu PAT do registro do Docker ({% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}) por uma nova variável para o seu PAT de {% data variables.product.prodname_container_registry %}, como, por exemplo, {% raw %}`${{ secrets.CR_PAT }}`{% endraw %}.

#### Exemplo de fluxo de trabalho atualizado

Se parte de seu fluxo de trabalho acessou uma imagem do Docker hospedada pelo registro Docker dessa forma:

{% raw %}
```yaml
echo ${{ secrets.GITHUB_TOKEN }} | docker login https://docker.pkg.github.com -u $GITHUB_ACTOR --password-stdin
docker pull docker.pkg.github.com/github/octoshift/octoshift:latest
docker build . --tag docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA --cache-from docker.pkg.github.com/github/octoshift/octoshift:latest
docker push docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA
```
{% endraw %}

Você deverá atualizar o seu fluxo de trabalho com a nova URL de {% data variables.product.prodname_container_registry %} e PAT dessa forma:

{% raw %}
```yaml
# new login with new container registry url and PAT
echo ${{ secrets.CR_PAT }} | docker login ghcr.io -u $GITHUB_ACTOR --password-stdin
# new container registry urls added
docker pull ghcr.io/github/octoshift:latest
docker build . --tag ghcr.io/github/octoshift:$GITHUB_SHA --cache-from ghcr.io/github/octoshift:latest
docker push ghcr.io/github/octoshift:$GITHUB_SHA
```
{% endraw %}
