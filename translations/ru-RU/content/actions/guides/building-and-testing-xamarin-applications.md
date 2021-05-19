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

### Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Xamarin project. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy.

{% data variables.product.prodname_actions %}-hosted macOS runner stores Xamarin SDK versions and the associated Mono versions as a set of symlinks to Xamarin SDK locations that are available by a single bundle symlink. For a full list of available Xamarin SDK versions and their corresponding bundles, see the runners documentation:

* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11.0](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11.0-Readme.md#xamarin-bundles)

{% data reusables.github-actions.macos-runner-preview %}

### Требования

We recommend that you have a basic understanding of Xamarin, .NET Core SDK, YAML, workflow configuration options, and how to create a workflow file. Дополнительные сведения см. в:

- "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
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

### Specifying a .NET version

To use a preinstalled version of the .NET Core SDK on a {% data variables.product.prodname_dotcom %}-hosted runner, use the `setup-dotnet` action. This action finds a specific version of .NET from the tools cache on each runner, and adds the necessary binaries to `PATH`. These changes will persist for the remainder of the job.

The `setup-dotnet` action is the recommended way of using .NET with {% data variables.product.prodname_actions %}, because it ensures consistent behavior across different runners and different versions of .NET. If you are using a self-hosted runner, you must install .NET and add it to `PATH`. For more information, see the [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) action.
