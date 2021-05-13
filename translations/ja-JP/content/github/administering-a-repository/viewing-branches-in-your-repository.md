---
title: リポジトリ内のブランチを表示する
intro: 'ブランチは、{% data variables.product.product_name %} のコラボレーションの中心となるものです。それらを表示する最も良い方法はブランチページです。'
redirect_from:
  - /articles/viewing-branches-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
3. ページ上部のナビゲーションを使用して、特定のブランチのリストを表示します:
    - **Your branches**: プッシュアクセスできるリポジトリでは、[**Yours**] ビューに、プッシュしたすべてのブランチが、最新のブランチから順に表示されます。
    - **Active branches**: [**Active**] ビューには、過去 3 か月以内に誰かがコミットしたすべてのブランチが、最新のコミットがあるブランチから順に表示されます。
    - **Stale branches**: [**Stale**] ビューには、過去 3 か月間に誰もコミットしていないブランチが、最も古いコミットがあるブランチから順にすべて表示されます。 このリストを使用して、[どのブランチを削除するか](/articles/creating-and-deleting-branches-within-your-repository)を決定します。
    - **All branches**: [**All**] ビューには、デフォルトブランチが表示され、続いて最新のコミットがあるブランチから順に他のすべてのブランチが表示されます。

4. Optionally, use the search field on the top right. It provides a simple, case-insensitive, sub-string search on the branch name. It does not support any additional query syntax.

![Atom リポジトリのブランチページ](/assets/images/help/branches/branches-overview-atom.png)

### 参考リンク

- [リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)
- [使われていないブランチの削除](/articles/deleting-unused-branches)
