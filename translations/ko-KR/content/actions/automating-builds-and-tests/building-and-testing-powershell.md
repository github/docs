---
title: PowerShell 빌드 및 테스트
intro: CI(연속 통합) 워크플로를 만들어 PowerShell 프로젝트를 빌드하고 테스트할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180217'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 CI용 PowerShell을 사용하는 방법을 보여 줍니다. Pester를 사용하고, 종속성을 설치하고, 모듈을 테스트하고, PowerShell 갤러리 게시하는 방법을 설명합니다.

{% data variables.product.prodname_dotcom %} 호스트 러너에는 PowerShell 및 Pester가 포함된 소프트웨어가 사전 설치된 도구 캐시가 있습니다. 

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %}최신 소프트웨어 및 사전 설치된 PowerShell 및 Pester 버전의 전체 목록은 “[{% data variables.product.prodname_dotcom %} 호스트 실행기 사양](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”을 참조하세요.
{% endif %}

## 필수 조건

YAML 및 {% data variables.product.prodname_actions %}의 구문에 대해 잘 알고 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

PowerShell 및 Pester를 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 다음을 참조하세요.
- [PowerShell 시작](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Pester에 대한 워크플로 추가

PowerShell 및 Pester를 사용하여 테스트를 자동화하려면 변경 내용이 리포지토리에 푸시될 때마다 실행되는 워크플로를 추가할 수 있습니다. 다음 예제에서 `Test-Path`는 `resultsfile.log`라는 파일이 있는지 확인하는 데 사용됩니다.

이 예제 워크플로 파일을 리포지토리의 `.github/workflows/` 디렉터리에 추가해야 합니다.

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

* `shell: pwsh` - `run` 명령을 실행할 때 PowerShell을 사용하도록 작업을 구성합니다.
* `run: Test-Path resultsfile.log` - `resultsfile.log`라는 파일이 리포지토리의 루트 디렉터리에 있는지 확인합니다.
* `Should -Be $true` - Pester를 사용하여 예상 결과를 정의합니다. 예기치 않은 결과인 경우 {% data variables.product.prodname_actions %}는 이를 실패한 테스트로 플래그를 지정합니다. 예를 들면 다음과 같습니다.

  
  ![실패한 Pester 테스트](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  

* `Invoke-Pester Unit.Tests.ps1 -Passthru` - Pester를 사용하여 `Unit.Tests.ps1`이라는 파일에 정의된 테스트를 실행합니다. 예를 들어 위에서 설명한 것과 동일한 테스트를 수행하기 위해 `Unit.Tests.ps1`에는 다음이 포함됩니다.
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## PowerShell 모듈 위치

아래 테이블은 각 {% data variables.product.prodname_dotcom %} 호스트 러너에서 다양한 PowerShell 모듈의 위치를 설명합니다.

|| Ubuntu | macOS | Windows |
|------|-------|------|----------|
|**PowerShell 시스템 모듈** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**PowerShell 추가 항목 모듈**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**사용자가 설치한 모듈**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

## 종속성 설치

{% data variables.product.prodname_dotcom %} 호스트 실행기에는 PowerShell 7 및 Pester가 설치되어 있습니다. 코드를 빌드하고 테스트하기 전에 `Install-Module`을 사용하여 PowerShell 갤러리에서 추가 종속성을 설치할 수 있습니다.

{% note %}

**참고:** {% data variables.product.prodname_dotcom %} 호스트 실행기가 사용하는 사전 설치된 패키지(예: Pester)는 정기적으로 업데이트되며 중요한 변경 내용이 있을 수 있습니다. 따라서 `-MaximumVersion`과 함께 `Install-Module`을 사용하여 항상 필요한 패키지 버전을 지정하는 것이 좋습니다.

{% endnote %}

{% ifversion actions-caching %}종속성을 캐시하여 워크플로 속도를 높일 수도 있습니다. 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.{% endif %}

예를 들어 다음 작업은 `SqlServer` 및 `PSScriptAnalyzer` 모듈을 설치합니다.

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

**참고:** 기본값으로 PowerShell은 리포지토리를 신뢰하지 않습니다. PowerShell 갤러리에서 모듈을 설치할 때 `PSGallery`에 대한 설치 정책을 `Trusted`로 명시적으로 설정해야 합니다.

{% endnote %}

{% ifversion actions-caching %}

### 종속성 캐싱

고유한 키를 사용하여 PowerShell 종속성을 캐시할 수 있으므로 [`cache`](https://github.com/marketplace/actions/cache) 작업으로 향후 워크플로에 대한 종속성을 복원할 수 있습니다. 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.

PowerShell은 실행기의 운영 체제에 따라 다른 위치에 종속성을 캐시합니다. 예를 들어 다음 Ubuntu 예제에서 사용된 `path` 위치는 Windows 운영 체제에서는 다릅니다.

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

## 코드 테스트

코드를 빌드하고 테스트하기 위해 로컬에서 사용하는 것과 동일한 명령을 사용할 수 있습니다.

### PSScriptAnalyzer를 사용하여 코드 린트

다음 예제에서는 `PSScriptAnalyzer`를 설치하고 이를 사용하여 리포지토리의 모든 `ps1` 파일을 린트합니다. 자세한 내용은 [GitHub의 PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer)를 참조하세요.

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

## 워크플로 데이터를 아티팩트로 패키지

워크플로가 완료된 후 볼 아티팩트를 업로드할 수 있습니다. 예를 들어 로그 파일, 코어 덤프, 테스트 결과 또는 스크린샷을 저장해야 할 수 있습니다. 자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”를 참조하세요.

다음 예제에서는 `upload-artifact` 작업을 사용하여 `Invoke-Pester`에서 받은 테스트 결과를 보관하는 방법을 보여 줍니다. 자세한 내용은 [`upload-artifact` 작업](https://github.com/actions/upload-artifact)을 참조하세요.

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

`always()` 함수는 테스트가 실패하더라도 계속 처리하도록 작업을 구성합니다. 자세한 내용은 “[항상](/actions/reference/context-and-expression-syntax-for-github-actions#always)”을 참조하세요.

## PowerShell 갤러리에 게시

CI 테스트에 통과하면 PowerShell 모듈을 PowerShell 갤러리 게시하도록 워크플로를 구성할 수 있습니다. 비밀을 사용하여 패키지를 게시하는 데 필요한 모든 토큰 또는 자격 증명을 저장할 수 있습니다. 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

다음 예제에서는 패키지를 만들고 `Publish-Module`을 사용하여 PowerShell 갤러리에 게시합니다.

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
