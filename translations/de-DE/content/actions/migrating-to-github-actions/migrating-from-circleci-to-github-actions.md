---
title: Von CircleCI zu GitHub-Aktionen migrieren
intro: 'GitHub Actions und CircleCI weisen mehrere Ähnlichkeiten in Bezug auf die Konfiguration auf, was die Migration zu GitHub Actions relativ einfach macht.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-circleci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
shortTitle: Migrate from CircleCI
ms.openlocfilehash: d3f7a527f21588ec2bd60e04639a861c35b12b7f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147518968'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

CircleCI und {% data variables.product.prodname_actions %} ermöglichen es Dir, Workflows zu erstellen, die Code automatisch bauen, testen, veröffentlichen, freigeben und bereitstellen. CircleCI und {% data variables.product.prodname_actions %} haben einige Ähnlichkeiten in der Workflow-Konfiguration:

- Workflow-Konfigurationsdateien werden in YAML geschrieben und im Repository gespeichert.
- Workflows umfassen einen oder mehrere Jobs.
- Jobs beinhalten einen oder mehrere Schritte oder einzelne Befehle.
- Schritte oder Aufgaben können wiederverwendet und in der Community gemeinsam genutzt werden.

Weitere Informationen findest du unter [Kernkonzepte für {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions).

## Wesentliche Unterschiede

Betrachte bei der Migration von CircleCI folgende Unterschiede:

- Die automatische Testparallelität des CircleCI gruppiert die Tests automatisch nach benutzerdefinierten Regeln oder historischen Zeitinformationen. Diese Funktionalität ist in {% data variables.product.prodname_actions %} nicht eingebaut.
- Aktionen, die in Docker-Containern ausgeführt werden, sind sensibel für Berechtigungsprobleme, da Container eine andere Zuordnung von Benutzern haben. Viele dieser Probleme lassen sich vermeiden, indem die `USER`-Anweisung nicht in *Dockerfile* verwendet wird. {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %}Weitere Informationen zum Docker-Dateisystem auf {% data variables.product.product_name %}-gehosteten Runnern findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem).
{% endif %}

## Workflows und Jobs migrieren

Bei CircleCI werden Workflows (`workflows`) in der Datei *config.yml* definiert. Dadurch lassen sich mehrere Workflows konfigurieren. Da {% data variables.product.product_name %} eine Workflowdatei pro Workflow benötigt, müssen keine Workflows (`workflows`) deklariert werden. Für jeden in *config.yml* konfigurierten Workflow muss eine neue Workflowdatei erstellt werden.

Sowohl bei CircleCI als auch bei {% data variables.product.prodname_actions %} werden Aufträge (`jobs`) in der Konfigurationsdatei mit einer ähnlichen Syntax konfiguriert. Wenn du Abhängigkeiten zwischen Aufträgen mithilfe von `requires` in deinem CircleCI-Workflow konfigurierst, kannst du die entsprechende `needs`-Syntax von {% data variables.product.prodname_actions %} verwenden. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds).

## „Orbs“ (Gestirne) zu Aktionen migrieren

Sowohl CircleCI als auch {% data variables.product.prodname_actions %} bieten einen Mechanismus, um Aufgaben in einem Workflow wiederzuverwenden und weiterzugeben. CircleCI verwendet ein Konzept namens „Orbs“ (Gestirne), das in YAML geschrieben ist, um Aufgaben bereitzustellen, die man in einem Workflow wiederverwenden kann. {% data variables.product.prodname_actions %} hat mächtige und flexible wiederverwendbare Komponenten namens Aktionen, die man entweder mit JavaScript-Dateien oder mit Docker-Images erstellt. Um Aktionen zu erstellen, kannst du eigenen Code schreiben, der mit deinem Repository auf die gewünschte Weise interagiert und dabei beispielsweise in die APIs von {% data variables.product.product_name %} und beliebige öffentlich zugänglichen Drittanbieter-APIs integriert. Beispielsweise kann eine Aktion npm-Module veröffentlichen, SMS-Warnungen senden, wenn dringende Probleme erstellt werden, oder produktionsbereiten Code bereitstellen. Weitere Informationen findest du unter [Erstellen von Aktionen](/actions/creating-actions).

CircleCI kann Workflows mit YAML-Ankern und Aliasen wiederverwenden. {% data variables.product.prodname_actions %} unterstützt die gängigsten Anforderungen im Hinblick auf die Wiederverwendbarkeit durch den Einsatz von Matrizen. Weitere Informationen zu Matrizen findest du unter [Verwenden einer Matrix für deine Aufträge](/actions/using-jobs/using-a-matrix-for-your-jobs).

## Docker-Images verwenden


