---
title: Go でのビルドとテスト
intro: Go プロジェクトのビルドとテストのための継続的インテグレーション (CI) ワークフローを作成できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
ms.openlocfilehash: 590edc2af0b7f370e52b449f320bdc2a758450bc
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160860'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、Go パッケージのビルド、テスト、公開の方法を紹介します。

{% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %}{% else %}{% data variables.product.prodname_dotcom %} ホスト ランナーには、ツール キャッシュとプレインストールされたソフトウェアがあり、それには Go の依存関係が含まれます。 最新のソフトウェアの完全な一覧と、プレインストールされたバージョンの Go については、[{% data variables.product.prodname_dotcom %} ホステッド ランナー](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)に関するページを参照してください。
{% endif %}

## 前提条件

YAMLの構文と、{% data variables.product.prodname_actions %}でのYAMLの使われ方に馴染んでいる必要があります。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions)に関するページを参照してください。

Go 言語の基本を理解しておくことをおすすめします。 詳しくは、「[Go の概要](https://golang.org/doc/tutorial/getting-started)」をご覧ください。

## Go スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} では、ほとんどの Go プロジェクトで使える Go スターター ワークフローが提供されています。 このガイドには、スターター ワークフローのカスタマイズに使用できる例が含まれます。 詳細については、「[Go スターター ワークフロー](https://github.com/actions/starter-workflows/blob/main/ci/go.yml)」を参照してください。

すぐに作業を開始するには、リポジトリの `.github/workflows` ディレクトリにスターター ワークフローを追加します。

```yaml{:copy}
name: Go package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: 1.15

      - name: Build
        run: go build -v ./...

      - name: Test
        run: go test -v ./...
```

## Go バージョンの指定

最も簡単に Go のバージョンを指定する方法は、{% data variables.product.prodname_dotcom %} によって提供される `setup-go` アクションを使用することです。 詳細については、「[`setup-go` アクション](https://github.com/actions/setup-go/)」を参照してください。

{% data variables.product.prodname_dotcom %} ホストランナーでプレインストールされたバージョンの Go を使うには、`setup-go` アクションの `go-version` プロパティに関連するバージョンを渡します。 このアクションは、各ランナーのツール キャッシュから特定のバージョンの Go を見つけて、必要なバイナリを `PATH` に追加します。 これらの変更は、ジョブの残りの部分で保持されます。

`setup-go` アクションは、異なるランナーや異なるバージョンの Go で一貫した動作を保証するのに役立つため、{% data variables.product.prodname_actions %} で Go を使うときに推奨される方法です。 セルフホスト型ランナーを使用している場合は、Go をインストールし、それを `PATH` に追加する必要があります。

### 複数のバージョンの Go の使用

```yaml{:copy}
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go {% raw %}${{ matrix.go-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      # You can test your matrix by printing the current Go version
      - name: Display Go version
        run: go version
```

### 特定のバージョンの Go の使用

`1.16.2` のような特定のバージョンの Go を使うようにジョブを構成できます。 あるいは、最新のマイナーリリースを取得するためにセマンティックバージョン構文を使うこともできます。 この例では、最新のパッチ リリースである Go 1.16 を使います。

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## 依存関係のインストール

`go get` を使って依存関係をインストールできます。

```yaml{:copy}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: |
          go get .
          go get example.com/octo-examplemodule
          go get example.com/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### 依存関係のキャッシング

[`setup-go`アクション](https://github.com/actions/setup-go)を使用して依存関係をキャッシュおよび復元できます。 既定では、キャッシュは無効になっていますが、`cache` パラメーターを `true` に設定することで有効にできます。

キャッシュが有効な場合、`setup-go` アクションはリポジトリ ルートで依存関係ファイル `go.sum` を検索し、依存関係ファイルのハッシュをキャッシュ キーの一部として使います。

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

また、複数の依存ファイルを使う場合、またはそれらが異なるサブディレクトリに配置されている場合、`cache-dependency-path` パラメーターを使うこともできます。

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

カスタム要件がある場合、またはキャッシュに対してより細かい制御が必要な場合は、[`cache` アクション](https://github.com/marketplace/actions/cache)を使用できます。 詳細については、「[ワークフローを高速化するための依存関係のキャッシュ](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。

{% endif %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。 このワークフローの例では、ジョブで `go build` と `go test` を使う方法を示します。

```yaml{:copy}
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```

## 成果物としてのワークフローのデータのパッケージ化

ワークフローが完了すると、結果の成果物を分析のためにアップロードできます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 次の例では、`upload-artifact` アクションを使ってテスト結果をアップロードする方法を示します。

詳しくは、「[ワークフロー データを成果物として保存する](/actions/using-workflows/storing-workflow-data-as-artifacts)」をご覧ください。

```yaml{:copy}
name: Upload Go test results

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      - name: Install dependencies
        run: go get .
      - name: Test with Go
        run: go test -json > TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
      - name: Upload Go test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Go-results-{% raw %}${{ matrix.go-version }}{% endraw %}
          path: TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
```
