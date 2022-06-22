---
title: 构建和测试 Ruby
intro: 您可以创建持续集成 (CI) 工作流程来构建和测试您的 Ruby 项目。
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
shortTitle: 构建和测试Ruby
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南介绍如何创建用来生成和测试 Ruby 应用程序的持续集成 (CI) 工作流程。 如果 CI 测试通过，您可能想要部署代码或发布 gem。

## 基本要求

建议基本了解 Ruby、YAML、工作流程配置选项以及如何创建工作流程文件。 更多信息请参阅：

- [了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby 20 分钟](https://www.ruby-lang.org/en/documentation/quickstart/)

## 使用 Ruby 入门工作流程

{% data variables.product.prodname_dotcom %} 提供有 Ruby 入门工作流程，该工作流程将适用于大多数 Ruby 项目。 更多信息请参阅 [Ruby 入门工作流程](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml)。

要快速开始，请将入门工作流程添加到仓库的 `.github/workflows` 目录中。 下面显示的工作流假定仓库的默认分支是 `main`。

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

## 指定 Ruby 版本

指定 Ruby 版本的最简单方法是使用 Ruby 组织在 GitHub 上提供的 `ruby/setup-ruby` 操作。 该操作将任何受支持的 Ruby 版本添加到工作流程中运行的每个作业的 `PATH`。 有关详细信息和可用的 Ruby 版本，请参阅 [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)。

使用 Ruby 的 `ruby/setup-ruby` 操作是 Python 与 GitHub Actions 结合使用时的推荐方式，因为它能确保不同运行器和不同版本的 Ruby 行为一致。

`setup-ruby` 操作采用 Ruby 版本作为输入，并在运行器上配置该版本。

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

或者，您也可以将 `.ruby-version` 文件检入仓库的根目录，而 `setup-ruby` 将使用该文件中定义的版本。

## 使用多个版本的 Ruby 进行测试

您可以添加矩阵策略，以在多个版本的 Ruby 上运行工作流程。 例如，您可以根据版本 3.1、3.0 和 2.7 的最新修补程序版本测试代码。

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

`ruby-version` 阵列中指定的每个 Ruby 版本都会创建一个运行相同步骤的作业。 {% raw %}`${{ matrix.ruby-version }}`{% endraw %} 上下文用于访问当前作业的版本。 有关矩阵策略和上下文的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions)”和“[上下文](/actions/learn-github-actions/contexts)”。

包含矩阵策略的完整更新工作流程可能看起如下：

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

## 使用 Bundler 安装依赖项

`setup-ruby` 操作将自动为您安装 Bundler。 版本由您的 `gemfile.lock` 文件决定。 如果您的锁定文件中没有版本，则会安装最新的兼容版本。

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### 缓存依赖项

`setup-ruby` 操作提供在运行之间自动处理 Gem 缓存的方法。

要启用缓存，请设置以下内容。

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

这将配置 Bundler 以安装 gem 到 `vendor/cache`。 对于工作流程的每次成功运行，此文件夹将由 {% data variables.product.prodname_actions %} 缓存，并重新下载用于后续的工作流程运行。 gemfile.lock 和 Ruby 版本的哈希值用作缓存密钥。 如果安装任何新 Gem 或更改版本，缓存将失效，Bundler 将进行全新安装。

**无 setup-ruby 的缓存**

为了加强对缓存的控制，您可以直接使用 `actions/cache` 操作。 更多信息请参阅“[缓存依赖项以加快工作流程](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”。

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

如果您使用的是矩阵构建，您将会想要在缓存密钥中包含矩阵变量。 例如，如果您e 不同 ruby 版本 (`matrix.ruby-version`) 和不同系统 (`matrix.os`) 的矩阵策略，您的工作流程步骤可能看起来如下：

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

## 测试代码的矩阵

下面的示例矩阵在 Ubuntu 和 macOS 上测试 MRI、JRuby 和 TruffleRuby 的所有稳定版本和头部版本。

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

## 嵌入代码

下面的示例安装 `rubocop` 并用它来嵌入所有文件。 更多信息请参阅 [RuboCop](https://github.com/rubocop-hq/rubocop)。 您可以[配置 Rubocop](https://docs.rubocop.org/rubocop/configuration.html) 来决定特定的嵌入规则。

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

## 发布 Gem

您可以配置工作流程在 CI 测试通过时将 Ruby 包发布到您想要的任何包注册表。

您可以使用仓库密码存储发布软件包所需的访问令牌或凭据。 下面的示例创建包并将其发布到 `GitHub Package 注册表`和 `RubyGems`。

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
    permissions:
      packages: write
      contents: read{% endif %}

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
