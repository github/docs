---
title: リポジトリアクティビティの概要を表示する
intro: 'Pulse を使ってリポジトリアクティビティの概要を表示することができます。 Pulse には、オープンおよびマージされたプルリクエストのリスト、オープンおよびクローズされた Issue、および選択した[期間](/articles/viewing-a-summary-of-repository-activity#filtering-by-time)にプロジェクトのデフォルトブランチにコミットした上位 15 人のユーザーのコミットアクティビティを示すグラフが含まれます。'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

コミットがリポジトリのデフォルトブランチにマージされていて、コミットを最も多くコントリビュートした上位 15 人のユーザの中にコミット共作者が含まれている場合は、コミットアクティビティの概要に含まれます。

### Pulse にアクセスする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

### 時間によるフィルタリング

デフォルトでは、Pulse は過去 7 日間のリポジトリアクティビティを表示します。 別の期間を選択するには、Pulse 概要の右上隅にある [**Period**] ドロップダウンをクリックします。

![時間による Pulse アクティビティのフィルタリング](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
