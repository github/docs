---
title: 构建和测试 Go
intro: 你可以创建持续集成 (CI) 工作流来构建和测试 Go 项目。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
ms.openlocfilehash: 64e0c8acfa23436903b510a47cd1b43f55274f5f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079572'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南介绍如何构建、测试和发布 Go 包。

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} 托管的运行器有一个带有预装软件的工具缓存，其中包括 Go 的依赖项。 有关最新软件和 Go 预安装版本的完整列表，请参阅“[关于 {% data variables.product.prodname_dotcom %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)”。
{% endif %}

## 先决条件

您应该已经熟悉 YAML 语法及其如何与 {% data variables.product.prodname_actions %} 结合使用。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions)”。

建议你对 Go 语言有基本的了解。 有关详细信息，请参阅 [Go 入门](https://golang.org/doc/tutorial/getting-started)。

## 使用 Go 入门工作流程

{% data variables.product.prodname_dotcom %} 提供了一个适用于大多数 Go 项目的 Go 入门工作流程。 本指南包含可用于自定义入门工作流程的示例。 有关详细信息，请参阅 [Go 入门工作流](https://github.com/actions/starter-workflows/blob/main/ci/go.yml)。

若要快速开始，请将起始工作流添加到存储库的 `.github/workflows` 目录。

```yaml{:copy}
name: Go package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: 1.15

      - name: Build
        run: go build -v ./...

      - name: Test
        run: go test -v ./...
```

## 指定 Go 版本

指定 Go 版本的最简单方法是使用由 {% data variables.product.prodname_dotcom %} 提供的 `setup-go` 操作。 有关详细信息，请参阅 [`setup-go` 操作](https://github.com/actions/setup-go/)。

若要在 {% data variables.product.prodname_dotcom %} 托管的运行器上使用 Go 的预安装版本，请将相关版本传递给 `setup-go` 操作的 `go-version` 属性。 此操作从每个运行器上的工具缓存中查找特定版本的 Go，并将必要的二进制文件添加到 `PATH`。 这些更改将持续用于作业的其余部分。

`setup-go` 操作是 Go与 {% data variables.product.prodname_actions %} 结合使用时的推荐方式，因为它帮助确保不同运行器和不同版本的 Go 行为一致。 如果使用自托管运行器，则必须安装 Go 并将其添加到 `PATH`。

### 使用多个版本的 Go

```yaml{:copy}
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go {% raw %}${{ matrix.go-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      # You can test your matrix by printing the current Go version
      - name: Display Go version
        run: go version
```

### 使用特定的 Go 版本

可以将作业配置为使用 Go 的特定版本，例如 `1.16.2`。 或者，您也可以使用语义版本语法来获得最新的次要版本。 此示例使用 Go 1.16 最新的修补程序版本：

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## 安装依赖关系

可以使用 `go get` 安装依赖项：

```yaml{:copy}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: |
          go get .
          go get example.lab/octo-examplemodule
          go get example.lab/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### 缓存依赖项

可以使用 [`setup-go` 操作](https://github.com/actions/setup-go)缓存和还原依赖项。 默认情况下，缓存处于禁用状态，但可以通过将参数 `cache` 设置为 `true` 来启用它。

启用缓存后，`setup-go` 操作将在存储库根目录中搜索依赖项文件 `go.sum`，并使用依赖项文件的哈希作为缓存密钥的一部分。

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

或者，当使用多个依赖文件或它们位于不同的子目录中时，可以使用 `cache-dependency-path` 参数。

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

如果有自定义要求或需要更精细的缓存控制，可以使用 [`cache` 操作](https://github.com/marketplace/actions/cache)。 有关详细信息，请参阅“[缓存依赖项以加快工作流](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”。

{% endif %}

## 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。 此示例工作流演示如何在作业中使用 `go build` 和 `go test`：

```yaml{:copy}
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```

## 将工作流数据打包为构件

工作流程完成后，您可以上传产生的项目进行分析。 例如，您可能需要保存日志文件、核心转储、测试结果或屏幕截图。 以下示例演示如何使用 `upload-artifact` 操作上传测试结果。

有关详细信息，请参阅“[将工作流数据存储为构件](/actions/using-workflows/storing-workflow-data-as-artifacts)”。

```yaml{:copy}
name: Upload Go test results

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      - name: Install dependencies
        run: go get .
      - name: Test with Go
        run: go test -json > TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
      - name: Upload Go test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Go-results-{% raw %}${{ matrix.go-version }}{% endraw %}
          path: TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
```
