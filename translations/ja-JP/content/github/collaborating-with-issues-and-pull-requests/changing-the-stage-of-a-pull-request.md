---
title: プルリクエストのステージの変更
intro: 'ドラフトのプルリクエストをレビューの準備完了 {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} としてマークするか、プルリクエストをドラフトに変換することができます{% endif %}。'
permissions: リポジトリへの書き込み権限を持つユーザとプルリクエストの作者は、プルリクエストのステージを変更できます。
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /articles/changing-the-stage-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### プルリクエストをレビュー準備完了としてマークする

{% data reusables.pull_requests.mark-ready-review %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、レビューの準備ができたことを示すマークを付けたいプルリクエストクリックします。
3. マージボックスで、[**Ready for review**] をクリックします。 ![[Ready for review] ボタン](/assets/images/help/pull_requests/ready-for-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

### プルリクエストをドラフトに変換する

プルリクエストはいつでもドラフトに変換できます。 たとえば、ドラフトではなくプルリクエストを誤ってオープンした場合、または対処の必要があるプルリクエストについてのフィードバックを受け取った場合、プルリクエストをドラフトに変換して、さらなる変更が必要であることを示すことができます。 プルリクエストをレビューの準備完了として再度マークするまで、プルリクエストをマージすることはできません。 プルリクエストの通知をすでにサブスクライブしているユーザは、プルリクエストをドラフトに変換するときにサブスクライブ解除されません。

{% data reusables.repositories.sidebar-pr %}
2. [プルリクエスト] リストで、ドラフトに変換するプルリクエストをクリックします。
3. 右側のサイドバーの [Reviewers] で、[**Convert to draft**] をクリックします。 ![[ドラフトに変換] リンク](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. [**Convert to draft**] をクリックします。 ![ドラフト確認に変換](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

### 参考リンク

- [プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
