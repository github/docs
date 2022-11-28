---
title: Erstellen und Testen eines PowerShell-Projekts
intro: 'Du kannst einen Workflow für Continuous Integration (CI) erstellen, um dein PowerShell-Projekt zu erstellen und zu testen.'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146180215'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Leitfaden wird gezeigt, wie du PowerShell für CI verwendest. Es wird beschrieben, wie du Pester verwendest und Abhängigkeiten installierst und wie du dein Modul testest und im PowerShell-Katalog veröffentlichst.

{% data variables.product.prodname_dotcom %}-gehostete Runner haben einen Toolcache mit vorinstallierter Software, die PowerShell und Pester einschließt. 

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %}Eine vollständige Liste der aktuellen Software und der vorinstallierten Versionen von PowerShell und Pester findest du in den [Spezifikationen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Voraussetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Du solltest ein grundlegendes Verständnis von PowerShell und Pester haben. Weitere Informationen finden Sie unter
- [Getting started with PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started) (Erste Schritte mit PowerShell)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Hinzufügen eines Workflows für Pester

Um deine Tests mit PowerShell und Pester zu automatisieren, kannst du einen Workflow hinzufügen, der jedes Mal ausgeführt wird, wenn eine Änderung an dein Repository gepusht wird. Im folgenden Beispiel wird `Test-Path` verwendet, um zu überprüfen, ob eine Datei namens `resultsfile.log` vorhanden ist.

Diese Datei mit dem Beispielworkflow muss im Verzeichnis `.github/workflows/` deines Repositorys hinzugefügt werden:

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

* `shell: pwsh` konfiguriert den Auftrag für die Verwendung von PowerShell beim Ausführen der `run`-Befehle.
* `run: Test-Path resultsfile.log` überprüft, ob eine Datei namens `resultsfile.log` im Stammverzeichnis des Repositorys vorhanden ist.
* `Should -Be $true` verwendet Pester, um ein erwartetes Ergebnis zu definieren. Wenn das Ergebnis unerwartet ist, markiert {% data variables.product.prodname_actions %} dies als fehlerhaften Test. Beispiel:

  
  ![Fehlerhafter Pester-Test](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  

* `Invoke-Pester Unit.Tests.ps1 -Passthru` verwendet Pester zum Ausführen von Tests, die in einer Datei mit dem Namen `Unit.Tests.ps1` definiert sind. Wenn du beispielsweise den oben beschriebenen Test ausführen möchtest, enthält `Unit.Tests.ps1` Folgendes:
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## Speicherorte der PowerShell-Module

Die folgende Tabelle zeigt für jeden {% data variables.product.prodname_dotcom %}-gehosteten Runner den Speicherort der einzelnen PowerShell-Module.

|| Ubuntu | macOS | Windows |
|------|-------|------|----------|
|**PowerShell-Systemmodule** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**PowerShell-Add-On-Module**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**Von Benutzer*innen installierte Module**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

## Installieren von Abhängigkeiten

Auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern sind PowerShell 7 und Pester installiert. Du kannst mit `Install-Module` zusätzliche Abhängigkeiten aus dem PowerShell-Katalog installieren, bevor du deinen Code erstellst und testest.

{% note %}

**Hinweis:** Die vorinstallierten Pakete (z. B. Pester), die von {% data variables.product.prodname_dotcom %}-gehosteten Runnern verwendet werden, werden regelmäßig aktualisiert und können Breaking Changes einführen. Daher wird empfohlen, bei Verwendung von `Install-Module` immer die erforderlichen Paketversionen mit `-MaximumVersion` anzugeben.

{% endnote %}

{% ifversion actions-caching %}Du kannst Abhängigkeiten auch im Cache zwischenspeichern, um deinen Workflow zu beschleunigen. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).{% endif %}

Der folgende Auftrag installiert z. B. die Module `SqlServer` und `PSScriptAnalyzer`:

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

**Hinweis:** Standardmäßig sind keine Repositorys für PowerShell vertrauenswürdig. Beim Installieren von Modulen aus dem PowerShell-Katalog musst du die Installationsrichtlinie für `PSGallery` explizit auf `Trusted` festlegen.

{% endnote %}

{% ifversion actions-caching %}

### Abhängigkeiten „cachen“ (zwischenspeichern)

Du kannst PowerShell-Abhängigkeiten mithilfe eines eindeutigen Schlüssels zwischenspeichern, mit dem du die Abhängigkeiten für zukünftige Workflows mit der [`cache`](https://github.com/marketplace/actions/cache)-Aktion wiederherstellen kannst. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

PowerShell speichert Abhängigkeiten je nach dem Betriebssystem des Runners an anderen Speicherorten zwischen. Beispielsweise weicht der Speicherort (`path`) im folgenden Ubuntu-Beispiel bei einem Windows Betriebssystem ab.

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

## Testen von Code

Du kannst die gleichen Befehle verwenden, die du auch lokal verwendest, um deinen Code zu bauen und zu testen.

### Linten von Code mit PSScriptAnalyzer

Im folgenden Beispiel wird `PSScriptAnalyzer` installiert und zum Linten aller `ps1`-Dateien im Repository verwendet. Weitere Informationen findest du unter [PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer) auf GitHub.

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

## Workflow-Daten als Artefakte paketieren

Du kannst Artefakte hochladen, um sie nach Abschluss eines Workflows anzuzeigen. Zum Beispiel kann es notwendig sein, Logdateien, Core Dumps, Testergebnisse oder Screenshots zu speichern. Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

Im folgenden Beispiel wird gezeigt, wie die Aktion `upload-artifact` zum Archivieren von Testergebnissen von `Invoke-Pester` verwendet werden kann. Weitere Informationen findest du im Artikel über die [Aktion `upload-artifact`](https://github.com/actions/upload-artifact).

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

Die `always()`-Funktion konfiguriert den Auftrag, um die Verarbeitung auch dann fortzusetzen, wenn Testfehler auftreten. Weitere Informationen findest du unter [always](/actions/reference/context-and-expression-syntax-for-github-actions#always).

## Veröffentlichen im PowerShell-Katalog

Du kannst deinen Workflow so konfigurieren, dass dein PowerShell-Modul bei Bestehen deiner CI-Tests im PowerShell-Katalog veröffentlicht wird. Du kannst Geheimnisse verwenden, um Token oder Anmeldeinformationen zu speichern, die zum Veröffentlichen deines Pakets erforderlich sind. Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

Im folgenden Beispiel wird ein Paket erstellt und mit `Publish-Module` im PowerShell-Katalog veröffentlicht:

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
