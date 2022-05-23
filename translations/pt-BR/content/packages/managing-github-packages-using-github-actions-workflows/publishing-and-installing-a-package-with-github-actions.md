---
title: Publicar e instalar um pacote no GitHub Actions
intro: 'É possível configurar um fluxo de trabalho no {% data variables.product.prodname_actions %} para publicar ou instalar automaticamente um pacote do {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Publicar & instalar com ações
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## Sobre {% data variables.product.prodname_registry %} com {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)".

Você pode estender os recursos de CI e CD do seu repositório publicando ou instalando pacotes como parte do seu fluxo de trabalho.

{% ifversion fpt or ghec %}
### Efetuar a autenticação no {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% endif %}

### Efetuar a autenticação nos registros do pacote em {% data variables.product.prodname_dotcom %}

{% ifversion fpt or ghec %}Se você quiser que o seu fluxo de trabalho seja autenticado em {% data variables.product.prodname_registry %} para acessar o registro de um pacote diferente de {% data variables.product.prodname_container_registry %} em {% data variables.product.product_location %}, {% else %}Para efetuar a autenticação em registros de pacote em {% data variables.product.product_name %},{% endif %}, recomendamos o uso de `GITHUB_TOKEN` que {% data variables.product.product_name %} cria automaticamente para o seu repositório quando você habilita {% data variables.product.prodname_actions %} em vez de um token de acesso pessoal para autenticação. {% ifversion fpt or ghes > 3.1 or ghae or ghec %}Você deverá definir as permissões para este token de acesso no arquivo do fluxo de trabalho para conceder acesso de leitura para o `conteúdo` escopo e acesso de gravação para o escopo `pacotes`. {% else %}tem permissões de leitura e gravação para pacotes no repositório em que o fluxo de trabalho é executado. {% endif %}Para bifurcações, o `GITHUB_TOKEN` recebe acesso de leitura para o repositório principal. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Você pode fazer referência ao `GITHUB_TOKEN` no seu arquivo de fluxo de trabalho usando o contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

## Sobre permissões e acesso de pacote para pacotes pertencentes ao repositório

{% note %}

**Observação:** Os pacotes que possuem repositórios incluem RubyGems, npm, Apache Maven, NuGet, {% ifversion fpt or ghec %}e Gradle. {% else %}Os pacotes do Gradle e Docker que usam o pacote namespace `docker.pkg.github.com`.{% endif %}

{% endnote %}

Quando você habilita o GitHub Actions, o GitHub instala um aplicativo GitHub no repositório. O segredo `GITHUB_TOKEN` é um token de acesso de instalação do aplicativo GitHub. Você pode usar o token de acesso de instalação para efetuar a autenticação em nome do aplicativo GitHub instalado no seu repositório. As permissões do token são restritas ao repositório do fluxo de trabalho. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)".

