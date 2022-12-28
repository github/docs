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
ms.openlocfilehash: 514a50358bf8171b3ea8d13b01375306e784e63f
ms.sourcegitcommit: cea091b5171ad05f18b3d35fa063cfea8aea12c4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/17/2022
ms.locfileid: '148172142'
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

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Autenticar com um {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Para publicar e instalar gems, você pode configurar o RubyGems ou o Bundler para se autenticar no {% data variables.product.prodname_registry %} usando seu {% data variables.product.pat_generic %}.

Para publicar novos gems, você precisa se autenticar no {% data variables.product.prodname_registry %} com o RubyGems editando o arquivo *~/.gem/credentials* para incluir seu {% data variables.product.pat_v1 %}. Crie um arquivo *~/.gem/credentials* se ele não existir.

Por exemplo, crie ou edite um arquivo *~/.gem/credentials* para incluir o conteúdo indicado a seguir, substituindo *TOKEN* pelo seu {% data variables.product.pat_generic %}.

```shell
---
:github: Bearer TOKEN
```

Para instalar gems, você precisa se autenticar em {% data variables.product.prodname_registry %} atualizando suas fontes de gem para incluir `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. Você deve substituir:
  - `USERNAME` pelo seu nome de usuário do {% data variables.product.prodname_dotcom %}.
  - `TOKEN` com seu {% data variables.product.pat_v1 %}.
  - `OWNER` pelo nome da conta de usuário ou da organização que é proprietário do repositório que contém o projeto.{% ifversion ghes %}
  - `REGISTRY-URL` pela URL do registro do RubyGems da instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome do host da sua instância do {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %}
  - `REGISTRY-URL` pela URL do registro do RubyGems da instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host da {% data variables.location.product_location %}.
{% endif %}

Se você quiser que seu pacote esteja disponível globalmente, execute o comando a seguir para adicionar seu registro como uma fonte.
```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
```

Para se autenticar no Bundler, configure-o para usar seu {% data variables.product.pat_v1 %}, substituindo *USERNAME* pelo seu nome de usuário do {% data variables.product.prodname_dotcom %}, *TOKEN* pelo seu {% data variables.product.pat_generic %} e *OWNER* pelo nome da conta de usuário ou da organização que é o proprietário do repositório que contém o projeto.{% ifversion ghes %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome do host da instância do {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host da {% data variables.location.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
```

## Publicando um pacote

{% data reusables.package_registry.default-name %} Por exemplo, quando você publica `<GEM NAME>` na organização `octo-org`, o {% data variables.product.prodname_registry %} publica o gem no repositório `octo-org/<GEM NAME>`. Para obter mais informações sobre como criar seu gem, confira "[Criar seu gem](http://guides.rubygems.org/make-your-own-gem/)" na documentação do RubyGems.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Compile o pacote do *gemspec* para criar o pacote *.gem*.
  ```
  gem build <GEM NAME>.gemspec
  ```
3. Publique um pacote no {% data variables.product.prodname_registry %}, substituindo `OWNER` pelo nome da conta de usuário ou da organização que é o proprietário do repositório que contém o projeto e `<GEM NAME>` pelo nome do pacote do gem.{% ifversion ghes %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome do host da instância do {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host da {% data variables.location.product_location %}.{% endif %}

  ```
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
  <GEM NAME>-0.0.1.gem
  ```

## Publicar vários pacotes no mesmo repositório

Para publicar vários gems no mesmo repositório, inclua a URL do repositório do {% data variables.product.prodname_dotcom %} no campo `github_repo` em `gem.metadata`. Se você incluir esse campo, o {% data variables.product.prodname_dotcom %} corresponderá ao repositório com base nesse valor, em vez de usar o nome do gem.{% ifversion ghes or ghae %} Substitua *HOSTNAME* pelo nome do host da {% data variables.location.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Instalando um pacote

Você pode usar gems no {% data variables.product.prodname_registry %} da mesma forma que você usa gems em *rubygems.org*. Você precisa se autenticar no {% data variables.product.prodname_registry %} adicionando o usuário ou a organização do {% data variables.product.prodname_dotcom %} como uma fonte no arquivo *~/.gemrc* ou usando o Bundler e editando o *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. Para o Bundler, adicione o usuário ou a organização do {% data variables.product.prodname_dotcom %} como uma fonte no *Gemfile* para buscar gems dessa nova fonte. Por exemplo, você pode adicionar um novo bloco `source` ao *Gemfile* que só usa o {% data variables.product.prodname_registry %} para os pacotes que você especificar, substituindo *GEM NAME* pelo pacote que deseja instalar por meio do {% data variables.product.prodname_registry %} e *OWNER* pelo usuário ou pela organização que é o proprietário do repositório que contém o gem que deseja instalar.{% ifversion ghes %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome do host da instância do {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Substitua `REGISTRY-URL` pela URL do registro do RubyGems da instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host da {% data variables.location.product_location %}.{% endif %}

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
  ```
  $ gem install <GEM NAME> --version "0.1.1"
  ```

## Leitura adicional

- "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)"

