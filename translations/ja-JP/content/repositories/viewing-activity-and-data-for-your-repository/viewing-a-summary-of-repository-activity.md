---
title: リポジトリアクティビティの概要を表示する
intro: リポジトリの pull request、issue、コミット アクティビティの概要を表示できます。
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
ms.openlocfilehash: 2dafe04a8214e2840d8b36bdd3aaeb87f0ad2764
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882304'
---
## Pulse について

Pulse を使ってリポジトリアクティビティの概要を表示することができます。 Pulse には、オープンの pull request とマージされた pull request のリスト、オープンの issue とクローズされた issue、選んだ [[期間]](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) にプロジェクトのデフォルトブランチにコミットした上位 15 人のユーザーのコミットアクティビティを示すグラフが含まれます。

コミットがリポジトリのデフォルトブランチにマージされていて、コミットを最も多くコントリビュートした上位 15 人のユーザの中にコミット共作者が含まれている場合は、コミットアクティビティの概要に含まれます。

## Pulse にアクセスする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}

## 時間によるフィルタリング

デフォルトでは、Pulse は過去 7 日間のリポジトリアクティビティを表示します。 別の期間を選択するには、Pulse 概要の右上隅にある **[期間]** ドロップダウンをクリックします。

![時間による Pulse アクティビティのフィルタリング](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
