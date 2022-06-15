---
title: PowerShell のビルドとテスト
intro: PowerShell プロジェクトのビルドとテストのための継続的インテグレーション (CI) ワークフローを作成できます。
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

## はじめに

このガイドでは、CIのためのPowerShellの使用方法を示します。 Pesterの使い方、依存関係のインストール、モジュールのテスト、PowerShell Galleryへの公開について説明します。

{% data variables.product.prodname_dotcom %}ホストランナーは、PowerShell及びPesterを含むプリインストールされたソフトウェアを伴うツールキャッシュを持ちます。

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}最新のソフトウェアと、PowerShell および Pester のプレインストールされたバージョンの完全なリストについては、「[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 必要な環境

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳しい情報については、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。

PowerShell及びPesterの基本的な理解をしておくことをおすすめします。 詳しい情報については、以下を参照してください。
- [PowerShellを使い始める](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Pesterのワークフローの追加

PowerShellとPesterでテストを自動化するには、変更がリポジトリにプッシュされるたびに実行されるワークフローを追加できます。 以下の例では、`resultsfile.log`というファイルがあるかをチェックするために`Test-Path`が使われます。

以下の例のワークフローファイルは、リポジトリの`.github/workflows/`ディレクトリに追加しなければなりません。

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

* `shell: pwsh` `run`コマンドの実行時にPowerShellを使うようにジョブを設定します。
* `run: Test-Path resultsfile.log` - リポジトリのルートディレクトリに`resultsfile.log`というファイルが存在するかをチェックします。
* `Should -Be $true` - Pesterを使って期待される結果を定義します。 結果が期待どおりではなかった場合、{% data variables.product.prodname_actions %}はこれを失敗したテストとしてフラグを立てます。 例:


  ![失敗したPesterテスト](/assets/images/help/repository/actions-failed-pester-test-updated.png)


* `Invoke-Pester Unit.Tests.ps1 -Passthru` - Pesterを使って`Unit.Tests.ps1`というファイルに定義されたテストを実行します。 たとえば上記の同じテストを実行するには、`Unit.Tests.ps1`には以下を含めます。
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## PowerShellのモジュールの場所

以下の表は、それぞれの{% data variables.product.prodname_dotcom %}ホストランナー内の様々なPowerShellモジュールの場所を示します。

|                         | Ubuntu                                           | macOS                                             | Windows                                                      |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| **PowerShellシステムモジュール** | `/opt/microsoft/powershell/7/Modules/*`          | `/usr/local/microsoft/powershell/7/Modules/*`     | `C:\program files\powershell\7\Modules\*`              |
| **PowerShellアドオンモジュール** | `/usr/local/share/powershell/Modules/*`          | `/usr/local/share/powershell/Modules/*`           | `C:\Modules\*`                                            |
| **ユーザがインストールしたモジュール**   | `/home/runner/.local/share/powershell/Modules/*` | `/Users/runner/.local/share/powershell/Modules/*` | `C:\Users\runneradmin\Documents\PowerShell\Modules\*` |

## 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、PowerShell 7とPesterがインストールされています。 コードのビルドとテストに先立って、`Install-Module`を使って追加の依存関係をPowerShell Galleryからインストールできます。

{% note %}

**ノート:** {% data variables.product.prodname_dotcom %}ホストランナーが使用するプリインストールされたパッケージ（Pesterなど）は定期的に更新され、重要な変更が行われることがあります。 そのため、`Install-Module`で`-MaximumVersion`を使って必要なパッケージのバージョンを常に指定しておくことをおすすめします。

{% endnote %}

{% ifversion actions-caching %}You can also cache dependencies to speed up your workflow. For more information, see "[Caching dependencies to speed up workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."{% endif %}

たとえば以下のジョブは、`SqlServer`及び`PSScriptAnalyzer`モジュールをインストールします。

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

**ノート:** デフォルトでは、PowerShellはどのリポジトリも信頼しません。 PowerShell Galleryからモジュールをインストールする際には、`PSGallery`のインストールポリシーを明示的に`Trusted`に設定しなければなりません。

{% endnote %}

{% ifversion actions-caching %}

### 依存関係のキャッシング

You can cache PowerShell dependencies using a unique key, which allows you to restore the dependencies for future workflows with the [`cache`](https://github.com/marketplace/actions/cache) action. 詳しい情報については、「[ワークフローを高速化するための依存関係のキャッシュ](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。

PowerShellは、ランナーのオペレーティングシステムによって依存関係を様々な場所にキャッシュします。 たとえば以下のUbuntuの例で使われる`path`の場所は、Windowsオペレーティングシステムの場合とは異なります。

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

## コードのテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

### PSScriptAnalyzerを使ったコードの文法チェック

以下の例は`PSScriptAnalyzer`をインストールし、それを使ってリポジトリ内のすべての`ps1`ファイルの文法チェックを行います。 詳しい情報については[GitHub上のPSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer)を参照してください。

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

## 成果物としてのワークフローのデータのパッケージ化

ワークフローの完了後に、成果物をアップロードして見ることができます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

以下の例は、`upload-artifact`アクションを使って`Invoke-Pester`から受信したテスト結果をアーカイブする方法を示しています。 詳しい情報については[`upload-artifact`アクション](https://github.com/actions/upload-artifact)を参照してください。

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

`always()`関数は、テストに失敗があっても継続するようにジョブを設定しています。 詳しい情報については「[ always](/actions/reference/context-and-expression-syntax-for-github-actions#always)」を参照してください。

## PowerShell Galleryへの公開

CIテストにパスしたら、PowerShellモジュールをPowerShell Galleryに公開するようにワークフローを設定できます。 パッケージを公開するのに必要なトークンや認証情報を保存するために、シークレットを使うことができます。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

以下の例は、パッケージを作成し、`Publish-Module`を使ってそのパッケージをPowerShell Galleryに公開します。

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
