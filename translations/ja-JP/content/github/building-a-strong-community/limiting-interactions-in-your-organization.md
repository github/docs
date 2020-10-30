---
title: Organization での操作を制限する
intro: Organization オーナーは、パブリックリポジトリで特定のユーザがコメントする、Issue をオープンする、あるいはプルリクエストを作成するのを一時的に制限することができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
---

24 時間経過すると、ユーザは Organization のパブリックリポジトリで通常のアクティビティを再開できます。 Organization 全体でアクティビティ制限を有効にした場合、個々のリポジトリに対して操作制限を有効化または無効化することはできません。 リポジトリのアクティビティ制限に関する詳しい情報については、「[リポジトリでのインタラクションを制限する](/articles/limiting-interactions-in-your-repository)」を参照してください。

{% tip %}

**ヒント:** Organization のオーナーは特定の期間だけユーザをブロックすることもできます。 ブロックの期間が過ぎると、自動的にユーザのブロックは解除されます。 詳細は「[Organization からユーザをブロックする](/articles/blocking-a-user-from-your-organization)」を参照してください。

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Organization の [Settings] サイドバーで、[**Interaction limits**] をクリックします。 ![Organization の設定での [Interaction limits] ](/assets/images/help/organizations/org-settings-interaction-limits.png)
5. [Temporary interaction limits] で、次から 1 つ以上のオプションをクリックします。 ![[Temporary interaction limits] のオプション](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)
   - [**Limit to existing users**]: 作成してから 24 時間経過していないアカウントで、以前のコントリビューションがなく、コラボレーターではない Organization ユーザのアクティビティを制限します。
   - [**Limit to prior contributors**]: これまでにコントリビューションがなく、コラボレーターではない Organization ユーザのアクティビティを制限します。
   - **Limit to repository collaborators**: Limits activity for organization users who do not have write access or are not collaborators.

### 参考リンク
- [悪用あるいはスパムのレポート](/articles/reporting-abuse-or-spam)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [ユーザアカウントのリポジトリ権限レベル](/articles/permission-levels-for-a-user-account-repository)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
