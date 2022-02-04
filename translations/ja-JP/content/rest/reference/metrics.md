---
title: Metrics
intro: 'The repository metrics API allows you to retrieve community profile, statistics, and traffic for your repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /rest/reference/repository-metrics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt or ghec %}
## コミュニティ

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## 統計

Repository Statistics API を使用すると、{% data variables.product.product_name %} がさまざまなタイプのリポジトリのアクティビティを視覚化するために用いるデータをフェッチできます。

### キャッシングについて

リポジトリの統計情報を計算するのは負荷が高い操作なので、可能な限りキャッシュされたデータを返すようにしています。  リポジトリの統計をクエリした際にデータがキャッシュされていなかった場合は、`202` レスポンスを受け取ります。また、この統計をまとめるため、バックグラウンドでジョブが開始します。 このジョブが完了するまで少し待ってから、リクエストを再度サブミットしてください。 ジョブが完了していた場合、リクエストは `200` レスポンスを受けとり、レスポンスの本文には統計情報が含まれています。

リポジトリの統計情報は、リポジトリのデフォルトブランチに SHA でキャッシュされ、デフォルトのブランチにプッシュすると統計情報のキャッシュがリセットされます。

### 統計で除外されるコミットのタイプ

API によって公開される統計は、[別のリポジトリグラフ](/github/visualizing-repository-data-with-graphs/about-repository-graphs)で表示される統計と同じものです。

要約すると、
- すべての統計は、マージコミットが除外されます。
- コントリビューター統計では、空のコミットも除外されます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghec %}
## トラフィック

プッシュアクセスを持つリポジトリに対し、トラフィック API はリポジトリグラフが提供する情報へのアクセスを提供します。 詳細は「<a href="/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository" class="dotcom-only">リポジトリへのトラフィックを表示する</a>」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}
