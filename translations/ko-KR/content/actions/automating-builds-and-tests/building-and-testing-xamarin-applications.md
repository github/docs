---
title: Xamarin 애플리케이션 빌드 및 테스트
intro: GitHub Actions에서 CI(연속 통합) 워크플로를 만들어 Xamarin 애플리케이션을 빌드하고 테스트할 수 있습니다.
redirect_from:
  - /actions/guides/building-and-testing-xamarin-applications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Xamarin
  - Xamarin.iOS
  - Xamarin.Android
  - Android
  - iOS
shortTitle: Build & test Xamarin apps
ms.openlocfilehash: 2e4e9a8eb73cd9dc2ef054c6c3ac48a9beadd9d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518930'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Xamarin 프로젝트에 대한 CI(연속 통합)를 수행하는 워크플로를 만드는 방법을 보여 줍니다. 만든 워크플로를 사용하면 끌어오기 요청에 커밋할 때 기본 분기에 대한 빌드 또는 테스트 오류가 발생하는 경우를 확인할 수 있습니다. 이 방법은 코드가 항상 정상인지 확인하는 데 도움이 될 수 있습니다.

{% data variables.product.prodname_actions %} 호스트 macOS 실행기에서 사용 가능한 Xamarin SDK 버전의 전체 목록은 다음 문서를 참조하세요.

* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md#xamarin-bundles)

{% data reusables.actions.macos-runner-preview %}

## 필수 조건

Xamarin, .NET Core SDK, YAML, 워크플로 구성 옵션과 워크플로 파일을 만드는 방법을 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 다음을 참조하세요.

- “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”
- [.NET 시작하기](https://dotnet.microsoft.com/learn)
- "[Learn Xamarin](https://dotnet.microsoft.com/learn/xamarin)"

## Xamarin.iOS 앱 빌드

아래 예제에서는 기본 Xamarin SDK 버전을 변경하고 Xamarin.iOS 애플리케이션을 빌드하는 방법을 보여 줍니다.

```yaml
name: Build Xamarin.iOS app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Set default Xamarin SDK versions
      run: |
        $VM_ASSETS/select-xamarin-sdk-v2.sh --mono=6.12 --ios=14.10
    
    - name: Set default Xcode 12.3
      run: |
        XCODE_ROOT=/Applications/Xcode_12.3.0.app
        echo "MD_APPLE_SDK_ROOT=$XCODE_ROOT" >> $GITHUB_ENV
        sudo xcode-select -s $XCODE_ROOT

    - name: Setup .NET Core SDK 5.0.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        dotnet-version: '5.0.x'

    - name: Install dependencies
      run: nuget restore <sln_file_path>

    - name: Build
      run: msbuild <csproj_file_path> /p:Configuration=Debug /p:Platform=iPhoneSimulator /t:Rebuild
```

## Xamarin.Android 앱 빌드

아래 예제에서는 기본 Xamarin SDK 버전을 변경하고 Xamarin.Android 애플리케이션을 빌드하는 방법을 보여 줍니다.

```yaml
name: Build Xamarin.Android app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Set default Xamarin SDK versions
      run: |
        $VM_ASSETS/select-xamarin-sdk-v2.sh --mono=6.10 --android=10.2

    - name: Setup .NET Core SDK 5.0.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        dotnet-version: '5.0.x'

    - name: Install dependencies
      run: nuget restore <sln_file_path>

    - name: Build
      run: msbuild <csproj_file_path> /t:PackageForAndroid /p:Configuration=Debug
```

## .NET 버전 지정

{% data variables.product.prodname_dotcom %} 호스트 실행기에서 사전 설치된 버전의 .NET Core SDK를 사용하려면 `setup-dotnet` 작업을 사용하세요. 이 작업은 각 실행기의 도구 캐시에서 특정 버전의 .NET을 찾고 필수 이진 파일을 `PATH`에 추가합니다. 이러한 변경 내용은 작업의 나머지 부분에 대해 유지됩니다.
 
`setup-dotnet` 작업은 다양한 실행기 및 다양한 버전의 .NET에서 일관된 동작을 보장하므로 {% data variables.product.prodname_actions %}로 .NET을 사용하는 데 권장되는 방법입니다. 자체 호스트 실행기를 사용하는 경우 .NET을 설치하고 이를 `PATH`에 추가해야 합니다. 자세한 내용은 [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) 작업을 참조하세요.
