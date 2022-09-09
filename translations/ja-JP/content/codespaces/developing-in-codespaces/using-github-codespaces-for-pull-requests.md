---
title: pull request で GitHub Codespaces を使用する
shortTitle: Pull requests
intro: '開発ワークフローで {% data variables.product.prodname_github_codespaces %} を使用して、pull request の作成、pull request の確認、レビュー コメントの対応を行うことができます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
ms.openlocfilehash: d4ac4d4b8003600c95293f3939f547cd73639884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111523'
---
## {% data variables.product.prodname_github_codespaces %} での pull request について

{% data variables.product.prodname_github_codespaces %} からは、pull request の使用で必要になることがあるさまざまな機能を提供します。

- [pull request の作成](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - Terminal コマンドと Git コマンドを使用するか、Source Control ビューを使用することで、{% data variables.product.prodname_dotcom_the_website %} の場合と同じように pull request を作成できます。 リポジトリで pull request テンプレートが使用される場合、Source Control ビュー内でこれを使用できます。
- [pull request を開く](#opening-a-pull-request-in-codespaces) – マージされているブランチに codespace アクセスできる場合、codespace で既存の pull request を開くことができます。
- [pull request をレビューする](#reviewing-a-pull-request-in-codespaces) - codespace で pull request を開いたら、"GitHub pull request" ビューを利用し、レビューコメントを追加したり、pull request を承認したりできます。 また、{% data variables.product.prodname_codespaces %} を使用して[レビューコメントを表示](#view-comments-from-a-review-in-codespaces)できます。

## {% data variables.product.prodname_codespaces %} で pull request を開く

{% data reusables.repositories.sidebar-pr %}

2. pull request のリストで、{% data variables.product.prodname_codespaces %} で開く pull request をクリックします。
3. 画面の右側にある **[{% octicon "code" aria-label="The code icon" %} コード]** をクリックします。 
4. {% data variables.product.prodname_codespaces %} タブで、 **[ブランチで codespace を作成する]** をクリックします。
  ![codespace で PR を開くオプション](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## {% data variables.product.prodname_codespaces %} で pull request をレビューする

{% data reusables.codespaces.review-pr %}

pull request の確認について詳しくは、「[pull request で提案されている変更を確認する](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。

## {% data variables.product.prodname_codespaces %} でレビューからのコメントを表示する

pull request に関するフィードバックを受け取ったら、[codespace でそれを開き](#opening-a-pull-request-in-codespaces)、[レビューコメント](#reviewing-a-pull-request-in-codespaces)を表示できます。 そこから、コメントに返信したり、反応を追加したり、レビューを退けたりできます。 

  ![codespace で PR を開くオプション](/assets/images/help/codespaces/incorporating-codespaces.png)
