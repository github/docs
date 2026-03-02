---
title: Building and testing .NET
intro: Learn how to create a continuous integration (CI) workflow to build and test your .NET project.
redirect_from:
  - /actions/guides/building-and-testing-net
  - /actions/automating-builds-and-tests/building-and-testing-net
  - /actions/use-cases-and-examples/building-and-testing/building-and-testing-net
  - /actions/how-tos/use-cases-and-examples/building-and-testing/building-and-testing-net
  - /actions/how-tos/writing-workflows/building-and-testing/building-and-testing-net
  - /actions/tutorials/build-and-test-code/building-and-testing-net
versions:
﻿<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="15.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <Import Project="$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')" />
  <PropertyGroup>
    <Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
    <Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform>
    <ProjectGuid>{A4A3E662-C48B-4B34-BB25-B89E47234895}</ProjectGuid>
    <OutputType>Library</OutputType>
    <AppDesignerFolder>Properties</AppDesignerFolder>
    <RootNamespace>CodeTrack.Plugins</RootNamespace>
    <AssemblyName>CodeTrack.Plugins</AssemblyName>
    <TargetFrameworkVersion>v4.5</TargetFrameworkVersion>
    <FileAlignment>512</FileAlignment>
    <SccProjectName>SAK</SccProjectName>
    <SccLocalPath>SAK</SccLocalPath>
    <SccAuxPath>SAK</SccAuxPath>
    <SccProvider>SAK</SccProvider>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' ">
    <DebugSymbols>true</DebugSymbols>
    <DebugType>full</DebugType>
    <Optimize>false</Optimize>
    <OutputPath>bin\Debug\</OutputPath>
    <DefineConstants>DEBUG;TRACE</DefineConstants>
    <ErrorReport>prompt</ErrorReport>
    <WarningLevel>4</WarningLevel>
    <AllowUnsafeBlocks>true</AllowUnsafeBlocks>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Release|AnyCPU' ">
    <DebugType>pdbonly</DebugType>
    <Optimize>true</Optimize>
    <OutputPath>bin\Release\</OutputPath>
    <DefineConstants>TRACE</DefineConstants>
    <ErrorReport>prompt</ErrorReport>
    <WarningLevel>4</WarningLevel>
    <AllowUnsafeBlocks>true</AllowUnsafeBlocks>
  </PropertyGroup>
  <ItemGroup>
    <Reference Include="CodeTrack.Interface, Version=1.0.0.0, Culture=neutral, processorArchitecture=MSIL">
      <HintPath>packages\CodeTrack.Interface.1.0.0-alpha\lib\net45\CodeTrack.Interface.dll</HintPath>
    </Reference>
    <Reference Include="MahApps.Metro, Version=1.5.0.23, Culture=neutral, PublicKeyToken=f4fb5a3c4d1e5b4f, processorArchitecture=MSIL">
      <HintPath>packages\MahApps.Metro.1.5.0\lib\net45\MahApps.Metro.dll</HintPath>
    </Reference>
    <Reference Include="PresentationCore" />
    <Reference Include="PresentationFramework" />
    <Reference Include="System" />
    <Reference Include="System.ComponentModel.Composition" />
    <Reference Include="System.Core" />
    <Reference Include="System.Drawing" />
    <Reference Include="System.Reactive.Core, Version=2.2.5.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35, processorArchitecture=MSIL">
      <HintPath>packages\Rx-Core.2.2.5\lib\net45\System.Reactive.Core.dll</HintPath>
    </Reference>
    <Reference Include="System.Reactive.Interfaces, Version=2.2.5.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35, processorArchitecture=MSIL">
      <HintPath>packages\Rx-Interfaces.2.2.5\lib\net45\System.Reactive.Interfaces.dll</HintPath>
    </Reference>
    <Reference Include="System.Reactive.Linq, Version=2.2.5.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35, processorArchitecture=MSIL">
      <HintPath>packages\Rx-Linq.2.2.5\lib\net45\System.Reactive.Linq.dll</HintPath>
    </Reference>
    <Reference Include="System.Reactive.PlatformServices, Version=2.2.5.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35, processorArchitecture=MSIL">
      <HintPath>packages\Rx-PlatformServices.2.2.5\lib\net45\System.Reactive.PlatformServices.dll</HintPath>
    </Reference>
    <Reference Include="System.Windows.Forms" />
    <Reference Include="System.Windows.Interactivity, Version=4.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35, processorArchitecture=MSIL">
      <HintPath>packages\MahApps.Metro.1.5.0\lib\net45\System.Windows.Interactivity.dll</HintPath>
      <Private>True</Private>
    </Reference>
    <Reference Include="System.Xaml" />
    <Reference Include="System.Xml.Linq" />
    <Reference Include="System.Data.DataSetExtensions" />
    <Reference Include="Microsoft.CSharp" />
    <Reference Include="System.Data" />
    <Reference Include="System.Net.Http" />
    <Reference Include="System.Xml" />
    <Reference Include="WindowsBase" />
  </ItemGroup>
  <ItemGroup>
    <Compile Include="Common\BaseCommand.cs" />
    <Compile Include="Common\BaseConverter.cs" />
    <Compile Include="Common\GenericCommand.cs" />
    <Compile Include="Common\NotifyingBase.cs" />
    <Compile Include="Common\ObservableHelper.cs" />
    <Compile Include="Console\ConsolePlugin.cs" />
    <Compile Include="Console\WriteEvent.cs" />
    <Compile Include="Console\WriteLineEvent.cs" />
    <Compile Include="Controls\CallList\BoolToVisibilityConverter.cs" />
    <Compile Include="Controls\CallList\CallInfoConverter.cs" />
    <Compile Include="Controls\CallList\BuildOverviewConverter.cs" />
    <Compile Include="Controls\CallList\CallListControl.cs" />
    <Compile Include="Controls\CallList\OverviewPanel.cs" />
    <Compile Include="Generic\GenericPlugin.cs" />
    <Compile Include="Generic\NullToVisibilityConverter.cs" />
    <Compile Include="Properties\AssemblyInfo.cs" />
    <Compile Include="ValuePlugins\TimeSpanValueConverter.cs" />
    <Compile Include="ValuePlugins\DateTimeValueConverter.cs" />
  </ItemGroup>
  <ItemGroup>
    <Resource Include="Images\appbar.base.png" />
    <Resource Include="Images\appbar.console.png" />
  </ItemGroup>
  <ItemGroup>
    <Page Include="Console\ConsolePlugin.xaml">
      <Generator>MSBuild:Compile</Generator>
      <SubType>Designer</SubType>
    </Page>
    <Page Include="Controls\CallList\CallListControl.xaml">
      <Generator>MSBuild:Compile</Generator>
      <SubType>Designer</SubType>
    </Page>
    <Page Include="Resources.xaml">
      <Generator>MSBuild:Compile</Generator>
      <SubType>Designer</SubType>
    </Page>
    <Page Include="Generic\GenericPlugin.xaml">
      <Generator>MSBuild:Compile</Generator>
      <SubType>Designer</SubType>
    </Page>
  </ItemGroup>
  <ItemGroup>
    <None Include="packages.config" />
    <EmbeddedResource Include="RuleSets\timestamp.ruleset.json" />
    <EmbeddedResource Include="RuleSets\timespan.ruleset.json" />
    <EmbeddedResource Include="RuleSets\console.ruleset.json" />
  </ItemGroup>
  <ItemGroup>
    <Resource Include="Images\layers.png" />
  </ItemGroup>
  <ItemGroup>
    <Resource Include="Images\appbar.filter.png" />
  </ItemGroup>
  <ItemGroup>
    <Resource Include="Images\datetime.png" />
    <Resource Include="Images\timespan.png" />
  </ItemGroup>
  <Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" />
  <PropertyGroup>
    <PostBuildEvent>xcopy $(TargetDir)*.dll $(SolutionDir)\Output\$(ConfigurationName)\ /Y</PostBuildEvent>
  </PropertyGroup>
