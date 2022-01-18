
Use `jobs.<job_id>.strategy.matrix` to define a matrix of different job configurations. Una matriz te permite crear múltiples trabajos realizando la sustitución de variables en una definición de trabajo único. Por ejemplo, puedes usar una matriz para crear trabajos para más de una versión compatible de un lenguaje de programación, sistema operativo o herramienta. Una matriz reutiliza la configuración del trabajo y crea un trabajo para cada matriz que configuras.

{% data reusables.github-actions.usage-matrix-limits %}

Cada opción que definas en la `matriz` tiene una clave y un valor. Las claves que defines se convierten en propiedades en el contexto `matriz` y puedes hacer referencia a la propiedad en otras áreas de tu archivo de flujo de trabajo. Por ejemplo, si defines la clave `os` que contiene una matriz de sistemas operativos, puedes usar la propiedad `matrix.os` como el valor de la palabra clave `runs-on` para crear un trabajo para cada sistema operativo. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts)".

El orden en que defines una `matriz` importa. La primera opción que definas será el primer trabajo que se ejecuta en tu flujo de trabajo.

#### Ejemplo: Ejecutando versiones múltiples de Node.js

Puedes especificar una matriz proporcionando una variedad de opciones de configuración. Por ejemplo, si el ejecutor admite las versiones 10, 12 y 14 de Node.js, puedes especificar una matriz de esas versiones en la `matriz`.

Este ejemplo crea una matriz de tres trabajos estableciendo la clave `node` para una matriz de tres versiones de Node.js. Para usar la matriz, el ejemplo establece la propiedad de contexto `matrix.node` como el valor del parámetro `node-version` de la entrada de la acción `setup-node`. Como resultado, se ejecutarán tres trabajos, cada uno usando una versión diferente de Node.js.

{% raw %}
```yaml
strategy:
  matrix:
    node: [10, 12, 14]
steps:
  # Configures the node version used on GitHub-hosted runners
  - uses: actions/setup-node@v2
    with:
      # The Node.js version to configure
      node-version: ${{ matrix.node }}
```
{% endraw %}

La acción `setup-node` es la forma recomendada de configurar una versión de Node.js cuando se usan ejecutores alojados {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la acción [`setup-node`](https://github.com/actions/setup-node).

#### Ejemplo: Ejecutando sistemas operativos múltiples

Puedes crear una matriz para ejecutar flujos de trabajo en más de un sistema operativo del ejecutor. También puedes especificar más de una configuración de matriz. Este ejemplo crea una matriz de 6 trabajos:

- 2 sistemas operativos especificados en la matriz `os`
- 3 versiones de Node.js especificadas en la matriz `node`

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-18.04, ubuntu-20.04]
    node: [10, 12, 14]
steps:
  - uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% ifversion ghae %}
Para obtener más información acerca de la configuración de los ejecutores auto-hospedados, consulta la sección "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".
{% else %}Para encontrar las opciones de la configuración compatible para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, consulta la sección "[Ambientes virtuales para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".
{% endif %}

#### Example: Including additional values in combinations

Puedes agregar más opciones de configuración a un trabajo de una matriz de construcción ya existente. Por ejemplo, si quieres usar una versión específica de `npm` cuando se ejecuta el trabajo que usa `windows-latest` y la versión 8 de `node`, puedes usar `incluir` para especificar esa opción adicional.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    include:
      # includes a new variable of npm with a value of 6
      # for the matrix leg matching the os and version
      - os: windows-latest
        node: 8
        npm: 6
```
{% endraw %}

#### Ejemplo: Incluyendo combinaciones nuevas

Puedes utilizar `include` para agregar jobs nuevos a una matriz de compilaciones. Cualquier configuración de "include" sin coincidencia exacta e agregará a la matriz. Por ejemplo, si quieres utilizar `node` versión 14 para compilar en varios sistemas operativos, pero quieres un job experimental extra que utilice node versión 15 en Ubintu, puedes utilizar `include` para especificar este job adicional.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [14]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

#### Ejemplo: Excluyendo las configuraciones de una matriz

Puedes eliminar una configuración específica definida en la matriz de construcción mediante la opción `exclude`. Si usas `exclude`, se elimina un puesto definido por la matriz de construcción. El número de puestos es el producto cruzado de la cantidad de sistemas operativos (`os`) incluidos en las matrices que brindas, menos todas las sustracciones (`exclude`).

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    exclude:
      # excludes node 8 on macOS
      - os: macos-latest
        node: 8
```
{% endraw %}

{% note %}

**Nota:** Todas las combinaciones de `include` se procesan después de `exclude`. Esto te permite utilizar `include` para volver a agregar combinaciones que se excluyeron previamente.

{% endnote %}

### Utilizar variables de ambiente en una matriz

Puedes agregar variables de ambiente personalizadas para cada combinación de prueba si utilizas la clave `include`. Posteriormente, puedes referirte a las variables de ambiente personalizadas en un paso subsecuente.

{% data reusables.github-actions.matrix-variable-example %}
