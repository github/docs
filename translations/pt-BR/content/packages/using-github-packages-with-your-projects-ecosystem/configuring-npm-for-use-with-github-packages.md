---
title: Configurar o npm para usar com o GitHub Packages
intro: 'Você pode configurar o npm para publicar pacotes no {% data variables.product.prodname_registry %} e usar pacotes armazenados no {% data variables.product.prodname_registry %} como dependências em um projeto npm.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**Note:** When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

### Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Você pode efetuar a autenticação no {% data variables.product.prodname_registry %} com o npm editando seu arquivo *~/.npmrc* por usuário para incluir o seu token de acesso pessoal ou fazer o login no npm na linha de comando usando seu nome de usuário e token de acesso pessoal.

To authenticate by adding your personal access token to your *~/.npmrc* file, edit the *~/.npmrc* file for your project to include the following line, replacing *TOKEN* with your personal access token.  Crie um novo arquivo *~/.npmrc* se um não existir.

{% if currentVersion != "free-pro-team@latest" %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}

```shell
//npm.pkg.github.com/:_authToken=<em>TOKEN</em>
```

{% if currentVersion != "free-pro-team@latest" %}
Se sua instância tem o isolamento de subdomínio desabilitado:

```shell
$ npm login --registry=https://npm.pkg.github.com
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

Para efetuar a autenticação conectado no npm, use o comando `npm login` , substituindo o *NOME DE USUÁRIO* pelo seu nome de usuário do {% data variables.product.prodname_dotcom %}, o *TOKEN* pelo seu token de acesso pessoal e *PUBLIC-EMAIL-ADDRESS* pelo seu endereço de e-mail.

{% if currentVersion != "free-pro-team@latest" %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}

```shell
"repository" : {
    "type" : "git",
    "url": "ssh://git@github.com/<em>OWNER</em>/<em>REPOSITORY</em>.git",
    "directory": "packages/name"
  },
```

{% if currentVersion != "free-pro-team@latest" %}
Se sua instância tem o isolamento de subdomínio desabilitado:

```shell
registry=https://npm.pkg.github.com/<em>OWNER</em>
@<em>OWNER</em>:registry=https://npm.pkg.github.com
@<em>OWNER</em>:registry=https://npm.pkg.github.com
```
{% endif %}

#### Efetuando a autenticação com o `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publicar um pacote

Por padrão, o {% data variables.product.prodname_registry %} publica um pacote no repositório {% data variables.product.prodname_dotcom %} que você especificar no campo nome do arquivo *package.json*. Por exemplo, você publicaria um pacote denominado `@my-org/test` no repositório `my-org/test` do {% data variables.product.prodname_dotcom %}. Você pode adicionar um resumo da página de listagem do pacote incluindo um arquivo *README.md* no diretório do seu pacote. Para obter mais informações, consulte "[Trabalhando com package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" e "[Como criar Módulos de Node.js](https://docs.npmjs.com/getting-started/creating-node-modules)" na documentação do npm.

Você pode publicar vários pacotes no mesmo repositório do {% data variables.product.prodname_dotcom %} incluindo um campo de `URL` no arquivo *package.json*. Para obter mais informações, consulte "[Publicar vários pacotes no mesmo repositório](#publishing-multiple-packages-to-the-same-repository)".

É possível definir o mapeamento do escopo para o seu projeto usando um arquivo local *.npmrc* no projeto ou usando a opção `publishConfig` em *package.json*. {% data variables.product.prodname_registry %} só é compatível com pacotes npm com escopo definido. Pacotes com escopo têm nomes no formato `@owner/name`. Os pacotes com escopo sempre começam pelo símbolo `@`. Talvez seja necessário atualizar o nome no *package.json* para usar o nome com escopo. Por exemplo, `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

#### Publicar um pacote usando o arquivo *.npmrc* local

Você pode usar um arquivo *.npmrc* para configurar o mapeamento do escopo para o seu projeto. No arquivo *.npmrc*, use a URL e o proprietário da conta de {% data variables.product.prodname_registry %} para que {% data variables.product.prodname_registry %} saiba onde rotear as solicitações de pacotes. O uso de um arquivo *.npmrc* impede que outros desenvolvedores publiquem acidentalmente o pacote no npmjs.org em vez de {% data variables.product.prodname_registry %}. {% data reusables.package_registry.lowercase-name-field %}

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. Verifique o nome do pacote no *package.json* do seu projeto. O campo `name` (nome) deve conter o escopo e o nome do pacote. Por exemplo, se o pacote for chamado de "test" e você estiver publicando na organização "My-org" do {% data variables.product.prodname_dotcom %}, o campo `name` (nome) do seu *package.json* deverá ser `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

