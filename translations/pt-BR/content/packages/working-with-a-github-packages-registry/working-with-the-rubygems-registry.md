---
title: Trabalhando com o registro do RubyGems
intro: 'Você pode configurar RubyGems para publicar um pacote em {% data variables.product.prodname_registry %} e usar pacotes armazenados em {% data variables.product.prodname_registry %} como dependências em um projeto Ruby com o Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: RubyGems registry
ms.openlocfilehash: 56fb2fda7c50e6f1a1a3265e55c77d65a7af8705
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882324'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Pré-requisitos

- Você deve ter o RubyGems 2.4.1 ou superior. Para encontrar a versão do seu RubyGems:

  ```shell
  $ gem --version
  ```

- Você precisa ter o Bundler 1.6.4 ou superior. Para encontrar sua versão do Bundler:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

- Instale o keycutter para gerenciar várias credenciais. Para instalar o keycutter:

  ```shell
  $ gem install keycutter
  ```

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Autentique-se no {% data variables.product.prodname_registry %} com o RubyGems editando o arquivo *~/.gem/credentials* para publicação de gems, editando o arquivo *~/.gemrc* para instalar um só gem ou usando o Bundler para acompanhar e instalar um ou mais gems.

Para publicar novos gems, você precisa se autenticar no {% data variables.product.prodname_registry %} com o RubyGems editando o arquivo *~/.gem/credentials* para incluir seu token de acesso pessoal.  Crie um arquivo *~/.gem/credentials* se ele não existir.

Por exemplo, crie ou edite um arquivo *~/.gem/credentials* para incluir o conteúdo indicado a seguir, substituindo *TOKEN* pelo seu token de acesso pessoal.

```shell
---
:github: Bearer <em>TOKEN</em>
```

Para instalar gems, você precisa se autenticar no {% data variables.product.prodname_registry %} editando o arquivo *~/.gemrc* para que o projeto inclua `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. Você deve substituir:
  - `USERNAME` pelo seu nome de usuário do {% data variables.product.prodname_dotcom %}.
  - `TOKEN` pelo seu token de acesso pessoal.
  - `OWNER` pelo nome da conta de usuário ou da organização que é proprietário do repositório que contém o projeto.{% ifversion ghes %}
  - `REGISTRY-URL` pela URL do registro do RubyGems da instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome do host da sua instância do {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %}
  - `REGISTRY-URL` pela URL do registro do RubyGems da instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host da {% data variables.product.product_location %}.
{% endif %}

Caso você não tenha um arquivo *~/.gemrc*, crie um arquivo *~/.gemrc* usando este exemplo.

```shell
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```

Para se autenticar no Bundler, configure-o para usar seu token de acesso pessoal, substituindo *USERNAME* pelo seu nome de usuário do {% data variables.product.prodname_dotcom %}, *TOKEN* pelo seu token de acesso pessoal e *OWNER* pelo nome da conta de usuário ou da organização que é o proprietário do repositório que contém o projeto.{% ifversion ghes %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome do host da instância do {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host da {% data variables.product.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

## Publicando um pacote

{% data reusables.package_registry.default-name %} Por exemplo, quando você publica `octo-gem` na organização `octo-org`, o {% data variables.product.prodname_registry %} publica o gem no repositório `octo-org/octo-gem`. Para obter mais informações sobre como criar seu gem, confira "[Criar seu gem](http://guides.rubygems.org/make-your-own-gem/)" na documentação do RubyGems.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Compile o pacote do *gemspec* para criar o pacote *.gem*.
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. Publique um pacote no {% data variables.product.prodname_registry %}, substituindo `OWNER` pelo nome da conta de usuário ou da organização que é o proprietário do repositório que contém o projeto e `OCTO-GEM` pelo nome do pacote do gem.{% ifversion ghes %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome do host da instância do {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host da {% data variables.product.product_location %}.{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

## Publicar vários pacotes no mesmo repositório

Para publicar vários gems no mesmo repositório, inclua a URL do repositório do {% data variables.product.prodname_dotcom %} no campo `github_repo` em `gem.metadata`. Se você incluir esse campo, o {% data variables.product.prodname_dotcom %} corresponderá ao repositório com base nesse valor, em vez de usar o nome do gem.{% ifversion ghes or ghae %} Substitua *HOSTNAME* pelo nome do host da {% data variables.product.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Instalando um pacote

Você pode usar gems no {% data variables.product.prodname_registry %} da mesma forma que você usa gems em *rubygems.org*. Você precisa se autenticar no {% data variables.product.prodname_registry %} adicionando o usuário ou a organização do {% data variables.product.prodname_dotcom %} como uma fonte no arquivo *~/.gemrc* ou usando o Bundler e editando o *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. Para o Bundler, adicione o usuário ou a organização do {% data variables.product.prodname_dotcom %} como uma fonte no *Gemfile* para buscar gems dessa nova fonte. Por exemplo, você pode adicionar um novo bloco `source` ao *Gemfile* que só usa o {% data variables.product.prodname_registry %} para os pacotes que você especificar, substituindo *GEM NAME* pelo pacote que deseja instalar por meio do {% data variables.product.prodname_registry %} e *OWNER* pelo usuário ou pela organização que é o proprietário do repositório que contém o gem que deseja instalar.{% ifversion ghes %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome do host da instância do {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host da {% data variables.product.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. Para versões do Bundler anteriores à 1.7.0, adicione uma nova `source` global. Para obter mais informações sobre como usar o Bundler, confira a [documentação em bundler.io](https://bundler.io/gemfile.html).

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Instale o pacote:
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

## Leitura adicional

- "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)"