{% data variables.product.prodname_registry %} permite que você faça push e pull de pacotes por meio do `GITHUB_TOKEN` disponível para um fluxo de trabalho de {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
## Sobre permissões e acesso de pacote para {% data variables.product.prodname_container_registry %}

O {% data variables.product.prodname_container_registry %} (`ghcr.io`) permite aos usuários criar e administrar contêineres como recursos independentes no nível da organização. Os contêineres podem pertencer a uma conta pessoal ou organização e você pode personalizar o acesso a cada um dos seus contêineres separadamente das permissões de repositório.

Todos os workflows que acessam o {% data variables.product.prodname_container_registry %} devem usar o `GITHUB_TOKEN` em vez de um token de acesso pessoal. Para obter mais informações sobre as melhores práticas de segurança, consulte "[Enrijecimento de segurança para o GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

## Configurações padrão de permissões e acesso para contêineres modificados por meio de fluxos de trabalho

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

## Publicar um pacote usando uma ação

Você pode usar {% data variables.product.prodname_actions %} para publicar automaticamente pacotes como parte do fluxo de integração contínua (CI). Esta abordagem da implantação contínua (CD) permite que você automatize a criação de novas versões do pacote, se o código atender aos seus padrões de qualidade. Por exemplo, você pode criar um fluxo de trabalho que executa testes CI toda vez que um desenvolvedor faz push do código para um branch específico. Se os testes passarem, o fluxo de trabalho poderá publicar uma nova versão do pacote em {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

O exemplo a seguir demonstra como você pode usar {% data variables.product.prodname_actions %} para criar {% ifversion not fpt or ghec %}e testar {% endif %} seu aplicativo e, em seguida, criar automaticamente uma imagem Docker e publicá-la em {% data variables.product.prodname_registry %}.

Crie um novo arquivo de fluxo de trabalho no repositório (como `.github/workflows/deploy-image.yml`) e adicione o YAML a seguir:

{% ifversion fpt or ghec %}
{% data reusables.package_registry.publish-docker-image %}

{% else %}
```yaml{:copy}
name: Create and publish a Docker image

{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
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
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
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
    needs: run-npm-test {% ifversion ghes > 3.1 or ghae %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
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
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```
{% endif %}

As configurações relevantes são explicadas na seguinte tabela. Para obter detalhes completos sobre cada elemento em um fluxo de trabalho, consulte "[sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".

<table>
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
  Configura o fluxo de trabalho <code>Criar e publicar uma imagem Docker</code> para ser executado toda vez que uma alteração é enviada para o branch denominado <code>versão</code>.
</td>
</tr>

{% ifversion fpt or ghec %}

<tr>
<td>
{% raw %}
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```
{% endraw %}
</td>
<td>
  Define duas variáveis de ambiente personalizadas para o fluxo de trabalho. Estes são usados para o domínio de {% data variables.product.prodname_container_registry %} e um nome para a imagem Docker que esta fluxo de trabalho cria.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
```
{% endraw %}
</td>
<td>
  Há um único trabalho neste fluxo de trabalho. Ele está configurado para ser executado na última versão disponível do Ubuntu.
</td>
</tr>

{% else %}

<tr>
<td>

```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: webpack artifacts
        path: public/
```

</td>
<td>
  Este trabalho instala o NPM e o usa para criar o aplicativo.
</td>
</tr>

<tr>
<td>

```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - uses: {% data reusables.actions.action-download-artifact %}
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

{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
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
</tr> 
{% endif %}

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
- name: Log in to the Container registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: ${{ env.REGISTRY }}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
  Cria uma etapa denominada <code>Efetue o login em {% data variables.product.prodname_container_registry %}</code>, que faz login no registro usando a conta e a senha que publicará os pacotes. Uma vez publicados, os pacotes pertencem à conta definida aqui.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
  Esta etapa usa <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code> para extrair tags e etiquetas que serão aplicadas à imagem especificada. O <code>id</code> "meta" permite que a saída desta etapa seja referenciada em um passo subsequente. O valor das imagens de <code></code> fornece o nome da base para as tags e etiquetas.
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %}
```yaml
- name: Log in to GitHub Docker Registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: {% endraw %}{% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
  Cria uma nova etapa denominada <code>Iniciar sessão no registro do GitHub Docker</code>, que faz login no registro usando a conta e a senha que publicará os pacotes. Uma vez publicados, os pacotes pertencem à conta definida aqui.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %}
```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
  Cria uma nova etapa denominada <code>Criar e fazer push da imagem do Docker</code>. Esta etapa é executada como parte do trabalho <code>build-and-push-image</code>.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
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
  Envia os parâmetros necessários para a ação </code>build-push-action<code>. Estas são definidas nas linhas subsequentes.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
context: .
```
{% endraw %}
</td>
<td>
  Define o contexto da criação como o conjunto de arquivos localizados no caminho especificado. Para obter mais informações, consulte "<a href="https://github.com/docker/build-push-action#usage">Uso</a>".
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %}
```yaml
push: true
```
{% endraw %}
</td>
<td>
  Faz push desta imagem para o registro se for construída com sucesso.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
tags: ${{ steps.meta.outputs.tags }}
labels: ${{ steps.meta.outputs.labels }}
```
{% endraw %}
</td>
<td>
  Adiciona as tags e etiquetas extraídos na etapa "meta".
</td>
</tr>

{% else %}
<tr>
<td>
{% ifversion ghae %}
{% raw %}
```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %}
{% else %}
{% raw %}
```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %}
{% endif %}
</td>
<td>
  Marca a imagem com o SHA do commit que acionou o fluxo de trabalho.
</td>
</tr>
{% endif %}

</table>

Este novo fluxo de trabalho será executado automaticamente toda vez que você fizer uma alteração em uma `versão` nomeada do branch no repositório. Você pode visualizar o progresso na aba **Ações**.

Alguns minutos após a conclusão do fluxo de trabalho, o novo pacote ficará visível no seu repositório. Para encontrar seus pacotes disponíveis, consulte "[Visualizar os pacotes de um repositório](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)".


## Instalar um pacote usando uma ação

Você pode instalar pacotes como parte de seu fluxo de CI usando o {% data variables.product.prodname_actions %}. Por exemplo, você poderia configurar um fluxo de trabalho para que sempre que um desenvolvedor fizesse push do código para um pull request, o fluxo de trabalho resolveria as dependências, fazendo o download e instalando pacotes hospedados pelo {% data variables.product.prodname_registry %}. Em seguida, o fluxo de trabalho pode executar testes de CI que exigem as dependências.

A instalação de pacotes hospedados pelo {% data variables.product.prodname_registry %} através {% data variables.product.prodname_actions %} exige uma configuração mínima ou uma autenticação adicional quando você usa o `GITHUB_TOKEN`.{% ifversion fpt or ghec %} A transferência de dados também é gratuita quando uma ação instala um pacote. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion fpt or ghec %}
## Atualizando um fluxo de trabalho que acessa `ghcr.io`

O {% data variables.product.prodname_container_registry %} é compatível com `GITHUB_TOKEN` para autenticação fácil e segura nos seus fluxos de trabalho. Se seu fluxo de trabalho estiver usando um token de acesso pessoal (PAT) para efetuar a autenticação com `ghcr.io`, é altamente recomendável atualizar o seu fluxo de trabalho para usar o `GITHUB_TOKEN`.

Para obter mais informações sobre o `GITHUB_TOKEN`, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

O uso do `GITHUB_TOKEN` em vez de um PAT, que inclui o escopo do `repositório` aumenta a segurança do repositório, pois você não precisa usar um PAT de longa duração que oferece acesso desnecessário ao repositório em que o seu fluxo de trabalho é executado. Para obter mais informações sobre as melhores práticas de segurança, consulte "[Enrijecimento de segurança para o GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)".

1. Acesse a página inicial do seu pacote.
1. Na barra lateral esquerda, clique em **Acesso às ações**. ![Opção "Ações de acesso" no menu à esquerda](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. Para garantir que seu pacote de contêiner tenha acesso ao seu fluxo de trabalho, você deve adicionar o repositório em que o fluxo de trabalho é armazenado no contêiner. Clique **Adicionar repositório** e pesquise o repositório que deseja adicionar. ![Botão "Adicionar repositório"](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **Observação:** Adicionar um repositório ao seu contêiner por meio da opção de menu **Acesso às ações** é diferente de conectar seu contêiner a um repositório. Para obter mais informações, consulte "[Garantir o acesso ao fluxo de trabalho para o seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)" "[Conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

  {% endnote %}
1. Opcionalmente, usando o menu suspenso "função", selecione o nível de acesso padrão que você gostaria que o repositório tivesse na imagem do seu contêiner. ![Níveis de acesso permitidos para repositórios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. Abra o arquivo do seu fluxo de trabalho. Na linha em que você efetua o login em `ghcr.io`, substitua seu PAT por {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

Por exemplo, este fluxo de trabalho publica um imagem do Docker usando {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} para efetuar a autenticação.

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
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
    permissions:
      packages: write
      contents: read{% endif %}

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
