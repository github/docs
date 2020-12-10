---
title: プルリクエストをクローズする
intro: 'プルリクエストを[上流ブランチにマージ](/articles/merging-a-pull-request) せずに*クローズ*できます。 これは、ブランチで提案された変更が必要でなくなったり、他のブランチで別の解決方法が提案されたりした場合に役立ちます。'
redirect_from:
  - /articles/closing-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**参考**: 間違ったベースブランチでプルリクエストをオープンした場合は、それをクローズして別のものをオープンする代わりに、ベースブランチを変更することで対処できます。 詳しい情報については、「[プルリクエストのベースブランチを変更する](/articles/changing-the-base-branch-of-a-pull-request)」を参照してください。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] リストで、クローズしたいプルリクエストをクリックします。
3. プルリクエストのコメントボックスの下にある [**Close pull request**] をクリックします。 ![[Close Pull Request] ボタン](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. また、代わりに[ブランチを削除](/articles/deleting-unused-branches)することもできます。 こうすることで、リポジトリにあるブランチのリストが整理された状態を保てます。
