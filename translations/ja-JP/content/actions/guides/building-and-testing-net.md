---
title: .NETでのビルドとテスト
intro: .NETプロジェクトのビルドとテストのための継続的インテグレーション（CI）ワークフローを作成できます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

このガイドは、.NETパッケージのビルド、テスト、公開の方法を紹介します。

{% if currentVersion == "github-ae@latest" %}{% data variables.product.prodname_ghe_managed %} で.NETプロジェクトをビルドしてテストするには、.NET Core SDKを含むカスタムオペレーティングシステムイメージを作成する必要があります。 {% data variables.actions.hosted_runner %} に必要なソフトウェアがインストールされていることを確認する方法については、「[カスタムイメージの作成](/actions/using-github-hosted-runners/creating-custom-images)」を参照してください。
{% else %} {% data variables.product.prodname_dotcom %} ホストランナーには、.NET Core SDKを含むソフトウェアがプリインストールされたツールキャッシュがあります。 最新のソフトウェアとプリインストールされたバージョンの.NET Core SDKの完全なリストについては、[{% data variables.product.prodname_dotcom %}ホストランナー上にインストールされているソフトウェア](/actions/reference/specifications-for-github-hosted-runners)を参照してください。
{% endif %}

### 必要な環境

YAMLの構文と、{% data variables.product.prodname_actions %}でのYAMLの使われ方に馴染んでいる必要があります。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)」を参照してください。

.NET Core SDKの基本的な理解をしておくことをおすすめします。 詳細は「[Getting started with .NET](https://dotnet.microsoft.com/learn)」を参照してください。

### .NETワークフローテンプレートを使い始める

{% data variables.product.prodname_dotcom %}は、ほとんどの.NETプロジェクトで動作する.NETワークフローテンプレートを提供しており、このガイドにはこのテンプレートのカスタマイズ方法を示す例が含まれています。 詳しい情報については[.NETワークフローテンプレート](https://github.com/actions/setup-dotnet)を参照してください。

手早く始めるために、テンプレートをリポジトリの`.github/workflows`ディレクトリに追加してください。

{% raw %}
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

### .NETのバージョンの指定

{% data variables.product.prodname_dotcom %}ホストランナーにプリインストールされたバージョンの.NET Core SDKを使うには、`setup-dotnet`アクションを使ってください。 このアクションは各ランナーのツールキャッシュから指定されたバージョンの.NETを見つけ、必要なバイナリを`PATH`に追加します。 これらの変更は、ジョブの残りの部分で保持されます。

`setup-dotnet`アクションは、{% data variables.product.prodname_actions %}で.NETを使うための推奨される方法です。これは、それによって様々なランナーや様々なバージョンの.NETに渡って一貫した振る舞いが保証されるためです。 セルフホストランナーを使っている場合は、.NETをインストールして`PATH`に追加しなければなりません。 詳しい情報については[`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk)アクションを参照してください。

#### 複数の.NETバージョンの利用

{% raw %}
```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet: [ '3.0', '3.1.x', '5.0.x' ]

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

#### 特定のバージョンの.NETの利用

`3.1.3`というような、特定のバージョンの.NETを使うようにジョブを設定できます。 あるいは、最新のマイナーリリースを取得するためにセマンティックバージョン構文を使うこともできます。 この例では.NET 3の最新のマイナーリリースを使っています。

{% raw %}
```yaml
    - name: Setup .NET 3.x
      uses: actions/setup-dotnet@v2
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x' 
```
{% endraw %}

### 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、NuGetパッケージマネージャーがインストールされています。 コードをビルドしてテストする前に、dotnetCLIを使って依存関係をNuGetパッケージレジストリからインストールしておくことができます。 たとえば、以下のYAMLは`Newtonsoft`パッケージをインストールします。

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

#### 依存関係のキャッシング

ユニークなキーを使ってNuGetｎ依存関係をキャッシュしておくことができ、そうすることで将来のワークフローで[`cache`](https://github.com/marketplace/actions/cache)アクションによってその依存関係をリストアできます。 たとえば、以下のYAMLは`Newtonsoft`パッケージをインストールします。

詳しい情報については、「[ワークフローを高速化するための依存関係のキャッシュ](/actions/guides/caching-dependencies-to-speed-up-workflows)」を参照してください。

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
    # 対応する要件ファイルのキャッシュヒットがあるかどうかを確認する
    key: ${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```
{% endraw %}

{% note %}

**ノート：** 依存関係の数によっては、依存関係キャッシュを使う方が高速になることがあります。 多くの大きな依存関係を持つプロジェクトでは、ダウンロードに必要な時間を節約できるので、パフォーマンスの向上が見られるでしょう。 依存関係が少ないプロジェクトでは、大きなパフォーマンスの向上は見られないかもしれず、NuGetがキャッシュされた依存関係をインストールする方法のために、パフォーマンスがやや低下さえするかもしれません。 パフォーマンスはプロジェクトによって異なります。

{% endnote %}

{% endif %}

### コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。 以下の例は、ジョブで`dotnet build`と`dotnet test`を使う方法を示します。

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

### 成果物としてのワークフローのデータのパッケージ化

ワークフローが完了すると、結果の成果物を分析のためにアップロードできます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 以下の例は、`upload-artifact`アクションを使ってテスト結果をアップロードする方法を示しています。

詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

{% raw %}
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

### パッケージレジストリへの公開

CIテストにパスしたら、Dotnetパッケージをパッケージレジストリに公開するようにワークフローを設定できます。 バイナリを公開するのに必要なトークンや認証情報を保存するために、リポジトリシークレットを使うことができます。 以下の例では、`dotnet core cli`を使ってパッケージを作成し、{% data variables.product.prodname_registry %}に公開しています。

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
