---
title: コミットを比較する
intro: ブランチ、タグ、コミット、フォーク、日付でリポジトリの状態を比較できます。
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 2ebf1a3cc83463e97d9a4d60401277bb844135b1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132522'
---
リポジトリの異なるバージョンを比較するには、リポジトリのパスに `/compare` を追加します。

[https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master) にある [Linguist のフォーク](https://github.com/octocat/linguist)の比較ページを見ることで比較の力をご覧に入れます。

各リポジトリの比較ビューには、2 つのドロップダウンメニュー、`base` と `compare` が含まれます。

`base` は比較の開始点と見なされます。`compare` はエンドポイントです。 比較中は常に、 **[編集]** をクリックすることで `base` ポイントと `compare` ポイントを変更できます。

## ブランチを比較する

compare の最も一般的な使い方は、新しいプルリクエストを開始するときなどに、ブランチを比較することです。 [新しい pull request](/articles/creating-a-pull-request) を開始すると、ブランチ比較ビューに常に移動します。

ブランチを比較するには、ページ上部の `compare` ドロップダウンメニューで、ブランチの名前を選択してください。

[2 つのブランチの比較](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs)例を次に示します。

## タグを比較する

リリースタグを比較すると、前回のリリース以降のリポジトリへの変更が表示されます。 詳しくは、「[リリースを比較する](/github/administering-a-repository/comparing-releases)」を参照してください。

タグを比較するには、ページ上部のドロップダウン メニューから `compare` タグ名を選択します。

[2 つのタグの比較](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3)例を次に示します。

## コミットを比較する

リポジトリやそのフォークの、2 つの任意のコミットを、 {% data variables.product.prodname_dotcom %}のツードット diff 比較によって比較することも可能です。

{% data variables.product.prodname_dotcom %} のツードット diff 比較で、2 つのコミット間または Git Object ID (OID) 間を素早く直接比較するには、リポジトリの [Comparing changes] ページの URL を編集してください。

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

その他の比較オプションについて詳しくは、「[3 点と 2 点の差分比較](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)」を参照してください。

## フォークを比較する

ベースリポジトリと、フォークした任意のリポジトリを比較できます。 これは、ユーザがプロジェクトにプルリクエストを実行したときに表示されるビューです。

別のリポジトリにあるブランチを比較するには、ブランチの名前の前にユーザ名を付けてください。 たとえば、`base` に `octocat:main` を指定し、`compare` に `octo-org:main` を指定することで、`octocat` と `octo-org` でそれぞれ所有されるリポジトリの `main` ブランチを比較できます。

[2 つのリポジトリの比較](https://github.com/github/linguist/compare/master...octocat:master)例を次に示します。

## コミットを比較する

Git では、「1 つ前のコミット」を意味する `^` 表記をショートカットとして使います。

この記号を使って、1 つのコミットやブランチを、すぐ前のものと比較できます。 たとえば、`96d29b7^^^^^` は `96d29b7` 前の 5 つのコミットを示します。`^` マークが 5 つあるためです。 `base` ブランチに「`96d29b7^^^^^`」と、`compare` ブランチに「`96d29b7`」を入力すると、`96d29b7` 前に行われた 5 つのコミットと `96d29b7` コミットが比較されます。

[`^` 表記を使用した比較](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7)例を次に示します。

## 参考資料

- "[pull request の base ブランチを変更する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
