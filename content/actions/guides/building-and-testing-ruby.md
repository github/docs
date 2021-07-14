---
title: Building and testing Ruby
intro: You can create a continuous integration (CI) workflow to build and test your Ruby project.
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
type: tutorial
topics:
  - CI
  - Ruby
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.actions-not-certified-by-github-note %}

## Introduction

This guide shows you how to create a continuous integration (CI) workflow that builds and tests a Ruby application. If your CI tests pass, you may want to deploy your code or publish a gem.

## Prerequisites

We recommend that you have a basic understanding of Ruby, YAML, workflow configuration options, and how to create a workflow file. For more information, see:

- [Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby in 20 minutes](https://www.ruby-lang.org/en/documentation/quickstart/)

## Starting with the Ruby workflow template

{% data variables.product.prodname_dotcom %} provides a Ruby workflow template that will work for most Ruby projects. For more information, see the [Ruby workflow template](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

To get started quickly, add the template to the `.github/workflows` directory of your repository. The workflow shown below assumes that the default branch for your repository is `main`.

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
      - uses: actions/checkout@v2
      - name: Set up Ruby
        uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: 2.6
      - name: Install dependencies
        run: bundle install
      - name: Run tests
        run: bundle exec rake
```

## Specifying the Ruby version

The easiest way to specify a Ruby version is by using the `ruby/setup-ruby` action provided by the Ruby organization on GitHub. The action adds any supported Ruby version to `PATH` for each job run in a workflow. For more information see, the [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

Using Ruby's `ruby/setup-ruby` action is the recommended way of using Ruby with GitHub Actions because it ensures consistent behavior across different runners and different versions of Ruby.

The `setup-ruby` action takes a Ruby version as an input and configures that version on the runner.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
  with:
    ruby-version: 2.6 # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```
{% endraw %}

Alternatively, you can check a `.ruby-version` file  into the root of your repository and `setup-ruby` will use the version defined in that file.

## Testing with multiple versions of Ruby

You can add a matrix strategy to run your workflow with more than one version of Ruby. For example, you can test your code against the latest patch releases of versions 2.7, 2.6, and 2.5. The 'x' is a wildcard character that matches the latest patch release available for a version.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: [2.7.x, 2.6.x, 2.5.x]
```
{% endraw %}

Each version of Ruby specified in the `ruby-version` array creates a job that runs the same steps. The {% raw %}`${{ matrix.ruby-version }}`{% endraw %} context is used to access the current job's version. For more information about matrix strategies and contexts, see "Workflow syntax for GitHub Actions" and "Context and expression syntax for GitHub Actions."

The full updated workflow with a matrix strategy could look like this:

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
        ruby-version: [2.7.x, 2.6.x, 2.5.x]

    steps:
      - uses: actions/checkout@v2
      - name: {% raw %}Set up Ruby ${{ matrix.ruby-version }}{% endraw %}
        uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby-version }}{% endraw %}
      - name: Install dependencies
        run: bundle install
      - name: Run tests
        run: bundle exec rake
```

## Installing dependencies with Bundler

The `setup-ruby` action will automatically install bundler for you. The version is determined by your `gemfile.lock` file. If no version is present in your lockfile, then the latest compatible version will be installed.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
  with:
    ruby-version: 2.6
- run: bundle install
```
{% endraw %}

### Caching dependencies

If you are using {% data variables.product.prodname_dotcom %}-hosted runners, the `setup-ruby` actions provides a method to automatically handle the caching of your gems between runs.

To enable caching, set the following.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
    with:
      bundler-cache: true
```
{% endraw %}

This will configure bundler to install your gems to `vendor/cache`. For each successful run of your workflow, this folder will be cached by Actions and re-downloaded for subsequent workflow runs. A hash of your gemfile.lock and the Ruby version are used as the cache key. If you install any new gems, or change a version, the cache will be invalidated and bundler will do a fresh install.

**Caching without setup-ruby**

For greater control over caching, if you are using {% data variables.product.prodname_dotcom %}-hosted runners, you can use the `actions/cache` Action directly. For more information, see "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>."

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

If you're using a matrix build, you will want to include the matrix variables in your cache key. For example, if you have a matrix strategy for different ruby versions (`matrix.ruby-version`) and different operating systems (`matrix.os`), your workflow steps might look like this:

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

## Matrix testing your code

The following example matrix tests all stable releases and head versions of MRI, JRuby and TruffleRuby on Ubuntu and macOS.

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
      - uses: actions/checkout@v2
      - uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - run: bundle install
      - run: bundle exec rake
```

## Linting your code

The following example installs `rubocop` and uses it to lint all files. For more information, see [Rubocop](https://github.com/rubocop-hq/rubocop). You can [configure Rubocop](https://docs.rubocop.org/rubocop/configuration.html) to decide on the specific linting rules.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Linting

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: 2.6
      - run: bundle install
      - name: Rubocop
        run: rubocop
```

## Publishing Gems

You can configure your workflow to publish your Ruby package to any package registry you'd like when your CI tests pass.

You can store any access tokens or credentials needed to publish your package using repository secrets. The following example creates and publishes a package to `GitHub Package Registry` and `RubyGems`.

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
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      packages: write
      contents: read{% endif %}

    steps:{% raw %}
      - uses: actions/checkout@v2
      - name: Set up Ruby 2.6
        uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
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
          GEM_HOST_API_KEY: "${{secrets.RUBYGEMS_AUTH_TOKEN}}"{% endraw %}
```
