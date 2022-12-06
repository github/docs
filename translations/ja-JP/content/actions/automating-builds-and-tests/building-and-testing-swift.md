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
ms.openlocfilehash: 5717f9c7a939d2347ea5a49458002185c3ec07eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408996'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Swift パッケージをビルドしてテストする方法を説明します。

{% ifversion ghae %} {% data variables.product.prodname_ghe_managed %} で Swift プロジェクトをビルドし、テストするには、必須の Swift 依存関係が要求されます。 {% data reusables.actions.self-hosted-runners-software %} {% else %}{% data variables.product.prodname_dotcom %} ホスト型ランナーには、ソフトウェアがプリインストールされたツールキャッシュがあり、Ubuntu および macOS ランナーには、Swift パッケージをビルドするための依存関係が含まれています。 最新のソフトウェアとプレインストール版の Swift および Xcode の完全一覧が必要な場合、"[GitHub ホスト型ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)" を参照してください。{% endif %}

## 前提条件

YAMLの構文と、{% data variables.product.prodname_actions %}でのYAMLの使われ方に馴染んでいる必要があります。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)に関するページを参照してください。

Swift パッケージの基本を理解しておくことをお勧めします。 詳細については、Apple 開発者向けドキュメントの「[Swift パッケージ](https://developer.apple.com/documentation/swift_packages)」を参照してください。

## Swift スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} には、ほとんどの Swift プロジェクトで動作する Swift スターター ワークフローが用意されており、このガイドにはこのスターター ワークフローのカスタマイズ方法を示す例が含まれています。 詳細については、「[Swift スターター ワークフロー](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml)」を参照してください。

すぐに作業を開始するには、リポジトリの `.github/workflows` ディレクトリにスターター ワークフローを追加します。

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

{% data variables.product.prodname_dotcom %} ホスト型ランナーでプリインストールされた特定のバージョンの Swift を使用するには、`fwal/setup-swift` アクションを使用します。 このアクションでは、ランナーのツール キャッシュから特定のバージョンの Swift を見つけ、必要なバイナリを `PATH` に追加します。 これらの変更は、ジョブの残りの部分で保持されます。 詳細については、「[`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift) アクション」を参照してください。

セルフホスト型ランナーを使用している場合、目的の Swift バージョンをインストールして `PATH` に追加する必要があります。

次の例では、`fwal/setup-swift` アクションの使用を示します。

### 複数の Swift バージョンを使用する

マトリックスで Swift の複数のバージョンを使用するようにジョブを設定できます。

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}


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

ローカルで使うのと同じコマンドを使用して、Swift でコードをビルドおよびテストできます。 この例では、ジョブで `swift build` と `swift test` を使用する方法を示します。

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
