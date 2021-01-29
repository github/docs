---
title: Migrarse de Travis CI a GitHub Actions
intro: '{% data variables.product.prodname_actions %} y Travis CI comparte muchas similitudes, lo cual hace que el migrarse a {% data variables.product.prodname_actions %} sea relativamente fácil.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

### Introducción

Esta guía te ayuda a migrar de Travis CI a {% data variables.product.prodname_actions %}. Aquí se comparan sus conceptos y sintaxis, se describen sus similitudes y se demuestran sus acercamientos distintos para las tareas comunes.

### Antes de comenzar

Antes de que comiences tu migración a {% data variables.product.prodname_actions %}, sería útil familiarizarse con la forma en la que funciona:

- Para encontrar un ejemplo rápido que ilustre un job de {% data variables.product.prodname_actions %}, consulta la sección "[Guía de inicio rápido para {% data variables.product.prodname_actions %}](/actions/quickstart)".
- Para aprender los conceptos básicos de {% data variables.product.prodname_actions %}, consulta la sección "[Introducción a GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)".

### Comparar la ejecución de jobs

Para darte control sobre cuándo se ejecutarán las tareas de IC, un _flujo de trabajo_ de {% data variables.product.prodname_actions %} utiliza _jobs_ que se ejecutan en paralelo predeterminadamente. Cada job contiene _pasos_ que se ejecutan en una secuencia que tú defines. Si necesitas ejecutar acciones de configuración y limpieza para un job, puedes definir pasos en cada job para que esto se lleve a cabo.

### Similitudes en las claves

{% data variables.product.prodname_actions %} y Travis CI comparten algunas similitudes y entenderlas con anticipación puede ayudar a agilizar el proceso de migración.

#### Utilizar la sintaxis de YAML

Tanto Travis CI como {% data variables.product.prodname_actions %} utilizan YAML para crear jobs y flujos de trabajo y estos archivos se almacenan en el repositorio del código. Para obtener más información sobre cómo las {% data variables.product.prodname_actions %} utilizan YAML, consulta la sección "[Crear un archivo de flujo de trabajo](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)".

#### Variables de ambiente personalizadas

Travis CI te permite configurar variables de ambiente y compartirlas entre etapas. De forma similar, las {% data variables.product.prodname_actions %} te permiten definir las variables de ambiente para un paso, job o flujo de trabajo. Para obtener más información, consulta la sección "[Variables de ambiente](/actions/reference/environment-variables)".

#### Variables de entorno predeterminadas

Tanto Travis CI como {% data variables.product.prodname_actions %} incluyen variables de ambiente predeterminadas que puedes utilizar en tus archivos de YAML. En el caso de las {% data variables.product.prodname_actions %}, puedes encontrarlas listadas en la sección "[Variables de ambiente predeterminadas](/actions/reference/environment-variables#default-environment-variables)".

#### Proceso paralelo de jobs

Travis CI puede utilizar `stages` para ejecutar jobs en paralelo. De forma similar, las {% data variables.product.prodname_actions %} ejecutan `jobs` en paralelo. Para obtener más información, consulta la sección "[Crear jobs dependientes](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)".

#### Insignias de estado

Tanto Travis CI como {% data variables.product.prodname_actions %} son compatibles con las insignias de estado, lo cual te permite indicar si una compilación pasa o falla. Para obtener más información, consulta la sección "[Agregar una insignia de estado de un flujo de trabajo a tu repositorio](/actions/managing-workflow-runs/adding-a-workflow-status-badge)".

#### Utilizar una matriz de compilaciones

Tanto Travis CI como {% data variables.product.prodname_actions %} son compatibles con matrices de compilación, lo cual te permite realizar pruebas utilizando combinaciones de sistemas operativos y paquetes de software. Para obtener más información, consulta "[Utilizar una matriz de compilaciones](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)".

A continuación podrás encontrar un ejemplo que compara la sintaxis para cada sistema:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
  - rvm: 2.5
  - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

#### Apuntar a ramas específicas

Tanto Travis CI como {% data variables.product.prodname_actions %} te permiten apuntar tu IC a una rama específica. Para obtener más información, consultala sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)".

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
  - main
  - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:    
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

#### Verificar submódulos

Tanto Travis CI como {% data variables.product.prodname_actions %} te permiten controlar si los submódulos se incluirán en los clones de los repositorios.

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
    - uses: actions/checkout@v2
      with:
        submodules: false