#### Publicar um pacote usando o `publishConfig` no arquivo *package.json*

Você pode usar o elemento `publishConfig` no arquivo *package.json* para especificar o registro onde você quer o pacote publicado. Para obter mais informações, consulte "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" na documentação npm.

1. Edite o arquivo *package.json* do seu pacote e inclua uma entrada `publishConfig`.
  {% if currentVersion != "free-pro-team@latest" %}
  Se sua instância tem o isolamento de subdomínio habilitado:
  {% endif %}
  ```shell
    "publishConfig": {
      "registry":"https://npm.pkg.github.com/"
    },
  ```
  {% if currentVersion != "free-pro-team@latest" %}
  Se sua instância tem o isolamento de subdomínio desabilitado:
   ```shell
    "publishConfig": {
      "registry":"https://<em>HOSTNAME</em>/_registry/npm/"
    },
  ```
  {% endif %}
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### Publicar vários pacotes no mesmo repositório

Para publicar vários pacotes no mesmo repositório, você pode incluir a URL do repositório do {% data variables.product.prodname_dotcom %} no campo `repositório` do arquivo *package.json* para cada pacote.

Para garantir que a URL do repositório esteja correta, substitua REPOSITÓRIO pelo nome do repositório que contém o pacote que você deseja publicar, e o PROPRIETÁRIO pelo nome de usuário ou conta de organização no {% data variables.product.prodname_dotcom %} que é proprietário do repositório.

O {% data variables.product.prodname_registry %} corresponderá ao repositório baseado na URL, em vez de ser baseado no nome do pacote. Se você armazenar o arquivo *package.json* fora do diretório raiz do seu repositório, você poderá usar o campo `diretório` para especificar o local onde {% data variables.product.prodname_registry %} pode encontrar os arquivos *package.json*.

```shell
"repository" : {
    "type" : "git",
    "url": "ssh://git@{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>.git",
    "directory": "packages/name"
  },
```

### Instalar um pacote

Você pode instalar pacotes do {% data variables.product.prodname_registry %} adicionando os pacotes como dependências no arquivo *package.json* para o seu projeto. Para obter mais informações sobre como usar um pacote *package.json* no projeto, consulte "[Trabalhar com package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" na documentação npm.

Por padrão, você pode adicionar pacotes a partir de uma organização. Para obter mais informações, consulte [Instalar pacotes de outras organizações](#installing-packages-from-other-organizations)

Você também precisa adicionar o arquivo *.npmrc* ao seu projeto para que todas as solicitações de instalação passem pelo {% data variables.product.prodname_registry %}. Ao encaminhar todas as solicitações através de {% data variables.product.prodname_registry %}, você pode usar pacotes com escopo e sem escopo de *npmjs.com*. Para obter mais informações, consulte "[npm-scope](https://docs.npmjs.com/misc/scope)" na documentação npm.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. Configure *package.json* no seu projeto para usar o pacote que você está instalando. Para adicionar as suas dependências de pacote ao arquivo *package.json* para {% data variables.product.prodname_registry %}, especifique o nome do pacote com escopo completo, como, por exemplo, `@my-org/server`. Para pacotes do *npmjs.com*, especifique o nome completo, como `@babel/core` ou `@lodash`. Por exemplo, o arquivo *package.json* a seguir usa o pacote `@octo-org/octo-app` como uma dependência.

  ```
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the @octo-org/octo-app package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "@octo-org/octo-app": "1.0.0"
    }
  }
  ```
5. Instale o pacote.

  ```shell
  $ npm install
  ```

#### Instalar pacotes de outras organizações

Por padrão, você só pode usar pacotes do {% data variables.product.prodname_registry %} de uma organização. Por padrão, você só pode usar pacotes do {% data variables.product.prodname_registry %} de uma organização. {% data reusables.package_registry.lowercase-name-field %}

{% if currentVersion != "free-pro-team@latest" %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}

```shell
registry=https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}<em>OWNER</em>
@<em>OWNER</em>:registry={% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
@<em>OWNER</em>:registry={% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
```

{% if currentVersion != "free-pro-team@latest" %}
Se sua instância tem o isolamento de subdomínio desabilitado:

```shell
registry=https://<em>HOSTNAME</em>/_registry/npm/<em>OWNER</em>
@<em>OWNER</em>:registry=<em>HOSTNAME</em>/_registry/npm/
@<em>OWNER</em>:registry=<em>HOSTNAME</em>/_registry/npm/
```
{% endif %}


### Leia mais

- "[Excluir um pacote](/packages/publishing-and-managing-packages/deleting-a-package/)"
