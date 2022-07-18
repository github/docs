---
title: Building and testing Ruby
intro: You can create a continuous integration (CI) workflow to build and test your Ruby project.
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to create a continuous integration (CI) workflow that builds and tests a Ruby application. If your CI tests pass, you may want to deploy your code or publish a gem.

## Prerequisites

We recommend that you have a basic understanding of Ruby, YAML, workflow configuration options, and how to create a workflow file. For more information, see:

- [Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby in 20 minutes](https://www.ruby-lang.org/en/documentation/quickstart/)

## Using the Ruby starter workflow

{% data variables.product.prodname_dotcom %} provides a Ruby starter workflow that will work for most Ruby projects. For more information, see the [Ruby starter workflow](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

To get started quickly, add the starter workflow to the `.github/workflows` directory of your repository. The workflow shown below assumes that the default branch for your repository is `main`.

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

## Specifying the Ruby version

The easiest way to specify a Ruby version is by using the `ruby/setup-ruby` action provided by the Ruby organization on GitHub. The action adds any supported Ruby version to `PATH` for each job run in a workflow. For more information and available Ruby versions, see [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

Using Ruby's `ruby/setup-ruby` action is the recommended way of using Ruby with GitHub Actions because it ensures consistent behavior across different runners and different versions of Ruby.

The `setup-ruby` action takes a Ruby version as an input and configures that version on the runner.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

Alternatively, you can check a `.ruby-version` file  into the root of your repository and `setup-ruby` will use the version defined in that file.

## Testing with multiple versions of Ruby

You can add a matrix strategy to run your workflow with more than one version of Ruby. For example, you can test your code against the latest patch releases of versions 3.1, 3.0, and 2.7.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

Each version of Ruby specified in the `ruby-version` array creates a job that runs the same steps. The {% raw %}`${{ matrix.ruby-version }}`{% endraw %} context is used to access the current job's version. For more information about matrix strategies and contexts, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions)" and "[Contexts](/actions/learn-github-actions/contexts)."

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

## Installing dependencies with Bundler

The `setup-ruby` action will automatically install bundler for you. The version is determined by your `gemfile.lock` file. If no version is present in your lockfile, then the latest compatible version will be installed.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### Caching dependencies

The `setup-ruby` actions provides a method to automatically handle the caching of your gems between runs.

To enable caching, set the following.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

This will configure bundler to install your gems to `vendor/cache`. For each successful run of your workflow, this folder will be cached by {% data variables.product.prodname_actions %} and re-downloaded for subsequent workflow runs. A hash of your gemfile.lock and the Ruby version are used as the cache key. If you install any new gems, or change a version, the cache will be invalidated and bundler will do a fresh install.

**Caching without setup-ruby**

For greater control over caching, you can use the `actions/cache` action directly. For more information, see "[Caching dependencies to speed up workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."

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

If you're using a matrix build, you will want to include the matrix variables in your cache key. For example, if you have a matrix strategy for different ruby versions (`matrix.ruby-version`) and different operating systems (`matrix.os`), your workflow steps might look like this:

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
      - uses: {% data reusables.actions.action-checkout %}
      - uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - run: bundle install
      - run: bundle exec rake
```

## Linting your code

The following example installs `rubocop` and uses it to lint all files. For more information, see [RuboCop](https://github.com/rubocop-hq/rubocop). You can [configure Rubocop](https://docs.rubocop.org/rubocop/configuration.html) to decide on the specific linting rules.

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
