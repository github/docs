---
title: Issue またはPull Requestを重複としてマークする。
intro: 同様のIssueやPull Requestをまとめて追跡し、メンテナーとコラボレーターの双方から不要な負担を取り除くために、IssueやPull Requestを重複としてマークしてください。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-duplicate-issues-and-pull-requests
  - /articles/about-duplicate-issues-and-pull-requests
  - /github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests
  - /issues/tracking-your-work-with-issues/managing-issues/marking-issues-or-pull-requests-as-a-duplicate
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

"marked as duplicate (重複としてマークされた)" タイムラインイベントが表示されるには、重複した参照コメントを作成したユーザが、コメントを作成したリポジトリに書き込みアクセス権を持っていなければなりません。

## 重複のマーク付け

IssueあるいはPull Requestに重複としてマーク付けをするには、新たなコメントの本文に"Duplicate of"に続けて重複のIssueあるいはPull Requestの番号を入力してください。 GitHubが提供する"Duplicate issue"あるいは"Duplicate pull request"の返信テンプレートを使ってIssueあるいはPull Requestを重複としてマーク付けすることもできます。 詳しい情報については[返信テンプレートについて](/articles/about-saved-replies)を参照してください。

![重複のIssueの構文](/assets/images/help/issues/duplicate-issue-syntax.png)

## 重複のマーク解除

タイムラインで **[Undo]** をクリックすれば、Issue やPull Requestの重複のマークを外せます。 こうすると、その Issue あるいはPull Requestのマークが外されたことを示す新しいタイムラインのイベントが追加されます。

![Issueの重複マークの解除ボタン](/assets/images/help/issues/unmark-duplicate-issue-button.png)
