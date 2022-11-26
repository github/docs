---
title: Rubyでのビルドとテスト
intro: Rubyプロジェクトのビルドとテストのための継続的インテグレーション（CI）ワークフローを作成できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408988'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Rubyアプリケーションのビルドとテストを行う継続的インテグレーション（CI）ワークフローの作成方法を紹介します。 CIテストにパスしたなら、コードをデプロイしたりgemを公開したりすることになるでしょう。

## 前提条件

Ruby、YAML、ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳細については、次を参照してください。

- [{% data variables.product.prodname_actions %} について](/actions/learn-github-actions)
- [20 分で Ruby](https://www.ruby-lang.org/en/documentation/quickstart/)

## Ruby スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} では、ほとんどの Ruby プロジェクトで使用できる Ruby スターター ワークフローが提供されています。 詳細については、「[Ruby スターター ワークフロー](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml)」を参照してください。

すぐに作業を開始するには、リポジトリの `.github/workflows` ディレクトリにスターター ワークフローを追加します。 以下に示すワークフローは、リポジトリのデフォルトブランチが `main` であることを前提としています。

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

## Rubyのバージョンの指定

Ruby のバージョンを指定する最も簡単な方法は、Ruby 組織によって GitHub で提供されている `ruby/setup-ruby` アクションを使用することです。 このアクションにより、ワークフロー内の各ジョブ実行に対する `PATH` に、サポートされている Ruby のバージョンが追加されます。 詳細と使用可能な Ruby のバージョンについては、[`ruby/setup-ruby`](https://github.com/ruby/setup-ruby) を参照してください。

GitHub Actions で Ruby を使用する場合、Ruby の `ruby/setup-ruby` アクションを使用すると、異なるランナーおよび Ruby の異なるバージョンの間で一貫した動作が保証されるため、この方法をお勧めします。

`setup-ruby` アクションは Ruby のバージョンを入力として受け取り、ランナー上でそのバージョンを構成します。

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

または、リポジトリのルートに `.ruby-version` ファイルをチェックインすると、そのファイルで定義されているバージョンが `setup-ruby` で使われます。

## 複数のバージョンの Ruby でのテスト

複数バージョンのRubyでワークフローを実行するように、マトリクス戦略を追加できます。 たとえば、バージョン 3.1、3.0、2.7 の最新のパッチ リリースに対してコードをテストできます。

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

`ruby-version` 配列で指定されている Ruby の各バージョンで、同じ手順を実行するジョブが作成されます。 現在のジョブのバージョンにアクセスするには、{% raw %}`${{ matrix.ruby-version }}`{% endraw %} コンテキストが使われます。 マトリックスの戦略とコンテキストの詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions)」および「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

マトリクス戦略を持つ更新された完全なワークフローは、以下のようになるでしょう。

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

## Bundlerでの依存関係のインストール

`setup-ruby` アクションにより、バンドルが自動的にインストールされます。 バージョンは `gemfile.lock` ファイルによって決まります。 ロックファイルにバージョンがなければ、互換性のある最新のバージョンがインストールされます。

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### 依存関係のキャッシング

`setup-ruby` アクションによって実行間で gem のキャッシュを自動的に処理する方法が提供されます。

キャッシングを有効にするには、以下の設定をしてください。

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

これにより、gem を `vendor/cache` にインストールするように Bundler が構成されます。 ワークフローの実行が成功するたびに、このフォルダーは {% data variables.product.prodname_actions %} によってキャッシュされ、それ以降のワークフローの実行の際に再ダウンロードされます。 キャッシュのキーとしては、gemfile.lockのハッシュとRubyのバージョンが使われます。 新しいgemをインストールしたり、バージョンを変更したりすると、キャッシュは無効になり、bundlerは新しくインストールを行います。

**setup-ruby を使用しないキャッシュ**

キャッシュをより詳細に制御するために、`actions/cache` アクションを直接使用できます。 詳細については、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。

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

マトリクスビルドを使っているなら、キャッシュのキーにマトリクスの変数を含めたくなるでしょう。 たとえば、Ruby のさまざまなバージョン (`matrix.ruby-version`) とさまざまなオペレーティング システム (`matrix.os`) に対してマトリクス戦略を使用している場合、ワークフローの手順は次のようになります。

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

## コードのマトリクステスト

以下の例のマトリクスは、すべての安定リリースとヘッドバージョンのMRI、JRuby、TruffleRubyをUbuntu及びmacOSでテストします。

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

## コードの文法チェック

次の例では、`rubocop` がインストールされ、それを使ってすべてのファイルがリントされます。 詳細については、[RuboCop](https://github.com/rubocop-hq/rubocop) を参照してください。 特定のリンティング規則を決定するように、[Rubocop を構成する](https://docs.rubocop.org/rubocop/configuration.html)ことができます。

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

## gemの公開

CIテストにパスしたなら、Rubyパッケージを任意のパッケージレジストリに公開するようにワークフローを設定できます。

パッケージを公開するのに必要なアクセストークンや認証情報は、リポジトリシークレットを使って保存できます。 次の例では、パッケージが作成されて、`GitHub Package Registry` と `RubyGems` に発行されます。

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
