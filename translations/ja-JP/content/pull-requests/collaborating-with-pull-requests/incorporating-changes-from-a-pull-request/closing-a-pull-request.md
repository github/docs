---
title: プルリクエストをクローズする
intro: 'You may choose to *close* a pull request without [merging it into the upstream branch](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request). これは、ブランチで提案された変更が必要でなくなったり、他のブランチで別の解決方法が提案されたりした場合に役立ちます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
  - /articles/closing-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/closing-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

{% tip %}

**参考**: 間違ったベースブランチでプルリクエストをオープンした場合は、それをクローズして別のものをオープンする代わりに、ベースブランチを変更することで対処できます。 詳しい情報については、「[プルリクエストのベースブランチを変更する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)」を参照してください。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] リストで、クローズしたいプルリクエストをクリックします。
3. プルリクエストのコメントボックスの下にある [**Close pull request**] をクリックします。 ![[Close Pull Request] ボタン](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. また、代わりに[ブランチを削除](/articles/deleting-unused-branches)することもできます。 こうすることで、リポジトリにあるブランチのリストが整理された状態を保てます。
