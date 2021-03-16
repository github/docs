---
title: Migrarse desde la IC/EC de GitLab a GitHub Actions
intro: '{% data variables.product.prodname_actions %} y la IC/EC de GitLab comparten varias similitudes de configuración, lo cual hace que el migrarse a {% data variables.product.prodname_actions %} sea relativamente simple.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
topics:
  - 'GitLab'
  - 'Migration'
  - 'CI'
  - 'CD'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Tanto la IC/EC de GitLab como las {% data variables.product.prodname_actions %} te permiten crear flujos de trabajo que crean, prueban, publican, lanzan y despliegan código automáticamente. La IC/EC de GitLab y las {% data variables.product.prodname_actions %} comparten algunas similitudes en la configuración de los flujos de trabajo:

- Los archivos de configuración de flujo de trabajo están escritas en YAML y se almacenan en el repositorio del código.
- Los flujos de trabajo incluyen uno o más jobs.
- Los jobs incluyen uno o más pasos o comandos individuales.
- Los jobs pueden ejecutarse ya sea en máquinas administradas o auto-hospedadas.

Hay unas cuantas diferencias, y esta guía te mostrará las diferencias importantes para que puedas migrar tu flujo de trabajo a {% data variables.product.prodname_actions %}.

### Jobs

Los jobs en la IC/EC de GitLab son muy similares a aquellos en {% data variables.product.prodname_actions %}. En ambos sistemas, los jobs tienen las siguientes características:

* Los jobs contienen una serie de pasos o scripts que se ejecutan secuencialmente.
* Los jobs pueden ejecutarse en máquinas o contenedores separados.
* Los jobs se ejecutan en paralelo predeterminadamente, pero pueden configurarse para ejecutarse en secuencia.

Puedes ejecutar un script o un comando de shell en un job. En la IC/EC de GitLab, los pasos de los scripts se especifican utilizando la clave `script`. En {% data variables.product.prodname_actions %}, todos los scripts se especifican utilizando la clave `run`.

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table class="d-block">
<tr>
<th>
IC/EC de GitLab
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  job1:
    steps:
      - uses: actions/checkout@v2
      - run: echo "Run your script here"
```
{% endraw %}
</td>
</tr>
</table>

### Ejecutores

Los ejecutores son máquinas en donde se ejecutan los jobs. Tanto la IC/EC de GitLab como las {% data variables.product.prodname_actions %} ofrecen variantes administradas y auto-hospedadas de los ejecutores. En la IC/EC de GitLab, se utilizan las `tags` para ejecutar jobs en plataformas diferentes, mientras que en las {% data variables.product.prodname_actions %} todo se realiza con la clave `runs-on`.

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table>
<tr>
<th>
IC/EC de GitLab
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job:
  tags:
    - linux
  script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on : windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```
{% endraw %}
</td>
</tr>
</table>

Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

### Imágenes de Docker

Tanto la IC/EC de GitLab como las {% data variables.product.prodname_actions %} son compatibles con la ejecución de jobs en una imagen de Docker. En la IC/EC de GitLab, las imágenes de Docker se definen con una clave de `image`, mientras que en las {% data variables.product.prodname_actions %} se hace con la clave `container`.

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table class="d-block">
<tr>
<th>
IC/EC de GitLab
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
my_job:
  image: node:10.16-jessie
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```
{% endraw %}
</td>
</tr>
</table>

Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)".

### Sintaxis de condiciones y expresiones

La IC/EC de GitLab utiliza `rules` para determinar si un job se ejecutará para una condición específica. Las {% data variables.product.prodname_actions %} utilizan la palabra clave `if` para prevenir que un job se ejecute a menos de que se cumpla con una condición.

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table class="d-block">
<tr>
<th>
IC/EC de GitLab
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deploy to production server"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to production server"
```
{% endraw %}
</td>
</tr>
</table>

Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."

### Dependencias entre los Jobs

Tanto la IC/EC de GitLab como las {% data variables.product.prodname_actions %} te permiten configurar dependencias para un job. En ambos sistemas, los jobs se ejecutan en paralelo predeterminadamente, pero las dependencias de éstos en las {% data variables.product.prodname_actions %} se pueden especificar explícitamente con la clave `needs`. La IC/EC de GitLab también tiene un concepto de `stages`, en donde los jobs de una etapa se ejecutan simultáneamente, pero la siguiente etapa comenzaría cuando todos los jobs de la etapa previa se hayan completado. Puedes crecrear este escenario en las {% data variables.product.prodname_actions %} con la palabra clave `needs`.

