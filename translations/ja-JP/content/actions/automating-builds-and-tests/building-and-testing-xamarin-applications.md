---
title: Xamarin アプリケーションのビルドとテスト
intro: GitHub Actions で継続的インテグレーション (CI) ワークフローを作成して、Xamarin アプリケーションをビルドおよびテストできます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518929'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Xamarin プロジェクトの継続的インテグレーション (CI) を実行するワークフローを作成する方法を説明します。 作成するワークフローによって、プルリクエストに対するコミットがデフォルトブランチに対してビルドあるいはテストの失敗を引き起こしたことを見ることができるようになります。このアプローチは、コードが常に健全であることを保証するための役に立ちます。

{% data variables.product.prodname_actions %} ホスト型 macOS ランナーで利用できる Xamarin SDK バージョンの完全一覧については、次のドキュメントをご覧ください。

* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md#xamarin-bundles)

{% data reusables.actions.macos-runner-preview %}

## 前提条件

Xamarin、.NET Core SDK、YAML、ワークフロー設定オプション、およびワークフローファイルの作成方法の基本を理解しておくことをお勧めします。 詳細については、次を参照してください。

- "[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[.NET の使用を開始する](https://dotnet.microsoft.com/learn)"
- "[Xamarin 入門](https://dotnet.microsoft.com/learn/xamarin)"

## Xamarin.iOS アプリのビルド

以下は、デフォルトの Xamarin SDK バージョンを変更して Xamarin.iOS アプリケーションをビルドする方法の例です。

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

## Xamarin.Android アプリをビルドする

以下は、デフォルトの Xamarin SDK バージョンを変更して Xamarin.Android アプリケーションをビルドする方法の例です。

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

## .NETのバージョンの指定

{% data variables.product.prodname_dotcom %} ホステッド ランナーにプレインストールされたバージョンの .NET Core SDK を使うには、`setup-dotnet` アクションを使います。 このアクションは、各ランナーのツール キャッシュから特定のバージョンの .NET を見つけて、必要なバイナリを `PATH` に追加します。 これらの変更は、ジョブの残りの部分で保持されます。
 
`setup-dotnet` アクションを使用すると、異なるランナーおよび .NET の異なるバージョンの間で一貫した動作が保証されるため、{% data variables.product.prodname_actions %} で NET を使用する場合の推奨される方法です。 セルフホステッド ランナーを使用している場合は、.NET をインストールし、それを `PATH` に追加する必要があります。 詳細については、「[`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) アクション」を参照してください。
