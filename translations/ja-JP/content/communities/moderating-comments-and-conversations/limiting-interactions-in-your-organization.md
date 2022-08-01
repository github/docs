---
title: Organization での操作を制限する
intro: Organization が所有するすべてのパブリックリポジトリ内の特定のユーザに対して、一定期間アクティビティ制限を適用することができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Organization 内でのインタラクションの制限
---

## 一時的なインタラクションの制限について

Organization 内のインタラクションを制限すると、Organization が所有するすべてのパブリックリポジトリに対して一時的なインタラクション制限が有効になります。 {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 制限期間が過ぎると、Organization はパブリックリポジトリで通常のアクティビティを再開できます。

{% data reusables.community.types-of-interaction-limits %}

Organization のメンバーは、いずれの制限タイプの影響も受けません。

Organization 全体でアクティビティ制限を有効にした場合、個々のリポジトリに対して操作制限を有効化または無効化することはできません。 個々のリポジトリのアクティビティ制限方法について詳しくは、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。

Organization owners and moderators can also block users for a specific amount of time. ブロックの期間が過ぎると、自動的にユーザのブロックは解除されます。 詳細は「[Organization からユーザをブロックする](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」を参照してください。

## Organization での操作を制限する


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. _For organization owners:_ In the "Access" section of the sidebar, select **{% octicon "report" aria-label="The report icon" %} Moderation**, then click **Interaction limits**.

   _For organization moderators:_ In the sidebar, click **Interaction limits**.

{% data reusables.community.set-interaction-limit %}
  ![[Temporary interaction limits] のオプション](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## 参考リンク
- [悪用あるいはスパムのレポート](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- "[Permission levels for a personal account repository](/articles/permission-levels-for-a-user-account-repository)"
- 「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
- "[Managing moderators in your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
