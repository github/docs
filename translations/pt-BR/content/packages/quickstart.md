---
title: Inicie rapidamente para o GitHub Packages
intro: 'Pulblique em {% data variables.product.prodname_registry %} com {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: QuickStart
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Neste guia, você criará um fluxo de trabalho de {% data variables.product.prodname_actions %} para testar seu código e, em seguida, publicá-lo em {% data variables.product.prodname_registry %}.

## Publicar o seu pacote

1. Crie um novo repositório em {% data variables.product.prodname_dotcom %}, adicionando o `.gitignore` ao Node. Para obter mais informações, consulte "[Criando um novo repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)."
2. Clone o repositório para a sua máquina local.
    ```shell
    $ git clone https://{% ifversion ghes or ghae %}<em>YOUR-HOSTNAME</em>{% else %}github.com{% endif %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
3. Crie um arquivo `index.js` e adicione um alerta básico que diga "Hello world!"
    {% raw %}
    ```javascript{:copy}
    console.log("Hello, World!");
    ```
    {% endraw %}
4. Inicialize um pacote npm com `npm init`. No assistente de inicialização de pacote, insira seu pacote com o nome: _`@YOUR-USERNAME/YOUR-REPOSITORY`_ e defina o script de teste para `exit 0`. Isto irá gerar um arquivo `package.json` com informações sobre o seu pacote.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...    
    ```
    {% endraw %}
5. Execute o `npm install` para gerar o arquivo `package-lock.json` e, em seguida, faça o commit e push das suas alterações para {% data variables.product.prodname_dotcom %}.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. Crie um diretório `.github/workflows`. Nesse diretório, crie um arquivo denominado `release-package.yml`.
7. Copiar o conteúdo YAML a seguir no arquivo `release-package.yml`{% ifversion ghes or ghae %}, substituindo `YOUR-HOSTNAME` pelo nome da sua empresa{% endif %}.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          packages: write
          contents: read
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 12
              registry-url: {% ifversion ghes or ghae %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. Diga ao NPM quais escopos e registros publicam pacotes usando um dos seguintes métodos:
   - Adicione um arquivo de configuração do NPM para o repositório, criando um arquivo `.npmrc` no diretório raiz com o conteúdo:
      {% raw %}
      ```shell
      <em>@YOUR-USERNAME</em>:registry=https://npm.pkg.github.com
      ```
      {% endraw %}
   - Edite o arquivo `package.json` e especifique a chave `publishConfig`:
      {% raw %}
      ```shell
      "publishConfig": {
        "@<em>YOUR-USERNAME</em>:registry": "https://npm.pkg.github.com"
      }
      ```
      {% endraw %}
9. Faça commit e faça push das suas alterações para {% data variables.product.prodname_dotcom %}.
    ```shell
    $ git add .github/workflows/release-package.yml
    # Also add the file you created or edited in the previous step.
    $ git add <em>.npmrc or package.json</em>
    $ git commit -m "workflow to publish package"
    $ git push
    ```
10.  O fluxo de trabalho que você criou será executado sempre que uma nova versão for criada no seu repositório. Se os testes passarem, o pacote será publicado em {% data variables.product.prodname_registry %}.

    Para testar isso, acesse a guia **Código** no repositório e crie uma nova versão. Para obter mais informações, consulte "[Gerenciando versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)."

## Visualizar o seu pacote publicado

Você pode ver todos os pacotes que você publicou.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

## Instalar um pacote publicado

Agora que você publicou o pacote, você vai querer usá-lo como uma dependência nos seus projetos. Para obter mais informações, consulte "[Trabalhando com o registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)".

## Próximas etapas

O fluxo de trabalho básico que você acabou de adicionar é executado sempre que uma nova versão for criada no seu repositório. Mas este é apenas o início do que você pode fazer com {% data variables.product.prodname_registry %}. Pode publicar o seu pacote em vários registros com um único fluxo de trabalho, acionar o fluxo de trabalho para ser executado em eventos diferentes, como um pull request mesclado, gerenciar contêineres, entre outros.

Combinar {% data variables.product.prodname_registry %} e {% data variables.product.prodname_actions %} pode ajudá-lo a automatizar quase todos os aspectos dos processos de desenvolvimento do seu aplicativo. Pronto para começar? Aqui estão alguns recursos úteis para dar seguir as próximas etapas com {% data variables.product.prodname_registry %} e {% data variables.product.prodname_actions %}:

- "[Aprenda sobre {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" para obter um tutorial aprofundado no GitHub Packages
- "[Aprenda sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para obter um tutorial aprofundado no GitHub Actions
- "[Trabalhando com um registro de {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)" para casos e exemplos de usos específicos