</Project>
shortTitle: .NET
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to build, test, and publish a .NET package.

 {% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, which includes the .NET Core SDK. For a full list of up-to-date software and the preinstalled versions of .NET Core SDK, see [software installed on {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners).

## Prerequisites

You should already be familiar with YAML syntax and how it's used with {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).

We recommend that you have a basic understanding of the .NET Core SDK. For more information, see [Getting started with .NET](https://dotnet.microsoft.com/learn).

## Using a .NET workflow template

{% data reusables.actions.workflow-templates-get-started %}

{% data variables.product.prodname_dotcom %} provides a workflow template for .NET that should work for most .NET projects. The subsequent sections of this guide give examples of how you can customize this workflow template.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "Choose a workflow" page shows a selection of recommended workflow templates. Search for "dotnet".
1. On the ".NET" workflow, click **Configure**.

{%- ifversion ghes %}

   If you don't find the ".NET" workflow template, copy the following workflow code to a new file called `dotnet.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: .NET

   on:
     push:
       branches: [ "main" ]
     pull_request:
       branches: [ "main" ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
       - uses: {% data reusables.actions.action-checkout %}
       - name: Setup .NET
         uses: {% data reusables.actions.action-setup-dotnet %}
         with:
           dotnet-version: 6.0.x
       - name: Restore dependencies
         run: dotnet restore
       - name: Build
         run: dotnet build --no-restore
       - name: Test
         run: dotnet test --no-build --verbosity normal
   ```

{%- endif %}

1. Edit the workflow as required. For example, change the .NET version.
1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `dotnet.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

## Specifying a .NET version

To use a preinstalled version of the .NET Core SDK on a {% data variables.product.prodname_dotcom %}-hosted runner, use the `setup-dotnet` action. This action finds a specific version of .NET from the tools cache on each runner, and adds the necessary binaries to `PATH`. These changes will persist for the remainder of the job.

The `setup-dotnet` action is the recommended way of using .NET with {% data variables.product.prodname_actions %}, because it ensures consistent behavior across different runners and different versions of .NET. If you are using a self-hosted runner, you must install .NET and add it to `PATH`. For more information, see the [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) action.

### Using multiple .NET versions

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.1.x', '6.0.x' ]

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

### Using a specific .NET version

You can configure your job to use a specific version of .NET, such as `6.0.22`. Alternatively, you can use semantic version syntax to get the latest minor release. This example uses the latest minor release of .NET 6.

```yaml
    - name: Setup .NET 6.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '6.x'
```

## Installing dependencies

{% data variables.product.prodname_dotcom %}-hosted runners have the NuGet package manager installed. You can use the dotnet CLI to install dependencies from the NuGet package registry before building and testing your code. For example, the YAML below installs the `Newtonsoft` package.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '6.0.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

### Caching dependencies

You can cache NuGet dependencies for future workflows using the optional `cache` input. For example, the YAML below caches the NuGet `global-packages` folder, and then installs the `Newtonsoft` package. A second optional input, `cache-dependency-path`, can be used to specify the path to a dependency file: `packages.lock.json`.

For more information, see [AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '6.x'
    cache: true
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

> [!NOTE]
> Depending on the number of dependencies, it may be faster to use the dependency cache. Projects with many large dependencies should see a performance increase as it cuts down the time required for downloading. Projects with fewer dependencies may not see a significant performance increase and may even see a slight decrease due to how NuGet installs cached dependencies. The performance varies from project to project.

## Building and testing your code

You can use the same commands that you use locally to build and test your code. This example demonstrates how to use `dotnet build` and `dotnet test` in a job:

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '6.0.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build --no-restore
- name: Test with the dotnet CLI
  run: dotnet test --no-build
```

## Packaging workflow data as artifacts

After a workflow completes, you can upload the resulting artifacts for analysis. For example, you may need to save log files, core dumps, test results, or screenshots. The following example demonstrates how you can use the `upload-artifact` action to upload test results.

For more information, see [AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts).

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.1.x', '6.0.x' ]

      steps:
        - uses: {% data reusables.actions.action-checkout %}
        - name: Setup dotnet
          uses: {% data reusables.actions.action-setup-dotnet %}
          with:
            dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        - name: Install dependencies
          run: dotnet restore
        - name: Test with dotnet
          run: dotnet test --no-restore --logger trx --results-directory {% raw %}"TestResults-${{ matrix.dotnet-version }}"{% endraw %}
        - name: Upload dotnet test results
          uses: {% data reusables.actions.action-upload-artifact %}
          with:
            name: {% raw %}dotnet-results-${{ matrix.dotnet-version }}{% endraw %}
            path: {% raw %}TestResults-${{ matrix.dotnet-version }}{% endraw %}
          # Use always() to always run this step to publish test results when there are test failures
          if: {% raw %}${{ always() }}{% endraw %}
```

## Publishing to package registries

You can configure your workflow to publish your .NET package to a package registry when your CI tests pass. You can use repository secrets to store any tokens or credentials needed to publish your binary. The following example creates and publishes a package to {% data variables.product.prodname_registry %} using `dotnet core cli`.

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
          dotnet-version: '6.0.x' # SDK Version to use.
          source-url: https://nuget.pkg.github.com/<owner>/index.json
        env:
          NUGET_AUTH_TOKEN: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
      - run: dotnet build --configuration Release <my project>
      - name: Create the package
        run: dotnet pack --configuration Release <my project>
      - name: Publish the package to GPR
        run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
