---
title: Building and testing .NET
intro: You can create a continuous integration (CI) workflow to build and test your .NET project.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

### 简介

This guide shows you how to build, test, and publish a .NET package.

{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, which includes the .NET Core SDK. For a full list of up-to-date software and the preinstalled versions of .NET Core SDK, see [software installed on {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners).

### 基本要求

You should already be familiar with YAML syntax and how it's used with {% data variables.product.prodname_actions %}. 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”。

We recommend that you have a basic understanding of the .NET Core SDK. For more information, see [Getting started with .NET](https://dotnet.microsoft.com/learn).

### Starting with the .NET workflow template

{% data variables.product.prodname_dotcom %} provides a .NET workflow template that should work for most .NET projects, and this guide includes examples that show you how to customize this template. For more information, see the [.NET workflow template](https://github.com/actions/setup-dotnet).

要快速开始，请将模板添加到仓库的 `.github/workflows` 目录中。

{% raw %}
```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '2.2.103', '3.0', '3.1.x' ]

    steps:
    - uses: actions/checkout@v2
    - name: Setup .NET Core SDK ${{ matrix.dotnet }}
      uses: actions/setup-dotnet@v1.6.0
      with:
        dotnet-version: ${{ matrix.dotnet-version }}
    - name: Install dependencies
      run: dotnet restore
    - name: Build
      run: dotnet build --configuration Release --no-restore
    - name: Test
      run: dotnet test --no-restore --verbosity normal
```
{% endraw %}

### Specifying a .NET version

To use a preinstalled version of the .NET Core SDK on a {% data variables.product.prodname_dotcom %}-hosted runner, use the `setup-dotnet` action. This action finds a specific version of .NET from the tools cache on each runner, and adds the necessary binaries to `PATH`. These changes will persist for the remainder of the job.

The `setup-dotnet` action is the recommended way of using .NET with {% data variables.product.prodname_actions %}, because it ensures consistent behavior across different runners and different versions of .NET. If you are using a self-hosted runner, you must install .NET and add it to `PATH`. For more information, see the [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) action.

#### Using multiple .NET versions

{% raw %}
```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet: [ '2.2.103', '3.0', '3.1.x' ]

    steps:
    - uses: actions/checkout@v2
    - name: Setup dotnet ${{ matrix.dotnet-version }}
      uses: actions/setup-dotnet@v1.6.0
      with:
        dotnet-version: ${{ matrix.dotnet-version }}
    # You can test your matrix by printing the current dotnet version
    - name: Display dotnet version
      run: dotnet --version
```
{% endraw %}

#### Using a specific .NET version

You can configure your job to use a specific version of .NET, such as `3.1.3`. 或者，您也可以使用语义版本语法来获得最新的次要版本。 This example uses the latest minor release of .NET 3.

{% raw %}
```yaml
    - name: Setup .NET 3.x
      uses: actions/setup-dotnet@v2
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x' 
```
{% endraw %}

### 安装依赖项

{% data variables.product.prodname_dotcom %}-hosted runners have the NuGet package manager installed. You can use the dotnet CLI to install dependencies from the NuGet package registry before building and testing your code. For example, the YAML below installs the `Newtonsoft` package.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.6.0
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```
{% endraw %}

{% if currentVersion == "free-pro-team@latest" %}

#### 缓存依赖项

You can cache NuGet dependencies using a unique key, which allows you to restore the dependencies for future workflows with the [`cache`](https://github.com/marketplace/actions/cache) action. For example, the YAML below installs the `Newtonsoft` package.

更多信息请参阅“[缓存依赖项以加快工作流程](/actions/guides/caching-dependencies-to-speed-up-workflows)”。

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.6.0
  with:
    dotnet-version: '3.1.x'
- uses: actions/cache@v2
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: ${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```
{% endraw %}

{% note %}

**注意：**取决于依赖项的数量，使用依赖项缓存可能会更快。 有很多大型依赖项的项目应该能看到性能明显提升，因为下载所需的时间会缩短。 Projects with fewer dependencies may not see a significant performance increase and may even see a slight decrease due to how NuGet installs cached dependencies. 性能因项目而异。

{% endnote %}

{% endif %}

### 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。 This example demonstrates how to use `dotnet build` and `dotnet test` in a job:

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.6.0
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```
{% endraw %}

### 将工作流数据打包为构件

After a workflow completes, you can upload the resulting artifacts for analysis. 例如，您可能需要保存日志文件、核心转储、测试结果或屏幕截图。 The following example demonstrates how you can use the `upload-artifact` action to upload test results.

更多信息请参阅“[使用构件持久化工作流程](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

{% raw %}
```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '2.2.103', '3.0', '3.1.x' ]

      steps:
      - uses: actions/checkout@v2
      - name: Setup dotnet
        uses: actions/setup-dotnet@v1.6.0
        with:
          dotnet-version: ${{ matrix.dotnet-version }}
      - name: Install dependencies
        run: dotnet restore
      - name: Test with dotnet
        run: dotnet test --logger trx --results-directory "TestResults-${{ matrix.dotnet-version }}"
      - name: Upload dotnet test results
        uses: actions/upload-artifact@v2
        with:
          name: dotnet-results-${{ matrix.dotnet-version }}
          path: TestResults-${{ matrix.dotnet-version }}
        # Use always() to always run this step to publish test results when there are test failures
        if: ${{ always() }}
```
{% endraw %}

### 发布到包注册表

You can configure your workflow to publish your Dotnet package to a package registry when your CI tests pass. You can use repository secrets to store any tokens or credentials needed to publish your binary. The following example creates and publishes a package to {% data variables.product.prodname_registry %} using `dotnet core cli`.

{% raw %}
```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-dotnet@v1
    with:
        dotnet-version: '3.1.x' # SDK Version to use.
        source-url: https://nuget.pkg.github.com/<owner>/index.json
    env:
        NUGET_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    - run: dotnet build <my project>
    - name: Create the package
    run: dotnet pack --configuration Release <my project>
    - name: Publish the package to GPR
    run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
{% endraw %}
