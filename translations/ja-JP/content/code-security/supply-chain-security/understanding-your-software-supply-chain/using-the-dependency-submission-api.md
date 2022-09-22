---
title: Dependency Submission API を使用する
intro: Dependency Submission API を使うと、プロジェクトがビルドまたはコンパイルされるときに解決される依存関係など、プロジェクトの依存関係を送信できます。
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
ms.openlocfilehash: f81967a46763d299afd14727cd884a36cb0b3d9c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880815'
---
{% data reusables.dependency-submission.dependency-submission-api-beta %}

## Dependency Submission API について

{% data reusables.dependency-submission.about-dependency-submission %}

依存関係は、スナップショットの形式で Dependency Submission API に送信されます。 スナップショットは、コミット SHA や他のメタデータに関連付けられている依存関係のセットであり、コミットのリポジトリの現在の状態を反映しています。 Dependency Submission API について詳しくは、[Dependency Submission REST API のドキュメント](/rest/dependency-graph/dependency-submission)をご覧ください。

## ビルド時に依存関係を送信する

{% data variables.product.prodname_actions %} ワークフローで Dependency Submission API を使って、プロジェクトのビルド時にプロジェクトの依存関係を送信できます。 

### 事前に作成されたアクションを使用する

Dependency Submission API を使う最も簡単な方法は、依存関係のリストを収集して必要なスナップショット形式に変換したものを API に送信するアクションを事前に作成し、それをリポジトリに追加することです。 さまざまなエコシステムについてこれらの手順を行うアクションを {% data variables.product.prodname_marketplace %} で利用でき、ベータ以降の間にさらに多くのアクションが作成されます。 現在使用可能なアクションへのリンクを次の表に示します。

エコシステム | アクション |
--- | --- |
Go | [Go の依存関係送信](https://github.com/actions/go-dependency-submission)

たとえば、次の [Go 依存関係送信](https://github.com/actions/go-dependency-submission)ワークフローは、Go ビルド ターゲットの依存関係を計算し (`main` 関数を含む Go ファイル)、そのリストを Dependency Submission API に送信します。 

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main
      
# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
        
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"
          
      - name: Run snapshot action
        uses: @actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```
### 独自のアクションを作成する

代わりに、ビルド時にプロジェクトの依存関係を送信する独自のアクションを記述することもできます。 次のようなワークフローにする必要があります。

  1. プロジェクトの依存関係のリストを生成します。
  2. 依存関係のリストを、Dependency Submission API で受け入れられるスナップショット形式に変換します。 形式について詳しくは、[Dependency Submission REST API のドキュメント](/rest/dependency-graph/dependency-submission)で "リポジトリ スナップショットの作成" API 操作の本文パラメーターをご覧ください。
  3. 適切な形式にした依存関係のリストを Dependency Submission API に送信します。

{% data variables.product.product_name %} の [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit) は、Dependency Submission API に依存関係を送信するための独自の GitHub アクションを構築するのに役立つ TypeScript ライブラリです。 アクションの記述について詳しくは、「[アクションの作成](/actions/creating-actions)」をご覧ください。
