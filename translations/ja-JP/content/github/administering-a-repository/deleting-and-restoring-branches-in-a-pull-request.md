---
title: プルリクエスト中のブランチの削除と復元
intro: 'リポジトリでの書き込みアクセスがある場合、クローズまたはマージされたプルリクエストに関連付けられているブランチを削除できます。 オープンなプルリクエストに関連付けられているブランチは削除できません。'
redirect_from:
  - /articles/tidying-up-pull-requests/
  - /articles/restoring-branches-in-a-pull-request/
  - /articles/deleting-unused-branches/
  - /articles/deleting-and-restoring-branches-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

### プルリクエストに使用されるブランチを削除する

プルリクエストがマージまたはクローズされていて、ブランチを参照している他のオープンなプルリクエストがない場合は、プルリクエストに関連付けられているブランチを削除できます。 プルリクエストに関連付けられていないブランチをクローズする方法については、「[リポジトリ内でブランチを作成および削除する](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)」をご覧ください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. プルリクエストのリストで、削除対象のブランチに関連付けられているプルリクエストをクリックします。
5. プルリクエストの下の方にある [**Delete branch**] をクリックします。 ![[Delete branch] ボタン](/assets/images/help/pull_requests/delete_branch_button.png)

   現時点でこのブランチにオープンなプルリクエストがある場合、このボタンは表示されません。

### 削除したブランチの復元

クローズされたプルリクエストの head ブランチを復元できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. プルリクエストのリストで、復元対象のブランチに関連付けられているプルリクエストをクリックします。
5. プルリクエストの下の方にある [**Restore branch**] をクリックします。 ![削除されたブランチの復元ボタン](/assets/images/help/branches/branches-restore-deleted.png)

### 参考リンク

- 「[リポジトリ内でのブランチの作成と削除](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)」
- 「[ブランチの自動削除の管理](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)」
