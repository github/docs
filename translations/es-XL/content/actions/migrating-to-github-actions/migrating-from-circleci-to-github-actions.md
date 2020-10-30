---
title: Migrar de CircleCI a GitHub Actions
intro: 'GitHub Actions y CircleCi comparten varias configuraciones similares, lo cual hace que migrar a GitHub Actions sea relativamente fácil.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Tanto CircleCi como {% data variables.product.prodname_actions %} te permiten crear flujos de trabajo que compilan, prueban, publican, lanzan y despliegan código automáticamente. CircleCI y {% data variables.product.prodname_actions %} comparten algunas similaridades en la configuración del flujo de trabajo:

- Los archivos de configuración de flujo de trabajo están escritos en YAML y se almacenan en el repositorio.
- Los flujos de trabajo incluyen uno o más jobs.
- Los jobs incluyen uno o más pasos o comandos individuales.
- Los pasos o tareas pueden reutilizarse y compartirse con la comunidad.

Para obtener más información, consulta la sección "[Conceptos esenciales para {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

### Diferencias clave

Cuando migres desde CircleCI, considera las siguientes diferencias:

- El paralelismo automático de pruebas de CircleCI agrupa las pruebas automáticamente de acuerdo con las reglas que el usuario haya especificado o el historial de información de tiempos. Esta funcionalidad no se incluye en {% data variables.product.prodname_actions %}.
- Las acciones que se ejecutan en los contenedores de Docker distinguen entre problemas de permisos, ya que los contenedores tienen un mapeo de usuarios diferente. Puedes evitar muchos de estos problemas si no utilizas la instrucción `USER` en tu *Dockerfile*. Para obtener más información acerca del sistema de archivos de Docker, consulta la sección "[Ambientes virtuales para los ejecutores hospedados en {% data variables.product.product_name %}](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)".

### Migrar flujos de trabajo y jobs

CircleCi define los `workflows` en el archivo *config.yml*, lo cual te permite configurar más de un flujo de trabajo. {% data variables.product.product_name %} requiere tratar los flujos de trabajo uno por uno y, como consecuencia, no necesita que declares los `workflows`. Necesitarás crear un nuevo archivo de flujo de trabajo para cada flujo que se haya configurado en *config.yml*.

Tanto CircleCI como {% data variables.product.prodname_actions %} configuran `jobs` en el archivo de configuración utilizando una sintaxis similar. Si configurars cualquier dependencia entre jobs utilizando `requires` en tu flujo de trabajo de CircleCI, puedes utilizar la sintaxis de {% data variables.product.prodname_actions %} equivalente "`needs`". Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

### Mirgrar orbes a acciones

Tanto CircleCI como {% data variables.product.prodname_actions %} proporcionan un mecanismo para reutilizar y compartir tareas en un flujo de trabajo. CircleCi utiliza un concepto llamado orbes (orbs), escrito en YAML, que proporciona tareas que las personas pueden reutilizar en un flujo de trabajo. {% data variables.product.prodname_actions %} cuenta con componentes reutilizables poderosos y flexibles llamados acciones (actions), los cuales compilas ya sea con archivos de JavaScript o con imagenes de Docker. Puedes crear acciones escribiendo un código personalizado que interactúe con tu repositorio de la manera que desees, incluida la integración con las API de {% data variables.product.product_name %} y cualquier API de terceros disponible públicamente. Por ejemplo, una acción puede publicar módulos npm, enviar alertas por SMS cuando se crean propuestas urgentes o implementar un código listo para producción. Para obtener más información, consulta la sección "[Crear acciones](/actions/creating-actions)".

Circle CI puede reutilizar partes de los flujos de trabajo con anclas y alias. {% data variables.product.prodname_actions %} es compatible con las necesidades de reutilización más comunes utilizando matrices de compilación. Para obtener más información acerca de matrices de compilación, consulta la sección "[Configurar un flujo de trabajo](/actions/configuring-and-managing-workflows/configuring-a-workflow#configuring-a-build-matrix)".

### Utilizar imágenes de Docker


Tanto CircleCi como {% data variables.product.prodname_actions %} son compatibles con la ejecución de pasos dentro de una imagen de Docker.

CircleCi proporciona un conjunto de imágenes pre-compiladas con dependencias comunes. Estas imágenes cuentan con el `USER` configurado como `circleci`, lo cual ocasiona que los permisos choquen con {% data variables.product.prodname_actions %}.

Recomendamos que te retires de las imágenes pre-compiladas de CircleCi cuando migres a {% data variables.product.prodname_actions %}. En muchos casos, puedes utilizar acciones para instalar dependencias adicionales que necesites.

Para obtener más información acerca del sistema de archivos de Docker, consulta la sección "[Ambientes virtuales para los ejecutores hospedados en {% data variables.product.product_name %}](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)".

Para obtener más información acerca de las herramientas y paquetes disponibles en los ambientes virtuales hospedados en {% data variables.product.prodname_dotcom %}, consulta la sección "[Software instalado en los ejecutores hospedados en GitHub](/actions/reference/software-installed-on-github-hosted-runners)".

### Utilizar variables y secretos

CircleCi y {% data variables.product.prodname_actions %} son compatibles con la configuración de variables de ambiente en el archivo de configuración y con la creación de secretos utilizando la IU de CircleCI o de {% data variables.product.product_name %}.

Para obtener más información, consulta la sección "[Utilizar variables de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" y "[Crear y utilizar secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

### Almacenamiento en caché

CircleCI y {% data variables.product.prodname_actions %} proporcionan un método para almacenar archivos en cahcé manualmente en el archivo de configuración.

Puedes encontrar un ejemplo de la sintaxis para cada sistema.

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

Para obtener más información, consulta "[Almacenar en caché las dependencias para agilizar los flujos de trabajo](/actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows)".

{% data variables.product.prodname_actions %} no tiene un equivalente al Almacenamiento en Caché por Capas de Docker (o DLC, por sus siglas en inglés) que tiene CircleCI.

### Datos persistentes entre jobs

Tanto CircleCi como {% data variables.product.prodname_actions %} proporcionan mecanismos para persistir datos entre jobs.

A continuación encontrarás un ejemplo en la sintaxis de configuración tanto de CircleCi como de {% data variables.product.prodname_actions %}.

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

Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)."

### Usar bases de datos y contenedores de servicio

Ambos sistemas te permiten incluir contenedores adicionales para bases de datos, almacenamiento en caché, u otras dependencias.

En CircleCi, la primera imagen listada en el *config.yaml* es la imagen primaria que se utiliza para ejecutar comandos. {% data variables.product.prodname_actions %} utiliza secciones explícitas: utiliza `container` para el contenedor primario, y lista contenedores adicionales en `services`.

A continuación encontrarás un ejemplo en la sintaxis de configuración tanto de CircleCi como de {% data variables.product.prodname_actions %}.

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

Para obtener más información, consulta la sección "[Acerca de los contenedores de servicio](/actions/configuring-and-managing-workflows/about-service-containers)".

### Ejemplo Completo

A continuación encontrarás un ejemplo real. A la izquierda puedes ver el *config.yml* real de CircleCi para el repositorio [thoughtbot/administrator](https://github.com/thoughtbot/administrate). La derecha muestra el equivalente en {% data variables.product.prodname_actions %}.

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

default_job: &default_job
  working_directory: ~/administrate
  steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
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
