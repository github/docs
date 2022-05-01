---
title: Repository statistics
shortTitle: 統計
allowTitleToDifferFromFilename: true
intro: 'The Repository statistics API allows you to fetch the data that {% data variables.product.product_name %} uses for visualizing different types of repository activity.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Repository statistics API

The Repository statistics API allows you to fetch the data that {% data variables.product.product_name %} uses for visualizing different types of repository activity.

### キャッシングについて

リポジトリの統計情報を計算するのは負荷が高い操作なので、可能な限りキャッシュされたデータを返すようにしています。  リポジトリの統計をクエリした際にデータがキャッシュされていなかった場合は、`202` レスポンスを受け取ります。また、この統計をまとめるため、バックグラウンドでジョブが開始します。 このジョブが完了するまで少し待ってから、リクエストを再度サブミットしてください。 ジョブが完了していた場合、リクエストは `200` レスポンスを受けとり、レスポンスの本文には統計情報が含まれています。

リポジトリの統計情報は、リポジトリのデフォルトブランチに SHA でキャッシュされ、デフォルトのブランチにプッシュすると統計情報のキャッシュがリセットされます。

### 統計で除外されるコミットのタイプ

API によって公開される統計は、[別のリポジトリグラフ](/github/visualizing-repository-data-with-graphs/about-repository-graphs)で表示される統計と同じものです。

要約すると、
- すべての統計は、マージコミットが除外されます。
- コントリビューター統計では、空のコミットも除外されます。
