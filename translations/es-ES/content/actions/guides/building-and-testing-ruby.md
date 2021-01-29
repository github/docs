---
title: Crear y probar en Ruby
intro: Puedes crear un flujo de trabajo de integración continua (CI) para crear y probar tu proyecto de Ruby.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Esta guía te muestra cómo crear un flujo de trabajo de integración contínua (IC) que cree y pruebe una aplicación de Ruby. Si tus pruebas de IC pasan, podrías querer desplegar tu código o publicar una gema.

### Prerrequisitos

Te recomendamos que tengas una comprensión básica de Ruby, YAML, las opciones de configuración de flujo de trabajo y de cómo crear un archivo de flujo de trabajo. Para obtener más información, consulta:

- [Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby en 20 minutos](https://www.ruby-lang.org/en/documentation/quickstart/)

### Comenzar con la plantilla de flujo de trabajo de Ruby

{% data variables.product.prodname_dotcom %} proporciona una plantilla de flujo de trabajo de Ruby que funcionará con la mayoría de los proyectos de Ruby. Para obtener más información, consulta la sección [Plantilla de flujo de trabajo de Ruby](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

Para comenzar rápidamente, agrega la plantilla al directorio `.github/workflows` de tu repositorio.

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

### Especificar la versión de Ruby

La forma más fácil de especificar una versión de Ruby es utilizando la acción `ruby/setup-ruby` que se proporciona en la organización de Ruby en GitHub. Esta acción agrega cualquier versión compatible con Ruby al `PATH` de cada ejecución de un job en un flujo de trabajo. Para obtener más información, consulta [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

Se recomienda utilizar Ruby con GitHub Actions, ya sea mediante la acción `ruby/setup-ruby` de Ruby, o mediante la acción `actions/setup-ruby` de Github; debido a que esto garantiza el comportamiento consistente entre ejecutores y versiones distintas de Ruby.

La acción `setup-ruby` toma una versión de Ruby como entrada y la configura en el ejecutor.

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

Como alternativa, puedes ingresar un archivo de `.ruby-version` en la raíz de tu repositorio y `setup-ruby` utilizará la versión que se defina en dicho archivo.

### Hacer pruebas con varias versiones de Ruby

Puedes agregar una estrategia de matriz para ejecutar tu flujo de trabajo con más de una versión de Ruby. Por ejemplo, puedes probar tu código contra los últimos lanzamientos de parche para las versiones 2.7, 2.6, y 2.5. La 'x' es un caracter de comodín que empata el último lanzamiento de parche disponible para una versión.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: [2.7.x, 2.6.x, 2.5.x]
```
{% endraw %}

Cad versión de Ruby que se especifica en el arreglo `ruby-version` crea un job que ejecuta los mismos pasos. El contexto {% raw %}`${{ matrix.ruby-version }}`{% endraw %} se utiliza para acceder a la versión actual del job. Para obtener más información acerca de las estrategias y contextos de las matrices, consulta las secciones "Sintaxis de flujos de trabajo para las GitHub Actions" y "Sintaxis de contexto y expresiones para las GitHub Actions"

El flujo de trabajo ya actualizado en su totalidad con una estrategia de matriz podría verse así:

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

### Instalar dependencias con Bundler

La acción `setup-ruby` te instalará bundler automáticamente. La versión se determina de acuerdo con tu archivo `gemfile.lock`. Si no hay alguna versión presente en tu archivo de bloqueo, entonces se instalará la última versión compatible.

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

#### Almacenar dependencias en caché

Si estás utilizando ejecutores hospedados en {% data variables.product.prodname_dotcom %}, las acciones de `setup-ruby` proporcionarán un método para manejar automáticamente el guardado en caché de tus gemas entre ejecuciones.

Para habilitar el guardado en caché, configura lo siguiente.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@v1
    with:
      bundler-cache: true
```
{% endraw %}

Esto configurará a bundler para que instale tus gemas en `vendor/cache`. Para cada ejecución exitosa de tu flujo de trabajo, Actions guardará esta carpeta en caché y volverá a descargarse para cualquier ejecución de flujo de trabajo subsecuente. Se utiliza un hash de tu gemfile.lock y de la versión de Ruby como la clave de caché. Si instalas cualquier gema nueva o cambias una versión, el caché se invalidará y bundler realizará una instalación desde cero.

**Guardar en caché sin setup-ruby**

Para tener un mejor control sobre el guardado en caché, si estás utilizando ejecutores hospedados en {% data variables.product.prodname_dotcom %}, puedes utilizar la acción `actions/cache` directamente. Para obtener más información, consulta la sección "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Almacenar las dependencias en caché para agilizar los flujos de trabajo</a>".

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

Si estás utilizando una compilación de matriz, deberás incluir las variables de dicha matriz en tu clave de caché. Por ejemplo, si tienes una estrategia de matriz para versiones de Ruby diferentes (`matrix.ruby-version`) y sistemas operativos diferentes (`matrix.os`), tus pasos de flujo de trabajo podrían verse así:

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

### Probar tu código en matrices

La siguiente matriz de ejemplo prueba todos los lanzamientos estables y versiones principales de MRI, JRuby y TruffleRuby en Ubuntu y macOS.

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

### Limpiar tu código

El siguiente ejemplo instala `rubocop` y lo utiliza para limpiar todos los archivos. Para obtener más información, consulta la sección [Rubocop](https://github.com/rubocop-hq/rubocop). Puedes [configurar Rubocop](https://docs.rubocop.org/rubocop/configuration.html) para decidir cuáles serán las reglas de limpieza específicas.

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

### Publicar gemas

Puedes configurar tu flujo de trabajo para publicar tu paquete de Ruby en cualquier registro de paquetes que quieras cuando pasen tus pruebas de IC.

Puedes almacenar todos los tokens de acceso o credenciales necesarios para publicar tu paquete utilizando secretos del repositorio. Elsiguiente ejemplo crea y publica un paquete en el `Registro de Paquetes de Github` y en `RubyGems`.

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

