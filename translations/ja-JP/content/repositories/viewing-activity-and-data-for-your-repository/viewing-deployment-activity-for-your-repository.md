---
title: リポジトリのデプロイメントアクティビティを表示する
intro: リポジトリ全体のデプロイメントまたは特定のプルリクエストに関する情報を表示できます。
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
ms.openlocfilehash: 395f25648609801ee376b3f689c11bb651c23195
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132031'
---
{% note %}

**メモ:** デプロイ ダッシュボードは現在ベータ版であり、変更される可能性があります。

{% endnote %}

リポジトリへの読み取りアクセス権を持つ人は、リポジトリのデプロイ ワークフローが、Deployments API または [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment) のアプリケーションを通して、{% data variables.product.product_name %} に統合されている場合、現在のすべてのデプロイメントの概要と過去のデプロイ アクティビティのログを見ることができます。 詳しくは、「[デプロイ](/rest/reference/repos#deployments)」を参照してください。

プルリクエストの [Conversation] タブにもデプロイメント情報が表示されます。

## デプロイメントダッシュボードを表示する

{% data reusables.repositories.navigate-to-repo %}
2. ファイルの一覧の右側にある **[環境]** をクリックします。
![[リポジトリ] ページの右にある [環境]](/assets/images/help/repository/environments.png)

## 参考資料
 - "[pull request について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
