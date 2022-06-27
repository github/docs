---
title: Dependency submission APIの利用
intro: Dependency submission APIを使って、プロジェクトのビルドあるいはコンパイル時に解決される依存関係などをプロジェクトにサブミットできます。
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
---

{% data reusables.dependency-submission.dependency-submission-api-beta %}

## Dependency submission APIについて

{% data reusables.dependency-submission.about-dependency-submission %}

依存関係は、スナップショットの形でDependency submission APIにサブミットされます。 スナップショットは、コミットSHAに関連づけられた依存関係のセット及び他のメタデータで、コミットに対するリポジトリの現在の状態を反映します。 Dependency submission APIに関する詳しい情報については[Dependency submission REST APIのドキュメンテーション](/rest/dependency-graph/dependency-submission)を参照してください。

## ビルド時の依存関係のサブミット

Dependency submission APIを{% data variables.product.prodname_actions %}ワークフロー中で使用し、プロジェクトのビルド時にプロジェクトに依存関係をサブミットできます。

### 事前作成されたアクションの利用

Dependency submission APIを使用するもっともシンプルな方法は、依存関係のリストを収集し、必要なスナップショットの形式に変換し、APIにサブミットするような、事前に作成されたアクションをリポジトリに追加することです。 これらのステップを完了させるアクションは、様々なエコシステムについて{% data variables.product.prodname_marketplace %}から利用可能で、ベータ以降の過程でさらに多くのアクションが作成されるでしょう。 現在利用可能なアクションへのリンクは、下の表にあります。

| エコシステム | アクション                                                                           |
| ------ | ------------------------------------------------------------------------------- |
| Go     | [Go Dependency Submission](https://github.com/actions/go-dependency-submission) |

たとえば、以下の[Go Dependency Submission](https://github.com/actions/go-dependency-submission)ワークフローは、Goのビルドターゲット（`main`関数を持つGoのファイル）に対する依存関係を計算し、リストをDependency Submission APIにサブミットします。

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main

# 依存関係をサブミットするために、APIにはリポジトリへの書き込み権限が必要
permissions:
  contents: write

# GoとGoのモジュールを設定するための環境変数。 Customize as necessary
env:
  GOPROXY: '' # 使用するGoのプロキシサーバー
  GOPRIVATE: '' # プライベートと見なされGOPROXYからリクエストされないモジュールのリスト
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
            # 必須: build target が使用するgo.mod fileへの
            # リポジトリパスの定義
            go-mod-path: go-example/go.mod
            #
            # オプション。 ビルドターゲットのリポジトリパスの定義。
            # `main()`関数を持つファイル。
            # 未定義の場合、このアクションはモジュールのすべての
            # ビルドターゲットが使うすべての依存関係を収集する。 これには
            # テストやツールが使うGoの依存関係が含まれることがある。
            go-build-target: go-example/cmd/octocat.go

```
### 独自のアクションの作成

あるいは、ビルド時にプロジェクトに依存関係をサブミットする独自のアクションを書くこともできます。 そのワークフローは以下のことをしなければなりません。

  1. プロジェクトの依存関係のリストの生成。
  2. 依存関係のリストを、Dependency submission APIが受け付けるスナップショットの形式に変換。 この形式に関する詳しい情報については、[Dependency submission REST APIドキュメンテーション](/rest/dependency-graph/dependency-submission)中の"Create a repository snapshot" API操作のbodyパラメータを参照してください。
  3. 形式の整った依存関係のリストを、Dependency submission APIにサブミットする。

{% data variables.product.product_name %}は[Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit)をメンテナンスしています。これは、依存関係をDependency submission APIにサブミットするためのGitHub Actionの構築を支援するためのTypeScriptライブラリです。 アクションの作成に関する詳しい情報については「[Actionsの作成](/actions/creating-actions)」を参照してください。
