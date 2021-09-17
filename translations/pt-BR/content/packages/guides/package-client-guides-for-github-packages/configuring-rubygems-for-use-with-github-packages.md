---
title: Configurar o RubyGems para uso com o GitHub Packages
intro: 'Você pode configurar RubyGems para publicar um pacote em {% data variables.product.prodname_registry %} e usar pacotes armazenados em {% data variables.product.prodname_registry %} como dependências em um projeto Ruby com o Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---
{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**Note:** When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

### Pré-requisitos

- Você deve ter o rubygems 2.4.1 ou superior. Para encontrar sua versão do rubygems:

  ```shell
  $ gem --version
  ```

  - Você deve ter o bundler 1.6.4 ou superior. Para encontrar sua versão do Bundler:
  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

  - Instale o keycutter para gerenciar várias credenciais. Para instalar o keycutter:
  ```shell
  $ gem install keycutter
  ```

### Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Você pode efetuar a autenticação em {% data variables.product.prodname_registry %} com o RubyGems editando o arquivo *~/.gem/credentials* para publicação de gems, editando o arquivo *~/.gemrc* para instalar um único gem, ou usando o Bundler para rastrear e instalar um ou mais gems.

Para publicar novos gems, você precisa efetuar a autenticação no {% data variables.product.prodname_registry %} com RubyGems, editando seu arquivo *~/.gem/credentials* para incluir seu token de acesso pessoal.  Crie um novo arquivo *~/.gem/credentials* se este arquivo não existir.

Por exemplo, você criaria ou editaria um arquivo *~/.gem/credentials* para incluir o indicado a seguir, substituindo *TOKEN* pelo seu token de acesso pessoal.

```shell
gem.metadata = { "github_repo" => "ssh://github.com/OWNER/REPOSITORY" }
```

Para instalar gems, você deve efetuar a autenticação no {% data variables.product.prodname_registry %}, editando o arquivo *~/.gemrc* para o seu projeto incluir `https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. Você deve substituir:
  - `NOME DE USUÁRIO` pelo seu nome de usuário no {% data variables.product.prodname_dotcom %}.
  - `TOKEN` pelo seu token de acesso pessoal.
  - `PROPRIETÁRIO` com o nome da conta do usuário ou da organização que é proprietário do repositório que contém o seu projeto.{% if enterpriseServerVersions contains currentVersion %}
  - `URL` com a URL para o registro do Rubygems da sua instância. Se sua instância tiver o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância estiver com o isolamento de subdomínio desabilitado, use `HOSTNAME/registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome de host da sua instância do {% data variables.product.prodname_ghe_server %}.
{% elsif currentVersion == "github-ae@latest" %}
  - `REGISTRY-URL` com a URL para o registro do Rubygems da sua instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome de host de {% data variables.product.product_location %}.
{% endif %}

Se você não tiver um arquivo *~/.gemrc*, crie um arquivo *~/.gemrc* usando este exemplo.

```shell
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```

Para autenticar com o bundler, configure o Bundler para usar o seu token de acesso pessoal, substituindo *USERNAME* com seu {% data variables.product.prodname_dotcom %} nome de usuário, *TOKEN* com seu token de acesso pessoal, e *OWNER* com o nome do usuário ou conta da organização proprietária do repositório que contém o seu projeto.{% if enterpriseServerVersions contains currentVersion %} Substitua `URL REGISTRO` pelo URL do registro Rubygems da sua instância. Se sua instância tiver o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância estiver com o isolamento de subdomínio desabilitado, use `HOSTNAME/registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome de host da sua instância de {% data variables.product.prodname_ghe_server %}.{% elsif currentVersion == "github-ae@latest" %}Substitua `REGISTRY-URL` pela URL do registro do Rubygems da sua instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome de host de {% data variables.product.product_location %}.{% endif %}

```shell
$ bundle config https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

#### Efetuando a autenticação com o `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publicar um pacote

{% data reusables.package_registry.default-name %} Por exemplo, ao publicar `octo-gem` na organização `octo-org` , {% data variables.product.prodname_registry %} publicará o gem no repositório `octo-org/octo-gem`. Para obter mais informações sobre como criar seu gem, consulte "[Criar seu próprio gem](http://guides.rubygems.org/make-your-own-gem/)" na documentação do RubyGems.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Crie o pacote da *gemspec* para criar o pacote *.gem*.
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. Publicar um pacote em {% data variables.product.prodname_registry %}, substituindo o `OWNER` pelo nome do usuário ou conta da organização proprietária do repositório que contém o seu projeto e `OCTO-GEM` pelo nome do seu pacote de gemas.{% if enterpriseServerVersions contains currentVersion %} substitui `REGISTRY-URL` pelo URL do registro Rubygems da sua instância. Se sua instância tiver o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância estiver com o isolamento de subdomínio desabilitado, use `HOSTNAME/registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome de host da sua instância de {% data variables.product.prodname_ghe_server %}.{% elsif currentVersion == "github-ae@latest" %} Substitua `REGISTRY-URL` pela URL do registro do Rubygems da sua instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome de host de {% data variables.product.product_location %}.{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

### Publicar vários pacotes no mesmo repositório

Para publicar vários gems no mesmo repositório, você pode incluir a URL no repositório de {% data variables.product.prodname_dotcom %} no campo `github_repo` em `gem.metadata`. Se você incluir este campo, {% data variables.product.prodname_dotcom %} corresponderá ao repositório baseado neste valor, ao invés de usar o nome do gem.{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Substitua *HOSTNAME* pelo nome de host de {% data variables.product.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

### Instalar um pacote

É possível usar gems do {% data variables.product.prodname_registry %} assim como você usa gems de *rubygems.org*. Você precisa efetuar a autenticação no {% data variables.product.prodname_registry %} , adicionando o seu usuário ou organização do {% data variables.product.prodname_dotcom %} como fonte ao arquivo *~/.gemrc* ou usando o Bundler e editando-o *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. Para o Bundler, adicione seu usuário ou organização {% data variables.product.prodname_dotcom %} como uma fonte no seu *Gemfile* para buscar gems a partir desta nova fonte. Por exemplo, você pode adicionar um novo bloco`de fonte`ao seu *Gemfile* que usa {% data variables.product.prodname_registry %} apenas para os pacotes que você especificar, substituindo *GEM NOME* pelo pacote que deseja instalar de {% data variables.product.prodname_registry %} e *OWNER* pelo usuário ou organização que possui o repositório que contém a gema que deseja instalar.{% if enterpriseServerVersions contains currentVersion %} substitua `URL REGISTRY` pelo URL do registro Rubygems da sua instância. Se sua instância tiver o isolamento de subdomínio habilitado, use `rubygems.HOSTNAME`. Se a sua instância estiver com o isolamento de subdomínio desabilitado, use `HOSTNAME/registry/rubygems`. Em ambos os casos, substitua *HOSTNAME* pelo nome de host da sua instância de {% data variables.product.prodname_ghe_server %}.{% elsif currentVersion == "github-ae@latest" %} Substitua `REGISTRY-URL` pela URL do registro do Rubygems da sua instância, `rubygems.HOSTNAME`. Substitua *HOSTNAME* pelo nome de host de {% data variables.product.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. Para versões do Bundler anteriores à 1.7.0, você deve adicionar uma nova `fonte` global. Para obter mais informações sobre como usar o Bundler, consulte a [documentação bundler.io](http://bundler.io/v1.5/gemfile.html).

  ```ruby
  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Instale o pacote:
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

### Leia mais

- "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Excluir um pacote](/packages/learn-github-packages/deleting-a-package){% endif %}"
