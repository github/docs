---
title: Publicar pacotes do Node.js
intro: Você pode publicar pacotes do Node.js em um registro como parte do seu fluxo de trabalho de integração contínua (CI).
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Este guia mostra como criar um fluxo de trabalho que publica pacotes do Node.js em {% data variables.product.prodname_registry %} e nos registros npm após os testes de integração contínua (CI) serem aprovados. Com um único fluxo de trabalho, você pode publicar pacotes em um único registro ou em vários registros.

### Pré-requisitos

Recomendamos que você tenha um entendimento básico das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obter mais informações sobre a criação de um fluxo de trabalho de CI para seu projeto Node.js, consulte "[Usando Node.js com {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)".

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Configurar o npm para uso com o {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)"
- "[Variáveis de ambiente](/actions/reference/environment-variables)"
- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"

### Sobre a configuração do pacote

 Os campos `nome` e `versão` no arquivo *package.json* cria um identificador único que os registros usam para vincular seu pacote a um registro. Você pode adicionar um resumo para página de listagem do pacote ao incluir um campo `descrição` no arquivo *package.json*. Para obter mais informações, consulte "[Criando um pacote package.json](https://docs.npmjs.com/creating-a-package-json-file)" e "[Criando módulos Node.js](https://docs.npmjs.com/creating-node-js-modules)" na documentação do npm.

Quando um arquivo *.npmrc* local existe e tem um valor de `registro` especificado, o comando `publicação do npm` usa o registro configurado no arquivo *.npmrc*. {% data reusables.github-actions.setup-node-intro %}

Você pode especificar a versão do Node.js instalada no executor usando a ação `setup-node`.

Se você adicionar etapas ao seu fluxo de trabalho para configurar os campos `publishConfig` no seu arquivo *package.json*, você não precisará especificar o registry-url usando a ação de `setup-node`. No entanto, você estará limitado à publicação do pacote em um registro. Para obter mais informações, consulte "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" na documentação npm.

### Publicar pacotes no registro npm

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `versão` é acionado com o tipo `criado`. O fluxo de trabalho publica o pacote no registro npm se o teste de CI for aprovado.

Para executar operações autenticadas para o registro npm em seu fluxo de trabalho, você precisará armazenar seu token de autenticação npm como um segredo. Por exemplo, crie um repositório secreto denominado `NPM_TOKEN`. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

Por padrão, o npm usa o campo `nome` do arquivo *package.json* para determinar o registro do npm. Ao publicar em um namespace global, você precisa incluir apenas o nome do pacote. Por exemplo, você publicaria um pacote denominado `npm-hello-world-test` em `https://www.npmjs.com/package/npm-hello-world-test`.

Se você estiver publicando um pacote que inclui um prefixo de escopo, inclua o escopo no nome do arquivo *package.json*. Por exemplo, se o prefixo de escopo do npm é octocat e o nome do pacote é hello-world, o `nome` no seu arquivo *package.json* deverá ser `@octocat/hello-world`. Se seu pacote npm usar um prefixo de escopo e for público, você deverá usar a opção `npm publish --access public`. Essa é uma opção que o npm requer para impedir que alguém publique um pacote privado de forma não intencional.

Este exemplo armazena o segredo `NPM_TOKEN` na variável de ambiente `NODE_AUTH_TOKEN`. Quando a ação `setup-node` cria um arquivo *.npmrc*, ela faz referência ao token da variável de ambiente `NODE_AUTH_TOKEN`.

{% raw %}
```yaml
nome: Pacote Node.js
em:
  versão:
    tipos: [created]
trabalhos:
  criar:
    runs-on: ubuntu-latest
    etapas:
    - usa: actions/checkout@v2
    # Configura o arquivo .npmrc a ser publicado no npm
    - usa: actions/setup-node@v1
      com:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
    - executar: npm install
    - executar: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

No exemplo acima, a ação `setup-node` cria um arquivo *.npmrc* no executor com o conteúdo a seguir:

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

### Publicar pacotes em {% data variables.product.prodname_registry %}

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado sempre que ocorre o evento `versão` com o tipo `criado`. O fluxo de trabalho publica o pacote em {% data variables.product.prodname_registry %} se o teste de CI for aprovado.

Por padrão, o {% data variables.product.prodname_registry %} publica um pacote no repositório {% data variables.product.prodname_dotcom %} que você especificar no campo `nome` do arquivo *package.json*. Por exemplo, você publicaria um pacote denominado `@my-org/test` no repositório `my-org/test` do {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte [`npm-scope`](https://docs.npmjs.com/misc/scope) na documentação do npm.

Para realizar operações autenticadas no registro do {% data variables.product.prodname_registry %} em seu fluxo de trabalho, você pode usar o `GITHUB_TOKEN`. O `GITHUB_TOKEN` existe no repositório por padrão e tem permissões de leitura e gravação para pacotes no repositório em que o fluxo de trabalho é executado. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

Este exemplo armazena o segredo `GITHUB_TOKEN` na variável de ambiente `NODE_AUTH_TOKEN`. Quando a ação `setup-node` cria um arquivo *.npmrc*, ela faz referência ao token da variável de ambiente `NODE_AUTH_TOKEN`.

{% raw %}
```yaml
nome: Pacote Node.js
em:
  versão:
    tipos: [created]
