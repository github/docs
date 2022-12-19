---
title: リポジトリ統計
shortTitle: Statistics
allowTitleToDifferFromFilename: true
intro: 'リポジトリ統計 API を使うと、{% data variables.product.product_name %} がさまざまな種類のリポジトリ アクティビティを視覚化するために使うデータをフェッチできます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 74692780426dd848634bf18f16bacd3770da001c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066131'
---
## リポジトリ統計 API について

リポジトリ統計 API を使うと、{% data variables.product.product_name %} がさまざまな種類のリポジトリ アクティビティを視覚化するために使うデータをフェッチできます。

### キャッシングについて

リポジトリの統計情報を計算するのは負荷が高い操作なので、可能な限りキャッシュされたデータを返すようにしています。  リポジトリの統計をクエリした際にデータがキャッシュされていない場合は、`202` 応答を受け取ります。また、この統計をまとめるため、バックグラウンドでジョブが開始します。 このジョブが完了するまで少し待ってから、要求を再度送信してください。 ジョブが完了していた場合、その要求は `200` 応答を受けとり、応答の本文には統計情報が含まれています。

リポジトリの統計情報は、リポジトリのデフォルトブランチに SHA でキャッシュされ、デフォルトのブランチにプッシュすると統計情報のキャッシュがリセットされます。

### 統計で除外されるコミットのタイプ

API によって公開される統計は、[異なるリポジトリ グラフ](/github/visualizing-repository-data-with-graphs/about-repository-graphs)によって示される統計と一致します。

まとめ
- すべての統計は、マージコミットが除外されます。
- コントリビューター統計では、空のコミットも除外されます。
