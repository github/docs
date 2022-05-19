---
title: ユーザアカウントの操作を制限する
intro: You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your personal account.
versions:
  fpt: '*'
  ghec: '*'
permissions: Anyone can limit interactions for their own personal account.
redirect_from:
  - /github/building-a-strong-community/limiting-interactions-for-your-user-account
topics:
  - Community
shortTitle: アカウントのインタラクションの制限
---

## 一時的なインタラクションの制限について

Limiting interactions for your personal account enables temporary interaction limits for all public repositories owned by your personal account. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 制限期間が過ぎると、ユーザはパブリックリポジトリで通常のアクティビティを再開できます。

{% data reusables.community.types-of-interaction-limits %}

ユーザ全体でアクティビティ制限を有効にした場合、個々のリポジトリに対して操作制限を有効化または無効化することはできません。 個々のリポジトリのアクティビティ制限方法について詳しくは、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。

ユーザをブロックすることもできます 詳しい情報については、「[個人アカウントでユーザをブロックする](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)」を参照してください。

## Limiting interactions for your personal account

{% data reusables.user-settings.access_settings %}
1. In the "Access" section of the sidebar, select **{% octicon "report" aria-label="The report icon" %} Moderation** then click **Interaction limits**.
{% data reusables.community.set-interaction-limit %}
  ![[Temporary interaction limits] のオプション](/assets/images/help/settings/user-account-temporary-interaction-limits-options.png)