```
{% endraw %}
</td>
</tr>
</table>

#### Utilizar variables de ambiente en una matriz

Tanto {% data variables.product.prodname_actions %} como Travis CI pueden agregar variables de ambiente personalizadas a una matriz de pruebas, lo cual te permite referirte a la variable en un paso subsecuente.

En {% data variables.product.prodname_actions %}, puedes utilizar la clave `include` para agregar variables de ambiente personalizadas a una matriz. {% data reusables.github-actions.matrix-variable-example %}

### Características clave en {% data variables.product.prodname_actions %}

Cuando te migres de Travis CI, consider las siguientes características clave en {% data variables.product.prodname_actions %}:

#### Almacenar secretos

{% data variables.product.prodname_actions %} te permite almacenar secretos y referenciarlos en tus jobs. Las organizaciones de {% data variables.product.prodname_actions %} pueden limitar qué repositorios pueden acceder a sus secretos. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}Las reglas de protección de ambiente pueden requerir aprobación manual para que un flujo de trabajo acceda a los secretos del ambiente. {% endif %}Para obtener más información, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets)".

#### Compartir archivos entre jobs y flujos de trabajo

{% data variables.product.prodname_actions %} incluye compatibilidad integrada para almacenamiento de artefactos, lo cual te permite compartir archivos entre jobs en un flujo de trabajo. También puedes guardar los archivos resultantes y compartirlos con otros flujos de trabajo. Para obtener más información, consulta la sección "[Compartir datos entre jobs](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)".

#### Alojar tus propios corredores

Si tus jobs requieren de hardware o software específico, {% data variables.product.prodname_actions %} te permite almacenar tus propios ejecutores y enviar tus jobs para que éstos los procesen. {% data variables.product.prodname_actions %} también te permite utilizar políticas para controlar cómo se accede a estos ejecutores, otorgando acceso a nivel de organización o de repositorio. Para obtener más información, consulta la sección "[Hospedar tus propios ejecutores](/actions/hosting-your-own-runners)".

#### Tiempo de ejecución y jobs simultáneos

Los jobs simultáneos y los tiempos de ejecución de los flujos de trabajo en {% data variables.product.prodname_actions %} pueden variad dependiendo de tu plan de {% data variables.product.company_short %}. Para obtener más información, consulta la sección "[Límites de uso, facturación y administración](/actions/reference/usage-limits-billing-and-administration)."

#### Utilizar lenguajes diferentes en {% data variables.product.prodname_actions %}

Cuando trabajas con lenguajes diferentes en {% data variables.product.prodname_actions %}, pueeds crear un paso en tu job para configurar tus dependencias de lenguaje. Para obtener más información acerca de cómo trabajar con un lenguaje en particular, consulta la guía específica:
  - [Crear y probar en Node.js](/actions/guides/building-and-testing-nodejs)
  - [Compilar y probar PowerShell](/actions/guides/building-and-testing-powershell)
  - [Crear y probar en Python](/actions/guides/building-and-testing-python)
  - [Construir y probar Java con Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Construir y probar Java con Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Construir y probar Java con Ant](/actions/guides/building-and-testing-java-with-ant)

### Ejecutar scripts

{% data variables.product.prodname_actions %} puede utilizar pasos de `run` para ejecutar scripts o comandos de shell. Para utilizar un shell en particular, puedes especificar el tipo de `shell` cuando proporciones la ruta al script. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Por ejemplo:

```yaml
      steps:
        - name: Run build script
          run: ./.github/scripts/build.sh
          shell: bash
```

### Manejo de errores en {% data variables.product.prodname_actions %}

Cuando te migras a {% data variables.product.prodname_actions %}, hay varios acercamientos al manejo de errores que puede que necesites tener en mente.

#### Manejo de errores en scripts

{% data variables.product.prodname_actions %} detiene un job inmediatamente si alguno de los pasos regresa un código de error. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)".

#### Manejo de errores en jobs

{% data variables.product.prodname_actions %} utiliza condicionales de tipo `if` para ejecutar jobs o pasos en ciertas situaciones. Por ejemplo, puedes ejecutar un paso cuando otro paso da `failure()` como resultado. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)".  También puedes utilizar [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) para prevenir que una ejecución de flujo de trabajo se detenga cuando falla un job.

### Sintaxis de migración para condicionales y expresiones

Para ejecutar jobs bajo expresiones condicionales, Travis CI y {% data variables.product.prodname_actions %} comparten una sintaxis condicional de tipo `if` similar. {% data variables.product.prodname_actions %} te permite utilizar la condicional `if` para prevenir que un paso o un job se ejecuten a menos de que se cumpla con la condición. Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."

Este ejemplo demuestra cómo una condicional de tipo `if` puede controlar si un paso se ejecuta o no:

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

### Migrar las fases a pasos

Mientras que Travis CI utiliza _fases_ para ejecutar _pasos_, {% data variables.product.prodname_actions %} tiene _pasos_ que pueden ejecutar _acciones_. Puedes encontrar acciones preconstruidas en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), o puedes crear tus propias acciones. Para obtener más información, consulta la sección "[Crear acciones](/actions/building-actions)".

Puedes encontrar un ejemplo de la sintaxis para cada sistema:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

script:
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/setup-python@v2
      with:
        python-version: '3.7'
        architecture: 'x64'
    - run: python script.py
```
{% endraw %}
</td>
</tr>
</table>

### Almacenar dependencias en caché

Travis CI y {% data variables.product.prodname_actions %} te permiten guardar dependencias en caché manualmente para reutilizarlas posteriormente. Este ejemplo ilustra la sintaxis de caché para cada sistema.

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
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

El almacenamiento en caché de {% data variables.product.prodname_actions %} solo aplica a los ejecutores hospedados en {% data variables.product.prodname_dotcom %}.  Para obtener más información, consulta la sección "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Almacenar las dependencias en caché para agilizar los flujos de trabajo</a>".

### Ejemplos de tareas comunes

Esta sección compara cómo {% data variables.product.prodname_actions %} y Travis CI realizan tareas en común.

#### Configurar variables de ambiente

Puedes crear variables de ambiente personalizadas en un job de {% data variables.product.prodname_actions %}. Por ejemplo:

<table>
<tr>
<th>
Travis CI
</th>
<th>
Flujo de trabajo de {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

  ```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
  ```

</td>
<td>

  ```yaml
 jobs:
    maven-build:
      env:
        MAVEN_PATH: '/usr/local/maven'
  ```

</td>
</tr>
</table>

#### Compilar con Node.js

<table>
<tr>
<th>
Travis CI
</th>
<th>
Flujo de trabajo de {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>
{% raw %}
  ```yaml
install:
    - npm install
script:
    - npm run build
    - npm test
  ```
{% endraw %}
</td>
<td>
{% raw %}
  ```yaml
name: Node.js CI
on: [push]
jobs:
    build:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
  ```
{% endraw %}
</td>
</tr>
</table>

### Pasos siguientes

Para seguir aprendiendo sobre las características principales de {% data variables.product.prodname_actions %}, consulta la sección "[Aprender sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".
