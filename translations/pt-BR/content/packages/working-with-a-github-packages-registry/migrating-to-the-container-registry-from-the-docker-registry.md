---
title: Migrating to the Container registry from the Docker registry
intro: 'If you''ve used the GitHub Packages Docker registry to store Docker images, you can migrate your images to the new {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  free-pro-team: '*'
---

### Key differences between the {% data variables.product.prodname_container_registry %} and the Docker registry

{% data reusables.package_registry.container-registry-beta %}

The {% data variables.product.prodname_container_registry %} supersedes the existing {% data variables.product.prodname_registry %} Docker registry and is optimized to support some of the unique needs of containers.

With the {% data variables.product.prodname_container_registry %} you can:
- Armazenar imagens de contêiner na sua conta de organização e usuário, em vez de um repositório.
- Set granular permissions and visibility independently of repository permissions and visibility.
- Acessar imagens de contêineres públicos anonimamente.

|                      | Docker registry                                                                                                                                                                                                                                         | {% data variables.product.prodname_container_registry %}
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Locais de hospedagem | You can host multiple Docker images in one repository.                                                                                                                                                                                                  | Você pode hospedar várias imagens de contêiner em uma organização ou conta de usuário.                                                                                                                    |
| Permissões           | Each image inherits the permissions of the repository where the image is hosted. Anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. | Para cada imagem de container, você pode escolher o nível de acesso que os outros têm. As permissões para acesso a imagens do contêiner são separadas da sua organização e das permissões do repositório. |
 Visibility          | {% data reusables.package_registry.public-or-private-packages %} | You can set the visibility of each of your container images. Uma imagem privada de contêiner só é visível para pessoas e equipes às quais é fornecido acesso na sua organização. Qualquer pessoa pode ver uma imagem pública de contêiner. | Anonymous access    | N/A | You can access public container images anonymously. Foreign layer support | Doesn't support foreign layers, such as Windows images. | Supports foreign layers, such as Windows images.

### Alterações de cobrança

During the {% data variables.product.prodname_container_registry %} beta, both the new {% data variables.product.prodname_container_registry %} and the existing {% data variables.product.prodname_registry %} Docker registry are free of charge. For more information about the {% data variables.product.prodname_registry %} Docker registry, see "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)."

After the beta, the same billing and storage rates that other {% data variables.product.prodname_registry %} registries use will apply to the {% data variables.product.prodname_container_registry %}. Para obter mais informações, consulte "[Sobre a cobrança para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

### Alterações de domínio

O domínio para o {% data variables.product.prodname_container_registry %} é `ghcr.io`.

| Registro                                                          | Exemplo de URL                                      |
| ----------------------------------------------------------------- | --------------------------------------------------- |
| Registro Docker de {% data variables.product.prodname_registry %} | `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME` |
| {% data variables.product.prodname_container_registry %}        | `ghcr.io/OWNER/IMAGE_NAME`                          |

### Authenticating to the {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.feature-preview-for-container-registry %}

Você deverá efetuar a autenticação no {% data variables.product.prodname_container_registry %} com a URL de base `ghcr.io`. Recomendamos criar um novo token de acesso para usar o {% data variables.product.prodname_container_registry %}.

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

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

{% data reusables.package_registry.feature-preview-for-container-registry %}

Se tiver um fluxo de trabalho de {% data variables.product.prodname_actions %} que usa uma imagem do Docker do registro Docker do {% data variables.product.prodname_registry %}, você deverá atualizar seu fluxo de trabalho para {% data variables.product.prodname_container_registry %} para permitir acesso anônimo para imagens públicas de contêiner, permissões de acesso refinado e melhor compatibilidade de armazenamento e largura de banda para contêineres.

1. Migre as suas imagens do Docker para o novo {% data variables.product.prodname_container_registry %} em `ghcr.io`. Por exemplo, consulte "[Migrar uma imagem do Docker usando a CLI do Docker](#migrating-a-docker-image-using-the-docker-cli)".

2. No seu arquivo de fluxo de trabalho do {% data variables.product.prodname_actions %}, atualize a URL do pacote de `https://docker.pkg.github.com` para `ghcr.io`.

3. Adicione seu novo token de acesso de autenticação pessoal (PAT) de {% data variables.product.prodname_container_registry %} como um segredo do GitHub Action. The {% data variables.product.prodname_container_registry %} does not support using `GITHUB_TOKEN` for your PAT so you must use a different custom variable, such as `CR_PAT`. Para obter mais informações, consulte "[Criar e armazenar segredos encriptados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

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
