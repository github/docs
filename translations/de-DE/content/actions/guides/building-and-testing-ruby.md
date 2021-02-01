---
title: Building and testing Ruby
intro: You can create a continuous integration (CI) workflow to build and test your Ruby project.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

This guide shows you how to create a continuous integration (CI) workflow that builds and tests a Ruby application. If your CI tests pass, you may want to deploy your code or publish a gem.

### Vorrausetzungen

We recommend that you have a basic understanding of Ruby, YAML, workflow configuration options, and how to create a workflow file. Weitere Informationen findest Du unter:

- [Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby in 20 minutes](https://www.ruby-lang.org/en/documentation/quickstart/)

### Starting with the Ruby workflow template

{% data variables.product.prodname_dotcom %} provides a Ruby workflow template that will work for most Ruby projects. For more information, see the [Ruby workflow template](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

Um schnell loszulegen, füge die Vorlage in das Verzeichnis `.github/workflows` Deines Repositorys ein.

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
    # To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
    # change this to (see https://github.com/ruby/setup-ruby#versioning):
    # uses: ruby/setup-ruby@v1
      uses: ruby/setup-ruby@ec106b438a1ff6ff109590de34ddc62c540232e0
      with:
        ruby-version: 2.6
    - name: Install dependencies
      run: bundle install
    - name: Run tests
      run: bundle exec rake
```
{% endraw %}

### Specifying the Ruby version

The easiest way to specify a Ruby version is by using the `ruby/setup-ruby` action provided by the Ruby organization on GitHub. The action adds any supported Ruby version to `PATH` for each job run in a workflow. For more information see, the [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

Using either Ruby's `ruby/setup-ruby` action or GitHub's `actions/setup-ruby` action is the recommended way of using Ruby with GitHub Actions because it ensures consistent behavior across different runners and different versions of Ruby.

The `setup-ruby` action takes a Ruby version as an input and configures that version on the runner.

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

Alternatively, you can check a `.ruby-version` file  into the root of your repository and `setup-ruby` will use the version defined in that file.

### Testing with multiple versions of Ruby

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
    # To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
    # change this to (see https://github.com/ruby/setup-ruby#versioning):
    # uses: ruby/setup-ruby@v1
      uses: ruby/setup-ruby@ec106b438a1ff6ff109590de34ddc62c540232e0
      with:
        ruby-version: ${{ matrix.ruby-version }}
    - name: Install dependencies
      run: bundle install
    - name: Run tests
      run: bundle exec rake
```
{% endraw %}

### Installing dependencies with Bundler

The `setup-ruby` action will automatically install bundler for you. The version is determined by your `gemfile.lock` file. If no version is present in your lockfile, then the latest compatible version will be installed.

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

#### Abhängigkeiten „cachen“ (zwischenspeichern)

If you are using {% data variables.product.prodname_dotcom %}-hosted runners, the `setup-ruby` actions provides a method to automatically handle the caching of your gems between runs.

To enable caching, set the following.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@v1
    with:
      bundler-cache: true
```
{% endraw %}

This will configure bundler to install your gems to `vendor/cache`. For each successful run of your workflow, this folder will be cached by Actions and re-downloaded for subsequent workflow runs. A hash of your gemfile.lock and the Ruby version are used as the cache key. If you install any new gems, or change a version, the cache will be invalidated and bundler will do a fresh install.

**Caching without setup-ruby**

For greater control over caching, if you are using {% data variables.product.prodname_dotcom %}-hosted runners, you can use the `actions/cache` Action directly. Weitere Informationen findest Du unter „<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Abhängigkeiten zur Beschleunigung von Workflows im Cache zwischenspeichern</a>“.

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

### Matrix testing your code

The following example matrix tests all stable releases and head versions of MRI, JRuby and TruffleRuby on Ubuntu and macOS.

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

### Linting your code

The following example installs `rubocop` and uses it to lint all files. For more information, see [Rubocop](https://github.com/rubocop-hq/rubocop). You can [configure Rubocop](https://docs.rubocop.org/rubocop/configuration.html) to decide on the specific linting rules.

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

### Publishing Gems

You can configure your workflow to publish your Ruby package to any package registry you'd like when your CI tests pass.

You can store any access tokens or credentials needed to publish your package using repository secrets. The following example creates and publishes a package to `GitHub Package Registry` and `RubyGems`.

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

