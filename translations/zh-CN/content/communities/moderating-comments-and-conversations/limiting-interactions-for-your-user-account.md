---
title: 限制用户帐户的交互
intro: 您可以在用户帐户拥有的所有公共仓库中对某些用户临时限制活动一段时间。
versions:
  fpt: '*'
  ghec: '*'
permissions: Anyone can limit interactions for their own user account.
redirect_from:
  - /github/building-a-strong-community/limiting-interactions-for-your-user-account
topics:
  - Community
shortTitle: 限制帐户中的交互
---

## 关于临时交互限制

限制用户帐户的交互可对用户帐户拥有的所有公共仓库启用临时交互限制。 {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 在限制期过后，用户可以在您的公共仓库中恢复正常活动。

{% data reusables.community.types-of-interaction-limits %}

启用用户范围的活动限制时，无法对单个仓库启用或禁用交互限制。 有关限制单个仓库活动的更多信息，请参阅“[限制仓库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”。

您还可以阻止用户。 更多信息请参阅“[阻止用户访问个人帐户](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)”。

## 限制用户帐户的交互

{% data reusables.user-settings.access_settings %}
1. 在侧边栏的“Access（访问）”部分中，选择 **{% octicon "report" aria-label="The report icon" %} 主持**，然后点击 **Interaction limits（互动限制）**。
{% data reusables.community.set-interaction-limit %}
  ![临时交互限制选项](/assets/images/help/settings/user-account-temporary-interaction-limits-options.png)
