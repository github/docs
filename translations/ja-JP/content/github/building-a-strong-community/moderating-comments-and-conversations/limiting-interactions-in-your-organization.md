---
title: Organization での操作を制限する
intro: Organization が所有するすべてのパブリックリポジトリ内の特定のユーザに対して、一定期間アクティビティ制限を適用することができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
permissions: Organization のオーナーは、Organization 内のインタラクションを制限できます。
topics:
  - コミュニティ
---
### 一時的なインタラクションの制限について

Organization 内のインタラクションを制限すると、Organization が所有するすべてのパブリックリポジトリに対して一時的なインタラクション制限が有効になります。 {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 制限期間が過ぎると、Organization はパブリックリポジトリで通常のアクティビティを再開できます。

{% data reusables.community.types-of-interaction-limits %}

Organization のメンバーは、いずれの制限タイプの影響も受けません。

Organization 全体でアクティビティ制限を有効にした場合、個々のリポジトリに対して操作制限を有効化または無効化することはできません。 個々のリポジトリのアクティビティ制限方法について詳しくは、「[リポジトリでのインタラクションを制限する](/articles/limiting-interactions-in-your-repository)」を参照してください。

Organization のオーナーは、特定の期間だけユーザをブロックすることもできます。 ブロックの期間が過ぎると、自動的にユーザのブロックは解除されます。 詳細は「[Organization からユーザをブロックする](/articles/blocking-a-user-from-your-organization)」を参照してください。

### Organization での操作を制限する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. [organization settings] サイトバーで、[**Moderation settings**] をクリックします。 ![[organization settings] サイトバーの [Moderation settings]](/assets/images/help/organizations/org-settings-moderation-settings.png)
1. [Moderation settings] で、[**Interaction limits**] をクリックします。 ![[organization settings] サイトバーの [Interaction limits] タブ](/assets/images/help/organizations/org-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![[Temporary interaction limits] のオプション](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

### 参考リンク
- [悪用あるいはスパムのレポート](/articles/reporting-abuse-or-spam)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [ユーザアカウントのリポジトリ権限レベル](/articles/permission-levels-for-a-user-account-repository)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
