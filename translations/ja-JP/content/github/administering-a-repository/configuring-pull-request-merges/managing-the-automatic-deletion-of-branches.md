---
title: ブランチの自動的削除を管理する
intro: プルリクエストがリポジトリにマージされた後、head ブランチを自動的に削除することができます。
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
リポジトリに対する管理者権限があるユーザなら誰でも、ブランチの自動的削除を有効化または無効化できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Merge button] の下で [**Automatically delete head branches**] を選択または選択解除します。 ![ブランチの自動的削除を有効化または無効化するチェックボックス](/assets/images/help/repository/automatically-delete-branches.png)

### 参考リンク
- [プルリクエストのマージ](/articles/merging-a-pull-request)
- [リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)
