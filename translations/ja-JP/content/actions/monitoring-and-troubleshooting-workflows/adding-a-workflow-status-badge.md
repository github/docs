---
title: ワークフロー状態バッジの追加
intro: リポジトリにステータスバッジを表示して、ワークフローのステータスを示すことができます。
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add a status badge
ms.openlocfilehash: d2b0703e9ca4dcdc0a02cb81144e321a38cffde0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880630'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**注**: プライベート リポジトリ内のワークフロー バッジには外部からアクセスできないため、外部サイトからそれらを埋め込んだり、リンクしたりすることはできません。

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


ワークフロー状態バッジを `README.md` ファイルに追加するには、最初に表示したい状態バッジの URL を見つけます。 その後、Markdown を使って、`README.md` ファイル内に画像としてバッジを表示できます。 Markdown での画像のマークアップについて詳しくは、[基本的な書き方とフォーマットの構文](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)に関する記事を参照してください。

## ワークフローファイル名を使用する

ワークフロー ファイルの名前を使用して、ワークフロー状態バッジの URL を作成できます。

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

`README.md` ファイル内にワークフロー状態バッジを表示するには、Markdown マークアップを使用して画像を埋め込みます。 Markdown での画像のマークアップについて詳しくは、[基本的な書き方とフォーマットの構文](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)に関する記事を参照してください。

たとえば、次の Markdown を `README.md` ファイルに追加して、ファイル パスが `.github/workflows/main.yml` であるワークフローの状態バッジを追加します。 リポジトリの `OWNER` は `github` Organization であり、`REPOSITORY` 名は `docs` です。

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## `branch` パラメーターの使用

特定のブランチに関するワークフロー実行の状態を表示するには、状態バッジ URL の末尾に `?branch=<BRANCH_NAME>` を追加します。

たとえば、次の Markdown を `README.md` ファイルに追加して、`feature-1` という名前のブランチの状態バッジを表示します。

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## `event` パラメーターの使用

`push` イベントによってトリガーされるワークフロー実行の状態を表示するには、状態バッジ URL の末尾に `?event=push` を追加します。

たとえば、次の Markdown を `README.md` ファイルに追加して、`push` イベントによってトリガーされるワークフロー実行の状態を含むバッジを表示します。これにより、そのブランチの現在の状態に対してビルドの状態が表示されます。

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
