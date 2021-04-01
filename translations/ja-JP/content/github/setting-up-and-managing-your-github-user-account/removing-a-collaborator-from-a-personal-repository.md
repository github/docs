---
title: 個人リポジトリからコラボレーターを削除する
intro: 'コラボレータをプロジェクトから削除すると、そのコラボレータはリポジトリに対する読み取り/書き込みアクセスを失います。 リポジトリがプライベートであり、その個人がフォークを作成している場合、そのフォークも削除されます。'
redirect_from:
  - /articles/how-do-i-remove-a-collaborator/
  - /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository/
  - /articles/removing-a-collaborator-from-a-private-repository/
  - /articles/deleting-a-private-fork-of-a-private-user-repository/
  - /articles/how-do-i-delete-a-fork-of-my-private-repository/
  - /articles/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - アカウント
  - repositories
---

### プライベートリポジトリのフォークを削除する

コラボレーターが削除される一方でプライベートリポジトリのフォークが削除されると、その個人はリポジトリのローカルクローンをそのまま保持します。

### リポジトリへのコントリビューションがある個人からコラボレーター権限を削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
4. 削除するコラボレータの右側にある次をクリックします。
{% octicon "trashcan" aria-label="The trashcan icon" %}.
  ![コラボレーターを削除するボタン](/assets/images/help/repository/collaborator-remove.png)
{% else %}
3. 左のサイドバーで、[**Collaborators & teams**] をクリックします。 ![[Collaborators] タブ](/assets/images/help/repository/repo-settings-collaborators.png)
4. 削除するコラボレーターの横にある [**X**] アイコンをクリックします。 ![削除リンク](/assets/images/help/organizations/Collaborator-Remove.png)
{% endif %}

### 参考リンク

- 「[チームから Organization メンバーを削除する](/articles/removing-organization-members-from-a-team)」
- [外部のコラボレータを Organization のリポジトリから削除する](/articles/removing-an-outside-collaborator-from-an-organization-repository)
