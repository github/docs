---
title: リポジトリの削除
intro: Organization のオーナーである場合、あるいはリポジトリまたはフォークに対する管理者権限がある場合、任意のリポジトリまたはフォークを削除できます。 フォークしたリポジトリを削除しても、上流のリポジトリは削除されません。
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% data reusables.organizations.owners-and-admins-can %}Organization のリポジトリを削除できます。 [**Allow members to delete or transfer repositories for this organization**] が無効化されていると、Organization のオーナーだけが Organization のリポジトリを削除できます。 {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}パブリックリポジトリを削除しても、リポジトリのフォークは削除されません。{% endif %}

{% warning %}

**警告**:

- リポジトリを削除すると、リリースの添付ファイルと Team の権限が**完全に**削除されます。 このアクションは取り消すことが**できません**。
- Deleting a private{% ifversion ghes or ghec or ghae %} or internal{% endif %} repository will delete all forks of the repository.

{% endwarning %}

Some deleted repositories can be restored within 90 days of deletion. {% ifversion ghes or ghae %}Your site administrator may be able to restore a deleted repository for you. 詳しい情報については、「[削除されたリポジトリを復元する](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)」を参照してください。 {% else %}For more information, see "[Restoring a deleted repository](/articles/restoring-a-deleted-repository)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. [Danger Zone] の [**Delete this repository**] をクリックします。 ![リポジトリの削除ボタン](/assets/images/help/repository/repo-delete.png)
3. **警告を読みます**。
4. 削除しようとしているリポジトリに間違いがないことを確認するために、削除対象のリポジトリ名を入力します。 ![削除ラベル](/assets/images/help/repository/repo-delete-confirmation.png)
5. [**I understand the consequences, delete this repository**] をクリックします。
