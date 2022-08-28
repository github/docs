---
title: Trabalhando com o registro npm
intro: 'Você pode configurar o npm para publicar pacotes no {% data variables.product.prodname_registry %} e usar pacotes armazenados no {% data variables.product.prodname_registry %} como dependências em um projeto npm.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Registro de npm
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**Note:** When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

{% ifversion fpt or ghes > 2.22 or ghae %}
## Limites para versões publicadas do npm

Se você publicar mais de 1.000 versões de pacote de npm até {% data variables.product.prodname_registry %}, você poderá ver problemas de performance e tempo-limite que ocorrem durante o uso.

No futuro, para melhorar o desempenho do serviço, você não será capaz de publicar mais de 1.000 versões de um pacote em {% data variables.product.prodname_dotcom %}. Todas as versões publicadas antes de atingir esse limite serão legíveis.

Se você atingir este limite, considere excluir versões de pacote ou entre em contato com o suporte para obter ajuda. Quando este limite for aplicado, a nossa documentação será atualizada com uma forma de contornar este limite. Para obter mais informações, consulte "{% ifversion fpt or ghes > 3.0 %}[Excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Excluir um pacote](/packages/learn-github-packages/deleting-a-package){% endif %}" ou "[Entrar em contato com o suporte](/packages/learn-github-packages/about-github-packages#contacting-support)."

{% endif %}

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Você pode efetuar a autenticação no {% data variables.product.prodname_registry %} com o npm editando seu arquivo *~/.npmrc* por usuário para incluir o seu token de acesso pessoal ou fazer o login no npm na linha de comando usando seu nome de usuário e token de acesso pessoal.

Para efetuar a autenticação adicionando seu token de acesso pessoal ao seu arquivo *~/.npmrc*, edite o arquivo *~/.npmrc* para que o seu projeto inclua a linha a seguir, substituindo {% ifversion ghes or ghae %}*HOSTNAME* pelo nome do host {% data variables.product.product_location %} e {% endif %}*TOKEN* pelo seu token de acesso pessoal. Crie um novo arquivo *~/.npmrc* se um não existir.

{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}

```shell
//{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}/:_authToken=<em>TOKEN</em>
```

