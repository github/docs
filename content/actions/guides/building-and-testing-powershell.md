---
title: Building and testing PowerShell
intro: You can create a continuous integration (CI) workflow to build and test your PowerShell project.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introduction

This guide shows you how to install, test and publish a PowerShell module.

{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes PowerShell and Pester. You don't have to install anything! For a full list of up-to-date software and the pre-installed versions of PowerShell and Pester, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

We recommend that you have a basic understanding of PowerShell and Pester. For more information, see:
- [Getting started with PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

### Starting with the PowerShell workflow template

{% data variables.product.prodname_dotcom %} provides a PowerShell workflow template that should work for most PowerShell projects. This guide includes examples that you can use to customize the template. For more information, see the [PowerShell workflow template](https://github.com/actions/starter-workflows/blob/main/ci/powershell.yml).

To get started quickly, add the template to the `.github/workflows` directory of your repository.

{% raw %}
```yaml
name: Test PowerShell on Ubuntu, macOS and Windows

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

jobs:
  build:
    name: Pester tests work on all platforms
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macOS-latest]

    steps:
    - uses: actions/checkout@v1
    - name: Perform a Pester test from the command-line to ensure expected results
      shell: pwsh
      run: Get-ChildItem | Select-Object -ExpandProperty Name -First 1 | Should -Be 'bin'
    - name: Perform advanced tests
      shell: pwsh
      run: |
        Invoke-Pester Unit.Tests.ps1 -Passthru
        Invoke-Pester Integration.Tests.ps1 -Passthru
```
{% endraw %}

### PowerShell module locations

The table below describes the locations for various PowerShell modules in each {% data variables.product.prodname_dotcom %}-hosted runner.

|| Ubuntu | Mac | Windows |
|------|-------|------|----------|
|**PowerShell system modules** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**PowerShell add-on modules**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**User-installed modules**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

### Installing dependencies

{% data variables.product.prodname_dotcom %}-hosted runners have PowerShell 7 and Pester installed. You can use `Install-Module` to install additional dependencies from the PowerShell Gallery before building and testing your code. For example, the YAML below installs the `SqlServer` and `PSScriptAnalyzer` modules.

You can also cache dependencies to speed up your workflow. For more information, see "[Caching dependencies to speed up your workflow](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)."

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Install dependencies
  run: |
    Set-PSRepository PSGallery -InstallationPolicy Trusted
    Install-Module SqlServer, PSScriptAnalyzer
  shell: pwsh
```
{% endraw %}

{% note %}

**Note:** By default, no repositories are trusted by PowerShell. When installing modules from the PowerShell Gallery, you must explicitly set the installation policy for `PSGallery` to `Trusted`.

{% endnote %}

#### Caching Dependencies

You can cache PowerShell module dependencies using a unique key, and restore the dependencies when you run future workflows using the [`cache`](https://github.com/marketplace/actions/cache) action. For more information, see "[Caching dependencies to speed up workflows](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)."

PowerShell caches dependencies in different locations, depending on the operating system of the runner. The path you'll need to cache may differ from the Ubuntu example below depending on the operating system you use. For more information, see [PowerShell caching examples](https://github.com/actions/cache/blob/main/examples.md#PowerShell).

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

### Testing your code

You can use the same commands that you use locally to build and test your code.

#### Using PSScriptAnalyzer to lint code

The following example installs `PSScriptAnalyzer` and uses it to lint all ps1 files. For more information, see [PSScriptAnalyzer on GitHub](https://github.com/PowerShell/PSScriptAnalyzer).

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Install PSScriptAnalyzer
    Set-PSRepository PSGallery -InstallationPolicy Trusted
    Install-Module PSScriptAnalyzer -ErrorAction Stop
- name: Lint with PSScriptAnalyzer
  run: |
    Invoke-ScriptAnalyzer -Path *.ps1 -Recurse -Outvariable issues
    $errors   = $issues.Where({$_.Severity -eq 'Error'})
    $warnings = $issues.Where({$_.Severity -eq 'Warning'})
    Write-Output "There were $($errors.Count) errors and $($warnings.Count) warnings total."
    }
```
{% endraw %}

### Packaging workflow data as artifacts

You can upload artifacts to view after a workflow completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see "[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

The following example demonstrates how you can use the `upload-artifact` action to archive test results from running `Invoke-Pester`. For more information, see the [`upload-artifact` action](https://github.com/actions/upload-artifact).

{% raw %}
```yaml
name: Test PowerShell on Ubuntu, macOS and Windows

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

jobs:
  build:
    name: Pester tests work on all platforms
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macOS-latest]

    steps:
    - uses: actions/checkout@v1
      - name: Test with Pester
        shell: pwsh
        run: |
          Invoke-Pester All.Tests.ps1 -Passthru | Export-CliXml -Path All.Tests.xml
      - name: Upload Pester test results
        uses: actions/upload-artifact@v2
        with:
          name: All-Tests
          path: All.Tests.xml
        # Use always() to always run this step to publish test results when there are test failures
        if: ${{ always() }}
```
{% endraw %}

### Publishing to package registries

You can configure your workflow to publish your PowerShell package to any package registry you'd like when your CI tests pass.

You can store any access tokens or credentials needed to publish your module using repository secrets. The following example creates and publishes a module to the PowerShell Gallery using `Publish-Module`. For more information, see "[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

{% raw %}
```yaml
name: Publish PowerShell Module

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build and publish
      env:
        NUGET_KEY: ${{ secrets.NUGET_KEY }}
      run: |
        Publish-Module -Path . -NuGetApiKey $NUGET_KEY -Verbose
```
{% endraw %}