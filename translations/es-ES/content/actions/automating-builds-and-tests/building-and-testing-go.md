---
title: Compilación y prueba de Go
intro: Puedes crear un flujo de trabajo de integración continua (CI) para compilar y probar tu proyecto.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
ms.openlocfilehash: 590edc2af0b7f370e52b449f320bdc2a758450bc
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160859'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo compilar, probar y publicar un paquete de Go.

Los ejecutores alojados en {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} tienen una memoria caché de herramientas con software preinstalado, que incluye las dependencias para Go. Para obtener una lista completa del software actualizado y las versiones preinstaladas de Go, ve [Sobre los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software).
{% endif %}

## Prerrequisitos

Ya debes estar familiarizado con la sintaxis de YAML y con cómo se utiliza con {% data variables.product.prodname_actions %}. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions)".

Te recomendamos que tengas un entendimiento básico del lenguaje Go. Para más información, ve [Introducción a Go](https://golang.org/doc/tutorial/getting-started).

## Uso del flujo de trabajo inicial de Go

{% data variables.product.prodname_dotcom %} proporciona un flujo de trabajo inicial de Go que debería funcionar para la mayoría de los proyectos de Go. Esta guía incluye ejemplos que puedes utilizar para personalizar los flujos de trabajo iniciales. Para más información, vea el [flujo de trabajo de inicio de Go](https://github.com/actions/starter-workflows/blob/main/ci/go.yml).

Para comenzar rápidamente, agregue el flujo de trabajo de inicio al directorio `.github/workflows` del repositorio.

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

## Especificación de una versión de Go

La forma más fácil de especificar una versión de Go consiste en usar la acción `setup-go` proporcionada por {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la [acción`setup-go`](https://github.com/actions/setup-go/).

Para usar una versión preinstalada de Go en un ejecutor hospedado por {% data variables.product.prodname_dotcom %}, pasa la versión pertinente a la propiedad `go-version` de la acción `setup-go`. Esta acción busca una versión específica de Go en la caché de herramientas en cada ejecutor y agrega los binarios necesarios a `PATH`. Estos cambios persistirán para el recordatorio del job.

La acción `setup-go` es la forma recomendada de usar Go con {% data variables.product.prodname_actions %}, ya que ayuda a garantizar el comportamiento coherente entre los distintos ejecutores y versiones de Go. Si vas a usar un ejecutor auto hospedado, tienes que instalar Go y agregarlo a `PATH`.

### Uso de varias versiones de Go

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

### Uso de una versión específica de Go

Puedes configurar el trabajo para que use una versión específica de Go, como `1.16.2`. Como alternativa, puedes utilizar una sintaxis de versión semántica para obtener el último lanzamiento menor. En este ejemplo se usa la versión de revisión más reciente de Go 1.16:

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## Instalación de dependencias

Puedes usar `go get` para instalar dependencias:

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
          go get example.com/octo-examplemodule
          go get example.com/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### Almacenar dependencias en caché

Puedes almacenar en caché y restaurar las dependencias mediante la [acción `setup-go`](https://github.com/actions/setup-go). De forma predeterminada, el almacenamiento en caché está deshabilitado, pero se puede establecer el parámetro `cache` en `true` para habilitarlo.

Cuando se habilita el almacenamiento en caché, la acción `setup-go` busca el archivo de dependencia, `go.sum`, en la raíz del repositorio y usa el hash del archivo de dependencia como parte de la clave de caché.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

Como alternativa, puede usar el parámetro `cache-dependency-path` para los casos en los que se usan varios archivos de dependencia o cuando se encuentran en distintos subdirectorios.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

Si tiene una necesidad específica o necesita controles más precisos para el almacenamiento en caché, puede usar la [acción `cache`](https://github.com/marketplace/actions/cache). Para más información, vea "[Almacenamiento en caché de dependencias para acelerar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

{% endif %}

## Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código. En este flujo de trabajo de ejemplo se muestra cómo usar `go build` y `go test` en un trabajo:

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

Después de que se completa un flujo de trabajo, puedes cargar los artefactos que se den como resultado para su análisis. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. En el ejemplo siguiente se muestra cómo puede usar la acción `upload-artifact` para cargar los resultados de la prueba.

Para obtener más información, consulta "[Almacenamiento de datos de flujo de trabajo como artefactos](/actions/using-workflows/storing-workflow-data-as-artifacts)".

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
