---
title: Ruby 빌드 및 테스트
intro: CI(연속 통합) 워크플로를 만들어 Ruby 프로젝트를 빌드하고 테스트할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408989'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Ruby 애플리케이션을 빌드하고 테스트하는 CI(연속 통합) 워크플로를 만드는 방법을 보여 줍니다. CI 테스트에 통과하면 코드를 배포하거나 gem을 게시할 수 있습니다.

## 필수 조건

Ruby, YAML, 워크플로 구성 옵션과 워크플로 파일을 만드는 방법을 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 다음을 참조하세요.

- [{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)
- [20분 Ruby](https://www.ruby-lang.org/en/documentation/quickstart/)

## Ruby 시작 워크플로 사용

{% data variables.product.prodname_dotcom %}는 대부분의 Ruby 기반 Java 프로젝트에서 작동하는 Ruby 시작 워크플로를 제공합니다. 자세한 내용은 [Ruby 시작 워크플로](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml)를 참조하세요.

빠르게 시작하려면 시작 워크플로를 리포지토리의 `.github/workflows` 디렉터리에 추가합니다. 아래에 표시된 워크플로는 리포지토리의 기본 분기가 `main`이라고 가정합니다.

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

## Ruby 버전 지정

Ruby 버전을 지정하는 가장 쉬운 방법은 GitHub의 Ruby 조직에서 제공하는 `ruby/setup-ruby` 작업을 사용하는 것입니다. 이 작업은 워크플로에서 실행되는 각 작업에 대해 지원되는 모든 Ruby 버전을 `PATH`에 추가합니다. 자세한 내용 및 사용 가능한 Ruby 버전은 [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)를 참조하세요.

Ruby의 `ruby/setup-ruby` 작업을 사용하는 것은 Ruby의 여러 실행기와 버전 간에 일관된 동작을 보장하므로 GitHub Actions와 함께 Ruby를 사용하는 데 권장되는 방법입니다.

이 `setup-ruby` 작업은 Ruby 버전을 입력으로 사용하고 실행기에서 해당 버전을 구성합니다.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

또는 `.ruby-version` 파일을 리포지토리의 루트로 체크 인하면 `setup-ruby`에서 해당 파일에 정의된 버전을 사용합니다.

## 여러 버전의 Ruby로 테스트

둘 이상의 Ruby 버전으로 워크플로를 실행하는 매트릭스 전략을 추가할 수 있습니다. 예를 들어 3.1, 3.0, 2.7 버전의 최신 패치 릴리스에 대해 코드를 테스트할 수 있습니다.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

`ruby-version` 배열에 지정된 Ruby의 각 버전은 동일한 단계를 실행하는 작업을 만듭니다. {% raw %}`${{ matrix.ruby-version }}`{% endraw %} 컨텍스트는 현재 작업의 버전에 액세스하는 데 사용됩니다. 매트릭스 전략 및 컨텍스트에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions)” 및 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

매트릭스 전략을 사용하여 업데이트된 전체 워크플로는 다음과 같습니다.

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

## 번들러를 사용하여 종속성 설치

`setup-ruby` 작업은 자동으로 번들러를 설치합니다. 버전은 `gemfile.lock` 파일에 의해 결정됩니다. 잠금 파일에 버전이 없으면 호환되는 최신 버전이 설치됩니다.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### 종속성 캐싱

`setup-ruby` 작업은 실행 간에 gem의 캐싱을 자동으로 처리하는 메서드를 제공합니다.

캐싱을 사용하도록 설정하려면 다음을 설정합니다.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

그러면 `vendor/cache`에 gem을 설치하도록 번들러가 구성됩니다. 워크플로를 성공적으로 실행할 때마다 이 폴더는 {% data variables.product.prodname_actions %}에 의해 캐시되고 후속 워크플로 실행을 위해 다시 다운로드됩니다. gemfile.lock 및 Ruby 버전의 해시가 캐시 키로 사용됩니다. 새 gem을 설치하거나 버전을 변경하는 경우 캐시가 유효하지 않게 되고 번들러가 새 설치를 수행합니다.

**setup-ruby 없이 캐싱**

캐싱에 대한 제어를 강화하기 위해 `actions/cache` 작업을 바로 사용할 수 있습니다. 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.

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

매트릭스 빌드를 사용하는 경우 캐시 키에 매트릭스 변수를 포함해야 합니다. 예를 들어 다양한 Ruby 버전(`matrix.ruby-version`)과 운영 체제(`matrix.os`)에 대한 매트릭스 전략이 있는 경우 워크플로 단계는 다음과 같을 수 있습니다.

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

## 코드 매트릭스 테스트

다음 예제 매트릭스는 Ubuntu 및 macOS에서 MRI, JRuby, TruffleRuby의 모든 안정적인 릴리스 및 헤드 버전을 테스트합니다.

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

## 코드 린트

다음 예제에서는 `rubocop`을 설치하고 이를 사용하여 모든 파일을 린트합니다. 자세한 내용은 [RuboCop](https://github.com/rubocop-hq/rubocop)을 참조하세요. 특정 린팅 규칙을 결정하도록 [Rubocop을 구성](https://docs.rubocop.org/rubocop/configuration.html)할 수 있습니다.

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

## Gems 게시

CI 테스트에 통과하면 원하는 패키지 레지스트리에 Ruby 패키지를 게시하도록 워크플로를 구성할 수 있습니다.

리포지토리 비밀을 사용하여 패키지를 게시하는 데 필요한 모든 액세스 토큰 또는 자격 증명을 저장할 수 있습니다. 다음 예제에서는 패키지를 만들고 `GitHub Package Registry` 및 `RubyGems`에 게시합니다.

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
