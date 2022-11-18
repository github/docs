---
title: Génération et test de code PowerShell
intro: Vous pouvez créer un workflow d’intégration continue (CI) pour générer et tester votre projet PowerShell.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146180214'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment utiliser PowerShell pour l’intégration continue. Il explique comment utiliser Pester, installer des dépendances, tester votre module et publier dans PowerShell Gallery.

Les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %} ont un cache d’outils où sont préinstallés des logiciels, notamment PowerShell et Pester. 

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Pour obtenir la liste complète des logiciels à jour et des versions préinstallées de PowerShell et Pester, consultez « [Spécifications pour les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) ».
{% endif %}

## Prérequis

Vous devez être familiarisé avec YAML et la syntaxe {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

Il est recommandé de connaître les bases de PowerShell et de Pester. Pour plus d'informations, consultez les pages suivantes :
- [Prise en main de PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Ajout d’un workflow pour Pester

Pour automatiser vos tests avec PowerShell et Pester, vous pouvez ajouter un workflow qui s’exécute chaque fois qu’une modification est poussée vers votre dépôt. Dans l’exemple suivant, `Test-Path` permet de vérifier la présence d’un fichier nommé `resultsfile.log`.

Cet exemple de fichier de workflow doit être ajouté au répertoire de votre dépôt `.github/workflows/` :

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

* `shell: pwsh` - Configure le travail pour qu’il utilise PowerShell lors de l’exécution des commandes `run`.
* `run: Test-Path resultsfile.log` - Vérifie si un fichier nommé `resultsfile.log` se trouve dans le répertoire racine du dépôt.
* `Should -Be $true` - Utilise Pester pour définir un résultat attendu. Si le résultat est inattendu, {% data variables.product.prodname_actions %} le signale comme un échec de test. Par exemple :

  
  ![Échec du test Pester](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  

* `Invoke-Pester Unit.Tests.ps1 -Passthru` - Utilise Pester pour exécuter des tests définis dans un fichier nommé `Unit.Tests.ps1`. Par exemple, pour effectuer le même test que celui décrit ci-dessus, `Unit.Tests.ps1` contiendra les éléments suivants :
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## Emplacements des modules PowerShell

Le tableau ci-dessous décrit les emplacements des différents modules PowerShell pour chaque exécuteur hébergé dans {% data variables.product.prodname_dotcom %}.

|| Ubuntu | macOS | Windows |
|------|-------|------|----------|
|**Modules système PowerShell** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**Modules complémentaires PowerShell**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**Modules installés par l’utilisateur**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

## Installer les dépendances

PowerShell 7 et Pester sont installés sur les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}. Vous pouvez utiliser `Install-Module` pour installer des dépendances supplémentaires à partir de PowerShell Gallery avant de générer et de tester votre code.

{% note %}

**Remarque :** Les packages préinstallés (tels que Pester) qui sont utilisés par les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %} sont régulièrement mis à jour et peuvent entraîner des modifications importantes. Par conséquent, il est recommandé de toujours spécifier les versions de package nécessaires à l’aide de `Install-Module` avec `-MaximumVersion`.

{% endnote %}

{% ifversion actions-caching %}Vous pouvez également mettre en cache les dépendances pour accélérer votre workflow. Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».{% endif %}

Par exemple, le travail suivant installe les modules `SqlServer` et `PSScriptAnalyzer` :

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

**Remarque :** Par défaut, aucun dépôt n’est approuvé par PowerShell. Lors de l’installation de modules à partir de PowerShell Gallery, vous devez définir explicitement la stratégie d’installation de `PSGallery` sur `Trusted`.

{% endnote %}

{% ifversion actions-caching %}

### Mise en cache des dépendances

Vous pouvez mettre en cache les dépendances PowerShell à l’aide d’une clé unique, ce qui vous permet de restaurer les dépendances pour les prochains workflows avec l’action [`cache`](https://github.com/marketplace/actions/cache). Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».

PowerShell met en cache ses dépendances à différents emplacements, selon le système d’exploitation de l’exécuteur. Par exemple, l’emplacement `path` utilisé dans l’exemple Ubuntu suivant sera différent pour un système d’exploitation Windows.

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

## Test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code.

### Utilisation de PSScriptAnalyzer pour linter du code

L’exemple suivant installe `PSScriptAnalyzer`, et l’utilise pour effectuer le linting de tous les fichiers `ps1` du dépôt. Pour plus d’informations, consultez [PSScriptAnalyzer sur GitHub](https://github.com/PowerShell/PSScriptAnalyzer).

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

## Empaquetage des données de workflow en tant qu’artefacts

Vous pouvez charger des artefacts à afficher une fois un workflow terminé. Par exemple, vous devrez peut-être enregistrer des fichiers journaux, des vidages principaux, des résultats de test ou des captures d’écran. Pour plus d’informations, consultez « [Rendre persistantes des données de workflow à l’aide d’artefacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ».

L’exemple suivant montre comment utiliser l’action `upload-artifact` pour archiver les résultats des tests reçus de `Invoke-Pester`. Pour plus d’informations, consultez l’[action `upload-artifact`](https://github.com/actions/upload-artifact).

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

La fonction `always()` configure le travail de manière à poursuivre le traitement, même en cas d’échec du test. Pour plus d’informations, consultez « [always](/actions/reference/context-and-expression-syntax-for-github-actions#always) ».

## Publication dans PowerShell Gallery

Vous pouvez configurer votre workflow de manière à publier votre module PowerShell dans PowerShell Gallery lorsque vos tests d’intégration continue réussissent. Vous pouvez utiliser des secrets pour stocker n’importe quels jetons ou informations d’identification nécessaires à la publication de votre package. Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

L’exemple suivant crée un package et utilise `Publish-Module` pour le publier dans PowerShell Gallery :

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