trabalhos:
  criar:
    runs-on: ubuntu-latest
    etapas:
    - usa: actions/checkout@v2
    # Configura o arquivo .npmrc a ser publicado nos pacotes do GitHub
    - usa: actions/setup-node@v1
      com:
        node-version: '12.x'
        registry-url: 'https://npm.pkg.github.com'
        # Tem como padrão o usuário ou organização proprietário do arquivo do fluxo de trabalho
        escopo: '@octocat'
    - executar: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

A ação `setup-node` cria um arquivo *.npmrc* no executor. Ao usar a entrada do `escopo` para a ação `setup-node`, o arquivo *.npmrc* incluirá o prefixo do escopo. Por padrão, a ação `setup-node` define o escopo no arquivo *.npmrc* na conta que contém esse arquivo do fluxo de trabalho.

```
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

### Publicar pacotes usando o yarn

Se você usar o gerenciador de pacotes Yarn, você poderá instalar e publicar pacotes usando o Yarn.

{% raw %}
```yaml
nome: Pacote Node.js
em:
  versão:
    tipos: [created]
trabalhos:
  criar:
    runs-on: ubuntu-latest
    etapas:
    - usa: actions/checkout@v2
    # Configura o arquivo .npmrc a ser publicado no npm
    - usa: actions/setup-node@v1
      com:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
        # Tem como padrão o usuário ou a organização que é proprietário do arquivo do fluxo de trabalho
        escopo: '@octocat' 
    - executar: yarn
    - executar: yarn publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

### Publicar pacotes no npm e em {% data variables.product.prodname_registry %}

{% note %}

**Nota:** Se você precisar publicar para registros que têm diferentes prefixos de escopo, você deverá modificar o arquivo *package.json* no executor para alterar o prefixo de escopo. Por exemplo, se você publicar um pacote no escopo `@mona` para o npm e para o escopo `@octocat` para {% data variables.product.prodname_registry %}, você poderá substituir o escopo `@mona` por `@octocat` no arquivo *package.json* no executor, após fazer a publicação no npm e antes de publicar em {% data variables.product.prodname_registry %}.

{% endnote %}

Você pode publicar seus pacotes no registro do npm e em {% data variables.product.prodname_registry %}, usando a ação de `setup-node` para cada registro.

Se você publicar um pacote em ambos os registros, você deverá garantir que seu prefixo de escopo no npm corresponda ao nome do usuário ou da organização do {% data variables.product.prodname_dotcom %}. Para publicar pacotes em um registro público com um prefixo de escopo, você pode usar o comando `npm publish --access public`. Para obter mais informações, consulte [`npm-scope`](https://docs.npmjs.com/misc/scope) e "[Criar e publicar pacotes públicos com escopos](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)" na documentação do npm.

Certifique-se de que seu arquivo *package.json* inclua o escopo do seu repositório {% data variables.product.prodname_dotcom %} e o registro npm. Por exemplo, se você planeja publicar um pacote no repositório `octocat/npm-hello-world-test` em {% data variables.product.prodname_dotcom %} e em https://www.npmjs. om/package/@octocat/npm-hello-world-test, o nome no arquivo do seu *package.json* seria `"name": "@octocat/npm-hello-world-test"`.

Para realizar operações autenticadas no registro do {% data variables.product.prodname_registry %} em seu fluxo de trabalho, você pode usar o `GITHUB_TOKEN`. O `GITHUB_TOKEN` existe no repositório por padrão e tem permissões de leitura e gravação para pacotes no repositório em que o fluxo de trabalho é executado. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

Ao usar a entrada do `escopo` para a ação `setup-node`, esta cria um arquivo *.npmrc* que inclui o prefixo do escopo. Por padrão, a ação `setup-node` define o escopo no arquivo *.npmrc* para o usuário ou organização proprietário do arquivo do fluxo de trabalho.

Este fluxo de trabalho chama a ação `setup-node` duas vezes. Cada vez que a ação `setup-node` é executada, ela substitui o arquivo *.npmrc*. O arquivo *.npmrc* faz referência ao token que permite que você execute operações autenticadas com o registro do pacote a partir da variável de ambiente `NODE_AUTH_TOKEN`. O fluxo de trabalho define a variável de ambiente `NODE_AUTH_TOKEN` toda vez que o comando `publicação do npm` é executado. Primeiro com um token para publicar no npm (`NPM_TOKEN`) e, em seguida, com um token para publicar em {% data variables.product.prodname_registry %} (`GITHUB_TOKEN`).

{% raw %}
```yaml
nome: Pacote Node.js
em:
  versão:
    tipos: [created]
trabalhos:
  criar:
    runs-on: ubuntu-latest
    etapas:
    - usa: actions/checkout@v2
    # Configura o arquivo .npmrc a ser publicado no npm
    - usa: actions/setup-node@v1
      com:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'
    - executa: npm install
    # Publica no npm
    - executa: npm publish --access public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
    # Configura o arquivo .npmrc a ser publicado nos pacotes do GitHub
    - usa: actions/setup-node@v1
      com:
        registry-url: 'https://npm.pkg.github.com'
        # Tem como padrão o usuário ou a organização proprietário do arquivo do fluxo de trabalho
        escopo: '@octocat'
    # Publicar nos pacotes do GitHub
    - executar: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
