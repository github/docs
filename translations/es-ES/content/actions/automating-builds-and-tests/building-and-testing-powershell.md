---
title: Building and testing PowerShell
intro: You can create a continuous integration (CI) workflow to build and test your PowerShell project.
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to use PowerShell for CI. It describes how to use Pester, install dependencies, test your module, and publish to the PowerShell Gallery.

{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes PowerShell and Pester. 

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}For a full list of up-to-date software and the pre-installed versions of PowerShell and Pester, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

We recommend that you have a basic understanding of PowerShell and Pester. For more information, see:
- [Getting started with PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Adding a workflow for Pester

To automate your testing with PowerShell and Pester, you can add a workflow that runs every time a change is pushed to your repository. In the following example, `Test-Path` is used to check that a file called `resultsfile.log` is present.

This example workflow file must be added to your repository's `.github/workflows/` directory:

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

* `shell: pwsh` - Configures the job to use PowerShell when running the `run` commands.
* `run: Test-Path resultsfile.log` - Check whether a file called `resultsfile.log` is present in the repository's root directory.
* `Should -Be $true` - Uses Pester to define an expected result. If the result is unexpected, then {% data variables.product.prodname_actions %} flags this as a failed test. For example:

  
  ![Failed Pester test](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  

* `Invoke-Pester Unit.Tests.ps1 -Passthru` - Uses Pester to execute tests defined in a file called `Unit.Tests.ps1`. For example, to perform the same test described above, the `Unit.Tests.ps1` will contain the following:
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## PowerShell module locations

The table below describes the locations for various PowerShell modules in each {% data variables.product.prodname_dotcom %}-hosted runner.

|| Ubuntu | macOS | Windows |
|------|-------|------|----------|
|**PowerShell system modules** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**PowerShell add-on modules**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**User-installed modules**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

## Installing dependencies

{% data variables.product.prodname_dotcom %}-hosted runners have PowerShell 7 and Pester installed. You can use `Install-Module` to install additional dependencies from the PowerShell Gallery before building and testing your code.

{% note %}

**Note:** The pre-installed packages (such as Pester) used by {% data variables.product.prodname_dotcom %}-hosted runners are regularly updated, and can introduce significant changes. As a result, it is recommended that you always specify the required package versions by using `Install-Module` with `-MaximumVersion`.

{% endnote %}

{% ifversion actions-caching %}You can also cache dependencies to speed up your workflow. For more information, see "[Caching dependencies to speed up workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."{% endif %}

For example, the following job installs the `SqlServer` and `PSScriptAnalyzer` modules:

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

**Note:** By default, no repositories are trusted by PowerShell. When installing modules from the PowerShell Gallery, you must explicitly set the installation policy for `PSGallery` to `Trusted`.

{% endnote %}

{% ifversion actions-caching %}

### Caching dependencies

You can cache PowerShell dependencies using a unique key, which allows you to restore the dependencies for future workflows with the [`cache`](https://github.com/marketplace/actions/cache) action. For more information, see "[Caching dependencies to speed up workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."

PowerShell caches its dependencies in different locations, depending on the runner's operating system. For example, the `path` location used in the following Ubuntu example will be different for a Windows operating system.

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

## Testing your code

You can use the same commands that you use locally to build and test your code.

### Using PSScriptAnalyzer to lint code

The following example installs `PSScriptAnalyzer` and uses it to lint all `ps1` files in the repository. For more information, see [PSScriptAnalyzer on GitHub](https://github.com/PowerShell/PSScriptAnalyzer).

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

## Packaging workflow data as artifacts

You can upload artifacts to view after a workflow completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see "[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

The following example demonstrates how you can use the `upload-artifact` action to archive the test results received from `Invoke-Pester`. For more information, see the [`upload-artifact` action](https://github.com/actions/upload-artifact).

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

The `always()` function configures the job to continue processing even if there are test failures. For more information, see "[always](/actions/reference/context-and-expression-syntax-for-github-actions#always)."

## Publishing to PowerShell Gallery

You can configure your workflow to publish your PowerShell module to the PowerShell Gallery when your CI tests pass. You can use secrets to store any tokens or credentials needed to publish your package. For more information, see "[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

The following example creates a package and uses `Publish-Module` to publish it to the PowerShell Gallery:

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
