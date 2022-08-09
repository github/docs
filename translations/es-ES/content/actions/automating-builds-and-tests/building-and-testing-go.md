---
title: Crear y probar Go
intro: Puedes crear un flujo de trabajo de integración continua (IC) para compilar y probar tu proyecto de Go.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Compilar & probar Go
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo compilar, probar y publicar un paquete de Go.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %} Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen un caché de herramientas con software preinstalado, el cual incluye las dependencias para Go. Para encontrar una lista completa de software actualizado y las versiones preinstaladas de Go, consulta la sección "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)".
{% endif %}

## Prerrequisitos

Ya debes estar familiarizado con la sintaxis de YAML y con cómo se utiliza con {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions)".

Te recomendamos que tener un entendimiento básico del lenguaje de Go. Para obtener más información, consulta la sección [Iniciar con Go](https://golang.org/doc/tutorial/getting-started).

## Utilizar el flujo de trabajo inicial de Go

{% data variables.product.prodname_dotcom %} proporciona un flujo de trabajo inicial de Go que debería funcionar con la mayoría de los proyectos de Go. Esta guía incluye ejemplos que puedes utilizar para personalizar los flujos de trabajo iniciales. Para obtener más información, consulta el [flujo de trabajo inicial de Go](https://github.com/actions/starter-workflows/blob/main/ci/go.yml).

Para comenzar rápidamente, agrega el flujo de trabajo inicial al directorio de `.github/workflows` de tu repositorio.

```yaml{:copy}
name: Go package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: 1.15

      - name: Build
        run: go build -v ./...

      - name: Test
        run: go test -v ./...
```

## Especificar una versión de Go

La forma más fácil de especificar una versión de Go es utilizando la acción `setup-go` que proporciona {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la [acción de `setup-go`](https://github.com/actions/setup-go/).

Para utilizar una versión preinstalada de Go en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, pasa la versión relevante a la propiedad `go-version` de la acción `setup-go`. Esta acción encuentra una versión específica de Go desde el caché de herramientas en cada ejecutor y agrega los binarios necesarios a `PATH`. Estos cambios persistirán para el recordatorio del job.

La acción `setup-go` es la forma recomendada de utilizar Go con las {% data variables.product.prodname_actions %}, ya que esta ayuda a garantizar el comportamiento consistente a lo largo de los diferentes ejecutores y versiones de Go. Si estás utilizando un ejecutor auto-hospedado, debes instalar Go y agregarlo a `PATH`.

### Utilizar versiones múltiples de Go

```yaml{:copy}
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go {% raw %}${{ matrix.go-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      # You can test your matrix by printing the current Go version
      - name: Display Go version
        run: go version
```

### Utilizar una versión específica de Go

Puedes configurar tu job para utilizar una versión específica de Go, tal como la `1.16.2`. Como alternativa, puedes utilizar una sintaxis de versión semántica para obtener el último lanzamiento menor. Este ejemplo utiliza el último lanzamiento de parche de Go 1.16:

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## Instalar dependencias

Puedes utilziar `go get` para instalar dependencias:

```yaml{:copy}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: |
          go get .
          go get example.lab/octo-examplemodule
          go get example.lab/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### Almacenar dependencias en caché

Puedes almacenar en caché y restaurar las dependencias utilizando la [acción `setup-go`](https://github.com/actions/setup-go). El almacenamiento en caché se encuentra inhabilitado predeterminadamente, pero puedes configurar el parámetro `cache` en `true` para habilitarlo.

Cuando se habilita el almacenamiento en caché, la acción `setup-go` busca el archivo de dependencia, `go.sum`, en la raíz del repositorio y utiliza el hash del archivo de dependencia como parte de la llave del caché.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

Como alternativa, puedes utilizar el parámetro `cache-dependency-path` para los casos en donde se utilizan archivos de dependencias múltiples o cuando se ubican en subdirectorios diferentes.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

Si tienes un requisito personalizado o necesitas controles más exactos para almacenar en caché, puedes utilizar la [acción `cache`](https://github.com/marketplace/actions/cache). Para obtener más información, consulta la sección "[Almacenar las dependencias en caché para agilizar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

{% endif %}

## Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código. Este flujo de trabajo de ejemplo demuestra cómo utilizar `go build` y `go test` en un job:

```yaml{:copy}
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```

## Empaquetar datos de flujo de trabajo como artefactos

Después de que se completa un flujo de trabajo, puedes cargar los artefactos que se den como resultado para su análisis. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. El siguiente ejemplo demuestra cómo puedes utilizar la acción `upload-artifact` para cargar los resultados de las pruebas.

Para obtener más información, consulta la sección "[Almacenar los datos de los flujos de trabajo como artefactos](/actions/using-workflows/storing-workflow-data-as-artifacts)".

```yaml{:copy}
name: Upload Go test results

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      - name: Install dependencies
        run: go get .
      - name: Test with Go
        run: go test -json > TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
      - name: Upload Go test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Go-results-{% raw %}${{ matrix.go-version }}{% endraw %}
          path: TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
```
