---
title: Building and testing .NET
intro: You can create a continuous integration (CI) workflow to build and test your .NET project.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introduction

This guide shows you how to build, test, and publish a .NET package.

{% if currentVersion == "github-ae@latest" %} To build and test your .NET project on {% data variables.product.prodname_ghe_managed %}, you will need to create a custom operating system image that includes the .NET Core SDK. For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %} {% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, which includes the .NET Core SDK. For a full list of up-to-date software and the preinstalled versions of .NET Core SDK, see [software installed on {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners).
{% endif %}

### 빌드전 요구 사양

You should already be familiar with YAML syntax and how it's used with {% data variables.product.prodname_actions %}. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

We recommend that you have a basic understanding of the .NET Core SDK. For more information, see [Getting started with .NET](https://dotnet.microsoft.com/learn).

### Starting with the .NET workflow template

{% data variables.product.prodname_dotcom %} provides a .NET workflow template that should work for most .NET projects, and this guide includes examples that show you how to customize this template. For more information, see the [.NET workflow template](https://github.com/actions/setup-dotnet).

To get started quickly, add the template to the `.github/workflows` directory of your repository.

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
    - name: Setup .NET Core SDK ${{ matrix.dotnet-version }}
      uses: actions/setup-dotnet@v1.7.2
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
      uses: actions/setup-dotnet@v1.7.2
      with:
        dotnet-version: ${{ matrix.dotnet-version }}
    # You can test your matrix by printing the current dotnet version
    - name: Display dotnet version
      run: dotnet --version
```
{% endraw %}

#### Using a specific .NET version

You can configure your job to use a specific version of .NET, such as `3.1.3`. Alternatively, you can use semantic version syntax to get the latest minor release. This example uses the latest minor release of .NET 3.

{% raw %}
```yaml
    - name: Setup .NET 3.x
      uses: actions/setup-dotnet@v2
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x' 
```
{% endraw %}

### Installing dependencies

{% data variables.product.prodname_dotcom %}-hosted runners have the NuGet package manager installed. You can use the dotnet CLI to install dependencies from the NuGet package registry before building and testing your code. For example, the YAML below installs the `Newtonsoft` package.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.7.2
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```
{% endraw %}

{% if currentVersion == "free-pro-team@latest" %}

#### Caching dependencies

You can cache NuGet dependencies using a unique key, which allows you to restore the dependencies for future workflows with the [`cache`](https://github.com/marketplace/actions/cache) action. For example, the YAML below installs the `Newtonsoft` package.

For more information, see "[Caching dependencies to speed up workflows](/actions/guides/caching-dependencies-to-speed-up-workflows)."

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.7.2
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

**Note:** Depending on the number of dependencies, it may be faster to use the dependency cache. Projects with many large dependencies should see a performance increase as it cuts down the time required for downloading. Projects with fewer dependencies may not see a significant performance increase and may even see a slight decrease due to how NuGet installs cached dependencies. The performance varies from project to project.

{% endnote %}

{% endif %}

### Building and testing your code

You can use the same commands that you use locally to build and test your code. This example demonstrates how to use `dotnet build` and `dotnet test` in a job:

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.7.2
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

### Packaging workflow data as artifacts

After a workflow completes, you can upload the resulting artifacts for analysis. For example, you may need to save log files, core dumps, test results, or screenshots. The following example demonstrates how you can use the `upload-artifact` action to upload test results.

For more information, see "[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

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
        uses: actions/setup-dotnet@v1.7.2
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

### Publishing to package registries

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
    - run: dotnet build --configuration Release <my project>
    - name: Create the package
    run: dotnet pack --configuration Release <my project>
    - name: Publish the package to GPR
    run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
{% endraw %}
