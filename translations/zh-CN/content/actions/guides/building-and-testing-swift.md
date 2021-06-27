---
title: 构建和测试 Swift
intro: 您可以创建持续集成 (CI) 工作流程来构建和测试您的 Swift 项目。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CI
  - Swift
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 简介

本指南介绍如何构建和测试 Swift 包。

{% if currentVersion == "github-ae@latest" %} 要构建和测试您在 {% data variables.product.prodname_ghe_managed %} 上的 Swift 项目，则需要创建包含必要 Swift 依赖项的自定义操作系统映像。 有关如何确定 {% data variables.actions.hosted_runner %} 已安装所需软件的说明，请参阅“[创建自定义映像](/actions/using-github-hosted-runners/creating-custom-images)”。
{% else %}{% data variables.product.prodname_dotcom %} 托管的运行器带有预装软件的工具缓存，Ubuntu 和 macOS 运行器包括用于构建 Swift 包的依赖项。 有关最新版软件以及 Swift 和 Xcode 预安装版本的完整列表，请参阅“[关于 GitHub 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)”。{% endif %}

### 基本要求

您应该已经熟悉 YAML 语法及其如何与 {% data variables.product.prodname_actions %} 结合使用。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”。

我们建议您对 Swift 包有基本的了解。 更多信息请参阅 Apple 开发者文档中的“[Swift 包](https://developer.apple.com/documentation/swift_packages)”。

### 从 Swift 工作流程模板开始

{% data variables.product.prodname_dotcom %} 提供了一个 Swift 工作流程模板，该模板应适合大多数 Swift 项目，本指南包括演示如何自定义此模板的示例。 更多信息请参阅 [Swift 工作流程模板](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml)。

要快速开始，请将模板添加到仓库的 `.github/workflows` 目录中。

{% raw %}
```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v2
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```
{% endraw %}

### 指定 Swift 版本

要在 {% data variables.product.prodname_dotcom %} 托管的运行器上使用特定的预安装 Swift 版本，请使用 `fwal/setup-swift` 操作。 此操作从运行器上的工具缓存中查找特定版本的 Swift，并将必要的二进制文件添加到 `PATH`。 这些更改将持续用于作业的其余部分。 更多信息请参阅 [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift) 操作。

如果使用自托管运行器，则必须安装所需的 Swift 版本并将它们添加到 `PATH`。

下面的示例演示了如何使用 `fwal/setup-swift` 操作。

#### 使用多个 Swift 版本

您可以将作业配置为在构建矩阵中使用多个版本的 Swift。

{% raw %}
```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:
    name: Swift ${{ matrix.swift }} on ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: fwal/setup-swift@v1
        with:
          swift-version: ${{ matrix.swift }}
      - uses: actions/checkout@v2
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```
{% endraw %}

#### 使用单个特定的 Swift 版本

您可以将作业配置为使用单个特定版本的 Swift，例如 `5.3.3`。

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@v1
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

### 构建和测试代码

您可以使用与本地相同的命令来使用 Swift 构建和测试代码。 此示例演示如何在作业中使用 `swift build` 和 `swift test`：

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: fwal/setup-swift@v1
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
{% endraw %}
