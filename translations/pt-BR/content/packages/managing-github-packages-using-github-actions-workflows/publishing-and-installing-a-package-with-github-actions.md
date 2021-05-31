---
title: Publishing and installing a package with GitHub Actions
intro: 'É possível configurar um fluxo de trabalho no {% data variables.product.prodname_actions %} para publicar ou instalar automaticamente um pacote do {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Sobre {% data variables.product.prodname_registry %} com {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)".

Você pode estender os recursos de CI e CD do seu repositório publicando ou instalando pacotes como parte do seu fluxo de trabalho.

{% if currentVersion == "free-pro-team@latest" %}
#### Authenticating to the {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-beta %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

Para um exemplo de autenticação, consulte "[Efetuar a autenticação com o {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)".

{% endif %}

#### Efetuar a autenticação nos registros do pacote em {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}Se você deseja que o fluxo de trabalho efetue a autenticação em {% data variables.product.prodname_registry %} para acessar um registro de pacotes diferentes do {% data variables.product.prodname_container_registry %} em {% data variables.product.product_name %}, {% else %}Para efetuar a autenticação nos registros de pacotes no {% data variables.product.product_name %},{% endif %} recomendamos usar o `GITHUB_TOKEN` que {% data variables.product.product_name %} cria automaticamente para o seu repositório quando você habilita {% data variables.product.prodname_actions %} em vez de um token de acesso pessoal para autenticação. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}You should set the permissions for this access token in the workflow file to grant read access for the `contents` scope and write access for the `packages` scope. {% else %}It has read and write permissions for packages in the repository where the workflow runs. {% endif %}For forks, the `GITHUB_TOKEN` is granted read access for the parent repository. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Você pode fazer referência ao `GITHUB_TOKEN` no seu arquivo de fluxo de trabalho usando o contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

### Sobre permissões e acesso de pacote para pacotes pertencentes ao repositório

{% note %}

**Note:** Repository-owned packages include RubyGems, npm, Apache Maven, NuGet, Gradle, and Docker packages that use the package namespace `docker.pkg.github.com`.

{% endnote %}

Quando você habilita o GitHub Actions, o GitHub instala um aplicativo GitHub no repositório. O segredo `GITHUB_TOKEN` é um token de acesso de instalação do aplicativo GitHub. Você pode usar o token de acesso de instalação para efetuar a autenticação em nome do aplicativo GitHub instalado no seu repositório. As permissões do token são restritas ao repositório do fluxo de trabalho. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)".

{% data variables.product.prodname_registry %} permite que você faça push e pull de pacotes por meio do `GITHUB_TOKEN` disponível para um fluxo de trabalho de {% data variables.product.prodname_actions %}.

{% if currentVersion == "free-pro-team@latest" %}
### Sobre permissões e acesso de pacote para {% data variables.product.prodname_container_registry %}

O {% data variables.product.prodname_container_registry %} (`ghcr.io`) permite aos usuários criar e administrar contêineres como recursos independentes no nível da organização. Os contêineres podem pertencer a uma conta de usuário ou organização e você pode personalizar o acesso a cada um dos seus contêineres separadamente das permissões de repositório.

Todos os workflows que acessam o {% data variables.product.prodname_container_registry %} devem usar o `GITHUB_TOKEN` em vez de um token de acesso pessoal. Para obter mais informações sobre as melhores práticas de segurança, consulte "[Enrijecimento de segurança para o GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

### Configurações padrão de permissões e acesso para contêineres modificados por meio de fluxos de trabalho

Ao criar, instalar, modificar ou excluir um contêiner por meio de um fluxo de trabalho, existem algumas configurações padrão de permissão e acesso para garantir que os administradores tenham acesso ao fluxo de trabalho. Você também pode ajustar estas configurações de acesso.

Por exemplo, por padrão, se um fluxo de trabalho cria um contêiner usando o `GITHUB_TOKEN`:
- O contêiner herdará o modelo de visibilidade e permissões do repositório onde o fluxo de trabalho é executado.
- Os administradores do repositório onde o fluxo de trabalho é executado tornam-se os administradores do contêiner depois que o contêiner é criado.

Estes são outros exemplos de como as permissões padrão funcionam para fluxos de trabalho que gerenciam pacotes.

