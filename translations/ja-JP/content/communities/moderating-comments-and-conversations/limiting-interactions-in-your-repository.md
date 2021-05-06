---
title: リポジトリでのインタラクションを制限する
intro: パブリックリポジトリ上の特定のユーザに対して、一定期間アクティビティ制限を適用することができます。
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
permissions: People with admin permissions to a repository can temporarily limit interactions in that repository.
topics:
  - Community
---

### 一時的なインタラクションの制限について

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 制限期間が過ぎると、ユーザはリポジトリで通常のアクティビティを再開できます。

{% data reusables.community.types-of-interaction-limits %}

ユーザアカウントまたは Organization が所有するすべてのリポジトリでアクティビティ制限を有効にすることもできます。 ユーザ全体または Organization 全体の制限が有効になっている場合、アカウントが所有する個々のリポジトリのアクティビティを制限することはできません。 詳しい情報については、「[ユーザアカウントのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-user-account)」と「[Organization 内のインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)」を参照してください。

### リポジトリでのインタラクションを制限する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 左サイドバーで [**Moderation settings**] をクリックします。 ![[Repository settings] サイトバーの [Moderation settings]](/assets/images/help/repository/repo-settings-moderation-settings.png)
1. [Moderation settings] で、[**Interaction limits**] をクリックします。 ![リポジトリの設定での [Interaction limits] ](/assets/images/help/repository/repo-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![[Temporary interaction limits] のオプション](/assets/images/help/repository/temporary-interaction-limits-options.png)

### 参考リンク
- [悪用あるいはスパムのレポート](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [ユーザアカウントのリポジトリ権限レベル](/articles/permission-levels-for-a-user-account-repository)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
