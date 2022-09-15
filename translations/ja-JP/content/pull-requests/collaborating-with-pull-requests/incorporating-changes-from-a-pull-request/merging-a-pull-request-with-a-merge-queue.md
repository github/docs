---
title: pull request とマージ キューのマージ
intro: 'ブランチのブランチ保護設定でマージ キューが必要な場合は、pull request をマージ キューに追加できます。また、必要なすべてのチェックに合格すると、{% data variables.product.product_name %} によって pull request がマージされます。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
ms.openlocfilehash: ce2bc87b82e3590c2a7f55f528fc9f71dc0ceb0d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614272'
---
{% data reusables.pull_requests.merge-queue-beta %}

## マージ キューについて

{% data reusables.pull_requests.merge-queue-overview %} {% data reusables.pull_requests.merge-queue-references %}

## マージ キューへの pull request の追加

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. [pull request] の一覧で、マージ キューに追加する pull request をクリックします。

1. **[準備ができたらマージ]** をクリックして、pull request をマージ キューに追加します。 または、管理者の場合は、次のことができます。
   -  ブランチ保護設定で許可されている場合は、 **[要件が満たされるのを待たずにマージする ({% ifversion bypass-branch-protections %}ブランチ保護をバイパス{% else %}管理者のみ{% endif %})]** をオンにして pull request を直接マージし、標準フローに従います。
   ![マージ キューのオプション](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **ヒント:** 提案された変更をマージする準備ができたらいつでも、 **[準備ができたらマージ]** をクリックできます。 必要な承認と状態チェックの条件が満たされると、{% data variables.product.product_name %} によって自動的に pull request がマージ キューに追加されます。

  {% endtip %}

1. **[準備ができたらマージを確認する]** をクリックして、マージ キューへの pull request の追加を確認します。

## マージ キューからの pull request の削除

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. [pull request] の一覧で、マージ キューから削除する pull request をクリックします。

1. キューから pull request を削除するには、 **[キューから削除]** をクリックします。
  ![キューから pull request を削除する](/assets/images/help/pull_requests/remove-from-queue-button.png)

または、ベース ブランチのマージ キュー ページに移動し、削除する pull request の横にある **[...]** をクリックして、 **[キューから削除]** を選択することもできます。 ベース ブランチのマージ キュー ページに移動する方法については、下のセクションを参照してください。

## マージ キューの表示

{% data variables.product.product_name %} のさまざまな場所で、ベース ブランチのマージ キューを表示できます。

- リポジトリの **[ブランチ]** ページ。 キューにまだ pull request がない場合や、キュー内に既にある pull request がわからない場合で、そのキューの内容を確認したい場合は、このルートを使うことをお勧めします。 詳細については、「[リポジトリ内のブランチを表示する](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)」を参照してください。

  ![[ブランチ] ページでマージ キューを表示する](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- リポジトリの **[pull request]** ページで、マージ キュー内の pull request の横にある {% octicon "clock" aria-label="The clock symbol" %} をクリックします。

  ![[pull request] ページでマージ キューを表示する](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- マージ キューがマージに必要なときは、pull request のページで、タイムラインの一番下までスクロールし、 **[マージ キュー]** のリンクをクリックします。

  ![pull request のマージ キュー リンク](/assets/images/help/pull_requests/merge-queue-link.png)

- マージ キューのビューに現在キュー内にある pull request が表示され、自分の pull request は明確にマークされます。

  ![マージ キューのビュー](/assets/images/help/pull_requests/merge-queue-view.png)

## マージ キューから削除された pull request の処理

{% data reusables.pull_requests.merge-queue-reject %}
