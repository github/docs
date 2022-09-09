---
title: リポジトリの言語について
intro: リポジトリ内のファイルやディレクトリが、リポジトリを構成する言語を決定します。 リポジトリの言語を見れば、そのリポジトリの簡単な概要が得られます。
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language
  - /articles/why-isn-t-my-favorite-language-recognized
  - /articles/my-repo-is-marked-as-the-wrong-language
  - /articles/why-isn-t-sql-recognized-as-a-language
  - /articles/why-isn-t-my-favorite-language-recognized-by-github
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository languages
ms.openlocfilehash: 3796ec1828bb8f64072f62255d76ca79c4467457
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132240'
---
{% data variables.product.product_name %} では、オープンソースの [Linguist ライブラリ](https://github.com/github/linguist)を使って、構文強調やリポジトリ統計のためファイルの言語を特定します。 デフォルトブランチに変更をプッシュすると、言語統計が更新されます。

ファイルによっては特定しにくいものもあります。また、プロジェクトによっては、主たるコード以外のライブラリやベンダーファイルが含まれていることもあります。 正しくない結果が表示される場合は、Linguist の[トラブルシューティング ガイド](https://github.com/github/linguist/blob/master/docs/troubleshooting.md)を調べてください。

## マークアップ言語

マークアップ言語は、オープンソースの[マークアップ ライブラリ](https://github.com/github/markup)を使って HTML にレンダリングされ、インラインで表示されます。 現時点では、{% data variables.product.product_name %}内で表示する新しいマークアップ言語は受け付けていません。 しかし、弊社は現在のマークアップ言語群を積極的にメンテナンスしています。 問題が発生した場合は、[issue を作成してください](https://github.com/github/markup/issues/new)。
