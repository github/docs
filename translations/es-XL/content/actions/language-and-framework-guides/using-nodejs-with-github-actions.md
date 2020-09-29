---
title: Usar Node.js con Acciones de GitHub
intro: Puedes crear un flujo de trabajo de integración continua (CI) para construir y probar tu proyecto Node.js.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Esta guía te muestra cómo crear un flujo de trabajo de integración continua (CI) que construye y prueba código Node.js. Si tus pruebas de CI se superan, es posible que desees implementar tu código o publicar un paquete.

### Prerrequisitos

Te recomendamos que tengas una comprensión básica de Node.js, YAML, las opciones de configuración de flujo de trabajo y cómo crear un archivo de flujo de trabajo. Para obtener más información, consulta "[Configurar un flujo de trabajo](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)" y "[Comenzar con Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)."

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Conceptos básicos para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)"
- "[Usar variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)"

{% data reusables.actions.enterprise-setup-prereq %}

### Comenzar con una plantilla de flujo de trabajo de Node.js

{% data variables.product.prodname_dotcom %} proporciona una plantilla de flujo de trabajo de Node.js que funcionará para la mayoría de los proyectos Node.js. Esta guía incluye ejemplos de npm y Yarn que puedes usar para personalizar la plantilla. Para obtener más información, consulta la [Plantilla de flujo de trabajo Node.js](https://github.com/actions/starter-workflows/blob/master/ci/node.js.yml).

Para comenzar rápidamente, agrega la plantilla al directorio `.github/workflows` de tu repositorio.

{% raw %}
```yaml
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [8.x, 10.x, 12.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

{% data reusables.github-actions.example-github-runner %}

### Especificar la versión de Node.js

La forma más fácil de especificar una versión de Node.js es por medio de la acción `setup-node` proporcionada por {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta [`setup-node`](https://github.com/actions/setup-node/).

La acción `setup-node` toma una versión de Node.js como una entrada y configura esa versión en el ejecutor. La acción `setup-node` encuentra una versión específica de Node.js de la caché de herramientas en cada ejecutor y añade los binarios necesarios a `PATH`, que continúan para el resto del trabajo. Usar la acción `setup-node` es la forma recomendada de usar Node.js con {% data variables.product.prodname_actions %} porque asegura un comportamiento consistente a través de diferentes ejecutores y diferentes versiones de Node.js. Si estás usando un ejecutor autoalojado, debes instalar Node.js y añadirlo a `PATH`.

La plantilla incluye una estrategia de matriz que construye y prueba tu código con tres versiones de Node.js: 8.x, 10.x y 12.x. La 'x' es un carácter comodín que coincide con el último lanzamiento menor y de parche disponible para una versión. Cada versión de Node.js especificada en la matriz `node-version` crea un trabajo que ejecuta los mismos pasos.

Cada trabajo puede acceder al valor definido en la matriz `node-version` por medio del contexto `matrix`. La acción `setup-node` utiliza el contexto como la entrada `node-version`. La acción `setup-node` configura cada trabajo con una versión diferente de Node.js antes de construir y probar código. Para obtener más información acerca de las estrategias y los contextos de la matriz, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}"](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) y "[Sintaxis de contexto y expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

{% raw %}
```yaml
strategy:
  matrix:
    node-version: [8.x, 10.x, 12.x]

steps:
- uses: actions/checkout@v2
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v1
  with:
    node-version: ${{ matrix.node-version }}
```
{% endraw %}

Como alternativa, puedes construir y probar con las versiones exactas de Node.js.

```yaml
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

O bien, puedes construir y probar mediante una versión única de Node.js.

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
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

Si no especificas una versión de Node.js, {% data variables.product.prodname_dotcom %} utiliza la versión de Node.js por defecto del entorno. Para obtener más información, consulta "[Software instalado en ejecutores alojados en {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners)."

### Instalar dependencias

Los ejecutores alojados en {% data variables.product.prodname_dotcom %} tienen instalados administradores de dependencias de npm y Yarn. Puedes usar npm y Yarn para instalar dependencias en tu flujo de trabajo antes de construir y probar tu código. Los ejecutores Windows y Linux alojados en {% data variables.product.prodname_dotcom %} también tienen instalado Grunt, Gulp y Bower.

También puedes almacenar en caché las dependencias para acelerar tu flujo de trabajo. Para obtener más información, consulta "[Almacenar en caché las dependencias para acelerar tu flujo de trabajo](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)."

#### Ejemplo con npm

Este ejemplo instala las dependencias definidas en el archivo *package.json*. Para obtener más información, consulta [`Instalar npm`](https://docs.npmjs.com/cli/install).

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

Mediante `npm ci` se instalan las versiones en el archivo *package-lock.json* o *npm-shrinkwrap.json* y se evitan las actualizaciones al archivo de bloqueo. Usar `npm ci` generalmente es más rápido que ejecutar `npm install`. Para obtener más información, consulta [`npm ci`](https://docs.npmjs.com/cli/ci.html) e [Introducir `npm ci` para construcciones más rápidas y confiables](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)."

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```
{% endraw %}

#### Ejemplo con Yarn

Este ejemplo instala las dependencias definidas en el archivo *package.json*. Para obtener más información, consulta [`Instalar yarn`](https://yarnpkg.com/en/docs/cli/install).

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

De forma alternativa, puede pasar `--frozen-lockfile` para instalar las versiones en el archivo *yarn.lock* y evitar actualizaciones al archivo *yarn.lock*.

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

#### Ejemplo de uso de un registro privado y la creación del archivo .npmrc

{% data reusables.github-actions.setup-node-intro %}

Para autenticarte en tu registro privado, deberás almacenar tu token de autenticación npm como un secreto en los parámetros de tu repositorio. Por ejemplo, crea un secreto llamado `NPM_TOKEN`. Para obtener más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

En el siguiente ejemplo, el secreto `NPM_TOKEN` almacena el token de autenticación npm. La acción `setup-node` configura el archivo *.npmrc* para leer el token de autenticación npm desde la variable de entorno `NODE_AUTH_TOKEN`. Cuando se usa la acción `setup-node` para crear un archivo *.npmrc*, debes establecer la variable de entorno `NPM_AUTH_TOKEN` con el secreto que contiene tu token de autenticación npm.

Antes de instalar dependencias, utiliza la acción `setup-node` para crear el archivo *.npmrc*. La acción tiene dos parámetros de entrada. El parámetro `node-version` establece la versión de Node.js y el parámetro `registry-url` establece el registro predeterminado. Si tu registro de paquetes usa ámbitos, debes usar el parámetro `scope`. Para obtener más información, consulta [`npm-scope`](https://docs.npmjs.com/misc/scope).

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```
{% endraw %}

El ejemplo anterior crea un archivo *.npmrc* con el siguiente contenido:

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

#### Ejemplo de dependencias en caché

Puedes almacenar en caché las dependencias utilizando una clave única y restaurar las dependencias cuando ejecutes flujos de trabajo futuros utilizando la acción `cache`. Para obtener más información, consulta "[Almacenar en caché las dependencias para agilizar los flujos de trabajo](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)" y la acción [`cache`](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Cache Node.js modules
  uses: actions/cache@v2
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm 
    key: ${{ runner.OS }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.OS }}-node-
      ${{ runner.OS }}-
- name: Install dependencies
  run: npm ci
```
{% endraw %}

### Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código. Por ejemplo, si ejecutas `npm run build` para ejecutar pasos de construcción definidos en tu archivo *package.json* y `npm test` para ejecutar tu conjunto de pruebas, añadirías esos comandos en tu archivo de flujo de trabajo.

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

### Empaquetar datos de flujo de trabajo como artefactos

Puedes guardar los artefactos de tus pasos de construcción y prueba para verlos después de que se complete un trabajo. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

### Publicar en registros de paquetes

Puedes configurar tu flujo de trabajo para que publique tu paquete Node.js en un registro de paquete después de que se aprueben tus pruebas de CI. Para obtener más información acerca de la publicación a npm y {% data variables.product.prodname_registry %}, consulta [Publicar paquetes Node.js](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)."
