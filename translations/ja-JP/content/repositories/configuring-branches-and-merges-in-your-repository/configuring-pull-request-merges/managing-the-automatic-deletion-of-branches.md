---
title: ブランチの自動的削除を管理する
intro: プルリクエストがリポジトリにマージされた後、head ブランチを自動的に削除することができます。
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
---

リポジトリに対する管理者権限があるユーザなら誰でも、ブランチの自動的削除を有効化または無効化できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Merge button"{% endif %}, select or unselect **Automatically delete head branches**. ![ブランチの自動的削除を有効化または無効化するチェックボックス](/assets/images/help/repository/automatically-delete-branches.png)

## 参考リンク
- [プルリクエストのマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
- [リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)
