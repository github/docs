---
title: Compilar y probar desarrollos en .NET
intro: Puedes crear un flujo de trabajo de integración continua (IC) para compilar y probar tu proyecto de .NET.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

Esta guía te muestra cómo construir, probar y publicar un paquete de .NET.

{% if currentVersion == "github-ae@latest" %} Para crear y probar tu proyecto de .NET en {% data variables.product.prodname_ghe_managed %}, necesitarás crear una imagen de sistema operativo personalizada que incluya .NET Core SDK. Para obtener las instrucciones de cómo asegurarte de que tu {% data variables.actions.hosted_runner %} tenga instalado el software necesario, consulta la sección "[Crear imágenes personalizadas](/actions/using-github-hosted-runners/creating-custom-images)".
{% else %}Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen un caché de herramientas con software preinstalado, el cual incluye a .NET Core SDK. Para encontrar una lista completa de software actualizado y las versiones preinstaladas de .NET Core SDK, consulta la sección de [software instalado en los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners).
{% endif %}

### Prerrequisitos

Ya debes estar familiarizado con la sintaxis de YAML y con cómo se utiliza con {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

Te recomendamos que tengas un entendimiento básico de .NET Core SDK. Para obtener más información, consulta la sección [Iniciar con .NET](https://dotnet.microsoft.com/learn).

### Iniciar con la plantilla de flujo de trabajo de .NET

{% data variables.product.prodname_dotcom %} proporciona una plantilla de flujo de trabajo de .NET que debería funcionar para la mayoría de los proyectos de .NET, y esta guía incluye ejemplos que te muestran cómo personalizar esta plantilla. Para obtener más información, consulta la [plantilla de flujo de trabajo de.NET](https://github.com/actions/setup-dotnet).

Para comenzar rápidamente, agrega la plantilla al directorio `.github/workflows` de tu repositorio.

{% raw %}
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
    - uses: actions/checkout@v2
    - name: Setup .NET Core SDK ${{ matrix.dotnet-version }}
      uses: actions/setup-dotnet@v1.7.2
      with:
        dotnet-version: ${{ matrix.dotnet-version }}
    - name: Install dependencies
      run: dotnet restore
    - name: Build
      run: dotnet build --configuration Release --no-restore
    - name: Test
      run: dotnet test --no-restore --verbosity normal
```
{% endraw %}

### Especificar una versión de .NET

Para utilizar una versión preinstalada de .NET Core SDK en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, utiliza la acción `setup-dotnet`. Esta acción encuentra una versión específica de .NET desde el caché de las herramientas en cada ejecutor y agrega los binarios necesarios a `PATH`. Estos cambios persistirán para el recordatorio del job.

La acción `setup-dotnet` es la forma recomendada de utilizar .NET con las {% data variables.product.prodname_actions %}, porque garantiza el comportamiento consistente a través de diversos ejecutores y diversas versiones de .NET. Si estás utilizando un ejecutor auto-hospedado, debes instalar .NET y agregarlo a `PATH`. Para obtener más información, consulta la acción [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).

#### Utilizar versiones múltiples de .NET

{% raw %}
```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet: [ '3.0', '3.1.x', '5.0.x' ]

    steps:
    - uses: actions/checkout@v2
    - name: Setup dotnet ${{ matrix.dotnet-version }}
      uses: actions/setup-dotnet@v1.7.2
      with:
        dotnet-version: ${{ matrix.dotnet-version }}
    # You can test your matrix by printing the current dotnet version
    - name: Display dotnet version
      run: dotnet --version
```
{% endraw %}

#### Utilizar una versión específica de .NET

Puedes configurar tu job para que utilice una versión específica de .NET, tal como la `3.1.3`. Como alternativa, puedes utilizar una sintaxis de versión semántica para obtener el último lanzamiento menor. Este ejemplo utiliza el lanzamiento menor más reciente de .NET 3.

{% raw %}
```yaml
    - name: Setup .NET 3.x
      uses: actions/setup-dotnet@v2
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x' 
```
{% endraw %}

### Instalar dependencias

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} cuentan con el administrador de paquetes NuGet ya instalado. Puedes utilizar el CLI de dotnet para instalar dependencias desde el registro de paquetes de NuGet antes de compilar y probar tu código. Por ejemplo, el siguiente YAML instala el paquete `Newtonsoft`.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.7.2
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```
{% endraw %}

{% if currentVersion == "free-pro-team@latest" %}

#### Almacenar dependencias en caché

Puedes guardar dependencias de NuGet en el caché utilizando una clave única, lo cual te permite restablecer las dependencias de los flujos de trabajo futures con la acción [`cache`](https://github.com/marketplace/actions/cache). Por ejemplo, el siguiente YAML instala el paquete `Newtonsoft`.

Para obtener más información, consulta la sección "[Almacenar las dependencias en caché para agilizar los flujos de trabajo](/actions/guides/caching-dependencies-to-speed-up-workflows)".

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.7.2
  with:
    dotnet-version: '3.1.x'
- uses: actions/cache@v2
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: ${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```
{% endraw %}

{% note %}

**Nota:** Dependiendo de la cantidad de dependencias, puede ser más rápido usar la caché de dependencias. Los proyectos con muchas dependencias de gran tamaño deberían ver un aumento del rendimiento, ya que reduce el tiempo necesario para la descarga. Los proyectos con menos dependencias podrían no ver un incremento significativo del rendimiento e incluso podrían ver un ligero decremento, debido a cómo NuGet instala las dependencias almacenadas en el caché. El rendimiento varía de un proyecto a otro.

{% endnote %}

{% endif %}

### Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código. Este ejemplo demuestra cómo utilizar `dotnet build` y `dotnet test` en un job:

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.7.2
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```
{% endraw %}

### Empaquetar datos de flujo de trabajo como artefactos

Después de que se completa un flujo de trabajo, puedes cargar los artefactos que se den como resultado para su análisis. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. El siguiente ejemplo demuestra cómo puedes utilizar la acción `upload-artifact` para cargar los resultados de las pruebas.

Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

{% raw %}
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
      - uses: actions/checkout@v2
      - name: Setup dotnet
        uses: actions/setup-dotnet@v1.7.2
        with:
          dotnet-version: ${{ matrix.dotnet-version }}
      - name: Install dependencies
        run: dotnet restore
      - name: Test with dotnet
        run: dotnet test --logger trx --results-directory "TestResults-${{ matrix.dotnet-version }}"
      - name: Upload dotnet test results
        uses: actions/upload-artifact@v2
        with:
          name: dotnet-results-${{ matrix.dotnet-version }}
          path: TestResults-${{ matrix.dotnet-version }}
        # Use always() to always run this step to publish test results when there are test failures
        if: ${{ always() }}
```
{% endraw %}

### Publicar en registros de paquetes

Puedes configurar tu flujo de trabajo para publicar tu paquete de Dotnet a un registro de paquetes cuando pasen tus pruebas de IC. Puedes utilizar secretos de los repositorios para almacenar cualquier token o credenciales que se necesiten para publicar tu binario. El siguiente ejemplo crea y publica un paquete en el {% data variables.product.prodname_registry %} utilizando `dotnet core cli`.

{% raw %}
```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-dotnet@v1
    with:
        dotnet-version: '3.1.x' # SDK Version to use.
        source-url: https://nuget.pkg.github.com/<owner>/index.json
    env:
        NUGET_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    - run: dotnet build --configuration Release <my project>
    - name: Create the package
    run: dotnet pack --configuration Release <my project>
    - name: Publish the package to GPR
    run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
{% endraw %}
