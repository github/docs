---
title: 构建和测试 Xamarin 应用程序
intro: 您可以在 GitHub Actions 中创建持续集成 (CI) 工作流程，以构建和测试 Xamarin 应用程序。
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

### 简介

本指南介绍如何为 Xamarin 项目创建执行持续集成 (CI) 的工作流程。 您创建的工作流程将允许您查看拉取请求提交何时会在默认分支上导致构建或测试失败； 这个方法可帮助确保您的代码始终是健康的。

在 {% data variables.product.prodname_actions %} 托管的 macOS 运行器上有可用的 Xamarin SDK 版本的完整列表，请参阅文档：

* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11-Readme.md#xamarin-bundles)

{% data reusables.github-actions.macos-runner-preview %}

### 基本要求

建议基本了解 Xamarin、.NET Core SDK、YAML、工作流程配置选项以及如何创建工作流程文件。 更多信息请参阅：

- "[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[开始使用 .NET](https://dotnet.microsoft.com/learn)"
- "[了解 Xamarin](https://dotnet.microsoft.com/learn/xamarin)"

### 构建 Xamarin.iOS 应用程序

下面的示例演示如何更改默认 Xamarin SDK 版本并构建 Xamarin.iOS 应用程序。

{% raw %}
```yaml
name: Build Xamarin.iOS app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set default Xamarin SDK versions
      run: |
        $VM_ASSETS/select-xamarin-sdk-v2.sh --mono=6.12 --ios=14.10

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

### 构建 Xamarin.Android 应用程序

下面的示例演示如何更改默认 Xamarin SDK 版本并构建 Xamarin.Android 应用程序。

{% raw %}
```yaml
name: Build Xamarin.Android app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set default Xamarin SDK versions
      run: |
        $VM_ASSETS/select-xamarin-sdk-v2.sh --mono=6.10 --android=10.2

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

### 指定 .NET 版本

要在 {% data variables.product.prodname_dotcom %} 托管的运行器上使用预安装的 .NET Core SDK 版本，请使用 `setup-dotnet` 操作。 此操作从每个运行器上的工具缓存中查找特定版本的 .NET，并将必要的二进制文件添加到 `PATH`。 这些更改将持续用于作业的其余部分。

`setup-dotnet` 操作是 .NET 与 {% data variables.product.prodname_actions %} 结合使用时的推荐方式，因为它能确保不同运行器和不同版本的 .NET 行为一致。 如果使用自托管运行器，则必须安装 .NET 并将其添加到 `PATH`。 更多信息请参阅 [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) 操作。
