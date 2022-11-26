---
title: .NETでのビルドとテスト
intro: .NETプロジェクトのビルドとテストのための継続的インテグレーション（CI）ワークフローを作成できます。
redirect_from:
  - /actions/guides/building-and-testing-net
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Build & test .NET
ms.openlocfilehash: eadb00516976159f2efffcaa04cb4b46471c527f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063619'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、.NETパッケージのビルド、テスト、公開の方法を紹介します。

{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} で .NET プロジェクトをビルドしてテストするには、.NET Core SDK が必要です。 {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} ホステッド ランナーにはツール キャッシュとプレインストールされたソフトウェアがあり、それには .NET Core SDK が含まれます。 最新のソフトウェアの完全な一覧と、.NET Core SDK のプレインストールされたバージョンについては、[{% data variables.product.prodname_dotcom %} ホステッド ランナーにインストールされているソフトウェア](/actions/reference/specifications-for-github-hosted-runners)に関するページを参照してください。
{% endif %}

## 前提条件

YAMLの構文と、{% data variables.product.prodname_actions %}でのYAMLの使われ方に馴染んでいる必要があります。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)に関するページを参照してください。

.NET Core SDKの基本的な理解をしておくことをおすすめします。 詳しくは、「[.NET の概要](https://dotnet.microsoft.com/learn)」をご覧ください。

## .NET スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} には、ほとんどの .NET プロジェクトで動作する .NET スターター ワークフローが用意されており、このガイドにはこのスターター ワークフローのカスタマイズ方法を示す例が含まれています。 詳細については、「[.NET スターター ワークフロー](https://github.com/actions/setup-dotnet)」を参照してください。

すぐに作業を開始するには、リポジトリの `.github/workflows` ディレクトリにスターター ワークフローを追加します。

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

## .NETのバージョンの指定

{% data variables.product.prodname_dotcom %} ホステッド ランナーにプレインストールされたバージョンの .NET Core SDK を使うには、`setup-dotnet` アクションを使います。 このアクションは、各ランナーのツール キャッシュから特定のバージョンの .NET を見つけて、必要なバイナリを `PATH` に追加します。 これらの変更は、ジョブの残りの部分で保持されます。

`setup-dotnet` アクションを使用すると、異なるランナーおよび .NET の異なるバージョンの間で一貫した動作が保証されるため、{% data variables.product.prodname_actions %} で NET を使用する場合の推奨される方法です。 セルフホステッド ランナーを使用している場合は、.NET をインストールし、それを `PATH` に追加する必要があります。 詳細については、[`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) アクションを参照してください。

### 複数の.NETバージョンの利用

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

### 特定のバージョンの.NETの利用

`3.1.3` のような特定のバージョンの .NET を使うようにジョブを構成できます。 あるいは、最新のマイナーリリースを取得するためにセマンティックバージョン構文を使うこともできます。 この例では.NET 3の最新のマイナーリリースを使っています。

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、NuGetパッケージマネージャーがインストールされています。 コードをビルドしてテストする前に、dotnetCLIを使って依存関係をNuGetパッケージレジストリからインストールしておくことができます。 たとえば、次の YAML は `Newtonsoft` パッケージをインストールします。

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

### 依存関係のキャッシング

一意のキーを使って NuGet の依存関係をキャッシュすることができ、これにより将来のワークフローで [`cache`](https://github.com/marketplace/actions/cache) アクションによってその依存関係を復元できます。 たとえば、次の YAML は `Newtonsoft` パッケージをインストールします。

詳細については、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/guides/caching-dependencies-to-speed-up-workflows)」を参照してください。

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

**注:** 依存関係の数によっては、依存関係キャッシュを使う方が速い場合があります。 多くの大きな依存関係を持つプロジェクトでは、ダウンロードに必要な時間を節約できるので、パフォーマンスの向上が見られるでしょう。 依存関係が少ないプロジェクトでは、大きなパフォーマンスの向上は見られないかもしれず、NuGetがキャッシュされた依存関係をインストールする方法のために、パフォーマンスがやや低下さえするかもしれません。 パフォーマンスはプロジェクトによって異なります。

{% endnote %}

{% endif %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。 この例では、ジョブで `dotnet build` と `dotnet test` を使用する方法を示します。

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

## 成果物としてのワークフローのデータのパッケージ化

ワークフローが完了すると、結果の成果物を分析のためにアップロードできます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 次の例では、`upload-artifact` アクションを使ってテスト結果をアップロードする方法を示します。

詳細については、「[アーティファクトを使用してワークフロー データを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

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

## パッケージレジストリへの公開

CI テストに合格したら .NET パッケージをパッケージ レジストリに公開するように、ワークフローを構成できます。 バイナリを公開するのに必要なトークンや認証情報を保存するために、リポジトリシークレットを使うことができます。 次の例では、`dotnet core cli` を使ってパッケージを作成し、{% data variables.product.prodname_registry %} に公開します。

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
