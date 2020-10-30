---
title: リポジトリでのインタラクションを制限する
intro: 'オーナーまたは管理者のアクセス権を持つユーザは、あなたのパブリックリポジトリで特定のユーザがコメントする、Issue をオープンする、あるいはプルリクエストを作成するのを一時的に制限し、一定の期間、アクティビティ制限を適用することができます。'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
---

24 時間経過すると、ユーザはあなたのリポジトリで通常のアクティビティを再開できます。

{% tip %}

**ヒント:** Organization のオーナーは Organization 全体のアクティビティ制限を有効化できます。 Organization 全体のアクティビティ制限が有効な場合、個々のリポジトリについてアクティビティを制限することはできません。 詳細は「[Organization での操作を制限する](/articles/limiting-interactions-in-your-organization)」を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. リポジトリの [Settings] サイドバーで、[**Interaction limits**] をクリックします。 ![リポジトリの設定での [Interaction limits] ](/assets/images/help/repository/repo-settings-interaction-limits.png)
4. [Temporary interaction limits] で、次から 1 つ以上のオプションをクリックします。 ![[Temporary interaction limits] のオプション](/assets/images/help/repository/temporary-interaction-limits-options.png)
    - [**Limit to existing users**]: 作成してから 24 時間経過していないアカウントで、以前のコントリビューションがなく、コラボレーターではないユーザのアクティビティを制限します。
    - [**Limit to prior contributors**]: これまでにコントリビューションがなく、コラボレーターではないユーザのアクティビティを制限します。
    - **Limit to repository collaborators**: Limits activity for users who do not have write access or are not collaborators.

### 参考リンク
- [悪用あるいはスパムのレポート](/articles/reporting-abuse-or-spam)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [ユーザアカウントのリポジトリ権限レベル](/articles/permission-levels-for-a-user-account-repository)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
