---
title: プルリクエストで提案された変更をレビューする
intro: pull request では、コミット、変更されたファイル、ベース ブランチと比較ブランチでのファイル間の違い (つまり "diff") をレビューしたり話し合ったりできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
ms.openlocfilehash: 8ea199ad1dc2f574f8820bde3e0529112645bc23
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158590'
---
## プルリクエストのレビューについて

プルリクエストの変更は、1 ファイルごとにレビューできます。 プルリクエストでファイルを確認しているときに、特定の変更について個別のコメントを残すことができます。 各ファイルの確認が終了したら、ファイルを閲覧済みとしてマークできます。 これによりファイルが折りたたまれるので、まだレビューを必要とするファイルを特定するのに役立ちます。 プルリクエストヘッダのプログレスバーには、閲覧したファイル数が表示されます。 必要な数のファイルを確認した後、要約コメントを付けて確認を送信することにより、プルリクエストを承認するか、追加の変更をリクエストできます。

{% data reusables.search.requested_reviews_search_tip %}

## レビューを開始する

{% webui %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %} {% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   このタブで差分ビューの形式を変更するには、{% octicon "gear" aria-label="The Settings gear" %} をクリックし、統合または分割ビューを選びます。 他の pull request の差分を表示する場合も、この選択が適用されます。

   ![差分ビューの設定](/assets/images/help/pull_requests/diff-view-settings.png)

   空白の違いを非表示にすることもできます。 この選択は、この pull request にのみ適用され、次回このページにアクセスするときに記録されます。
{% endif %}
1. 必要に応じて、ファイルをフィルター処理して、レビューするファイルのみを表示{% ifversion pr-tree-view %}するか、ファイル ツリーを使って特定のファイルに移動{% endif %}します。 詳しくは、「[pull request 内のファイルをフィルタリングする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)」を参照してください。
{% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
1. 終了したら **[レビューの開始]** をクリックします。 レビューを既に開始していた場合は、 **[レビューコメントを追加]** をクリックします。

   ![[Start a review] ボタン](/assets/images/help/pull_requests/start-a-review-button.png)

レビューを提出する前は、行のコメントは _保留中_ であり、ご自分にしか見えません。 レビューを提出する前ならばいつでも、保留中のコメントを編集できます。 その保留中のコメントのすべてを含めて、保留中のレビューをキャンセルするには、[会話] タブでタイムラインの最後まで下にスクロールし、 **[レビューをキャンセルする]** をクリックします。

![[レビューのキャンセル] ボタン](/assets/images/help/pull_requests/cancel-review-button.png) {% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

[{% data variables.product.prodname_github_codespaces %}](/codespaces/overview) を使って、pull request をテスト、実行、レビューすることができます。

1. 「[pull request を開く](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)」の説明に従って、codespace で pull request を開きます。
1. アクティビティ バーで **[GitHub の pull request]** ビューをクリックします。 このビューは、codespace で pull request を開く場合にのみ表示されます。

   ![codespace で PR を開くオプション](/assets/images/help/codespaces/github-pr-view.png)

1. 特定のファイルを確認するには、サイド バーの **[ファイルを開く]** アイコンをクリックします。

   ![codespace で PR を開くオプション](/assets/images/help/codespaces/changes-in-files.png)

1. レビュー コメントを追加するには、行番号の横にある **+** アイコンをクリックします。 レビュー コメントを入力し、 **[レビューの開始]** をクリックします。

   ![codespace で PR を開くオプション](/assets/images/help/codespaces/start-review.png)

1. レビュー コメントの追加が完了したら、サイド バーからコメントの送信、変更の承認、または変更の要求のいずれかを選択できます。

   ![codespace で PR を開くオプション](/assets/images/help/codespaces/submit-review.png)

{% data variables.product.prodname_github_codespaces %} で pull request をレビューする方法について詳しくは、「[pull request で {% data variables.product.prodname_github_codespaces %} を使用する](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)」をご覧ください。

{% endcodespaces %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## 依存関係の変更をレビューする

プルリクエストに依存関係への変更が含まれている場合は、マニフェストまたはロックファイルの依存関係のレビューを使用して、何が変更されたかを確認し、変更によるセキュリティの脆弱性の発生の有無を確認できます。 詳細については、「[プル リクエスト内の依存関係の変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。

{% data reusables.repositories.changed-files %}

1. マニフェストまたはロック ファイルのヘッダーの右側で、 **[{% octicon "file" aria-label="The rich diff icon" %}]** リッチ diff ボタンをクリックして、依存関係レビューを表示します。

   ![リッチ diff ボタン](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %} {% endif %}

## ファイルをレビュー済みとしてマークする

ファイルのレビュー後は、そのファイルをレビュー済みとしてマークできます。マークしたファイルは折りたたまれます。 ファイルを表示後に変更すると、レビュー済みマークが解除されます。

{% data reusables.repositories.changed-files %}
2. レビューを完了したファイルの、ヘッダーの右側にある **[表示済み]** を選びます。

   ![[Viewed] チェックボックス](/assets/images/help/pull_requests/viewed-checkbox.png)

## レビューを提出する

プルリクエスト内でレビューしたいファイルをすべてレビューし終えたら、レビューをサブミットします。

{% data reusables.repositories.changed-files %} {% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
4. 残しておくレビューの種類を選択します。

   ![レビュー オプションを選択するラジオ ボタン](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - 変更を明示的に承認したり、追加の変更を要求したりせずに、一般的なフィードバックを残すには、 **[コメント]** を選びます。
    - フィードバックを提出して、pull request で提案された変更をマージすることを承認するには、 **[承認]** を選びます。
    - pull request をマージする前に対処する必要があるフィードバックを送信するには、 **[変更の要求]** を選びます。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 参考資料

- 「[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)」 (保護されたブランチについて)
- "[pull request をレビュー ステータスでフィルター処理する](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)"
