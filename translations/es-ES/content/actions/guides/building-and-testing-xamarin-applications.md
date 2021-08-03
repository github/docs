---
title: Building and testing Xamarin applications
intro: You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Xamarin application.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CI
  - Xamarin
  - Xamarin.iOS
  - Xamarin.Android
  - Android
  - iOS
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

This guide shows you how to create a workflow that performs continuous integration (CI) for your Xamarin project. El flujo de trabajo que creas te permitirá ver cuándo las confirmaciones de una solicitud de extracción causan la construcción o las fallas de prueba en tu rama por defecto; este enfoque puede ayudar a garantizar que tu código siempre sea correcto.

{% data variables.product.prodname_actions %}-hosted macOS runner stores Xamarin SDK versions and the associated Mono versions as a set of symlinks to Xamarin SDK locations that are available by a single bundle symlink. For a full list of available Xamarin SDK versions and their corresponding bundles, see the runners documentation:

* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11.0](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11.0-Readme.md#xamarin-bundles)

{% data reusables.github-actions.macos-runner-preview %}

### Prerrequisitos

We recommend that you have a basic understanding of Xamarin, .NET Core SDK, YAML, workflow configuration options, and how to create a workflow file. Para obtener más información, consulta:

- "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Getting started with .NET](https://dotnet.microsoft.com/learn)"
- "[Learn Xamarin](https://dotnet.microsoft.com/learn/xamarin)"

### Bulding Xamarin.iOS apps

The example below demonstrates how to change the default Xamarin bundle and build  a Xamarin.iOS application.

{% raw %}
```yaml
name: Build Xamarin.iOS app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v2
      - name: Select default Xamarin bundle to 6_12_6
        run: |
          XAMARIN_SDK=6_12_6
          $VM_ASSETS/select-xamarin-sdk.sh $XAMARIN_SDK

      - name: Set default Xcode 12.3
        run: |
          XCODE_ROOT=/Applications/Xcode_12.3.0.app
          echo "MD_APPLE_SDK_ROOT=$XCODE_ROOT" >> $GITHUB_ENV
          sudo xcode-select -s $XCODE_ROOT

      - name: Setup .NET Core SDK 5.0.x
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: '5.0.x'

      - name: Install dependencies
        run: nuget restore <sln_file_path>

      - name: Build
        run: msbuild <csproj_file_path> /p:Configuration=Debug /p:Platform=iPhoneSimulator /t:Rebuild
```
{% endraw %}

### Bulding Xamarin.Android apps

The example below demonstrates how to change default the Xamarin bundle and build a Xamarin.Android application.

{% raw %}
```yaml
name: Build Xamarin.Android app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v2
      - name: Select default Xamarin bundle to 6_12_6
        run: |
          XAMARIN_SDK=6_12_6
          $VM_ASSETS/select-xamarin-sdk.sh $XAMARIN_SDK

      - name: Setup .NET Core SDK 5.0.x
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: '5.0.x'

      - name: Install dependencies
        run: nuget restore <sln_file_path>

      - name: Build
        run: msbuild <csproj_file_path> /t:PackageForAndroid /p:Configuration=Debug
```
{% endraw %}

### Especificar una versión de .NET

Para utilizar una versión preinstalada de .NET Core SDK en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, utiliza la acción `setup-dotnet`. Esta acción encuentra una versión específica de .NET desde el caché de las herramientas en cada ejecutor y agrega los binarios necesarios a `PATH`. Estos cambios persistirán para el recordatorio del job.

La acción `setup-dotnet` es la forma recomendada de utilizar .NET con las {% data variables.product.prodname_actions %}, porque garantiza el comportamiento consistente a través de diversos ejecutores y diversas versiones de .NET. Si estás utilizando un ejecutor auto-hospedado, debes instalar .NET y agregarlo a `PATH`. Para obtener más información, consulta la acción [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).
