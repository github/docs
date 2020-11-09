---
title: ファイルの変更を追跡する
intro: ファイルの行に対する変更を追跡し、時間の経過とともにファイルの各部分がどのように変化したのかを追跡できます。
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file/
  - /articles/tracing-changes-in-a-file/
  - /articles/tracking-changes-in-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Blame ビューでは、{% octicon "versions" aria-label="The prior blame icon" %} をクリックすることで、ファイル全体の行ごとのリビジョン履歴やファイル内の 1 つの行のリビジョン履歴を表示することができます。 {% octicon "versions" aria-label="The prior blame icon" %} をクリックするたびに、変更をコミットした者と時間を含む、その行の過去のリビジョン情報が表示されます。

![Git blame ビュー](/assets/images/help/repository/git_blame.png)

ファイルやプルリクエストでは、{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} メニューを使って、選択した行や行の範囲の Git blame を表示することもできます。

![選択した行の Git blame を表示するオプションのあるケバブメニュー](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**ヒント:** コマンドライン上で、ファイル内の行のリビジョン履歴を表示するために `git blame` を使うこともできます。 詳細は [Git の `git blame` のドキュメンテーション](https://git-scm.com/docs/git-blame)を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. クリックして、表示したい行の履歴のファイルを開きます。
3. ファイルビューの右上隅で [**Blame**] をクリックして blame ビューを開きます。 ![[Blame] ボタン](/assets/images/help/repository/blame-button.png)
4. 特定の行の過去のリビジョンを表示するには、見てみたい変更が見つかるまで {% octicon "versions" aria-label="The prior blame icon" %} をクリックします。 ![さらに前の状態に遡るボタン](/assets/images/help/repository/prior-blame-button.png)
