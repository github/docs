---
title: Swift のビルドとテスト
intro: 継続的インテグレーション (CI) ワークフローを作成して、Swift プロジェクトをビルドおよびテストできます。
redirect_from:
  - /actions/guides/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Swift
shortTitle: Build & test Swift
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Swift パッケージをビルドしてテストする方法を説明します。

{% ifversion ghae %} To build and test your Swift project on {% data variables.product.prodname_ghe_managed %}, the necessary Swift dependencies are required. {% data reusables.actions.self-hosted-runners-software %}
{% else %}{% data variables.product.prodname_dotcom %} ホストランナーには、ソフトウェアがプリインストールされたツールキャッシュがあり、Ubuntu および macOS ランナーには、Swift パッケージをビルドするための依存関係が含まれています。 最新のソフトウェアとプレインストールされたバージョンの Swift および Xcode の完全なリストについては、「[GitHub ホストランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)」を参照してください。{% endif %}

## 必要な環境

YAMLの構文と、{% data variables.product.prodname_actions %}でのYAMLの使われ方に馴染んでいる必要があります。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)」を参照してください。

Swift パッケージの基本を理解しておくことをお勧めします。 詳細については、Apple 開発者ドキュメントの「[Swift パッケージ](https://developer.apple.com/documentation/swift_packages)」を参照してください。

## Using the Swift starter workflow

{% data variables.product.prodname_dotcom %} provides a Swift starter workflow that should work for most Swift projects, and this guide includes examples that show you how to customize this starter workflow. For more information, see the [Swift starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

To get started quickly, add the starter workflow to the `.github/workflows` directory of your repository.

```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

## Swift バージョンの指定

{% data variables.product.prodname_dotcom %} ホストランナーでプリインストールされた特定のバージョンの Swift を使用するには、`fwal/setup-swift` アクションを使用します。 このアクションは、ランナーのツールキャッシュから特定のバージョンの Swift を見つけ、必要なバイナリを `PATH` に追加します。 これらの変更は、ジョブの残りの部分で保持されます。 詳しい情報については、[`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift) アクションを参照してください。

セルフホストランナーを使用している場合は、目的の Swift バージョンをインストールして `PATH` に追加する必要があります。

以下は、`fwal/setup-swift` アクションの使用例です。

### 複数の Swift バージョンを使用する

You can configure your job to use multiple versions of Swift in a matrix.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Swift

on: [push]

jobs:
  build:
    name: {% raw %}Swift ${{ matrix.swift }} on ${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### 単一の特定の Swift バージョンを使用する

`5.3.3` などの特定のバージョンの Swift を使用するようにジョブを設定できます。

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを使用して、Swift でコードをビルドおよびテストできます。 以下は、ジョブでの `swift build` と `swift test` の使用例です。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
