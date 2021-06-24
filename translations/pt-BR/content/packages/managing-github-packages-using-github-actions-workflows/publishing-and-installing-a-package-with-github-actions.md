---
title: Publicar e instalar um pacote no GitHub Actions
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
#### Efetuar a autenticação no {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-beta %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

Para um exemplo de autenticação, consulte "[Efetuar a autenticação com o {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)".

{% endif %}

#### Efetuar a autenticação nos registros do pacote em {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}Se você deseja que o fluxo de trabalho efetue a autenticação em {% data variables.product.prodname_registry %} para acessar um registro de pacotes diferentes do {% data variables.product.prodname_container_registry %} em {% data variables.product.product_name %}, {% else %}Para efetuar a autenticação nos registros de pacotes no {% data variables.product.product_name %},{% endif %} recomendamos usar o `GITHUB_TOKEN` que {% data variables.product.product_name %} cria automaticamente para o seu repositório quando você habilita {% data variables.product.prodname_actions %} em vez de um token de acesso pessoal para autenticação. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}Você deve definir as permissões para este token de acesso no arquivo de fluxo de trabalho para conceder acesso de leitura do escopo do `conteúdo` e acesso de gravação para o escopo dos `pacotes`. {% else %}tem permissões de leitura e gravação para pacotes no repositório em que o fluxo de trabalho é executado. {% endif %}Para bifurcações, o `GITHUB_TOKEN` recebe acesso de leitura para o repositório principal. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Você pode fazer referência ao `GITHUB_TOKEN` no seu arquivo de fluxo de trabalho usando o contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

### Sobre permissões e acesso de pacote para pacotes pertencentes ao repositório

{% note %}

**Observação:** Os pacotes que possuem repositórios incluem RubyGems, npm, Apache Maven, NuGet, Gradle e Docker que usam o namespace `docker.pkg.github.com`.

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

Você também pode ajustar o acesso a contêineres de uma forma mais granular ou ajustar alguns dos comportamentos padrão de permissões. Para obter mais informações, consulte "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

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
      runs-on: ubuntu-latest
      needs: run-npm-test {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
      permissions: 
        contents: read
        packages: write {% endif %}
      steps:
        - name: Checkout
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
              {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
              {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
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
  </tr>
  
  <tr>
  <td>

{% raw %}
```yaml
  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test
```
{% endraw %}
  </td>
  <td>
    Este trabalho publica o pacote. O comando <code>needs: run-npm-test</code> torna essa tarefa dependente do trabalho <code>run-npm-test</code>.
  </td>
  </tr>

  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
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
    Define as permissões concedidas ao <code>GITHUB_TOKEN</code> para as ações deste trabalho.
  </td>
  </tr> {% endif %}
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Log in to GitHub Docker Registry
    uses: docker/login-action@v1
    with:
      registry: {% endraw %}{% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
      username: ${{ github.actor }}
      password: ${{ secrets.GITHUB_TOKEN }}
  ```
{% endraw %}
  </td>
  <td>
    Cria uma nova etapa denominada <code>Iniciar sessão no registro do GitHub Docker</code>, que faz login no registro usando a conta e a senha que publicará os pacotes. Uma vez publicados, os pacotes pertencem à conta definida aqui.
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
    Cria uma nova etapa denominada <code>Build container image</code>. Esta etapa é executada como parte do trabalho <code>build-and-push-image</code>.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
uses: docker/build-push-action@v2
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
push: true
  ```
{% endraw %}
  </td>
  <td>
    Faça push desta imagem para o registro se for construída com sucesso.
  </td>
  </tr>
  <tr>
  <td>

  ```yaml
tags: |
  {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
  {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
  ```
  </td>
  <td>
    Marca o pacote publicado com o ref do git (por exemplo, o nome do branch usado para criar o pacote), bem como o SHA do commit.
  </td>
  </tr>
  </table>

- Este novo fluxo de trabalho será executado automaticamente toda vez que você fizer uma alteração em uma `versão` nomeada do branch no repositório. Você pode visualizar o progresso na aba **Ações**.
- Alguns minutos após a conclusão do fluxo de trabalho, o novo pacote ficará visível no seu repositório. Para encontrar seus pacotes disponíveis, consulte "[Visualizar os pacotes de um repositório](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)".


### Instalar um pacote usando uma ação

Você pode instalar pacotes como parte de seu fluxo de CI usando o {% data variables.product.prodname_actions %}. Por exemplo, você poderia configurar um fluxo de trabalho para que sempre que um desenvolvedor fizesse push do código para um pull request, o fluxo de trabalho resolveria as dependências, fazendo o download e instalando pacotes hospedados pelo {% data variables.product.prodname_registry %}. Em seguida, o fluxo de trabalho pode executar testes de CI que exigem as dependências.

A instalação de pacotes hospedados pelo {% data variables.product.prodname_registry %} através {% data variables.product.prodname_actions %} exige uma configuração mínima ou uma autenticação adicional quando você usa o `GITHUB_TOKEN`.{% if currentVersion == "free-pro-team@latest" %} A transferência de dados também é gratuita quando uma ação instala um pacote. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% if currentVersion == "free-pro-team@latest" %}
### Atualizando um fluxo de trabalho que acessa `ghcr.io`

{% data reusables.package_registry.github-token-security-over-pat %}

O uso do `GITHUB_TOKEN` em vez de um PAT, que inclui o escopo do `repositório` aumenta a segurança do repositório, pois você não precisa usar um PAT de longa duração que oferece acesso desnecessário ao repositório em que o seu fluxo de trabalho é executado. Para obter mais informações sobre as melhores práticas de segurança, consulte "[Enrijecimento de segurança para o GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

1. Acesse a página inicial do seu pacote.
1. Na barra lateral esquerda, clique em **Acesso às ações**. ![Opção "Ações de acesso" no menu à esquerda](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Para garantir que seu pacote de contêiner tenha acesso ao seu fluxo de trabalho, você deve adicionar o repositório em que o fluxo de trabalho é armazenado no contêiner. Clique **Adicionar repositório** e pesquise o repositório que deseja adicionar. ![Botão "Adicionar repositório"](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **Observação:** Adicionar um repositório ao seu contêiner por meio da opção de menu **Acesso às ações** é diferente de conectar seu contêiner a um repositório. Para obter mais informações, consulte "[Garantir o acesso ao fluxo de trabalho para o seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)" "[Conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

  {% endnote %}
3. Opcionalmente, usando o menu suspenso "função", selecione o nível de acesso padrão que você gostaria que o repositório tivesse na imagem do seu contêiner. ![Níveis de acesso permitidos para repositórios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
5. Abra o arquivo do seu fluxo de trabalho. Na linha em que você efetua o login em `ghcr.io`, substitua o seu PAT por {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

Por exemplo, este fluxo de trabalho publica um contêiner do Docker usando {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} para efetuar a autenticação.

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
