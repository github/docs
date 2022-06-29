---
title: Building and testing Go
intro: You can create a continuous integration (CI) workflow to build and test your Go project.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

This guide shows you how to build, test, and publish a Go package.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %} {% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, which includes the dependencies for Go. For a full list of up-to-date software and the preinstalled versions of Go, see "[About {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)."
{% endif %}

## 基本要求

您应该已经熟悉 YAML 语法及其如何与 {% data variables.product.prodname_actions %} 结合使用。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/using-workflows/workflow-syntax-for-github-actions)”。

We recommend that you have a basic understanding of the Go language. For more information, see [Getting started with Go](https://golang.org/doc/tutorial/getting-started).

## Using the Go starter workflow

{% data variables.product.prodname_dotcom %} provides a Go starter workflow that should work for most Go projects. 本指南包含可用于自定义入门工作流程的示例。 For more information, see the [Go starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/go.yml).

要快速开始，请将入门工作流程添加到仓库的 `.github/workflows` 目录中。

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

## Specifying a Go version

The easiest way to specify a Go version is by using the `setup-go` action provided by {% data variables.product.prodname_dotcom %}. For more information see, the [`setup-go` action](https://github.com/actions/setup-go/).

To use a preinstalled version of Go on a {% data variables.product.prodname_dotcom %}-hosted runner, pass the relevant version to the `go-version` property of the `setup-go` action. This action finds a specific version of Go from the tools cache on each runner, and adds the necessary binaries to `PATH`. 这些更改将持续用于作业的其余部分。

The `setup-go` action is the recommended way of using Go with {% data variables.product.prodname_actions %}, because it helps ensure consistent behavior across different runners and different versions of Go. If you are using a self-hosted runner, you must install Go and add it to `PATH`.

### Using multiple versions of Go

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

### Using a specific Go version

You can configure your job to use a specific version of Go, such as `1.16.2`. 或者，您也可以使用语义版本语法来获得最新的次要版本。 This example uses the latest patch release of Go 1.16:

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## 安装依赖项

You can use `go get` to install dependencies:

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

You can cache and restore the dependencies using the [`setup-go` action](https://github.com/actions/setup-go). By default, caching is disabled, but you can set the `cache` parameter to `true` to enable it.

When caching is enabled, the `setup-go` action searches for the dependency file, `go.sum`, in the repository root and uses the hash of the dependency file as a part of the cache key.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

Alternatively, you can use the `cache-dependency-path` parameter for cases when multiple dependency files are used, or when they are located in different subdirectories.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

如果您有自定义要求或需要更精确的缓存控制，则可以使用 [`cache` 操作](https://github.com/marketplace/actions/cache)。 更多信息请参阅“[缓存依赖项以加快工作流程](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”。

{% endif %}

## 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。 This example workflow demonstrates how to use `go build` and `go test` in a job:

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

工作流程完成后，您可以上传产生的项目进行分析。 例如，您可能需要保存日志文件、核心转储、测试结果或屏幕截图。 下面的示例演示如何使用 `upload-artifact` 操作来上传测试结果。

For more information, see "[Storing workflow data as artifacts](/actions/using-workflows/storing-workflow-data-as-artifacts)."

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