| Tarefa de fluxo de trabalho de {% data variables.product.prodname_actions %} | Acesso e permissões padrão                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Faça o download de um contêiner existente                                    | - Se o contêiner for público, qualquer fluxo de trabalho em execução em qualquer repositório poderá fazer o download do container. <br> - Se o contêiner for interno, todos os fluxos de trabalho em execução em qualquer repositório pertencente à conta corporativa poderão fazer o download do contêiner. Para organizações pertencentes a empresas, você poderá ler qualquer repositório na empresa <br> - Se o contêiner for privado, somente fluxos de trabalho executados em repositórios que recebem permissões de leitura nesse contêiner podem fazer o download do container. <br> |
| Faça o upload de uma nova versão para um contêiner existente                 | - Se o contêiner for privado, interno ou público, somente fluxos de trabalho executados em repositórios que recebem permissões de gravação nesse contêiner podem fazer o upload de novas versões para o container.                                                                                                                                                                                                                                                                                                                                                                                             |
| Excluir um contêiner ou versões de um contêiner                              | - Se o recipiente for privado, interno ou público, somente fluxos de trabalho executados em repositórios que recebem permissão de exclusão pode excluir versões existentes do container.                                                                                                                                                                                                                                                                                                                                                                                                                       |

Você também pode ajustar o acesso a contêineres de uma forma mais granular ou ajustar alguns dos comportamentos padrão de permissões. For more information, see "[Configuring a package’s access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

{% endif %}

### Publicar um pacote usando uma ação

