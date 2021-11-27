---
title: リポジトリアクティビティの概要を表示する
intro: 'You can view an overview of a repository''s pull request, issue, and commit activity.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
---

## About Pulse

Pulse を使ってリポジトリアクティビティの概要を表示することができます。 Pulse includes a list of open and merged pull requests, open and closed issues, and a graph showing the commit activity for the top 15 users who committed to the default branch of the project in the selected [time period](/articles/viewing-a-summary-of-repository-activity#filtering-by-time).

コミットがリポジトリのデフォルトブランチにマージされていて、コミットを最も多くコントリビュートした上位 15 人のユーザの中にコミット共作者が含まれている場合は、コミットアクティビティの概要に含まれます。

## Accessing Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

## 時間によるフィルタリング

デフォルトでは、Pulse は過去 7 日間のリポジトリアクティビティを表示します。 別の期間を選択するには、Pulse 概要の右上隅にある [**Period**] ドロップダウンをクリックします。

![時間による Pulse アクティビティのフィルタリング](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
