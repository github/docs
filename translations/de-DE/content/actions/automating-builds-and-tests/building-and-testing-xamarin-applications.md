---
title: Erstellen und Testen von Xamarin-Anwendungen
intro: 'Du kannst einen CI-Workflow (Continuous Integration) in GitHub Actions erstellen, um deine eigene Xamarin-Anwendung zu entwickeln und zu testen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518928'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieser Leitfaden zeigt, wie du einen Workflow erstellen kannst, der Continuous Integration (CI) für dein Xamarin-Projekt ausführt. Der Workflow, den Du erstellst, zeigt Dir, wenn Commits zu einem Pull-Request zu Build- oder Testfehlern für deinen Standard-Zweig führen. Dieser Ansatz kann dazu beitragen, dass Dein Code immer brauchbar ist.

Eine vollständige Liste der verfügbaren Xamarin SDK-Versionen in {% data variables.product.prodname_actions %}-gehosteten macOS-Runnern findest du in der Dokumentation:

* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md#xamarin-bundles)

{% data reusables.actions.macos-runner-preview %}

## Voraussetzungen

Du solltest über grundlegende Kenntnisse von Xamarin. .NET Core SDK, YAML, Workflowkonfigurationsoptionen und dem Erstellen einer Workflowdatei verfügen. Weitere Informationen finden Sie unter

- [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [Erste Schritte mit .NET](https://dotnet.microsoft.com/learn)
- [Erlernen von Xamarin](https://dotnet.microsoft.com/learn/xamarin)

## Erstellen von Xamarin.iOS-Apps

Das folgende Beispiel veranschaulicht, wie du die Standardversionen des Xamarin SDK änderst und eine Xamarin.iOS-Anwendung erstellst.

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

## Erstellen von Xamarin.Android-Apps

Das folgende Beispiel veranschaulicht, wie du die Standardversionen des Xamarin SDK änderst und eine Xamarin.Android-Anwendung erstellst.

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

## Angeben einer .NET-Version

Verwende die Aktion `setup-dotnet`, um eine vorinstallierte Version des .NET Core SDK für einen von {% data variables.product.prodname_dotcom %} gehosteten Runner zu verwenden. Mit dieser Aktion wird im Toolcache der jeweiligen Runner nach einer bestimmten Version von .NET gesucht, und die erforderlichen Binärdateien werden zu `PATH` hinzugefügt. Diese Änderungen bleiben für den Rest des Auftrags beibehalten.
 
Die Aktion `setup-dotnet` wird als Methode zur Verwendung von .NET mit {% data variables.product.prodname_actions %} empfohlen, da damit ein konsistentes Verhalten bei verschiedenen Runnern und verschiedenen Version von .NET gewährleistet wird. Wenn du einen selbst gehosteten Runner verwendest, musst du .NET installieren und zu `PATH` hinzufügen. Weitere Informationen findest du unter der Aktion [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).