Você pode usar {% data variables.product.prodname_actions %} para publicar automaticamente pacotes como parte do fluxo de integração contínua (CI). Esta abordagem da implantação contínua (CD) permite que você automatize a criação de novas versões do pacote, se o código atender aos seus padrões de qualidade. Por exemplo, você pode criar um fluxo de trabalho que executa testes CI toda vez que um desenvolvedor faz push do código para um branch específico. Se os testes passarem, o fluxo de trabalho poderá publicar uma nova versão do pacote em {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

O exemplo a seguir demonstra como você pode usar {% data variables.product.prodname_actions %} para criar e testar seu aplicativo e, em seguida, criar automaticamente uma imagem do Docker e publicá-la em {% data variables.product.prodname_registry %}:

- Crie um novo arquivo de fluxo de trabalho no repositório (como `.github/workflows/deploy-image.yml`) e adicione o YAML a seguir:
  ```yaml{:copy}
  name: Create and publish a package
  on:
    push:
      branches: ['release']
  jobs:
    run-npm-build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: npm install and build webpack
          run: |
            npm install
            npm run build
        - uses: actions/upload-artifact@main
          with:
            name: webpack artifacts
            path: public/

    run-npm-test:
      runs-on: ubuntu-latest
      needs: run-npm-build
      strategy:
        matrix:
          os: [ubuntu-latest]
          node-version: [12.x, 14.x]
      steps: {% raw %}
        - uses: actions/checkout@v2
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: ${{ matrix.node-version }}{% endraw %}
        - uses: actions/download-artifact@main
          with:
            name: webpack artifacts
            path: public
        - name: npm install, and test
          run: |
            npm install
            npm test
          env:
            CI: true

    build-and-push-image:
      runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
      permissions: 
        contents: read
        packages: write {% endif %}
      needs: run-npm-test
      steps:
        - name: Checkout
          uses: actions/checkout@v2
        - name: Build container image
          uses: docker/build-push-action@v1
          with: {% raw %}
            username: ${{ github.actor }}
            password: ${{ secrets.GITHUB_TOKEN }}
            registry: {% endraw %}{% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
            repository: ${{ github.repository }}/octo-image {% endraw %}
            tag_with_sha: true
            tag_with_ref: true 
  ```

  As configurações relevantes são explicadas na seguinte tabela: <table>
  <tr>
  <td>

{% raw %}
```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
  </td>
  <td>
    Configura o fluxo de trabalho <code>Criar e publicar um pacote</code> para ser executado toda vez que uma alteração é enviada para o branch denominado <code>versão</code>.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/
  ```
  {% endraw %}
  </td>
  <td>
    Este trabalho instala o NPM e o usa para criar o aplicativo.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [14.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true
  ```
{% endraw %}
  </td>
  <td>
    Este trabalho usa <code>teste do npm</code> para testar o código. O comando <code>needs: run-npm-build</code> torna esse trabalho dependente do trabalho <code>run-npm-build</code>.
  </td>
  </tr> {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
  <tr>
  <td>

{% raw %}
  ```yaml
  permissions: 
    contents: read
    packages: write 
  ```
{% endraw %}
  </td>
  <td>
    Sets the permissions granted to the <code>GITHUB_TOKEN</code> for the actions in this job.
  </td>
  </tr> {% endif %}
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Build container image
  ```
{% endraw %}
  </td>
  <td>
    Cria uma nova etapa denominada <code>Build container image</code>. Esta etapa é executada como parte do trabalho <code>build-and-push-image</code>. O comando <code>needs: run-npm-test</code> torna essa tarefa dependente do trabalho <code>run-npm-test</code>.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
uses: docker/build-push-action@v1
  ```
{% endraw %}
  </td>
  <td>
    Usa a ação <code>build-push-action</code> do Docker para criar a imagem com base no <code>arquivo Docker</code> do seu repositório. Se a criação for bem-sucedida, ela faz p push da imagem para {% data variables.product.prodname_registry %}.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
with:
  ```
{% endraw %}
  </td>
  <td>
    Envia os parâmetros necessários para a ação </code>build-push-action<code>. Isto é definido nas linhas subsequentes.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
username: ${{ github.actor }}
  ```
{% endraw %}
  </td>
  <td>
    Define a conta de usuário que publicará os pacotes. Uma vez publicados, os pacotes pertencem à conta definida aqui.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
password: ${{ secrets.GITHUB_TOKEN }}
  ```
{% endraw %}
  </td>
  <td>
    Define a senha usada para acessar {% data variables.product.prodname_registry %}.
  </td>
  </tr>
  <tr>
  <td>

  ```yaml
registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
  ```
  </td>
  <td>
    Define o registro que hospedará os pacotes resultantes. This example uses {% data variables.product.prodname_registry %}.{% if currentVersion == "github-ae@latest" %} Replace <code>YOUR-HOSTNAME</code> with the name of your enterprise.{% endif %} {% if currentVersion == "free-pro-team@latest" %} If you're using the {% data variables.product.prodname_container_registry %}, then use <code>ghcr.io</code> as the hostname.{% endif %}
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
repository: ${{ github.repository }}/octo-image
  ```
{% endraw %}
  </td>
  <td>
    Define qual repositório hospedará o pacote resultante e define o nome do pacote publicado. Substitui <code>octo-image</code> pelo nome que você deseja para o seu pacote.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
tag_with_sha: true
  ```
{% endraw %}
  </td>
  <td>
    Marca o pacote publicado com os primeiros sete caracteres do SHA do commit. Por exemplo, <code>sha-2f2d842</code>.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
tag_with_ref: true
  ```
{% endraw %}
  </td>
  <td>
    Tags o pacote publicado com a referência do Git. Este pode ser o nome do branch usado para criar o pacote.
  </td>
  </tr>
  </table>

- Este novo fluxo de trabalho será executado automaticamente toda vez que você fizer uma alteração em uma `versão` nomeada do branch no repositório. Você pode visualizar o progresso na aba **Ações**.
- Alguns minutos após a conclusão do fluxo de trabalho, o novo pacote ficará visível no seu repositório. Para encontrar seus pacotes disponíveis, consulte "[Visualizar os pacotes de um repositório](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)".


### Instalar um pacote usando uma ação

Você pode instalar pacotes como parte de seu fluxo de CI usando o {% data variables.product.prodname_actions %}. Por exemplo, você poderia configurar um fluxo de trabalho para que sempre que um desenvolvedor fizesse push do código para um pull request, o fluxo de trabalho resolveria as dependências, fazendo o download e instalando pacotes hospedados pelo {% data variables.product.prodname_registry %}. Em seguida, o fluxo de trabalho pode executar testes de CI que exigem as dependências.

Installing packages hosted by {% data variables.product.prodname_registry %} through {% data variables.product.prodname_actions %} requires minimal configuration or additional authentication when you use the `GITHUB_TOKEN`.{% if currentVersion == "free-pro-team@latest" %} Data transfer is also free when an action installs a package. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% if currentVersion == "free-pro-team@latest" %}
### Upgrading a workflow that accesses `ghcr.io`

{% data reusables.package_registry.github-token-security-over-pat %}

Using the `GITHUB_TOKEN` instead of a PAT, which includes the `repo` scope, increases the security of your repository as you don't need to use a long-lived PAT that offers unnecessary access to the repository where your workflow is run. Para obter mais informações sobre as melhores práticas de segurança, consulte "[Enrijecimento de segurança para o GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

1. Navigate to your package landing page.
1. In the left sidebar, click **Actions access**. !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. To ensure your container package has access to your workflow, you must add the repository where the workflow is stored to your container. Click **Add repository** and search for the repository you want to add. !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **Note:** Adding a repository to your container through the **Actions access** menu option is different than connecting your container to a repository. For more information, see "[Ensuring workflow access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)" and "[Connecting a repository to a package](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

  {% endnote %}
3. Optionally, using the "role" drop-down menu, select the default access level that you'd like the repository to have to your container image. ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
5. Abra o arquivo do seu fluxo de trabalho. On the line where you login to `ghcr.io`, replace your PAT with {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

For example, this workflow publishes a Docker container using {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} to authenticate.

```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}

    {% raw %}steps:
      - uses: actions/checkout@v2

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log into registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/${{ github.repository_owner }}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION{% endraw %}
```

{% endif %}
