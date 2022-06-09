---
title: 构建和测试 PowerShell
intro: 您可以创建持续集成 (CI) 工作流程来构建和测试您的 PowerShell 项目。
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
shortTitle: 构建和测试 PowerShell
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南演示如何将 PowerShell 用于 CI。 它介绍了如何使用 Pester、安装依赖项、测试模块以及发布到 PowerShell Gallery。

{% data variables.product.prodname_dotcom %} 托管的运行器具有预安装了软件的工具缓存，包括 PowerShell 和 Pester。

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}有关最新版软件以及 PowerShell 和 Pester 预安装版本的完整列表，请参阅 [{% data variables.product.prodname_dotcom %} 托管的运行器的规格](/actions/reference/specifications-for-github-hosted-runners/#supported-software)。
{% endif %}

## 基本要求

您应该熟悉 YAML 和 {% data variables.product.prodname_actions %} 的语法。 更多信息请参阅“[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

建议您对 PowerShell 和 Pester 有个基本的了解。 更多信息请参阅：
- [开始使用 PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## 为 Pester 添加工作流程

要使用 PowerShell 和 Pester 自动执行测试，您可以添加在每次将更改推送到仓库时运行的工作流程。 在以下示例中，`Test-Path` 用于检查文件 `resultsfile.log` 是否存在。

此示例工作流程文件必须添加到您仓库的 `.github/workflows/` 目录：

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

* `shell: pwsh` - 配置作业在运行 `run` 命令时使用 PowerShell。
* `run: Test-Path resultsfile.log` - 检查仓库的根目录中是否存在名为 `resultsfile.log` 的文件。
* `Should -Be $true` - 使用 Pester 定义预期结果。 如果结果是非预期的，则 {% data variables.product.prodname_actions %} 会将此标记为失败的测试。 例如：


  ![失败的 Pester 测试](/assets/images/help/repository/actions-failed-pester-test-updated.png)


* `Invoke-Pester Unit.Tests.ps1 -Passthru` - 使用 Pester 执行文件 `Unit.Tests.ps1` 中定义的测试。 例如，要执行上述相同的测试， `Unit.Tests.ps1` 将包含以下内容：
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## PowerShell 模块位置

下表描述了每个 {% data variables.product.prodname_dotcom %} 托管的运行器中各个 PowerShell 模块的位置。

|                     | Ubuntu                                           | macOS                                             | Windows                                                      |
| ------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| **PowerShell 系统模块** | `/opt/microsoft/powershell/7/Modules/*`          | `/usr/local/microsoft/powershell/7/Modules/*`     | `C:\program files\powershell\7\Modules\*`              |
| **PowerShell 附加模块** | `/usr/local/share/powershell/Modules/*`          | `/usr/local/share/powershell/Modules/*`           | `C:\Modules\*`                                            |
| **用户安装的模块**         | `/home/runner/.local/share/powershell/Modules/*` | `/Users/runner/.local/share/powershell/Modules/*` | `C:\Users\runneradmin\Documents\PowerShell\Modules\*` |

## 安装依赖项

{% data variables.product.prodname_dotcom %} 托管的运行器安装了 PowerShell 7 和 Pester。 在构建和测试代码之前，您可以使用 `Install-Module` 从 PowerShell Gallery 安装其他依赖项。

{% note %}

**注：**{% data variables.product.prodname_dotcom %} 托管的运行器使用的预安装包（如 Pester）会定期更新，可能引入重大更改。 因此，建议始终结合使用 `Install-Module` 与 `-MaximumVersion` 来指定所需的软件包版本。

{% endnote %}

{% ifversion actions-caching %}You can also cache dependencies to speed up your workflow. 更多信息请参阅“[缓存依赖项以加快工作流程](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”。{% endif %}

例如，以下作业将安装 `SqlServer` 和 `PSScriptAnalyzer` 模块：

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

**注：**默认情况下，PowerShell 不信任任何仓库。 从 PowerShell Gallery 安装模块时，您必须将 `PSGallery` 的安装策略明确设置为 `Trusted`。

{% endnote %}

{% ifversion actions-caching %}

### 缓存依赖项

您可以使用唯一密钥缓存 PowerShell 依赖项，以在使用 [`cache`](https://github.com/marketplace/actions/cache) 操作运行未来的工作流程时恢复依赖项。 更多信息请参阅“[缓存依赖项以加快工作流程](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”。

PowerShell 根据运行器的操作系统将其依赖项缓存在不同的位置。 例如，以下 Ubuntu 示例中使用的 `path` 位置在 Windows 操作系统中是不同的。

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

## 测试代码

您可以使用与本地相同的命令来构建和测试代码。

### 使用 PSScriptAnalyzer 链接代码

下面的示例安装 `PSScriptAnalyzer` 并用它来将所有 `ps1` 文件链接在仓库中。 更多信息请参阅 [GitHub 上的 PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer)。

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

## 将工作流数据打包为构件

您可以在工作流程完成后上传构件以查看。 例如，您可能需要保存日志文件、核心转储、测试结果或屏幕截图。 更多信息请参阅“[使用构件持久化工作流程](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

下面的示例演示如何使用 `upload-artifact` 操作来存档从 `Invoke-Pester` 获得的测试结果。 更多信息请参阅 [`upload-artifact` 操作](https://github.com/actions/upload-artifact)。

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

`always()` 函数配置作业在测试失败时也继续处理。 更多信息请参阅“[always](/actions/reference/context-and-expression-syntax-for-github-actions#always)”。

## 发布到 PowerShell Gallery

您可以配置工作流程在 CI 测试通过时将 PowerShell 模块发布到 PowerShell Gallery。 您可以使用机密来存储发布软件包所需的任何令牌或凭据。 更多信息请参阅“[创建和使用加密密码](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

下面的示例创建软件包并使用 `Publish-Module` 将其发布到PowerShell Gallery：

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
