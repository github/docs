---
title: Criar e testar o Ruby
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto do Ruby.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'CI'
  - 'Ruby'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Este guia mostra como criar um fluxo de trabalho de integração contínua (CI) que compila e testa um aplicativo do Rubi. Se o seu teste do CI passar, você deverá implantar seu código ou publicar um gem.

### Pré-requisitos

Recomendamos que você tenha um entendimento básico do Ruby, YAML, das opções de configuração do fluxo de trabalho e de como criar um arquivo do fluxo de trabalho. Para obter mais informações, consulte:

- [Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby em 20 minutos](https://www.ruby-lang.org/en/documentation/quickstart/)

### Primeiros passos com o modelo de fluxo de trabalho do Ruby

{% data variables.product.prodname_dotcom %} fornece um modelo de fluxo de trabalho do Ruby que funcionará para a maioria dos projetos do Ruby. Para obter mais informações, consulte o [modelo do workflow do Ruby](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

Para iniciar rapidamente, adicione o modelo ao diretório `.github/workflows` do repositório.

{% raw %}
```yaml
name: Ruby

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

jobs:
  test:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Ruby
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: 2.6
    - name: Install dependencies
      run: bundle install
    - name: Run tests
      run: bundle exec rake
```
{% endraw %}

### Especificar a versão do Ruby

A maneira mais fácil de especificar uma versão do Ruby é usar a ação `ruby/setup-ruby` fornecida pela organização Ruby no GitHub. A ação adiciona qualquer versão do Ruby compatível com `PATH` para cada tarefa executada em um fluxo de trabalho. Para mais informações, consulte [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

Usar a ação `ruby/setup-ruby` do Ruby é a forma recomendada de usar o Ruby com o GitHub Actions porque garante um comportamento consistente entre executores diferentes e versões diferentes do Ruby.

A ação `setup-ruby` toma uma versão Ruby como uma entrada e configura essa versão no executor.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- uses: ruby/setup-ruby@v1
  with:
    ruby-version: 2.6 # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```
{% endraw %}

Como alternativa, você pode verificar um arquivo `.ruby-version` na raiz do seu repositório e `setup-ruby` usará a versão definida nesse arquivo.

### Testar com versões múltiplas do Ruby

Você pode adicionar uma estratégia matriz para executar seu fluxo de trabalho com mais de uma versão do Ruby. Por exemplo, você pode testar o seu código para as últimas versões de correção das versões 2.7, 2.6 e 2.5. O "x" é um caractere curinga que corresponde à última versão do patch disponível para uma versão.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: [2.7.x, 2.6.x, 2.5.x]
```
{% endraw %}

Cada versão do Ruby especificada no array `ruby-version` cria um trabalho que executa as mesmas etapas. O contexto {% raw %}`${{ matrix.ruby-version }}`{% endraw %} é usado para acessar a versão atual do trabalho. Para obter mais informações sobre estratégias e contextos da matriz, consulte a "Sintaxe de fluxo de trabalho para Ações no GitHub" e a "Sintaxe de Contexto e expressão para Ações no GitHub."

O fluxo de trabalho totalmente atualizado com uma estratégia de matriz pode parecer com isto:

{% raw %}
```yaml
name: Ruby CI

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

jobs:
  test:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        ruby-version: [2.7.x, 2.6.x, 2.5.x]

    steps:
    - uses: actions/checkout@v2
    - name: Set up Ruby ${{ matrix.ruby-version }}
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: ${{ matrix.ruby-version }}
    - name: Install dependencies
      run: bundle install
    - name: Run tests
      run: bundle exec rake
```
{% endraw %}

### Instalar dependências com o Bundler

A ação `setup-ruby` irá instalar o bundler automaticamente para você. A versão é determinada pelo arquivo `gemfile.lock`. Se nenhuma versão estiver presente no seu arquivo de bloqueio, será instalada a última versão compatível.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- uses: ruby/setup-ruby@v1
  with:
    ruby-version: 2.6
- run: bundle install
```
{% endraw %}

#### Memorizar dependências

Se você estiver usando executores hospedados em {% data variables.product.prodname_dotcom %}, as ações do `setup-ruby` fornecem um método para lidar automaticamente com o cache dos seus gems entre as execuções.

Para habilitar o cache, defina o seguinte.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@v1
    with:
      bundler-cache: true
```
{% endraw %}

Isso irá configurar o bundler para instalar seus gems em `vendor/cache`. Para cada execução bem sucedida do seu fluxo de trabalho, esta pasta será armazenada em cache por Ações e baixada novamente para subsequentes execuções de fluxo de trabalho. São usados um hash do seu gemfile.lock e versão do Ruby como a chave de cache. Se você instalar qualquer novo gem, ou mudar uma versão, o cache será invalidado e o bundler fará uma nova instalação.

**Fazer armazenamento em cache sem o setup-ruby**

Para maior controle sobre o cache, se você estiver usando executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá usar a ação `actions/cache` diretamente. Para obter mais informações, consulte "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Memorizar dependências para acelerar fluxos de trabalho</a>".

{% raw %}
```yaml
steps:
- uses: actions/cache@v2
  with:
    path: vendor/bundle
    key: ${{ runner.os }}-gems-${{ hashFiles('**/Gemfile.lock') }}
    restore-keys: |
      ${{ runner.os }}-gems-
- name: Bundle install
  run: |
    bundle config path vendor/bundle
    bundle install --jobs 4 --retry 3
```
{% endraw %}

Se você estiver usando uma compilação de matriz, você vai querer incluir as variáveis da matriz na sua chave de cache. Por exemplo, se você tem uma estratégia matriz para diferentes versões do ruby (`matrix. uby-version`) e diferentes sistemas operacionais (`matrix.os`), suas etapas de fluxo de trabalho podem se parecer com isso:

{% raw %}
```yaml
steps:
- uses: actions/cache@v2
  with:
    path: vendor/bundle
    key: bundle-use-ruby-${{ matrix.os }}-${{ matrix.ruby-version }}-${{ hashFiles('**/Gemfile.lock') }}
    restore-keys: |
      bundle-use-ruby-${{ matrix.os }}-${{ matrix.ruby-version }}-
- name: Bundle install
  run: |
    bundle config path vendor/bundle
    bundle install --jobs 4 --retry 3
```
{% endraw %}

### Matriz que testa o seu código

O exemplo a seguir da matriz testa todas as versões estáveis e versões principais de MRI, JRuby e TruffleRuby no Ubuntu e no macOS.

{% raw %}
```yaml
name: Matrix Testing

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

jobs:
  test:
    runs-on: ${{ matrix.os }}-latest
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu, macos]
        ruby: [2.5, 2.6, 2.7, head, debug, jruby, jruby-head, truffleruby, truffleruby-head]
    continue-on-error: ${{ endsWith(matrix.ruby, 'head') || matrix.ruby == 'debug' }}
    steps:
    - uses: actions/checkout@v2
    - uses: ruby/setup-ruby@v1
      with:
        ruby-version: ${{ matrix.ruby }}
    - run: bundle install
    - run: bundle exec rake
```
{% endraw %}

### Fazer linting do seu código

O exemplo a seguir instala `rubocop` e o utiliza para fazer lint de todos os arquivos. Para obter mais informações, consulte [Rubocop](https://github.com/rubocop-hq/rubocop). Pode [configurar o Rubocop](https://docs.rubocop.org/rubocop/configuration.html) para decidir as regras específicas de linting.

{% raw %}
```yaml
name: Linting

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: ruby/setup-ruby@v1
      with:
        ruby-version: 2.6
    - run: bundle install
    - name: Rubocop
      run: rubocop
```
{% endraw %}

### Publicar gems

Você pode configurar o seu fluxo de trabalho para publicar o seu pacote do Ruby em qualquer pacote de registro que você desejar quando os seus testes de CI passarem.

Você pode armazenar qualquer token de acesso ou credenciais necessárias para publicar seu pacote usando segredos do repositório. O exemplo a seguir cria e publica um pacote no `Registro de Pacote do GitHub` e `RubyGems`.

{% raw %}
```yaml

name: Ruby Gem

on:
  # Manually publish
  workflow_dispatch:
  # Alternatively, publish whenever changes are merged to the default branch.
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

jobs:
  build:
    name: Build + Publish
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Ruby 2.6
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: 2.6
    - run: bundle install

    - name: Publish to GPR
      run: |
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
        GEM_HOST_API_KEY: "${{secrets.RUBYGEMS_AUTH_TOKEN}}"
```
{% endraw %}
