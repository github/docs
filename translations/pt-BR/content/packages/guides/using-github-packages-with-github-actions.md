---
title: Usar o GitHub Packages com o GitHub Actions
intro: 'É possível configurar um fluxo de trabalho no {% data variables.product.prodname_actions %} para publicar ou instalar automaticamente um pacote do {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Sobre {% data variables.product.prodname_registry %} com {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)".

Você pode estender os recursos de CI e CD do seu repositório publicando ou instalando pacotes como parte do seu fluxo de trabalho.

{% if currentVersion == "free-pro-team@latest" %}
#### Autenticar-se no {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-beta %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

Para um exemplo de autenticação, consulte "[Efetuar a autenticação com o {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)".

{% endif %}

#### Efetuar a autenticação nos registros do pacote em {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}Se você deseja que o fluxo de trabalho efetue a autenticação em {% data variables.product.prodname_registry %} para acessar um registro de pacotes diferentes do {% data variables.product.prodname_container_registry %} em {% data variables.product.product_name %}, {% else %}Para efetuar a autenticação nos registros de pacotes no {% data variables.product.product_name %},{% endif %} recomendamos usar o `GITHUB_TOKEN` que {% data variables.product.product_name %} cria automaticamente para o seu repositório quando você habilita {% data variables.product.prodname_actions %} em vez de um token de acesso pessoal para autenticação. O `GITHUB_TOKEN` tem escopos `read:packages` e `write:packages` do repositório atual. Para bifurcações, o token também tem o escopo `read:packages` para o repositório principal.

Você pode fazer referência ao `GITHUB_TOKEN` no seu arquivo de fluxo de trabalho usando o contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

### Publicar um pacote usando uma ação

You can use {% data variables.product.prodname_actions %} to automatically publish packages as part of your continuous integration (CI) flow. This approach to continuous deployment (CD) allows you to automate the creation of new package versions, if the code meets your quality standards. For example, you could create a workflow that runs CI tests every time a developer pushes code to a particular branch. If the tests pass, the workflow can publish a new package version to {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

The following example demonstrates how you can use {% data variables.product.prodname_actions %} to build and test your app, and then automatically create a Docker image and publish it to {% data variables.product.prodname_registry %}:

- Create a new workflow file in your repository (such as `.github/workflows/deploy-image.yml`), and add the following YAML:
  {% raw %}
  ```
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

    build-and-push-image:
      runs-on: ubuntu-latest
      needs: run-npm-test
      steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Build container image
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: ${{ github.repository }}/octo-image
          tag_with_sha: true
          tag_with_ref: true
  ```
  {% endraw %}

  The relevant settings are explained in the following table: <table>
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
    Configures the <code>Create and publish a package</code> workflow to run every time a change is pushed to the branch called <code>release</code>.
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
    This job installs NPM and uses it to build the app.
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
    This job uses <code>npm test</code> to test the code. The <code>needs: run-npm-build</code> command makes this job dependent on the <code>run-npm-build</code> job.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Build container image
  ```
{% endraw %}
  </td>
  <td>
    Creates a new step called <code>Build container image</code>. This step runs as part of the <code>build-and-push-image</code> job. The <code>needs: run-npm-test</code> command makes this job dependent on the <code>run-npm-test</code> job.
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
    Uses the Docker <code>build-push-action</code> action to build the image, based on your repository's <code>Dockerfile</code>. If the build succeeds, it pushes the image to {% data variables.product.prodname_registry %}.
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
    Sends the required parameters to the <code>build-push-action</code> action. This are defined in the subsequent lines.
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
    Defines the user account that will publish the packages. Once published, the packages are owned by the account defined here.
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
    Defines the password that is used to access {% data variables.product.prodname_registry %}.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
registry: docker.pkg.github.com
  ```
{% endraw %}
  </td>
  <td>
    Defines the registry that will host the resulting packages. This example uses {% data variables.product.prodname_registry %}.
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
    Defines which repository will host the resulting package, and sets the name of the published package. Replace <code>octo-image</code> with the name you want for your package.
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
    Tags the published package with the first seven characters of the commit's SHA. For example, <code>sha-2f2d842</code>.
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
    Tags the published package with the git ref. This can be the name of the branch used to create the package.
  </td>
  </tr>
  </table>

- This new workflow will run automatically every time you push a change to the repository. You can view the progress in the **Actions** tab.
- A few minutes after the workflow has completed, the new package will visible in your repository. To find your available packages, see "[Viewing a repository's packages](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)."

### Instalar um pacote usando uma ação

Você pode instalar pacotes como parte de seu fluxo de CI usando o {% data variables.product.prodname_actions %}. Por exemplo, você poderia configurar um fluxo de trabalho para que sempre que um desenvolvedor fizesse push do código para um pull request, o fluxo de trabalho resolveria as dependências, fazendo o download e instalando pacotes hospedados pelo {% data variables.product.prodname_registry %}. Em seguida, o fluxo de trabalho pode executar testes de CI que exigem as dependências.

Instalar pacotes hospedados pelo {% data variables.product.prodname_registry %} através de {% data variables.product.prodname_actions %} exige uma configuração mínima ou autenticação adicional ao usar `GITHUB_TOKEN`.{% if currentVersion == "free-pro-team@latest" %} A transferência de dados também é grátis quando uma ação instala um pacote. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
`GITHUB_TOKEN` não pode instalar pacotes a partir de qualquer repositório privado além do repositório onde a ação é executada.  Atualmente, você não pode usar `GITHUB_TOKEN` para efetuar a autenticação
{% data variables.product.prodname_github_container_registry %}.
{% endif %}

{% data reusables.package_registry.actions-configuration %}
