---
title: 混乱を生むコメントを管理する
intro: 'You can {% if currentVersion == "free-pro-team@latest" %}hide, edit,{% else %}edit{% endif %} or delete comments on issues, pull requests, and commits.'
redirect_from:
  - /articles/editing-a-comment/
  - /articles/deleting-a-comment/
  - /articles/managing-disruptive-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### コメントを非表示にする

リポジトリに対する書き込み権限があるユーザは、Issue、プルリクエスト、 およびコミットに対するコメントを非表示にすることができます。

1 つのディスカッションに集中し、プルリクエストのナビゲーションとレビューがしやすいように、トピックから外れている、古い、または解決済みのコメントは非表示にすることができます。 非表示のコメントは最小化されますが、リポジトリに対する読み取りアクセスがあるユーザは展開することができます。

![最小化されたコメント](/assets/images/help/repository/hidden-comment.png)

1. 非表示にするコメントに移動します。
2. コメントの右上隅にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックしてから、[**Hide**] をクリックします。 ![編集、非表示、削除のオプションが表示されている水平の kebab アイコンとコメント モデレーション メニュー](/assets/images/help/repository/comment-menu.png)
3. [Choose a reason] ドロップダウン メニューで、コメントを非表示にする理由をクリックします。 次に、[**Hide comment**] をクリックします。
  {% if currentVersion == "free-pro-team@latest" %}
  ![[Choose reason for hiding comment] ドロップダウンメニュー](/assets/images/help/repository/choose-reason-for-hiding-comment.png)
  {% else %}
  ![[Choose reason for hiding comment] ドロップダウンメニュー](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png)
  {% endif %}

### コメントを再表示する

リポジトリに対する書き込み権限があるユーザは、Issue、プルリクエスト、 およびコミットに対するコメントを再表示することができます。

1. 再表示するコメントに移動します。
2. コメントの右上隅にある [**{% octicon "fold" aria-label="The fold icon" %}Show comment**] をクリックします。 ![コメント テキストの表示](/assets/images/help/repository/hidden-comment-show.png)
3. 展開したコメントの右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}をクリックしてから、[**Unhide**] をクリックします。 ![編集、再表示、削除のオプションが表示されている水平の kebab アイコンとコメント モデレーションメニュー](/assets/images/help/repository/comment-menu-hidden.png)

### コメントを編集する

リポジトリに対する書き込み権限があるユーザは、Issue、プルリクエスト、およびコミットに対するコメントを編集することができます。

It's appropriate to edit a comment and remove content that doesn't contribute to the conversation and violates your community's code of conduct{% if currentVersion == "free-pro-team@latest" %} or GitHub's [Community Guidelines](/articles/github-community-guidelines){% endif %}.

コメントを編集する際には、削除した内容があった元の場所がわかるように記録し、オプションで削除の理由を示します。

リポジトリの読み取りアクセスがあれば、誰でもコミットの編集履歴を見ることができます。 コメントの上部にある [**edited**] ドロップダウンには編集履歴があり、編集したユーザとタイムスタンプが表示されます。

![内容を削除編集したというメモを追加したコメント](/assets/images/help/repository/content-redacted-comment.png)

コメントの作者とリポジトリの書き込みアクセスがあるユーザは、コメントの編集履歴から機密情報を削除できます。 詳しい情報については、「[コメントの変更を追跡する](/github/building-a-strong-community/tracking-changes-in-a-comment)」を参照してください。

1. 編集したいコメントに移動します。
2. コメントの右上隅にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、次に [**Edit**] をクリックします。 ![編集、非表示、削除、レポートのオプションが表示されている水平の kebab アイコンとコメント モデレーション メニュー](/assets/images/help/repository/comment-menu.png)
3. コメント ウィンドウで、問題のある部分を削除し、その場所に `[REDACTED]` と入力します。 ![内容を削除したコメント ウィンドウ](/assets/images/help/issues/redacted-content-comment.png)
4. コメントの下部に、コメントを編集したことを示すメモを入力し、オプションで編集した理由も入力します。 ![内容を削除したというメモを追加したコメント ウィンドウ](/assets/images/help/issues/note-content-redacted-comment.png)
5. [**Update comment**] をクリックします。

### コメントを削除する

リポジトリに対する書き込み権限があるユーザは、Issue、プルリクエスト、 およびコミットに対するコメントを削除することができます。 Organization オーナー、チームメンテナ、コメント作成者は、チームのページのコメントを削除することもできます。

コメントの削除は、モデレーターとしての最終手段です。 It's appropriate to delete a comment if the entire comment adds no constructive content to a conversation and violates your community's code of conduct{% if currentVersion == "free-pro-team@latest" %} or GitHub's [Community Guidelines](/articles/github-community-guidelines){% endif %}.

コメントを削除すると、リポジトリに対する読み取りアクセスを持つユーザなら誰でも見ることのできるタイムラインイベントが作成されます。 ただし、コメントを削除したユーザの名前は、リポジトリへの書き込みアクセスを持つユーザにしか見えません。 書き込みアクセスを持たないユーザから見ると、タイムラインイベントは匿名化されています。

![削除したコメントについて匿名化されたタイムラインイベント](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

Issue やプルリクエストで、会話に役立つ建設的な内容が部分的に含まれているコメントは、削除せず編集してください。

{% note %}

**メモ:** Issue またはプルリクエストの最初のコメント (本文) は削除できません。 かわりに、Issue やプルリクエストの本文を編集して、不要な内容を削除してください。

{% endnote %}

1. 削除したいコメントに移動します。
2. コメントの右上隅にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックしてから、[**Delete**] をクリックします。 ![編集、非表示、削除、レポートのオプションが表示されている水平の kebab アイコンとコメント モデレーション メニュー](/assets/images/help/repository/comment-menu.png)
3. オプションで、コメントを削除したことを示すコメントとその理由を入力します。
