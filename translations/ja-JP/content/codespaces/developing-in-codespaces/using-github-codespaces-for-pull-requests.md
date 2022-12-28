---
title: pull request で GitHub Codespaces を使用する
shortTitle: Pull requests
intro: 'Web ブラウザーで、または {% data variables.product.prodname_vscode %} で {% data variables.product.prodname_github_codespaces %} を使うと、pull request の作成、pull request のレビュー、レビュー コメントの対応を行うことができます。'
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
ms.openlocfilehash: 6932f8eb9095987bfe808080983970c8807b6d93
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160008'
---
## {% data variables.product.prodname_github_codespaces %} での pull request について

{% data variables.product.prodname_github_codespaces %} からは、pull request の使用で必要になることがあるさまざまな機能を提供します。

- [pull request の作成](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - Terminal コマンドと Git コマンドを使用するか、Source Control ビューを使用することで、{% data variables.product.prodname_dotcom_the_website %} の場合と同じように pull request を作成できます。 リポジトリで pull request テンプレートが使用される場合、Source Control ビュー内でこれを使用できます。
- [pull request を開く](#opening-a-pull-request-in-codespaces) – マージされているブランチに codespace アクセスできる場合、codespace で既存の pull request を開くことができます。
- [pull request をレビューする](#reviewing-a-pull-request-in-codespaces) - codespace で pull request を開いたら、"GitHub pull request" ビューを利用し、レビューコメントを追加したり、pull request を承認したりできます。 また、{% data variables.product.prodname_github_codespaces %} を使って、[レビュー コメントを表示](#view-comments-from-a-review-in-codespaces)することもできます。

## {% data variables.product.prodname_codespaces %} で pull request を開く

{% data reusables.repositories.sidebar-pr %}

1. pull request のリストで、{% data variables.product.prodname_codespaces %} で開く pull request をクリックします。
1. 画面の右側にある **[{% octicon "code" aria-label="The code icon" %} コード]** をクリックします。 
1. {% data variables.product.prodname_codespaces %} タブで、プラス記号 ({% octicon "plus" aria-label="The plus icon" %}) をクリックします

   ![codespace で PR を開くオプション](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   codespace は、pull request ブランチ用に作成され、{% data variables.product.prodname_github_codespaces %} の既定のエディターで開きます。

## {% data variables.product.prodname_codespaces %} で pull request をレビューする

1. 既定のエディターを Web 用の {% data variables.product.prodname_vscode %} または {% data variables.product.prodname_vscode %} のいずれかに設定した状態で、上記の「[pull request を開く](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)」で説明されているように、codespace 内にある pull request を開きます。
2. アクティビティ バーで **[GitHub の pull request]** ビューをクリックします。 このビューは、codespace で pull request を開く場合にのみ表示されます。
  ![codespace で PR を開くオプション](/assets/images/help/codespaces/github-pr-view.png)
3. 特定のファイルをレビューするには、サイド バーの **[ファイルを開く]** アイコンをクリックします。
  ![codespace で PR を開くオプション](/assets/images/help/codespaces/changes-in-files.png)
4. レビュー コメントを追加するには、行番号の横にある **+** アイコンをクリックします。 レビュー コメントを入力し、 **[レビューの開始]** をクリックします。
  ![codespace で PR を開くオプション](/assets/images/help/codespaces/start-review.png)
5. レビュー コメントの追加が完了したら、サイド バーからコメントの送信、変更の承認、または変更の要求のいずれかを選ぶことができます。
  ![codespace で PR を開くオプション](/assets/images/help/codespaces/submit-review.png)

pull request の確認について詳しくは、「[pull request で提案されている変更を確認する](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。

## {% data variables.product.prodname_codespaces %} でレビューからのコメントを表示する

pull request に関するフィードバックを受け取った後で、[レビュー コメント](#reviewing-a-pull-request-in-codespaces)を確認するには、Web ブラウザーまたは {% data variables.product.prodname_vscode_shortname %} の [codespace で開く](#opening-a-pull-request-in-codespaces)ことができます。 そこから、コメントに返信したり、反応を追加したり、レビューを退けたりできます。 

  ![codespace で PR を開くオプション](/assets/images/help/codespaces/incorporating-codespaces.png)



