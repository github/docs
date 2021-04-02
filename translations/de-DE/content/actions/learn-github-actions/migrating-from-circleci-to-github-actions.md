---
title: Von CircleCI zu GitHub-Aktionen migrieren
intro: 'GitHub-Aktionen und CircleCI haben mehrere Ähnlichkeiten in der Konfiguration, was die Migration zu GitHub-Aktionen relativ einfach macht.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-circleci-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'CircleCI'
  - 'Migration'
  - 'CI'
  - 'CD'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einführung

CircleCI und {% data variables.product.prodname_actions %} ermöglichen es Dir, Workflows zu erstellen, die Code automatisch bauen, testen, veröffentlichen, freigeben und bereitstellen. CircleCI und {% data variables.product.prodname_actions %} haben einige Ähnlichkeiten in der Workflow-Konfiguration:

- Workflow-Konfigurationsdateien werden in YAML geschrieben und im Repository gespeichert.
- Workflows umfassen einen oder mehrere Jobs.
- Jobs beinhalten einen oder mehrere Schritte oder einzelne Befehle.
- Schritte oder Aufgaben können wiederverwendet und in der Community gemeinsam genutzt werden.

Weitere Informationen findest Du unter „[Kernkonzepte für {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)“.

### Wesentliche Unterschiede

Betrachte bei der Migration von CircleCI folgende Unterschiede:

- Die automatische Testparallelität des CircleCI gruppiert die Tests automatisch nach benutzerdefinierten Regeln oder historischen Zeitinformationen. Diese Funktionalität ist in {% data variables.product.prodname_actions %} nicht eingebaut.
- Aktionen, die in Docker-Containern ausgeführt werden, sind sensibel für Berechtigungsprobleme, da Container eine andere Zuordnung von Benutzern haben. Du kannst viele dieser Probleme vermeiden, indem Du die Anweisung `USER` in Deinem *Dockerfile* nicht verwendest. {% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images).".
{% else %}For more information about the Docker filesystem on {% data variables.product.product_name %}-hosted runners, see "[Virtual environments for {% data variables.product.product_name %}-hosted runners](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)."
{% endif %}

### Workflows und Jobs migrieren

CircleCI definiert `Workflows` in der Datei *config.yml*, wodurch Du mehrere Workflows konfigurieren kannst. {% data variables.product.product_name %} benötigt pro Workflow eine Workflow-Datei und erfordert daher nicht `Workflows` zu deklarieren. Du musst für jeden Workflow, der in *config.yml* konfiguriert ist, eine neue Workflow-Datei erstellen.

Sowohl CircleCI als auch {% data variables.product.prodname_actions %} konfigurieren `Jobs` in der Konfigurationsdatei, und das mit ähnlicher Syntax. Wenn Du Abhängigkeiten zwischen Jobs in Deinem CircleCI-Workflow mit `requires` konfigurierst, kannst Du in {% data variables.product.prodname_actions %} die äquivalente Syntax `needs` verwenden. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)“.

### „Orbs“ (Gestirne) zu Aktionen migrieren

Sowohl CircleCI als auch {% data variables.product.prodname_actions %} bieten einen Mechanismus, um Aufgaben in einem Workflow wiederzuverwenden und weiterzugeben. CircleCI verwendet ein Konzept namens „Orbs“ (Gestirne), das in YAML geschrieben ist, um Aufgaben bereitzustellen, die man in einem Workflow wiederverwenden kann. {% data variables.product.prodname_actions %} hat mächtige und flexible wiederverwendbare Komponenten namens Aktionen, die man entweder mit JavaScript-Dateien oder mit Docker-Images erstellt. Um Aktionen zu erstellen, kannst Du eigenen Code schreiben, der mit Deinem Repository auf die gewünschte Weise interagiert und dabei beispielsweise in die APIs von {% data variables.product.product_name %} und beliebige öffentlich zugänglichen Drittanbieter-APIs integriert. Mit einer Aktion können Sie beispielsweise npm-Module veröffentlichen, SMS-Nachrichten bei dringenden Problemen senden oder produktionsreifen Code bereitstellen. For more information, see "[Creating actions](/actions/creating-actions)."

CircleCI kann Workflows mit YAML-Ankern und Aliasen wiederverwenden. {% data variables.product.prodname_actions %} unterstützen den üblichen Bedarf an Wiederverwendbarkeit durch Build-Matrizen. For more information about build matrixes, see "[Managing complex workflows](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix)."

### Docker-Images verwenden


Sowohl CircleCI als auch {% data variables.product.prodname_actions %} können Schritte innerhalb eines Docker-Images ausführen.

CircleCI stellt eine Reihe von vordefinierten Images mit üblichen Abhängigkeiten zur Verfügung. Diese Images haben `circleci` als `USER` gesetzt, was zu Konflikten mit {% data variables.product.prodname_actions %} führt.

Wir empfehlen Dir, von vordefinierten CircleCI-Images zu wegzugehen, wenn Du zu {% data variables.product.prodname_actions %} migrierst. In vielen Fällen kannst Du die zusätzlich benötigten Abhängigkeiten mithilfe von Aktionen installieren.

{% if currentVersion == "github-ae@latest" %}
For more information about the Docker filesystem, see "[Docker container filesystem](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)."
For instructions on how to make sure your

{% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}
Weitere Informationen über das Docker-Dateisystem findest Du unter „[Virtuelle Umgebungen für {% data variables.product.product_name %}-gehostete Runner](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)“.
For more information about the tools and packages available on

{% data variables.product.prodname_dotcom %}-hosted virtual environments, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

### Variablen und Geheimnisse verwenden

CircleCI und {% data variables.product.prodname_actions %} unterstützen das Setzen von Umgebungsvariablen in der Konfigurationsdatei und das Erstellen von Geheimnissen mit der Benutzeroberfläche von entweder CircleCI oder {% data variables.product.product_name %}.

Weitere Informationen findest Du unter „[Umgebungsvariablen verwenden](/actions/configuring-and-managing-workflows/using-environment-variables)“ und „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)“.

### Im Cache zwischenspeichern

CircleCI und {% data variables.product.prodname_actions %} bieten in der Konfigurationsdatei eine Methode an, um Dateien manuell im Cache zwischenzuspeichern.

Nachfolgend ein Beispiel für die Syntax in jedem System.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- name: Cache node modules
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
    restore-keys: v1-npm-deps-
```
{% endraw %}
</td>
</tr>
</table>

{% data variables.product.prodname_actions %} caching is only applicable for repositories hosted on {% data variables.product.prodname_dotcom_the_website %}. Weitere Informationen findest Du unter „<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Abhängigkeiten zur Beschleunigung von Workflows im Cache zwischenspeichern</a>“.

{% data variables.product.prodname_actions %} hat kein Äquivalent zum „Docker Layer Caching“ („DLC“, im Cache auf Docker-Ebene zwischenspeichern).

### Daten zwischen Jobs persistieren

Sowohl CircleCI als auch {% data variables.product.prodname_actions %} bieten Mechanismen für die Persistierung von Daten zwischen Jobs.

Nachfolgend siehst Du ein Beispiel in der Konfigurationssyntax von CircleCI und {% data variables.product.prodname_actions %}.

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- name: Upload math result for job 1
  uses: actions/upload-artifact@v2
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: actions/download-artifact@v2
  with:
    name: homework
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest Du unter „[Workflow-Daten mittels Artefakten persistieren](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)“.

### Datenbanken und Service-Container verwenden

Mit beiden Systemen kannst Du zusätzliche Container für Datenbanken, Zwischenspeicherung im Cache oder andere Abhängigkeiten einbinden.

In CircleCI ist das erste in der *config.yaml* aufgelistete Image, das primäre Image, welches benutzt wird, um Befehle auszuführen. {% data variables.product.prodname_actions %} verwendet explizite Abschnitte: `container` für den primären Container und zusätzliche Container aufgelistet in `services`.

Nachfolgend siehst Du ein Beispiel in der Konfigurationssyntax von CircleCI und {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26:
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Abhaengigkeiten gebuendelt installieren
      - run: bundle install --path vendor/bundle

      # auf DB warten
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Umgebung einrichten
      - run: cp .sample.env .env

      # Datenbank einrichten
      - run: bundle exec rake db:setup

      # Tests durchfuehren
      - run: bundle exec rake


workflows:
  version: 2
  build:
    jobs:
      - ruby-26
...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
name: Containers

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    container: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      # This Docker file changes sets USER to circleci instead of using the default user, so we need to update file permissions for this image to work on GH Actions.
      # See https://docs.github.com/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem
      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest Du unter „[Informationen zu Servicecontainern](/actions/configuring-and-managing-workflows/about-service-containers)“.

### Vollständiges Beispiel

Nachfolgend siehst Du ein Beispiel aus der realen Welt. Die linke Seite zeigt die tatsächliche *config.yml* unter CircleCI für das Repository [thoughtbot/administrator](https://github.com/thoughtbot/administrate). Die rechte Seite zeigt das Äquivalent unter {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands:
  shared_steps:
    steps:
      - checkout

      # Abhaengigkeiten aus dem Cache wiederherstellen
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Abhaengigkeiten gebuendelt installieren
      - run: bundle install --path vendor/bundle

      # Abhaengigkeiten im Cache zwischenspeichern
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # auf DB warten
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Umgebung einrichten
      - run: cp .sample.env .env

      # Datenbank einrichten
      - run: bundle exec rake db:setup

      # Tests durchfuehren
      - run: bundle exec rake

default_job: &default_job
  working_directory: ~/administrate
  steps:
    - shared_steps
    # Test mit verschiedenen Versionen von Rails durchfuehren
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs:
  ruby-25:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.5.0-node-browsers
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""

  ruby-26:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""


workflows:
  version: 2
  multiple-rubies:
    jobs:
      - ruby-26
      - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
name: Containers

on: [push]

jobs:
  build:

    strategy:
      matrix:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      - uses: actions/checkout@v2
      - name: Setup Ruby
        uses: eregon/use-ruby-action@master
        with:
          ruby-version: ${{ matrix.ruby }}
      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: vendor/bundle
          key: administrate-${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}
      - name: Install postgres headers
        run: sudo apt-get install libpq-dev
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
      - name: Install appraisal
        run: bundle exec appraisal install
      - name: Run appraisal
        run: bundle exec appraisal rake
```
{% endraw %}
</td>
</tr>
</table>
