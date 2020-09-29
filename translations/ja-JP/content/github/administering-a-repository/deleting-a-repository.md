---
title: リポジトリの削除
intro: Organization のオーナーである場合、あるいはリポジトリまたはフォークに対する管理者権限がある場合、任意のリポジトリまたはフォークを削除できます。 フォークしたリポジトリを削除しても、上流のリポジトリは削除されません。
redirect_from:
  - /delete-a-repo/
  - /deleting-a-repo/
  - /articles/deleting-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.owners-and-admins-can %}Organization のリポジトリを削除できます。 [**Allow members to delete or transfer repositories for this organization**] が無効化されていると、Organization のオーナーだけが Organization のリポジトリを削除できます。 {% data reusables.organizations.new-repo-permissions-more-info %}

{% if currentVersion == "free-pro-team@latest" %}
{% warning %}

**警告**: リポジトリを削除すると、リリース添付ファイルとチーム権限が**完全に**削除されます。 このアクションは取り消すことが**できません**。

{% endwarning %}
{% endif %}

次の点もご注意ください:
- プライベートリポジトリを削除すると、そのフォークもすべて削除されます。
- パブリックリポジトリを削除しても、そのフォークは削除されません。

{% if currentVersion == "free-pro-team@latest" %}
削除したリポジトリは、90 日以内であれば復元できます。 詳しい情報については、「[削除されたリポジトリを復元する](/articles/restoring-a-deleted-repository)」を参照してください。
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. [Danger Zone] の [**Delete this repository**] をクリックします。 ![リポジトリの削除ボタン](/assets/images/help/repository/repo-delete.png)
3. **警告を読みます**。
4. 削除しようとしているリポジトリに間違いがないことを確認するために、削除対象のリポジトリ名を入力します。 ![削除ラベル](/assets/images/help/repository/repo-delete-confirmation.png)
5. [**I understand the consequences, delete this repository**] をクリックします。
