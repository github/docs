---
title: プルリクエストのステージの変更
intro: You can mark a draft pull request as ready for review or convert a pull request to a draft.
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
---

## プルリクエストをレビュー準備完了としてマークする

{% data reusables.pull_requests.mark-ready-review %}

{% tip %}

**Tip**: You can also mark a pull request as ready for review using the {% data variables.product.prodname_cli %}. For more information, see "[`gh pr ready`](https://cli.github.com/manual/gh_pr_ready)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、レビューの準備ができたことを示すマークを付けたいプルリクエストクリックします。
3. マージボックスで、[**Ready for review**] をクリックします。 ![[Ready for review] ボタン](/assets/images/help/pull_requests/ready-for-review-button.png)

## プルリクエストをドラフトに変換する

プルリクエストはいつでもドラフトに変換できます。 たとえば、ドラフトではなくプルリクエストを誤ってオープンした場合、または対処の必要があるプルリクエストについてのフィードバックを受け取った場合、プルリクエストをドラフトに変換して、さらなる変更が必要であることを示すことができます。 プルリクエストをレビューの準備完了として再度マークするまで、プルリクエストをマージすることはできません。 プルリクエストの通知をすでにサブスクライブしているユーザは、プルリクエストをドラフトに変換するときにサブスクライブ解除されません。

{% data reusables.repositories.sidebar-pr %}
2. [プルリクエスト] リストで、ドラフトに変換するプルリクエストをクリックします。
3. 右側のサイドバーの [Reviewers] で、[**Convert to draft**] をクリックします。 ![[ドラフトに変換] リンク](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. [**Convert to draft**] をクリックします。 ![ドラフト確認に変換](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

## 参考リンク

- [プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
