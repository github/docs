---
title: Compilar y probar PowerShell
intro: Puedes crear un flujo de trabajo de integración continua (IC) para compilar y probar tu proyecto de PowerShell.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
authors:
  - potatoqualitee
type: tutorial
topics:
  - CI
  - Powershell
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

Esta guía te muestra cómo utilizar PowerShell para la IC. Describimos cómo utilizar Pester, instalar dependencias, probar tu módulo y publicarlo en la galería de PowerShell.

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen un caché de herramientas con software pre-instalado, lo cual incluye a PowerShell y a Pester.

{% if currentVersion == "github-ae@latest" %}Para obtener instrucciones de cómo asegurarte de que tu {% data variables.actions.hosted_runner %} tiene instalado el software necesario, consulta la sección "[Crear imágenes personalizadas](/actions/using-github-hosted-runners/creating-custom-images)".
{% else %}Para encontrar una lista completa de software actualizado y de las versiones preinstaladas de PowerShell y Pester, consulta la sección "[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

### Prerrequisitos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Te recomendamos tener un entendimiento básico de PowerShell y de Pester. Para obtener más información, consulta:
- [Iniciar con PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

### Agregar un flujo de trabajo para Pester

Para automatizar tus pruebas con PowerShell y con Pester, puedes agregar un flujo de trabajo que se ejecute cada que se sube un cambio en tu repositorio. En el siguiente ejemplo, se utiliza `Test-Path` para verificar la presencia de un archivo que se llama `resultsfile.log`.

Este ejemplo de archivo de flujo de trabajo debe agregarse al directorio `.github/workflows/` de tu repositorio:

{% raw %}
```yaml
name: Test PowerShell on Ubuntu
on: push

jobs:
  pester-test:
    name: Pester test
    runs-on: ubuntu-latest
    steps:
    - name: Check out repository code
      uses: actions/checkout@v2
    - name: Perform a Pester test from the command-line
      shell: pwsh
      run: Test-Path resultsfile.log | Should -Be $true
    - name: Perform a Pester test from the Tests.ps1 file
      shell: pwsh
      run: |
        Invoke-Pester Unit.Tests.ps1 -Passthru
```
{% endraw %}

* `shell: pwsh` - Configura el job para que utilice PowerShell cuando ejecutas los comandos de `run`.
* `run: Test-Path resultsfile.log` - Revisa si un archivo que se llama `resultsfile.log` está presente en el directorio raíz del repositorio.
* `Should -Be $true` - Utiliza Pester para definir un resultado esperado. Si el resultado es inesperado, entonces {% data variables.product.prodname_actions %} lo marca como una prueba fallida. Por ejemplo:

  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
  ![Prueba fallida de Pester](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  {% else %}
  ![Prueba fallida de Pester](/assets/images/help/repository/actions-failed-pester-test.png)
  {% endif %}

* `Invoke-Pester Unit.Tests.ps1 -Passthru` - Utiliza Pester para ejecutar las pruebas que se definen en un archivo que se llama `Unit.Tests.ps1`. Por ejempo, para realizar la misma prueba que se describe anteriormente, el `Unit.Tests.ps1` contendrá lo siguiente:
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

### Ubicaciones de los módulos de PowerShell

En la siguiente tabla se describen las ubicaciones para varios módulos de PowerShell en cada ejecutor hospedado en {% data variables.product.prodname_dotcom %}.

|                                           | Ubuntu                                           | macOS                                             | Windows                                                      |
| ----------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| **Módulos de sistema de PowerShell**      | `/opt/microsoft/powershell/7/Modules/*`          | `/usr/local/microsoft/powershell/7/Modules/*`     | `C:\program files\powershell\7\Modules\*`              |
| **Módulos complementarios de PowerShell** | `/usr/local/share/powershell/Modules/*`          | `/usr/local/share/powershell/Modules/*`           | `C:\Modules\*`                                            |
| **Módulos instalados por el usuario**     | `/home/runner/.local/share/powershell/Modules/*` | `/Users/runner/.local/share/powershell/Modules/*` | `C:\Users\runneradmin\Documents\PowerShell\Modules\*` |

### Instalar dependencias

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen PowerShell 7 y Pester instalados. Puedes utilizar `Install-Module` para instalar dependencias adicionales de la galería de PowerShell antes de compilar y probar tu código.

{% note %}

**Note:** Los paquetes pre-instalados (tales como Pester) que utilizan los ejecutores hospedados en {% data variables.product.prodname_dotcom %} se actualizan frecuentemente y pueden introducir cambios significativos. Como resultado, se recomienda que siempre especifiques las versiones de los paquetes requeridos utilizando `Install-Module` con `-MaximumVersion`.

{% endnote %}

Cuando utilizas ejecutores hospedados en {% data variables.product.prodname_dotcom %}, también puedes guardar las dependencias en el caché para acelerar tu flujo de trabajo. Para obtener más información, consulta la sección "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Almacenar las dependencias en caché para agilizar los flujos de trabajo</a>".

Por ejemplo, el siguiente job instala los módulos de `SqlServer` y `PSScriptAnalyzer`:

{% raw %}
```yaml
jobs:
  install-dependencies:
    name: Install dependencies
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install from PSGallery
      shell: pwsh
      run: |
        Set-PSRepository PSGallery -InstallationPolicy Trusted
        Install-Module SqlServer, PSScriptAnalyzer
```
{% endraw %}

{% note %}

**Note:** Predeterminadamente, PowerShell no confía en ningún repositorio. Cuando instales módulos desde la galería de PowerShell, debes configurar explícitamente la política de instalación de `PSGallery` en `Trusted`.

{% endnote %}

#### Almacenar dependencias en caché

Cuando utilizas ejecutores hospedados en {% data variables.product.prodname_dotcom %}, puedes guardar dependencias de PowerShell en el caché utilizando una clave única, lo cual te permite restaurar las dependencias para flujos de trabajo futuros con la acción [`cache`](https://github.com/marketplace/actions/cache). Para obtener más información, consulta la sección "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Almacenar las dependencias en caché para agilizar los flujos de trabajo</a>".

PowerShell guarda sus dependencias en caché en ubicaciones diferentes, dependiendo del sistema operativo del ejecutor. Por ejemplo, el `path` de la ubicación que se utiliza en el siguiente ejemplo de Ubuntu será diferente a aquél de un sistema operativo Windows.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - name: Setup PowerShell module cache
    id: cacher
    uses: actions/cache@v2
    with:
      path: "~/.local/share/powershell/Modules"
      key: ${{ runner.os }}-SqlServer-PSScriptAnalyzer
  - name: Install required PowerShell modules
    if: steps.cacher.outputs.cache-hit != 'true'
    shell: pwsh
    run: |
      Set-PSRepository PSGallery -InstallationPolicy Trusted
      Install-Module SqlServer, PSScriptAnalyzer -ErrorAction Stop
```
{% endraw %}

### Probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

#### Utilizar PSScriptAnalyzer para limpiar el código

El siguiente ejemplo instala `PSScriptAnalyzer` y lo utiliza para limpiar todos los archivos `ps1` en el repositorio. Para obtener más información, consulta [PSScriptAnalyzer en GitHub](https://github.com/PowerShell/PSScriptAnalyzer).

{% raw %}
```yaml
  lint-with-PSScriptAnalyzer:
    name: Install and run PSScriptAnalyzer
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install PSScriptAnalyzer module
      shell: pwsh
      run: |
            Set-PSRepository PSGallery -InstallationPolicy Trusted
            Install-Module PSScriptAnalyzer -ErrorAction Stop
    - name: Lint with PSScriptAnalyzer
      shell: pwsh
      run: |
            Invoke-ScriptAnalyzer -Path *.ps1 -Recurse -Outvariable issues
            $errors   = $issues.Where({$_.Severity -eq 'Error'})
            $warnings = $issues.Where({$_.Severity -eq 'Warning'})
            if ($errors) {
                Write-Error "There were $($errors.Count) errors and $($warnings.Count) warnings total." -ErrorAction Stop
            } else {
                Write-Output "There were $($errors.Count) errors and $($warnings.Count) warnings total."
            }
```
{% endraw %}

### Empaquetar datos de flujo de trabajo como artefactos

Puedes cargar artefactos para ver después de que se complete un flujo de trabajo. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

El siguiente ejemplo ilustra cómo puedes utilizar la acción `upload-artifact` para archivar los resultados de las pruebas que se recibieron de `Invoke-Pester`. Para obtener más información, consulta la acción [`upload-artifact`](https://github.com/actions/upload-artifact).

{% raw %}
```yaml
name: Upload artifact from Ubuntu

on: [push]

jobs:
  upload-pester-results:
    name: Run Pester and upload results
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Test with Pester
      shell: pwsh
      run: Invoke-Pester Unit.Tests.ps1 -Passthru | Export-CliXml -Path Unit.Tests.xml
    - name: Upload test results
      uses: actions/upload-artifact@v2
      with:
        name: ubuntu-Unit-Tests
        path: Unit.Tests.xml
    if: ${{ always() }}
```
{% endraw %}

La función `always()` configura el job para seguir el procesamiento aún si existen fallos en las pruebas. Para obtener más información, consulta "[always](/actions/reference/context-and-expression-syntax-for-github-actions#always)".

### Publicar en la galería de PowerShell

Puedes configurar tu flujo de trabajo para que publique tu módulo de PowerShell en la galería de PowerShell cuando pasen tus pruebas de IC. Puedes utilizar los secretos para almacenar cualquier token o credencial que se necesiten para publicar tu paquete. Para obtener más información, consulta "[Crear y usar secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

El siguiente ejemplo crea un paquete y utiliza a `Publish-Module` para publicarlo en la galería de PowerShell:

{% raw %}
```yaml
name: Publish PowerShell Module

on:
  release:
    types: [created]

jobs:
  publish-to-gallery:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build and publish
      env:
        NUGET_KEY: ${{ secrets.NUGET_KEY }}
      shell: pwsh
      run: |
        ./build.ps1 -Path /tmp/samplemodule
        Publish-Module -Path /tmp/samplemodule -NuGetApiKey $env:NUGET_KEY -Verbose
```
{% endraw %}
