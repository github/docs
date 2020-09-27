---
title: 重複したIssueやプルリクエストについて
intro: 同様のIssueやプルリクエストをまとめて追跡し、メンテナーとコラボレーターの双方から不要な負担を取り除くために、Issueやプルリクエストを重複としてマークしてください。
redirect_from:
  - /articles/about-duplicate-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

"marked as duplicate (重複としてマークされた)" タイムラインイベントが表示されるには、重複した参照コメントを作成したユーザが、コメントを作成したリポジトリに書き込みアクセス権を持っていなければなりません。

### 重複のマーク付け

Issueあるいはプルリクエストに重複としてマーク付けをするには、新たなコメントの本文に"Duplicate of"に続けて重複のIssueあるいはプルリクエストの番号を入力してください。 GitHubが提供する"Duplicate issue"あるいは"Duplicate pull request"の返信テンプレートを使ってIssueあるいはプルリクエストを重複としてマーク付けすることもできます。 詳しい情報については[返信テンプレートについて](/articles/about-saved-replies)を参照してください。

![重複のIssueの構文](/assets/images/help/issues/duplicate-issue-syntax.png)

### 重複のマーク解除

タイムラインで **[Undo]** をクリックすれば、Issue やプルリクエストの重複のマークを外せます。 こうすると、その Issue あるいはプルリクエストのマークが外されたことを示す新しいタイムラインのイベントが追加されます。

![Issueの重複マークの解除ボタン](/assets/images/help/issues/unmark-duplicate-issue-button.png)
