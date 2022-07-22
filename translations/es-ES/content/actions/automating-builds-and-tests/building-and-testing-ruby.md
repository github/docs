---
title: Crear y probar en Ruby
intro: Puedes crear un flujo de trabajo de integración continua (CI) para crear y probar tu proyecto de Ruby.
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
shortTitle: Crear & probar a Ruby
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear un flujo de trabajo de integración contínua (IC) que cree y pruebe una aplicación de Ruby. Si tus pruebas de IC pasan, podrías querer desplegar tu código o publicar una gema.

## Prerrequisitos

Te recomendamos que tengas una comprensión básica de Ruby, YAML, las opciones de configuración de flujo de trabajo y de cómo crear un archivo de flujo de trabajo. Para obtener más información, consulta:

- [Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby en 20 minutos](https://www.ruby-lang.org/en/documentation/quickstart/)

## Utilizar el flujo de trabajo inicial de Ruby

{% data variables.product.prodname_dotcom %} Proporciona un flujo de trabajo inicial de Ruby que funcionará para la mayoría de los proyectos de Ruby. Para obtener más información, consulta el [Flujo de trabajo inicial de Ruby](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

Para comenzar rápidamente, agrega el flujo de trabajo inicial al directorio de `.github/workflows` de tu repositorio. El flujo de trabajo que se muestra a continuación asume que la rama predeterminada de tu repositorio es `main`.

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

## Especificar la versión de Ruby

La forma más fácil de especificar una versión de Ruby es utilizando la acción `ruby/setup-ruby` que se proporciona en la organización de Ruby en GitHub. Esta acción agrega cualquier versión compatible con Ruby al `PATH` de cada ejecución de un job en un flujo de trabajo. Para obtener más información y versiones disponibles de Ruby, consulta [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

La forma en la que se recomienda utilizar Ruby con GitHub Actions es mediante la acción `ruby/setup-ruby` de Ruby, ya que esto garantiza el comportamiento consistente a través de los diversos ejecutores y versiones de Ruby.

La acción `setup-ruby` toma una versión de Ruby como entrada y la configura en el ejecutor.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

Como alternativa, puedes ingresar un archivo de `.ruby-version` en la raíz de tu repositorio y `setup-ruby` utilizará la versión que se defina en dicho archivo.

## Hacer pruebas con varias versiones de Ruby

Puedes agregar una estrategia de matriz para ejecutar tu flujo de trabajo con más de una versión de Ruby. Pro ejemplo, puedes probar tu código contra los últimos lanzamientos de parche de las versiones 3.1, 3.0 y 2.7.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

Cad versión de Ruby que se especifica en el arreglo `ruby-version` crea un job que ejecuta los mismos pasos. El contexto {% raw %}`${{ matrix.ruby-version }}`{% endraw %} se utiliza para acceder a la versión actual del job. Para obtener más información acerca de las estrategias y los contextos de la matriz, consulta las secciones "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions)" y "[Contextos](/actions/learn-github-actions/contexts)".

El flujo de trabajo ya actualizado en su totalidad con una estrategia de matriz podría verse así:

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

## Instalar dependencias con Bundler

La acción `setup-ruby` te instalará bundler automáticamente. La versión se determina de acuerdo con tu archivo `gemfile.lock`. Si no hay alguna versión presente en tu archivo de bloqueo, entonces se instalará la última versión compatible.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### Almacenar dependencias en caché

La acción `setup-ruby` proporciona un método para manejar automáticamente el almacenamiento en caché de tus gemas entre ejecuciones.

Para habilitar el guardado en caché, configura lo siguiente.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

Esto configurará a bundler para que instale tus gemas en `vendor/cache`. Para cada ejecución exitosa de tu flujo de trabajo, {% data variables.product.prodname_actions %} almacenará esta carpeta en caché y volverá a descargarla para ejecuciones de flujo de trabajo posteriores. Se utiliza un hash de tu gemfile.lock y de la versión de Ruby como la clave de caché. Si instalas cualquier gema nueva o cambias una versión, el caché se invalidará y bundler realizará una instalación desde cero.

**Guardar en caché sin setup-ruby**

Para tener un mejor control sobre el almacenamiento en caché, puedes utilizar la acción de `actions/cache` directamente. Para obtener más información, consulta la sección "[Almacenar las dependencias en caché para agilizar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

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

Si estás utilizando una compilación de matriz, deberás incluir las variables de dicha matriz en tu clave de caché. Por ejemplo, si tienes una estrategia de matriz para versiones de Ruby diferentes (`matrix.ruby-version`) y sistemas operativos diferentes (`matrix.os`), tus pasos de flujo de trabajo podrían verse así:

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

## Probar tu código en matrices

La siguiente matriz de ejemplo prueba todos los lanzamientos estables y versiones principales de MRI, JRuby y TruffleRuby en Ubuntu y macOS.

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

## Limpiar tu código

El siguiente ejemplo instala `rubocop` y lo utiliza para limpiar todos los archivos. Para obtener más información, consulta la sección [RuboCop](https://github.com/rubocop-hq/rubocop). Puedes [configurar Rubocop](https://docs.rubocop.org/rubocop/configuration.html) para decidir cuáles serán las reglas de limpieza específicas.

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

## Publicar gemas

Puedes configurar tu flujo de trabajo para publicar tu paquete de Ruby en cualquier registro de paquetes que quieras cuando pasen tus pruebas de IC.

Puedes almacenar todos los tokens de acceso o credenciales necesarios para publicar tu paquete utilizando secretos del repositorio. Elsiguiente ejemplo crea y publica un paquete en el `Registro de Paquetes de Github` y en `RubyGems`.

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
