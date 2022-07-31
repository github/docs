---
title: 构建和测试 .NET
intro: 您可以创建持续集成 (CI) 工作流程来构建和测试您的 .NET 项目。
redirect_from:
  - /actions/guides/building-and-testing-net
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 构建和测试 .NET
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南介绍如何构建、测试和发布 .NET 包。

{% ifversion ghae %} 若要在 {% data variables.product.prodname_ghe_managed %} 上构建和测试 .NET 项目，需要 .NET Core SDK。 {% data reusables.actions.self-hosted-runners-software %}
{% else %} {% data variables.product.prodname_dotcom %} 托管的运行器有工具缓存预安装的软件，包括 .NET Core SDK。 有关最新版软件以及 .NET Core SDK 预安装版本的完整列表，请参阅 [{% data variables.product.prodname_dotcom %} 自托管运行器上安装的软件](/actions/reference/specifications-for-github-hosted-runners)。
{% endif %}

## 基本要求

您应该已经熟悉 YAML 语法及其如何与 {% data variables.product.prodname_actions %} 结合使用。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”。

建议您对 .NET Core SDK 有个基本的了解。 更多信息请参阅“[开始使用 .NET](https://dotnet.microsoft.com/learn)”。

## 使用 .NET 入门工作流程

{% data variables.product.prodname_dotcom %} 提供有 .NET 入门工作流程，应适合大多数 .NET 项目，本指南包括演示如何自定义此入门工作流程的示例。 更多信息请参阅 [.NET 入门工作流程](https://github.com/actions/setup-dotnet)。

要快速开始，请将入门工作流程添加到仓库的 `.github/workflows` 目录中。

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: ['3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup .NET Core SDK {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      - name: Install dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --configuration Release --no-restore
      - name: Test
        run: dotnet test --no-restore --verbosity normal
```

## 指定 .NET 版本

要在 {% data variables.product.prodname_dotcom %} 托管的运行器上使用预安装的 .NET Core SDK 版本，请使用 `setup-dotnet` 操作。 此操作从每个运行器上的工具缓存中查找特定版本的 .NET，并将必要的二进制文件添加到 `PATH`。 这些更改将持续用于作业的其余部分。

`setup-dotnet` 操作是 .NET 与 {% data variables.product.prodname_actions %} 结合使用时的推荐方式，因为它能确保不同运行器和不同版本的 .NET 行为一致。 如果使用自托管运行器，则必须安装 .NET 并将其添加到 `PATH`。 更多信息请参阅 [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) 操作。

### 使用多个 .NET 版本

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup dotnet {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      # You can test your matrix by printing the current dotnet version
      - name: Display dotnet version
        run: dotnet --version
```

### 使用特定的 .NET 版本

您可以将作业配置为使用 .NET 的特定版本，例如 3.1.3 `3.1.3`。 或者，您也可以使用语义版本语法来获得最新的次要版本。 此示例使用 .NET 3 最新的次要版本。

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## 安装依赖项

{% data variables.product.prodname_dotcom %} 托管的运行器安装了 NuGet 软件包管理器。 在构建和测试代码之前，您可以使用 dotnet CLI 从 NuGet 软件包注册表安装依赖项。 例如，下面的 YAML 安装 `Newtonsoft` 软件包。

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% ifversion actions-caching %}

### 缓存依赖项

您可以使用唯一密钥缓存 NuGet 依赖项，以在使用 [`cache`](https://github.com/marketplace/actions/cache) 操作运行未来的工作流程时恢复依赖项。 例如，下面的 YAML 安装 `Newtonsoft` 软件包。

更多信息请参阅“[缓存依赖项以加快工作流程](/actions/guides/caching-dependencies-to-speed-up-workflows)”。

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget{% endraw %}
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% note %}

**注意：**取决于依赖项的数量，使用依赖项缓存可能会更快。 有很多大型依赖项的项目应该能看到性能明显提升，因为下载所需的时间会缩短。 依赖项较少的项目可能看不到明显的性提升，甚至可能由于 NuGet 安装缓存依赖项的方式而看到性能略有下降。 性能因项目而异。

{% endnote %}

{% endif %}

## 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。 此示例演示如何在作业中使用 `dotnet build` 和 `dotnet test`：

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```

## 将工作流数据打包为构件

工作流程完成后，您可以上传产生的项目进行分析。 例如，您可能需要保存日志文件、核心转储、测试结果或屏幕截图。 下面的示例演示如何使用 `upload-artifact` 操作来上传测试结果。

更多信息请参阅“[使用构件持久化工作流程](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

      steps:
        - uses: {% data reusables.actions.action-checkout %}
        - name: Setup dotnet
          uses: {% data reusables.actions.action-setup-dotnet %}
          with:
            dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        - name: Install dependencies
          run: dotnet restore
        - name: Test with dotnet
          run: dotnet test --logger trx --results-directory {% raw %}"TestResults-${{ matrix.dotnet-version }}"{% endraw %}
        - name: Upload dotnet test results
          uses: {% data reusables.actions.action-upload-artifact %}
          with:
            name: {% raw %}dotnet-results-${{ matrix.dotnet-version }}{% endraw %}
            path: {% raw %}TestResults-${{ matrix.dotnet-version }}{% endraw %}
          # Use always() to always run this step to publish test results when there are test failures
          if: {% raw %}${{ always() }}{% endraw %}
```

## 发布到包注册表

您可以配置工作流程在 CI 测试通过后将 .NET 包发布到包注册表。 您可以使用仓库机密来存储发布二进制文件所需的任何令牌或凭据。 下面的示例使用 `dotnet core cli`创建并发布软件包到 {% data variables.product.prodname_registry %}。

```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: '3.1.x' # SDK Version to use.
          source-url: https://nuget.pkg.github.com/<owner>/index.json
        env:
          NUGET_AUTH_TOKEN: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
      - run: dotnet build --configuration Release <my project>
      - name: Create the package
        run: dotnet pack --configuration Release <my project>
      - name: Publish the package to GPR
        run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
