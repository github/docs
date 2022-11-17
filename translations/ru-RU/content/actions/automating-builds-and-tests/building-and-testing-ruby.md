---
title: Создание и тестирование для Ruby
intro: Вы можете создать рабочий процесс непрерывной интеграции для сборки и тестирования проекта Ruby.
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408990'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как получить рабочий процесс непрерывной интеграции (CI), который создает и тестирует приложение Ruby. Если тесты CI проходят правильно, может потребоваться развернуть код или опубликовать пакет.

## Предварительные требования

Рекомендуется иметь базовое представление о Ruby, YAML, параметрах конфигурации рабочих процессов, а также о том, как создавать файл рабочего процесса. Дополнительные сведения см. в разделе:

- [Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby за 20 минут](https://www.ruby-lang.org/en/documentation/quickstart/)

## Использование начального рабочего процесса Ruby

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс Ruby, который будет работать для большинства проектов Ruby. Дополнительные сведения см. в разделе [Начальный рабочий процесс Ruby](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

Чтобы быстро приступить к работе, добавьте начальный рабочий процесс в каталог `.github/workflows` своего репозитория. В показанном ниже рабочем процессе предполагается, что ветвью по умолчанию для вашего репозитория является `main`.

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

## Указание версии Ruby

Самый простой способ указать версию Ruby заключается в использовании действия `ruby/setup-ruby`, предоставляемого организацией Ruby на GitHub. Это действие добавляет любую поддерживаемую версию Ruby в `PATH` для каждого задания, выполняемого в рабочем процессе. Дополнительные сведения и доступные версии Ruby см. в описании [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

Применение действия `ruby/setup-ruby` Ruby представляет собой рекомендуемый способ использования Ruby с GitHub Actions, так как он обеспечивает согласованное поведение в разных средствах выполнения и различных версиях Ruby.

Действие `setup-ruby` принимает версию Ruby в качестве входных данных и настраивает ее в средстве выполнения.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

Кроме того, можно проверить файл `.ruby-version` в корне репозитория, чтобы `setup-ruby` использовал определенную в этом файле версию.

## Тестирование с использованием нескольких версий Ruby

Вы можете добавить матричную стратегию для запуска рабочего процесса с несколькими версиями Ruby. Например, вы можете протестировать код для последних выпусков исправлений в версиях 3.1, 3.0 и 2.7.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

Каждая версия Ruby, указанная в массиве `ruby-version`, создает задание, которое выполняет одни и те же действия. Контекст {% raw %}`${{ matrix.ruby-version }}`{% endraw %} используется для доступа к версии текущего задания. Дополнительные сведения о матричных стратегиях и контекстах см. в разделах [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions) и [Контексты](/actions/learn-github-actions/contexts).

Полный обновленный рабочий процесс с матричной стратегией может выглядеть следующим образом:

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

## Установка зависимостей с использованием средства увязки в пакеты

Действие `setup-ruby` установит средство увязки в пакеты автоматически. Версия определяется по файлу `gemfile.lock`. Если в файле блокировки отсутствует версия, будет установлена последняя совместимая версия.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### Кэширование зависимостей

Действия `setup-ruby` предоставляют метод автоматической обработки кэширования пакетов между запусками.

Чтобы включить кэширование, укажите следующее.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

При этом средство увязки в пакеты будет настроено для установки пакетов в `vendor/cache`. Для каждого успешного выполнения рабочего процесса эта папка будет кэширована {% data variables.product.prodname_actions %} и повторно скачана для последующих выполнений рабочего процесса. Хэш файла gemfile.lock и версия Ruby используются в качестве ключа кэша. Если вы устанавливаете новые пакеты или изменяете версию, кэш станет недействительным, а средство увязки в пакеты выполнит новую установку.

**Кэширование без использования setup-ruby**

Для более широкого контроля над кэшированием можно напрямую использовать действие `actions/cache`. Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

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

Если вы используете матричную сборку, потребуется включить матричные переменные в ключ кэша. Например, если у вас есть матричная стратегия для разных версий ruby (`matrix.ruby-version`) и различных операционных систем (`matrix.os`), шаги рабочего процесса могут выглядеть следующим образом:

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

## Матричное тестирование кода

В следующем примере выполняется матричное тестирование всех стабильных выпусков и головных версий MRI, JRuby и TruffleRuby на базе Ubuntu и macOS.

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

## Анализ кода

В следующем примере выполняется установка `rubocop` и его использование для анализа кода всех файлов. Дополнительные сведения см. в описании [RuboCop](https://github.com/rubocop-hq/rubocop). Вы можете [настроить Rubocop](https://docs.rubocop.org/rubocop/configuration.html), чтобы задать конкретные правила анализа.

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

## Публикация пакетов

Вы можете настроить рабочий процесс для публикации пакета Ruby в любом подходящем реестре пакетов после прохождения тестов CI.

Вы можете хранить любые маркеры доступа или учетные данные, необходимые для публикации пакета, с помощью секретов репозитория. В следующем примере создается пакет, который публикуется в `GitHub Package Registry` и `RubyGems`.

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
