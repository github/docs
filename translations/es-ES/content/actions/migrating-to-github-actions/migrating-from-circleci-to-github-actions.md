---
title: Migrar de CircleCI a GitHub Actions
intro: 'GitHub Actions y CircleCi comparten varias configuraciones similares, lo cual hace que migrar a GitHub Actions sea relativamente fácil.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147518972'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Tanto CircleCi como {% data variables.product.prodname_actions %} te permiten crear flujos de trabajo que compilan, prueban, publican, lanzan y despliegan código automáticamente. CircleCI y {% data variables.product.prodname_actions %} comparten algunas similaridades en la configuración del flujo de trabajo:

- Los archivos de configuración de flujo de trabajo están escritos en YAML y se almacenan en el repositorio.
- Los flujos de trabajo incluyen uno o más jobs.
- Los jobs incluyen uno o más pasos o comandos individuales.
- Los pasos o tareas pueden reutilizarse y compartirse con la comunidad.

Para más información, vea "[Conceptos básicos de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

## Diferencias clave

Cuando migres desde CircleCI, considera las siguientes diferencias:

- El paralelismo automático de pruebas de CircleCI agrupa las pruebas automáticamente de acuerdo con las reglas que el usuario haya especificado o el historial de información de tiempos. Esta funcionalidad no se incluye en {% data variables.product.prodname_actions %}.
- Las acciones que se ejecutan en los contenedores de Docker distinguen entre problemas de permisos, ya que los contenedores tienen un mapeo de usuarios diferente. Puede evitar muchos de estos problemas si no usa la instrucción `USER` en el *Dockerfile*. {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %}Para obtener más información sobre el sistema de archivos de Docker en ejecutores hospedados en {% data variables.product.product_name %}, consulta "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)".
{% endif %}

## Migrar flujos de trabajo y jobs

CircleCI define `workflows` en el archivo *config.yml*, que permite configurar más de un flujo de trabajo. {% data variables.product.product_name %} necesita un archivo de flujo de trabajo por flujo de trabajo y, por tanto, no necesita que se declare `workflows`. Tendrá que crear un archivo de flujo de trabajo para cada flujo de trabajo configurado en *config.yml*.

Tanto CircleCI como {% data variables.product.prodname_actions %} configuran `jobs` en el archivo de configuración mediante una sintaxis similar. Si configura dependencias entre trabajos mediante `requires` en el flujo de trabajo de CircleCI, puede usar la sintaxis `needs` equivalente de {% data variables.product.prodname_actions %}. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

## Mirgrar orbes a acciones

Tanto CircleCI como {% data variables.product.prodname_actions %} proporcionan un mecanismo para reutilizar y compartir tareas en un flujo de trabajo. CircleCi utiliza un concepto llamado orbes (orbs), escrito en YAML, que proporciona tareas que las personas pueden reutilizar en un flujo de trabajo. {% data variables.product.prodname_actions %} cuenta con componentes reutilizables poderosos y flexibles llamados acciones (actions), los cuales compilas ya sea con archivos de JavaScript o con imagenes de Docker. Puedes crear acciones si escribes tu código personalizado para que interactúe con tu repositorio en la forma que prefieras, lo cual incluye la integración con las API de {% data variables.product.product_name %} y con cualquier API de terceros disponible públicamente. Por ejemplo, una acción puede publicar módulos npm, enviar alertas por SMS cuando se crean problemas urgentes o implementar código listo para producción. Para más información, vea "[Creación de acciones](/actions/creating-actions)".

Circle CI puede reutilizar partes de los flujos de trabajo con anclas y alias. {% data variables.product.prodname_actions %} es compatible con las necesidades de reutilización más comunes utilizando matrices. Para obtener más información sobre las matrices, consulta "[Uso de una matriz para los trabajos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

## Utilizar imágenes de Docker


Tanto CircleCi como {% data variables.product.prodname_actions %} son compatibles con la ejecución de pasos dentro de una imagen de Docker.

CircleCi proporciona un conjunto de imágenes pre-compiladas con dependencias comunes. En estas imágenes, `USER` se establece en `circleci`, lo que hace que los permisos entren en conflicto con {% data variables.product.prodname_actions %}.

Recomendamos que te retires de las imágenes pre-compiladas de CircleCi cuando migres a {% data variables.product.prodname_actions %}. En muchos casos, puedes utilizar acciones para instalar dependencias adicionales que necesites.

{% ifversion ghae %} Para más información sobre el sistema de archivos de Docker, vea "[Sistema de archivos de contenedores Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)".

{% data reusables.actions.self-hosted-runners-software %} {% else %} Para obtener más información sobre el sistema de archivos de Docker, consulta "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)".

Para obtener más información sobre las herramientas y los paquetes disponibles en imágenes de ejecutores hospedados en {% data variables.product.prodname_dotcom %}, consulta "[Especificaciones para ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Utilizar variables y secretos

CircleCi y {% data variables.product.prodname_actions %} son compatibles con la configuración de variables de ambiente en el archivo de configuración y con la creación de secretos utilizando la IU de CircleCI o de {% data variables.product.product_name %}.

Para más información, vea "[Uso de variables de entorno](/actions/configuring-and-managing-workflows/using-environment-variables)" y "[Creación y uso de secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

## Almacenamiento en memoria caché

CircleCI y {% data variables.product.prodname_actions %} proporcionan un método para almacenar archivos en cahcé manualmente en el archivo de configuración.

{% ifversion actions-caching %}

A continuación encontrarás un ejemplo de la sintaxis para cada sistema.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
Acciones de GitHub
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

{% data variables.product.prodname_actions %} no tiene un equivalente al Almacenamiento en Caché por Capas de Docker (o DLC, por sus siglas en inglés) que tiene CircleCI.

## Datos persistentes entre jobs

Tanto CircleCi como {% data variables.product.prodname_actions %} proporcionan mecanismos para persistir datos entre jobs.

A continuación encontrarás un ejemplo en la sintaxis de configuración tanto de CircleCi como de {% data variables.product.prodname_actions %}.

<table>
<tr>
<th>
CircleCI
</th>
<th>
Acciones de GitHub
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

- attach_workspace:   en: /tmp/workspace
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

Para más información, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)".

## Usar bases de datos y contenedores de servicio

Ambos sistemas te permiten incluir contenedores adicionales para bases de datos, almacenamiento en caché, u otras dependencias.

En CircleCI, la primera imagen enumerada en *config.yaml* es la imagen primaria que se usa para ejecutar comandos. {% data variables.product.prodname_actions %} utiliza secciones explícitas: use `container` para el contenedor principal y enumere contenedores adicionales en `services`.

A continuación encontrarás un ejemplo en la sintaxis de configuración tanto de CircleCi como de {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
Acciones de GitHub
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

- attach_workspace:   en: /tmp/workspace
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

Para más información, vea ["Acerca de los contenedores de servicios](/actions/configuring-and-managing-workflows/about-service-containers)".

## Ejemplo completo

A continuación encontrarás un ejemplo real. A la izquierda se muestra el archivo *config.yml* real de CircleCI para el repositorio [thoughtbot/administrator](https://github.com/thoughtbot/administrate). La derecha muestra el equivalente en {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
Acciones de GitHub
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
    # Ejecución de las pruebas en varias versiones de Rails
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
