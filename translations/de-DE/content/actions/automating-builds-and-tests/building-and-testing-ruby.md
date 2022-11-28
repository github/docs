---
title: Erstellen und Testen von Ruby-Anwendungen
intro: 'Du kannst einen Continuous Integration-Workflow (CI) erstellen, um dein Ruby-Projekt zu kompilieren und zu testen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408987'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Leitfaden erfährst du, wie du einen CI-Workflow (Continuous Integration) erstellst, mit dem eine Ruby-Anwendung erstellt und getestet wird. Wenn deine CI-Tests bestanden wurden, solltest du den Code bereitstellen oder ein Ruby-Gem veröffentlichen.

## Voraussetzungen

Es wird empfohlen, grundlegende Kenntnisse über Ruby, YAML, Workflowkonfigurationsoptionen und das Erstellen einer Workflowdatei zu haben. Weitere Informationen finden Sie unter

- [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby in 20 Minuten](https://www.ruby-lang.org/en/documentation/quickstart/)

## Verwenden des Ruby-Starterworkflows

{% data variables.product.prodname_dotcom %} bietet einen Ruby-Starterworkflow, der für die meisten Ruby-Projekte funktioniert. Weitere Informationen findest du unter [Ruby-Starterworkflow](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

Für einen schnellen Einstieg fügst du den Starterworkflow zum Verzeichnis `.github/workflows` deines Repositorys hinzu. Im nachstehenden Workflow wird davon ausgegangen, dass der Standardbranch für dein Repository `main` lautet.

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

## Angeben der Ruby-Version

Am einfachsten kannst du eine Ruby-Version angeben, indem du die Aktion `ruby/setup-ruby` verwendest, die von der Ruby-Organisation auf GitHub bereitgestellt wird. Mit der Aktion wird für jeden Auftrag, der in einem Workflow ausgeführt wird, eine beliebige unterstützte Ruby-Version zu `PATH` hinzugefügt. Weitere Informationen und verfügbare Ruby-Versionen findest du unter [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

Die Aktion `ruby/setup-ruby` von Ruby wird als Methode zur Verwendung von Ruby mit GitHub Actions empfohlen, da damit ein konsistentes Verhalten bei verschiedenen Runnern und verschiedenen Version von Ruby gewährleistet wird.

Von der Aktion `setup-ruby` wird eine Ruby-Version als Eingabe verwendet und auf dem Runner konfiguriert.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

Alternativ dazu kannst du eine `.ruby-version`-Datei in das Stammverzeichnis deines Repositorys einchecken; die in dieser Datei definierte Version wird dann von `setup-ruby` verwendet.

## Testen mit mehreren Versionen von Ruby

Du kannst eine Matrixstrategie hinzufügen, um den Workflow mit mehr als einer Version von Ruby auszuführen. Du kannst den Code beispielsweise in Bezug auf die aktuellen Patchreleases der Versionen 3.1, 3.0 und 2.7 testen.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

Von jeder im `ruby-version`-Array angegebenen Version von Ruby wird ein Auftrag erstellt, bei dem dieselben Schritte ausgeführt werden. Der {% raw %}`${{ matrix.ruby-version }}`{% endraw %}-Kontext wird dazu verwendet, auf die Version des aktuellen Auftrags zuzugreifen. Weitere Informationen zu Matrixstrategien und Kontexten findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions) und [Kontexte](/actions/learn-github-actions/contexts).

Der vollständige aktualisierte Workflow mit einer Matrixstrategie könnte wie folgt aussehen:

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

## Installieren von Abhängigkeiten mit Bundler

Mit der Aktion `setup-ruby` wird Bundler automatisch für dich installiert. Die Version wird von der Datei `gemfile.lock` bestimmt. Wenn in der Sperrdatei keine Version vorhanden ist, wird die aktuelle kompatible Version installiert.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### Abhängigkeiten „cachen“ (zwischenspeichern)

Die `setup-ruby`-Aktionen bieten eine Methode, mit der du deine Gems automatisch zwischenspeichern kannst.

Lege zum Aktivieren der Zwischenspeicherung Folgendes fest.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

Dadurch wird der Bundler so konfiguriert, dass deine Gems in `vendor/cache` installiert werden. Bei jeder erfolgreichen Ausführung deines Workflows wird dieser Ordner von {% data variables.product.prodname_actions %} zwischengespeichert und bei nachfolgenden Workflowausführungen erneut heruntergeladen. Ein Hash deiner gemfile.lock-Datei und die Ruby-Version werden als Cacheschlüssel verwendet. Wenn du neue Gems installierst oder eine Version änderst, wird der Cache ungültig, und von Bundler wird eine neue Installation durchgeführt.

**Zwischenspeichern ohne setup-ruby-Aktion**

Um die Zwischenspeicherung besser zu steuern, kannst du die `actions/cache`-Aktion direkt verwenden. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

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

Wenn du einen Matrixbuild verwendest, solltest du die Matrixvariablen in den Cacheschlüssel aufnehmen. Wenn du beispielsweise eine Matrixstrategie für verschiedene Ruby-Versionen (`matrix.ruby-version`) und unterschiedliche Betriebssysteme (`matrix.os`) hast, sehen die Workflowschritte möglicherweise wie folgt aus:

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

## Matrixtests des Codes

Mit der folgenden Beispielmatrix werden alle stabilen Releases und Headversionen von MRI, JRuby und TruffleRuby unter Ubuntu und macOS getestet.

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

## Linten des Codes

Im folgenden Beispiel wird `rubocop` installiert und zum Linten aller Dateien verwendet. Weitere Informationen findest du unter [RuboCop](https://github.com/rubocop-hq/rubocop). Du kannst [Rubocop so konfigurieren](https://docs.rubocop.org/rubocop/configuration.html), dass jeweils spezifische Regeln für das Linten festlegen.

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

## Veröffentlichen von Gems

Du kannst deinen Workflow so konfigurieren, dass das Ruby-Paket in jeder Paketregistrierung veröffentlicht wird, die du wünschst, wenn deine CI-Tests bestanden werden.

Du kannst alle Zugriffstoken oder Anmeldeinformationen speichern, die zum Veröffentlichen deines Pakets mithilfe von geheimen Repositoryschlüsseln erforderlich sind. Im folgenden Beispiel wird ein Paket erstellt und in `GitHub Package Registry` und `RubyGems` veröffentlicht.

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
