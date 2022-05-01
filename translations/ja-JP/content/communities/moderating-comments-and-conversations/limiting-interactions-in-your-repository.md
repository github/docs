---
title: リポジトリでのインタラクションを制限する
intro: パブリックリポジトリ上の特定のユーザに対して、一定期間アクティビティ制限を適用することができます。
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: リポジトリ内でのインタラクションの制限
---

## 一時的なインタラクションの制限について

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 制限期間が過ぎると、ユーザはリポジトリで通常のアクティビティを再開できます。

{% data reusables.community.types-of-interaction-limits %}

You can also enable activity limitations on all repositories owned by your personal account or an organization. ユーザ全体または Organization 全体の制限が有効になっている場合、そのアカウントが所有する個々のリポジトリのアクティビティを制限することはできません。 For more information, see "[Limiting interactions for your personal account](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-user-account)" and "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)."

## リポジトリでのインタラクションを制限する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, select **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} Moderation options**, then click **Interaction limits**.
{% data reusables.community.set-interaction-limit %}
  ![[Temporary interaction limits] のオプション](/assets/images/help/repository/temporary-interaction-limits-options.png)

## 参考リンク
- [悪用あるいはスパムのレポート](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- "[Permission levels for a personal account repository](/articles/permission-levels-for-a-user-account-repository)"
- 「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
- "[Managing moderators in your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
