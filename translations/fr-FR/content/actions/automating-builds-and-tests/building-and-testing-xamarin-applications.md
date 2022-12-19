---
title: Création et test des applications Xamarin
intro: Vous pouvez créer un workflow d’intégration continue (CI) dans GitHub Actions pour générer et tester votre application Xamarin.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518927'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment créer un workflow qui effectue une intégration continue (CI) pour votre projet Xamarin. Le workflow que vous créez vous permet de voir à quel moment les commits de demande de tirage (pull request) entraînent des échecs de build ou de test dans votre branche par défaut. Cette approche peut vous aider à garantir l’intégrité de votre code.

Pour obtenir la liste complète des versions du SDK Xamarin qui sont disponibles pour les exécuteurs macOS hébergés dans {% data variables.product.prodname_actions %}, consultez la documentation :

* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md#xamarin-bundles)

{% data reusables.actions.macos-runner-preview %}

## Prérequis

Il est recommandé d’avoir une compréhension de base de Xamarin, du SDK .NET Core, du YAML, des options de configuration de workflows et de la création de fichiers de workflow. Pour plus d'informations, consultez les pages suivantes :

- « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions) »
- « [Bien démarrer avec .NET](https://dotnet.microsoft.com/learn) »
- « [Découvrir Xamarin](https://dotnet.microsoft.com/learn/xamarin) »

## Création d’applications Xamarin.iOS

L’exemple ci-dessous montre comment modifier les versions du SDK Xamarin par défaut et générer une application Xamarin.iOS.

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

## Création d’applications Xamarin.Android

L’exemple ci-dessous montre comment modifier les versions du SDK Xamarin par défaut et générer une application Xamarin.Android.

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

## Spécification d’une version .NET

Pour utiliser une version préinstallée du SDK .NET Core sur un exécuteur hébergé dans {% data variables.product.prodname_dotcom %}, utilisez l’action `setup-dotnet`. Cette action recherche une version spécifique de .NET à partir du cache d’outils de chaque exécuteur, et ajoute les fichiers binaires nécessaires à `PATH`. Ces modifications seront conservées pendant toute la durée du travail.
 
L’action `setup-dotnet` est recommandée pour l’utilisation de .NET avec {% data variables.product.prodname_actions %}, car cela garantit un comportement cohérent sur tous les exécuteurs et toutes les versions de .NET. Si vous utilisez un exécuteur auto-hébergé, vous devez installer .NET et l’ajouter à `PATH`. Pour plus d’informations, consultez l’action [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).