Puedes encontrar un ejemplo de la sintaxis para cada sistema. Los flujos de trabajo comienzan con dos jobs que se llaman `build_a` y `build_b` ejecutándose en paralelo y, cuando estos jobs se completan, se ejecutará otro job llamado `test_ab`. Finalmente, cuando se completa el `test_ab`, se ejecutará el job `deploy_ab`.

<table class="d-block">
<tr>
<th>
IC/EC de GitLab
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
stages:
  - build
  - test
  - deploy

build_a:
  stage: build
  script:
    - echo "This job will run first."

build_b:
  stage: build
  script:
    - echo "This job will run first, in parallel with build_a."

test_ab:
  stage: test
  script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab:
  stage: deploy
  script:
    - echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first, in parallel with build_a"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "This job will run after build_a and build_b have finished"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
</tr>
</table>

Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

### Programar flujos de trabajo

Tanto la IC/EC de GitLab como las {% data variables.product.prodname_actions %} te permiten ejecutar flujos de trabajo en un intervalo específico. En la IC/EC de GitLab, las programaciones de mapa se configuran con la IU, mientras que en las {% data variables.product.prodname_actions %} puedes activar un flujo de trabajo en un intervalo programado con la clave "on".

Para obtener más información, consulta la sección "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows#scheduled-events)".

### Variables y secretos

La IC/EC de GitLab y las {% data variables.product.prodname_actions %} son compatibles con la configuración de variables de ambiente en el mapa o en el archivo de configuración de flujo de trabajo, y con la creación de secretos utilizando la IU de GitLab o de {% data variables.product.product_name %}.

Para obtener más información, consulta las secciones "[Variables de ambiente](/actions/reference/environment-variables)" y "[Secretos cifrados](/actions/reference/encrypted-secrets)".

### Almacenamiento en caché

La IC/EC de GitLab y las {% data variables.product.prodname_actions %} proporcionan un método en el archivo de configuración para guardar los archivos de flujo de trabajo manualmente en el caché.

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table class="d-block">
<tr>
<th>
IC/EC de GitLab
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
image: node:latest

cache:
  key: $CI_COMMIT_REF_SLUG
  paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async:
  script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  test_async:
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

El almacenamiento en caché de {% data variables.product.prodname_actions %} solo aplica a los ejecutores hospedados en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Almacenar las dependencias en caché para agilizar los flujos de trabajo</a>".

### Artefactos

Tanto la IC/EC de GitLab como las {% data variables.product.prodname_actions %} pueden cargar como artefactos los archivos y directorios que creen los jobs. En las {% data variables.product.prodname_actions %}, los artefactos pueden utilizarse para persistir los datos a través de varios jobs.

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table>
<tr>
<th>
IC/EC de GitLab
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
script:
artifacts:
  paths:
    - math-homework.txt
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
```
{% endraw %}
</td>
</tr>
</table>

Para obtener más información, consulta la sección "[Almacenar los datos de los flujos de trabajo como artefactos](/actions/guides/storing-workflow-data-as-artifacts)".

### Bases de datos y contenedores de servicios

Ambos sistemas te permiten incluir contenedores adicionales para bases de datos, almacenamiento en caché, u otras dependencias.

En la IC/EC de GitLab, un contenedor para el job se especifica con la clave `image` key, mientras que las {% data variables.product.prodname_actions %} utilizan la clave `container`. En ambos sistemas se especifican contenedores de servicio adicionales con la clave `services`.

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table class="d-block">
<tr>
<th>
IC/EC de GitLab
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # The hostname used to communicate with the
    # PostgreSQL service container
    POSTGRES_HOST: postgres
    # The default PostgreSQL port
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # Performs a clean installation of all dependencies
    # in the `package.json` file
    - npm ci
    # Runs a script that creates a PostgreSQL client,
    # populates the client with data, and retrieves data
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: actions/checkout@v2

      # Performs a clean installation of all dependencies
      # in the `package.json` file
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL client,
        # populates the client with data, and retrieves data
        run: node client.js
        env:
          # The hostname used to communicate with the
          # PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```
{% endraw %}
</td>
</tr>
</table>

Para obtener más información, consulta la sección "[Acerca de los contenedores de servicio](/actions/guides/about-service-containers)".
