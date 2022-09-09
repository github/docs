---
title: Compilar y probar desarrollos en .NET
intro: Puedes crear un flujo de trabajo de integración continua (IC) para compilar y probar tu proyecto de .NET.
redirect_from:
  - /actions/guides/building-and-testing-net
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Build & test .NET
ms.openlocfilehash: eadb00516976159f2efffcaa04cb4b46471c527f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063622'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo construir, probar y publicar un paquete de .NET.

{% ifversion ghae %} Para compilar y probar tu proyecto de .NET en {% data variables.product.prodname_ghe_managed %}, se requiere el SDK de .NET Core. Los ejecutores hospedados en {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} tienen una caché de herramientas con software preinstalado, que incluye el SDK de .NET Core. Para obtener una lista completa del software actualizado y las versiones preinstaladas del SDK de .NET Core, vea [Software instalado en ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners).
{% endif %}

## Prerrequisitos

Ya debes estar familiarizado con la sintaxis de YAML y con cómo se utiliza con {% data variables.product.prodname_actions %}. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

Te recomendamos que tengas un entendimiento básico de .NET Core SDK. Para más información, vea [Introducción a .NET](https://dotnet.microsoft.com/learn).

## Utilizar el flujo de trabajo inicial de .NET

{% data variables.product.prodname_dotcom %} proporciona un flujo de trabajo inicial de .NET que debería funcionar para la mayoría de los proyectos de .NET y esta guía incluye ejemplos que te muestran cómo personalizarlo. Para más información, vea el [flujo de trabajo de inicio de .NET](https://github.com/actions/setup-dotnet).

Para comenzar rápidamente, agregue el flujo de trabajo de inicio al directorio `.github/workflows` del repositorio.

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: ['3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup .NET Core SDK {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      - name: Install dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --configuration Release --no-restore
      - name: Test
        run: dotnet test --no-restore --verbosity normal
```

## Especificar una versión de .NET

Para usar una versión preinstalada del SDK de .NET Core en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, use la acción `setup-dotnet`. Esta acción busca una versión específica de .NET en la caché de herramientas en cada ejecutor y agrega los binarios necesarios a `PATH`. Estos cambios persistirán para el recordatorio del job.

La acción `setup-dotnet` es la forma recomendada de usar .NET con {% data variables.product.prodname_actions %}, ya que garantiza el comportamiento coherente entre los distintos ejecutores y versiones de .NET. Si va a usar un ejecutor autohospedado, debe instalar .NET y agregarlo a `PATH`. Para más información, vea la acción [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).

### Utilizar versiones múltiples de .NET

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup dotnet {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      # You can test your matrix by printing the current dotnet version
      - name: Display dotnet version
        run: dotnet --version
```

### Utilizar una versión específica de .NET

Puede configurar el trabajo para que utilice una versión específica de .NET, como `3.1.3`. Como alternativa, puedes utilizar una sintaxis de versión semántica para obtener el último lanzamiento menor. Este ejemplo utiliza el lanzamiento menor más reciente de .NET 3.

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## Instalación de dependencias

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} cuentan con el administrador de paquetes NuGet ya instalado. Puedes utilizar el CLI de dotnet para instalar dependencias desde el registro de paquetes de NuGet antes de compilar y probar tu código. Por ejemplo, el código YAML siguiente instala el paquete `Newtonsoft`.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% ifversion actions-caching %}

### Almacenar dependencias en caché

Puede almacenar dependencias de NuGet en caché mediante una clave única, lo que le permite restaurar las dependencias para flujos de trabajo futuros con la acción [`cache`](https://github.com/marketplace/actions/cache). Por ejemplo, el código YAML siguiente instala el paquete `Newtonsoft`.

Para más información, vea "[Almacenamiento en caché de dependencias para acelerar los flujos de trabajo](/actions/guides/caching-dependencies-to-speed-up-workflows)".

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget{% endraw %}
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% note %}

**Nota:** Según el número de dependencias, puede ser más rápido usar la caché de dependencias. Los proyectos con muchas dependencias de gran tamaño deberían ver un aumento del rendimiento, ya que reduce el tiempo necesario para la descarga. Los proyectos con menos dependencias podrían no ver un incremento significativo del rendimiento e incluso podrían ver un ligero decremento, debido a cómo NuGet instala las dependencias almacenadas en el caché. El rendimiento varía de un proyecto a otro.

{% endnote %}

{% endif %}

## Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código. En este ejemplo se muestra cómo usar `dotnet build` y `dotnet test` en un trabajo:

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```

## Empaquetar datos de flujo de trabajo como artefactos

Después de que se completa un flujo de trabajo, puedes cargar los artefactos que se den como resultado para su análisis. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. En el ejemplo siguiente se muestra cómo puede usar la acción `upload-artifact` para cargar los resultados de la prueba.

Para más información, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

      steps:
        - uses: {% data reusables.actions.action-checkout %}
        - name: Setup dotnet
          uses: {% data reusables.actions.action-setup-dotnet %}
          with:
            dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        - name: Install dependencies
          run: dotnet restore
        - name: Test with dotnet
          run: dotnet test --logger trx --results-directory {% raw %}"TestResults-${{ matrix.dotnet-version }}"{% endraw %}
        - name: Upload dotnet test results
          uses: {% data reusables.actions.action-upload-artifact %}
          with:
            name: {% raw %}dotnet-results-${{ matrix.dotnet-version }}{% endraw %}
            path: {% raw %}TestResults-${{ matrix.dotnet-version }}{% endraw %}
          # Use always() to always run this step to publish test results when there are test failures
          if: {% raw %}${{ always() }}{% endraw %}
```

## Publicar en registros de paquetes

Puedes configurar tu flujo de trabajo para publicar tu paquete de .NET a un registro de paquetes cuando pasen tus pruebas de IC. Puedes utilizar secretos de los repositorios para almacenar cualquier token o credenciales que se necesiten para publicar tu binario. En el ejemplo siguiente se crea y publica un paquete en {% data variables.product.prodname_registry %} mediante `dotnet core cli`.

```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: '3.1.x' # SDK Version to use.
          source-url: https://nuget.pkg.github.com/<owner>/index.json
        env:
          NUGET_AUTH_TOKEN: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
      - run: dotnet build --configuration Release <my project>
      - name: Create the package
        run: dotnet pack --configuration Release <my project>
      - name: Publish the package to GPR
        run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