Sowohl CircleCI als auch {% data variables.product.prodname_actions %} können Schritte innerhalb eines Docker-Images ausführen.

CircleCI stellt eine Reihe von vordefinierten Images mit üblichen Abhängigkeiten zur Verfügung. Bei diesen Images ist `USER` auf `circleci` festgelegt. Dies führt zu Berechtigungskonflikten mit {% data variables.product.prodname_actions %}.

Wir empfehlen Dir, von vordefinierten CircleCI-Images zu wegzugehen, wenn du zu {% data variables.product.prodname_actions %} migrierst. In vielen Fällen kannst du die zusätzlich benötigten Abhängigkeiten mithilfe von Aktionen installieren.

{% ifversion ghae %} Weitere Informationen zum Docker-Dateisystem findest du unter [Dateisystem von Docker-Containern](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem).

{% data reusables.actions.self-hosted-runners-software %} {% else %} Weitere Informationen zum Docker-Dateisystem findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem).

Weitere Informationen zu den Tools und Paketen, die in {% data variables.product.prodname_dotcom %}-gehosteten Runner-Images verfügbar sind, findest du unter [Spezifikationen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Variablen und Geheimnisse verwenden

CircleCI und {% data variables.product.prodname_actions %} unterstützen das Setzen von Umgebungsvariablen in der Konfigurationsdatei und das Erstellen von Geheimnissen mit der Benutzeroberfläche von entweder CircleCI oder {% data variables.product.product_name %}.

Weitere Informationen findest du unter [Verwenden von Umgebungsvariablen](/actions/configuring-and-managing-workflows/using-environment-variables) und [Erstellen und Verwenden von verschlüsselten Geheimnissen](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).

## Zwischenspeicherung

CircleCI und {% data variables.product.prodname_actions %} bieten in der Konfigurationsdatei eine Methode an, um Dateien manuell im Cache zwischenzuspeichern.

{% ifversion actions-caching %}

Nachfolgend ein Beispiel für die Syntax in jedem System.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub-Aktionen
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

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

{% data variables.product.prodname_actions %} hat kein Äquivalent zum „Docker Layer Caching“ („DLC“, im Cache auf Docker-Ebene zwischenspeichern).

## Daten zwischen Jobs persistieren

Sowohl CircleCI als auch {% data variables.product.prodname_actions %} bieten Mechanismen für die Persistierung von Daten zwischen Jobs.

Nachfolgend siehst du ein Beispiel in der Konfigurationssyntax von CircleCI und {% data variables.product.prodname_actions %}.

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub-Aktionen
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

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: homework
```

</td>
</tr>
</table>

Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts).

## Datenbanken und Service-Container verwenden

Mit beiden Systemen kannst du zusätzliche Container für Datenbanken, Zwischenspeicherung im Cache oder andere Abhängigkeiten einbinden.

In CircleCI ist das erste in der Datei *config.yaml* aufgelistete Image das primäre Image, welches benutzt wird, um Befehle auszuführen. {% data variables.product.prodname_actions %} verwendet explizite Abschnitte: verwende `container` für den primären Container, und liste zusätzliche Container in `services` auf.

Nachfolgend siehst du ein Beispiel in der Konfigurationssyntax von CircleCI und {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub-Aktionen
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26: docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake


workflows: version: 2 build: jobs: - ruby-26 ...

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

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
      # See https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem

      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
</td>
</tr>
</table>

Weitere Informationen findest du unter [Informationen zu Dienstcontainern](/actions/configuring-and-managing-workflows/about-service-containers).

## Vollständiges Beispiel

Nachfolgend siehst du ein Beispiel aus der realen Welt. Auf der linken Seite ist die tatsächliche CircleCI-Datei *config.yml* für das Repository [thoughtbot/administrator](https://github.com/thoughtbot/administrate) gezeigt. Die rechte Seite zeigt das Äquivalent unter {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub-Aktionen
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands: shared_steps: steps: - checkout

      # Restore Cached Dependencies
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Cache Dependencies
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake

default_job: &default_job working_directory: ~/administrate steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs: ruby-25: <<: *default_job docker: - image: circleci/ruby:2.5.0-node-browsers environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby25 POSTGRES_PASSWORD: ""

  ruby-26: <<: *default_job docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""


workflows: version: 2 multiple-rubies: jobs: - ruby-26 - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Ruby
        uses: eregon/use-ruby-action@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - name: Cache dependencies
        uses: {% data reusables.actions.action-cache %}
        with:
          path: vendor/bundle
          key: administrate-{% raw %}${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}{% endraw %}
      - name: Install postgres headers
        run: |
          sudo apt-get update
          sudo apt-get install libpq-dev
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
</td>
</tr>
</table>
