---
title: ディスカッションの分析情報を表示する
intro: ディスカッションの分析情報には、ディスカッションのアクティビティ、ビュー、共同作成者に関するデータが示されます。
permissions: Repository administrators and people with maintain access to a repository can view the insights dashboard for discussions in that repository. Repository administrators and people with maintain access to the source repository for organization discussions can view the insights dashboard for discussions in that organization.
versions:
  feature: discussions
topics:
  - Discussions
shortTitle: View discussions insights
ms.openlocfilehash: 09fafe454f53a1b2a39887bbb085f753f978b6eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410140'
---
## ディスカッションの分析情報ダッシュボードについて

ディスカッションの分析情報を使用すると、ディスカッション コミュニティのコントリビューション アクティビティ、ページ ビュー、および成長を理解するのに役立ちます。
- **コントリビューション アクティビティ** には、ディスカッション、Issue、pull request に対するコントリビューションの合計数が示されます。
- **ディスカッション ページ ビュー** には、ディスカッションの合計ページ ビューが、ログインしたユーザーと匿名の閲覧者によってセグメント化されて表示されます。
- **ディスカッションの毎日の共同作成者** には、選択した期間に反応、賛成票、回答のマーク、コメント、投稿を行った一意のユーザーの 1 日あたりの数が表示されます。
- **ディスカッションの新しい共同作成者** には、選択した期間に反応、賛成票、回答のマーク、コメント、投稿を行った新しい一意のユーザーの 1 日あたりの数が表示されます。

![ディスカッション ダッシュボードのスクリーンショット](/assets/images/help/discussions/discussions-dashboard.png)

{% tip %}

**ヒント:** 期間の正確なデータを表示するには、グラフ内のその期間にマウス ポインターを合わせます。

{% endtip %}

## ディスカッションの分析情報を表示する

{% data reusables.repositories.navigate-to-repo %} Organization のディスカッションの場合は、ソース リポジトリのメイン ページに移動します。
{% data reusables.repositories.accessing-repository-graphs %}
3. 左側のサイドバーで、 **[コミュニティ]** をクリックします。
![左側のサイドバーの [コミュニティ] タブのスクリーンショット](/assets/images/help/graphs/graphs-sidebar-community-tab.png)
1. 必要に応じて、ページの右上隅にある **[期間]** ドロップダウン メニューを選択し、データを表示する期間 ( **[30 日]** 、 **[3 か月]** 、 **[1 年]** ) をクリックします。
![ディスカッションの分析情報の日付範囲セレクターのスクリーンショット](/assets/images/help/discussions/discussions-dashboard-date-selctor.png)
