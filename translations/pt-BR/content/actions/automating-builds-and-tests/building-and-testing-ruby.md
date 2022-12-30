---
title: Criar e testar o Ruby
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto do Ruby.
redirect_from:
  - /actions/guides/building-and-testing-ruby
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Ruby
shortTitle: Build & test Ruby
ms.openlocfilehash: d6408613be9666dc86e982f99dcba47bbe3f7f9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408984'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar um fluxo de trabalho de integração contínua (CI) que compila e testa um aplicativo do Rubi. Se o seu teste do CI passar, você deverá implantar seu código ou publicar um gem.

## Pré-requisitos

Recomendamos que você tenha um entendimento básico do Ruby, YAML, das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, consulte:

- "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- [Ruby em 20 minutos](https://www.ruby-lang.org/en/documentation/quickstart/)

## Usando o fluxo de trabalho inicial do Ruby

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial do Ruby que irá funcionar na maioria dos projetos do Ruby. Para obter mais informações, confira o [fluxo de trabalho inicial do Ruby](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

Para experimentar uma introdução rápida, adicione o fluxo de trabalho inicial ao diretório `.github/workflows` do repositório. O fluxo de trabalho mostrado abaixo pressupõe que o branch padrão do repositório seja `main`.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Ruby

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:

    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Ruby
        uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
        with:
          ruby-version: '3.1'
      - name: Install dependencies
        run: bundle install
      - name: Run tests
        run: bundle exec rake
```

## Especificar a versão do Ruby

A maneira mais fácil de especificar uma versão do Ruby é usando a ação `ruby/setup-ruby` fornecida pela organização Ruby no GitHub. A ação adiciona qualquer versão do Ruby compatível a `PATH` em cada trabalho executado em um fluxo de trabalho. Para obter mais informações e as versões disponíveis do Ruby, confira [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

O uso da ação `ruby/setup-ruby` do Ruby é a maneira recomendada de usar o Ruby com o GitHub Actions porque garante um comportamento consistente entre diferentes executores e versões do Ruby.

A ação `setup-ruby` usa uma versão do Ruby como entrada e configura essa versão no executor.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

Como alternativa, você poderá fazer check-in de um arquivo `.ruby-version` na raiz do repositório, e `setup-ruby` usará a versão definida nesse arquivo.

## Testar com versões múltiplas do Ruby

Você pode adicionar uma estratégia matriz para executar seu fluxo de trabalho com mais de uma versão do Ruby. Por exemplo, você pode testar seu código com as últimas versões de patch das versões 3.1, 3.0 e 2.7.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

Cada versão do Ruby especificada na matriz `ruby-version` cria um trabalho que executa as mesmas etapas. O contexto {% raw %}`${{ matrix.ruby-version }}`{% endraw %} é usado para acessar a versão do trabalho atual. Para obter mais informações sobre estratégias e contextos de matriz, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions)" e "[Contextos](/actions/learn-github-actions/contexts)".

O fluxo de trabalho totalmente atualizado com uma estratégia de matriz pode parecer com isto:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Ruby CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        ruby-version: ['3.1', '3.0', '2.7']

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: {% raw %}Set up Ruby ${{ matrix.ruby-version }}{% endraw %}
        uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
        with:
          ruby-version: {% raw %}${{ matrix.ruby-version }}{% endraw %}
      - name: Install dependencies
        run: bundle install
      - name: Run tests
        run: bundle exec rake
```

## Instalar dependências com o Bundler

A ação `setup-ruby` instalará automaticamente o empacotador para você. A versão é determinada pelo arquivo `gemfile.lock`. Se nenhuma versão estiver presente no seu arquivo de bloqueio, será instalada a última versão compatível.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### Memorizar dependências

As ações `setup-ruby` fornecem um método para lidar automaticamente com o cache dos seus gems entre as execuções.

Para habilitar o cache, defina o seguinte.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

Isso vai configurar o empacotador para instalar os gems em `vendor/cache`. Para cada execução bem sucedida do seu fluxo de trabalho, esta pasta será armazenada em cache pelo {% data variables.product.prodname_actions %} e baixada novamente nas execuções de fluxo de trabalho subsequentes. São usados um hash do seu gemfile.lock e versão do Ruby como a chave de cache. Se você instalar qualquer novo gem, ou mudar uma versão, o cache será invalidado e o bundler fará uma nova instalação.

**Como fazer o armazenamento em cache sem o setup-ruby**

Para maior controle sobre o cache, você pode usar a ação `actions/cache` diretamente. Para obter mais informações, confira "[Como armazenar dependências em cache para acelerar os fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

```yaml
steps:
- uses: {% data reusables.actions.action-cache %}
  with:
    path: vendor/bundle
    key: {% raw %}${{ runner.os }}-gems-${{ hashFiles('**/Gemfile.lock') }}{% endraw %}
    restore-keys: |
      {% raw %}${{ runner.os }}-gems-{% endraw %}
- name: Bundle install
  run: |
    bundle config path vendor/bundle
    bundle install --jobs 4 --retry 3
```

Se você estiver usando uma compilação de matriz, você vai querer incluir as variáveis da matriz na sua chave de cache. Por exemplo, se você tiver uma estratégia de matriz para diferentes versões do Ruby (`matrix.ruby-version`) e diferentes sistemas operacionais (`matrix.os`), as etapas de fluxo de trabalho poderão ter esta aparência:

```yaml
steps:
- uses: {% data reusables.actions.action-cache %}
  with:
    path: vendor/bundle
    key: {% raw %}bundle-use-ruby-${{ matrix.os }}-${{ matrix.ruby-version }}-${{ hashFiles('**/Gemfile.lock') }}{% endraw %}
    restore-keys: |
      {% raw %}bundle-use-ruby-${{ matrix.os }}-${{ matrix.ruby-version }}-{% endraw %}
- name: Bundle install
  run: |
    bundle config path vendor/bundle
    bundle install --jobs 4 --retry 3
```

{% endif %}

## Matriz que testa o seu código

O exemplo a seguir da matriz testa todas as versões estáveis e versões principais de MRI, JRuby e TruffleRuby no Ubuntu e no macOS.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Matrix Testing

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: {% raw %}${{ matrix.os }}-latest{% endraw %}
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu, macos]
        ruby: [2.5, 2.6, 2.7, head, debug, jruby, jruby-head, truffleruby, truffleruby-head]
    continue-on-error: {% raw %}${{ endsWith(matrix.ruby, 'head') || matrix.ruby == 'debug' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - run: bundle install
      - run: bundle exec rake
```

## Fazer linting do seu código

O exemplo a seguir instala o `rubocop` e o usa para fazer lint de todos os arquivos. Para obter mais informações, confira [RuboCop](https://github.com/rubocop-hq/rubocop). Você pode [configurar o RuboCop](https://docs.rubocop.org/rubocop/configuration.html) para decidir as regras de lint específicas que serão usadas.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Linting

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: 2.6
      - run: bundle install
      - name: Rubocop
        run: rubocop
```

## Publicar gems

Você pode configurar o seu fluxo de trabalho para publicar o seu pacote do Ruby em qualquer pacote de registro que você desejar quando os seus testes de CI passarem.

Você pode armazenar qualquer token de acesso ou credenciais necessárias para publicar seu pacote usando segredos do repositório. O exemplo a seguir cria e publica um pacote em `GitHub Package Registry` e em `RubyGems`.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Ruby Gem

on:
  # Manually publish
  workflow_dispatch:
  # Alternatively, publish whenever changes are merged to the `main` branch.
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    name: Build + Publish
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Ruby 2.6
        uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: 2.6
      - run: bundle install

      - name: Publish to GPR
        run: |{% raw %}
          mkdir -p $HOME/.gem
          touch $HOME/.gem/credentials
          chmod 0600 $HOME/.gem/credentials
          printf -- "---\n:github: ${GEM_HOST_API_KEY}\n" > $HOME/.gem/credentials
          gem build *.gemspec
          gem push --KEY github --host https://rubygems.pkg.github.com/${OWNER} *.gem
        env:
          GEM_HOST_API_KEY: "Bearer ${{secrets.GITHUB_TOKEN}}"
          OWNER: ${{ github.repository_owner }}

      - name: Publish to RubyGems
        run: |
          mkdir -p $HOME/.gem
          touch $HOME/.gem/credentials
          chmod 0600 $HOME/.gem/credentials
          printf -- "---\n:rubygems_api_key: ${GEM_HOST_API_KEY}\n" > $HOME/.gem/credentials
          gem build *.gemspec
          gem push *.gem
        env:
          GEM_HOST_API_KEY: "${{secrets.RUBYGEMS_AUTH_TOKEN}}"{% endraw %}
```
