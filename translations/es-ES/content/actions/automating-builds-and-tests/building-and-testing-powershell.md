---
title: Compilar y probar PowerShell
intro: Puedes crear un flujo de trabajo de integración continua (IC) para compilar y probar tu proyecto de PowerShell.
redirect_from:
  - /actions/guides/building-and-testing-powershell
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
authors:
  - potatoqualitee
type: tutorial
topics:
  - CI
  - PowerShell
shortTitle: Build & test PowerShell
ms.openlocfilehash: 572c2ee17c948f44a8f8e4006d3729498269a215
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180219'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo utilizar PowerShell para la IC. Describimos cómo utilizar Pester, instalar dependencias, probar tu módulo y publicarlo en la galería de PowerShell.

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen un caché de herramientas con software pre-instalado, lo cual incluye a PowerShell y a Pester. 

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %}Para obtener una lista completa de software actualizado y las versiones preinstaladas de PowerShell y Pester, vea "[Especificaciones para ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Requisitos previos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para más información, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Te recomendamos tener un entendimiento básico de PowerShell y de Pester. Para más información, consulte:
- [Introducción a PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Agregar un flujo de trabajo para Pester

Para automatizar tus pruebas con PowerShell y con Pester, puedes agregar un flujo de trabajo que se ejecute cada que se sube un cambio en tu repositorio. En el ejemplo siguiente, se usa `Test-Path` para comprobar que existe un archivo con el nombre `resultsfile.log`.

Este archivo de flujo de trabajo de ejemplo se debe agregar al directorio `.github/workflows/` del repositorio:

```yaml
name: Test PowerShell on Ubuntu
on: push

jobs:
  pester-test:
    name: Pester test
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Perform a Pester test from the command-line
        shell: pwsh
        run: Test-Path resultsfile.log | Should -Be $true
      - name: Perform a Pester test from the Tests.ps1 file
        shell: pwsh
        run: |
          Invoke-Pester Unit.Tests.ps1 -Passthru
```

* `shell: pwsh`: configura el trabajo para que use PowerShell al ejecutar los comandos `run`.
* `run: Test-Path resultsfile.log`: comprueba si existe un archivo con el nombre `resultsfile.log` en el directorio raíz del repositorio.
* `Should -Be $true`: usa Pester para definir un resultado esperado. Si el resultado es inesperado, entonces {% data variables.product.prodname_actions %} lo marca como una prueba fallida. Por ejemplo:

  
  ![Prueba fallida de Pester](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  

* `Invoke-Pester Unit.Tests.ps1 -Passthru`: usa Pester para ejecutar pruebas definidas en un archivo denominado `Unit.Tests.ps1`. Por ejemplo, para realizar la misma prueba que se ha descrito antes, `Unit.Tests.ps1` contendrá lo siguiente:
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## Ubicaciones de los módulos de PowerShell

En la siguiente tabla se describen las ubicaciones para varios módulos de PowerShell en cada ejecutor hospedado en {% data variables.product.prodname_dotcom %}.

|| Ubuntu | macOS | Windows |
|------|-------|------|----------|
|**Módulos de sistema de PowerShell** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**Módulos de complementos de PowerShell**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**Módulos instalados por el usuario**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

## Instalación de dependencias

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen PowerShell 7 y Pester instalados. Puede usar `Install-Module` para instalar dependencias adicionales desde la Galería de PowerShell antes de compilar y probar el código.

{% note %}

**Nota:** Los paquetes preinstalados (Pester) que usan los ejecutores hospedados en {% data variables.product.prodname_dotcom %} se actualizan frecuentemente y pueden introducir cambios significativos. Como resultado, se recomienda especificar siempre las versiones de paquete necesarias mediante `Install-Module` con `-MaximumVersion`.

{% endnote %}

{% ifversion actions-caching %}También puedes almacenar en caché las dependencias para acelerar el flujo de trabajo. Para obtener más información, consulta "[Almacenamiento en caché de dependencias para acelerar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".{% endif %}

Por ejemplo, el siguiente trabajo instala los módulos `SqlServer`y `PSScriptAnalyzer`:

```yaml
jobs:
  install-dependencies:
    name: Install dependencies
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install from PSGallery
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module SqlServer, PSScriptAnalyzer
```

{% note %}

**Nota:** De forma predeterminada, PowerShell no confía en ningún repositorio. Al instalar módulos desde la Galería de PowerShell, debe establecer de forma explícita la directiva de instalación de `PSGallery` en `Trusted`.

{% endnote %}

{% ifversion actions-caching %}

### Almacenar dependencias en caché

Puedes almacenar dependencias de PowerShell en caché con una clave única, lo que te permite restaurar las dependencias para flujos de trabajo futuros con la acción [`cache`](https://github.com/marketplace/actions/cache). Para más información, vea "[Almacenamiento en caché de dependencias para acelerar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

PowerShell guarda sus dependencias en caché en ubicaciones diferentes, dependiendo del sistema operativo del ejecutor. Por ejemplo, la ubicación `path` que se usa en el siguiente ejemplo de Ubuntu será diferente a la de un sistema operativo Windows.

```yaml
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Setup PowerShell module cache
    id: cacher
    uses: {% data reusables.actions.action-cache %}
    with:
      path: "~/.local/share/powershell/Modules"
      key: {% raw %}${{ runner.os }}-SqlServer-PSScriptAnalyzer{% endraw %}
  - name: Install required PowerShell modules
    if: steps.cacher.outputs.cache-hit != 'true'
    shell: pwsh
    run: |
      Set-PSRepository PSGallery -InstallationPolicy Trusted
      Install-Module SqlServer, PSScriptAnalyzer -ErrorAction Stop
```

{% endif %}

## Probar el código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

### Utilizar PSScriptAnalyzer para limpiar el código

En el ejemplo siguiente se instala `PSScriptAnalyzer` y se usa para el lint de todos los archivos `ps1` del repositorio. Para más información, vea [PSScriptAnalyzer en GitHub](https://github.com/PowerShell/PSScriptAnalyzer).

```yaml
  lint-with-PSScriptAnalyzer:
    name: Install and run PSScriptAnalyzer
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
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

## Empaquetar datos de flujo de trabajo como artefactos

Puedes cargar artefactos para ver después de que se complete un flujo de trabajo. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. Para más información, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

En el ejemplo siguiente se muestra cómo puede usar la `upload-artifact` acción para archivar los resultados de la prueba recibidos de `Invoke-Pester`. Para más información, vea la [acción `upload-artifact`](https://github.com/actions/upload-artifact).

```yaml
name: Upload artifact from Ubuntu

on: [push]

jobs:
  upload-pester-results:
    name: Run Pester and upload results
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Test with Pester
        shell: pwsh
        run: Invoke-Pester Unit.Tests.ps1 -Passthru | Export-CliXml -Path Unit.Tests.xml
      - name: Upload test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: ubuntu-Unit-Tests
          path: Unit.Tests.xml
    if: {% raw %}${{ always() }}{% endraw %}
```

La función `always()` configura el trabajo para que el procesamiento continúe aunque se produzcan fallos en las pruebas. Para más información, vea "[always](/actions/reference/context-and-expression-syntax-for-github-actions#always)".

## Publicar en la galería de PowerShell

Puedes configurar tu flujo de trabajo para que publique tu módulo de PowerShell en la galería de PowerShell cuando pasen tus pruebas de IC. Puedes utilizar los secretos para almacenar cualquier token o credencial que se necesiten para publicar tu paquete. Para más información, vea ["Creación y uso de secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

En el ejemplo siguiente se crea un paquete y se usa `Publish-Module` para publicarlo en la Galería de PowerShell:

```yaml
name: Publish PowerShell Module

on:
  release:
    types: [created]

jobs:
  publish-to-gallery:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build and publish
        env:
          NUGET_KEY: {% raw %}${{ secrets.NUGET_KEY }}{% endraw %}
        shell: pwsh
        run: |
          ./build.ps1 -Path /tmp/samplemodule
          Publish-Module -Path /tmp/samplemodule -NuGetApiKey $env:NUGET_KEY -Verbose
```
