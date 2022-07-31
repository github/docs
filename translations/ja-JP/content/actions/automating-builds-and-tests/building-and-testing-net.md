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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、.NETパッケージのビルド、テスト、公開の方法を紹介します。

{% ifversion ghae %} To build and test your .NET project on {% data variables.product.prodname_ghe_managed %}, the .NET Core SDK is required. {% data reusables.actions.self-hosted-runners-software %}
{% else %} {% data variables.product.prodname_dotcom %} ホストランナーには、.NET Core SDKを含むソフトウェアがプリインストールされたツールキャッシュがあります。 最新のソフトウェアとプリインストールされたバージョンの.NET Core SDKの完全なリストについては、[{% data variables.product.prodname_dotcom %}ホストランナー上にインストールされているソフトウェア](/actions/reference/specifications-for-github-hosted-runners)を参照してください。
{% endif %}

## 必要な環境

YAMLの構文と、{% data variables.product.prodname_actions %}でのYAMLの使われ方に馴染んでいる必要があります。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)」を参照してください。

.NET Core SDKの基本的な理解をしておくことをおすすめします。 詳細は「[Getting started with .NET](https://dotnet.microsoft.com/learn)」を参照してください。

## Using the .NET starter workflow

{% data variables.product.prodname_dotcom %} provides a .NET starter workflow that should work for most .NET projects, and this guide includes examples that show you how to customize this starter workflow. For more information, see the [.NET starter workflow](https://github.com/actions/setup-dotnet).

To get started quickly, add the starter workflow to the `.github/workflows` directory of your repository.

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

{% data variables.product.prodname_dotcom %}ホストランナーにプリインストールされたバージョンの.NET Core SDKを使うには、`setup-dotnet`アクションを使ってください。 このアクションは各ランナーのツールキャッシュから指定されたバージョンの.NETを見つけ、必要なバイナリを`PATH`に追加します。 これらの変更は、ジョブの残りの部分で保持されます。

`setup-dotnet`アクションは、{% data variables.product.prodname_actions %}で.NETを使うための推奨される方法です。これは、それによって様々なランナーや様々なバージョンの.NETに渡って一貫した振る舞いが保証されるためです。 セルフホストランナーを使っている場合は、.NETをインストールして`PATH`に追加しなければなりません。 詳しい情報については[`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk)アクションを参照してください。

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

`3.1.3`というような、特定のバージョンの.NETを使うようにジョブを設定できます。 あるいは、最新のマイナーリリースを取得するためにセマンティックバージョン構文を使うこともできます。 この例では.NET 3の最新のマイナーリリースを使っています。

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、NuGetパッケージマネージャーがインストールされています。 コードをビルドしてテストする前に、dotnetCLIを使って依存関係をNuGetパッケージレジストリからインストールしておくことができます。 たとえば、以下のYAMLは`Newtonsoft`パッケージをインストールします。

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

ユニークなキーを使ってNuGetｎ依存関係をキャッシュしておくことができ、そうすることで将来のワークフローで[`cache`](https://github.com/marketplace/actions/cache)アクションによってその依存関係をリストアできます。 たとえば、以下のYAMLは`Newtonsoft`パッケージをインストールします。

詳しい情報については、「[ワークフローを高速化するための依存関係のキャッシュ](/actions/guides/caching-dependencies-to-speed-up-workflows)」を参照してください。

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

**ノート：** 依存関係の数によっては、依存関係キャッシュを使う方が高速になることがあります。 多くの大きな依存関係を持つプロジェクトでは、ダウンロードに必要な時間を節約できるので、パフォーマンスの向上が見られるでしょう。 依存関係が少ないプロジェクトでは、大きなパフォーマンスの向上は見られないかもしれず、NuGetがキャッシュされた依存関係をインストールする方法のために、パフォーマンスがやや低下さえするかもしれません。 パフォーマンスはプロジェクトによって異なります。

{% endnote %}

{% endif %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。 以下の例は、ジョブで`dotnet build`と`dotnet test`を使う方法を示します。

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

ワークフローが完了すると、結果の成果物を分析のためにアップロードできます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 以下の例は、`upload-artifact`アクションを使ってテスト結果をアップロードする方法を示しています。

詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

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

You can configure your workflow to publish your .NET package to a package registry when your CI tests pass. バイナリを公開するのに必要なトークンや認証情報を保存するために、リポジトリシークレットを使うことができます。 以下の例では、`dotnet core cli`を使ってパッケージを作成し、{% data variables.product.prodname_registry %}に公開しています。

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
