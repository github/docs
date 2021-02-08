---
title: Rubyでのビルドとテスト
intro: Rubyプロジェクトのビルドとテストのための継続的インテグレーション（CI）ワークフローを作成できます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - CI
  - Ruby
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### はじめに

このガイドでは、Rubyアプリケーションのビルドとテストを行う継続的インテグレーション（CI）ワークフローの作成方法を紹介します。 CIテストにパスしたなら、コードをデプロイしたりgemを公開したりすることになるでしょう。

### 必要な環境

Ruby、YAML、ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳しい情報については、以下を参照してください。

- [{% data variables.product.prodname_actions %}を学ぶ](/actions/learn-github-actions)
- [20分のRuby](https://www.ruby-lang.org/en/documentation/quickstart/)

### Rubyワークフローテンプレートを使い始める

{% data variables.product.prodname_dotcom %}は、ほとんどのRubyプロジェクトで使えるRubyのワークフローテンプレートを提供しています。 詳しい情報については[Rubyワークフローテンプレート](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml)を参照してください。

手早く始めるために、テンプレートをリポジトリの`.github/workflows`ディレクトリに追加してください。

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

### Rubyのバージョンの指定

Rubyのバージョンを指定する最も簡単な方法は、GitHub上でRuby Organizationが提供している`ruby/setup-ruby`アクションを使うことです。 このアクションは、ワークフロー中の各ジョブの実行時に、`PATH`にサポートされているRubyのバージョンを追加します。 詳しい情報については[`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)を参照してください。

Using Ruby's `ruby/setup-ruby` action is the recommended way of using Ruby with GitHub Actions because it ensures consistent behavior across different runners and different versions of Ruby.

`setup-ruby`アクションはRubyのバージョンを入力として取り、ランナー上でそのバージョンを設定します。

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

あるいは、リポジトリのルートに`.ruby-version`ファイルをチェックインすれば、このファイルで定義されたバージョンを`setup-ruby`が使います。

### 複数のバージョンの Ruby でのテスト

複数バージョンのRubyでワークフローを実行するように、マトリクス戦略を追加できます。 たとえば、バージョン2.7、2.6、2.5の最新のパッチリリースでコードをテストできます。 この'x'はワイルドカードキャラクターで、そのバージョンで利用できる最新のパッチリリースにマッチします。

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: [2.7.x, 2.6.x, 2.5.x]
```
{% endraw %}

`ruby-version`配列で指定されたRubyの各バージョンに対して、同じステップを実行するジョブが作成されます。 現在のジョブのバージョンにアクセスするのには、{% raw %}`${{ matrix.ruby-version }}`{% endraw %}コンテキストが使われます。 マトリクス戦略とコンテキストに関する詳しい情報については、「GitHub Actionsのワークフロー構文」及び「GitHub Actionsのコンテキスト及び式構文」を参照してください。

マトリクス戦略を持つ更新された完全なワークフローは、以下のようになるでしょう。

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

### Bundlerでの依存関係のインストール

`setup-ruby` アクションは自動的にbundlerをインストールします。 バージョンは、`gemfile.lock`ファイルで決定されます。 ロックファイルにバージョンがなければ、互換性のある最新のバージョンがインストールされます。

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

#### 依存関係のキャッシング

{% data variables.product.prodname_dotcom %}ホストランナーを使っているなら、`setup-ruby`は実行間でのgemのキャッシュを自動的に処理する方法を提供します。

キャッシングを有効にするには、以下の設定をしてください。

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@v1
    with:
      bundler-cache: true
```
{% endraw %}

これで、gemを`vendor/cache`にインストールするようbundlerが設定されます。 ワークフローの実行が成功するたびに、このフォルダーはアクションによってキャッシュされ、それ以降のワークフローの実行の際に再ダウンロードされます。 キャッシュのキーとしては、gemfile.lockのハッシュとRubyのバージョンが使われます。 新しいgemをインストールしたり、バージョンを変更したりすると、キャッシュは無効になり、bundlerは新しくインストールを行います。

**setup-rubyを使わないキャッシング**

キャッシュをさらに制御するには、{% data variables.product.prodname_dotcom %}ホストランナーを使っているなら、`actions/cache`アクションを直接使うことができます。 詳しい情報については、「<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">ワークフローを高速化するための依存関係のキャッシュ</a>」を参照してください。

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

マトリクスビルドを使っているなら、キャッシュのキーにマトリクスの変数を含めたくなるでしょう。 たとえば様々なRubyのバージョン(`matrix.ruby-version`) と、様々なオペレーティングシステム(`matrix.os`)のマトリクス戦略を持っているなら、ワークフローのステップは以下のようになるでしょう。

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

### コードのマトリクステスト

以下の例のマトリクスは、すべての安定リリースとヘッドバージョンのMRI、JRuby、TruffleRubyをUbuntu及びmacOSでテストします。

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

### コードの文法チェック

以下の例は`rubocop`をインストールし、それを使ってすべてのファイルの文法チェックを行います。 詳しい情報については[ Rubocop](https://github.com/rubocop-hq/rubocop)を参照してください。 特定の文法チェックルールを決めるために、[ Rubocopを設定](https://docs.rubocop.org/rubocop/configuration.html)できます。

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

### gemの公開

CIテストにパスしたなら、Rubyパッケージを任意のパッケージレジストリに公開するようにワークフローを設定できます。

パッケージを公開するのに必要なアクセストークンや認証情報は、リポジトリシークレットを使って保存できます。 以下の例は、パッケージを作成して`GitHub Package Registry`及び`RubyGems`に公開します。

{% raw %}
```yaml

name: Ruby Gem

on:
  # 手動で公開
  workflow_dispatch:
  # あるいは変更がデフォルトブランチにマージされたときに公開。
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
