---
title: プルリクエストのベースブランチの変更
intro: プルリクエストがオープンされた後は、ベースブランチを変更し、プルリクエストの変更を他のブランチと比較できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
ms.openlocfilehash: 6e8e78ac4f3e0d3f81b5efc07bb48151040baa9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137748'
---
{% warning %}

**警告**: pull request のベース ブランチを変更すると、タイムラインから一部のコミットが削除される場合かあります。 また、レビューコメントが言及するコード行が、プルリクエストの変更に含まれなくなれば、そのコメントも役に立たなくなります。

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] リストで、変更するプルリクエストをクリックします。
3. pull request のタイトルの横にある **[編集]** をクリックします。 ![pull request 編集ボタン](/assets/images/help/pull_requests/pull-request-edit.png)
4. [ベース ブランチ] ドロップダウンメニューで、[変更を比較する](/github/committing-changes-to-your-project/comparing-commits#comparing-branches)ベース ブランチを選択します。 ![ベース ブランチのドロップダウン メニュー](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. ベース ブランチの変更に関する情報を読み、 **[ベースの変更]** をクリックします。 ![ベース ブランチの変更確認ボタン ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**参考:** pull request を開くと、{% data variables.product.product_name %} はそのブランチが参照するコミットにベースを設定します。 ブランチが今後更新される場合、{% data variables.product.product_name %} はベースブランチのコミットを更新しません。

{% endtip %}

## 参考資料

- "[pull request の作成方法](/articles/creating-a-pull-request)"
- "[pull request について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[pull request で提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
