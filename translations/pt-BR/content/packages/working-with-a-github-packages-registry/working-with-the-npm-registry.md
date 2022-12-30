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
  ghec: '*'
shortTitle: npm registry
ms.openlocfilehash: 11b1ab58cd57c6cecdeb2366b83696166cdc6245
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193118'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %} {% else %}
## Limites para versões publicadas do npm

Se você publicar mais de 1.000 versões de pacote de npm até {% data variables.product.prodname_registry %}, você poderá ver problemas de performance e tempo-limite que ocorrem durante o uso.

No futuro, para melhorar o desempenho do serviço, você não será capaz de publicar mais de 1.000 versões de um pacote em {% data variables.product.prodname_dotcom %}. Todas as versões publicadas antes de atingir esse limite serão legíveis.

Se você atingir este limite, considere excluir versões de pacote ou entre em contato com o suporte para obter ajuda. Quando este limite for aplicado, a nossa documentação será atualizada com uma forma de contornar este limite. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)" ou "[Como entrar em contato com o suporte](/packages/learn-github-packages/about-github-packages#contacting-support)".
{% endif %}

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %} {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

Você também pode optar por dar permissões de acesso a pacotes independentemente para {% data variables.product.prodname_codespaces %} e {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como garantir que os codespaces acessem seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) e [Como garantir o acesso do fluxo de trabalho ao seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".
{% endif %}

### Autenticar com um {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Você pode se autenticar no {% data variables.product.prodname_registry %} com o npm editando o arquivo *~/.npmrc* por usuário para incluir seu {% data variables.product.pat_v1 %} ou fazendo logon no npm na linha de comando com seu nome de usuário e o {% data variables.product.pat_generic %}.

Para se autenticar adicionando seu {% data variables.product.pat_v1 %} ao arquivo *~/.npmrc*, edite o arquivo *~/.npmrc* para que o projeto inclua a linha a seguir, substituindo {% ifversion ghes or ghae %}*HOSTNAME* pelo nome do host de {% data variables.location.product_location %} e {% endif %}*TOKEN* pelo seu {% data variables.product.pat_generic %}. Crie um arquivo *~/.npmrc* se ele não existir.

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```
{% endif %}

Para se autenticar fazendo logon no npm, use o comando `npm login` substituindo *USERNAME* pelo seu nome de usuário do {% data variables.product.prodname_dotcom %}, *TOKEN* pelo seu {% data variables.product.pat_v1 %} e *PUBLIC-EMAIL-ADDRESS* pelo seu endereço de email.

Se o {% data variables.product.prodname_registry %} não é o registro de pacote padrão para usar o npm e você deseja usar o comando `npm audit`, recomendamos que você use o sinalizador `--scope` com o proprietário do pacote quando se autenticar no {% data variables.product.prodname_registry %}.

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}

```shell
$ npm login --scope=@OWNER --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:

```shell
$ npm login --scope=@OWNER --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
{% endif %}

## Publicando um pacote

{% note %}

**Observação:** os nomes e os escopos dos pacotes só devem usar letras minúsculas.

{% endnote %}

{% ifversion packages-npm-v2 %} O registro {% data variables.product.prodname_registry %} armazena pacotes npm em sua organização ou conta pessoal e permite que você associe um pacote a um repositório. Você pode escolher se deve herdar permissões de um repositório ou definir permissões granulares, independentemente de um repositório.

{% data reusables.package_registry.publishing-user-scoped-packages %} {% endif %}

Por padrão, o {% data variables.product.prodname_registry %} publica um pacote no repositório do {% data variables.product.prodname_dotcom %} que você especificar no campo de nome do arquivo *package.json*. Por exemplo, você publicará um pacote chamado `@my-org/test` no repositório `my-org/test` do {% data variables.product.prodname_dotcom %}. Se você estiver executando o [npm v8.5.3](https://github.com/npm/cli/releases/tag/v8.5.3) ou posterior, poderá adicionar um resumo para a página de listagem de pacotes incluindo um arquivo *README.md* em seu diretório de pacotes. Para obter mais informações, confira "[Como trabalhar com package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" e "[Como criar módulos do Node.js](https://docs.npmjs.com/getting-started/creating-node-modules)" na documentação do npm.

Você pode publicar vários pacotes no mesmo repositório do {% data variables.product.prodname_dotcom %} incluindo um campo `URL` no arquivo *package.json*. Para obter mais informações, confira "[Como publicar vários pacotes no mesmo repositório](#publishing-multiple-packages-to-the-same-repository)".

Configure o mapeamento do escopo para seu projeto usando um arquivo *.npmrc* local no projeto ou usando a opção `publishConfig` em *package.json*. {% data variables.product.prodname_registry %} só é compatível com pacotes npm com escopo definido. Os pacotes com escopo têm nomes com o formato de `@owner/name`. Os pacotes com escopo sempre começam com um símbolo `@`. Talvez seja necessário atualizar o nome no *package.json* para usar o nome com escopo. Por exemplo, `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

### Como publicar um pacote usando um arquivo *.npmrc* local

Use um arquivo *.npmrc* para configurar o mapeamento do escopo para seu projeto. No arquivo *.npmrc*, use a URL e o proprietário da conta do {% data variables.product.prodname_registry %} para que o {% data variables.product.prodname_registry %} saiba o local para o qual as solicitações de pacote devem ser roteadas. O uso de um arquivo *.npmrc* impede que outros desenvolvedores publiquem o pacote acidentalmente em npmjs.org em vez de no {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Verifique o nome do pacote no *package.json* do projeto. O campo `name` precisa conter o escopo e o nome do pacote. Por exemplo, se o pacote for chamado "test" e você o estiver publicando na organização "My-org" do {% data variables.product.prodname_dotcom %}, o campo `name` no *package.json* deverá ser `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

### Como publicar um pacote usando `publishConfig` no arquivo *package.json*

Use o elemento `publishConfig` no arquivo *package.json* para especificar o registro em que deseja publicar o pacote. Para obter mais informações, confira "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" na documentação do npm.

1. Edite o arquivo *package.json* do pacote e inclua uma entrada `publishConfig`.
  {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}
  ```shell
  "publishConfig": {
    "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}"
  },
  ```
  {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:
   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
  ```
  {% endif %} {% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

## Publicar vários pacotes no mesmo repositório

Para publicar vários pacotes no mesmo repositório, inclua a URL do repositório do {% data variables.product.prodname_dotcom %} no campo `repository` do arquivo *package.json* de cada pacote.

Para garantir que a URL do repositório esteja correta, substitua REPOSITÓRIO pelo nome do repositório que contém o pacote que você deseja publicar, e o PROPRIETÁRIO pelo nome de usuário ou conta de organização no {% data variables.product.prodname_dotcom %} que é proprietário do repositório.

O {% data variables.product.prodname_registry %} corresponderá ao repositório baseado na URL, em vez de ser baseado no nome do pacote.

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## Instalando um pacote

Você pode instalar pacotes do {% data variables.product.prodname_registry %} adicionando os pacotes como dependências no arquivo *package.json* do projeto. Para obter mais informações sobre como usar um *package.json* no seu projeto, confira "[Como trabalhar com package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" na documentação do npm.

Por padrão, você pode adicionar pacotes a partir de uma organização. Para obter mais informações, confira "[Como instalar pacotes de outras organizações](#installing-packages-from-other-organizations)".

Você também precisa adicionar o arquivo *.npmrc* ao projeto para que todas as solicitações de instalação de pacotes {% ifversion ghae %}sejam encaminhadas para o{% else %}passem pelo{% endif %} {% data variables.product.prodname_registry %}. {% ifversion fpt or ghes or ghec %}Ao rotear todas as solicitações de pacote por meio do {% data variables.product.prodname_registry %}, você pode usar pacotes com escopo e sem escopo de *npmjs.org*. Para obter mais informações, confira "[npm-scope](https://docs.npmjs.com/misc/scope)" na documentação do npm.{% endif %}

{% ifversion ghae %} Por padrão, você só pode usar pacotes do npm hospedados na sua empresa e não poderá usar pacotes sem escopo. Para obter mais informações sobre como definir o escopo de um pacote, confira "[npm-scope](https://docs.npmjs.com/misc/scope)" na documentação do npm. Se necessário, o suporte do {% data variables.product.prodname_dotcom %} pode habilitar um proxy upstream para npmjs.org. Depois que um proxy upstream for habilitado, se um pacote solicitado não for encontrado na sua empresa, o {% data variables.product.prodname_registry %} fará uma solicitação de proxy para npmjs.org.  
{% endif %}

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Configure *package.json* no projeto para usar o pacote que você está instalando. Para adicionar as dependências de pacote ao arquivo *package.json* para o {% data variables.product.prodname_registry %}, especifique o nome do pacote com escopo completo, como `@my-org/server`. Para pacotes de *npmjs.com*, especifique o nome completo, como `@babel/core` ou `@lodash`. Substitua `<organization_name>/<package_name>` pela dependência do pacote.

  ```json
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the <organization_name>/<package_name> package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "<organization_name>/<package_name>": "1.0.0"
    }
  }
  ```
5. Instale o pacote.

  ```shell
  $ npm install
  ```

### Instalar pacotes de outras organizações

Por padrão, você só pode usar pacotes do {% data variables.product.prodname_registry %} de uma organização. Caso deseje encaminhar solicitações de pacotes para várias organizações e usuários, adicione mais linhas ao arquivo *.npmrc* substituindo {% ifversion ghes or ghae %}*HOSTNAME* pelo nome do host da {% data variables.location.product_location %} e {% endif %}*OWNER* pelo nome da conta de usuário ou da organização que é o proprietário do repositório que contém o projeto.

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}

```shell
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:

```shell
@OWNER:registry=https://HOSTNAME/_registry/npm
@OWNER:registry=https://HOSTNAME/_registry/npm
```
{% endif %}

{% ifversion ghes %}
## Usando o registro oficial do NPM

O {% data variables.product.prodname_registry %} permite que você acesse o registro npm oficial em `registry.npmjs.com`, caso seu administrador do {% data variables.product.prodname_ghe_server %} tenha habilitado esse recurso. Para obter mais informações, confira [Como se conectar ao registro npm](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}
