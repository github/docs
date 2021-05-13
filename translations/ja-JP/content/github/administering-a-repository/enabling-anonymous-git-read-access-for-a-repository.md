---
title: リポジトリに対する匿名 Git 読み取りアクセスを有効化する
intro: リポジトリの管理者として、特定の要件を満たす公開リポジトリの匿名 Git 読み取りアクセスを有効または無効にできます。
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
versions:
  enterprise-server: '*'
---

次の場合に、リポジトリの管理者は、特定のリポジトリに対する匿名 Git 読み取りアクセスの設定を変更できます。
- サイトの管理者がプライベートモードと匿名 Git 読み取りアクセスを有効化している。
- The repository is public on the enterprise and is not a fork.
- サイト管理者がリポジトリで匿名 Git 読み取りアクセスを無効化していない。

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 「Enable anonymous Git read access」の横で、[**Enable**] をクリックします。 !["Anonymous Git read access" の下の "Enabled" ボタン](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. 変更を確認します。 リポジトリの名前を入力し、[**I understand, enable anonymous Git read access.**] をクリックして確定します。
