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
ms.openlocfilehash: 572c2ee17c948f44a8f8e4006d3729498269a215
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180216'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、CIのためのPowerShellの使用方法を示します。 Pesterの使い方、依存関係のインストール、モジュールのテスト、PowerShell Galleryへの公開について説明します。

{% data variables.product.prodname_dotcom %}ホストランナーは、PowerShell及びPesterを含むプリインストールされたソフトウェアを伴うツールキャッシュを持ちます。 

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %}最新のソフトウェアの完全な一覧および PowerShell と Pester のプレインストールされたバージョンについては、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 前提条件

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

PowerShell及びPesterの基本的な理解をしておくことをおすすめします。 詳細については、次を参照してください。
- [PowerShell の概要](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Pesterのワークフローの追加

PowerShellとPesterでテストを自動化するには、変更がリポジトリにプッシュされるたびに実行されるワークフローを追加できます。 次の例では、`resultsfile.log` というファイルが存在することを調べるために、`Test-Path` が使われます。

次のワークフロー ファイルの例を、リポジトリの `.github/workflows/` ディレクトリに追加する必要があります。

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

* `shell: pwsh` - `run` コマンドを実行するときに PowerShell を使うようにジョブを構成します。
* `run: Test-Path resultsfile.log` - リポジトリのルート ディレクトリに `resultsfile.log` というファイルが存在するかどうかをチェックします。
* `Should -Be $true` - Pester を使って期待される結果を定義します。 結果が期待どおりではなかった場合、{% data variables.product.prodname_actions %}はこれを失敗したテストとしてフラグを立てます。 次に例を示します。

  
  ![失敗したPesterテスト](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  

* `Invoke-Pester Unit.Tests.ps1 -Passthru` - Pester を使って、`Unit.Tests.ps1` というファイルで定義されているテストを実行します。 たとえば、上で説明したのと同じテストを実行するには、`Unit.Tests.ps1` の内容を次のようにします。
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## PowerShellのモジュールの場所

以下の表は、それぞれの{% data variables.product.prodname_dotcom %}ホストランナー内の様々なPowerShellモジュールの場所を示します。

|| Ubuntu | macOS | Windows |
|------|-------|------|----------|
|**PowerShell システム モジュール** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**PowerShell アドオン モジュール**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**ユーザーがインストールしたモジュール**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

## 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、PowerShell 7とPesterがインストールされています。 コードのビルドとテストの前に、`Install-Module` を使って追加の依存関係を PowerShell ギャラリーからインストールできます。

{% note %}

**注:** {% data variables.product.prodname_dotcom %} ホステッド ランナーによって使用されるプレインストールされたパッケージ (Pester など) は定期的に更新され、重要な変更が行われることがあります。 そのため、`Install-Module` で `-MaximumVersion` を使って必要なパッケージのバージョンを常に指定することをお勧めします。

{% endnote %}

{% ifversion actions-caching %}ワークフローの速度を上げるために、依存関係をキャッシュすることもできます。 詳細については、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。{% endif %}

たとえば、次のジョブでは、`SqlServer` モジュールと `PSScriptAnalyzer` モジュールがインストールされます。

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

**注:** 既定では、PowerShell によって信頼されるリポジトリはありません。 PowerShell ギャラリーからモジュールをインストールするときは、`PSGallery` のインストール ポリシーを `Trusted` に明示的に設定する必要があります。

{% endnote %}

{% ifversion actions-caching %}

### 依存関係のキャッシング

一意のキーを使って PowerShell の依存関係をキャッシュすることができ、これにより将来のワークフローで [`cache`](https://github.com/marketplace/actions/cache) アクションによってその依存関係を復元できます。 詳細については、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。

PowerShellは、ランナーのオペレーティングシステムによって依存関係を様々な場所にキャッシュします。 たとえば、次の Ubuntu の例で使われている `path` の場所は、Windows オペレーティング システムの場合は異なります。

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

次の例では、`PSScriptAnalyzer` がインストールされ、それを使ってリポジトリ内のすべての `ps1` ファイルがリントされます。 詳細については、[GitHub の PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer) を参照してください。

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

ワークフローの完了後に、成果物をアップロードして見ることができます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 詳細については、「[アーティファクトを使用してワークフロー データを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

次の例では、`upload-artifact` アクションを使って、`Invoke-Pester` から受け取ったテスト結果をアーカイブする方法を示します。 詳細については、「[`upload-artifact` アクション](https://github.com/actions/upload-artifact)」を参照してください。

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

`always()` 関数では、テストにエラーがあっても処理を続行するようにジョブが構成されます。 詳細については、[always](/actions/reference/context-and-expression-syntax-for-github-actions#always) に関する説明を参照してください。

## PowerShell Galleryへの公開

CIテストにパスしたら、PowerShellモジュールをPowerShell Galleryに公開するようにワークフローを設定できます。 パッケージを公開するのに必要なトークンや認証情報を保存するために、シークレットを使うことができます。 詳細については、[暗号化されたシークレットの作成と使用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関するページを参照してください。

次の例では、パッケージが作成され、`Publish-Module` を使ってそれが PowerShell ギャラリーに公開されます。

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
