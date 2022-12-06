---
title: Migrarse de Travis CI a GitHub Actions
intro: '{% data variables.product.prodname_actions %} y Travis CI comparte muchas similitudes, lo cual hace que el migrarse a {% data variables.product.prodname_actions %} sea relativamente fácil.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: Migrate from Travis CI
ms.openlocfilehash: 00da8dc259ef4de197faffd8db654dd536c1c237
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178995'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te ayuda a migrar de Travis CI a {% data variables.product.prodname_actions %}. Aquí se comparan sus conceptos y sintaxis, se describen sus similitudes y se demuestran sus acercamientos distintos para las tareas comunes.

## Antes de comenzar

Antes de que comiences tu migración a {% data variables.product.prodname_actions %}, sería útil familiarizarse con la forma en la que funciona:

- Para ver un ejemplo rápido que muestra un trabajo de {% data variables.product.prodname_actions %}, consulte "[Inicio rápido para {% data variables.product.prodname_actions %}](/actions/quickstart)".
- Para obtener información sobre los conceptos básicos de {% data variables.product.prodname_actions %}, vea "[Introducción a Acciones de GitHub](/actions/learn-github-actions/introduction-to-github-actions)".

## Comparar la ejecución de jobs

Para proporcionarle control sobre cuándo se ejecutan las tareas de CI, un _flujo de trabajo_ de {% data variables.product.prodname_actions %} usa _trabajos_ que se ejecutan en paralelo de forma predeterminada. Cada trabajo contiene _pasos_ que se ejecutan en una secuencia definida por usted. Si necesitas ejecutar acciones de configuración y limpieza para un job, puedes definir pasos en cada job para que esto se lleve a cabo.

## Similitudes en las claves

{% data variables.product.prodname_actions %} y Travis CI comparten algunas similitudes y entenderlas con anticipación puede ayudar a agilizar el proceso de migración.

### Utilizar la sintaxis de YAML

Tanto Travis CI como {% data variables.product.prodname_actions %} utilizan YAML para crear jobs y flujos de trabajo y estos archivos se almacenan en el repositorio del código. Para obtener más información sobre cómo {% data variables.product.prodname_actions %} usa YAML, vea "[Creación de un archivo de flujo de trabajo](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)".

### Variables de entorno personalizadas

Travis CI te permite configurar variables de ambiente y compartirlas entre etapas. De forma similar, las {% data variables.product.prodname_actions %} te permiten definir las variables de ambiente para un paso, job o flujo de trabajo. Para más información, vea "[Variables de entorno](/actions/reference/environment-variables)".

### Variables de entorno predeterminadas

Tanto Travis CI como {% data variables.product.prodname_actions %} incluyen variables de ambiente predeterminadas que puedes utilizar en tus archivos de YAML. Puede ver las variables de {% data variables.product.prodname_actions %} en "[Variables de entorno predeterminadas](/actions/reference/environment-variables#default-environment-variables)".

### Proceso paralelo de jobs

Travis CI puede usar `stages` para ejecutar trabajos en paralelo. Del mismo modo, {% data variables.product.prodname_actions %} ejecuta `jobs` en paralelo. Para más información, vea "[Creación de trabajos dependientes](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)".

### Notificaciones de estado

Tanto Travis CI como {% data variables.product.prodname_actions %} son compatibles con las insignias de estado, lo cual te permite indicar si una compilación pasa o falla.
Para más información, vea "[Adición de un distintivo de estado de flujo de trabajo al repositorio](/actions/managing-workflow-runs/adding-a-workflow-status-badge)".

### Uso de una matriz

Tanto Travis CI como {% data variables.product.prodname_actions %} son compatibles con matrices, lo cual te permite realizar pruebas mediante combinaciones de sistemas operativos y paquetes de software. Para más información, consulta "[Uso de una matriz para los trabajos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

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

### Apuntar a ramas específicas

Tanto Travis CI como {% data variables.product.prodname_actions %} te permiten apuntar tu IC a una rama específica. Para más información, vea "[Sintaxis del flujo de trabajo para Acciones de GitHub](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Aquí se muestra un ejemplo de la sintaxis para cada sistema:

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

### Verificar submódulos

Tanto Travis CI como {% data variables.product.prodname_actions %} te permiten controlar si los submódulos se incluirán en los clones de los repositorios.

Aquí se muestra un ejemplo de la sintaxis para cada sistema:

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

```yaml
- uses: {% data reusables.actions.action-checkout %}
  with:
    submodules: false
```

</td>
</tr>
</table>

### Utilizar variables de ambiente en una matriz

Tanto {% data variables.product.prodname_actions %} como Travis CI pueden agregar variables de ambiente personalizadas a una matriz de pruebas, lo cual te permite referirte a la variable en un paso subsecuente.

En {% data variables.product.prodname_actions %}, puede usar la clave `include` para agregar variables de entorno personalizadas a una matriz. {% data reusables.actions.matrix-variable-example %}

## Características clave en {% data variables.product.prodname_actions %}

Cuando te migres de Travis CI, consider las siguientes características clave en {% data variables.product.prodname_actions %}:

### Almacenamiento de secretos