{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio desabilitado:

```shell
$ npm login --registry=https://npm.pkg.github.com
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

Para efetuar a autenticação conectado no npm, use o comando `npm login` , substituindo o *NOME DE USUÁRIO* pelo seu nome de usuário do {% data variables.product.prodname_dotcom %}, o *TOKEN* pelo seu token de acesso pessoal e *PUBLIC-EMAIL-ADDRESS* pelo seu endereço de e-mail.

Se {% data variables.product.prodname_registry %} não é seu registro de pacote padrão para usar npm e você deseja usar o comando `npm audit` , recomendamos que você use o sinalizador `--scope` com o proprietário do pacote quando você efetuar a autenticação no {% data variables.product.prodname_registry %}.

{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}

```shell
$ npm login --scope=@<em>OWNER</em> --registry=https://{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}

> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```

{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio desabilitado:

```shell
$ npm login --scope=@<em>OWNER</em> --registry=https://<em>HOSTNAME</em>/_registry/npm/
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

## Publicar um pacote

{% note %}

**Nota:** Os nomes dos pacotes e escopos só devem usar letras minúsculas.

{% endnote %}

Por padrão, o {% data variables.product.prodname_registry %} publica um pacote no repositório {% data variables.product.prodname_dotcom %} que você especificar no campo nome do arquivo *package.json*. Por exemplo, você publicaria um pacote denominado `@my-org/test` no repositório `my-org/test` do {% data variables.product.prodname_dotcom %}. Você pode adicionar um resumo da página de listagem do pacote incluindo um arquivo *README.md* no diretório do seu pacote. Para obter mais informações, consulte "[Trabalhando com package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" e "[Como criar Módulos de Node.js](https://docs.npmjs.com/getting-started/creating-node-modules)" na documentação do npm.

Você pode publicar vários pacotes no mesmo repositório do {% data variables.product.prodname_dotcom %} incluindo um campo de `URL` no arquivo *package.json*. Para obter mais informações, consulte "[Publicar vários pacotes no mesmo repositório](#publishing-multiple-packages-to-the-same-repository)".

É possível definir o mapeamento do escopo para o seu projeto usando um arquivo local *.npmrc* no projeto ou usando a opção `publishConfig` em *package.json*. {% data variables.product.prodname_registry %} só é compatível com pacotes npm com escopo definido. Pacotes com escopo têm nomes no formato `@owner/name`. Os pacotes com escopo sempre começam pelo símbolo `@`. Talvez seja necessário atualizar o nome no *package.json* para usar o nome com escopo. Por exemplo, `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

### Publicar um pacote usando o arquivo *.npmrc* local

Você pode usar um arquivo *.npmrc* para configurar o mapeamento do escopo para o seu projeto. No arquivo *.npmrc*, use a URL e o proprietário da conta de {% data variables.product.prodname_registry %} para que {% data variables.product.prodname_registry %} saiba onde rotear as solicitações de pacotes. O uso de um arquivo *.npmrc* impede que outros desenvolvedores publiquem acidentalmente o pacote no npmjs.org em vez de {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Verifique o nome do pacote no *package.json* do seu projeto. O campo `name` (nome) deve conter o escopo e o nome do pacote. Por exemplo, se o pacote for chamado de "test" e você estiver publicando na organização "My-org" do {% data variables.product.prodname_dotcom %}, o campo `name` (nome) do seu *package.json* deverá ser `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### Publicar um pacote usando o `publishConfig` no arquivo *package.json*

Você pode usar o elemento `publishConfig` no arquivo *package.json* para especificar o registro onde você quer o pacote publicado. Para obter mais informações, consulte "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" na documentação npm.

1. Edite o arquivo *package.json* do seu pacote e inclua uma entrada `publishConfig`.
  {% ifversion ghes %}
  Se sua instância tem o isolamento de subdomínio habilitado:
  {% endif %}
  ```shell
  "publishConfig": {
    "registry":"https://{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}"
  },
  ```
  {% ifversion ghes %}
  Se sua instância tem o isolamento de subdomínio desabilitado:
   ```shell
   "publishConfig": {
     "registry":"https://<em>HOSTNAME</em>/_registry/npm/"
   },
  ```
  {% endif %}
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

## Publicar vários pacotes no mesmo repositório

Para publicar vários pacotes no mesmo repositório, você pode incluir a URL do repositório do {% data variables.product.prodname_dotcom %} no campo `repositório` do arquivo *package.json* para cada pacote.

Para garantir que a URL do repositório esteja correta, substitua REPOSITÓRIO pelo nome do repositório que contém o pacote que você deseja publicar, e o PROPRIETÁRIO pelo nome de usuário ou conta de organização no {% data variables.product.prodname_dotcom %} que é proprietário do repositório.

O {% data variables.product.prodname_registry %} corresponderá ao repositório baseado na URL, em vez de ser baseado no nome do pacote.

```shell
"repository":"https://{% ifversion fpt %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>",
```

## Instalar um pacote

Você pode instalar pacotes do {% data variables.product.prodname_registry %} adicionando os pacotes como dependências no arquivo *package.json* para o seu projeto. Para obter mais informações sobre como usar um pacote *package.json* no projeto, consulte "[Trabalhar com package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" na documentação npm.

Por padrão, você pode adicionar pacotes a partir de uma organização. Para obter mais informações, consulte [Instalar pacotes de outras organizações](#installing-packages-from-other-organizations)."

You also need to add the *.npmrc* file to your project so that all requests to install packages will {% ifversion ghae %}be routed to{% else %}go through{% endif %} {% data variables.product.prodname_registry %}. {% ifversion fpt or ghes > 2.21 %}When you route all package requests through {% data variables.product.prodname_registry %}, you can use both scoped and unscoped packages from *npmjs.org*. For more information, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation.{% endif %}

{% ifversion ghae %}
By default, you can only use npm packages hosted on your enterprise, and you will not be able to use unscoped packages. For more information on package scoping, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation. If required, {% data variables.product.prodname_dotcom %} support can enable an upstream proxy to npmjs.org. Once an upstream proxy is enabled, if a requested package isn't found on your enterprise, {% data variables.product.prodname_registry %} makes a proxy request to npmjs.org.
{% endif %}

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. Configure *package.json* no seu projeto para usar o pacote que você está instalando. Para adicionar as suas dependências de pacote ao arquivo *package.json* para {% data variables.product.prodname_registry %}, especifique o nome do pacote com escopo completo, como, por exemplo, `@my-org/server`. Para pacotes do *npmjs.com*, especifique o nome completo, como `@babel/core` ou `@lodash`. Por exemplo, o arquivo *package.json* a seguir usa o pacote `@octo-org/octo-app` como uma dependência.

  ```json
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

### Instalar pacotes de outras organizações

Por padrão, você só pode usar pacotes do {% data variables.product.prodname_registry %} de uma organização. Se você deseja encaminhar solicitações de pacotes para várias organizações e usuários, você pode adicionar linhas adicionais ao seu arquivo *.npmrc* substituindo {% ifversion ghes or ghae %}*HOSTNAME* pelo nome do host {% data variables.product.product_location %} e {% endif %}*OWNER* pelo nome do usuário ou conta da organização proprietária do repositório que contém o seu projeto.

{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}

```shell
@<em>OWNER</em>:registry=https://{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>{% endif %}
@<em>OWNER</em>:registry=https://{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>{% endif %}
```

{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio desabilitado:

```shell
@<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
@<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
```
{% endif %}

{% ifversion ghes > 2.22 %}
## Usando o registro oficial do NPM

{% data variables.product.prodname_registry %} permite que você acesse o registro oficial do NPM no `registry.npmjs.com`, caso seu administrador de {% data variables.product.prodname_ghe_server %} tenha habilitado esta funcionalidade. Para obter mais informações, consulte [Conectar ao registro oficial do NPM](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}

## Leia mais

- "{% ifversion fpt or ghes > 3.0 %}[Excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Excluir um pacote](/packages/learn-github-packages/deleting-a-package){% endif %}"
