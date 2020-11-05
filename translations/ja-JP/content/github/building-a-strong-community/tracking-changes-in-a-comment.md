---
title: コメントの変更を追跡する
intro: コメントの編集履歴を表示したり、コメントの編集履歴から機密情報を削除したりすることができます。
redirect_from:
  - /articles/tracking-changes-in-a-comment
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### コメントの編集履歴の詳細を表示する

リポジトリの読み取りアクセスがあれば、誰でもコミットの編集履歴を見ることができます。

1. 編集履歴を表示したいコメントに移動します。
{% data reusables.repositories.edited-comment-list %}

### コメントの履歴から機密情報を削除します。

コメントの作者とリポジトリの書き込みアクセスがあるユーザは、コメントの編集履歴から機密情報を削除することもできます。

コメントの編集履歴から機密情報を削除した場合、その編集を行った人および編集が行われた時間はコメント履歴で引き続き表示されますが、編集内容は表示されなくなります。

1. 編集履歴から、機密情報を削除したいコメントに移動します。
{% data reusables.repositories.edited-comment-list %}
3. 編集履歴ウインドウの右上で [**Options**] をクリックします。 次に、追加されたコンテンツを表示する diff を削除するために [**Delete revision from history**] をクリックします。 ![コメントの編集履歴の詳細を削除](/assets/images/help/repository/delete-comment-edit-details.png)
4. 削除を確定するには、[**OK**] をクリックします。

### 参考リンク

{% if currentVersion == "free-pro-team@latest" %}- "[Reporting abuse or spam](/articles/reporting-abuse-or-spam)"{% endif %}
- 「[コメントを編集する](/articles/editing-a-comment)」
