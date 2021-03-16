---
title: Inicie rapidamente para o GitHub Packages
intro: 'Publicar em {% data variables.product.prodname_registry %} em 5 minutos ou menos com {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

### Introdução

Você só precisa de um repositório de {% data variables.product.prodname_dotcom %} existente para publicar um pacote em {% data variables.product.prodname_registry %}. Neste guia, você criará um fluxo de trabalho de {% data variables.product.prodname_actions %} para testar seu código e, em seguida, publicá-lo em {% data variables.product.prodname_registry %}. Sinta-se à vontade para criar um novo repositório para esse guia de início rápido. Você pode usá-lo para testar este e os fluxos de trabalho futuros de {% data variables.product.prodname_actions %}.

### Publicar o seu pacote

1. Crie um novo repositório em {% data variables.product.prodname_dotcom %}, adicionando o `.gitignore` ao Node. Crie um repositório privado, se quiser excluir este pacote mais tarde. Os pacotes públicos não podem ser excluídos. Para obter mais informações, consulte "[Criar um novo repositório](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)."
2. Clone o repositório para a sua máquina local.
    {% raw %}
    ```shell
    $ git clone https://github.com/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
    {% endraw %}
3. Crie um arquivo `index.js` e adicione um alerta básico que diga "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. Inicializa um pacote de npm. No assistente de inicialização de pacote, insira seu pacote com o nome: _`@YOUR-USERNAME/YOUR-REPOSITORY`_ e defina o script de teste para `exit 0` se você não tiver testes. Faça o commit das alterações e envie-as por push para
{% data variables.product.prodname_dotcom %}.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...

    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
    {% endraw %}
5. Do seu repositório no {% data variables.product.prodname_dotcom %}, crie um novo arquivo no diretório `.github/workflows` denominado `release-package.yml`. Para obter mais informações, consulte "[Criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".
6. Copie o seguinte conteúdo do YAML para o arquivo `release-package.yml`.
    {% raw %}
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: https://npm.pkg.github.com/
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    ```
    {% endraw %}
7. Vá até o final da página e selecione **Criar um novo branch para este commit e iniciar um pull request**. Em seguida, para criar um pull request, clique em **Propor novo arquivo**.
8. **Faça merge** do pull request.
9. Acesse a aba **Código** e crie uma nova versão para testar o fluxo de trabalho. Para obter mais informações, consulte "[Gerenciando versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)."

A criação uma nova versão no seu repositório aciona o fluxo de trabalho para construir e testar seu código. Se os testes passarem, o pacote será publicado em {% data variables.product.prodname_registry %}.

### Visualizar o seu pacote publicado

Os pacotes são publicados no nível de repositório. Você pode visualizar todos os pacotes em um repositório e procurar um pacote específico.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### Instalar um pacote publicado

Agora que você publicou o pacote, você vai querer usá-lo como uma dependência nos seus projetos. Para obter mais informações, consulte "[Configurar npm para uso com o {% data variables.product.prodname_registry %}](/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package)".

### Próximas etapas

O fluxo de trabalho básico que você acabou de adicionar é executado sempre que uma nova versão for criada no seu repositório. Mas este é apenas o início do que você pode fazer com {% data variables.product.prodname_registry %}. Pode publicar o seu pacote em vários registros com um único fluxo de trabalho, acionar o fluxo de trabalho para ser executado em eventos diferentes, como um pull request mesclado, gerenciar contêineres, entre outros.

Combinar {% data variables.product.prodname_registry %} e {% data variables.product.prodname_actions %} pode ajudá-lo a automatizar quase todos os aspectos dos processos de desenvolvimento do seu aplicativo. Pronto para começar? Aqui estão alguns recursos úteis para dar seguir as próximas etapas com {% data variables.product.prodname_registry %} e {% data variables.product.prodname_actions %}:

- "[Aprenda sobre {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" para obter um tutorial aprofundado no GitHub Packages
- "[Aprenda sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para obter um tutorial aprofundado no GitHub Actions
- "[Guias](/packages/guides)" para casos e exemplos específicos de uso