{% data variables.product.prodname_actions %} te permite almacenar secretos y referenciarlos en tus jobs. Las organizaciones de {% data variables.product.prodname_actions %} pueden limitar qué repositorios pueden acceder a sus secretos. Las reglas de protección de ambiente pueden requerir aprobación manual para que un flujo de trabajo acceda a los secretos del ambiente. Para más información, vea "[Secretos cifrados](/actions/reference/encrypted-secrets)".

### Compartir archivos entre jobs y flujos de trabajo

{% data variables.product.prodname_actions %} incluye compatibilidad integrada para almacenamiento de artefactos, lo cual te permite compartir archivos entre jobs en un flujo de trabajo. También puedes guardar los archivos resultantes y compartirlos con otros flujos de trabajo. Para más información, vea "[Uso compartido de datos entre trabajos](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)".

### Alojar tus propios corredores

Si tus jobs requieren de hardware o software específico, {% data variables.product.prodname_actions %} te permite almacenar tus propios ejecutores y enviar tus jobs para que éstos los procesen. {% data variables.product.prodname_actions %} también te permite utilizar políticas para controlar cómo se accede a estos ejecutores, otorgando acceso a nivel de organización o de repositorio. Para más información, vea "[Hospedaje de sus propios ejecutores](/actions/hosting-your-own-runners)".

{% ifversion fpt or ghec %}

### Tiempo de ejecución y jobs simultáneos

Los jobs simultáneos y los tiempos de ejecución de los flujos de trabajo en {% data variables.product.prodname_actions %} pueden variad dependiendo de tu plan de {% data variables.product.company_short %}. Para más información, vea "[Límites de uso, facturación y administración](/actions/reference/usage-limits-billing-and-administration)".

{% endif %}

### Utilizar lenguajes diferentes en {% data variables.product.prodname_actions %}

Cuando trabajas con lenguajes diferentes en {% data variables.product.prodname_actions %}, pueeds crear un paso en tu job para configurar tus dependencias de lenguaje. Para obtener más información acerca de cómo trabajar con un lenguaje en particular, consulta la guía específica:
  - [Crear y probar en Node.js](/actions/guides/building-and-testing-nodejs)
  - [Crear y probar en Python](/actions/guides/building-and-testing-python)
  - [Compilar y probar PowerShell](/actions/guides/building-and-testing-powershell)
  - [Compilación y prueba de Java con Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Compilación y prueba de Java con Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Compilación y prueba de Java con Ant](/actions/guides/building-and-testing-java-with-ant)

## Ejecución de scripts

{% data variables.product.prodname_actions %} puede usar pasos `run` para ejecutar scripts o comandos de shell. Para usar un shell determinado, puede especificar el tipo de `shell` al proporcionar la ruta de acceso al script. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Por ejemplo:

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## Manejo de errores en {% data variables.product.prodname_actions %}

Cuando te migras a {% data variables.product.prodname_actions %}, hay varios acercamientos al manejo de errores que puede que necesites tener en mente.

### Manejo de errores en scripts

{% data variables.product.prodname_actions %} detiene un job inmediatamente si alguno de los pasos regresa un código de error. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)".

### Manejo de errores en jobs

{% data variables.product.prodname_actions %} usa condicionales `if` para ejecutar trabajos o pasos en ciertas situaciones. Por ejemplo, puede ejecutar un paso cuando otro paso da como resultado `failure()`. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)".  También puede usar [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) para evitar que una ejecución de flujo de trabajo se detenga cuando se produce un error en un trabajo.

## Sintaxis de migración para condicionales y expresiones

Para ejecutar trabajos con expresiones condicionales, Travis CI y {% data variables.product.prodname_actions %} comparten una sintaxis de condición `if` similar. {% data variables.product.prodname_actions %} permite usar el condicional `if` para evitar que un trabajo o un paso se ejecuten a menos que se cumpla una condición. Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions)".

En este ejemplo se muestra cómo un condicional `if` puede controlar si se ejecuta un paso:

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## Migrar las fases a pasos

Donde Travis CI usa _fases_ para ejecutar _pasos_, {% data variables.product.prodname_actions %} tiene _pasos_ que ejecutan _acciones_. Puede encontrar acciones precompiladas en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), o bien puede crear sus propias acciones. Para más información, vea "[Creación de acciones](/actions/building-actions)".

Aquí se muestra un ejemplo de la sintaxis para cada sistema:

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

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

## Almacenar dependencias en caché

Travis CI y {% data variables.product.prodname_actions %} te permiten guardar dependencias en caché manualmente para reutilizarlas posteriormente.

{% ifversion actions-caching %}

Este ejemplo ilustra la sintaxis de caché para cada sistema.

<table>
<tr>
<th>
Travis CI
</th>
<th>
Acciones de GitHub
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

## Ejemplos de tareas comunes

Esta sección compara cómo {% data variables.product.prodname_actions %} y Travis CI realizan tareas en común.

### Configurar variables de ambiente

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

### Compilar con Node.js

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

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```

</td>
</tr>
</table>

## Pasos siguientes

Para seguir aprendiendo sobre las características principales de {% data variables.product.prodname_actions %}, vea"[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".
