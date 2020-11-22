---
title: Organization での操作を制限する
intro: 'You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your organization.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
permissions: Organization owners can limit interactions in an organization.
---

### About temporary interaction limits

Limiting interactions in your organization enables temporary interaction limits for all public repositories owned by the organization. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your organization's public repositories.

{% data reusables.community.types-of-interaction-limits %}

Members of the organization are not affected by any of the limit types.

Organization 全体でアクティビティ制限を有効にした場合、個々のリポジトリに対して操作制限を有効化または無効化することはできません。 For more information on limiting activity for an individual repository, see "[Limiting interactions in your repository](/articles/limiting-interactions-in-your-repository)."

Organization owners can also block users for a specific amount of time. ブロックの期間が過ぎると、自動的にユーザのブロックは解除されます。 詳細は「[Organization からユーザをブロックする](/articles/blocking-a-user-from-your-organization)」を参照してください。

### Organization での操作を制限する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. In the organization settings sidebar, click **Moderation settings**. !["Moderation settings" in the organization settings sidebar](/assets/images/help/organizations/org-settings-moderation-settings.png)
1. Under "Moderation settings", click **Interaction limits**. !["Interaction limits" in the organization settings sidebar](/assets/images/help/organizations/org-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![[Temporary interaction limits] のオプション](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

### 参考リンク
- [悪用あるいはスパムのレポート](/articles/reporting-abuse-or-spam)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [ユーザアカウントのリポジトリ権限レベル](/articles/permission-levels-for-a-user-account-repository)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
