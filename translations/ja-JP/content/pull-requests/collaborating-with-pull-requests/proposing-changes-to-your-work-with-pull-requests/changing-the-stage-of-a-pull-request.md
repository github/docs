---
title: プルリクエストのステージの変更
intro: 下書きの pull request をレビューの準備完了としてマークしたり、pull request を下書きに変換したりすることができます。
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the state
ms.openlocfilehash: 5ef2845e57518c4b66f13a804919f7bdea327040
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883296'
---
## プルリクエストをレビュー準備完了としてマークする

{% data reusables.pull_requests.mark-ready-review %}

{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用して、pull request をレビューの準備完了としてマークすることもできます。 詳細については、{% data variables.product.prodname_cli %} ドキュメントの "[`gh pr ready`](https://cli.github.com/manual/gh_pr_ready)" を参照してください。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、レビューの準備ができたことを示すマークを付けたいプルリクエストクリックします。
3. マージ ボックスで **[Ready for review]** をクリックします。
  ![[Ready for review] ボタン](/assets/images/help/pull_requests/ready-for-review-button.png)

## プルリクエストをドラフトに変換する

プルリクエストはいつでもドラフトに変換できます。 たとえば、ドラフトではなくプルリクエストを誤ってオープンした場合、または対処の必要があるプルリクエストについてのフィードバックを受け取った場合、プルリクエストをドラフトに変換して、さらなる変更が必要であることを示すことができます。 プルリクエストをレビューの準備完了として再度マークするまで、プルリクエストをマージすることはできません。 プルリクエストの通知をすでにサブスクライブしているユーザは、プルリクエストをドラフトに変換するときにサブスクライブ解除されません。

{% data reusables.repositories.sidebar-pr %}
2. [プルリクエスト] リストで、ドラフトに変換するプルリクエストをクリックします。
3. 右側のサイドバーの "レビュー担当者" の下で **[ドラフトに変換]** をクリックします。
  ![[ドラフトに変換] リンク](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. **[ドラフトに変換]** をクリックします。
  ![ドラフト確認に変換](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

## 参考資料

- "[pull request について](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
