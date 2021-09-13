---
title: Swift のビルドとテスト
intro: 継続的インテグレーション (CI) ワークフローを作成して、Swift プロジェクトをビルドおよびテストできます。
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

### はじめに

このガイドでは、Swift パッケージをビルドしてテストする方法を説明します。

{% if currentVersion == "github-ae@latest" %} {% data variables.product.prodname_ghe_managed %} で Swift プロジェクトをビルドしてテストするには、必要な Swift の依存関係を含むカスタムオペレーティングシステムイメージを作成する必要があります。 {% data variables.actions.hosted_runner %} に必要なソフトウェアがインストールされていることを確認する方法については、「[カスタムイメージの作成](/actions/using-github-hosted-runners/creating-custom-images)」を参照してください。
{% else %}{% data variables.product.prodname_dotcom %} ホストランナーには、ソフトウェアがプリインストールされたツールキャッシュがあり、Ubuntu および macOS ランナーには、Swift パッケージをビルドするための依存関係が含まれています。 最新のソフトウェアとプレインストールされたバージョンの Swift および Xcode の完全なリストについては、「[GitHub ホストランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)」を参照してください。{% endif %}

### 必要な環境

YAMLの構文と、{% data variables.product.prodname_actions %}でのYAMLの使われ方に馴染んでいる必要があります。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)」を参照してください。

Swift パッケージの基本を理解しておくことをお勧めします。 詳細については、Apple 開発者ドキュメントの「[Swift パッケージ](https://developer.apple.com/documentation/swift_packages)」を参照してください。

### Swift ワークフローテンプレートを使い始める

{% data variables.product.prodname_dotcom %} は、ほとんどの Swift プロジェクトで機能する Swift ワークフローテンプレートを提供しています。このガイドには、このテンプレートをカスタマイズする方法の例が含まれています。 詳しい情報については、[Swift ワークフローテンプレート](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml)を参照してください。

手早く始めるために、テンプレートをリポジトリの`.github/workflows`ディレクトリに追加してください。

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

### Swift バージョンの指定

{% data variables.product.prodname_dotcom %} ホストランナーでプリインストールされた特定のバージョンの Swift を使用するには、`fwal/setup-swift` アクションを使用します。 このアクションは、ランナーのツールキャッシュから特定のバージョンの Swift を見つけ、必要なバイナリを `PATH` に追加します。 これらの変更は、ジョブの残りの部分で保持されます。 詳しい情報については、[`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift) アクションを参照してください。

セルフホストランナーを使用している場合は、目的の Swift バージョンをインストールして `PATH` に追加する必要があります。

以下は、`fwal/setup-swift` アクションの使用例です。

#### 複数の Swift バージョンを使用する

ビルドマトリックスで Swift の複数のバージョンを使用するようにジョブを設定できます。

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

#### 単一の特定の Swift バージョンを使用する

`5.3.3` などの特定のバージョンの Swift を使用するようにジョブを設定できます。

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

### コードのビルドとテスト

ローカルで使うのと同じコマンドを使用して、Swift でコードをビルドおよびテストできます。 以下は、ジョブでの `swift build` と `swift test` の使用例です。

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
